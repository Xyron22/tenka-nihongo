const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const {data:D,context,files}=load(),pack='houkoku-pack-v3.js';
assert(files.includes(pack),'workplace reports must follow the real boot manifest');
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of files.filter(f=>f!==pack))vm.runInContext(fs.readFileSync(file,'utf8'),baseline);
const prior=baseline.TENKA_DATA;
assert.equal(JSON.stringify(D.jlpt),JSON.stringify(prior.jlpt),'all JLPT content stays intact');
for(const key of ['vocab','tools','handoff'])assert.equal(JSON.stringify(D.kaigo[key]),JSON.stringify(prior.kaigo[key]),`report pack cannot alter ${key}`);
for(const old of prior.kaigo.houkoku)assert.equal(JSON.stringify(D.kaigo.houkoku.find(h=>h.id===old.id)),JSON.stringify(old),'preserve complete legacy report and progress identity');
const reports=D.kaigo.houkoku,newReports=reports.filter(h=>h.workplacePack==='9B-1');
assert.equal(newReports.length,8);assert.equal(new Set(reports.map(h=>h.id)).size,reports.length);
assert.equal(new Set(newReports.map(h=>h.topic)).size,newReports.length,'distinct communication objectives');
for(const h of reports){
 for(const field of ['id','title','titleReading','situation','reading','meaning','note'])assert(h[field]?.trim(),`${h.id}: ${field}`);
 assert(h.pieces.length>=3);assert.equal(new Set(h.pieces.map(p=>p.text)).size,h.pieces.length);
 assert(!/\p{Script=Han}/u.test(h.titleReading));
 for(const p of h.pieces){for(const field of ['text','reading','meaning'])assert(p[field]?.trim());assert(!/\p{Script=Han}/u.test(p.reading));}
}
for(const h of newReports){assert.equal(h.reading,h.pieces.map(p=>p.reading).join(''));assert.equal(h.meaning,h.pieces.map(p=>p.meaning).join(' '));}
const count=newReports.find(h=>h.topic==='meal-count');
assert(count.pieces.some(p=>p.text.includes('42枚')&&p.text.includes('41枚')&&p.reading.includes('よんじゅうにまい')&&p.reading.includes('よんじゅういちまい')),'explicit count readings reach the 42-versus-41 lesson');
assert(count.note.includes('人（にん）')&&count.note.includes('枚（まい）'),'people versus cards distinction');
const snapshot=JSON.stringify(D);vm.runInContext(fs.readFileSync(pack,'utf8'),context);assert.equal(JSON.stringify(D),snapshot,'pack reload is idempotent');
const absent={window:{}};vm.runInNewContext(fs.readFileSync(pack,'utf8'),absent);assert.deepEqual(absent.window,{});
const oldDone=Object.fromEntries(prior.kaigo.houkoku.map(h=>[h.id,'2026-01-01T00:00:00Z']));
const b=boot({storedProgress:{houkokuDone:oldDone,houkokuEssayDone:oldDone,reviews:{'k-v-12':{rating:'good',due:'2030-01-01T00:00:00Z'}}}});
b.context.openHoukokuPractice();assert.equal(reports[b.state.houkokuSession.caseIndex].id,newReports[0].id,'old completion opens the first new report');
b.context.houkokuCheck();assert(!b.state.houkokuSession.checked,'incomplete answers are not graded');
for(let i=count.pieces.length-1;i>=0;i--)b.context.houkokuPick(i);
b.context.houkokuCheck();assert.equal(b.state.houkokuSession.correct,false);assert(!b.state.progress.houkokuDone[count.id]);
b.context.houkokuReset();
for(let index=0;index<reports.length;index++){
 const h=reports[index];b.context.openHoukokuPractice(index);
 for(let i=0;i<h.pieces.length;i++){b.context.houkokuPick(i);b.context.houkokuPick(i)}
 assert.equal(b.state.houkokuSession.selected.length,h.pieces.length,'duplicate taps do not duplicate pieces');
 const before=b.events.length;b.context.houkokuCheck();b.context.houkokuCheck();assert.equal(b.events.length,before+1,'one answer feedback');
 assert.equal(b.state.houkokuSession.correct,true);assert(b.state.progress.houkokuDone[h.id]);
 b.context.houkokuShowResult();assert(b.html.includes(h.note)&&b.html.includes('Selesai'));
 assert(b.html.includes(h.pieces[0].reading)&&b.html.includes(h.pieces[0].meaning),'model keeps kana and Indonesian');
 b.context.finishHoukoku();assert.equal(b.state.view,'kaigo');assert.equal(b.state.houkokuSession,null,'no automatic next case');
}
b.context.openHoukokuPractice();assert.equal(b.state.view,'kaigo');assert.equal(b.state.houkokuSession,null,'completed library does not silently restart');
b.context.openHoukokuEssay();assert.equal(reports[b.state.houkokuEssaySession.caseIndex].id,newReports[0].id,'new writing cases remain incomplete after puzzle completion');
b.context.houkokuEssayReveal('   ');assert.equal(b.state.houkokuEssaySession.stage,'write','empty writing cannot reveal the model');
b.context.houkokuEssayReveal('食札を確認しました。');b.context.finishHoukokuEssay(false);assert(!b.state.progress.houkokuEssayDone[count.id],'comparison alone is not mastery');
for(let index=0;index<reports.length;index++){
 const h=reports[index];b.context.openHoukokuEssay(index);const draft=h.pieces.map(p=>p.text).join('');b.context.houkokuEssayReveal(draft);
 assert.equal(b.state.houkokuEssaySession.draft,draft);assert(b.html.includes(h.note));b.context.finishHoukokuEssay(true);
 assert.equal(b.state.view,'kaigo');assert.equal(b.state.houkokuEssaySession,null);assert(b.state.progress.houkokuEssayDone[h.id]);
}
b.context.openHoukokuEssay();assert.equal(b.state.view,'kaigo');assert.equal(b.state.houkokuEssaySession,null);
const again=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});
for(const h of reports)assert(again.state.progress.houkokuDone[h.id]&&again.state.progress.houkokuEssayDone[h.id]);
assert(again.state.progress.reviews['k-v-12'],'report learning preserves earlier SRS');
assert.equal(again.state.progress.total,0,'self-assessed report work does not fabricate quiz scores');
console.log(`Kaigo reports: ${reports.length} complete models; new workplace cases, legacy data, puzzle/writing, finite sessions and saved progress passed.`);
