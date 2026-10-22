const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict');
let playwright;try{playwright=require('playwright')}catch(error){if(!process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES)throw error;playwright=require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES,'playwright'))}
const {chromium}=playwright;
const base=path.resolve(__dirname,'..'),fonts=process.env.TENKA_TEST_JAPANESE_FONT_DIR,out=process.env.TENKA_UI_AUDIT_OUTPUT||path.join(os.tmpdir(),'tenka-n5-ui-audit');
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
   const chars=[...new Set(['vocab','kanji'].flatMap(kind=>TENKA_DATA.jlpt.N5[kind]).map(c=>[c.term,c.kanji,c.reading,c.example,c.exampleReading].join('')).join(''))].join('');
   await document.fonts.load('16px "Noto Sans JP"',chars);await document.fonts.ready;
 });
 }
 for(const width of [320,390,720]){
   await page.setViewportSize({width,height:844});
   const result=await page.evaluate(()=>{
     const state=TENKA_CORE.state,bad=[],widths=[];let cardsChecked=0;
     for(const kind of ['vocab','kanji']){
       openFlash('N5',kind);state.flipped=true;
       for(let i=0;i<state.cards.length;i++){
         state.cardIndex=i;TENKA_CORE.render();cardsChecked++;
         for(const side of document.querySelectorAll('.flash .face')){
           const r=side.getBoundingClientRect();
           const clipped=[...side.querySelectorAll('.reading,.meaning,.example,.term')].some(el=>(!el.matches('.term')&&el.scrollHeight>el.clientHeight+2)||el.scrollWidth>el.clientWidth+2||el.getBoundingClientRect().bottom>r.bottom+1||el.getBoundingClientRect().top<r.top-1);
           if(clipped||side.scrollHeight>side.clientHeight+2||side.scrollWidth>side.clientWidth+2)bad.push({id:state.cards[i].id,side:side.className,height:side.clientHeight,scroll:side.scrollHeight,width:side.clientWidth,scrollWidth:side.scrollWidth});
         }
       }
     }
     for(const view of ['home','level','grammar','daily','progress']){go(view);widths.push({view,width:document.documentElement.scrollWidth})}
     return{width:innerWidth,cardsChecked,bad,widths};
   });results.push(result);
   console.log(JSON.stringify({width,badCount:result.bad.length,firstBad:result.bad.slice(0,5),widths:result.widths}));
 }
 await page.setViewportSize({width:390,height:844});
 await page.evaluate(()=>{openFlash('N5','vocab');const state=TENKA_CORE.state;state.cardIndex=state.cards.findIndex(c=>c.term==='ごちそうさまでした');state.flipped=true;TENKA_CORE.render()});
 await page.screenshot({path:path.join(out,'n5-long-card.png'),fullPage:true});
 await page.evaluate(()=>{openFlash('N5','kanji');TENKA_CORE.state.flipped=true;TENKA_CORE.render()});
 await page.locator('.kanji-study-notes summary').click();await page.screenshot({path:path.join(out,'n5-bushu.png'),fullPage:true});
 await page.evaluate(()=>openKakijun('n5-k-99'));await page.waitForSelector('.kanji-stage svg');
 assert.equal(await page.locator('.kanji-stage svg').getAttribute('viewBox'),'0 0 109 109');
 assert.equal(await page.locator('.kanji-stage svg path').count(),14);
 await page.waitForFunction(()=>{const last=document.querySelector('.kanji-stage svg path:last-child');return last?.classList.contains('animate')&&Math.abs(parseFloat(getComputedStyle(last).strokeDashoffset))<.01},null,{timeout:15000});
 const canvas=page.locator('#writeCanvas');await canvas.scrollIntoViewIfNeeded();
 await page.waitForFunction(()=>typeof document.querySelector('#writeCanvas').onpointerdown==='function');
 const box=await canvas.boundingBox();await page.mouse.move(box.x+35,box.y+35);await page.mouse.down();await page.mouse.move(box.x+100,box.y+85,{steps:5});await page.mouse.up();
 const hasInk=()=>page.evaluate(()=>{const c=document.querySelector('#writeCanvas');return c.getContext('2d').getImageData(0,0,c.width,c.height).data.some((value,i)=>i%4===3&&value>0)});
 assert(await hasInk(),'freehand canvas accepts pointer drawing');
 await page.screenshot({path:path.join(out,'n5-kakijun.png'),fullPage:true});
 await page.locator('[onclick="clearCanvas()"]').click();assert.equal(await hasInk(),false,'clear removes the freehand stroke');
 await page.locator('[onclick="toggleGuide()"]').click();await page.waitForFunction(()=>{const c=document.querySelector('#writeCanvas');return c.getContext('2d').getImageData(0,0,c.width,c.height).data.some((value,i)=>i%4===3&&value>0)});
 await page.evaluate(()=>{openGrammar('N5');startGrammarQuiz('N5')});
 await page.screenshot({path:path.join(out,'n5-bunpou-quiz.png'),fullPage:true});
 for(let i=0;i<10;i++){await page.evaluate(()=>answerQuiz(TENKA_CORE.state.quiz.items[TENKA_CORE.state.quiz.i].answer));await page.waitForFunction(i=>TENKA_CORE.state.quiz.i===i+1,i)}
 await page.locator('.quiz-review summary').first().click();await page.screenshot({path:path.join(out,'n5-quiz-review.png'),fullPage:true});
 assert((await page.textContent('body')).includes('100%'));assert.equal(errors.length,0,errors.join('\n'));
 await page.evaluate(()=>{go('level');openGrammar('N5');toggleGrammar('n5-g-97')});await page.reload();await page.waitForFunction(()=>window.TENKA_READY);
 assert(await page.evaluate(()=>!!TENKA_CORE.state.progress.grammarDone['n5-g-97']),'browser progress persists after reload');
 const names=['index.html','styles.css','app-v2.js',...require('./helpers/load-content')().files];
 const sourceHashes=Object.fromEntries([...new Set(names)].map(name=>[name,crypto.createHash('sha256').update(fs.readFileSync(path.join(base,name))).digest('hex')]));
 const report={browser:'Chromium',font:fonts?'Noto Sans JP':'system font',errors,results,flows:{bushuNotes:true,kakijunCoordinates:true,kakijunAnimation:true,canvasDrawAndClear:true,canvasGuide:true,quizResultAndReview:true,browserProgressReload:true},sourceHashes};
 fs.writeFileSync(path.join(out,'n5-ui-audit.json'),JSON.stringify(report,null,2)+'\n');
 if(results.some(r=>r.bad.length||r.widths.some(v=>v.width>r.width)))process.exitCode=1;
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
