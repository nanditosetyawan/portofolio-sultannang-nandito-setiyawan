import { gsap } from 'gsap';

export const initLoadingAnimation = (): void => {
  const loading = document.getElementById('loadingScreen');
  if (!loading) return;

  const fillBar = loading.querySelector<HTMLElement>('.loading-screen__fill');
  const title = loading.querySelector<HTMLElement>('.loading-screen__title');

  if (fillBar) {
    fillBar.style.animation = '';
    gsap.to(fillBar, { width: '100%', duration: 1.5, ease: 'power1.out' });
  }

  const tl = gsap.timeline();

  if (title) {
    tl.fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }

  tl.add(
    () => {
      if (fillBar) gsap.set(fillBar, { width: '100%' });
      // Dispatch event so hero timeline can start
      window.dispatchEvent(new CustomEvent('app:loading-done'));
      gsap.to(loading, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => {
          loading.style.visibility = 'hidden';
          loading.style.pointerEvents = 'none';
          if (loading.parentNode) loading.remove();
        },
      });
    },
    '+=1.6'
  );
};