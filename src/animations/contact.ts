import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initContactAnimations = (): void => {
  const contactLeft = document.querySelector<HTMLElement>('.contact-left');

  if (contactLeft) {
    const leftChildren = contactLeft.querySelectorAll<HTMLElement>(
      '.contact-title, .contact-subtitle, .contact-info-card'
    );

    if (leftChildren.length > 0) {
      gsap.fromTo(
        leftChildren,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            once: true,
          },
        }
      );
    }
  }

  const formWrapper = document.querySelector<HTMLElement>('.contact-form-wrapper');

  if (formWrapper) {
    gsap.fromTo(
      formWrapper,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 65%',
          once: true,
        },
      }
    );
  }

  const formFields = document.querySelector<HTMLElement>('.contact-form-fields');

  if (formFields) {
    const formChildren = formFields.querySelectorAll<HTMLElement>(
      '.contact-input, .contact-textarea, .contact-send-btn'
    );

    if (formChildren.length > 0) {
      gsap.fromTo(
        formChildren,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form-fields',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }
  }

  const siteFooter = document.querySelector<HTMLElement>('.site-footer');

  if (siteFooter) {
    gsap.fromTo(
      siteFooter,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 95%',
          once: true,
        },
      }
    );
  }
};