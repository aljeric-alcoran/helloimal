const template = `
   <div class="py-16">
      <div class="mb-4">
         <p class="text-xl font-semibold ml-1 mb-2">Hello!</p>
         <p class="text-8xl font-bold">I'm AL</p>
      </div>
      <p>an interactive Web Developer</p>

      <div class="flex items-center mt-8">
         <button type="button" class="cursor-pointer text-white border border-[#3150CE] bg-[#3150CE] hover:bg-[#3150CE]/90 focus:ring-2 focus:outline-none focus:ring-[#3150CE]/50 font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3150CE]/55 me-2 mb-2 gap-1">
            <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
               </svg>                   
            Download CV
         </button>

         <button type="button" class="cursor-pointer text-[#3150CE] bg-[#3150CE]/10 hover:bg-[#3150CE]/15 border border-[#3150CE] hover:border-[#3150CE]/90 focus:ring-2 focus:outline-none focus:ring-[#3150CE]/50 font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3150CE]/55 me-2 mb-2 gap-1">
            <svg class="w-5 h-5 text-[#3150CE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>                                     
            Contact me
         </button>
      </div>
   </div>
`;

const setHeroSection = (element) => {
   element.innerHTML = template;
};

export default setHeroSection;