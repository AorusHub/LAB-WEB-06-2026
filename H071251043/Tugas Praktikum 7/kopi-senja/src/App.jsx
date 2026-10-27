import { useState } from "react";

import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

import kopiSusu from "./assets/kopi_susu.jpg";
import americano from "./assets/americano.jpg";
import cappuccino from "./assets/cappucino.jpg";
import matchaLatte from "./assets/matcha_latte.jpg";
import tehTarik from "./assets/teh_tarik.jpg";
import hotChoco from "./assets/hot_choco.jpg";
import rotiBakar from "./assets/roti_bakar.jpg";
import pisangGoreng from "./assets/pisang_goreng.jpg";
import nasiGoreng from "./assets/nasi_goreng.jpg";

const daftarMenu = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
    gambar: kopiSusu,
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
    gambar: americano,
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
    gambar: cappuccino,
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
    gambar: matchaLatte,
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
    gambar: tehTarik,
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
    gambar: hotChoco,
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
    gambar: rotiBakar,
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
    gambar: pisangGoreng,
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
    gambar: nasiGoreng,
  },
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [menuDetail, setMenuDetail] = useState([]);  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [catatan, setCatatan] = useState("");
  const [pesan, setPesan] = useState("");

  function tambahPesanan(menu) {
    if (!menu.tersedia) {
      return;
    }

    setPesanan((pesananSebelumnya) => {
      const menuSudahAda = pesananSebelumnya.find(
        (item) => item.id === menu.id
      );

      if(menuSudahAda) {
        return pesananSebelumnya.map((item) =>
        item.id === menu.id
          ? {...item, jumlah:item.jumlah + 1}
          : item
        );
      }
      return [...pesananSebelumnya,
        {
          id: menu.id,
          nama: menu.nama,
          harga: menu.harga,
          jumlah: 1,
        },
      ];
    });
  }

  
  function kirimPesanan(e) {
    e.preventDefault();
    setPesan("");

    if (pesanan.length === 0) {
      setPesan("Pilih menu terlebih dahulu!");
      return;
    }

    if (namaPelanggan.trim().length < 3) {
      setPesan("Nama pelanggan minimal 3 karakter.");
      return;
    }

    if (!nomorMeja.trim() || Number(nomorMeja) < 1) {
      setPesan("Masukkan nomor meja yang valid.");
      return;
    }

    setPesan(
      `Terima kasih, ${namaPelanggan.trim()}! Pesanan untuk meja ${nomorMeja} berhasil dikirim. Total pembayaran Rp${totalHarga.toLocaleString("id-ID")}.`
    );
    
    setPesanan([]);
    setNamaPelanggan("");
    setNomorMeja("");
    setCatatan("");
  }


  const jumlahItem = pesanan.reduce(
    (total, item) => total + item.jumlah,
    0
  );
  
  const totalHarga = pesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );


  return (
    <div className="min-h-screen bg-amber-200/90">
      <Navbar
        kategoriAktif={kategoriAktif}
        setKategoriAktif={setKategoriAktif}
      />
  
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex flex-wrap justify-between gap-3 rounded-xl bg-yellow-100 p-4">
          <p className="font-semibold text-gray-800">
            Pesanan: {jumlahItem} item
          </p>
  
          <p className="font-bold text-amber-700">
            Rp{totalHarga.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
  
      <MenuList
        daftarMenu={daftarMenu}
        kategoriAktif={kategoriAktif}
        menuDetail={menuDetail}
        setMenuDetail={setMenuDetail}
        tambahPesanan={tambahPesanan}
      />
  
      <RingkasanPesanan pesanan={pesanan} />

      
      <FormPesan
        namaPelanggan={namaPelanggan}
        setNamaPelanggan={setNamaPelanggan}
        nomorMeja={nomorMeja}
        setNomorMeja={setNomorMeja}
        catatan={catatan}
        setCatatan={setCatatan}
        pesan={pesan}
        onSubmit={kirimPesanan}
      />

      <Footer />

    </div>
  );
  

}

export default App;