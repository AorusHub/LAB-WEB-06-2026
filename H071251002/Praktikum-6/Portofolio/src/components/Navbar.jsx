
const menu = ["Home", "About", "Skills", "Projects"];

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-navy bg-cream px-6 py-4 text-navy md:px-12 lg:px-20">

            <a className="font-['Bricolage_Grotesque'] text-2xl font-bold text-pink">
                Zah <span className="text-navy underline decoration-pink">The Kid</span>
            </a>

            <input type="checkbox" id="menu-toggle" className="peer hidden" />

            <label
                htmlFor="menu-toggle"
                className="cursor-pointer text-2xl md:hidden"
            >
                ☰
            </label>

            <div className="absolute left-0 top-full hidden w-full flex-col gap-2 border-b-2 border-navy bg-cream p-4 peer-checked:flex md:static md:flex md:w-auto md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0">
                {menu.map((item, index) => (
                    <a
                        key={index}
                        className="rounded-lg px-3 py-2 font-semibold transition-colors duration-300 hover:bg-white hover:text-pink md:px-0 md:py-1 md:hover:bg-transparent"
                        onClick={() => console.log(`${item} diklik`)}
                    >
                        {item}
                    </a>
                ))}
            </div>

        </nav>
    );
}

export default Navbar;