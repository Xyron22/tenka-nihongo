(()=>{
'use strict';

function examSettingsHtml(){
  const a=window.TENKA_AUDIO,s=a?.settings?.()||{enabled:true,volume:.72,celebrationVoice:true};
  return `<div class="section-title">🎧 Exam Sound System</div>
  <div class="muted-box">Saat memilih jawaban, TENKA hanya memakai SFX ujian pendek. Voice Jepang hanya untuk mulai, selesai, dan perfect.</div>
  <div class="toggle"><div><b>🔊 Master Audio</b><div class="subtle">SFX jawaban + celebration voice</div></div><input type="checkbox" ${s.enabled?'checked':''} onchange="setAudioSetting('enabled',this.checked)"></div>
  <div class="row"><div style="flex:1"><b>🔉 Volume</b><small>${Math.round((s.volume??.72)*100)}%</small></div><input aria-label="Volume" type="range" min="0" max="1" step="0.05" value="${s.volume??.72}" onchange="setAudioSetting('volume',this.value)" style="width:145px"></div>
  <div class="toggle"><div><b>🎙️ Celebration Voice</b><div class="subtle">Voice Jepang hanya pada mulai, selesai, dan perfect</div></div><input type="checkbox" ${s.celebrationVoice!==false?'checked':''} onchange="setAudioSetting('celebrationVoice',this.checked)"></div>
  <div class="section-title">🎚️ Test SFX ujian</div>
  <div class="small-actions"><button class="pill" onclick="previewAudio('correct')">✅ Benar</button><button class="pill" onclick="previewAudio('wrong')">❌ Salah</button><button class="pill" onclick="previewAudio('combo')">🔥 Combo</button><button class="pill" onclick="previewAudio('timeout')">⏱️ Time up</button></div>
  <div class="section-title">🎉 Test momen besar</div>
  <div class="small-actions"><button class="pill" onclick="previewAudio('greeting')">👋 Mulai</button><button class="pill" onclick="previewAudio('finish')">🎉 Selesai</button><button class="pill" onclick="previewAudio('perfect')">💯 Perfect</button></div>
  <div id="tenka-sound-pack-status" class="muted-box" style="margin-top:12px">Memeriksa celebration voice pack…</div>`;
}
function refresh(){
  const box=document.querySelector('#tenka-sound-engine');
  if(!box||box.dataset.examSoundV3==='1')return;
  box.dataset.examSoundV3='1';box.innerHTML=examSettingsHtml();
  setTimeout(()=>window.TENKA_SOUND_PACK?.renderStatus?.(),0);
}
function observe(){
  refresh();const app=document.querySelector('#app');
  if(app&&'MutationObserver'in window)new MutationObserver(()=>setTimeout(refresh,0)).observe(app,{childList:true,subtree:true});
}
window.TENKA_AUDIO_UI={version:'3.0.0',refresh};
setTimeout(observe,0);
})();