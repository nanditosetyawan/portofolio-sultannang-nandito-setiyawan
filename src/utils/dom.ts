import reloadIcon from '../assets/icons/reload.png';
import backLoadIcon from '../assets/icons/back_load.png';
import whiteModeIcon from '../assets/icons/white_mode.png';
import darkModeIcon from '../assets/icons/dark_mode.png';

export const initApp = () => {
  const topNav = document.getElementById('topNav');
  const navShell = document.getElementById('navShell');
  const desktopNav = document.getElementById('desktopNav');
  const navActivePill = document.getElementById('navActivePill') as HTMLSpanElement | null;
  const navLinks = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-link]'));
  const mobileBurger = document.getElementById('mobileFloatingBurger');
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

  // Only desktop nav links — sidebar links are hidden and would give wrong measurements
  const desktopNavLinks = Array.from(
    document.querySelectorAll<HTMLElement>('#desktopNav [data-nav-link]')
  );

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
    const isDark = document.documentElement.classList.toggle('dark');
    if (themeIcon) {
      themeIcon.src = isDark ? darkModeIcon : whiteModeIcon;
      themeIcon.alt = isDark ? 'Dark mode' : 'Light mode';
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
  // ─────────────────────────────────────────────────────────────────────────

  // ── Navbar: hide only after 3s of CONTINUOUS down-scroll ─────────────────
  let rafId = 0;
  let lastScrollY = window.scrollY;
  let navHidden = false;

  // Timestamp when continuous down-scroll started (null = not scrolling down)
  let scrollDownStartTime: number | null = null;
  // Timer to detect scroll has STOPPED (fires ~250ms after last scroll event)
  let scrollStopTimer: ReturnType<typeof setTimeout> | null = null;
  // Timer that fires exactly when the 3s threshold is reached mid-scroll
  let hideTimer: ReturnType<typeof setTimeout> | null = null;

  const hideNav = () => {
    if (navHidden) return;
    navHidden = true;
    topNav?.classList.add('nav-hidden');
  };

  const showNav = () => {
    if (!navHidden) return;
    navHidden = false;
    topNav?.classList.remove('nav-hidden');
  };

  const cancelHideTimer = () => {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
  };

  const resetDownScroll = () => {
    // User stopped scrolling down (either paused or scrolled up) — reset everything
    cancelHideTimer();
    scrollDownStartTime = null;
  };

  const onScroll = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY;

      // ── Reset the "scroll stopped" detector on every event ──
      if (scrollStopTimer) { clearTimeout(scrollStopTimer); scrollStopTimer = null; }

      if (scrollingDown && currentY > 80) {
        if (scrollDownStartTime === null) {
          // First down-scroll event — record start time
          scrollDownStartTime = Date.now();
          // Schedule hide exactly 3s from now (will be cancelled if scroll stops/reverses)
          cancelHideTimer();
          hideTimer = setTimeout(hideNav, 3000);
        }

        // Detect scroll stop: if no scroll event in 250ms, consider it stopped
        scrollStopTimer = setTimeout(() => {
          const elapsed = scrollDownStartTime !== null ? Date.now() - scrollDownStartTime : 0;
          if (elapsed >= 3000) {
            // Was scrolling down for ≥ 3s and just stopped → hide
            hideNav();
          }
          // Reset regardless (stopped before or after threshold)
          resetDownScroll();
        }, 250);

      } else {
        // Scrolling up or position didn't change → show navbar and cancel all timers
        resetDownScroll();
        showNav();
      }

      lastScrollY = currentY;
      syncNavbarState();
      rafId = 0;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', syncNavbarState);
  syncNavbarState();
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
