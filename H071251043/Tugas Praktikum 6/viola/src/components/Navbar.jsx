const menus = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Skills", href: "#skills" },
  { id: 5, name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-[#fbfaf5]/95 px-4 py-3 backdrop-blur sm:px-7">
      <a
        href="#home"
        onClick={() => console.log("VVD logo clicked")}
        className="flex items-center gap-2 font-black tracking-tight"
        aria-label="Go to home"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-900 bg-[#d9f2e4] text-xs">
          V
        </span>
        <span className="hidden text-sm sm:inline">VIOLA'S NOTEBOOK</span>
      </a>

      <div className="flex flex-wrap items-center gap-1">
        {menus.map((menu) => (
          <a
            key={menu.id}
            href={menu.href}
            onClick={() => console.log(menu.name)}
            className="rounded-full px-2.5 py-2 text-[10px] font-bold uppercase tracking-wider transition hover:bg-[#dceaff] sm:px-3 sm:text-xs"
          >
            {menu.name}
          </a>
        ))}
      </div>

      <a
        href="mailto:violavelisitas15@gmail.com"
        onClick={() => console.log("Contact email clicked")}
        className="hidden rounded-full border border-stone-900 px-3 py-2 text-[10px] font-bold uppercase tracking-wider sm:inline-block"
      >
        ♥ Contact
      </a>
    </nav>
  );
}

export default Navbar;