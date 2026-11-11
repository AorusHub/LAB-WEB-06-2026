const menus = [
  { id: 1, name: 'Beranda', href: '#beranda' },
  { id: 2, name: 'Tentang', href: '#tentang' },
  { id: 3, name: 'Keahlian', href: '#keahlian' },
  { id: 4, name: 'Galeri', href: '#galeri' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <a href="#beranda" className="navbar-logo">
          Lorem Ipsum
        </a>
        <ul className="navbar-menu">
          {menus.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.href}
                className="navbar-link"
                onClick={() => console.log(menu.name)}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
