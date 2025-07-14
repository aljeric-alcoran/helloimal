import setBiographySection from './components/biography.js';
import setContactSection from './components/contact.js';
import setFooter from './components/footer.js';
import setHeroSection from './components/hero.js';
import setNavigation from './components/navigation.js';
import setTechnicalSkillsSection from './components/technicalSkills.js';

document.querySelector('#app').innerHTML = `
   <nav id="navigation" class="nav-container"></nav>
   <div id="main-banner" class="main-banner-container"></div>
   <div id="biography" class="bg-gray-100 dark:bg-gray-800"></div>
   <div id="technical-skills" class="bg-white dark:bg-gray-900"></div>
   <div id="contact" class="bg-gray-100 dark:bg-gray-800"></div>
   <footer id="footer" class="footer-container"></footer>
`;

setNavigation(document.getElementById('navigation'));
setHeroSection(document.getElementById('main-banner'));
setBiographySection(document.getElementById('biography'));
setTechnicalSkillsSection(document.getElementById('technical-skills'));
setContactSection(document.getElementById('contact'));
setFooter(document.getElementById('footer'));

