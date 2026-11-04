const fs=require('node:fs'),vm=require('node:vm');
// Follow the actual boot manifest, rather than a stale hand-maintained pack list.
module.exports=function loadContent(){
  const source=fs.readFileSync('index.html','utf8');
  const files=[...source.matchAll(/await load\('\.\/([^']+\.js)'/g)].map(m=>m[1]).filter(f=>f==='data.js'||/^(content|houkoku|tools)-pack-/.test(f));
  const c={window:null};c.window=c;vm.createContext(c);
  for(const file of files)vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
  return {data:c.TENKA_DATA,context:c,files};
};
