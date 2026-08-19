(()=>{
'use strict';
if(!window.TENKA_AUDIO||typeof window.TENKA_AUDIO.playEvent!=='function')return;

const VERSION='1.2.1';
const original=window.TENKA_AUDIO.playEvent.bind(window.TENKA_AUDIO);
let lastEvent='';
let lastAt=0;

function cancelSpeech(){
  try{if('speechSynthesis'in window)window.speechSynthesis.cancel()}catch{}
}

window.TENKA_AUDIO.playEvent=function(event){
  const now=Date.now();
  // Kill Safari/WebSpeech reaction that may still be speaking before a file reaction starts.
  if(event!=='click')cancelSpeech();
  // Defensive duplicate guard for the exact same semantic event fired by two UI layers.
  if(event===lastEvent&&now-lastAt<180)return;
  lastEvent=event;lastAt=now;
  return original(event);
};

// Migrate v1.2 users to a quieter baseline: navigation tap sound is opt-in.
try{
  if(localStorage.getItem('tenka-audio-guard-121')!=='1'){
    if(typeof window.tenkaAudioSet==='function')window.tenkaAudioSet('click',false);
    localStorage.setItem('tenka-audio-guard-121','1');
  }
}catch{}

window.TENKA_AUDIO_GUARD_VERSION=VERSION;
})();