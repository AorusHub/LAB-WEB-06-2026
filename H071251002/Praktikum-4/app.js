const dataPraktikum = [
    {nama: "Budi", nilaiTugas: [80,85,90] },
    {nama: "Siti", nilaiTugas: [60,60,60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] },
    { nama: "Rina", nilaiTugas: [400, 400, 400] }
]

function nilaiPraktikan (praktikan) {
    let total = praktikan.nilaiTugas.reduce(function(total, angka){
        return total + angka;
    }, 0);

    let rata_rata = total/praktikan.nilaiTugas.length;
    return rata_rata;
}

// const namaAslab = ["Zahrah", "Rasyah", "Edogawa"];

let nama = prompt ("Masukkan nama Anda (Aslab): ")
if (nama === "Aslab1"){
    let hasilPraktikum = [];

    for (let praktikan of dataPraktikum){
        let hasil = nilaiPraktikan(praktikan);
        
        let status;

        if (hasil > 100){
            status = "Nilai Error"
        } else if (hasil >= 75){
            status = "Lulus"
        } else{
            status ="Tidak Lulus"
        }

        hasilPraktikum.push({
            nama:praktikan.nama,
            rataRata: hasil,
            status: status
        });
    }

    console.log(hasilPraktikum)

    document.write(
        "<div class='container'>" +
        "<div class='header-dashboard'>" +
        "  <h1>Laporan Evaluasi Praktikum</h1>" +
        "  <div class='aslab-tag'>" +
        "    <span>Verified Aslab:</span> <strong>" + nama + "</strong>" +
        "  </div>" +
        "</div>" +
        "<div class='grid-kartu'>"
    );

    for (let hasil of hasilPraktikum){
        let statusClass;

        if(hasil.status === "Lulus"){
            statusClass = "status-lulus"
        } else {
            statusClass = "status-gagal"
        }

        document.write(
            "<div class='kartu'>" +
            "  <div class='kartu-header'>" +
            "    <h2>" + hasil.nama + "</h2>" +
            "    <span class='status-badge " + statusClass + "'>" + hasil.status + "</span>" +
            "  </div>" +
            "  <p><span>Nilai Rata-rata</span> <span class='nilai-angka'>" + hasil.rataRata + "</span></p>" +
            "</div>"
        );
    }

    document.write("</div></div>");

} else {
    document.write(
        "<div class='error-box'>" +
        "  <div class='error-card'>" +
        "    <h1>Kehadiran tidak terverifikasi!!</h1>" +
        "  </div>" +
        "</div>"
    );
}

