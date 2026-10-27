function Navbar({ jumlahItem, totalHarga }) {
    return (
        <nav className="sticky top-0 z-20 bg-kombu text-bone">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="font-display text-lg">Kopi Senja</span>
            </div>

            <div className="flex items-center gap-4 text-sm sm:gap-6">
            <a href="#menu" className="transition hover:text-tan">
                Menu
            </a>
            <a href="#pesanan" className="transition hover:text-tan">
                Pesanan
            </a>
            <a href="#pesanan" className="rounded-full bg-tan px-4 py-2 text-noir">
                {jumlahItem} item | Rp {totalHarga.toLocaleString('id-ID')}
            </a>
            </div>
        </div>
        </nav>
    )
}

export default Navbar