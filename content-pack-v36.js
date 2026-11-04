// Stage 10A-3: original N4 ability, volition, plans, habits and directional development.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-18',title:'可能形（かのうけい）',meaning:'bentuk verba untuk menyatakan bisa / dapat ～',pattern:'五段: bunyi u → e + る／一段: buang る + られる／する→できる／来る→来られる',
 explanation:'可能形 menyatakan kemampuan atau kemungkinan melakukan tindakan dalam suatu keadaan. Ini adalah bentuk perubahan verba, berbeda dari menyatakan izin melakukan sesuatu.',
 usage:'Menjelaskan apa yang bisa dibaca, dimakan, digunakan atau dilakukan, serta apa yang belum bisa. Bentuk negatif dan sopan dibentuk dari verba kemungkinan tersebut: 読める→読めません.',
 whenToUse:'五段: 書く→書ける、泳ぐ→泳げる、読む→読める、買う→買える. 一段: 食べる→食べられる、見る→見られる. Bentuk tidak beraturan: する→できる、来る（くる）→来られる（こられる）. Objek sering memakai が; を juga dapat muncul sesuai susunan dan penekanan.',
 watchOut:'Tidak semua verba berakhir る adalah 一段: 帰る→帰れる karena 帰る adalah 五段. Bentuk seperti 食べれる terdengar dalam percakapan, tetapi gunakan 食べられる sebagai bentuk standar yang dilatih. られる juga mempunyai penggunaan pasif/hormat; konteks menentukan makna.',
 commonMistake:'読まれる bukan bentuk kemungkinan standar untuk 読む; gunakan 読める. Jangan menambah られる pada semua verba 五段. 読めません berarti tidak bisa membaca, sedangkan 読みません hanya menyatakan tidak membaca.',
 example:'この漢字は読めますが、うまく書けません。',exampleReading:'この かんじ は よめます が、うまく かけません。',exampleMeaning:'Kanji ini bisa saya baca, tetapi belum bisa saya tulis dengan baik.',
 extraExample:'辛い料理も食べられます。',extraExampleReading:'からい りょうり も たべられます。',extraExampleMeaning:'Saya juga bisa makan masakan pedas.',
 contrast:'読める dan 読むことができる sama-sama dapat menyatakan kemampuan. 読んでもいいです menyatakan izin. 見える／聞こえる menyatakan sesuatu terlihat/terdengar secara alami dan tidak selalu sama dengan sengaja bisa melihat/mendengarkan.',
 quiz:{prompt:'この漢字は難しいので、まだ〔　〕。読み方を教えてください。',reading:'この かんじ は むずかしい ので、まだ〔　〕。よみかた を おしえて ください。',context:'Saya belum mampu membaca Kanji ini. Pilih bentuk kemungkinan negatif dari 読む untuk menyatakan belum bisa membaca.',choices:['よめません','よみません','よませます','よまれました'],answer:0,explanation:'読む adalah 五段, sehingga bentuk kemungkinannya 読める dan negatif sopannya 読めません. 読みません berarti tidak membaca; 読ませます adalah bentuk menyebabkan/membiarkan membaca; 読まれました bukan bentuk kemungkinan 読む.'}
},
{
 id:'n4-g-19',title:'意向形（いこうけい）',meaning:'bentuk biasa untuk “ayo ～” / “akan saya ～”',pattern:'五段: bunyi u → o + う／一段: buang る + よう／する→しよう／来る→来よう',
 explanation:'意向形 menyatakan kehendak pembicara atau mengajak seseorang melakukan tindakan bersama. Bentuk ini merupakan pasangan bentuk biasa untuk ajakan sopan ～ましょう.',
 usage:'Mengajak teman yang akrab atau menyatakan tekad kepada diri sendiri. Hubungan dengan lawan bicara menentukan apakah bentuk biasa atau bentuk sopan lebih sesuai.',
 whenToUse:'五段: 書く→書こう、話す→話そう、待つ→待とう、帰る→帰ろう. 一段: 食べる→食べよう、見る→見よう. する→しよう、来る（くる）→来よう（こよう）. Bentuk ini juga menjadi dasar ～ようと思う.',
 watchOut:'Ini bukan bentuk kemampuan dan bukan perintah langsung. Ajakan biasa seperti 帰ろう cocok kepada teman akrab; kepada orang yang memerlukan kesopanan gunakan konteks dan bentuk seperti 帰りましょう.',
 commonMistake:'帰るよう bukan bentuk kehendak 帰る. Karena 帰る adalah 五段, gunakan 帰ろう. 食べろ adalah bentuk perintah, bukan bentuk kehendak 食べよう.',
 example:'今日は一緒に図書館で勉強しよう。',exampleReading:'きょう は いっしょに としょかん で べんきょうしよう。',exampleMeaning:'Hari ini ayo belajar bersama di perpustakaan.',
 extraExample:'よし、もう一度やってみよう。',extraExampleReading:'よし、もう いちど やって みよう。',extraExampleMeaning:'Baiklah, akan saya coba sekali lagi.',
 contrast:'帰ろう adalah ajakan/kehendak bentuk biasa; 帰りましょう adalah bentuk sopan. 帰れる berarti bisa pulang. 帰れ adalah perintah dan mempunyai kekuatan serta penggunaan yang berbeda.',
 quiz:{prompt:'もう遅いね。そろそろ家に〔　〕。',reading:'もう おそい ね。そろそろ いえ に〔　〕。',context:'Saya mengajak teman akrab untuk pulang bersama. Pilih bentuk kehendak biasa dari 帰る yang berarti “ayo pulang”.',choices:['かえろう','かえるよう','かえって','かえれます'],answer:0,explanation:'帰る adalah 五段: 帰る→帰ろう untuk ajakan biasa. 帰れる／帰れます adalah kemampuan; 帰って adalah bentuk て. 帰るよう tidak membentuk ajakan biasa pada kalimat ini.'}
},
{
 id:'n4-g-20',title:'～ようと思う／～おうと思う',meaning:'berniat / berpikir akan melakukan ～',pattern:'V意向形 + と思う／と思っています',
 explanation:'Bentuk kehendak＋と思う menyampaikan niat untuk bertindak. ～と思っています sering menunjukkan niat yang sudah dipikirkan dan masih dimiliki, bukan hanya pikiran yang baru muncul saat berbicara.',
 usage:'Menceritakan rencana pribadi secara lebih lunak daripada mengumumkan tindakan yang sudah dipastikan. Niat belum menjamin kegiatan pasti terlaksana.',
 whenToUse:'Gunakan bentuk kehendak: 行こうと思います、食べようと思います、勉強しようと思っています. Penanda waktu seperti 来月 dapat menjelaskan kapan tindakannya diniatkan.',
 watchOut:'～よう adalah bagian bentuk kehendak verbanya, bukan kata yang langsung ditambahkan ke semua bentuk kamus. Untuk melaporkan niat orang lain, gunakan informasi yang tersedia, misalnya 本人は～と思っていると言っていました, bukan menebak isi pikirannya sebagai fakta.',
 commonMistake:'行くようと思います keliru untuk niat ini. Gunakan 行こうと思います. 行くと思います tanpa bentuk kehendak dapat berarti perkiraan bahwa seseorang akan pergi, bukan rumus niat yang sama.',
 example:'来月、日本語の試験を受けようと思っています。',exampleReading:'らいげつ、にほんご の しけん を うけよう と おもって います。',exampleMeaning:'Saya berniat mengikuti ujian bahasa Jepang bulan depan.',
 extraExample:'今夜は早く寝ようと思います。',extraExampleReading:'こんや は はやく ねよう と おもいます。',extraExampleMeaning:'Saya berniat tidur lebih awal malam ini.',
 contrast:'～ようと思う menyatakan niat. ～つもりだ juga menyatakan niat dengan bentuk kamus/ない sebelum つもり. ～予定だ berfokus pada rencana/jadwal; ～と思う setelah klausa biasa dapat menyatakan pendapat atau perkiraan.',
 quiz:{prompt:'私は来月、日本語の試験を〔　〕と思っています。',reading:'わたし は らいげつ、にほんご の しけん を〔　〕と おもって います。',context:'Saya menyampaikan niat mengikuti ujian bulan depan dengan pola bentuk kehendak＋と思っています. Pilih bentuk 受ける yang tepat.',choices:['うけよう','うけるよう','うけたよう','うけて'],answer:0,explanation:'受ける adalah 一段, sehingga bentuk kehendaknya 受けよう. 受けようと思っています menyatakan niat. 受けるよう／受けたよう tidak membentuk pola kehendak yang diminta, dan 受けて adalah bentuk て.'}
},
{
 id:'n4-g-21',title:'～予定だ',meaning:'direncanakan / dijadwalkan ～',pattern:'V辞書形 + 予定だ／Nの + 予定だ',
 explanation:'～予定だ menyampaikan rencana atau jadwal yang dianggap sudah disusun. Subjeknya dapat berupa orang maupun acara, misalnya jadwal dimulainya rapat.',
 usage:'Memberi tahu jadwal perjalanan, rapat atau kegiatan lain. Dalam kalimat sopan gunakan ～予定です. Rencana dapat berubah; pola ini sendiri bukan jaminan pelaksanaan.',
 whenToUse:'Sambungkan bentuk kamus: 始まる予定です、出発する予定です. Untuk kata benda gunakan の: 旅行の予定です. Tindakan yang tidak direncanakan terjadi juga dapat dinyatakan dengan Vない＋予定.',
 watchOut:'Jangan menyimpulkan semua rencana sudah resmi atau tidak dapat berubah hanya karena memakai 予定. Bedakan jadwal acara dari keinginan pembicara, dan tentukan tanggal/jam sesuai informasi yang benar-benar ada.',
 commonMistake:'会議が始まります予定です memakai bentuk ます di tempat bentuk kamus. Gunakan 会議が始まる予定です. Untuk kata benda, 旅行予定です bukan pola dasar Nの予定 yang dilatih.',
 example:'来週の会議は十時に始まる予定です。',exampleReading:'らいしゅう の かいぎ は じゅうじ に はじまる よてい です。',exampleMeaning:'Rapat minggu depan dijadwalkan mulai pukul sepuluh.',
 extraExample:'来月は旅行の予定です。',extraExampleReading:'らいげつ は りょこう の よてい です。',extraExampleMeaning:'Bulan depan ada rencana perjalanan.',
 contrast:'～予定だ menyoroti rencana/jadwal. ～つもりだ dan ～ようと思う menyoroti niat seseorang. ～はずだ adalah dugaan berdasar alasan dan tidak sama dengan menyatakan jadwal.',
 quiz:{prompt:'会議は午前十時に始まる〔　〕です。案内にもそう書いてあります。',reading:'かいぎ は ごぜん じゅうじ に はじまる〔　〕です。あんない にも そう かいて あります。',context:'Pengumuman mencantumkan jadwal rapat mulai pukul sepuluh. Pilih pola yang menyatakan jadwal acara.',choices:['予定','つもり','ながら','ことが'],answer:0,explanation:'始まる予定です menyatakan jadwal rapat. つもり membahas niat pelaku, bukan niat acara yang mulai dengan sendirinya. ながら dan ことが tidak membentuk pernyataan jadwal dengan susunan yang tersedia.'}
},
{
 id:'n4-g-22',title:'～ようになる',meaning:'menjadi bisa ～ / mulai terbiasa melakukan ～',pattern:'V辞書形 + ようになる（termasuk verba kemungkinan）',
 explanation:'～ようになる menyatakan perubahan sehingga suatu kemampuan atau kebiasaan yang sebelumnya tidak ada kini muncul. Fokusnya keadaan yang berubah, bukan sekadar niat untuk mencoba.',
 usage:'Menceritakan hasil belajar atau perubahan kebiasaan dari dulu ke sekarang. Verba kemungkinan seperti 読める menunjukkan kemampuan; verba kegiatan seperti 散歩する dapat menunjukkan kebiasaan yang mulai dilakukan.',
 whenToUse:'Gunakan 読めるようになりました untuk menjadi bisa membaca, atau 散歩するようになりました untuk kebiasaan yang mulai muncul. Keterangan 昔は／最近 membantu memperlihatkan keadaan sebelum dan sesudah.',
 watchOut:'読むようになる dan 読めるようになる berbeda: yang pertama mulai membaca sebagai kegiatan/kebiasaan; yang kedua menjadi mampu membaca. Untuk berhenti melakukan kebiasaan, bentuk seperti 飲まなくなりました sering digunakan; jangan menebak bentuk hanya dari terjemahan “menjadi”.',
 commonMistake:'読めますようになりました keliru pada pola perubahan ini. Gunakan bentuk biasa 読めるようになりました. Jangan memakai ようにしています jika maksudnya kemampuan sudah berubah menjadi bisa.',
 example:'日本語のニュースが少し分かるようになりました。',exampleReading:'にほんご の にゅーす が すこし わかる ように なりました。',exampleMeaning:'Saya sekarang mulai bisa memahami sedikit berita berbahasa Jepang.',
 extraExample:'最近、毎朝散歩するようになりました。',extraExampleReading:'さいきん、まいあさ さんぽする ように なりました。',extraExampleMeaning:'Belakangan saya mulai terbiasa berjalan-jalan setiap pagi.',
 contrast:'～ようになる menyoroti perubahan kemampuan/kebiasaan. ～ようにする menyoroti upaya atau kebiasaan yang sengaja dijaga. Nになる／Aくなる menjelaskan perubahan keadaan tanpa memakai klausa kegiatan dengan よう.',
 quiz:{prompt:'前はこの漢字が読めませんでしたが、今は読める〔　〕。',reading:'まえ は この かんじ が よめませんでした が、いま は よめる〔　〕。',context:'Dulu saya tidak bisa membaca Kanji ini; sesudah belajar sekarang saya sudah mampu. Pilih pola perubahan kemampuan yang telah terjadi.',choices:['ようになりました','ところです','つもりです','ことにします'],answer:0,explanation:'読めるようになりました menyatakan berubah menjadi mampu membaca. ところ tidak menyatakan perubahan kemampuan; つもり dan ことにする berkaitan dengan niat/keputusan, bukan kemampuan yang sudah diperoleh.'}
},
{
 id:'n4-g-23',title:'～ようにする',meaning:'berusaha / membiasakan diri agar melakukan atau tidak melakukan ～',pattern:'V辞書形／Vない + ようにする／ようにしています',
 explanation:'～ようにする menyatakan upaya yang sengaja dilakukan agar suatu tindakan terlaksana atau dihindari. ～ようにしています sering menunjukkan kebiasaan yang dijaga secara sadar.',
 usage:'Menjelaskan usaha sehari-hari seperti mengulang pelajaran sebelum tidur atau mengingat jadwal. Fokusnya niat dan perhatian yang diwujudkan dalam upaya, bukan jaminan bahwa tidak pernah gagal.',
 whenToUse:'Gunakan bentuk biasa 復習するようにしています untuk menjaga kebiasaan mengulang, atau 忘れないようにしています untuk berusaha agar tidak lupa. Bentuk sopan ようにしてください dapat meminta orang memperhatikan suatu kebiasaan/tindakan.',
 watchOut:'～ようにしています tidak berarti pelaku selalu berhasil tanpa pengecualian. Jangan menyamakan upaya yang sengaja dijaga dengan kemampuan baru yang sudah muncul pada ～ようになりました.',
 commonMistake:'忘れませんようにしています tidak memakai bentuk biasa yang diperlukan. Gunakan 忘れないようにしています. Untuk kebiasaan positif gunakan 復習するようにしています, bukan 復習してようにしています.',
 example:'毎日、寝る前に単語を復習するようにしています。',exampleReading:'まいにち、ねる まえ に たんご を ふくしゅうする ように して います。',exampleMeaning:'Saya berusaha membiasakan diri mengulang kosakata setiap hari sebelum tidur.',
 extraExample:'大事な予定を忘れないようにしています。',extraExampleReading:'だいじな よてい を わすれない ように して います。',extraExampleMeaning:'Saya berusaha menjaga agar tidak melupakan jadwal yang penting.',
 contrast:'～ようにする adalah upaya yang disengaja. ～ようになる adalah perubahan yang terjadi pada kemampuan/kebiasaan. ～ている saja dapat melaporkan kegiatan tanpa menyoroti usaha menjaganya.',
 quiz:{prompt:'毎日、寝る前に新しい言葉を復習する〔　〕しています。',reading:'まいにち、ねる まえ に あたらしい ことば を ふくしゅうする〔　〕して います。',context:'Saya sengaja menjaga kebiasaan mengulang kosakata sebelum tidur. Pilih pola usaha yang dijaga sebagai kebiasaan.',choices:['ように','ことが','ところで','はずが'],answer:0,explanation:'復習するようにしています menunjukkan usaha menjaga kebiasaan mengulang. ことが／ところで／はずが tidak tersambung dengan しています untuk menyatakan kebiasaan yang sengaja diusahakan pada pola ini.'}
},
{
 id:'n4-g-24',title:'～ていく',meaning:'melakukan sambil pergi menjauh / terus berkembang dari waktu acuan ke depan',pattern:'Vて + いく／いきます',
 explanation:'～ていく dapat menghubungkan tindakan dengan gerak menjauh dari tempat acuan. Pola ini juga dapat menggambarkan kegiatan atau perubahan yang berlanjut dari waktu acuan menuju masa sesudahnya.',
 usage:'Menjelaskan membawa barang ke tempat tujuan, melakukan sesuatu sebelum meneruskan perjalanan, atau meneruskan kegiatan di masa mendatang. Tafsir gerak atau perkembangan ditentukan verba dan konteks.',
 whenToUse:'Untuk arah gerak gunakan 本を持っていく. Untuk keberlanjutan gunakan これからも続けていく. Bentuk て mengikuti verba utama: 持つ→持って、続ける→続けて.',
 watchOut:'Arah selalu dilihat dari tempat/waktu acuan dalam percakapan; jangan menerjemahkan いく hanya sebagai kata masa depan. Pada 持っていく, pelaku bergerak membawa barang; pada 続けていく, tidak harus ada gerakan fisik.',
 commonMistake:'持ついきます salah sambungan; gunakan 持っていきます. Jangan menukar 持っていく dengan 持ってくる tanpa memeriksa arah terhadap tempat acuan.',
 example:'この本を友達の家に持っていきます。',exampleReading:'この ほん を ともだち の いえ に もって いきます。',exampleMeaning:'Saya akan membawa buku ini ke rumah teman, menjauh dari tempat saya sekarang.',
 extraExample:'これからも日本語の勉強を続けていきます。',extraExampleReading:'これから も にほんご の べんきょう を つづけて いきます。',extraExampleMeaning:'Mulai sekarang pun saya akan terus melanjutkan belajar bahasa Jepang.',
 contrast:'～ていく menyoroti arah menjauh atau kelanjutan dari waktu acuan ke depan. ～てくる menyoroti arah mendekat/kembali atau perkembangan sampai waktu acuan. Bentuk て saja tidak menambahkan sudut arah tersebut.',
 quiz:{prompt:'これから友達の家へ行きます。この本もそこへ持って〔　〕。',reading:'これから ともだち の いえ へ いきます。この ほん も そこ へ もって〔　〕。',context:'Saya berbicara dari rumah sendiri. Saya akan berangkat membawa buku ke rumah teman, menjauh dari tempat acuan saya sekarang. Pilih arah membawa pergi.',choices:['いきます','きます','あります','しまいました'],answer:0,explanation:'持っていきます sesuai dengan membawa barang menjauh dari rumah pembicara menuju rumah teman. 持ってきます memakai arah mendekat ke tempat acuan; てある menyatakan keadaan hasil sengaja; てしまいました adalah hasil lampau, bukan arah perjalanan yang akan dilakukan.'}
},
{
 id:'n4-g-25',title:'～てくる',meaning:'melakukan lalu datang/kembali / berkembang hingga waktu acuan',pattern:'Vて + くる／きます',
 explanation:'～てくる dapat menghubungkan tindakan dengan gerak menuju tempat acuan atau pergi melakukan sesuatu lalu kembali. Pola ini juga menyoroti perubahan yang mulai tampak atau berkembang hingga waktu acuan.',
 usage:'Menyampaikan akan membeli sesuatu lalu kembali, seseorang membawa barang mendekat, atau perubahan yang terasa belakangan ini. Tempat dan waktu acuan harus jelas.',
 whenToUse:'パンを買ってきます dapat berarti pergi membeli roti lalu kembali. 寒くなってきました menunjukkan perubahan menjadi dingin yang terasa sampai sekarang. Perubahan bentuk terjadi pada くる: きます、きました.',
 watchOut:'Tidak setiap ～てくる harus diterjemahkan pergi lalu kembali; 持ってくる dapat berupa membawa ke sini tanpa perjalanan pulang-pergi pelaku dari tempat yang sama. Penggunaan perubahan waktu tidak memerlukan perjalanan fisik.',
 commonMistake:'買うきます salah sambungan. Gunakan 買ってきます. 寒くなっていきます menyoroti perkembangan ke depan, sedangkan 寒くなってきました menyoroti perubahan yang sudah mulai terasa sampai waktu acuan.',
 example:'パンを買ってきます。ここで待っていてください。',exampleReading:'ぱん を かって きます。ここ で まって いて ください。',exampleMeaning:'Saya akan pergi membeli roti lalu kembali. Tolong tunggu di sini.',
 extraExample:'最近、少し寒くなってきました。',extraExampleReading:'さいきん、すこし さむく なって きました。',extraExampleMeaning:'Belakangan ini cuaca mulai terasa sedikit lebih dingin.',
 contrast:'～てくる menyoroti arah mendekat/kembali atau perkembangan sampai waktu acuan. ～ていく menyoroti gerak menjauh atau perkembangan dari waktu acuan ke depan. Terjemahan “datang” saja tidak mencakup penggunaan perubahan.',
 quiz:{prompt:'私は家で待っています。兄がパンをここへ持って〔　〕。',reading:'わたし は いえ で まって います。あに が ぱん を ここ へ もって〔　〕。',context:'Saya tetap di rumah sebagai tempat acuan. Kakak sedang menuju rumah dan akan membawa roti mendekat ke tempat saya. Pilih arah membawa ke sini.',choices:['きます','いきます','あります','しまいました'],answer:0,explanation:'持ってきます menunjukkan kakak membawa roti menuju tempat pembicara menunggu. 持っていきます menyoroti gerak menjauh dari tempat acuan. てある menyatakan keadaan hasil dan てしまいました hasil lampau; keduanya bukan penanda arah kedatangan yang diminta.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
