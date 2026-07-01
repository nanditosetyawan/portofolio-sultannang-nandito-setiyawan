export const About = (): string => `
  <section id="about" class="stage alt relative py-20 md:py-28">
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="blob slow" style="top:10%; left:-6%; width:18rem; height:18rem; background: radial-gradient(circle at 30% 30%, rgba(137,215,183,.10), rgba(137,215,183,.03) 58%, transparent 76%);"></div>
    </div>
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <div class="max-w-3xl reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 border border-border text-xs font-bold tracking-[0.24em] uppercase text-text2 mb-6 shadow-sm">
          About
        </div>
        <h2 class="font-cabinet text-3xl md:text-5xl font-extrabold tracking-tight text-text">A student who likes building useful, calm, and thoughtful interfaces.</h2>
        <p class="mt-5 text-base md:text-lg leading-7 text-text2">
          I am currently studying Information Systems and focusing on web development, interface design, and project-based problem solving. I enjoy turning class assignments into polished digital products that look clean, feel modern, and are easy to understand.
        </p>
      </div>
      <div class="mt-10 grid md:grid-cols-3 gap-4 md:gap-5 reveal">
        <div class="elevated rounded-[1.75rem] p-5">
          <div class="text-sm font-bold text-text">Learning Focus</div>
          <p class="mt-2 text-sm leading-6 text-text2">Frontend, UI structure, responsive layouts, and clean visual hierarchy.</p>
        </div>
        <div class="elevated rounded-[1.75rem] p-5">
          <div class="text-sm font-bold text-text">Tools Used</div>
          <div class="mt-3 flex flex-wrap gap-1.5">
             <span class="chip-dark px-3 py-1.5 rounded-full text-xs font-semibold">HTML</span>
             <span class="chip-dark px-3 py-1.5 rounded-full text-xs font-semibold">CSS</span>
             <span class="chip-dark px-3 py-1.5 rounded-full text-xs font-semibold">JS/TS</span>
             <span class="chip-dark px-3 py-1.5 rounded-full text-xs font-semibold">Tailwind</span>
          </div>
        </div>
        <div class="elevated rounded-[1.75rem] p-5">
          <div class="text-sm font-bold text-text">Values</div>
          <p class="mt-2 text-sm leading-6 text-text2">Performance over complexity. Readability over cleverness. Consistency.</p>
        </div>
      </div>
    </div>
  </section>
`;