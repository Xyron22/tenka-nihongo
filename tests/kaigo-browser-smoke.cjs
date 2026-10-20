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
   const chars=[...new Set(JSON.stringify(TENKA_DATA.kaigo))].join('');
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
     let reportModelsChecked=0,handoffSentencesChecked=0;
     const practiceBad=[];
     function scan(view,id){
       const overflow=[...document.querySelectorAll('.work-session-hero,.work-piece-chip,.work-selected-piece,.work-model-line,.work-compare-card,.handoff-sentence-card,.handoff-question-card,.handoff-result')].filter(el=>el.scrollWidth>el.clientWidth+2);
       if(document.documentElement.scrollWidth>innerWidth||overflow.length)practiceBad.push({view,id,width:document.documentElement.scrollWidth,overflow:overflow.map(el=>el.className)});
     }
     TENKA_DATA.kaigo.houkoku.forEach((h,index)=>{
       openHoukokuPractice(index);scan('report-puzzle',h.id);
       h.pieces.forEach((_,i)=>houkokuPick(i));houkokuCheck();scan('report-selected',h.id);houkokuShowResult();scan('report-model',h.id);reportModelsChecked++;
       openHoukokuEssay(index);scan('report-write',h.id);houkokuEssayReveal(h.pieces.map(p=>p.text).join(''));scan('report-writing-model',h.id);reportModelsChecked++;
     });
     TENKA_DATA.kaigo.handoff.forEach((h,index)=>{
       openHandoffPractice(index);
       h.segments.forEach((_,i)=>{scan('handoff-sentence-'+(i+1),h.id);handoffSentencesChecked++;if(i+1<h.segments.length)handoffNextSentence()});
       handoffToQuestion();scan('handoff-question',h.id);handoffAnswer(h.answer);scan('handoff-result',h.id);finishHandoff();
     });
     for(const view of ['home','kaigo','daily','progress']){go(view);widths.push({view,width:document.documentElement.scrollWidth})}
     return{width:innerWidth,cardsChecked,reportModelsChecked,handoffSentencesChecked,bad,practiceBad,widths};
   });results.push(result);
   console.log(JSON.stringify({width,badCount:result.bad.length,practiceBadCount:result.practiceBad.length,firstPracticeBad:result.practiceBad.slice(0,3),widths:result.widths}));
 }
 await page.setViewportSize({width:320,height:844});
 await page.evaluate(()=>{openHoukokuPractice(12);[0,1,2,3].forEach(i=>houkokuPick(i));houkokuCheck();houkokuShowResult()});
 await page.screenshot({path:path.join(out,'kaigo-count-report.png'),fullPage:true});
 await page.evaluate(()=>{
   window.__tenkaSpoken=[];window.__tenkaUtterances=[];
   Object.defineProperty(speechSynthesis,'speak',{configurable:true,value:u=>{window.__tenkaSpoken.push(u.text);window.__tenkaUtterances.push({text:u.text,rate:u.rate,lang:u.lang})}});
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
 await page.evaluate(()=>{openHoukokuPractice(12);[3,2,1,0].forEach(i=>houkokuPick(i));houkokuCheck()});
 assert((await page.locator('.work-feedback').textContent()).includes('belum sesuai model latihan'));
 await page.getByRole('button',{name:'Coba lagi',exact:true}).click();
 for(let i=0;i<4;i++)await page.locator('[onclick="houkokuPick('+i+')"]').click();
 await page.getByRole('button',{name:'Periksa',exact:true}).click();await page.getByRole('button',{name:'Lihat model →',exact:true}).click();
 await page.locator('.work-audio-btn').click();
 assert.equal(await page.evaluate(()=>window.__tenkaSpoken.at(-1)),await page.evaluate(()=>TENKA_DATA.kaigo.houkoku[12].reading),'report model audio sends authored count readings');
 await page.locator('.work-finish-btn').click();assert.equal(await page.evaluate(()=>TENKA_CORE.state.view),'kaigo');
 await page.evaluate(()=>openHoukokuEssay(12));
 await page.locator('#houkoku-essay-input').fill('食札は41枚でした。確認をお願いします。');
 await page.getByRole('button',{name:'Bandingkan dengan model →',exact:true}).click();
 assert((await page.locator('.essay-answer').textContent()).includes('食札は41枚でした。'));
 await page.locator('.work-audio-btn').click();assert.equal(await page.evaluate(()=>window.__tenkaSpoken.at(-1)),await page.evaluate(()=>TENKA_DATA.kaigo.houkoku[12].reading));
 await page.screenshot({path:path.join(out,'kaigo-report-writing.png'),fullPage:true});
 await page.getByRole('button',{name:'✅ Sudah bisa',exact:true}).click();assert.equal(await page.evaluate(()=>TENKA_CORE.state.view),'kaigo');
 await page.evaluate(()=>openHandoffPractice(12));
 await page.locator('.handoff-audio-grid button').first().click();
 assert.equal(await page.evaluate(()=>window.__tenkaSpoken.at(-1)),await page.evaluate(()=>TENKA_DATA.kaigo.handoff[12].segments[0].reading));
 await page.locator('.handoff-audio-grid button').last().click();
 const rates=await page.evaluate(()=>window.__tenkaUtterances.slice(-2));assert(rates.every(u=>u.lang==='ja-JP')&&Math.abs(rates[0].rate-.9)<.00001&&Math.abs(rates[1].rate-.68)<.00001,'normal/slow handoff rates and Japanese locale are preserved');
 await page.screenshot({path:path.join(out,'kaigo-handoff-count.png'),fullPage:true});
 for(let i=0;i<2;i++)await page.getByRole('button',{name:'Kalimat berikutnya →',exact:true}).click();
 await page.getByRole('button',{name:'Lanjut ke soal →',exact:true}).click();
 const correct=await page.evaluate(()=>TENKA_DATA.kaigo.handoff[12].answer);await page.locator('.handoff-choice-list button').nth(correct).click();
 await page.locator('.handoff-result .action').click();assert.equal(await page.evaluate(()=>TENKA_CORE.state.view),'kaigo');
 await page.reload();await page.waitForFunction(()=>window.TENKA_READY);
 assert(await page.evaluate(id=>TENKA_CORE.state.progress.reviews[id]?.rating==='good',savedId),'SRS survives browser reload');
 assert(await page.evaluate(()=>TENKA_CORE.state.progress.best['KAIGO-kaigo']===90&&TENKA_CORE.state.progress.best['KAIGO-kaigo-listening']===100),'both quiz results survive reload');
 assert(await page.evaluate(()=>!!TENKA_CORE.state.progress.houkokuDone['r-13']&&!!TENKA_CORE.state.progress.houkokuEssayDone['r-13']&&!!TENKA_CORE.state.progress.handoffDone['h-13']),'report/writing/handoff completions survive browser reload');
 assert.equal(errors.length,0,errors.join('\n'));
 const names=['index.html','styles.css','app-v2.js',...require('./helpers/load-content')().files];
 const sourceHashes=Object.fromEntries([...new Set(names)].map(name=>[name,crypto.createHash('sha256').update(fs.readFileSync(path.join(base,name))).digest('hex')]));
 const report={browser:'Chromium',font:fonts?'Noto Sans JP':'system font',errors,results,flows:{facilityCategory:true,flashFlipAndUsageNote:true,authoredKanaSpeechText:true,srsScheduleAndReload:true,writtenQuizContext:true,listeningTargetHidden:true,listeningReplayText:true,wrongAndCorrectAnswers:true,translatedResultReview:true,quizResultReload:true,reportPuzzleAndKanaAudio:true,reportWritingAndKanaAudio:true,handoffSentenceAudioAndComprehension:true,handoffNormalSlowRates:true,workplacePracticeReload:true},sourceHashes};
 fs.writeFileSync(path.join(out,'kaigo-ui-audit.json'),JSON.stringify(report,null,2)+'\n');
 if(results.some(r=>r.bad.length||r.practiceBad.length||r.widths.some(v=>v.width>r.width)))process.exitCode=1;
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
