const fs=require('fs');const vm=require('vm');const src=fs.readFileSync('audio-engine-v2.js','utf8');
function assert(x,m){if(!x)throw new Error(m)}
const spoken=[];let cancelled=0,played=0,paused=0;
const context={
 console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,setTimeout,clearTimeout,
 localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)}},
 navigator:{},indexedDB:undefined,
 speechSynthesis:{cancel(){cancelled++},speak(u){spoken.push(u.text)},getVoices(){return[]}},
 SpeechSynthesisUtterance:function(t){this.text=t;this.lang='';this.volume=1;this.rate=1;this.pitch=1},
 Audio:function(){this.pause=()=>{paused++};this.play=()=>{played++;return Promise.resolve()}},
 URL:{createObjectURL(){return'blob:x'},revokeObjectURL(){}},window:null
};context.window=context;vm.createContext(context);vm.runInContext(src,context,{filename:'audio-engine-v2.js'});
assert(context.TENKA_AUDIO_VERSION==='2.0.0','version');
context.TENKA_AUDIO.playEvent('correct');assert(spoken.length===1,'fallback should speak exactly once');
context.TENKA_AUDIO.playEvent('wrong');assert(spoken.length===2,'second event should be one new fallback');assert(cancelled>=2,'new reaction must cancel prior speech');
context.TENKA_AUDIO.stopAll();assert(cancelled>=3,'stopAll must cancel speech');
const d=context.TENKA_AUDIO.debug();assert(d.eventLog.length===2,'debug should record semantic events only');assert(d.eventLog[0].event==='correct'&&d.eventLog[1].event==='wrong','event order');
console.log('TENKA Audio Engine 2 tests passed');