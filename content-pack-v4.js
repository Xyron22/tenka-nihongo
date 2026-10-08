(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D||!D.jlpt||!D.jlpt.N5)return;

const grammarAudit={
'n5-g-11':{
 meaning:'sebelum melakukan ～',
 pattern:'V辞書形 + 前に / Nの + 前に',
 explanation:'Dipakai untuk menyatakan bahwa tindakan utama dilakukan sebelum suatu kegiatan, peristiwa, atau waktu tertentu.',
 usage:'Menjelaskan urutan “sebelum A, lakukan B”. Fokusnya ada pada tindakan B yang terjadi lebih dahulu daripada A.',
 whenToUse:'Gunakan bentuk kamus sebelum 前に jika A adalah verba, misalnya 寝る前に. Jika A adalah nomina, gunakan Nの前に, misalnya 仕事の前に.',
 watchOut:'Untuk pola dasar ini, verba sebelum 前に memakai bentuk kamus walaupun kalimat utamanya berbicara tentang masa lalu atau masa depan. Jangan membuat bentuk seperti 寝た前に untuk arti “sebelum tidur”.',
 commonMistake:'Lupa の setelah nomina atau memakai bentuk lampau verba. Benar: 仕事の前に / 寝る前に. Salah untuk pola dasar ini: 仕事前に dalam struktur latihan formal atau 寝た前に.',
 extraExample:'仕事の前にコーヒーを飲みます。',
 extraExampleReading:'しごと の まえ に コーヒー を のみます。',
 extraExampleMeaning:'Sebelum bekerja, saya minum kopi.',
 contrast:'～前に berarti B dilakukan sebelum A; ～てから berarti setelah A selesai, baru B dilakukan.'
},
'n5-g-12':{
 meaning:'melakukan hal seperti ～ dan ～ / memberi beberapa contoh kegiatan',
 pattern:'Vた + り、Vた + りします',
 explanation:'Dipakai untuk menyebut beberapa contoh kegiatan dari sekumpulan kegiatan yang mungkin dilakukan. Daftar yang disebut tidak harus lengkap.',
 usage:'Memberi contoh aktivitas seperti “kadang melakukan A, B, dan hal-hal sejenis”.',
 whenToUse:'Cocok saat menceritakan kegiatan hari libur, rutinitas yang bervariasi, atau beberapa aktivitas tanpa bermaksud menyebut semuanya.',
 watchOut:'Bagian sebelum り dibentuk dari bentuk lampau biasa Vた, tetapi keseluruhan kalimat tidak otomatis bermakna lampau. Waktu ditentukan oleh bagian akhir: ～たりします untuk kini/kebiasaan, ～たりしました untuk lampau.',
 commonMistake:'Mengira たり hanya berarti “dan kemudian” atau mengubah semua verba sesuai tense akhir. Bentuk di depan り tetap Vた: 食べたり、飲んだりします.',
 extraExample:'日曜日は掃除をしたり、音楽を聞いたりします。',
 extraExampleReading:'にちようび は そうじ を したり、おんがく を きいたり します。',
 extraExampleMeaning:'Pada hari Minggu saya melakukan hal seperti bersih-bersih dan mendengarkan musik.',
 contrast:'～たり～たりします memberi contoh dan tidak menutup daftar. Bentuk ～て、～て menghubungkan tindakan dengan nuansa urutan atau rangkaian yang lebih langsung.'
},
'n5-g-13':{
 meaning:'ada / terdapat ～',
 pattern:'Tempat に + N が + あります（benda・hal）／います（orang・hewan）',
 explanation:'Dipakai untuk menyatakan keberadaan. います digunakan terutama untuk manusia dan hewan, sedangkan あります untuk benda mati, tumbuhan, kejadian, rencana, dan hal abstrak.',
 usage:'Menjawab pertanyaan “ada apa/siapa di mana?” atau menyatakan bahwa sesuatu/seseorang berada di suatu tempat.',
 whenToUse:'Gunakan います untuk orang dan hewan seperti 人・猫. Gunakan あります untuk benda seperti 本・いす dan juga hal seperti 予定があります.',
 watchOut:'Jangan memilih あります／います berdasarkan apakah nomina itu “penting” atau “bergerak”, tetapi berdasarkan jenis keberadaannya. Tumbuhan umumnya memakai あります, bukan います.',
 commonMistake:'Menukar あります dan います, atau memakai partikel tempat で. Untuk keberadaan dasar, lokasi biasanya ditandai に: 部屋に人がいます.',
 extraExample:'公園に猫がいます。',
 extraExampleReading:'こうえん に ねこ が います。',
 extraExampleMeaning:'Ada kucing di taman.',
 contrast:'あります dipakai untuk benda/hal; います untuk manusia dan hewan. Partikel に menandai lokasi keberadaan, sedangkan で biasanya menandai tempat suatu aktivitas dilakukan.'
},
'n5-g-14':{
 meaning:'suka ～',
 pattern:'N が 好きです',
 explanation:'好き adalah kata sifat-na yang menyatakan kesukaan terhadap benda, orang, kegiatan, atau hal tertentu. Dalam pola dasar, objek yang disukai biasanya ditandai dengan が.',
 usage:'Mengatakan apa yang disukai atau menanyakan kesukaan seseorang.',
 whenToUse:'Gunakan Nが好きです untuk kesukaan umum, misalnya 音楽が好きです. Untuk bertanya dapat memakai 何が好きですか.',
 watchOut:'好き bukan verba “menyukai”. Karena itu, pada pola dasar jangan menerjemahkan struktur Indonesia lalu otomatis memakai を. Bentuk dasarnya 日本の音楽が好きです, bukan 日本の音楽を好きです.',
 commonMistake:'Memperlakukan 好き seperti kata kerja dan membuat bentuk seperti 好きます atau memakai を pada pola dasar. 好き adalah kata sifat-na: 好きです / 好きでした / 好きではありません.',
 extraExample:'コーヒーが好きです。',
 extraExampleReading:'コーヒー が すき です。',
 extraExampleMeaning:'Saya suka kopi.',
 contrast:'好きです = suka; 大好きです = sangat suka; 嫌いです = tidak suka/benci. ～たいです berbeda karena menyatakan keinginan melakukan tindakan.'
},
'n5-g-15':{
 meaning:'pergi untuk melakukan ～',
 pattern:'Tempat へ／に + Vます（ます dihapus）+ に行きます / N kegiatan + に行きます',
 explanation:'Dipakai untuk menyatakan tujuan melakukan suatu kegiatan ketika pergi ke suatu tempat. Bentuk verba yang dipakai adalah akar bentuk ます, bukan bentuk kamus.',
 usage:'Menjelaskan “pergi ke suatu tempat untuk melakukan sesuatu”, misalnya pergi makan, melihat film, atau berbelanja.',
 whenToUse:'Untuk verba: 食べます → 食べに行きます, 見ます → 見に行きます. Nomina kegiatan seperti 買い物 juga bisa langsung memakai に: 買い物に行きます.',
 watchOut:'Jangan memakai bentuk kamus langsung sebelum に行きます. 食べるに行きます tidak benar untuk pola ini; gunakan 食べに行きます. Partikel tujuan tempat dan tujuan kegiatan juga berbeda fungsi.',
 commonMistake:'Mencampur penanda tempat dengan penanda tujuan aktivitas. Contoh lengkap: スーパーへ買い物に行きます — へ menandai tempat tujuan, に menandai tujuan kegiatannya.',
 extraExample:'映画を見に行きます。',
 extraExampleReading:'えいが を み に いきます。',
 extraExampleMeaning:'Saya pergi untuk menonton film.',
 contrast:'～に行きます menyatakan tujuan suatu perpindahan. 行きます saja hanya menyatakan pergi tanpa menjelaskan aktivitas yang menjadi tujuannya.'
},
'n5-g-16':{
 meaning:'tidak boleh melakukan ～',
 pattern:'Vて + はいけません',
 explanation:'Dipakai untuk menyatakan larangan: suatu tindakan tidak diizinkan atau tidak boleh dilakukan menurut aturan, situasi, atau penilaian pembicara.',
 usage:'Menyampaikan aturan atau larangan seperti “dilarang merokok”, “tidak boleh masuk”, atau “tidak boleh melakukan tindakan itu”.',
 whenToUse:'Cocok ketika memang ada larangan atau aturan yang jelas. Dalam petunjuk keselamatan dan aturan tempat, pola ini sering dipakai untuk menegaskan bahwa tindakan tersebut tidak diperbolehkan.',
 watchOut:'Nuansanya lebih tegas daripada ～ないでください. ～てはいけません berarti “tidak boleh”, sedangkan ～ないでください berarti “tolong jangan”. Jangan memakai larangan kuat jika sebenarnya hanya ingin membuat permintaan lembut.',
 commonMistake:'Menyamakan ～てはいけません dengan ～なくてもいいです. Maknanya berlawanan: 行ってはいけません = tidak boleh pergi; 行かなくてもいいです = tidak perlu pergi / boleh tidak pergi.',
 extraExample:'ここでたばこを吸ってはいけません。',
 extraExampleReading:'ここ で たばこ を すって は いけません。',
 extraExampleMeaning:'Tidak boleh merokok di sini.',
 contrast:'～てもいいです = boleh melakukan; ～てはいけません = tidak boleh melakukan; ～ないでください = tolong jangan melakukan.'
},
'n5-g-17':{
 meaning:'tidak perlu melakukan ～ / boleh tidak melakukan ～',
 pattern:'Vない → ない diganti なくてもいいです',
 explanation:'Dipakai untuk menyatakan bahwa suatu tindakan tidak wajib. Orang tersebut boleh tidak melakukannya.',
 usage:'Menghilangkan kewajiban: “nggak perlu...”, “tidak harus...”, atau “boleh tidak...”.',
 whenToUse:'Gunakan ketika suatu tindakan opsional atau tidak diperlukan, misalnya besok tidak perlu datang atau formulir ini tidak perlu ditulis.',
 watchOut:'Pola ini bukan larangan. 来なくてもいいです tidak berarti “jangan datang”; artinya “tidak perlu datang”, sehingga datang pun tidak dilarang kecuali ada konteks lain.',
 commonMistake:'Menganggap bentuk negatifnya berarti “tidak boleh”. Bandingkan: 食べなくてもいいです = tidak perlu makan; 食べてはいけません = tidak boleh makan. Salah memilih pola bisa membalik instruksi.',
 extraExample:'今日は残業しなくてもいいです。',
 extraExampleReading:'きょう は ざんぎょう しなくても いい です。',
 extraExampleMeaning:'Hari ini tidak perlu lembur.',
 contrast:'～なくてもいいです = tidak wajib; ～なければなりません = wajib/harus; ～てはいけません = dilarang.'
},
'n5-g-18':{
 meaning:'harus melakukan ～ / wajib ～',
 pattern:'Vない → ない diganti なければなりません',
 explanation:'Dipakai untuk menyatakan kewajiban atau sesuatu yang harus dilakukan. Secara harfiah strukturnya berasal dari kondisi negatif, tetapi sebagai pola dipahami sebagai “harus”.',
 usage:'Menjelaskan kewajiban, aturan, atau tindakan yang memang perlu dilakukan.',
 whenToUse:'Cocok untuk situasi formal atau netral ketika ingin menyatakan kewajiban dengan jelas, misalnya harus minum obat, harus mengumpulkan dokumen, atau harus datang tepat waktu.',
 watchOut:'Bentuk ini cukup formal dan panjang. Dalam percakapan santai orang Jepang sering menyingkatnya menjadi ～ないと atau ～なきゃ, tetapi bentuk singkat itu jangan dipakai sembarangan dalam situasi formal.',
 commonMistake:'Keliru mengubah bentuk ない. Contoh: 飲まない → 飲まなければなりません, bukan 飲むなければなりません. Jangan juga tertukar dengan ～なくてもいいです yang berarti “tidak perlu”.',
 extraExample:'明日は早く起きなければなりません。',
 extraExampleReading:'あした は はやく おきなければ なりません。',
 extraExampleMeaning:'Besok saya harus bangun lebih pagi.',
 contrast:'～なければなりません = harus; ～なくてもいいです = tidak perlu. Dalam percakapan santai ～ないと／～なきゃ sering muncul sebagai versi lebih pendek.'
},
'n5-g-19':{
 meaning:'B lebih ～ daripada A',
 pattern:'A より B のほうが + sifat',
 explanation:'Dipakai untuk membandingkan dua hal dan menyatakan bahwa B memiliki sifat atau tingkat yang lebih kuat daripada A.',
 usage:'Membuat perbandingan seperti “mobil lebih cepat daripada kereta” atau “kopi lebih saya suka daripada teh”.',
 whenToUse:'Gunakan ketika ada dua hal yang dibandingkan. A setelah より menjadi standar pembanding, sedangkan B setelah のほうが adalah pihak yang dinilai lebih memiliki sifat tersebut.',
 watchOut:'Urutan sangat penting. AよりBのほうが速いです berarti B lebih cepat daripada A. Jika A dan B tertukar, makna perbandingannya ikut terbalik.',
 commonMistake:'Mengira noun sebelum より adalah yang “lebih”. Justru pada pola AよりBのほうが, B-lah yang dinilai lebih. Contoh: 電車より車のほうが速いです = mobil lebih cepat daripada kereta.',
 extraExample:'紅茶よりコーヒーのほうが好きです。',
 extraExampleReading:'こうちゃ より コーヒー の ほう が すき です。',
 extraExampleMeaning:'Saya lebih suka kopi daripada teh.',
 contrast:'～より～のほうが membandingkan dua pilihan. Untuk memilih yang paling di dalam kelompok, gunakan ～の中で～が一番.'
},
'n5-g-20':{
 meaning:'di antara ～, ... yang paling ～',
 pattern:'Kelompok の中で + N が一番 + sifat',
 explanation:'Dipakai untuk menyatakan bahwa satu anggota memiliki tingkat paling tinggi dalam suatu kelompok atau kategori.',
 usage:'Menyatakan “yang paling...” seperti paling suka, paling cepat, paling besar, atau paling menarik di antara beberapa pilihan.',
 whenToUse:'Cocok saat membandingkan beberapa anggota dalam satu kelompok. Sebut kelompok dengan の中で, lalu objek pilihan dengan が一番 + sifat.',
 watchOut:'Untuk perbandingan hanya dua benda, pola ～より～のほうが biasanya lebih natural untuk pembelajaran dasar. ～の中で～が一番 menekankan pemilihan satu yang paling menonjol dari sebuah kelompok.',
 commonMistake:'Lupa menyebut ruang perbandingan sehingga “paling”-nya tidak jelas, atau menukar partikel. Pola dasar: 果物の中でりんごが一番好きです — kelompoknya 果物, pilihannya りんご.',
 extraExample:'季節の中で春が一番好きです。',
 extraExampleReading:'きせつ の なか で はる が いちばん すき です。',
 extraExampleMeaning:'Di antara musim, saya paling suka musim semi.',
 contrast:'～の中で～が一番 memilih yang paling dalam kelompok; ～より～のほうが membandingkan dua hal.'
}
};

const items=D.jlpt.N5.grammar||[];
for(const item of items){if(grammarAudit[item.id])Object.assign(item,grammarAudit[item.id])}
})();