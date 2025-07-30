const template = `
   <div id="travel-banner" class="main-banner-container"></div>
   <div id="travel-one" class="bg-gray-100 dark:bg-gray-800"></div>
`
import setTravelBannerSection from '../components/travel/banner.js';
import setTravelOneSection from '../components/travel/travelOne.js';

const setTravelPage = (container) => {
   container.innerHTML = template;

   setTravelBannerSection(document.getElementById('travel-banner'));
   setTravelOneSection(document.getElementById('travel-one'));
}

export default setTravelPage;