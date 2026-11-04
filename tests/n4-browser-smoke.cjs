const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict');
let playwright;try{playwright=require('playwright')}catch(error){if(!process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES)throw error;playwright=require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,'playwright'))}
const {chromium}=playwright,base=path.resolve(__dirname,'..'),fonts=process.env.TENKA_TEST_JAPANESE_FONT_DIR,out=process.env.TENKA_UI_AUDIT_OUTPUT||path.join(os.tmpdir(),'tenka-n4-ui-audit');
// Optional browser QA follows the real manifest. Core CI runs the dependency-free content/runtime gates.
(async()=>{
 fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({...(process.env.TENKA_TEST_CHROMIUM?{executablePath:process.env.TENKA_TEST_CHROMIUM}:{}),headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
 try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[],results=[],vocabularyResults=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://tenka.test/**',async route=>{const name=decodeURIComponent(new URL(route.request().url()).pathname),root=name.startsWith('/fonts/')?fonts:base,file=path.join(root||base,name.startsWith('/fonts/')?name.slice(7):name==='/'?'index.html':name),types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.webmanifest':'application/manifest+json','.mp3':'audio/mpeg','.woff2':'font/woff2'};await route.fulfill(fs.existsSync(file)&&fs.statSync(file).isFile()?{path:file,contentType:types[path.extname(file)]||'application/octet-stream'}:{status:404,body:'Missing local test asset'});});
 await page.goto('https://tenka.test/');await page.waitForFunction(()=>window.TENKA_READY);
 if(fonts){await page.addStyleTag({content:fs.readFileSync(path.join(fonts,'400.css'),'utf8').replaceAll('url(./files/','url(https://tenka.test/fonts/files/')+'\nhtml,body{font-family:"Noto Sans JP",sans-serif}'});await page.evaluate(async()=>{await document.fonts.load('16px "Noto Sans JP"',[...new Set(JSON.stringify(TENKA_DATA.jlpt.N4))].join(''));await document.fonts.ready;});}
 for(const viewport of [{width:320,height:844},{width:390,height:844},{width:720,height:844},{width:1280,height:800},{width:1440,height:900}]){
  await page.setViewportSize(viewport);await page.evaluate(()=>openGrammar('N4'));
  const row=await page.evaluate(()=>({width:innerWidth,height:innerHeight,grammarCardsChecked:document.querySelectorAll('.grammar-card').length,pageWidth:document.documentElement.scrollWidth,bad:[...document.querySelectorAll('.grammar-card,.grammar-card-head,.grammar-block,.grammar-note,.grammar-actions')].filter(el=>el.scrollWidth>el.clientWidth+2).map(el=>el.className)}));results.push(row);assert(row.pageWidth<=row.width&&!row.bad.length,'N4 grammar layout must fit '+row.width);
 }
 await page.locator('.grammar-card').nth(4).screenshot({path:path.join(out,'n4-benefactive-lesson.png')});
 await page.locator('.grammar-card').nth(9).screenshot({path:path.join(out,'n4-action-phase-lesson.png')});
 await page.locator('.grammar-card').nth(17).screenshot({path:path.join(out,'n4-ability-lesson.png')});
 await page.setViewportSize({width:390,height:844});await page.locator('.grammar-card').last().screenshot({path:path.join(out,'n4-latest-lesson.png')});await page.evaluate(()=>openGrammar('N5'));await page.locator('[onclick="toggleGrammar(\'n5-g-01\')"]').click();
 await page.evaluate(()=>openGrammar('N4'));await page.locator('[onclick="toggleGrammar(\'n4-g-05\')"]').click();assert(await page.evaluate(()=>!!TENKA_CORE.state.progress.grammarDone['n4-g-05']));
 await page.locator('.grammar-quiz-btn').click();const count=await page.evaluate(()=>TENKA_CORE.state.quiz.items.length);assert(count>2&&count<=10);assert(await page.evaluate(()=>TENKA_CORE.state.quiz.items.every(q=>q.sourceId.startsWith('n4-g-'))));
 await page.evaluate(()=>{TENKA_CORE.state.seconds=1});await page.waitForFunction(()=>TENKA_CORE.state.quiz.i===1);
 for(let i=1;i<count;i++){const answer=await page.evaluate(i=>{const q=TENKA_CORE.state.quiz.items[i];return i===1?(q.answer+1)%q.choices.length:q.answer},i);await page.locator('#choice-'+answer).click();await page.waitForFunction(i=>TENKA_CORE.state.quiz.i===i+1,i);}
 const expected=Math.round((count-2)/count*100);assert((await page.locator('.quiz-result-score').textContent()).includes(expected+'%'));assert.equal(await page.locator('.quiz-review').count(),count);await page.locator('.quiz-review summary').first().click();assert((await page.locator('.quiz-review').first().textContent()).includes('Waktu habis'));await page.screenshot({path:path.join(out,'n4-context-review.png'),fullPage:true});
 await page.getByRole('button',{name:'Selesai',exact:true}).click();assert.equal(await page.evaluate(()=>TENKA_CORE.state.view),'grammar');
 await page.reload();await page.waitForFunction(()=>window.TENKA_READY);assert(await page.evaluate(expected=>TENKA_CORE.state.progress.best['N4-grammar']===expected&&TENKA_CORE.state.progress.quizRuns['N4-grammar']===1&&!!TENKA_CORE.state.progress.grammarDone['n5-g-01']&&!!TENKA_CORE.state.progress.grammarDone['n4-g-05'],expected),'N4 results and both levels\' mastery survive reload');
 if(fonts){await page.addStyleTag({content:fs.readFileSync(path.join(fonts,'400.css'),'utf8').replaceAll('url(./files/','url(https://tenka.test/fonts/files/')+'\nhtml,body{font-family:"Noto Sans JP",sans-serif}'});await page.evaluate(async()=>{await document.fonts.load('16px "Noto Sans JP"',[...new Set(JSON.stringify(TENKA_DATA.jlpt.N4.vocab))].join(''));await document.fonts.ready;});}
 for(const width of [320,390,720,1280,1440]){
  await page.setViewportSize({width,height:844});
  const row=await page.evaluate(()=>{
   openFlash('N4','vocab');const s=TENKA_CORE.state,bad=[];s.flipped=true;
   for(let i=0;i<s.cards.length;i++){
    s.cardIndex=i;TENKA_CORE.render();document.querySelector('.muted-box').open=true;
    for(const side of document.querySelectorAll('.flash .face')){
     const r=side.getBoundingClientRect();
     const clipped=[...side.querySelectorAll('.reading,.meaning,.example,.term')].some(el=>el.scrollWidth>el.clientWidth+2||el.getBoundingClientRect().bottom>r.bottom+1||el.getBoundingClientRect().top<r.top-1);
     if(clipped||side.scrollHeight>side.clientHeight+2||side.scrollWidth>side.clientWidth+2)bad.push(s.cards[i].id);
    }
    if(document.documentElement.scrollWidth>innerWidth)bad.push('page:'+s.cards[i].id);
    if(s.cards[i].extraExample&&!document.querySelector('.backface').textContent.includes(s.cards[i].extraExampleMeaning))bad.push('hidden-extra:'+s.cards[i].id);
   }
   return{width:innerWidth,vocabularyCardsChecked:s.cards.length,bad};
  });vocabularyResults.push(row);assert.equal(row.bad.length,0,'N4 vocabulary fits at '+width+': '+row.bad.join(','));
 }
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(out,'n4-latest-vocabulary.png'),fullPage:true});
 await page.evaluate(()=>{window.__n4Spoken=[];Object.defineProperty(speechSynthesis,'speak',{configurable:true,value:u=>window.__n4Spoken.push(u.text)});Object.defineProperty(speechSynthesis,'cancel',{configurable:true,value:()=>{}});openFlash('N4','vocab');TENKA_CORE.state.cardIndex=TENKA_CORE.state.cards.findIndex(c=>c.id==='n4-v-14');TENKA_CORE.render()});
 await page.locator('.session-audio').click();assert.equal(await page.evaluate(()=>window.__n4Spoken.at(-1)),'とりだす');
 await page.locator('.flash').click();assert(await page.locator('.backface').textContent().then(t=>t.includes('ポケットから鍵を取り出してください。')));await page.locator('.muted-box summary').click();assert((await page.locator('.muted-box').textContent()).includes('Pelajari arti tiap kata majemuk.'));
 await page.locator('[onclick="rateCard(\'good\')"]').click();assert(await page.evaluate(()=>!!TENKA_CORE.state.progress.reviews['n4-v-14']));
 for(const type of ['mix','listening']){
  await page.evaluate(type=>{window.__n4Spoken=[];startQuiz('N4',type)},type);
  const size=await page.evaluate(()=>TENKA_CORE.state.quiz.items.length);assert.equal(size,10);
  if(type==='listening'){
   assert.equal(await page.locator('.question .jp').count(),0,'listening target is hidden');await page.waitForFunction(()=>window.__n4Spoken.length>0);await page.locator('.quiz-replay').click();assert(await page.evaluate(()=>window.__n4Spoken.at(-1)===TENKA_CORE.state.quiz.items[0].voiceText));
  }else assert(await page.locator('.question .quiz-help').count()>0,'written target includes its context');
  const first=await page.evaluate(()=>TENKA_CORE.state.quiz.items[0]);
  if(type==='mix'){await page.evaluate(()=>{TENKA_CORE.state.seconds=1});await page.waitForFunction(()=>TENKA_CORE.state.quiz.i===1);}
  for(let i=type==='mix'?1:0;i<size;i++){
   const answer=await page.evaluate(i=>{const q=TENKA_CORE.state.quiz.items[i];return i===1?(q.answer+1)%q.choices.length:q.answer},i);await page.locator('#choice-'+answer).click();await page.waitForFunction(i=>TENKA_CORE.state.quiz.i===i+1,i);
  }
  assert.equal(await page.locator('.quiz-review').count(),size);await page.locator('.quiz-review summary').first().click();assert((await page.locator('.quiz-review').first().textContent()).includes(first.exampleMeaning));
  if(type==='mix')assert((await page.locator('.quiz-review').first().textContent()).includes('Waktu habis'));
  await page.getByRole('button',{name:'Selesai',exact:true}).click();assert.equal(await page.evaluate(()=>TENKA_CORE.state.view),'level');
 }
 await page.reload();await page.waitForFunction(()=>window.TENKA_READY);assert(await page.evaluate(()=>TENKA_CORE.state.progress.quizRuns['N4-mix']===1&&TENKA_CORE.state.progress.quizRuns['N4-listening']===1&&TENKA_CORE.state.progress.best['N4-mix']===80&&TENKA_CORE.state.progress.best['N4-listening']===90&&!!TENKA_CORE.state.progress.reviews['n4-v-14']&&!!TENKA_CORE.state.progress.grammarDone['n5-g-01']&&!!TENKA_CORE.state.progress.grammarDone['n4-g-05']),'grammar and lexical progress survives reload');
 assert.equal(errors.length,0,errors.join('\n'));const loaded=require('./helpers/load-content')(),names=['index.html','styles.css','app-v2.js',...loaded.files],sourceHashes=Object.fromEntries([...new Set(names)].map(name=>[name,crypto.createHash('sha256').update(fs.readFileSync(path.join(base,name))).digest('hex')]));
 const report={browser:'Chromium',font:fonts?'Noto Sans JP':'system font',scope:'Current N4 grammar and first lexical batch; full N4 curriculum remains OPEN',errors,results,vocabularyResults,flows:{richGrammarCards:true,levelIsolatedQuiz:true,timeoutWrongCorrect:true,translatedResultReview:true,finiteExit:true,legacyAndNewProgressReload:true,vocabularyCardsAndExtraExamples:true,vocabularyKanaSpeech:true,vocabularySrsReload:true,writtenLexicalContext:true,listeningHiddenTargetAndKanaReplay:true,lexicalTimeoutWrongCorrectReview:true,lexicalFiniteExitAndProgressReload:true},sourceHashes};fs.writeFileSync(path.join(out,'n4-ui-audit.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({viewports:results.map(r=>r.width),grammarCards:results[0].grammarCardsChecked,vocabularyCards:vocabularyResults[0].vocabularyCardsChecked,errors}));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
