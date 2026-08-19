(()=>{
'use strict';
if(!window.TENKA_CORE)return;

const core=window.TENKA_CORE;
const originalRestart=window.restartQuiz;
const originalStartDaily=window.startDaily;
const originalRateCard=window.rateCard;
const originalGo=window.go;
const originalSetSetting=window.setSetting;
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
    // Home CTA follows its label: review if due, otherwise open Daily Study.
    if(totalDue()>0)return originalStartDaily.apply(this,arguments);
    return window.go('daily');
  }
  return originalStartDaily.apply(this,arguments);
};

window.rateCard=function(rating){
  const state=core&&core.state;
  if(!state)return originalRateCard.apply(this,arguments);

  // Lagi / Hafal / Mudah are self-rating controls, not right/wrong answers.
  // Keep neutral UI feedback and suppress quiz reaction voices.
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
window.TENKA_SYSTEM_VERSION='1.0.3';
})();