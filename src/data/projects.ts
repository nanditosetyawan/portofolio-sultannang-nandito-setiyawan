import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "cashier",
    title: "Web Cashier System",
    description: "CRUD cashier website with PHP, transaction flow & admin UI.",
    overview: "A CRUD-based cashier website simulating a small business workflow — product management, cart behavior, and transaction history with a clean admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    tags: ["CRUD", "Web", "2024"],
    year: 2024,
    role: "Individual",
    isWebsite: true,
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "spatial",
    title: "Spatial Analysis — QGIS",
    description: "GIS-based choropleth mapping and regional data analysis.",
    overview: "Used QGIS tools to process regional datasets and visualize spatial trends through choropleth maps, overlays, and thematic analysis with a final presentation report.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    techStack: ["QGIS", "GIS", "Spatial"],
    tags: ["GIS", "Mapping", "2023"],
    year: 2023,
    role: "Team",
    isWebsite: false,
    liveUrl: "",
    githubUrl: "",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
        caption: "Choropleth map — regional data visualization"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
        caption: "Spatial overlay analysis"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        caption: "Thematic analysis report"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        caption: "Thematic analysis report"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        caption: "Thematic analysis report"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        caption: "Thematic analysis report"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        caption: "Thematic analysis report"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        caption: "Thematic analysis report"
      }
    ]
  },
  {
    id: "survey",
    title: "Satisfaction Survey App",
    description: "Multi-step survey web app with validation & data summary.",
    overview: "A web app focused on form validation and UX during data collection. Includes a multi-step form flow, real-time feedback, and a summary table of aggregated responses.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    techStack: ["PHP", "JavaScript", "Tailwind"],
    tags: ["Form", "UX", "2023"],
    year: 2023,
    role: "Individual",
    isWebsite: true,
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "admin",
    title: "Admin Dashboard Prototype",
    description: "Dashboard prototype for admin-style workflows & monitoring.",
    overview: "A dashboard prototype built to explore admin-style data monitoring, featuring data tables, chart placeholders, and responsive layout with a dark sidebar navigation.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
    techStack: ["TypeScript", "Chart.js", "CSS"],
    tags: ["Dashboard", "UI", "2024"],
    year: 2024,
    role: "Individual",
    isWebsite: false,
    liveUrl: "",
    githubUrl: "",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
        caption: "Dashboard overview — data monitoring interface"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        caption: "Analytics charts and data tables"
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        caption: "Responsive layout — dark sidebar navigation"
      }
    ]
  },
  {
    id: "hospital",
    title: "Hospital Management System",
    description: "Patient & appointment management system for academic study.",
    overview: "An academic simulation of a hospital information system covering patient registration, appointment scheduling, doctor management, and basic report generation.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    techStack: ["Laravel", "PHP", "MySQL"],
    tags: ["Laravel", "Web", "2024"],
    year: 2024,
    role: "Team",
    isWebsite: true,
    liveUrl: "",
    githubUrl: ""
  }
];