import '../styles/projects.css';
import { projects } from '../data/projects';
const reloadIcon = new URL('../assets/icons/reload.png', import.meta.url).href;
const backLoadIcon = new URL('../assets/icons/back_load.png', import.meta.url).href;
const arrowListIcon = new URL('../assets/icons/arrowlist.png', import.meta.url).href;

export const Projects = (): string => {
  const renderList = projects.map((project, i) => {
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

  return `
    <section id="projects" class="stage section-wrap projects-section">
      <div class="projects-container">
        <div class="reveal">
          <h2 class="font-cabinet projects-title">Things I've built.</h2>
        </div>

        <div class="space-y-4" id="projectContainer">
          ${renderList}
        </div>

${projects.length > 3 ? `
<div class="section-arrow-wrapper reveal">

    <button
    id="projectsToggle"
    class="section-arrow"
    data-tooltip="Load more projects"
    type="button">

        <img
            id="projectsToggleIcon"
            src="${reloadIcon}"
            class="reload-icon"
            alt="Reload">

    </button>

</div>
` : ''}
   
      </div>
    </section>
  `;
};
