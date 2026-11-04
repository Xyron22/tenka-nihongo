// Stage 10A-18: original N4 necessity/cost frames and verified prerequisite reconciliation.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-148",
    "title": "が必要／必要がある",
    "meaning": "memerlukan sesuatu; perlu melakukan tindakan",
    "pattern": "N + が必要（だ・です）；V kamus + 必要がある",
    "explanation": "必要 dapat menyatakan sesuatu diperlukan. Nが必要 menyebut benda atau hal yang diperlukan, sedangkan Vる必要がある menyebut tindakan yang perlu dilakukan. Perbedaan susunan ini membantu menghindari campuran nomina dan verba.",
    "usage": "Menyebut tiket yang dibutuhkan atau perlunya mendaftar. Ini menyatakan kebutuhan menurut konteks; tidak otomatis berarti kewajiban hukum atau perintah dari pihak tertentu.",
    "whenToUse": "Gunakan 切符が必要です atau 予約する必要があります. Bentuk negatif 必要がありません berarti tidak perlu, bukan dilarang. Nomina yang diterangkan dapat memakai 必要な物.",
    "watchOut": "Bedakan 予約が必要 dengan 予約する必要がある. Keduanya dapat berkaitan, tetapi struktur yang pertama menyebut nomina reservasi, sedangkan yang kedua menyebut tindakan melakukan reservasi.",
    "commonMistake": "予約するが必要です salah pada pola dasar ini. Gunakan 予約する必要があります atau 予約が必要です. 必要がない tidak sama dengan してはいけない.",
    "example": "このコンサートでは、切符が必要です。",
    "exampleReading": "この コンサート では、きっぷ が ひつよう です。",
    "exampleMeaning": "Untuk konser ini, diperlukan tiket.",
    "extraExample": "この教室は、前の日に予約する必要があります。",
    "extraExampleReading": "この きょうしつ は、まえ の ひ に よやく する ひつよう が あります。",
    "extraExampleMeaning": "Untuk kelas ini, perlu melakukan reservasi pada hari sebelumnya.",
    "contrast": "切符が必要 menyebut benda yang diperlukan. 予約する必要がある menyebut tindakan yang perlu. 予約する必要がない berarti tidak perlu memesan; 予約してはいけない berarti dilarang memesan.",
    "quiz": {
      "prompt": "「予約する必要はありません」は、どんな意味ですか。",
      "reading": "「よやく する ひつよう は ありません」は、どんな いみ です か。",
      "context": "Baca negasi kebutuhan, bukan larangan. は memberi fokus pada kebutuhan reservasi.",
      "choices": [
        "tidak perlu melakukan reservasi",
        "dilarang melakukan reservasi dalam semua keadaan",
        "harus selalu memesan dua kali",
        "reservasi sudah pasti dibatalkan kemarin"
      ],
      "answer": 0,
      "explanation": "必要はありません menyatakan tidak ada kebutuhan untuk melakukan reservasi. Ini tidak sama dengan 予約してはいけません yang melarang."
    }
  },
  {
    "id": "n4-g-149",
    "title": "かかる／する（費用）",
    "meaning": "memerlukan biaya; berharga sejumlah uang",
    "pattern": "kegiatanに／には + jumlah biaya + かかる；bendaは + harga + する",
    "explanation": "かかる menyebut biaya yang diperlukan untuk kegiatan atau penyelesaian sesuatu. する dapat menyebut harga suatu benda. Fungsi biaya ini berbeda dari する sebagai melakukan dan melengkapi pemakaian waktu かかる yang sudah dikenal.",
    "usage": "Menyebut biaya perbaikan dan harga barang. Tidak perlu menambahkan を pada jumlah harga ketika memakai 五千円する. Waktu juga dapat memakai かかる, misalnya 二十分かかる. する juga dapat menonjolkan nilai yang dirasa cukup tinggi menurut konteks, tanpa menjadikan semua pemakaiannya berarti mahal.",
    "whenToUse": "Gunakan 修理に三千円かかる atau このかばんは五千円する. いくらかかりますか menanyakan biaya yang diperlukan, sedangkan いくらしますか dapat menanyakan harga barang.",
    "watchOut": "Biaya yang diperlukan dan harga barang merupakan sudut pemakaian berbeda. する tidak dapat menggantikan かかる pada setiap durasi: 二十分かかる berarti perlu dua puluh menit.",
    "commonMistake": "このかばんは五千円をします salah untuk menyebut harga dasar. Gunakan 五千円します. Untuk waktu tempuh gunakan 駅まで二十分かかります, bukan 二十分します sebagai padanan umum.",
    "example": "この時計の修理には、三千円かかります。",
    "exampleReading": "この とけい の しゅうり には、さんぜんえん かかります。",
    "exampleMeaning": "Perbaikan jam ini memerlukan biaya tiga ribu yen.",
    "extraExample": "このかばんは、五千円します。",
    "extraExampleReading": "この かばん は、ごせんえん します。",
    "extraExampleMeaning": "Tas ini berharga lima ribu yen.",
    "contrast": "駅まで二十分かかる menyebut waktu yang diperlukan; 修理に三千円かかる menyebut biaya kegiatan. かばんは五千円する menyebut harga barang. 勉強をする memakai する sebagai melakukan.",
    "quiz": {
      "prompt": "「このかばんは、五千円します」は、何を表しますか。",
      "reading": "「この かばん は、ごせんえん します」は、なに を あらわします か。",
      "context": "Baca する sesudah jumlah uang pada deskripsi barang.",
      "choices": [
        "harga tasnya lima ribu yen",
        "tas itu sedang mengerjakan lima ribu tugas",
        "memerlukan lima ribu menit berjalan kaki",
        "pembicara harus memakai lima tas"
      ],
      "answer": 0,
      "explanation": "数量 uang + する di sini menyatakan harga tas. Ini bukan melakukan pekerjaan atau menyebut durasi."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
