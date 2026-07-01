import { projects } from '../data/projects';
const reloadIcon = new URL('../assets/icons/reload.png', import.meta.url).href;
const backLoadIcon = new URL('../assets/icons/back_load.png', import.meta.url).href;
const arrowListIcon = new URL('../assets/icons/arrowlist.png', import.meta.url).href;

export const Projects = (): string => {
  const renderList = projects.map((project, i) => {
    const isHidden = i >= 3 ? 'hidden extra-project' : '';
    return `
      <article class="accordion elevated rounded-[1.8rem] p-8 md:p-7 ${isHidden}" data-accordion>
        <button class="w-full flex flex-col md:flex-row md:items-center gap-4 text-left" data-accordion-btn>
          <div class="w-full md:w-56 aspect-[16/10] rounded-[1.4rem] overflow-hidden border border-border shrink-0 bg-[linear-gradient(135deg,rgba(66,132,117,.12),rgba(137,215,183,.08))]">
            <img src="${project.image}" alt="${project.title}" loading="lazy" class="w-full h-full object-cover opacity-90">
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              ${project.techStack.map(tech => `<span class="chip px-3 py-1.5 rounded-full text-xs font-semibold">${tech}</span>`).join('')}
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-text">${project.title}</h3>
            <p class="mt-2 text-sm md:text-base leading-6 text-text2 max-w-2xl">${project.description}</p>
          </div>
          <div class="w-11 h-11 rounded-full bg-surface2 border border-border flex items-center justify-center shrink-0 ml-auto">
            <img src="${arrowListIcon}" class="chev transition-transform duration-500 w-5 h-5 object-contain" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line pt-5 grid lg:grid-cols-12 gap-5">
              <div class="lg:col-span-7">
                <div class="text-sm font-bold text-text mb-2">Overview</div>
                <p class="text-sm leading-7 text-text2">${project.overview}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  ${project.tags.map(tag => `<span class="chip-dark px-3 py-1.5 rounded-full text-xs font-semibold">${tag}</span>`).join('')}
                </div>
              </div>
              <div class="lg:col-span-5">
                <div class="rounded-[1.4rem] overflow-hidden border border-border bg-surface shadow-soft2">
                  <img src="${project.image}" alt="Preview" class="w-full aspect-[16/10] object-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section id="projects" class="stage relative py-20 md:py-28 section-wrap">
      <div class="mx-auto max-w-7xl px-4 md:px-8">
        <div class="reveal">
          <h2 class="font-cabinet text-3xl md:text-5xl font-extrabold tracking-tight text-text mb-10">Things I've built.</h2>
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
