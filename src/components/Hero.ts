import '../styles/hero.css';
import { profile } from '../data/profile';

export const Hero = (): string => {
  return `
    <section id="hero" class="stage hero-section">
    <div class="hero-bg-fixed">
    <div class="hero-gradient-overlay"></div>
</div>

      <div class="hero-container">
        <div class="hero-grid">
          <div class="hero-left reveal">
            <!-- Unified Badge -->
            <div class="hero-badge-container">
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

      <!-- Single Wave separator -->
      <svg class="hero-wave" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0,70
         C180,15 360,15 540,70
         C720,120 900,120 1080,70
         C1260,20 1350,20 1440,55
         L1440,120
         L0,120
         Z"
      fill="var(--surface2)" />
      </svg>
    </section>
  `;
};