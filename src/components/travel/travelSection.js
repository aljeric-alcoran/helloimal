import { buildFeaturedCard, buildSmallCard } from './setJournals.js';
const isDesktop = () => window.innerWidth >= 1024;

const renderCards = (sectionEl, contents) => {
   const [featured, ...rest] = contents;
   const delay = (i) => `${0.1 + i * 0.08}s`;

   const gridEl = sectionEl.querySelector('[data-cards-grid]');

   if (isDesktop()) {
      gridEl.innerHTML = rest.map((entry, i) => `
         <div data-reveal style="animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) ${delay(i)} both;">
            ${buildSmallCard(entry)}
         </div>`
      ).join('');

   } else {
      gridEl.innerHTML = contents.map((entry, i) => `
         <div data-reveal style="animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) ${delay(i)} both;">
            ${buildSmallCard(entry)}
         </div>`
      ).join('');
   }

   observeReveal(sectionEl);
};

// ── Build a single destination section ───────────────────────────────────────
export const buildDestinationSection = (destination, index) => {
   const { id, subject, location, description, contents } = destination;
   const [featured, ...rest] = contents;
   
   const heading = `
      <div data-reveal style="animation: fadeUp 0.5s ease 0s both;">
         <div class="flex items-center gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#3150CE] dark:text-[#818cf8]">
               <svg class="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957l-.573.699-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.31-.38a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
               </svg>
               ${location}
            </span>
         </div>

         <h2 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            ${subject}
         </h2>

         <div class="w-8 h-[3px] bg-[#3150CE] rounded-full mt-3 origin-left" style="animation: scaleX 0.5s ease 0.15s both;"></div>
         <p class="text-sm/7 text-gray-500 dark:text-gray-400 mt-4">
            ${description.trim()}
         </p>
      </div>`;

   const html = `
      <section id="destination-${id}" class="max-w-screen-xl mx-auto px-6 md:px-8 py-14 md:py-20" data-destination="${id}">
         <div class="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] gap-6 md:gap-8">

            <!-- featured card slot (desktop only) -->
            <div class="hidden lg:block">
               <div data-reveal style="animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.05s both;">
                  ${buildFeaturedCard(featured)}
               </div>
            </div>

            <!-- small cards grid -->
            <div class="flex flex-col gap-5 justify-between">
               ${heading}
               <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" data-cards-grid></div>
            </div>
         </div>
      </section>`;
   return { html, contents, id };
};

export const observeReveal = (container) => {
   const items = container.querySelectorAll('[data-reveal]');
   const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (!entry.isIntersecting) return;
         entry.target.style.animationPlayState = 'running';
         obs.unobserve(entry.target);
      });
   }, { threshold: 0.1 });
   items.forEach(el => {
      el.style.animationPlayState = 'paused';
      obs.observe(el);
   });
};

export const initDestinations = (container, destinations) => {
   destinations.forEach(({ contents, id }) => {
      const sectionEl = container.querySelector(`[data-destination="${id}"]`);
      if (sectionEl) renderCards(sectionEl, contents);
   });

   // Re-render on resize (debounced), only when crossing the lg breakpoint
   let wasDesktop = isDesktop();
   let timer;
   window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         const nowDesktop = isDesktop();
         if (nowDesktop === wasDesktop) return;
         wasDesktop = nowDesktop;
         destinations.forEach(({ contents, id }) => {
            const sectionEl = container.querySelector(`[data-destination="${id}"]`);
            if (sectionEl) renderCards(sectionEl, contents);
         });
      }, 150);
   });
};