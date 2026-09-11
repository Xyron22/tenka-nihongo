(()=>{
'use strict';

const VERSION='3.0.0';
const DB_NAME='tenka-audio-v4';
const STORE='clips';
const SETTINGS_KEY='tenka-audio-settings-v5';
const EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect','click'];
const EXAM_EVENTS=new Set(['correct','wrong','combo','timeout']);
const VOICE_EVENTS=new Set(['greeting','finish','perfect']);
const SOURCES=['voicevox','custom'];
const PHRASES={
  greeting:['始めよう！','準備オーケー？','今日も頑張ろう！'],
  finish:['お疲れさま！','おめでとう！','よく頑張ったね！'],
  perfect:['パーフェクト！','完璧！','満点！']
};

const memory={};
const lastClip={};
const lastPhrase={};
const eventLog=[];
let activeAudio=null;
let activeNodes=[];
let playToken=0;
let audioCtx=null;
let readyPromise=null;
let settings=loadSettings();

function defaults(){return{enabled:true,volume:.72,celebrationVoice:true}}
function loadSettings(){
  try{return Object.assign(defaults(),JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'))}
  catch{return defaults()}
}
function saveSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings))}catch{}}
function setSetting(key,value){
  if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));
  else if(key==='enabled'||key==='celebrationVoice')value=!!value;
  else return;
  settings[key]=value;saveSettings();
  if(key==='enabled'&&!value)stopAll();
}
function getSettings(){return Object.assign({},settings)}

function sourceBucket(source,event){
  if(!memory[source])memory[source]={};
  if(!memory[source][event])memory[source][event]=[];
  return memory[source][event];
}
function resetMemory(){
  for(const source of Object.keys(memory))for(const event of Object.keys(memory[source]||{})){
    for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{}
  }
  for(const source of Object.keys(memory))delete memory[source];
}
function openDb(){
  return new Promise((resolve,reject)=>{
    if(!window.indexedDB||typeof indexedDB.open!=='function'){resolve(null);return}
    const req=indexedDB.open(DB_NAME,1);
    req.onupgradeneeded=()=>{
      const db=req.result;
      if(!db.objectStoreNames.contains(STORE)){
        const s=db.createObjectStore(STORE,{keyPath:'id'});
        s.createIndex('source','source',{unique:false});
        s.createIndex('event','event',{unique:false});
      }
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
function addMemory(item){
  if(!item?.blob||!item.source||!item.event)return;
  const bucket=sourceBucket(item.source,item.event);
  const old=bucket.findIndex(x=>x.id===item.id);
  const clip={id:item.id,name:item.name||'Audio',url:URL.createObjectURL(item.blob),credit:item.credit||''};
  if(old>=0){try{URL.revokeObjectURL(bucket[old].url)}catch{};bucket[old]=clip}else bucket.push(clip);
}
async function loadLibrary(){
  resetMemory();const db=await openDb();if(!db)return;
  const rows=await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).getAll();
    req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);
  });
  rows.forEach(addMemory);
}
function ready(){return readyPromise||Promise.resolve()}
function isAudioFile(file){return !!(file&&(/^audio\//.test(file.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(file.name||'')))}
function clipId(source,event,file){return `${source}:${event}:${String(file?.name||'clip').replace(/[^a-zA-Z0-9._-]+/g,'-')}`}
async function saveClip(source,event,file){
  if(!SOURCES.includes(source)||!VOICE_EVENTS.has(event)||!isAudioFile(file))return false;
  const db=await openDb();if(!db)return false;
  const item={id:clipId(source,event,file),source,event,name:file.name||'Audio',blob:file,credit:''};
  await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(item);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});
  addMemory(item);return true;
}
async function importEvent(source,event,fileList){
  const files=[...(fileList||[])].filter(isAudioFile);let saved=0;
  for(const file of files)if(await saveClip(source,event,file))saved++;
  return{saved,event};
}
async function clearSource(source){
  const db=await openDb();
  for(const event of Object.keys(memory[source]||{}))for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{}
  memory[source]={};if(!db)return;
  const ids=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).index('source').getAllKeys(source);req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});
  await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');ids.forEach(id=>tx.objectStore(STORE).delete(id));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});
}
function sourceCount(source){return Object.values(memory[source]||{}).reduce((n,a)=>n+a.length,0)}
function eventCount(source,event){return memory[source]?.[event]?.length||0}

function cancelSpeech(){try{window.speechSynthesis?.cancel?.()}catch{}}
function stopNodes(){for(const n of activeNodes.splice(0))try{n.stop?.()}catch{}}
function stopAll(){
  playToken++;stopNodes();
  if(activeAudio){try{activeAudio.pause();activeAudio.currentTime=0}catch{};activeAudio=null}
  cancelSpeech();
}
function ctx(){
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;
    if(!audioCtx)audioCtx=new C();if(audioCtx.state==='suspended')audioCtx.resume?.();return audioCtx;
  }catch{return null}
}
function note(c,frequency,start,duration,gain=.04,type='sine'){
  const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+start;
  o.type=type;o.frequency.setValueAtTime(frequency,t);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain*settings.volume),t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+duration);
  o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+duration+.02);activeNodes.push(o);
  o.onended=()=>{activeNodes=activeNodes.filter(x=>x!==o)};
}
function examSfx(event){
  const c=ctx();if(!c)return false;stopNodes();
  if(event==='correct'){
    note(c,880,0,.075,.043,'sine');note(c,1174,.052,.085,.027,'sine');
  }else if(event==='wrong'){
    note(c,220,0,.10,.038,'triangle');note(c,174,.075,.105,.026,'triangle');
  }else if(event==='combo'){
    note(c,659,0,.065,.026,'sine');note(c,880,.055,.07,.03,'sine');note(c,1174,.112,.09,.032,'sine');
  }else if(event==='timeout'){
    note(c,440,0,.09,.03,'triangle');note(c,330,.105,.11,.03,'triangle');
  }else if(event==='click'){
    note(c,700,0,.04,.018,'sine');
  }else return false;
  return true;
}
function resultChime(event){
  const c=ctx();if(!c)return false;stopNodes();
  if(event==='perfect'){
    note(c,784,0,.10,.03);note(c,988,.09,.11,.032);note(c,1319,.18,.17,.034);
  }else{
    note(c,659,0,.10,.026);note(c,880,.10,.14,.03);
  }
  return true;
}
function voiceList(event){
  const out=[];for(const source of SOURCES)for(const clip of memory[source]?.[event]||[])out.push({source,clip});return out;
}
function chooseVoice(event){
  const all=voiceList(event);if(!all.length)return null;
  const prev=lastClip[event];let pool=all.length>1?all.filter(x=>x.clip.id!==prev):all;if(!pool.length)pool=all;
  const pick=pool[Math.floor(Math.random()*pool.length)];lastClip[event]=pick.clip.id;return pick;
}
function fallbackSpeech(event,token){
  if(token!==playToken||!settings.celebrationVoice||!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window))return false;
  const arr=PHRASES[event]||[];if(!arr.length)return false;
  let pool=arr.length>1&&lastPhrase[event]?arr.filter(x=>x!==lastPhrase[event]):arr;if(!pool.length)pool=arr;
  const text=pool[Math.floor(Math.random()*pool.length)];lastPhrase[event]=text;
  try{cancelSpeech();const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.volume=settings.volume;u.rate=1.0;u.pitch=1.05;speechSynthesis.speak(u);return true}catch{return false}
}
function playVoiceEvent(event,token){
  if(!settings.celebrationVoice){resultChime(event);return true}
  const pick=chooseVoice(event);
  if(!pick){if(!fallbackSpeech(event,token))resultChime(event);return true}
  try{
    const a=new Audio(pick.clip.url);activeAudio=a;a.volume=settings.volume;
    a.onended=()=>{if(token===playToken&&activeAudio===a)activeAudio=null};
    const p=a.play();if(p&&p.catch)p.catch(()=>{if(token===playToken){activeAudio=null;if(!fallbackSpeech(event,token))resultChime(event)}});return true;
  }catch{if(!fallbackSpeech(event,token))resultChime(event);return true}
}
function playEvent(event){
  if(!settings.enabled||!EVENTS.includes(event))return false;
  stopAll();const token=playToken;
  if(EXAM_EVENTS.has(event)||event==='click'){
    eventLog.push({event,source:'exam-sfx',at:Date.now()});if(eventLog.length>100)eventLog.shift();
    return examSfx(event);
  }
  if(VOICE_EVENTS.has(event)){
    const pickCount=voiceList(event).length;
    eventLog.push({event,source:settings.celebrationVoice?(pickCount?'voice-pack':'fallback-voice'):'result-sfx',at:Date.now()});if(eventLog.length>100)eventLog.shift();
    return playVoiceEvent(event,token);
  }
  return false;
}
function debug(){return{version:VERSION,settings:getSettings(),counts:Object.fromEntries(SOURCES.map(s=>[s,sourceCount(s)])),events:Object.fromEntries(EVENTS.map(e=>[e,SOURCES.reduce((n,s)=>n+eventCount(s,e),0)])),eventLog:eventLog.slice(-20),active:!!activeAudio,activeNodes:activeNodes.length}}

readyPromise=loadLibrary().catch(e=>console.warn('[TENKA audio library]',e));
window.TENKA_AUDIO={version:VERSION,playEvent,stopAll,setSetting,settings:getSettings,ready,importEvent,clearSource,sourceCount,eventCount,debug};
window.TENKA_AUDIO_VERSION=VERSION;
})();