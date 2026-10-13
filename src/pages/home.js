const template = `
   <div id="main-banner"></div>
   <div id="work" class="border-t border-line"></div>
   <div id="experience"></div>
   <div id="biography" class="border-t border-line"></div>
   <div id="technical-skills" class="bg-sunken"></div>
   <div id="contact" class="border-t border-line"></div>
`

import setBiographySection from '../components/home/biography.js';
import setContactSection from '../components/home/contact.js';
import setExperienceSummarySection from '../components/home/experienceSummary.js';
import setHeroSection from '../components/home/hero.js';
import setSelectedWorkSection from '../components/home/selectedWork.js';
import setTechnicalSkillsSection from '../components/home/technicalSkills.js';

const setHomePage = (container) => {
   container.innerHTML = template;

   setHeroSection(document.getElementById('main-banner'));
   setSelectedWorkSection(document.getElementById('work'));
   setExperienceSummarySection(document.getElementById('experience'));
   setBiographySection(document.getElementById('biography'));
   setTechnicalSkillsSection(document.getElementById('technical-skills'));
   setContactSection(document.getElementById('contact'));
}

export default setHomePage;
