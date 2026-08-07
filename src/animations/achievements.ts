import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAchievementAnimations = (): void => {
  const achievementHeader = document.querySelector<HTMLElement>('.achievement-header');

  if (achievementHeader) {
    gsap.fromTo(
      achievementHeader,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#achievements',
          start: 'top 70%',
          once: true,
        },
      }
    );
  }

  const achievementItems = document.querySelectorAll<HTMLElement>('.achievement-item');

  if (achievementItems.length > 0) {
    gsap.fromTo(
      achievementItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievement-list',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  const arrowWrapper = document.querySelector<HTMLElement>('.section-arrow-wrapper');

  if (arrowWrapper) {
    gsap.fromTo(
      arrowWrapper,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-arrow-wrapper',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  const reviewHeader = document.querySelector<HTMLElement>('.review-header');

  if (reviewHeader) {
    gsap.fromTo(
      reviewHeader,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.review-section-wrap',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }
};