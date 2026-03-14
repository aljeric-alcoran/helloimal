import { journals } from '../data/travel-data.js';
import imageSliderModal from './modal/imageSlider.js';
import { getFullSizedImage, generateImageThumbnail } from '../js/helpers.js';

const blurUpImg = (url, w, h, maxDim, alt, cls = '') => {
   const thumbnail = generateImageThumbnail(url, 30, 30);
   const fullSizedImage  = getFullSizedImage(url, w, h, maxDim);
   return `
      <div class="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800"
           style="background-image:url('${thumbnail}');background-size:cover;background-position:center;">
         <div class="absolute inset-0 backdrop-blur-xl"></div>
         <img src="${fullSizedImage}" alt="${alt}" loading="lazy" decoding="async"
              class="absolute inset-0 w-full h-full object-cover object-center
                     opacity-0 transition-opacity duration-700 ${cls}"
              onload="this.style.opacity='1'; this.parentElement.classList.remove('animate-pulse');" />
      </div>`;
};

const template = `
   <article class="min-h-screen text-gray-900 dark:text-white pt-16 md:pt-20">

      <!-- Hero banner -->
      <div id="jt-banner" class="relative w-full max-w-screen-lg mx-auto h-[60vh] md:h-[60vh] overflow-hidden bg-gray-200 dark:bg-gray-800">
         <!-- image injected by JS -->

         <!-- gradient overlay -->
         <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none"></div>

         <!-- hero text -->
         <div class="absolute bottom-0 left-0 right-0 z-10 max-w-screen-md mx-auto px-6 md:px-8 pb-10 md:pb-14">
            <span id="jt-category"
               class="inline-flex items-center mb-4
                      bg-[#3150CE]/90 dark:bg-[#3150CE]/80 text-white
                      text-[10px] font-bold tracking-[0.14em] uppercase
                      px-3 py-1 rounded-full backdrop-blur-sm">
            </span>
            <h1 id="jt-title" class="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight mb-2"></h1>

            <p id="jt-series" class="text-sm font-semibold text-[#818cf8] mb-4"></p>

            <div id="jt-meta" class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60 font-medium"></div>
         </div>
      </div>

      <!-- Body -->
      <div class="max-w-screen-md mx-auto px-6 md:px-8">

         <!-- article content -->
         <div id="jt-content" class="prose prose-sm md:prose-base max-w-none text-sm md:text-base text-gray-700 dark:text-gray-300 leading-7 space-y-5 py-10 md:py-14 [&>p]:text-gray-700 dark:[&>p]:text-gray-300">
         </div>

         <!-- divider -->
         <hr class="border-gray-200 dark:border-gray-700/60" />

         <!-- Gallery -->
         <section class="py-10 md:py-14">
            <div class="flex items-center gap-3 mb-6">
               <div class="w-8 h-[3px] bg-[#3150CE] rounded-full"></div>
               <h2 class="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                  Photo Gallery
               </h2>
            </div>

            <div id="jt-gallery" class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            </div>
         </section>
      </div>

      <!-- Image modal -->
      <div id="imageModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/95 backdrop-blur-md">
      </div>

   </article>
`;

const buildGallery = (gallery) => {
   const container = document.getElementById('jt-gallery');

   gallery.forEach(({ src, alt, w, h }, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'group relative aspect-square overflow-hidden rounded-xl cursor-pointer';

      const inner = document.createElement('div');
      inner.className = 'relative w-full h-full';
      inner.innerHTML = blurUpImg(src, w, h, 700, alt, 'group-hover:scale-105 transition-transform duration-500');

      // hover overlay
      const overlay = document.createElement('div');
      overlay.className = `absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center`;
      overlay.innerHTML = `
         <svg class="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-3.5-3.5M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"/>
         </svg>`;

      inner.appendChild(overlay);
      wrapper.appendChild(inner);

      // open modal on click
      wrapper.addEventListener('click', () => imageSliderModal(gallery, index));

      container.appendChild(wrapper);
   });
};

const setJournalTemplate = (container, destinationId, spotId) => {
   container.innerHTML = template;

   const destination = journals.find(j => j.id === destinationId);
   const spot = destination?.contents.find(p => p.id === spotId);
   if (!spot) return;

   const { url, w, h } = spot.coverImage;

   // Hero banner image
   document.getElementById('jt-banner').insertAdjacentHTML(
      'afterbegin', blurUpImg(url, w, h, 1400, spot.title)
   );

   // Text fields
   document.getElementById('jt-category').textContent = spot.category;
   document.getElementById('jt-title').textContent    = spot.title;
   document.getElementById('jt-series').textContent   = destination.subject;
   document.getElementById('jt-content').innerHTML    = spot.content;

   document.getElementById('jt-meta').innerHTML = `
      <span class="inline-flex items-center gap-1">
         <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"/>
         </svg>
         ${spot.author}
      </span>
      <span class="text-white/30">·</span>
      <span class="inline-flex items-center gap-1">
         <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
         </svg>
         ${spot.displayDate}
      </span>
      <span class="text-white/30">·</span>
      <span class="inline-flex items-center gap-1">
         <svg class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
         </svg>
         ${spot.readDuration}
      </span>`;

   buildGallery(spot.gallery);
};

export default setJournalTemplate;