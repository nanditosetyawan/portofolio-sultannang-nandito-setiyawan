/* ============================================================
   ANIMATION CORE
   index.ts — GSAP + ScrollTrigger + Lenis smooth scroll
   ============================================================ */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { initLoadingAnimation } from './loading';
import { initHeroAnimations } from './hero';
import { initNavbarAnimations } from './navbar';
import { initAboutAnimations } from './about';
import { initProjectsAnimations } from './projects';
import { initAchievementAnimations } from './achievements';
import { initContactAnimations } from './contact';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export const getLenis = (): Lenis | null => lenis;

/* ── Theme change: refresh ScrollTrigger positions after fonts/layout settle ── */
const refreshScrollTriggers = () => {
  // Wait for dark/light transition to finish then recalc
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
};

/* ── Scroll helper used by nav links ─────────────────────────── */
export const smoothScrollTo = (targetId: string) => {
  if (lenis) {
    // Lenis scrollTo dengan string memakai querySelector → wajib prefix "#"
    lenis.scrollTo(`#${targetId}`, { offset: 0, duration: 1.1 });
  } else {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

export const initAnimations = (): void => {
  /* ── Lenis smooth scroll ───────────────────────────────────── */
  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /* ── Init section animations (order matters: loading last so it overlays) ── */
  initNavbarAnimations();
  initHeroAnimations();
  initAboutAnimations();
  initProjectsAnimations();
  initAchievementAnimations();
  initContactAnimations();
  initLoadingAnimation();

  /* ── Recalculate triggers on resize / fonts loaded / theme change ── */
  window.addEventListener('resize', refreshScrollTriggers);
  document.fonts?.ready.then(() => requestAnimationFrame(() => ScrollTrigger.refresh()));

  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const onThemeChange = () => requestAnimationFrame(() => refreshScrollTriggers());
  themeToggle?.addEventListener('click', onThemeChange);
  mobileThemeToggle?.addEventListener('click', onThemeChange);
};
