(()=> {
'use strict';
const D=window.TENKA_DATA;if(!D||!D.jlpt||!D.kaigo)return;

const n5Kanji=[
{id:'n5-k-26',kanji:'本',reading:'ほん・もと',romaji:'hon / moto',meaning:'buku / asal',example:'本を読みます。',exampleReading:'ほん を よみます。',exampleMeaning:'Saya membaca buku.'},
{id:'n5-k-27',kanji:'名',reading:'めい・な',romaji:'mei / na',meaning:'nama',example:'名前を書いてください。',exampleReading:'なまえ を かいて ください。',exampleMeaning:'Tolong tulis nama.'},
{id:'n5-k-28',kanji:'友',reading:'ゆう・とも',romaji:'yuu / tomo',meaning:'teman',example:'友だちと話します。',exampleReading:'ともだち と はなします。',exampleMeaning:'Saya berbicara dengan teman.'},
{id:'n5-k-29',kanji:'食',reading:'しょく・たべる',romaji:'shoku / taberu',meaning:'makan / makanan',example:'朝ご飯を食べます。',exampleReading:'あさごはん を たべます。',exampleMeaning:'Saya makan sarapan.'},
{id:'n5-k-30',kanji:'飲',reading:'いん・のむ',romaji:'in / nomu',meaning:'minum',example:'水を飲みます。',exampleReading:'みず を のみます。',exampleMeaning:'Saya minum air.'},
{id:'n5-k-31',kanji:'行',reading:'こう・ぎょう・いく',romaji:'kou / gyou / iku',meaning:'pergi / berjalan',example:'毎日、仕事へ行きます。',exampleReading:'まいにち、しごと へ いきます。',exampleMeaning:'Setiap hari saya pergi bekerja.'},
{id:'n5-k-32',kanji:'来',reading:'らい・くる',romaji:'rai / kuru',meaning:'datang / berikutnya',example:'友だちが家に来ます。',exampleReading:'ともだち が いえ に きます。',exampleMeaning:'Teman datang ke rumah saya.'},
{id:'n5-k-33',kanji:'見',reading:'けん・みる',romaji:'ken / miru',meaning:'melihat',example:'テレビを見ます。',exampleReading:'テレビ を みます。',exampleMeaning:'Saya menonton televisi.'},
{id:'n5-k-34',kanji:'聞',reading:'ぶん・もん・きく',romaji:'bun / mon / kiku',meaning:'mendengar / bertanya',example:'日本語を毎日聞きます。',exampleReading:'にほんご を まいにち ききます。',exampleMeaning:'Saya mendengarkan bahasa Jepang setiap hari.'},
{id:'n5-k-35',kanji:'話',reading:'わ・はなす・はなし',romaji:'wa / hanasu / hanashi',meaning:'berbicara / cerita',example:'友だちと日本語で話します。',exampleReading:'ともだち と にほんご で はなします。',exampleMeaning:'Saya berbicara bahasa Jepang dengan teman.'},
{id:'n5-k-36',kanji:'読',reading:'どく・よむ',romaji:'doku / yomu',meaning:'membaca',example:'毎晩、本を読みます。',exampleReading:'まいばん、ほん を よみます。',exampleMeaning:'Setiap malam saya membaca buku.'},
{id:'n5-k-37',kanji:'書',reading:'しょ・かく',romaji:'sho / kaku',meaning:'menulis',example:'名前を書いてください。',exampleReading:'なまえ を かいて ください。',exampleMeaning:'Tolong tulis nama.'},
{id:'n5-k-38',kanji:'買',reading:'ばい・かう',romaji:'bai / kau',meaning:'membeli',example:'スーパーで野菜を買います。',exampleReading:'スーパー で やさい を かいます。',exampleMeaning:'Saya membeli sayur di supermarket.'},
{id:'n5-k-39',kanji:'朝',reading:'ちょう・あさ',romaji:'chou / asa',meaning:'pagi',example:'朝、コーヒーを飲みます。',exampleReading:'あさ、コーヒー を のみます。',exampleMeaning:'Pagi hari saya minum kopi.'},
{id:'n5-k-40',kanji:'夜',reading:'や・よる',romaji:'ya / yoru',meaning:'malam',example:'夜は早く寝ます。',exampleReading:'よる は はやく ねます。',exampleMeaning:'Malam hari saya tidur lebih awal.'}
];

const n5Vocab=[
{id:'n5-v-36',term:'名前',reading:'なまえ',meaning:'nama',example:'名前を書いてください。',exampleMeaning:'Tolong tulis nama.'},
{id:'n5-v-37',term:'友だち',reading:'ともだち',meaning:'teman',example:'休みの日に友だちと会います。',exampleMeaning:'Saya bertemu teman pada hari libur.'},
{id:'n5-v-38',term:'朝',reading:'あさ',meaning:'pagi',example:'朝、コーヒーを飲みます。',exampleMeaning:'Pagi hari saya minum kopi.'},
{id:'n5-v-39',term:'昼',reading:'ひる',meaning:'siang',example:'昼にご飯を食べます。',exampleMeaning:'Saya makan pada siang hari.'},
{id:'n5-v-40',term:'夜',reading:'よる',meaning:'malam',example:'夜は早く寝ます。',exampleMeaning:'Malam hari saya tidur lebih awal.'},
{id:'n5-v-41',term:'今日',reading:'きょう',meaning:'hari ini',example:'今日は仕事です。',exampleMeaning:'Hari ini saya bekerja.'},
{id:'n5-v-42',term:'明日',reading:'あした',meaning:'besok',example:'明日は休みです。',exampleMeaning:'Besok libur.'},
{id:'n5-v-43',term:'昨日',reading:'きのう',meaning:'kemarin',example:'昨日、スーパーへ行きました。',exampleMeaning:'Kemarin saya pergi ke supermarket.'},
{id:'n5-v-44',term:'仕事',reading:'しごと',meaning:'pekerjaan / kerja',example:'八時半から仕事です。',exampleMeaning:'Saya mulai kerja pukul 8.30.'},
{id:'n5-v-45',term:'病院',reading:'びょういん',meaning:'rumah sakit',example:'病院で働いています。',exampleMeaning:'Saya bekerja di rumah sakit.'},
{id:'n5-v-46',term:'家',reading:'いえ',meaning:'rumah',example:'家に帰ります。',exampleReading:'いえ に かえります。',exampleMeaning:'Saya pulang ke rumah.'},
{id:'n5-v-47',term:'学校',reading:'がっこう',meaning:'sekolah',example:'毎朝、学校へ行きます。',exampleReading:'まいあさ、がっこう へ いきます。',exampleMeaning:'Setiap pagi saya pergi ke sekolah.'},
{id:'n5-v-48',term:'先生',reading:'せんせい',meaning:'guru / pengajar',example:'先生と話します。',exampleReading:'せんせい と はなします。',exampleMeaning:'Saya berbicara dengan guru.'},
{id:'n5-v-49',term:'学生',reading:'がくせい',meaning:'pelajar / mahasiswa',example:'あの人は学生です。',exampleReading:'あの ひと は がくせい です。',exampleMeaning:'Orang itu adalah pelajar.'},
{id:'n5-v-50',term:'会社',reading:'かいしゃ',meaning:'perusahaan',example:'父は会社で働いています。',exampleReading:'ちち は かいしゃ で はたらいて います。',exampleMeaning:'Ayah saya bekerja di perusahaan.'},
{id:'n5-v-51',term:'駅',reading:'えき',meaning:'stasiun',example:'駅で友だちを待ちます。',exampleReading:'えき で ともだち を まちます。',exampleMeaning:'Saya menunggu teman di stasiun.'},
{id:'n5-v-52',term:'電車',reading:'でんしゃ',meaning:'kereta listrik / kereta',example:'電車で仕事へ行きます。',exampleReading:'でんしゃ で しごと へ いきます。',exampleMeaning:'Saya pergi bekerja dengan kereta.'},
{id:'n5-v-53',term:'車',reading:'くるま',meaning:'mobil / kendaraan',example:'車でスーパーへ行きます。',exampleReading:'くるま で スーパー へ いきます。',exampleMeaning:'Saya pergi ke supermarket dengan mobil.'},
{id:'n5-v-54',term:'店',reading:'みせ',meaning:'toko',example:'この店は九時に開きます。',exampleReading:'この みせ は くじ に あきます。',exampleMeaning:'Toko ini buka pukul sembilan.'},
{id:'n5-v-55',term:'お金',reading:'おかね',meaning:'uang',example:'お金を払います。',exampleReading:'おかね を はらいます。',exampleMeaning:'Saya membayar uang.'},
{id:'n5-v-56',term:'時間',reading:'じかん',meaning:'waktu / jam (durasi)',example:'少し時間があります。',exampleReading:'すこし じかん が あります。',exampleMeaning:'Saya punya sedikit waktu.'},
{id:'n5-v-57',term:'毎日',reading:'まいにち',meaning:'setiap hari',example:'毎日、日本語を勉強します。',exampleReading:'まいにち、にほんご を べんきょう します。',exampleMeaning:'Saya belajar bahasa Jepang setiap hari.'},
{id:'n5-v-58',term:'今',reading:'いま',meaning:'sekarang',example:'今、ご飯を食べています。',exampleReading:'いま、ごはん を たべて います。',exampleMeaning:'Sekarang saya sedang makan.'},
{id:'n5-v-59',term:'一緒',reading:'いっしょ',meaning:'bersama',example:'一緒に帰りましょう。',exampleReading:'いっしょ に かえりましょう。',exampleMeaning:'Mari pulang bersama.'},
{id:'n5-v-60',term:'少し',reading:'すこし',meaning:'sedikit',example:'日本語が少し分かります。',exampleReading:'にほんご が すこし わかります。',exampleMeaning:'Saya mengerti sedikit bahasa Jepang.'}
];

const n5Grammar=[
{id:'n5-g-13',title:'～があります／います',meaning:'ada / terdapat ～',pattern:'N が あります（benda）／います（orang・hewan）',explanation:'Dipakai untuk menyatakan keberadaan. あります digunakan untuk benda atau hal, sedangkan います untuk manusia dan hewan.',example:'部屋にいすがあります。',exampleReading:'へや に いす が あります。',exampleMeaning:'Ada kursi di kamar.',contrast:'人や動物には います を使います。'},
{id:'n5-g-14',title:'～が好きです',meaning:'suka ～',pattern:'N が 好きです',explanation:'Dipakai untuk menyatakan sesuatu yang disukai.',example:'日本の音楽が好きです。',exampleReading:'にほん の おんがく が すき です。',exampleMeaning:'Saya suka musik Jepang.',contrast:'好き adalah kata sifat-na; partikel yang umum dipakai sebelum 好きです adalah が。'},
{id:'n5-g-15',title:'～に行きます',meaning:'pergi untuk melakukan ～',pattern:'Vます（ます dihapus）+ に行きます',explanation:'Dipakai ketika pergi ke suatu tempat dengan tujuan melakukan suatu kegiatan.',example:'スーパーへ買い物に行きます。',exampleReading:'スーパー へ かいもの に いきます。',exampleMeaning:'Saya pergi ke supermarket untuk berbelanja.',contrast:'Tempat tujuan dapat ditandai dengan へ atau に; tujuan kegiatan ditandai dengan に。'},
{id:'n5-g-16',title:'～てはいけません',meaning:'tidak boleh melakukan ～',pattern:'Vて + はいけません',explanation:'Dipakai untuk menyatakan larangan atau sesuatu yang tidak diperbolehkan.',example:'ここで写真を撮ってはいけません。',exampleReading:'ここ で しゃしん を とって は いけません。',exampleMeaning:'Tidak boleh mengambil foto di sini.',contrast:'～てもいいです = boleh melakukan ～。'},
{id:'n5-g-17',title:'～なくてもいいです',meaning:'tidak perlu melakukan ～ / tidak apa-apa jika tidak ～',pattern:'Vない → ない diganti なくてもいいです',explanation:'Dipakai untuk mengatakan bahwa suatu tindakan tidak wajib dilakukan.',example:'明日は来なくてもいいです。',exampleReading:'あした は こなくても いい です。',exampleMeaning:'Besok tidak perlu datang.',contrast:'～なければなりません = harus melakukan ～。'},
{id:'n5-g-18',title:'～なければなりません',meaning:'harus melakukan ～',pattern:'Vない → ない diganti なければなりません',explanation:'Dipakai untuk menyatakan kewajiban atau sesuatu yang harus dilakukan.',example:'薬を飲まなければなりません。',exampleReading:'くすり を のまなければ なりません。',exampleMeaning:'Harus minum obat.',contrast:'～なくてもいいです = tidak perlu melakukan ～。'},
{id:'n5-g-19',title:'～より～のほうが',meaning:'～ lebih ... daripada ～',pattern:'A より B のほうが + sifat',explanation:'Dipakai untuk membandingkan dua hal dan menyatakan bahwa B memiliki sifat tersebut lebih kuat daripada A.',example:'電車より車のほうが速いです。',exampleReading:'でんしゃ より くるま の ほう が はやい です。',exampleMeaning:'Mobil lebih cepat daripada kereta.',contrast:'より menandai pembanding; のほうが menandai pihak yang dinilai lebih ～。'},
{id:'n5-g-20',title:'～の中で～が一番',meaning:'di antara ～, ... yang paling ～',pattern:'Kelompok の中で + N が一番 + sifat',explanation:'Dipakai untuk menyatakan sesuatu yang paling menonjol di dalam suatu kelompok.',example:'果物の中でりんごが一番好きです。',exampleReading:'くだもの の なか で りんご が いちばん すき です。',exampleMeaning:'Di antara buah-buahan, saya paling suka apel.',contrast:'Dua hal biasanya dibandingkan dengan ～より～のほうが。'}
];

const kaigoVocab=[
{id:'k-v-45',term:'介助',reading:'かいじょ',meaning:'bantuan dalam melakukan aktivitas',category:'介護の基本',examArea:'介護の基本',example:'必要な部分だけ介助します。',exampleMeaning:'Memberikan bantuan hanya pada bagian yang diperlukan.'},
{id:'k-v-46',term:'一部介助',reading:'いちぶかいじょ',meaning:'bantuan sebagian',category:'ADL・生活支援',examArea:'生活支援技術',example:'更衣は一部介助です。',exampleMeaning:'Berganti pakaian memerlukan bantuan sebagian.'},
{id:'k-v-47',term:'全介助',reading:'ぜんかいじょ',meaning:'bantuan penuh',category:'ADL・生活支援',examArea:'生活支援技術',example:'移乗は全介助です。',exampleMeaning:'Transfer memerlukan bantuan penuh.'},
{id:'k-v-48',term:'自立',reading:'じりつ',meaning:'mandiri / dapat melakukan sendiri',category:'介護の基本',examArea:'人間の尊厳と自立',example:'できることはご本人にしていただき、自立を支援します。',exampleMeaning:'Hal yang masih dapat dilakukan sendiri tetap dilakukan oleh orang tersebut untuk mendukung kemandirian.'},
{id:'k-v-49',term:'声かけ',reading:'こえかけ',meaning:'menyapa / memberi arahan verbal',category:'コミュニケーション',examArea:'コミュニケーション技術',example:'移動前に声かけをします。',exampleMeaning:'Memberi penjelasan atau sapaan sebelum berpindah.'},
{id:'k-v-50',term:'車椅子',reading:'くるまいす',meaning:'kursi roda',category:'ADL・移動',examArea:'生活支援技術',example:'車椅子のブレーキを確認します。',exampleMeaning:'Memeriksa rem kursi roda.'},
{id:'k-v-51',term:'入浴介助',reading:'にゅうよくかいじょ',meaning:'bantuan saat mandi',category:'清潔・整容',examArea:'生活支援技術',example:'本人の状態を確認しながら入浴介助を行います。',exampleMeaning:'Membantu mandi sambil memperhatikan kondisi orang tersebut.'},
{id:'k-v-52',term:'排泄介助',reading:'はいせつかいじょ',meaning:'bantuan toileting / eliminasi',category:'排泄',examArea:'生活支援技術',example:'プライバシーに配慮して排泄介助を行います。',exampleMeaning:'Memberikan bantuan toileting dengan menjaga privasi.'}
];

const handoff=[
{id:'h-11',examArea:'介護の基本',
 text:'加藤さんは更衣の際、上着はご自分で着ることができました。ズボンは一部介助が必要でした。できるところはご本人にしていただくようお願いします。',
 reading:'かとうさん は こうい の さい、うわぎ は ごじぶん で きる こと が できました。ズボン は いちぶかいじょ が ひつよう でした。できる ところ は ごほんにん に して いただく よう おねがいします。',
 meaning:'Saat berganti pakaian, Kato-san dapat memakai pakaian atas sendiri. Untuk celana diperlukan bantuan sebagian. Mohon tetap memberi kesempatan beliau melakukan bagian yang masih dapat dilakukan sendiri.',
 segments:[
  {text:'加藤さんは更衣の際、上着はご自分で着ることができました。',reading:'かとうさん は こうい の さい、うわぎ は ごじぶん で きる こと が できました。',meaning:'Saat berganti pakaian, Kato-san dapat memakai pakaian atas sendiri.'},
  {text:'ズボンは一部介助が必要でした。',reading:'ズボン は いちぶかいじょ が ひつよう でした。',meaning:'Untuk celana diperlukan bantuan sebagian.'},
  {text:'できるところはご本人にしていただくようお願いします。',reading:'できる ところ は ごほんにん に して いただく よう おねがいします。',meaning:'Mohon tetap memberi kesempatan beliau melakukan bagian yang masih dapat dilakukan sendiri.'}
 ],
 question:'Apa poin penting untuk bantuan berganti pakaian pada shift berikutnya?',
 choices:['Semua pakaian dipakaikan oleh staf meskipun beliau bisa','Bagian yang mampu dilakukan sendiri tetap dilakukan oleh beliau, dan bantu bagian yang diperlukan','Tidak perlu membantu sama sekali','Berganti pakaian harus dihentikan'],answer:1},
{id:'h-12',examArea:'コミュニケーション技術',
 text:'木村さんは夕方、「家に帰りたい」と繰り返し話されました。否定せずに話を伺うと、しばらくして落ち着かれました。今後も気持ちを確認しながら声かけをお願いします。',
 reading:'きむらさん は ゆうがた、「いえ に かえりたい」 と くりかえし はなされました。ひてい せず に はなし を うかがう と、しばらく して おちつかれました。こんご も きもち を かくにん しながら こえかけ を おねがいします。',
 meaning:'Pada sore hari Kimura-san berulang kali mengatakan ingin pulang ke rumah. Setelah didengarkan tanpa menyangkal, beliau menjadi lebih tenang. Selanjutnya mohon tetap menyapa sambil memperhatikan perasaannya.',
 segments:[
  {text:'木村さんは夕方、「家に帰りたい」と繰り返し話されました。',reading:'きむらさん は ゆうがた、「いえ に かえりたい」 と くりかえし はなされました。',meaning:'Pada sore hari Kimura-san berulang kali mengatakan ingin pulang ke rumah.'},
  {text:'否定せずに話を伺うと、しばらくして落ち着かれました。',reading:'ひてい せず に はなし を うかがう と、しばらく して おちつかれました。',meaning:'Setelah didengarkan tanpa menyangkal, beliau menjadi lebih tenang.'},
  {text:'今後も気持ちを確認しながら声かけをお願いします。',reading:'こんご も きもち を かくにん しながら こえかけ を おねがいします。',meaning:'Selanjutnya mohon tetap menyapa sambil memperhatikan perasaannya.'}
 ],
 question:'Pendekatan komunikasi yang perlu diteruskan?',
 choices:['Langsung mengatakan bahwa beliau salah','Mengabaikan ucapan beliau','Mendengarkan tanpa menyangkal dan memperhatikan perasaannya','Memaksa beliau berhenti berbicara'],answer:2}
];

function pushUnique(target,items){
  const ids=new Set(target.map(x=>x.id));
  items.forEach(item=>{if(!ids.has(item.id)){target.push(item);ids.add(item.id)}});
}
pushUnique(D.jlpt.N5.kanji,n5Kanji);
pushUnique(D.jlpt.N5.vocab,n5Vocab);
pushUnique(D.jlpt.N5.grammar,n5Grammar);
pushUnique(D.kaigo.vocab,kaigoVocab);
pushUnique(D.kaigo.handoff,handoff);
})();