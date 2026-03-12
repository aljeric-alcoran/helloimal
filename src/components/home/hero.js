const template = `
   <div id="hero-section" class="main-banner-container relative max-w-screen-xl min-h-dvh flex flex-col justify-center">

      <!-- Grid background -->
      <div class="absolute inset-0 pointer-events-none"
         style="background-image: linear-gradient(rgba(49,80,206,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(49,80,206,0.04) 1px, transparent 1px); background-size: 60px 60px;">
      </div>

      <!-- Two-column layout -->
      <div class="relative w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center py-20 md:py-0">

         <!-- LEFT — Text content -->
         <div class="flex flex-col gap-7 items-center text-center md:items-start md:text-left order-2 md:order-1 md:pl-10">

            <!-- Available badge -->
            <div class="inline-flex items-center gap-2 opacity-0 animate-[fadeUp_0.5s_ease_0.1s_both] mt-6 md:mt-0">
               <span class="text-md md:text-xl font-bold tracking-[0.12em] uppercase text-gray-500 dark:text-gray-400">Hello</span>
            </div>

            <!-- Name -->
            <div class="opacity-0 animate-[fadeUp_0.6s_cubic-bezier(.22,.68,0,1.2)_0.2s_both]">
               <p class="text-[clamp(4.5rem,10vw,7rem)] font-black leading-[0.88] tracking-[-0.04em] text-gray-900 dark:text-white">
                  I'm&nbsp;<span class="relative inline-block text-[#3150CE]">
                     AL
                     <span class="absolute bottom-1 left-0 w-full h-[3px] bg-[#3150CE] rounded-full origin-left animate-[scaleX_0.5s_ease_0.85s_both] scale-x-0"></span>
                  </span>
               </p>
            </div>

            <!-- Role -->
            <div class="flex items-center gap-3 opacity-0 animate-[fadeUp_0.5s_ease_0.4s_both]">
               <span class="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                  an interactive Full Stack Developer
               </span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex items-center gap-3 flex-wrap justify-center md:justify-start opacity-0 animate-[fadeUp_0.5s_ease_0.7s_both]">
               <button id="download-file-btn" type="button"
                  class="cursor-pointer inline-flex items-center gap-2 bg-[#3150CE] hover:bg-[#2540b0] text-white text-xs md:text-sm font-semibold tracking-wide px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(49,80,206,0.35)] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#3150CE]/50">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                  </svg>
                  Download CV
               </button>
               <button id="contact-me-btn" type="button"
                  class="cursor-pointer inline-flex items-center gap-2 bg-transparent text-gray-800 dark:text-white text-xs md:text-sm font-semibold tracking-wide px-6 py-3 rounded-full border-[1.5px] border-gray-300 dark:border-gray-600 hover:border-gray-800 dark:hover:border-white transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-width="2.5" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                  </svg>
                  Contact me
               </button>
            </div>

            <!-- Social links -->
            <div class="flex items-center gap-5 opacity-0 animate-[fadeUp_0.5s_ease_0.85s_both]">
               <a href="https://github.com/aljeric-alcoran" target="_blank"
                  class="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.1em] uppercase text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
                  GitHub
               </a>
               <span class="text-gray-200 dark:text-gray-700">·</span>
               <a href="https://www.linkedin.com/in/al-jeric-alcoran-a420b6213/" target="_blank"
                  class="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.1em] uppercase text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/><path d="M7.2 8.809H4V19.5h3.2V8.809Z"/></svg>
                  LinkedIn
               </a>
               <span class="text-gray-200 dark:text-gray-700">·</span>
               <a href="https://helloimal.vercel.app" target="_blank"
                  class="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.1em] uppercase text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.168 3.809a9 9 0 1 0 2.027 9.608M13.168 3.809A9 9 0 0 0 3.8 12.06M3.8 12.06H3"/></svg>
                  Portfolio
               </a>
            </div>
         </div>

         <!-- RIGHT — Profile image -->
         <div class="flex justify-center mt-8 md:mt-0 order-1 md:order-2 opacity-0 animate-[fadeUp_0.7s_cubic-bezier(.22,.68,0,1.2)_0.3s_both]">
            <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

               <!-- Decorative solid ring -->
               <div class="absolute inset-0 rounded-full border-2 border-[#3150CE]/20 dark:border-[#3150CE]/30 scale-110 pointer-events-none"></div>

               <!-- Spinning dashed orbit -->
               <div class="absolute inset-0 rounded-full border border-dashed border-[#3150CE]/20 dark:border-[#3150CE]/25 scale-[1.28] pointer-events-none animate-[spin_20s_linear_infinite]"></div>

               <!-- Orbit accent dot -->
               <div class="absolute w-3 h-3 rounded-full bg-[#3150CE] shadow-[0_0_12px_rgba(49,80,206,0.7)] pointer-events-none"
                  style="top: -6px; left: 50%; transform: translateX(-50%);"></div>

               <!-- Photo -->
               <div class="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 shadow-[0_20px_60px_rgba(49,80,206,0.18)] dark:shadow-[0_20px_60px_rgba(49,80,206,0.3)]">
                  <img
                     src="https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_500,h_500,c_fill,g_face/v1772975744/photo_2024-10-05_13-37-36_ywtpr7.jpg"
                     alt="Al Jeric Alcoran"
                     width="400"
                     height="400"
                     class="w-full h-full object-cover object-top md:grayscale hover:grayscale-0 transition-all duration-500"
                     loading="eager"
                     decoding="async"
                  />
               </div>

               <!-- Floating chip — bottom left -->
               <div class="absolute -bottom-3 -left-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 opacity-0 animate-[fadeUp_0.5s_ease_1.0s_both]">
                  <span class="text-xl font-black text-[#3150CE] leading-none">4+</span>
                  <span class="text-[0.65rem] font-semibold text-gray-400 dark:text-gray-500 leading-tight">Years<br>Exp.</span>
               </div>

               <!-- Floating chip — top right -->
               <div class="absolute -top-3 -right-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 opacity-0 animate-[fadeUp_0.5s_ease_1.1s_both]">
                  <span class="text-xl font-black text-[#3150CE] leading-none">10+</span>
                  <span class="text-[0.65rem] font-semibold text-gray-400 dark:text-gray-500 leading-tight">Tech<br>Stack</span>
               </div>

            </div>
         </div>
      </div>
   </div>
`;

import { downloadCV } from "../../js/helpers";
import { scrollToSection } from "../../js/helpers";

const setHeroSection = (element) => {
   element.innerHTML = template;

   document.getElementById('download-file-btn').addEventListener('click', () => downloadCV());
   document.getElementById('contact-me-btn').addEventListener('click', () => scrollToSection('contact'));
};

export default setHeroSection;