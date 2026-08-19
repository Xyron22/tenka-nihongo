(()=>{
'use strict';

const VERSION='2.0.0';
const DB_NAME='tenka-audio-v3';
const STORE='clips';
const SETTINGS_KEY='tenka-audio-settings-v4';
const EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect','click'];
const SOURCES=['soundeffectlab','pixabay','voicevox','custom'];
const PHRASES={
  greeting:['始めよう！','準備はいいかな？','頑張ろう！'],
  correct:['正解！','やったー！','すごい！','いいね！'],
  wrong:['惜しい！','残念！','ドンマイ！','もう一回！'],
  combo:['コンボ！','その調子！','すごい！'],
  timeout:['タイムアップ！','時間切れ！'],
  finish:['お疲れさま！','おめでとう！'],
  perfect:['パーフェクト！','満点！','完璧！']
};

const memory={};
const lastClip={};
const lastSource={};
const lastPhrase={};
const eventLog=[];
let activeAudio=null;
let playToken=0;
let audioCtx=null;
let readyPromise=null;
let settings=loadSettings();

function defaults(){return{enabled:true,volume:.9,mode:'anime'}}
function loadSettings(){
  try{return Object.assign(defaults(),JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'))}
  catch{return defaults()}
}
function saveSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings))}catch{}}
function setSetting(key,value){
  if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));
  if(key==='enabled')value=!!value;
  if(key==='mode'&&!['anime','quiet'].includes(value))value='anime';
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
  resetMemory();
  const db=await openDb();if(!db)return;
  const rows=await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).getAll();
    req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);
  });
  rows.forEach(addMemory);
}
function ready(){return readyPromise||Promise.resolve()}

function isAudioFile(file){return !!(file&&(/^audio\//.test(file.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(file.name||'')))}
function clipId(source,event,file){
  if(source==='custom')return `custom:${event}:${Date.now()}:${Math.random().toString(36).slice(2)}`;
  return `${source}:${event}:${String(file?.name||'clip').replace(/[^a-zA-Z0-9._-]+/g,'-')}`;
}
async function saveClip(source,event,file){
  if(!SOURCES.includes(source)||!EVENTS.includes(event)||!isAudioFile(file))return false;
  const db=await openDb();if(!db)return false;
  const item={id:clipId(source,event,file),source,event,name:file.name||'Audio',blob:file,credit:''};
  await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(item);
    tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
  });
  addMemory(item);return true;
}
async function importEvent(source,event,fileList){
  const files=[...(fileList||[])].filter(isAudioFile);let saved=0;
  for(const file of files)if(await saveClip(source,event,file))saved++;
  return{saved,event};
}
function guessEvent(name,fallback='correct'){
  const s=String(name||'').toLowerCase();
  const rules=[
    ['perfect',/perfect|manten|zenmon|kanpeki|marvelous/],['timeout',/time.?up|timeout|time.?over|jikangire/],
    ['combo',/combo|streak|level.?up/],['finish',/omedetou|finish|victory|complete|ganbatta/],
    ['wrong',/zannen|incorrect|wrong|fail|error|miss|boo/],['correct',/seikai|correct|sugoi|yatta|good|success|pinpon/],
    ['greeting',/welcome|start|hajim|ready/],['click',/click|button|tap|select/]
  ];
  for(const [e,re] of rules)if(re.test(s))return e;
  return fallback;
}
async function importPack(source,fileList,fallback='correct'){
  let saved=0;const events={};
  for(const file of [...(fileList||[])].filter(isAudioFile)){
    const event=guessEvent(file.name,fallback);
    if(await saveClip(source,event,file)){saved++;events[event]=(events[event]||0)+1}
  }
  return{saved,events};
}
async function clearSource(source){
  const db=await openDb();
  for(const event of Object.keys(memory[source]||{}))for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{}
  memory[source]={};
  if(!db)return;
  const ids=await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).index('source').getAllKeys(source);
    req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);
  });
  await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readwrite');ids.forEach(id=>tx.objectStore(STORE).delete(id));
    tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
  });
}
function sourceCount(source){return Object.values(memory[source]||{}).reduce((n,a)=>n+a.length,0)}
function eventCount(source,event){return memory[source]?.[event]?.length||0}

function stableKey(item){return String(item?.id||item?.clip?.id||'')}
function chooseNoRepeat(arr,event){
  if(!arr.length)return null;
  let pool=arr;
  const prev=lastClip[event];
  if(pool.length>1&&prev)pool=pool.filter(x=>stableKey(x)!==prev);
  if(!pool.length)pool=arr;
  const priorSource=lastSource[event];
  const sourceChoices=new Set(pool.map(x=>x.source));
  if(sourceChoices.size>1&&priorSource){
    const alt=pool.filter(x=>x.source!==priorSource);if(alt.length)pool=alt;
  }
  const pick=pool[Math.floor(Math.random()*pool.length)];
  lastClip[event]=stableKey(pick);lastSource[event]=pick.source;
  return pick;
}
function allAvailable(event){
  const out=[];
  for(const source of SOURCES)for(const clip of memory[source]?.[event]||[])out.push({id:`${source}:${clip.id}`,source,clip});
  return out;
}
function candidates(event){
  const all=allAvailable(event);if(!all.length)return all;
  const sfx=all.filter(x=>x.source==='pixabay'),voices=all.filter(x=>x.source!=='pixabay');
  if(settings.mode==='quiet')return sfx.length?sfx:all;
  if(!voices.length)return all;if(!sfx.length)return voices;
  return Math.random()<.84?voices:sfx;
}

function cancelSpeech(){try{window.speechSynthesis?.cancel?.()}catch{}}
function stopAll(){
  playToken++;
  if(activeAudio){try{activeAudio.pause();activeAudio.currentTime=0}catch{};activeAudio=null}
  cancelSpeech();
}
function voice(){
  try{
    const list=speechSynthesis.getVoices().filter(v=>/^ja(-|_)/i.test(v.lang||''));
    return list[0]||null;
  }catch{return null}
}
function fallbackSpeech(event,token){
  if(token!==playToken||!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window))return false;
  const arr=PHRASES[event]||[];if(!arr.length)return false;
  let pool=arr;if(arr.length>1&&lastPhrase[event])pool=arr.filter(x=>x!==lastPhrase[event]);
  if(!pool.length)pool=arr;
  const text=pool[Math.floor(Math.random()*pool.length)];lastPhrase[event]=text;
  try{
    cancelSpeech();const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.volume=settings.volume;u.rate=1.02;u.pitch=1.15;
    const v=voice();if(v)u.voice=v;speechSynthesis.speak(u);return true;
  }catch{return false}
}
function tone(event,token){
  if(token!==playToken)return;
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    if(!audioCtx)audioCtx=new C();if(audioCtx.state==='suspended')audioCtx.resume();
    const o=audioCtx.createOscillator(),g=audioCtx.createGain(),now=audioCtx.currentTime;
    o.type=(event==='wrong'||event==='timeout')?'sawtooth':'sine';
    o.frequency.value=(event==='wrong'||event==='timeout')?190:720;
    g.gain.setValueAtTime(.05*settings.volume,now);g.gain.exponentialRampToValueAtTime(.001,now+.12);
    o.connect(g);g.connect(audioCtx.destination);o.start(now);o.stop(now+.13);
  }catch{}
}
function fallback(event,token){
  if(settings.mode==='quiet'){tone(event,token);return}
  if(!fallbackSpeech(event,token))tone(event,token);
}
function playEvent(event){
  if(!settings.enabled||!EVENTS.includes(event))return false;
  stopAll();
  const token=playToken;
  const pick=chooseNoRepeat(candidates(event));
  eventLog.push({event,source:pick?.source||'fallback',id:pick?.clip?.id||'',at:Date.now()});
  if(eventLog.length>100)eventLog.shift();
  if(!pick){fallback(event,token);return true}
  try{
    const audio=new Audio(pick.clip.url);activeAudio=audio;audio.volume=settings.volume;
    audio.onended=()=>{if(token===playToken&&activeAudio===audio)activeAudio=null};
    const p=audio.play();
    if(p&&p.catch)p.catch(()=>{if(token===playToken){activeAudio=null;fallback(event,token)}});
    return true;
  }catch{fallback(event,token);return true}
}
function debug(){
  return{
    version:VERSION,settings:getSettings(),
    counts:Object.fromEntries(SOURCES.map(s=>[s,sourceCount(s)])),
    events:Object.fromEntries(EVENTS.map(e=>[e,SOURCES.reduce((n,s)=>n+eventCount(s,e),0)])),
    eventLog:eventLog.slice(-20),active:!!activeAudio
  };
}

readyPromise=loadLibrary().catch(e=>console.warn('[TENKA audio library]',e));
window.TENKA_AUDIO={
  version:VERSION,playEvent,stopAll,setSetting,settings:getSettings,ready,
  importEvent,importPack,clearSource,sourceCount,eventCount,debug
};
window.TENKA_AUDIO_VERSION=VERSION;
})();