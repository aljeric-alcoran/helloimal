const template = `
   <div class="max-w-screen-lg mx-auto pt-20 md:pt-24 xl:pb-24 xl:pt-24 text-gray-900 dark:text-white">
      <img id="image-banner" src="/img/boh-chocolate-hills.jpg" class="h-[400px] lg:px-8 w-full object-cover" alt="bohol"/>
      <div class="px-4 md:px-8 py-4">
         <div class="space-y-2 my-8">
            <p id="date-author" class="text-sm mb-8 text-gray-600 dark:text-gray-400">🗓️ May 25, 2023 | Al Jeric Alcoran</p>
            <h1 id="title" class="text-2xl font-bold md:py-0">Chocolate Hills</h1>
            <h2 id="category" class="mb-4 md:py-0">A Nature-Filled Journey Through Bohol</h2>
            <hr>
         </div>
         <div id="content" class="text-base/7 space-y-4">
            
         </div>

         <div>
            <h2 class="text-lg font-semibold mt-8">Photo Gallery</h2>
            <div id="gallery" class="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4">
               
            </div>
         </div>
      </div>
   </div>
`
import { journals } from "../js/journals";

const setJournalTemplate = (container, journalId) => {
   container.innerHTML = template;

   const journal = journals.find(j => j.id === journalId);
   document.getElementById('date-author').textContent = `🗓️ ${journal.date} | ${journal.author}`;
   document.getElementById('title').textContent = journal.title;
   document.getElementById('category').textContent = journal.category;
   document.getElementById('content').innerHTML = journal.content;
   setGallery(journal.gallery);

   const banner = document.getElementById('image-banner');
   banner.src = journal.coverImage;
   banner.alt = journal.title;
}

const setGallery = (gallery) => {
   const container = document.getElementById('gallery');

   gallery.forEach(({ src, alt }) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'aspect-[4/3] overflow-hidden';

      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.className = 'w-full h-full object-cover';

      wrapper.appendChild(img);
      container.appendChild(wrapper);
   });
}

export default setJournalTemplate;