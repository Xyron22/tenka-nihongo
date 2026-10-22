const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const {data:D,context}=load(),cards=D.kaigo.vocab,policy=context.TENKA_KAIGO_QUIZ,byTerm=t=>cards.find(c=>c.term===t),byId=new Map(cards.map(c=>[c.id,c]));
assert(policy,'workplace audio/quiz policy loaded');
for(const [a,b]of [['介助','全介助'],['むせ','誤嚥'],['自立','自立支援'],['報告','連絡'],['病室','居室'],['食札','名札'],['タオル','バスタオル']])assert(!policy.allowed(byTerm(a),byTerm(b)),`${a}/${b}: overlapping answers excluded`);
assert(!policy.allowed(byTerm('シーツ'),byTerm('物品')),'generic equipment labels cannot be distracting second answers');
assert(policy.voice(byTerm('食札')).startsWith('しょくさつ。'));
assert(policy.voice(byTerm('SpO₂')).startsWith('エスピーオーツー。'),'acronym pronounced with its authored reading');
for(const c of cards)assert(!/\p{Script=Han}/u.test(policy.voice(c)),'no raw kanji ambiguity in audio');
const before=JSON.stringify(D);vm.runInContext(fs.readFileSync('content-pack-v29.js','utf8'),context);assert.equal(JSON.stringify(D),before,'practice policy cannot change the curriculum or IDs');
let seed=54321;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const b=boot({random});
for(const mode of ['kaigo','listening']){
 const seen=new Set();
 for(let session=0;session<600&&seen.size<cards.length;session++){
  b.context.startKaigoQuiz(mode);
  for(const q of b.state.quiz.items){
   const source=byId.get(q.sourceId);assert(source,'Kaigo-only source');seen.add(source.id);
   assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.equal(q.choices[q.answer],source.meaning);
   assert.equal(q.voiceText,policy.voice(source));assert.equal(q.exampleReading,source.exampleReading);assert.equal(q.exampleMeaning,source.exampleMeaning);assert(q.explanation&&q.audioContext);
   for(const id of q.optionIds.filter(id=>id!==source.id))assert(policy.allowed(source,byId.get(id)),'semantic distractor exclusions reach runtime');
  }
 }
 assert.equal(seen.size,cards.length,`${mode}: complete old/new inventory remains reachable`);
}
assert(b.html.includes('Pilih arti kata pertama')&&!b.html.includes('<div class="jp">'),'listening hides the written target and states its intent');
b.advance(80);assert.equal(b.spoken.at(-1),b.state.quiz.items[0].voiceText);
const q=b.state.quiz;
for(let i=0;i<q.items.length;i++){
 const item=q.items[i],before=b.state.progress.total;
 if(i===0)b.advance(30000);else b.context.answerQuiz(i===9?(item.answer+1)%4:item.answer);
 b.context.answerQuiz(item.answer);assert.equal(b.state.progress.total,before+1,'duplicate taps cannot count twice');b.advance(700);
}
b.advance(80);assert.equal(q.score,8);assert(q.finished&&q.saved);
assert.equal(b.state.progress.quizRuns['KAIGO-kaigo-listening'],1);assert.equal(b.events.length,10);assert.equal(b.events[0],'timeout');assert.equal(b.events.at(-1),'finish');
assert(b.html.includes('Pembahasan sesi')&&b.html.includes('Waktu habis')&&b.html.includes(q.items[0].exampleMeaning),'completed session explains missed answers');
b.context.TENKA_CORE.render();b.advance(100);assert.equal(b.state.progress.quizRuns['KAIGO-kaigo-listening'],1);
const again=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert.equal(again.state.progress.best['KAIGO-kaigo-listening'],80,'quiz result survives reload');
b.context.openKaigoFlash();b.state.cardIndex=b.state.cards.findIndex(c=>c.term==='食札');b.context.TENKA_CORE.render();
assert(b.html.includes("speakText('しょくさつ')"),'flashcard audio uses the authored reading too');
assert(b.html.includes('kaigo-flash'),'workplace cards use the content-sized layout');
console.log(`Kaigo listening: all ${cards.length} targets, authored kana, semantic exclusions, timeout/results, persistence and flash pronunciation passed.`);
