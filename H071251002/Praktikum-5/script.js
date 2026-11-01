const statusAnggota = document.getElementById("statusAnggota");
const daftarAnggotaElement = document.getElementById("daftarAnggota");

const judulTugas = document.getElementById("judulTugas");
const statusTugas = document.getElementById("statusTugas");
const progresTugas = document.getElementById("progresTugas");
const tugasBelum = document.getElementById("tugasBelum");
const daftarTugasElement = document.getElementById("daftarTugas");

const inputCari = document.getElementById("cariTugas");
const pesanPencarian = document.getElementById("pesanPencarian")

const formTugas = document.getElementById("formTugas");
const inputJudulBaru = document.getElementById("judulBaru");
const errorTugas = document.getElementById("errorTugas");
const tombolSimpan = document.getElementById("tombolSimpan");
const notifikasi = document.getElementById("notifikasi");

let daftarTugas = [];
let anggotaDipilih = false;
let tombolAnggotaAktif = null;

async function ambilAnggota(){
    statusAnggota.textContent="Memuat anggota..."

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw new Error("Gagal mengambil data anggota.");
        }

        const anggota = await response.json();

        daftarAnggotaElement.innerHTML="";
        for(const orang of anggota){
            const tombol = document.createElement("button");

            tombol.textContent = orang.name;
            tombol.className = "bg-blue-600 text-white px-4 py-2 rounded-lg m-1";

            tombol.addEventListener("click", async function(){
                if(tombolAnggotaAktif !== null){
                    tombolAnggotaAktif.classList.remove("bg-green-600");
                    tombolAnggotaAktif.classList.add("bg-blue-600");
                }
                tombol.classList.remove("bg-blue-600");
                tombol.classList.add("bg-green-600");

                tombolAnggotaAktif = tombol; 

                await ambilTugas(orang.id, orang.name);
            })
            daftarAnggotaElement.appendChild(tombol)
        }

        statusAnggota.textContent ="";

    } catch (error){
        statusAnggota.textContent ="Gagal memuat anggota. periksa koneksi internet"
    }
}


async function  ambilTugas(idAnggota, namaAnggota) {
    anggotaDipilih = false;

    judulTugas.textContent ="Tugas " + namaAnggota;
    statusTugas.textContent ="Memuat tugas...."
    progresTugas.textContent ="";

    daftarTugasElement.innerHTML ="";

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + idAnggota);

        if(!response.ok){
            throw new Error ("Gagal mengambil data tugas");
        }
        daftarTugas = await response.json();
        anggotaDipilih = true;
        tampilkanTugas();
        pencarianTugas();

        statusTugas.textContent="";
    } catch (error){
        daftarTugas = [];
        tampilkanTugas();
        anggotaDipilih = false;
        
        statusTugas.textContent="Gagal memuat tugas";
        progresTugas.textContent ="Progres belum tersedia.";
    }
}

function tampilkanTugas(){
    daftarTugasElement.innerHTML="";

    let jumlahSelesai = 0
    let jumlahBelum = 0

    for(const tugas of daftarTugas){
        const item =document.createElement("div");
        const judul = document.createElement("p");

        judul.textContent = tugas.title;

        if(tugas.completed){
            judul.classList.add("line-through","text-gray-400");
            jumlahSelesai++
        }

        item.className = "border rounded-lg p-3";
        item.appendChild(judul);

        if(!tugas.completed){
            jumlahBelum ++
            const tombolSelesai = document.createElement("button");
            tombolSelesai.textContent = "Tandai selesai"
            tombolSelesai.className = "bg-green-600 text-white px-3 py-2 rounded-lg"
            tombolSelesai.addEventListener ("click", function(){
                tugas.completed = true;
                tampilkanTugas();
                pencarianTugas();
            });
            item.appendChild(tombolSelesai);
        }

        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
            tombolHapus.className = "bg-red-600 text-white px-3 py-2 rounded-lg ml-2"
            tombolHapus.addEventListener ("click", function(){
                daftarTugas = daftarTugas.filter(function(dataTugas){
                    return dataTugas !== tugas;
                })
                tampilkanTugas();
                pencarianTugas();
            });
            item.appendChild(tombolHapus);

        daftarTugasElement.appendChild(item);
    }
    progresTugas.textContent =
    jumlahSelesai + " dari " + daftarTugas.length + " tugas selesai";
    tugasBelum.textContent = "Tugas yang belum: " + jumlahBelum + " dari " + daftarTugas.length + " tugas selesai";

}

function pencarianTugas(){
    const kataKunci= inputCari.value.toLowerCase();
    const semuaItem = daftarTugasElement.children;

    let jumlahCocok = 0;

    for (const item of semuaItem){
        const judul = item.querySelector("p").textContent.toLowerCase();
    
        if(judul.includes(kataKunci)){
            item.classList.remove("hidden")
            jumlahCocok++;
        } else {
            item.classList.add("hidden");
        }
    }
    
    if (kataKunci !== "" && jumlahCocok === 0){
        pesanPencarian.textContent ="Tidak ada tugas yang cocok";
    } else {
        pesanPencarian.textContent ="";
    }
}

inputCari.addEventListener("input", pencarianTugas);
ambilAnggota();

formTugas.addEventListener("submit", async function(event){
    event.preventDefault();
   
    const judul = inputJudulBaru.value.trim();
    
    if(!anggotaDipilih){
        errorTugas.textContent="Pilih anggota terlebih dahulu";
    } else if (judul === ""){
        errorTugas.textContent="Judul tugas tidak boleh kosong"
    } else if (judul.length < 8) {
        errorTugas.textContent = "Judul tugas minimal 8 karakter";
    }else{
        errorTugas.textContent = "";
        tombolSimpan.textContent="Menyimpan..."
        tombolSimpan.disabled =true;
        try{
            const tugasBaru = await simpanTugas(judul);
            daftarTugas.push(tugasBaru);
            tampilkanTugas();
            pencarianTugas();

            inputJudulBaru.value="";
            notifikasi.textContent ="Tugas berhasil ditambahkan";
            setTimeout(function(){
                notifikasi.textContent = "";
            },3000);
        } catch(error){
            errorTugas.textContent=error.message;
        } finally{
            tombolSimpan.textContent="Simpan";
            tombolSimpan.disabled = false;
        }
    }
});

function simpanTugas(judul){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const judulKecil = judul.toLowerCase();
            let duplikat = false;

            for(const tugas of daftarTugas){
                if (tugas.title.toLowerCase ()=== judulKecil){
                    duplikat = true
                }
            }
            if (duplikat){
                reject(new Error("Judul tugas sudah ada"));
            } else {
                resolve({
                    title: judul,
                    completed: false
                });
            }
        }, 1000)
    })
}
