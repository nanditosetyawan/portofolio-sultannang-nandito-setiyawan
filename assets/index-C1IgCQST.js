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
              ${g.description}
            </p>

            <div class="hero-actions mobile-delay-reveal">
              <a href="${g.linkedin}" class="btn-primary hero-btn">
                <span class="material-symbols-outlined text-[20px]">LinkedIn</span> 
              </a>
              <a href="${g.resumeLink}" class="btn-secondary hero-btn hero-btn-secondary">
                <span class="material-symbols-outlined text-[20px]">Download CV</span> 
              </a>
            </div>

            <div class="hero-socials mobile-delay-reveal">
              <a href="${g.whatsapp}" class="chip-dark hero-chip">WhatsApp</a>
              <a href="${g.instagram}" class="chip-dark hero-chip">Instagram</a>
              <a href="${g.github}" class="chip-dark hero-chip">GitHub</a>
            </div>
          </div>

          <div class="hero-right reveal">
            <div class="relative">
              <div class="hero-photo-blob"></div>
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

      <!-- Single Wave separator -->

<svg
  class="hero-wave hero-wave-top"
  viewBox="0 0 1440 120"
  fill="none"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0,70
       C180,15 360,15 540,70
       C720,120 900,120 1080,70
       C1260,20 1350,20 1440,55"
  />
</svg>

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
  `,v=()=>`
  <section id="about" class="stage alt about-section">
    <div class="about-bg-layer">
      <div class="blob slow about-blob-1"></div>
    </div>
    <div class="about-container">
      <div class="about-header reveal">
        <div class="about-badge">
          About
        </div>
        <h2 class="font-cabinet about-title">A student who likes building useful, calm, and thoughtful interfaces.</h2>
        <p class="about-desc">
          I am currently studying Information Systems and focusing on web development, interface design, and project-based problem solving. I enjoy turning class assignments into polished digital products that look clean, feel modern, and are easy to understand.
        </p>
      </div>
      <div class="about-cards reveal">
        <div class="elevated about-card">
          <div class="about-card-label">Learning Focus</div>
          <p class="about-card-text">Frontend, UI structure, responsive layouts, and clean visual hierarchy.</p>
        </div>
        <div class="elevated about-card">
          <div class="about-card-label">Tools Used</div>
          <div class="about-card-tools">
             <span class="chip-dark about-tool-chip">HTML</span>
             <span class="chip-dark about-tool-chip">CSS</span>
             <span class="chip-dark about-tool-chip">JS/TS</span>
             <span class="chip-dark about-tool-chip">Tailwind</span>
          </div>
        </div>
        <div class="elevated about-card">
          <div class="about-card-label">Values</div>
          <p class="about-card-text">Performance over complexity. Readability over cleverness. Consistency.</p>
        </div>
      </div>
    </div>
  </section>
`,y=[{id:`cashier`,title:`Web Cashier System`,description:`A CRUD-based cashier website for learning transaction flow, admin UI, and database integration.`,overview:`This project was created to simulate a small business cashier workflow with product management, cart behavior, and transaction history.`,image:`https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80`,techStack:[`PHP`,`MySQL`,`HTML`],tags:[`CRUD`,`UI Design`,`Database`],year:2024},{id:`survey`,title:`Satisfaction Survey App`,description:`A web app to collect feedback with a clean multi-step form and data summary table.`,overview:`Focused on form validation and user experience during data collection.`,image:`https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80`,techStack:[`Tailwind`,`JavaScript`,`PHP`],tags:[`Form`,`UX`,`Data`],year:2023},{id:`spatial`,title:`Spatial Analysis Project`,description:`A map-based analysis project for class, showing data processing, spatial thinking, and presentation.`,overview:`Used GIS tools to process data and visualize regional trends.`,image:`https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80`,techStack:[`QGIS`,`GIS`,`Analysis`],tags:[`Mapping`,`Data processing`],year:2023},{id:`admin`,title:`Admin Dashboard Prototype`,description:`A dashboard prototype for admin-style workflows and data monitoring.`,overview:`Added later with the same expand pattern.`,image:`https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80`,techStack:[`TypeScript`,`API`,`Dashboard`],tags:[`Prototype`,`UI`],year:2024}],b=new URL(`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,``+import.meta.url).href;new URL(`/portofolio-sultannang-nandito-setiyawan/assets/back_load-CEEf4z4X.png`,``+import.meta.url).href;var x=new URL(`data:image/png;base64,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`,``+import.meta.url).href,S=()=>`
    <section id="projects" class="stage section-wrap projects-section">
      <div class="projects-container">
        <div class="reveal">
          <h2 class="font-cabinet projects-title">Things I've built.</h2>
        </div>

        <div class="space-y-4" id="projectContainer">
          ${y.map((e,t)=>`
      <article class="accordion elevated project-item ${t>=3?`hidden extra-project`:``}" data-accordion>
        <button class="project-btn" data-accordion-btn>
          <div class="project-image-wrapper">
            <img src="${e.image}" alt="${e.title}" loading="lazy" class="project-image">
          </div>
          <div class="project-meta">
            <div class="project-tags">
              ${e.techStack.map(e=>`<span class="chip project-tag">${e}</span>`).join(``)}
            </div>
            <h3 class="project-name">${e.title}</h3>
            <p class="project-desc">${e.description}</p>
          </div>
          <div class="project-toggle">
            <img src="${x}" class="chev project-chev" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line project-body-grid">
              <div class="project-overview-col">
                <div class="project-overview-title">Overview</div>
                <p class="project-overview-text">${e.overview}</p>
                <div class="project-tag-row">
                  ${e.tags.map(e=>`<span class="chip-dark project-tag">${e}</span>`).join(``)}
                </div>
              </div>
              <div class="project-preview-col">
                <div class="project-preview-wrapper">
                  <img src="${e.image}" alt="Preview" class="project-preview-img">
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
    <section id="achievements" class="stage alt relative section-wrap achievement-section">
      <div class="achievement-container">
        <div class="achievement-header reveal">
          <h2 class="font-cabinet achievement-title">Certificates & Milestones</h2>
          <p class="achievement-subtitle">Proof of continuing education outside of typical class structures.</p>
        </div>

        <div class="achievement-list space-y-4">
          ${w.map((e,t)=>{let n=t>=2?`hidden extra-achieve`:``,r=e.certificates.length>1?`${e.certificates.length} FILES`:`PREVIEW`;return`
      <article class="accordion elevated achievement-item ${n}" data-accordion>
        <button class="achievement-btn" data-accordion-btn>
          <div class="achievement-logo-wrapper">
            ${e.image?`<img src="${e.image}" alt="${e.title} logo" class="achievement-logo-img">`:``}
          </div>
          <div class="achievement-meta">
            <div class="achievement-tags">
              ${e.tags.map(e=>`<span class="chip achievement-tag">${e}</span>`).join(``)}
            </div>
            <h3 class="achievement-name">${e.title}</h3>
            ${e.issuedAt?`<p class="achievement-date">Issued at ${e.issuedAt}</p>`:``}
            <p class="achievement-desc">${e.description}</p>
          </div>
          <div class="achievement-toggle">
            <img src="${E}" class="chev achievement-chev" alt="Toggle">
          </div>
        </button>

        <div class="accordion-body">
          <div>
            <div class="card-line achievement-body-inner">
              <div>
                <div class="achievement-details-title">Details</div>
                <p class="achievement-details-text">${e.details}</p>
              </div>

              <div class="certificate-preview relative rounded-[1.4rem] overflow-hidden border border-border bg-surface shadow-soft2 min-h-[420px]">
                <div class="certificate-stage" data-cert-images='${JSON.stringify(e.certificates)}' data-cert-title="${e.title}">
                  <img class="cert-img" src="${e.certificates[0]}" alt="${e.title}">
                  <button type="button" class="cert-badge" data-preview-btn>${r}</button>
                    <button type="button" class="download-btn hidden md:flex" aria-label="Download" title="Download Sertifikat">
                      <img src="${new URL(`/portofolio-sultannang-nandito-setiyawan/assets/download-CAME9-b6.png`,``+import.meta.url).href}" alt="Download" class="download-img" />
                    </button>
                    <button type="button" class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 hidden" aria-label="Previous">
                      <img src="${new URL(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbJSnoAAAAidFJOUwDUxdEV0tMOxhYRzAkXurkNCMELDMIK14S4GLsZksC/kb7wz7FzAAAE7ElEQVR42u3ay1ITQQCGURSUi1EMIN5v/f4PaTaugCJIRpp856xT1VP9/TOrHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAzsf507RJmdf1pvfQRVx/Gy/duek7HL8eHq8X7DwuYt/8YF1eL97eAiftvFnC5YP+LMSxg7v5LLuDyb38LmLj/GF9Xi/e3gIn7j/FutXh/C5i4/zILWH0dwwKeR/8lFrB6N4YFPJf+u1/ALf0tYOL+u17Arf03Czh2+5P23+0C7uhvAVP0P7kjzu4WcGd/C5i4/xjnq8X7W8DE/Xe1gNX5GBbwHPvvZgH39LeAiftvFrBevL8FTNz/8QtY39/fAibu/9gFbNXfAibuP8bn9eL9LWDi/o9awPexrd/+KfqfXf7cOs6vfz7k7YutD/ENmPT9H+PF6YEF6G8B+luA/hagvwXobwH6W4D+FqC/BehvAfpbgP4WoP+9Ti0g3d8C6v0toN7fAur9LaDe3wLq/S2g3t8C6v0toN7fAur9LaDe3wLq/S2g3t8C6v0toN7fAur9LaDe3wLq/S2g3t8C6v0toN7fAur9LeCp+78+feqHtYB2fwuo97eAen8LqPe3gHp/C6j3t4B6fwuo97eAen8LqPe3gHp/C6j3t4B6/wct4MQC9q+/BdT7W0C9vwXU+1tAvb8F1PtbQL2/BdT7bxbw2gLK/S2g3t8C6v0toN7fAur9LaDe3wLq/S2g3t8C6v0toN7fAur9LaDe3wLq/S2g3t8C6v0toN7fAur9LaDe3wLq/S2g3t8C6v3zC8j3jy9A//YC9G8vQP/2AvRvL0D/9gL0by9A//YC9G8vQP/2AvRvL0D/9gL0by9A//YC9G8vQP/2AvRvL0D/9gL0by9A//YC9G8vQP/2AvRvL0D/9gIe0P+V/vu3gIf0P9J+7xagf3sB+rcXoH97Afq3F6B/ewH6txegf3sB+rcXoH97Afq3F6B/ewH6txegf3sB+rcXoH97Afq3F6B/ewH6txegf3sB+i+5gFfTL0D/RR3NvgD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9gLM3+pcXoH97Afq3F6B/ewH6txegf3sB+rcXoH97Afq3F6B/ewH6txegf3sB+rcXoH97Afq3F6B/ewH6txegf3sB+u+hbx+3jvrjYuuffvzmZvfwG+D9twD9LUB/C9DfAvS3AP0t4IZD/dML0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9C/vQD92wvQv70A/dsL0L+9AP3bC9A/sIBD/S1Afwu46c2ZuykvQP/2AvRvL0D/9gL0by9A//YC9G8vQP/2AvRvL0D/9gL0by9A/7YvX9wBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyhP0dsasv5PFg1AAAAAElFTkSuQmCC`,``+import.meta.url).href}" alt="Previous" class="arrow-left" />
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
  <section id="contact" class="stage relative contact-section">
    <div class="contact-container">
      <div class="contact-grid reveal">
        <div class="contact-left">
          <h2 class="contact-title">Say hello.</h2>
          <p class="contact-subtitle">Whether it's for a project discussion, class assignment, or just to connect.</p>
          
          <div class="contact-info-list">
            <div class="contact-info-card">
              <div class="contact-info-label">Email</div>
              <div class="contact-info-value">hello@nanditosetiyawan.com</div>
            </div>
            <div class="contact-info-card">
              <div class="contact-info-label">Location</div>
              <div class="contact-info-value">Yogyakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <div class="contact-form-wrapper">
            <div class="contact-form-inner">
              <div class="contact-form-title">Quick Message</div>
              <form class="contact-form-fields" onsubmit="event.preventDefault()">
                <input class="contact-input" placeholder="Your name" />
                <input class="contact-input" placeholder="Your email" />
                <textarea class="contact-textarea" placeholder="Your message"></textarea>
                <button type="button" class="btn-primary contact-send-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="site-footer">
    <div class="site-footer-inner">
      © ${new Date().getFullYear()} Nandito Setiyawan. Designed with precision.
    </div>
  </footer>
`,k=`/portofolio-sultannang-nandito-setiyawan/assets/reload-CPAj83QN.png`,A=`/portofolio-sultannang-nandito-setiyawan/assets/back_load-CEEf4z4X.png`,j=`/portofolio-sultannang-nandito-setiyawan/assets/white_mode-C2emF1m6.png`,M=`/portofolio-sultannang-nandito-setiyawan/assets/dark_mode-BcUgIVO5.png`,N=`/portofolio-sultannang-nandito-setiyawan/assets/burger_light-DDxQAe6J.png`,P=`/portofolio-sultannang-nandito-setiyawan/assets/burger_dark-CYqhFF_W.png`,F=`modulepreload`,I=function(e){return`/portofolio-sultannang-nandito-setiyawan/`+e},L={},R=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=I(t,n),t=s(t),t in L)return;L[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:F,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},z=()=>{let e=document.getElementById(`topNav`),t=document.getElementById(`mobileNav`),n=document.getElementById(`mobileNavShell`),r=document.getElementById(`mobileBurgerBtn`),i=document.getElementById(`mobileBurgerIcon`),a=document.getElementById(`navShell`),o=document.getElementById(`desktopNav`),s=document.getElementById(`navActivePill`),l=Array.from(document.querySelectorAll(`[data-nav-link]`)),u=document.getElementById(`themeToggle`),d=document.getElementById(`themeIcon`),f=document.getElementById(`menuBtn`),p=document.getElementById(`mobileSidebar`),m=document.getElementById(`closeSidebar`),h=document.getElementById(`sidebarBackdrop`),g=[`hero`,`about`,`projects`,`achievements`,`contact`].map(e=>document.getElementById(e)).filter(e=>!!e),_=()=>{p&&(p.classList.remove(`hidden`),p.classList.add(`block`),requestAnimationFrame(()=>{let e=document.getElementById(`sidebarBackdrop`),t=document.getElementById(`sidebarContent`);e&&(e.classList.remove(`opacity-0`),e.classList.add(`opacity-100`)),t&&(t.classList.remove(`-translate-x-full`),t.classList.add(`translate-x-0`))}),document.body.classList.add(`overflow-hidden`))},v=()=>{if(!p)return;let e=document.getElementById(`sidebarBackdrop`),t=document.getElementById(`sidebarContent`);e&&(e.classList.remove(`opacity-100`),e.classList.add(`opacity-0`)),t&&(t.classList.remove(`translate-x-0`),t.classList.add(`-translate-x-full`)),setTimeout(()=>{p.classList.add(`hidden`),p.classList.remove(`block`)},300),document.body.classList.remove(`overflow-hidden`)},y=t=>{let n=document.getElementById(t);if(!n)return;let r=e?.getBoundingClientRect().height??0,i=window.scrollY+n.getBoundingClientRect().top-r-8;window.scrollTo({top:Math.max(i,0),behavior:`smooth`})},b=Array.from(document.querySelectorAll(`#desktopNav [data-nav-link]`)),x=()=>{i&&(i.src=document.documentElement.classList.contains(`dark`)?P:N)};x();let S=()=>{let e=window.scrollY>18;if(a&&a.classList.toggle(`is-scrolled`,e),n){n.classList.toggle(`is-scrolled`,e);let t=window.scrollY===0;n.classList.toggle(`at-top`,t)}window.scrollY===0&&K()};l.forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n?.startsWith(`#`))return;t.preventDefault();let r=n.slice(1);D(r),v(),y(r)})}),u?.addEventListener(`click`,()=>{let e=document.documentElement.classList.toggle(`dark`);d&&(d.src=e?M:j,d.alt=e?`Dark mode`:`Light mode`),x()}),f?.addEventListener(`click`,_),r?.addEventListener(`click`,_),m?.addEventListener(`click`,v),h?.addEventListener(`click`,v);let C=document.querySelectorAll(`.reveal`),w=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`in`)})},{threshold:.12});C.forEach(e=>w.observe(e));let T=`hero`,E=()=>{if(!o||!s||b.length===0)return;let e=window.innerHeight*.35,t=window.innerHeight*.1,n=0,r=0,i=0,a=0;for(let n=0;n<g.length;n++)g[n].getBoundingClientRect().top<=e+t&&(a=n);n=a,r=a;for(let a=1;a<g.length;a++){let o=g[a].getBoundingClientRect().top;if(o>e-t&&o<e+t){n=a-1,r=a,i=1-(o-(e-t))/(2*t);break}}window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&(n=g.length-1,r=g.length-1,i=0);let c=o.getBoundingClientRect(),u=b[n].getBoundingClientRect(),d=b[r].getBoundingClientRect(),f=u.left-c.left,p=f+u.width,m=d.left-c.left,h=m+d.width,_=f,v=p;if(m>f){let e=Math.min(1,i*2),t=Math.max(0,(i-.5)*2);_=f+(m-f)*t,v=p+(h-p)*e}else if(m<f){let e=Math.min(1,i*2),t=Math.max(0,(i-.5)*2);_=f-(f-m)*e,v=p-(p-h)*t}let y=v-_;s.style.transition=`none`,s.style.transform=`translateX(${_}px)`,s.style.width=`${y}px`,s.style.opacity=`1`;let x=g[i<.5?n:r].id;x!==T&&(T=x,l.forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)===`#${T}`)}))};window.addEventListener(`scroll`,()=>{requestAnimationFrame(E)},{passive:!0}),setTimeout(()=>requestAnimationFrame(E),100);let D=e=>{l.forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`href`)===`#${e}`)})};D(`hero`);let O=document.getElementById(`hero`),F=O?.querySelector(`.hero-bg-fixed`),I=O?.querySelector(`.hero-container`),L=e=>{if(!O)return;let t=O.offsetHeight;if(F&&(F.style.opacity=e>t?`0`:`1`),e<=t+100&&I){let n=t*.78,r=t*1.05,i=Math.min(Math.max((e-n)/(r-n),0),1);I.style.opacity=`${1-i}`,I.style.transform=`translateY(${-Math.max(0,e-n)*.25}px)`}},z=0,B=window.scrollY,V=!1,H=0,U=null,W=null,G=()=>{V||(V=!0,e?.classList.add(`nav-hidden`),t?.classList.add(`nav-hidden`))},K=()=>{V&&(V=!1,e?.classList.remove(`nav-hidden`),t?.classList.remove(`nav-hidden`))},q=()=>{H=0,U=null,W&&=(clearTimeout(W),null)},J=()=>{W&&clearTimeout(W),W=setTimeout(()=>{q()},2e3)};window.addEventListener(`scroll`,()=>{z||=window.requestAnimationFrame(()=>{let e=window.scrollY,t=e>B;if(e<B)q(),K();else if(t&&e>80){let e=Date.now();U!==null&&(H+=e-U),U=e,J(),H>=3e3&&G()}B=e,L(e),S(),z=0})},{passive:!0}),window.addEventListener(`resize`,()=>{S(),L(window.scrollY)}),S(),L(window.scrollY),document.querySelectorAll(`[data-accordion]`).forEach(e=>{let t=e.querySelector(`[data-accordion-btn]`),n=e.querySelector(`.accordion-body`),r=e.querySelector(`.chev`),i=!1,a=()=>{n&&n.classList.toggle(`hidden`,!i),r&&(r.style.transform=i?`rotate(180deg)`:`rotate(0deg)`),t?.setAttribute(`aria-expanded`,String(i))};a(),t?.addEventListener(`click`,()=>{r&&r.classList.add(`spin`),window.setTimeout(()=>{i=!i,a(),r&&r.classList.remove(`spin`)},280)})});let Y=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(`${e}Icon`);if(!n||!r)return;let i=Array.from(document.querySelectorAll(t)),a=0;n.addEventListener(`click`,()=>{if(r.classList.add(`spin`),a>=i.length)i.forEach(e=>{e.classList.remove(`show`)}),setTimeout(()=>{i.forEach(e=>{e.classList.add(`hidden`)}),r.src=k,r.classList.remove(`spin`)},550),a=0;else{let e=Math.min(a+3,i.length);setTimeout(()=>{for(let t=a;t<e;t++){let e=i[t];e.classList.remove(`hidden`),e.offsetWidth,setTimeout(()=>{e.classList.add(`show`)},(t-a)*220)}a=e,a===i.length&&(r.src=A)},250),setTimeout(()=>{r.classList.remove(`spin`)},650)}})};Y(`projectsToggle`,`.extra-project`),Y(`achievementsToggle`,`.extra-achieve`),document.querySelectorAll(`.certificate-stage`).forEach(e=>{let t=e.getAttribute(`data-cert-images`);if(!t)return;let n=[];try{n=JSON.parse(t)}catch{n=[]}if(!n.length)return;let r=e.getAttribute(`data-cert-title`)||`Certificate`,i=e.querySelector(`.cert-img`),a=e.querySelector(`.download-btn`),o=e.querySelector(`.carousel-prev`),s=e.querySelector(`.carousel-next`),l=e.querySelector(`[data-preview-btn]`),u=e.closest(`[data-accordion]`)?.querySelector(`[data-download-btn]`),d=0,f=e=>{i&&(i.src=n[e],i.style.opacity=`1`)};if(n.length>1&&i){o?.classList.remove(`hidden`),s?.classList.remove(`hidden`);let e=window.setInterval(()=>{i&&(i.style.opacity=`0`,window.setTimeout(()=>{d=(d+1)%n.length,f(d)},280))},5e3);o?.addEventListener(`click`,t=>{t.stopPropagation(),clearInterval(e),d=(d-1+n.length)%n.length,f(d)}),s?.addEventListener(`click`,t=>{t.stopPropagation(),clearInterval(e),d=(d+1)%n.length,f(d)})}else o?.classList.add(`hidden`),s?.classList.add(`hidden`),f(0);l?.addEventListener(`click`,e=>{if(e.stopPropagation(),!(window.innerWidth<768))return;let t=n[d];if(!t)return;let r=document.createElement(`div`);r.className=`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-4 animate-fade-in`;let i=document.createElement(`img`);i.src=t,i.className=`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-zoom-in`;let a=document.createElement(`button`);a.className=`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white z-10 transition`,a.innerHTML=`<span class="material-symbols-outlined text-[28px]">close</span>`,a.setAttribute(`aria-label`,`Close preview`),r.appendChild(i),r.appendChild(a),document.body.appendChild(r),document.body.classList.add(`overflow-hidden`);let o=()=>{r.classList.add(`animate-fade-out`),i.classList.add(`animate-zoom-out`),setTimeout(()=>{r.remove(),document.body.classList.remove(`overflow-hidden`)},250)};a.addEventListener(`click`,o),r.addEventListener(`click`,e=>{e.target===r&&o()})});let p=e=>{if(e.startsWith(`data:`))return{"image/jpeg":`jpg`,"image/jpg":`jpg`,"image/png":`png`,"image/webp":`webp`,"image/gif":`gif`,"image/svg+xml":`svg`}[e.split(`;`)[0].split(`:`)[1]||``]??`jpg`;try{return(new URL(e).pathname.split(`.`).pop()?.toLowerCase()??``)||`jpg`}catch{return(e.split(`?`)[0].split(`.`).pop()?.toLowerCase()??``)||`jpg`}},m=e=>{if(e.startsWith(`data:`)){let[t,n]=e.split(`,`),r=t.split(`:`)[1].split(`;`)[0];if(t.includes(`;base64`)){let e=atob(n),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return Promise.resolve(new Blob([t],{type:r}))}else{let e=decodeURIComponent(n);return Promise.resolve(new Blob([e],{type:r}))}}return fetch(e).then(e=>e.blob())},h=async e=>{if(e.stopPropagation(),n.length===1){let e=n[0],t=p(e),i=await m(e),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`${r}.${t}`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}else{let e=(await R(async()=>{let{default:e}=await import(`./jszip.min-vlVusb8L.js`).then(e=>c(e.default,1));return{default:e}},[])).default,t=new e;await Promise.all(n.map(async(e,n)=>{let i=p(e),a=await m(e);t.file(`${r}_${n+1}.${i}`,a)}));let i=await t.generateAsync({type:`blob`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`${r}.zip`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}};a?.addEventListener(`click`,h),u?.addEventListener(`click`,async e=>{await h(e),u.classList.add(`downloaded`)})});let X=document.getElementById(`heroPhotoStack`);if(X){let e=Array.from(X.querySelectorAll(`[data-stack-card]`)),t=e.length;if(t>1){let n=0,r=()=>{e.forEach((e,n)=>{e.classList.remove(...Array.from({length:t},(e,t)=>`pos-${t}`))}),e.forEach((e,r)=>{let i=(r-n+t)%t;e.classList.add(`pos-${i}`)}),n=(n+1)%t};X.addEventListener(`click`,r),setInterval(r,3e3)}}},B=document.querySelector(`#app`);B.innerHTML=`
  <div id="loadingScreen" class="loading-screen">
    <div class="loading-screen__inner">
      <h1 class="loading-screen__title">My Portfolio</h1>
      <div class="loading-screen__bar">
        <span class="loading-screen__fill"></span>
      </div>
    </div>
  </div>

  <div aria-hidden="true" class="global-bg-layer">
    <div class="blob global-blob-1"></div>
    <div class="blob slow global-blob-2"></div>
    <div class="blob faster global-blob-3"></div>
    <div class="global-bg-overlay"></div>
  </div>

  ${h()}

  <main class="main-content">
    ${_()}
    ${v()}
    ${S()}
    ${D()}
    ${O()}
  </main>
`,window.addEventListener(`DOMContentLoaded`,()=>{z(),window.addEventListener(`load`,()=>{let e=document.getElementById(`loadingScreen`);e&&window.setTimeout(()=>{e.classList.add(`is-hidden`),window.setTimeout(()=>e.remove(),500)},1800)})});export{l as n,o as t};