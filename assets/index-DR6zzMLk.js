var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/white_mode-C2emF1m6.png`,``+import.meta.url).href;new URL(`/portofolio-sultannang-nandito-setiyawan/assets/dark_mode-BcUgIVO5.png`,``+import.meta.url).href;var d=()=>`
    <!-- Top Navbar (Desktop) -->
    <header id="topNav" class="hidden md:block fixed top-0 left-0 right-0 z-[70] transition-all duration-500">
      <div id="navShell" class="nav-shell">
        <div class="mx-auto max-w-7xl px-4 md:px-8 py-4 md:py-3 flex items-center justify-between gap-4">
          <a href="#hero" class="font-cabinet font-extrabold tracking-tight text-base md:text-[1.05rem] text-text shrink-0" data-nav-link data-target="hero">Nandito Setiyawan</a>

          <nav id="desktopNav" class="flex nav-links text-sm font-semibold">
            <span id="navActivePill" class="nav-active-pill" aria-hidden="true"></span>
            <a class="nav-link nav-item active px-4 py-2 rounded-full" href="#hero" data-nav-link data-target="hero">Hero</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#about" data-nav-link data-target="about">About</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#projects" data-nav-link data-target="projects">Projects</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#achievements" data-nav-link data-target="achievements">Achievement</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#contact" data-nav-link data-target="contact">Contact</a>
          </nav>

          <div class="flex items-center gap-2 shrink-0">
            <button id="themeToggle" class="flex w-11 h-11 rounded-full border border-border bg-white/70 items-center justify-center hover:bg-surface transition" aria-label="Toggle theme">
              <img id="themeIcon" src="${u}" alt="Toggle theme" class="w-6 h-6 object-contain">
            </button>
          </div>
        </div>
      </div>
    </header>
  `,f=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/burger_light-DDxQAe6J.png`,``+import.meta.url).href,p=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/burger_dark-CYqhFF_W.png`,``+import.meta.url).href,m=()=>`
    <!-- Mobile Sidebar -->
    <div id="mobileSidebar" class="fixed inset-0 z-[80] hidden">
      <div id="sidebarBackdrop" class="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 opacity-0"></div>
      <aside id="sidebarContent" class="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-surface border-r border-border shadow-2xl p-5 -translate-x-full transition-transform duration-300">
        <div class="flex items-center justify-between mb-8">
          <div class="font-cabinet text-xl font-extrabold tracking-tight">Nandito Setiyawan</div>
          <button id="closeSidebar" class="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-surface/90 shadow-sm" aria-label="Close menu">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav class="space-y-2 text-sm font-semibold">
          <a class="block px-4 py-3 rounded-2xl nav-item active" href="#hero" data-nav-link data-target="hero">Hero</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#about" data-nav-link data-target="about">About</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#projects" data-nav-link data-target="projects">Projects</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#achievements" data-nav-link data-target="achievements">Achievement</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#contact" data-nav-link data-target="contact">Contact</a>
        </nav>
      </aside>
    </div>

    <!-- Mobile Navbar -->
    <header id="mobileNav" class="md:hidden fixed top-0 left-0 right-0 z-[70]">
      <div id="mobileNavShell" class="mobile-nav-shell">
        <span id="mobileNavName" class="font-cabinet mobile-nav-name font-extrabold tracking-tight text-text">Nandito Setiyawan</span>
        <button id="mobileBurgerBtn" class="mobile-burger-btn" aria-label="Open menu">
          <img id="mobileBurgerIcon" src="${f}" alt="Menu"
               data-light="${f}" data-dark="${p}"
               class="w-6 h-6 object-contain">
        </button>
      </div>
    </header>
  `,h=()=>`
    ${d()}
    ${m()}
  `,g={name:`Nandito Setiyawan`,badge:`Information Systems Student`,description:`I build clean, modern digital experiences through web development, design thinking, and project-based learning. This portfolio shows the work I have completed and the direction I am growing toward.`,resumeLink:`#`,whatsapp:`#`,instagram:`#`,github:`#`,linkedin:`#`,heroImages:[`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80`]},_=()=>`
    <section id="hero" class="stage hero-section">
    <div class="hero-bg-fixed">
    <div class="hero-gradient-overlay"></div>
</div>

      <div class="hero-container">
        <div class="hero-grid">
          <div class="hero-left reveal">
            <!-- Unified Badge -->
            <div class="hero-badge-container">
              <span class="font-cabinet hero-badge-text typing-animation">HI, I'm</span>
            </div>
            <h1 class="font-cabinet hero-name hero-title">
              Nandito <br class="hidden md:block">Setiyawan
            </h1>
            <p class="hero-desc mobile-delay-reveal">
              ${g.description}
            </p>

            <div class="hero-actions mobile-delay-reveal">
              <a href="${g.linkedin}" class="btn-primary hero-btn">
                <span class="material-symbols-outlined text-[20px]">LinkedIn</span> 
              </a>
              <a href="${g.resumeLink}" class="btn-secondary hero-btn hero-btn-secondary">
                <span class="material-symbols-outlined text-[20px]">Download CV</span> 
              </a>
            </div>

            <div class="hero-socials mobile-delay-reveal">
              <a href="${g.whatsapp}" class="chip-dark hero-chip">WhatsApp</a>
              <a href="${g.instagram}" class="chip-dark hero-chip">Instagram</a>
              <a href="${g.github}" class="chip-dark hero-chip">GitHub</a>
            </div>
          </div>

          <div class="hero-right reveal">
            <div class="relative" style="visibility: hidden; pointer-events: none;">
              <div class="hero-photo-blob"></div>
              <div class="photo-stack" id="heroPhotoStack">
                <div class="stack-label">Profile Slideshow</div>
                ${g.heroImages.map((e,t)=>`
                  <div class="stack-card pos-${t}" data-stack-card>
                    <img src="${e}" alt="Portrait ${t+1}">
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Single Wave separator -->

<svg
  class="hero-wave hero-wave-top"
  viewBox="0 0 1440 120"
  fill="none"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0,70
       C180,15 360,15 540,70
       C720,120 900,120 1080,70
       C1260,20 1350,20 1440,55"
  />
</svg>

      <svg class="hero-wave" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0,70
         C180,15 360,15 540,70
         C720,120 900,120 1080,70
         C1260,20 1350,20 1440,55
         L1440,120
         L0,120
         Z"
      fill="var(--surface2)" />
      </svg>
    </section>
  `,v=`2024-08-18`;function y(){let e=new Date(v),t=new Date().getFullYear()-e.getFullYear();return`${Math.max(t,1)}+`}var b=[{idx:`01`,title:`Rajin dan semangat`,desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum ipsum dolor sit amet.`},{idx:`02`,title:`Rajin dan semangat`,desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum ipsum dolor sit amet.`},{idx:`03`,title:`Rajin dan semangat`,desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum ipsum dolor sit amet.`}],x=[{id:`cashier`,title:`Web Cashier System`,description:`CRUD cashier website with PHP, transaction flow & admin UI.`,overview:`A CRUD-based cashier website simulating a small business workflow — product management, cart behavior, and transaction history with a clean admin dashboard.`,image:`https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80`,techStack:[`PHP`,`MySQL`,`HTML`,`CSS`],tags:[`CRUD`,`Web`,`2024`],year:2024,role:`Individual`,isWebsite:!0,liveUrl:``,githubUrl:``},{id:`spatial`,title:`Spatial Analysis — QGIS`,description:`GIS-based choropleth mapping and regional data analysis.`,overview:`Used QGIS tools to process regional datasets and visualize spatial trends through choropleth maps, overlays, and thematic analysis with a final presentation report.`,image:`https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80`,techStack:[`QGIS`,`GIS`,`Spatial`],tags:[`GIS`,`Mapping`,`2023`],year:2023,role:`Team`,isWebsite:!1,liveUrl:``,githubUrl:``},{id:`survey`,title:`Satisfaction Survey App`,description:`Multi-step survey web app with validation & data summary.`,overview:`A web app focused on form validation and UX during data collection. Includes a multi-step form flow, real-time feedback, and a summary table of aggregated responses.`,image:`https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80`,techStack:[`PHP`,`JavaScript`,`Tailwind`],tags:[`Form`,`UX`,`2023`],year:2023,role:`Individual`,isWebsite:!0,liveUrl:``,githubUrl:``},{id:`admin`,title:`Admin Dashboard Prototype`,description:`Dashboard prototype for admin-style workflows & monitoring.`,overview:`A dashboard prototype built to explore admin-style data monitoring, featuring data tables, chart placeholders, and responsive layout with a dark sidebar navigation.`,image:`https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80`,techStack:[`TypeScript`,`Chart.js`,`CSS`],tags:[`Dashboard`,`UI`,`2024`],year:2024,role:`Individual`,isWebsite:!1,liveUrl:``,githubUrl:``},{id:`hospital`,title:`Hospital Management System`,description:`Patient & appointment management system for academic study.`,overview:`An academic simulation of a hospital information system covering patient registration, appointment scheduling, doctor management, and basic report generation.`,image:`https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80`,techStack:[`Laravel`,`PHP`,`MySQL`],tags:[`Laravel`,`Web`,`2024`],year:2024,role:`Team`,isWebsite:!0,liveUrl:``,githubUrl:``}],S=[{label:`PHP`,src:null},{label:`HTML`,src:null},{label:`CSS`,src:null},{label:`C++`,src:null},{label:`Laravel`,src:null},{label:`JS`,src:null},{label:`React`,src:null},{label:`Python`,src:null},{label:`Java`,src:null},{label:`Go`,src:null},{label:`Swift`,src:null},{label:`Ruby`,src:null},{label:`XAMPP`,src:null},{label:`Laragon`,src:null},{label:`TS`,src:null},{label:`Cisco`,src:null},{label:`QGIS`,src:null},{label:`Figma`,src:null},{label:`Git`,src:null},{label:`Node`,src:null},{label:`Docker`,src:null},{label:`MySQL`,src:null},{label:`Vue`,src:null},{label:`Tailwind`,src:null}],C=12,w=S.slice(0,C),T=S.slice(C),E=e=>`
  <div class="about-skill-circle" title="${e.label}">
    ${e.src?`<img src="${e.src}" alt="${e.label}" class="about-skill-img" />`:`<!-- ✏️ Ganti baris ini dengan <img src="..." class="about-skill-img" /> saat icon tersedia -->
         <span class="about-skill-ph">${e.label}</span>`}
  </div>`,D=[{idx:`01`,name:`Universitas Pembangunan Nasional "VETERAN" Yogyakarta`,major:`Sistem Informasi`,period:`2024 – sekarang`,desc:`Mempelajari sistem informasi, analisis data, dan teknologi informasi.`},{idx:`02`,name:`SMA Negeri 1 Kasihan`,major:`Ilmu Pengetahuan Sosial`,period:`2021 – 2024`,desc:`Mempelajari ilmu sosial, ekonomi, dan pengembangan diri.`}],O=`
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2.2"
       stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,ee=(e,t)=>`
  <div class="about-edu-item" data-edu-index="${t}">
    <div class="about-edu-num">${e.idx}</div>
    <div class="about-edu-body">
      <h3 class="about-edu-name">${e.name}</h3>
      <div class="about-edu-major">${e.major}</div>
      <div class="about-edu-period">
        ${O}
        <span>${e.period}</span>
      </div>
      <p class="about-edu-desc">${e.desc}</p>
    </div>
  </div>`,k=()=>`
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
        ${w.map(E).join(``)}
      </div>

      <!-- Baris 2: gerak ke KIRI saat scroll ke bawah (offset zigzag via JS) -->
      <div class="about-skills-row" data-skills-row="2">
        ${T.map(E).join(``)}
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
              ${D.map(ee).join(``)}
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
            <span class="about-wid-num" id="statYears" data-counter data-target="${y().replace(`+`,``)}" data-suffix="+">${y()}</span>
            <span class="about-wid-label">Years in<br>Programming</span>
          </div>

          <!-- Stat tengah: jumlah project -->
          <div class="about-wid-stat about-wid-stat--center">
            <!--
              ✏️ JUMLAH PROJECT: dihitung otomatis dari data/projects.ts.
                 Maksimal tampil 99+. Tambah project di sana, angka ini otomatis naik.
            -->
            <span class="about-wid-num" id="statProjects" data-counter data-target="${(()=>{let e=Array.isArray(x)?x.length:0;return e>=99?`99`:`${e}`})()}" data-suffix="${(Array.isArray(x)?x.length:0)>=99?`+`:``}">${(()=>{let e=Array.isArray(x)?x.length:0;return e>=99?`99+`:`${e}`})()}</span>
            <span class="about-wid-label">Projects<br>Completed</span>
          </div>

          <!-- Stat kanan: happy client -->
          <div class="about-wid-stat">
            <!--
              ✏️ HAPPY CLIENTS: ubah HAPPY_CLIENTS di src/data/about.ts.
                 Default 0. Struktur siap diisi kapan saja.
            -->
            <span class="about-wid-num" id="statClients" data-counter data-target="0" data-suffix="">0</span>
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
        <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/bintang_isi_hitam--vp4e30R.png`,``+import.meta.url).href}" 
             class="about-wpr-bintang-isi" 
             id="bintangIsi"
             alt="Bintang Isi" 
             draggable="false" />
        
        <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/bintang_kosong_hitam-DqVgnLnV.png`,``+import.meta.url).href}" 
             class="about-wpr-bintang-kosong" 
             id="bintangKosong"
             alt="Bintang Kosong" 
             draggable="false" />
             
        <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/dragme_putih-3SPMcv-3.png`,``+import.meta.url).href}" 
             class="about-wpr-dragme" 
             alt="Drag Me Label" 
             draggable="false" />

        <!-- Container list prinsip -->
        <div class="about-wpr-list">
          ${b.map((e,t)=>`
            <div class="about-wpr-item">
              <div class="about-wpr-item-inner">
                <!-- Nomor besar (tegas & kaku/kotak) -->
                <div class="about-wpr-num font-cabinet">${e.idx}</div>
                <!-- Konten teks kanan (judul & deskripsi) -->
                <div class="about-wpr-content">
                  <h3 class="about-wpr-item-title">${e.title}</h3>
                  <p class="about-wpr-item-desc">${e.desc}</p>
                </div>
              </div>
              <!-- Divider line artistik di bawah item 01 & 02 -->
              ${t<b.length-1?`<div class="about-wpr-divider"></div>`:``}
            </div>
          `).join(``)}
        </div>

      </div>
    </div>

  </section>
`,A=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,te=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,j=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,M=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,N=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,P=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,F=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ne=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,re=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,ie=`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,ae=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.55"/></svg>`,I=(e,t)=>`
    <div class="proj-card" data-proj-idx="${t}" data-proj-id="${e.id}">
      <!-- Thumbnail -->
      <div class="proj-card-thumb">
        <img
          src="${e.image}"
          alt="${e.title} preview"
          loading="lazy"
          draggable="false"
        >
        <div class="proj-thumb-fade"></div>
        <span class="proj-card-badge">${e.role||`Individual`} · ${e.year}</span>
      </div>

      <!-- Body -->
      <div class="proj-card-body">
        <h3 class="proj-card-title">${e.title}</h3>

        <!-- Tags -->
        <div class="proj-card-tags">
          ${e.techStack.map(e=>`<span class="proj-tag">${e}</span>`).join(``)}
        </div>

        <p class="proj-card-desc">${e.description}</p>
      </div>

      <!-- CTA -->
      <div class="proj-card-footer">
        <button class="proj-see-btn" data-proj-open="${e.id}" type="button">
          see ${N}
        </button>
      </div>
    </div>
  `,L=()=>x.map((e,t)=>`
    <button class="proj-dot${t===0?` is-active`:``}" data-proj-dot="${t}" type="button" aria-label="Go to project ${t+1}"></button>
  `).join(``),R=[...new Set(x.flatMap(e=>e.techStack))].slice(0,8),z=[...new Set(x.map(e=>String(e.year)))].sort((e,t)=>Number(t)-Number(e)),B=[...new Set(x.map(e=>e.role||`Individual`))],V=(e,t)=>e.map(e=>`
    <button class="proj-filter-opt" data-filter-group="${t}" data-filter-val="${e}" type="button">${e}</button>
  `).join(``),H=()=>x.map(e=>{let t=e.isWebsite;return`
  <div class="proj-modal-overlay" id="projModal-${e.id}" role="dialog" aria-modal="true" aria-label="${e.title}">
    <div class="proj-modal-window">
      <!-- 8 resize handles -->
      <div class="proj-modal-resize proj-modal-resize-n"  data-dir="n"></div>
      <div class="proj-modal-resize proj-modal-resize-s"  data-dir="s"></div>
      <div class="proj-modal-resize proj-modal-resize-e"  data-dir="e"></div>
      <div class="proj-modal-resize proj-modal-resize-w"  data-dir="w"></div>
      <div class="proj-modal-resize proj-modal-resize-ne" data-dir="ne"></div>
      <div class="proj-modal-resize proj-modal-resize-nw" data-dir="nw"></div>
      <div class="proj-modal-resize proj-modal-resize-se" data-dir="se"></div>
      <div class="proj-modal-resize proj-modal-resize-sw" data-dir="sw"></div>
      <!-- macOS-style titlebar -->
      <div class="proj-modal-titlebar">
        <!-- 3 traffic light dots in left -->
        <div class="proj-modal-dots">
          <span class="proj-modal-dot red"></span>
          <span class="proj-modal-dot yellow"></span>
          <span class="proj-modal-dot green"></span>
        </div>
        
        <!-- Project Title Centered -->
        <div class="proj-modal-title-center">${e.title}</div>
        
        <!-- Actions: Download button (left), then Close button (right) -->
        <div class="proj-modal-actions">
          ${e.githubUrl,`
            <a href="${e.githubUrl||`https://github.com/nanditosetyawan`}" target="_blank" rel="noopener noreferrer" class="proj-modal-dl-btn" aria-label="Download source (GitHub)">
              ${ne}
              <span class="proj-tooltip">Download source (GitHub)</span>
            </a>
          `}
          <button class="proj-modal-close-btn" data-proj-close="${e.id}" type="button" aria-label="Close">
            ${P}
          </button>
        </div>
      </div>

      <!-- Scrollable content below titlebar -->
      <div class="proj-modal-content-scroll">
        <!-- Address bar ONLY for website projects -->
        ${t&&e.liveUrl?`
          <div class="proj-modal-addrbar-wrap">
            <div class="proj-modal-addrbar">
              ${F}
              <span>${e.liveUrl}</span>
            </div>
          </div>
        `:t?`
          <div class="proj-modal-addrbar-wrap">
            <div class="proj-modal-addrbar">
              ${F}
              <span>https://${e.id}.nanditosetyawan.dev</span>
            </div>
          </div>
        `:``}

        <!-- Body -->
        <div class="proj-modal-body">
          ${t?`
            <!-- Live preview iframe -->
            <div class="proj-modal-iframe-wrap">
              <iframe src="${e.liveUrl||`about:blank`}" title="${e.title} live preview" loading="lazy"></iframe>
            </div>
          `:`
            <!-- Gallery / screenshot preview for non-website -->
            <div class="proj-modal-gallery-body">
              <div class="proj-modal-gallery-main">
                <img src="${e.image}" alt="${e.title} screenshot" id="modalMainImg-${e.id}">
                <div class="proj-modal-play-icon">
                  ${ie}
                </div>
              </div>
              
              <!-- Thumbnail strip -->
              <div class="proj-modal-thumb-strip">
                <div class="proj-modal-thumb is-active" onclick="const mainImg = document.getElementById('modalMainImg-${e.id}'); if (mainImg) mainImg.setAttribute('src', '${e.image}'); this.parentElement.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('is-active')); this.classList.add('is-active');">
                  <img src="${e.image}" alt="Thumbnail 1">
                </div>
                <div class="proj-modal-thumb" onclick="const mainImg = document.getElementById('modalMainImg-${e.id}'); if (mainImg) mainImg.setAttribute('src', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'); this.parentElement.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('is-active')); this.classList.add('is-active');">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80" alt="Thumbnail 2">
                </div>
                <div class="proj-modal-thumb" onclick="const mainImg = document.getElementById('modalMainImg-${e.id}'); if (mainImg) mainImg.setAttribute('src', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'); this.parentElement.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('is-active')); this.classList.add('is-active');">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" alt="Thumbnail 3">
                </div>
              </div>
              
              <div class="proj-modal-local-badge">
                ${re}
                <span>Local project — screenshots / demo preview</span>
              </div>
            </div>
          `}

          <!-- Modal info details -->
          <div class="proj-modal-info">
            <h2 class="proj-modal-info-title">${e.title}</h2>
            <p class="proj-modal-info-desc">${e.overview}</p>
            <div class="proj-modal-info-tags">
              ${e.techStack.map(e=>`<span class="proj-tag">${e}</span>`).join(``)}
              ${e.tags.map(e=>`<span class="proj-tag">${e}</span>`).join(``)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `}).join(``),U=()=>`
  <section id="projects" class="projects-section">
    <div class="projects-inner">

      <!-- Header -->
      <div class="projects-header">
        <span class="projects-eyebrow">Portfolio</span>
        <h2 class="projects-title">Projects</h2>
        <div class="projects-title-accent"></div>
        <p class="projects-subtitle">
          A collection of work spanning spatial analysis,<br>
          web systems, and software development.
        </p>
      </div>

      <!-- Carousel -->
      <div class="projects-carousel-wrap">
        <!-- Edge fades -->
        <div class="proj-fade-left"  aria-hidden="true"></div>
        <div class="proj-fade-right" aria-hidden="true"></div>

        <!-- Prev / Next -->
        <button class="proj-nav-btn proj-nav-prev" id="projNavPrev" type="button" aria-label="Previous project">
          ${A}
        </button>
        <button class="proj-nav-btn proj-nav-next" id="projNavNext" type="button" aria-label="Next project">
          ${te}
        </button>

        <!-- Cards track: perspective enables 3D rotateY on side cards -->
        <div class="proj-cards-track" id="projCardsTrack" style="perspective: 1400px; perspective-origin: center center;">
          ${x.map((e,t)=>I(e,t)).join(``)}
        </div>
      </div>

      <!-- Dots -->
      <div class="proj-dots" id="projDots" role="tablist" aria-label="Projects carousel">
        ${L()}
      </div>

      <!-- Bottom bar: Search + Filter -->
      <div class="projects-bottom-bar">

        <!-- Search -->
        <div class="proj-search-wrap">
          <span class="proj-search-icon" aria-hidden="true">${M}</span>
          <input
            type="search"
            id="projSearch"
            class="proj-search-input"
            placeholder="Search project title..."
            autocomplete="off"
            aria-label="Search projects"
          >
          <span class="proj-no-results" id="projNoResults" role="status" aria-live="polite">
            No projects found
          </span>
        </div>

        <!-- Filter: compound button [↺ | Filter ∨] -->
        <div class="proj-filter-wrap">
          <div class="proj-filter-ctrl">
            <!-- Reset side -->
            <button class="proj-filter-reset-btn" id="projFilterReset" type="button" aria-label="Reset filters">
              ${ae}
            </button>
            <!-- Divider -->
            <span class="proj-filter-sep" aria-hidden="true"></span>
            <!-- Filter toggle side -->
            <button class="proj-filter-btn" id="projFilterBtn" type="button" aria-expanded="false" aria-haspopup="listbox">
              <span class="proj-filter-badge" id="projFilterBadge"></span>
              Filter ${j}
            </button>
          </div>

          <div class="proj-filter-panel" id="projFilterPanel" role="listbox">
            <span class="proj-filter-section-label">Language / Stack</span>
            <div class="proj-filter-group-scroll scroll-tech">
              ${V(R,`tech`)}
            </div>

            <div class="proj-filter-divider"></div>

            <span class="proj-filter-section-label">Year</span>
            <div class="proj-filter-group-scroll scroll-year">
              ${V(z,`year`)}
            </div>

            <div class="proj-filter-divider"></div>

            <span class="proj-filter-section-label">Type</span>
            <div class="proj-filter-group-scroll scroll-role">
              ${V(B,`role`)}
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Project detail modals (one per project) -->
    ${H()}
  </section>
`,W=(e,t,n)=>{let r=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFDF8"/><stop offset="100%" stop-color="#FCF8F1"/></linearGradient></defs><rect width="1600" height="1100" fill="url(#g)"/><rect x="60" y="60" width="1480" height="980" fill="none" stroke="#E8E1D7" stroke-width="4"/><text x="800" y="450" font-family="sans-serif" font-size="110" font-weight="800" fill="#1A312C" text-anchor="middle" letter-spacing="-2">${e}</text><text x="800" y="560" font-family="sans-serif" font-size="52" font-weight="600" fill="#428475" text-anchor="middle" letter-spacing="4">${t}</text><text x="800" y="700" font-family="sans-serif" font-size="40" font-weight="500" fill="#53645F" text-anchor="middle" letter-spacing="8">${n}</text></svg>`;return`data:image/svg+xml;charset=UTF-8,`+encodeURIComponent(r)},G=[{id:`azure`,title:`Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02 Bahasa Indonesia)`,description:`A certificate that reflects growing familiarity with cloud concepts, service models, and basic deployment thinking.`,details:`The certification shows initiative in learning cloud fundamentals and complements web development work with broader technical awareness.`,year:2025,tags:[`Certificate`,`2025`],certificates:[new URL(`/portofolio-sultannang-nandito-setiyawan/assets/Official%20Practice%20Question%20Set-DZQnFWXl.jpg`,``+import.meta.url).href],image:new URL(`/portofolio-sultannang-nandito-setiyawan/assets/AWS-BxCWrVfX.jpeg`,``+import.meta.url).href,issuedAt:`12 Mei 2026`},{id:`workshop`,title:`Frontend Workshop Participation`,description:`Completed an intensive frontend engineering workshop.`,details:`The details can be updated later with actual documentation or a certificate image.`,year:2024,tags:[`Workshop`,`2024`],certificates:[W(`WORKSHOP`,`Frontend Practice`,`Participation`)]},{id:`presentation`,title:`Public Speaking Session`,description:`A public speaking and project presentation seminar.`,details:`Focusing on communication and clarity.`,year:2023,tags:[`Seminar`,`2023`],certificates:[W(`CAMPUS`,`Project Presentation`,`Recognition`)]}],K=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,``+import.meta.url).href,oe=new URL(`data:image/png;base64,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`,``+import.meta.url).href,se=()=>`
    <section id="achievements" class="stage alt relative section-wrap achievement-section">
      <div class="achievement-container">
        <div class="achievement-header reveal">
          <h2 class="font-cabinet achievement-title">Certificates & Milestones</h2>
          <p class="achievement-subtitle">Proof of continuing education outside of typical class structures.</p>
        </div>

        <div class="achievement-list space-y-4">
          ${G.map((e,t)=>{let n=t>=2?`hidden extra-achieve`:``,r=e.certificates.length>1?`${e.certificates.length} FILES`:`PREVIEW`;return`
      <article class="accordion elevated achievement-item ${n}" data-accordion>
        <button class="achievement-btn" data-accordion-btn>
          <div class="achievement-logo-wrapper">
            ${e.image?`<img src="${e.image}" alt="${e.title} logo" class="achievement-logo-img">`:``}
          </div>
          <div class="achievement-meta">
            <div class="achievement-tags">
              ${e.tags.map(e=>`<span class="chip achievement-tag">${e}</span>`).join(``)}
            </div>
            <h3 class="achievement-name">${e.title}</h3>
            ${e.issuedAt?`<p class="achievement-date">Issued at ${e.issuedAt}</p>`:``}
            <p class="achievement-desc">${e.description}</p>
          </div>
          <div class="achievement-toggle">
            <img src="${oe}" class="chev achievement-chev" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line achievement-body-inner">
              <div>
                <div class="achievement-details-title">Details</div>
                <p class="achievement-details-text">${e.details}</p>
              </div>

              <div class="certificate-preview relative rounded-[1.4rem] overflow-hidden border border-border bg-surface shadow-soft2 min-h-[420px]">
                <div class="certificate-stage" data-cert-images='${JSON.stringify(e.certificates)}' data-cert-title="${e.title}">
                  <img class="cert-img" src="${e.certificates[0]}" alt="${e.title}">
                  <button type="button" class="cert-badge" data-preview-btn>${r}</button>
                    <button type="button" class="download-btn hidden md:flex" aria-label="Download" title="Download Sertifikat">
                      <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/download-CAME9-b6.png`,``+import.meta.url).href}" alt="Download" class="download-img" />
                    </button>
                    <button type="button" class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 hidden" aria-label="Previous">
                      <img src="${new URL(`data:image/png;base64,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`,``+import.meta.url).href}" alt="Previous" class="arrow-left" />
                    </button>
                    <button type="button" class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 hidden" aria-label="Next">
                      <img src="${new URL(`data:image/png;base64,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`,``+import.meta.url).href}" alt="Next" class="arrow-right" />
                    </button>
                </div>
              </div>

              <!-- Mobile Download Button -->
              <button type="button" class="mobile-download-btn md:hidden w-full flex items-center justify-center gap-2 py-3.5 mt-3 rounded-2xl font-bold transition" aria-label="Download" title="Download Sertifikat" data-download-btn>
                <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/download-CAME9-b6.png`,``+import.meta.url).href}" alt="Download" class="w-5 h-5 object-contain" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `}).join(``)}
        </div>

    ${G.length>2?`
<div class="section-arrow-wrapper reveal">

<button
    id="achievementsToggle"
    class="section-arrow"
    data-tooltip="Load more achievements"
    type="button">

        <img
            id="achievementsToggleIcon"
            src="${K}"
            class="reload-icon"
            alt="Reload">

    </button>

</div>
`:``}
      </div>
    </section>
  `,ce=()=>`
  <section id="contact" class="stage relative contact-section">
    <div class="contact-container">
      <div class="contact-grid reveal">
        <div class="contact-left">
          <h2 class="contact-title">Say hello.</h2>
          <p class="contact-subtitle">Whether it's for a project discussion, class assignment, or just to connect.</p>
          
          <div class="contact-info-list">
            <div class="contact-info-card">
              <div class="contact-info-label">Email</div>
              <div class="contact-info-value">hello@nanditosetiyawan.com</div>
            </div>
            <div class="contact-info-card">
              <div class="contact-info-label">Location</div>
              <div class="contact-info-value">Yogyakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <div class="contact-form-wrapper">
            <div class="contact-form-inner">
              <div class="contact-form-title">Quick Message</div>
              <form class="contact-form-fields" onsubmit="event.preventDefault()">
                <input class="contact-input" placeholder="Your name" />
                <input class="contact-input" placeholder="Your email" />
                <textarea class="contact-textarea" placeholder="Your message"></textarea>
                <button type="button" class="btn-primary contact-send-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="site-footer">
    <div class="site-footer-inner">
      © ${new Date().getFullYear()} Nandito Setiyawan. Designed with precision.
    </div>
  </footer>
`,le=`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,ue=`/portofolio-sultannang-nandito-setiyawan/assets/back_load-CEEf4z4X.png`,de=`/portofolio-sultannang-nandito-setiyawan/assets/white_mode-C2emF1m6.png`,fe=`/portofolio-sultannang-nandito-setiyawan/assets/dark_mode-BcUgIVO5.png`,pe=`/portofolio-sultannang-nandito-setiyawan/assets/burger_light-DDxQAe6J.png`,me=`/portofolio-sultannang-nandito-setiyawan/assets/burger_dark-CYqhFF_W.png`,q=`modulepreload`,J=function(e){return`/portofolio-sultannang-nandito-setiyawan/`+e},Y={},he=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=J(t,n),t=s(t),t in Y)return;Y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:q,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ge=()=>{let e=document.getElementById(`topNav`),t=document.getElementById(`mobileNav`),n=document.getElementById(`mobileNavShell`),r=document.getElementById(`mobileBurgerBtn`),i=document.getElementById(`mobileBurgerIcon`),a=document.getElementById(`navShell`),o=document.getElementById(`desktopNav`),s=document.getElementById(`navActivePill`),l=Array.from(document.querySelectorAll(`[data-nav-link]`)),u=document.getElementById(`themeToggle`),d=document.getElementById(`themeIcon`),f=document.getElementById(`menuBtn`),p=document.getElementById(`mobileSidebar`),m=document.getElementById(`closeSidebar`),h=document.getElementById(`sidebarBackdrop`),g=[`hero`,`about`,`projects`,`achievements`,`contact`].map(e=>document.getElementById(e)).filter(e=>!!e),_=()=>{p&&(p.classList.remove(`hidden`),p.classList.add(`block`),requestAnimationFrame(()=>{let e=document.getElementById(`sidebarBackdrop`),t=document.getElementById(`sidebarContent`);e&&(e.classList.remove(`opacity-0`),e.classList.add(`opacity-100`)),t&&(t.classList.remove(`-translate-x-full`),t.classList.add(`translate-x-0`))}),document.body.classList.add(`overflow-hidden`))},v=()=>{if(!p)return;let e=document.getElementById(`sidebarBackdrop`),t=document.getElementById(`sidebarContent`);e&&(e.classList.remove(`opacity-100`),e.classList.add(`opacity-0`)),t&&(t.classList.remove(`translate-x-0`),t.classList.add(`-translate-x-full`)),setTimeout(()=>{p.classList.add(`hidden`),p.classList.remove(`block`)},300),document.body.classList.remove(`overflow-hidden`)},y=e=>{let t=document.getElementById(e);if(!t)return;let n=window.scrollY+t.getBoundingClientRect().top;window.scrollTo({top:Math.max(n,0),behavior:`smooth`})},b=Array.from(document.querySelectorAll(`#desktopNav [data-nav-link]`)),x=()=>{i&&(i.src=document.documentElement.classList.contains(`dark`)?me:pe)};x();let S=()=>{let e=window.scrollY>18;if(a&&a.classList.toggle(`is-scrolled`,e),n){n.classList.toggle(`is-scrolled`,e);let t=window.scrollY===0;n.classList.toggle(`at-top`,t)}window.scrollY===0&&re()};l.forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n?.startsWith(`#`))return;t.preventDefault();let r=n.slice(1);D(r),v(),y(r)})}),document.getElementById(`aboutWidCta`)?.addEventListener(`click`,e=>{e.preventDefault(),D(`contact`),y(`contact`)}),u?.addEventListener(`click`,()=>{let e=document.documentElement.classList.toggle(`dark`);d&&(d.src=e?fe:de,d.alt=e?`Dark mode`:`Light mode`),x()}),f?.addEventListener(`click`,_),r?.addEventListener(`click`,_),m?.addEventListener(`click`,v),h?.addEventListener(`click`,v);let C=document.querySelectorAll(`.reveal`),w=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`in`)})},{threshold:.12});C.forEach(e=>w.observe(e));let T=`hero`,E=()=>{if(!o||!s||b.length===0)return;let e=window.innerHeight*.35,t=window.innerHeight*.1,n=0,r=0,i=0,a=0;for(let n=0;n<g.length;n++)g[n].getBoundingClientRect().top<=e+t&&(a=n);n=a,r=a;for(let a=1;a<g.length;a++){let o=g[a].getBoundingClientRect().top;if(o>e-t&&o<e+t){n=a-1,r=a,i=1-(o-(e-t))/(2*t);break}}window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&(n=g.length-1,r=g.length-1,i=0);let c=o.getBoundingClientRect(),u=b[n].getBoundingClientRect(),d=b[r].getBoundingClientRect(),f=u.left-c.left,p=f+u.width,m=d.left-c.left,h=m+d.width,_=f,v=p;if(m>f){let e=Math.min(1,i*2),t=Math.max(0,(i-.5)*2);_=f+(m-f)*t,v=p+(h-p)*e}else if(m<f){let e=Math.min(1,i*2),t=Math.max(0,(i-.5)*2);_=f-(f-m)*e,v=p-(p-h)*t}let y=v-_;s.style.transition=`none`,s.style.transform=`translateX(${_}px)`,s.style.width=`${y}px`,s.style.opacity=`1`;let x=g[i<.5?n:r].id;x!==T&&(T=x,l.forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)===`#${T}`)}))};window.addEventListener(`scroll`,()=>{requestAnimationFrame(E)},{passive:!0}),setTimeout(()=>requestAnimationFrame(E),100);let D=e=>{l.forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`href`)===`#${e}`)})};D(`hero`);let O=document.getElementById(`hero`),ee=O?.querySelector(`.hero-bg-fixed`),k=O?.querySelector(`.hero-container`),A=e=>{if(!O)return;let t=O.offsetHeight;if(ee&&(ee.style.opacity=e>t?`0`:`1`),e<=t+100&&k){let n=t*.78,r=t*1.05,i=Math.min(Math.max((e-n)/(r-n),0),1);k.style.opacity=`${1-i}`,k.style.transform=`translateY(${-Math.max(0,e-n)*.25}px)`}},te=0,j=window.scrollY,M=!1,N=0,P=null,F=null,ne=()=>{M||(M=!0,e?.classList.add(`nav-hidden`),t?.classList.add(`nav-hidden`))},re=()=>{M&&(M=!1,e?.classList.remove(`nav-hidden`),t?.classList.remove(`nav-hidden`))},ie=()=>{N=0,P=null,F&&=(clearTimeout(F),null)},ae=()=>{F&&clearTimeout(F),F=setTimeout(()=>{ie()},1200)};window.addEventListener(`scroll`,()=>{te||=window.requestAnimationFrame(()=>{let e=window.scrollY,t=e>j;if(e<j)ie(),re();else if(t&&e>80){let e=Date.now();P!==null&&(N+=e-P),P=e,ae(),N>=1800&&ne()}j=e,A(e),S(),te=0})},{passive:!0}),window.addEventListener(`resize`,()=>{S(),A(window.scrollY)}),S(),A(window.scrollY),document.querySelectorAll(`[data-accordion]`).forEach(e=>{let t=e.querySelector(`[data-accordion-btn]`),n=e.querySelector(`.accordion-body`),r=e.querySelector(`.chev`),i=!1,a=()=>{n&&n.classList.toggle(`hidden`,!i),r&&(r.style.transform=i?`rotate(180deg)`:`rotate(0deg)`),t?.setAttribute(`aria-expanded`,String(i))};a(),t?.addEventListener(`click`,()=>{r&&r.classList.add(`spin`),window.setTimeout(()=>{i=!i,a(),r&&r.classList.remove(`spin`)},280)})}),((e,t)=>{let n=document.getElementById(e),r=document.getElementById(`${e}Icon`);if(!n||!r)return;let i=Array.from(document.querySelectorAll(t)),a=0;n.addEventListener(`click`,()=>{if(r.classList.add(`spin`),a>=i.length)i.forEach(e=>{e.classList.remove(`show`)}),setTimeout(()=>{i.forEach(e=>{e.classList.add(`hidden`)}),r.src=le,r.classList.remove(`spin`)},550),a=0;else{let e=Math.min(a+3,i.length);setTimeout(()=>{for(let t=a;t<e;t++){let e=i[t];e.classList.remove(`hidden`),e.offsetWidth,setTimeout(()=>{e.classList.add(`show`)},(t-a)*220)}a=e,a===i.length&&(r.src=ue)},250),setTimeout(()=>{r.classList.remove(`spin`)},650)}})})(`achievementsToggle`,`.extra-achieve`),document.querySelectorAll(`.certificate-stage`).forEach(e=>{let t=e.getAttribute(`data-cert-images`);if(!t)return;let n=[];try{n=JSON.parse(t)}catch{n=[]}if(!n.length)return;let r=e.getAttribute(`data-cert-title`)||`Certificate`,i=e.querySelector(`.cert-img`),a=e.querySelector(`.download-btn`),o=e.querySelector(`.carousel-prev`),s=e.querySelector(`.carousel-next`),l=e.querySelector(`[data-preview-btn]`),u=e.closest(`[data-accordion]`)?.querySelector(`[data-download-btn]`),d=0,f=e=>{i&&(i.src=n[e],i.style.opacity=`1`)};if(n.length>1&&i){o?.classList.remove(`hidden`),s?.classList.remove(`hidden`);let e=window.setInterval(()=>{i&&(i.style.opacity=`0`,window.setTimeout(()=>{d=(d+1)%n.length,f(d)},280))},5e3);o?.addEventListener(`click`,t=>{t.stopPropagation(),clearInterval(e),d=(d-1+n.length)%n.length,f(d)}),s?.addEventListener(`click`,t=>{t.stopPropagation(),clearInterval(e),d=(d+1)%n.length,f(d)})}else o?.classList.add(`hidden`),s?.classList.add(`hidden`),f(0);l?.addEventListener(`click`,e=>{if(e.stopPropagation(),!(window.innerWidth<768))return;let t=n[d];if(!t)return;let r=document.createElement(`div`);r.className=`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 animate-fade-in`;let i=document.createElement(`img`);i.src=t,i.className=`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-zoom-in`;let a=document.createElement(`button`);a.className=`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white z-10 transition`,a.innerHTML=`<span class="material-symbols-outlined text-[28px]">close</span>`,a.setAttribute(`aria-label`,`Close preview`),r.appendChild(i),r.appendChild(a),document.body.appendChild(r),document.body.classList.add(`overflow-hidden`);let o=()=>{r.classList.add(`animate-fade-out`),i.classList.add(`animate-zoom-out`),setTimeout(()=>{r.remove(),document.body.classList.remove(`overflow-hidden`)},250)};a.addEventListener(`click`,o),r.addEventListener(`click`,e=>{e.target===r&&o()})});let p=e=>{if(e.startsWith(`data:`))return{"image/jpeg":`jpg`,"image/jpg":`jpg`,"image/png":`png`,"image/webp":`webp`,"image/gif":`gif`,"image/svg+xml":`svg`}[e.split(`;`)[0].split(`:`)[1]||``]??`jpg`;try{return(new URL(e).pathname.split(`.`).pop()?.toLowerCase()??``)||`jpg`}catch{return(e.split(`?`)[0].split(`.`).pop()?.toLowerCase()??``)||`jpg`}},m=e=>{if(e.startsWith(`data:`)){let[t,n]=e.split(`,`),r=t.split(`:`)[1].split(`;`)[0];if(t.includes(`;base64`)){let e=atob(n),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return Promise.resolve(new Blob([t],{type:r}))}else{let e=decodeURIComponent(n);return Promise.resolve(new Blob([e],{type:r}))}}return fetch(e).then(e=>e.blob())},h=async e=>{if(e.stopPropagation(),n.length===1){let e=n[0],t=p(e),i=await m(e),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`${r}.${t}`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}else{let e=(await he(async()=>{let{default:e}=await import(`./jszip.min-BaWph81S.js`).then(e=>c(e.default,1));return{default:e}},[])).default,t=new e;await Promise.all(n.map(async(e,n)=>{let i=p(e),a=await m(e);t.file(`${r}_${n+1}.${i}`,a)}));let i=await t.generateAsync({type:`blob`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`${r}.zip`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}};a?.addEventListener(`click`,h),u?.addEventListener(`click`,async e=>{await h(e),u.classList.add(`downloaded`)})});let I=document.getElementById(`heroPhotoStack`);if(I){let e=Array.from(I.querySelectorAll(`[data-stack-card]`)),t=e.length;if(t>1){let n=0,r=()=>{e.forEach((e,n)=>{e.classList.remove(...Array.from({length:t},(e,t)=>`pos-${t}`))}),e.forEach((e,r)=>{let i=(r-n+t)%t;e.classList.add(`pos-${i}`)}),n=(n+1)%t};I.addEventListener(`click`,r),setInterval(r,3e3)}}let L=document.getElementById(`aboutSkillsSection`),R=L?.querySelector(`[data-skills-row="1"]`)??null,z=L?.querySelector(`[data-skills-row="2"]`)??null,B=document.getElementById(`aboutEduSection`),V=document.getElementById(`aboutEduDot`),H=document.getElementById(`aboutEduTrack`),U=()=>{let e=getComputedStyle(document.documentElement);return parseFloat(e.getPropertyValue(`--skill-circle-size`))||106},W=0,G=0,K=0,oe=Array.from(L?.querySelectorAll(`[data-skills-row="1"] .about-skill-circle`)||[]),se=Array.from(L?.querySelectorAll(`[data-skills-row="2"] .about-skill-circle`)||[]),ce=()=>{if(W+=.35,K+=(G-K)*.08,L&&R&&z){let e=U(),t=W+K,n=e-W-K;R.style.transform=`translateX(${t}px)`,z.style.transform=`translateX(${n}px)`;let r=U(),i=Math.PI*r,a=t/i*360,o=n/i*360;oe.forEach(e=>{e.style.transform=`rotate(${a}deg)`}),se.forEach(e=>{e.style.transform=`rotate(${o}deg)`})}requestAnimationFrame(ce)};L&&requestAnimationFrame(ce);let q=B?.querySelector(`.about-edu-line`),J=0,Y=0,ge=0,X=!1,_e=H?.parentElement,Z=H?Array.from(H.children):[],Q=()=>{if(X||!H||!q||!_e)return;let e=Z[0];if(!e)return;J=e.offsetHeight;let t=e.querySelector(`.about-edu-num`);if(t&&J>0){_e.style.height=`${J}px`;let e=t.getBoundingClientRect(),n=q.getBoundingClientRect(),r=getComputedStyle(H),i=new WebKitCSSMatrix(r.transform),a=i.m41||i.f||0;Y=e.top+e.height/2-a-n.top;let o=getComputedStyle(q);ge=Math.abs(parseFloat(o.marginTop))||35,X=!0}},$=()=>{if(!B||!V||!H||!q)return;Q();let e=B.getBoundingClientRect(),t=B.offsetHeight,n=window.innerHeight;if(t<n*1.2)return;let r=-e.top,i=t-n,a=Math.max(0,Math.min(1,r/i)),o=Y,s=J+2*ge,c=J,l=Math.sin(a*Math.PI),u=o+(s-2*o)*l;if(V.style.transition=`none`,V.style.top=`${u}px`,c>0){let e=0,t=s-2*o-c;e=a<.5?a/.5*t:u-o-c,H.style.transform=`translateY(${e}px)`}if(Z[0]){let e=a<.5?1-a/.5:0;Z[0].style.opacity=`${e}`}if(Z[1]){let e=a>=.5?(a-.5)/.5:0;Z[1].style.opacity=`${e}`}};requestAnimationFrame(()=>{Q(),Z[1]&&(Z[1].style.opacity=`0`),$()}),document.fonts.ready.then(()=>{X=!1,Q(),$()}),window.addEventListener(`resize`,()=>{X=!1,requestAnimationFrame(()=>{Q(),$()})}),window.addEventListener(`scroll`,()=>{if(requestAnimationFrame($),L){let e=L.getBoundingClientRect(),t=e.top+e.height/2;G=(window.innerHeight/2-t)*.45}},{passive:!0});let ve=e=>{let t=document.getElementById(e);if(!t)return;let n=!1,r=0,i=0,a=0,o=0;t.addEventListener(`mousedown`,e=>{n=!0,r=e.clientX,i=e.clientY;let s=t.getBoundingClientRect(),c=t.parentElement?.getBoundingClientRect();c&&(a=s.left-c.left,o=s.top-c.top),t.style.left=`${a}px`,t.style.top=`${o}px`,t.style.bottom=`auto`,t.style.right=`auto`,t.style.cursor=`grabbing`,e.preventDefault()}),window.addEventListener(`mousemove`,e=>{if(!n)return;let s=e.clientX-r,c=e.clientY-i,l=a+s,u=o+c,d=t.parentElement?.getBoundingClientRect(),f=t.getBoundingClientRect();if(d){let e=d.width-f.width;l=Math.max(0,Math.min(l,e));let t=d.height-f.height;u=Math.max(0,Math.min(u,t))}t.style.left=`${l}px`,t.style.top=`${u}px`}),window.addEventListener(`mouseup`,()=>{n&&(n=!1,t.style.cursor=`grab`)}),t.addEventListener(`touchstart`,e=>{let s=e.touches[0];n=!0,r=s.clientX,i=s.clientY;let c=t.getBoundingClientRect(),l=t.parentElement?.getBoundingClientRect();l&&(a=c.left-l.left,o=c.top-l.top),t.style.left=`${a}px`,t.style.top=`${o}px`,t.style.bottom=`auto`,t.style.right=`auto`,e.preventDefault()},{passive:!1}),window.addEventListener(`touchmove`,e=>{if(!n)return;let s=e.touches[0],c=s.clientX-r,l=s.clientY-i,u=a+c,d=o+l,f=t.parentElement?.getBoundingClientRect(),p=t.getBoundingClientRect();if(f){let e=f.width-p.width;u=Math.max(0,Math.min(u,e));let t=f.height-p.height;d=Math.max(0,Math.min(d,t))}t.style.left=`${u}px`,t.style.top=`${d}px`},{passive:!1}),window.addEventListener(`touchend`,()=>{n=!1})};setTimeout(()=>{ve(`bintangIsi`),ve(`bintangKosong`)},100),(()=>{let e=Array.from(document.querySelectorAll(`[data-counter]`));if(e.length===0)return;let t=new Map,n=e=>{let n=parseInt(e.getAttribute(`data-target`)||`0`,10),r=e.getAttribute(`data-suffix`)||``;t.has(e)&&(clearInterval(t.get(e)),t.delete(e));let i=performance.now(),a=setInterval(()=>{if(performance.now()-i>=600){clearInterval(a),t.delete(e),e.textContent=String(n)+r;return}let o=Math.floor(Math.random()*99)+1;e.textContent=String(o)+r},60);t.set(e,a)},r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(e.target)})},{threshold:.5});e.forEach(e=>r.observe(e))})(),(()=>{let e=document.getElementById(`projCardsTrack`),t=document.getElementById(`projNavPrev`),n=document.getElementById(`projNavNext`),r=document.getElementById(`projDots`),i=document.getElementById(`projSearch`),a=document.getElementById(`projNoResults`),o=document.getElementById(`projFilterBtn`),s=document.getElementById(`projFilterPanel`),c=document.getElementById(`projFilterBadge`),l=document.getElementById(`projFilterReset`);if(!e)return;let u=Array.from(e.querySelectorAll(`.proj-card`));if(u.length===0)return;let d=[...u],f=Math.floor(d.length/2),p={tech:[],year:[],role:[]},m=[`is-far-left`,`is-left`,`is-active`,`is-right`,`is-far-right`],h=()=>{u.forEach(e=>{e.style.display=`none`,e.classList.remove(...m)}),d.forEach((e,t)=>{e.style.display=`flex`;let n=t-f;n===0?e.classList.add(`is-active`):n===-1?e.classList.add(`is-left`):n===1?e.classList.add(`is-right`):n<-1?e.classList.add(`is-far-left`):e.classList.add(`is-far-right`)}),r&&(r.innerHTML=d.map((e,t)=>`
          <button class="proj-dot${t===f?` is-active`:``}" data-proj-dot="${t}" type="button" aria-label="Go to project ${t+1}"></button>
        `).join(``),r.querySelectorAll(`.proj-dot`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.projDot??`-1`,10);isNaN(t)||g(t)})}))};h();let g=e=>{d.length!==0&&(f=Math.max(0,Math.min(e,d.length-1)),h())},_=e=>{if(d.length===0)return;let t=f+e;t<0&&(t=d.length-1),t>=d.length&&(t=0),g(t)};t?.addEventListener(`click`,()=>_(-1)),n?.addEventListener(`click`,()=>_(1)),e.addEventListener(`click`,e=>{let t=e.target.closest(`.proj-card`);if(!t)return;let n=d.indexOf(t);n!==-1&&n!==f&&g(n)}),document.addEventListener(`keydown`,e=>{e.key===`ArrowLeft`&&_(-1),e.key===`ArrowRight`&&_(1)});let v=0;e.addEventListener(`touchstart`,e=>{v=e.touches[0].clientX},{passive:!0}),e.addEventListener(`touchend`,e=>{let t=e.changedTouches[0].clientX-v;Math.abs(t)>40&&_(t<0?1:-1)});let y=e=>{let t=e.querySelector(`.proj-card-title`)?.textContent?.toLowerCase()??``,n=i?.value.trim().toLowerCase()??``;if(n&&!t.includes(n))return!1;if(p.tech.length>0){let t=Array.from(e.querySelectorAll(`.proj-tag`)).map(e=>e.textContent?.trim()??``);if(!p.tech.some(e=>t.includes(e)))return!1}if(p.year.length>0){let t=e.querySelector(`.proj-card-badge`)?.textContent??``;if(!p.year.some(e=>t.includes(e)))return!1}if(p.role.length>0){let t=e.querySelector(`.proj-card-badge`)?.textContent??``;if(!p.role.some(e=>t.toLowerCase().includes(e.toLowerCase())))return!1}return!0},b=()=>{d=u.filter(e=>y(e)),f=d.length>0?Math.floor(d.length/2):0,h();let e=i?.value.trim().toLowerCase()??``,t=Object.values(p).some(e=>e.length>0);a&&a.classList.toggle(`visible`,d.length===0&&(e!==``||t)),c?.classList.toggle(`visible`,t)};i?.addEventListener(`input`,b);let x=document.getElementById(`topNav`),S=(e,t)=>{let n=t.querySelector(`.proj-modal-titlebar`);n&&(n.style.cursor=`grab`,n.addEventListener(`mousedown`,r=>{if(r.target.closest(`.proj-modal-actions, .proj-modal-dl-btn, .proj-modal-close-btn, .proj-modal-dots`))return;r.preventDefault();let i=r.clientX,a=r.clientY,o=t.offsetLeft,s=t.offsetTop;t.classList.add(`is-dragging`),n.style.cursor=`grabbing`,document.body.style.userSelect=`none`;let c=n=>{let r=n.clientX-i,c=n.clientY-a,l=o+r,u=s+c,d=e.clientWidth,f=e.clientHeight;l=Math.max(-t.offsetWidth+80,Math.min(l,d-80)),u=Math.max(0,Math.min(u,f-40)),t.style.left=l+`px`,t.style.top=u+`px`},l=()=>{t.classList.remove(`is-dragging`),n.style.cursor=`grab`,document.body.style.userSelect=``,document.removeEventListener(`mousemove`,c),document.removeEventListener(`mouseup`,l)};document.addEventListener(`mousemove`,c),document.addEventListener(`mouseup`,l)})),t.querySelectorAll(`[data-dir]`).forEach(e=>{e.addEventListener(`mousedown`,n=>{n.preventDefault(),n.stopPropagation();let r=e.dataset.dir??``,i=n.clientX,a=n.clientY,o=t.offsetWidth,s=t.offsetHeight,c=t.offsetLeft,l=t.offsetTop;document.body.style.userSelect=`none`;let u=e=>{let n=e.clientX-i,u=e.clientY-a;if(r.includes(`e`)&&(t.style.width=Math.max(360,o+n)+`px`),r.includes(`s`)&&(t.style.height=Math.max(260,s+u)+`px`),r.includes(`w`)){let e=Math.max(360,o-n);t.style.width=e+`px`,t.style.left=c+o-e+`px`}if(r.includes(`n`)){let e=Math.max(260,s-u);t.style.height=e+`px`,t.style.top=l+s-e+`px`}},d=()=>{document.body.style.userSelect=``,document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,d)};document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,d)})})},C=e=>{let t=document.getElementById(`projModal-${e}`);if(!t)return;let n=t.querySelector(`.proj-modal-window`);if(n&&!n.dataset.modalReady){let e=window.innerWidth,r=window.innerHeight;n.style.left=Math.round((e-640)/2)+`px`,n.style.top=Math.round((r-580)/2)+`px`,S(t,n),n.dataset.modalReady=`1`}t.classList.add(`is-open`),document.body.style.overflow=`hidden`,x&&x.classList.add(`modal-hidden`)},w=e=>{let t=document.getElementById(`projModal-${e}`);t&&(t.classList.remove(`is-open`),document.body.style.overflow=``,x&&x.classList.remove(`modal-hidden`))},T=()=>{document.querySelectorAll(`.proj-modal-overlay.is-open`).forEach(e=>{e.classList.remove(`is-open`)}),document.body.style.overflow=``,x&&x.classList.remove(`modal-hidden`)};e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-proj-open]`);t&&(e.stopPropagation(),C(t.dataset.projOpen??``))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-proj-close]`);if(t){w(t.dataset.projClose??``);return}let n=e.target.closest(`.proj-modal-overlay`);n&&e.target===n&&T()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&T()});let E=e=>{let t=e??!s?.classList.contains(`is-open`);s?.classList.toggle(`is-open`,t),o?.classList.toggle(`is-open`,t),o?.setAttribute(`aria-expanded`,String(t))};o?.addEventListener(`click`,e=>{e.stopPropagation(),E()}),l?.addEventListener(`click`,e=>{e.stopPropagation(),Object.keys(p).forEach(e=>{p[e]=[]}),s?.querySelectorAll(`.proj-filter-opt`).forEach(e=>{e.classList.remove(`is-selected`)}),i&&(i.value=``),b(),E(!1)}),document.addEventListener(`click`,e=>{s?.classList.contains(`is-open`)&&!s.contains(e.target)&&e.target!==o&&E(!1)}),s?.querySelectorAll(`.proj-filter-opt`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.filterGroup??``,r=e.dataset.filterVal??``;if(!n||!r)return;let i=p[n],a=i.indexOf(r);a===-1?i.push(r):i.splice(a,1),e.classList.toggle(`is-selected`,i.includes(r)),b()})})})()},X=document.querySelector(`#app`);X.innerHTML=`
  <div id="loadingScreen" class="loading-screen">
    <div class="loading-screen__inner">
      <h1 class="loading-screen__title">My Portfolio</h1>
      <div class="loading-screen__bar">
        <span class="loading-screen__fill"></span>
      </div>
    </div>
  </div>

  <div aria-hidden="true" class="global-bg-layer">
    <div class="blob global-blob-1"></div>
    <div class="blob slow global-blob-2"></div>
    <div class="blob faster global-blob-3"></div>
    <div class="global-bg-overlay"></div>
  </div>

  ${h()}

  <main class="main-content">
    ${_()}
    ${k()}
    ${U()}
    ${se()}
    ${ce()}
  </main>
`,window.addEventListener(`DOMContentLoaded`,()=>{ge(),window.addEventListener(`load`,()=>{let e=document.getElementById(`loadingScreen`);e&&window.setTimeout(()=>{e.classList.add(`is-hidden`),window.setTimeout(()=>e.remove(),500)},1800)})});export{l as n,o as t};