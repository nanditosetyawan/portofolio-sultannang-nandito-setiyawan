import '../styles/projects.css';
import { projects } from '../data/projects';

/* ── SVG icons (inline — no extra asset imports needed) ── */
const chevLeftSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;
const chevRightSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
const chevDownSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
const searchSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const arrowSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
const closeSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const globeSVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
const githubSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;
const downloadSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
const monitorSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
const playSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
/* Reload icon SVG */
const reloadSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.55"/></svg>`;

/* ── Render cards ── */
const renderCard = (project: typeof projects[0], idx: number): string => {
  return `
    <div class="proj-card" data-proj-idx="${idx}" data-proj-id="${project.id}">
      <!-- Thumbnail -->
      <div class="proj-card-thumb">
        <img
          src="${project.image}"
          alt="${project.title} preview"
          loading="lazy"
          draggable="false"
        >
        <div class="proj-thumb-fade"></div>
        <span class="proj-card-badge">${project.role || 'Individual'} · ${project.year}</span>
      </div>

      <!-- Body -->
      <div class="proj-card-body">
        <h3 class="proj-card-title">${project.title}</h3>

        <!-- Tags -->
        <div class="proj-card-tags">
          ${project.techStack.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>

        <p class="proj-card-desc">${project.description}</p>
      </div>

      <!-- CTA -->
      <div class="proj-card-footer">
        <button class="proj-see-btn" data-proj-open="${project.id}" type="button">
          see ${arrowSVG}
        </button>
      </div>
    </div>
  `;
};

/* ── Render dots ── */
const renderDots = (): string =>
  projects.map((_, i) => `
    <button class="proj-dot${i === 0 ? ' is-active' : ''}" data-proj-dot="${i}" type="button" aria-label="Go to project ${i + 1}"></button>
  `).join('');

/* ── Collect unique filter values ── */
const allTechs = [...new Set(projects.flatMap(p => p.techStack))].slice(0, 8);
const allYears = [...new Set(projects.map(p => String(p.year)))].sort((a, b) => Number(b) - Number(a));
const allRoles = [...new Set(projects.map(p => p.role || 'Individual'))];

const renderFilterOpts = (values: string[], group: string): string =>
  values.map(v => `
    <button class="proj-filter-opt" data-filter-group="${group}" data-filter-val="${v}" type="button">${v}</button>
  `).join('');

/* ── Render modals ── */
const renderModals = (): string => projects.map(p => {
  const websiteLayout = p.isWebsite;
  return `
  <div class="proj-modal-overlay" id="projModal-${p.id}" role="dialog" aria-modal="true" aria-label="${p.title}">
    <div class="proj-modal-window">
      <!-- 8 resize handles -->
      <div class="proj-modal-resize proj-modal-resize-n"  data-dir="n"></div>
      <div class="proj-modal-resize proj-modal-resize-s"  data-dir="s"></div>
      <div class="proj-modal-resize proj-modal-resize-e"  data-dir="e"></div>
      <div class="proj-modal-resize proj-modal-resize-w"  data-dir="w"></div>
      <div class="proj-modal-resize proj-modal-resize-ne" data-dir="ne"></div>
      <div class="proj-modal-resize proj-modal-resize-nw" data-dir="nw"></div>
      <div class="proj-modal-resize proj-modal-resize-se" data-dir="se"></div>
      <div class="proj-modal-resize proj-modal-resize-sw" data-dir="sw"></div>
      <!-- macOS-style titlebar -->
      <div class="proj-modal-titlebar">
        <!-- 3 traffic light dots in left -->
        <div class="proj-modal-dots">
          <span class="proj-modal-dot red"></span>
          <span class="proj-modal-dot yellow"></span>
          <span class="proj-modal-dot green"></span>
        </div>
        
        <!-- Project Title Centered -->
        <div class="proj-modal-title-center">${p.title}</div>
        
        <!-- Actions: Download button (left), then Close button (right) -->
        <div class="proj-modal-actions">
          ${p.githubUrl || true ? `
            <a href="${p.githubUrl || 'https://github.com/nanditosetyawan'}" target="_blank" rel="noopener noreferrer" class="proj-modal-dl-btn" aria-label="Download source (GitHub)">
              ${downloadSVG}
              <span class="proj-tooltip">Download source (GitHub)</span>
            </a>
          ` : ''}
          <button class="proj-modal-close-btn" data-proj-close="${p.id}" type="button" aria-label="Close">
            ${closeSVG}
          </button>
        </div>
      </div>

      <!-- Scrollable content below titlebar -->
      <div class="proj-modal-content-scroll">
        <!-- Address bar ONLY for website projects -->
        ${websiteLayout && p.liveUrl ? `
          <div class="proj-modal-addrbar-wrap">
            <div class="proj-modal-addrbar">
              ${globeSVG}
              <span>${p.liveUrl}</span>
            </div>
          </div>
        ` : websiteLayout ? `
          <div class="proj-modal-addrbar-wrap">
            <div class="proj-modal-addrbar">
              ${globeSVG}
              <span>https://${p.id}.nanditosetyawan.dev</span>
            </div>
          </div>
        ` : ''}

        <!-- Body -->
        <div class="proj-modal-body">
          ${websiteLayout ? `
            <!-- Live preview iframe -->
            <div class="proj-modal-iframe-wrap">
              <iframe src="${p.liveUrl || 'about:blank'}" title="${p.title} live preview" loading="lazy"></iframe>
            </div>
          ` : `
            <!-- Gallery / screenshot preview for non-website -->
            <div class="proj-modal-gallery-body">
              <div class="proj-modal-gallery-main">
                <img src="${p.image}" alt="${p.title} screenshot" id="modalMainImg-${p.id}">
                <div class="proj-modal-play-icon">
                  ${playSVG}
                </div>
              </div>
              
              <!-- Thumbnail strip -->
              <div class="proj-modal-thumb-strip">
                <div class="proj-modal-thumb is-active" onclick="const mainImg = document.getElementById('modalMainImg-${p.id}'); if (mainImg) mainImg.setAttribute('src', '${p.image}'); this.parentElement.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('is-active')); this.classList.add('is-active');">
                  <img src="${p.image}" alt="Thumbnail 1">
                </div>
                <div class="proj-modal-thumb" onclick="const mainImg = document.getElementById('modalMainImg-${p.id}'); if (mainImg) mainImg.setAttribute('src', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'); this.parentElement.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('is-active')); this.classList.add('is-active');">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80" alt="Thumbnail 2">
                </div>
                <div class="proj-modal-thumb" onclick="const mainImg = document.getElementById('modalMainImg-${p.id}'); if (mainImg) mainImg.setAttribute('src', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'); this.parentElement.querySelectorAll('.proj-modal-thumb').forEach(t => t.classList.remove('is-active')); this.classList.add('is-active');">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" alt="Thumbnail 3">
                </div>
              </div>
              
              <div class="proj-modal-local-badge">
                ${monitorSVG}
                <span>Local project — screenshots / demo preview</span>
              </div>
            </div>
          `}

          <!-- Modal info details -->
          <div class="proj-modal-info">
            <h2 class="proj-modal-info-title">${p.title}</h2>
            <p class="proj-modal-info-desc">${p.overview}</p>
            <div class="proj-modal-info-tags">
              ${p.techStack.map(t => `<span class="proj-tag">${t}</span>`).join('')}
              ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}).join('');

/* ════════════════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════════════════ */
export const Projects = (): string => `
  <section id="projects" class="projects-section">
    <div class="projects-inner">

      <!-- Header -->
      <div class="projects-header">
        <span class="projects-eyebrow">Portfolio</span>
        <h2 class="projects-title">Projects</h2>
        <div class="projects-title-accent"></div>
        <p class="projects-subtitle">
          A collection of work spanning spatial analysis,<br>
          web systems, and software development.
        </p>
      </div>

      <!-- Carousel -->
      <div class="projects-carousel-wrap">
        <!-- Edge fades -->
        <div class="proj-fade-left"  aria-hidden="true"></div>
        <div class="proj-fade-right" aria-hidden="true"></div>

        <!-- Prev / Next -->
        <button class="proj-nav-btn proj-nav-prev" id="projNavPrev" type="button" aria-label="Previous project">
          ${chevLeftSVG}
        </button>
        <button class="proj-nav-btn proj-nav-next" id="projNavNext" type="button" aria-label="Next project">
          ${chevRightSVG}
        </button>

        <!-- Cards track: perspective enables 3D rotateY on side cards -->
        <div class="proj-cards-track" id="projCardsTrack" style="perspective: 1400px; perspective-origin: center center;">
          ${projects.map((p, i) => renderCard(p, i)).join('')}
        </div>
      </div>

      <!-- Dots -->
      <div class="proj-dots" id="projDots" role="tablist" aria-label="Projects carousel">
        ${renderDots()}
      </div>

      <!-- Bottom bar: Search + Filter -->
      <div class="projects-bottom-bar">

        <!-- Search -->
        <div class="proj-search-wrap">
          <span class="proj-search-icon" aria-hidden="true">${searchSVG}</span>
          <input
            type="search"
            id="projSearch"
            class="proj-search-input"
            placeholder="Search project title..."
            autocomplete="off"
            aria-label="Search projects"
          >
          <span class="proj-no-results" id="projNoResults" role="status" aria-live="polite">
            No projects found
          </span>
        </div>

        <!-- Filter: compound button [↺ | Filter ∨] -->
        <div class="proj-filter-wrap">
          <div class="proj-filter-ctrl">
            <!-- Reset side -->
            <button class="proj-filter-reset-btn" id="projFilterReset" type="button" aria-label="Reset filters">
              ${reloadSVG}
            </button>
            <!-- Divider -->
            <span class="proj-filter-sep" aria-hidden="true"></span>
            <!-- Filter toggle side -->
            <button class="proj-filter-btn" id="projFilterBtn" type="button" aria-expanded="false" aria-haspopup="listbox">
              <span class="proj-filter-badge" id="projFilterBadge"></span>
              Filter ${chevDownSVG}
            </button>
          </div>

          <div class="proj-filter-panel" id="projFilterPanel" role="listbox">
            <span class="proj-filter-section-label">Language / Stack</span>
            <div class="proj-filter-group-scroll scroll-tech">
              ${renderFilterOpts(allTechs, 'tech')}
            </div>

            <div class="proj-filter-divider"></div>

            <span class="proj-filter-section-label">Year</span>
            <div class="proj-filter-group-scroll scroll-year">
              ${renderFilterOpts(allYears, 'year')}
            </div>

            <div class="proj-filter-divider"></div>

            <span class="proj-filter-section-label">Type</span>
            <div class="proj-filter-group-scroll scroll-role">
              ${renderFilterOpts(allRoles, 'role')}
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Project detail modals (one per project) -->
    ${renderModals()}
  </section>
`;
