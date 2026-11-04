// Stage 10A-7: original N4 time spans, deadlines, past aspect, reasons and concession.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-48',title:'～たあとで／Nのあとで',meaning:'setelah melakukan ～ / setelah kegiatan ～',pattern:'Vた + あとで／Nの + あとで',
 explanation:'～たあとで menempatkan kegiatan kedua setelah kegiatan pertama selesai. Setelah kata benda kegiatan gunakan Nのあとで. Pola ini mengatur urutan tanpa harus menyatakan bahwa kegiatan kedua langsung dimulai.',
 usage:'Membicarakan kegiatan sesudah tugas, pelajaran atau pekerjaan lain. Urutan dapat berupa rencana mendatang maupun cerita lampau.',
 whenToUse:'Gunakan 宿題をしたあとで untuk sesudah mengerjakan tugas, atau 授業のあとで untuk sesudah pelajaran. Waktu seluruh kalimat ditentukan juga oleh bagian akhir: 見ます untuk rencana, 見ました untuk kejadian lampau.',
 watchOut:'た sebelum あとで tidak otomatis berarti seluruh kalimat lampau. 宿題をしたあとで映画を見ます masih dapat menjadi rencana. “Setelah” juga tidak selalu berarti tanpa jeda sama sekali.',
 commonMistake:'宿題をするあとで dan 授業なあとで keliru pada pola ini. Gunakan 宿題をしたあとで serta 授業のあとで. Untuk “sebelum” verbanya berbeda: V辞書形＋前に.',
 example:'宿題をしたあとで、映画を見ます。',exampleReading:'しゅくだい を した あと で、えいが を みます。',exampleMeaning:'Setelah mengerjakan tugas, saya akan menonton film.',
 extraExample:'授業のあとで、先生に質問します。',extraExampleReading:'じゅぎょう の あと で、せんせい に しつもんします。',extraExampleMeaning:'Setelah pelajaran, saya akan bertanya kepada guru.',
 contrast:'～たあとで menyatakan urutan sesudah kegiatan. ～てから juga menandai setelah dan dapat menonjolkan penyelesaian A sebagai langkah sebelum B. ～前に adalah sebelum dan memakai bentuk kamus verba, bukan bentuk た.',
 quiz:{prompt:'授業〔　〕あとで、先生に質問します。',reading:'じゅぎょう〔　〕あと で、せんせい に しつもんします。',context:'Saya akan bertanya setelah pelajaran. Lengkapi sambungan kata benda 授業 sebelum あとで.',choices:['の','を','に','が'],answer:0,explanation:'Kata benda kegiatan memakai Nのあとで: 授業のあとで. を／に／が tidak menggantikan の pada sambungan ini. Jika memakai klausa verba, bentuknya Vたあとで.'}
},
{
 id:'n4-g-49',title:'～までに',meaning:'paling lambat / sebelum batas waktu ～ tercapai',pattern:'時刻・期限 + までに／V辞書形 + までに',
 explanation:'～までに menetapkan batas waktu suatu tindakan harus sudah terjadi atau selesai. Tindakan dapat dilakukan lebih awal; fokusnya bukan terus melakukan kegiatan sepanjang rentang sampai batas itu.',
 usage:'Menentukan batas menyerahkan laporan, tiba di suatu tempat atau menyelesaikan persiapan. Batasnya perlu dibaca bersama informasi jam/hari dan konteks instruksinya.',
 whenToUse:'Gunakan 金曜日までに出す atau 九時までに着く. Dengan klausa verba, 出かけるまでに準備します menetapkan saat berangkat sebagai batas menyelesaikan persiapan.',
 watchOut:'まで dan までに tidak mempunyai fungsi yang sama. 九時まで勉強します berarti belajar berlangsung sampai pukul sembilan; 九時までに着きます berarti tiba paling lambat pukul sembilan. Dalam urusan jadwal nyata, periksa juga tanggal/jam lengkap yang diberikan.',
 commonMistake:'九時までにずっと勉強します mencampur penanda batas penyelesaian dengan maksud terus belajar hingga sembilan. Untuk durasi yang berlanjut gunakan まで; untuk batas tugas selesai gunakan までに.',
 example:'金曜日までに、レポートを出してください。',exampleReading:'きんようび までに、れぽーと を だして ください。',exampleMeaning:'Tolong serahkan laporan paling lambat hari Jumat.',
 extraExample:'九時までに駅に着きます。',extraExampleReading:'くじ までに えき に つきます。',extraExampleMeaning:'Saya akan tiba di stasiun paling lambat pukul sembilan.',
 contrast:'までに memberi batas tindakan sudah tercapai. まで memberi ujung kegiatan/keadaan yang berlangsung. ごろ memberi perkiraan waktu dan tidak dengan sendirinya menentukan tenggat.',
 quiz:{prompt:'「九時までに駅に着きます」の意味はどれですか。',reading:'「くじ までに えき に つきます」の いみ は どれ です か。',context:'Perhatikan apakah 九時 menandai batas terjadinya kedatangan atau lama berada di stasiun.',choices:['Saya akan tiba paling lambat pukul sembilan.','Saya akan terus berada di stasiun sampai pukul sembilan.','Saya akan mulai berangkat pada pukul sembilan.','Saya akan tiba sekitar pukul sembilan tanpa batas waktu.'],answer:0,explanation:'着く adalah tiba, dan までに menetapkan batas kapan kedatangan sudah terjadi. Kalimat ini tidak menyatakan terus berada di stasiun, waktu mulai berangkat, atau sekadar perkiraan sekitar sembilan.'}
},
{
 id:'n4-g-50',title:'～間／～間に',meaning:'selama rentang ～ / pada suatu waktu di dalam rentang ～',pattern:'Vている + 間（に）／Nの + 間（に）／いA + 間（に）／なAな + 間（に）',
 explanation:'間 menyoroti rentang ketika keadaan/kegiatan A berlangsung, sering dengan kegiatan B yang juga berlanjut selama rentang itu. 間に menempatkan kejadian atau pencapaian B di dalam rentang A, tanpa menyatakan B terus berlangsung sepanjang seluruh rentang.',
 usage:'Menceritakan dua kegiatan dengan pelaku yang sama atau berbeda, atau kejadian yang masuk di sela kegiatan lain. Unit ini menargetkan rentang waktu dasar, terutama kegiatan Vている.',
 whenToUse:'Gunakan 料理をしている間 untuk selama memasak, 買い物をしている間に untuk kejadian di dalam waktu berbelanja, serta 夏休みの間に setelah N. Pilih 間／間に dari hubungan durasi dan jenis kejadian pada bagian kedua.',
 watchOut:'間に tidak berarti selalu tepat satu kejadian: beberapa kejadian juga dapat terjadi di dalam rentang yang sama. Jangan menukar dengan ながら lalu mengabaikan pelaku; ながら pada penggunaan bersamaan menuntut pelaku sama, sedangkan 間 dapat menghubungkan pelaku berbeda.',
 commonMistake:'買い物しているながら、友達が来ました mencampur pola dan pelaku. Untuk teman datang selama saya berbelanja, gunakan 私が買い物をしている間に、友達が来ました.',
 example:'私が料理をしている間、弟は本を読んでいました。',exampleReading:'わたし が りょうり を して いる あいだ、おとうと は ほん を よんで いました。',exampleMeaning:'Selama saya memasak, adik laki-laki saya sedang membaca buku.',
 extraExample:'私が買い物をしている間に、友達が来ました。',extraExampleReading:'わたし が かいもの を して いる あいだに、ともだち が きました。',extraExampleMeaning:'Pada suatu waktu selama saya berbelanja, teman datang.',
 contrast:'間 menyoroti rentang kegiatan/keadaan; 間に menempatkan kejadian di dalamnya. ながら menggabungkan kegiatan bersamaan oleh pelaku sama. ～ているところ memusatkan perhatian pada tahap sedang melakukan sesuatu, bukan seluruh rentang yang menampung kejadian lain.',
 quiz:{prompt:'「私が買い物をしている間に、友達が来ました」の意味はどれですか。',reading:'「わたし が かいもの を して いる あいだに、ともだち が きました」の いみ は どれ です か。',context:'Tentukan posisi kejadian kedatangan teman terhadap rentang waktu saya berbelanja.',choices:['Teman datang pada suatu waktu selama saya berbelanja.','Kedatangan teman berlangsung terus sepanjang seluruh waktu saya berbelanja.','Saya dan teman selalu melakukan kegiatan yang sama.','Teman datang sebelum saya mulai berbelanja.'],answer:0,explanation:'間に menempatkan kedatangan di dalam rentang berbelanja. Kalimat tidak menyatakan proses datang terus berlangsung sepanjang rentang, tidak menyamakan kegiatan kedua orang, dan tidak menempatkan kedatangan sebelum berbelanja dimulai.'}
},
{
 id:'n4-g-51',title:'～ごろ／Nのころ',meaning:'sekitar waktu ～ / pada masa ～',pattern:'時刻 + ごろ／Nの + ころ',
 explanation:'ごろ setelah jam atau tanggal memberi perkiraan titik waktu. ころ dalam Nのころ dapat menunjukkan suatu masa, misalnya ketika masih anak-anak. Fokus dasarnya adalah waktu/masa acuan, bukan panjang durasi.',
 usage:'Membuat janji pada waktu perkiraan atau menceritakan suatu masa dalam kehidupan. Tidak semua penggunaan ころ berarti hanya selisih beberapa menit; konteks masa juga dapat lebih luas.',
 whenToUse:'Gunakan 三時ごろ、六月ごろ untuk perkiraan waktu. Gunakan 子どものころ atau 学生のころ untuk masa tertentu. に setelah ごろ dapat muncul sesuai kalimat; jangan menganggapnya selalu dilarang.',
 watchOut:'二時間ぐらい menyatakan perkiraan durasi dua jam; 三時ごろ menyatakan sekitar pukul tiga. Dalam percakapan くらい／ぐらい juga dapat muncul pada titik waktu, jadi pembedaan ini adalah fokus penggunaan dasar, bukan larangan mutlak.',
 commonMistake:'二時間ごろ dengan maksud durasi sekitar dua jam mencampur fungsi yang dilatih. Untuk durasi gunakan 二時間ぐらい. Setelah N yang menyebut masa, gunakan misalnya 子どものころ, bukan 子どもなころ.',
 example:'明日は三時ごろ、図書館で会いましょう。',exampleReading:'あした は さんじごろ、としょかん で あいましょう。',exampleMeaning:'Besok mari bertemu di perpustakaan sekitar pukul tiga.',
 extraExample:'子どものころ、よく川で遊びました。',extraExampleReading:'こども の ころ、よく かわ で あそびました。',extraExampleMeaning:'Ketika masih anak-anak, saya sering bermain di sungai.',
 contrast:'ごろ berfokus pada perkiraan titik waktu/masa. ぐらい sering memberi perkiraan jumlah/durasi. までに menetapkan batas waktu; ごとに menyatakan setiap unit/interval, bukan sekitar jam tertentu.',
 quiz:{prompt:'明日は三時〔　〕、図書館で会いましょう。',reading:'あした は さんじ〔　〕、としょかん で あいましょう。',context:'Waktu janji diperkirakan sekitar pukul tiga, dengan kelonggaran beberapa menit. Pilih penanda perkiraan titik waktu.',choices:['ごろ','ごとに','までに','のあとで'],answer:0,explanation:'三時ごろ menyatakan sekitar pukul tiga. ごとに menyatakan setiap unit/interval, までに menetapkan batas waktu, dan のあとで menempatkan kegiatan sesudah suatu waktu/kegiatan. Ketiganya tidak menyatakan perkiraan titik waktu yang diminta.'}
},
{
 id:'n4-g-52',title:'～ごとに',meaning:'setiap ～ / untuk masing-masing unit ～',pattern:'N・jumlah dengan satuan + ごとに／V辞書形 + ごとに',
 explanation:'～ごとに membagi waktu, kelompok atau kejadian menjadi unit dan menyatakan sesuatu berlaku setiap unit tersebut. Penggunaan dapat berupa pengulangan waktu maupun pembagian menurut kelompok.',
 usage:'Menjelaskan jeda kegiatan berulang atau membagikan sesuatu per kelompok. Satuan harus jelas agar pembaca memahami frekuensi atau pembagiannya.',
 whenToUse:'Gunakan 一時間ごとに untuk setiap satu jam, グループごとに untuk setiap kelompok, atau 会うごとに untuk setiap kali bertemu. Kata yang mendahului ごとに menentukan unitnya.',
 watchOut:'ごとに dan おきに tidak selalu dapat ditukar karena おきに dapat menyoroti sela antarunit. Terutama untuk hitungan hari, buat urutan jadwal nyata sebelum menafsirkannya. Unit ini melatih ごとに dan tidak mengklaim semua penggunaan おきに sudah diajarkan.',
 commonMistake:'一時間のごとに menambah の yang tidak diperlukan pada pola ini. Gunakan 一時間ごとに. Jangan memakai 時刻＋ごとに untuk maksud sekitar suatu jam; 三時ごろ mempunyai fungsi perkiraan titik waktu.',
 example:'一時間ごとに、短い休憩を取ります。',exampleReading:'いちじかん ごとに、みじかい きゅうけい を とります。',exampleMeaning:'Setiap satu jam, saya mengambil istirahat singkat.',
 extraExample:'グループごとに一枚の紙を配ります。',extraExampleReading:'ぐるーぷ ごとに いちまい の かみ を くばります。',extraExampleMeaning:'Saya membagikan satu lembar kertas untuk setiap kelompok.',
 contrast:'ごとに menunjukkan setiap unit, seperti setiap jam atau kelompok. ごろ memberi perkiraan titik waktu. 一日に三回 memakai に untuk jumlah kejadian dalam satu hari; 一時間ごとに menentukan jarak pengulangannya.',
 quiz:{prompt:'一時間〔　〕、短い休憩を取ります。',reading:'いちじかん〔　〕、みじかい きゅうけい を とります。',context:'Saya mengulang istirahat singkat setiap selang satu jam. Pilih penanda pengulangan per unit waktu.',choices:['ごとに','ごろ','しか','なのに'],answer:0,explanation:'一時間ごとに menyatakan setiap satu jam. ごろ berfokus pada titik waktu perkiraan, しか memerlukan pola pembatasan dengan negatif, dan なのに adalah konsesi; ketiganya tidak menyatakan interval berulang yang diminta.'}
},
{
 id:'n4-g-53',title:'～ていた（過去の進行・状態）',meaning:'sedang melakukan saat itu / berada dalam keadaan ～ pada waktu lampau',pattern:'Vて + いた／いました',
 explanation:'～ていた menempatkan kegiatan yang sedang berlangsung atau keadaan yang berlanjut pada waktu acuan lampau. Maknanya bergantung jenis verba, sama seperti dasar ～ている, tetapi sekarang kegiatan dibandingkan dengan waktu atau peristiwa lain di masa lalu.',
 usage:'Menjelaskan apa yang sedang dilakukan pada jam tertentu kemarin atau keadaan yang sudah berlaku ketika seseorang tiba. Ini membantu membedakan proses saat itu dari kejadian yang baru selesai pada waktu tersebut.',
 whenToUse:'Gunakan 読んでいました untuk sedang membaca pada waktu lampau, dan 閉まっていました untuk keadaan sudah tertutup pada saat itu. Tentukan acuan seperti 昨日の八時 atau 駅に着いたとき.',
 watchOut:'～ていた tidak selalu berarti kegiatan berlangsung tanpa henti. Sesuai verba/konteks, pola ini juga dapat menyatakan kebiasaan lampau atau keadaan hasil. Jangan menerjemahkan semua ～ていました sebagai baru selesai.',
 commonMistake:'昨日の八時、宿題をしました hanya melaporkan kejadian dan tidak dengan sendirinya menegaskan sedang mengerjakan pada jam itu. Jika fokusnya proses yang masih berjalan ketika jam delapan, gunakan 宿題をしていました.',
 example:'昨日の八時は、家で本を読んでいました。',exampleReading:'きのう の はちじ は、いえ で ほん を よんで いました。',exampleMeaning:'Kemarin pukul delapan, saya sedang membaca buku di rumah.',
 extraExample:'駅に着いたとき、店はもう閉まっていました。',extraExampleReading:'えき に ついた とき、みせ は もう しまって いました。',extraExampleMeaning:'Ketika saya tiba di stasiun, toko sudah dalam keadaan tutup.',
 contrast:'～ました melaporkan kejadian lampau. ～ていました menyoroti proses/keadaan yang berlaku pada waktu lampau. 閉まりました adalah perubahan menjadi tutup; 閉まっていました adalah keadaan tutup yang sudah berlaku pada waktu acuan.',
 quiz:{prompt:'昨日の八時、私はまだ宿題を〔　〕。終わったのは九時です。',reading:'きのう の はちじ、わたし は まだ しゅくだい を〔　〕。おわった の は くじ です。',context:'Pada pukul delapan kemarin tugas masih sedang dikerjakan. Penyelesaiannya baru terjadi pukul sembilan. Pilih proses yang sedang berlangsung di masa lalu.',choices:['していました','し終わりました','するところです','したばかりです'],answer:0,explanation:'していました sesuai dengan masih mengerjakan saat pukul delapan. し終わりました menyatakan sudah selesai, bertentangan dengan selesai pukul sembilan. するところです／したばかりです tidak menyatakan proses lampau yang diminta.'}
},
{
 id:'n4-g-54',title:'～し、～し（理由・列挙）',meaning:'selain ～, juga ～ / menyebut beberapa alasan atau sifat',pattern:'V・いA普通形 + し／N・なAだ + し（bentuk sopan juga dapat dipakai）',
 explanation:'し menghubungkan alasan atau ciri yang ditambahkan satu sama lain. Daftar tersebut sering tidak dimaksudkan sebagai seluruh alasan yang ada; pembicara dapat menyiratkan masih ada pertimbangan lain.',
 usage:'Menjelaskan pilihan dengan beberapa alasan, atau menyebut beberapa sifat yang sejalan. Alasan terakhir dapat memakai から／ので untuk menghubungkannya ke keputusan.',
 whenToUse:'Gunakan 広いし、便利だし、休みだし. Satu し juga dapat digunakan jika ada alasan lain yang tersirat; tidak wajib selalu muncul dua kali. Pilih bentuk biasa/sopan dengan konsisten sesuai kalimat.',
 watchOut:'し tidak menyatakan urutan tindakan seperti ～てから. N／なA positif sekarang memerlukan だ pada bentuk biasa: 静かだし. Jangan menganggap daftar alasan dengan し membuktikan hanya itulah semua alasannya.',
 commonMistake:'便利なし dan 休みのし keliru pada pola bentuk biasa ini. Gunakan 便利だし dan 休みだし. し di sini juga bukan pangkal verba する yang dipakai sebelum bentuk gabungan.',
 example:'この部屋は広いし、駅にも近いので、ここに住みたいです。',exampleReading:'この へや は ひろい し、えき にも ちかい ので、ここ に すみたい です。',exampleMeaning:'Kamar ini luas dan juga dekat stasiun, jadi saya ingin tinggal di sini.',
 extraExample:'今日は休みだし、天気もいいから、散歩に行きましょう。',extraExampleReading:'きょう は やすみ だ し、てんき も いい から、さんぽ に いきましょう。',extraExampleMeaning:'Hari ini libur dan cuacanya juga bagus, jadi mari berjalan-jalan.',
 contrast:'し menambahkan alasan/ciri yang sejalan dan dapat menyiratkan alasan lain. から／ので menyatakan alasan menuju hasil. たり～たり memberi contoh kegiatan; ～てから memberi urutan, bukan daftar alasan.',
 quiz:{prompt:'今日は休み〔　〕、天気もいいので、散歩に行きます。',reading:'きょう は やすみ〔　〕、てんき も いい ので、さんぽ に いきます。',context:'Saya menambahkan dua alasan berjalan-jalan: hari libur dan cuaca bagus. Lengkapi bentuk biasa kata benda 休み sebelum し.',choices:['だし','なし','のし','でし'],answer:0,explanation:'休み adalah N; bentuk biasa positifnya 休みだし. な／の tidak menggantikan だ pada penambahan alasan ini, dan でし bukan sambungan bentuk biasa yang ditargetkan.'}
},
{
 id:'n4-g-55',title:'～のに（逆接）',meaning:'padahal ～ / meskipun sudah ～, hasilnya di luar dugaan',pattern:'V・いA普通形 + のに／N・なAな + のに（sekarang positif）',
 explanation:'のに pada unit ini menghubungkan keadaan yang diketahui dengan hasil yang berlawanan dari harapan biasa pembicara. Kalimat sering mengandung rasa heran atau kecewa, tetapi tidak selalu menjadi keluhan kepada seseorang.',
 usage:'Menceritakan usaha yang tidak diikuti hasil yang diharapkan atau keadaan yang terasa bertentangan. Fokusnya hubungan antarkeadaan, bukan otomatis menyalahkan orang lain.',
 whenToUse:'Gunakan 勉強したのに、安いのに、休みなのに、静かなのに. N／なA positif sekarang memakai な sebelum のに. Bentuk waktu dipilih sesuai keadaan yang benar-benar dibicarakan.',
 watchOut:'Ada penggunaan のに lain yang berkaitan dengan tujuan/pemakaian, misalnya untuk menilai kebutuhan suatu alat. Itu bukan makna konsesi yang ditargetkan di unit ini. Jangan menerjemahkan semua のに dengan satu fungsi tanpa membaca kalimat lengkap.',
 commonMistake:'休みのに dan 静かだのに keliru pada pola sekarang positif ini. Gunakan 休みなのに dan 静かなのに. Jangan mengganti のに dengan ので jika maksudnya justru hasil berlawanan dari harapan.',
 example:'たくさん勉強したのに、試験は難しく感じました。',exampleReading:'たくさん べんきょうした のに、しけん は むずかしく かんじました。',exampleMeaning:'Padahal sudah banyak belajar, ujian tetap terasa sulit.',
 extraExample:'今日は休みなのに、朝早く起きました。',extraExampleReading:'きょう は やすみ なのに、あさ はやく おきました。',extraExampleMeaning:'Padahal hari ini libur, saya bangun pagi sekali.',
 contrast:'のに menyoroti hasil yang bertentangan dengan harapan dari keadaan yang dibicarakan. ので memberi alasan. ても dapat menyatakan hasil tetap berlaku pada keadaan nyata maupun dugaan; のに pada penggunaan dasar ini mengacu pada keadaan yang diperlakukan sebagai fakta dalam konteks.',
 quiz:{prompt:'「約束したのに、友達は来ませんでした」の意味に合うものはどれですか。',reading:'「やくそくした のに、ともだち は きませんでした」の いみ に あう もの は どれ です か。',context:'Perhatikan hubungan janji yang sudah dibuat dengan hasil kedatangan yang tidak sesuai harapan.',choices:['Sudah berjanji, tetapi teman tidak datang.','Teman tidak datang karena belum pernah membuat janji.','Jika janji dibuat nanti, teman harus datang.','Teman ingin membuat janji ketika datang.'],answer:0,explanation:'約束したのに menyatakan janji sudah dibuat, tetapi hasilnya bertentangan: teman tidak datang. Kalimat tidak meniadakan janji sebelumnya, tidak memberi syarat untuk masa depan, dan tidak menyatakan keinginan membuat janji.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
