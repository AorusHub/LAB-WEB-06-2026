import MenuCard from './MenuCard'

const daftarKategori = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan']

function MenuList({ daftarMenu, kategoriAktif, onGantiKategori, onTambah }) {
    let menuTampil = daftarMenu
    if (kategoriAktif !== 'Semua') {
        menuTampil = daftarMenu.filter((menu) => menu.kategori === kategoriAktif)
    }

    return (
        <section id="menu" className="bg-bone">
        <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="font-display text-3xl">Menu Kami</h2>
            <div className="mt-4 flex flex-wrap gap-2">
            {daftarKategori.map((kategori) => (
                <button
                key={kategori}
                type="button"
                onClick={() => onGantiKategori(kategori)}
                className={
                    kategori === kategoriAktif
                    ? 'rounded-full bg-kombu px-4 py-2 text-sm text-bone'
                    : 'rounded-full bg-tan px-4 py-2 text-sm text-noir'
                }
                >
                {kategori}
                </button>
            ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuTampil.map((menu) => (
                <MenuCard key={menu.id} menu={menu} onTambah={onTambah} />
            ))}
            </div>
        </div>
        </section>
    )
    }

export default MenuList