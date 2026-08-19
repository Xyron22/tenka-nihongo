(()=>{
'use strict';
if(!window.TENKA_CORE)return;

const core=window.TENKA_CORE;
const originalRestart=window.restartQuiz;
const originalStartDaily=window.startDaily;
const originalRateCard=window.rateCard;
const originalGo=window.go;
const originalSetSetting=window.setSetting;
const originalAnswerQuiz=window.answerQuiz;
const hapticSupported=typeof navigator!=='undefined'&&typeof navigator.vibrate==='function';

function totalDue(){
  return ['N5','N4','N3','N2','N1'].reduce((n,l)=>n+core.dueCards(l).length,0)+core.dueCards('KAIGO').length;
}

function persistUnsupportedHaptic(){
  if(hapticSupported||!core.state||!core.state.settings)return;
  core.state.settings.haptic=false;
  try{
    const raw=localStorage.getItem('tenka-settings');
    const saved=raw?JSON.parse(raw):{};
    saved.haptic=false;
    localStorage.setItem('tenka-settings',JSON.stringify(saved));
  }catch{}
}

function syncPrimaryCta(){
  const state=core&&core.state;
  if(!state||!document||!document.querySelector)return;
  const due=totalDue();
  if(state.view==='home'){
    const button=document.querySelector('.hero .action.primary');
    if(button)button.textContent=due?`🧠 Review ${due} kartu →`:'始めよう！';
  }
  if(state.view==='daily'){
    const button=document.querySelector('.action.primary');
    if(button)button.textContent=due?`🧠 Review ${due} kartu →`:'Mulai N5 5 menit →';
  }
}

function syncHapticSetting(){
  const state=core&&core.state;
  if(!state||state.view!=='settings'||!document||!document.querySelectorAll)return;
  const rows=[...document.querySelectorAll('.toggle')];
  const row=rows.find(el=>(el.textContent||'').includes('Haptic'));
  if(!row)return;
  const sub=row.querySelector&&row.querySelector('.subtle');
  const input=row.querySelector&&row.querySelector('input[type="checkbox"]');
  if(sub)sub.textContent=hapticSupported?'Didukung browser ini':'Tidak didukung Safari/iPhone untuk web app';
  if(input&&!hapticSupported){input.checked=false;input.disabled=true;input.setAttribute('aria-disabled','true');}
}

function syncUi(){syncPrimaryCta();syncHapticSetting();}

window.go=function(v){
  const result=originalGo.apply(this,arguments);
  setTimeout(syncUi,0);
  return result;
};

window.startDaily=function(){
  const state=core&&core.state;
  if(state&&state.view==='home'){
    if(totalDue()>0)return originalStartDaily.apply(this,arguments);
    return window.go('daily');
  }
  return originalStartDaily.apply(this,arguments);
};

window.rateCard=function(rating){
  const state=core&&core.state;
  if(!state)return originalRateCard.apply(this,arguments);

  // Lagi / Hafal / Mudah are SRS self-ratings, not quiz right/wrong answers.
  const oldSound=state.settings&&state.settings.sound;
  const oldMeme=state.settings&&state.settings.meme;
  const audio=window.TENKA_AUDIO;
  const originalPlay=audio&&typeof audio.playEvent==='function'?audio.playEvent:null;

  if(state.settings){state.settings.sound=false;state.settings.meme=false;}
  if(audio&&originalPlay){
    audio.playEvent=function(event){
      if(event==='correct'||event==='wrong')return;
      return originalPlay.apply(audio,arguments);
    };
  }

  try{return originalRateCard.apply(this,arguments);}
  finally{
    if(state.settings){state.settings.sound=oldSound;state.settings.meme=oldMeme;}
    if(audio&&originalPlay)audio.playEvent=originalPlay;
  }
};

window.answerQuiz=function(index){
  const state=core&&core.state;
  const q=state&&state.quiz;
  const item=q&&q.items&&q.items[q.i];
  const correct=!!(item&&index===item.answer);
  const finalQuestion=!!(q&&q.i===q.items.length-1);
  const nextCombo=correct?(Number(q.combo)||0)+1:0;
  const comboMilestone=correct&&nextCombo>=3&&nextCombo%3===0;

  // One answer should produce one semantic reaction:
  // combo replaces normal correct, and the last correct waits for finish/perfect.
  const audio=window.TENKA_AUDIO;
  const originalPlay=audio&&typeof audio.playEvent==='function'?audio.playEvent:null;
  if(audio&&originalPlay&&(comboMilestone||finalQuestion)){
    audio.playEvent=function(event){
      if(event==='correct'&&(comboMilestone||finalQuestion))return;
      return originalPlay.apply(audio,arguments);
    };
  }

  try{return originalAnswerQuiz.apply(this,arguments);}
  finally{
    if(audio&&originalPlay)audio.playEvent=originalPlay;
  }
};

window.setSetting=function(key,value){
  if(key==='haptic'&&!hapticSupported){
    persistUnsupportedHaptic();
    setTimeout(syncHapticSetting,0);
    return;
  }
  return originalSetSetting.apply(this,arguments);
};

window.restartQuiz=function(){
  const state=core&&core.state;
  if(state&&state.level==='KAIGO'&&state.quiz&&state.quiz.type==='listening')return window.startKaigoQuiz('listening');
  return originalRestart.apply(this,arguments);
};

persistUnsupportedHaptic();
syncUi();
window.TENKA_HAPTIC_SUPPORTED=hapticSupported;
window.TENKA_SYSTEM_VERSION='1.0.4';
})();