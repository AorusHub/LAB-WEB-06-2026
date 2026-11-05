import { useState } from "react";

function MenuCard({ menu, onTambah }) {
  const [modalOpen, setModalOpen] = useState(false);

  const placeholderImages = {
    Kopi: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    "Non-Kopi": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    Makanan: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
  };

  const imageSrc = placeholderImages[menu.kategori] || placeholderImages["Kopi"];

  return (
    <>
      {/* Card Utama */}
      <div className="group relative flex flex-col items-center pt-16">
        <div className="absolute top-0 z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
          <img
            src={imageSrc}
            alt={menu.nama}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Card Body */}
        <div className="w-full rounded-3xl bg-amber-950 p-6 pt-20 text-white shadow-xl transition-all hover:shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold tracking-wide text-amber-50">
                {menu.nama}
              </h3>
              <p className="mt-1 text-xs font-light text-amber-200/80">
                {menu.kategori}
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs text-amber-300 underline hover:text-amber-100"
            >
              Detail
            </button>
          </div>

          <p className="mt-2 line-clamp-2 text-xs text-amber-100/70">
            {menu.deskripsi}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-amber-300/80">
                Harga
              </span>
              <span className="font-heading text-lg font-extrabold text-amber-400">
                Rp{menu.harga.toLocaleString("id-ID")}
              </span>
            </div>

            {menu.tersedia ? (
              <button
                onClick={() => onTambah(menu)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-950 shadow-md transition hover:bg-amber-400 hover:text-amber-950 active:scale-95"
                title="Tambah ke Pesanan"
              >
                <span className="text-xl font-bold">+</span>
              </button>
            ) : (
              <span className="rounded-full bg-red-950/80 px-3 py-1 text-xs font-semibold text-red-300 border border-red-800">
                Habis
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal Detail Item */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
            {/* Tombol Tutup */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100"
            >
              ←
            </button>

            {/* Gambar Header Modal */}
            <div className="mx-auto my-4 flex justify-center">
              <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-amber-100 shadow-lg">
                <img
                  src={imageSrc}
                  alt={menu.nama}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-bold text-stone-900">
                  {menu.nama}
                </h3>
                <span className="font-heading text-lg font-bold text-amber-800">
                  Rp{menu.harga.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Tentang Menu
                </h4>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                  {menu.deskripsi}
                </p>
              </div>

              <div className="mt-4 flex justify-between rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
                <span>Kategori: <strong>{menu.kategori}</strong></span>
                <span>
                  Status:{" "}
                  <strong className={menu.tersedia ? "text-emerald-700" : "text-red-600"}>
                    {menu.tersedia ? "Tersedia" : "Habis"}
                  </strong>
                </span>
              </div>

              <button
                onClick={() => {
                  if (menu.tersedia) {
                    onTambah(menu);
                    setModalOpen(false);
                  }
                }}
                disabled={!menu.tersedia}
                className={`mt-6 w-full rounded-2xl py-3.5 font-heading text-sm font-bold shadow-md transition ${
                  menu.tersedia
                    ? "bg-amber-700 text-white hover:bg-amber-800"
                    : "cursor-not-allowed bg-stone-200 text-stone-400"
                }`}
              >
                {menu.tersedia ? "Pesan Sekarang" : "Stok Habis"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuCard;