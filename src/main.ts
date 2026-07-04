import './styles/global.css';
import './styles/components.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Achievement } from './components/Achievement';
import { Contact } from './components/Contact';
import { initApp } from './utils/dom';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
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

  ${Navbar()}

  <main class="main-content">
    ${Hero()}
    ${About()}
    ${Projects()}
    ${Achievement()}
    ${Contact()}
  </main>
`;

window.addEventListener('DOMContentLoaded', () => {
  initApp();

  window.addEventListener('load', () => {
    const loading = document.getElementById('loadingScreen');
    if (!loading) return;
    window.setTimeout(() => {
      loading.classList.add('is-hidden');
      window.setTimeout(() => loading.remove(), 500);
    }, 1800);
  });
});
