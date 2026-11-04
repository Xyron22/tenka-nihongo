// Stage 10A-8: original N4 ease/difficulty, methods, manner, change, verb roles and passive.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-56',title:'～やすい／～にくい',meaning:'mudah / sulit melakukan ～; mudah/sulit terjadi sesuai verba',pattern:'Vます tanpa ます + やすい／にくい',
 explanation:'～やすい dan ～にくい menerangkan kemudahan atau kesulitan melakukan suatu tindakan. Bergantung verba, pola ini juga dapat menunjukkan kecenderungan sesuatu terjadi, misalnya 割れやすい（われやすい: mudah pecah）.',
 usage:'Menilai keterbacaan, kemudahan pemakaian atau sifat barang. Keterangan seperti ukuran huruf membantu menjelaskan sebab penilaiannya.',
 whenToUse:'Gunakan 読みやすい、読みにくい、使いやすい. Setelah digabung, bentuknya seperti い形容詞: 読みやすくない、読みにくかった. Pangkalnya berasal dari ます, bukan bentuk kamus.',
 watchOut:'Kesulitan tidak selalu berarti pelaku tidak mampu sama sekali. Selain tindakan sengaja, ada penggunaan kecenderungan seperti 割れやすい. Jangan menganggap setiap やすい berarti harganya murah; 安い sebagai kata mandiri mempunyai fungsi lain.',
 commonMistake:'読むやすい dan 読んでにくい keliru. Gunakan 読みやすい dan 読みにくい. Bentuk negatifnya bukan 読みやすいない, melainkan 読みやすくない.',
 example:'この本は字が大きくて、読みやすいです。',exampleReading:'この ほん は じ が おおきくて、よみやすい です。',exampleMeaning:'Huruf buku ini besar, sehingga mudah dibaca.',
 extraExample:'字が小さくて、この本は読みにくいです。',extraExampleReading:'じ が ちいさくて、この ほん は よみにくい です。',extraExampleMeaning:'Hurufnya kecil, sehingga buku ini sulit dibaca.',
 contrast:'～やすい dan ～にくい menilai kemudahan/kesulitan. 可能形 menyatakan bisa/tidak bisa. ～づらい sering menyoroti beban atau ketidaknyamanan pelaku; dalam beberapa konteks にくい dan づらい dapat sama-sama cocok.',
 quiz:{prompt:'字が小さくて、この本は読み〔　〕です。',reading:'じ が ちいさくて、この ほん は よみ〔　〕です。',context:'Hurufnya sangat kecil dan saya kesulitan membaca buku ini. Pilih pola yang menyatakan sulit dibaca.',choices:['にくい','やすい','ながら','かた'],answer:0,explanation:'読みにくい menyatakan sulit dibaca. 読みやすい justru mudah dibaca; ながら menghubungkan kegiatan bersamaan, dan 読み方 adalah cara membaca, bukan penilaian sulit yang diminta.'}
},
{
 id:'n4-g-57',title:'～づらい',meaning:'terasa sulit / berat / tidak nyaman untuk melakukan ～',pattern:'Vます tanpa ます + づらい',
 explanation:'～づらい menyampaikan kesulitan dengan penekanan pada beban atau ketidaknyamanan yang dirasakan pelaku. Bebannya dapat bersifat psikologis, fisik, atau muncul dari keadaan yang menyulitkan.',
 usage:'Mengatakan sulit menyampaikan sesuatu yang membuat sungkan atau sulit melihat layar yang mengganggu kenyamanan. Pola ini menyoroti pengalaman kesulitan pelaku dan tidak otomatis berarti tindakannya mustahil dilakukan.',
 whenToUse:'Gunakan 言いづらい、見づらい、使いづらい. Seperti い形容詞, bentuknya dapat berubah menjadi づらくない atau づらかった sesuai makna.',
 watchOut:'Perbedaan dengan にくい adalah kecenderungan nuansa, bukan aturan bahwa salah satunya selalu subjektif dan yang lain selalu objektif. Banyak situasi memungkinkan keduanya dengan penekanan berbeda. Ejaan pola standar ini memakai づ, bukan ず.',
 commonMistake:'言うづらい dan 言いづらなです keliru. Gunakan 言いづらいです. Sebelum です pada kalimat sifat positif ini tetap memakai bentuk づらい, bukan づらく.',
 example:'この話は先生に言いづらいです。',exampleReading:'この はなし は せんせい に いいづらい です。',exampleMeaning:'Saya merasa sungkan atau berat menyampaikan hal ini kepada guru.',
 extraExample:'画面が暗くて、文字が見づらいです。',extraExampleReading:'がめん が くらくて、もじ が みづらい です。',extraExampleMeaning:'Layarnya gelap sehingga tulisannya terasa sulit dilihat.',
 contrast:'～づらい sering menyoroti kesulitan yang membebani pelaku. ～にくい dapat menyatakan kesulitan secara lebih umum; jangan menganggapnya selalu salah pada konteks yang sama. 見えない menyatakan tidak terlihat, bukan sekadar terasa sulit dilihat.',
 quiz:{prompt:'この話は先生に言い〔　〕です。',reading:'この はなし は せんせい に いい〔　〕です。',context:'Saya merasa berat atau sungkan menyampaikan hal ini kepada guru. Lengkapi bentuk sifat positif ～づらい sebelum です.',choices:['づらい','づらく','づらな','づらに'],answer:0,explanation:'言いづらいです memakai pangkal 言います tanpa ます dan bentuk い形容詞 づらい. づらく memerlukan susunan lanjutan lain; づらな／づらに bukan perubahan yang benar untuk pola ini.'}
},
{
 id:'n4-g-58',title:'～方（かた）',meaning:'cara melakukan ～',pattern:'Vます tanpa ます + 方（かた）／Nする→Nのしかた',
 explanation:'方 setelah pangkal verba menamai cara melakukan kegiatan itu. Seluruh gabungan menjadi seperti kata benda, sehingga dapat diikuti partikel seperti を atau が.',
 usage:'Bertanya tentang cara memakai alat, menulis sesuatu atau melakukan kegiatan. Ini menjelaskan metode, bukan memberi saran “sebaiknya” seperti ～たほうがいい.',
 whenToUse:'Gunakan 使う→使い方、書く→書き方、読む→読み方. Untuk banyak verba Nする, bentuk Nのしかた dapat dipakai, misalnya 勉強のしかた. Objek di depan frasa metode sering menjadi Nの, seperti この機械の使い方.',
 watchOut:'方 pada pola cara ini dibaca かた. 方 pada perbandingan atau ～たほうがいい dibaca ほう dan mempunyai susunan/fungsi berbeda. Sufiks cara juga berbeda dari 方（かた） sebagai sebutan hormat untuk orang.',
 commonMistake:'この機械の使う方 dengan maksud pola cara memakai tidak menggunakan pangkal ます. Gunakan この機械の使い方. Untuk “cara belajar”, gunakan 勉強のしかた sesuai pola Nする yang dilatih.',
 example:'この機械の使い方を教えてください。',exampleReading:'この きかい の つかいかた を おしえて ください。',exampleMeaning:'Tolong ajari saya cara menggunakan mesin ini.',
 extraExample:'漢字の勉強のしかたを考えます。',extraExampleReading:'かんじ の べんきょう の しかた を かんがえます。',extraExampleMeaning:'Saya akan memikirkan cara belajar Kanji.',
 contrast:'V方 menamai cara melakukan. Vたほうがいい memberi saran. Vこと menamai kegiatan, sehingga 読むこと adalah kegiatan membaca, sedangkan 読み方 adalah cara membaca.',
 quiz:{prompt:'この機械の〔　〕を教えてください。',reading:'この きかい の〔　〕を おしえて ください。',context:'Saya meminta cara menggunakan mesin. Pilih frasa metode yang dibentuk dari pangkal 使います.',choices:['つかいかた','つかうかた','つかってかた','つかったほう'],answer:0,explanation:'使います melepas ます menjadi 使い, lalu 使い方 berarti cara memakai. Bentuk kamus atau て tidak langsung dipakai sebelum 方 pada pola ini. 使ったほう berkaitan dengan perbandingan/saran dalam susunan lain, bukan nama metode yang diminta.'}
},
{
 id:'n4-g-59',title:'～直す（なおす）',meaning:'melakukan ulang / memperbaiki dengan mengulang ～',pattern:'Vます tanpa ます + 直す（なおす）',
 explanation:'～直す menyatakan melakukan suatu tindakan lagi, sering untuk memperbaiki hasil, meninjau ulang atau memulai lagi dengan hasil yang lebih sesuai. Maknanya tidak terbatas pada memperbaiki barang yang rusak.',
 usage:'Mengatakan menulis ulang nama yang salah, membaca kembali penjelasan atau memikirkan ulang suatu pilihan. Kegiatan pertama sudah dilakukan atau dicoba sebelumnya.',
 whenToUse:'Gunakan 書く→書き直す、読む→読み直す、考える→考え直す. Bagian 直す berubah menurut waktu: 書き直します、書き直しました.',
 watchOut:'直す sebagai verba mandiri berarti memperbaiki, sedangkan V直す menggabungkan makna ulang/perbaikan dengan tindakan tertentu. Jangan menganggap pola ini hanya berarti terus menerus melakukan tanpa mengulang atau meninjau hasil.',
 commonMistake:'書いて直しました tidak membentuk verba gabungan yang ditargetkan. Gunakan 書き直しました untuk menulis ulang. 書く直しました juga keliru karena yang diperlukan pangkal ます.',
 example:'名前を間違えたので、書き直しました。',exampleReading:'なまえ を まちがえた ので、かきなおしました。',exampleMeaning:'Karena salah menulis nama, saya menuliskannya ulang untuk memperbaikinya.',
 extraExample:'よく分からなかったので、説明を読み直しました。',extraExampleReading:'よく わからなかった ので、せつめい を よみなおしました。',extraExampleMeaning:'Karena belum memahami dengan baik, saya membaca kembali penjelasannya.',
 contrast:'～直す menyoroti mengulang/meninjau untuk memperbaiki. ～続ける menyoroti kelanjutan, dan ～始める permulaan. もう一度V juga berarti melakukan lagi, tetapi tidak selalu menonjolkan perbaikan atau peninjauan hasil.',
 quiz:{prompt:'名前を間違えたので、書き〔　〕。',reading:'なまえ を まちがえた ので、かき〔　〕。',context:'Saya memperbaiki kesalahan nama dengan menuliskannya ulang. Pilih verba gabungan untuk melakukan ulang sebagai perbaikan.',choices:['なおしました','つづけました','はじめました','すぎました'],answer:0,explanation:'書き直しました menyatakan menulis ulang untuk memperbaiki. 続けました menyoroti terus menulis, 始めました awal menulis, dan すぎました menulis berlebihan; ketiganya tidak menyatakan perbaikan melalui penulisan ulang yang diminta.'}
},
{
 id:'n4-g-60',title:'いAく／なAに + V（動作の様子）',meaning:'melakukan V dengan cara/sifat ～',pattern:'いA buang い + く + V／なA + に + V',
 explanation:'形容詞 dapat menerangkan cara atau sifat tindakan. い形容詞 berubah menjadi ～く, sedangkan な形容詞 memakai ～に sebelum verba.',
 usage:'Meminta tulisan dibuat besar atau mengatakan seseorang berbicara dengan tenang. Fokusnya bagaimana kegiatan dilakukan, bukan sekadar menempelkan sifat pada kata benda.',
 whenToUse:'Gunakan 大きい→大きく書く、早い→早く起きる、静か→静かに話す、きれい→きれいに書く. Perhatikan きれい adalah な形容詞 walaupun berakhir bunyi い.',
 watchOut:'Tidak semua kata keterangan dibentuk dengan aturan ini; ada kata keterangan mandiri seperti ゆっくり. 静かな声 menerangkan kata benda 声, sedangkan 静かに話す menerangkan tindakan 話す.',
 commonMistake:'静かな話してください dan 大きい書いてください mencampur bentuk sebelum N dengan bentuk sebelum verba. Gunakan 静かに話してください dan 大きく書いてください.',
 example:'名前を大きく書いてください。',exampleReading:'なまえ を おおきく かいて ください。',exampleMeaning:'Tolong tulis nama dengan huruf besar.',
 extraExample:'図書館では静かに話してください。',extraExampleReading:'としょかん では しずかに はなして ください。',extraExampleMeaning:'Di perpustakaan, tolong berbicara dengan tenang.',
 contrast:'Aく／Aに＋V menerangkan tindakan. AいN／AなN menerangkan kata benda. Aくなる／Aになる menyatakan perubahan keadaan, sedangkan Aくする／Aにする menyatakan membuat sesuatu menjadi keadaan tersebut.',
 quiz:{prompt:'図書館では静か〔　〕話してください。',reading:'としょかん では しずか〔　〕はなして ください。',context:'Saya meminta cara berbicara yang tenang. Pilih bentuk な形容詞 静か yang menerangkan verba 話す.',choices:['に','な','く','の'],answer:0,explanation:'静かに話す memakai に sebelum verba. 静かな digunakan sebelum N. く dipakai untuk perubahan い形容詞, dan の tidak membentuk keterangan cara dari 静か pada pola ini.'}
},
{
 id:'n4-g-61',title:'～くする／～にする（状態を変える）',meaning:'membuat sesuatu menjadi lebih/berkeadaan ～',pattern:'Nを + いA buang い + くする／Nを + なAにする',
 explanation:'形容詞＋する menyatakan pelaku mengubah atau mengatur sesuatu menjadi keadaan yang disebutkan. Objek yang diubah sering ditandai を.',
 usage:'Meminta suara dikecilkan atau menjelaskan sudah membuat ruangan bersih. Fokusnya tindakan yang mengubah keadaan, berbeda dari hanya melaporkan keadaan berubah.',
 whenToUse:'Gunakan 音を小さくする dari 小さい, 部屋をきれいにする dari きれい. Bentuk waktu ada pada する: 小さくしてください、きれいにしました.',
 watchOut:'小さくなる berarti menjadi kecil, sedangkan 小さくする berarti membuatnya kecil. Nにする pada pilihan seperti お茶にします adalah prasyarat yang berkaitan tetapi berbeda dari perubahan sifat yang menjadi tujuan unit ini.',
 commonMistake:'音を小さいにしてください dan 部屋をきれいくしました keliru. Gunakan 音を小さくしてください dan 部屋をきれいにしました. きれい termasuk な形容詞.',
 example:'音を小さくしてください。',exampleReading:'おと を ちいさく して ください。',exampleMeaning:'Tolong kecilkan suaranya.',
 extraExample:'部屋をきれいにしました。',extraExampleReading:'へや を きれいに しました。',extraExampleMeaning:'Saya sudah membuat ruangan menjadi bersih.',
 contrast:'Aくする／Aにする mengubah sesuatu menjadi keadaan tertentu. Aくなる／Aになる melaporkan perubahan keadaan. Nにする dapat menyatakan memilih/menetapkan, sedangkan unit ini menargetkan sifat dengan 形容詞.',
 quiz:{prompt:'「部屋をきれいにしました」の意味はどれですか。',reading:'「へや を きれいに しました」の いみ は どれ です か。',context:'Perhatikan peran を dan する dalam kalimat perubahan sifat ruangan.',choices:['Saya membuat ruangan menjadi bersih.','Ruangan menjadi bersih tanpa menyebut tindakan saya.','Saya hanya ingin memilih ruangan yang sudah bersih.','Saya hanya berada di dalam ruangan yang bersih.'],answer:0,explanation:'部屋をきれいにしました menyatakan tindakan membuat ruangan bersih. きれいになりました melaporkan perubahan tanpa susunan pelaku/objek yang sama; kalimat ini juga tidak hanya menyatakan keinginan memilih atau keberadaan di ruangan.'}
},
{
 id:'n4-g-62',title:'他動詞・自動詞（たどうし・じどうし）',meaning:'verba dengan objek tindakan / verba yang memusatkan peristiwa atau perubahan pada subjek',pattern:'人が Nを 開ける（あける）／Nが 開く（あく）',
 explanation:'他動詞 seperti 開ける menyatakan tindakan pada objek, sedangkan 自動詞 seperti 開く menyoroti peristiwa/perubahan pada subjek. Pasangan ini membantu membedakan siapa melakukan apa dari apa yang terjadi pada benda.',
 usage:'Menjelaskan seseorang membuka jendela atau jendelanya terbuka. Pilihan verba menentukan informasi yang dinyatakan; bukan sekadar mengganti partikel pada verba yang sama.',
 whenToUse:'Pelajari pasangan dengan bacaan: 開ける（あける）／開く（あく）、閉める（しめる）／閉まる（しまる）、消す（けす）／消える（きえる）. Pola dasar objek tindakan memakai を, sedangkan benda yang berubah sering menjadi subjek が.',
 watchOut:'他動詞 tidak selalu berarti sengaja; kesalahan tidak sengaja juga bisa memakai verba transitif. 自動詞 tidak membuktikan tidak ada penyebab/pelaku. を juga dapat menandai lintasan seperti 道を歩く, jadi kemunculan を saja tidak cukup untuk menggolongkan semua verba.',
 commonMistake:'Menganggap 窓が開きました membuktikan saya yang membukanya menambahkan pelaku yang tidak dinyatakan. Jika ingin menyatakan saya membuka jendela, gunakan 私が窓を開けました. Jangan menebak semua pasangan dari akhiran huruf saja.',
 example:'私が窓を開けました。',exampleReading:'わたし が まど を あけました。',exampleMeaning:'Saya yang membuka jendela.',
 extraExample:'風で窓が開きました。',extraExampleReading:'かぜ で まど が あきました。',extraExampleMeaning:'Jendela terbuka karena angin.',
 contrast:'開ける／開く adalah pasangan verba berbeda. 開けられる adalah bentuk pasif/kemungkinan dari 開ける, bukan kata yang sama dengan 自動詞 開く. ～てある dengan transitif menyoroti hasil tindakan sengaja; intransitif＋ている menyatakan keadaan yang berlanjut.',
 quiz:{prompt:'「風で窓が開きました」で、窓について何を伝えていますか。',reading:'「かぜ で まど が あきました」で、まど について なに を つたえて います か。',context:'Tentukan informasi yang benar-benar dinyatakan oleh verba 開く（あく）dan penyebab 風で.',choices:['Jendela terbuka karena angin.','Saya sengaja membuka jendela.','Seseorang meminta saya membuka jendela.','Jendela belum terbuka karena saya tidak mampu.'],answer:0,explanation:'窓が開きました menyoroti perubahan pada jendela; 風で menyebut angin sebagai penyebab. Kalimat tidak menyatakan saya bertindak sengaja, menerima permintaan, atau tidak mampu membuka.'}
},
{
 id:'n4-g-63',title:'受身形（うけみけい）',meaning:'bentuk pasif: subjek menerima/dikenai tindakan',pattern:'五段: bunyi u → a + れる（う→われる）／一段: buang る + られる／する→される／来る→こられる',
 explanation:'受身形 menggambarkan tindakan dari pihak yang dikenai atau terpengaruh olehnya. Pada pola dasar orang, pelaku tindakan dapat ditandai に, sedangkan orang yang menerima tindakan menjadi topik/subjek.',
 usage:'Menceritakan dipuji, tindakan pada benda, atau kejadian yang memengaruhi seseorang. Pasif dapat bersifat positif, netral atau menyatakan dampak yang merepotkan; tidak semuanya berarti kejadian buruk.',
 whenToUse:'五段: 書く→書かれる、読む→読まれる、買う→買われる. 一段: ほめる→ほめられる、食べる→食べられる. する→される、来る→こられる. Pola 私は先生にほめられました menempatkan guru sebagai pelaku memuji.',
 watchOut:'食べられる dapat berarti bisa makan atau dimakan; konteks dan peran menentukan makna. Pasif yang menyatakan dampak dapat tetap mempertahankan objek, seperti 兄にケーキを食べられました. Jangan menghapus semua を atau menganggap semua pasif selalu keluhan.',
 commonMistake:'私は先生をほめられました tidak memakai susunan dasar penerima-pelaku yang ditargetkan jika guru yang memuji saya. Gunakan 私は先生にほめられました. 買う menjadi 買われる, bukan 買あれる.',
 example:'私は先生に褒められました。',exampleReading:'わたし は せんせい に ほめられました。',exampleMeaning:'Saya dipuji oleh guru.',
 extraExample:'この本は多くの国で読まれています。',extraExampleReading:'この ほん は おおく の くに で よまれて います。',extraExampleMeaning:'Buku ini dibaca di banyak negara.',
 contrast:'先生が私をほめました dan 私は先生にほめられました menggambarkan arah tindakan yang sama dari sudut berbeda. 可能形 menyatakan kemampuan; 受身形 menyatakan terkena/terpengaruh tindakan. Pada 一段 bentuknya dapat sama, jadi jangan menafsirkan hanya dari られる.',
 quiz:{prompt:'「私は先生に褒められました」で、褒めた人は誰ですか。',reading:'「わたし は せんせい に ほめられました」で、ほめた ひと は だれ です か。',context:'Tentukan pelaku pujian pada kalimat pasif, bukan orang yang menerima pujian.',choices:['guru yang memuji saya','saya yang memuji guru','saya dan guru saling memuji','tidak ada yang memuji'],answer:0,explanation:'先生に menandai pelaku pujian pada pola dasar ini, sedangkan 私 menerima pujian. Jadi guru yang memuji saya. Kalimat tidak membalik pelaku, tidak menyatakan saling memuji, dan tidak meniadakan tindakannya.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
