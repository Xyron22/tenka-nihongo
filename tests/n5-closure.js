const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const closure=require('../docs/n5-closure.json'),load=require('./helpers/load-content');
const {data:D,files}=load();
assert.equal(closure.status,'N5 CLOSED');assert.equal(closure.officialJlptInventory,false);
for(const state of Object.values(closure.gates))assert.equal(state,'CLOSED');
for(const [kind,number]of Object.entries(closure.inventorySnapshot))assert.equal(D.jlpt.N5[kind].length,number,`closure inventory drift: ${kind}; re-audit and update the snapshot`);
for(const path of closure.coverageLedgers)assert(fs.existsSync(path));
assert.equal(closure.releasePolicy.mergeAuthorized,false);assert.equal(closure.releasePolicy.productionDeployAuthorized,false);assert.equal(closure.releasePolicy.draftPr,16);
// Preserve the entire pre-expansion inventory, not just a few familiar progress IDs.
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of ['data.js',...Array.from({length:14},(_,i)=>`content-pack-v${i+1}.js`)])vm.runInContext(fs.readFileSync(file,'utf8'),baseline);
for(const [level,content]of Object.entries(baseline.TENKA_DATA.jlpt))for(const kind of ['vocab','kanji','grammar']){
 for(const old of content[kind])assert(D.jlpt[level][kind].some(item=>item.id===old.id),`lost legacy identity: ${level}/${kind}/${old.id}`);
}
const workflow=fs.readFileSync('.github/workflows/pages.yml','utf8');
for(const name of ['N5 current runtime content quality','N5 Kanji metadata and stroke quality','N5 contextual grammar quiz','N5 card and listening quiz coverage','N5 session and saved progress audit','N5 curriculum closure gate'])assert(workflow.includes(`- name: ${name}`),`missing CI gate ${name}`);
assert(/deploy:\s+if: github.ref == 'refs\/heads\/main'/.test(workflow),'branch CI cannot deploy');
for(const step of ['Configure GitHub Pages','Upload static site'])assert(workflow.includes(`- name: ${step}\n        if: github.ref == 'refs/heads/main'`),`${step} stays gated to main`);
assert(files.includes('content-pack-v25.js')&&files.includes('content-pack-v26.js'),'quiz content/policy must be loaded by the app');
const boot=require('./helpers/boot-runtime'),b=boot();
// Force a known kanji target through the real public sampling path with an all-kanji test inventory.
b.data.jlpt.N5.vocab=[];b.context.startQuiz('N5');assert(b.html.includes('Apa arti kanji ini?'),'kanji questions identify their target type');
assert(b.state.quiz.items.every(q=>q.sourceKind==='kanji'));
assert.equal(b.state.progress.total,0,'curriculum closure must never fabricate learner progress');
console.log('N5 CLOSED: coverage/content/practice gates wired to CI; all legacy identities and the draft-only release boundary preserved.');
