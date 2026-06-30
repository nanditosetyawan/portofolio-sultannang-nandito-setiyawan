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

      <div class="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 w-full">
        <div class="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          <div class="lg:col-span-7 xl:col-span-7 reveal pt-6 md:pt-10 lg:pt-14">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 border border-border text-xs font-bold tracking-[0.24em] uppercase text-text2 mb-6 shadow-sm">
              ${profile.badge}
            </div>
            <h1 class="hero-name text-[clamp(3.2rem,8vw,7rem)] font-extrabold text-text">
              Nandito <br class="hidden md:block">Setiyawan
            </h1>
            <p class="mt-6 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-text2">
              ${profile.description}
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a href="${profile.linkedin}" class="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold transition">
                <span class="material-symbols-outlined text-[20px]">launch</span> LinkedIn
              </a>
              <a href="${profile.resumeLink}" class="btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold transition">
                <span class="material-symbols-outlined text-[20px]">download</span> Download CV
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
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
                <div class="absolute left-3 md:left-4 bottom-6 md:bottom-8 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface flex items-center justify-center border border-border shadow-soft z-10">
                  <span class="material-symbols-outlined text-accent text-3xl">smart_toy</span>
                </div>
                <div class="absolute right-3 md:right-4 bottom-6 md:bottom-8 rounded-full bg-white/92 backdrop-blur-md border border-border shadow-soft px-4 py-3 text-xs z-10">
                  <div class="font-bold">Open to work</div>
                  <div class="text-text2 mt-1">Frontend / UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};