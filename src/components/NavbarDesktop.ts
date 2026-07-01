const whiteModeIcon  = new URL('../assets/icons/white_mode.png',  import.meta.url).href;
const darkModeIcon   = new URL('../assets/icons/dark_mode.png',   import.meta.url).href;

export const NavbarDesktop = (): string => {
  return `
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
              <img id="themeIcon" src="${whiteModeIcon}" alt="Toggle theme" class="w-6 h-6 object-contain">
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
};
