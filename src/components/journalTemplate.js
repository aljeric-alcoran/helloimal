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
      <div class="lg:px-8 w-full">
         <img id="image-banner" src="/img/boh-chocolate-hills.jpg" class="h-[500px] w-full object-cover lg:rounded-xl" alt="bohol"/>
      </div>
      <div class="px-4 md:px-8 py-4">
         <div id="content" class="text-base/7 space-y-4 mt-4"></div>
         <div>
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
   banner.src = journal.coverImage;
   banner.alt = journal.title;

}

const setGallery = (gallery) => {
   const container = document.getElementById('gallery');

   gallery.forEach(({ src, alt }, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'aspect-[4/3] overflow-hidden';

      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.onclick = () => imageSliderModal(wrapper, gallery, index);
      img.className = 'rounded-xl w-full h-full object-cover transition-transform duration-500 delay-150 ease-in hover:scale-102 cursor-pointer';

      wrapper.appendChild(img);
      container.appendChild(wrapper);
   });
}

export default setJournalTemplate;