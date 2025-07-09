import setFooter from './components/footer.js';
import setNavigation from './components/navigation.js';

document.querySelector('#app').innerHTML = `
   <nav id="navigation" class="nav-container"></nav>
   <footer id="footer" class="footer-container"></footer>
`;

setNavigation(document.getElementById('navigation'));
setFooter(document.getElementById('footer'));

