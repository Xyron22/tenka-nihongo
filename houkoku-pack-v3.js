// Stage 9B-1: original reports about equipment, supplies and work progress.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.kaigo)return;
const items=[
{
 id:'r-13',title:'食札の枚数不足',titleReading:'しょくさつ の まいすう ぶそく',
 workplacePack:'9B-1',topic:'meal-count',examArea:'コミュニケーション技術',
 situation:'Sebelum makan siang, daftar menunjukkan perlu 42 kartu makan. Kamu menghitung dua kali dan hanya menemukan 41 kartu. Belum diketahui kartu siapa yang kurang. Laporkan objek → rencana dan hitungan → yang belum diketahui → permintaan pengecekan.',
 pieces:[
  {text:'昼食の食札についてですが、',reading:'ちゅうしょく の しょくさつ について ですが、',meaning:'Mengenai kartu makan siang,'},
  {text:'予定では42枚ですが、2回数えても41枚しかありません。',reading:'よてい では よんじゅうにまい ですが、にかい かぞえても よんじゅういちまい しか ありません。',meaning:'Seharusnya 42 lembar, tetapi setelah dihitung dua kali pun hanya ada 41 lembar.'},
  {text:'どなたの分が足りないかは、まだ確認できていません。',reading:'どなた の ぶん が たりないか は、まだ かくにん できて いません。',meaning:'Saya belum dapat memastikan kartu siapa yang kurang.'},
  {text:'名簿と照合して、確認をお願いできますか。',reading:'めいぼ と しょうごう して、かくにん を おねがい できますか。',meaning:'Bisakah tolong mencocokkannya dengan daftar nama dan memeriksanya?'}
 ],
 note:'枚（まい）menghitung lembar kartu; 人（にん）menghitung orang. Sebutkan jumlah rencana dan hasil hitung secara terpisah. Kekurangan kartu belum membuktikan ada orang yang tidak tercatat; minta pencocokan tanpa menebak nama atau menyalahkan orang.'
},
{
 id:'r-14',title:'食札の名前の違い',titleReading:'しょくさつ の なまえ の ちがい',
 workplacePack:'9B-1',topic:'meal-identity',examArea:'コミュニケーション技術',
 situation:'Saat mengecek sebelum pembagian, nampan yang disiapkan untuk A-san memiliki kartu dengan nama orang lain. Nampan itu belum diberikan. Laporkan waktu/objek → perbedaan nama → status pemberian → permintaan konfirmasi.',
 pieces:[
  {text:'配膳前に、Aさんのトレーを確認したところ、',reading:'はいぜんまえ に、エーさん の トレー を かくにん した ところ、',meaning:'Saat mengecek nampan untuk A-san sebelum pembagian makan,'},
  {text:'別の方のお名前が書かれた食札が付いていました。',reading:'べつ の かた の おなまえ が かかれた しょくさつ が ついて いました。',meaning:'Ada kartu makan dengan nama orang lain yang terpasang.'},
  {text:'そのトレーは、まだお渡ししていません。',reading:'その トレー は、まだ おわたし して いません。',meaning:'Nampan tersebut belum saya berikan.'},
  {text:'お名前と食事内容の確認をお願いします。',reading:'おなまえ と しょくじないよう の かくにん を おねがいします。',meaning:'Mohon periksa nama dan isi/jenis makanannya.'}
 ],
 note:'Laporkan selisih yang terlihat dan apakah makanan sudah diberikan. Jangan menukar kartu atau menentukan diet sendiri. Nama pada kartu tidak boleh dijadikan bahan percakapan di tempat yang tidak berkepentingan.'
},
{
 id:'r-15',title:'清潔なシーツの不足',titleReading:'せいけつな シーツ の ふそく',
 workplacePack:'9B-1',topic:'linen-stock',examArea:'コミュニケーション技術',
 situation:'Untuk penggantian seprai hari ini perlu 5 lembar. Di rak linen bersih hanya ada 3 lembar. Jangan mengaku sudah memeriksa gudang lain. Laporkan keperluan → stok di tempat yang diperiksa → selisih → permintaan restok.',
 pieces:[
  {text:'今日のシーツ交換では、5枚必要ですが、',reading:'きょう の シーツこうかん では、ごまい ひつよう ですが、',meaning:'Untuk penggantian seprai hari ini diperlukan 5 lembar, tetapi'},
  {text:'リネン室の棚には、清潔なシーツが3枚しかありません。',reading:'リネンしつ の たな には、せいけつな シーツ が さんまい しか ありません。',meaning:'Di rak ruang linen hanya ada 3 lembar seprai bersih.'},
  {text:'あと2枚足りません。',reading:'あと にまい たりません。',meaning:'Masih kurang 2 lembar.'},
  {text:'補充をお願いできますか。',reading:'ほじゅう を おねがい できますか。',meaning:'Bisakah tolong diisi kembali persediaannya?'}
 ],
 note:'しか～ありません menegaskan jumlah yang terbatas; あと2枚足りません menyebut selisihnya. Batasi laporan stok pada lokasi yang benar-benar diperiksa. 清潔（せいけつ）berarti bersih; jangan menganggap linen bekas sebagai pengganti stok bersih.'
},
{
 id:'r-16',title:'車椅子のブレーキ',titleReading:'くるまいす の ブレーキ',
 workplacePack:'9B-1',topic:'wheelchair-fault',examArea:'コミュニケーション技術',
 situation:'Saat pengecekan kursi roda yang kosong di ruang penyimpanan, rem sudah dipasang tetapi roda kanan tetap bergerak. Kursi itu tidak kamu gunakan dan sudah kamu laporkan kepada penanggung jawab. Laporkan lokasi/objek → gejala → status pemakaian dan laporan → permintaan pemeriksaan.',
 pieces:[
  {text:'倉庫の車椅子を確認したところ、',reading:'そうこ の くるまいす を かくにん した ところ、',meaning:'Saat mengecek kursi roda di gudang,'},
  {text:'ブレーキをかけても、右の車輪が動きました。',reading:'ブレーキ を かけても、みぎ の しゃりん が うごきました。',meaning:'Walaupun rem dipasang, roda kanannya bergerak.'},
  {text:'その車椅子は使用せず、担当者に報告しました。',reading:'その くるまいす は しよう せず、たんとうしゃ に ほうこく しました。',meaning:'Kursi roda itu tidak saya gunakan dan sudah saya laporkan kepada penanggung jawab.'},
  {text:'点検をお願いします。',reading:'てんけん を おねがいします。',meaning:'Mohon dilakukan pemeriksaan alat.'}
 ],
 note:'Sebutkan bagian dan gejala yang terlihat, bukan memastikan penyebab kerusakan. 点検 meminta pemeriksaan alat; 状態確認 dapat merujuk kondisi orang atau benda sesuai konteks. Contoh ini tidak mengajarkan perbaikan atau teknik transfer.'
},
{
 id:'r-17',title:'ナースコールの反応',titleReading:'ナースコール の はんのう',
 workplacePack:'9B-1',topic:'call-fault',examArea:'コミュニケーション技術',
 situation:'Saat pengecekan terjadwal di kamar 201 yang sedang kosong, tombol panggil ditekan tetapi lampu indikator yang kamu lihat tidak menyala. Kamu belum tahu penyebabnya dan segera melapor kepada perawat. Laporkan tempat/waktu → hasil pengamatan → ketidakpastian dan laporan → permintaan pengecekan.',
 pieces:[
  {text:'201号室のナースコールを点検した時、',reading:'にひゃくいちごうしつ の ナースコール を てんけん した とき、',meaning:'Saat memeriksa alat panggil perawat di kamar 201,'},
  {text:'ボタンを押しても、表示ランプが点きませんでした。',reading:'ボタン を おしても、ひょうじランプ が つきませんでした。',meaning:'Walaupun tombol ditekan, lampu indikator tidak menyala.'},
  {text:'原因は分からず、すぐに看護師へ報告しました。',reading:'げんいん は わからず、すぐ に かんごし へ ほうこく しました。',meaning:'Penyebabnya belum saya ketahui dan segera saya laporkan kepada perawat.'},
  {text:'確認をお願いします。',reading:'かくにん を おねがいします。',meaning:'Mohon diperiksa.'}
 ],
 note:'Tidak melihat lampu menyala belum membuktikan seluruh sistem rusak. Jelaskan indikator yang benar-benar diamati. Cara pengujian dan sarana panggil pengganti mengikuti ketentuan tempat kerja; contoh ini bukan petunjuk membongkar alat.'
},
{
 id:'r-18',title:'廊下の床の濡れ',titleReading:'ろうか の ゆか の ぬれ',
 workplacePack:'9B-1',topic:'wet-floor',examArea:'コミュニケーション技術',
 situation:'Kamu melihat bagian lantai koridor dekat ruang mandi basah. Kamu tidak melihat siapa yang menumpahkan air. Kamu segera memberi tahu orang yang lewat dan petugas penanggung jawab. Laporkan lokasi/gejala → batas pengetahuan → pemberitahuan → permintaan penanganan.',
 pieces:[
  {text:'浴室の前の廊下で、床が濡れていました。',reading:'よくしつ の まえ の ろうか で、ゆか が ぬれて いました。',meaning:'Di koridor depan ruang mandi, lantainya basah.'},
  {text:'水がこぼれたところは見ていません。',reading:'みず が こぼれた ところ は みて いません。',meaning:'Saya tidak melihat saat airnya tumpah.'},
  {text:'通る方に声をかけ、すぐに担当者へ連絡しました。',reading:'とおる かた に こえ を かけ、すぐ に たんとうしゃ へ れんらく しました。',meaning:'Saya memberi tahu orang yang lewat dan segera menghubungi penanggung jawab.'},
  {text:'清掃と安全の確認をお願いします。',reading:'せいそう と あんぜん の かくにん を おねがいします。',meaning:'Mohon dilakukan pembersihan dan pengecekan keamanan.'}
 ],
 note:'Bedakan 濡れていました (keadaan yang terlihat) dengan こぼしました (seseorang menumpahkan). Jangan menebak pelaku atau penyebab. Pemberitahuan dan pengamanan mengikuti prosedur tempat kerja tanpa menunggu latihan laporan selesai.'
},
{
 id:'r-19',title:'物品の保管場所の確認',titleReading:'ぶっぴん の ほかんばしょ の かくにん',
 workplacePack:'9B-1',topic:'storage-location',examArea:'コミュニケーション技術',
 situation:'Kamu perlu kantong jaring cucian. Kamu sudah memeriksa rak ruang cuci tetapi tidak menemukannya; kamu belum tahu lokasi penyimpanan lain. Laporkan barang → tempat yang sudah dicek → hasil → minta penjelasan lokasi.',
 pieces:[
  {text:'洗濯ネットを探しているのですが、',reading:'せんたくネット を さがして いる の ですが、',meaning:'Saya sedang mencari kantong jaring cucian, tetapi'},
  {text:'洗濯室の棚を確認しても、見つかりませんでした。',reading:'せんたくしつ の たな を かくにん しても、みつかりませんでした。',meaning:'Setelah memeriksa rak ruang cuci pun, saya tidak menemukannya.'},
  {text:'ほかの保管場所は、まだ分かりません。',reading:'ほか の ほかんばしょ は、まだ わかりません。',meaning:'Saya belum tahu tempat penyimpanan yang lain.'},
  {text:'どこにあるか教えていただけますか。',reading:'どこ に あるか おしえて いただけますか。',meaning:'Bisakah memberi tahu saya letaknya?'}
 ],
 note:'見つかりませんでした berarti belum ditemukan dalam pencarian itu; 在庫がありません berarti stok tidak ada. Jangan menyatakan stok habis jika baru memeriksa satu tempat. ～ていただけますか adalah permintaan sopan kepada rekan atau senior.'
},
{
 id:'r-20',title:'補充作業の進み具合',titleReading:'ほじゅうさぎょう の すすみぐあい',
 workplacePack:'9B-1',topic:'work-progress',examArea:'コミュニケーション技術',
 situation:'Penanggung jawab menanyakan tugas restok di ruang linen. Handuk sudah ditambahkan, sarung bantal belum karena jumlahnya masih perlu dicek. Laporkan tugas → yang selesai → yang belum dan alasannya → konfirmasi kelanjutan.',
 pieces:[
  {text:'リネン室の補充についてですが、',reading:'リネンしつ の ほじゅう について ですが、',meaning:'Mengenai pengisian persediaan di ruang linen,'},
  {text:'タオルの補充は終わりました。',reading:'タオル の ほじゅう は おわりました。',meaning:'Pengisian persediaan handuk sudah selesai.'},
  {text:'枕カバーは、枚数の確認がまだ終わっていません。',reading:'まくらカバー は、まいすう の かくにん が まだ おわって いません。',meaning:'Untuk sarung bantal, pengecekan jumlahnya belum selesai.'},
  {text:'確認してから補充する予定ですが、よろしいですか。',reading:'かくにん してから ほじゅう する よてい ですが、よろしい ですか。',meaning:'Rencananya saya akan mengisi persediaan setelah mengeceknya; apakah boleh begitu?'}
 ],
 note:'～は終わりました dan ～はまだ終わっていません memisahkan pekerjaan selesai dan belum selesai. ～する予定です menyatakan rencana, bukan hasil yang sudah dilakukan. Bila tugas tertunda, laporkan statusnya kepada pemberi tugas sesuai kebutuhan.'
}
];
D.kaigo.houkoku=D.kaigo.houkoku||[];
const ids=new Set(D.kaigo.houkoku.map(x=>x.id));
for(const h of items){
 h.reading=h.pieces.map(p=>p.reading).join('');
 h.meaning=h.pieces.map(p=>p.meaning).join(' ');
 if(!ids.has(h.id)){D.kaigo.houkoku.push(h);ids.add(h.id)}
}
})();
