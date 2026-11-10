"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import pool from "@/lib/db";
import { parseId } from "@/lib/helpers";

const KATEGORI_VALID = ["Teknologi", "Fiksi", "Pengembangan Diri"];

function bacaForm(formData) {
  const values = {
    judul: String(formData.get("judul") ?? "").trim(),
    penulis: String(formData.get("penulis") ?? "").trim(),
    kategori: String(formData.get("kategori") ?? "").trim(),
    tahun: String(formData.get("tahun") ?? "").trim(),
    tersedia: String(formData.get("tersedia") ?? ""),
    sinopsis: String(formData.get("sinopsis") ?? "").trim(),
  };

  const errors = {};
  const tahunMaks = new Date().getFullYear() + 1;

  if (!values.judul) errors.judul = "Judul wajib diisi";
  else if (values.judul.length > 200) errors.judul = "Judul maksimal 200 karakter";

  if (!values.penulis) errors.penulis = "Penulis wajib diisi";
  else if (values.penulis.length > 150) errors.judul = "Penulis maksimal 150 karakter";

  if (!KATEGORI_VALID.includes(values.kategori)) {
    errors.kategori = "Pilih salah satu kategori";
  }

  if (!/^\d{4}$/.test(values.tahun) || Number(values.tahun) > tahunMaks) {
    errors.tahun = `Tahun harus 4 digit angka dan tidak lebih dari ${tahunMaks}`;
  }

  if (values.tersedia !== "true" && values.tersedia !== "false") {
    errors.tersedia = "Status ketersediaan tidak valid";
  }

  if (!values.sinopsis) errors.sinopsis = "Sinopsis wajib diisi";

  return { values, errors };
}

export async function tambahBuku(prevState, formData) {
  const { values, errors} = bacaForm(formData);
  if (Object.keys(errors).length > 0) return { errors, values };

  try {
    await pool.query(
      "INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        values.judul,
        values.penulis,
        values.kategori,
        Number(values.tahun),
        values.tersedia === "true",
        values.sinopsis,
      ]
    );

  } catch (error) {
    console.error(error);
    return { errors: { umum: "Gagal menyimpan ke database. Coba lagi" }, values };
  }

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}

export async function updateBuku(id, prevState, formData) {
  const idAngka = parseId(id);
  const { values, errors } = bacaForm(formData);

  if (idAngka === null) {
    return { errors: { umum: "ID buku tidak valid" }, values };
  }
  if (Object.keys(errors).length > 0) return { errors, values };

  let hasil;
  try {
    hasil = await pool.query (
      "UPDATE buku SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6 WHERE id = $7",
      [
        values.judul,
        values.penulis,
        values.kategori,
        Number(values.tahun),
        values.tersedia === "true",
        values.sinopsis,
        idAngka,
      ]
    );
  } catch (error) {
    console.error(error);
    return { errors: { umum: "Gagal menyimpan perubahan. Coba lagi" }, values };
  }

  if (hasil.rowCount === 0) {
    return { errors: { umum: "Buku tidak ditemukan" }, values };
  }

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${idAngka}`);
  revalidatePath("/");
  redirect(`/katalog/${idAngka}`);
}

export async function hapusBuku(id) {
  const idAngka = parseId(id);
  if (idAngka === null) return;

  await pool.query ("DELETE FROM buku WHERE id = $1",
    [idAngka]);
}