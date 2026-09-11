import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT=process.cwd();
const DIR=path.join(ROOT,'assets','audio','voicevox');
const OUT=path.join(ROOT,'assets','audio','manifest.json');
const EVENTS=['greeting','finish','perfect'];
const VOICE_BY_VARIANT={f1:'女声1',f2:'女声2',f3:'女声3'};

let files=[];try{files=await fs.readdir(DIR)}catch{}
files=files.filter(f=>/\.wav$/i.test(f)).sort();
const entries=[];
for(const file of files){
  const m=file.match(/^(greeting|finish|perfect)-(f[123])\.wav$/i);if(!m)continue;
  const event=m[1].toLowerCase(),variant=m[2].toLowerCase();
  const st=await fs.stat(path.join(DIR,file));
  if(st.size<1000)throw new Error(`VOICEVOX asset too small: ${file} (${st.size} bytes)`);
  entries.push({source:'voicevox',role:'celebration-voice',event,path:`./assets/audio/voicevox/${file}`,label:`VOICEVOX Nemo ${VOICE_BY_VARIANT[variant]} — ${event}`,voice:VOICE_BY_VARIANT[variant],sourcePage:'https://voicevox.hiroshiba.jp/nemo/',credit:`VOICEVOX Nemo: ${VOICE_BY_VARIANT[variant]}`,bytes:st.size});
}
for(const event of EVENTS){const clips=entries.filter(e=>e.event===event),voices=new Set(clips.map(e=>e.voice));if(clips.length!==3||voices.size!==3)throw new Error(`${event}: expected exactly 3 VOICEVOX voices, got ${clips.length} clips / ${voices.size} voices`)}
if(entries.length!==9)throw new Error(`Expected 9 celebration voice assets, got ${entries.length}`);
const eventCounts=Object.fromEntries(EVENTS.map(e=>[e,entries.filter(x=>x.event===e).length]));
const manifest={version:'3.0.0',generatedAt:new Date().toISOString(),counts:{voicevox:entries.length},eventCounts,entries,credits:[{source:'voicevox',text:'VOICEVOX Nemo: 女声1・女声2・女声3',url:'https://voicevox.hiroshiba.jp/nemo/'}]};
await fs.mkdir(path.dirname(OUT),{recursive:true});await fs.writeFile(OUT,JSON.stringify(manifest,null,2)+'\n','utf8');
console.log('TENKA Exam Sound v3 manifest:',entries.length,'celebration voices',eventCounts);
