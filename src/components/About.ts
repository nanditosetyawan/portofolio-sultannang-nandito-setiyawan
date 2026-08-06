import '../styles/about.css';
import { getYearsInProgramming, HAPPY_CLIENTS, WORKING_PRINCIPLES } from '../data/about';
import { projects } from '../data/projects';
import { reviews } from '../data/review';

// Icon imports from src/assets/icons/
import phpIcon from '../assets/icons/php.webp';
import htmlIcon from '../assets/icons/html.webp';
import cssIcon from '../assets/icons/css.webp';
import cppIcon from '../assets/icons/cplusplus.webp';
import laravelIcon from '../assets/icons/laravel.webp';
import jsIcon from '../assets/icons/js.webp';
import reactIcon from '../assets/icons/react.webp';
import pythonIcon from '../assets/icons/python.webp';
import javaIcon from '../assets/icons/java.webp';
import xamppIcon from '../assets/icons/xampp.webp';
import laragonIcon from '../assets/icons/laragon.webp';
import tsIcon from '../assets/icons/ts.webp';
import ciscoIcon from '../assets/icons/cisco.webp';
import qgisIcon from '../assets/icons/qgis.webp';
import figmaIcon from '../assets/icons/figma.webp';
import gitIcon from '../assets/icons/githubb.webp';
import dockerIcon from '../assets/icons/docker.webp';
import mysqlIcon from '../assets/icons/mysql.webp';
import tailwindIcon from '../assets/icons/tailwind.webp';

/* ============================================================
   SKILL DATA
   ✏️ CARA TAMBAH ICON:
      1. Taruh file .webp di src/assets/icons/ (nama file = label.lowercase())
      2. Import di atas, lalu tambah entry di array SKILLS di bawah
         — urut: atas = lama, bawah = terbaru
   ✏️ LOGIKA DINAMIS:
      - Array dibalik → skill terbaru tampil PALING AWAL (paling kiri)
      - Target total slot T = max(SKILLS.length, 24)
      - Jika SKILLS < 24 → sisa diisi random dari SKILLS tanpa duplikat berdekatan
      - Jika SKILLS >= 24 → semua tampil sekali, tanpa looping
      - Row 1 = ceil(T/2), Row 2 = sisanya
   ============================================================ */
interface Skill {
  label: string;
  src: string;
}

const SKILLS: Skill[] = [
  /* Lama (atas array) → akan tampil di akhir */
  { label: 'PHP',     src: phpIcon },
  { label: 'HTML',    src: htmlIcon },
  { label: 'CSS',     src: cssIcon },
  { label: 'C++',     src: cppIcon },
  { label: 'Laravel', src: laravelIcon },
  { label: 'JS',      src: jsIcon },
  { label: 'React',   src: reactIcon },
  { label: 'Python',  src: pythonIcon },
  { label: 'Java',    src: javaIcon },
  /* Baru (bawah array) → akan tampil di awal */
  { label: 'XAMPP',   src: xamppIcon },
  { label: 'Laragon', src: laragonIcon },
  { label: 'TS',      src: tsIcon },
  { label: 'Cisco',   src: ciscoIcon },
  { label: 'QGIS',    src: qgisIcon },
  { label: 'Figma',   src: figmaIcon },
  { label: 'Git',     src: gitIcon },
  { label: 'Docker',  src: dockerIcon },
  { label: 'MySQL',   src: mysqlIcon },
  { label: 'Tailwind',src: tailwindIcon },
];

/* ── Logika dinamis: reverse → pad to 24 (random, no adjacent dupes) → split rows ── */
function buildSkillRows(skills: Skill[]): { row1: Skill[], row2: Skill[] } {
  /* 1. Reverse agar terbaru di awal (index 0 = kiri paling awal) */
  const reversed = [...skills].reverse();

  /* 2. Target total slot */
  const T = Math.max(reversed.length, 24);

  /* 3. Jika < 24, isi sisa dengan random tanpa duplikat berdekatan */
  let pool = [...reversed];
  while (pool.length < T) {
    /* Pilih kandidat yang tidak sama dengan terakhir & pertama (untuk wrap loop) */
    const candidates = skills.filter(s =>
      s.label !== pool[pool.length - 1].label &&
      s.label !== pool[0].label
    );
    if (candidates.length === 0) break; // fallback (semua sama labelnya)
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    pool.push(pick);
  }

  /* 4. Split dinamis */
  const row1Count = Math.ceil(T / 2);
  const row1 = pool.slice(0, row1Count);
  const row2 = pool.slice(row1Count);

  return { row1, row2 };
}

const { row1: row1Skills, row2: row2Skills } = buildSkillRows(SKILLS);

const skillCircleHTML = (s: Skill): string => `
  <div class="about-skill-circle" title="${s.label}">
    <img src="${s.src}" alt="${s.label}" class="about-skill-img" />
  </div>`;

/* ============================================================
   EDUCATION DATA
   ✏️ Tambah, ubah, atau hapus item di sini sesuai riwayat.
      idx    : nomor urut (tampil di UI)
      name   : nama institusi
      major  : jurusan / program
      period : rentang waktu
      desc   : deskripsi singkat
   ============================================================ */
interface EduItem {
  idx: string;
  name: string;
  major: string;
  period: string;
  desc: string;
}

const EDUCATION: EduItem[] = [
  {
    idx: '01',
    name: 'Universitas Pembangunan Nasional "VETERAN" Yogyakarta',
    major: 'Sistem Informasi',
    period: '2024 – sekarang',
    desc: 'Mempelajari sistem informasi, analisis data, dan teknologi informasi.',
  },
  {
    idx: '02',
    name: 'SMA Negeri 1 Kasihan',
    major: 'Ilmu Pengetahuan Sosial',
    period: '2021 – 2024',
    desc: 'Mempelajari ilmu sosial, ekonomi, dan pengembangan diri.',
  },
];

const calendarIcon = `
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2.2"
       stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`;

const eduItemHTML = (e: EduItem, i: number): string => `
  <div class="about-edu-item" data-edu-index="${i}">
    <div class="about-edu-num">${e.idx}</div>
    <div class="about-edu-body">
      <h3 class="about-edu-name">${e.name}</h3>
      <div class="about-edu-major">${e.major}</div>
      <div class="about-edu-period">
        ${calendarIcon}
        <span>${e.period}</span>
      </div>
      <p class="about-edu-desc">${e.desc}</p>
    </div>
  </div>`;

/* ============================================================
   ABOUT COMPONENT
   ============================================================ */
export const About = (): string => `
  <section id="about" class="about-section">

    <!-- ══════════════════════════════════════════════════════
         PART 1 ▸ CURVED TITLE  +  PHOTO PLACEHOLDER
    ══════════════════════════════════════════════════════ -->
    <div class="about-hero-part">

      <!--
        CURVED TITLE — SVG textPath
        ✏️ ATUR KELENGKUNGAN: ubah nilai Y tengah pada "Q 250, <Y>"
           5–25  → sangat melengkung ke atas
           40–70 → hampir datar
           Default: 15
      -->
      <div class="about-curved-wrap">
        <svg class="about-curved-svg"
             viewBox="0 0 500 90"
             xmlns="http://www.w3.org/2000/svg"
             aria-label="About Me"
             role="img">
          <defs>
            <path id="aboutCurve" d="M 20,78 Q 250,15 480,78" />
          </defs>
          <text class="about-curved-text">
            <textPath href="#aboutCurve" startOffset="50%" text-anchor="middle">
              ABOUT ME
            </textPath>
          </text>
        </svg>
      </div>

      <!--
        PHOTO PLACEHOLDER
        ✏️ UKURAN: ubah --about-photo-size & --about-photo-ratio di about.css
        ✏️ CARA PASANG FOTO ASLI:
           1. Hapus seluruh <div class="about-photo-dummy"> ... </div>
           2. Tempel di dalam .about-photo-frame:
              <img src="/foto-saya.jpg"
                   alt="Nandito Setiyawan"
                   class="about-photo-img" />
      -->
      <div class="about-photo-wrap">
        <div class="about-photo-frame about-floating" id="aboutPhoto">

          <!-- ── PLACEHOLDER (hapus blok ini saat foto asli dipasang) ── -->
          <div class="about-photo-dummy">
            <svg class="about-photo-icon" viewBox="0 0 80 80" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="28" r="15"
                      stroke="var(--accent)" stroke-width="2"
                      stroke-dasharray="5 3"/>
              <path d="M 8,72 C 10,50 70,50 72,72"
                    stroke="var(--accent)" stroke-width="2"
                    stroke-dasharray="5 3" fill="none"/>
            </svg>
            <span class="about-photo-hint">Foto kamu di sini</span>
          </div>
          <!-- ── END PLACEHOLDER ────────────────────────────────── -->

        </div>
      </div>

    </div><!-- /about-hero-part -->


    <!-- ══════════════════════════════════════════════════════
         PART 2 ▸ SKILL ICON ROWS  (ZIGZAG + SCROLL PARALLAX)
    ══════════════════════════════════════════════════════ -->
    <!--
      ✏️ CARA GANTI ICON PER SKILL:
         Di array SKILLS atas, ubah src dari null → '/icons/nama.png'

      ✏️ KONFIGURASI PARALLAX (di dom.ts):
         ZIGZAG_SPEED   — kecepatan gerak (default 0.12)
         ROW2_OFFSET_PX — offset zigzag baris ke-2 (default 46)

      ✏️ UKURAN LINGKARAN & JARAK ANTAR BARIS:
         --skill-circle-size & --skills-row-gap di about.css
    -->
    <div class="about-skills-section" id="aboutSkillsSection">

      <!-- Baris 1: gerak ke KANAN saat scroll ke bawah -->
      <div class="about-skills-row" data-skills-row="1">
        ${row1Skills.map(skillCircleHTML).join('')}
      </div>

      <!-- Baris 2: gerak ke KIRI saat scroll ke bawah (offset zigzag via JS) -->
      <div class="about-skills-row" data-skills-row="2">
        ${row2Skills.map(skillCircleHTML).join('')}
      </div>

    </div><!-- /about-skills-section -->


    <!-- ══════════════════════════════════════════════════════
         PART 3 ▸ RIWAYAT PENDIDIKAN  (STICKY DESKTOP)
    ══════════════════════════════════════════════════════ -->
    <!--
      Desktop: kiri STICKY (diam), kanan berganti item saat scroll
      Mobile : layout kolom sederhana, semua item tampil

      ✏️ KONFIGURASI (semuanya di dom.ts):
         EDU_SWITCH_POINT — progress (0–1) saat berganti ke item ke-2 (default 0.45)
         DOT_POSITIONS    — posisi dot di garis vertikal per item, misal ['25%', '72%']
         EDU_DOT_MS       — durasi animasi dot dalam ms (default 550)

      ✏️ DURASI "TERPINNED":
         --edu-scroll-height di about.css (default 270vh)
         Semakin besar → user perlu scroll lebih lama sebelum ke Projects
    -->
    <div class="about-edu-section" id="aboutEduSection">
      <div class="about-edu-sticky">

        <!-- KIRI: heading — tetap di posisi saat scroll (sticky) -->
        <div class="about-edu-left">
          <h2 class="about-edu-heading font-cabinet">
            Riwayat<br>Pendidikan
          </h2>
        </div>

        <!-- KANAN: timeline vertikal + item-item pendidikan -->
        <div class="about-edu-right">

          <!-- Garis vertikal & dot bergerak -->
          <div class="about-edu-line">
            <!--
              ✏️ POSISI DOT: DOT_POSITIONS di dom.ts
                 ['25%', '72%'] → item 01 di atas, item 02 di bawah
              ✏️ UKURAN DOT: --edu-dot-size di about.css
            -->
            <div class="about-edu-dot" id="aboutEduDot"></div>
          </div>

          <!-- Item pendidikan — track bergerak translateY saat scroll -->
          <div class="about-edu-items">
            <div class="about-edu-items-track" id="aboutEduTrack">
              ${EDUCATION.map(eduItemHTML).join('')}
            </div>
          </div>

        </div><!-- /about-edu-right -->

      </div><!-- /about-edu-sticky -->
    </div><!-- /about-edu-section -->

    <!-- ══════════════════════════════════════════════════════
         PART 4 ▸ WHAT I'VE DONE — Stats + CTA
    ══════════════════════════════════════════════════════ -->
    <!--
      ✏️ KONFIGURASI STATS:
         Ubah di src/data/about.ts:
           PROGRAMMING_START_DATE — tanggal mulai coding (YYYY-MM-DD)
           HAPPY_CLIENTS          — jumlah happy client
         Jumlah project dihitung otomatis dari src/data/projects.ts

      ✏️ TEKS DESKRIPSI:
         Ubah isi <p class="about-wid-desc"> di bawah ini.

      ✏️ TOMBOL CTA:
         Ubah href jika ID section Contact berubah.
    -->
    <div class="about-wid-section">
      <div class="about-wid-inner">

        <!-- Judul utama -->
        <h2 class="about-wid-title font-cabinet">What I've done?</h2>

        <!-- Paragraf deskripsi —— ✏️ ganti lorem ipsum ini dengan teks asli kamu -->
        <p class="about-wid-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <!-- 3 angka statistik -->
        <div class="about-wid-stats">

          <!-- Stat kiri: tahun di programming -->
          <div class="about-wid-stat">
            <!--
              ✏️ ANGKA TAHUN: dihitung otomatis dari PROGRAMMING_START_DATE di data/about.ts.
                 Format: angka tahun + "+", contoh: 1+, 2+, dst.
            -->
            <span class="about-wid-num" id="statYears" data-counter data-target="${getYearsInProgramming().replace('+','')}" data-suffix="+">${getYearsInProgramming()}</span>
            <span class="about-wid-label">Years in<br>Programming</span>
          </div>

          <!-- Stat tengah: jumlah project -->
          <div class="about-wid-stat about-wid-stat--center">
            <!--
              ✏️ JUMLAH PROJECT: dihitung otomatis dari data/projects.ts.
                 Maksimal tampil 99+. Tambah project di sana, angka ini otomatis naik.
            -->
            <span class="about-wid-num" id="statProjects" data-counter data-target="${
              (() => {
                const count = Array.isArray(projects) ? projects.length : 0;
                return count >= 99 ? '99' : `${count}`;
              })()
            }" data-suffix="${
              (() => {
                const count = Array.isArray(projects) ? projects.length : 0;
                return count >= 99 ? '+' : '';
              })()
            }">${
              (() => {
                const count = Array.isArray(projects) ? projects.length : 0;
                /* ✏️ Batas maksimal tampilan: 99 — baru ada "+" jika ≥99 */
                return count >= 99 ? '99+' : `${count}`;
              })()
            }</span>
            <span class="about-wid-label">Projects<br>Completed</span>
          </div>

          <!-- Stat kanan: happy client -->
          <div class="about-wid-stat">
            <!--
              ✏️ HAPPY CLIENTS: Dihitung secara otomatis dari data review.tsx.
            -->
            <span class="about-wid-num" id="statClients" data-counter data-target="${reviews.length}" data-suffix="+">${reviews.length}+</span>
            <span class="about-wid-label">Happy<br>Clients</span>
          </div>

        </div><!-- /about-wid-stats -->

        <!-- CTA Button ──────────────────────────────────────────
          ✏️ Ubah href jika ID section Contact berubah (saat ini: #contact)
          ✏️ Ubah teks tombol di antara tag <a> jika perlu
        -->
        <a href="#contact" class="about-wid-cta" id="aboutWidCta" aria-label="Navigate to Contact section">
          Lets work together
          <svg class="about-wid-cta-arrow" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

      </div><!-- /about-wid-inner -->
    </div><!-- /about-wid-section -->


    <!-- ══════════════════════════════════════════════════════
         PART 5 ▸ MY WORKING PRINCIPLES — Transisi Panel/Card
    ══════════════════════════════════════════════════════ -->
    <!--
      ✏️ PRINSIP DATA:
         Ubah isi data di src/data/about.ts pada array WORKING_PRINCIPLES.
         Ini akan me-render nomor, judul, dan deskripsi secara dinamis.
    -->
    <div class="about-wpr-section" id="aboutWorkingPrinciples">
      <div class="about-wpr-card">
        
        <!-- Judul section -->
        <h2 class="about-wpr-title font-cabinet">Built On Principles</h2>

        <!-- Decorative Background Elements (Draggable & Static) -->
        <img src="${new URL('../assets/icons/bintang_isi_hitam.png', import.meta.url).href}" 
             class="about-wpr-bintang-isi" 
             id="bintangIsi"
             alt="Bintang Isi" 
             draggable="false" />
        
        <img src="${new URL('../assets/icons/bintang_kosong_hitam.png', import.meta.url).href}" 
             class="about-wpr-bintang-kosong" 
             id="bintangKosong"
             alt="Bintang Kosong" 
             draggable="false" />
             
        <img src="${new URL('../assets/icons/dragme_putih.png', import.meta.url).href}" 
             class="about-wpr-dragme" 
             alt="Drag Me Label" 
             draggable="false" />

        <!-- Container list prinsip -->
        <div class="about-wpr-list">
          ${WORKING_PRINCIPLES.map((p, idx) => `
            <div class="about-wpr-item">
              <div class="about-wpr-item-inner">
                <!-- Nomor besar (tegas & kaku/kotak) -->
                <div class="about-wpr-num font-cabinet">${p.idx}</div>
                <!-- Konten teks kanan (judul & deskripsi) -->
                <div class="about-wpr-content">
                  <h3 class="about-wpr-item-title">${p.title}</h3>
                  <p class="about-wpr-item-desc">${p.desc}</p>
                </div>
              </div>
              <!-- Divider line artistik di bawah item 01 & 02 -->
              ${idx < WORKING_PRINCIPLES.length - 1 ? '<div class="about-wpr-divider"></div>' : ''}
            </div>
          `).join('')}
        </div>

      </div>
    </div>

  </section>
`;