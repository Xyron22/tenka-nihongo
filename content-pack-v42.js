// Stage 10A-9: original N4 causation, permission, commands, advice, regret and purpose.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-64',title:'使役形（しえきけい）',meaning:'membuat / membiarkan seseorang melakukan ～',pattern:'五段: bunyi u → a + せる（う→わせる）／一段: buang る + させる／する→させる／来る→こさせる',
 explanation:'使役形 menyatakan seseorang menyebabkan, menyuruh atau membiarkan orang lain melakukan tindakan. Bentuk yang sama dapat menyatakan paksaan maupun pemberian kesempatan; konteks menentukan maksudnya.',
 usage:'Menceritakan memberi kesempatan memilih atau membuat seseorang menunggu. Bedakan pihak yang menyebabkan tindakan dari orang yang melakukan verba utamanya.',
 whenToUse:'Gunakan 書く→書かせる、買う→買わせる、食べる→食べさせる、する→させる、来る→こさせる. Pada verba transitif, pola dasar AはBにOをV使役 menandai B sebagai pelaku kegiatan dan O sebagai objeknya. Pada verba intransitif, B dapat memakai を／に sesuai verba dan konteks.',
 watchOut:'Jangan menganggap に selalu izin dan を selalu paksaan. Jenis verba, objek/lintasan を lain, dan situasi turut menentukan pilihan. Bentuk kausatif sendiri tidak membuktikan bahwa pelaku sudah menyetujui tindakan itu.',
 commonMistake:'書くさせる dan 買あせる keliru. Gunakan 書かせる dan 買わせる. Jangan menukar 母 yang memberi kesempatan dengan 弟 yang benar-benar memilih dalam kalimat contoh.',
 example:'母は弟に好きな服を選ばせました。',exampleReading:'はは は おとうと に すきな ふく を えらばせました。',exampleMeaning:'Ibu membiarkan adik laki-laki memilih pakaian yang ia sukai.',
 extraExample:'先生は学生を教室で待たせました。',extraExampleReading:'せんせい は がくせい を きょうしつ で またせました。',extraExampleMeaning:'Guru membuat para siswa menunggu di ruang kelas.',
 contrast:'使役形 menyoroti pihak yang menyebabkan/mengizinkan tindakan orang lain. 受身形 menyoroti pihak yang dikenai tindakan. 使役受身 menyoroti orang yang dibuat melakukan tindakan, bukan orang yang memberi instruksi.',
 quiz:{prompt:'「母は弟に好きな服を選ばせました」で、服を選ぶ人は誰ですか。',reading:'「はは は おとうと に すきな ふく を えらばせました」で、ふく を えらぶ ひと は だれ です か。',context:'Ibu memberi kesempatan adik menentukan pakaian yang ia inginkan. Tentukan pelaku tindakan memilih, bukan pihak yang memberi kesempatan.',choices:['adik laki-laki yang memilih pakaian','ibu yang memilih seluruh pakaian','tidak ada yang memilih pakaian','guru yang memerintah ibu'],answer:0,explanation:'弟に adalah pelaku 選ぶ pada pola transitif kausatif ini. 母 menjadi pihak yang membiarkan/membuat tindakan itu terjadi. Kalimat tidak meniadakan pemilihan dan tidak menyebut guru sebagai penyebabnya.'}
},
{
 id:'n4-g-65',title:'使役受身（しえきうけみ）',meaning:'dibuat / dipaksa melakukan ～',pattern:'Bは Aに V使役（buang る）+ られる（例: 書かせる→書かせられる）',
 explanation:'使役受身 menggambarkan keadaan dari pihak yang dibuat melakukan suatu tindakan. Subjek melakukan verba utamanya, tetapi orang lain menyebabkan atau memaksakan tindakan itu. Nuansanya sering terasa tidak sukarela.',
 usage:'Menceritakan dibuat menulis tugas atau menunggu lama. Ini berbeda dari sekadar menerima tindakan pada pasif biasa, karena subjek sendiri tetap melakukan kegiatan yang disebabkan orang lain.',
 whenToUse:'Buat kausatif lebih dulu, lalu ubah る menjadi られる: 書かせる→書かせられる、食べさせる→食べさせられる、させる→させられる、こさせる→こさせられる. Banyak 五段 juga punya bentuk singkat seperti 待たせられる→待たされる.',
 watchOut:'Pemendekan tidak diterapkan merata: untuk verba berakhir す, gunakan bentuk standar seperti 話させられる pada latihan ini. Pada BはAに～させられた, B yang melakukan kegiatan dan A yang menyebabkan. Jangan membacanya sebagai A yang diminta melakukan.',
 commonMistake:'私は先生に作文を書かれました tidak menyatakan saya dibuat menulis; itu pasif biasa dengan peran berbeda. Untuk saya yang harus menulis karena guru, gunakan 私は先生に作文を書かせられました.',
 example:'私は先生に作文を書かせられました。',exampleReading:'わたし は せんせい に さくぶん を かかせられました。',exampleMeaning:'Saya dibuat menulis karangan oleh guru.',
 extraExample:'昨日は長い時間待たされました。',extraExampleReading:'きのう は ながい じかん またされました。',extraExampleMeaning:'Kemarin saya dibuat menunggu lama.',
 contrast:'書かせる berarti membuat/membiarkan orang menulis. 書かせられる berarti dibuat menulis. 書かれる adalah pasif biasa; 書ける adalah kemampuan. Pelaku dan pihak penyebab harus dibaca dari seluruh susunan.',
 quiz:{prompt:'「私は先生に作文を書かせられました」で、作文を書いた人は誰ですか。',reading:'「わたし は せんせい に さくぶん を かかせられました」で、さくぶん を かいた ひと は だれ です か。',context:'Tentukan orang yang dibuat melakukan kegiatan menulis pada kalimat kausatif-pasif ini.',choices:['saya yang dibuat menulis','guru yang dibuat menulis oleh saya','tidak ada yang menulis','guru dan saya pasti menulis bersama'],answer:0,explanation:'私は menjadi pihak yang dibuat melakukan kegiatan, jadi saya yang menulis. 先生に menandai penyebab/instruktur. Kalimat tidak membalik kedua pihak, tidak meniadakan kegiatan, dan tidak menyatakan keduanya menulis bersama.'}
},
{
 id:'n4-g-66',title:'～させてください／～せてください',meaning:'tolong izinkan saya melakukan ～',pattern:'V使役のて形 + ください（meminta kesempatan/izin bertindak）',
 explanation:'Kausatif bentuk て＋ください dapat meminta lawan bicara membiarkan pembicara melakukan suatu tindakan. Pada penggunaan dasar ini, orang yang ingin melakukan verba utama adalah pembicara.',
 usage:'Meminta waktu berpikir, kesempatan menjelaskan atau izin pulang lebih dulu. Hubungan dan konteks menentukan apakah bentuk permintaan yang lebih halus diperlukan.',
 whenToUse:'考える→考えさせる→考えさせてください. 帰る→帰らせる→帰らせてください. Mulai dari bentuk kausatif yang benar; jangan menambahkan させて secara sama rata pada setiap verba.',
 watchOut:'Ini permintaan izin, bukan pernyataan bahwa izin pasti sudah diberikan. 考えてください meminta orang lain berpikir; 考えさせてください pada penggunaan ini meminta kesempatan saya berpikir.',
 commonMistake:'帰るさせてください keliru. Karena 帰る adalah 五段, bentuknya 帰らせてください. Jangan menerjemahkannya sebagai meminta orang lain pulang jika konteksnya saya meminta izin pulang.',
 example:'少し考えさせてください。',exampleReading:'すこし かんがえさせて ください。',exampleMeaning:'Tolong beri saya kesempatan berpikir sebentar.',
 extraExample:'今日は先に帰らせてください。',extraExampleReading:'きょう は さき に かえらせて ください。',extraExampleMeaning:'Hari ini tolong izinkan saya pulang lebih dulu.',
 contrast:'Vてください meminta lawan bicara melakukan tindakan. V使役てください pada unit ini meminta lawan bicara mengizinkan saya melakukannya. Vてもいいですか juga meminta izin, tetapi susunan dan penekanannya berbeda.',
 quiz:{prompt:'「少し考えさせてください」で、考える時間を求めている人は誰ですか。',reading:'「すこし かんがえさせて ください」で、かんがえる じかん を もとめて いる ひと は だれ です か。',context:'Pembicara meminta kesempatan berpikir bagi dirinya sendiri. Tentukan peran pembicara pada permintaan ini.',choices:['pembicara yang ingin berpikir','lawan bicara yang diperintah berpikir','semua orang yang sudah selesai berpikir','orang yang melarang siapa pun berpikir'],answer:0,explanation:'考えさせてください meminta kesempatan bagi pembicara untuk berpikir. Ini berbeda dari 考えてください yang meminta tindakan lawan bicara, dan tidak menyatakan kegiatan sudah selesai atau dilarang.'}
},
{
 id:'n4-g-67',title:'命令形（めいれいけい）',meaning:'bentuk perintah langsung: lakukan ～!',pattern:'五段: bunyi u → e／一段: buang る + ろ／する→しろ／来る→こい',
 explanation:'命令形 menyampaikan perintah langsung. Bentuk ini dapat muncul pada seruan, instruksi tertulis atau ucapan yang kuat. Memahami bentuknya tidak berarti tepat memakainya kepada setiap lawan bicara.',
 usage:'Mengenali petunjuk soal seperti 選べ atau seruan olahraga seperti 走れ. Dalam permintaan sehari-hari yang netral, pilih bentuk dan tingkat kesopanan yang sesuai, misalnya ～てください.',
 whenToUse:'五段: 読む→読め、書く→書け、選ぶ→選べ、帰る→帰れ. 一段: 見る→見ろ、食べる→食べろ. する→しろ、来る→来い（こい）. Dalam tulisan formal, するの命令 juga dapat berupa せよ.',
 watchOut:'Bentuk perintah dapat terdengar keras dalam percakapan biasa. Bedakan 読め（baca!）dari 読める（bisa membaca）dan 読もう（ayo/akan membaca）. Larangan V辞書形＋な mempunyai bentuk lain yang sudah menjadi prasyarat N5.',
 commonMistake:'読むろ mencampur aturan 五段 dan 一段. Gunakan 読め. 食べれ bukan bentuk perintah standar 食べる yang dilatih; gunakan 食べろ.',
 example:'練習問題に「正しい答えを一つ選べ」と書いてあります。',exampleReading:'れんしゅうもんだい に「ただしい こたえ を ひとつ えらべ」と かいて あります。',exampleMeaning:'Pada soal latihan tertulis, “Pilih satu jawaban yang benar.”',
 extraExample:'試合で、友達が「走れ！」と声をかけました。',extraExampleReading:'しあい で、ともだち が「はしれ！」と こえ を かけました。',extraExampleMeaning:'Saat pertandingan, teman berseru, “Lari!”',
 contrast:'読め adalah perintah langsung, 読みなさい juga perintah tetapi mempunyai nuansa/hubungan pemakaian berbeda, dan 読んでください adalah permintaan. 読むな adalah larangan; 読める adalah kemampuan, bukan perintah.',
 quiz:{prompt:'「正しい答えを一つ選べ」の「選べ」は、どの形ですか。',reading:'「ただしい こたえ を ひとつ えらべ」の「えらべ」は、どの かたち です か。',context:'Kenali bentuk kata yang dipakai untuk menginstruksikan pemilihan satu jawaban dalam soal latihan.',choices:['bentuk perintah dari 選ぶ','bentuk kemampuan dari 選ぶ','bentuk kehendak dari 選ぶ','bentuk negatif dari 選ぶ'],answer:0,explanation:'選ぶ adalah 五段, sehingga perintahnya 選べ. Kemampuannya 選べる, kehendaknya 選ぼう, dan negatifnya 選ばない. Makna instruksi datang dari bentuk perintah, bukan sekadar kata jawaban di dalam kalimat.'}
},
{
 id:'n4-g-68',title:'～なさい',meaning:'lakukan ～（perintah sesuai hubungan/konteks）',pattern:'Vます tanpa ます + なさい',
 explanation:'～なさい adalah bentuk perintah yang sering muncul dari orang tua/guru kepada anak atau dalam petunjuk tertulis. Bentuknya dapat lebih lunak daripada perintah pendek, tetapi tetap mengarahkan orang melakukan tindakan.',
 usage:'Memahami instruksi seperti memilih jawaban atau mengerjakan tugas. Jangan menganggap akhiran なさい sebagai cara meminta secara sopan kepada atasan dalam semua situasi.',
 whenToUse:'Gunakan 選びます→選びなさい、食べます→食べなさい、します→しなさい、来ます→来なさい（きなさい）. Pangkalnya ます, bukan bentuk kamus.',
 watchOut:'Tingkat kesopanan tidak ditentukan panjang kata saja. なさい tetap dapat terdengar memerintah dan biasanya tidak cocok sebagai permintaan umum kepada atasan. 来なさい（きなさい）dan 来い（こい）juga berbeda bacaan/bentuk.',
 commonMistake:'するなさい dan 食べるなさい keliru. Gunakan しなさい dan 食べなさい. Jangan menukar 食べなさい dengan 食べるな, karena yang kedua berarti larangan makan.',
 example:'母は弟に「宿題をしなさい」と言いました。',exampleReading:'はは は おとうと に「しゅくだい を しなさい」と いいました。',exampleMeaning:'Ibu berkata kepada adik, “Kerjakan tugasmu.”',
 extraExample:'答えを一つ選びなさい。',extraExampleReading:'こたえ を ひとつ えらびなさい。',extraExampleMeaning:'Pilihlah satu jawaban.',
 contrast:'Vなさい adalah perintah dengan pangkal ます. V命令形 seperti 選べ lebih langsung. Vてください merupakan bentuk permintaan; V辞書形＋な adalah larangan dan tidak sama dengan ～なさい.',
 quiz:{prompt:'「答えを一つ選びなさい」と言われました。何をしますか。',reading:'「こたえ を ひとつ えらびなさい」と いわれました。なに を します か。',context:'Pahami tindakan dan jumlah jawaban yang diminta dalam instruksi latihan ini.',choices:['memilih satu jawaban','menulis ulang pertanyaan','tidak boleh memilih jawaban','memilih semua jawaban yang disukai'],answer:0,explanation:'選びなさい memerintahkan memilih, dan 一つ membatasi menjadi satu jawaban. Kalimat tidak meminta menulis ulang, tidak melarang memilih, dan tidak mengizinkan memilih semua jawaban.'}
},
{
 id:'n4-g-69',title:'～たらどうですか',meaning:'bagaimana kalau mencoba ～?（saran）',pattern:'Vた + らどうですか',
 explanation:'～たらどうですか menawarkan suatu tindakan sebagai saran. Pembicara mengajak lawan bicara mempertimbangkan tindakan itu, bukan sekadar menanyakan fakta lampau.',
 usage:'Memberi saran ketika teman kesulitan atau mempunyai pilihan kegiatan. Tambahan ～てみたら dapat memberi nuansa menyarankan percobaan.',
 whenToUse:'Gunakan 聞く→聞いたらどうですか、行く→行ったらどうですか. Untuk mencoba bertanya gunakan 聞いてみたらどうですか. Bentuk た＋ら tidak membuat sarannya menjadi cerita lampau.',
 watchOut:'Walaupun dapat lebih lunak daripada perintah, intonasi dan hubungan dapat membuat saran terdengar mendesak atau mengkritik. Jangan menganggap ですか otomatis menghilangkan semua kesan menuntut.',
 commonMistake:'先生に聞くたらどうですか memakai bentuk kamus sebelum たら. Gunakan 聞いたらどうですか. Jangan menafsirkannya sebagai bukti bahwa lawan bicara sudah bertanya.',
 example:'この問題が分からなければ、先生に聞いてみたらどうですか。',exampleReading:'この もんだい が わからなければ、せんせい に きいて みたら どう です か。',exampleMeaning:'Kalau tidak memahami soal ini, bagaimana kalau mencoba bertanya kepada guru?',
 extraExample:'時間があるなら、図書館に行ってみたらどうですか。',extraExampleReading:'じかん が ある なら、としょかん に いって みたら どう です か。',extraExampleMeaning:'Kalau ada waktu, bagaimana kalau mencoba pergi ke perpustakaan?',
 contrast:'～たらどうですか memberi saran. ～たほうがいい juga memberi nasihat dengan penekanan yang dapat berbeda. ～てはいけない adalah larangan; ～ました hanya melaporkan kejadian lampau.',
 quiz:{prompt:'友達に、先生に聞くことを提案します。合う文はどれですか。',reading:'ともだち に、せんせい に きく こと を ていあんします。あう ぶん は どれ です か。',context:'Saya menyarankan teman mencoba bertanya kepada guru. Pilih kalimat saran yang sesuai dengan maksud tersebut.',choices:['先生に聞いてみたらどうですか。','先生に聞いてはいけません。','先生が聞きました。','先生は聞けません。'],answer:0,explanation:'聞いてみたらどうですか menyarankan mencoba bertanya. 聞いてはいけません melarang; 先生が聞きました melaporkan guru bertanya/mendengar; 先生は聞けません menyatakan guru tidak bisa bertanya/mendengar. Ketiganya bukan saran yang diminta.'}
},
{
 id:'n4-g-70',title:'～ばよかった',meaning:'seharusnya dulu ～ / andai dulu ～',pattern:'Vば + よかった／Vない→Vなければ + よかった',
 explanation:'～ばよかった melihat kembali pilihan yang tidak terjadi sebagaimana diharapkan. Pembicara merasa akan lebih baik jika dulu melakukan, atau tidak melakukan, tindakan tersebut.',
 usage:'Menyatakan penyesalan tentang keberangkatan terlambat atau pembelian yang disesali. Konteks menjelaskan tindakan yang sebenarnya terjadi dan pilihan alternatif yang kini diinginkan.',
 whenToUse:'Gunakan 出発する→出発すればよかった untuk berharap dulu berangkat. Negatif: 買わない→買わなければよかった berarti berharap dulu tidak membeli. よかった adalah bentuk lampau dari いい dengan pangkal よ.',
 watchOut:'Bentuk negatif membalik tindakan yang disesali: 買えばよかった menyesal tidak membeli; 買わなければよかった menyesal sudah membeli. Ini tidak sama dengan kewajiban なければならない.',
 commonMistake:'買ったばよかった keliru karena ば memerlukan perubahan tersendiri, bukan bentuk た＋ば. Gunakan 買えばよかった atau 買わなければよかった sesuai maksud penyesalan.',
 example:'もっと早く出発すればよかったです。',exampleReading:'もっと はやく しゅっぱつすれば よかった です。',exampleMeaning:'Seharusnya saya berangkat lebih awal.',
 extraExample:'あのとき、高い時計を買わなければよかったです。',extraExampleReading:'あの とき、たかい とけい を かわなければ よかった です。',extraExampleMeaning:'Seharusnya waktu itu saya tidak membeli jam yang mahal.',
 contrast:'～ばよかった menyampaikan penyesalan atas pilihan sebelumnya. ～てよかった dapat menyatakan lega/senang karena tindakan benar-benar terjadi. ～なければならない adalah kewajiban, bukan penyesalan negatif.',
 quiz:{prompt:'「買わなければよかったです」は、何を後悔していますか。',reading:'「かわなければ よかった です」は、なに を こうかいして います か。',context:'Pembicara sedang melihat kembali pembelian yang sudah terjadi. Perhatikan penyesalan dengan bentuk negatif なければ.',choices:['sudah membeli dan berharap dulu tidak membelinya','belum membeli dan ingin segera membeli','memastikan wajib membeli besok','melarang orang lain membeli sekarang'],answer:0,explanation:'買わなければよかった berharap pilihan dahulu adalah tidak membeli, sehingga konteksnya menyesali sudah membeli. Kalimat tidak menyatakan niat membeli sekarang, kewajiban besok, atau larangan kepada orang lain.'}
},
{
 id:'n4-g-71',title:'～ように（目的・結果のための行動）',meaning:'agar / supaya suatu hasil atau keadaan memungkinkan ～',pattern:'V辞書形・Vない・V可能形 + ように + tindakan',
 explanation:'ように pada unit ini menghubungkan tindakan dengan hasil/keadaan yang ingin dimungkinkan atau dicegah. Hasilnya sering tidak sepenuhnya berada dalam kendali langsung pelaku, misalnya dapat terdengar atau tidak lupa.',
 usage:'Menjelaskan mencatat agar tidak lupa, atau berbicara sehingga orang di belakang dapat mendengar. Orang yang melakukan tindakan dan pihak yang mengalami hasilnya dapat berbeda.',
 whenToUse:'Gunakan 忘れないように書く、聞こえるように話す、読めるように練習する. Bentuk negatif atau kemampuan sering dipakai, tetapi pilihan bentuk mengikuti makna hasil yang diinginkan.',
 watchOut:'Tujuan tidak menjamin hasil pasti tercapai. Bedakan ように tujuan ini dari Nのように untuk perbandingan dan ように言う untuk laporan instruksi. Jangan menambahkan の setelah verba pada pola tujuan yang dilatih.',
 commonMistake:'忘れないのように書きます keliru pada pola tujuan ini. Gunakan 忘れないように書きます. 読むようです adalah dugaan dalam susunan lain, bukan otomatis tujuan agar dapat membaca.',
 example:'忘れないように、手帳に予定を書きます。',exampleReading:'わすれない ように、てちょう に よてい を かきます。',exampleMeaning:'Agar tidak lupa, saya mencatat jadwal di buku agenda.',
 extraExample:'後ろの人にも聞こえるように、大きな声で話します。',extraExampleReading:'うしろ の ひと にも きこえる ように、おおきな こえ で はなします。',extraExampleMeaning:'Saya berbicara dengan suara besar agar orang di belakang juga dapat mendengar.',
 contrast:'ように tujuan menghubungkan tindakan dengan hasil yang ingin dimungkinkan/dicegah. ようにする adalah upaya/kebiasaan yang dijaga; ようになる adalah perubahan kemampuan/kebiasaan. Nのように memberi perbandingan dan tidak sama dengan pola tujuan setelah verba.',
 quiz:{prompt:'忘れない〔　〕、予定を手帳に書きます。',reading:'わすれない〔　〕、よてい を てちょう に かきます。',context:'Saya mencatat jadwal dengan tujuan tidak melupakannya. Pilih penghubung tujuan hasil/keadaan yang ingin dicegah.',choices:['ように','みたいな','ところで','ながら'],answer:0,explanation:'忘れないように menyatakan tujuan agar tidak lupa. みたいな menerangkan kemiripan sebelum N, ところで mempunyai fungsi lain, dan ながら menghubungkan kegiatan bersamaan dengan pangkal ます; ketiganya tidak menyatakan tujuan yang diminta.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
