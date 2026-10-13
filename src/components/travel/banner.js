import arrowDown from '@phosphor-icons/core/assets/regular/arrow-down.svg?raw';
import { icon } from '../../js/icons.js';
import { photo } from './setJournals.js';

const CLD = 'https://res.cloudinary.com/docdldire/image/upload';

const PHOTOS = {
   lead: {
      url: `${CLD}/v1773221731/photo_2026-03-11_17-34-03_pteewl.jpg`,
      alt: 'Al on a wooden balcony overlooking green hills and the sea',
   },
   hills: {
      url: `${CLD}/v1754547307/2024_06_01_14_35_IMG_4303_hvytr6.jpg`,
      alt: 'Al at a viewing deck above the Chocolate Hills in Bohol',
   },
   tarsier: {
      url: `${CLD}/v1754370743/2024_06_01_13_26_IMG_4240_mnxtj8.jpg`,
      alt: 'Al beside the Philippine Tarsier Foundation sign in Bohol',
   },
};

const template = `
   <section aria-labelledby="travel-title"
            class="shell grid min-h-[calc(100dvh-4rem)] grid-cols-1 items-center gap-12 py-12
                   lg:grid-cols-12 lg:gap-10 lg:py-16">

      <!-- Copy -->
      <div class="lg:col-span-5">
         <p class="eyebrow motion-safe:animate-fade-up">
            Travel journal, Philippines
         </p>
         <h1 id="travel-title"
             class="mt-5 text-display text-ink
                    motion-safe:animate-fade-up motion-safe:[animation-delay:80ms]">
            Travel. Explore. Enjoy.
         </h1>
         <p class="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted
                   motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
            Capturing one destination at a time, from sun-soaked islands to mountain fog.
            Every trip is a story worth telling.
         </p>
         <div class="mt-9 motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
            <a href="#travel-journals" class="btn btn-primary">
               Read the journals
               ${icon(arrowDown, 'size-4')}
            </a>
         </div>
      </div>

      <!-- Photos: one tall lead, two stacked -->
      <div class="grid h-[26rem] grid-cols-[1.25fr_1fr] grid-rows-2 gap-3 sm:h-[32rem] sm:gap-4
                  lg:col-span-7 lg:h-[min(72dvh,40rem)]">
         <div class="row-span-2 overflow-hidden rounded-2xl bg-sunken
                     motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
            ${photo(PHOTOS.lead.url, {
               ratio: 3 / 4,
               widths: [480, 720, 960],
               sizes: '(min-width: 1024px) 32vw, 55vw',
               alt: PHOTOS.lead.alt,
               eager: true,
            })}
         </div>
         <div class="overflow-hidden rounded-2xl bg-sunken
                     motion-safe:animate-fade-up motion-safe:[animation-delay:220ms]">
            ${photo(PHOTOS.hills.url, {
               ratio: 4 / 3,
               widths: [400, 640, 800],
               sizes: '(min-width: 1024px) 26vw, 45vw',
               alt: PHOTOS.hills.alt,
               eager: true,
               cls: 'object-[50%_35%]',
            })}
         </div>
         <div class="overflow-hidden rounded-2xl bg-sunken
                     motion-safe:animate-fade-up motion-safe:[animation-delay:320ms]">
            ${photo(PHOTOS.tarsier.url, {
               ratio: 4 / 3,
               widths: [400, 640, 800],
               sizes: '(min-width: 1024px) 26vw, 45vw',
               alt: PHOTOS.tarsier.alt,
               eager: true,
            })}
         </div>
      </div>
   </section>
`;

const setTravelBannerSection = (element) => {
   element.innerHTML = template;

   // Scroll in place: following the #hash would fire popstate and re-render the route
   element.querySelector('a[href="#travel-journals"]')?.addEventListener('click', (e) => {
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('travel-journals')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
   });
};

export default setTravelBannerSection;
