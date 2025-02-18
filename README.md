# M-CHAT-R/F Autism Screening Web App

Website ini adalah alat skrining berbasis web untuk **Modified Checklist for Autism in Toddlers, Revised with Follow-Up (M-CHAT-R/F)**. 
Aplikasi ini memungkinkan orang tua mengisi kuisioner M-CHAT-R secara online dan mendapatkan hasil skoring langsung.

## Fitur Utama
✅ **Form Interaktif**: Pengguna mengisi pertanyaan M-CHAT-R secara online.  
✅ **Skoring Otomatis**: Sistem menghitung skor dan memberikan hasil risiko ASD.  
✅ **Follow-Up (M-CHAT-R/F)**: Jika hasilnya berisiko sedang, sistem akan menampilkan pertanyaan tambahan.  
✅ **Hasil & Rekomendasi**: Menampilkan hasil berdasarkan skor dan memberikan saran tindakan lanjut.  
✅ **Responsive Design**: Bisa diakses dari desktop maupun mobile.  
✅ **Simpan & Cetak Hasil**: Pengguna bisa menyimpan hasil atau mencetaknya.  

---

## Flowchart Web

### 1. Halaman Utama
- User masuk ke halaman utama.
- Disediakan informasi tentang **M-CHAT-R/F**, tujuan skrining, dan cara penggunaannya.
- Tombol **"Mulai Skrining"** untuk memulai pengisian kuisioner.

### 2. Form Skrining (M-CHAT-R)
- Terdiri dari **20 pertanyaan** dengan jawaban **YA/TIDAK**.
- Setelah semua pertanyaan dijawab, sistem akan menghitung skor.

### 3. Hasil Skrining Awal
- Jika **Skor 0-2 (Risiko Rendah)** → Tampilkan pesan: "Tidak perlu tindakan lanjut".
- Jika **Skor 3-7 (Risiko Sedang)** → Lanjut ke **Follow-Up (M-CHAT-R/F)**.
- Jika **Skor 8-20 (Risiko Tinggi)** → Tampilkan pesan: "Segera konsultasi dengan dokter spesialis".

### 4. Follow-Up (M-CHAT-R/F) - Jika Diperlukan
- Jika skor berada di kategori risiko sedang, akan muncul **pertanyaan tambahan** sesuai jawaban yang berisiko.
- Jika setelah Follow-Up, skor **≥2**, rekomendasikan untuk **konsultasi lebih lanjut**.
- Jika skor **0-1**, tidak perlu tindakan lanjut.

### 5. Tampilan Hasil & Rekomendasi
- Tampilkan skor total dan tingkat risiko (rendah, sedang, atau tinggi).
- Berikan saran sesuai hasil (misalnya, "Segera konsultasikan dengan dokter spesialis").
- Tombol **Simpan sebagai PDF** atau **Cetak Hasil**.

---

## Struktur Folder Proyek
```
m-chat-rf-web/
│── public/                # Folder untuk aset statis (gambar, ikon, dll.)
│── src/
│   ├── components/        # Komponen UI (Header, Footer, Form, dll.)
│   ├── pages/
│   │   ├── Home.jsx       # Halaman utama
│   │   ├── Quiz.jsx       # Halaman form M-CHAT-R
│   │   ├── FollowUp.jsx   # Halaman Follow-Up
│   │   ├── Result.jsx     # Halaman hasil & rekomendasi
│   ├── styles/            # CSS atau Tailwind styling
│   ├── utils/             # Fungsi skoring & logika aplikasi
│── .gitignore
│── package.json           # Dependencies & project setup
│── README.md              # Dokumentasi proyek
```

---

## Teknologi yang Digunakan
🟢 **Frontend**: React.js / Next.js (untuk tampilan interaktif).  
🟢 **Styling**: Tailwind CSS / Bootstrap.  
🟢 **Backend (Opsional)**: Node.js + Express (untuk menyimpan data hasil).  
🟢 **Database (Opsional)**: Firebase / MongoDB (jika ingin menyimpan hasil pengguna).  

---

## Cara Menjalankan Proyek
1. **Clone repository**
   ```bash
   git clone https://github.com/username/m-chat-rf-web.git
   cd m-chat-rf-web
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Jalankan aplikasi**
   ```bash
   npm run dev
   ```
4. **Akses di browser**
   ```plaintext
   http://localhost:3000
   ```

---

## Pengembangan Selanjutnya
🔹 **Fitur multi-bahasa (Indonesia & Inggris)**  
🔹 **Penyimpanan hasil untuk analisis lebih lanjut**  
🔹 **Integrasi dengan dokter spesialis**  

