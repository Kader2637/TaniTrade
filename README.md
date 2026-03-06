# 🌾 TaniTrade Digital 

**Bursa Komoditas Digital & Buku Besar Finansial Petani Modern Indonesia**

[![Buka Aplikasi](https://img.shields.io/badge/📱_Buka_Aplikasi_(Web_/_APK)-10B981?style=for-the-badge)](https://tanitrade.netlify.app/)

---

## 🌐 Coba Langsung (Live Demo & APK)

Anda dapat langsung melihat, mencoba, atau menginstal aplikasi ini ke HP Anda (sebagai APK/PWA) melalui tautan resmi berikut:

👉 **[https://tanitrade.netlify.app/](https://tanitrade.netlify.app/)**

---

## 📖 Deskripsi Proyek (About The Project)

**TaniTrade** lahir dari keresahan akan panjangnya rantai pasok pertanian di Indonesia yang seringkali membuat petani mendapatkan harga jual yang sangat rendah, sementara konsumen akhir membayar dengan harga tinggi. 

Aplikasi ini **bukan sekadar *e-commerce* biasa**, melainkan sebuah **Bursa Komoditas Dua Arah** dan **Sistem Akuntansi Pribadi** yang dirancang khusus untuk petani lokal. Dengan TaniTrade, petani tidak lagi harus menunggu tengkulak datang ke ladang. Mereka bisa secara aktif memantau harga pasar global, melacak pabrik atau supermarket terdekat yang sedang membutuhkan pasokan (sistem radar), melakukan negosiasi harga secara *real-time*, hingga mencatat setiap keuntungan dan kerugian (HPP vs Harga Jual) dalam satu buku besar (*ledger*) digital yang rapi.

## 🎯 Permasalahan yang Diselesaikan (The Solutions)

1. **Memotong Rantai Pasok (Supply Chain Cut):** Menghubungkan petani langsung dengan pembeli skala besar (Pabrik, Grosir, Supermarket/B2B) tanpa perantara ganda.
2. **Transparansi Harga:** Memberikan akses data harga bursa komoditas secara *real-time* agar petani memiliki daya tawar yang kuat.
3. **Manajemen Finansial Buta Huruf:** Banyak petani tidak menghitung *Harga Pokok Produksi (HPP)*. Fitur "Profil & Buku Besar" secara otomatis mengkalkulasi apakah panen tersebut profit, rugi, atau sekadar balik modal (BEP).
4. **Kepastian Penjualan (Radar Permintaan):** Petani tahu persis siapa yang butuh barangnya dan berapa jaraknya melalui fitur "Permintaan Pasar".

---

## ✨ Fitur Unggulan (Core Features)

Aplikasi ini dibagi menjadi 6 modul utama yang saling terintegrasi:

1. 🏠 **Dashboard Utama (`index.html`)**
   - Ringkasan aktivitas akun dan status level petani (Contoh: Petani Unggul).
   - Akses cepat ke radar pesanan terdekat dan pantauan pergerakan harga bursa global.
   - Histori transaksi keluar-masuk secara ringkas.

2. 📈 **Bursa Harga (`bursa.html`)**
   - Tampilan pergerakan persentase harga komoditas (Sayuran, Bumbu, Biji-bijian, Buah) secara *real-time*.
   - Aksi cepat untuk mengeksekusi "Jual" atau "Beli" sesuai harga pasar hari ini.

3. 📡 **Permintaan Pasar / Radar Pesanan (`pesanan.html`)**
   - Sistem radar *Live* dengan visualisasi *Masonry Grid* modern.
   - Mendeteksi kebutuhan pabrik dan restoran di sekitar berdasarkan radius Km (Terdapat indikator Urgent, Kontrak, Reguler).
   - Fitur filter kategori dan tombol "Tawarkan Stok" langsung ke pembeli.

4. 📦 **Manajemen Stok (`stok.html`)**
   - Gudang digital untuk mencatat hasil panen dengan status: Siap Jual, Masa Tanam, dan Dalam Proses.
   - Terdapat *Progress bar* visual untuk melihat sisa stok.
   - Analisis otomatis per-item untuk melihat **Modal (HPP)**, kuantitas terjual, dan status **Profit / Rugi**.

5. 🤝 **Ruang Negosiasi (`nego.html`)**
   - Sistem *Chat Room* interaktif antara petani dan pembeli untuk proses tawar-menawar harga.
   - Fitur "Sepakat (Deal)" yang akan mengunci harga kontrak.
   - **Auto-Generate E-Invoice:** Pembuatan Faktur resmi dengan kalkulasi total transaksi, lengkap dengan stempel "LUNAS" dan simulasi unduh PDF.

6. 💼 **Buku Besar Finansial & Profil (`profil.html`)**
   - Dashboard akuntansi (*Ledger*) tingkat *Enterprise*.
   - Menampilkan Total Modal, Total Omzet, dan Laba Bersih (Net Profit).
   - **Data Visualisasi:** Menggunakan *Line Chart* (Tren Keuntungan Bulanan) dan *Doughnut Chart* (Portofolio Komoditas Terjual).
   - **Tabel Interaktif:** Tabel riwayat transaksi lengkap yang bisa diklik untuk memunculkan detail pop-up / struk per transaksi.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Proyek ini dibangun murni menggunakan pendekatan *Front-End* modern tanpa *framework* berat, mengutamakan performa dan desain *glassmorphism*:

* **HTML5** - Struktur *markup* semantik.
* **Tailwind CSS** (via CDN) - *Framework* CSS *utility-first* untuk desain *responsive* dan pembuatan komponen UI kelas premium.
* **Vanilla JavaScript** - Logika DOM, manipulasi pop-up (Modal), kalkulasi *real-time* (seperti perkalian harga & kuantitas), dan simulasi *loading state*.
* **Chart.js** (via CDN) - Library grafik untuk merender data analitik finansial secara interaktif.
* **FontAwesome 6** (via CDN) - Kumpulan ikon vektor.
* **Plus Jakarta Sans** (Google Fonts) - Tipografi modern dengan tingkat keterbacaan tinggi untuk dasbor finansial.

---

## 📂 Struktur File

```text
📁 tanitrade/
├── 📄 index.html      # Halaman Dashboard Utama
├── 📄 bursa.html      # Halaman Pergerakan Harga Pasar
├── 📄 pesanan.html    # Halaman Radar Permintaan (Market Demand)
├── 📄 stok.html       # Halaman Manajemen Inventori & Profit per Item
├── 📄 nego.html       # Halaman Chat Tawar-menawar & Invoice
├── 📄 profil.html     # Halaman Buku Besar Finansial, Grafik, & Edit Akun
├── 📄 README.md       # Dokumentasi Proyek
└── 📁 assets/         # Folder untuk logo dan aset visual
    ├── logo.png
    ├── logoseo.png
    └── banner.png

## 🚀 Cara Menjalankan Proyek (How to Run)

Karena proyek ini berjalan penuh di sisi klien (*client-side*), Anda tidak perlu menginstal Node.js atau *database* apa pun untuk melihat tampilannya secara lokal (Offline):

1. **Clone / Download** *repository* ini ke komputer Anda.
2. Ekstrak folder hasil *download*.
3. Anda bisa langsung klik dua kali pada file `index.html` untuk membukanya di *browser* (Chrome, Safari, Edge, dll).

> **💡 Tips:** Untuk pengalaman *development* terbaik (agar *font* dan animasi CSS ter-*load* sempurna tanpa kendala CORS), disarankan membukanya menggunakan ekstensi **Live Server** di Visual Studio Code.

---

## 📱 Desain Responsif (Mobile-First Approach)

Aplikasi ini menggunakan pendekatan UI/UX adaptif:

* **Tampilan Desktop/Tablet:** Menggunakan navigasi *Sidebar* melayang di sebelah kiri yang luas dan elegan.
* **Tampilan Layar Mobile (HP):** *Sidebar* otomatis disembunyikan dan digantikan dengan **Bottom Navigation Bar** khas aplikasi *native* (iOS/Android), dengan tombol *Floating Action* (Jual) di bagian tengah.

---

**Dibuat dengan ❤️ untuk kemajuan Pertanian Digital Indonesia.** **By AETHER CODE | UNMER**