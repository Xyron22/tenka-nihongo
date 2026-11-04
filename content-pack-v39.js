// Stage 10A-6: original N4 thoughts, received information, embedded questions and requests.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-40',title:'～と思う',meaning:'saya pikir / menurut saya ～',pattern:'V・いA普通形 + と思う／N・なAだ + と思う（sekarang positif）',
 explanation:'～と思う menandai isi pendapat atau pikiran. と membingkai isi tersebut, sedangkan 思う menyatakan bahwa pembicara memikirkannya, bukan sekadar mengutip ucapan orang lain.',
 usage:'Mengemukakan pendapat atau perkiraan dengan menunjukkan bahwa itu penilaian pembicara. Bentuk sopan ～と思います dapat digunakan dalam percakapan netral.',
 whenToUse:'Gunakan 来ると思います、安いと思います、学生だと思います、便利だと思います. Bentuk lampau/negatif ada di dalam isi sesuai maksud: 来なかったと思います berarti saya pikir dia tidak datang.',
 watchOut:'と思います tidak mengubah pendapat menjadi fakta terverifikasi. Untuk melaporkan isi pikiran orang lain, gunakan dasar informasi yang jelas, misalnya perkataannya. ～ようと思う mempunyai bentuk kehendak dan menyatakan niat, berbeda dari pendapat biasa.',
 commonMistake:'便利なと思います dan 学生と思います menghilangkan だ yang diperlukan pada pola sekarang positif ini. Gunakan 便利だと思います dan 学生だと思います. Hindari 来ますと思います pada pola bentuk biasa yang dilatih.',
 example:'私は、この町は便利だと思います。',exampleReading:'わたし は、この まち は べんり だ と おもいます。',exampleMeaning:'Menurut saya, kota ini praktis untuk ditinggali atau beraktivitas.',
 extraExample:'明日の試験は難しいと思います。',extraExampleReading:'あした の しけん は むずかしい と おもいます。',extraExampleMeaning:'Saya pikir ujian besok akan sulit.',
 contrast:'～と思う adalah pendapat/pikiran; ～と言う adalah ucapan. ～ようと思う menyatakan niat dengan bentuk kehendak. ～かもしれない menyatakan kemungkinan dan dapat dipakai tanpa menyebut proses berpikir.',
 quiz:{prompt:'私は、この町は便利〔　〕と思います。',reading:'わたし は、この まち は べんり〔　〕と おもいます。',context:'Saya menyampaikan pendapat “kota ini praktis”. Lengkapi bentuk biasa positif sekarang dari な形容詞 便利 sebelum と思います.',choices:['だ','な','の','で'],answer:0,explanation:'便利 adalah な形容詞; isi pendapat sekarang positif memakai 便利だと思います. な dipakai sebelum kata benda, bukan sebelum と di sini. の／で juga tidak membentuk pernyataan pendapat lengkap yang ditargetkan.'}
},
{
 id:'n4-g-41',title:'～と聞いた',meaning:'saya mendengar bahwa ～',pattern:'普通形 + と聞いた／と聞きました（N・なA sekarang positif: だ）',
 explanation:'～と聞いた melaporkan isi informasi yang didengar. Pembicara menyatakan penerimaan informasi, bukan menyatakan bahwa dirinya melihat sendiri atau sudah membuktikan isinya.',
 usage:'Menyampaikan kabar dari guru, teman atau orang lain. Sumber dapat diberi から／に sesuai susunan, misalnya 友達から～と聞きました.',
 whenToUse:'Gunakan 授業がないと聞きました、休みだと聞きました. と mengikuti seluruh isi informasi. Jika menyebut kutipan langsung, pertahankan bentuk ucapan di dalam tanda kutip sesuai maksud.',
 watchOut:'聞いた juga dapat berarti bertanya/meminta keterangan dalam penggunaan lain. Unit ini menargetkan laporan isi kabar dengan と. Berbeda dari 音が聞こえる, yang menyatakan suara terdengar.',
 commonMistake:'授業がないを聞きました tidak memakai penanda isi klausa yang benar pada pola ini. Gunakan 授業がないと聞きました. Jangan menganggap sumber kabar otomatis menjamin kebenaran kabarnya.',
 example:'先生から、明日は授業がないと聞きました。',exampleReading:'せんせい から、あした は じゅぎょう が ない と ききました。',exampleMeaning:'Saya mendengar dari guru bahwa besok tidak ada pelajaran.',
 extraExample:'友達から、駅の近くに新しい図書館ができたと聞きました。',extraExampleReading:'ともだち から、えき の ちかく に あたらしい としょかん が できた と ききました。',extraExampleMeaning:'Saya mendengar dari teman bahwa ada perpustakaan baru yang sudah dibuka di dekat stasiun.',
 contrast:'～と聞いた menyebut bahwa pembicara mendengar informasi. ～らしい menyampaikan dugaan/kabar tanpa harus menyebut proses mendengar secara langsung. ～と思う menyatakan pikiran pembicara; ～と言った melaporkan orang mengucapkan sesuatu.',
 quiz:{prompt:'先生から、明日は授業がない〔　〕聞きました。',reading:'せんせい から、あした は じゅぎょう が ない〔　〕ききました。',context:'Isi kabar yang saya dengar dari guru adalah “besok tidak ada pelajaran”. Pilih partikel yang membingkai klausa isi sebelum 聞きました.',choices:['と','に','を','が'],answer:0,explanation:'授業がないと聞きました memakai と untuk isi informasi. Sumbernya sudah ditandai 先生から. に／を／が tidak menggantikan と sebagai penanda isi klausa pada pola ini.'}
},
{
 id:'n4-g-42',title:'～かどうか',meaning:'apakah ～ atau tidak',pattern:'V・いA普通形 + かどうか／N・なA + かどうか（sekarang positif: tanpa だ）',
 explanation:'～かどうか memasukkan persoalan ya/tidak ke dalam kalimat yang lebih besar. Yang belum diketahui adalah apakah pernyataannya benar atau tidak, bukan nilai jawaban seperti siapa atau pukul berapa.',
 usage:'Menyatakan belum tahu, memeriksa, atau memutuskan apakah suatu hal terjadi. Bagian akhir dapat memakai 分かりません、調べます、確認します dan verba lain sesuai maksud.',
 whenToUse:'Gunakan 来るかどうか、安いかどうか、学生かどうか、静かかどうか. Bentuk lampau/negatif dapat dipakai sesuai isi yang ditanyakan. Pada N／なA positif sekarang, lepaskan だ.',
 watchOut:'Untuk meminta informasi “jam berapa”, gunakan 何時に始まるか. Jangan menambahkan かどうか hanya karena semua pertanyaan diterjemahkan “apakah” dalam bahasa Indonesia. Kalimat utama tetap menentukan apakah informasi diminta, diketahui atau diperiksa.',
 commonMistake:'学生だかどうか dan 静かなかどうか keliru pada pola dasar ini. Gunakan 学生かどうか dan 静かかどうか. Jangan menyisipkan です ke dalam pola biasa yang dilatih.',
 example:'明日雨が降るかどうか、まだ分かりません。',exampleReading:'あした あめ が ふる か どう か、まだ わかりません。',exampleMeaning:'Saya belum tahu apakah besok akan hujan atau tidak.',
 extraExample:'この店が日曜日に開いているかどうか、調べます。',extraExampleReading:'この みせ が にちようび に あいて いる か どう か、しらべます。',extraExampleMeaning:'Saya akan mencari tahu apakah toko ini buka pada hari Minggu atau tidak.',
 contrast:'～かどうか menyoroti pilihan ya/tidak. 疑問詞＋か dapat memasukkan pertanyaan seperti siapa, kapan atau di mana. ～か～か pada pelajaran pilihan menyebut dua alternatif tertentu; どうか menggantikan alternatif “atau tidak” pada pola ini.',
 quiz:{prompt:'この店が日曜日に開いている〔　〕、調べます。',reading:'この みせ が にちようび に あいて いる〔　〕、しらべます。',context:'Saya akan memeriksa apakah toko buka pada hari Minggu atau tidak. Pilih penghubung pertanyaan ya/tidak di dalam kalimat.',choices:['かどうか','ながら','ので','ても'],answer:0,explanation:'開いているかどうか membingkai persoalan buka atau tidak untuk diperiksa. ながら adalah kegiatan bersamaan, ので memberi alasan, dan ても menyatakan konsesi dengan perubahan bentuk; ketiganya tidak menyatakan pertanyaan ya/tidak yang diminta.'}
},
{
 id:'n4-g-43',title:'疑問詞のある文 + か（間接疑問）',meaning:'memasukkan pertanyaan siapa/kapan/di mana/bagaimana ke dalam kalimat',pattern:'Klausa pertanyaan dengan 疑問詞 + か + kalimat utama（N・なA sekarang positif: tanpa だ）',
 explanation:'Pertanyaan dapat menjadi bagian dari kalimat yang menyatakan mengetahui, meminta penjelasan atau mengingat jawabannya. Kata tanya tetap berada di dalam klausa, lalu か menutup klausa pertanyaan tersebut.',
 usage:'Menanyakan apakah lawan bicara mengetahui informasi tertentu atau meminta informasi itu dijelaskan. Pertanyaan yang dimasukkan menggunakan bentuk biasa pada unit ini.',
 whenToUse:'Gunakan 会議が何時に始まるか、教えてください atau 誰が書いたか、知っていますか. か bukan akhir seluruh kalimat; kalimat utamanya dapat berakhir dengan ください atau か lain sesuai maksud.',
 watchOut:'誰か dapat berarti seseorang, tetapi 誰が書いたか berarti siapa yang menulis. Perhatikan seluruh susunan, bukan hanya letak kata tanya dan か. Untuk persoalan ya/tidak tanpa meminta nilai siapa/kapan, かどうか membantu memperjelasnya.',
 commonMistake:'何時に始まるどうか menghilangkan か yang menutup klausa. Gunakan 何時に始まるか. Jangan menambahkan だ setelah N／なA sekarang positif sebelum か pada pola ini, misalnya 誰が先生か.',
 example:'会議が何時に始まるか、教えてください。',exampleReading:'かいぎ が なんじ に はじまる か、おしえて ください。',exampleMeaning:'Tolong beri tahu saya rapat mulai pukul berapa.',
 extraExample:'誰がこの本を書いたか、知っていますか。',extraExampleReading:'だれ が この ほん を かいた か、しって います か。',extraExampleMeaning:'Apakah Anda tahu siapa yang menulis buku ini?',
 contrast:'何時に始まるか menanyakan waktu yang menjadi jawabannya. 始まるかどうか menanyakan mulai atau tidak. 誰か pada pelajaran kata tak tentu berarti seseorang; 誰が～か di sini tetap meminta identitas orangnya.',
 quiz:{prompt:'会議が何時に〔　〕、教えてください。',reading:'かいぎ が なんじ に〔　〕、おしえて ください。',context:'Saya meminta jam mulai rapat, misalnya pukul sembilan atau sepuluh. Saya tidak menanyakan apakah rapat jadi dimulai atau tidak.',choices:['はじまるか','はじまるかどうか','はじまるどうか','はじまるのに'],answer:0,explanation:'何時に始まるか mempertahankan pertanyaan tentang jam mulai. かどうか menargetkan persoalan ya/tidak, bukan nilai waktu yang diminta di sini. 始まるどうか kehilangan penutup か; のに tidak membingkai pertanyaan waktu.'}
},
{
 id:'n4-g-44',title:'V普通形 + こと（名詞化）',meaning:'hal / kegiatan melakukan ～',pattern:'V普通形 + こと + partikel／です（bentuk dasar: V辞書形＋こと）',
 explanation:'こと dapat mengubah suatu kegiatan atau isi klausa menjadi satu hal yang dapat dibicarakan seperti kata benda. Fungsi nominalisasi ini menjadi dasar pola yang lebih khusus, seperti kemampuan ～ことができる.',
 usage:'Menjelaskan hobi, aturan atau kegiatan yang dinilai penting. Partikel sesudah こと dipilih berdasarkan peran kegiatan tersebut dalam kalimat.',
 whenToUse:'Gunakan 写真を撮ること sebagai kegiatan memotret. Pada 私の趣味は～ことです, kegiatan itu menjadi isi hobi. Pada 練習することが大切です, kegiatan menjadi hal yang dinilai penting.',
 watchOut:'こと dan の sama-sama dapat membuat klausa seperti kata benda, tetapi tidak selalu dapat saling menggantikan pada semua ungkapan tetap atau susunan. Jangan memberi makna “pengalaman” pada semua こと; pengalaman membutuhkan bentuk khusus Vたことがある.',
 commonMistake:'写真を撮りますことです tidak memakai bentuk biasa yang diperlukan pada pola ini. Gunakan 写真を撮ることです. Partikel setelah こと harus mengikuti susunan, bukan selalu が pada setiap kalimat.',
 example:'私の趣味は、写真を撮ることです。',exampleReading:'わたし の しゅみ は、しゃしん を とる こと です。',exampleMeaning:'Hobi saya adalah memotret.',
 extraExample:'毎日少しずつ練習することが大切です。',extraExampleReading:'まいにち すこしずつ れんしゅうする こと が たいせつ です。',extraExampleMeaning:'Berlatih sedikit demi sedikit setiap hari adalah hal yang penting.',
 contrast:'Vこと menamai kegiatan/isi secara umum. Vのは／のが juga menominalkan dan sudah menjadi prasyarat N5, tetapi pemilihan こと／の bergantung susunan. ～ことができる menyatakan kemampuan; ～たことがある menyatakan pengalaman, bukan makna otomatis dari こと saja.',
 quiz:{prompt:'私の趣味は、写真を撮る〔　〕です。',reading:'わたし の しゅみ は、しゃしん を とる〔　〕です。',context:'Saya ingin menyebut kegiatan memotret sebagai isi hobi, dengan nominalisasi V辞書形＋こと. Pilih unsur yang menamai kegiatannya.',choices:['こと','ため','ところ','つもり'],answer:0,explanation:'写真を撮ること menamai kegiatan memotret sebagai hobi. ため berhubungan dengan tujuan/alasan, ところ dengan tempat/tahap, dan つもり dengan niat; ketiganya tidak menyatakan nominalisasi kegiatan yang diminta.'}
},
{
 id:'n4-g-45',title:'～ということ（内容の名詞化）',meaning:'hal/isi bahwa ～',pattern:'普通形の節 + ということ + partikel（N・なA sekarang positif: だ）',
 explanation:'～ということ menjadikan isi suatu pernyataan sebagai hal yang dapat diketahui, didengar atau dijelaskan. と mengutip isinya; こと membuat seluruh isi itu dapat mengambil peran seperti kata benda.',
 usage:'Menyebut isi informasi sebagai objek dari 聞く、知る atau verba lain. Fokusnya isi klausa yang dibicarakan, bukan orang secara harfiah mengucapkan kata こと.',
 whenToUse:'Gunakan 休みだということを聞きました atau 来ないということを知りませんでした. Partikel seperti を／は berada setelah seluruh ということ sesuai peran isinya dalam kalimat.',
 watchOut:'Unit ini menargetkan nominalisasi isi. Konstruksi akhir ～ということだ untuk laporan atau kesimpulan perlu dibaca dengan konteks tersendiri dan tidak dihitung sebagai seluruh cakupan unit ini. Membingkai informasi dengan ということ tidak membuktikan bahwa isi informasinya benar.',
 commonMistake:'休みということ dengan maksud klausa lengkap “besok adalah hari libur” menghilangkan だ dari isi yang ditargetkan. Gunakan 明日は休みだということ. Bedakan dari NというN untuk menyebut nama, yang mempunyai susunan lain.',
 example:'明日は休みだということを、先生から聞きました。',exampleReading:'あした は やすみ だ と いう こと を、せんせい から ききました。',exampleMeaning:'Saya mendengar dari guru informasi bahwa besok adalah hari libur.',
 extraExample:'彼が来ないということを、私は知りませんでした。',extraExampleReading:'かれ が こない と いう こと を、わたし は しりませんでした。',extraExampleMeaning:'Saya tidak tahu informasi bahwa dia tidak akan datang.',
 contrast:'～ということ menominalkan isi suatu pernyataan. Vこと menamai kegiatan secara lebih langsung. NというN menyebut nama/penamaan; ～ということだ sebagai akhir kalimat dapat mempunyai fungsi laporan/kesimpulan yang berbeda dari objek informasi di sini.',
 quiz:{prompt:'明日は休みだ〔　〕を、先生から聞きました。',reading:'あした は やすみ だ〔　〕を、せんせい から ききました。',context:'Saya menjadikan seluruh isi “besok adalah hari libur” sebagai informasi yang didengar dari guru. Pilih nominalisasi isi setelah klausa lengkap tersebut.',choices:['ということ','のような','ながら','ところで'],answer:0,explanation:'休みだということを聞きました menjadikan isi pernyataan sebagai objek informasi. のような memerlukan susunan penjelas kata benda; ながら dan ところで tidak membentuk objek isi klausa setelah 休みだ pada pola ini.'}
},
{
 id:'n4-g-46',title:'～てほしい',meaning:'ingin orang lain melakukan ～',pattern:'（私は）人に Vて + ほしい／ほしいです',
 explanation:'～てほしい menyatakan keinginan pembicara terhadap tindakan orang lain. Pelaku tindakan bukan otomatis pembicara; pihak yang diharapkan bertindak dapat ditandai に.',
 usage:'Menyampaikan harapan agar seseorang membantu, menjelaskan atau melakukan sesuatu. Dalam pemakaian lain pembicara juga dapat mengharapkan suatu keadaan terjadi, tetapi latihan ini menargetkan tindakan orang lain.',
 whenToUse:'Gunakan 弟に掃除してほしいです atau 先生に説明してほしいです. Bentuk て berasal dari tindakan yang diharapkan. Untuk keinginan agar tidak bertindak, Vないでほしい juga dapat digunakan.',
 watchOut:'Mengucapkan ～てほしい langsung kepada orang yang lebih tinggi posisinya dapat terdengar menuntut sesuai hubungan dan situasi. Keinginan tidak membuktikan bahwa permintaan sudah disampaikan, disetujui atau dilakukan. Pilih bentuk permintaan yang lebih sesuai jika sedang meminta bantuan secara langsung.',
 commonMistake:'弟に掃除したいです menyatakan keinginan tindakan pembicara dan tidak tepat jika maksudnya adik yang membersihkan. Untuk harapan terhadap adik gunakan 弟に掃除してほしいです.',
 example:'弟に、部屋を掃除してほしいです。',exampleReading:'おとうと に、へや を そうじして ほしい です。',exampleMeaning:'Saya ingin adik laki-laki saya membersihkan kamar.',
 extraExample:'先生に、もう一度説明してほしいです。',extraExampleReading:'せんせい に、もう いちど せつめいして ほしい です。',extraExampleMeaning:'Saya berharap guru menjelaskan sekali lagi.',
 contrast:'Vたい menyatakan pembicara ingin melakukan tindakan. Vてほしい mengharapkan tindakan orang lain. Vてください merupakan bentuk permintaan yang disampaikan; Vてほしい dapat hanya melaporkan keinginan yang belum disampaikan.',
 quiz:{prompt:'弟に、部屋を掃除して〔　〕です。',reading:'おとうと に、へや を そうじして〔　〕です。',context:'Saya ingin adik yang membersihkan kamar. Saya sedang menyatakan keinginan terhadap tindakannya, bukan mengatakan saya sendiri ingin membersihkan.',choices:['ほしい','みる','ある','もらう'],answer:0,explanation:'掃除してほしいです menyatakan ingin adik melakukan pembersihan. てみる adalah mencoba; てある keadaan hasil; てもらう menerima tindakan. Ketiganya bukan unsur keinginan yang diminta dan tidak langsung memakai です seperti pilihan benar di sini.'}
},
{
 id:'n4-g-47',title:'～ように言う',meaning:'menyampaikan agar seseorang melakukan/tidak melakukan ～',pattern:'人に V辞書形／Vない + ように言う／言いました',
 explanation:'～ように言う melaporkan instruksi atau permintaan tentang tindakan yang diharapkan dilakukan seseorang. Bentuk ini mengubah isi perintah/permintaan menjadi laporan tidak langsung.',
 usage:'Menceritakan apa yang guru, keluarga atau rekan katakan agar dilakukan. Kekuatan instruksi bergantung pada hubungan dan konteks; 言う sendiri tidak selalu berarti perintah keras.',
 whenToUse:'Gunakan 私に持ってくるように言いました untuk menyampaikan agar saya membawa, atau 弟に出かけないように言いました untuk menyampaikan agar adik tidak keluar. 人に menunjukkan orang yang dituju oleh instruksi pada pola dasar ini.',
 watchOut:'Orang yang mengatakan instruksi dan orang yang diharapkan bertindak bisa berbeda. Melaporkan ～ように言いました tidak membuktikan tindakan sudah dilaksanakan atau penerima sudah menyetujuinya.',
 commonMistake:'先生は私に辞書を持ってきました melaporkan guru membawa kamus, bukan guru meminta saya membawanya. Pertahankan ように言いました jika yang dimaksud adalah pelaporan instruksi.',
 example:'先生は私に、明日辞書を持ってくるように言いました。',exampleReading:'せんせい は わたし に、あした じしょ を もって くる ように いいました。',exampleMeaning:'Guru menyampaikan kepada saya agar besok membawa kamus.',
 extraExample:'母は弟に、夜遅く出かけないように言いました。',extraExampleReading:'はは は おとうと に、よる おそく でかけない ように いいました。',extraExampleMeaning:'Ibu menyampaikan kepada adik agar tidak keluar larut malam.',
 contrast:'～ように言う melaporkan permintaan/instruksi agar dilakukan. ～と言う dapat mengutip isi ucapan secara umum. ～てほしい menyampaikan keinginan pembicara dan belum tentu sudah dikomunikasikan sebagai permintaan.',
 quiz:{prompt:'「先生は私に、辞書を持ってくるように言いました」で、辞書を持ってくる人は誰ですか。',reading:'「せんせい は わたし に、じしょ を もって くる ように いいました」で、じしょ を もって くる ひと は だれ です か。',context:'Tentukan orang yang diminta membawa kamus. Kalimat ini melaporkan instruksi, bukan memastikan bahwa kamus sudah dibawa.',choices:['saya yang diminta membawa kamus','guru yang menyampaikan instruksi','semua orang tanpa kecuali','tidak ada orang yang diminta bertindak'],answer:0,explanation:'先生 adalah penyampai instruksi, sedangkan 私に adalah orang yang dituju dan diharapkan membawa kamus. Jadi pelaku yang diminta adalah saya. Kalimat tidak memperluas instruksi kepada semua orang dan tidak menyatakan tindakan pasti sudah dilakukan.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
