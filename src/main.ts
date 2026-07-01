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

  <div aria-hidden="true" class="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div class="blob" style="top:-8%; left:-10%; width:34rem; height:34rem; background: radial-gradient(circle at 30% 30%, rgba(137,215,183,.32), rgba(137,215,183,.08) 50%, transparent 72%);"></div>
    <div class="blob slow" style="top:12%; right:-12%; width:28rem; height:28rem; background: radial-gradient(circle at 30% 30%, rgba(66,132,117,.20), rgba(66,132,117,.05) 56%, transparent 74%);"></div>
    <div class="blob faster" style="bottom:8%; left:-10%; width:30rem; height:30rem; background: radial-gradient(circle at 30% 30%, rgba(137,215,183,.18), rgba(137,215,183,.04) 52%, transparent 76%);"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,250,243,.0),rgba(255,250,243,.2))]"></div>
  </div>

  ${Navbar()}

  <main class="pt-[4.25rem] md:pt-28">
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
