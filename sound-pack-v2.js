(()=>{
'use strict';

const VERSION='2.0.0';
const ASSET_VERSION='2.0.0';
const KEY='tenka-builtin-sound-pack-v2';
const SOURCES=['soundeffectlab','pixabay','voicevox'];
let manifest=null;
let installing=false;
let lastError='';
let retryCount=0;

function audio(){return window.TENKA_AUDIO||null}
function sourceCount(source){try{return Number(audio()?.sourceCount?.(source)||0)}catch{return 0}}
function eventCount(source,event){try{return Number(audio()?.eventCount?.(source,event)||0)}catch{return 0}}
function totalCount(){return SOURCES.reduce((n,s)=>n+sourceCount(s),0)}

async function loadManifest(){
  const r=await fetch(`./assets/audio/manifest.json?v=${encodeURIComponent(VERSION)}&t=${Date.now()}`,{cache:'no-store'});
  if(!r.ok)throw new Error(`manifest ${r.status}`);
  const data=await r.json();
  if(!data||!Array.isArray(data.entries)||data.version!==ASSET_VERSION)throw new Error(`manifest sound tidak cocok (${data?.version||'unknown'})`);
  manifest=data;return data;
}
function expected(){
  const map={};
  for(const e of manifest?.entries||[]){
    if(!SOURCES.includes(e.source)||!e.event)continue;
    const key=`${e.source}:${e.event}`;map[key]=(map[key]||0)+1;
  }
  return map;
}
function health(){
  if(!manifest)return{ok:false,missing:['manifest']};
  const missing=[];
  for(const [key,need] of Object.entries(expected())){
    const [source,event]=key.split(':');const have=eventCount(source,event);
    if(have<need)missing.push(`${source}/${event} ${have}/${need}`);
  }
  return{ok:missing.length===0,missing};
}
function extension(path){const m=String(path||'').match(/\.(wav|mp3|ogg|m4a)(?:\?|$)/i);return m?m[1].toLowerCase():'mp3'}
function mime(ext){return ext==='wav'?'audio/wav':ext==='ogg'?'audio/ogg':ext==='m4a'?'audio/mp4':'audio/mpeg'}
async function entryFile(entry,index){
  const r=await fetch(entry.path,{cache:'reload'});if(!r.ok)throw new Error(`${entry.source}/${entry.event}: ${r.status}`);
  const blob=await r.blob();if(blob.size<300)throw new Error(`${entry.source}/${entry.event}: file kosong`);
  const ext=extension(entry.path),voice=String(entry.voice||entry.label||'clip').replace(/[^a-zA-Z0-9_-]+/g,'-').slice(0,40)||'clip';
  return new File([blob],`${entry.event}-${entry.source}-${voice}-${index}.${ext}`,{type:blob.type||mime(ext)});
}
async function clearBuiltins(){
  const a=audio();if(!a?.clearSource)return;
  for(const source of SOURCES)await a.clearSource(source);
}
async function installSource(source,entries){
  const a=audio();if(!a?.importEvent)return 0;
  const groups=new Map();
  for(let i=0;i<entries.length;i++){
    try{
      const file=await entryFile(entries[i],i+1),event=entries[i].event;
      if(!groups.has(event))groups.set(event,[]);groups.get(event).push(file);
    }catch(e){console.warn('[TENKA sound asset]',e)}
  }
  let saved=0;
  for(const [event,files] of groups){const r=await a.importEvent(source,event,files);saved+=Number(r?.saved||0)}
  return saved;
}
async function install(force=false){
  if(installing)return false;
  const a=audio();if(!a?.importEvent)return false;
  installing=true;lastError='';
  try{
    await a.ready?.();
    if(!manifest)await loadManifest();
    const good=health();
    if(!force&&localStorage.getItem(KEY)===VERSION&&good.ok){renderStatus();return true}
    await clearBuiltins();
    let saved=0;
    for(const source of SOURCES)saved+=await installSource(source,manifest.entries.filter(e=>e.source===source));
    const after=health();
    if(!after.ok)throw new Error(`Pack belum lengkap: ${after.missing.slice(0,5).join(', ')}`);
    localStorage.setItem(KEY,VERSION);retryCount=0;
    console.info(`[TENKA] built-in sound ready: ${saved} files`);
    renderStatus();return true;
  }catch(e){
    localStorage.removeItem(KEY);lastError=e?.message||String(e);console.warn('[TENKA sound pack]',e);
    if(retryCount<2){retryCount++;setTimeout(()=>install(true),2500*retryCount)}
    renderStatus();return false;
  }finally{installing=false}
}
async function reinstall(){localStorage.removeItem(KEY);retryCount=0;return install(true)}
function voiceStyles(){return [...new Set((manifest?.entries||[]).filter(e=>e.role==='voice').map(e=>e.voice).filter(Boolean))]}
function renderStatus(){
  const box=document.querySelector('#tenka-sound-pack-status');if(!box)return;
  const h=health(),expectedCount=manifest?.entries?.length||0;
  const styles=voiceStyles();
  box.innerHTML=`<b>🎬 Built-in Anime Mix v${VERSION}</b><br>効果音ラボ ${sourceCount('soundeffectlab')} • Pixabay ${sourceCount('pixabay')} • VOICEVOX ${sourceCount('voicevox')}<br><span class="subtle">${installing?'⏳ Memasang…':h.ok?'✅ Pack lengkap':'⚠️ Pack belum lengkap'} • ${totalCount()}/${expectedCount} file lokal${lastError?` • ${lastError}`:''}</span><div class="subtle" style="margin-top:6px">Voice styles: ${styles.length?styles.join('・'):'menunggu build'}</div><div class="small-actions" style="margin-top:10px"><button class="pill" onclick="TENKA_SOUND_PACK.reinstall()">↻ Repair pack</button></div>`;
}
async function init(){
  try{await loadManifest()}catch(e){lastError=e?.message||String(e)}
  renderStatus();setTimeout(()=>install(false),150);
}
window.TENKA_SOUND_PACK={version:VERSION,install,reinstall,renderStatus,status:()=>({version:VERSION,manifest,health:health(),error:lastError})};
window.TENKA_SOUND_VERSION=VERSION;
setTimeout(init,80);
})();