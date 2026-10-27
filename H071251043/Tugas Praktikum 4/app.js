const dataPraktikan = [ { nama: "Budi", nilaiTugas: [80, 85, 90] }, 
                        { nama: "Siti", nilaiTugas: [60, 60, 60] }, 
                        { nama: "Andi", nilaiTugas: [90, 90, 90] }, 
                        { nama: "Dewi", nilaiTugas: [75, 75, 75] }, 
                        { nama: "Eko", nilaiTugas: [101, 101, 101] } ]; 

const nama = prompt("Masukkan nama Asisten Lab: ");

if(nama == "kak abdul") {
  jalankanSistem();
}
else{
  document.write(`
    <div class="relative text-center text-xl">Akses ditolak</div>
    `)
}

function jalankanSistem() {
  
  document.write(`
    <div class="text-center mt-20"> <h1 class="text-2xl font-bold px-3 py-1 inline-block rounded-md bg-blue-300"> Sistem Laporan Praktikum </h1> </div>

    <h4 class="text-xl font-semibold text-center mt-5"> Selamat datang Asisten ${nama}! </h4>

    <p class="text-center"> Berikut adalah laporan hasil evaluasi praktikum </p>
  `);

  function hitungRataRata(nilaiTugas) {
    const sum_nilaiTugas = nilaiTugas.reduce(
      (jumlah, value) => jumlah + value, 
      0
    );
    const rata_rata = sum_nilaiTugas / nilaiTugas.length;
    return rata_rata;
  }

  function statusLulus(rata_rata) {
    if (rata_rata > 100 || rata_rata < 0) {
      return "Error";
    }
    else if (rata_rata >= 75){
      return "Lulus";
    }
    else {
      return "Tidak Lulus";
    }
  }

  dataPraktikan.forEach((praktikan) => {
    praktikan.rata_rata = hitungRataRata(praktikan.nilaiTugas);
    praktikan.status_lulus = statusLulus(praktikan.rata_rata);

    document.write(`
      <div class="w-[400px] mx-auto my-5 p-5 rounded-md bg-blue-200">
  
        <h2 class="text-xl font-bold">
          ${praktikan.nama}
        </h2>
  
        <p>Rata-rata: ${praktikan.rata_rata}</p>
  
        <p class="${
          praktikan.status_lulus === "Lulus"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
          } inline-block px-3 py-1 mt-2 rounded-md">
          ${praktikan.status_lulus}
        </p>
  
      </div>
    `);
  });

  console.log(dataPraktikan);

  }