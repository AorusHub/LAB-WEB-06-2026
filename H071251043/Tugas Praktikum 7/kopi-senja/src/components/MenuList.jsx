import MenuCard from "./MenuCard";

function MenuList({
  daftarMenu,
  kategoriAktif,
  menuDetail,
  setMenuDetail,
  tambahPesanan,
}) {
  const menuDitampilkan =
    kategoriAktif === "Semua"
      ? daftarMenu
      : daftarMenu.filter(
          (menu) => menu.kategori === kategoriAktif
        );

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="mb-5 text-xl font-bold text-amber-800">
        Menu
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {menuDitampilkan.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            menuDetail={menuDetail}
            setMenuDetail={setMenuDetail}
            tambahPesanan={tambahPesanan}
          />
        ))}
      </div>

      {menuDitampilkan.length === 0 && (
        <p className="text-gray-500">
          Belum ada menu dalam kategori ini.
        </p>
      )}
    </section>
  );
}

export default MenuList;
