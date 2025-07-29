const template = `
   <div id="main-banner" class="main-banner-container"></div>
   <div id="biography" class="bg-gray-100 dark:bg-gray-800"></div>
   <div id="technical-skills" class="bg-white dark:bg-gray-900"></div>
   <div id="contact" class="bg-gray-100 dark:bg-gray-800"></div>
`

import setBiographySection from '../components/home/biography.js';
import setContactSection from '../components/home/contact.js';
import setHeroSection from '../components/home/hero.js';
import setTechnicalSkillsSection from '../components/home/technicalSkills.js';

const setHomePage = (container) => {
   container.innerHTML = template;

   setHeroSection(document.getElementById('main-banner'));
   setBiographySection(document.getElementById('biography'));
   setTechnicalSkillsSection(document.getElementById('technical-skills'));
   setContactSection(document.getElementById('contact'));
}

export default setHomePage;