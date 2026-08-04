import type { Project, ProjectMedia, MediaType } from '../types';

// ── URL validation ────────────────────────────────────────────────────────────

/**
 * Returns true only when a URL string is non-empty and starts with "http".
 * Used to decide whether a live iframe preview is available.
 */
export const hasValidLiveUrl = (url?: string): boolean =>
  typeof url === 'string' && url.startsWith('http');

// ── Preview mode decision ─────────────────────────────────────────────────────

/**
 * Determines if a project should open the Website Preview Window (iframe).
 * Requirements: isWebsite flag must be true AND a valid liveUrl must exist.
 * Any other combination opens the Local Preview Window.
 */
export const shouldUseWebsitePreview = (project: Project): boolean =>
  project.isWebsite === true && hasValidLiveUrl(project.liveUrl);

// ── Media helpers ─────────────────────────────────────────────────────────────

/** Returns true for media types that are image-like (renderable as <img>). */
export const isImageMedia = (type: MediaType): boolean =>
  ['image', 'gif', 'webp', 'jpeg', 'png', 'jpg'].includes(type);

/** Returns true for video media types. */
export const isVideoMedia = (type: MediaType): boolean =>
  ['video', 'mp4', 'webm'].includes(type);

/** Returns true for PDF media types. */
export const isPdfMedia = (type: MediaType): boolean =>
  type === 'pdf';

/**
 * Infers a MediaType from a file extension in the src URL.
 * Falls back to 'image' for unknown extensions.
 */
export const inferMediaType = (src: string): MediaType => {
  const ext = src.split('?')[0].split('.').pop()?.toLowerCase() ?? '';
  const map: Record<string, MediaType> = {
    mp4: 'mp4', webm: 'webm', gif: 'gif',
    pdf: 'pdf',
    webp: 'webp', jpg: 'jpg', jpeg: 'jpeg', png: 'png',
  };
  return map[ext] ?? 'image';
};

// ── Caption builder ───────────────────────────────────────────────────────────

/**
 * Returns a human-readable caption for a local project's preview body,
 * based on its techStack and tags.
 */
export const getProjectCaption = (project: Project): string => {
  const stack = project.techStack.map(t => t.toLowerCase());
  const tags  = project.tags.map(t => t.toLowerCase());

  if (stack.some(t => ['qgis', 'gis', 'spatial', 'arcgis'].includes(t))) {
    return 'GIS Project • Spatial Analysis';
  }
  if (stack.some(t => ['packet tracer', 'cisco', 'network'].includes(t)) ||
      tags.some(t => ['network', 'packet tracer'].includes(t))) {
    return 'Network Simulation • Packet Tracer';
  }
  if (stack.some(t => ['android', 'kotlin', 'android studio'].includes(t))) {
    return 'Android Application • Mobile Preview';
  }
  if (stack.some(t => ['figma', 'ui', 'ux', 'design'].includes(t))) {
    return 'UI/UX Design • Figma Prototype';
  }
  if (stack.some(t => ['c++', 'c', 'java'].includes(t))) {
    return 'Desktop Application Preview';
  }
  if (tags.some(t => ['pdf', 'documentation', 'docs', 'report'].includes(t))) {
    return 'Project Documentation Preview';
  }
  return `Local Project • Screenshots / Demo Preview`;
};

// ── Normalised media list ─────────────────────────────────────────────────────

/**
 * Returns a normalised media array for a project.
 * - If the project has a non-empty `media` array, returns it as-is.
 * - Otherwise falls back to a single image item using `project.image`.
 * This guarantees the Local Preview always has at least one item to show.
 */
export const getProjectMedia = (project: Project): ProjectMedia[] => {
  if (project.media && project.media.length > 0) {
    return project.media;
  }
  // Graceful fallback: use the card thumbnail
  return [{ type: 'image', src: project.image }];
};
