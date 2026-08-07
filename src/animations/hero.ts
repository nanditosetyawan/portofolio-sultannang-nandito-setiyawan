import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = (): void => {
  const badgeText = document.querySelector<HTMLElement>('.hero-badge-text');
  const heroName = document.querySelector<HTMLElement>('.hero-name');
  const heroDesc = document.querySelector<HTMLElement>('.hero-desc');
  const heroActions = document.querySelector<HTMLElement>('.hero-actions');
  const heroSocials = document.querySelector<HTMLElement>('.hero-socials');
  const heroRight = document.querySelector<HTMLElement>('.hero-right');
  const heroContainer = document.querySelector<HTMLElement>('.hero-container');
  const heroSection = document.getElementById('hero');

  // Elements that are animated as whole (not their children)
  const mainTargets = [badgeText, heroName, heroDesc, heroActions, heroRight].filter(Boolean) as HTMLElement[];
  
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
    tl.fromTo(socialIconsArr, { opacity: 0, scale: 0.6, x: -20 }, { opacity: 1, scale: 1, x: 0, duration: 0.45, ease: 'power3.out', stagger: 0.06 }, '+=0.1');
  }

  // 6. Right photo — from BOTTOM (subtle)
  if (heroRight) {
    heroRight.style.visibility = 'visible';
    heroRight.style.pointerEvents = 'auto';
    tl.fromTo(heroRight, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '+=0.15');
  }

  // Handle typing animation completion (CSS-based)
  if (badgeText && badgeText.classList.contains('typing-animation')) {
    const onTypingEnd = () => {
      badgeText.classList.remove('typing-animation');
      badgeText.style.opacity = '1';
      badgeText.style.visibility = 'visible';
      badgeText.removeEventListener('animationend', onTypingEnd);
    };
    badgeText.addEventListener('animationend', onTypingEnd);
  }

  // Hero container parallax on scroll (unchanged)
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
  const playTimeline = () => tl.play();
  if (document.getElementById('loadingScreen')) {
    window.addEventListener('app:loading-done', playTimeline, { once: true });
    // Safety fallback: if event never fires, play after 3s
    setTimeout(() => { if (tl.progress() === 0) tl.play(); }, 3000);
  } else {
    playTimeline();
  }
};