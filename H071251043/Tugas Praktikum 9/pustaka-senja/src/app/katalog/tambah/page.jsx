import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "@/app/katalog/actions";

const nilaiKosong = {
  judul: "",
  penulis: "",
  kategori: "",
  tahun: "",
  tersedia: "true",
  sinopsis: "",
};

export default function TambahBuku() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-200">
        Tambah Buku
      </h1>
      <FormBuku 
      action={tambahBuku}
      nilaiAwal={nilaiKosong}
      labelTombol="Simpan  Buku"
      hrefBatal="/katalog"
      />
    </div>
  );
}