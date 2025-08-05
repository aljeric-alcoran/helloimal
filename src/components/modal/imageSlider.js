const template = `
   <div>
      <button id="closeModal" class="absolute cursor-pointer top-4 right-4 md:top-8 md:right-12 text-white text-2xl hover:text-gray-300">⛌</button>
      <div class="flex items-center justify-between px-4 md:hidden">
         <button id="prevImage" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-sm text-sm px-4 py-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">⮜ Prev</button>
         <button id="nextImage" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-sm text-sm px-4 py-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next ⮞</button>
      </div>
      <div class="w-full max-w-5xl md:px-4 flex items-center justify-center">
         <button id="prevImage" class="hidden md:block absolute cursor-pointer left-0 md:left-8 text-white text-5xl px-6 hover:text-gray-300">&lsaquo;</button>
         <div class="w-full h-full min-h-[70vh] flex items-center">
            <img id="modalImage" src="" alt="Modal Image" class="max-h-[80vh] md:rounded-sm shadow-lg object-contain mx-auto" />
         </div>
         <button id="nextImage" class="hidden md:block absolute cursor-pointer right-0 md:right-8 text-white text-5xl px-6 hover:text-gray-300">&rsaquo;</button>
      </div>
   </div>
`

const imageSliderModal = (openModalBtn, galleryImages, currentIndex) => {
   const modal = document.getElementById('imageModal');
   modal.innerHTML = template;

   const modalImage = document.getElementById('modalImage');
   const closeModalBtn = document.getElementById('closeModal');
   const prevBtn = document.querySelectorAll('#prevImage');
   const nextBtn = document.querySelectorAll('#nextImage');

   const updateImage = () => {
      modalImage.src = galleryImages[currentIndex].src;
   }; 

   openModalBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      updateImage();
   });

   closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
   });

   prevBtn.forEach(btn => {
      btn.addEventListener('click', () => {
         currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
         updateImage();
      });
   })

   nextBtn.forEach(btn => {
      btn.addEventListener('click', () => {
         currentIndex = (currentIndex + 1) % galleryImages.length;
         updateImage();
      });
   })
}

export default imageSliderModal;