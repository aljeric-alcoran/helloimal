import setNavigation from './components/navigation.js';
import setFooter from './components/footer.js';
import setScrollToTop from './components/scrollTop.js';
import { handleRoute } from './router.js';
import setReveal from './js/reveal.js';

document.querySelector('#app').innerHTML = `
   <div class="relative flex min-h-dvh flex-col">
      <a href="#main-content"
         class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink">
         Skip to content
      </a>
      <nav id="navigation" class="nav-container"></nav>
      <div id="main-content" tabindex="-1" class="flex-1 outline-none"></div>
      <footer id="footer" class="footer-container"></footer>
   </div>
`;

setNavigation(document.getElementById('navigation'));
setFooter(document.getElementById('footer'));
setScrollToTop(document.getElementById('footer'));
setReveal(document.getElementById('main-content'));

handleRoute(window.location.pathname);
