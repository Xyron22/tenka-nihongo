// Stage 10A-2: original N4 action phases, immediate completion and subjective recency.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-10',title:'～るところだ（直前）',meaning:'baru akan / tepat sebelum melakukan ～',pattern:'V辞書形 + ところだ／ところです',
 explanation:'Bentuk kamus＋ところだ menempatkan suatu tindakan pada tahap tepat sebelum dimulai. Pembicara sudah berada dalam situasi akan memulainya, bukan sekadar mempunyai rencana untuk waktu yang masih jauh.',
 usage:'Memberi tahu apa yang baru akan dilakukan, misalnya ketika seseorang menelepon tepat sebelum kita mulai makan atau berangkat.',
 whenToUse:'Gunakan bentuk kamus: 食べるところ、書くところ、出発するところ. 今から atau これから sering membantu menjelaskan tahap sebelum tindakan. Judul ～るところ bukan berarti semua verba harus diubah agar berakhir dengan る.',
 watchOut:'Tindakan pada pola ini belum mulai. ～ているところです berarti sedang berlangsung, sedangkan ～たところです berarti baru selesai. ところ di sini menunjukkan tahap tindakan, bukan tempat fisik.',
 commonMistake:'食べますところです keliru untuk pola ini. Gunakan 食べるところです. Jangan memakai bentuk kamus＋ところ untuk kegiatan yang sebenarnya sudah dimulai.',
 example:'今から昼ご飯を食べるところです。',exampleReading:'いま から ひるごはん を たべる ところ です。',exampleMeaning:'Saya baru akan mulai makan siang sekarang.',
 extraExample:'電車は今、出発するところです。',extraExampleReading:'でんしゃ は いま、しゅっぱつする ところ です。',extraExampleMeaning:'Kereta tepat akan berangkat sekarang.',
 contrast:'食べるところ: tepat sebelum mulai makan. 食べているところ: sedang makan. 食べたところ: baru selesai makan. ～つもりです menyatakan niat dan tidak dengan sendirinya berarti tepat sebelum mulai.',
 quiz:{prompt:'まだ昼ご飯は食べていません。今から〔　〕。',reading:'まだ ひるごはん は たべて いません。いま から〔　〕。',context:'Makanan sudah siap, tetapi saya belum mulai makan. Saya tepat akan mulai sekarang. Pilih tahap sebelum tindakan.',choices:['食べるところです','食べているところです','食べたところです','食べたことがあります'],answer:0,explanation:'食べるところです menunjukkan tepat sebelum mulai. 食べているところです berarti proses sudah berlangsung; 食べたところです berarti sudah selesai; 食べたことがあります hanya menyatakan pengalaman sebelumnya.'}
},
{
 id:'n4-g-11',title:'～ているところだ（最中）',meaning:'sedang berada di tengah kegiatan ～',pattern:'Vている + ところだ／ところです',
 explanation:'～ているところだ menyoroti bahwa suatu kegiatan sedang berlangsung tepat pada saat yang dibicarakan. Fokusnya tahap di tengah kegiatan itu, bukan kebiasaan umum atau hasil yang sudah selesai.',
 usage:'Menjelaskan kesibukan saat ini atau menjawab pertanyaan tentang kegiatan yang sedang dilakukan. Konteks sering berupa telepon, kunjungan, atau seseorang menanyakan apakah pekerjaan sudah selesai.',
 whenToUse:'Buat bentuk ている dari verba kegiatan: 書く→書いているところです、話す→話しているところです. Tindakan sudah dimulai dan masih berlangsung pada waktu acuan.',
 watchOut:'～ている sendiri dapat menyatakan kebiasaan atau keadaan hasil. Jangan menambahkan ところ lalu menganggap semua makna tersebut otomatis menjadi kegiatan yang sedang dikerjakan; unit ini menargetkan proses yang sedang berlangsung.',
 commonMistake:'書いてところです tidak menyertakan いる. Gunakan 書いているところです. Jika baru akan mulai menulis, bentuknya 書くところです.',
 example:'今、レポートを書いているところです。',exampleReading:'いま、れぽーと を かいて いる ところ です。',exampleMeaning:'Sekarang saya sedang mengerjakan laporan.',
 extraExample:'今、母と電話で話しているところです。',extraExampleReading:'いま、はは と でんわ で はなして いる ところ です。',extraExampleMeaning:'Sekarang saya sedang berbicara dengan ibu melalui telepon.',
 contrast:'作っているところ menekankan tepat di tengah proses membuat. 作るところ adalah tepat sebelum mulai, sedangkan 作ったところ adalah sesaat setelah selesai. 作っています dapat menjelaskan kegiatan dengan cakupan yang lebih luas.',
 quiz:{prompt:'今、晩ご飯を〔　〕。まだ全部できていません。',reading:'いま、ばんごはん を〔　〕。まだ ぜんぶ できて いません。',context:'Saya sudah mulai memasak dan saat ditelepon masih mengerjakannya. Makanannya belum seluruhnya selesai. Pilih tahap di tengah proses.',choices:['作っているところです','作るところです','作ったところです','作ったばかりです'],answer:0,explanation:'作っているところです sesuai dengan proses yang sedang berlangsung. 作るところです berarti belum mulai. 作ったところです dan 作ったばかりです sama-sama memakai bentuk selesai, bertentangan dengan konteks masih mengerjakannya.'}
},
{
 id:'n4-g-12',title:'～たところだ（直後）',meaning:'baru saja selesai melakukan ～',pattern:'Vた + ところだ／ところです',
 explanation:'～たところだ menempatkan waktu pembicaraan tepat sesudah suatu tindakan selesai. Pembicara menyampaikan tahap sesaat setelah selesai atau baru tiba, dengan hubungan waktu yang dekat dalam konteks tersebut.',
 usage:'Memberi kabar bahwa pekerjaan baru selesai atau seseorang baru sampai. たった今 atau 今 membantu menunjukkan kedekatan waktunya.',
 whenToUse:'Gunakan bentuk た: 終わる→終わったところ、着く→着いたところ. Untuk kalimat sopan tambahkan です. Makna selesai datang dari Vた sebelum ところ.',
 watchOut:'Tidak ada batas jumlah detik universal; konteks menentukan kedekatannya. Namun tindakan sebulan lalu yang masih terasa baru biasanya dijelaskan dengan ～たばかり, bukan tahap tepat sesudah selesai pada ～たところ.',
 commonMistake:'着いているところです tidak berarti baru saja tiba; bentuk itu mengarahkan pembaca ke tahap lain. Untuk kabar baru tiba gunakan 着いたところです.',
 example:'たった今、仕事が終わったところです。',exampleReading:'たった いま、しごと が おわった ところ です。',exampleMeaning:'Pekerjaan saya baru saja selesai.',
 extraExample:'今、駅に着いたところです。',extraExampleReading:'いま、えき に ついた ところ です。',extraExampleMeaning:'Saya baru saja tiba di stasiun.',
 contrast:'～たところ menekankan tepat sesudah tindakan selesai. ～たばかり menekankan bahwa waktu yang berlalu masih terasa singkat bagi pembicara. ～ているところ menandai kegiatan yang masih berlangsung.',
 quiz:{prompt:'たった今、家に〔　〕。まだ靴も脱いでいません。',reading:'たった いま、いえ に〔　〕。まだ くつ も ぬいで いません。',context:'Saya baru tiba di rumah saat ini dan bahkan belum melepas sepatu. Pilih pola tahap tepat setelah tiba.',choices:['着いたところです','着くところです','帰っているところです','着いたことがあります'],answer:0,explanation:'着いたところです cocok dengan baru tiba dan belum sempat melepas sepatu. 着くところです masih sebelum tiba; 帰っているところです menunjukkan sedang dalam proses pulang; 着いたことがあります menyatakan pengalaman, bukan tahap sekarang.'}
},
{
 id:'n4-g-13',title:'～たばかり',meaning:'baru saja ～ / masih terasa baru sejak ～',pattern:'Vた + ばかりだ／ばかりです',
 explanation:'～たばかり menyatakan tindakan sudah terjadi, tetapi pembicara merasa belum banyak waktu berlalu sejak saat itu. Penilaian “baru” bersifat subjektif dan dapat mencakup jangka waktu yang cukup panjang sesuai situasinya.',
 usage:'Menjelaskan mengapa seseorang belum terbiasa atau mengapa suatu barang dianggap masih baru. Misalnya pindah bulan lalu tetap dapat terasa baru ketika membahas adaptasi terhadap lingkungan.',
 whenToUse:'Sambungkan bentuk た: 引っ越す→引っ越したばかり、買う→買ったばかり. Penanda seperti 先月 tidak otomatis bertentangan dengan ばかり apabila pembicara memandang jaraknya masih singkat.',
 watchOut:'Jangan menetapkan batas menit atau hari yang sama untuk semua situasi. Unit ini menargetkan Vたばかり; penggunaan lain seperti 名詞＋ばかり untuk “hanya” mempunyai bentuk dan fungsi yang berbeda.',
 commonMistake:'買うばかりです tidak menyatakan baru membeli dalam pola ini. Gunakan 買ったばかりです. Sebaliknya, “baru akan membeli” dapat memakai 買うところです.',
 example:'先月この町に引っ越したばかりです。',exampleReading:'せんげつ この まち に ひっこした ばかり です。',exampleMeaning:'Saya baru pindah ke kota ini bulan lalu, jadi masih terasa baru.',
 extraExample:'この時計は買ったばかりです。',extraExampleReading:'この とけい は かった ばかり です。',extraExampleMeaning:'Jam ini baru saya beli.',
 contrast:'～たばかり adalah penilaian bahwa kejadiannya masih baru. ～たところ adalah tahap tepat setelah selesai. Keduanya dapat cocok pada kejadian yang sangat dekat; gunakan konteks jarak waktu dan maksud pembicara untuk membedakannya.',
 quiz:{prompt:'私は先月日本に来た〔　〕です。まだ生活に慣れていません。',reading:'わたし は せんげつ にほん に きた〔　〕です。まだ せいかつ に なれて いません。',context:'Kedatangan sudah sebulan lalu, tetapi saya merasa masih baru dan belum terbiasa. Pilih ungkapan kebaruan subjektif, bukan tepat sesaat setelah tiba.',choices:['ばかり','ところ','ながら','まえに'],answer:0,explanation:'来たばかりです dapat menyebut kedatangan bulan lalu yang masih terasa baru. 来たところです menekankan tepat sesudah tiba, tidak sesuai dengan jarak sebulan pada konteks ini. ながら memakai pangkal ます untuk kegiatan bersamaan; 前に menyatakan sebelum dan bentuk verbanya berbeda.'}
},
{
 id:'n4-g-14',title:'～始める',meaning:'mulai melakukan ～ / mulai terjadi ～',pattern:'Vます tanpa ます + 始める（はじめる）',
 explanation:'～始める menandai awal suatu kegiatan atau kejadian. Pola ini dapat dipakai untuk tindakan yang disengaja maupun kejadian seperti hujan yang mulai turun.',
 usage:'Menceritakan kapan belajar, bekerja atau kegiatan lain mulai dilakukan. Penekanan utamanya ada pada awal kegiatan, bukan pada apakah kegiatan itu sudah selesai.',
 whenToUse:'Ambil pangkal ます: 習います→習い始める、降ります→降り始める、勉強します→勉強し始める. Bentuk sopan lampau adalah ～始めました.',
 watchOut:'始める dalam verba gabungan ini bukan hanya untuk niat manusia. Hujan juga bisa 降り始める. Sebaliknya, pola ini tidak dengan sendirinya menekankan kejadian yang mendadak.',
 commonMistake:'勉強する始めました dan 習って始めました keliru untuk pola ini. Gunakan 勉強し始めました dan 習い始めました.',
 example:'去年、日本語を習い始めました。',exampleReading:'きょねん、にほんご を ならいはじめました。',exampleMeaning:'Tahun lalu saya mulai belajar bahasa Jepang.',
 extraExample:'夕方、雨が降り始めました。',extraExampleReading:'ゆうがた、あめ が ふりはじめました。',extraExampleMeaning:'Hujan mulai turun pada sore hari.',
 contrast:'～始める menandai permulaan secara netral. ～出す pada unit permulaan mendadak menambah kesan tiba-tiba. ～続ける adalah terus melakukan; ～終わる adalah menuntaskan.',
 quiz:{prompt:'四月に初めて日本語を勉強し〔　〕。それまでは一度も勉強したことがありませんでした。',reading:'しがつ に はじめて にほんご を べんきょうし〔　〕。それまで は いちども べんきょうした こと が ありませんでした。',context:'April adalah awal pertama saya belajar bahasa Jepang, setelah sebelumnya belum pernah belajar. Pilih pola permulaan kegiatan.',choices:['はじめました','おわりました','つづけました','すぎました'],answer:0,explanation:'勉強し始めました sesuai dengan awal pertama kegiatan. 終わりました menandai selesai; 続けました mengandaikan kegiatan diteruskan; すぎました berarti berlebihan, bukan permulaan yang diminta.'}
},
{
 id:'n4-g-15',title:'～続ける',meaning:'terus / melanjutkan melakukan ～',pattern:'Vます tanpa ます + 続ける（つづける）',
 explanation:'～続ける menyatakan kegiatan terus dilakukan selama suatu rentang atau dilanjutkan melewati waktu acuan. Konteks menentukan apakah kegiatannya berlangsung tanpa jeda atau terus dijalankan sebagai kebiasaan.',
 usage:'Menceritakan ketekunan, durasi kegiatan, atau niat untuk tetap melakukan sesuatu. 休まずに membantu menjelaskan apabila maksudnya benar-benar tanpa beristirahat.',
 whenToUse:'Ambil pangkal ます: 走ります→走り続ける、勉強します→勉強し続ける. Ubah bagian 続ける menurut waktu: 続けます、続けました.',
 watchOut:'勉強し続ける dapat berarti tetap belajar dalam jangka panjang tanpa berarti tidak tidur atau tidak pernah beristirahat. Pilih verba yang cocok untuk kegiatan berkelanjutan. Bentuk tunggal 雨が続く memakai verba 続く yang berbeda.',
 commonMistake:'走って続けました keliru untuk verba gabungan yang ditargetkan. Gunakan 走り続けました. Nを続ける seperti 勉強を続ける juga benar, tetapi susunannya berbeda dari Vます tanpa ます＋続ける.',
 example:'彼は二時間走り続けました。',exampleReading:'かれ は にじかん はしりつづけました。',exampleMeaning:'Dia terus berlari selama dua jam.',
 extraExample:'これからも日本語を勉強し続けます。',extraExampleReading:'これから も にほんご を べんきょうしつづけます。',extraExampleMeaning:'Mulai sekarang pun saya akan terus belajar bahasa Jepang.',
 contrast:'～続ける menyoroti keberlanjutan kegiatan. ～始める menyoroti awalnya dan ～終わる menyoroti penyelesaiannya. 続く adalah verba lain untuk sesuatu yang berlangsung; jangan menukar bentuknya begitu saja.',
 quiz:{prompt:'彼は途中で休まずに、二時間〔　〕。',reading:'かれ は とちゅう で やすまずに、にじかん〔　〕。',context:'Ini laporan tentang kegiatan kemarin: dia terus berlari selama dua jam tanpa berhenti di tengah jalan. Pilih kelanjutan kegiatan dalam bentuk lampau.',choices:['はしりつづけました','はしりはじめました','はしりおえます','はしろうとおもいます'],answer:0,explanation:'走り続けました menyatakan terus berlari sepanjang dua jam. 走り始めました hanya menandai awal; 走り終えます menyatakan akan menuntaskan; 走ろうと思います adalah niat, bukan laporan keberlanjutan yang sudah terjadi.'}
},
{
 id:'n4-g-16',title:'～終わる',meaning:'selesai / menuntaskan melakukan ～',pattern:'Vます tanpa ます + 終わる（おわる）',
 explanation:'～終わる menandai bahwa suatu kegiatan telah mencapai akhir atau diselesaikan. Pola ini cocok untuk kegiatan dengan bagian akhir yang dapat dipahami, misalnya membaca buku atau menulis laporan.',
 usage:'Melaporkan selesainya pekerjaan atau menanyakan apakah kegiatan sudah dituntaskan. Gunakan ketika fokusnya akhir kegiatan, bukan sekadar berhenti sebentar.',
 whenToUse:'Ambil pangkal ます: 書きます→書き終わる、読みます→読み終わる. Bentuk lampau sopan ～終わりました menyatakan sudah selesai.',
 watchOut:'Tidak semua verba cocok digabungkan secara bebas. Pilih kegiatan yang mempunyai akhir sesuai konteks. Pola ini tidak otomatis menyiratkan penyesalan seperti salah satu penggunaan ～てしまう.',
 commonMistake:'レポートを書いて終わりました berbeda susunan dari verba gabungan yang dilatih. Untuk mengatakan selesai menulis laporannya, gunakan レポートを書き終わりました.',
 example:'レポートを書き終わりました。',exampleReading:'れぽーと を かきおわりました。',exampleMeaning:'Saya sudah selesai menulis laporan.',
 extraExample:'この本は昨日読み終わりました。',extraExampleReading:'この ほん は きのう よみおわりました。',extraExampleMeaning:'Buku ini selesai saya baca kemarin.',
 contrast:'～終わる berarti kegiatan dituntaskan. ～始める berarti mulai; ～続ける berarti terus melakukan. ～のをやめる dapat berarti menghentikan kegiatan sebelum selesai, sehingga maknanya tidak selalu sama dengan ～終わる.',
 quiz:{prompt:'今、レポートを全部書き〔　〕。これで作業は終了です。',reading:'いま、れぽーと を ぜんぶ かき〔　〕。これ で さぎょう は しゅうりょう です。',context:'Laporan sudah ditulis seluruhnya, dan pekerjaan ini kini selesai. Pilih verba gabungan yang menandai penyelesaian.',choices:['おわりました','はじめました','たいです','ながらです'],answer:0,explanation:'書き終わりました menandai laporan selesai ditulis seluruhnya. 始めました adalah awal; たいです adalah keinginan. ながら menghubungkan dua kegiatan dan tidak dipakai sebagai 書きながらです pada kalimat ini.'}
},
{
 id:'n4-g-17',title:'～出す（急な開始）',meaning:'tiba-tiba mulai ～',pattern:'Vます tanpa ます + 出す（だす）',
 explanation:'～出す pada unit ini menyatakan suatu tindakan atau kejadian mulai secara tiba-tiba. Peralihan dari belum terjadi menjadi terjadi menjadi pusat perhatian pembicara.',
 usage:'Menceritakan hujan yang mendadak turun atau seseorang yang tiba-tiba menangis, tertawa atau berbicara. Konteks seperti 急に dan 突然 membantu memperjelas nuansanya.',
 whenToUse:'Ambil pangkal ます: 降ります→降り出す、笑います→笑い出す、泣きます→泣き出す. Bentuk lampau sopan ～出しました sering dipakai untuk menceritakan kejadian tersebut.',
 watchOut:'出す juga memiliki penggunaan gabungan lain seperti 取り出す, yaitu mengeluarkan. Makna itu tidak sama dengan permulaan mendadak pada unit ini. Jangan menganggap setiap kata yang berakhir 出す pasti berarti tiba-tiba mulai.',
 commonMistake:'泣く出しました dan 泣いて出しました keliru untuk pola permulaan ini. Gunakan 泣き出しました. Pola ini biasanya menyoroti awal yang muncul mendadak, bukan sekadar rencana mulai nanti.',
 example:'急に雨が降り出しました。',exampleReading:'きゅうに あめ が ふりだしました。',exampleMeaning:'Hujan tiba-tiba mulai turun.',
 extraExample:'子どもが突然笑い出しました。',extraExampleReading:'こども が とつぜん わらいだしました。',extraExampleMeaning:'Anak itu tiba-tiba mulai tertawa.',
 contrast:'～出す di sini menonjolkan permulaan mendadak. ～始める menandai awal tanpa harus menambahkan kesan mendadak. Pada konteks tertentu keduanya dapat cocok; nuansa dan situasi menentukan pilihan.',
 quiz:{prompt:'それまで泣いていなかった子どもが、急に泣き〔　〕。',reading:'それまで ないて いなかった こども が、きゅうに なき〔　〕。',context:'Anak sebelumnya tidak menangis, lalu tiba-tiba mulai menangis. Pilih pola permulaan mendadak.',choices:['だしました','おわりました','てあります','たところです'],answer:0,explanation:'泣き出しました sesuai dengan perubahan mendadak menjadi menangis. 終わりました menunjukkan selesai, bertentangan dengan awal pada konteks ini. てあります dan たところです tidak tersambung langsung pada pangkal 泣き yang tersedia.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
