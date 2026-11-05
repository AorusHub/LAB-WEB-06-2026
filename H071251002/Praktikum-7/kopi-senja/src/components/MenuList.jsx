import MenuCard from "./MenuCard";

function MenuList({ menu, onTambah }) {
  if (menu.length === 0) {
    return (
      <div className="py-12 text-center text-stone-400">
        <p className="text-lg">Menu tidak ditemukan</p>
        <p className="text-xs text-stone-400">Coba cari dengan kata kunci lain.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
      {menu.map((item) => (
        <MenuCard key={item.id} menu={item} onTambah={onTambah} />
      ))}
    </div>
  );
}

export default MenuList;