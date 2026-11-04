const assert=require('node:assert/strict'),vm=require('node:vm');
const boot=require('./helpers/boot-runtime');
const b=boot({storedProgress:{reviews:{'k-v-12':{rating:'good',due:'2030-01-01T00:00:00Z'}},houkokuEssayDone:{'r-13':'saved'},handoffDone:{'h-26':'saved'}}});
const reports=b.data.kaigo.houkoku,content=JSON.stringify(b.data);
let reviewed=0;
for(let index=0;index<reports.length;index++){
 const h=reports[index];b.context.openHoukokuPractice(index);
 b.context.houkokuShowResult();assert.equal(b.state.houkokuSession.stage,'puzzle','an unchecked attempt cannot open the model');
 b.context.houkokuPick(0);b.context.houkokuCheck();b.context.houkokuShowResult();assert.equal(b.state.houkokuSession.stage,'puzzle','an incomplete attempt cannot open the model');
 b.context.houkokuReset();
 const order=h.pieces.map((_,i)=>i).reverse();for(const i of order)b.context.houkokuPick(i);
 b.context.houkokuShowResult();assert.equal(b.state.houkokuSession.stage,'puzzle','even a full attempt must be checked first');
 const events=b.events.length;b.context.houkokuCheck();b.context.houkokuCheck();assert.equal(b.events.length,events+1);
 assert.equal(b.state.houkokuSession.correct,false);assert(!b.state.progress.houkokuDone[h.id]);
 const control=b.html.match(/<button[^>]+onclick="houkokuShowResult\(\)"[^>]*>Pelajari model →<\/button>/)?.[0];
 assert(control,'a checked wrong attempt offers a model-learning control');
 const progress=JSON.stringify(b.state.progress),selected=JSON.stringify(b.state.houkokuSession.selected);
 vm.runInContext(control.match(/onclick="([^"]+)"/)[1],b.context);
 b.context.houkokuShowResult();assert.equal(b.state.houkokuSession.stage,'result');assert.equal(b.events.length,events+1,'review adds no grading feedback');
 assert.equal(JSON.stringify(b.state.progress),progress,'opening the model cannot grant mastery or change SRS/scores');
 assert.equal(JSON.stringify(b.state.houkokuSession.selected),selected,'review preserves the learner\'s actual order');
 assert(b.html.includes('Belum ditandai selesai')&&b.html.includes(h.note));
 const attempt=b.html.match(/<section class="work-compare-card yours work-report-attempt">([\s\S]*?)<\/section>/)?.[1];assert(attempt,'the learner can compare their order with the model');
 let previous=-1;
 for(const i of order){const p=h.pieces[i],at=attempt.indexOf(p.text);assert(at>previous);previous=at;assert(attempt.includes(p.reading)&&attempt.includes(p.meaning));}
 const audio=b.html.match(/class="work-audio-btn" onclick="([^"]+)"/)?.[1];assert(audio);vm.runInContext(audio,b.context);assert.equal(b.spoken.at(-1),h.reading);
 assert(b.html.includes('Selesai')&&!b.html.includes('Kasus berikutnya'));b.context.finishHoukoku();assert.equal(b.state.view,'kaigo');assert.equal(b.state.houkokuSession,null);reviewed++;
}
assert.equal(JSON.stringify(b.data),content,'report review cannot change the content or keys');
assert.equal(Object.keys(b.state.progress.houkokuDone).length,0,'studying every model is not passing every puzzle');
const restored=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});
assert.equal(Object.keys(restored.state.progress.houkokuDone).length,0);assert(restored.state.progress.reviews['k-v-12']);assert.equal(restored.state.progress.houkokuEssayDone['r-13'],'saved');assert.equal(restored.state.progress.handoffDone['h-26'],'saved');assert.equal(restored.state.progress.total,0);
const replay=boot({storedProgress:{houkokuDone:{'r-13':'already-mastered'}}});replay.context.openHoukokuPractice(12);
const h=reports[12];for(let i=h.pieces.length-1;i>=0;i--)replay.context.houkokuPick(i);replay.context.houkokuCheck();replay.context.houkokuShowResult();assert.equal(replay.state.progress.houkokuDone['r-13'],'already-mastered','a wrong review preserves earlier mastery');
assert(replay.html.includes('Status selesai dari latihan sebelumnya tetap tersimpan.')&&!replay.html.includes('Belum ditandai selesai'),'replay feedback acknowledges the earlier completion');
replay.context.finishHoukoku();replay.context.openHoukokuPractice(12);for(let i=0;i<h.pieces.length;i++)replay.context.houkokuPick(i);replay.context.houkokuCheck();replay.context.houkokuShowResult();assert(replay.state.progress.houkokuDone[h.id]);assert(!replay.html.includes('work-report-attempt')&&!replay.html.includes('Belum ditandai selesai'),'correct flow retains its existing model screen');
console.log(`Kaigo report review: ${reviewed} wrong attempts; checked-only access, selected order, kana/audio, finite exit and mastery preservation passed.`);
