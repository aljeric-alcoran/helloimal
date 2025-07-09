const template = `
   <div class="max-w-screen-xl flex gap-4 items-start justify-center mx-auto p-8 md:py-16 text-gray-900 dark:text-white">
      <div class="w-80 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-sm overflow-hidden shadow-sm">
         <img src="/img/hero.jpg" class="h-42 w-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0" alt="Profile Pic">
         <div class="flex flex-col items-center p-4 gap-y-1">
            <p class="text-lg font-semibold">Al Jeric Alcoran</p>
            <span class="text-xs text-gray-500">Web Developer</span>
         </div>
      </div>
      <div class="w-full flex flex-col gap-4">
         <div class="rounded-sm bg-linear-65 from-[#3150CE] to-cyan-500 px-10 py-6 text-white">
            <h2 class="text-lg font-semibold">General Information</h2>
            <div class="mt-4 grid grid-cols-2 gap-10 text-sm">
               <div class="space-y-4">
                  <p class="flex items-center gap-2">
                     <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
                     </svg>
                     Al Jeric Sumaylo Alcoran
                  </p>
                  <p class="flex items-center gap-2">
                     <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                     </svg>     
                     Ramon Magsaysay Zamboanga del Sur
                  </p>
               </div>
               <div class="space-y-4">
                  <p class="flex items-center gap-2">
                     <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                     </svg>                         
                     aljericalcoran026@gmail.com
                  </p>
                  <p class="flex items-center gap-2">
                     <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                     </svg>
                     +63 916 351 8635
                  </p>
               </div>
            </div>
         </div>

         <div class="rounded-sm border border-white dark:border-gray-700 bg-white dark:bg-gray-900 p-10 dark:text-white text-gray-900 shadow-sm">
            <h2 class="text-lg font-semibold">Biography</h2>
            <div class="mt-6 grid grid-cols-2 gap-10 text-sm">
               <div class="space-y-6">
                  <div class="text-sm/6">
                     Hi, I’m AL, a web developer with over three years of hands-on experience in building and maintaining modern, responsive websites and web applications.
                     My career started in 2021 as a junior frontend developer, where I developed a strong foundation in frontend development. After a year, I began working as a freelance software developer at a new company, focusing on maintaining their application and their website to meet evolving business needs.
                     When I’m not coding, you’ll likely find me playing mobile and PC games or reading manga and manhwa.
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

const setBiography = (element) => {
   element.innerHTML = template;
}

export default setBiography;