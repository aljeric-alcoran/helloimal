const template = `
   <div class="absolute w-full">

      <!-- Main navbar bar -->
      <div class="relative max-w-screen-xl mx-auto px-4 md:px-8">
         <div class="flex items-center justify-between h-16 md:h-20">

            <!-- Logo -->
            <a href="/" class="flex items-center gap-2.5 group shrink-0">
               <div class="relative">
                  <img src="/img/logo.webp" class="h-8 w-8 rounded-lg" alt="AL Logo" loading="eager" />
               </div>
               <span class="text-lg font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-[#3150CE] dark:group-hover:text-[#818cf8] transition-colors duration-200">
                  helloimal
               </span>
            </a>

            <!-- Desktop nav links (center) -->
            <nav class="hidden md:flex items-center">
               <ul id="nav-list" class="flex items-center gap-4"></ul>
            </nav>

            <!-- Right controls -->
            <div class="flex items-center gap-2">
               <!-- Theme toggle -->
               <button id="theme-switch" type="button" aria-label="Toggle theme"
                  class="cursor-pointer relative w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40">
                  <!-- Sun icon (shown in dark mode) -->
                  <svg id="icon-sun" class="w-[18px] h-[18px] hidden" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                  </svg>
                  <!-- Moon icon (shown in light mode) -->
                  <svg id="icon-moon" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                  </svg>
               </button>

               <!-- Mobile hamburger -->
               <button id="navbar-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"
                  class="md:hidden cursor-pointer relative w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40">
                  <!-- Hamburger lines (3 → X via CSS toggle) -->
                  <span id="hamburger-icon" class="flex flex-col gap-[5px] w-[18px]">
                     <span class="block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center" id="bar-1"></span>
                     <span class="block h-[2px] w-full bg-current rounded-full transition-all duration-300" id="bar-2"></span>
                     <span class="block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center" id="bar-3"></span>
                  </span>
               </button>
            </div>
         </div>
      </div>

      <!-- Frosted glass bar (sits behind content, full-width) -->
      <div class="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700/60 shadow-sm -z-10 pointer-events-none"></div>

      <!-- Mobile menu drawer -->
      <div id="mobile-menu"
         class="md:hidden hidden overflow-hidden transition-all duration-300 ease-in-out
                bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
                border-b border-gray-200/60 dark:border-gray-700/60 shadow-md">
         <div class="max-w-screen-xl mx-auto px-4 py-4">
            <ul id="nav-list-mobile" class="flex flex-col gap-1"></ul>
         </div>
      </div>
   </div>
`;

import setTheme from "../js/theme";
import { populateNavLists, syncActiveLinks, closeMenu, toggleMenu } from "../js/navList";

const setNavigation = (element) => {
   element.innerHTML = template;

   const btn   = document.getElementById('navbar-btn');
   const menu  = document.getElementById('mobile-menu');
   const close = () => closeMenu(menu, btn);

   // Populate both desktop + mobile lists
   populateNavLists(close);

   // Hamburger toggle
   btn.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      toggleMenu(menu, btn); 
   });

   // Close on outside click
   document.getElementById('main-content')?.addEventListener('click', close);

   // Close + reset on resize to desktop
   let resizeTimer;
   window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
         if (window.innerWidth >= 768) close();
      }, 100);
   });

   // Sync active state on SPA route changes
   window.addEventListener('popstate', syncActiveLinks);
   // Also expose for manual call after pushState navigations
   window._syncNavActive = syncActiveLinks;

   setTheme();
};

export default setNavigation;