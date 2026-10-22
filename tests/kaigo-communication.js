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
