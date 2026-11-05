function Navbar({ kategoriAktif, setKategoriAktif, totalItem, totalHarga }){
    const daftarKategori = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan'];
    return ( 
    <header className="bg-amber-900 text-amber-50 shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold tracking-wide">Kedai Kopi Senja</h1> 
                <p className="text-xs text-amber-200">Sistem Pemesanan Tablet Meja</p> 
            </div>  
            <div className="flex gap-2"> 
                {daftarKategori.map((kategori) => ( 
                    <button
                        key={kategori}
                        className={`px-4 py-2 rounded-md transition-colors ${
                            kategoriAktif === kategori
                            ? 'bg-amber-500 text-amber-50'
                            : 'bg-amber-700 text-amber-200 hover:bg-amber-600'
                        }`}
                        onClick={() => setKategoriAktif(kategori)}
                    >
                        {kategori}
                    </button>
                ))} 
            </div> 
            <div className="text-right text-xs md:text-sm bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-700"> 
                <div><span>Total Item:</span> {totalItem}</div> 
                <div><span>Total Harga:</span> Rp {totalHarga.toLocaleString('id-ID')}</div> 
            </div> 
        </div> 
    </header> );
}
export default Navbar;