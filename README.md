# LAB-WEB-06-2026 Repository

Selamat datang di repositori LAB-WEB-06-2026! Repositori ini adalah tempat pengumpulan tugas praktikum untuk mata kuliah Praktikum Pemrograman Web 2026. Berikut adalah panduan singkat untuk mengumpulkan tugas di repositori ini.

## Alur pengumpulan tugas ke repositori ini:

1. **Fork** repositori ini

2. **Clone** repositori hasil **fork** anda

   ```sh

   git clone https://github.com/YOUR_USERNAME/LAB-WEB-06-2026.git

   ```

3. Setelah anda **clone**, masuk ke folder hasil **clone** tersebut lalu buat **branch** dengan nama **NIM** anda

   ```sh

   cd LAB-WEB-06-2026
   git branch NIM_ANDA
   git checkout NIM_ANDA

   ```

4. Setelah anda pindah ke **branch** yang telah anda buat, buat sebuah folder dengan nama **NIM** anda dan masuk ke folder tersebut.
   ```sh

   mkdir NIM_ANDA
   cd NIM_ANDA

   ```


5. Didalam folder tersebut, buat sebuah folder dengan nama **Praktikum-n**, **n** = praktikum keberapa
   ```sh

   mkdir "Praktikum-n"
   cd "Praktikum-n"
   
   CATATAN: n DI SINI ADALAH NOMOR PRAKTIKUM KE BERAPA
   CONTOH: Praktikum-1

   ```

7. Semua _file_ untuk tugas praktikum ke-**n**, disimpan kedalam folder **Praktikum-n**
8. Setiap kali melakukan perubahan, lakukan proses **commit** dengan pesan yang deskriptif

   ```sh
   
   git add . #perintah ini memilih seluruh file sekaligus
   git status untuk mengecek apakah file sudah ter add atau tidak.
   Jika file yang ingin di add sudah berwarna hijau lanjut ke commit.
   Jika file yang ingin di add berwarna merah lakukan add terlebih dahulu
   
   git commit -m "pesan mengenai penambahan atau perubahan apa yang anda lakukan"
   
   ```

8. Setelah asistensi dan tugas anda disetujui, **push** seluruh _file_ jawaban yang telah anda buat

   ```sh

   # pastikan proses commit telah selesai terhadap setiap file
   git push origin NIM_ANDA

   ```
   
9. Masuk ke akun GitHub anda, dan buka repo yang telah anda **fork** dan **clone**. Lihat perubahan yang terjadi pada repo tersebut dan pastikan bahwa tugas yang
   telah anda **push** sesuai dan berada pada repo tersebut.
   
10. Pilih menu **Pull request** dan lakukan **pull request** pada tugas praktikum anda.

## Tips Tambahan

- Pastikan untuk memberi nama yang deskriptif pada pesan commit tugas.
- Gunakan pesan commit yang jelas agar mudah dimengerti olehmu suatu saat nanti. Ingat!
- Terima kasih sudah mengerjakan tugas ygy!

### -- LAB-WEB-06-2026 --
