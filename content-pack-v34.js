// Stage 10A-1: original N4 action/aspect/benefactive lessons and contextual practice.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-01',title:'～たことがあります',meaning:'pernah melakukan ～',pattern:'Vた + ことがあります',
 explanation:'Menceritakan pengalaman yang pernah dilakukan setidaknya sekali.',
 usage:'Mengulang prasyarat pengalaman dari N5 sebelum mengembangkan pola tindakan N4. Fokusnya apakah pengalaman itu ada dalam hidup seseorang, bukan menceritakan kejadian pada satu tanggal tertentu.',
 whenToUse:'Gunakan bentuk た sebelum ことがある. Pengalaman yang belum pernah terjadi dapat memakai まだ一度も～たことがありません. Ini materi jembatan yang mempertahankan ID lama, bukan tujuan N4 baru yang dihitung dua kali.',
 watchOut:'Jangan menambah ことがある setelah bentuk ます. Waktu khusus seperti 昨日の三時 biasanya cocok dengan laporan kejadian ～ました; konteks pengalaman menggunakan rentang hidup atau kesempatan sebelumnya.',
 commonMistake:'食べますことがあります bukan bentuk pengalaman yang ditargetkan. Gunakan 食べたことがあります. V辞書形＋ことがある memiliki penggunaan lain, yaitu kadang-kadang terjadi.',
 example:'日本料理を食べたことがあります。',exampleReading:'にほんりょうり を たべた こと が あります。',exampleMeaning:'Saya pernah makan masakan Jepang.',
 extraExample:'私はまだ一度も富士山に登ったことがありません。',extraExampleReading:'わたし は まだ いちども ふじさん に のぼった こと が ありません。',extraExampleMeaning:'Saya belum pernah sekalipun mendaki Gunung Fuji.',
 contrast:'Vました menyatakan kejadian tertentu; Vたことがあります menekankan pengalaman.',coverageRole:'prerequisite-review',
 quiz:{prompt:'これは初めて食べる料理です。まだ一度も食べたことが〔　〕。',reading:'これ は はじめて たべる りょうり です。まだ いちども たべた こと が〔　〕。',context:'Ini pertama kalinya saya akan makan hidangan ini. Pilih bentuk yang menyatakan belum pernah sekalipun memakannya.',choices:['ありません','あります','ありました','います'],answer:0,explanation:'まだ一度も dan pengalaman yang belum ada memakai ～たことがありません. あります／ありました justru menyatakan pengalaman itu ada; います bukan kopula yang dipakai dalam konstruksi pengalaman ini.'}
},
{
 id:'n4-g-02',title:'～てみる',meaning:'mencoba melakukan ～',pattern:'Vて + みる／みます',
 explanation:'～てみる menyatakan mencoba suatu tindakan untuk mengetahui hasil atau rasanya. Pembicara melakukan tindakan itu sebagai percobaan; hasilnya belum diketahui.',
 usage:'Menyampaikan percobaan kecil, misalnya mencoba makanan, metode belajar atau cara memakai sesuatu. Perubahan waktu terjadi pada みる: みます、みました、みたいです.',
 whenToUse:'Ubah verba menjadi bentuk て: 食べる→食べてみる、使う→使ってみる、勉強する→勉強してみる. Gunakan saat tujuan utamanya mencoba dan mengetahui hasilnya.',
 watchOut:'みる di sini adalah verba bantu dan biasanya ditulis kana. Ini berbeda dari 見る yang berarti melihat. Bentuk ～てみた tidak menjamin percobaannya berhasil.',
 commonMistake:'使うみます atau 使って見る dengan maksud hanya melihat sebuah barang mencampur dua penggunaan. Untuk mencoba memakai, gunakan 使ってみます; untuk melihat barangnya, gunakan それを見ます.',
 example:'この料理を少し食べてみます。',exampleReading:'この りょうり を すこし たべて みます。',exampleMeaning:'Saya akan mencoba makan sedikit hidangan ini.',
 extraExample:'新しい方法で勉強してみました。',extraExampleReading:'あたらしい ほうほう で べんきょうして みました。',extraExampleMeaning:'Saya mencoba belajar dengan cara baru.',
 contrast:'～てみる menekankan percobaan. ～ておく menekankan persiapan atau keadaan yang sengaja dipertahankan; ～たい hanya menyatakan keinginan.',
 quiz:{prompt:'味が分からないので、私が少し食べて〔　〕。',reading:'あじ が わからない ので、わたし が すこし たべて〔　〕。',context:'Saya belum tahu rasanya dan ingin mencoba memakannya sendiri untuk mengetahui rasanya. Pilih pola percobaan.',choices:['みます','あります','くれます','もらいます'],answer:0,explanation:'食べてみます menyatakan mencoba makan untuk mengetahui rasa. てある berfokus pada hasil persiapan; てくれる／てもらう melibatkan manfaat tindakan orang lain, sedangkan pelaku percobaan pada konteks ini adalah saya sendiri.'}
},
{
 id:'n4-g-03',title:'～ておく',meaning:'melakukan lebih dulu sebagai persiapan / membiarkan hasil tetap siap',pattern:'Vて + おく／おきます',
 explanation:'～ておく menghubungkan tindakan yang sengaja dilakukan dengan keadaan atau kebutuhan sesudahnya. Selain persiapan lebih awal, pola ini dapat menyatakan membiarkan atau mengembalikan sesuatu ke keadaan yang diinginkan.',
 usage:'Merencanakan pekerjaan persiapan dan menjaga hasilnya siap dipakai. Fokusnya tindakan yang dilakukan, bukan sekadar melaporkan bahwa suatu hasil sekarang terlihat.',
 whenToUse:'Gunakan misalnya 明日のために～ておきます. Bentuk て berasal dari verba utama: 印刷する→印刷しておく、戻す→戻しておく. Dalam percakapan ～とく／～どく dapat terdengar sebagai bentuk singkat.',
 watchOut:'Maknanya tidak selalu jauh sebelum waktunya; tujuan persiapan atau pemeliharaan keadaanlah yang penting. ～ておいた dapat menyatakan persiapan sudah dilakukan.',
 commonMistake:'印刷したおきます tidak tepat. Sambung dengan bentuk て: 印刷しておきます. Jangan memilih ～ておく hanya karena kalimat menyebut hari ini tanpa maksud persiapan.',
 example:'明日の会議の資料を印刷しておきます。',exampleReading:'あした の かいぎ の しりょう を いんさつして おきます。',exampleMeaning:'Saya akan mencetak bahan rapat besok lebih dulu sebagai persiapan.',
 extraExample:'使った後、はさみを元の場所に戻しておきます。',extraExampleReading:'つかった あと、はさみ を もと の ばしょ に もどして おきます。',extraExampleMeaning:'Setelah dipakai, saya akan mengembalikan gunting ke tempat semula agar tetap siap di sana.',
 contrast:'～ておく menyoroti tindakan persiapan. ～てある menyoroti keadaan hasil tindakan sengaja yang sudah tersedia; ～てみる adalah mencoba.',
 quiz:{prompt:'明日の会議で使うので、今日、資料を印刷して〔　〕。',reading:'あした の かいぎ で つかう ので、きょう、しりょう を いんさつして〔　〕。',context:'Saya akan mencetak bahan hari ini lebih dulu untuk mempersiapkan rapat besok. Pilih pola tindakan persiapan yang akan dilakukan.',choices:['おきます','あります','くれます','います'],answer:0,explanation:'印刷しておきます menyatakan akan melakukan persiapan. してあります menyatakan hasil yang sudah tersedia, しています menyatakan proses/kegiatan, dan してくれます memerlukan pelaku pemberi bantuan dari sudut pandang penerima.'}
},
{
 id:'n4-g-04',title:'～てしまう',meaning:'menyelesaikan seluruhnya / telanjur atau tanpa sengaja ～',pattern:'Vて + しまう／しまいました',
 explanation:'～てしまう memiliki penggunaan penyelesaian menyeluruh dan penggunaan hasil yang tidak diharapkan atau disesali. Konteks menentukan apakah pembicara menekankan selesai seluruhnya atau rasa menyesal.',
 usage:'Menyampaikan tugas yang sudah dituntaskan atau kejadian seperti lupa, kehilangan, dan kesalahan. Makna penyesalan tidak muncul secara otomatis pada semua kalimat.',
 whenToUse:'Sambungkan bentuk て／で: 消す→消してしまう、飲む→飲んでしまう. Untuk kejadian lampau gunakan ～てしまいました. Dalam percakapan ～ちゃう／～じゃう dan ～ちゃった／～じゃった juga umum.',
 watchOut:'宿題をやってしまいました dapat berarti tugas sudah dituntaskan tanpa penyesalan. Sebaliknya 困っています atau うっかり membantu menunjukkan akibat yang tidak diinginkan.',
 commonMistake:'Menerjemahkan semua ～てしまう sebagai tidak sengaja akan keliru pada konteks penyelesaian. 食べるしまいました juga salah bentuk; gunakan 食べてしまいました.',
 example:'大切な写真を消してしまいました。',exampleReading:'たいせつな しゃしん を けして しまいました。',exampleMeaning:'Saya telanjur menghapus foto yang penting, dan menyesalinya.',
 extraExample:'宿題は全部やってしまいました。',extraExampleReading:'しゅくだい は ぜんぶ やって しまいました。',extraExampleMeaning:'Pekerjaan rumah sudah saya selesaikan seluruhnya.',
 contrast:'～ました melaporkan kejadian lampau secara umum. ～てしまいました menambahkan nuansa tuntas atau hasil yang tidak diharapkan, bergantung pada konteks.',
 quiz:{prompt:'大事な鍵を忘れて〔　〕。今、家に入れなくて困っています。',reading:'だいじな かぎ を わすれて〔　〕。いま、いえ に はいれなくて こまって います。',context:'Saya menyesal telanjur melupakan kunci dan sekarang kesulitan masuk rumah. Pilih pola hasil yang tidak diinginkan.',choices:['しまいました','おきました','くれました','あります'],answer:0,explanation:'忘れてしまいました sesuai dengan kesalahan yang disesali dan akibat 困っています. ておく menyatakan tindakan persiapan sengaja; てくれる menyatakan manfaat tindakan orang lain; てある berfokus pada keadaan hasil yang disengaja.'}
},
{
 id:'n4-g-05',title:'～てあげる',meaning:'melakukan sesuatu untuk orang lain',pattern:'Aは Bに Vてあげる（A pelaku, B penerima manfaat）',
 explanation:'～てあげる melihat suatu tindakan dari pihak yang memberi bantuan atau manfaat kepada orang lain. Verba bentuk て menyatakan tindakannya; あげる menunjukkan arah manfaat.',
 usage:'Menceritakan bantuan kepada orang lain. Bentuk ini membahas tindakan, berbeda dari あげる yang menyerahkan sebuah benda.',
 whenToUse:'Gunakan bila pelaku dan penerima manfaat jelas: 私は弟に教えてあげました. Subjek melakukan verba utama; に menandai pihak yang menerima manfaat pada pola dasar ini.',
 watchOut:'Mengatakan ～てあげます langsung kepada atasan atau penerima bantuan dapat terdengar menonjolkan jasa atau merendahkan, bergantung hubungan dan situasinya. Tawaran seperti お手伝いしましょうか sering lebih sesuai. Bentuk bahasanya tidak membuktikan bahwa bantuan telah diminta atau disetujui.',
 commonMistake:'Memakai 私は先生に教えてあげました ketika maksudnya guru yang mengajari saya akan membalik peran. Untuk saya menerima penjelasan guru, gunakan 先生に教えてもらいました.',
 example:'私は弟に日本語を教えてあげました。',exampleReading:'わたし は おとうと に にほんご を おしえて あげました。',exampleMeaning:'Saya mengajari adik laki-laki saya bahasa Jepang sebagai bantuan untuknya.',
 extraExample:'友達の重い荷物を持ってあげました。',extraExampleReading:'ともだち の おもい にもつ を もって あげました。',extraExampleMeaning:'Saya membawakan barang bawaan teman yang berat untuk membantunya.',
 contrast:'～てあげる: saya/pihak pelaku membantu orang lain. ～てくれる: orang lain membantu saya/pihak saya. ～てもらう: saya/penerima mendapatkan tindakan orang lain.',
 quiz:{prompt:'弟はこの漢字が読めません。私は弟に読み方を教えて〔　〕。',reading:'おとうと は この かんじ が よめません。わたし は おとうと に よみかた を おしえて〔　〕。',context:'Saya yang memberi tahu adik cara membacanya; arah bantuan dari saya kepada adik. Pilih pola dari sudut pemberi bantuan.',choices:['あげました','くれました','もらいました','あります'],answer:0,explanation:'私は弟に教えてあげました menempatkan saya sebagai pelaku yang membantu adik. くれる melihat manfaat menuju saya/pihak saya; もらう menjadikan saya penerima tindakan orang lain, bukan pengajar dalam konteks ini.'}
},
{
 id:'n4-g-06',title:'～てくれる',meaning:'orang lain melakukan sesuatu untuk saya/pihak saya',pattern:'Aが（私に）Vてくれる／くれました',
 explanation:'～てくれる menyajikan tindakan orang lain sebagai bantuan atau manfaat bagi pembicara atau pihak yang dekat dengannya. Pelaku tindakan tetap menjadi subjek.',
 usage:'Menceritakan bantuan yang diterima dengan menyoroti orang yang melakukannya. Penerima seperti 私に sering dihilangkan bila sudah jelas dari konteks.',
 whenToUse:'Gunakan bentuk て dari verba tindakan: 教えてくれる、持ってくれる、直してくれる. Pada 友達が教えてくれました, teman adalah orang yang mengajari.',
 watchOut:'くれる tidak otomatis berarti saya meminta bantuan itu. Sudut pandang penerima manfaat penting; hindari menukar pelaku dan penerima hanya berdasarkan terjemahan “memberi”.',
 commonMistake:'Memakai 私が友達に教えてくれました untuk mengatakan saya mengajari teman tidak sesuai dengan sudut pandang dasar ini. Untuk saya memberi bantuan kepada teman gunakan 教えてあげました atau laporkan tindakannya dengan 教えました.',
 example:'友達が私に道を教えてくれました。',exampleReading:'ともだち が わたし に みち を おしえて くれました。',exampleMeaning:'Teman memberi tahu jalan kepada saya untuk membantu saya.',
 extraExample:'兄が壊れた椅子を直してくれました。',extraExampleReading:'あに が こわれた いす を なおして くれました。',extraExampleMeaning:'Kakak laki-laki memperbaiki kursi yang rusak untuk saya.',
 contrast:'友達が教えてくれました menyoroti teman sebagai pelaku. 私は友達に教えてもらいました menggambarkan bantuan yang sama dari posisi saya sebagai penerima.',
 quiz:{prompt:'私は道に迷いました。親切な人が私に道を教えて〔　〕。',reading:'わたし は みち に まよいました。しんせつな ひと が わたし に みち を おしえて〔　〕。',context:'Saya menerima bantuan. Orang yang baik hati menjadi subjek dan memberi tahu jalan kepada saya. Pilih sudut pandang manfaat menuju saya.',choices:['くれました','あげました','もらいました','あります'],answer:0,explanation:'親切な人が私に教えてくれました sesuai dengan orang lain sebagai pelaku dan saya penerima manfaat. てもらう memerlukan susunan penerima sebagai subjek dan pelaku dengan に; てあげる tidak memakai sudut penerima saya yang diminta pada konteks ini.'}
},
{
 id:'n4-g-07',title:'～てもらう',meaning:'mendapatkan bantuan/tindakan yang dilakukan orang lain',pattern:'Aは Bに Vてもらう（A penerima, B pelaku）',
 explanation:'～てもらう menempatkan penerima manfaat sebagai subjek. Tindakan dilakukan oleh orang yang ditandai に dalam pola dasar ini, bukan oleh penerimanya.',
 usage:'Menceritakan bahwa seseorang membantu, mengajari, memperbaiki atau melakukan sesuatu untuk kita. Konteks dapat mencakup permintaan bantuan, tetapi pola ini tidak selalu berarti menyuruh.',
 whenToUse:'Bandingkan 私は友達に教えてもらいました: saya menerima penjelasan dan teman yang menjelaskan. Verba utama berbentuk て sebelum もらう.',
 watchOut:'に pada pola ini menunjuk pelaku bantuan; ia berbeda perannya dari penerima pada AはBにVてあげる. Jangan menganggap semua kalimat dengan もらう berarti menerima benda.',
 commonMistake:'Menerjemahkan 私は先生に作文を直してもらいました sebagai saya memperbaiki karangan guru akan membalik peran. Guru yang memperbaiki, saya yang mendapat bantuan.',
 example:'私は友達に漢字の読み方を教えてもらいました。',exampleReading:'わたし は ともだち に かんじ の よみかた を おしえて もらいました。',exampleMeaning:'Saya mendapat bantuan teman untuk mengetahui cara membaca Kanji.',
 extraExample:'私は店の人に荷物を運んでもらいました。',extraExampleReading:'わたし は みせ の ひと に にもつ を はこんで もらいました。',extraExampleMeaning:'Saya mendapat bantuan pegawai toko untuk membawakan barang bawaan.',
 contrast:'本をもらう berarti menerima buku. 本を読んでもらう berarti mendapat bantuan orang lain membacakan buku. ～てくれる melihat kejadian dari subjek pelaku, sedangkan ～てもらう dari penerima.',
 quiz:{prompt:'私は先生に作文を直して〔　〕。',reading:'わたし は せんせい に さくぶん を なおして〔　〕。',context:'Guru memperbaiki karangan saya. Saya adalah penerima bantuan, dan 先生に adalah pelakunya. Pilih pola penerima tindakan.',choices:['もらいました','くれました','あげました','あります'],answer:0,explanation:'私は先生に直してもらいました menjadikan saya penerima dan guru pelaku. Jika memakai くれる, susunannya menjadi 先生が私の作文を直してくれました. あげる akan mengubah saya menjadi pihak yang melakukan bantuan.'}
},
{
 id:'n4-g-08',title:'～ながら',meaning:'melakukan A sambil melakukan B',pattern:'Vます tanpa ます + ながら、B（pelaku sama）',
 explanation:'～ながら menghubungkan dua kegiatan yang berlangsung bersamaan dengan pelaku yang sama. Kegiatan utama umumnya berada pada klausa B di akhir kalimat.',
 usage:'Menceritakan kegiatan pendamping selama kegiatan utama, seperti mendengarkan musik sambil membersihkan atau menunggu sambil membaca.',
 whenToUse:'Ambil pangkal ます: 聞きます→聞きながら、待ちます→待ちながら、します→しながら. Gunakan bila satu orang benar-benar melakukan kedua kegiatan dalam waktu yang bertumpang tindih.',
 watchOut:'Untuk penggunaan bersamaan pada materi ini, pelaku kedua kegiatan sama. 先生が話しながら、私はメモを取ります tidak cocok bila guru berbicara dan saya menulis; 私は先生の話を聞きながらメモを取ります memiliki pelaku saya untuk kedua verba.',
 commonMistake:'食べてながら keliru karena memakai bentuk て. Gunakan 食べながら. Jangan menggunakannya untuk dua tindakan yang baru dilakukan sesudah tindakan pertama selesai.',
 example:'音楽を聞きながら、部屋を掃除します。',exampleReading:'おんがく を ききながら、へや を そうじします。',exampleMeaning:'Saya membersihkan kamar sambil mendengarkan musik.',
 extraExample:'電車を待ちながら、本を読みます。',extraExampleReading:'でんしゃ を まちながら、ほん を よみます。',extraExampleMeaning:'Saya membaca buku sambil menunggu kereta.',
 contrast:'～ながら menyatakan kegiatan bersamaan oleh pelaku sama. ～てから menegaskan kegiatan kedua dilakukan setelah yang pertama selesai. Makna kontras ながら yang lain tidak dibahas dalam unit dasar ini.',
 quiz:{prompt:'私は音楽を〔　〕、部屋を掃除しています。',reading:'わたし は おんがく を〔　〕、へや を そうじして います。',context:'Saya mendengarkan musik dan membersihkan kamar pada saat yang sama. Pilih bentuk bersamaan dengan pelaku yang sama.',choices:['ききながら','きいてから','きいたので','ききたいので'],answer:0,explanation:'聞きながら menyatakan mendengarkan sambil membersihkan. 聞いてから adalah urutan setelah selesai mendengarkan. Dua pilihan dengan ので memberi alasan, bukan menyatakan dua kegiatan bersamaan yang diminta.'}
},
{
 id:'n4-g-09',title:'～てある',meaning:'keadaan hasil tindakan sengaja sudah tersedia',pattern:'Nが + Vてある（verba transitif; fokus pada hasil）',
 explanation:'～てある menggambarkan keadaan yang merupakan hasil tindakan sengaja seseorang dan masih berlaku. Dalam pola dasar NがVてある, perhatian berada pada benda/hasil yang sudah disiapkan, bukan pada siapa pelakunya.',
 usage:'Menjelaskan bahwa barang telah ditata, ditempatkan atau dibuka dan keadaan hasilnya tersedia saat dibicarakan. Ini membantu membedakan persiapan yang sudah ada dari tindakan yang baru akan dilakukan.',
 whenToUse:'Gunakan verba transitif seperti 置く→置いてある、並べる→並べてある、開ける→開けてある. Kata benda yang hasil keadaannya dijelaskan memakai が pada pola yang dilatih di sini.',
 watchOut:'Bedakan 開ける yang transitif dari 開く yang intransitif. 窓が開いています menyebut keadaan jendela terbuka secara umum; 窓が開けてあります menyoroti hasil tindakan sengaja. Bentuk てある lain dengan を juga ada, sehingga が di sini adalah pola dasar yang dipilih, bukan larangan universal terhadap を.',
 commonMistake:'窓が開いてあります mencampur verba intransitif dengan pola hasil persiapan ini. Pilih 窓が開いています untuk keadaan umum atau 窓が開けてあります untuk hasil tindakan sengaja.',
 example:'窓が開けてあります。',exampleReading:'まど が あけて あります。',exampleMeaning:'Jendela sudah dibuka dan dibiarkan dalam keadaan terbuka dengan sengaja.',
 extraExample:'机の上に会議の資料が並べてあります。',extraExampleReading:'つくえ の うえ に かいぎ の しりょう が ならべて あります。',extraExampleMeaning:'Bahan rapat sudah ditata di atas meja dan tersedia di sana.',
 contrast:'～ておく berfokus pada melakukan persiapan. ～てある berfokus pada hasil persiapan yang sudah ada. Verba intransitif＋ている menjelaskan keadaan tanpa penekanan pada tindakan persiapan sengaja.',
 quiz:{prompt:'会議の準備は終わっています。机に資料が並べて〔　〕。',reading:'かいぎ の じゅんび は おわって います。つくえ に しりょう が ならべて〔　〕。',context:'Persiapan rapat sudah selesai. Bahan rapat sudah ditata dan sekarang tersedia di meja. Pilih keadaan hasil persiapan.',choices:['あります','います','みます','おきます'],answer:0,explanation:'資料が並べてあります menjelaskan hasil tindakan menata yang sudah tersedia. 並べる adalah verba transitif. ～ておく menyoroti tindakan persiapan, sedangkan ～てみる berarti mencoba; keduanya bukan pernyataan keadaan hasil yang diminta.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
