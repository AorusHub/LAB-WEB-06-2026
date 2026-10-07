const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] },
  { nama: "Rina", nilaiTugas: [110, 110, 110] }
];

const namaAsisten = prompt("Masukkan Nama Asisten Lab:");

function hitungEvaluasi(data) {
  return data.map(function(p) {
    const total = p.nilaiTugas.reduce(function(acc, val) { return acc + val; }, 0);
    const rataRata = total / p.nilaiTugas.length;
    return {
      nama: p.nama,
      rataRata: rataRata,
      status: rataRata > 100 || rataRata < 0 ? "Error" : rataRata >= 75 ? "Lulus" : "Tidak Lulus"
    };
  });
}

const hasilEvaluasi = hitungEvaluasi(dataPraktikan);

let html = "<div class=\"container\">" + "<div class=\"header\">" + "<h2>Sistem Laporan Praktikum</h2>" + "<p>Evaluasi Kelulusan Praktikum</p>" + "</div>";

if (namaAsisten == "Rasyah") {
  html = html + "<div class=\"banner\">" + "<h4>Selamat datang, " + namaAsisten + "!</h4>" + "<p>Berikut adalah laporan hasil evaluasi praktikum.</p>" + "</div>";

  hasilEvaluasi.forEach(function(item) {
    const isLulus = item.status === "Lulus";
    const classBadge = isLulus ? "lulus" : "tidak";

    html = html + "<div class=\"card\">" + "<div>" + "<div class=\"nama\">" + item.nama + "</div>" + "<div class=\"score\">Rata-rata: " + item.rataRata + "</div>" + "</div>" + "<span class=\"badge " + classBadge + "\">" + item.status + "</span>" + "</div>";
  });
} else {
  html = html + "<div class=\"banner unknown\">" + "<h4>Nama tidak diketahui!</h4>" + "<p>Anda belum menginputkan nama asisten. Silakan refresh halaman.</p>" + "</div>";
}

html = html + "</div>";
document.write(html);
console.log("Hasil Evaluasi Praktikum:", hasilEvaluasi);
    


