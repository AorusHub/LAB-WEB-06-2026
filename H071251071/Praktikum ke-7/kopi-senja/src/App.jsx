import { useState } from 'react'; 
import Navbar from './components/Navbar';
import MenuList from './components/MenuList'; 
import RingkasanPesanan from './components/RingkasanPesanan'; 
import FormPesan from './components/FormPesan'; 
import Footer from './components/Footer';

const DATA_MENU = [ 
  { id: 1, nama: 'Kopi Susu', kategori: 'Kopi', harga: 18000, tersedia: true, deskripsi: 'Espresso dengan susu segar dan gula aren.' }, 
  { id: 2, nama: 'Americano', kategori: 'Kopi', harga: 15000, tersedia: true, deskripsi: 'Espresso dengan air panas, rasa kuat dan bersih.' }, 
  { id: 3, nama: 'Cappuccino', kategori: 'Kopi', harga: 22000, tersedia: true, deskripsi: 'Espresso, susu panas, dan busa susu tebal.' }, 
  { id: 4, nama: 'Matcha Latte', kategori: 'Non-Kopi', harga: 24000, tersedia: true, deskripsi: 'Teh hijau matcha dengan susu.' }, 
  { id: 5, nama: 'Teh Tarik', kategori: 'Non-Kopi', harga: 14000, tersedia: false, deskripsi: 'Teh susu yang ditarik hingga berbusa.' }, 
  { id: 6, nama: 'Cokelat Panas', kategori: 'Non-Kopi', harga: 20000, tersedia: true, deskripsi: 'Cokelat pekat dengan susu hangat.' }, 
  { id: 7, nama: 'Roti Bakar', kategori: 'Makanan', harga: 16000, tersedia: true, deskripsi: 'Roti tebal dengan selai cokelat dan keju.' }, 
  { id: 8, nama: 'Pisang Goreng', kategori: 'Makanan', harga: 12000, tersedia: false, deskripsi: 'Pisang goreng renyah dengan taburan keju.' }, 
  { id: 9, nama: 'Nasi Goreng', kategori: 'Makanan', harga: 25000, tersedia: true, deskripsi: 'Nasi goreng kampung dengan telur mata sapi.' } 
];

function App() { 
  const [kategoriAktif, setKategoriAktif] = useState('Semua'); 
  const [pesanan, setPesanan] = useState([]); 
  const [pesanSukses, setPesanSukses] = useState('');


  const handleTambahPesanan = (menuItem) => { 
    if (!menuItem.tersedia) return; 
    setPesanSukses('');
    setPesanan((prev) => { 
      const eksis = prev.find((item) => item.id === menuItem.id); 
      if (eksis) { return prev.map((item) => 
        item.id === menuItem.id ? { ...item, jumlah: item.jumlah + 1 } : item );
      } 
      return [...prev, { ...menuItem, jumlah: 1 }]; 
    }); 
  }

  const handleKurangiPesanan = (id) => { 
    setPesanan((prev) => { 
      const eksis = prev.find((item) => item.id === id); 
      if (eksis.jumlah === 1) { return prev.filter((item) => item.id !== id); } 
      return prev.map((item) => item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item );
    }); 
  }

  const handleHapusPesanan = (id) => { 
    setPesanan((prev) => 
    prev.filter((item) => item.id !== id));
  }

  const handleResetPesanan = () => { setPesanan([]);}

  const menuTersaring = kategoriAktif === 'Semua' ? DATA_MENU : DATA_MENU.filter((item) => item.kategori === kategoriAktif);
  
  const totalItem = pesanan.reduce((sum, item) => sum + item.jumlah, 0); 
  
  const totalHarga = pesanan.reduce((sum, item) => sum + (item.harga * item.jumlah), 0);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar
        kategoriAktif={kategoriAktif}
        setKategoriAktif={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-amber-900">Daftar Menu</h2>
          <MenuList
            menuItems={menuTersaring}
            onTambahPesanan={handleTambahPesanan}
          />
        </section>
        <section className="space-y-6">
          <RingkasanPesanan 
            pesanan={pesanan} 
            totalItem={totalItem} 
            totalHarga={totalHarga} 
            onTambah={handleTambahPesanan} 
            onKurang={handleKurangiPesanan} 
            onHapus={handleHapusPesanan}
            onResetPesanan={handleResetPesanan}
          />

          <FormPesan 
           totalItem={totalItem} 
           onResetPesanan={handleResetPesanan} 
           setPesanSukses={setPesanSukses}
          />
          {pesanSukses && (
            <div className="bg-green-100 text-emerald-700 p-4 rounded-md">
              {pesanSukses}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );    
}
export default App;