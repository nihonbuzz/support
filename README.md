# 📘 Nihonbuzz Support

Ini adalah repositori dokumentasi pusat bantuan resmi untuk platform [Nihonbuzz Academy](https://academy.nihonbuzz.org). Dokumentasi ini ditujukan untuk membantu pengguna memahami cara kerja platform, fitur-fitur utama, dan solusi terhadap permasalahan umum.

## 🌐 Live Site

Dokumentasi ini dapat diakses secara publik di:
🔗 **[https://support.nihonbuzz.org](https://support.nihonbuzz.org)**

## 📁 Struktur Direktori

```
.
├── docs/                # Konten dokumentasi
├── src/                 # Kustomisasi frontend
│   └── pages/search/    # Override halaman pencarian
├── static/              # File statis (gambar, favicon, dll.)
├── sidebars.js          # Struktur sidebar dokumentasi
├── docusaurus.config.js # Konfigurasi utama situs
└── .env.example         # Contoh file konfigurasi lingkungan
```

## ⚙️ Konfigurasi Lingkungan

Sebelum menjalankan secara lokal atau melakukan deploy, salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Lalu isi variabel berikut sesuai kredensial Algolia Anda:

```ini
ALGOLIA_APP_ID=...
ALGOLIA_API_KEY=...
ALGOLIA_INDEX_NAME=...
```

> **Catatan:** File `.env` telah dimasukkan ke dalam `.gitignore` agar tidak terbawa ke repository publik.

## 🚀 Menjalankan Secara Lokal

Pastikan Anda sudah menginstal Node.js dan `npm`.

1. Instal dependensi:

   ```bash
   npm install
   ```

2. Jalankan server lokal:

   ```bash
   npm run start
   ```

3. Situs akan tersedia di `http://localhost:3000`.

## 📦 Build Produksi

Untuk membangun versi statis siap deploy:

```bash
npm run build
```

Hasilnya akan tersedia di direktori `/build` dan dapat dideploy ke layanan seperti Cloudflare Pages.

## ☁️ Deploy ke Cloudflare Pages

Pastikan:

* Output direktori adalah: `build`
* Komando build: `npm run build`
* Variabel `.env` dikelola melalui dashboard Cloudflare Pages

## 🔍 Fitur Pencarian

Situs ini dilengkapi pencarian langsung yang ditenagai oleh Algolia. Fitur ini memungkinkan pengguna mencari artikel bantuan secara cepat dan relevan.

## 📄 Lisensi

Dokumentasi ini merupakan hak cipta © 2025 Nihonbuzz, Inc. Semua hak dilindungi undang-undang.
