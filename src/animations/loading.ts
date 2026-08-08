import { gsap } from 'gsap';

export const initLoadingAnimation = (): void => {
  const loading = document.getElementById('loadingScreen');
  if (!loading) {
    window.dispatchEvent(new CustomEvent('app:loading-done'));
    return;
  }

  // On mobile, always show loading screen briefly (UX necessity)
  // Only skip if reduced motion AND not mobile
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion && !isMobile) {
    window.dispatchEvent(new CustomEvent('app:loading-done'));
    loading.style.visibility = 'hidden';
    loading.style.pointerEvents = 'none';
    if (loading.parentNode) loading.remove();
    return;
  }

  // Mobile or desktop with motion: show loading animation
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
      window.dispatchEvent(new CustomEvent('app:loading-done'));
      // Set flag so hero animations know event already fired
      (window as any).__loadingDoneFired = true;
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