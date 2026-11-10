"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">

        <Link href="/" className="text-xl text-white font-bold">
          Pustaka Senja
        </Link>

        <ul className="flex gap-6">
          {menu.map((item) => {

            const aktif =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={
                    aktif
                      ? "border-b-2 border-white font-semibold text-white-100"
                      : "text-slate-400 hover:text-slate-100 hover:border-2 rounded-2xl p-1"
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
