import setFooter from './components/footer.js';
import setMainBanner from './components/mainBanner.js';
import setNavigation from './components/navigation.js';

document.querySelector('#app').innerHTML = `
   <nav id="navigation" class="nav-container"></nav>
   <div id="main-banner" class="main-banner-container"></div>
   <footer id="footer" class="footer-container"></footer>
`;

setNavigation(document.getElementById('navigation'));
setMainBanner(document.getElementById('main-banner'));
setFooter(document.getElementById('footer'));

