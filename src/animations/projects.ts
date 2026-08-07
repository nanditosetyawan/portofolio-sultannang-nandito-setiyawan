import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initProjectsAnimations = (): void => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const projectsHeader = document.querySelector<HTMLElement>('.projects-header');

  if (projectsHeader) {
    const headerChildren = projectsHeader.querySelectorAll<HTMLElement>(
      '.projects-eyebrow, .projects-title, .projects-title-accent, .projects-subtitle'
    );

    if (headerChildren.length > 0) {
      gsap.fromTo(
        headerChildren,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 70%',
            once: true,
          },
        }
      );
    }
  }

  const cardsTrack = document.querySelector<HTMLElement>('.proj-cards-track');

  if (cardsTrack) {
    gsap.fromTo(
      cardsTrack,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-carousel-wrap',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }

  const projDots = document.querySelector<HTMLElement>('.proj-dots');

  if (projDots) {
    gsap.fromTo(
      projDots,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay: 0.3,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.projects-carousel-wrap',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }

  const bottomBar = document.querySelector<HTMLElement>('.projects-bottom-bar');

  if (bottomBar) {
    gsap.fromTo(
      bottomBar,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-bottom-bar',
          start: 'top 90%',
          once: true,
        },
      }
    );
  }
};