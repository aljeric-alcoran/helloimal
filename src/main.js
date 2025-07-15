import setNavigation from './components/navigation.js';
import setFooter from './components/footer.js';
import { route } from './router.js';
window.route = route;

document.querySelector('#app').innerHTML = `
   <nav id="navigation" class="nav-container"></nav>
   <div id="main-content"></div>
   <footer id="footer" class="footer-container"></footer>
`;

setNavigation(document.getElementById('navigation'));
setFooter(document.getElementById('footer'));

