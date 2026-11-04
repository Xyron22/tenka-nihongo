# TENKA 日本語 🇯🇵

**TENKA** adalah PWA belajar bahasa Jepang yang dibuat untuk pembelajaran mandiri: JLPT N5–N1, flashcard, bunpou, quiz 30 detik, listening, SRS, kakijun, dan kosakata Kaigo/keperawatan termasuk latihan 申し送り.

> 今日も少しずつ。 — Sedikit demi sedikit setiap hari.

## Status

Kurikulum **N5 CLOSED** pada branch `stage-8a1-n5-kanji`: Bunpou, Kotoba, Kanji/Bushu dan alur latihan telah melewati audit coverage serta regresi. PR #16 tetap **draft**; perubahan ini belum di-merge atau di-deploy ke situs publik. Level lain dan Kaigo berkembang secara terpisah.

Rincian scope, sumber, hasil audit dan batas rilis ada di [laporan N5 CLOSED](docs/N5_CLOSED.md) dan [checkpoint bertahap](docs/N5_CHECKPOINTS.md). Penutupan kurikulum tidak mengubah progres belajar pengguna. Inventaris materi mengikuti audit silang rujukan; jumlahnya tidak dinyatakan sebagai daftar resmi JLPT.

Target aktif sekarang **N4 CLOSED lalu N3 CLOSED**; N2 dan N1 ditunda. [Roadmap proyek](docs/PROJECT_ROADMAP.md) mencatat urutan, standar materi dan batas penutupan. N4/N3 pada baseline masih berupa sampel awal dan tetap OPEN sampai coverage serta latihannya benar-benar diaudit.

N4 Stage 10A-7 kini memiliki **55 materi Bunpou** dengan panduan lengkap dan soal berkonteks, mencakup tindakan, kemampuan/rencana, dugaan, pertanyaan/permintaan, waktu, serta hubungan antarklausa. [Checkpoint dan ledger N4](docs/N4_CHECKPOINTS.md) tetap OPEN; materi jembatan N5 dicatat terpisah dari tujuan N4 baru.

Kaigo kini memiliki **152 kartu kosakata**: 68 kartu lama dengan contoh berkana lengkap, 72 istilah ruangan/fasilitas/peralatan/persediaan kerja, serta 12 istilah komunikasi dan pilihan pribadi. Audio menggunakan bacaan kana yang disiapkan; quiz tertulis/listening menyediakan konteks dan pembahasan. Latihan 報告 kini memuat 20 model untuk susun kalimat/tulis sendiri, dan 申し送り memuat 26 kasus (77 kalimat) dengan soal pemahaman. Rincian dan rujukan ada di [checkpoint Kaigo](docs/KAIGO_CHECKPOINTS.md). Milestone ini mencakup ruangan/peralatan dan komunikasi dasar; [cakupan unit komunikasi](docs/kaigo-communication-coverage.json) dicatat per tujuan belajar. Keseluruhan kurikulum Kaigo belum dinyatakan selesai.

Unit bahasa kerja terpilih mencapai **[KAIGO BASIC CLOSED](docs/KAIGO_BASIC_CLOSED.md)** dengan 14 tujuan yang dipetakan dan gate regresi. Jalur **[介護福祉士国家試験](docs/KOKUSHI_TRACK.md)** direncanakan terpisah, termasuk pendamping dua buku yang diberikan dan soal latihan asli dengan pembahasan Indonesia.

## Fitur yang sudah ada

- JLPT N5, N4, N3, N2, N1 terpisah
- Flashcard kanji dan kosakata dengan animasi flip
- Bacaan kana, arti Indonesia, dan contoh kalimat; romaji pada kartu yang menyediakannya
- Bunpou N5 dengan fungsi, kapan dipakai, kesalahan umum, dua contoh, dan contrast
- Quiz pilihan ganda dengan timer 30 detik
- Listening kosakata N5 dan Kaigo dengan bacaan serta konteks kana
- Pembahasan jawaban, contoh dan penjelasan setelah quiz N5/Kaigo
- Sound effect jawaban + voice Jepang untuk awal/akhir sesi
- Progress lokal, streak, best score, dan jumlah quiz
- SRS dasar / review card
- Daily Mission
- Kaigo・Keperawatan tanpa level JLPT
- Kosakata medis & latihan 申し送り
- Daftar kasus Kaigo untuk memilih materi dan membuka kembali latihan yang sudah selesai
- Pembahasan operan Kaigo dengan alasan jawaban dan kalimat bukti Jepang, kana, serta Indonesia
- Perbandingan urutan laporan yang belum sesuai dengan model, kana, arti, dan audio tanpa otomatis menandai penguasaan
- Revisi tulisan laporan setelah membandingkan model, dengan draf tetap tersedia selama sesi aktif
- Pengucapan kana untuk nama, fungsi, dan contoh 13 kartu alat bergambar, termasuk flashcard/review
- Pembahasan quiz alat bergambar dengan kana, fungsi, contoh, dan catatan pemakaian setelah sesi selesai
- Bushu, komponen visual dan mnemonic sebagai alat bantu ingatan
- Kakijun N5 dari KanjiVG terverifikasi serta canvas latihan menulis
- PWA / Add to Home Screen di iPhone

## Target perangkat

TENKA menggunakan aplikasi web/PWA yang sama untuk HP dan PC/laptop. Dukungan layar desktop, mouse, navigasi tombol dengan keyboard, dan pengetikan laporan masuk [kriteria versi awal](docs/V1_ACCEPTANCE.md). Audit browser mencakup lebar 320/390/720 serta 1280/1440 piksel.

Progres saat ini lokal per browser/perangkat. Jalur pemindahan progres HP ke laptop masih menjadi kebutuhan terbuka sebelum kelanjutan lintas perangkat dinyatakan siap.

## Menjalankan secara lokal

Aplikasi perlu HTTP(S). Jalankan dari folder project:

```bash
python3 -m http.server 8080
```

Kemudian buka `http://localhost:8080`.

## iPhone

Setelah aplikasi di-host melalui HTTPS:

1. Buka TENKA di Safari.
2. Tekan **Share**.
3. Pilih **Add to Home Screen**.
4. TENKA dapat dibuka sebagai aplikasi standalone.

## Penyimpanan progres

Progres memakai `localStorage` (`tenka-progress`), jadi belum perlu akun maupun server. Progres tetap berada di perangkat/browser tempat belajar.

## Struktur konten

Data dasar ada di `data.js`, dilengkapi content pack yang dimuat berurutan oleh `index.html`. Coverage N5 dan sumber Kanji ada di `docs/`. ID materi lama dipertahankan agar progres tetap terbaca.

## Kakijun

Seluruh Kanji N5 memakai goresan berurutan KanjiVG dan metadata Bushu/jumlah goresan KANJIDIC2. Lihat [sumber dan lisensi](docs/N5_KANJI_SOURCES.md). Canvas untuk latihan bebas dan tidak menilai kebenaran tulisan.

## Audio

Pengucapan materi memakai speech synthesis perangkat. SFX quiz dan VOICEVOX Nemo untuk awal/akhir sesi disiapkan oleh pipeline build; sistem audio memiliki fallback runtime.

## Pemeriksaan

Jalankan `bash scripts/check-local.sh` untuk syntax dan seluruh regresi. Tes mengikuti manifest runtime terkini, memeriksa kualitas konten/coverage, semua target quiz N5, sesi dan progres lama. CI juga memvalidasi aset/build. Browser QA opsional tersedia di `tests/n5-browser-smoke.cjs` dan `tests/kaigo-browser-smoke.cjs`; petunjuknya ada di laporan N5 CLOSED dan checkpoint Kaigo.
