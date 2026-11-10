export function parseId(nilai) {
  const teks = String(nilai);
  if (!/^\d+$/.test(teks)) return null;
  const angka = Number(nilai);
  return angka > 0 && angka <= 2147483647 ? angka : null;
}