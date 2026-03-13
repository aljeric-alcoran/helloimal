const template = `
   <div id="travel-banner" class="main-banner-container"></div>
   <div id="travel-journals" class="bg-transparent"></div>
`;

import setTravelBannerSection from '../components/travel/banner.js';
import setTravelJournals from '../components/travel/travelJournals.js';

const setTravelPage = (container) => {
   container.innerHTML = template;

   setTravelBannerSection(document.getElementById('travel-banner'));
   setTravelJournals(document.getElementById('travel-journals'));
};

export default setTravelPage;