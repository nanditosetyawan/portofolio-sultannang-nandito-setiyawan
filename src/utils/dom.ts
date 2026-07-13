import reloadIcon from '../assets/icons/reload.png';
import backLoadIcon from '../assets/icons/back_load.png';
import whiteModeIcon from '../assets/icons/white_mode.png';
import darkModeIcon from '../assets/icons/dark_mode.png';
import burgerLightIcon from '../assets/icons/burger_light.png';
import burgerDarkIcon from '../assets/icons/burger_dark.png';

export const initApp = () => {
  const topNav = document.getElementById('topNav');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavShell = document.getElementById('mobileNavShell');
  const mobileBurgerBtn = document.getElementById('mobileBurgerBtn');
  const mobileBurgerIcon = document.getElementById('mobileBurgerIcon') as HTMLImageElement | null;
  const navShell = document.getElementById('navShell');
  const desktopNav = document.getElementById('desktopNav');
  const navActivePill = document.getElementById('navActivePill') as HTMLSpanElement | null;
  const navLinks = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-link]'));
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon') as HTMLImageElement | null;
  const menuBtn = document.getElementById('menuBtn');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  const sections = ['hero', 'about', 'projects', 'achievements', 'contact']
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  const openSidebar = () => {
    if (!mobileSidebar) return;
    mobileSidebar.classList.remove('hidden');
    mobileSidebar.classList.add('block');
    // Allow display: block to apply before starting transitions
    requestAnimationFrame(() => {
      const backdrop = document.getElementById('sidebarBackdrop');
      const content = document.getElementById('sidebarContent');
      if (backdrop) {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
      }
      if (content) {
        content.classList.remove('-translate-x-full');
        content.classList.add('translate-x-0');
      }
    });
    document.body.classList.add('overflow-hidden');
  };

  const closeSidebarMenu = () => {
    if (!mobileSidebar) return;
    const backdrop = document.getElementById('sidebarBackdrop');
    const content = document.getElementById('sidebarContent');
    if (backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
    }
    if (content) {
      content.classList.remove('translate-x-0');
      content.classList.add('-translate-x-full');
    }
    // Wait for transition before hiding completely
    setTimeout(() => {
      mobileSidebar.classList.add('hidden');
      mobileSidebar.classList.remove('block');
    }, 300);
    document.body.classList.remove('overflow-hidden');
  };

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = topNav?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + target.getBoundingClientRect().top - navHeight - 8;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });
  };

  // Only desktop nav links — sidebar links are hidden and would give wrong measurements
  const desktopNavLinks = Array.from(
    document.querySelectorAll<HTMLElement>('#desktopNav [data-nav-link]')
  );

  // ── Mobile burger icon: update to match current theme ────────────────────
  const syncBurgerIcon = () => {
    if (!mobileBurgerIcon) return;
    const isDark = document.documentElement.classList.contains('dark');
    mobileBurgerIcon.src = isDark ? burgerDarkIcon : burgerLightIcon;
  };
  syncBurgerIcon();

  const syncNavbarState = () => {
    const scrolled = window.scrollY > 18;

    if (navShell) {
      navShell.classList.toggle('is-scrolled', scrolled);
    }

    if (mobileNavShell) {
      mobileNavShell.classList.toggle('is-scrolled', scrolled);
      // At top: show full-width box, otherwise shrink
      const atTop = window.scrollY === 0;
      mobileNavShell.classList.toggle('at-top', atTop);
    }

    // When back at very top, also ensure nav is visible
    if (window.scrollY === 0) {
      showNav();
    }
  };

  // Navbar link behavior
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;
      event.preventDefault();
      const targetId = href.slice(1);
      setActiveNav(targetId);
      closeSidebarMenu();
      scrollToSection(targetId);
    });
  });

  // ── About CTA "Lets work together" → scroll to #contact ──────────────────
  const aboutWidCta = document.getElementById('aboutWidCta');
  aboutWidCta?.addEventListener('click', (event) => {
    event.preventDefault();
    setActiveNav('contact');
    scrollToSection('contact');
  });
  // ─────────────────────────────────────────────────────────────────────────

  // Theme toggle
  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    if (themeIcon) {
      themeIcon.src = isDark ? darkModeIcon : whiteModeIcon;
      themeIcon.alt = isDark ? 'Dark mode' : 'Light mode';
    }
    syncBurgerIcon();
  });

  // Sidebar controls
  menuBtn?.addEventListener('click', openSidebar);
  mobileBurgerBtn?.addEventListener('click', openSidebar);
  closeSidebar?.addEventListener('click', closeSidebarMenu);
  sidebarBackdrop?.addEventListener('click', closeSidebarMenu);

  // Reveal elements
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Continuous Liquid Nav Pill Interpolation ──────────────────────────────
  let activeSection = 'hero';

  const updateActiveFromScroll = () => {
    if (!desktopNav || !navActivePill || desktopNavLinks.length === 0) return;

    // The point on the screen where a section is considered "active"
    const triggerLine = window.innerHeight * 0.35;
    // The height of the transition zone above and below the trigger line (reduced for faster snap)
    const zoneHalf = window.innerHeight * 0.10; 

    let currIdx = 0;
    let nextIdx = 0;
    let progress = 0;

    // First, find which section is currently solid
    let solidIdx = 0;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= triggerLine + zoneHalf) {
        solidIdx = i;
      }
    }

    currIdx = solidIdx;
    nextIdx = solidIdx;

    // Now check if any boundary is within the transition zone
    for (let i = 1; i < sections.length; i++) {
      const y = sections[i].getBoundingClientRect().top;
      // If the top of section i is within the transition zone
      if (y > triggerLine - zoneHalf && y < triggerLine + zoneHalf) {
        // We are transitioning between section i-1 and section i
        currIdx = i - 1;
        nextIdx = i;
        // Calculate how far along the transition is (0 to 1)
        progress = 1 - (y - (triggerLine - zoneHalf)) / (2 * zoneHalf);
        break;
      }
    }

    // Edge case: bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
      currIdx = sections.length - 1;
      nextIdx = sections.length - 1;
      progress = 0;
    }

    // Get nav link rects
    const navRect = desktopNav.getBoundingClientRect();
    const currLinkRect = desktopNavLinks[currIdx].getBoundingClientRect();
    const nextLinkRect = desktopNavLinks[nextIdx].getBoundingClientRect();

    const currLeft = currLinkRect.left - navRect.left;
    const currWidth = currLinkRect.width;
    const currRight = currLeft + currWidth;

    const nextLeft = nextLinkRect.left - navRect.left;
    const nextWidth = nextLinkRect.width;
    const nextRight = nextLeft + nextWidth;

    let targetLeft = currLeft;
    let targetRight = currRight;

    // Liquid stretch-and-shrink effect
    if (nextLeft > currLeft) {
      // Moving right: stretch right edge first, then shrink left edge
      const stretchProgress = Math.min(1, progress * 2);
      const shrinkProgress = Math.max(0, (progress - 0.5) * 2);
      targetLeft = currLeft + (nextLeft - currLeft) * shrinkProgress;
      targetRight = currRight + (nextRight - currRight) * stretchProgress;
    } else if (nextLeft < currLeft) {
      // Moving left: stretch left edge first, then shrink right edge
      const stretchProgress = Math.min(1, progress * 2);
      const shrinkProgress = Math.max(0, (progress - 0.5) * 2);
      targetLeft = currLeft - (currLeft - nextLeft) * stretchProgress;
      targetRight = currRight - (currRight - nextRight) * shrinkProgress;
    }

    const targetWidth = targetRight - targetLeft;

    navActivePill.style.transition = 'none'; // Disable CSS transition for continuous liquid feel
    navActivePill.style.transform = `translateX(${targetLeft}px)`;
    navActivePill.style.width = `${targetWidth}px`;
    navActivePill.style.opacity = '1';

    // Update discrete active class for text color
    let primaryIdx = progress < 0.5 ? currIdx : nextIdx;
    const primarySectionId = sections[primaryIdx].id;
    if (primarySectionId !== activeSection) {
      activeSection = primarySectionId;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeSection}`);
      });
    }
  };

  // Bind to scroll
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveFromScroll);
  }, { passive: true });
  
  // Wait a tick for fonts/layout to render before first placement
  setTimeout(() => requestAnimationFrame(updateActiveFromScroll), 100);
  
  // We no longer call positionNavPill from setActiveNav directly, it's driven entirely by scroll
  const setActiveNav = (targetId: string) => {
    // Only used for manual clicks now; scroll listener handles the pill animation
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
    });
  };
  setActiveNav('hero');
  // ── Hero Background & Content Parallax ──────────────────────────────────
  const heroSection = document.getElementById('hero');
  const heroBg = heroSection?.querySelector('.hero-bg-fixed') as HTMLElement | null;
  const heroContent = heroSection?.querySelector('.hero-container') as HTMLElement | null;

  const updateHeroEffects = (currentY: number) => {
    if (!heroSection) return;
    const heroHeight = heroSection.offsetHeight;
 
    if (heroBg) {
        heroBg.style.opacity = currentY > heroHeight ? "0" : "1";
    }
    if (currentY <= heroHeight + 100) {
      // 1. Keep background fixed relative to viewport
      

      // 2. Fade out and translate up the content
      if (heroContent) {
     const fadeStart = heroHeight * 0.78; // mulai pudar saat Hero hampir keluar
const fadeEnd = heroHeight * 1.05;   // benar-benar hilang saat sudah sangat jauh ke atas

const progress = Math.min(
  Math.max((currentY - fadeStart) / (fadeEnd - fadeStart), 0),
  1
);

heroContent.style.opacity = `${1 - progress}`;
heroContent.style.transform = `translateY(${-Math.max(0, currentY - fadeStart) * 0.25}px)`;
      }
    }
  };

  // ── Navbar: hide only after 3s of CONTINUOUS down-scroll ─────────────────
 let rafId = 0;
let lastScrollY = window.scrollY;
let navHidden = false;

let downScrollAccumMs = 0;
let lastDownScrollAt: number | null = null;
let pauseResetTimer: ReturnType<typeof setTimeout> | null = null;

const hideNav = () => {
  if (navHidden) return;
  navHidden = true;
  topNav?.classList.add('nav-hidden');
  mobileNav?.classList.add('nav-hidden');
};

const showNav = () => {
  if (!navHidden) return;
  navHidden = false;
  topNav?.classList.remove('nav-hidden');
  mobileNav?.classList.remove('nav-hidden');
};

const resetDownScroll = () => {
  downScrollAccumMs = 0;
  lastDownScrollAt = null;
  if (pauseResetTimer) {
    clearTimeout(pauseResetTimer);
    pauseResetTimer = null;
  }
};

const schedulePauseReset = () => {
  if (pauseResetTimer) clearTimeout(pauseResetTimer);

  pauseResetTimer = setTimeout(() => {
    resetDownScroll();
  }, 1200); // ✏️ pause reset: 1200ms (dikurangi 40% dari 2000ms)

};

const onScroll = () => {
  if (rafId) return;

  rafId = window.requestAnimationFrame(() => {
    const currentY = window.scrollY;
    const scrollingDown = currentY > lastScrollY;
    const scrollingUp = currentY < lastScrollY;

    if (scrollingUp) {
      resetDownScroll();
      showNav();
    } else if (scrollingDown && currentY > 80) {
      const now = Date.now();

      if (lastDownScrollAt !== null) {
        downScrollAccumMs += now - lastDownScrollAt;
      }
      lastDownScrollAt = now;

      schedulePauseReset();

      if (downScrollAccumMs >= 1800) { // ✏️ hide threshold: 1800ms (dikurangi 40% dari 3000ms)
        hideNav();
      }

    }


      lastScrollY = currentY;
      updateHeroEffects(currentY);
     
      syncNavbarState();
      rafId = 0;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    syncNavbarState();
    updateHeroEffects(window.scrollY);
  });
  syncNavbarState();
  updateHeroEffects(window.scrollY);
  // ─────────────────────────────────────────────────────────────────────────

  // Accordions
  const accordions = document.querySelectorAll<HTMLElement>('[data-accordion]');
  accordions.forEach((acc) => {
    const btn = acc.querySelector<HTMLElement>('[data-accordion-btn]');
    const body = acc.querySelector<HTMLElement>('.accordion-body');
    const icon = acc.querySelector<HTMLElement>('.chev');
    let isOpen = false;

    const sync = () => {
      if (body) {
        body.classList.toggle('hidden', !isOpen);
      }
      if (icon) {
        icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
      btn?.setAttribute('aria-expanded', String(isOpen));
    };

    // Hide accordion body by default
    sync();

    btn?.addEventListener('click', () => {
      if (icon) {
        icon.classList.add('spin');
      }

      window.setTimeout(() => {
        isOpen = !isOpen;
        sync();
        if (icon) {
          icon.classList.remove('spin');
        }
      }, 280);
    });
  });

  // Load more toggles

  const initToggle = (btnId: string, itemSelector: string) => {
    const btn = document.getElementById(btnId);
    const icon = document.getElementById(`${btnId}Icon`) as HTMLImageElement | null;

    if (!btn || !icon) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>(itemSelector)
    );

    const STEP = 3;
    let visible = 0;

    btn.addEventListener("click", () => {
      // Mulai animasi putar 720 derajat
      icon.classList.add("spin");

      const isCollapse = visible >= items.length;

      if (isCollapse) {
        // COLLAPSE: Hilangkan kelas 'show' segera untuk memicu animasi fade-out CSS
        items.forEach(item => {
          item.classList.remove("show");
        });

        // Setelah transisi fade-out selesai (550ms), sembunyikan elemen secara total, ganti ikon, dan hentikan putaran
        setTimeout(() => {
          items.forEach(item => {
            item.classList.add("hidden");
          });
          icon.src = reloadIcon;
          icon.classList.remove("spin");
        }, 550);

        visible = 0;
      } else {
        // EXPAND: Tampilkan item berikutnya
        const next = Math.min(visible + STEP, items.length);

        // Mulai memunculkan item di tengah putaran (250ms) untuk efek transisi yang mengalir
        setTimeout(() => {
          for (let i = visible; i < next; i++) {
            const item = items[i];
            item.classList.remove("hidden");

            // Picu layout reflow agar browser mendaftarkan perubahan display sebelum transisi fade-in
            void item.offsetWidth;

            // Tambahkan kelas 'show' dengan jeda stagger (bergantian)
            setTimeout(() => {
              item.classList.add("show");
            }, (i - visible) * 220);
          }

          visible = next;

          if (visible === items.length) {
            icon.src = backLoadIcon;
          }
        }, 250);

        // Hentikan animasi putar setelah putaran 720 derajat selesai (650ms)
        setTimeout(() => {
          icon.classList.remove("spin");
        }, 650);
      }
    });
  };

  initToggle("projectsToggle", ".extra-project");
  initToggle("achievementsToggle", ".extra-achieve");




  // Certificate slideshow & download
  document.querySelectorAll<HTMLElement>('.certificate-stage').forEach((stage) => {
    const dataString = stage.getAttribute('data-cert-images');
    if (!dataString) return;

    let images: string[] = [];
    try {
      images = JSON.parse(dataString);
    } catch {
      images = [];
    }

    if (!images.length) return;

    const title = stage.getAttribute('data-cert-title') || 'Certificate';
    const imgEl = stage.querySelector<HTMLImageElement>('.cert-img');
    const downloadBtn = stage.querySelector<HTMLButtonElement>('.download-btn');
    const prevBtn = stage.querySelector<HTMLButtonElement>('.carousel-prev');
    const nextBtn = stage.querySelector<HTMLButtonElement>('.carousel-next');

    // Find preview badge (which is now a button on mobile) and mobile-only download button
    const previewBtn = stage.querySelector<HTMLButtonElement>('[data-preview-btn]');
    const parentAccordion = stage.closest('[data-accordion]');
    const mobileDownloadBtn = parentAccordion?.querySelector<HTMLButtonElement>('[data-download-btn]');

    // Initialize carousel state
    let currentIdx = 0;
    const showImage = (idx: number) => {
      if (!imgEl) return;
      imgEl.src = images[idx];
      imgEl.style.opacity = '1';
    };

    if (images.length > 1 && imgEl) {
      // Show navigation buttons
      prevBtn?.classList.remove('hidden');
      nextBtn?.classList.remove('hidden');

      // Auto slideshow
      const intervalId = window.setInterval(() => {
        if (!imgEl) return;
        imgEl.style.opacity = '0';
        window.setTimeout(() => {
          currentIdx = (currentIdx + 1) % images.length;
          showImage(currentIdx);
        }, 280);
      }, 5000);

      // Navigation button handlers
      prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        clearInterval(intervalId);
        currentIdx = (currentIdx - 1 + images.length) % images.length;
        showImage(currentIdx);
      });
      nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        clearInterval(intervalId);
        currentIdx = (currentIdx + 1) % images.length;
        showImage(currentIdx);
      });
    } else {
      // Single image: hide navigation buttons if present
      prevBtn?.classList.add('hidden');
      nextBtn?.classList.add('hidden');
      // Ensure the first (and only) image is displayed
      showImage(0);
    }

    // Preview button popup modal (only for Mobile screen widths)
    previewBtn?.addEventListener('click', (event) => {
      event.stopPropagation();
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      const currentImageSrc = images[currentIdx];
      if (!currentImageSrc) return;

      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 animate-fade-in';

      const img = document.createElement('img');
      img.src = currentImageSrc;
      img.className = 'max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-zoom-in';

      const closeBtn = document.createElement('button');
      closeBtn.className = 'absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white z-10 transition';
      closeBtn.innerHTML = '<span class="material-symbols-outlined text-[28px]">close</span>';
      closeBtn.setAttribute('aria-label', 'Close preview');

      overlay.appendChild(img);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
      document.body.classList.add('overflow-hidden');

      const closeOverlay = () => {
        overlay.classList.add('animate-fade-out');
        img.classList.add('animate-zoom-out');
        setTimeout(() => {
          overlay.remove();
          document.body.classList.remove('overflow-hidden');
        }, 250);
      };

      closeBtn.addEventListener('click', closeOverlay);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
      });
    });

    // Download functionality — correct extension + ZIP for multi-file
    const getExtension = (src: string): string => {
      if (src.startsWith('data:')) {
        // e.g. data:image/jpeg;base64,... or data:image/svg+xml;...
        const mime = src.split(';')[0].split(':')[1] || '';
        const map: Record<string, string> = {
          'image/jpeg': 'jpg',
          'image/jpg': 'jpg',
          'image/png': 'png',
          'image/webp': 'webp',
          'image/gif': 'gif',
          'image/svg+xml': 'svg',
        };
        return map[mime] ?? 'jpg';
      }
      // Real URL — grab extension from the pathname
      try {
        const pathname = new URL(src).pathname;
        const ext = pathname.split('.').pop()?.toLowerCase() ?? '';
        return ext || 'jpg';
      } catch {
        const ext = src.split('?')[0].split('.').pop()?.toLowerCase() ?? '';
        return ext || 'jpg';
      }
    };

    const fetchBlob = (src: string): Promise<Blob> => {
      if (src.startsWith('data:')) {
        const [header, payload] = src.split(',');
        const mime = header.split(':')[1].split(';')[0];
        const isBase64 = header.includes(';base64');
        if (isBase64) {
          const binary = atob(payload);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          return Promise.resolve(new Blob([bytes], { type: mime }));
        } else {
          // percent-encoded (e.g. charset=UTF-8 SVG)
          const decoded = decodeURIComponent(payload);
          return Promise.resolve(new Blob([decoded], { type: mime }));
        }
      }
      return fetch(src).then(r => r.blob());
    };

    const triggerDownload = async (event: Event) => {
      event.stopPropagation();

      if (images.length === 1) {
        // Single file — download with correct extension
        const src = images[0];
        const ext = getExtension(src);
        const blob = await fetchBlob(src);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.${ext}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      } else {
        // Multiple files — bundle into ZIP
        const JSZip = (await import('jszip')).default;
        const zip = new JSZip();
        await Promise.all(
          images.map(async (src, idx) => {
            const ext = getExtension(src);
            const blob = await fetchBlob(src);
            zip.file(`${title}_${idx + 1}.${ext}`, blob);
          })
        );
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.zip`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    };

    downloadBtn?.addEventListener('click', triggerDownload);
    mobileDownloadBtn?.addEventListener('click', async (e) => {
      await triggerDownload(e);
      // Toggle downloaded style: green → transparent with black border
      mobileDownloadBtn.classList.add('downloaded');
    });
  });

  // ── Hero Photo Stack Auto-Rotate ──────────────────────────────────────────
  const heroStack = document.getElementById('heroPhotoStack');
  if (heroStack) {
    const cards = Array.from(heroStack.querySelectorAll<HTMLElement>('[data-stack-card]'));
    const total = cards.length;

    if (total > 1) {
      let activeIdx = 0;

      const rotate = () => {
        // Remove all pos-N classes
        cards.forEach((card, i) => {
          card.classList.remove(...Array.from({ length: total }, (_, n) => `pos-${n}`));
        });

        // Assign new positions in a round-robin shift
        cards.forEach((card, i) => {
          const newPos = (i - activeIdx + total) % total;
          card.classList.add(`pos-${newPos}`);
        });

        activeIdx = (activeIdx + 1) % total;
      };

      // Click anywhere on the stack to advance
      heroStack.addEventListener('click', rotate);

      // Auto-rotate every 3 seconds
      setInterval(rotate, 3000);
    }
  }
  // ─────────────────────────────────────────────────────────────────────────

  // ══════════════════════════════════════════════════════════════════════════
  // ABOUT SECTION — Zigzag parallax + Education sticky dot
  // ══════════════════════════════════════════════════════════════════════════
  /*
    ✏️ KONFIGURASI — ubah nilai konstanta di bawah ini:

    ZIGZAG_SPEED
      Kecepatan gerak parallax baris skill (px geser per px scroll).
      Lebih besar = lebih dramatis. Saran: 0.05 – 0.25. Default: 0.12

    ROW2_OFFSET_PX
      Offset awal (px) baris ke-2 ke kanan untuk efek zigzag.
      Idealnya ≈ (--skill-circle-size + --skill-gap) / 2.
      Default: 46 (cocok dengan circle 76px + gap 16px)

    EDU_SWITCH_POINT
      Progress scroll (0–1) saat tampilan beralih dari item 01 ke 02.
      0.3 = ganti lebih cepat, 0.6 = ganti lebih lambat. Default: 0.45

    DOT_POSITIONS
      Posisi dot pada garis vertikal, satu nilai per item pendidikan.
      Angka adalah persentase tinggi garis (misal '25%' = 25% dari atas).
      Tambah entry jika kamu punya lebih dari 2 item pendidikan.
      Default: ['25%', '72%']

    EDU_DOT_MS
      Durasi animasi pergerakan dot timeline (ms). Default: 550
  */
  const ZIGZAG_SPEED      = 0.45; // ✏️ Diperkuat geraknya sesuai permintaan user
  const EDU_SWITCH_POINT  = 0.45;
  const DOT_POSITIONS     = ['25%', '72%'] as const;
  const EDU_DOT_MS        = 550;

  /* ── DOM refs ─────────────────────────────────────────────── */
  const aboutSkillsWrap = document.getElementById('aboutSkillsSection');
  const aboutRow1       = aboutSkillsWrap
    ?.querySelector<HTMLElement>('[data-skills-row="1"]') ?? null;
  const aboutRow2       = aboutSkillsWrap
    ?.querySelector<HTMLElement>('[data-skills-row="2"]') ?? null;

  const aboutEduSection = document.getElementById('aboutEduSection');
  const aboutEduDot     = document.getElementById('aboutEduDot') as HTMLElement | null;
  const aboutEduTrack   = document.getElementById('aboutEduTrack') as HTMLElement | null;

  // Helper untuk mengambil offset zigzag dari CSS runtime
  const getSkillsOffset = (): number => {
    const style = getComputedStyle(document.documentElement);
    return parseFloat(style.getPropertyValue('--skill-circle-size')) || 106;
  };

  /* ── Auto-scroll & rotation state variables ────────────────── */
  let autoScrollPos = 0;
  let targetScrollOffset = 0;
  let currentScrollOffset = 0;

  const skillCirclesRow1 = Array.from(aboutSkillsWrap?.querySelectorAll('[data-skills-row="1"] .about-skill-circle') || []) as HTMLElement[];
  const skillCirclesRow2 = Array.from(aboutSkillsWrap?.querySelectorAll('[data-skills-row="2"] .about-skill-circle') || []) as HTMLElement[];

  const animateSkills = () => {
    autoScrollPos += 0.35;
    currentScrollOffset += (targetScrollOffset - currentScrollOffset) * 0.08;

    if (aboutSkillsWrap && aboutRow1 && aboutRow2) {
      const row2Offset = getSkillsOffset();
      const t1 = autoScrollPos + currentScrollOffset;
      const t2 = row2Offset - autoScrollPos - currentScrollOffset;

      aboutRow1.style.transform = `translateX(${t1}px)`;
      aboutRow2.style.transform = `translateX(${t2}px)`;

      const circleSize = getSkillsOffset();
      const circumference = Math.PI * circleSize;
      const r1 = (t1 / circumference) * 360;
      const r2 = (t2 / circumference) * 360;

      skillCirclesRow1.forEach(circle => { circle.style.transform = `rotate(${r1}deg)`; });
      skillCirclesRow2.forEach(circle => { circle.style.transform = `rotate(${r2}deg)`; });
    }

    requestAnimationFrame(animateSkills);
  };

  if (aboutSkillsWrap) {
    requestAnimationFrame(animateSkills);
  }

  const aboutEduLine = aboutEduSection?.querySelector('.about-edu-line') as HTMLElement | null;

  /* ── Education scroll-driven animation ──────────────────────────────────
     BEHAVIOUR:
       - Start  : only item 01 visible, dot aligned at top of line, centered with "01"
       - Phase 1: dot descends, item 01 fades out, item 02 fades in from below
       - Phase 2: dot rises back to top, now centered with "02" (since track scrolled)
       - End    : item 02 settled, dot at top, animation done

     DOT path: sin curve in pixels — goes down to center of line, then returns.
     TRACK   : linear translateY(0 → -itemHeight)
     OPACITY : 01 fades 1→0 in first half, 02 fades 0→1 in second half
     HEIGHT  : JS clamps items container to exactly one item height (clips 02)
  ─────────────────────────────────────────────────────────────────────── */
  let itemHeight   = 0;
  let settledY     = 0;  // Center of "01" relative to top of the line
  let lineMargin   = 0;  // margin-top of the line in pixels
  let itemsClipped = false;

  const aboutEduItemsEl = aboutEduTrack?.parentElement as HTMLElement | null;
  const eduItems = aboutEduTrack
    ? Array.from(aboutEduTrack.children) as HTMLElement[]
    : [];

  const measureLayout = (): void => {
    if (itemsClipped || !aboutEduTrack || !aboutEduLine || !aboutEduItemsEl) return;
    const firstItem = eduItems[0];
    if (!firstItem) return;

    itemHeight = firstItem.offsetHeight;
    const numEl = firstItem.querySelector('.about-edu-num') as HTMLElement | null;

    if (numEl && itemHeight > 0) {
      // Set container height to exactly one item height to clip item 02
      aboutEduItemsEl.style.height = `${itemHeight}px`;

      // Measure number center Y relative to the line's top
      const rectNum = numEl.getBoundingClientRect();
      const rectLine = aboutEduLine.getBoundingClientRect();
      
      // Factoring out current translateY of track in case layout measures mid-scroll
      const trackStyle = getComputedStyle(aboutEduTrack);
      const matrix = new WebKitCSSMatrix(trackStyle.transform);
      const currentTrackY = matrix.m41 || matrix.f || 0;

      settledY = (rectNum.top + rectNum.height / 2 - currentTrackY) - rectLine.top;
      
      const lineStyle = getComputedStyle(aboutEduLine);
      lineMargin = Math.abs(parseFloat(lineStyle.marginTop)) || 35;

      itemsClipped = true;
    }
  };

  const updateAbout = (): void => {
    if (!aboutEduSection || !aboutEduDot || !aboutEduTrack || !aboutEduLine) return;

    // Ensure we measure layout
    measureLayout();

    const rect     = aboutEduSection.getBoundingClientRect();
    const sectionH = aboutEduSection.offsetHeight;
    const viewH    = window.innerHeight;

    // Skip on mobile
    if (sectionH < viewH * 1.2) return;

    // progress 0 → 1
    const scrolled   = -rect.top;
    const scrollable = sectionH - viewH;
    const progress   = Math.max(0, Math.min(1, scrolled / scrollable));

    const D = settledY;
    const L = itemHeight + 2 * lineMargin; // Total line height
    const H = itemHeight;

    // ── DOT: sinusoidal arc (goes down then returns to top) ─────────────
    // starts at D, goes down to L - D, returns to D
    const arc = Math.sin(progress * Math.PI);
    const dotY = D + (L - 2 * D) * arc;

    aboutEduDot.style.transition = 'none';
    aboutEduDot.style.top = `${dotY}px`;

    // ── TRACK: custom non-linear scroll so dot fetches 02 and rises together ──
    if (H > 0) {
      let trackY = 0;
      const tMid = L - 2 * D - H; // Track Y position at progress = 0.5 (fetches 02)
      
      if (progress < 0.5) {
        // Phase 1: 01 exits, track slides slowly to tMid
        const normP = progress / 0.5;
        trackY = tMid * normP;
      } else {
        // Phase 2: Dot meets 02 and they rise together in perfect alignment
        trackY = dotY - D - H;
      }
      aboutEduTrack.style.transform = `translateY(${trackY}px)`;
    }

    // ── OPACITY: crossfade so 01 and 02 never fully overlap ─────────────
    if (eduItems[0]) {
      const op1 = progress < 0.5 ? 1 - (progress / 0.5) : 0;
      eduItems[0].style.opacity = `${op1}`;
    }
    if (eduItems[1]) {
      const op2 = progress >= 0.5 ? (progress - 0.5) / 0.5 : 0;
      eduItems[1].style.opacity = `${op2}`;
    }
  };

  // Measure and init on first paint
  requestAnimationFrame(() => {
    measureLayout();
    if (eduItems[1]) eduItems[1].style.opacity = '0';
    updateAbout();
  });

  // Re-measure after all fonts are loaded.
  // CabinetGrotesk-Extrabold changes item01's height (fewer line wraps than the
  // fallback font), so the cached itemHeight / settledY would be wrong without this.
  document.fonts.ready.then(() => {
    itemsClipped = false;
    measureLayout();
    updateAbout();
  });

  // Re-measure on resize so the layout stays correct if the window is resized.
  window.addEventListener('resize', () => {
    itemsClipped = false;
    requestAnimationFrame(() => {
      measureLayout();
      updateAbout();
    });
  });

  // Scroll listener
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateAbout);

    // Update skills parallax target
    if (aboutSkillsWrap) {
      const rect   = aboutSkillsWrap.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      targetScrollOffset = (window.innerHeight / 2 - center) * ZIGZAG_SPEED;
    }
  }, { passive: true });

  // ── Drag behavior for Built On Principles stars ────────────────────────────
  const initDraggable = (elId: string) => {
    const el = document.getElementById(elId);
    if (!el) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      
      if (parentRect) {
        initialLeft = rect.left - parentRect.left;
        initialTop = rect.top - parentRect.top;
      }
      
      el.style.left = `${initialLeft}px`;
      el.style.top = `${initialTop}px`;
      el.style.bottom = 'auto';
      el.style.right = 'auto';
      
      el.style.cursor = 'grabbing';
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;
      
      const parentRect = el.parentElement?.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      
      if (parentRect) {
        const maxLeft = parentRect.width - rect.width;
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        
        const maxTop = parentRect.height - rect.height;
        newTop = Math.max(0, Math.min(newTop, maxTop));
      }
      
      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.style.cursor = 'grab';
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      isDragging = true;
      startX = touch.clientX;
      startY = touch.clientY;
      
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      
      if (parentRect) {
        initialLeft = rect.left - parentRect.left;
        initialTop = rect.top - parentRect.top;
      }
      
      el.style.left = `${initialLeft}px`;
      el.style.top = `${initialTop}px`;
      el.style.bottom = 'auto';
      el.style.right = 'auto';
      
      e.preventDefault();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      
      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;
      
      const parentRect = el.parentElement?.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      
      if (parentRect) {
        const maxLeft = parentRect.width - rect.width;
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        
        const maxTop = parentRect.height - rect.height;
        newTop = Math.max(0, Math.min(newTop, maxTop));
      }
      
      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
  };

  // Run draggable initialization
  setTimeout(() => {
    initDraggable('bintangIsi');
    initDraggable('bintangKosong');
  }, 100);

  // ── End About ────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────
};


