import MenuCard from "./MenuCard.jsx";

function MenuList({ daftarMenu, kategoriAktif, onTambah }) {
  return (
    <section>
      <h2 className="mb-4 font-serif text-xl font-bold">Daftar Menu</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {daftarMenu.map(
          (menu) =>
            (kategoriAktif === "Semua" || menu.kategori === kategoriAktif) && (
              <MenuCard
                key={menu.id}
                id={menu.id}
                nama={menu.nama}
                kategori={menu.kategori}
                harga={menu.harga}
                tersedia={menu.tersedia}
                deskripsi={menu.deskripsi}
                onTambah={onTambah}
              />
            )
        )}
      </div>
    </section>
  );
}

export default MenuList;
