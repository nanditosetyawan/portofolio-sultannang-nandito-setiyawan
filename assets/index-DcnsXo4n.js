var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/white_mode-C2emF1m6.png`,``+import.meta.url).href;new URL(`/portofolio-sultannang-nandito-setiyawan/assets/dark_mode-BcUgIVO5.png`,``+import.meta.url).href;var d=()=>`
    <!-- Top Navbar (Desktop) -->
    <header id="topNav" class="hidden md:block fixed top-0 left-0 right-0 z-[70] transition-all duration-500">
      <div id="navShell" class="nav-shell">
        <div class="mx-auto max-w-7xl px-4 md:px-8 py-4 md:py-3 flex items-center justify-between gap-4">
          <a href="#hero" class="font-cabinet font-extrabold tracking-tight text-base md:text-[1.05rem] text-text shrink-0" data-nav-link data-target="hero">Nandito Setiyawan</a>

          <nav id="desktopNav" class="flex nav-links text-sm font-semibold">
            <span id="navActivePill" class="nav-active-pill" aria-hidden="true"></span>
            <a class="nav-link nav-item active px-4 py-2 rounded-full" href="#hero" data-nav-link data-target="hero">Hero</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#about" data-nav-link data-target="about">About</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#projects" data-nav-link data-target="projects">Projects</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#achievements" data-nav-link data-target="achievements">Achievement</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#contact" data-nav-link data-target="contact">Contact</a>
          </nav>

          <div class="flex items-center gap-2 shrink-0">
            <button id="themeToggle" class="flex w-11 h-11 rounded-full border border-border bg-white/70 items-center justify-center hover:bg-surface transition" aria-label="Toggle theme">
              <img id="themeIcon" src="${u}" alt="Toggle theme" class="w-6 h-6 object-contain">
            </button>
          </div>
        </div>
      </div>
    </header>
  `,f=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/burger_light-DDxQAe6J.png`,``+import.meta.url).href,p=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/burger_dark-CYqhFF_W.png`,``+import.meta.url).href,m=()=>`
    <!-- Mobile Sidebar -->
    <div id="mobileSidebar" class="fixed inset-0 z-[80] hidden">
      <div id="sidebarBackdrop" class="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 opacity-0"></div>
      <aside id="sidebarContent" class="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-surface border-r border-border shadow-2xl p-5 -translate-x-full transition-transform duration-300">
        <div class="flex items-center justify-between mb-8">
          <div class="font-cabinet text-xl font-extrabold tracking-tight">Nandito Setiyawan</div>
          <button id="closeSidebar" class="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-surface/90 shadow-sm" aria-label="Close menu">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav class="space-y-2 text-sm font-semibold">
          <a class="block px-4 py-3 rounded-2xl nav-item active" href="#hero" data-nav-link data-target="hero">Hero</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#about" data-nav-link data-target="about">About</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#projects" data-nav-link data-target="projects">Projects</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#achievements" data-nav-link data-target="achievements">Achievement</a>
          <a class="block px-4 py-3 rounded-2xl nav-item" href="#contact" data-nav-link data-target="contact">Contact</a>
        </nav>
      </aside>
    </div>

    <!-- Mobile Navbar -->
    <header id="mobileNav" class="md:hidden fixed top-0 left-0 right-0 z-[70]">
      <div id="mobileNavShell" class="mobile-nav-shell">
        <span id="mobileNavName" class="font-cabinet mobile-nav-name font-extrabold tracking-tight text-text">Nandito Setiyawan</span>
        <button id="mobileBurgerBtn" class="mobile-burger-btn" aria-label="Open menu">
          <img id="mobileBurgerIcon" src="${f}" alt="Menu"
               data-light="${f}" data-dark="${p}"
               class="w-6 h-6 object-contain">
        </button>
      </div>
    </header>
  `,h=()=>`
    ${d()}
    ${m()}
  `,g={name:`Nandito Setiyawan`,badge:`Information Systems Student`,description:`I build clean, modern digital experiences through web development, design thinking, and project-based learning. This portfolio shows the work I have completed and the direction I am growing toward.`,resumeLink:`#`,whatsapp:`#`,instagram:`#`,github:`#`,linkedin:`#`,heroImages:[`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80`,`https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80`]},_=()=>`
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
              ${g.badge}
            </div>
            <!-- Mobile Badge -->
            <div class="inline-flex md:hidden mb-6 h-[32px] items-center">
              <span class="font-cabinet text-3xl font-bold text-accent typing-animation">HI, I'm</span>
            </div>
            <h1 class="font-cabinet hero-name text-[clamp(3.2rem,8vw,7rem)] font-extrabold text-text">
              Nandito <br class="hidden md:block">Setiyawan
            </h1>
            <p class="mt-6 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-text2 mobile-delay-reveal">
              ${g.description}
            </p>

            <div class="mt-8 flex flex-col md:flex-row gap-3 mobile-delay-reveal">
              <a href="${g.linkedin}" class="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[22px] font-bold transition w-fit">
                <span class="material-symbols-outlined text-[20px]">LinkedIn</span> 
              </a>
              <a href="${g.resumeLink}" class="btn-secondary inline-flex items-center justify-center gap-2 px-10 py-3 rounded-[22px] font-bold transition w-fit">
                <span class="material-symbols-outlined text-[20px]">Download CV</span> 
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-3 mobile-delay-reveal">
              <a href="${g.whatsapp}" class="chip-dark px-4 py-2 rounded-full text-sm font-semibold">WhatsApp</a>
              <a href="${g.instagram}" class="chip-dark px-4 py-2 rounded-full text-sm font-semibold">Instagram</a>
              <a href="${g.github}" class="chip-dark px-4 py-2 rounded-full text-sm font-semibold">GitHub</a>
            </div>
          </div>

          <div class="lg:col-span-5 xl:col-span-5 reveal pt-6 md:pt-10 lg:pt-14">
            <div class="relative">
              <div class="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(137,215,183,.18),rgba(137,215,183,.05)_42%,transparent_72%)] blur-3xl"></div>
              <div class="photo-stack" id="heroPhotoStack">
                <div class="stack-label">Profile Slideshow</div>
                ${g.heroImages.map((e,t)=>`
                  <div class="stack-card pos-${t}" data-stack-card>
                    <img src="${e}" alt="Portrait ${t+1}">
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,v=()=>`
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
`,y=[{id:`cashier`,title:`Web Cashier System`,description:`A CRUD-based cashier website for learning transaction flow, admin UI, and database integration.`,overview:`This project was created to simulate a small business cashier workflow with product management, cart behavior, and transaction history.`,image:`https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80`,techStack:[`PHP`,`MySQL`,`HTML`],tags:[`CRUD`,`UI Design`,`Database`],year:2024},{id:`survey`,title:`Satisfaction Survey App`,description:`A web app to collect feedback with a clean multi-step form and data summary table.`,overview:`Focused on form validation and user experience during data collection.`,image:`https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80`,techStack:[`Tailwind`,`JavaScript`,`PHP`],tags:[`Form`,`UX`,`Data`],year:2023},{id:`spatial`,title:`Spatial Analysis Project`,description:`A map-based analysis project for class, showing data processing, spatial thinking, and presentation.`,overview:`Used GIS tools to process data and visualize regional trends.`,image:`https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80`,techStack:[`QGIS`,`GIS`,`Analysis`],tags:[`Mapping`,`Data processing`],year:2023},{id:`admin`,title:`Admin Dashboard Prototype`,description:`A dashboard prototype for admin-style workflows and data monitoring.`,overview:`Added later with the same expand pattern.`,image:`https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80`,techStack:[`TypeScript`,`API`,`Dashboard`],tags:[`Prototype`,`UI`],year:2024}],b=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,``+import.meta.url).href;new URL(`/portofolio-sultannang-nandito-setiyawan/assets/back_load-CEEf4z4X.png`,``+import.meta.url).href;var x=new URL(`data:image/png;base64,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`,``+import.meta.url).href,S=()=>`
    <section id="projects" class="stage relative py-20 md:py-28 section-wrap">
      <div class="mx-auto max-w-7xl px-4 md:px-8">
        <div class="reveal">
          <h2 class="font-cabinet text-3xl md:text-5xl font-extrabold tracking-tight text-text mb-10">Things I've built.</h2>
        </div>

        <div class="space-y-4" id="projectContainer">
          ${y.map((e,t)=>`
      <article class="accordion elevated rounded-[1.8rem] p-8 md:p-7 ${t>=3?`hidden extra-project`:``}" data-accordion>
        <button class="w-full flex flex-col md:flex-row md:items-center gap-4 text-left" data-accordion-btn>
          <div class="w-full md:w-56 aspect-[16/10] rounded-[1.4rem] overflow-hidden border border-border shrink-0 bg-[linear-gradient(135deg,rgba(66,132,117,.12),rgba(137,215,183,.08))]">
            <img src="${e.image}" alt="${e.title}" loading="lazy" class="w-full h-full object-cover opacity-90">
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              ${e.techStack.map(e=>`<span class="chip px-3 py-1.5 rounded-full text-xs font-semibold">${e}</span>`).join(``)}
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-text">${e.title}</h3>
            <p class="mt-2 text-sm md:text-base leading-6 text-text2 max-w-2xl">${e.description}</p>
          </div>
          <div class="w-11 h-11 rounded-full bg-surface2 border border-border flex items-center justify-center shrink-0 ml-auto">
            <img src="${x}" class="chev transition-transform duration-500 w-5 h-5 object-contain" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line pt-5 grid lg:grid-cols-12 gap-5">
              <div class="lg:col-span-7">
                <div class="text-sm font-bold text-text mb-2">Overview</div>
                <p class="text-sm leading-7 text-text2">${e.overview}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  ${e.tags.map(e=>`<span class="chip-dark px-3 py-1.5 rounded-full text-xs font-semibold">${e}</span>`).join(``)}
                </div>
              </div>
              <div class="lg:col-span-5">
                <div class="rounded-[1.4rem] overflow-hidden border border-border bg-surface shadow-soft2">
                  <img src="${e.image}" alt="Preview" class="w-full aspect-[16/10] object-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `).join(``)}
        </div>

${y.length>3?`
<div class="section-arrow-wrapper reveal">

    <button
    id="projectsToggle"
    class="section-arrow"
    data-tooltip="Load more projects"
    type="button">

        <img
            id="projectsToggleIcon"
            src="${b}"
            class="reload-icon"
            alt="Reload">

    </button>

</div>
`:``}
   
      </div>
    </section>
  `,C=(e,t,n)=>{let r=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFDF8"/><stop offset="100%" stop-color="#FCF8F1"/></linearGradient></defs><rect width="1600" height="1100" fill="url(#g)"/><rect x="60" y="60" width="1480" height="980" fill="none" stroke="#E8E1D7" stroke-width="4"/><text x="800" y="450" font-family="sans-serif" font-size="110" font-weight="800" fill="#1A312C" text-anchor="middle" letter-spacing="-2">${e}</text><text x="800" y="560" font-family="sans-serif" font-size="52" font-weight="600" fill="#428475" text-anchor="middle" letter-spacing="4">${t}</text><text x="800" y="700" font-family="sans-serif" font-size="40" font-weight="500" fill="#53645F" text-anchor="middle" letter-spacing="8">${n}</text></svg>`;return`data:image/svg+xml;charset=UTF-8,`+encodeURIComponent(r)},w=[{id:`azure`,title:`Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02 Bahasa Indonesia)`,description:`A certificate that reflects growing familiarity with cloud concepts, service models, and basic deployment thinking.`,details:`The certification shows initiative in learning cloud fundamentals and complements web development work with broader technical awareness.`,year:2025,tags:[`Certificate`,`2025`],certificates:[new URL(`/portofolio-sultannang-nandito-setiyawan/assets/Official%20Practice%20Question%20Set-DZQnFWXl.jpg`,``+import.meta.url).href],image:new URL(`/portofolio-sultannang-nandito-setiyawan/assets/AWS-BxCWrVfX.jpeg`,``+import.meta.url).href,issuedAt:`12 Mei 2026`},{id:`workshop`,title:`Frontend Workshop Participation`,description:`Completed an intensive frontend engineering workshop.`,details:`The details can be updated later with actual documentation or a certificate image.`,year:2024,tags:[`Workshop`,`2024`],certificates:[C(`WORKSHOP`,`Frontend Practice`,`Participation`)]},{id:`presentation`,title:`Public Speaking Session`,description:`A public speaking and project presentation seminar.`,details:`Focusing on communication and clarity.`,year:2023,tags:[`Seminar`,`2023`],certificates:[C(`CAMPUS`,`Project Presentation`,`Recognition`)]}],T=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,``+import.meta.url).href,E=new URL(`data:image/png;base64,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`,``+import.meta.url).href,D=()=>`
    <section id="achievements" class="stage alt relative py-20 md:py-28 section-wrap">
      <div class="mx-auto max-w-7xl px-4 md:px-8">
        <div class="max-w-2xl reveal">
          <h2 class="font-cabinet text-3xl md:text-5xl font-extrabold tracking-tight text-text">Certificates & Milestones</h2>
          <p class="mt-5 text-base md:text-lg leading-7 text-text2">Proof of continuing education outside of typical class structures.</p>
        </div>

        <div class="mt-10 space-y-4">
          ${w.map((e,t)=>{let n=t>=2?`hidden extra-achieve`:``,r=e.certificates.length>1?`${e.certificates.length} FILES`:`PREVIEW`;return`
      <article class="accordion elevated rounded-[1.8rem] p-9 md:p-8 ${n}" data-accordion>
        <button class="w-full flex flex-col md:flex-row md:items-center gap-4 text-left" data-accordion-btn>
          <div class="w-full md:w-40 aspect-[4/3] rounded-[1.2rem] overflow-hidden border border-border bg-[linear-gradient(135deg,rgba(137,215,183,.14),rgba(255,253,248,.96))]">
            ${e.image?`<img src="${e.image}" alt="${e.title} logo" class="w-full h-full object-cover">`:``}
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              ${e.tags.map(e=>`<span class="chip px-3 py-1.5 rounded-full text-xs font-semibold">${e}</span>`).join(``)}
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-text">${e.title}</h3>
            ${e.issuedAt?`<p class="mt-1 text-xs text-text2 font-medium tracking-wide">Issued at ${e.issuedAt}</p>`:``}
            <p class="mt-2 text-sm md:text-base leading-6 text-text2 max-w-2xl">${e.description}</p>
          </div>
          <div class="w-11 h-11 rounded-full bg-surface2 border border-border flex items-center justify-center shrink-0 ml-auto">
            <img src="${E}" class="chev transition-transform duration-500 w-5 h-5 object-contain" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line pt-5 flex flex-col gap-5">
              <div>
                <div class="text-sm font-bold text-text mb-2">Details</div>
                <p class="text-sm leading-7 text-text2 max-w-3xl">${e.details}</p>
              </div>

              <div class="certificate-preview relative rounded-[1.4rem] overflow-hidden border border-border bg-surface shadow-soft2 min-h-[420px]">
                <div class="certificate-stage" data-cert-images='${JSON.stringify(e.certificates)}' data-cert-title="${e.title}">
                  <img class="cert-img" src="${e.certificates[0]}" alt="${e.title}">
                  <button type="button" class="cert-badge" data-preview-btn>${r}</button>
                    <button type="button" class="download-btn hidden md:flex" aria-label="Download" title="Download Sertifikat">
                      <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/download-CAME9-b6.png`,``+import.meta.url).href}" alt="Download" class="download-img" />
                    </button>
                    <button type="button" class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 hidden" aria-label="Previous">
                      <img src="${new URL(`data:image/png;base64,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`,``+import.meta.url).href}" alt="Previous" class="arrow-left" />
                    </button>
                    <button type="button" class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 hidden" aria-label="Next">
                      <img src="${new URL(`data:image/png;base64,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`,``+import.meta.url).href}" alt="Next" class="arrow-right" />
                    </button>
                </div>
              </div>

              <!-- Mobile Download Button -->
              <button type="button" class="mobile-download-btn md:hidden w-full flex items-center justify-center gap-2 py-3.5 mt-3 rounded-2xl font-bold transition" aria-label="Download" title="Download Sertifikat" data-download-btn>
                <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/download-CAME9-b6.png`,``+import.meta.url).href}" alt="Download" class="w-5 h-5 object-contain" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `}).join(``)}
        </div>

    ${w.length>2?`
<div class="section-arrow-wrapper reveal">

<button
    id="achievementsToggle"
    class="section-arrow"
    data-tooltip="Load more achievements"
    type="button">

        <img
            id="achievementsToggleIcon"
            src="${T}"
            class="reload-icon"
            alt="Reload">

    </button>

</div>
`:``}
      </div>
    </section>
  `,O=()=>`
  <section id="contact" class="stage relative py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 reveal">
        <div class="lg:col-span-5">
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-text mb-5">Say hello.</h2>
          <p class="text-base md:text-lg leading-7 text-text2 mb-10">Whether it's for a project discussion, class assignment, or just to connect.</p>
          
          <div class="space-y-4">
            <div class="rounded-[1.5rem] p-5 bg-[linear-gradient(180deg,rgba(255,253,248,.98),rgba(252,248,241,.96))] border border-border shadow-soft">
              <div class="text-sm font-bold text-text">Email</div>
              <div class="mt-2 text-sm text-text2">hello@nanditosetiyawan.com</div>
            </div>
            <div class="rounded-[1.5rem] p-5 bg-[linear-gradient(180deg,rgba(255,253,248,.98),rgba(252,248,241,.96))] border border-border shadow-soft">
              <div class="text-sm font-bold text-text">Location</div>
              <div class="mt-2 text-sm text-text2">Yogyakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-7">
          <div class="rounded-[1.5rem] overflow-hidden border border-border bg-white shadow-soft2">
            <div class="p-6 md:p-8">
              <div class="text-sm font-bold text-text mb-4">Quick Message</div>
              <form class="space-y-4" onsubmit="event.preventDefault()">
                <input class="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition" placeholder="Your name" />
                <input class="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition" placeholder="Your email" />
                <textarea class="w-full min-h-[140px] rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition" placeholder="Your message"></textarea>
                <button type="button" class="btn-primary w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="border-t border-border mt-20 py-8 text-center text-sm text-text2">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      © ${new Date().getFullYear()} Nandito Setiyawan. Designed with precision.
    </div>
  </footer>
`,k=`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,A=`/portofolio-sultannang-nandito-setiyawan/assets/back_load-CEEf4z4X.png`,j=`/portofolio-sultannang-nandito-setiyawan/assets/white_mode-C2emF1m6.png`,M=`/portofolio-sultannang-nandito-setiyawan/assets/dark_mode-BcUgIVO5.png`,N=`/portofolio-sultannang-nandito-setiyawan/assets/burger_light-DDxQAe6J.png`,P=`/portofolio-sultannang-nandito-setiyawan/assets/burger_dark-CYqhFF_W.png`,F=`modulepreload`,I=function(e){return`/portofolio-sultannang-nandito-setiyawan/`+e},L={},R=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=I(t,n),t=s(t),t in L)return;L[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:F,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},z=()=>{let e=document.getElementById(`topNav`),t=document.getElementById(`mobileNav`),n=document.getElementById(`mobileNavShell`),r=document.getElementById(`mobileBurgerBtn`),i=document.getElementById(`mobileBurgerIcon`),a=document.getElementById(`navShell`),o=document.getElementById(`desktopNav`),s=document.getElementById(`navActivePill`),l=Array.from(document.querySelectorAll(`[data-nav-link]`)),u=document.getElementById(`themeToggle`),d=document.getElementById(`themeIcon`),f=document.getElementById(`menuBtn`),p=document.getElementById(`mobileSidebar`),m=document.getElementById(`closeSidebar`),h=document.getElementById(`sidebarBackdrop`),g=[`hero`,`about`,`projects`,`achievements`,`contact`].map(e=>document.getElementById(e)).filter(e=>!!e),_=()=>{p&&(p.classList.remove(`hidden`),p.classList.add(`block`),requestAnimationFrame(()=>{let e=document.getElementById(`sidebarBackdrop`),t=document.getElementById(`sidebarContent`);e&&(e.classList.remove(`opacity-0`),e.classList.add(`opacity-100`)),t&&(t.classList.remove(`-translate-x-full`),t.classList.add(`translate-x-0`))}),document.body.classList.add(`overflow-hidden`))},v=()=>{if(!p)return;let e=document.getElementById(`sidebarBackdrop`),t=document.getElementById(`sidebarContent`);e&&(e.classList.remove(`opacity-100`),e.classList.add(`opacity-0`)),t&&(t.classList.remove(`translate-x-0`),t.classList.add(`-translate-x-full`)),setTimeout(()=>{p.classList.add(`hidden`),p.classList.remove(`block`)},300),document.body.classList.remove(`overflow-hidden`)},y=t=>{let n=document.getElementById(t);if(!n)return;let r=e?.getBoundingClientRect().height??0,i=window.scrollY+n.getBoundingClientRect().top-r-8;window.scrollTo({top:Math.max(i,0),behavior:`smooth`})},b=Array.from(document.querySelectorAll(`#desktopNav [data-nav-link]`)),x=()=>{i&&(i.src=document.documentElement.classList.contains(`dark`)?P:N)};x();let S=()=>{let e=window.scrollY>18;if(a&&a.classList.toggle(`is-scrolled`,e),n){n.classList.toggle(`is-scrolled`,e);let t=window.scrollY===0;n.classList.toggle(`at-top`,t)}window.scrollY===0&&H()};l.forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n?.startsWith(`#`))return;t.preventDefault();let r=n.slice(1);D(r),v(),y(r)})}),u?.addEventListener(`click`,()=>{let e=document.documentElement.classList.toggle(`dark`);d&&(d.src=e?M:j,d.alt=e?`Dark mode`:`Light mode`),x()}),f?.addEventListener(`click`,_),r?.addEventListener(`click`,_),m?.addEventListener(`click`,v),h?.addEventListener(`click`,v);let C=document.querySelectorAll(`.reveal`),w=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`in`)})},{threshold:.12});C.forEach(e=>w.observe(e));let T=`hero`,E=()=>{if(!o||!s||b.length===0)return;let e=window.innerHeight*.35,t=window.innerHeight*.1,n=0,r=0,i=0,a=0;for(let n=0;n<g.length;n++)g[n].getBoundingClientRect().top<=e+t&&(a=n);n=a,r=a;for(let a=1;a<g.length;a++){let o=g[a].getBoundingClientRect().top;if(o>e-t&&o<e+t){n=a-1,r=a,i=1-(o-(e-t))/(2*t);break}}window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&(n=g.length-1,r=g.length-1,i=0);let c=o.getBoundingClientRect(),u=b[n].getBoundingClientRect(),d=b[r].getBoundingClientRect(),f=u.left-c.left,p=f+u.width,m=d.left-c.left,h=m+d.width,_=f,v=p;if(m>f){let e=Math.min(1,i*2),t=Math.max(0,(i-.5)*2);_=f+(m-f)*t,v=p+(h-p)*e}else if(m<f){let e=Math.min(1,i*2),t=Math.max(0,(i-.5)*2);_=f-(f-m)*e,v=p-(p-h)*t}let y=v-_;s.style.transition=`none`,s.style.transform=`translateX(${_}px)`,s.style.width=`${y}px`,s.style.opacity=`1`;let x=g[i<.5?n:r].id;x!==T&&(T=x,l.forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)===`#${T}`)}))};window.addEventListener(`scroll`,()=>{requestAnimationFrame(E)},{passive:!0}),setTimeout(()=>requestAnimationFrame(E),100);let D=e=>{l.forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`href`)===`#${e}`)})};D(`hero`);let O=0,F=window.scrollY,I=!1,L=null,z=null,B=null,V=()=>{I||(I=!0,e?.classList.add(`nav-hidden`),t?.classList.add(`nav-hidden`))},H=()=>{I&&(I=!1,e?.classList.remove(`nav-hidden`),t?.classList.remove(`nav-hidden`))},U=()=>{B&&=(clearTimeout(B),null)},W=()=>{U(),L=null};window.addEventListener(`scroll`,()=>{O||=window.requestAnimationFrame(()=>{let e=window.scrollY,t=e>F;z&&=(clearTimeout(z),null),t&&e>80?(L===null&&(L=Date.now(),U(),B=setTimeout(V,3e3)),z=setTimeout(()=>{(L===null?0:Date.now()-L)>=3e3&&V(),W()},250)):(W(),H()),F=e,S(),O=0})},{passive:!0}),window.addEventListener(`resize`,S),S(),document.querySelectorAll(`[data-accordion]`).forEach(e=>{let t=e.querySelector(`[data-accordion-btn]`),n=e.querySelector(`.accordion-body`),r=e.querySelector(`.chev`),i=!1,a=()=>{n&&n.classList.toggle(`hidden`,!i),r&&(r.style.transform=i?`rotate(180deg)`:`rotate(0deg)`),t?.setAttribute(`aria-expanded`,String(i))};a(),t?.addEventListener(`click`,()=>{r&&r.classList.add(`spin`),window.setTimeout(()=>{i=!i,a(),r&&r.classList.remove(`spin`)},280)})});let G=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(`${e}Icon`);if(!n||!r)return;let i=Array.from(document.querySelectorAll(t)),a=0;n.addEventListener(`click`,()=>{if(r.classList.add(`spin`),a>=i.length)i.forEach(e=>{e.classList.remove(`show`)}),setTimeout(()=>{i.forEach(e=>{e.classList.add(`hidden`)}),r.src=k,r.classList.remove(`spin`)},550),a=0;else{let e=Math.min(a+3,i.length);setTimeout(()=>{for(let t=a;t<e;t++){let e=i[t];e.classList.remove(`hidden`),e.offsetWidth,setTimeout(()=>{e.classList.add(`show`)},(t-a)*220)}a=e,a===i.length&&(r.src=A)},250),setTimeout(()=>{r.classList.remove(`spin`)},650)}})};G(`projectsToggle`,`.extra-project`),G(`achievementsToggle`,`.extra-achieve`),document.querySelectorAll(`.certificate-stage`).forEach(e=>{let t=e.getAttribute(`data-cert-images`);if(!t)return;let n=[];try{n=JSON.parse(t)}catch{n=[]}if(!n.length)return;let r=e.getAttribute(`data-cert-title`)||`Certificate`,i=e.querySelector(`.cert-img`),a=e.querySelector(`.download-btn`),o=e.querySelector(`.carousel-prev`),s=e.querySelector(`.carousel-next`),l=e.querySelector(`[data-preview-btn]`),u=e.closest(`[data-accordion]`)?.querySelector(`[data-download-btn]`),d=0,f=e=>{i&&(i.src=n[e],i.style.opacity=`1`)};if(n.length>1&&i){o?.classList.remove(`hidden`),s?.classList.remove(`hidden`);let e=window.setInterval(()=>{i&&(i.style.opacity=`0`,window.setTimeout(()=>{d=(d+1)%n.length,f(d)},280))},5e3);o?.addEventListener(`click`,t=>{t.stopPropagation(),clearInterval(e),d=(d-1+n.length)%n.length,f(d)}),s?.addEventListener(`click`,t=>{t.stopPropagation(),clearInterval(e),d=(d+1)%n.length,f(d)})}else o?.classList.add(`hidden`),s?.classList.add(`hidden`),f(0);l?.addEventListener(`click`,e=>{if(e.stopPropagation(),!(window.innerWidth<768))return;let t=n[d];if(!t)return;let r=document.createElement(`div`);r.className=`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 animate-fade-in`;let i=document.createElement(`img`);i.src=t,i.className=`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-zoom-in`;let a=document.createElement(`button`);a.className=`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white z-10 transition`,a.innerHTML=`<span class="material-symbols-outlined text-[28px]">close</span>`,a.setAttribute(`aria-label`,`Close preview`),r.appendChild(i),r.appendChild(a),document.body.appendChild(r),document.body.classList.add(`overflow-hidden`);let o=()=>{r.classList.add(`animate-fade-out`),i.classList.add(`animate-zoom-out`),setTimeout(()=>{r.remove(),document.body.classList.remove(`overflow-hidden`)},250)};a.addEventListener(`click`,o),r.addEventListener(`click`,e=>{e.target===r&&o()})});let p=e=>{if(e.startsWith(`data:`))return{"image/jpeg":`jpg`,"image/jpg":`jpg`,"image/png":`png`,"image/webp":`webp`,"image/gif":`gif`,"image/svg+xml":`svg`}[e.split(`;`)[0].split(`:`)[1]||``]??`jpg`;try{return(new URL(e).pathname.split(`.`).pop()?.toLowerCase()??``)||`jpg`}catch{return(e.split(`?`)[0].split(`.`).pop()?.toLowerCase()??``)||`jpg`}},m=e=>{if(e.startsWith(`data:`)){let[t,n]=e.split(`,`),r=t.split(`:`)[1].split(`;`)[0];if(t.includes(`;base64`)){let e=atob(n),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return Promise.resolve(new Blob([t],{type:r}))}else{let e=decodeURIComponent(n);return Promise.resolve(new Blob([e],{type:r}))}}return fetch(e).then(e=>e.blob())},h=async e=>{if(e.stopPropagation(),n.length===1){let e=n[0],t=p(e),i=await m(e),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`${r}.${t}`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}else{let e=(await R(async()=>{let{default:e}=await import(`./jszip.min-WQUGkocM.js`).then(e=>c(e.default,1));return{default:e}},[])).default,t=new e;await Promise.all(n.map(async(e,n)=>{let i=p(e),a=await m(e);t.file(`${r}_${n+1}.${i}`,a)}));let i=await t.generateAsync({type:`blob`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`${r}.zip`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}};a?.addEventListener(`click`,h),u?.addEventListener(`click`,async e=>{await h(e),u.classList.add(`downloaded`)})});let K=document.getElementById(`heroPhotoStack`);if(K){let e=Array.from(K.querySelectorAll(`[data-stack-card]`)),t=e.length;if(t>1){let n=0,r=()=>{e.forEach((e,n)=>{e.classList.remove(...Array.from({length:t},(e,t)=>`pos-${t}`))}),e.forEach((e,r)=>{let i=(r-n+t)%t;e.classList.add(`pos-${i}`)}),n=(n+1)%t};K.addEventListener(`click`,r),setInterval(r,3e3)}}},B=document.querySelector(`#app`);B.innerHTML=`
  <div id="loadingScreen" class="loading-screen">
    <div class="loading-screen__inner">
      <h1 class="loading-screen__title">My Portfolio</h1>
      <div class="loading-screen__bar">
        <span class="loading-screen__fill"></span>
      </div>
    </div>
  </div>

  <div aria-hidden="true" class="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div class="blob" style="top:-8%; left:-10%; width:34rem; height:34rem; background: radial-gradient(circle at 30% 30%, rgba(137,215,183,.32), rgba(137,215,183,.08) 50%, transparent 72%);"></div>
    <div class="blob slow" style="top:12%; right:-12%; width:28rem; height:28rem; background: radial-gradient(circle at 30% 30%, rgba(66,132,117,.20), rgba(66,132,117,.05) 56%, transparent 74%);"></div>
    <div class="blob faster" style="bottom:8%; left:-10%; width:30rem; height:30rem; background: radial-gradient(circle at 30% 30%, rgba(137,215,183,.18), rgba(137,215,183,.04) 52%, transparent 76%);"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,250,243,.0),rgba(255,250,243,.2))]"></div>
  </div>

  ${h()}

  <main class="pt-[4.25rem] md:pt-28">
    ${_()}
    ${v()}
    ${S()}
    ${D()}
    ${O()}
  </main>
`,window.addEventListener(`DOMContentLoaded`,()=>{z(),window.addEventListener(`load`,()=>{let e=document.getElementById(`loadingScreen`);e&&window.setTimeout(()=>{e.classList.add(`is-hidden`),window.setTimeout(()=>e.remove(),500)},1800)})});export{l as n,o as t};