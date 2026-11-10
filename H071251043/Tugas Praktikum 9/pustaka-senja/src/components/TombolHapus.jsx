"use client";

import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus ({ id, judul, className = "" }) {
  async function HandleClick() {
    const yakin = window.confirm(`Hapus buku "${judul}" ?  Tindakan ini tidak bisa dubatalkan`);
    if (!yakin) return;
    await hapusBuku (id);
  }

  return (
    <button
    type="button"
    onClick={HandleClick}
    className={`ml-auto hover:translate-y-1 ${className}`}
    >
      🗑️
    </button>
  );
}