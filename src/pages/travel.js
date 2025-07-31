const template = `
   <div id="travel-banner" class="main-banner-container"></div>
   <div id="travel-one" class="bg-gray-100 dark:bg-gray-800"></div>
   <div id="travel-two" class="bg-white dark:bg-gray-900"></div>
`
import setTravelBannerSection from '../components/travel/banner.js';
import setTravelOneSection from '../components/travel/travelOne.js';
import setTravelTwoSection from '../components/travel/travelTwo.js';

const setTravelPage = (container) => {
   container.innerHTML = template;

   setTravelBannerSection(document.getElementById('travel-banner'));
   setTravelOneSection(document.getElementById('travel-one'));
   setTravelTwoSection(document.getElementById('travel-two'));
}

export default setTravelPage;