import { PROJECTS } from '../constants/projects-data';
export const sliderState = {};

export const buildCard = (project, index) => {
   const { id, name, description, images, tools, status, url, year } = project;
   const hasMultiple = images.length > 1;
   const isProduction = status === 'released';

   const statusBadge = isProduction
      ? `<span class="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase
             bg-green-500/10 dark:bg-green-400/10 text-green-600 dark:text-green-400
            border border-green-500/20 dark:border-green-400/20
            px-2.5 py-1 rounded-full"
         >
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse"></span>
            ${status}
         </span>`
      : `<span class="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase
            bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400
            border border-amber-500/20 dark:border-amber-400/20
            px-2.5 py-1 rounded-full"
         >
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400"></span>
            ${status}
         </span>`;

   const toolChips = tools.map(t =>
      `<span class="text-[11px] font-medium
         bg-[#3150CE]/8 dark:bg-[#818cf8]/10
         text-[#3150CE] dark:text-[#818cf8]
         border border-[#3150CE]/15 dark:border-[#818cf8]/20
         px-2.5 py-1 rounded-md whitespace-nowrap"
      >
         ${t}
      </span>`
   ).join('');

   const sliderDots = hasMultiple
      ? `${images.map((_, i) =>
            `<button type="button"
               data-project="${id}" data-index="${i}"
               class="slider-dot w-1.5 h-1.5 rounded-full transition-all duration-200
                     ${i === 0
                        ? 'bg-[#3150CE] dark:bg-[#818cf8] w-4'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}"
               aria-label="Go to slide ${i + 1}">
            </button>`
         ).join('')}`
      : '';

   const sliderImages = images.map((src, i) =>
      `<img src="${src}"
            alt="${name} screenshot ${i + 1}"
            width="800" height="450"
            loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"
            class="slider-img absolute inset-0 w-full h-full object-cover
               transition-opacity duration-500
               ${i === 0 ? 'opacity-100' : 'opacity-0'}"
            data-project="${id}" data-index="${i}" />`
   ).join('');

   const prevNextBtns = hasMultiple
      ? `<button type="button" data-project="${id}" data-dir="-1"
            class="slider-btn absolute left-2 top-1/2 -translate-y-1/2 z-10
               w-7 h-7 flex items-center justify-center
               bg-black/40 hover:bg-black/60 text-white rounded-full
               opacity-0 group-hover:opacity-100 transition-opacity duration-200
               focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous image"
         >
            <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m15 19-7-7 7-7"/>
            </svg>
         </button>
         <button type="button" data-project="${id}" data-dir="1"
            class="slider-btn absolute right-2 top-1/2 -translate-y-1/2 z-10
               w-7 h-7 flex items-center justify-center
               bg-black/40 hover:bg-black/60 text-white rounded-full
               opacity-0 group-hover:opacity-100 transition-opacity duration-200
               focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next image"
         >
            <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 5 7 7-7 7"/>
            </svg>
         </button>
         <span class="absolute top-2 right-2 z-10
            text-[10px] font-semibold bg-black/50 text-white/90
            px-2 py-0.5 rounded-full" id="counter-${id}"
         >
            1 of ${images.length}
         </span>`
      : '';

   const liveBtn = (url !== null)
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5
                   bg-[#3150CE] hover:bg-[#2540b0] text-white
                   text-xs font-bold tracking-[0.08em] uppercase
                   px-4 py-2 rounded-full
                   transition-all duration-200
                   hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(49,80,206,0.4)]
                   focus:outline-none focus:ring-2 focus:ring-[#3150CE]/50">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
            </svg>
            View Live
         </a>`
      : '';

   // stagger delay per card
   const delay = Math.min(index * 0.1, 0.5);

   return `
      <article class="proj-card group
                  bg-white dark:bg-gray-800/50
                  border border-gray-100 dark:border-gray-700/60
                  rounded-xl shadow-sm overflow-hidden
                  opacity-0
                  transition-all duration-300 ease-out
                  dark:hover:shadow-md"
              style="animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) ${delay}s both;"
              data-id="${id}">

         <!-- Image slider -->
         <div class="relative w-full aspect-video bg-gray-100 dark:bg-gray-700/60 overflow-hidden">
            ${sliderImages}
            ${prevNextBtns}
         </div>

         <!-- Dots -->
         <div class="flex items-center justify-center h-2 gap-1.5 mt-3" id="dots-${id}">
            ${sliderDots}
         </div>

         <!-- Body -->
         <div class="p-5 md:p-6 flex flex-col gap-4">

            <!-- Header row -->
            <div class="flex items-start justify-between gap-3">
               <div class="flex-1 min-w-0">
                  <h3 class="font-bold text-base text-gray-900 dark:text-white leading-snug truncate">${name}</h3>
                  <span class="text-[11px] font-medium text-gray-400 dark:text-gray-500">${year}</span>
               </div>
               ${statusBadge}
            </div>

            <!-- Description -->
            <div>
               <p class="desc-text text-sm/6 text-gray-500 dark:text-gray-400 line-clamp-3 transition-[max-height,opacity] duration-300">${description}</p>
               <button type="button"
                  class="desc-toggle mt-1 text-xs font-semibold text-[#3150CE] dark:text-[#818cf8] hover:underline focus:outline-none transition-colors duration-150"
                  data-expanded="false">
                  Read more...
               </button>
            </div>

            <!-- Tools -->
            <div>
               <p class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 dark:text-gray-500 mb-2">Built with</p>
               <div class="flex flex-wrap gap-1.5">${toolChips}</div>
            </div>

            <!-- Footer -->
            <div class="flex items-start justify-between pt-1 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
               <span class="text-[11px] text-gray-400 dark:text-gray-500 font-medium mt-2">
                  ${images.length} screenshot${images.length !== 1 ? 's' : ''}
               </span>
               ${liveBtn}
            </div>

         </div>
      </article>`;
};

export const goToSlide = (projectId, nextIndex) => {
   const project = PROJECTS.find(p => p.id === projectId);
   if (!project) return;

   const total   = project.images.length;
   const current = sliderState[projectId] ?? 0;
   if (current === nextIndex) return;

   // Swap images
   const imgs = document.querySelectorAll(`.slider-img[data-project="${projectId}"]`);
   imgs.forEach((img, i) => {
      img.classList.toggle('opacity-100', i === nextIndex);
      img.classList.toggle('opacity-0', i !== nextIndex);
   });

   // Update dots
   const dots = document.querySelectorAll(`.slider-dot[data-project="${projectId}"]`);
   dots.forEach((dot, i) => {
      dot.classList.toggle('bg-[#3150CE]', i === nextIndex);
      dot.classList.toggle('dark:bg-[#818cf8]', i === nextIndex);
      dot.classList.toggle('w-4', i === nextIndex);
      dot.classList.toggle('bg-gray-300', i !== nextIndex);
      dot.classList.toggle('dark:bg-gray-600', i !== nextIndex);
   });

   // Update counter
   const counter = document.getElementById(`counter-${projectId}`);
   if (counter) counter.textContent = `${nextIndex + 1} of ${total}`;
   sliderState[projectId] = nextIndex;
};

export const startAutoplay = (projectId, total) => {
   if (total <= 1) return;
   setInterval(() => {
      const current = sliderState[projectId] ?? 0;
      goToSlide(projectId, (current + 1) % total);
   }, 5000);
};