const whiteModeIcon = new URL('../assets/icons/white_mode.png', import.meta.url).href;
const darkModeIcon  = new URL('../assets/icons/dark_mode.png',  import.meta.url).href;

export const Navbar = (): string => {
  return `
    <!-- Mobile Sidebar -->
    <div id="mobileSidebar" class="fixed inset-0 z-[80] hidden">
      <div id="sidebarBackdrop" class="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      <aside class="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-surface border-r border-border shadow-2xl p-5">
        <div class="flex items-center justify-between mb-8">
          <div class="text-xl font-extrabold tracking-tight">Nandito Setiyawan</div>
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

    <!-- Top Navbar -->
    <header id="topNav" class="fixed top-0 left-0 right-0 z-[70] transition-all duration-500">
      <div id="navShell" class="nav-shell">
        <div class="mx-auto max-w-7xl px-4 md:px-8 py-4 md:py-3 flex items-center justify-between gap-4">
          <a href="#hero" class="font-extrabold tracking-tight text-base md:text-[1.05rem] text-text shrink-0" data-nav-link data-target="hero">Nandito Setiyawan</a>

          <nav id="desktopNav" class="hidden md:flex nav-links text-sm font-semibold">
            <span id="navActivePill" class="nav-active-pill" aria-hidden="true"></span>
            <a class="nav-link nav-item active px-4 py-2 rounded-full" href="#hero" data-nav-link data-target="hero">Hero</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#about" data-nav-link data-target="about">About</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#projects" data-nav-link data-target="projects">Projects</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#achievements" data-nav-link data-target="achievements">Achievement</a>
            <a class="nav-link nav-item px-4 py-2 rounded-full" href="#contact" data-nav-link data-target="contact">Contact</a>
          </nav>

          <div class="flex items-center gap-2 shrink-0">
            <button id="themeToggle" class="w-11 h-11 rounded-full border border-border bg-white/70 flex items-center justify-center hover:bg-surface transition" aria-label="Toggle theme">
              <img id="themeIcon" src="${whiteModeIcon}" alt="Toggle theme" class="w-6 h-6 object-contain">
            </button>
            <!-- Mobile burger (only on mobile inside navbar) -->
            <button id="menuBtn" class="md:hidden w-11 h-11 rounded-full border border-border bg-surface/90 flex items-center justify-center shadow-sm" aria-label="Open menu">
              <span class="material-symbols-outlined text-[22px]">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile floating burger: only shown on mobile when navbar is hidden after scroll -->
    <button id="mobileFloatingBurger" class="floating-burger md:hidden" aria-label="Open menu">
      <span class="material-symbols-outlined text-[26px] text-text">menu</span>
    </button>
  `;
};
