import { customImageUrlOptimizer, getOptimizedImageUrl } from '../../js/helpers.js'

export const setMainJournal = (element, journals) => {
   const journal = journals[0];
   const strippedContent = journal.content.replace(/<\/?p>/g, '').replace(/\n/g, ' ').trim();
   const { url, w, h } = journal.coverImage;

   element.innerHTML = `
      <div 
         class="relative w-85 h-165 lg:rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 animate-pulse"
         style="
            background-image: url('${customImageUrlOptimizer(url, 20, 20)}');
            background-size: cover;
            background-position: center;
         "
      >
         <div class="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

         <img 
            src="${getOptimizedImageUrl(url, w, h, 1000)}"
            alt="${journal.id}"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 shadow"
            onload="this.style.opacity='1'; this.parentElement.classList.remove('animate-pulse');"
         />
      </div>
      
      <div class="absolute bottom-0">
         <div class="relative h-52 px-4 pt-4 bg-gray-800/35 items-center justify-center m-4">
            <a href="${journal.href}" journal-link class="text-lg font-semibold py-2 mt-2">
               <span class="absolute inset-0 z-10"></span>
               ${journal.title}
            </a> 
            <p class="text-sm/6 line-clamp-3">
               ${strippedContent}
            </p>
            <p class="text-sm/5 absolute bottom-4 left-4 text-white">Read more →</p>
         </div>
      </div>
   `
}

export const setJounalList = (element, journals) => {
   element.innerHTML = journals.map((journal, index) => {
      const strippedContent = journal.content.replace(/<\/?p>/g, '').replace(/\n/g, ' ').trim();
      const { url, w, h } = journal.coverImage;
      return `
         <div class="relative isolate rounded-xl shadow bg-white h-98 dark:bg-gray-700 overflow-hidden ${index === 0 ? 'block xl:hidden' : ''}">
            <div 
               class="relative w-full h-1/2 overflow-hidden bg-gray-100 dark:bg-gray-800 animate-pulse"
               style="
                  background-image: url('${customImageUrlOptimizer(url, 20, 20)}');
                  background-size: cover;
                  background-position: center;
               "
            >
               <div class="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

               <img 
                  src="${getOptimizedImageUrl(url, w, h, 800)}"
                  alt="${journal.id}"
                  loading="lazy"
                  class="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 shadow"
                  onload="this.style.opacity='1'; this.parentElement.classList.remove('animate-pulse');"
               />
            </div>
            <div class="px-4 mt-4">
               <a href="${journal.href}" journal-link class="text-lg font-semibold py-2">
                  <span class="absolute inset-0 z-10"></span>
                  ${journal.title}
               </a>
               <p class="text-sm/6 line-clamp-3 mt-4">
                  ${strippedContent}
               </p>
               <p class="mt-4 text-sm/5 text-blue-600 dark:text-blue-400">
                  Read more →
               </p>
            </div>
         </div>
      `
   }).join('');
}

