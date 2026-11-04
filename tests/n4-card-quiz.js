const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime'),coverage=require('../docs/n4-kotoba-coverage.json');
const {data:D,context,files}=load(),pack='content-pack-v51.js',policy=context.TENKA_N4_QUIZ;
assert(files.includes(pack)&&policy,'the real manifest loads N4 lexical teaching and practice policy');
const before={window:null};before.window=before;vm.createContext(before);
for(const f of files.filter(f=>f!==pack))vm.runInContext(fs.readFileSync(f,'utf8'),before);
for(const level of ['N5','N3','N2','N1'])assert.equal(JSON.stringify(D.jlpt[level]),JSON.stringify(before.TENKA_DATA.jlpt[level]),'preserve '+level);
assert.equal(JSON.stringify(D.kaigo),JSON.stringify(before.TENKA_DATA.kaigo));
for(const kind of ['grammar','kanji'])assert.equal(JSON.stringify(D.jlpt.N4[kind]),JSON.stringify(before.TENKA_DATA.jlpt.N4[kind]));
for(const c of before.TENKA_DATA.jlpt.N4.vocab){const now=D.jlpt.N4.vocab.find(x=>x.id===c.id);assert(now);for(const [k,v] of Object.entries(c))assert.equal(JSON.stringify(now[k]),JSON.stringify(v),'preserve legacy '+c.id+'/'+k);}
const snapshot=JSON.stringify(D);vm.runInContext(fs.readFileSync(pack,'utf8'),context);assert.equal(JSON.stringify(D),snapshot,'reload is idempotent');
const absent={window:{}};vm.runInNewContext(fs.readFileSync(pack,'utf8'),absent);assert.deepEqual(absent.window,{});
const byId=new Map(D.jlpt.N4.vocab.map(c=>[c.id,c]));assert.equal(byId.size,D.jlpt.N4.vocab.length);
for(const c of byId.values()){
 for(const f of ['term','reading','meaning','category','example','exampleReading','exampleMeaning','note'])assert(typeof c[f]==='string'&&c[f].trim(),c.id+'/'+f);
 for(const f of ['reading','exampleReading','extraExampleReading'])if(c[f])assert(!/\p{Script=Han}/u.test(c[f]),c.id+'/'+f+' must use authored kana');
 if(c.extraExample)assert(c.extraExampleReading&&c.extraExampleMeaning);
 assert(coverage.entries.some(e=>e.cardId===c.id&&e.term===c.term),'actual sense coverage: '+c.id);
 assert(policy.voice(c).endsWith(c.exampleReading)&&!/\p{Script=Han}/u.test(policy.voice(c)),'contextual kana: '+c.id);
}
assert.equal(coverage.status,'OPEN');assert.equal(coverage.officialJlptInventory,false);assert.equal(coverage.fullReferenceReconciliation,false);
assert.equal(new Set(coverage.entries.map(e=>e.cardId)).size,byId.size);
for(const e of coverage.entries){assert(byId.has(e.cardId)&&e.scope&&e.practice.length);assert(e.referenceMatches.some(r=>r.level==='N4'&&/^https:\/\//.test(r.url)));if(e.role==='application-extension'){assert.equal(e.countAsNewN4Word,false);assert(D.jlpt.N5.vocab.some(c=>c.id===e.canonicalCardId&&c.term===e.term),'real prerequisite');}}
const outward=coverage.entries.find(e=>e.cardId==='n4-v-14');assert(outward.referenceMatches.some(r=>r.source==='bunpro'&&r.level==='N2'),'retain the publisher level disagreement, not fabricated N4 lexical support');
const byTerm=t=>D.jlpt.N4.vocab.find(c=>c.term===t);
assert(!policy.allowed(byTerm('とうとう'),byTerm('やっと'))&&!policy.allowed(byTerm('やっと'),byTerm('とうとう')),'overlapping eventual outcomes cannot compete');
assert.equal(byTerm('だいたい').example.includes('十五分'),true,'actual numeric-approximation context');
assert(byTerm('また').example.includes('また、公園'),'actual additive connection, not only repetition');
assert(byTerm('取り出す').example.includes('から')&&byTerm('取り出す').extraExample.includes('から'),'outward contexts');
assert(byTerm('やっと').extraExample.includes('のがやっと'),'barely-able sense has its own example');

let runs=0;
for(const type of ['mix','listening'])for(const mode of ['wrong','timeout','correct']){
 let seed=61926;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296},seen=new Set();
 const target=type==='listening'?D.jlpt.N4.vocab:[...D.jlpt.N4.kanji,...D.jlpt.N4.vocab];
 for(let session=0;session<target.length*3&&seen.size<target.length;session++){
  const b=boot({random,storedProgress:{best:{['N4-'+type]:75},quizRuns:{['N4-'+type]:2},grammarDone:{'n5-g-01':'saved','n4-g-05':'saved'},reviews:{'n5-v-01':{rating:'good',due:'2030-01-01T00:00:00Z'}},handoffDone:{'h-26':'saved'}}});
  const cards=b.context.TENKA_CORE.allLevelCards('N4'),sources=new Map(cards.map(c=>[c.id,c]));
  b.context.startQuiz('N4',type);const q=b.state.quiz;assert.equal(b.state.returnView,'level');assert.equal(q.items.length,10);assert.equal(new Set(q.items.map(i=>i.sourceId)).size,10);
  if(type==='listening'){assert(b.html.includes('Pilih arti kata pertama'));assert(!b.html.includes('<div class="jp">'),'listening target is hidden');b.advance(80);assert.equal(b.spoken.at(-1),q.items[0].voiceText);}
  for(const item of q.items){
   const c=sources.get(item.sourceId);assert(c,'N4 isolation');seen.add(c.id);if(type==='listening')assert.equal(c._kind,'vocab');
   assert.equal(item.choices.length,4);assert.equal(new Set(item.choices).size,4);assert.equal(item.choices[item.answer],c.meaning);assert.equal(item.optionIds[item.answer],c.id);
   assert(item.example===c.example&&item.exampleReading===c.exampleReading&&item.exampleMeaning===c.exampleMeaning&&item.explanation);
   for(const id of item.optionIds.filter(id=>id!==c.id))assert(policy.allowed(c,sources.get(id)),'no competing overlapping glosses');
   assert(item.voiceText.endsWith(c.exampleReading)&&!/\p{Script=Han}/u.test(item.voiceText));
   const total=b.state.progress.total;if(mode==='timeout')b.advance(30000);else b.context.answerQuiz(mode==='correct'?item.answer:(item.answer+1)%item.choices.length);
   b.context.answerQuiz(item.answer);assert.equal(b.state.progress.total,total+1,'duplicate tap is ignored');b.advance(700);
  }
  b.advance(80);assert(q.finished&&q.saved);assert.equal(q.score,mode==='correct'?q.items.length:0);assert.equal((b.html.match(/class="muted-box quiz-review"/g)||[]).length,q.items.length);if(mode==='timeout')assert(b.html.includes('Waktu habis'));
  for(const item of q.items)assert(b.html.includes(item.exampleMeaning)&&b.html.includes(item.explanation),'actual translated review');
  b.context.TENKA_CORE.render();b.advance(100);assert.equal(b.state.progress.quizRuns['N4-'+type],3,'save once');assert.equal(b.events.length,q.items.length,'one reaction per question/session');
  const restored=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert.equal(restored.state.progress.best['N4-'+type],mode==='correct'?100:75);assert.equal(restored.state.progress.grammarDone['n5-g-01'],'saved');assert.equal(restored.state.progress.grammarDone['n4-g-05'],'saved');assert(restored.state.progress.reviews['n5-v-01']);assert.equal(restored.state.progress.handoffDone['h-26'],'saved');
  assert.equal(Object.keys(restored.state.progress.reviews).length,1,'quiz does not invent flashcard mastery');b.context.go('level');assert.equal(b.state.view,'level');runs++;
 }
 assert.equal(seen.size,target.length,type+'/'+mode+': all targets reached');
}
const b=boot();b.context.openFlash('N4','vocab');for(let i=0;i<b.state.cards.length;i++){b.state.cardIndex=i;b.context.TENKA_CORE.render();const c=b.state.cards[i];assert(b.html.includes(c.exampleReading));assert(b.html.includes(c.note));if(c.extraExample)assert(b.html.includes(c.extraExampleReading)&&b.html.includes(c.extraExampleMeaning),'second sense context reaches the actual card');assert(b.html.includes("speakText('"+policy.primaryReading(c)+"')"),'flash speech uses authored reading');}const c=b.state.cards[b.state.cardIndex];b.context.rateCard('good');const restored=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert(restored.state.progress.reviews[c.id],'N4 SRS survives reload');
console.log(`N4 lexical practice: ${byId.size} rich cards; all-target written/listening wrong-timeout-correct flows in ${runs} sessions, semantic exclusion, kana, review, finite exits, old progress and SRS passed. Full N4 remains OPEN.`);
