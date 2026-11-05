const tutupMenu = () => {
    const saklar = document.getElementById("menu-toggle");
    if (saklar) {
        saklar.checked = false;
    }
};

window.addEventListener("scroll", tutupMenu);

function Navbar() {
    const menu = ["Home", "Tentang", "Proyek", "Keahlian", "Galeri"];

    const handleClick = (nama) => {
        console.log("Menu diklik", nama);
        document.getElementById("menu-mobile");
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-violet-950 text-white backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between px-4 py-3">
                <h2 className="font-display text-xl font-bold tracking-wide">
                    Rasyah 
                    <span className="text-amber-300">.</span>
                </h2>
                <input type = "checkbox" id="menu-toggle" className="peer hidden"></input>
                <label
                    htmlFor = "menu-toggle"
                    aria-label="Buka atau Tutup Menu"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/30 text-xl select-none hover:bg-white/10 md:hidden">
                        ☰
                </label>
                <ul className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-violet-950 text-center shadow-xl peer-checked:block md:static md:flex md:items-center md:gap-x-8 md:border-0 md:bg-transparent md:shadow-none">
                    {menu.map((item, index) => (
                        <li key = {index} className="border-t border-white/10 md:border-0">
                            < a
                                href =  {`#${item.toLowerCase()}`}
                                onClick = {() => handleClick(item)}
                                className="block px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors hover:bg-white/10 hover:text-amber-300 md:p-0 md:hover:bg-transparent">
                                {item}
                            </a>    
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;