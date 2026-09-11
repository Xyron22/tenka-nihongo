const fs=require('fs');const vm=require('vm');const src=fs.readFileSync('audio-engine-v3.js','utf8');
function assert(x,m){if(!x)throw new Error(m)}
const spoken=[];let cancelled=0,played=0;const notes=[];
class Osc{constructor(){this.frequency={setValueAtTime:(f)=>{this.f=f}};this.type='sine'}connect(){}start(t){this.startAt=t;notes.push({f:this.f,type:this.type})}stop(){} }
class Gain{constructor(){this.gain={setValueAtTime(){},exponentialRampToValueAtTime(){}}}connect(){} }
class AC{constructor(){this.currentTime=0;this.destination={};this.state='running'}createOscillator(){return new Osc()}createGain(){return new Gain()}resume(){}}
const context={console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,setTimeout,clearTimeout,localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)}},navigator:{},indexedDB:undefined,AudioContext:AC,speechSynthesis:{cancel(){cancelled++},speak(u){spoken.push(u.text)},getVoices(){return[]}},SpeechSynthesisUtterance:function(t){this.text=t;this.lang='';this.volume=1;this.rate=1;this.pitch=1},Audio:function(){this.pause=()=>{};this.play=()=>{played++;return Promise.resolve()}},URL:{createObjectURL(){return'blob:x'},revokeObjectURL(){}},window:null};
context.window=context;vm.createContext(context);vm.runInContext(src,context,{filename:'audio-engine-v3.js'});
assert(context.TENKA_AUDIO_VERSION==='3.0.0','version');
context.TENKA_AUDIO.playEvent('correct');assert(notes.length===2,'correct must be a short two-note SFX');assert(spoken.length===0,'correct must never speak');
const beforeWrong=notes.length;context.TENKA_AUDIO.playEvent('wrong');assert(notes.length===beforeWrong+2,'wrong must be a two-note SFX');assert(spoken.length===0,'wrong must never speak');
const beforeCombo=notes.length;context.TENKA_AUDIO.playEvent('combo');assert(notes.length===beforeCombo+3,'combo must be a three-note SFX');assert(spoken.length===0,'combo must never speak');
const beforeTimeout=notes.length;context.TENKA_AUDIO.playEvent('timeout');assert(notes.length===beforeTimeout+2,'timeout must be SFX only');assert(spoken.length===0,'timeout must never speak');
context.TENKA_AUDIO.playEvent('finish');assert(spoken.length===1,'finish may use celebration voice');
context.TENKA_AUDIO.playEvent('perfect');assert(spoken.length===2,'perfect may use celebration voice');
context.TENKA_AUDIO.setSetting('celebrationVoice',false);const before=spoken.length;context.TENKA_AUDIO.playEvent('finish');assert(spoken.length===before,'celebration voice OFF must not speak');
const d=context.TENKA_AUDIO.debug();assert(d.eventLog.slice(0,4).every(x=>x.source==='exam-sfx'),'answer events must be logged as exam-sfx');
console.log('TENKA Exam Sound v3 tests passed');
