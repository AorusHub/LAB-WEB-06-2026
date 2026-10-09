//  DATA 
const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] },
    { nama: "Aidil", nilaiTugas: [101, 101, 101] }
];

//  1. VERIFIKASI ASISTEN 
const konfirmasi = prompt("Masukkan Nama Anda:");

if (konfirmasi && konfirmasi.toLowerCase() === "aidil") {
    alert("Selamat Datang Aidil");
    tampilkanLaporan();
} else {
    alert("Nama Anda Tidak Terdaftar");
    document.write("<h1 class='p-10 text-center text-2xl font-bold text-red-600'> Akses Ditolak </h1>");
}

// 2. FUNGSI HITUNG RATA-RATA W
function hitungRataRata(nilaiTugas) {
    let total = 0;
    for (let i = 0; i < nilaiTugas.length; i++) {
        total = total + nilaiTugas[i];
    }
    return total / nilaiTugas.length;
}

// 3. FUNGSI TENTUKAN STATUS (batas lulus 75)
function tentukanStatus(rataRata) {
    if (rataRata > 100  || rataRata < 0) {
        return "Eror";
    }else if (rataRata >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

//  4. PROSES DATA, RENDER, DAN CONSOLE 
function tampilkanLaporan() {
    const hasilAkhir = [];

    // Judul halaman
    document.write(`
        <div class="bg-blue-700 p-8 text-center text-white">
            <h1 class="text-3xl font-bold"> Sistem Laporan Praktikum </h1>
            <p> Evaluasi kelulusan berbasis JavaScript murni </p>
        </div>
        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-6 md:grid-cols-3">
    `);

    // Proses tiap praktikan, lalu tampilkan sebagai kartu
    for (let i = 0; i < dataPraktikan.length; i++) {
        const praktikan = dataPraktikan[i];
        const rataRata = hitungRataRata(praktikan.nilaiTugas);
        const status = tentukanStatus(rataRata);

        // Warna berubah sesuai status
        let warna = "bg-red-100 text-red-700";
        if (status === "Lulus") {
            warna = "bg-green-100 text-green-700";
        }

        // Simpan hasil untuk console.log
        hasilAkhir.push({
            nama: praktikan.nama,
            nilaiTugas: praktikan.nilaiTugas,
            rataRata: rataRata,
            status: status
        });

        // Tampilkan kartu
        document.write(`
            <div class="rounded-xl bg-white p-6 shadow">
                <h2 class="text-xl font-bold">${praktikan.nama}</h2>
                <p>Tugas 1: ${praktikan.nilaiTugas[0]}</p>
                <p>Tugas 2: ${praktikan.nilaiTugas[1]}</p>
                <p>Tugas 3: ${praktikan.nilaiTugas[2]}</p>
                <p class="mt-2 font-semibold">Rata-Rata: ${rataRata.toFixed(2)}</p>
                <span class="mt-3 inline-block rounded-full px-4 py-1 font-semibold ${warna}">${status}</span>
            </div>
        `);
    }

    document.write("</div>");

    // Tampilkan hasil akhir ke konsol
    console.log(hasilAkhir);
}
