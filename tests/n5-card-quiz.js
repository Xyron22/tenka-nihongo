const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const boot=require('./helpers/boot-runtime'),load=require('./helpers/load-content');
const {data:D,context}=load(),policy=context.TENKA_N5_QUIZ;
assert(policy,'N5 practice policy is part of the boot manifest');
const byTerm=term=>D.jlpt.N5.vocab.find(c=>c.term===term)||D.jlpt.N5.kanji.find(c=>c.kanji===term);
// Independent semantic traps: these must never be presented as mutually exclusive answers.
for(const [a,b] of [['父','お父さん'],['母','お母さん'],['学生','生徒'],['友だち','友'],['学生','留学生'],['休む','休']]){
  const x=byTerm(a),y=byTerm(b);assert(x&&y,`fixture ${a}/${b}`);
  assert(!policy.allowed(x,y),`${a}/${b}: overlapping glosses need conservative exclusion`);
}
for(const [a,b] of [['箸','橋'],['雨','飴'],['花','鼻'],['着る','切る']]){
  const x=byTerm(a),y=byTerm(b);assert(x&&y,`homophone fixture ${a}/${b}`);
  assert.notEqual(policy.voice(x),policy.voice(y),'context must distinguish a homophone');
  for(const c of [x,y])assert(policy.voice(c).endsWith(c.exampleReading),'use authored kana context rather than kanji TTS guessing');
}
const snapshot=JSON.stringify(D.jlpt.N5);vm.runInContext(fs.readFileSync('content-pack-v26.js','utf8'),context);assert.equal(JSON.stringify(D.jlpt.N5),snapshot,'practice policy must not mutate learning content or IDs');
let seed=12345;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const b=boot({random}),cards=b.context.TENKA_CORE.allLevelCards('N5'),byId=new Map(cards.map(c=>[c.id,c]));
for(const mode of ['mix','listening']){
  const eligible=cards.filter(c=>(mode!=='listening'||c._kind==='vocab')&&!c.quizExcludeReason),seen=new Set();
  for(let session=0;session<2500&&seen.size<eligible.length;session++){
    b.context.startQuiz('N5',mode);const items=b.state.quiz.items;
    assert.equal(items.length,10);assert.equal(new Set(items.map(i=>i.sourceId)).size,10);
    for(const item of items){
      const source=byId.get(item.sourceId);assert(source&&!source.quizExcludeReason,'only eligible N5 sources');
      if(mode==='listening')assert.equal(source._kind,'vocab');seen.add(source.id);
      assert.equal(item.choices.length,4);assert.equal(new Set(item.choices).size,4);
      assert.equal(item.correct,source.meaning);assert.equal(item.choices[item.answer],source.meaning);
      assert.equal(item.optionIds[item.answer],source.id);
      for(const id of item.optionIds.filter(id=>id!==source.id))assert(policy.allowed(source,byId.get(id)),'no competing synonymous/umbrella gloss');
      assert(item.exampleReading&&item.exampleMeaning&&item.explanation,'context reaches review');
      assert(item.voiceText.endsWith(source.exampleReading)&&!/\p{Script=Han}/u.test(item.voiceText),'kana audio with an example');
    }
  }
  assert.equal(seen.size,eligible.length,`${mode}: entire eligible inventory reachable`);
  if(mode==='listening'){
    assert(b.html.includes('Pilih arti kata pertama'),'listening intent explained');
    assert(!b.html.includes('<div class="jp">'),'listening does not reveal the written answer');
    const q=b.state.quiz;b.advance(80);assert.equal(b.spoken.at(-1),q.items[0].voiceText);
    for(const item of q.items){b.context.answerQuiz(item.answer);b.advance(700)}b.advance(80);
    assert.equal(q.score,10);assert(b.html.includes('Pembahasan sesi')&&b.html.includes(q.items[0].exampleMeaning));
  }
}
// Excluding an ambiguous interjection from a quiz must not remove it from study/SRS.
const excluded=cards.filter(c=>c.quizExcludeReason);assert(excluded.length);
b.context.openFlash('N5','vocab');for(const c of excluded)assert(b.state.cards.some(x=>x.id===c.id));
// Non-N5 quiz pools keep their own content and remain usable.
for(const level of ['N4','N3','N2','N1']){
  b.context.startQuiz(level);assert(b.state.quiz.items.length);
  for(const q of b.state.quiz.items)assert(b.context.TENKA_CORE.allLevelCards(level).some(c=>c.id===q.sourceId),'level isolation');
}
b.context.startKaigoQuiz();for(const q of b.state.quiz.items)assert(b.data.kaigo.vocab.some(c=>c.id===q.sourceId));
console.log(`N5 card quiz: semantic traps, homophone audio, complete eligible coverage, review and level isolation passed (${excluded.length} contextual-only cards retained for study).`);
