const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),boot=require('./helpers/boot-runtime');
const {data:D,context,files}=load(),source=fs.readFileSync('content-pack-v27.js','utf8');
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of files.filter(f=>!/^content-pack-v(?:27|28)\.js$/.test(f)))vm.runInContext(fs.readFileSync(file,'utf8'),baseline);
assert.equal(JSON.stringify(D.jlpt),JSON.stringify(baseline.TENKA_DATA.jlpt),'workplace expansion must preserve all JLPT data, including N5 CLOSED');
const old=baseline.TENKA_DATA.kaigo.vocab,cards=D.kaigo.vocab,byId=new Map(cards.map(c=>[c.id,c]));
for(const c of old){
 const current=byId.get(c.id);assert(current,`legacy progress identity ${c.id}`);
 for(const key of ['term','reading','meaning','example','exampleMeaning','category'])assert.equal(current[key],c[key],`${c.id}: preserve existing ${key}`);
}
for(const c of cards){
 for(const field of ['id','term','reading','meaning','example','exampleReading','exampleMeaning','category'])assert(c[field]?.trim(),`${c.id}: ${field}`);
 for(const field of ['reading','exampleReading'])assert(!/\p{Script=Han}/u.test(c[field]),`${c.id}: kana required in ${field}`);
 if(c.workplacePack){assert(c.note?.trim(),`${c.id}: usage distinction`);assert(c.example.includes(c.term),`${c.id}: contextual target`)}
}
assert.equal(byId.size,cards.length,'no duplicate Kaigo IDs');
const allIds=new Set();
for(const c of [...Object.values(D.jlpt).flatMap(l=>[...l.vocab,...l.kanji,...l.grammar]),...cards,...D.kaigo.tools,...D.kaigo.handoff,...D.kaigo.houkoku]){assert(!allIds.has(c.id),`global identity conflict ${c.id}`);allIds.add(c.id)}
const snapshot=JSON.stringify(D);for(const file of ['content-pack-v27.js','content-pack-v28.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);assert.equal(JSON.stringify(D),snapshot,'pack reload is idempotent');
const absent={window:{}};vm.runInNewContext(source,absent);assert.deepEqual(absent.window,{},'missing base is a safe no-op');
for(const [a,b]of [['病棟','病室'],['脱衣室','更衣室'],['洗面所','洗濯室'],['医務室','診察室'],['倉庫','リネン室']]){
 const x=cards.find(c=>c.term===a),y=cards.find(c=>c.term===b);assert(x&&y,`${a}/${b}`);
 assert(x.quizGroup&&x.quizGroup===y.quizGroup,'overlapping room functions excluded from competing answers');assert.notEqual(x.meaning,y.meaning);
}
for(const [a,b]of [['食札','名札'],['配膳車','下膳車'],['タオル','バスタオル'],['シーツ','防水シーツ'],['備品','消耗品']]){
 const x=cards.find(c=>c.term===a),y=cards.find(c=>c.term===b);assert(x&&y);assert(x.quizGroup&&x.quizGroup===y.quizGroup,'equipment/stock umbrellas cannot compete');
}
assert.equal(cards.find(c=>c.term==='食札').reading,'しょくさつ');assert.equal(cards.find(c=>c.term==='名札').reading,'なふだ');
let seed=91;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const saved={reviews:{'k-v-12':{due:'2020-01-01T00:00:00Z',intervalDays:1}},best:{'KAIGO-kaigo':90}},b=boot({random,storedProgress:saved});
b.context.go('kaigo');assert(b.html.includes('Ruangan & fasilitas'),'new topic is discoverable');
b.context.openKaigoCategory('Ruangan & fasilitas');assert(b.state.cards.length&&b.state.cards.every(c=>c.workplacePack==='9A-1'));
const first=b.state.cards[0];assert(b.html.includes(first.exampleReading)&&b.html.includes(first.note),'kana and usage notes reach flashcards');
b.context.rateCard('good');assert(b.state.progress.reviews[first.id]);assert(b.state.progress.reviews['k-v-12'],'new study preserves old SRS');assert.equal(b.events.length,0,'SRS stays audio-neutral');
for(const mode of ['kaigo','listening']){
 const seen=new Set();
 for(let session=0;session<500&&seen.size<cards.length;session++){
  b.context.startKaigoQuiz(mode);const items=b.state.quiz.items;assert.equal(items.length,10);
  for(const q of items){
   const c=byId.get(q.sourceId);assert(c,'quiz remains inside Kaigo vocabulary');seen.add(c.id);
   assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.equal(q.choices[q.answer],c.meaning);
   for(const id of q.optionIds.filter(id=>id!==c.id)){const x=byId.get(id);assert(x);assert(!c.quizGroup||c.quizGroup!==x.quizGroup,'no competing room glosses')}
  }
 }
 assert.equal(seen.size,cards.length,`${mode}: new and legacy cards all reachable`);
}
console.log(`Kaigo workplace: ${cards.length} kana-complete cards; unchanged JLPT/legacy IDs; facility distinctions, categories, SRS and quiz reachability passed.`);
