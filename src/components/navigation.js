const template = `
   <div class="absolute w-full bg-white/60 border-gray-200 dark:bg-gray-900/60 backdrop-blur-md z-10">
      <div class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-8">
         <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/img/logo.png" class="h-8" alt="AL Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AL</span>
         </a>
         <div class="flex items-center gap-2 md:gap-6">
            <div id="theme-switch" class="md:absolute right-[350px] bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded">
               <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
               </svg>
               <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
               </svg>                                     
            </div>
            <button id="navbar-btn" type="button" class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
               <span class="sr-only">Open main menu</span>
               <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
               </svg>
            </button>
         </div>
         <div class="fixed md:static mt-16 inset-0 top-2 z-50 md:z-0 md:mt-0 w-full md:w-auto h-full md:block hidden" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:bg-opacity-0 border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
               <li>
                  <a href="/" onclick="route()" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">About</a>
               </li>
               <li>
                  <a href="/work" onclick="route()" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Work</a>
               </li>
               <li>
                  <a href="#" onclick="route()" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Travel</a>
               </li>
               <li>
                  <a href="#" onclick="route()" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
               </li>
            </ul>
         </div>
      </div>
   </div>
`

import setTheme from "../js/theme";

const setNavigation = (element) => {
   element.innerHTML = template;

   const navbarBtn = document.getElementById('navbar-btn');
   const navbar = document.getElementById('navbar-default');
   
   const toogleNavbar = () => {
      const isHidden = navbar.classList.contains('hidden');
      navbar.classList.toggle('hidden', !isHidden);
   }

   navbarBtn.addEventListener('click', toogleNavbar);
   
   window.addEventListener('resize', () => {
      if (window.innerWidth === 768) {
         navbar.classList.toggle('hidden', true);
      }
   });

   setTheme();
}

export default setNavigation;