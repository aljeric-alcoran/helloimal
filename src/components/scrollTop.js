const template = `
   <div id="scrollUpBtn"
      class="fixed border border-gray-300 dark:border-gray-600 bottom-3 right-3 md:bottom-5 md:right-5 cursor-pointer bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 md:p-3 rounded-sm
      opacity-0 translate-y-10 pointer-events-none transition-all duration-300 ease-in-out"
   >
      <svg class="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
      </svg>
   </div>
`

const setScrollToTop = (element) => {
   element.insertAdjacentHTML('afterbegin', template);

   const btn = document.getElementById('scrollUpBtn');

   window.addEventListener('scroll', () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const showThreshold = document.body.scrollHeight * 0.5;

      if (scrollPosition >= showThreshold) {
         btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
         btn.classList.add('opacity-100', 'translate-y-0');
      } else {
         btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
         btn.classList.remove('opacity-100', 'translate-y-0');
      }
   });

   // Scroll to top when clicked.
   btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   });
}

export default setScrollToTop;