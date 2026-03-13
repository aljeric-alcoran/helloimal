import { getFullSizedImage, generateImageThumbnail } from '../../js/helpers.js';

export const stripHtml = (html) => html.replace(/<\/?[^>]+(>|$)/g, '').replace(/\s+/g, ' ').trim();

export const lazyImg = (url, w, h, maxDim, alt, extraClasses = '') => {
   const thumbnail = generateImageThumbnail(url, 30, 30);
   const fullSizedImage  = getFullSizedImage(url, w, h, maxDim);
   return `
      <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
           style="background-image:url('${thumbnail}'); background-size:cover; background-position:center;">
         <div class="absolute inset-0 backdrop-blur-xl"></div>
         <img src="${fullSizedImage}" alt="${alt}" loading="lazy" decoding="async"
              class="absolute inset-0 w-full h-full object-cover object-center
                  opacity-0 transition-opacity duration-700 ${extraClasses}"
              onload="this.style.opacity='1'; this.parentElement.classList.remove('animate-pulse');"/>
      </div>`;
};

export const buildFeaturedCard = (entry) => {
   const { url, w, h } = entry.coverImage;
   const preview = stripHtml(entry.content).slice(0, 120) + '…';
   return `
      <a href="${entry.href}" journal-link
         class="group relative flex flex-col justify-end
            rounded-2xl overflow-hidden shadow-lg
            min-h-[460px] lg:min-h-[560px]
            transition-transform duration-300 hover:-translate-y-1
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
         aria-label="Read ${entry.title}">

         <!-- image -->
         <div class="absolute inset-0" data-pulse>
            ${lazyImg(url, w, h, 900, entry.title)}
         </div>

         <!-- gradient overlay -->
         <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
            group-hover:from-black/85 transition-all duration-300"></div>

         <!-- meta chip -->
         <div class="absolute top-4 left-4 z-10">
            <span class="inline-flex items-center gap-1.5
               bg-[#3150CE]/90 text-white
               text-[10px] font-bold tracking-[0.12em] uppercase
               px-2.5 py-1 rounded-full backdrop-blur-sm"
            >
               <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957l-.573.699-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.31-.38a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
               </svg>
               ${entry.displayDate}
            </span>
         </div>

         <!-- text content -->
         <div class="relative z-10 p-5 md:p-6 flex flex-col gap-2">
            <p class="text-[10px] font-bold tracking-[0.16em] uppercase text-[#818cf8]">
               ${entry.readDuration}
            </p>
            <h3 class="text-lg font-bold text-white leading-snug group-hover:text-[#818cf8] transition-colors duration-200">
               ${entry.title}
            </h3>
            <p class="text-sm/6 text-white/60 line-clamp-2">${preview}</p>
            <span class="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#818cf8] group-hover:gap-2 transition-all duration-200">
               Read more
               <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 5 7 7-7 7"/>
               </svg>
            </span>
         </div>
      </a>`;
};

export const buildSmallCard = (entry) => {
   const { url, w, h } = entry.coverImage;
   const preview = stripHtml(entry.content).slice(0, 100) + '…';
   return `
      <a href="${entry.href}" journal-link
         class="group relative flex flex-col
            bg-white dark:bg-gray-800/60
            border border-gray-100 dark:border-gray-700/60
            rounded-2xl overflow-hidden shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(49,80,206,0.10)]
            dark:hover:shadow-[0_12px_40px_rgba(129,140,248,0.08)]"
         aria-label="Read ${entry.title}">

         <!-- image -->
         <div class="relative w-full aspect-[16/10] overflow-hidden shrink-0" data-pulse>
            ${lazyImg(url, w, h, 600, entry.title, 'group-hover:scale-105 transition-transform duration-500')}
         </div>

         <!-- date chip -->
         <div class="absolute top-3 left-3 z-10">
            <span class="inline-flex items-center gap-1
               bg-black/50 backdrop-blur-sm text-white/90
               text-[9px] font-semibold tracking-[0.1em] uppercase
               px-2 py-0.5 rounded-full"
            >
               ${entry.displayDate}
            </span>
         </div>

         <!-- body -->
         <div class="flex flex-col gap-2 p-4">
            <p class="text-[9px] font-bold tracking-[0.16em] uppercase text-[#3150CE] dark:text-[#818cf8]">
               ${entry.readDuration}
            </p>
            <h3 class="text-sm font-bold text-gray-900 dark:text-white leading-snug
               group-hover:text-[#3150CE] dark:group-hover:text-[#818cf8]
               transition-colors duration-200 line-clamp-1"
            >
               ${entry.title}
            </h3>
            <p class="text-xs/5 text-gray-500 dark:text-gray-400 line-clamp-2">${preview}</p>
            <span class="mt-auto pt-1 inline-flex items-center gap-1
               text-[11px] font-semibold text-[#3150CE] dark:text-[#818cf8]
               group-hover:gap-2 transition-all duration-200"
            >
               Read more
               <svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 5 7 7-7 7"/>
               </svg>
            </span>
         </div>
      </a>`;
};