const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const {data:D,context,files}=load(),pack='content-pack-v30.js';
assert(files.includes(pack),'handoffs must be in the current boot manifest');
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of files.filter(f=>f!==pack))vm.runInContext(fs.readFileSync(file,'utf8'),baseline);
const prior=baseline.TENKA_DATA;
assert.equal(JSON.stringify(D.jlpt),JSON.stringify(prior.jlpt));
for(const key of ['vocab','tools','houkoku'])assert.equal(JSON.stringify(D.kaigo[key]),JSON.stringify(prior.kaigo[key]));
for(const old of prior.kaigo.handoff)assert.equal(JSON.stringify(D.kaigo.handoff.find(h=>h.id===old.id)),JSON.stringify(old),'legacy handoff stays byte-for-byte intact');
const handoffs=D.kaigo.handoff,added=handoffs.filter(h=>h.workplacePack==='9B-2');assert.equal(added.length,8);
assert.equal(new Set(handoffs.map(h=>h.id)).size,handoffs.length);
for(const h of handoffs){
 for(const field of ['text','reading','meaning','question'])assert(h[field]?.trim(),h.id+': '+field);
 assert(h.segments.length>=2);assert.equal(h.text,h.segments.map(s=>s.text).join(''));
 assert(!/\p{Script=Han}/u.test(h.reading));assert(Number.isInteger(h.answer)&&h.answer>=0&&h.answer<h.choices.length);assert.equal(new Set(h.choices).size,h.choices.length);
 for(const s of h.segments){assert(s.text.endsWith('。')&&s.reading.trim()&&s.meaning.trim());assert(!/\p{Script=Han}/u.test(s.reading));}
}
for(const h of added){assert.equal(h.choices.length,4);const r=D.kaigo.houkoku.find(r=>r.id===h.reportId);assert(r&&r.topic===h.topic,'handoff objective links to its report');assert.equal(h.reading,h.segments.map(s=>s.reading).join(''));}
const ledger=require('../docs/kaigo-workplace-practice.json');assert.equal(ledger.fullKaigoClosed,false);assert.equal(ledger.officialExamCoverage,false);
assert.equal(ledger.topics.length,added.length);for(const row of ledger.topics){const h=added.find(h=>h.id===row.handoffId);assert(h&&h.reportId===row.reportId&&h.topic===row.id&&row.objective&&row.answerReview,'reviewed communication objective must map to its practice');}
const snapshot=JSON.stringify(D);vm.runInContext(fs.readFileSync(pack,'utf8'),context);assert.equal(JSON.stringify(D),snapshot,'handoff reload is idempotent');
const absent={window:{}};vm.runInNewContext(fs.readFileSync(pack,'utf8'),absent);assert.deepEqual(absent.window,{});
const oldDone=Object.fromEntries(prior.kaigo.handoff.map(h=>[h.id,'2026-01-01T00:00:00Z'])),b=boot({storedProgress:{handoffDone:oldDone,houkokuDone:{'r-01':'saved'}}});
b.context.openHandoffPractice();assert.equal(handoffs[b.state.handoffSession.caseIndex].id,added[0].id,'old completions advance to the first new case');
// A wrong response is finite and must not be saved as mastered; a second tap cannot overwrite it.
const first=added[0];b.context.handoffToQuestion();b.context.handoffAnswer((first.answer+1)%4);b.context.handoffAnswer(first.answer);
assert.equal(b.state.handoffSession.correct,false);assert(!b.state.progress.handoffDone[first.id]);b.context.finishHandoff();
let sentences=0;
for(let index=0;index<handoffs.length;index++){
 const h=handoffs[index];b.context.openHandoffPractice(index);
 for(let i=0;i<h.segments.length;i++){
  const s=h.segments[i];sentences++;
  assert.equal(b.state.handoffSession.sentenceIndex,i);assert(b.html.includes(s.text)&&b.html.includes(s.reading)&&b.html.includes(s.meaning));
  if(i+1<h.segments.length)assert(!b.html.includes(h.segments[i+1].text),'one sentence at a time');
  const calls=[...b.html.matchAll(/onclick="(speakText\([^\"]+\))"/g)].map(m=>m[1]);assert.equal(calls.length,2,'normal and slow audio');
  for(const call of calls){vm.runInContext(call,b.context);assert.equal(b.spoken.at(-1),s.reading,'authored kana is sent to TTS');}
  if(i+1<h.segments.length)b.context.handoffNextSentence();
 }
 b.context.handoffToQuestion();assert(!b.html.includes('handoff-audio-grid'),'question does not reveal or replay the full answer');
 const before=b.events.length;b.context.handoffAnswer(h.answer);b.context.handoffAnswer((h.answer+1)%h.choices.length);
 assert.equal(b.events.length,before+1);assert.equal(b.state.handoffSession.correct,true);assert(b.state.progress.handoffDone[h.id]);
 assert(b.html.includes(h.choices[h.answer])&&b.html.includes('Selesai'));assert(!b.html.includes('Kasus berikutnya'));
 b.context.finishHandoff();assert.equal(b.state.view,'kaigo');assert.equal(b.state.handoffSession,null);
}
b.context.openHandoffPractice();assert.equal(b.state.view,'kaigo');assert.equal(b.state.handoffSession,null,'completed library cannot silently restart');
b.context.openHandoffPractice(0);assert.equal(b.state.view,'handoff','explicit replay remains possible');b.context.finishHandoff();
// Report audio uses the same authored readings in both model views, including new numeric cases.
for(let index=0;index<D.kaigo.houkoku.length;index++){
 const h=D.kaigo.houkoku[index];b.context.openHoukokuPractice(index);
 for(let i=0;i<h.pieces.length;i++)b.context.houkokuPick(i);b.context.houkokuCheck();b.context.houkokuShowResult();
 const audio=()=>{const call=b.html.match(/class="work-audio-btn" onclick="([^\"]+)"/)?.[1];assert(call);vm.runInContext(call,b.context);assert.equal(b.spoken.at(-1),h.reading);};audio();
 b.context.finishHoukoku();b.context.openHoukokuEssay(index);b.context.houkokuEssayReveal('確認をお願いします。');audio();b.context.finishHoukokuEssay(false);
}
assert(b.html.includes('Kaigo'));
const again=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});for(const h of handoffs)assert(again.state.progress.handoffDone[h.id]);
assert(again.state.progress.houkokuDone['r-01'],'earlier report progress survives handoff study');
console.log(`Kaigo handoff: ${handoffs.length} cases / ${sentences} sentences; kana audio, single-sentence comprehension, wrong/correct answers, explicit finish and reload passed.`);
