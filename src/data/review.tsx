export interface ClientReview {
  name: string;
  institution: string;
  rating: number; // 1-5, e.g. 4, 4.5, 5
  comment: string;
}

export const reviews: ClientReview[] = [
  {
    name: "Ahmad Fauzi",
    institution: "TechSolusi Indonesia",
    rating: 4,
    comment: "Sangat puas dengan sistem kasir web yang dibuat. Tampilan admin dashboard sangat informatif dan responsif saat diakses dari tablet maupun mobile."
  },
  {
    name: "Siti Rahma",
    institution: "GIS & Spatial Research Center",
    rating: 4.5,
    comment: "Analisis spasial menggunakan QGIS sangat akurat. Visualisasi choropleth map disajikan dengan layout yang rapi dan mudah dipahami oleh tim stakeholder kami."
  },
  {
    name: "Budi Santoso",
    institution: "Klinik Medika Utama",
    rating: 5,
    comment: "Aplikasi survei kepuasan yang dikembangkan memiliki form validation yang sangat baik. UX-nya mulus, sehingga tingkat pengisian survei meningkat drastis."
  },
  {
    name: "Diana Lestari",
    institution: "Cipta Karya Design Studio",
    rating: 3.5,
    comment: "Prototype dashboard admin sangat premium dan interaktif. Semua elemen visual dan skema warna disesuaikan dengan brand identity kami dengan sangat baik."
  },
  {
    name: "Rian Hidayat",
    institution: "Global Network Solutions",
    rating: 5,
    comment: "Simulasi jaringan Cisco Packet Tracer sangat komprehensif. Dokumentasi yang diberikan sangat detail dan membantu kami dalam melakukan audit topologi jaringan."
  },
  {
    name: "Anita Wijaya",
    institution: "Pemerintah Daerah (Bappeda)",
    rating: 4.5,
    comment: "Kerjasama luar biasa untuk analisis tata ruang. Hasil visualisasinya sangat membantu dalam proses pengambilan keputusan strategis perencanaan wilayah."
  }
];
