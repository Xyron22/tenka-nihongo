// Stage 9A-1: original workplace vocabulary and kana examples. N5 content is untouched.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.kaigo?.vocab)return;
const legacyReadings=`
01|さくや、さんじゅうなな てん はちど の はつねつ が ありました。
02|おうと は ありませんでした。
03|ようぶ に とうつう が あります。
04|りょうかし に ふしゅ が あります。
05|はいにょう は さんかい ありました。
06|きょう は はいべん が ありません。
07|ごえん に ちゅうい して ください。
08|えんげ じょうたい を かくにん します。
09|しょくじ せっしゅりょう は ごわり ていど です。
10|すいぶん せっしゅりょう を かくにん します。
11|けつあつ を そくてい します。
12|もうしおくり を はじめます。
13|たいおん は さんじゅうろく てん はちど です。
14|みゃくはく を はかります。
15|こきゅうすう は いっぷんかん に にじゅっかい です。
16|エスピーオーツー は きゅうじゅうよん パーセント です。
17|こきゅうく の うったえ が あります。
18|がいそう が つづいて います。
19|たん が おおく でて います。
20|けんたいかん が ある との こと です。
21|しょくよくふしん が つづいて います。
22|すいぶん せっしゅじ に むせ が ありました。
23|にょうりょう を かくにん して ください。
24|やかん に にょうしっきん が ありました。
25|みっかかん はいべん なく、べんぴ けいこう です。
26|ほんじつ、げりべん が にかい ありました。
27|くるまいす への いじょう は ふたり かいじょ です。
28|ほこうじ は みまもり が ひつよう です。
29|トイレ への いどうじ は みまもり が ひつよう です。
30|さくや、てんとう が ありました。
31|やかん に ふおん が みられました。
32|とうつうじ に とんぷくやく を ふくよう されて います。
33|ほんにん の そんげん を たいせつ に します。
34|ほんにん が できる こと を いかして、じりつ を しえん します。
35|かいごかてい に そって しえん ないよう を かんがえます。
36|エーディーエル の じょうたい を かくにん します。
37|かいもの や きんせんかんり など の アイエーディーエル も かくにん します。
38|しょくご に こうくうケア を おこないます。
39|ケアプラン に そって たいいへんかん を おこないます。
40|じょくそう よぼう の ため、ひふ の じょうたい を かんさつ します。
41|みぎかた に こうしゅく が あります。
42|にゅうよく が むずかしい ため、せいしき を おこないます。
43|あさ の せいよう を かいじょ します。
44|こうい は いちぶかいじょ です。
45|ひつよう な ぶぶん だけ かいじょ します。
46|こうい は いちぶかいじょ です。
47|いじょう は ぜんかいじょ です。
48|できる こと は ごほんにん に して いただき、じりつ を しえん します。
49|いどうまえ に こえかけ を します。
50|くるまいす の ブレーキ を かくにん します。
51|ほんにん の じょうたい を かくにん しながら にゅうよくかいじょ を おこないます。
52|プライバシー に はいりょ して はいせつかいじょ を おこないます。
53|ほんにん の ペース に あわせて しょくじかいじょ を おこないます。
54|こまめ に すいぶんほきゅう を して いただきます。
55|しょくご に トイレゆうどう を おこないます。
56|ひつよう に おうじて おむつこうかん を おこないます。
57|ふらつき に ちゅうい しながら ほこうかいじょ を おこないます。
58|あんぜん を かくにん して いどうかいじょ を おこないます。
59|ろくじ ごろ に きしょう されました。
60|くじ ごろ に しゅうしん されました。
61|しょくじちゅう の ようす を かんさつ します。
62|かいじょご の ようす を きろく します。
63|へんか が あれば かんごし に ほうこく します。
64|ひつよう な とき は たんとうしゃ に れんらく します。
65|はんだん に まよった とき は せんぱい に そうだん します。
66|いたみ の うったえ が ありました。
67|たいちょう に へんか が ない か かくにん します。
68|じょうきょう に あわせて たいおう します。
`.trim().split('\n');
for(const row of legacyReadings){const [n,reading]=row.split('|'),c=D.kaigo.vocab.find(c=>c.id===`k-v-${n}`);if(c)c.exampleReading=reading}
const rows=[
['病棟','びょうとう','bangsal / unit rawat inap','病棟の入口で待っています。','びょうとう の いりぐち で まって います。','Saya menunggu di pintu masuk bangsal.','Satu unit yang mencakup beberapa 病室. 病室 berarti satu kamar pasien.','care-space'],
['病室','びょうしつ','kamar pasien rawat inap','病室に入る前にノックします。','びょうしつ に はいる まえ に ノック します。','Saya mengetuk sebelum masuk kamar pasien.','Dipakai di rumah sakit. Untuk kamar penghuni fasilitas lansia, sering dipakai 居室.','care-space'],
['居室','きょしつ','kamar penghuni fasilitas perawatan','居室の窓を閉めます。','きょしつ の まど を しめます。','Saya menutup jendela kamar penghuni.','Kamar tempat penghuni tinggal. Bukan istilah untuk seluruh bangsal rumah sakit.','care-space'],
['ナースステーション','ナースステーション','pos perawat','ナースステーションで確認します。','ナースステーション で かくにん します。','Saya mengonfirmasi di pos perawat.','Pusat kerja/perhubungan perawat. Ada tempat yang memakai nama スタッフステーション.','nursing-office'],
['食堂','しょくどう','ruang makan','食堂はこちらです。','しょくどう は こちら です。','Ruang makan ada di sebelah sini.','Tempat makan bersama. 配膳室 dipakai untuk menyiapkan atau membagikan hidangan.',''],
['談話室','だんわしつ','ruang berbincang bersama','談話室でお話ししましょう。','だんわしつ で おはなし しましょう。','Mari berbincang di ruang bersama.','Ruang bersama untuk mengobrol atau bersantai; fungsinya dapat digabung dengan ruang makan.','talk-rest-room'],
['浴室','よくしつ','ruang mandi','浴室の準備をします。','よくしつ の じゅんび を します。','Saya menyiapkan ruang mandi.','浴室 adalah ruang mandi, sedangkan 脱衣室 adalah area melepas/mengenakan pakaian di area mandi.',''],
['脱衣室','だついしつ','ruang berganti pakaian di area mandi','脱衣室にタオルを用意します。','だついしつ に タオル を ようい します。','Saya menyiapkan handuk di ruang ganti area mandi.','Dipakai sebelum/sesudah mandi. 更衣室 juga ruang ganti, tetapi tidak selalu bagian dari area mandi.','changing-room'],
['洗面所','せんめんじょ','area wastafel untuk mencuci muka dan tangan','洗面所はこちらです。','せんめんじょ は こちら です。','Area wastafel ada di sebelah sini.','洗面所 bukan 洗濯室. 洗濯室 digunakan untuk mencuci pakaian atau linen.','wash-area'],
['トイレ','トイレ','toilet / kamar kecil','トイレは廊下の右側にあります。','トイレ は ろうか の みぎがわ に あります。','Toilet ada di sebelah kanan koridor.','お手洗い adalah sebutan lebih sopan. トイレ bukan ポータブルトイレ (toilet portabel).','toilet-area'],
['多目的トイレ','たもくてきトイレ','toilet dengan fasilitas untuk beragam kebutuhan','多目的トイレの場所を確認します。','たもくてきトイレ の ばしょ を かくにん します。','Saya memeriksa lokasi toilet multifungsi.','Dapat menyediakan ruang dan fasilitas aksesibilitas. Perlengkapan berbeda menurut tempat; tidak berarti khusus satu kelompok pengguna.','toilet-area'],
['汚物処理室','おぶつしょりしつ','ruang penanganan barang atau buangan terkontaminasi','汚物処理室の場所を教えてください。','おぶつしょりしつ の ばしょ を おしえて ください。','Tolong beri tahu lokasi ruang penanganan barang terkontaminasi.','Nama area kerja. Penanganan, pemilahan dan rute barang mengikuti aturan tempat kerja; bukan ruang penyimpanan linen bersih.',''],
['リネン室','リネンしつ','ruang linen','新しいシーツはリネン室にあります。','あたらしい シーツ は リネンしつ に あります。','Seprai baru ada di ruang linen.','Linen mencakup seprai dan kain sejenis. リネン庫 juga dipakai untuk tempat penyimpanan; pemisahan bersih/kotor mengikuti penandaan fasilitas.','storage-area'],
['洗濯室','せんたくしつ','ruang mencuci pakaian atau linen','洗濯室は一階にあります。','せんたくしつ は いっかい に あります。','Ruang cuci ada di lantai satu.','洗濯 berarti mencuci pakaian/kain. Berbeda dari 洗面 (mencuci muka).','wash-area'],
['更衣室','こういしつ','ruang ganti pakaian','職員の更衣室は二階です。','しょくいん の こういしつ は にかい です。','Ruang ganti staf ada di lantai dua.','Istilah umum untuk ruang berganti pakaian; contoh ini untuk staf. Ruang ganti sebelum mandi sering disebut 脱衣室.','changing-room'],
['休憩室','きゅうけいしつ','ruang istirahat','休憩室で少し休みます。','きゅうけいしつ で すこし やすみます。','Saya beristirahat sebentar di ruang istirahat.','Periksa apakah area tersebut untuk staf atau pengguna layanan. 談話室 menekankan ruang berbincang bersama.','talk-rest-room'],
['処置室','しょちしつ','ruang tindakan medis','処置室の前で待っています。','しょちしつ の まえ で まって います。','Saya menunggu di depan ruang tindakan.','Tempat tindakan/perawatan medis oleh petugas yang berwenang. 診察室 menekankan pemeriksaan/konsultasi dokter.','medical-room'],
['診察室','しんさつしつ','ruang pemeriksaan dokter','診察室はこちらです。','しんさつしつ は こちら です。','Ruang pemeriksaan dokter ada di sebelah sini.','診察 adalah pemeriksaan/konsultasi oleh dokter. Peran ruang dapat berbeda menurut fasilitas.','medical-room'],
['医務室','いむしつ','ruang layanan kesehatan dalam fasilitas','医務室の場所を確認します。','いむしつ の ばしょ を かくにん します。','Saya memeriksa lokasi ruang layanan kesehatan.','Istilah yang muncul pada fasilitas perawatan atau institusi. Bukan nama umum semua kamar pasien.','medical-room'],
['リハビリ室','リハビリしつ','ruang rehabilitasi','リハビリ室は二階です。','リハビリしつ は にかい です。','Ruang rehabilitasi ada di lantai dua.','Bentuk ringkas リハビリテーション室. Latihan dilakukan menurut arahan petugas/terapis yang bertanggung jawab.',''],
['面会室','めんかいしつ','ruang kunjungan keluarga atau tamu','ご家族は面会室でお待ちです。','ごかぞく は めんかいしつ で おまち です。','Keluarga sedang menunggu di ruang kunjungan.','面会 adalah bertemu untuk berkunjung. Berbeda dari 相談 (konsultasi) dan 会議 (rapat).','talk-rest-room'],
['廊下','ろうか','koridor / lorong','廊下の左側に浴室があります。','ろうか の ひだりがわ に よくしつ が あります。','Ruang mandi ada di sisi kiri koridor.','Untuk menyebut posisi ruangan atau jalur berjalan. 通路 adalah istilah lebih umum untuk jalur lewat.',''],
['階段','かいだん','tangga','階段の場所を確認します。','かいだん の ばしょ を かくにん します。','Saya memeriksa lokasi tangga.','階段 berarti tangga; 段差 adalah perbedaan ketinggian/undakan, termasuk yang bukan tangga.',''],
['エレベーター','エレベーター','lift','エレベーターで三階へ行きます。','エレベーター で さんがい へ いきます。','Saya naik lift ke lantai tiga.','Berbeda dari エスカレーター (tangga berjalan). Jalur transportasi mengikuti aturan fasilitas.',''],
['出入口','でいりぐち','pintu akses keluar-masuk','出入口の場所を確認します。','でいりぐち の ばしょ を かくにん します。','Saya memeriksa lokasi pintu akses keluar-masuk.','入口 = pintu masuk, 出口 = pintu keluar. 出入口 dapat berfungsi untuk keduanya.','exit-area'],
['非常口','ひじょうぐち','pintu keluar darurat','非常口はこちらです。','ひじょうぐち は こちら です。','Pintu keluar darurat ada di sebelah sini.','Berbeda dari pintu akses biasa. Lokasi dan penggunaan dipelajari melalui penandaan serta prosedur fasilitas.','exit-area'],
['受付','うけつけ','loket / meja penerimaan','受付で名前を伝えます。','うけつけ で なまえ を つたえます。','Saya menyampaikan nama di meja penerimaan.','Dapat berarti loket atau proses penerimaan. ナースステーション adalah pos kerja perawat, bukan semua loket rumah sakit.','nursing-office'],
['倉庫','そうこ','gudang penyimpanan','予備の椅子は倉庫にあります。','よび の いす は そうこ に あります。','Kursi cadangan ada di gudang.','Istilah umum untuk gudang. リネン室/リネン庫 menunjukkan penyimpanan khusus linen.','storage-area'],
['配膳室','はいぜんしつ','ruang penyiapan atau distribusi hidangan','配膳室で食事の準備をします。','はいぜんしつ で しょくじ の じゅんび を します。','Saya menyiapkan hidangan di ruang distribusi makanan.','配膳 = menyiapkan/membagikan hidangan, 下膳 = mengangkat kembali peralatan sesudah makan. 食堂 adalah ruang untuk makan.',''],
['事務室','じむしつ','ruang administrasi','事務室に書類を届けます。','じむしつ に しょるい を とどけます。','Saya mengantar dokumen ke ruang administrasi.','事務 adalah urusan administrasi. Berbeda dari 医務 yang berkaitan dengan layanan kesehatan.',''],
['相談室','そうだんしつ','ruang konsultasi / diskusi kebutuhan','相談室でご家族と話します。','そうだんしつ で ごかぞく と はなします。','Saya berbicara dengan keluarga di ruang konsultasi.','Digunakan untuk konsultasi, misalnya kebutuhan layanan. Tidak selalu ruang pemeriksaan medis.','talk-rest-room'],
['個室','こしつ','kamar pribadi / kamar satu orang','こちらは個室です。','こちら は こしつ です。','Yang ini kamar pribadi.','Menjelaskan jenis kamar. Di rumah sakit 個室 dapat menjadi satu jenis 病室; bukan istilah pengganti seluruh bangsal.','care-space']
];
for(const [i,row]of rows.entries()){
 const [term,reading,meaning,example,exampleReading,exampleMeaning,note,quizGroup]=row,id=`k-v-${i+69}`;
 if(!D.kaigo.vocab.some(c=>c.id===id))D.kaigo.vocab.push({id,term,reading,meaning,example,exampleReading,exampleMeaning,note,quizGroup,category:'Ruangan & fasilitas',workplacePack:'9A-1'});
}
})();
