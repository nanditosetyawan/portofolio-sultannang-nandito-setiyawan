

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  techStack: string[];
  tags: string[];
  year: number;
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