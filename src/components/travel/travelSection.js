import mapPin from '@phosphor-icons/core/assets/regular/map-pin.svg?raw';
import { icon } from '../../js/icons.js';
import { buildFeaturedCard, buildSmallCard } from './setJournals.js';

// One destination: heading + lead story + the remaining stories as compact rows.
// Odd sections mirror the layout so consecutive destinations don't repeat.
export const buildDestinationSection = (destination, index) => {
   const { id, subject, location, description, contents } = destination;
   const [featured, ...rest] = contents;
   const mirrored = index % 2 === 1;

   return `
      <section id="destination-${id}" data-destination="${id}" aria-labelledby="destination-${id}-title"
               class="shell py-16 md:py-24">

         <header class="max-w-3xl" data-reveal>
            <h2 id="destination-${id}-title" class="text-title text-ink">
               ${subject}
            </h2>
            <p class="mt-4 inline-flex items-center gap-1.5 eyebrow">
               ${icon(mapPin, 'size-4')}
               ${location}
            </p>
            <p class="mt-5 max-w-[65ch] leading-relaxed text-muted">
               ${description.replace(/\s+/g, ' ').trim()}
            </p>
         </header>

         <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-10 lg:gap-14">
            <div class="md:col-span-7 ${mirrored ? 'md:order-2' : ''}" data-reveal>
               ${buildFeaturedCard(featured)}
            </div>

            <ul class="flex flex-col gap-8 md:col-span-5 md:justify-center ${mirrored ? 'md:order-1' : ''}">
               ${rest.map((entry, i) => `
                  <li data-reveal style="--i:${i + 1}">
                     ${buildSmallCard(entry)}
                  </li>
               `).join('')}
            </ul>
         </div>
      </section>`;
};
