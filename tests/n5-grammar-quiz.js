const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const loadContent=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const {data:D,context}=loadContent(),grammar=D.jlpt.N5.grammar;
for(const g of grammar){
  const q=g.quiz;assert(q,`${g.id}: reviewed question required`);
  for(const field of ['prompt','reading','context','explanation'])assert(q[field]?.trim(),`${g.id}: ${field}`);
  assert(q.prompt.includes('〔　〕')&&q.reading.includes('〔　〕'),`${g.id}: cloze and kana scaffold`);
  assert(!/\p{Script=Han}/u.test(q.reading),`${g.id}: kana reading required`);
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);
  assert(q.choices.every(c=>/^[\p{Script=Hiragana}ー]+$/u.test(c)),`${g.id}: readable kana choices`);
  assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length);
}
const before=JSON.stringify(grammar);vm.runInContext(fs.readFileSync('content-pack-v25.js','utf8'),context);assert.equal(JSON.stringify(grammar),before,'pack reload must be idempotent');
// Seeded sessions exercise the full unchanged lesson pool through the real sampling path.
let seed=1;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const b=boot({random}),original=b.data.jlpt.N5.grammar.slice(),seen=new Set();
for(let session=0;session<200;session++){
  b.context.startGrammarQuiz('N5');
  const items=b.state.quiz.items;assert.equal(items.length,10);assert.equal(new Set(items.map(i=>i.sourceId)).size,10);
  for(const item of items){
    const source=original.find(g=>g.id===item.sourceId);assert(source,'N5 source isolation');seen.add(item.sourceId);
    assert.equal(item.correct,source.quiz.choices[source.quiz.answer]);assert.equal(item.choices[item.answer],item.correct);
    assert.deepEqual([...item.choices].sort(),[...source.quiz.choices].sort(),'shuffle must preserve authored options');
    assert(item.contextual&&item.explanation,'context and explanation reach runtime');
  }
}
assert.equal(seen.size,original.length,'all lessons reachable; no fixed early subset');
assert(b.html.includes('Lengkapi kalimat sesuai petunjuk')&&b.html.includes('quiz-help'),'context visible');
// Full session, duplicate answer guard, result review, save-once and explicit finish.
const q=b.state.quiz;
for(let i=0;i<q.items.length;i++){
  const item=q.items[i],total=b.state.progress.total;b.context.answerQuiz(item.answer);b.context.answerQuiz(item.answer);
  assert.equal(b.state.progress.total,total+1,'double tap cannot count twice');b.advance(700);
}
b.advance(80);assert(q.finished&&q.saved);assert.equal(q.score,10);assert.equal(b.state.progress.quizRuns['N5-grammar'],1);
assert.equal(b.events.filter(e=>e==='perfect').length,1);assert.equal(b.events.filter(e=>e==='correct').length,9);
assert(b.html.includes('Pembahasan sesi')&&b.html.includes('Jawabanmu:')&&b.html.includes('Selesai'));
assert(!b.html.includes('Main lagi'),'no automatic replay');
b.context.TENKA_CORE.render();b.advance(100);assert.equal(b.state.progress.quizRuns['N5-grammar'],1);assert.equal(b.events.filter(e=>e==='perfect').length,1);
b.context.go('grammar');assert.equal(b.state.view,'grammar');
console.log(`N5 contextual quiz: ${grammar.length} reviewed questions reachable; answers, feedback and result review passed.`);
