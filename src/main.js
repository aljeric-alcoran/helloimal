import setNavigation from './components/navigation.js';
import setFooter from './components/footer.js';
import setScrollToTop from './components/scrollTop.js';
import { handleRoute } from './router.js';

document.querySelector('#app').innerHTML = `
   <div class="relative">
      <nav id="navigation" class="nav-container"></nav>
      <div id="main-content"></div>
      <footer id="footer" class="footer-container"></footer>
   </div>
`;

setNavigation(document.getElementById('navigation'));
setFooter(document.getElementById('footer'));
setScrollToTop(document.getElementById('footer'));

handleRoute(window.location.pathname);


