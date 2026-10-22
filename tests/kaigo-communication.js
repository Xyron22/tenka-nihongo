const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const ledger=require('../docs/kaigo-communication-coverage.json'),{data:D,context,files}=load(),pack='content-pack-v31.js';
assert(files.includes(pack));
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of files.filter(f=>f!==pack))vm.runInContext(fs.readFileSync(file,'utf8'),baseline);
const prior=baseline.TENKA_DATA;
assert.equal(JSON.stringify(D.jlpt),JSON.stringify(prior.jlpt),'communication pack cannot change any JLPT curriculum');
for(const key of ['tools','handoff','houkoku'])assert.equal(JSON.stringify(D.kaigo[key]),JSON.stringify(prior.kaigo[key]));
for(const old of prior.kaigo.vocab)assert.equal(JSON.stringify(D.kaigo.vocab.find(c=>c.id===old.id)),JSON.stringify(old),'complete legacy card stays intact');
const added=D.kaigo.vocab.filter(c=>c.workplacePack==='9C-1'),byTerm=t=>D.kaigo.vocab.find(c=>c.term===t);
assert.equal(added.length,12);assert.equal(new Set(added.map(c=>c.id)).size,added.length);
assert.equal(ledger.fullKaigoClosed,false);assert.equal(ledger.officialExamCoverage,false);
const mapped=ledger.objectives.flatMap(row=>row.vocabIds);assert.equal(new Set(mapped).size,mapped.length);assert.deepEqual(new Set(mapped),new Set(added.map(c=>c.id)),'every new card has one reviewed learning objective');
for(const row of ledger.objectives){assert(row.intent&&row.status);for(const id of row.vocabIds)assert.equal(added.find(c=>c.id===id)?.communicationObjective,row.id);}
const policy=context.TENKA_KAIGO_QUIZ;
for(const c of added){
 for(const field of ['term','reading','meaning','example','exampleReading','exampleMeaning','note','communicationObjective'])assert(c[field]?.trim(),c.id+': '+field);
 assert.equal(c.category,'Komunikasi & pilihan pribadi');assert(c.example.includes(c.term));
 for(const field of ['reading','exampleReading'])assert(!/\p{Script=Han}/u.test(c[field]),c.id+': authored kana');
 assert.equal(policy.voice(c),c.reading+'。'+c.exampleReading);
}
for(const [a,b]of [['意思','希望'],['選択','拒否'],['復唱','聞き返し'],['付き添い','見守り']]){
 assert(!policy.allowed(byTerm(a),byTerm(b))&&!policy.allowed(byTerm(b),byTerm(a)),a+'/'+b+': overlapping glosses cannot compete');
}
const snapshot=JSON.stringify(D);vm.runInContext(fs.readFileSync(pack,'utf8'),context);assert.equal(JSON.stringify(D),snapshot,'reload is idempotent');
const absent={window:{}};vm.runInNewContext(fs.readFileSync(pack,'utf8'),absent);assert.deepEqual(absent.window,{});
const b=boot({storedProgress:{reviews:{'k-v-12':{rating:'good',due:'2030-01-01T00:00:00Z'}},houkokuDone:{'r-13':'saved'},handoffDone:{'h-13':'saved'}}});
b.context.go('kaigo');assert(b.html.includes('Komunikasi & pilihan pribadi'),'category discoverable');b.context.openKaigoCategory('Komunikasi & pilihan pribadi');
assert.equal(b.state.cards.length,added.length);assert(b.state.cards.every(c=>c.workplacePack==='9C-1'));
const first=b.state.cards[0];assert(b.html.includes(first.note)&&b.html.includes(first.exampleReading));b.context.rateCard('good');assert.equal(b.events.length,0,'new SRS study stays audio-neutral');
const again=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert(again.state.progress.reviews[first.id]&&again.state.progress.reviews['k-v-12']);assert.equal(again.state.progress.houkokuDone['r-13'],'saved');assert.equal(again.state.progress.handoffDone['h-13'],'saved');
console.log(`Kaigo communication: ${added.length} kana-complete cards; objective coverage, semantic distinctions, legacy content and SRS persistence passed.`);
// Current-runtime practice for every communication objective, after old cases are complete.
const handoffPack='content-pack-v32.js';assert(files.includes(handoffPack));
const prePractice={window:null};prePractice.window=prePractice;vm.createContext(prePractice);
for(const file of files.filter(f=>f!==handoffPack))vm.runInContext(fs.readFileSync(file,'utf8'),prePractice);
const previous=prePractice.TENKA_DATA;
assert.equal(JSON.stringify(D.jlpt),JSON.stringify(previous.jlpt));
for(const key of ['vocab','houkoku','tools'])assert.equal(JSON.stringify(D.kaigo[key]),JSON.stringify(previous.kaigo[key]));
for(const h of previous.kaigo.handoff)assert.equal(JSON.stringify(D.kaigo.handoff.find(x=>x.id===h.id)),JSON.stringify(h),'new scenarios preserve every old handoff');
const practice=D.kaigo.handoff.filter(h=>h.workplacePack==='9C-2');assert.equal(practice.length,6);
assert.deepEqual(new Set(ledger.objectives.flatMap(row=>row.handoffIds)),new Set(practice.map(h=>h.id)),'each objective has a reviewed practice case');
for(const row of ledger.objectives){
 assert.equal(row.status,'vocabulary-and-practice-ready');assert(row.answerReview&&row.contrast);
 for(const id of row.handoffIds)assert.equal(practice.find(h=>h.id===id)?.communicationObjective,row.id);
}
for(const h of practice){
 assert.equal(h.segments.length,3);assert.equal(h.choices.length,4);assert.equal(new Set(h.choices).size,4);assert(Number.isInteger(h.answer)&&h.answer>=0&&h.answer<4);
 assert(h.question);assert.equal(h.text,h.segments.map(s=>s.text).join(''));assert.equal(h.reading,h.segments.map(s=>s.reading).join(''));
 for(const s of h.segments)assert(s.text.endsWith('。')&&s.meaning.trim()&&s.reading.trim()&&!/\p{Script=Han}/u.test(s.reading));
}
const beforePractice=JSON.stringify(D);vm.runInContext(fs.readFileSync(handoffPack,'utf8'),context);assert.equal(JSON.stringify(D),beforePractice);
const missing={window:{}};vm.runInNewContext(fs.readFileSync(handoffPack,'utf8'),missing);assert.deepEqual(missing.window,{});
const done=Object.fromEntries(previous.kaigo.handoff.map(h=>[h.id,'2026-01-01T00:00:00Z']));
const p=boot({storedProgress:{handoffDone:done,reviews:{'k-v-141':{rating:'good',due:'2030-01-01T00:00:00Z'}},houkokuDone:{'r-13':'saved'}}});
p.context.openHandoffPractice();assert.equal(D.kaigo.handoff[p.state.handoffSession.caseIndex].id,practice[0].id,'prior completions lead to new communication cases');
p.context.handoffToQuestion();p.context.handoffAnswer((practice[0].answer+1)%4);p.context.handoffAnswer(practice[0].answer);
assert.equal(p.state.handoffSession.correct,false);assert(!p.state.progress.handoffDone[practice[0].id]);p.context.finishHandoff();
for(const h of practice){
 p.context.openHandoffPractice();assert.equal(D.kaigo.handoff[p.state.handoffSession.caseIndex].id,h.id);
 for(let i=0;i<h.segments.length;i++){
  const s=h.segments[i];assert(p.html.includes(s.text)&&p.html.includes(s.reading)&&p.html.includes(s.meaning));
  if(i+1<h.segments.length){assert(!p.html.includes(h.segments[i+1].text),'next sentence remains separate');p.context.handoffNextSentence();}
 }
 p.context.handoffToQuestion();const count=p.events.length;p.context.handoffAnswer(h.answer);p.context.handoffAnswer((h.answer+1)%4);
 assert.equal(p.events.length,count+1);assert.equal(p.state.handoffSession.correct,true);assert(p.state.progress.handoffDone[h.id]);assert(p.html.includes(h.choices[h.answer]));
 p.context.finishHandoff();assert.equal(p.state.view,'kaigo');assert.equal(p.state.handoffSession,null);
}
p.context.openHandoffPractice();assert.equal(p.state.view,'kaigo');assert.equal(p.state.handoffSession,null,'completed library does not restart automatically');
const restored=boot({storedProgress:JSON.parse(p.storage['tenka-progress'])});
for(const h of D.kaigo.handoff)assert(restored.state.progress.handoffDone[h.id],'old and new mastery survive reload');
assert(restored.state.progress.reviews['k-v-141']);assert.equal(restored.state.progress.houkokuDone['r-13'],'saved');assert.equal(restored.state.progress.total,0);
console.log(`Kaigo communication practice: ${practice.length} linked cases; comprehension, retry, one feedback, finite sessions and reload passed.`);
