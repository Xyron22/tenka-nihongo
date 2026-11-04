// Read-only curriculum snapshot for source reconciliation; runs in Node CI, outside the app.
const {data:D,files}=require('../tests/helpers/load-content')();
const fields=(row,keys)=>Object.fromEntries(keys.filter(k=>row[k]!==undefined).map(k=>[k,row[k]]));
const grammarKeys=['id','title','meaning','pattern','explanation','usage','whenToUse','watchOut','commonMistake','example','exampleReading','exampleMeaning','extraExample','extraExampleReading','extraExampleMeaning','contrast'];
const wordKeys=['id','word','jp','kanji','kana','reading','meaning','category','example','exampleReading','exampleMeaning','usage','note','notes'];
const compactKeys=['id','title','word','jp','kanji','kana','reading','meaning','onyomi','kunyomi'];
const result={schemaVersion:1,manifestFiles:files,N5:{grammar:D.jlpt.N5.grammar.map(g=>fields(g,grammarKeys)),vocab:D.jlpt.N5.vocab.map(v=>fields(v,wordKeys)),kanji:D.jlpt.N5.kanji.map(k=>fields(k,compactKeys))},higher:Object.fromEntries(['N4','N3','N2','N1'].map(l=>[l,Object.fromEntries(['grammar','vocab','kanji'].map(kind=>[kind,D.jlpt[l][kind].map(c=>fields(c,compactKeys))]))]))};
const payload=JSON.stringify(result).replace(/[\u007f-\uffff]/g,c=>'\\u'+c.charCodeAt(0).toString(16).padStart(4,'0'));
const chunks=[];for(let i=0;i<payload.length;i+=30000)chunks.push(payload.slice(i,i+30000));
chunks.forEach((chunk,i)=>console.log('TENKA_CURRICULUM_AUDIT:compiled:'+i+':'+chunk));
console.log('TENKA_CURRICULUM_AUDIT_DONE:compiled:'+payload.length+':'+chunks.length);
