const template = `
   <div class="h-full flex flex-col items-center justify-center">
      <div class="mt-30 w-full max-w-screen-md grid grid-cols-3 gap-4">
         <img src="/img/boh-chocolate-hills.jpg" class="shadow bg-gray-100 dark:bg-gray-800 w-full h-full rounded-xl w-full object-cover" alt="bohol"/>
         <div class="bg-gray-100 dark:bg-gray-800 col-span-2 p-8 rounded-xl shadow">
            <div class="w-12 h-12 flex items-center justify-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
               <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
               </svg>
            </div>
            <p class="mt-12 text-xl font-semibold">Professional Profile</p>
            <p class="mt-3 text-sm/6 text-balance text-gray-500 dark:text-gray-400 w-full">
               Motivated and detail-oriented Frontend Web Developer with a strong foundation in 
               modern web technologies. Skilled in building responsive, user-friendly interfaces and contributing 
               to full-stack development projects. Eager to learn and grow in a collaborative team environment while 
               delivering high-quality code and innovative solutions.
            </p>
            <p class="text-sm flex items-center gap-2 mt-5">
               <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
               </svg> 
               Ramon Magsaysay, Zamboanga del Sur
            </p>
         </div>
      </div>

      <div class="shadow mt-4 w-full max-w-screen-md bg-gray-100 dark:bg-gray-800 p-8 rounded-t-xl border-b border-gray-200 dark:border-gray-700">
         <div class="w-12 h-12 flex items-center justify-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
            </svg>

         </div>
         <p class="mt-6 text-xl font-semibold">Work Experience</p>
         <p class="mt-3 text-base text-gray-500 dark:text-gray-400 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Quisquam, quase. Lorem 
            ipsum dolor sit amet consectetur.
         </p>
      </div>

      <div class="shadow mb-24 w-full max-w-screen-md bg-gray-100 dark:bg-gray-800 p-8 py-10 rounded-b-xl">
         <div class="relative border-l-2 border-gray-200 dark:border-gray-600 mx-4 space-y-8">
            <!-- Timeline item -->
            <div class="flex items-start gap-4 relative">
               <!-- Dot -->
               <div class="absolute -left-[4.67px] w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full z-10"></div>
               <div class="w-full ml-10 -mt-2 pb-16">
                  <div class="flex items-center justify-between">
                     <h3 class="font-semibold text-base">Freelance Software Developer</h3>
                     <span class="text-[.8rem] border border-gray-200 dark:border-gray-600 rounded-sm px-2 py-1">🗓️ Aug 2022 - Jun 2025</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">Easypick • Fulltime</p>
                  <p class="text-sm flex items-center gap-2 my-5">
                     <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                     </svg> 
                     Work from home
                  </p>
                  <p class="text-sm/6">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quase. Lorem ipsum dolor sit amet 
                     consectetur adipisicing elit. Quisquam, quase. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Quisquam, quase. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quase. 
                  </p>
               </div>
            </div>
         </div>
         <div class="relative border-l-2 border-gray-200 dark:border-gray-600 mx-4 space-y-8">
            <!-- Timeline item -->
            <div class="flex items-start gap-4 relative">
               <!-- Dot -->
               <div class="absolute -left-[4.67px] w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full z-10"></div>
               <div class="w-full ml-10 -mt-2">
                  <div class="flex items-center justify-between">
                     <h3 class="font-semibold text-base">Junior Frontend Developer</h3>
                     <span class="text-[.8rem] border border-gray-200 dark:border-gray-600 rounded-sm px-2 py-1">🗓️ Mar 2021 - Jul 2022</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">Nextlogic Dist. • Fulltime</p>
                  <p class="text-sm flex items-center gap-2 my-5">
                     <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                     </svg> 
                     Cagayan de Oro City
                  </p>
                  <p class="text-sm/6">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quase. Lorem ipsum dolor sit amet 
                     consectetur adipisicing elit. Quisquam, quase. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Quisquam, quase. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quase. 
                  </p>
               </div>
            </div>
         </div>
      </div>
   <div/>
`;

const setWorkExperience= (element) => {
   element.innerHTML = template;
};

export default setWorkExperience;