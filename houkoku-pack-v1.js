(()=> {
'use strict';
const D=window.TENKA_DATA;if(!D||!D.kaigo)return;

D.kaigo.houkoku=[
{
 id:'r-01',
 title:'転倒の可能性',
 titleReading:'てんとう の かのうせい',
 examArea:'コミュニケーション技術',
 situation:'Kamu tidak melihat momen jatuh. Saat kamu melihat, A-san sudah duduk di lantai dan orang lain sedang mencoba membantunya berdiri.',
 pieces:[
  {text:'Aさんですが、',reading:'エーさん ですが、',meaning:'Mengenai A-san,'},
  {text:'転倒したところは見ていません。',reading:'てんとう した ところ は みて いません。',meaning:'Saya tidak melihat saat beliau jatuh.'},
  {text:'私が確認した時には、すでに床に座っておられました。',reading:'わたし が かくにん した とき には、すでに ゆか に すわって おられました。',meaning:'Saat saya mengecek, beliau sudah duduk di lantai.'},
  {text:'ほかの利用者さんが立ち上がりを手伝おうとしていました。',reading:'ほか の りようしゃさん が たちあがり を てつだおう と して いました。',meaning:'Pengguna lain sedang mencoba membantu beliau berdiri.'},
  {text:'状態の確認をお願いします。',reading:'じょうたい の かくにん を おねがいします。',meaning:'Mohon periksa kondisinya.'}
 ],
 reading:'エーさん ですが、てんとう した ところ は みて いません。わたし が かくにん した とき には、すでに ゆか に すわって おられました。ほか の りようしゃさん が たちあがり を てつだおう と して いました。じょうたい の かくにん を おねがいします。',
 meaning:'Mengenai A-san, saya tidak melihat momen beliau jatuh. Saat saya mengecek, beliau sudah duduk di lantai. Pengguna lain sedang mencoba membantu beliau berdiri. Mohon periksa kondisinya.',
 note:'Kalau tidak melihat kejadian secara langsung, laporkan fakta yang benar-benar kamu lihat. Jangan memastikan detail yang tidak kamu saksikan.'
},
{
 id:'r-02',
 title:'発熱・体温上昇',
 titleReading:'はつねつ・たいおん じょうしょう',
 examArea:'コミュニケーション技術',
 situation:'B-san sebelumnya 37,5°C. Saat diukur lagi suhunya 38,2°C dan kamu ingin melapor kepada perawat.',
 pieces:[
  {text:'Bさんですが、',reading:'ビーさん ですが、',meaning:'Mengenai B-san,'},
  {text:'先ほど体温を測ったところ、38.2度でした。',reading:'さきほど たいおん を はかった ところ、さんじゅうはってんにど でした。',meaning:'Saat suhu diukur tadi, hasilnya 38,2°C.'},
  {text:'前回より体温が上がっています。',reading:'ぜんかい より たいおん が あがって います。',meaning:'Suhunya naik dibanding pengukuran sebelumnya.'},
  {text:'現在のご様子を確認しています。',reading:'げんざい の ごようす を かくにん して います。',meaning:'Saya sedang memeriksa kondisi beliau saat ini.'},
  {text:'対応について確認をお願いします。',reading:'たいおう について かくにん を おねがいします。',meaning:'Mohon konfirmasi penanganannya.'}
 ],
 reading:'ビーさん ですが、さきほど たいおん を はかった ところ、さんじゅうはってんにど でした。ぜんかい より たいおん が あがって います。げんざい の ごようす を かくにん して います。たいおう について かくにん を おねがいします。',
 meaning:'Mengenai B-san, saat suhu diukur tadi hasilnya 38,2°C. Suhunya naik dibanding pengukuran sebelumnya. Saya sedang memeriksa kondisinya saat ini. Mohon konfirmasi penanganannya.',
 note:'Sebutkan angka yang benar-benar diukur dan perubahan yang diketahui. Untuk tindakan berikutnya, minta konfirmasi atau instruksi sesuai prosedur tempat kerja.'
},
{
 id:'r-03',
 title:'唾液が多い',
 titleReading:'だえき が おおい',
 examArea:'コミュニケーション技術',
 situation:'C-san mengeluarkan banyak air liur sampai menetes ke lantai dan terlihat menggenang di lantai.',
 pieces:[
  {text:'Cさんですが、',reading:'シーさん ですが、',meaning:'Mengenai C-san,'},
  {text:'唾液が多く見られ、床まで垂れていました。',reading:'だえき が おおく みられ、ゆか まで たれて いました。',meaning:'Terlihat air liurnya banyak dan menetes sampai ke lantai.'},
  {text:'床にも唾液がたまっていました。',reading:'ゆか にも だえき が たまって いました。',meaning:'Air liur juga menggenang di lantai.'},
  {text:'ご様子の確認をお願いします。',reading:'ごようす の かくにん を おねがいします。',meaning:'Mohon periksa kondisinya.'}
 ],
 reading:'シーさん ですが、だえき が おおく みられ、ゆか まで たれて いました。ゆか にも だえき が たまって いました。ごようす の かくにん を おねがいします。',
 meaning:'Mengenai C-san, terlihat air liurnya banyak dan menetes sampai ke lantai. Air liur juga menggenang di lantai. Mohon periksa kondisinya.',
 note:'Laporkan apa yang terlihat. Kalau ada batuk, むせ, perubahan napas, atau perubahan kesadaran, tambahkan hanya bila memang kamu amati.'
},
{
 id:'r-04',
 title:'食事介助中のむせ',
 titleReading:'しょくじ かいじょちゅう の むせ',
 examArea:'コミュニケーション技術',
 situation:'Saat kamu membantu menyuapi D-san, beliau mengalami むせ lalu mengeluarkan kembali makanan yang ada di mulut.',
 pieces:[
  {text:'Dさんですが、',reading:'ディーさん ですが、',meaning:'Mengenai D-san,'},
  {text:'食事介助中にむせ込みがありました。',reading:'しょくじ かいじょちゅう に むせこみ が ありました。',meaning:'Saat bantuan makan terjadi むせ/tersedak.'},
  {text:'その後、口に入っていた食べ物を吐き出されました。',reading:'そのご、くち に はいって いた たべもの を はきだされました。',meaning:'Setelah itu beliau mengeluarkan kembali makanan yang ada di mulut.'},
  {text:'現在の呼吸状態とご様子の確認をお願いします。',reading:'げんざい の こきゅうじょうたい と ごようす の かくにん を おねがいします。',meaning:'Mohon periksa kondisi pernapasan dan keadaan beliau sekarang.'}
 ],
 reading:'ディーさん ですが、しょくじ かいじょちゅう に むせこみ が ありました。そのご、くち に はいって いた たべもの を はきだされました。げんざい の こきゅうじょうたい と ごようす の かくにん を おねがいします。',
 meaning:'Mengenai D-san, saat bantuan makan terjadi むせ. Setelah itu beliau mengeluarkan kembali makanan yang ada di mulut. Mohon periksa kondisi pernapasan dan keadaan beliau sekarang.',
 note:'吐き出す berarti mengeluarkan kembali isi mulut. Jangan otomatis menyebut 嘔吐 kalau yang kamu lihat sebenarnya makanan dikeluarkan dari mulut setelah むせ.'
}
];

})();