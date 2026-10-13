import { journals } from '../../data/travel-data.js';
import { buildDestinationSection } from './travelSection.js';

const setTravelJournals = (element) => {
   element.innerHTML = `
      <div class="divide-y divide-line">
         ${journals.map((dest, i) => buildDestinationSection(dest, i)).join('')}
      </div>`;
};

export default setTravelJournals;
