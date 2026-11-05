"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
    { nama: "Beranda", path: "/" },
    { nama: "Katalog", path: "/katalog" },
    { nama: "Usulan Buku", path: "/usulan" },
    { nama: "Peminjaman", path: "/peminjaman"},
];

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-kertas border-b-4 border-tinta/25 sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center border-2 border-tinta font-judul text-lg font-bold"
                    >
                        PS
                    </span>
                    <span className="font-judul text-2xl font-semibold tracking-wider">
                        Pustaka Senja
                    </span>
                    </Link>

                    <ul className="flex items-center gap-6">
                        {daftarMenu.map((item) => {
                            const isActive =
                                item.path === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.path);

                            return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={
                                        isActive
                                        ? "text-tinta font-semibold border-b-4 border-awan pb-1 text-sm"
                                        : "text-tinta/60 hover:text-tinta transition text-sm"
                                    }
                                >
                                    {item.nama}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
