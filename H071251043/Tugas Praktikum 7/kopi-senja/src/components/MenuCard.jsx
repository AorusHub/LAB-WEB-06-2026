function MenuCard({
  menu,
  menuDetail,
  setMenuDetail,
  tambahPesanan,
}) {
  const detailTerbuka = menuDetail.includes(menu.id);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-4 h-40 overflow-hidden rounded-xl">
        <img
        src={menu.gambar}
        alt={menu.nama}
        className="h-48 w-full object-contain"
      />
    </div>

      <h2 className="text-lg font-bold text-gray-800">
        {menu.nama}
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {menu.kategori}
      </p>

      <p className="my-3 font-semibold text-yellow-800">
        Rp{menu.harga.toLocaleString("id-ID")}
      </p>

      <p
        className={
          menu.tersedia
            ? "text-sm text-green-600"
            : "text-sm text-red-500"
        }
      >
        {menu.tersedia ? "Tersedia" : "Stok habis"}
      </p>

      <button
        onClick={() => {
          if (detailTerbuka) {
            setMenuDetail(
              menuDetail.filter((id) => id !== menu.id)
            );
          } else {
            setMenuDetail([...menuDetail, menu.id]);
          }
        }}

        className={`mt-4 rounded-lg px-4 py-2 text-sm font-medium ${
          detailTerbuka
            ? "bg-slate-200 hover:bg-slate-300"
            : "bg-yellow-100 hover:bg-yellow-200"
        }`}
                
      >
        {detailTerbuka ? "Tutup Detail" : "Lihat Detail"}
      </button>

      
      <button
        onClick={() => tambahPesanan(menu)}
        disabled={!menu.tersedia}
        className={`mt-3 w-full rounded-lg px-4 py-2 font-medium 
      ${
        menu.tersedia
        ? "bg-amber-700 text-white hover:bg-amber-500"
        : "cursor-not-allowed bg-gray-200 text-gray-500"
      }`}
      >
        {menu.tersedia ? "Tambah Pesanan" : "Stok Habis"}
      </button>


      {detailTerbuka && (
        <p className="mt-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
          {menu.deskripsi}
        </p>
      )}
    </div>
  );
}

export default MenuCard;
