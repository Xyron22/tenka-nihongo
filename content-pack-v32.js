// Stage 9C-2: original handoffs about preferences and clear communication.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.kaigo)return;
const items=[
{
 id:'h-21',workplacePack:'9C-2',communicationObjective:'consent',
 segments:[
  {text:'山本さんに、更衣の介助について説明しました。',reading:'やまもとさん に、こうい の かいじょ について せつめい しました。',meaning:'Saya menjelaskan kepada Yamamoto-san tentang bantuan berganti pakaian.'},
  {text:'ご本人は「今は手伝わないでください」と話されました。',reading:'ごほんにん は「いま は てつだわないで ください」と はなされました。',meaning:'Beliau mengatakan, “Untuk sekarang, mohon jangan dibantu dulu.”'},
  {text:'介助はまだ始めず、ご希望を確認しています。',reading:'かいじょ は まだ はじめず、ごきぼう を かくにん して います。',meaning:'Bantuan belum dimulai dan keinginan beliau sedang dipastikan.'}
 ],
 question:'Apa yang benar tentang bantuan berganti pakaian dalam operan ini?',
 choices:['Beliau sudah menyatakan setuju untuk langsung dibantu.','Bantuan berganti pakaian sudah selesai.','Beliau belum ingin dibantu sekarang; bantuan belum dimulai dan keinginannya sedang dipastikan.','Beliau sama sekali belum menyampaikan jawaban.'],answer:2
},
{
 id:'h-22',workplacePack:'9C-2',communicationObjective:'preference',
 segments:[
  {text:'飲み物について希望を伺うと、佐藤さんは「温かいお茶がいいです」と話されました。',reading:'のみもの について きぼう を うかがうと、さとうさん は「あたたかい おちゃ が いい です」と はなされました。',meaning:'Saat ditanya keinginannya mengenai minuman, Sato-san mengatakan ingin teh hangat.'},
  {text:'冷たいお茶ではないことも確認しました。',reading:'つめたい おちゃ では ない こと も かくにん しました。',meaning:'Sudah dipastikan juga bahwa yang dimaksud bukan teh dingin.'},
  {text:'まだ提供しておらず、用意できるか担当者に確認しています。',reading:'まだ ていきょう して おらず、ようい できるか たんとうしゃ に かくにん して います。',meaning:'Minuman belum disajikan; sedang dipastikan kepada penanggung jawab apakah dapat disiapkan.'}
 ],
 question:'Bagaimana keinginan Sato-san dan status minumannya?',
 choices:['Beliau ingin teh hangat; belum diberikan dan sedang dicek apakah dapat disiapkan.','Beliau ingin teh dingin dan sudah menerimanya.','Beliau menolak semua minuman.','Teh hangat sudah selesai disajikan.'],answer:0
},
{
 id:'h-23',workplacePack:'9C-2',communicationObjective:'choice-refusal',
 segments:[
  {text:'上着を選ぶ時、田中さんは最初、白い物を希望されました。',reading:'うわぎ を えらぶ とき、たなかさん は さいしょ、しろい もの を きぼう されました。',meaning:'Saat memilih pakaian atas, awalnya Tanaka-san menginginkan yang putih.'},
  {text:'その後、「白い物はやめて、青い方にします」と話されました。',reading:'そのご、「しろい もの は やめて、あおい ほう に します」と はなされました。',meaning:'Setelah itu beliau mengatakan, “Yang putih tidak jadi; saya pilih yang biru.”'},
  {text:'今のご希望は青い上着だと確認しました。',reading:'いま の ごきぼう は あおい うわぎ だと かくにん しました。',meaning:'Sudah dipastikan bahwa pilihan beliau sekarang adalah pakaian atas biru.'}
 ],
 question:'Pakaian atas mana yang menjadi pilihan Tanaka-san sekarang?',
 choices:['Putih, karena itu pilihan pertama.','Putih dan biru sekaligus.','Beliau belum memilih apa pun.','Biru, setelah membatalkan pilihan yang putih.'],answer:3
},
{
 id:'h-24',workplacePack:'9C-2',communicationObjective:'privacy-accompaniment',
 segments:[
  {text:'面会中、鈴木さんから「静かな所で相談したい」と希望がありました。',reading:'めんかいちゅう、すずきさん から「しずかな ところ で そうだん したい」と きぼう が ありました。',meaning:'Saat kunjungan, Suzuki-san menyampaikan ingin berkonsultasi di tempat yang tenang.'},
  {text:'ご本人に確認し、相談室まで付き添いました。',reading:'ごほんにん に かくにん し、そうだんしつ まで つきそいました。',meaning:'Setelah memastikan kepada beliau, saya menemani sampai ruang konsultasi.'},
  {text:'相談の内容は、廊下では話していません。',reading:'そうだん の ないよう は、ろうか では はなして いません。',meaning:'Isi konsultasinya tidak dibicarakan di koridor.'}
 ],
 question:'Apa yang benar-benar dilakukan untuk memenuhi keinginan Suzuki-san?',
 choices:['Isi konsultasi dibicarakan di koridor.','Keinginannya dikonfirmasi, lalu beliau ditemani ke ruang konsultasi.','Beliau ditinggalkan di koridor tanpa konfirmasi.','Seluruh isi konsultasi sudah disampaikan kepada tamu lain.'],answer:1
},
{
 id:'h-25',workplacePack:'9C-2',communicationObjective:'clarify',
 segments:[
  {text:'説明の途中で、高橋さんから「もう少しゆっくり話してください」と言われました。',reading:'せつめい の とちゅう で、たかはしさん から「もう すこし ゆっくり はなして ください」と いわれました。',meaning:'Di tengah penjelasan, Takahashi-san meminta agar saya berbicara sedikit lebih pelan.'},
  {text:'短い文で説明し直し、返事を待ちました。',reading:'みじかい ぶん で せつめい しなおし、へんじ を まちました。',meaning:'Saya menjelaskan ulang dengan kalimat pendek, lalu menunggu jawaban.'},
  {text:'ご本人は「分かりました」と話されました。',reading:'ごほんにん は「わかりました」と はなされました。',meaning:'Beliau mengatakan, “Saya sudah mengerti.”'}
 ],
 question:'Apa permintaan Takahashi-san saat penjelasan berlangsung?',
 choices:['Berbicara lebih keras.','Mengganti seluruh topik pembicaraan.','Berbicara sedikit lebih pelan.','Mengakhiri percakapan tanpa menjawab.'],answer:2
},
{
 id:'h-26',workplacePack:'9C-2',communicationObjective:'confirm',
 segments:[
  {text:'伊藤さんから「面会は午後二時です」と聞きました。',reading:'いとうさん から「めんかい は ごご にじ です」と ききました。',meaning:'Ito-san menyampaikan bahwa waktu kunjungan adalah pukul dua siang.'},
  {text:'「午後三時ですね」と復唱すると、「二時です」と訂正されました。',reading:'「ごご さんじ ですね」と ふくしょう すると、「にじ です」と ていせい されました。',meaning:'Ketika saya mengulang “Pukul tiga sore, ya,” beliau mengoreksi, “Pukul dua.”'},
  {text:'もう一度「午後二時ですね」と確認しました。',reading:'もう いちど「ごご にじ ですね」と かくにん しました。',meaning:'Saya memastikan kembali, “Pukul dua siang, ya.”'}
 ],
 question:'Jam kunjungan mana yang dikonfirmasi setelah koreksi?',
 choices:['14.00 — pukul dua siang.','15.00 — pukul tiga sore.','02.00 — pukul dua dini hari.','03.00 — pukul tiga dini hari.'],answer:0
}
];
D.kaigo.handoff=D.kaigo.handoff||[];
const ids=new Set(D.kaigo.handoff.map(h=>h.id));
for(const h of items){
 h.text=h.segments.map(s=>s.text).join('');h.reading=h.segments.map(s=>s.reading).join('');h.meaning=h.segments.map(s=>s.meaning).join(' ');
 if(!ids.has(h.id)){D.kaigo.handoff.push(h);ids.add(h.id)}
}
})();
