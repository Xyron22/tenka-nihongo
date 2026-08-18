(()=>{
'use strict';
if(!window.TENKA_CORE)return;

const core=window.TENKA_CORE;
const originalRestart=window.restartQuiz;
const originalStartDaily=window.startDaily;
const originalRateCard=window.rateCard;
const originalGo=window.go;

function syncPrimaryCta(){
  const state=core&&core.state;
  if(!state||!document||!document.querySelector)return;
  if(state.view==='home'){
    const button=document.querySelector('.hero .action.primary');
    if(button)button.textContent='始めよう！';
  }
  if(state.view==='daily'){
    const button=document.querySelector('.action.primary');
    if(button){
      const due=['N5','N4','N3','N2','N1'].reduce((n,l)=>n+core.dueCards(l).length,0)+core.dueCards('KAIGO').length;
      button.textContent=due?`Review ${due} kartu →`:'Mulai N5 5 menit →';
    }
  }
}

window.go=function(v){
  const result=originalGo.apply(this,arguments);
  setTimeout(syncPrimaryCta,0);
  return result;
};

window.startDaily=function(){
  const state=core&&core.state;
  if(state&&state.view==='home')return window.go('daily');
  return originalStartDaily.apply(this,arguments);
};

window.rateCard=function(rating){
  const state=core&&core.state;
  if(!state)return originalRateCard.apply(this,arguments);

  // Lagi / Hafal / Mudah are self-rating controls, not right/wrong answers.
  // Keep the neutral button/tap feedback, but suppress quiz reaction voices.
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

window.restartQuiz=function(){
  const state=core&&core.state;
  if(state&&state.level==='KAIGO'&&state.quiz&&state.quiz.type==='listening')return window.startKaigoQuiz('listening');
  return originalRestart.apply(this,arguments);
};

syncPrimaryCta();
window.TENKA_SYSTEM_VERSION='1.0.1';
})();