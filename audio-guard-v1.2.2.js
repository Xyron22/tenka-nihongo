(()=>{
'use strict';
if(!window.TENKA_AUDIO||typeof window.TENKA_AUDIO.playEvent!=='function')return;

const VERSION='1.2.2';
const original=window.TENKA_AUDIO.playEvent.bind(window.TENKA_AUDIO);
let lastEvent='';
let lastAt=0;

function cancelSpeech(){
  try{if('speechSynthesis'in window)window.speechSynthesis.cancel()}catch{}
}

function quizSnapshot(){
  const state=window.TENKA_CORE&&window.TENKA_CORE.state;
  const q=state&&state.quiz;
  if(!state||state.view!=='quiz'||!q||!Array.isArray(q.items))return null;
  return{state,q,final:q.i===q.items.length-1,answered:!!state.quizAnswered};
}

function suppressQuizReaction(event){
  const snap=quizSnapshot();
  if(!snap||!snap.answered)return false;
  if(!['correct','wrong','timeout','combo'].includes(event))return false;

  // The final question gets exactly one result reaction from finishQuiz():
  // perfect or finish. Never play answer feedback before it.
  if(snap.final)return true;

  // At a combo milestone, combo replaces the ordinary correct reaction.
  if(event==='correct'){
    const combo=Number(snap.q.combo)||0;
    if(combo>=3&&combo%3===0)return true;
  }
  return false;
}

window.TENKA_AUDIO.playEvent=function(event){
  const now=Date.now();
  if(event!=='click')cancelSpeech();

  if(suppressQuizReaction(event))return;

  // Same semantic event from two UI layers within one tap is ignored.
  if(event===lastEvent&&now-lastAt<220)return;
  lastEvent=event;lastAt=now;
  return original(event);
};

// Navigation tap is opt-in. Quiz choices never need a second tap sound.
try{
  if(localStorage.getItem('tenka-audio-guard-122')!=='1'){
    if(typeof window.tenkaAudioSet==='function')window.tenkaAudioSet('click',false);
    localStorage.setItem('tenka-audio-guard-122','1');
  }
}catch{}

window.TENKA_AUDIO_GUARD_VERSION=VERSION;
})();