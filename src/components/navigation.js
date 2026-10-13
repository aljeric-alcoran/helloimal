import sunIcon  from '@phosphor-icons/core/assets/regular/sun.svg?raw';
import moonIcon from '@phosphor-icons/core/assets/regular/moon.svg?raw';
import { icon } from '../js/icons.js';

const template = `
   <div class="relative border-b border-line/70 bg-canvas/80 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70">
      <div class="shell flex h-16 items-center justify-between gap-6">

         <!-- Wordmark -->
         <a href="/" nav-link class="group flex shrink-0 items-center gap-2.5 rounded-full">
            <img src="/img/logo.webp" class="size-8 rounded-full" alt="" width="32" height="32" loading="eager" />
            <span class="text-[0.95rem] font-semibold tracking-tight text-ink">helloimal</span>
         </a>

         <div class="flex items-center gap-1">
            <!-- Desktop links -->
            <nav aria-label="Main" class="hidden md:block">
               <ul id="nav-list" class="flex items-center gap-1"></ul>
            </nav>

            <button id="nav-contact" type="button"
               class="btn btn-primary ml-3 hidden px-4 py-2 text-sm md:inline-flex">
               Contact me
            </button>

            <span class="mx-2 hidden h-5 w-px bg-line md:block" aria-hidden="true"></span>

            <!-- Theme toggle: first icon shows in light mode, second in dark (see js/theme.js) -->
            <button id="theme-switch" type="button" aria-label="Switch to light theme"
               class="flex size-9 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-sunken hover:text-ink">
               ${icon(moonIcon, 'size-[18px]')}
               ${icon(sunIcon, 'size-[18px] hidden')}
            </button>

            <!-- Mobile menu toggle -->
            <button id="navbar-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"
               class="flex size-9 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-sunken hover:text-ink md:hidden">
               <span class="flex w-[18px] flex-col gap-[5px]">
                  <span id="bar-1" class="block h-[2px] w-full origin-center rounded-full bg-current transition-transform duration-300"></span>
                  <span id="bar-2" class="block h-[2px] w-full rounded-full bg-current transition-[opacity,transform] duration-300"></span>
                  <span id="bar-3" class="block h-[2px] w-full origin-center rounded-full bg-current transition-transform duration-300"></span>
               </span>
            </button>
         </div>
      </div>

      <!-- Mobile drawer -->
      <div id="mobile-menu" class="hidden border-t border-line/70 md:hidden">
         <nav aria-label="Main" class="shell py-3">
            <ul id="nav-list-mobile" class="flex flex-col"></ul>
            <button id="nav-contact-mobile" type="button" class="btn btn-primary mb-2 mt-5 w-full">
               Contact me
            </button>
         </nav>
      </div>
   </div>
`;

import setTheme from "../js/theme";
import { goToContact } from "../js/helpers";
import { populateNavLists, syncActiveLinks, closeMenu, toggleMenu } from "../js/navList";

const setNavigation = (element) => {
   element.innerHTML = template;

   const btn   = document.getElementById('navbar-btn');
   const menu  = document.getElementById('mobile-menu');
   const close = () => closeMenu(menu, btn);

   // Populate both desktop + mobile lists
   populateNavLists();

   // Hamburger toggle
   btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu(menu, btn);
   });

   // Contact CTA: works from any route
   document.getElementById('nav-contact').addEventListener('click', goToContact);
   document.getElementById('nav-contact-mobile').addEventListener('click', () => {
      close();
      goToContact();
   });

   // Close on outside click or Escape
   document.getElementById('main-content')?.addEventListener('click', close);
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
         close();
         btn.focus();
      }
   });

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
