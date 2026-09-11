(()=>{
'use strict';

const VERSION='3.0.0';
const ASSET_VERSION='3.0.0';
const KEY='tenka-celebration-voice-pack-v3';
const SOURCE='voicevox';
const EVENTS=['greeting','finish','perfect'];
let manifest=null;
let installing=false;
let lastError='';

function audio(){return window.TENKA_AUDIO||null}
function sourceCount(){try{return Number(audio()?.sourceCount?.(SOURCE)||0)}catch{return 0}}
function eventCount(event){try{return Number(audio()?.eventCount?.(SOURCE,event)||0)}catch{return 0}}
async function loadManifest(){
  const r=await fetch(`./assets/audio/manifest.json?v=${VERSION}&t=${Date.now()}`,{cache:'no-store'});
  if(!r.ok)throw new Error(`manifest ${r.status}`);
  const data=await r.json();
  if(!data||data.version!==ASSET_VERSION||!Array.isArray(data.entries))throw new Error(`manifest voice tidak cocok (${data?.version||'unknown'})`);
  manifest=data;return data;
}
function health(){
  if(!manifest)return{ok:false,missing:['manifest']};
  const missing=[];
  for(const event of EVENTS){const need=manifest.entries.filter(e=>e.event===event).length,have=eventCount(event);if(have<need)missing.push(`${event} ${have}/${need}`)}
  return{ok:missing.length===0,missing};
}
function ext(path){const m=String(path||'').match(/\.(wav|mp3|ogg|m4a)(?:\?|$)/i);return m?m[1].toLowerCase():'wav'}
function mime(x){return x==='wav'?'audio/wav':x==='ogg'?'audio/ogg':x==='m4a'?'audio/mp4':'audio/mpeg'}
async function entryFile(entry,index){
  const r=await fetch(entry.path,{cache:'reload'});if(!r.ok)throw new Error(`${entry.event}: ${r.status}`);
  const blob=await r.blob();if(blob.size<300)throw new Error(`${entry.event}: file kosong`);
  const x=ext(entry.path),voice=String(entry.voice||'voice').replace(/[^a-zA-Z0-9_-]+/g,'-');
  return new File([blob],`${entry.event}-${voice}-${index}.${x}`,{type:blob.type||mime(x)});
}
async function install(force=false){
  if(installing)return false;const a=audio();if(!a?.importEvent)return false;installing=true;lastError='';
  try{
    await a.ready?.();if(!manifest)await loadManifest();
    if(!force&&localStorage.getItem(KEY)===VERSION&&health().ok){renderStatus();return true}
    await a.clearSource?.(SOURCE);
    for(const event of EVENTS){
      const entries=manifest.entries.filter(e=>e.event===event),files=[];
      for(let i=0;i<entries.length;i++)files.push(await entryFile(entries[i],i+1));
      await a.importEvent(SOURCE,event,files);
    }
    const h=health();if(!h.ok)throw new Error(`Voice pack belum lengkap: ${h.missing.join(', ')}`);
    localStorage.setItem(KEY,VERSION);renderStatus();return true;
  }catch(e){localStorage.removeItem(KEY);lastError=e?.message||String(e);console.warn('[TENKA celebration voice]',e);renderStatus();return false}
  finally{installing=false}
}
async function reinstall(){localStorage.removeItem(KEY);return install(true)}
function styles(){return [...new Set((manifest?.entries||[]).map(e=>e.voice).filter(Boolean))]}
function renderStatus(){
  const box=document.querySelector('#tenka-sound-pack-status');if(!box)return;const h=health();
  box.innerHTML=`<b>🎙️ Celebration Voice Pack v${VERSION}</b><br><span class="subtle">${installing?'⏳ Memasang…':h.ok?'✅ Siap':'⚠️ Belum lengkap'} • ${sourceCount()}/${manifest?.entries?.length||0} voice lokal${lastError?` • ${lastError}`:''}</span><div class="subtle" style="margin-top:6px">Dipakai hanya untuk mulai, selesai, dan perfect. Voice: ${styles().join('・')||'menunggu build'}</div><div class="small-actions" style="margin-top:10px"><button class="pill" onclick="TENKA_SOUND_PACK.reinstall()">↻ Repair voice pack</button></div>`;
}
async function init(){try{await loadManifest()}catch(e){lastError=e?.message||String(e)}renderStatus();setTimeout(()=>install(false),120)}
window.TENKA_SOUND_PACK={version:VERSION,install,reinstall,renderStatus,status:()=>({version:VERSION,manifest,health:health(),error:lastError})};
window.TENKA_SOUND_VERSION=VERSION;
setTimeout(init,80);
})();