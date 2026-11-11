const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [110, 110, 110] }
];

const batasLulus = 75;

const namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");

if (namaAsisten === null || namaAsisten.trim() === "" || namaAsisten != "Chris") {
    document.write(
        "<h1>Akses Ditolak</h1>" +
        "<p style='text-align:center;'>Nama wajib diisi untuk melihat laporan praktikum.</p>"
    );
} else {
    function hitungRataRata(nilai) {
        let total = 0;

        for (let i = 0; i < nilai.length; i++) {
            total = total + nilai[i];
        }

        return total / nilai.length;
    }

    function tentukanStatus(rataRata) {
            if (rataRata < 0 || rataRata > 100) {
                return "error";
            } else if (rataRata >= batasLulus) {
                return "Lulus";
            } else if (rataRata < batasLulus) {
                return "Tidak Lulus";
            } }

    const hasilPraktikum = [];

    for (let i = 0; i < dataPraktikan.length; i++) {
        const praktikan = dataPraktikan[i];

        const rataRata = hitungRataRata(praktikan.nilaiTugas);
        const status = tentukanStatus(rataRata);

        const hasil = {
            nama: praktikan.nama,
            nilaiTugas: praktikan.nilaiTugas,
            rataRata: rataRata,
            status: status
        };

        hasilPraktikum.push(hasil);
    }

    document.write(`
        <div class="container">

            <h1>Sistem Laporan Praktikum</h1>

            <p class="subtitle">
                Hasil Evaluasi Nilai Praktikan
            </p>

            <div class="cards">
    `);

    for (let i = 0; i < hasilPraktikum.length; i++) {
        const data = hasilPraktikum[i];

        let kelasStatus = "";

        if (data.status === "Lulus") {
            kelasStatus = "lulus";
        } else if (data.status === "Tidak Lulus") {
            kelasStatus = "tidak-lulus";
        } else if (data.status === "Error") {
            kelasStatus = "error";
        }

        document.write(`
            <div class="card">

                <h2>${data.nama}</h2>

                <p class="detail">
                    Nilai Tugas:
                    ${data.nilaiTugas.join(", ")}
                </p>

                <p class="nilai">
                    ${data.rataRata.toFixed(2)}
                </p>

                <p>
                    Status:
                    <span class="${kelasStatus}">
                        ${data.status}
                    </span>
                </p>

            </div>
        `);
    }

    document.write(`
            </div>

            <p class="footer">
                Batas kelulusan: ${batasLulus}
            </p>

        </div>
    `);

    console.log("Hasil akhir praktikum:");
    console.log(hasilPraktikum);
}