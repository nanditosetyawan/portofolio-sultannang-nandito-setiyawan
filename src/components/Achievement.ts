import '../styles/achievement.css';
import { achievements } from '../data/achievements';
const reloadIcon = new URL('../assets/icons/reload.png', import.meta.url).href;
const arrowListIcon = new URL('../assets/icons/arrowlist.png', import.meta.url).href;

export const Achievement = (): string => {
  const renderList = achievements.map((ach, i) => {
    const isHidden = i >= 2 ? 'hidden extra-achieve' : '';
    const badgeText = ach.certificates.length > 1 ? `${ach.certificates.length} FILES` : 'PREVIEW';

    return `
      <article class="accordion elevated achievement-item ${isHidden}" data-accordion>
        <button class="achievement-btn" data-accordion-btn>
          <div class="achievement-logo-wrapper">
            ${ach.image ? `<img src="${ach.image}" alt="${ach.title} logo" class="achievement-logo-img">` : ''}
          </div>
          <div class="achievement-meta">
            <div class="achievement-tags">
              ${ach.tags.map(t => `<span class="chip achievement-tag">${t}</span>`).join('')}
            </div>
            <h3 class="achievement-name">${ach.title}</h3>
            ${ach.issuedAt ? `<p class="achievement-date">Issued at ${ach.issuedAt}</p>` : ''}
            <p class="achievement-desc">${ach.description}</p>
          </div>
          <div class="achievement-toggle">
            <img src="${arrowListIcon}" class="chev achievement-chev" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line achievement-body-inner">
              <div>
                <div class="achievement-details-title">Details</div>
                <p class="achievement-details-text">${ach.details}</p>
              </div>

              <div class="certificate-preview relative rounded-[1.4rem] overflow-hidden border border-border bg-surface shadow-soft2 min-h-[420px]">
                <div class="certificate-stage" data-cert-images='${JSON.stringify(ach.certificates)}' data-cert-title="${ach.title}">
                  <img class="cert-img" src="${ach.certificates[0]}" alt="${ach.title}">
                  <button type="button" class="cert-badge" data-preview-btn>${badgeText}</button>
                    <button type="button" class="download-btn hidden md:flex" aria-label="Download" title="Download Sertifikat">
                      <img src="${new URL('../assets/icons/download.png', import.meta.url).href}" alt="Download" class="download-img" />
                    </button>
                    <button type="button" class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 hidden" aria-label="Previous">
                      <img src="${new URL('../assets/icons/arrowlist.png', import.meta.url).href}" alt="Previous" class="arrow-left" />
                    </button>
                    <button type="button" class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 hidden" aria-label="Next">
                      <img src="${new URL('../assets/icons/arrowlist.png', import.meta.url).href}" alt="Next" class="arrow-right" />
                    </button>
                </div>
              </div>

              <!-- Mobile Download Button -->
              <button type="button" class="mobile-download-btn md:hidden w-full flex items-center justify-center gap-2 py-3.5 mt-3 rounded-2xl font-bold transition" aria-label="Download" title="Download Sertifikat" data-download-btn>
                <img src="${new URL('../assets/icons/download.png', import.meta.url).href}" alt="Download" class="w-5 h-5 object-contain" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section id="achievements" class="stage alt relative section-wrap achievement-section">
      <div class="achievement-container">
        <div class="achievement-header reveal">
          <h2 class="font-cabinet achievement-title">Certificates & Milestones</h2>
          <p class="achievement-subtitle">Proof of continuing education outside of typical class structures.</p>
        </div>

        <div class="achievement-list space-y-4">
          ${renderList}
        </div>

    ${achievements.length > 2 ? `
<div class="section-arrow-wrapper reveal">

<button
    id="achievementsToggle"
    class="section-arrow"
    data-tooltip="Load more achievements"
    type="button">

        <img
            id="achievementsToggleIcon"
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
