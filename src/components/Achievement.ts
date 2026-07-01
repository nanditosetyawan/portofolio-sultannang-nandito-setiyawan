import { achievements } from '../data/achievements';
const reloadIcon = new URL('../assets/icons/reload.png', import.meta.url).href;
const arrowListIcon = new URL('../assets/icons/arrowlist.png', import.meta.url).href;

export const Achievement = (): string => {
  const renderList = achievements.map((ach, i) => {
    const isHidden = i >= 2 ? 'hidden extra-achieve' : '';
    const badgeText = ach.certificates.length > 1 ? `${ach.certificates.length} FILES` : 'PREVIEW';

    return `
      <article class="accordion elevated rounded-[1.8rem] p-5 md:p-6 ${isHidden}" data-accordion>
        <button class="w-full flex flex-col md:flex-row md:items-center gap-4 text-left" data-accordion-btn>
          <div class="w-full md:w-40 aspect-[4/3] rounded-[1.2rem] overflow-hidden border border-border bg-[linear-gradient(135deg,rgba(137,215,183,.14),rgba(255,253,248,.96))]">
            ${ach.image ? `<img src="${ach.image}" alt="${ach.title} logo" class="w-full h-full object-cover">` : ''}
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              ${ach.tags.map(t => `<span class="chip px-3 py-1.5 rounded-full text-xs font-semibold">${t}</span>`).join('')}
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-text">${ach.title}</h3>
            ${ach.issuedAt ? `<p class="mt-1 text-xs text-text2 font-medium tracking-wide">Issued at ${ach.issuedAt}</p>` : ''}
            <p class="mt-2 text-sm md:text-base leading-6 text-text2 max-w-2xl">${ach.description}</p>
          </div>
          <div class="w-11 h-11 rounded-full bg-surface2 border border-border flex items-center justify-center shrink-0 ml-auto">
            <img src="${arrowListIcon}" class="chev transition-transform duration-500 w-5 h-5 object-contain" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line pt-5 flex flex-col gap-5">
              <div>
                <div class="text-sm font-bold text-text mb-2">Details</div>
                <p class="text-sm leading-7 text-text2 max-w-3xl">${ach.details}</p>
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
    <section id="achievements" class="stage alt relative py-20 md:py-28 section-wrap">
      <div class="mx-auto max-w-7xl px-4 md:px-8">
        <div class="max-w-2xl reveal">
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-text">Certificates & Milestones</h2>
          <p class="mt-5 text-base md:text-lg leading-7 text-text2">Proof of continuing education outside of typical class structures.</p>
        </div>

        <div class="mt-10 space-y-4">
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
