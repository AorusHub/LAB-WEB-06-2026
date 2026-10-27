function Navbar({ kategoriAktif, setKategoriAktif }) {
  const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan",];

  return (
    <nav className="bg-yellow-100 p-4 text-white">
      <h1 className="mb-4 text-yellow-600 text-2xl text-center font-bold">
        Kedai Kopi Senja
      </h1>

      <div className="flex flex-wrap gap-2 justify-center">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setKategoriAktif(kategori)}
            className={`rounded-full px-4 py-2 ${
            kategoriAktif === kategori
            ? "bg-yellow-200  border border-white text-black"
            : "border border-black text-black"
            }`}
          >
            {kategori}
          </button>
        ))}

      </div>

    </nav>
  );
}

export default Navbar;