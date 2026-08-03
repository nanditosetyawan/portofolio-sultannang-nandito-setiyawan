

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
  liveUrl?: string;     // hosted URL for iframe
  githubUrl?: string;   // GitHub / download link
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