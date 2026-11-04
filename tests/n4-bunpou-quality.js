const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const load=require('./helpers/load-content'),{data:D,context,files}=load(),coverage=require('../docs/n4-bunpou-coverage.json'),packs=['content-pack-v34.js','content-pack-v35.js','content-pack-v36.js','content-pack-v37.js','content-pack-v38.js','content-pack-v39.js','content-pack-v40.js','content-pack-v41.js','content-pack-v42.js','content-pack-v43.js','content-pack-v44.js'];
for(const pack of packs){
 assert(files.includes(pack));const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);for(const f of files.filter(f=>f!==pack))vm.runInContext(fs.readFileSync(f,'utf8'),baseline);
 const old=baseline.TENKA_DATA;for(const level of ['N5','N3','N2','N1'])assert.equal(JSON.stringify(D.jlpt[level]),JSON.stringify(old.jlpt[level]),`${pack} cannot alter ${level}`);assert.equal(JSON.stringify(D.kaigo),JSON.stringify(old.kaigo));for(const kind of ['vocab','kanji'])assert.equal(JSON.stringify(D.jlpt.N4[kind]),JSON.stringify(old.jlpt.N4[kind]));
 for(const prior of old.jlpt.N4.grammar){const current=D.jlpt.N4.grammar.find(g=>g.id===prior.id);assert(current);for(const [key,value] of Object.entries(prior))assert.equal(JSON.stringify(current[key]),JSON.stringify(value),`${pack}: preserve legacy field ${prior.id}/${key}`);}
 const before=JSON.stringify(D);vm.runInContext(fs.readFileSync(pack,'utf8'),context);assert.equal(JSON.stringify(D),before,`${pack}: reload is idempotent`);const absent={window:{}};vm.runInNewContext(fs.readFileSync(pack,'utf8'),absent);assert.deepEqual(absent.window,{});
}
const ids=new Set();for(const level of Object.values(D.jlpt))for(const kind of ['grammar','vocab','kanji'])for(const c of level[kind]){assert(c.id&&!ids.has(c.id));ids.add(c.id);}
const fields=['title','meaning','pattern','explanation','usage','whenToUse','watchOut','commonMistake','example','exampleReading','exampleMeaning','extraExample','extraExampleReading','extraExampleMeaning','contrast'];
for(const g of D.jlpt.N4.grammar){for(const f of fields)assert(typeof g[f]==='string'&&g[f].trim(),`${g.id}: ${f}`);for(const f of ['exampleReading','extraExampleReading'])assert(!/\p{Script=Han}/u.test(g[f]),`${g.id}: kana`);const q=g.quiz;assert(q?.prompt&&q.reading&&q.context&&q.explanation);assert(!/\p{Script=Han}/u.test(q.reading));assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length);assert(coverage.entries.some(e=>e.lessonId===g.id),`${g.id}: coverage mapping required`);}
assert.equal(coverage.officialJlptInventory,false);assert(coverage.references.some(r=>r.id==='bunpro')&&coverage.references.some(r=>r.id==='jlptsensei'));
for(const row of coverage.entries){assert(D.jlpt.N4.grammar.some(g=>g.id===row.lessonId));assert(row.topic&&row.rationale&&row.referenceMatches.length);if(row.role==='prerequisite-review'){assert(D.jlpt.N5.grammar.some(g=>g.id===row.canonicalLessonId));assert.equal(row.countAsNewN4Objective,false);}else{assert.equal(row.role,'introduced');assert(row.referenceMatches.some(r=>r.level==='N4'));}}
assert.equal(new Set(coverage.entries.map(e=>e.lessonId)).size,coverage.entries.length,'coverage IDs are unique');assert.equal(coverage.entries.length,D.jlpt.N4.grammar.length,'every installed lesson mapped exactly once');
console.log(`N4 Bunpou quality: ${D.jlpt.N4.grammar.length} rich lessons with contextual questions, kana/contrast, reference roles and preserved legacy/other-level content passed; full level remains OPEN.`);

const inventory=require('../docs/n4-grammar-reference-audit.json'),sourceIds=new Set(inventory.sources.map(s=>s.id)),recordIds=new Set(),dispositions=new Set(['covered_n4','prerequisite_n5','partial','pending_grammar','pending_lexical']);
assert.equal(inventory.officialJlptInventory,false);assert.equal(inventory.fullReferenceInventoryCaptured,true);
for(const r of inventory.records){
 assert(r.id&&!recordIds.has(r.id),'source row identity must be unique');recordIds.add(r.id);assert(sourceIds.has(r.source));assert(r.topic&&r.scope&&r.reason&&/^https:\/\//.test(r.sourceUrl));assert(dispositions.has(r.disposition));assert(Array.isArray(r.lessons));
 for(const lesson of r.lessons)assert([...D.jlpt.N5.grammar,...D.jlpt.N4.grammar].some(g=>g.id===lesson),r.id+': unknown lesson');
 if(r.disposition==='covered_n4')assert(r.lessons.some(id=>D.jlpt.N4.grammar.some(g=>g.id===id)),r.id+': N4 evidence required');
 if(r.disposition==='prerequisite_n5')assert(r.lessons.length&&r.lessons.every(id=>D.jlpt.N5.grammar.some(g=>g.id===id)),r.id+': real N5 prerequisite required');
}
for(const s of inventory.sources)assert.equal(inventory.records.filter(r=>r.source===s.id).length,s.snapshotRows,'full captured source inventory retained');
for(const e of coverage.entries.filter(e=>e.role==='introduced'))assert(inventory.records.some(r=>r.lessons.includes(e.lessonId)),e.lessonId+': source reconciliation evidence required');
const unresolved=inventory.records.filter(r=>r.disposition==='partial'||r.disposition.startsWith('pending_'));
if(unresolved.length){assert.equal(inventory.status,'OPEN');assert.equal(inventory.fullReferenceReconciliation,false);assert.equal(coverage.fullReferenceReconciliation,false);}
console.log('N4 full source snapshot: '+inventory.records.length+' publisher rows; '+unresolved.length+' unresolved rows across overlapping inventories; no official count or closure inferred.');
