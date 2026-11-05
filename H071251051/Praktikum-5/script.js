let BASE_URL = "https://jsonplaceholder.typicode.com";

let daftarAnggota = document.getElementById("daftar-anggota");
let statusAnggota = document.getElementById("status-anggota");
let errorAnggota = document.getElementById("error-anggota");

let judulTugas = document.getElementById("judul-tugas");
let petunjuk = document.getElementById("petunjuk");
let statusTugas = document.getElementById("status-tugas");
let errorTugas = document.getElementById("error-tugas");
let panelTugas = document.getElementById("panel-tugas");
let ringkasan = document.getElementById("ringkasan");
let batangProgres = document.getElementById("batang-progres");
let kotakCari = document.getElementById("cari");
let daftarTugas = document.getElementById("daftar-tugas");
let pesanKosong = document.getElementById("pesan-kosong");

let formTugas = document.getElementById("form-tugas");
let inputJudul = document.getElementById("judul-baru");
let tombolSimpan = document.getElementById("tombol-simpan");
let errorForm = document.getElementById("error-form");
let notifikasi = document.getElementById("notifikasi");

let anggotaAktif = null;

async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";

  try {
    let respons = await fetch(BASE_URL + "/users");
    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }
    let anggota = await respons.json();

    statusAnggota.textContent = "";
    tampilkanAnggota(anggota);
  } catch (error) {
    statusAnggota.textContent = "";
    errorAnggota.textContent = "Gagal memuat anggota: " + error.message;
    errorAnggota.classList.remove("hidden");
  }
}

function tampilkanAnggota(anggota) {
  daftarAnggota.innerHTML = "";

  anggota.forEach((orang) => {
    let tombol = document.createElement("button");
    tombol.setAttribute("type", "button");
    tombol.textContent = orang.name;
    tombol.classList.add("rounded-xl", "px-3", "py-2", "text-left", "text-sm", "font-medium", "hover:bg-white/30");

    tombol.addEventListener("click", () => {
      pilihAnggota(orang.id, orang.name, tombol);
    });

    daftarAnggota.appendChild(tombol);
  });
}

function tandaiAnggota(tombolAktif) {
  let semua = daftarAnggota.querySelectorAll("button");

  semua.forEach((tombol) => {
    tombol.classList.remove("bg-white", "text-amaranth", "shadow-md");
    tombol.classList.add("hover:bg-white/30");
  });

  tombolAktif.classList.remove("hover:bg-white/30");
  tombolAktif.classList.add("bg-white", "text-amaranth", "shadow-md");
}

async function pilihAnggota(id, nama, tombol) {
  anggotaAktif = id;
  tandaiAnggota(tombol);
  judulTugas.textContent = "Tugas " + nama;

  petunjuk.classList.add("hidden");
  panelTugas.classList.add("hidden");
  errorTugas.classList.add("hidden");
  errorForm.classList.add("hidden");
  daftarTugas.innerHTML = "";
  kotakCari.value = "";
  inputJudul.value = "";
  statusTugas.textContent = "Memuat tugas...";

  try {
    let respons = await fetch(BASE_URL + "/todos?userId=" + id);
    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }
    let tugas = await respons.json();

    if (anggotaAktif !== id) {
      return; 
    }

    statusTugas.textContent = "";
    tugas.forEach((item) => {
      buatTugas(item.title, item.completed);
    });
    panelTugas.classList.remove("hidden");
    perbaruiRingkasan();
    cariTugas();
  } catch (error) {
    if (anggotaAktif !== id) {
      return;
    }
    statusTugas.textContent = "";
    errorTugas.textContent = "Gagal memuat tugas: " + error.message;
    errorTugas.classList.remove("hidden");
  }
}

function buatTugas(judul, selesai) {
  let li = document.createElement("li");
  li.classList.add("rounded-2xl", "border", "border-chalk", "bg-white", "px-4", "py-3", "shadow-sm");

  let baris = document.createElement("div");
  baris.classList.add("flex", "flex-col", "gap-2", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:gap-3");

  let teks = document.createElement("span");
  teks.classList.add("judul", "text-sm", "break-words");
  teks.textContent = judul;

  let aksi = document.createElement("div");
  aksi.classList.add("flex", "shrink-0", "gap-2");

  if (selesai) {
    li.setAttribute("data-selesai", "true");
    teks.classList.add("line-through", "text-gray-400");
  } else {
    li.setAttribute("data-selesai", "false");

    let tombolSelesai = document.createElement("button");
    tombolSelesai.setAttribute("type", "button");
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.classList.add("rounded-lg", "bg-brook", "px-3", "py-1", "text-xs", "font-semibold", "hover:opacity-80");

    tombolSelesai.addEventListener("click", () => {
      teks.classList.add("line-through", "text-gray-400");
      li.setAttribute("data-selesai", "true");
      tombolSelesai.remove();
      perbaruiRingkasan();
    });

    aksi.appendChild(tombolSelesai);
  }

  let tombolHapus = document.createElement("button");
  tombolHapus.setAttribute("type", "button");
  tombolHapus.textContent = "Hapus";
  tombolHapus.classList.add("rounded-lg", "border", "border-amaranth", "px-3", "py-1", "text-xs", "font-semibold", "text-amaranth", "hover:bg-amaranth/10");
  
  tombolHapus.addEventListener("click", () => {
    li.remove();
    perbaruiRingkasan();
    cariTugas();
  });

  aksi.appendChild(tombolHapus);
  baris.appendChild(teks);
  baris.appendChild(aksi);
  li.appendChild(baris);
  daftarTugas.appendChild(li);
}

function perbaruiRingkasan() {
  let semua = daftarTugas.querySelectorAll("li");
  let selesai = 0;

  semua.forEach((li) => {
    if (li.getAttribute("data-selesai") === "true") {
      selesai = selesai + 1;
    }
  });

  ringkasan.textContent = selesai + " dari " + semua.length + " tugas selesai";

  if (semua.length > 0) {
    batangProgres.style.width = (selesai / semua.length) * 100 + "%";
  } else {
    batangProgres.style.width = "0%";
  }
}

function cariTugas() {
  let kataKunci = kotakCari.value.toLowerCase();
  let semua = daftarTugas.querySelectorAll("li");
  let cocok = 0;

  semua.forEach((li) => {
    let judul = li.querySelector(".judul").textContent.toLowerCase();

    if (judul.includes(kataKunci)) {
      li.classList.remove("hidden");
      cocok = cocok + 1;
    } else {
      li.classList.add("hidden");
    }
  });

  if (semua.length === 0) {
    pesanKosong.textContent = "Belum ada tugas.";
    pesanKosong.classList.remove("hidden");
  } else if (cocok === 0) {
    pesanKosong.textContent = "Tidak ada tugas yang cocok.";
    pesanKosong.classList.remove("hidden");
  } else {
    pesanKosong.classList.add("hidden");
  }
}

kotakCari.addEventListener("input", cariTugas);

function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let semuaJudul = daftarTugas.querySelectorAll(".judul");
      let sudahAda = false;

      semuaJudul.forEach((el) => {
        if (el.textContent.toLowerCase() === judul.toLowerCase()) {
          sudahAda = true;
        }
      });

      if (sudahAda) {
        reject(new Error('Tugas "' + judul + '" sudah ada di daftar.'));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

formTugas.addEventListener("submit", async function (event) {
  event.preventDefault();

  let judul = inputJudul.value.trim();

  if (judul.length < 5) {
    errorForm.textContent = "Judul tugas minimal 5 karakter.";
    errorForm.classList.remove("hidden");
    return;
  }

  errorForm.classList.add("hidden");
  tombolSimpan.textContent = "Menyimpan...";

  try {
    let tugasBaru = await simpanTugas(judul);

    buatTugas(tugasBaru.title, tugasBaru.completed);
    perbaruiRingkasan();
    cariTugas();
    inputJudul.value = "";

    notifikasi.textContent = "Tugas berhasil ditambahkan.";
    notifikasi.classList.remove("hidden");
    setTimeout(() => {
      notifikasi.classList.add("hidden");
    }, 5000); //-- yng diganti
  } catch (error) {
    errorForm.textContent = error.message;
    errorForm.classList.remove("hidden");
  } finally {
    tombolSimpan.textContent = "Simpan";
  }
});

muatAnggota();
