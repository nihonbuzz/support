# Nihonbuzz Support

**Nihonbuzz Support** adalah dokumentasi pusat bantuan resmi untuk pengguna platform Nihonbuzz Academy. Dokumentasi ini membantu pengguna memahami fitur, navigasi, dan pemecahan masalah seputar layanan Academy.

## Fitur

* 📘 Dokumentasi terstruktur dan mudah dinavigasi
* 🔍 Pencarian cepat menggunakan Algolia
* 🌐 Dukungan untuk Bahasa Indonesia
* 💡 Dikonfigurasi untuk pengalaman pengguna yang optimal di berbagai perangkat

## Struktur Dokumentasi

Dokumentasi disusun dalam beberapa kategori utama:

* **Mulai** – Penjelasan dasar mengenai Nihonbuzz Academy
* **Belajar** – Panduan mengikuti kursus
* **Marketplace** – Informasi pembelian dan transaksi
* **Komunitas** – Fitur sosial dan forum diskusi
* **Akun** – Pengelolaan profil pengguna
* **Instruktur** – Panduan untuk mentor dan pembuat kursus

## Teknologi

Dokumentasi ini dibangun menggunakan [Docusaurus](https://docusaurus.io), dan dihosting melalui beberapa platform berikut:

* [Cloudflare Pages](https://pages.cloudflare.com)
* [Netlify](https://netlify.com)
* [Vercel](https://vercel.com)

## Kontribusi

Kami menyambut kontribusi dari siapa pun. Jika ingin memperbarui konten atau melaporkan kesalahan:

1. Fork repositori ini
2. Buat branch baru: `git checkout -b update-panduan`
3. Lakukan perubahan dan commit
4. Kirim pull request

## Jalankan Secara Lokal

```bash
# Install dependensi
npm install

# Jalankan dalam mode development
npm run start
```

## Deploy

Sebelum melakukan deploy ke production:

1. Pastikan file `.env` **tidak** dikomit
2. Sesuaikan nilai variabel Algolia dalam `.env`

### Contoh `.env`

```
ALGOLIA_API_KEY=your_algolia_api_key
ALGOLIA_APP_ID=your_algolia_app_id
ALGOLIA_INDEX_NAME=your_algolia_index_name
```

## Lisensi

Dokumentasi ini dilindungi oleh lisensi [MIT](LICENSE).
