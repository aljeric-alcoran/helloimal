export const setMainJournal = (element, journals) => {
   const journal = journals[0];
   const strippedContent = journal.content.replace(/<\/?p>/g, '').replace(/\n/g, ' ').trim();

   element.innerHTML = `
      <img src="${journal.coverImage}" class="h-full w-full object-cover object-center rounded-sm" alt="${journal.id}"/>
      <div class="absolute bottom-0">
         <div class="relative h-52 px-4 pt-4 bg-gray-800/35 items-center justify-center m-4">
            <a href="${journal.href}" journal-link class="text-lg font-semibold py-2 mt-2">
               <span class="absolute inset-0 z-10"></span>
               ${journal.title}
            </a> 
            <p class="text-sm/6 line-clamp-4">
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
         <div class="relative isolate rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden ${index === 0 ? 'block xl:hidden' : ''}">
            <img src="${journal.coverImage}" class="h-1/2 w-full object-cover" alt="${journal.id}"/>
            <div class="px-4 mt-4">
               <a href="${journal.href}" journal-link class="text-lg font-semibold py-2">
                  <span class="absolute inset-0 z-10"></span>
                  ${journal.title}
               </a>
               <p class="text-sm/6 line-clamp-10 md:line-clamp-6 mt-4">
                  ${strippedContent}
               </p>
               <p class="text-sm/5 absolute text-blue-600 dark:text-blue-400 bottom-4 left-4">
                  Read more →
               </p>
            </div>
         </div>
      `
   }).join('');
}

