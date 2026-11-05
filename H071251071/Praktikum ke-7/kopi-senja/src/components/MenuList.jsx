import MenuCard from "./MenuCard";
function MenuList({ menuItems, onTambahPesanan }) {
    if (!menuItems || menuItems.length === 0) {
        return (
            <div className="text-center text-amber-900">
                <p>Menu tidak tersedia.</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
                <MenuCard 
                key={item.id} 
                item={item} 
                onTambahPesanan={onTambahPesanan} />
            ))}
        </div>
    );
}
export default MenuList;