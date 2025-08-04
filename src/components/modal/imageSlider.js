const template = `
   <div>
      <button id="closeModal" class="absolute cursor-pointer top-8 right-12 text-white text-2xl hover:text-gray-300">⛌</button>
      <div class="w-full max-w-5xl px-4 flex items-center justify-center">
         <button id="prevImage" class="absolute cursor-pointer left-8 text-white text-5xl px-6 hover:text-gray-300">&lsaquo;</button>
         <img id="modalImage" src="" alt="Modal Image" class="max-h-[80vh] rounded-sm shadow-lg object-contain mx-auto" />
         <button id="nextImage" class="absolute cursor-pointer right-8 text-white text-5xl px-6 hover:text-gray-300">&rsaquo;</button>
      </div>
   </div>
`

const imageSliderModal = (openModalBtn, galleryImages, currentIndex) => {
   const modal = document.getElementById('imageModal');
   modal.innerHTML = template;

   const modalImage = document.getElementById('modalImage');
   const closeModalBtn = document.getElementById('closeModal');
   const prevBtn = document.getElementById('prevImage');
   const nextBtn = document.getElementById('nextImage');

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

   prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateImage();
   });

   nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateImage();
   });
}

export default imageSliderModal;