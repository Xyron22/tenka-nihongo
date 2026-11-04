const assert=require('node:assert/strict'),fs=require('node:fs');
const {data:D,context}=require('./helpers/load-content')(),closure=require('../docs/kaigo-basic-closure.json'),k=D.kaigo;
const ids=new Set();
for(const [kind,fields] of Object.entries({vocab:['term','reading','meaning','example','exampleReading','exampleMeaning'],tools:['term','reading','meaning','image','functionJP','functionReading','functionID','example','exampleReading','exampleMeaning'],houkoku:['title','titleReading','situation','reading','meaning','note'],handoff:['text','reading','meaning','question']})){
 assert.equal(k[kind].length,closure.inventorySnapshot[kind],`${kind}: closure snapshot drift requires re-audit`);
 for(const c of k[kind]){assert(c.id&&!ids.has(c.id));ids.add(c.id);for(const f of fields)assert(typeof c[f]==='string'&&c[f].trim(),`${c.id}: ${f}`);for(const f of ['reading','exampleReading','functionReading','titleReading'])if(c[f])assert(!/\p{Script=Han}/u.test(c[f]),`${c.id}: authored kana required in ${f}`);}
}
for(const t of k.tools){assert(fs.existsSync(t.image),`${t.id}: illustration exists`);if(t.safetyNote)assert(t.safetyNoteReading&&t.safetyNoteMeaning);}
for(const h of k.houkoku){assert(h.pieces.length>=3);for(const p of h.pieces)for(const f of ['text','reading','meaning'])assert(p[f]?.trim(),`${h.id}: report piece ${f}`);}
for(const h of k.handoff){assert.equal(h.segments.map(s=>s.text).join(''),h.text);assert(h.segments.every(s=>s.reading&&s.meaning));assert.equal(new Set(h.choices).size,h.choices.length);assert(Number.isInteger(h.answer)&&h.answer>=0&&h.answer<h.choices.length);const r=context.TENKA_KAIGO_HANDOFF_REVIEW[h.id];assert(r?.explanation&&r.evidence.length);assert(r.evidence.every(i=>Number.isInteger(i)&&h.segments[i]));}
const workplace=require('../docs/kaigo-workplace-practice.json'),communication=require('../docs/kaigo-communication-coverage.json'),objectives=new Set();
for(const t of workplace.topics){assert(!objectives.has(t.id));objectives.add(t.id);assert(t.objective&&t.answerReview);assert(k.houkoku.some(h=>h.id===t.reportId));assert(k.handoff.some(h=>h.id===t.handoffId));}
for(const o of communication.objectives){assert(!objectives.has(o.id));objectives.add(o.id);assert(o.intent&&o.answerReview&&o.contrast);assert.equal(o.status,'vocabulary-and-practice-ready');assert(o.vocabIds.length&&o.vocabIds.every(id=>k.vocab.some(v=>v.id===id)));assert(o.handoffIds.length&&o.handoffIds.every(id=>k.handoff.some(h=>h.id===id)));}
for(const ledger of [workplace,communication]){assert.equal(ledger.fullKaigoClosed,false);assert.equal(ledger.officialExamCoverage,false);}
assert.equal(objectives.size,closure.mappedObjectiveSnapshot);assert.equal(closure.status,'KAIGO BASIC CLOSED');assert.equal(closure.fullKaigoClosed,false);assert.equal(closure.certificationTrackClosed,false);
const workflow=fs.readFileSync('.github/workflows/pages.yml','utf8');for(const name of closure.requiredCiGates)assert(workflow.includes('- name: '+name),`missing practice gate: ${name}`);
console.log(`Kaigo basic closure: ${objectives.size} mapped objectives; complete installed lessons, practice references, kana, illustrations and separate exam scope passed.`);
