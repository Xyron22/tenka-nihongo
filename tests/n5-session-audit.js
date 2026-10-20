const assert=require('node:assert/strict'),boot=require('./helpers/boot-runtime');
const today=new Date(),localDate=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
const old={reviews:{'n5-k-01':{due:'2020-01-01T00:00:00.000Z',intervalDays:2},'n5-v-01':{due:'2020-01-01T00:00:00.000Z',intervalDays:1}},grammarDone:{'n5-g-01':'2026-10-01'},quizRuns:{'N5-mix':3},best:{'N5-mix':90},correct:7,total:10,streak:4,lastStudy:localDate};
const migrated=boot({storedProgress:old}),core=migrated.context.TENKA_CORE;
assert.equal(JSON.stringify(migrated.state.progress.reviews),JSON.stringify(old.reviews),'legacy SRS records survive');
assert.equal(core.dueCards('N5').length,2);assert(migrated.html.includes('Review 2 kartu'));
migrated.context.openReview('N5');assert.equal(migrated.state.cards.length,2);
migrated.context.rateCard('good');assert.equal(migrated.state.cards.length,1);assert.equal(core.dueCards('N5').length,1);
assert(migrated.state.progress.daily[localDate].reviewed.includes('n5-k-01'),'SRS review reaches Daily Mission');
migrated.context.openGrammar('N5');assert(migrated.html.includes('1/97 pola'),'legacy grammar completion uses current inventory');
migrated.context.toggleGrammar('n5-g-97');assert(migrated.state.progress.grammarDone['n5-g-97']);assert(migrated.state.progress.grammarDone['n5-g-01']);
const restored=boot({storedProgress:JSON.parse(migrated.storage['tenka-progress'])});
assert.equal(restored.state.progress.streak,4);assert(restored.state.progress.grammarDone['n5-g-97']);
assert.equal(restored.context.TENKA_CORE.dueCards('N5').length,1,'new SRS schedule survives reload');

for(const mode of ['mix','listening','grammar']){
 const b=boot({storedProgress:old});
 mode==='grammar'?b.context.startGrammarQuiz('N5'):b.context.startQuiz('N5',mode);
 const q=b.state.quiz,initialTotal=b.state.progress.total,initialCorrect=b.state.progress.correct,key=`N5-${mode}`,priorRuns=b.state.progress.quizRuns[key]||0;
 let score=0;
 for(let i=0;i<q.items.length;i++){
   const item=q.items[i],before=b.state.progress.total;
   if(i===0){b.advance(30000);assert.equal(item.selected,-1,'timer records an unanswered question')}
   else{
     const correct=i%2===0,index=correct?item.answer:(item.answer+1)%item.choices.length;
     b.context.answerQuiz(index);b.context.answerQuiz(item.answer);if(correct)score++;
   }
   assert.equal(b.state.progress.total,before+1,'one attempt per question');
   b.advance(700);
 }
 b.advance(80);assert(q.finished&&q.saved);assert.equal(q.score,score);
 assert.equal(b.state.progress.total,initialTotal+10);assert.equal(b.state.progress.correct,initialCorrect+score);
 assert.equal(b.state.progress.quizRuns[key],priorRuns+1);assert.equal(b.state.progress.daily[localDate].quizzes,1);
 assert.equal(b.events.length,10,'nine per-question reactions and one result sound');assert.equal(b.events[0],'timeout');assert.equal(b.events.at(-1),'finish');
 assert(b.html.includes('Waktu habis')&&b.html.includes('Perlu diulang')&&b.html.includes('Pembahasan sesi'));
 for(let render=0;render<3;render++){b.context.TENKA_CORE.render();b.advance(100)}
 assert.equal(b.state.progress.quizRuns[key],priorRuns+1,'result rerender never resaves the session');assert.equal(b.events.length,10);
 if(mode==='mix')assert.equal(b.state.progress.best[key],90,'a lower score must not replace the previous best');
 const reload=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert.equal(reload.state.progress.quizRuns[key],priorRuns+1);
 b.context.go(mode==='grammar'?'grammar':'level');assert.equal(b.state.view,mode==='grammar'?'grammar':'level');
}
// Navigation/new-session boundaries must cancel delayed pronunciation from an old question.
{
 const b=boot();b.context.startQuiz('N5','listening');b.context.go('home');b.advance(100);assert.equal(b.spoken.length,0);
 b.context.startQuiz('N5','listening');const oldSession=b.state.quiz;b.context.startQuiz('N5','listening');b.advance(100);
 assert.notEqual(b.state.quiz,oldSession);assert.equal(b.spoken.length,1,'only current session may speak');
 b.context.answerQuiz(b.state.quiz.items[0].answer);b.context.startGrammarQuiz('N5');const current=b.state.quiz;
 b.advance(800);assert.equal(b.state.quiz,current);assert.equal(current.i,0,'old advance callback cannot skip a new question');
}
const g=restored.data.jlpt.N5.grammar.find(g=>g.id==='n5-g-51');assert(!g.quiz.choices.includes('ねる'),'dictionary-form comparison is also grammatical and must not compete with affirmative Vた advice');
console.log('N5 session audit: old progress, SRS/Daily, wrong answers, timeout, one-save scoring, reload and stale-session boundaries passed.');
