import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

// Data menu kedai kopi
const menuCafe = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." }
];

function App() {
  // State utama aplikasi
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pesanan, setPesanan] = useState([]);
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");
  const [catatanPesanan, setCatatanPesanan] = useState("");

  // Menghitung total harga pesanan
  const totalHarga = pesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  // Menampilkan menu berdasarkan kategori dan pencarian
  const menuDitampilkan = menuCafe.filter((menu) => {
    const cocokKategori =
      kategoriAktif === "Semua" || menu.kategori === kategoriAktif;

    const cocokSearch = menu.nama
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());

    return cocokKategori && cocokSearch;
  });

  // Menambahkan menu ke pesanan
  function tambahPesanan(menuDipilih) {
    if (!menuDipilih.tersedia) {
      return;
    }

    const pesananSudahAda = pesanan.find(
      (item) => item.id === menuDipilih.id
    );

    if (pesananSudahAda) {
      const pesananBaru = pesanan.map((item) => {
        if (item.id === menuDipilih.id) {
          return {
            ...item,
            jumlah: item.jumlah + 1
          };
        }

        return item;
      });

      setPesanan(pesananBaru);
    } else {
      setPesanan([
        ...pesanan,
        {
          ...menuDipilih,
          jumlah: 1
        }
      ]);
    }
  }

  // Mengurangi jumlah menu dari pesanan
  function kurangPesanan(id) {
    const pesananBaru = pesanan
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            jumlah: item.jumlah - 1
          };
        }

        return item;
      })
      .filter((item) => item.jumlah > 0);

    setPesanan(pesananBaru);
  }

  // Memproses konfirmasi pesanan
  function konfirmasiPesanan(event) {
    event.preventDefault();

    const nama = namaPelanggan.trim();
    const meja = Number(nomorMeja);

    // Validasi nama pelanggan
    if (nama.length < 3) {
      setPesanSukses("Nama pelanggan minimal 3 karakter.");
      return;
    }

    // Validasi nomor meja
    if (
      nomorMeja.trim() === "" ||
      !Number.isInteger(meja) ||
      meja < 1 ||
      meja > 20
    ) {
      setPesanSukses("Nomor meja tidak tersedia!");
      return;
    }

    // Memastikan pesanan tidak kosong
    if (pesanan.length === 0) {
      setPesanSukses("Silakan pilih menu terlebih dahulu.");
      return;
    }

    // Pesanan berhasil dibuat
    setPesanSukses(
      `Terima kasih, ${nama}! Pesanan untuk meja ${meja} berhasil dibuat.`
    );

    // Menampilkan data pesanan di console
      console.log("DATA PESANAN:");
      console.log({
        namaPelanggan: nama,
        nomorMeja: meja,
        catatan: catatanPesanan,
        daftarPesanan: pesanan,
        totalHarga: totalHarga,
      });

      // Mengosongkan pesanan dan form
      setPesanan([]);
      setNamaPelanggan("");
      setNomorMeja("");
      setCatatanPesanan("");

    // Mengosongkan pesanan dan form
    setPesanan([]);
    setNamaPelanggan("");
    setNomorMeja("");
    setCatatanPesanan("");
  }

  return (
    <div className="relative min-h-screen bg-stone-100 font-sans text-stone-800">
      {/* Pesan Notifikasi */}
      {pesanSukses !== "" && (
        <div className="fixed top-6 right-6 z-50 flex max-w-md items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/95 p-4 text-sm font-medium text-emerald-800 shadow-xl backdrop-blur-sm">
          <span>{pesanSukses}</span>

          <button
            type="button"
            onClick={() => setPesanSukses("")}
            className="flex h-6 w-6 items-center justify-center rounded-full font-bold transition hover:bg-emerald-200/50"
          >
            ✕
          </button>
        </div>
      )}

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        {/* Navbar */}
        <Navbar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Kategori Menu */}
            <div className="mb-6">
              <h2 className="mb-3 font-heading text-lg font-bold text-stone-900">
                Kategori Menu
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {["Semua", "Kopi", "Non-Kopi", "Makanan"].map((kategori) => (
                  <button
                    type="button"
                    key={kategori}
                    onClick={() => setKategoriAktif(kategori)}
                    className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                      kategoriAktif === kategori
                        ? "scale-105 bg-amber-700 text-white shadow-md"
                        : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {kategori}
                  </button>
                ))}
              </div>
            </div>

            {/* Daftar Menu */}
            <div>
              <MenuList
                menu={menuDitampilkan}
                onTambah={tambahPesanan}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <RingkasanPesanan
                pesanan={pesanan}
                totalHarga={totalHarga}
                onTambah={tambahPesanan}
                onKurang={kurangPesanan}
              />

              <FormPesan
              namaPelanggan={namaPelanggan}
              setNamaPelanggan={setNamaPelanggan}
              nomorMeja={nomorMeja}
              setNomorMeja={setNomorMeja}
              catatanPesanan={catatanPesanan}
              setCatatanPesanan={setCatatanPesanan}
              onSubmit={konfirmasiPesanan}
             />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
