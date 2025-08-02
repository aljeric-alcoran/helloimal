export const setMainJournals = (element, journals) => {
   const journal = journals[0];
   const strippedContent = journal.content.replace(/<\/?p>/g, '').replace(/\n/g, ' ').trim();

   element.innerHTML = `
      <img src="${journal.coverImage}" class="h-full w-full object-cover rounded-sm" alt="${journal.id}"/>
      <div class="h-52 px-4 bg-gray-800/20 absolute bottom-0 items-center justify-center m-4">
         <p class="text-lg font-semibold py-2 mt-2">${journal.title}</p>
         <p class="text-sm/6 line-clamp-3">
            ${strippedContent}
         </p>
         <a href="${journal.href}" journal-link class="text-sm/5 absolute bottom-4 left-4  text-gray-50">Read more →</a>
      </div>
   `
}

export const setJounalList = (element, journals) => {
   element.innerHTML = journals.map((journal, index) => {
      const strippedContent = journal.content.replace(/<\/?p>/g, '').replace(/\n/g, ' ').trim();
      return `
         <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden ${index === 0 ? 'block xl:hidden' : ''}">
            <img src="${journal.coverImage}" class="h-1/2 w-full object-cover" alt="${journal.id}"/>
            <div class="px-4 mt-2">
               <p class="text-lg font-semibold py-2">${journal.title}</p>
               <p class="text-sm/6 line-clamp-3">
                  ${strippedContent}
               </p>
               <a href="${journal.href}" journal-link class="text-sm/5 absolute bottom-4 left-4 text-gray-600 dark:text-gray-400">Read more →</a>
            </div>
         </div>
      `
   }).join('');
}

