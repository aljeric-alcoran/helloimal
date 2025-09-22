const template = `
   <div class="max-w-screen-md mx-auto pt-20 md:pt-24 xl:pb-24 xl:pt-24 text-gray-900 dark:text-white">
      <div class="space-y-1 my-8 px-4 md:px-8">
         <span id="category" class="uppercase rounded-sm bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2 py-0.5 dark:bg-gray-700 dark:text-blue-400 border border-blue-400"></span>
         <h1 id="title" class="text-2xl font-bold md:py-0 mt-4"></h1>
         <h2 id="blog" class="text-lg mb-6 md:py-0 font-semibold"></h2>
         <div class="flex items-center gap-4">
            <p id="info" class="text-sm text-gray-600 dark:text-gray-400 text-balance flex flex-wrap md:flex-nowrap items-center gap-2"></p>
         </div>
      </div>
      <div class="lg:px-8 w-full h-[500px]" id="image-banner" >
         
      </div>
      <div class="px-4 md:px-8 py-4">
         <div id="content" class="text-base/7 space-y-4 mt-4"></div>
         <div class="md:pb-16">
            <h2 class="text-lg font-semibold mt-8">Photo Gallery</h2>
            <div id="gallery" class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
               <!-- Content here is set by setGallery() -->
            </div>
         </div>
      </div>
      <div id="imageModal" class="fixed inset-0 bg-black/80 bg-opacity-90 hidden z-50 flex items-center justify-center backdrop-blur-md">
      </div>
   </div>
`
import { journals } from "../js/journals";
import imageSliderModal from './modal/imageSlider.js';
import { customImageUrlOptimizer, getOptimizedImageUrl } from '../js/helpers.js'

const setJournalTemplate = (container, journalId) => {
   container.innerHTML = template;

   const journal = journals.find(j => j.id === journalId);
   document.getElementById('category').textContent = `${journal.category}`;
   document.getElementById('title').textContent = journal.title;
   document.getElementById('blog').textContent = journal.blog;
   document.getElementById('content').innerHTML = journal.content;
   document.getElementById('info').innerHTML = `
      <div>✍🏻 By <span class="font-semibold"> ${journal.author}</span></div> |  <span>🕓 ${journal.date}</span>  |  <span>👁️ ${journal.readDuration}</span>
   `;
   setGallery(journal.gallery);

   const banner = document.getElementById('image-banner');
   banner.innerHTML = `
      <div 
         class="relative w-full h-full lg:rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 animate-pulse"
         style="
            background-image: url('${ customImageUrlOptimizer(journal.coverImage.url, 20, 20) }');
            background-size: cover;
            background-position: center;
         "
      >
         <div class="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

         <img 
            src="${ getOptimizedImageUrl(journal.coverImage.url, journal.coverImage.w, journal.coverImage.h) }"
            alt="${journal.id}"
            loading="lazy"
            class="absolute inset-0 w-full h-[500px] object-cover object-center opacity-0 transition-opacity duration-700 shadow"
            onload="this.style.opacity='1'; this.parentElement.classList.remove('animate-pulse');"
         />
      </div>
   `
}

const setGallery = (gallery) => {
   const container = document.getElementById('gallery');

   gallery.forEach(({ src, alt, w, h }, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'aspect-[4/3] overflow-hidden';

      const inner = document.createElement('div');
      inner.className = 'relative w-full h-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 animate-pulse';
      inner.style.backgroundImage = `url('${customImageUrlOptimizer(src, 20, 20)}')`;
      inner.style.backgroundSize = 'cover';
      inner.style.backgroundPosition = 'center';
      inner.onclick = () => imageSliderModal(wrapper, gallery, index);

      inner.innerHTML = `
         <div class="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>
         <img 
            src="${getOptimizedImageUrl(src, w, h, 800)}"
            alt="${alt}"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 rounded-xl shadow"
            onload="this.style.opacity='1'; this.parentElement.classList.remove('animate-pulse');"
         />
      `;
      wrapper.appendChild(inner);
      container.appendChild(wrapper);
   });
}

export default setJournalTemplate;