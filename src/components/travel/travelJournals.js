import { journals } from '../../data/travel-data.js';
import { buildDestinationSection, initDestinations, observeReveal } from './travelSection.js';

const divider = `
   <div class="max-w-screen-xl mx-auto px-6 md:px-8">
      <hr class="border-gray-200 dark:border-gray-700/60" />
   </div>`;

const setTravelJournals = (element) => {
   const sections = journals.map((dest, i) => buildDestinationSection(dest, i));
   element.innerHTML = `
      <div>
         ${sections.map(({ html }, i) => `
            ${i > 0 ? divider : ''}
            ${html}
         `).join('')}
      </div>`;

   observeReveal(element);
   initDestinations(element, sections);
};

export default setTravelJournals;