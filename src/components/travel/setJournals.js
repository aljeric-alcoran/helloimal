const cloudinaryURL =  'https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,c_fill,g_auto,'

export const setMainJournal = (element, journals) => {
   const journal = journals[0];
   const strippedContent = journal.content.replace(/<\/?p>/g, '').replace(/\n/g, ' ').trim();

   element.innerHTML = `
      <div 
         class="relative w-85 h-165 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
         style="
            background-image: url('${cloudinaryURL}w_10,h_10${journal.coverImage}');
            background-size: cover;
            background-position: center;
         "
      >
         <div class="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

         <img 
            src="${cloudinaryURL}w_800,h_1000${journal.coverImage}"
            alt="${journal.id}"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 rounded-xl shadow"
            onload="this.style.opacity='1'"
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
      return `
         <div class="relative isolate rounded-xl shadow bg-white h-98 dark:bg-gray-700 overflow-hidden ${index === 0 ? 'block xl:hidden' : ''}">
            <div 
               class="relative w-full h-1/2 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
               style="
                  background-image: url('${cloudinaryURL}w_10,h_10${journal.coverImage}');
                  background-size: cover;
                  background-position: center;
               "
            >
               <div class="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

               <img 
                  src="${cloudinaryURL}w_800,h_900${journal.coverImage}"
                  alt="${journal.id}"
                  loading="lazy"
                  class="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 rounded-xl shadow"
                  onload="this.style.opacity='1'"
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

