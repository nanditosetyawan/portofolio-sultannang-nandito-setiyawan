const burgerLightIcon = new URL('../assets/icons/burger_light.png', import.meta.url).href;
const burgerDarkIcon  = new URL('../assets/icons/burger_dark.png',  import.meta.url).href;

export const NavbarMobile = (): string => {
  return `
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
          <img id="mobileBurgerIcon" src="${burgerLightIcon}" alt="Menu"
               data-light="${burgerLightIcon}" data-dark="${burgerDarkIcon}"
               class="w-6 h-6 object-contain">
        </button>
      </div>
    </header>
  `;
};
