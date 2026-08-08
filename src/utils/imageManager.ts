import { getLenis } from '../animations';

/**
 * Image Manager: lazy-loads images via IntersectionObserver.
 * - Images with `data-lazy-src` start with empty `src` (no network request).
 * - When the element enters viewport (200px margin), loads from `data-lazy-src`.
 * - When it exits viewport, unloads `src` (clears) but keeps `data-lazy-src` so
 *   the image can be re-loaded if scrolled back in. Only raster images
 *   (.webp/.jpg/.png) are eligible for unloading; SVGs and tiny inline
 *   data-URI SVGs are left alone to avoid unnecessary re-decoding.
 */
const UNLOADABLE_EXTENSIONS = new Set(['webp', 'jpg', 'jpeg', 'png']);

function getExtensionFromSrc(src: string): string | null {
  if (!src) return null;
  if (src.startsWith('data:')) {
    const mimeMatch = src.match(/data:([^;]+)/);
    return mimeMatch ? mimeMatch[1].split('/')[1] : null;
  }
  try {
    const url = new URL(src, document.baseURI);
    const parts = url.pathname.split('.');
    return parts.length > 1 ? parts.pop()!.toLowerCase() : null;
  } catch {
    const parts = src.split('?')[0].split('.');
    return parts.length > 1 ? parts.pop()!.toLowerCase() : null;
  }
}

function isUnloadable(src: string): boolean {
  const ext = getExtensionFromSrc(src);
  return ext !== null && UNLOADABLE_EXTENSIONS.has(ext);
}

export const initImageManager = (): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const img = entry.target as HTMLImageElement;

        if (entry.isIntersecting) {
          // Load image when entering viewport
          const lazySrc = img.dataset.lazySrc;
          if (lazySrc && !img.src) {
            img.src = lazySrc;
          }
        } else {
          // Unload heavy raster images when leaving viewport
          if (img.src && isUnloadable(img.src)) {
            img.src = '';
          }
        }
      });
    },
    {
      rootMargin: '200px 0px',
      threshold: 0.01,
    }
  );

  // Only observe images that have data-lazy-src (deferred load pattern)
  document.querySelectorAll<HTMLImageElement>('[data-lazy-src]').forEach((img) => {
    // Ensure initial src is empty so the image isn't downloaded until observed
    if (!img.src || img.src === window.location.href) {
      img.src = '';
    }
    observer.observe(img);
  });

  // Refresh observer on Lenis scroll to keep track of dynamic positions
  const lenis = getLenis();
  if (lenis) {
    lenis.on('scroll', () => observer.takeRecords());
  }
};