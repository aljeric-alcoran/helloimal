const template = `
   <div class="max-w-screen-xl mx-auto p-2 py-8 md:p-8 md:py-16 text-gray-900 dark:text-white">
      <h1 class="text-2xl font-bold py-4 md:py-0 text-center"><span class="text-[#3150CE]">About</span> me</h1>
      <div class="md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:gap-4 items-start justify-center mt-10 md:mt-24">
         <div class"flex flex-col gap-4">
            <div class="w-full md:w-80 p-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-sm shadow-sm">
               <img src="/img/hero.jpg" class="h-56 w-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0" alt="Profile Pic">
               <div class="flex flex-col p-4">
                  <p class="text-lg font-semibold flex items-center gap-1">Al Jeric Alcoran <img src="/img/verified-badge.png" class="w-5 h-5" alt="Verified Badge"/></p>
                  <span class="text-sm text-gray-500">Web Developer</span>
               </div>
               <div class="px-4 pb-4">
                  <hr class="border-gray-200 dark:border-gray-700 mb-4">
                  <h2 class="text-md font-semibold">General Information</h2>
                  <div class="flex flex-col mt-4 gap-3 text-sm">
                     <div>
                        <span class="flex items-center gap-1 text-xs text-gray-500">
                           <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                           </svg>     
                           Location
                        </span>
                        <span>Ramon Magsaysay Zamboanga <br>Del Sur</span>
                     </div>
                     <div>
                        <span class="flex items-center gap-1 text-xs text-gray-500">
                           <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                           </svg>     
                           Email                       
                        </span>
                        <span>aljericalcoran026@gmail.com</span>
                     </div>
                     <div class="">
                        <span class="flex items-center gap-1 text-xs text-gray-500">
                           <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                           </svg>
                           Mobile no.
                        </span>
                        <span>+63 916 351 8635</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="w-full rounded-sm border border-white dark:border-gray-700 bg-white dark:bg-gray-900 p-5 md:p-10 dark:text-white text-gray-900 shadow-sm">
            <h2 class="text-lg font-semibold">Biography</h2>
            <div class="mt-6 grid lg:grid-cols-2 gap-5 md:gap-10 text-sm text-justify lg:text-left">
               <div class="space-y-6">
                  <div class="text-sm/6">
                     Hi, I’m AL, a web developer with over three years of hands-on experience in building and maintaining modern, responsive websites and web applications.
                     My career started in 2021 as a junior frontend developer, where I developed a strong foundation in frontend development. After a year, I began working as a freelance software developer at a new company, focusing on maintaining their application and their website to meet evolving business needs.
                     When I’m not coding, you’ll likely find me playing electronic games, reading manga & manhwa or creating funny videos XD.
                  </div>
                  <div class="space-y-1">    
                     <p class="font-semibold">Your birthday?</p>
                     <span class="text-sm/6">November 26, 1997</span>
                  </div>
                  <div class="space-y-1">    
                     <p class="font-semibold">Where is your hometown?</p>
                     <span class="text-sm/6">Sunrise, Poblacion, Ramon Magsaysay Zamboanga del Sur, 7024, Philippines</span>
                  </div>
               </div>
               <div class="space-y-6">
                  <div class="space-y-1">    
                     <p class="font-semibold">How do you spend your free time?</p>
                     <span class="text-sm/6">I record my gameplay and upload it to YouTube. I also create funny videos for Facebook, and I read manga and manhwa online. I also watch anime series like: One Piece, Blue Lock etc.</span>
                  </div>
                  <div class="space-y-1">    
                     <p class="font-semibold">What is your dream?</p>
                     <span class="text-sm/6">To have my own business someday XD</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
`;

const setBiographySection = (element) => {
   element.innerHTML = template;
}

export default setBiographySection;