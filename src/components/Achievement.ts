import '../styles/achievement.css';
import { achievements } from '../data/achievements';
import { reviews } from '../data/review';

const reloadIcon = new URL('../assets/icons/reload.webp', import.meta.url).href;
const arrowListIcon = new URL('../assets/icons/arrowlist.webp', import.meta.url).href;

const renderStars = (rating: number, reviewIdx: number): string => {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      starsHTML += `
        <svg class="review-star full" viewBox="0 0 24 24" width="18" height="18" fill="#FFD700">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      `;
    } else if (rating > i - 1) {
      const fillPercent = (rating - (i - 1)) * 100;
      const gradId = `starGrad-${reviewIdx}-${i}`;
      starsHTML += `
        <svg class="review-star partial" viewBox="0 0 24 24" width="18" height="18">
          <defs>
            <linearGradient id="${gradId}">
              <stop offset="${fillPercent}%" stop-color="#FFD700"/>
              <stop offset="${fillPercent}%" stop-color="#E8E1D7"/>
            </linearGradient>
          </defs>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#${gradId})"/>
        </svg>
      `;
    } else {
      starsHTML += `
        <svg class="review-star empty" viewBox="0 0 24 24" width="18" height="18" fill="#E8E1D7">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      `;
    }
  }
  return `<div class="review-stars-wrap">${starsHTML}</div>`;
};

const renderReviewCard = (rev: typeof reviews[0], idx: number): string => {
  return `
    <div class="review-card">
      <div class="review-card-header">
        <div>
          <h4 class="review-card-name">${rev.name}</h4>
          <p class="review-card-institution">${rev.institution}</p>
        </div>
        ${renderStars(rev.rating, idx)}
      </div>
      <p class="review-card-comment">"${rev.comment}"</p>
    </div>
  `;
};

export const Achievement = (): string => {
  const renderList = achievements.map((ach, i) => {
    const isHidden = i >= 2 ? 'hidden extra-achieve' : '';
    const badgeText = ach.certificates.length > 1 ? `${ach.certificates.length} FILES` : 'PREVIEW';

    return `
      <article class="accordion elevated achievement-item ${isHidden}" data-accordion>
        <button class="achievement-btn" data-accordion-btn>
          <div class="achievement-logo-wrapper">
            ${ach.image ? `
              <img
                src="${ach.image}"
                alt="${ach.title} logo"
                class="achievement-logo-img"
              >` : ''}
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
                  <img
                  class="cert-img"
                  src="${ach.certificates[0]}"
                  alt="${ach.title}"
                >
                  <button type="button" class="cert-badge" data-preview-btn>${badgeText}</button>
                    <button type="button" class="download-btn hidden md:flex" aria-label="Download" title="Download Sertifikat">
                      <img src="${new URL('../assets/icons/download.webp', import.meta.url).href}" alt="Download" class="download-img" />
                    </button>
                    <button type="button" class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 hidden" aria-label="Previous">
                      <img src="${new URL('../assets/icons/arrowlist.webp', import.meta.url).href}" alt="Previous" class="arrow-left" />
                    </button>
                    <button type="button" class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 hidden" aria-label="Next">
                      <img src="${new URL('../assets/icons/arrowlist.webp', import.meta.url).href}" alt="Next" class="arrow-right" />
                    </button>
                </div>
              </div>

              <!-- Mobile Download Button -->
              <button type="button" class="mobile-download-btn md:hidden w-full flex items-center justify-center gap-2 py-3.5 mt-3 rounded-2xl font-bold transition" aria-label="Download" title="Download Sertifikat" data-download-btn>
                <img src="${new URL('../assets/icons/download.webp', import.meta.url).href}" alt="Download" class="w-5 h-5 object-contain" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Sort reviews newest first (latest is at the bottom of the array, so we reverse it)
  const sortedReviews = [...reviews].reverse();

  // Duplicate the array to ensure seamless infinite looping marquee
  const marqueeRow1HTML = [...sortedReviews, ...sortedReviews]
    .map((rev, idx) => renderReviewCard(rev, idx))
    .join('');

  const marqueeRow2HTML = [...sortedReviews, ...sortedReviews]
    .map((rev, idx) => renderReviewCard(rev, idx + 100))
    .join('');

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
              type="button"
            >
              <img
                id="achievementsToggleIcon"
                src="${reloadIcon}"
                class="reload-icon"
                alt="Reload"
              >
            </button>
          </div>
        ` : ''}
      </div>

      <!-- New client reviews section — 100px under certificate, padded 100px, darker background tone -->
      <div class="review-section-wrap">
        <div class="review-container">
          <div class="review-header reveal">
            <h2 class="font-cabinet review-title">Our Client</h2>
          </div>

          <div class="review-marquee-container">
            <!-- Row 1: moves to the right -->
            <div class="review-marquee-row">
              <div class="review-marquee-track to-right">
                ${marqueeRow1HTML}
              </div>
            </div>

            <!-- Row 2: moves to the left -->
            <div class="review-marquee-row">
              <div class="review-marquee-track to-left">
                ${marqueeRow2HTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
