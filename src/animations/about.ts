import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = (): void => {
  /* ── Part 1: Curved title + Photo ────────────────────────── */
  const curvedWrap = document.querySelector<HTMLElement>('.about-curved-wrap');

  if (curvedWrap) {
    gsap.fromTo(
      curvedWrap,
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
          once: true,
        },
      }
    );
  }

  const photoFrame = document.querySelector<HTMLElement>('.about-photo-frame');

  if (photoFrame) {
    gsap.fromTo(
      photoFrame,
      { opacity: 0, scale: 0.6, rotation: -5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
          once: true,
        },
      }
    );
  }

  /* ── Part 2: Skills section ──────────────────────────────── */
  const skillsSection = document.querySelector<HTMLElement>('.about-skills-section');

  if (skillsSection) {
    gsap.fromTo(
      skillsSection,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '#aboutSkillsSection',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }

  const skillCircles = document.querySelectorAll<HTMLElement>('.about-skill-circle');

  if (skillCircles.length > 0) {
    gsap.fromTo(
      skillCircles,
      { opacity: 0, scale: 0.6, y: 15 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '#aboutSkillsSection',
          start: 'top 70%',
          once: true,
        },
      }
    );
  }

  /* ── Part 3: Education heading ───────────────────────────── */
  const eduHeading = document.querySelector<HTMLElement>('.about-edu-heading');

  if (eduHeading) {
    gsap.fromTo(
      eduHeading,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#aboutEduSection',
          start: 'top 70%',
          once: true,
        },
      }
    );
  }

  /* ── Part 4: What I've done ──────────────────────────────── */
  const widTitle = document.querySelector<HTMLElement>('.about-wid-title');

  if (widTitle) {
    gsap.fromTo(
      widTitle,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-wid-section',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  const widDesc = document.querySelector<HTMLElement>('.about-wid-desc');

  if (widDesc) {
    gsap.fromTo(
      widDesc,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-wid-section',
          start: 'top 70%',
          once: true,
        },
      }
    );
  }

  const widStats = document.querySelector<HTMLElement>('.about-wid-stats');

  if (widStats) {
    const counters = widStats.querySelectorAll<HTMLElement>('.about-wid-num[data-counter]');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const proxy = { val: 0 };

      gsap.to(proxy, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        snap: { val: 1 },
        onUpdate: () => {
          counter.textContent = `${Math.round(proxy.val)}${suffix}`;
        },
        scrollTrigger: {
          trigger: '.about-wid-stats',
          start: 'top 80%',
          once: true,
        },
      });
    });

    const widLabels = widStats.querySelectorAll<HTMLElement>('.about-wid-label');

    if (widLabels.length > 0) {
      gsap.fromTo(
        widLabels,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          delay: 1.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.about-wid-stats',
            start: 'top 80%',
            once: true,
          },
        }
      );
    }
  }

  const widCta = document.querySelector<HTMLElement>('.about-wid-cta');

  if (widCta) {
    gsap.fromTo(
      widCta,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-wid-section',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }

  /* ── Part 5: Working Principles ──────────────────────────── */
  const wprCard = document.querySelector<HTMLElement>('.about-wpr-card');

  if (wprCard) {
    gsap.fromTo(
      wprCard,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-wpr-section',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  const wprItems = document.querySelectorAll<HTMLElement>('.about-wpr-item');

  if (wprItems.length > 0) {
    gsap.fromTo(
      wprItems,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-wpr-list',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }
};