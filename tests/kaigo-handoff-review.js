const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const {data:D,context,files}=load(),pack='content-pack-v33.js',reviews=context.TENKA_KAIGO_HANDOFF_REVIEW;
assert(files.includes(pack)&&reviews,'review metadata must follow the real boot manifest');
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of files.filter(f=>f!==pack))vm.runInContext(fs.readFileSync(file,'utf8'),baseline);
assert.equal(JSON.stringify(D),JSON.stringify(baseline.TENKA_DATA),'feedback cannot change any lesson, answer key or progress identity');
assert.deepEqual(new Set(Object.keys(reviews)),new Set(D.kaigo.handoff.map(h=>h.id)),'every installed case has a review and no foreign case is introduced');
for(const h of D.kaigo.handoff){
 const r=reviews[h.id];assert(r.explanation?.trim());assert(r.evidence.length>0);assert.equal(new Set(r.evidence).size,r.evidence.length);
 for(const i of r.evidence)assert(Number.isInteger(i)&&i>=0&&i<h.segments.length,'evidence points to an existing authored sentence');
}
const snapshot=JSON.stringify(D),reviewSnapshot=JSON.stringify(reviews);vm.runInContext(fs.readFileSync(pack,'utf8'),context);
assert.equal(JSON.stringify(D),snapshot);assert.equal(JSON.stringify(context.TENKA_KAIGO_HANDOFF_REVIEW),reviewSnapshot,'metadata reload is idempotent');
const absent={window:{}};vm.runInNewContext(fs.readFileSync(pack,'utf8'),absent);assert.deepEqual(absent.window,{});
let sessions=0;
for(const correct of [false,true]){
 const b=boot({storedProgress:{reviews:{'k-v-12':{rating:'good',due:'2030-01-01T00:00:00Z'}},houkokuDone:{'r-13':'saved'}}});
 for(let index=0;index<D.kaigo.handoff.length;index++){
  const h=D.kaigo.handoff[index],r=reviews[h.id];b.context.openHandoffPractice(index);
  assert(!b.html.includes('class="handoff-review"'),'read stage does not expose the answer explanation');
  b.context.handoffToQuestion();assert(!b.html.includes('class="handoff-review"'),'question stage does not expose the answer explanation');
  const choice=correct?h.answer:(h.answer+1)%h.choices.length,before=b.events.length;
  b.context.handoffAnswer(choice);b.context.handoffAnswer((choice+1)%h.choices.length);
  assert.equal(b.events.length,before+1);assert.equal(b.state.handoffSession.choice,choice,'duplicate tap cannot change the selected answer');
  assert.equal(!!b.state.progress.handoffDone[h.id],correct,'wrong answers are not recorded as mastery');
  assert(b.html.includes(r.explanation)&&b.html.includes(h.choices[h.answer]));
  assert(b.html.includes(correct?'class="handoff-review" >':'class="handoff-review" open>'),'wrong-answer explanation opens automatically; correct-answer explanation remains optional');
  if(!correct)assert(b.html.includes('Jawabanmu: '+h.choices[choice]));
  for(const i of r.evidence){const s=h.segments[i];assert(b.html.includes(`Kalimat ${i+1}`)&&b.html.includes(s.text)&&b.html.includes(s.reading)&&b.html.includes(s.meaning),'evidence retains the exact Japanese, kana and Indonesian sentence');}
  assert(b.html.includes('Selesai')&&!b.html.includes('Kasus berikutnya'));b.context.finishHandoff();assert.equal(b.state.view,'kaigo');assert.equal(b.state.handoffSession,null);sessions++;
 }
 const restored=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});
 for(const h of D.kaigo.handoff)assert.equal(!!restored.state.progress.handoffDone[h.id],correct);
 assert(restored.state.progress.reviews['k-v-12']);assert.equal(restored.state.progress.houkokuDone['r-13'],'saved');assert.equal(restored.state.progress.total,0);
}
const replay=boot({storedProgress:{handoffDone:{'h-26':'already-mastered'}}});replay.context.openHandoffPractice(25);replay.context.handoffToQuestion();replay.context.handoffAnswer(1);assert.equal(replay.state.progress.handoffDone['h-26'],'already-mastered','a wrong replay does not erase an earlier completion');
const fallback=boot();vm.runInContext('window.TENKA_KAIGO_HANDOFF_REVIEW=undefined',fallback.context);fallback.context.openHandoffPractice(0);fallback.context.handoffToQuestion();fallback.context.handoffAnswer(0);assert(fallback.html.includes('Selesai')&&!fallback.html.includes('class="handoff-review"'),'older content without metadata remains usable');
console.log(`Kaigo handoff review: ${D.kaigo.handoff.length} reviewed cases / ${sessions} wrong-and-correct sessions; evidence, answer visibility, finite exit and persistence passed.`);
