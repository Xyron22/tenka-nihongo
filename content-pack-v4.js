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
}
};

const items=D.jlpt.N5.grammar||[];
for(const item of items){if(grammarAudit[item.id])Object.assign(item,grammarAudit[item.id])}
})();