import { profile } from '../data/profile';

export const Hero = (): string => {
  return `
    <section id="hero" class="stage relative min-h-screen flex items-start">
      <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div class="blob" style="top:8%; right:6%; width:24rem; height:24rem; background: radial-gradient(circle at 30% 30%, rgba(137,215,183,.16), rgba(137,215,183,.05) 56%, transparent 76%);"></div>
        <div class="blob slow" style="bottom:8%; left:4%; width:16rem; height:16rem; background: radial-gradient(circle at 30% 30%, rgba(66,132,117,.11), rgba(66,132,117,.03) 58%, transparent 76%);"></div>
        <svg class="absolute top-8 left-[18%] w-[28rem] h-[28rem] opacity-[0.04]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <path d="M148 172C215 85 341 64 430 107c83 40 126 132 118 229-8 96-73 186-168 228-88 39-195 31-278-16-88-49-136-143-126-234 10-89 67-171 172-215Z" fill="var(--accent2)"/>
        </svg>
      </div>

      <div class="mx-auto max-w-7xl px-4 md:px-8 pt-5 pb-16 md:py-24 w-full">
        <div class="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          <div class="lg:col-span-7 xl:col-span-7 reveal pt-6 md:pt-10 lg:pt-14">
            <!-- Desktop Badge -->
            <div class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 border border-border text-xs font-bold tracking-[0.24em] uppercase text-text2 mb-6 shadow-sm">
              ${profile.badge}
            </div>
            <!-- Mobile Badge -->
            <div class="inline-flex md:hidden mb-6 h-[32px] items-center">
              <span class="text-3xl font-bold text-accent font-handwriting typing-animation">HI, I'm</span>
            </div>
            <h1 class="hero-name text-[clamp(3.2rem,8vw,7rem)] font-extrabold text-text">
              Nandito <br class="hidden md:block">Setiyawan
            </h1>
            <p class="mt-6 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-text2 mobile-delay-reveal">
              ${profile.description}
            </p>

            <div class="mt-8 flex flex-wrap gap-3 mobile-delay-reveal">
              <a href="${profile.linkedin}" class="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold transition">
                <span class="material-symbols-outlined text-[20px]">LinkedIn</span> 
              </a>
              <a href="${profile.resumeLink}" class="btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold transition">
                <span class="material-symbols-outlined text-[20px]">Download CV</span> 
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-3 mobile-delay-reveal">
              <a href="${profile.whatsapp}" class="chip-dark px-4 py-2 rounded-full text-sm font-semibold">WhatsApp</a>
              <a href="${profile.instagram}" class="chip-dark px-4 py-2 rounded-full text-sm font-semibold">Instagram</a>
              <a href="${profile.github}" class="chip-dark px-4 py-2 rounded-full text-sm font-semibold">GitHub</a>
            </div>
          </div>

          <div class="lg:col-span-5 xl:col-span-5 reveal pt-6 md:pt-10 lg:pt-14">
            <div class="relative">
              <div class="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(137,215,183,.18),rgba(137,215,183,.05)_42%,transparent_72%)] blur-3xl"></div>
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