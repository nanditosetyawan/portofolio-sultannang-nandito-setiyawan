import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ──────────────────────────────────────────────────────────── */
/* MOBILE PATH — lightweight, viewport-triggered entrance        */
/* ──────────────────────────────────────────────────────────── */
const initHeroAnimationsMobile = (): void => {
  const badge = document.querySelector<HTMLElement>('[data-hero-anim="badge"]');
  const nameEl = document.querySelector<HTMLElement>('[data-hero-anim="name"]');
  const desc = document.querySelector<HTMLElement>('[data-hero-anim="desc"]');
  const actions = document.querySelector<HTMLElement>('[data-hero-anim="actions"]');
  const socials = document.querySelector<HTMLElement>('[data-hero-anim="socials"]');

  const elements = { badge, name: nameEl, desc, actions, socials };

  const animateConfigs: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
    badge: { from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0, duration: 0.38, ease: 'power2.out', force3D: true } },
    name: { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', force3D: true } },
    desc: { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out', force3D: true } },
    actions: { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', force3D: true } },
    socials: { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.5)', force3D: true } },
  };

  // Set initial hidden state (opacity 0)
  Object.entries(animateConfigs).forEach(([key, cfg]) => {
    const el = elements[key as keyof typeof elements];
    if (el) gsap.set(el, cfg.from);
  });

  const startObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = (entry.target as HTMLElement).dataset.heroAnim || '';
            const cfg = animateConfigs[key];
            if (cfg) {
              gsap.fromTo(entry.target, cfg.from, cfg.to);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px 0px', threshold: 0.1 }
    );

    // Observe each hero element
    Object.values(elements).forEach((el) => {
      if (el) observer.observe(el);
    });
  };

  // Start observer only AFTER the loading screen is fully removed from the DOM,
  // so entrance animations are never hidden behind it.
  let started = false;
  const startWhenReady = () => {
    if (started) return;
    started = true;
    startObserver();
  };

  const loading = document.getElementById('loadingScreen');
  if (!loading || !loading.parentNode) {
    // Already gone — animate immediately
    startWhenReady();
  } else {
    // Watch for the loading screen being removed from the DOM
    const parent = loading.parentNode;
    const mo = new MutationObserver(() => {
      if (!document.getElementById('loadingScreen')) {
        mo.disconnect();
        startWhenReady();
      }
    });
    mo.observe(parent, { childList: true });

    // Backup 1: `app:loading-done` fires when the fade-out starts (0.5s).
    // Wait ~700ms for the fade to complete and element removal to happen.
    window.addEventListener(
      'app:loading-done',
      () => {
        setTimeout(startWhenReady, 700);
      },
      { once: true }
    );

    // Backup 2: hard cap in case the event never fires.
    setTimeout(startWhenReady, 4000);
  }
};

/* ──────────────────────────────────────────────────────────── */
/* DESKTOP PATH — original GSAP timeline with loading-screen gate */
/* ──────────────────────────────────────────────────────────── */
const initHeroAnimationsDesktop = (): void => {
  const badgeText = document.querySelector<HTMLElement>('.hero-badge-text');
  const heroName = document.querySelector<HTMLElement>('.hero-name');
  const heroDesc = document.querySelector<HTMLElement>('.hero-desc');
  const heroActions = document.querySelector<HTMLElement>('.hero-actions');
  const heroSocials = document.querySelector<HTMLElement>('.hero-socials');
  const heroRight = document.querySelector<HTMLElement>('.hero-right');
  const heroContainer = document.querySelector<HTMLElement>('.hero-container');
  const heroSection = document.getElementById('hero');

  // Elements that are animated as whole (not their children)
  const mainTargets = [badgeText, heroName, heroDesc, heroActions, heroRight].filter(
    Boolean
  ) as HTMLElement[];

  // Social icons are animated as children
  const socialIcons = heroSocials?.querySelectorAll<HTMLElement>('.hero-wa-chip') || [];
  const socialIconsArr = Array.from(socialIcons);

  // Initial state: hide only the actual animated targets
  gsap.set(mainTargets, { opacity: 0 });
  if (socialIconsArr.length) gsap.set(socialIconsArr, { opacity: 0, scale: 0.6, x: -20 });

  // Build paused timeline; play after loading screen dispatches event
  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      // Safety: ensure all targets are fully visible
      gsap.set(mainTargets, { opacity: 1, x: 0, y: 0 });
      if (socialIconsArr.length) gsap.set(socialIconsArr, { opacity: 1, x: 0, y: 0, scale: 1 });
    },
  });

  // 1. Badge "HI, I'm" — from RIGHT
  if (badgeText) {
    tl.fromTo(badgeText, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out' });
  }

  // 2. Name — from LEFT (single element, keep <br> intact)
  if (heroName) {
    tl.fromTo(heroName, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }, '+=0.1');
  }

  // 3. Description — from LEFT
  if (heroDesc) {
    tl.fromTo(heroDesc, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out' }, '+=0.1');
  }

  // 4. Action buttons — from BOTTOM
  if (heroActions) {
    tl.fromTo(heroActions, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '+=0.1');
  }

  // 5. Social icons — from LEFT + scale
  if (socialIconsArr.length > 0) {
    tl.fromTo(
      socialIconsArr,
      { opacity: 0, scale: 0.6, x: -20 },
      { opacity: 1, scale: 1, x: 0, duration: 0.45, ease: 'power3.out', stagger: 0.06 },
      '+=0.1'
    );
  }

  // 6. Right photo — from BOTTOM (subtle)
  if (heroRight) {
    heroRight.style.visibility = 'visible';
    heroRight.style.pointerEvents = 'auto';
    tl.fromTo(heroRight, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '+=0.15');
  }

  // Hero container parallax on scroll (desktop only)
  if (heroContainer && heroSection) {
    gsap.fromTo(
      heroContainer,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }

  // Play timeline when loading screen finishes
  const playTimeline = () => {
    badgeText?.classList.add('typing-active');
    tl.play();
  };
  if (document.getElementById('loadingScreen')) {
    window.addEventListener('app:loading-done', playTimeline, { once: true });
    // Safety fallback: if event never fires, play after 3s
    setTimeout(() => {
      if (tl.progress() === 0) tl.play();
    }, 3000);
  } else {
    playTimeline();
  }
};

/* ──────────────────────────────────────────────────────────── */
/* Public entry point — dispatches based on viewport size      */
/* ──────────────────────────────────────────────────────────── */
export const initHeroAnimations = (): void => {
  if (prefersReduced) return;

  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  if (isDesktop) {
    initHeroAnimationsDesktop();
  } else {
    initHeroAnimationsMobile();
  }
};

/* ── Refresh helper: if viewport crosses desktop/mobile, restart ── */
export const refreshHeroAnimationMode = (): void => {
  if (prefersReduced) return;
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  // On desktop, the timeline is driven by loading-screen event.
  // On mobile, IntersectionObserver handles it, so no replay needed.
  if (!isDesktop) {
    // If switching to mobile without having started mobile observer, start it
    const badge = document.querySelector<HTMLElement>('[data-hero-anim="badge"]');
    if (badge && badge.style.opacity === '0') {
      initHeroAnimationsMobile();
    }
  }
};