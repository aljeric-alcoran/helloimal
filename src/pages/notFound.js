// pages/notFound.js
// Full-screen 404 page — hides nav + footer, restores them on navigation away.

const template = `
   <div id="not-found-page"
        class="relative min-h-screen w-full overflow-hidden
               bg-gray-50 dark:bg-gray-900
               flex flex-col items-center justify-center
               text-gray-900 dark:text-white
               px-6">

      <!-- Dot grid (matches body::before but scoped) -->
      <div class="absolute inset-0 pointer-events-none"
           style="background-image:radial-gradient(circle,rgba(49,80,206,0.07) 1px,transparent 1px);
                  background-size:28px 28px;"></div>

      <!-- Blue glow blobs -->
      <div class="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full
                  bg-[#3150CE]/6 dark:bg-[#3150CE]/10 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full
                  bg-[#818cf8]/5 dark:bg-[#818cf8]/8 blur-3xl pointer-events-none"></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center text-center max-w-lg">

         <!-- Big 404 number -->
         <div class="relative mb-6 select-none"
              style="animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0s both;">
            <p class="font-black text-[#3150CE]/8 dark:text-[#3150CE]/12 leading-none select-none"
               style="font-size: clamp(9rem, 30vw, 14rem); line-height: 1;">
               404
            </p>
         </div>

         <!-- Eyebrow -->
         <p class="text-[0.68rem] font-bold tracking-[0.22em] uppercase
                   text-[#3150CE] dark:text-[#818cf8] mb-3"
            style="animation: fadeUp 0.5s ease 0.1s both; opacity:0;">
            Page not found
         </p>

         <!-- Heading -->
         <h1 class="text-2xl md:text-3xl font-black tracking-tight leading-snug mb-4"
             style="animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.18s both; opacity:0;">
            Looks like you're lost<br/>
            <span class="text-[#3150CE] dark:text-[#818cf8]">on your journey.</span>
         </h1>

         <!-- Underline bar -->
         <div class="w-8 h-[3px] bg-[#3150CE] rounded-full mb-5 origin-left"
              style="animation: scaleX 0.5s ease 0.3s both;"></div>

         <!-- Description -->
         <p class="text-sm/7 text-gray-500 dark:text-gray-400 mb-8"
            style="animation: fadeUp 0.5s ease 0.35s both; opacity:0;">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back on track.
         </p>

         <!-- CTA buttons -->
         <div class="flex flex-col sm:flex-row items-center gap-3"
              style="animation: fadeUp 0.5s ease 0.45s both; opacity:0;">

            <button type="button" id="btn-home"
               class="inline-flex items-center gap-2
                      bg-[#3150CE] hover:bg-[#2540b0] text-white
                      text-xs tracking-[0.1em] uppercase
                      px-6 py-3 rounded-full cursor-pointer
                      transition-all duration-200
                      hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(49,80,206,0.4)]
                      focus:outline-none focus:ring-2 focus:ring-[#3150CE]/50">
               <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.5"
                        d="m3 9 9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z"/>
                  <path stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.5"
                        d="M9 22V12h6v10"/>
               </svg>
               Back to home
            </button>

            <button type="button" id="btn-travel"
               class="inline-flex items-center gap-2
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      text-gray-600 dark:text-gray-300
                      hover:text-[#3150CE] dark:hover:text-[#818cf8]
                      hover:border-[#3150CE]/40 dark:hover:border-[#818cf8]/40
                      text-xs tracking-[0.1em] uppercase
                      px-6 py-3 rounded-full cursor-pointer
                      transition-all duration-200
                      hover:-translate-y-px
                      focus:outline-none focus:ring-2 focus:ring-[#3150CE]/30">
               <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.5"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
                  <path stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"
                        d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"/>
               </svg>
               Explore travel
            </button>
         </div>
      </div>
   </div>
`;

const setNotFoundPage = (container) => {
   const nav    = document.getElementById('navigation');
   const footer = document.getElementById('footer');
   if (nav)    nav.classList.add('hidden');
   if (footer) footer.classList.add('hidden');

   container.innerHTML = template;

   const restore = () => {
      if (nav) nav.classList.remove('hidden');
      if (footer) footer.classList.remove('hidden');
   };

   const navigate = (path) => {
      restore();
      history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
   };

   document.getElementById('btn-home')  ?.addEventListener('click', () => navigate('/'));
   document.getElementById('btn-travel')?.addEventListener('click', () => navigate('/travel'));

   window.addEventListener('popstate', restore, { once: true });
};

export default setNotFoundPage;