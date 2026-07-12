/* ============================================================
   ABOUT DATA
   ✏️ CARA UBAH:
      - programmingStartDate : ubah ke tanggal kamu mulai coding
      - happyClients         : isi angka saat kamu punya klien
   ============================================================ */

/** Tanggal kamu pertama mulai terjun di programming.
 *  Format: 'YYYY-MM-DD' */
export const PROGRAMMING_START_DATE = '2024-08-18';

/** Jumlah happy client saat ini.
 *  ✏️ Ubah angka ini saat kamu punya klien.
 *  0 = belum ada klien / default aman. */
export const HAPPY_CLIENTS = 0;

/** Hitung berapa tahun sudah coding sejak PROGRAMMING_START_DATE.
 *  - Menggunakan selisih tahun kalender (ceiling ke tahun berjalan).
 *  - Contoh: mulai 2024, sekarang 2026 → tampil "2+" (sudah masuk tahun ke-2).
 *  - Jika baru mulai di tahun yang sama, tampil "1+" agar tidak nol.
 */
export function getYearsInProgramming(): string {
  const start = new Date(PROGRAMMING_START_DATE);
  const now   = new Date();

  // Selisih tahun kalender — langsung ceiling ke tahun berjalan.
  // Misal: mulai Agustus 2024, sekarang Juli 2026 → 2026 - 2024 = 2.
  const years = now.getFullYear() - start.getFullYear();

  // Minimal 1 agar tidak pernah tampil 0 atau negatif
  const display = Math.max(years, 1);
  return `${display}+`;
}

/* ============================================================
   WORKING PRINCIPLES DATA
   ✏️ UBAH ATAU TAMBAH PRINSIP DI SINI:
      idx   : Nomor urut (2 digit, misal '01')
      title : Judul prinsip kerja
      desc  : Deskripsi singkat prinsip kerja (1-2 baris)
   ============================================================ */
interface WorkingPrinciple {
  idx: string;
  title: string;
  desc: string;
}

export const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    idx: '01',
    title: 'Rajin dan semangat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum ipsum dolor sit amet.',
  },
  {
    idx: '02',
    title: 'Rajin dan semangat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum ipsum dolor sit amet.',
  },
  {
    idx: '03',
    title: 'Rajin dan semangat',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum ipsum dolor sit amet.',
  },
];


