function Navbar({ kategoriAktif, onKategoriClick, jumlahPesanan, totalHarga }) {
  const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <header className="sticky top-0 z-10 bg-indigo-950 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-serif text-2xl font-bold tracking-tight">
          Kedai Kopi Senja
        </h1>
        <p className="text-sm text-indigo-100">
          Pesanan:{" "}
          <span className="font-bold text-orange-300">{jumlahPesanan} item</span>
          {" "}| Total:{" "}
          <span className="font-bold text-orange-300">
            Rp {totalHarga.toLocaleString("id-ID")}
          </span>
        </p>
      </div>
      <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
        {kategori.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => onKategoriClick(item)}
              className={
                item === kategoriAktif
                  ? "rounded-full bg-orange-400 px-4 py-1.5 text-sm font-bold text-indigo-950"
                  : "rounded-full border border-indigo-400 px-4 py-1.5 text-sm text-indigo-100 hover:bg-indigo-900"
              }
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
