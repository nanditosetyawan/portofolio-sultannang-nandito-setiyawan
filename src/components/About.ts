import '../styles/about.css';

export const About = (): string => `
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
`;