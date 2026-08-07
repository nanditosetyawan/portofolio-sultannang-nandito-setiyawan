import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initNavbarAnimations = (): void => {
  // No-op: navbar behavior (pill, hide/show, shrink) is handled by dom.ts.
  // Scroll progress bar removed intentionally.
};