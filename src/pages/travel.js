const template = `
   <div id="travel-banner"></div>
   <div id="travel-journals" class="scroll-mt-16 border-t border-line"></div>
`;

import setTravelBannerSection from '../components/travel/banner.js';
import setTravelJournals from '../components/travel/travelJournals.js';

const setTravelPage = (container) => {
   container.innerHTML = template;

   setTravelBannerSection(document.getElementById('travel-banner'));
   setTravelJournals(document.getElementById('travel-journals'));
};

export default setTravelPage;
