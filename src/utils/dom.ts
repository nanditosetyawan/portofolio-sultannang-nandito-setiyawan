import reloadIcon from '../assets/icons/reload.png';
import backLoadIcon from '../assets/icons/back_load.png';

export const initApp = () => {
  const topNav = document.getElementById('topNav');
  const navShell = document.getElementById('navShell');
  const desktopNav = document.getElementById('desktopNav');
  const navActivePill = document.getElementById('navActivePill') as HTMLSpanElement | null;
  const navLinks = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-link]'));
  const mobileBurger = document.getElementById('mobileFloatingBurger');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
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
    document.body.classList.add('overflow-hidden');
  };

  const closeSidebarMenu = () => {
    if (!mobileSidebar) return;
    mobileSidebar.classList.add('hidden');
    mobileSidebar.classList.remove('block');
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

  const setActiveNav = (targetId: string) => {
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${targetId}`;
      link.classList.toggle('active', isActive);
    });

    requestAnimationFrame(() => positionNavPill(targetId));
  };

  const positionNavPill = (targetId: string) => {
    if (!desktopNav || !navActivePill) return;

    const activeLink = navLinks.find(link => link.getAttribute('href') === `#${targetId}`);
    if (!activeLink) return;

    const navRect = desktopNav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const left = linkRect.left - navRect.left;
    const top = linkRect.top - navRect.top;

    navActivePill.style.width = `${linkRect.width}px`;
    navActivePill.style.height = `${linkRect.height}px`;
    navActivePill.style.transform = `translate(${left}px, ${top}px)`;
    navActivePill.style.opacity = '1';
  };

  const syncNavbarState = () => {
    const scrolled = window.scrollY > 18;
    const isMobile = window.innerWidth < 768;

    if (navShell) {
      navShell.classList.toggle('is-scrolled', scrolled);
    }

    if (topNav && mobileBurger) {
      if (isMobile) {
        topNav.classList.toggle('mobile-hidden', scrolled);
        mobileBurger.classList.toggle('show', scrolled);
        mobileBurger.classList.toggle('left', scrolled);
      } else {
        topNav.classList.remove('mobile-hidden');
        mobileBurger.classList.remove('show', 'left');
      }
    }

    positionNavPill(document.querySelector<HTMLElement>('[data-nav-link].active')?.getAttribute('href')?.slice(1) || 'hero');
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

  // Theme toggle
  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (themeIcon) {
      themeIcon.textContent = document.documentElement.classList.contains('dark') ? 'dark_mode' : 'light_mode';
    }
  });

  // Sidebar controls
  menuBtn?.addEventListener('click', openSidebar);
  mobileBurger?.addEventListener('click', openSidebar);
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

  // Active nav by section observer
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  }, { threshold: 0.55, rootMargin: '-15% 0px -35% 0px' });

  sections.forEach(section => sectionObserver.observe(section));
  setActiveNav('hero');

  // Navbar morph + mobile burger sync
  let rafId = 0;
  const onScroll = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(() => {
      syncNavbarState();
      rafId = 0;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', syncNavbarState);
  syncNavbarState();

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

    // Download functionality (download all images)
    downloadBtn?.addEventListener('click', (event) => {
      event.stopPropagation();
      images.forEach((imgSrc, idx) => {
        const a = document.createElement('a');
        a.href = imgSrc;
        a.download = `${title}_File_${idx + 1}.svg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
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
};
