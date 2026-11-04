// Stage 10A-4: original N4 conditionals, concessions and scenario instructions.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-26',title:'～たら',meaning:'kalau ～ / setelah ～ terjadi',pattern:'Vた + ら／いAかったら／N・なAだったら（negatif: ～なかったら）',
 explanation:'～たら menghubungkan suatu syarat atau tahap yang sudah tercapai dengan kejadian sesudahnya. Syaratnya dapat berupa dugaan “kalau” atau kejadian yang diharapkan terjadi lebih dulu, seperti pulang lalu menelepon.',
 usage:'Menyampaikan rencana, ajakan atau permintaan yang berlaku jika syarat terpenuhi. Pola ini juga dapat menceritakan sesuatu yang ditemukan setelah melakukan tindakan, bergantung pada konteks.',
 whenToUse:'Buat bentuk た lalu tambahkan ら: 帰る→帰ったら、食べる→食べたら、する→したら、来る→来たら（きたら）. いA: 安い→安かったら. N／なA: 休みだったら、暇だったら. Negatif: 行かなかったら.',
 watchOut:'Walaupun bentuknya memakai た, kalimatnya tidak harus lampau: 明日雨が降ったら membicarakan kemungkinan besok. Untuk makna urutan, tindakan setelah たら berlangsung sesudah syarat pertama tercapai.',
 commonMistake:'帰るたら dan 暇なたら keliru pada pola ini. Gunakan 帰ったら dan 暇だったら. Jika menyarankan persiapan sebelum suatu rencana dilakukan, なら sering lebih sesuai daripada urutan ～たら.',
 example:'時間があったら、一緒に図書館へ行きませんか。',exampleReading:'じかん が あったら、いっしょに としょかん へ いきません か。',exampleMeaning:'Kalau ada waktu, mau pergi bersama ke perpustakaan?',
 extraExample:'家に帰ったら、電話してください。',extraExampleReading:'いえ に かえったら、でんわして ください。',extraExampleMeaning:'Setelah tiba kembali di rumah, tolong telepon saya.',
 contrast:'～たら cocok untuk syarat/urutan tertentu dan dapat diikuti permintaan atau ajakan. ～と pada penggunaan hasil otomatis biasanya tidak diikuti permintaan. ～なら mengambil suatu informasi sebagai premis dan dapat memberi saran persiapan sebelum peristiwa itu.',
 quiz:{prompt:'家に帰っ〔　〕、電話してください。',reading:'いえ に かえっ〔　〕、でんわして ください。',context:'Telepon dilakukan sesudah lawan bicara sudah sampai kembali di rumah. Lengkapi syarat dengan bentuk 帰ったら.',choices:['たら','なら','ば','と'],answer:0,explanation:'帰ったら dibentuk dari 帰った＋ら dan menempatkan telepon setelah kepulangan. Potongan 帰っ yang tersedia tidak dapat langsung diikuti なら／ば／と. Untuk bentuk lain, verbanya harus dibentuk ulang dan nuansanya juga perlu diperiksa.'}
},
{
 id:'n4-g-27',title:'～ば',meaning:'jika syarat ～ terpenuhi, maka ～',pattern:'五段: bunyi u → e + ば／一段: buang る + れば／いA: buang い + ければ',
 explanation:'～ば menyoroti syarat yang memungkinkan suatu hasil. Pola ini sering dipakai untuk hubungan logis atau syarat umum, misalnya rajin berlatih sehingga menjadi lebih mahir.',
 usage:'Menyatakan syarat, memberi gambaran hasil yang diharapkan, atau membahas pilihan bergantung suatu keadaan. Maksud kalimat dan jenis syarat tetap menentukan kecocokan pola.',
 whenToUse:'五段: 読む→読めば、書く→書けば、買う→買えば. 一段: 食べる→食べれば. する→すれば、来る（くる）→来れば（くれば）. 安い→安ければ、いい→よければ. Negatif: 行かない→行かなければ. N／なA dapat memakai なら（ば）.',
 watchOut:'Jangan membuat larangan mutlak bahwa semua ～ば tidak boleh diikuti niat atau permintaan. Kecocokannya bergantung pada syarat berupa keadaan atau tindakan, hubungan pelaku, serta konteks. Untuk permintaan setelah tindakan tertentu selesai, ～たら sering lebih mudah digunakan.',
 commonMistake:'安いば dan 読むば keliru. Gunakan 安ければ dan 読めば. 読まれれば bukan perubahan sederhana 読む menjadi syarat; jangan mencampur perubahan ini dengan bentuk pasif atau kemungkinan.',
 example:'毎日練習すれば、もっと上手になります。',exampleReading:'まいにち れんしゅうすれば、もっと じょうず に なります。',exampleMeaning:'Jika berlatih setiap hari, kemampuan akan menjadi lebih baik.',
 extraExample:'この本が安ければ、買います。',extraExampleReading:'この ほん が やすければ、かいます。',extraExampleMeaning:'Jika buku ini murah, saya akan membelinya.',
 contrast:'～ば menyoroti syarat. ～と menyoroti hasil yang dipandang rutin/otomatis; ～たら dapat memberi urutan suatu peristiwa; ～なら menerima suatu premis. Beberapa kalimat dapat memakai lebih dari satu pola dengan perubahan nuansa.',
 quiz:{prompt:'この本が安〔　〕、買います。',reading:'この ほん が やす〔　〕、かいます。',context:'Saya akan membeli jika bukunya murah. Lengkapi perubahan い形容詞 安い ke bentuk syarat ～ば.',choices:['ければ','くれば','いば','くば'],answer:0,explanation:'安い melepas い dan menambahkan ければ sehingga menjadi 安ければ. くれば adalah bentuk syarat 来る, sedangkan 安いば／安くば bukan bentuk syarat standar yang ditargetkan untuk 安い.'}
},
{
 id:'n4-g-28',title:'～なら',meaning:'kalau memang ～ / kalau tentang ～',pattern:'V・いA普通形 + なら／N・なA + なら（tanpa だ）',
 explanation:'～なら menerima informasi atau dugaan sebagai premis lalu menyampaikan saran, pilihan atau tanggapan berdasarkan premis tersebut. Pola ini sering muncul sebagai respons terhadap rencana yang baru disebutkan lawan bicara.',
 usage:'Memberi saran tentang perjalanan, pilihan atau kebutuhan seseorang. Klausa sesudah なら tidak harus terjadi setelah peristiwa pertama; saran dapat berupa persiapan yang harus dilakukan lebih dulu.',
 whenToUse:'Gunakan 行くなら、寒いなら、雨なら、暇なら. Setelah N／なA jangan mempertahankan だ pada pola dasar ini. Bentuk ならば juga ada dan memiliki bentuk lebih lengkap.',
 watchOut:'なら bukan penghubung otomatis untuk setiap urutan “setelah”. 京都へ行くなら、出発前に本を読んでおくといい memberi saran sebelum berangkat; ini berbeda dari menceritakan kejadian setelah tiba.',
 commonMistake:'雨だなら dan 暇だなら keliru. Gunakan 雨なら dan 暇なら. Jangan memakai なら sebagai satu-satunya pilihan untuk hasil mekanis yang rutin terjadi setiap kali tombol ditekan.',
 example:'京都へ行くなら、出発前にこの本を読んでおくといいですよ。',exampleReading:'きょうと へ いく なら、しゅっぱつ まえ に この ほん を よんで おく と いい です よ。',exampleMeaning:'Kalau memang akan ke Kyoto, sebaiknya baca buku ini sebelum berangkat.',
 extraExample:'静かな場所がいいなら、図書館はどうですか。',extraExampleReading:'しずかな ばしょ が いい なら、としょかん は どう です か。',extraExampleMeaning:'Kalau menginginkan tempat yang tenang, bagaimana kalau perpustakaan?',
 contrast:'～なら memberikan tanggapan berdasarkan premis, termasuk saran sebelum tindakan itu. ～たら dalam makna urutan menempatkan kejadian kedua setelah yang pertama tercapai. ～と cocok untuk hasil rutin/otomatis, bukan sekadar menerima rencana lawan bicara.',
 quiz:{prompt:'京都へ行く〔　〕、出発前にこの本を読んでおくといいですよ。',reading:'きょうと へ いく〔　〕、しゅっぱつ まえ に この ほん を よんで おく と いい です よ。',context:'Teman mengatakan akan pergi ke Kyoto. Saya menerima rencana itu sebagai premis lalu menyarankan membaca buku sebelum berangkat. Pilih penghubung premis yang cocok setelah 行く.',choices:['なら','たら','ながら','ても'],answer:0,explanation:'行くなら menerima rencana ke Kyoto sebagai premis; saran membaca dilakukan sebelum berangkat. 行くたら／行くながら／行くても bukan sambungan yang benar pada bentuk 行く yang tersedia. ～たら juga memerlukan bentuk た dan biasanya memberi hubungan urutan yang berbeda.'}
},
{
 id:'n4-g-29',title:'～と（条件・結果）',meaning:'setiap kali / jika ～, hasilnya ～',pattern:'V辞書形／Vない + と／いA + と／N・なAだ + と',
 explanation:'と pada unit ini menghubungkan syarat dengan hasil yang dipandang rutin, alami atau otomatis. Misalnya menekan tombol menyebabkan pintu terbuka, atau kebiasaan tertentu selalu diikuti keadaan yang sama.',
 usage:'Menjelaskan cara kerja alat, kebiasaan dan hubungan sebab-hasil yang umum. Pola ini juga dapat muncul dalam laporan penemuan saat melakukan sesuatu; unit ini berfokus pada hasil rutin/otomatis.',
 whenToUse:'Gunakan 押すと、行かないと、寒いと、休みだと. Dalam penggunaan hasil otomatis, bagian kedua menjelaskan apa yang terjadi sebagai akibat syarat tersebut.',
 watchOut:'Untuk meminta orang melakukan sesuatu setelah sampai, gunakan misalnya 着いたら電話してください. Jangan memakai ～と pada fungsi hasil otomatis lalu langsung menambahkan ajakan, kehendak atau permintaan seolah-olah itu akibat mekanis.',
 commonMistake:'ボタンを押したと dengan maksud pola dasar “jika tombol ditekan” tidak sesuai bentuk yang dilatih; gunakan ボタンを押すと. と untuk syarat ini juga berbeda dari と untuk “dan” atau kutipan.',
 example:'このボタンを押すと、ドアが開きます。',exampleReading:'この ぼたん を おす と、どあ が あきます。',exampleMeaning:'Jika tombol ini ditekan, pintunya akan terbuka.',
 extraExample:'夜、コーヒーを飲むと、よく眠れません。',extraExampleReading:'よる、こーひー を のむ と、よく ねむれません。',extraExampleMeaning:'Setiap kali minum kopi pada malam hari, saya tidak bisa tidur nyenyak.',
 contrast:'～と menyoroti hasil rutin/otomatis dalam unit ini. ～たら cocok untuk permintaan sesudah suatu kejadian; ～なら cocok untuk tanggapan atas premis. と pada ～と思う adalah penanda kutipan pikiran, bukan syarat.',
 quiz:{prompt:'このボタンを押す〔　〕、ドアが開きます。',reading:'この ぼたん を おす〔　〕、どあ が あきます。',context:'Ini penjelasan mekanisme pintu: setiap kali tombol ditekan, pintu otomatis terbuka. Pilih penghubung hasil otomatis yang langsung mengikuti bentuk kamus 押す.',choices:['と','たら','ば','ても'],answer:0,explanation:'押すと menyatakan hasil otomatis setelah tombol ditekan. 押すたら／押すば／押すても tidak tersambung benar pada bentuk kamus yang tersedia. Pola bersyarat lain memerlukan perubahan bentuk dan pemeriksaan nuansa; bukan berarti semua kalimat yang dibentuk ulang pasti salah.'}
},
{
 id:'n4-g-30',title:'～ても／～でも',meaning:'meskipun ～ / sekalipun ～',pattern:'Vて + も／いAくても／N・なAでも',
 explanation:'～ても／～でも menyatakan bahwa hasil tetap berlaku walaupun suatu keadaan biasanya dapat menghalangi atau mengubah hasil itu. Syarat dapat berupa kejadian nyata maupun dugaan “sekalipun”.',
 usage:'Menjelaskan keputusan yang tetap dijalankan, keadaan yang tidak berubah, atau hasil yang berlawanan dengan dugaan biasa.',
 whenToUse:'V: 降る→降っても、飲む→飲んでも. いA: 高い→高くても. N／なA: 日曜日でも、静かでも. Negatif verba: 行かなくても. Bunyi で dari bentuk て／で verba tetap dipertahankan sebelum も.',
 watchOut:'～ても tidak sama dengan ～てもいい yang menyatakan izin. でも setelah kata benda juga dapat memiliki fungsi lain seperti memberi contoh; konteks menentukan apakah maknanya konsesi “meskipun”.',
 commonMistake:'日曜日ても dan 高いても keliru untuk pola konsesi ini. Gunakan 日曜日でも dan 高くても. Jangan langsung menambahkan ても pada bentuk kamus verba.',
 example:'雨が降っても、試合は行います。',exampleReading:'あめ が ふっても、しあい は おこないます。',exampleMeaning:'Meskipun hujan turun, pertandingan tetap diadakan.',
 extraExample:'この店は日曜日でも休みません。',extraExampleReading:'この みせ は にちようび でも やすみません。',extraExampleMeaning:'Toko ini tetap tidak tutup meskipun hari Minggu.',
 contrast:'～ても menyoroti hasil yang tetap berlaku meskipun ada syarat penghalang. ～たら menyoroti apa yang terjadi jika/setelah syarat tercapai. ～てもいい memberi izin, sehingga fungsi keseluruhan konstruksinya berbeda.',
 quiz:{prompt:'日曜日〔　〕、この店は休みません。毎日開いています。',reading:'にちようび〔　〕、この みせ は やすみません。まいにち あいて います。',context:'Walaupun hari Minggu, toko tetap buka. Lengkapi bentuk konsesi setelah kata benda 日曜日.',choices:['でも','ても','ながら','からで'],answer:0,explanation:'Kata benda 日曜日 memakai でも untuk “meskipun hari Minggu”. ても tidak langsung menyambung ke kata benda pada pola ini. ながら dan からで tidak membentuk makna konsesi yang diminta dengan susunan tersebut.'}
},
{
 id:'n4-g-31',title:'～場合は',meaning:'jika menghadapi keadaan ～ / dalam kasus ～',pattern:'V・いA普通形 + 場合は／Nの・なAな + 場合は',
 explanation:'～場合は menetapkan suatu keadaan atau skenario lalu menjelaskan tindakan yang berlaku pada keadaan itu. Pola ini sering digunakan dalam petunjuk, aturan layanan atau pemberitahuan yang menyiapkan beberapa kemungkinan.',
 usage:'Memberi tahu apa yang harus dilakukan jika terlambat, ingin membatalkan janji atau menghadapi keadaan tertentu. Gaya ini sering lebih tertata/formal daripada percakapan syarat sederhana.',
 whenToUse:'Gunakan 遅れる場合は、遅れた場合は、分からない場合は. N memakai の: 雨の場合は. なA memakai な: 必要な場合は. Bentuk sebelum 場合 dipilih sesuai skenario, termasuk bentuk negatif atau lampau bila konteks memerlukannya.',
 watchOut:'場合 dibaca ばあい. Pola ini bukan pengganti semua とき; ia membingkai suatu skenario yang perlu dipertimbangkan. Jangan memakai Nだ場合 pada pola dasar kata benda sekarang; gunakan Nの場合.',
 commonMistake:'雨な場合は dan 必要の場合は mencampur pola kata benda dan な形容詞. Gunakan 雨の場合は serta 必要な場合は.',
 example:'予約を取り消す場合は、前の日までに連絡してください。',exampleReading:'よやく を とりけす ばあい は、まえ の ひ まで に れんらくして ください。',exampleMeaning:'Jika akan membatalkan reservasi, tolong hubungi paling lambat sehari sebelumnya.',
 extraExample:'雨の場合は、教室で練習します。',extraExampleReading:'あめ の ばあい は、きょうしつ で れんしゅうします。',extraExampleMeaning:'Jika hujan, latihan dilakukan di ruang kelas.',
 contrast:'～場合は membingkai skenario beserta respons/petunjuknya. ～たら dapat menyampaikan syarat lebih langsung dalam percakapan. ～とき menunjukkan waktu atau kesempatan dan tidak selalu menyiratkan skenario alternatif yang sedang dipertimbangkan.',
 quiz:{prompt:'電車が遅れた〔　〕は、会社に連絡してください。',reading:'でんしゃ が おくれた〔　〕は、かいしゃ に れんらくして ください。',context:'Petunjuk kantor menjelaskan respons untuk skenario kereta terlambat. Lengkapi ungkapan “dalam kasus kereta terlambat”.',choices:['場合','ながら','だけで','ても'],answer:0,explanation:'遅れた場合は menetapkan skenario keterlambatan lalu memberi petunjuk untuk menghubungi kantor. ながら／だけで／ても tidak langsung membentuk pola skenario＋は dengan bentuk 遅れた yang tersedia.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
