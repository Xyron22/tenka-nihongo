(()=> {
'use strict';
const D=window.TENKA_DATA;if(!D||!D.kaigo)return;

const items=[
{
 id:'r-05',
 title:'嘔吐',
 titleReading:'おうと',
 examArea:'コミュニケーション技術',
 situation:'E-san muntah satu kali setelah makan siang. Makanan yang dimakan keluar, dan sampai saat ini belum muntah lagi.',
 pieces:[
  {text:'Eさんですが、',reading:'イーさん ですが、',meaning:'Mengenai E-san,'},
  {text:'昼食後に1回嘔吐がありました。',reading:'ちゅうしょくご に いっかい おうと が ありました。',meaning:'Setelah makan siang terjadi muntah satu kali.'},
  {text:'食べた物が出ており、その後は今のところ嘔吐していません。',reading:'たべた もの が でて おり、そのご は いま の ところ おうと して いません。',meaning:'Makanan yang dimakan keluar, dan setelah itu sampai saat ini belum muntah lagi.'},
  {text:'顔色とご様子を確認しています。',reading:'かおいろ と ごようす を かくにん して います。',meaning:'Saya sedang memeriksa warna wajah dan kondisi beliau.'},
  {text:'状態の確認をお願いします。',reading:'じょうたい の かくにん を おねがいします。',meaning:'Mohon periksa kondisinya.'}
 ],
 reading:'イーさん ですが、ちゅうしょくご に いっかい おうと が ありました。たべた もの が でて おり、そのご は いま の ところ おうと して いません。かおいろ と ごようす を かくにん して います。じょうたい の かくにん を おねがいします。',
 meaning:'Mengenai E-san, setelah makan siang terjadi muntah satu kali. Makanan yang dimakan keluar, dan sampai saat ini belum muntah lagi. Saya sedang memeriksa warna wajah dan kondisinya. Mohon periksa kondisinya.',
 note:'Laporkan jumlah kejadian, waktu, apa yang benar-benar terlihat, dan kondisi setelahnya. Jangan menambahkan penyebab yang belum diketahui.'
},
{
 id:'r-06',
 title:'下痢便',
 titleReading:'げりべん',
 examArea:'コミュニケーション技術',
 situation:'F-san BAB cair dua kali hari ini. Kamu tidak melihat darah, dan asupan minumnya lebih sedikit daripada biasanya.',
 pieces:[
  {text:'Fさんですが、',reading:'エフさん ですが、',meaning:'Mengenai F-san,'},
  {text:'本日、水様便が2回ありました。',reading:'ほんじつ、すいようべん が にかい ありました。',meaning:'Hari ini ada BAB cair dua kali.'},
  {text:'便に血液は見られませんでした。',reading:'べん に けつえき は みられませんでした。',meaning:'Tidak terlihat darah pada feses.'},
  {text:'水分摂取量は普段より少なめです。',reading:'すいぶんせっしゅりょう は ふだん より すくなめ です。',meaning:'Asupan cairan lebih sedikit daripada biasanya.'},
  {text:'ご様子の確認をお願いします。',reading:'ごようす の かくにん を おねがいします。',meaning:'Mohon periksa kondisinya.'}
 ],
 reading:'エフさん ですが、ほんじつ、すいようべん が にかい ありました。べん に けつえき は みられませんでした。すいぶんせっしゅりょう は ふだん より すくなめ です。ごようす の かくにん を おねがいします。',
 meaning:'Mengenai F-san, hari ini ada BAB cair dua kali. Tidak terlihat darah pada feses. Asupan cairan lebih sedikit daripada biasanya. Mohon periksa kondisinya.',
 note:'Untuk BAB, jumlah/frekuensi, bentuk, warna, darah yang terlihat, dan perubahan asupan adalah informasi yang berguna bila benar-benar diamati.'
},
{
 id:'r-07',
 title:'排尿・尿量の減少',
 titleReading:'はいにょう・にょうりょう の げんしょう',
 examArea:'コミュニケーション技術',
 situation:'Sejak pagi G-san baru BAK satu kali, sekitar 100 mL. Beliau tidak mengeluh nyeri saat BAK.',
 pieces:[
  {text:'Gさんですが、',reading:'ジーさん ですが、',meaning:'Mengenai G-san,'},
  {text:'朝から排尿は1回で、尿量は約100ミリリットルでした。',reading:'あさ から はいにょう は いっかい で、にょうりょう は やく ひゃくミリリットル でした。',meaning:'Sejak pagi BAK satu kali, dengan volume sekitar 100 mL.'},
  {text:'排尿時の痛みの訴えはありません。',reading:'はいにょうじ の いたみ の うったえ は ありません。',meaning:'Tidak ada keluhan nyeri saat BAK.'},
  {text:'水分摂取量も確認しています。',reading:'すいぶんせっしゅりょう も かくにん して います。',meaning:'Saya juga sedang memeriksa jumlah asupan cairan.'},
  {text:'状態の確認をお願いします。',reading:'じょうたい の かくにん を おねがいします。',meaning:'Mohon periksa kondisinya.'}
 ],
 reading:'ジーさん ですが、あさ から はいにょう は いっかい で、にょうりょう は やく ひゃくミリリットル でした。はいにょうじ の いたみ の うったえ は ありません。すいぶんせっしゅりょう も かくにん して います。じょうたい の かくにん を おねがいします。',
 meaning:'Mengenai G-san, sejak pagi BAK satu kali dengan volume sekitar 100 mL. Tidak ada keluhan nyeri saat BAK. Saya juga sedang memeriksa asupan cairannya. Mohon periksa kondisinya.',
 note:'Kalau volume memang diukur, sampaikan angkanya. Kalau tidak diukur, jangan membuat angka perkiraan.'
},
{
 id:'r-08',
 title:'呼吸苦・SpO₂低下',
 titleReading:'こきゅうく・エスピーオーツー ていか',
 examArea:'コミュニケーション技術',
 situation:'H-san mengatakan sesak. SpO₂ yang kamu ukur 91%, dan napasnya tampak lebih cepat daripada biasanya.',
 pieces:[
  {text:'Hさんですが、',reading:'エイチさん ですが、',meaning:'Mengenai H-san,'},
  {text:'先ほど「息苦しい」と話されました。',reading:'さきほど「いきぐるしい」 と はなされました。',meaning:'Tadi beliau mengatakan, “Saya sesak.”'},
  {text:'SpO₂は91パーセントでした。',reading:'エスピーオーツー は きゅうじゅういちパーセント でした。',meaning:'SpO₂ adalah 91%.'},
  {text:'呼吸がいつもより速く見えます。',reading:'こきゅう が いつも より はやく みえます。',meaning:'Napasnya tampak lebih cepat daripada biasanya.'},
  {text:'すぐに状態の確認をお願いします。',reading:'すぐ に じょうたい の かくにん を おねがいします。',meaning:'Mohon segera periksa kondisinya.'}
 ],
 reading:'エイチさん ですが、さきほど「いきぐるしい」 と はなされました。エスピーオーツー は きゅうじゅういちパーセント でした。こきゅう が いつも より はやく みえます。すぐ に じょうたい の かくにん を おねがいします。',
 meaning:'Mengenai H-san, tadi beliau mengatakan sesak. SpO₂ 91%, dan napasnya tampak lebih cepat daripada biasanya. Mohon segera periksa kondisinya.',
 note:'Perubahan napas dan SpO₂ perlu dilaporkan segera. Sampaikan angka dan gejala yang kamu lihat/dengar, lalu minta pemeriksaan sesuai prosedur tempat kerja.'
},
{
 id:'r-09',
 title:'移乗後の痛み',
 titleReading:'いじょうご の いたみ',
 examArea:'コミュニケーション技術',
 situation:'Setelah transfer ke kursi roda, I-san mengatakan pinggang kanan sakit. Kamu tidak melihat beliau jatuh atau terbentur.',
 pieces:[
  {text:'Iさんですが、',reading:'アイさん ですが、',meaning:'Mengenai I-san,'},
  {text:'車椅子への移乗後に、右の腰が痛いと話されました。',reading:'くるまいす への いじょうご に、みぎ の こし が いたい と はなされました。',meaning:'Setelah transfer ke kursi roda, beliau mengatakan pinggang kanan sakit.'},
  {text:'転倒したり、ぶつけたりしたところは見ていません。',reading:'てんとう したり、ぶつけたり した ところ は みて いません。',meaning:'Saya tidak melihat beliau jatuh atau terbentur.'},
  {text:'現在は座位を保てています。',reading:'げんざい は ざい を たもてて います。',meaning:'Saat ini beliau masih dapat mempertahankan posisi duduk.'},
  {text:'痛みの状態を確認していただけますか。',reading:'いたみ の じょうたい を かくにん して いただけますか。',meaning:'Bisakah tolong periksa kondisi nyerinya?'}
 ],
 reading:'アイさん ですが、くるまいす への いじょうご に、みぎ の こし が いたい と はなされました。てんとう したり、ぶつけたり した ところ は みて いません。げんざい は ざい を たもてて います。いたみ の じょうたい を かくにん して いただけますか。',
 meaning:'Mengenai I-san, setelah transfer ke kursi roda beliau mengatakan pinggang kanan sakit. Saya tidak melihat beliau jatuh atau terbentur. Saat ini beliau masih dapat mempertahankan posisi duduk. Bisakah tolong periksa kondisi nyerinya?',
 note:'Bedakan ucapan pasien dengan fakta yang kamu saksikan. Jangan menyimpulkan penyebab nyeri kalau kamu tidak melihat kejadiannya.'
},
{
 id:'r-10',
 title:'皮膚の発赤',
 titleReading:'ひふ の ほっせき',
 examArea:'コミュニケーション技術',
 situation:'Saat mengganti popok J-san, kamu melihat kemerahan di daerah sakrum. Tidak ada perdarahan.',
 pieces:[
  {text:'Jさんですが、',reading:'ジェーさん ですが、',meaning:'Mengenai J-san,'},
  {text:'おむつ交換時に、仙骨部に赤みが見られました。',reading:'おむつこうかんじ に、せんこつぶ に あかみ が みられました。',meaning:'Saat mengganti popok, terlihat kemerahan di daerah sakrum.'},
  {text:'出血はありませんでした。',reading:'しゅっけつ は ありませんでした。',meaning:'Tidak ada perdarahan.'},
  {text:'皮膚の状態の確認をお願いします。',reading:'ひふ の じょうたい の かくにん を おねがいします。',meaning:'Mohon periksa kondisi kulitnya.'}
 ],
 reading:'ジェーさん ですが、おむつこうかんじ に、せんこつぶ に あかみ が みられました。しゅっけつ は ありませんでした。ひふ の じょうたい の かくにん を おねがいします。',
 meaning:'Mengenai J-san, saat mengganti popok terlihat kemerahan di daerah sakrum. Tidak ada perdarahan. Mohon periksa kondisi kulitnya.',
 note:'Laporkan lokasi dan kondisi kulit yang terlihat. Hindari langsung memberi diagnosis luka tekan bila belum dinilai.'
},
{
 id:'r-11',
 title:'食事・水分摂取量の低下',
 titleReading:'しょくじ・すいぶん せっしゅりょう の ていか',
 examArea:'コミュニケーション技術',
 situation:'K-san hanya menghabiskan sekitar 20% makan siang dan minum sekitar 100 mL. Tidak ada keluhan mual.',
 pieces:[
  {text:'Kさんですが、',reading:'ケーさん ですが、',meaning:'Mengenai K-san,'},
  {text:'昼食摂取量は2割程度でした。',reading:'ちゅうしょくせっしゅりょう は にわり ていど でした。',meaning:'Asupan makan siang sekitar 20%.'},
  {text:'水分摂取量は約100ミリリットルでした。',reading:'すいぶんせっしゅりょう は やく ひゃくミリリットル でした。',meaning:'Asupan cairan sekitar 100 mL.'},
  {text:'吐き気の訴えはありません。',reading:'はきけ の うったえ は ありません。',meaning:'Tidak ada keluhan mual.'},
  {text:'ご様子の確認をお願いします。',reading:'ごようす の かくにん を おねがいします。',meaning:'Mohon periksa kondisinya.'}
 ],
 reading:'ケーさん ですが、ちゅうしょくせっしゅりょう は にわり ていど でした。すいぶんせっしゅりょう は やく ひゃくミリリットル でした。はきけ の うったえ は ありません。ごようす の かくにん を おねがいします。',
 meaning:'Mengenai K-san, asupan makan siang sekitar 20% dan cairan sekitar 100 mL. Tidak ada keluhan mual. Mohon periksa kondisinya.',
 note:'Untuk asupan, angka atau persentase yang benar-benar tercatat lebih berguna daripada kata seperti “sedikit” tanpa ukuran.'
},
{
 id:'r-12',
 title:'呼びかけへの反応低下',
 titleReading:'よびかけ への はんのう ていか',
 examArea:'コミュニケーション技術',
 situation:'L-san tampak lebih sulit merespons daripada biasanya. Beliau lama menutup mata, tetapi membuka mata saat dipanggil.',
 pieces:[
  {text:'Lさんですが、',reading:'エルさん ですが、',meaning:'Mengenai L-san,'},
  {text:'先ほどから、いつもより呼びかけへの反応が弱いです。',reading:'さきほど から、いつも より よびかけ への はんのう が よわい です。',meaning:'Sejak tadi, respons terhadap panggilan lebih lemah daripada biasanya.'},
  {text:'目を閉じている時間が長くなっています。',reading:'め を とじて いる じかん が ながく なって います。',meaning:'Waktu beliau menutup mata menjadi lebih lama.'},
  {text:'声をかけると目を開けます。',reading:'こえ を かける と め を あけます。',meaning:'Saat dipanggil, beliau membuka mata.'},
  {text:'すぐに状態の確認をお願いします。',reading:'すぐ に じょうたい の かくにん を おねがいします。',meaning:'Mohon segera periksa kondisinya.'}
 ],
 reading:'エルさん ですが、さきほど から、いつも より よびかけ への はんのう が よわい です。め を とじて いる じかん が ながく なって います。こえ を かける と め を あけます。すぐ に じょうたい の かくにん を おねがいします。',
 meaning:'Mengenai L-san, sejak tadi respons terhadap panggilan lebih lemah daripada biasanya. Waktu menutup mata lebih lama, tetapi beliau membuka mata saat dipanggil. Mohon segera periksa kondisinya.',
 note:'Perubahan respons dibanding kondisi biasanya penting untuk segera dilaporkan. Jelaskan respons yang benar-benar kamu lihat, bukan menebak diagnosis.'
}
];

function pushUnique(target,items){
 const ids=new Set(target.map(x=>x.id));
 items.forEach(item=>{if(!ids.has(item.id)){target.push(item);ids.add(item.id)}});
}
D.kaigo.houkoku=D.kaigo.houkoku||[];
pushUnique(D.kaigo.houkoku,items);
})();