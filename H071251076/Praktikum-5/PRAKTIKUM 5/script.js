const API = "https://jsonplaceholder.typicode.com";

// --- Elemen ---
const daftarAnggota = document.getElementById("daftar-anggota");
const statusAnggota = document.getElementById("status-anggota");
const judulTugas = document.getElementById("judul-tugas");
const ringkasan = document.getElementById("ringkasan");
const statusTugas = document.getElementById("status-tugas");
const areaTugas = document.getElementById("area-tugas");
const inputCari = document.getElementById("cari");
const daftarTugas = document.getElementById("daftar-tugas");
const pesanKosong = document.getElementById("pesan-kosong");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("judul-baru");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");

// --- State ---
// Setiap tugas: { title, completed, li, judulEl }
let tugasList = [];
let anggotaTerpilihId = null;
let tombolTerpilih = null;
let timerNotifikasi = null;
let sedangMenyimpan = false;

// ================= F1: Daftar anggota =================
async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  statusAnggota.classList.remove("hidden", "text-red-600");

  try {
    const respons = await fetch(`${API}/users`);
    if (!respons.ok) {
      throw new Error(`Server membalas dengan status ${respons.status}.`);
    }
    const anggota = await respons.json();

    statusAnggota.textContent = "";
    statusAnggota.classList.add("hidden");

    anggota.forEach((a) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.textContent = a.name;
      tombol.className =
        "text-left rounded border border-stone-300 px-3 py-2 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500";
      tombol.addEventListener("click", () => pilihAnggota(a, tombol));
      daftarAnggota.appendChild(tombol);
    });
  } catch (err) {
    statusAnggota.textContent = `Gagal memuat anggota: ${err.message}`;
    statusAnggota.classList.add("text-red-600");
    statusAnggota.classList.remove("hidden");
  }
}

// ================= F2: Tugas anggota =================
async function pilihAnggota(anggota, tombol) {
  // Penanda hanya satu anggota
  if (tombolTerpilih) {
    tombolTerpilih.classList.remove("bg-indigo-600", "text-white", "border-indigo-600");
  }
  tombol.classList.add("bg-indigo-600", "text-white", "border-indigo-600");
  tombolTerpilih = tombol;
  anggotaTerpilihId = anggota.id;

  judulTugas.textContent = `Tugas ${anggota.name}`;

  // Kosongkan tampilan lama
  daftarTugas.innerHTML = "";
  tugasList = [];
  inputCari.value = "";
  errorForm.classList.add("hidden");
  areaTugas.classList.add("hidden");
  ringkasan.classList.add("hidden");
  pesanKosong.classList.add("hidden");

  statusTugas.textContent = "Memuat tugas...";
  statusTugas.classList.remove("hidden", "text-red-600");

  const idSaatIni = anggota.id;
  try {
    const respons = await fetch(`${API}/todos?userId=${anggota.id}`);
    if (!respons.ok) {
      throw new Error(`Server membalas dengan status ${respons.status}.`);
    }
    const data = await respons.json();

    // Abaikan hasil lama jika pengguna sudah pindah ke anggota lain
    if (idSaatIni !== anggotaTerpilihId) return;

    statusTugas.textContent = "";
    statusTugas.classList.add("hidden");
    areaTugas.classList.remove("hidden");

    data.forEach((t) => buatItemTugas(t.title, t.completed));
    perbaruiTampilan();
  } catch (err) {
    if (idSaatIni !== anggotaTerpilihId) return;
    statusTugas.textContent = `Gagal memuat tugas: ${err.message}`;
    statusTugas.classList.add("text-red-600");
    statusTugas.classList.remove("hidden");
  }
}

function tandaiSelesaiTampilan(tugas) {
  tugas.judulEl.classList.add("line-through", "text-gray-400");
}

function buatItemTugas(title, completed) {
  const li = document.createElement("li");
  const baris = document.createElement("div");
  baris.className = "flex items-center gap-2 py-2";

  const judulEl = document.createElement("span");
  judulEl.className = "flex-1";
  judulEl.textContent = title;

  const tugas = { title, completed, li, judulEl };
  if (completed) tandaiSelesaiTampilan(tugas);

  baris.appendChild(judulEl);

  // F5: tombol Tandai selesai (hanya untuk yang belum selesai)
  if (!completed) {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.className =
      "text-sm border border-emerald-600 text-emerald-700 rounded px-2 py-1 hover:bg-emerald-50";
    tombolSelesai.addEventListener("click", () => {
      tugas.completed = true;
      tandaiSelesaiTampilan(tugas);
      tombolSelesai.remove();
      perbaruiTampilan();
    });
    baris.appendChild(tombolSelesai);
  }

  // F5: tombol Hapus
  const tombolHapus = document.createElement("button");
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.className =
    "text-sm border border-red-600 text-red-700 rounded px-2 py-1 hover:bg-red-50";
  tombolHapus.addEventListener("click", () => {
    li.remove();
    tugasList = tugasList.filter((t) => t !== tugas);
    perbaruiTampilan();
  });
  baris.appendChild(tombolHapus);

  li.appendChild(baris);
  daftarTugas.appendChild(li);
  tugasList.push(tugas);
  return tugas;
}

function perbaruiRingkasan() {
  const selesai = tugasList.filter((t) => t.completed).length;
  ringkasan.textContent = `${selesai} dari ${tugasList.length} tugas selesai`;
  ringkasan.classList.remove("hidden");
}

// ================= F3: Pencarian =================
function terapkanFilter() {
  const kataKunci = inputCari.value.trim().toLowerCase();
  let adaYangCocok = false;

  tugasList.forEach((t) => {
    const cocok = t.title.toLowerCase().includes(kataKunci);
    if (cocok) {
      t.li.classList.remove("hidden");
      adaYangCocok = true;
    } else {
      t.li.classList.add("hidden");
    }
  });

  if (tugasList.length === 0) {
    pesanKosong.textContent = "Belum ada tugas.";
    pesanKosong.classList.remove("hidden");
  } else if (!adaYangCocok) {
    pesanKosong.textContent = "Tidak ada tugas yang cocok.";
    pesanKosong.classList.remove("hidden");
  } else {
    pesanKosong.classList.add("hidden");
  }
}

function perbaruiTampilan() {
  perbaruiRingkasan();
  terapkanFilter();
}

inputCari.addEventListener("input", terapkanFilter);

// ================= F4: Tambah tugas =================
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kembar = tugasList.some(
        (t) => t.title.toLowerCase() === judul.toLowerCase()
      );
      if (kembar) {
        reject(new Error(`Tugas "${judul}" sudah ada di daftar.`));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

function tampilkanNotifikasi(pesan) {
  notifikasi.textContent = pesan;
  notifikasi.classList.remove("hidden");
  clearTimeout(timerNotifikasi);
  timerNotifikasi = setTimeout(() => {
    notifikasi.classList.add("hidden");
  }, 3000);
}

function tampilkanErrorForm(pesan) {
  errorForm.textContent = pesan;
  errorForm.classList.remove("hidden");
}

formTugas.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (sedangMenyimpan) return;

  errorForm.classList.add("hidden");
  const judul = inputJudul.value.trim();

  if (judul.length < 5) {
    tampilkanErrorForm("Judul tugas minimal 5 karakter (tidak termasuk spasi di awal dan akhir).");
    return;
  }

  const idSaatSimpan = anggotaTerpilihId;
  sedangMenyimpan = true;
  tombolSimpan.disabled = true;
  tombolSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);

    // Pengguna pindah anggota saat menunggu: jangan campurkan ke daftar anggota lain
    if (idSaatSimpan === anggotaTerpilihId) {
      buatItemTugas(tugasBaru.title, tugasBaru.completed);
      perbaruiTampilan();
      inputJudul.value = "";
      tampilkanNotifikasi("Tugas berhasil ditambahkan.");
    }
  } catch (err) {
    tampilkanErrorForm(err.message);
  } finally {
    sedangMenyimpan = false;
    tombolSimpan.disabled = false;
    tombolSimpan.textContent = "Simpan";
  }
});

// ================= Mulai =================
muatAnggota();