// Stage 9A-3: conservative workplace quiz distractors and authored kana pronunciation.
(()=>{
'use strict';
if(!window.TENKA_DATA?.kaigo?.vocab)return;
const umbrella=new Set(['物品','備品','消耗品','介助','対応','変化']);
const groups=[
 /bantuan|membantu|dukungan/,/mandiri|kemandirian/,/nyeri|sakit/,/napas|pernapasan/,
 /menelan|tersedak|aspirasi/,/lelah|kelelahan/,/laporan|melaporkan|serah terima|menghubungi|memberi kabar/,
 /berjalan|berpindah|transfer/,/pakaian|gaun|celemek/,/handuk|lap untuk membersihkan tubuh/,
 /seprai|futon|selimut|sarung bantal/,/stok|persediaan/
];
const stop=new Set(['untuk','dengan','dalam','pada','dari','atau','yang','saat','seperti','jenis','secara','bentuk','sebagai','bagian']);
const cache=new Map();
function features(c){
 const key=c.id+'|'+c.meaning;if(cache.has(key))return cache.get(key);
 const text=String(c.meaning||'').toLowerCase().replace(/\([^)]*\)/g,' ').replace(/[^a-z0-9]+/g,' ').trim();
 const value={text,words:text.split(' ').filter(w=>w.length>=4&&!stop.has(w)),groups:groups.flatMap((g,i)=>g.test(text)?[i]:[])};cache.set(key,value);return value;
}
function allowed(a,b){
 if(a.id===b.id||a.term===b.term||umbrella.has(b.term)||a.quizGroup&&a.quizGroup===b.quizGroup)return false;
 const x=features(a),y=features(b);if(!x.text||!y.text)return false;
 return !(x.text===y.text||x.text.includes(y.text)||y.text.includes(x.text)||x.words.some(w=>y.text.includes(w))||y.words.some(w=>x.text.includes(w))||x.groups.some(g=>y.groups.includes(g)));
}
function primaryReading(c){return String(c.reading||c.term||'').trim()}
function voice(c){return c.exampleReading?primaryReading(c)+'。'+c.exampleReading:primaryReading(c)}
window.TENKA_KAIGO_QUIZ={allowed,primaryReading,voice};
})();
