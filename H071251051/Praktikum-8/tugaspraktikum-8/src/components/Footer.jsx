function Footer() {
    return (
        <footer className="bg-tinta text-kertas">
            <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm">
                <p className="font-judul text-xl font-semibold tracking-wider">
                    Pustaka Senja
                </p>
                <p className="text-kertas/70">
                    Ruang baca komunitas, buka setiap sore hingga senja.
                </p>
                <p className="text-kertas/70">
                    &copy; 2026 Pustaka Senja
                </p>
            </div>
        </footer>
    );
}

export default Footer;