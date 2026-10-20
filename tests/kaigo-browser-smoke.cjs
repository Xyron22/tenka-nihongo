const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict');
let playwright;try{playwright=require('playwright')}catch(error){if(!process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES)throw error;playwright=require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,'playwright'))}
const {chromium}=playwright;
const base=path.resolve(__dirname,'..'),fonts=process.env.TENKA_TEST_JAPANESE_FONT_DIR,out=process.env.TENKA_UI_AUDIT_OUTPUT||path.join(os.tmpdir(),'tenka-kaigo-ui-audit');
// Optional browser QA: install Playwright; core CI uses the dependency-free runtime audits.
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({...(process.env.TENKA_TEST_CHROMIUM?{executablePath:process.env.TENKA_TEST_CHROMIUM}:{}),headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
 try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[],results=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://tenka.test/**',async route=>{
   const name=decodeURIComponent(new URL(route.request().url()).pathname),root=name.startsWith('/fonts/')?fonts:base;
   const file=path.join(root||base,name.startsWith('/fonts/')?name.slice(7):name==='/'?'index.html':name);
   const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.webmanifest':'application/manifest+json','.mp3':'audio/mpeg','.woff2':'font/woff2'};
   await route.fulfill(fs.existsSync(file)&&fs.statSync(file).isFile()?{path:file,contentType:types[path.extname(file)]||'application/octet-stream'}:{status:404,body:'Missing local test asset'});
 });
 await page.goto('https://tenka.test/');await page.waitForFunction(()=>window.TENKA_READY);
 if(fonts){
 await page.addStyleTag({content:fs.readFileSync(path.join(fonts,'400.css'),'utf8').replaceAll('url(./files/','url(https://tenka.test/fonts/files/')+'\nhtml,body{font-family:"Noto Sans JP",sans-serif}'});
 await page.evaluate(async()=>{
   const chars=[...new Set(TENKA_DATA.kaigo.vocab.map(c=>[c.term,c.kanji,c.reading,c.example,c.exampleReading].join('')).join(''))].join('');
   await document.fonts.load('16px "Noto Sans JP"',chars);await document.fonts.ready;
 });
 }
 for(const width of [320,390,720]){
   await page.setViewportSize({width,height:844});
   const result=await page.evaluate(()=>{
     const state=TENKA_CORE.state,bad=[],widths=[];let cardsChecked=0;
     for(const kind of ['vocab']){
       openKaigoFlash();state.flipped=true;
       for(let i=0;i<state.cards.length;i++){
         state.cardIndex=i;TENKA_CORE.render();cardsChecked++;
         for(const side of document.querySelectorAll('.flash .face')){
           const r=side.getBoundingClientRect();
           const clipped=[...side.querySelectorAll('.reading,.meaning,.example,.term')].some(el=>(!el.matches('.term')&&el.scrollHeight>el.clientHeight+2)||el.scrollWidth>el.clientWidth+2||el.getBoundingClientRect().bottom>r.bottom+1||el.getBoundingClientRect().top<r.top-1);
           if(clipped||side.scrollHeight>side.clientHeight+2||side.scrollWidth>side.clientWidth+2)bad.push({id:state.cards[i].id,side:side.className,height:side.clientHeight,scroll:side.scrollHeight,width:side.clientWidth,scrollWidth:side.scrollWidth});
         }
       }
     }
     for(const view of ['home','kaigo','daily','progress']){go(view);widths.push({view,width:document.documentElement.scrollWidth})}
     return{width:innerWidth,cardsChecked,bad,widths};
   });results.push(result);
   console.log(JSON.stringify({width,badCount:result.bad.length,firstBad:result.bad.slice(0,5),widths:result.widths}));
 }
 await page.evaluate(()=>{
   window.__tenkaSpoken=[];
   Object.defineProperty(speechSynthesis,'speak',{configurable:true,value:u=>window.__tenkaSpoken.push(u.text)});
 });
 await page.setViewportSize({width:320,height:844});
 await page.evaluate(()=>{openKaigoFlash();const s=TENKA_CORE.state;s.cardIndex=s.cards.findIndex(c=>c.id==='k-v-37');s.flipped=true;TENKA_CORE.render()});
 await page.screenshot({path:path.join(out,'kaigo-long-legacy-card.png'),fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>go('kaigo'));
 await page.getByRole('button',{name:'Ruangan & fasilitas',exact:true}).click();
 assert(await page.evaluate(()=>TENKA_CORE.state.cards.length===32&&TENKA_CORE.state.cards.every(c=>c.category==='Ruangan & fasilitas')),'facility category selects only its 32 cards');
 await page.evaluate(()=>{const s=TENKA_CORE.state;s.cardIndex=s.cards.findIndex(c=>c.term==='汚物処理室');TENKA_CORE.render()});
 await page.locator('.flash').click();assert(await page.locator('.flash').evaluate(el=>el.classList.contains('flipped')));
 await page.locator('.muted-box summary').click();
 assert(await page.locator('.muted-box').evaluate(el=>el.open&&el.textContent.includes(TENKA_CORE.state.cards[TENKA_CORE.state.cardIndex].note)),'authored usage note opens');
 await page.screenshot({path:path.join(out,'kaigo-facility-note.png'),fullPage:true});
 await page.evaluate(()=>{openKaigoFlash();const s=TENKA_CORE.state;s.cardIndex=s.cards.findIndex(c=>c.term==='食札');TENKA_CORE.render()});
 const savedId=await page.evaluate(()=>TENKA_CORE.state.cards[TENKA_CORE.state.cardIndex].id);
 await page.locator('.session-audio').click();assert.equal(await page.evaluate(()=>window.__tenkaSpoken.at(-1)),'しょくさつ');
 await page.locator('[onclick="rateCard(\'good\')"]').click();
 assert(await page.evaluate(id=>TENKA_CORE.state.progress.reviews[id]?.rating==='good',savedId),'browser rating schedules the workplace card');
 for(const mode of ['kaigo','listening']){
   await page.evaluate(mode=>startKaigoQuiz(mode),mode);
   for(const width of [320,390,720]){
     await page.setViewportSize({width,height:844});
     results.find(r=>r.width===width).widths.push({view:'kaigo-'+mode+'-quiz',width:await page.evaluate(()=>document.documentElement.scrollWidth)});
   }
   await page.setViewportSize({width:390,height:844});
   if(mode==='listening'){
     assert.equal(await page.locator('.question .jp').count(),0,'listening hides the written target');
     assert((await page.locator('.question').textContent()).includes('Pilih arti kata pertama'));
     const expected=await page.evaluate(()=>TENKA_CORE.state.quiz.items[0].voiceText);
     await page.waitForFunction(expected=>window.__tenkaSpoken.includes(expected),expected);
     await page.locator('.quiz-replay').click();assert.equal(await page.evaluate(()=>window.__tenkaSpoken.at(-1)),expected,'replay uses target kana and example');
   }else{
     assert(await page.evaluate(()=>document.querySelector('.question').textContent.includes(TENKA_CORE.state.quiz.items[0].exampleReading)),'written quiz presents kana context');
   }
   await page.screenshot({path:path.join(out,'kaigo-'+mode+'-quiz.png'),fullPage:true});
   for(let i=0;i<10;i++){
     const choice=await page.evaluate(({mode,i})=>{const q=TENKA_CORE.state.quiz.items[i];return mode==='kaigo'&&i===0?(q.answer+1)%4:q.answer},{mode,i});
     await page.locator('#choice-'+choice).click();
     await page.waitForFunction(i=>TENKA_CORE.state.quiz.i===i+1,i);
   }
   assert((await page.locator('.quiz-result-score').textContent()).includes(mode==='kaigo'?'90%':'100%'));
   assert.equal(await page.locator('.quiz-review').count(),10,'every answer has a review');
   await page.locator('.quiz-review summary').first().click();
   assert(await page.locator('.quiz-review').first().evaluate(el=>el.open&&el.textContent.includes(TENKA_CORE.state.quiz.items[0].exampleMeaning)),'review includes the translated example');
   for(const width of [320,390,720]){
     await page.setViewportSize({width,height:844});
     results.find(r=>r.width===width).widths.push({view:'kaigo-'+mode+'-review',width:await page.evaluate(()=>document.documentElement.scrollWidth)});
   }
   await page.setViewportSize({width:390,height:844});
   await page.screenshot({path:path.join(out,'kaigo-'+mode+'-review.png'),fullPage:true});
 }
 await page.reload();await page.waitForFunction(()=>window.TENKA_READY);
 assert(await page.evaluate(id=>TENKA_CORE.state.progress.reviews[id]?.rating==='good',savedId),'SRS survives browser reload');
 assert(await page.evaluate(()=>TENKA_CORE.state.progress.best['KAIGO-kaigo']===90&&TENKA_CORE.state.progress.best['KAIGO-kaigo-listening']===100),'both quiz results survive reload');
 assert.equal(errors.length,0,errors.join('\n'));
 const names=['index.html','styles.css','app-v2.js',...require('./helpers/load-content')().files];
 const sourceHashes=Object.fromEntries([...new Set(names)].map(name=>[name,crypto.createHash('sha256').update(fs.readFileSync(path.join(base,name))).digest('hex')]));
 const report={browser:'Chromium',font:fonts?'Noto Sans JP':'system font',errors,results,flows:{facilityCategory:true,flashFlipAndUsageNote:true,authoredKanaSpeechText:true,srsScheduleAndReload:true,writtenQuizContext:true,listeningTargetHidden:true,listeningReplayText:true,wrongAndCorrectAnswers:true,translatedResultReview:true,quizResultReload:true},sourceHashes};
 fs.writeFileSync(path.join(out,'kaigo-ui-audit.json'),JSON.stringify(report,null,2)+'\n');
 if(results.some(r=>r.bad.length||r.widths.some(v=>v.width>r.width)))process.exitCode=1;
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
