import '../styles/hero.css';
import { profile } from '../data/profile';

export const Hero = (): string => {
  return `
    <section id="hero" class="stage hero-section">
      <div class="hero-bg-layer">
        <div class="blob hero-blob-1"></div>
        <div class="blob slow hero-blob-2"></div>
        <svg class="hero-svg-bg" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <path d="M148 172C215 85 341 64 430 107c83 40 126 132 118 229-8 96-73 186-168 228-88 39-195 31-278-16-88-49-136-143-126-234 10-89 67-171 172-215Z" fill="var(--accent2)"/>
        </svg>
      </div>

      <div class="hero-container">
        <div class="hero-grid">
          <div class="hero-left reveal">
            <!-- Desktop Badge -->
            <div class="hero-badge">
              ${profile.badge}
            </div>
            <!-- Mobile Badge -->
            <div class="hero-badge-mobile">
              <span class="font-cabinet hero-badge-text typing-animation">HI, I'm</span>
            </div>
            <h1 class="font-cabinet hero-name hero-title">
              Nandito <br class="hidden md:block">Setiyawan
            </h1>
            <p class="hero-desc mobile-delay-reveal">
              ${profile.description}
            </p>

            <div class="hero-actions mobile-delay-reveal">
              <a href="${profile.linkedin}" class="btn-primary hero-btn">
                <span class="material-symbols-outlined text-[20px]">LinkedIn</span> 
              </a>
              <a href="${profile.resumeLink}" class="btn-secondary hero-btn hero-btn-secondary">
                <span class="material-symbols-outlined text-[20px]">Download CV</span> 
              </a>
            </div>

            <div class="hero-socials mobile-delay-reveal">
              <a href="${profile.whatsapp}" class="chip-dark hero-chip">WhatsApp</a>
              <a href="${profile.instagram}" class="chip-dark hero-chip">Instagram</a>
              <a href="${profile.github}" class="chip-dark hero-chip">GitHub</a>
            </div>
          </div>

          <div class="hero-right reveal">
            <div class="relative">
              <div class="hero-photo-blob"></div>
              <div class="photo-stack" id="heroPhotoStack">
                <div class="stack-label">Profile Slideshow</div>
                ${profile.heroImages.map((img, index) => `
                  <div class="stack-card pos-${index}" data-stack-card>
                    <img src="${img}" alt="Portrait ${index + 1}">
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};