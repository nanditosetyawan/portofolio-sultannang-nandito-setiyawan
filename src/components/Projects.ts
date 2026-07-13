import '../styles/projects.css';
import { projects } from '../data/projects';
const reloadIcon = new URL('../assets/icons/reload.png', import.meta.url).href;
const backLoadIcon = new URL('../assets/icons/back_load.png', import.meta.url).href;
const arrowListIcon = new URL('../assets/icons/arrowlist.png', import.meta.url).href;

export const Projects = (): string => {
  // NEW LAYOUT
  const renderList = projects.map((project, i) => {
    const isHidden = i >= 3 ? 'hidden extra-project' : '';
    return `
      <article class="projects-item-card ${isHidden}">
        <!-- Header Block (Nomor + Meta + Judul + Tech + Action) -->
        <div class="project-card-header">
          <!-- Nomor Kiri -->
          <div class="project-card-number font-cabinet">${String(i + 1).padStart(2, '0')}</div>
          
          <!-- Konten Tengah Kanan -->
          <div class="project-card-header-content">
            <!-- Row 1: Bubbles (Role & Year) -->
            <div class="project-card-meta-bubbles">
              <span class="project-meta-bubble bubble-role">${project.role || 'Individu'}</span>
              <span class="project-meta-bubble bubble-year">${project.year}</span>
            </div>
            
            <!-- Row 2: Judul -->
            <h3 class="project-card-title">${project.title}</h3>
            
            <!-- Row 3: Programming Languages/Tools Bubbles -->
            <div class="project-card-tech-bubbles">
              ${project.techStack.map(tech => `<span class="project-tech-bubble">${tech}</span>`).join('')}
            </div>
          </div>
          
          <!-- Action: see button -->
          <div class="project-card-action">
            <a href="#" target="_blank" class="project-see-button">
              see <svg class="project-see-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
        
        <!-- Image Showcase Grid Block -->
        <div class="project-card-image-grid">
          <!-- Top Row: Left (Narrower) & Right (Wider) -->
          <div class="project-image-row-top">
            <div class="project-image-box image-box-left">
              <img src="${project.image}" alt="${project.title} screenshot 1" loading="lazy" class="project-grid-img img-pos-left">
            </div>
            <div class="project-image-box image-box-right">
              <img src="${project.image}" alt="${project.title} screenshot 2" loading="lazy" class="project-grid-img img-pos-right">
            </div>
          </div>
          <!-- Bottom Row: Full Width -->
          <div class="project-image-row-bottom">
            <div class="project-image-box image-box-bottom">
              <img src="${project.image}" alt="${project.title} screenshot 3" loading="lazy" class="project-grid-img img-pos-bottom">
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  /* 
  // ORIGINAL LAYOUT (COMMENTED OUT AS REQUESTED)
  const renderListOld = projects.map((project, i) => {
    const isHidden = i >= 3 ? 'hidden extra-project' : '';
    return `
      <article class="accordion elevated project-item ${isHidden}" data-accordion>
        <button class="project-btn" data-accordion-btn>
          <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" loading="lazy" class="project-image">
          </div>
          <div class="project-meta">
            <div class="project-tags">
              ${project.techStack.map(tech => `<span class="chip project-tag">${tech}</span>`).join('')}
            </div>
            <h3 class="project-name">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
          </div>
          <div class="project-toggle">
            <img src="${arrowListIcon}" class="chev project-chev" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line project-body-grid">
              <div class="project-overview-col">
                <div class="project-overview-title">Overview</div>
                <p class="project-overview-text">${project.overview}</p>
                <div class="project-tag-row">
                  ${project.tags.map(tag => `<span class="chip-dark project-tag">${tag}</span>`).join('')}
                </div>
              </div>
              <div class="project-preview-col">
                <div class="project-preview-wrapper">
                  <img src="${project.image}" alt="Preview" class="project-preview-img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
  */

  return `
    <section id="projects" class="projects-section">
      <div class="projects-card">
        
        <!-- Curved Title -->
        <div class="projects-curved-wrap">
          <svg class="projects-curved-svg"
               viewBox="0 0 500 90"
               xmlns="http://www.w3.org/2000/svg"
               aria-label="My Project"
               role="img">
            <defs>
              <path id="projectsCurve" d="M 20,78 Q 250,15 480,78" />
            </defs>
            <text class="projects-curved-text">
              <textPath href="#projectsCurve" startOffset="50%" text-anchor="middle">
                My Project
              </textPath>
            </text>
          </svg>
        </div>

        <div class="projects-list-container" id="projectContainer">
          ${renderList}
        </div>

        ${projects.length > 3 ? `
        <div class="projects-toggle-wrapper">
          <button id="projectsToggle" class="projects-toggle-btn" type="button">
            <img id="projectsToggleIcon" src="${reloadIcon}" class="reload-icon" alt="Reload">
          </button>
        </div>
        ` : ''}
   
      </div>
    </section>
  `;

  /*
  // ORIGINAL RETURN (COMMENTED OUT AS REQUESTED)
  return `
    <section id="projects" class="stage section-wrap projects-section">
      <div class="projects-container">
        <div class="reveal">
          <h2 class="font-cabinet projects-title">Things I've built.</h2>
        </div>

        <div class="space-y-4" id="projectContainer">
          \${renderListOld}
        </div>

        \${projects.length > 3 ? \`
        <div class="section-arrow-wrapper reveal">
            <button
            id="projectsToggle"
            class="section-arrow"
            data-tooltip="Load more projects"
            type="button">
                <img
                    id="projectsToggleIcon"
                    src="\${reloadIcon}"
                    class="reload-icon"
                    alt="Reload">
            </button>
        </div>
        \` : ''}
      </div>
    </section>
  `;
  */
};
