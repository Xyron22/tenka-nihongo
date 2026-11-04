const assert=require('node:assert/strict');
const boot=require('./helpers/boot-runtime');
let seed=91357,sessions=0,reviews=0;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
for(const mode of ['wrong','timeout','correct']){
 const seen=new Set();let inventorySize=0;
 for(let session=0;session<12&&(!inventorySize||seen.size<inventorySize);session++){
  const b=boot({random,storedProgress:{total:7,correct:5,best:{'KAIGO-medical-tools':75},quizRuns:{'KAIGO-medical-tools':2},reviews:{'tool-04':{rating:'good',due:'2030-01-01T00:00:00Z'}},houkokuDone:{'r-13':'saved'},houkokuEssayDone:{'r-13':'saved'},handoffDone:{'h-26':'saved'}}});
  const tools=b.data.kaigo.tools,byId=new Map(tools.map(t=>[t.id,t])),content=JSON.stringify(b.data);inventorySize=tools.length;
  b.context.startMedicalToolQuiz();const q=b.state.quiz;assert.equal(b.state.returnView,'medicalTools');assert(q.items.length>0&&q.items.length<=10);b.advance(80);assert.equal(b.spoken.length,0,'the image question does not speak its answer');
  for(const item of q.items){
   const t=byId.get(item.sourceId);assert(t,'each image question identifies its existing source lesson');seen.add(t.id);
   assert.equal(item.choices.length,4);assert.equal(new Set(item.choices).size,4);assert.equal(item.choices[item.answer],`${t.term} — ${t.meaning}`);
   assert.equal(item.image,t.image);assert.equal(item.explanation,t.functionID);assert.equal(JSON.stringify(item.toolReview),JSON.stringify(t),'review metadata retains the complete authored lesson');
   const question=b.html.match(/<section class="question[^>]*>([\s\S]*?)<\/section>/)?.[1];assert(question&&question.includes(t.image));assert(!question.includes(t.term)&&!question.includes(t.reading)&&!question.includes(t.functionJP),'question image/alt cannot reveal the target or explanation');assert(!b.html.includes('quiz-review'));
   const total=b.state.progress.total,choice=mode==='correct'?item.answer:(item.answer+1)%4;
   if(mode==='timeout')b.advance(30000);else b.context.answerQuiz(choice);
   b.context.answerQuiz(item.answer);assert.equal(b.state.progress.total,total+1,'duplicate taps count once');assert.equal(item.selected,mode==='timeout'?-1:choice);b.advance(700);
  }
  b.advance(80);assert(q.finished&&q.saved);assert.equal(q.score,mode==='correct'?q.items.length:0);assert.equal(b.state.progress.total,7+q.items.length);assert.equal(b.events.length,q.items.length,'one feedback per nonfinal answer and one final result');assert.equal(b.events.at(-1),mode==='correct'?'perfect':'finish');
  assert.equal((b.html.match(/class="muted-box quiz-review"/g)||[]).length,q.items.length,'every image answer has a result review');
  for(const item of q.items){const t=byId.get(item.sourceId);for(const text of [t.term,t.reading,t.functionJP,t.functionReading,t.functionID,t.example,t.exampleReading,t.exampleMeaning])assert(b.html.includes(text),`${t.id}: reviewed lesson text`);assert(b.html.includes(`src="${t.image}"`));if(t.safetyNote)for(const text of [t.safetyNote,t.safetyNoteReading,t.safetyNoteMeaning])assert(b.html.includes(text),'existing usage caution remains visible');reviews++;}
  if(mode==='timeout')assert(b.html.includes('Waktu habis'));else for(const item of q.items)assert(b.html.includes(item.choices[item.selected]));
  const expectedBest=mode==='correct'?100:75;assert.equal(b.state.progress.best['KAIGO-medical-tools'],expectedBest);assert.equal(b.state.progress.quizRuns['KAIGO-medical-tools'],3);b.context.TENKA_CORE.render();b.advance(100);assert.equal(b.state.progress.quizRuns['KAIGO-medical-tools'],3);assert.equal(b.events.length,q.items.length);assert.equal(b.spoken.length,0);
  assert.equal(JSON.stringify(b.data),content,'quiz review cannot change content, images or keys');
  const restored=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert.equal(restored.state.progress.best['KAIGO-medical-tools'],expectedBest);assert.equal(restored.state.progress.quizRuns['KAIGO-medical-tools'],3);assert.equal(restored.state.progress.reviews['tool-04'].due,'2030-01-01T00:00:00Z');assert.equal(restored.state.progress.houkokuDone['r-13'],'saved');assert.equal(restored.state.progress.houkokuEssayDone['r-13'],'saved');assert.equal(restored.state.progress.handoffDone['h-26'],'saved');
  assert(b.html.includes('Selesai')&&!b.html.includes('Mulai lagi'));b.context.go('medicalTools');assert.equal(b.state.view,'medicalTools');sessions++;
 }
 assert.equal(seen.size,inventorySize,`${mode}: every illustrated lesson remains reachable`);
}
console.log(`Kaigo tool quiz: ${sessions} complete sessions / ${reviews} reviewed answers; every tool in wrong, timeout and correct flows, hidden question target, translated review, save-once results and old progress passed.`);
