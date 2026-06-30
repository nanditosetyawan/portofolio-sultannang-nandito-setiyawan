import type { Achievement } from '../types';

const generateMockSVG = (title: string, subtitle: string, number: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFDF8"/><stop offset="100%" stop-color="#FCF8F1"/></linearGradient></defs><rect width="1600" height="1100" fill="url(#g)"/><rect x="60" y="60" width="1480" height="980" fill="none" stroke="#E8E1D7" stroke-width="4"/><text x="800" y="450" font-family="sans-serif" font-size="110" font-weight="800" fill="#1A312C" text-anchor="middle" letter-spacing="-2">${title}</text><text x="800" y="560" font-family="sans-serif" font-size="52" font-weight="600" fill="#428475" text-anchor="middle" letter-spacing="4">${subtitle}</text><text x="800" y="700" font-family="sans-serif" font-size="40" font-weight="500" fill="#53645F" text-anchor="middle" letter-spacing="8">${number}</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

export const achievements: Achievement[] = [
  {
    id: "azure",
    title: "Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02 Bahasa Indonesia)",
    description: "A certificate that reflects growing familiarity with cloud concepts, service models, and basic deployment thinking.",
    details: "The certification shows initiative in learning cloud fundamentals and complements web development work with broader technical awareness.",
    year: 2025,
    tags: ["Certificate", "2025"],
    certificates: [
      new URL('../assets/achievement/Official Practice Question Set.jpg', import.meta.url).href
    ],
    image: new URL('../assets/achievement/AWS.JPEG', import.meta.url).href,
    issuedAt: "12 Mei 2026",
  },
  {
    id: "workshop",
    title: "Frontend Workshop Participation",
    description: "Completed an intensive frontend engineering workshop.",
    details: "The details can be updated later with actual documentation or a certificate image.",
    year: 2024,
    tags: ["Workshop", "2024"],
    certificates: [
      generateMockSVG('WORKSHOP', 'Frontend Practice', 'Participation')
    ]
  },
  {
    id: "presentation",
    title: "Public Speaking Session",
    description: "A public speaking and project presentation seminar.",
    details: "Focusing on communication and clarity.",
    year: 2023,
    tags: ["Seminar", "2023"],
    certificates: [
      generateMockSVG('CAMPUS', 'Project Presentation', 'Recognition')
    ]
  }
];