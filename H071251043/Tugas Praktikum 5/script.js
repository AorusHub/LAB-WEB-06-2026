const statusAnggota = document.getElementById("status-anggota");
const daftarAnggota = document.getElementById("daftar-anggota");
const judulTugas = document.getElementById("judul-tugas");
const progres = document.getElementById("progres");
const statusTugas = document.getElementById("status-tugas");
const inputCari = document.getElementById("cari");
const kosong = document.getElementById("kosong");
const daftarTugas = document.getElementById("daftar-tugas");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("input-judul");
const btnSimpan = document.getElementById("btn-simpan");
const errorForm = document.getElementById("error-form");
const notif = document.getElementById("notif");

const BASE_URL = "https://jsonplaceholder.typicode.com";


// USER

function buatTombolAnggota(user) {
  const tombol = document.createElement("button");
  tombol.textContent = user.name;
  tombol.className = "bg-white text-gray-700 border rounded px-3 py-1 hover:bg-gray-100";

  tombol.addEventListener("click", function () {
    // hanya satu anggota yang bertanda
    document.querySelectorAll("#daftar-anggota button").forEach(function (t) {
      t.classList.remove("bg-blue-500", "text-white", "border-blue-500");
      t.classList.add("bg-white", "text-gray-700");
    });
    tombol.classList.remove("bg-white", "text-gray-700");
    tombol.classList.add("bg-blue-500", "text-white", "border-blue-500");

    judulTugas.textContent = "Tugas " + user.name;
    inputCari.value = "";
    muatTugas(user.id);
  });

  return tombol;
}

async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  try {
    const respons = await fetch(BASE_URL + "/users");
    if (!respons.ok) {
      throw new Error("Server bermasalah (status " + respons.status + ")");
    }
    const data = await respons.json();

    data.forEach(function (user) {
      daftarAnggota.appendChild(buatTombolAnggota(user));
    });
    statusAnggota.textContent = "";
  } catch (error) {
    statusAnggota.textContent = "Gagal memuat anggota: " + error.message;
    statusAnggota.className = "text-red-500";
  }
}


// TUGAS USER

function buatItemTugas(tugas) {
  const li = document.createElement("li");
  li.className = "border rounded p-2 flex items-center gap-2";
  const teks = document.createElement("span");
  teks.className = "flex-1";
  teks.textContent = tugas.title;

  function tandaiSelesai() {
    li.classList.add("selesai");
    teks.classList.add("line-through", "text-gray-400");
  }

  li.appendChild(teks);

  if (tugas.completed) {
    tandaiSelesai();
  } else {
    const btnSelesai = document.createElement("button");
    btnSelesai.textContent = "Tandai selesai";
    btnSelesai.className = "text-sm text-green-600 hover:underline";
    btnSelesai.addEventListener("click", function () {
      tandaiSelesai();
      btnSelesai.remove();
      perbaruiProgres();
    });
    li.appendChild(btnSelesai);
  }

  const btnHapus = document.createElement("button");
  btnHapus.textContent = "Hapus";
  btnHapus.className = "text-sm text-red-600 hover:underline";  
  btnHapus.addEventListener("click", function () {
    li.remove();
    perbaruiProgres();
  });
  li.appendChild(btnHapus);

  return li;
}

function perbaruiProgres() {
  const semua = daftarTugas.querySelectorAll("li");
  const selesai = daftarTugas.querySelectorAll("li.selesai");
  progres.textContent = selesai.length + " dari " + semua.length + " tugas selesai";
}

async function muatTugas(id) {
  daftarTugas.innerHTML = "";
  progres.textContent = "";
  kosong.classList.add("hidden");
  statusTugas.className = "text-gray-500";
  statusTugas.textContent = "Memuat tugas...";

  try {
    const respons = await fetch(BASE_URL + "/todos?userId=" + id);
    if (!respons.ok) {
      throw new Error("Server bermasalah (status " + respons.status + ")");
    }
    const data = await respons.json();

    data.forEach(function (tugas) {
      daftarTugas.appendChild(buatItemTugas(tugas));
    });
    statusTugas.textContent = "";
    perbaruiProgres();
  } catch (error) {
    statusTugas.className = "text-red-500";
    statusTugas.textContent = "Gagal memuat tugas: " + error.message;
  }
}


// PENCARIAN

inputCari.addEventListener("input", function () {
  const kataKunci = inputCari.value.toLowerCase().trim();
  const semuaItem = daftarTugas.querySelectorAll("li");
  let adaYangCocok = false;

  semuaItem.forEach(function (li) {
    const judul = li.querySelector("span").textContent.toLowerCase();
    if (judul.includes(kataKunci)) {
      li.classList.remove("hidden");
      adaYangCocok = true;
    } else {
      li.classList.add("hidden");
    }
  });

  // pesan "tidak cocok" hanya muncul kalau memang ada tugas tapi tidak ada yang cocok
  kosong.classList.toggle("hidden", adaYangCocok || semuaItem.length === 0);
});


// TAMBAH TUGAS

function simpanTugas(judul) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const sudahAda = Array.from(daftarTugas.querySelectorAll("li span")).some(function (s) {
        return s.textContent.toLowerCase() === judul.toLowerCase();
      });

      if (sudahAda) {
        reject(new Error("Tugas \"" + judul + "\" sudah ada."));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

formTugas.addEventListener("submit", async function (event) {
  event.preventDefault();
  const judul = inputJudul.value.trim();

  if (judul.length < 8) {
    errorForm.textContent = "Judul minimal 8 karakter.";
    return;
  }
  errorForm.textContent = "";

  btnSimpan.disabled = true;
  btnSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);
    daftarTugas.appendChild(buatItemTugas(tugasBaru));
    perbaruiProgres();
    inputJudul.value = "";

    notif.classList.remove("hidden");
    setTimeout(function () {
      notif.classList.add("hidden");
    }, 5000);
  } catch (error) {
    errorForm.textContent = error.message;
  } finally {
    btnSimpan.disabled = false;
    btnSimpan.textContent = "Simpan";
  }
});



muatAnggota();

