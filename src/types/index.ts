
export type MediaType =
  | 'image'
  | 'video'
  | 'pdf'
  | 'gif'
  | 'webp'
  | 'jpeg'
  | 'png'
  | 'jpg'
  | 'mp4'
  | 'webm';

export interface ProjectMedia {
  /** Media type — determines how it is rendered in the preview */
  type: MediaType;
  /** URL or path to the media file */
  src: string;
  /** Optional caption shown when this media is the active preview */
  caption?: string;
  /** Optional thumbnail URL to show in the gallery strip */
  thumbnail?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  techStack: string[];
  tags: string[];
  year: number;
  role?: string;        // e.g. "Individual" atau "Team"
  isWebsite?: boolean;  // true = open live preview iframe, false = gallery modal
  liveUrl?: string;     // hosted URL for iframe (must start with "http")
  githubUrl?: string;   // GitHub / download link
  /** Media items for local projects — unlimited, rendered automatically */
  media?: ProjectMedia[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  details: string;
  year: number;
  tags: string[];
  issuedAt?: string; // e.g. "19 Mei 2026"
  certificates: string[]; // Array of image paths atau URL/SVG
  image?: string; // optional thumbnail for card
}