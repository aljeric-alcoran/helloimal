const template = `
   <div id="travel-banner" class="main-banner-container"></div>
`
import setTravelBannerSection from '../components/travel/banner.js';

const setTravelPage = (container) => {
   container.innerHTML = template;

   setTravelBannerSection(document.getElementById('travel-banner'));
}

export default setTravelPage;