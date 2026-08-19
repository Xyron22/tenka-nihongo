(()=>{
'use strict';

const PACK_VERSION='1.2.2';
const ASSET_VERSION='1.2.0';
const KEY='tenka-builtin-sound-pack-version';
const BUILTIN_SOURCES=['soundeffectlab','pixabay','voicevox'];
const VOICE_EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect'];
let manifest=null;
let installing=false;
let lastError='';
let retryTimer=null;

function toast(text){
  const el=document.querySelector('#toast');
  if(!el)return;
  el.textContent=text;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}
function api(){return window.TENKA_AUDIO||null}
function sourceCount(source){try{return Number(api()?.sourceCount?.(source)||0)}catch{return 0}}
function eventCount(source,event){try{return Number(api()?.eventCount?.(source,event)||0)}catch{return 0}}
function totalCount(){return BUILTIN_SOURCES.reduce((n,s)=>n+sourceCount(s),0)}

async function loadManifest(){
  const r=await fetch(`./assets/audio/manifest.json?v=${encodeURIComponent(PACK_VERSION)}&t=${Date.now()}`,{cache:'no-store'});
  if(!r.ok)throw new Error(`manifest ${r.status}`);
  const data=await r.json();
  if(!data||data.version!==ASSET_VERSION||!Array.isArray(data.entries))throw new Error(`manifest sound pack belum cocok (${data?.version||'unknown'})`);
  manifest=data;
  return data;
}
function requirements(){
  const out={};
  for(const e of manifest?.entries||[]){
    if(!BUILTIN_SOURCES.includes(e.source)||!e.event)continue;
    const k=`${e.source}:${e.event}`;
    out[k]=(out[k]||0)+1;
  }
  return out;
}
function completeness(){
  if(!manifest)return{ok:false,missing:['manifest']};
  const missing=[];
  for(const [key,need] of Object.entries(requirements())){
    const [source,event]=key.split(':');
    const have=eventCount(source,event);
    if(have<need)missing.push(`${source}/${event} ${have}/${need}`);
  }
  return{ok:missing.length===0,missing};
}

function extensionFromPath(p){const m=String(p||'').match(/\.(wav|mp3|ogg|m4a)(?:\?|$)/i);return m?m[1].toLowerCase():'mp3'}
function mime(ext){return ext==='wav'?'audio/wav':ext==='ogg'?'audio/ogg':ext==='m4a'?'audio/mp4':'audio/mpeg'}
async function entryToFile(entry,index){
  const r=await fetch(entry.path,{cache:'reload'});
  if(!r.ok)throw new Error(`${entry.source}/${entry.event}: ${r.status}`);
  const blob=await r.blob();
  if(blob.size<300)throw new Error(`${entry.source}/${entry.event}: file kosong`);
  const ext=extensionFromPath(entry.path);
  const voice=entry.voice?String(entry.voice).replace(/[^\w-]+/g,'-'):'clip';
  const name=`${entry.event}-${entry.source}-${voice}-builtin-${index}.${ext}`;
  try{return new File([blob],name,{type:blob.type||mime(ext)})}
  catch{blob.name=name;return blob}
}
async function installSource(source,entries){
  const a=api();
  if(!a?.importPack||!entries.length)return 0;
  const groups=new Map();
  for(let i=0;i<entries.length;i++){
    const entry=entries[i];
    try{
      const file=await entryToFile(entry,i+1);
      if(!groups.has(entry.event))groups.set(entry.event,[]);
      groups.get(entry.event).push(file);
    }catch(e){console.warn('[TENKA sound pack]',e)}
  }
  let saved=0;
  for(const [event,files] of groups){
    const result=a.importEvent?await a.importEvent(source,event,files):await a.importPack(source,files,event);
    saved+=Number(result?.saved||0);
  }
  return saved;
}
async function clearBuiltin(){
  const a=api();if(!a?.clearSource)return;
  for(const s of BUILTIN_SOURCES){try{await a.clearSource(s)}catch{}}
}
function scheduleRetry(){
  if(retryTimer)return;
  retryTimer=setTimeout(()=>{retryTimer=null;install(true)},5000);
}
async function install(force=false){
  if(installing)return;
  const a=api();if(!a?.importPack)return;
  installing=true;lastError='';
  try{
    if(a.ready)await a.ready();
    if(!manifest)await loadManifest();
    const previous=localStorage.getItem(KEY)||'';
    const before=completeness();
    if(!force&&previous===PACK_VERSION&&before.ok){injectStatus();return}

    await clearBuiltin();
    let saved=0;
    for(const source of BUILTIN_SOURCES){
      saved+=await installSource(source,manifest.entries.filter(e=>e.source===source));
    }
    const after=completeness();
    if(after.ok){
      localStorage.setItem(KEY,PACK_VERSION);
      toast(`🎧 ${saved} sound bawaan TENKA siap`);
    }else{
      localStorage.removeItem(KEY);
      lastError=`Pack belum lengkap: ${after.missing.slice(0,4).join(', ')}`;
      scheduleRetry();
    }
  }catch(e){
    localStorage.removeItem(KEY);
    lastError=e?.message||String(e);
    console.warn('[TENKA sound pack]',e);
    scheduleRetry();
  }finally{
    installing=false;injectStatus();
  }
}
async function reinstall(){
  localStorage.removeItem(KEY);
  toast('Membersihkan & memasang ulang sound pack…');
  await install(true);
}
function countsText(){return `効果音ラボ ${sourceCount('soundeffectlab')} • Pixabay ${sourceCount('pixabay')} • VOICEVOX ${sourceCount('voicevox')}`}
function voiceEventText(){return VOICE_EVENTS.map(e=>`${e}:${eventCount('voicevox',e)}`).join(' • ')}
function injectStatus(){
  const app=document.querySelector('#app');
  if(!app||!app.textContent.includes('Settings'))return;
  const engine=document.querySelector('#tenka-sound-engine');if(!engine)return;
  let box=document.querySelector('#tenka-builtin-sound-pack');if(box)box.remove();
  box=document.createElement('div');box.id='tenka-builtin-sound-pack';box.className='muted-box';box.style.marginTop='12px';
  const expected=manifest?.entries?.length||0,ready=totalCount(),health=completeness();
  const vv=manifest?.entries?.filter(e=>e.source==='voicevox')||[];
  const voiceNames=[...new Set(vv.map(e=>e.voice).filter(Boolean))];
  box.innerHTML=`<b>🎬 Built-in Anime Voice v${PACK_VERSION}</b><br>${countsText()}<br><span class="subtle">${health.ok?'✅ Pack lengkap':installing?'⏳ Memasang pack…':'⚠️ Pack belum lengkap'} • ${ready}/${expected} file lokal${lastError?` • ${lastError}`:''}</span><div class="subtle" style="margin-top:6px">VOICEVOX per event: ${voiceEventText()}</div><div class="small-actions" style="margin-top:10px"><button class="pill" onclick="TENKA_SOUND_PACK.reinstall()">↻ Repair / pasang ulang</button><button class="pill" onclick="TENKA_AUDIO.playEvent('correct')">▶️ Test</button></div><div class="subtle" style="margin-top:8px">VOICEVOX: ${voiceNames.length?voiceNames.join('・'):'belum tersedia'} • 効果音ラボ • Pixabay. Satu jawaban hanya boleh menghasilkan satu reaction.</div>`;
  engine.appendChild(box);
}
async function init(){
  try{await loadManifest()}catch(e){lastError=e?.message||String(e)}
  setTimeout(()=>install(false),250);
  setTimeout(injectStatus,700);
  if('MutationObserver'in window){const app=document.querySelector('#app');if(app)new MutationObserver(()=>setTimeout(injectStatus,30)).observe(app,{childList:true,subtree:true})}
}
window.TENKA_SOUND_PACK={version:PACK_VERSION,install,reinstall,status:()=>({version:PACK_VERSION,assetVersion:ASSET_VERSION,manifest,counts:Object.fromEntries(BUILTIN_SOURCES.map(s=>[s,sourceCount(s)])),health:completeness(),error:lastError})};
window.TENKA_SOUND_VERSION=PACK_VERSION;
setTimeout(init,120);
})();