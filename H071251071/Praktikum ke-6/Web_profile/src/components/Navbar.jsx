function Navbar() {
  const menuItems = [
    { label: 'Tentang', href: '#about' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <header className="border-b border-[#202c29]/10">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl flex-col items-stretch gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <a className="group flex items-center gap-3" href="#home" aria-label="Aiman Amil, beranda">
          <span className="grid size-10 place-items-center rounded-full bg-[#e66b48] font-serif text-lg text-white transition-transform group-hover:rotate-12">
            AA
          </span>
          <span className="text-sm font-semibold tracking-wide">Aiman Amil</span>
        </a>
        <div className="flex w-full items-center justify-between sm:w-auto sm:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => console.log(item.label)}
              className="text-[11px] font-medium text-[#53625d] transition-colors hover:text-[#e66b48] sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar