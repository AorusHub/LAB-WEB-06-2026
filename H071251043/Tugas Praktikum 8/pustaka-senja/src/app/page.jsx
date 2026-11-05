import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/DataBuku";

export default function Beranda() {
  const total = dataBuku.length;
  const tersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const dipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    {label: "Total Koleksi Buku", nilai: total},
    {label: "Buku Tersedia", nilai: tersedia},
    {label: "Buku Dipinjam", nilai: dipinjam},
  ];

  return (
    <div>

      <Hero
      nama="Pustaka Senja"
      slogan="Ruang baca nyaman untuk menemani sore dan senjamu"
      lokasi="Dekat Kampus"
      jamBuka="Setiap hari, 10.00 - 20.00"
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {statistik.map((item) => (

          <div
          key={item.label}
          className="rounded-xl border border-amber-800 bg-slate p-6 text-center shadow-sm">

            <p className="text-3xl font-bold text-amber-600">
              {item.nilai}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {item.label}
            </p>

          </div>

        ))}
      </section>

      <div className="mt-8 flex justify-center gap-4">
        <Link href="/katalog"
        className="rounded-lg bg-amber-900 px-5 py-2 text-white hover:bg-amber-800">
        Lihat Katalog
        </Link>

        <Link href="/usulan"
        className="rounded-lg border border-amber-900 px-5 py-2 text-amber-900 hover:bg-amber-50">
          Usulan Buku
        </Link>
      </div>

    </div>
  );
}