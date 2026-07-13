import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "cashier",
    title: "Web Cashier System",
    description: "A CRUD-based cashier website for learning transaction flow, admin UI, and database integration.",
    overview: "This project was created to simulate a small business cashier workflow with product management, cart behavior, and transaction history.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    techStack: ["PHP", "MySQL", "HTML"],
    tags: ["CRUD", "UI Design", "Database"],
    year: 2024,
    role: "Individu"
  },
  {
    id: "survey",
    title: "Satisfaction Survey App",
    description: "A web app to collect feedback with a clean multi-step form and data summary table.",
    overview: "Focused on form validation and user experience during data collection.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    techStack: ["Tailwind", "JavaScript", "PHP"],
    tags: ["Form", "UX", "Data"],
    year: 2023,
    role: "Individu"
  },
  {
    id: "spatial",
    title: "Spatial Analysis Project",
    description: "A map-based analysis project for class, showing data processing, spatial thinking, and presentation.",
    overview: "Used GIS tools to process data and visualize regional trends.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    techStack: ["QGIS", "GIS", "Analysis"],
    tags: ["Mapping", "Data processing"],
    year: 2023,
    role: "Team"
  },
  // Project ke-4 (akan disembunyikan awalnya oleh "Load More")
  {
    id: "admin",
    title: "Admin Dashboard Prototype",
    description: "A dashboard prototype for admin-style workflows and data monitoring.",
    overview: "Added later with the same expand pattern.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
    techStack: ["TypeScript", "API", "Dashboard"],
    tags: ["Prototype", "UI"],
    year: 2024,
    role: "Individu"
  }
];