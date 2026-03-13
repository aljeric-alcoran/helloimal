const template = `
   <div class="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24 text-gray-900 dark:text-white">

      <!-- Section label + heading -->
      <div class="bio-reveal flex flex-col items-center gap-2 mb-14">
         <span class="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#3150CE]">Who I am</span>
         <h1 class="text-3xl md:text-4xl font-black tracking-tight">About <span class="text-[#3150CE]">Me</span></h1>
         <div class="w-8 h-[3px] bg-[#3150CE] rounded-full mt-1"></div>
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5 items-start">

         <!-- ── LEFT COLUMN ── -->
         <div class="flex flex-col gap-4">

            <!-- Profile card -->
            <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 overflow-hidden shadow-sm">

               <!-- Photo -->
               <div class="relative overflow-hidden h-52">
                  <img
                     src="https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_320,h_224,c_fill,g_face/v1754235497/2024_12_31_18_51_IMG_6041_zksw1o.jpg"
                     srcset="
                        https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_320,h_224,c_fill,g_face/v1754235497/2024_12_31_18_51_IMG_6041_zksw1o.jpg 320w,
                        https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_640,h_448,c_fill,g_face/v1754235497/2024_12_31_18_51_IMG_6041_zksw1o.jpg 640w
                     "
                     sizes="(max-width: 768px) 100vw, 300px"
                     width="320" height="224"
                     class="w-full h-full object-cover object-top md:grayscale hover:grayscale-0 scale-[1.03] hover:scale-100 transition-all duration-500"
                     alt="Al Jeric Alcoran"
                     loading="lazy"
                     decoding="async"
                  />
                  <div class="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
               </div>

               <!-- Identity -->
               <div class="px-5 pt-3 pb-1">
                  <p class="font-bold flex items-center gap-1.5">
                     Al Jeric Alcoran
                     <img src="/img/verified-badge.webp" class="w-4 h-4 shrink-0" alt="Verified" width="16" height="16" loading="lazy"/>
                  </p>
                  <span class="text-xs font-medium text-[#3150CE]">Full Stack Developer</span>
               </div>

               <div class="mx-5 my-3 h-px bg-gray-100 dark:bg-gray-700/50"></div>

               <!-- Contact -->
               <div class="px-5 pb-5 flex flex-col gap-3.5">
                  <p class="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-gray-400 dark:text-gray-500">Contact Info</p>

                  <div class="flex items-start gap-3">
                     <span class="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15">
                        <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957l-.573.699-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.31-.38a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                        </svg>
                     </span>
                     <div>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500">Location</p>
                        <p class="text-xs font-medium leading-snug">Busay, Nivel Hills, Cebu City, Cebu</p>
                     </div>
                  </div>

                  <div class="flex items-start gap-3">
                     <span class="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15">
                        <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                           <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                     </span>
                     <div>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 -mb-1">Email</p>
                        <a href="mailto:aljericalcoran026@gmail.com"
                           class="text-xs font-medium hover:text-[#3150CE] transition-colors duration-200 break-all">
                           aljericalcoran026@gmail.com
                        </a>
                     </div>
                  </div>

                  <div class="flex items-start gap-3">
                     <span class="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15">
                        <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                        </svg>
                     </span>
                     <div>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 -mb-1">Mobile</p>
                        <a href="tel:+639163518635"
                           class="text-xs font-medium hover:text-[#3150CE] transition-colors duration-200">
                           +63 916 351 8635
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Social Media links -->
            <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 px-5 py-5 shadow-sm">
               <p class="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-gray-400 dark:text-gray-500 mb-4">Follow me on</p>
               <div class="flex flex-col gap-1">

                  <a href="https://github.com/aljeric-alcoran" target="_blank" rel="noopener noreferrer"
                     class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/40 transition-colors duration-200">
                     <span class="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-200">
                        <svg class="w-4 h-4 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                        </svg>
                     </span>
                     <div class="flex-1 min-w-0">
                        <p class="text-xs font-semibold">GitHub</p>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate">aljeric-alcoran</p>
                     </div>
                     <svg class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                     </svg>
                  </a>

                  <a href="https://www.facebook.com/aljeric.alcoran" target="_blank" rel="noopener noreferrer"
                     class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#1877F2]/6 dark:hover:bg-[#1877F2]/10 transition-colors duration-200">
                     <span class="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-[#1877F2]/10 dark:bg-[#1877F2]/15 group-hover:bg-[#1877F2]/20 transition-colors duration-200">
                        <svg class="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
                        </svg>
                     </span>
                     <div class="flex-1 min-w-0">
                        <p class="text-xs font-semibold">Facebook</p>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate">aljeric.alcoran</p>
                     </div>
                     <svg class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-[#1877F2] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                     </svg>
                  </a>

                  <a href="https://www.instagram.com/aljeric_inc/" target="_blank" rel="noopener noreferrer"
                     class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#E1306C]/6 dark:hover:bg-[#E1306C]/10 transition-colors duration-200">
                     <span class="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-[#E1306C]/10 dark:bg-[#E1306C]/15 group-hover:bg-[#E1306C]/20 transition-colors duration-200">
                        <svg class="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                        </svg>
                     </span>
                     <div class="flex-1 min-w-0">
                        <p class="text-xs font-semibold">Instagram</p>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate">@aljeric_inc</p>
                     </div>
                     <svg class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-[#E1306C] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                     </svg>
                  </a>

                  <a href="https://www.youtube.com/@alofficial2026" target="_blank" rel="noopener noreferrer"
                     class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FF0000]/6 dark:hover:bg-[#FF0000]/10 transition-colors duration-200">
                     <span class="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-[#FF0000]/10 dark:bg-[#FF0000]/15 group-hover:bg-[#FF0000]/20 transition-colors duration-200">
                        <svg class="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.766-.2-6.913-.2-6.913-.2s-4.148 0-6.913.2a2.84 2.84 0 0 0-1.984.839 4.27 4.27 0 0 0-.79 1.965 31.065 31.065 0 0 0-.2 3.206v1.5a31.064 31.064 0 0 0 .2 3.206 4.27 4.27 0 0 0 .79 1.965 2.84 2.84 0 0 0 1.984.839c2.715.2 6.862.2 6.862.2s4.149 0 6.914-.2a2.84 2.84 0 0 0 1.984-.839 4.26 4.26 0 0 0 .789-1.965 31.072 31.072 0 0 0 .2-3.206v-1.5a31.073 31.073 0 0 0-.2-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                        </svg>
                     </span>
                     <div class="flex-1 min-w-0">
                        <p class="text-xs font-semibold">YouTube</p>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate">@alofficial2026</p>
                     </div>
                     <svg class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                     </svg>
                  </a>

                  <a href="https://www.tiktok.com/@alalcoran" target="_blank" rel="noopener noreferrer"
                     class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/40 transition-colors duration-200">
                     <span class="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-200">
                        <svg class="w-4 h-4 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.893 2.712 2.896 2.896 0 0 1-2.896-2.896 2.896 2.896 0 0 1 2.896-2.896c.282 0 .54.04.797.1V9.219a6.31 6.31 0 0 0-.797-.05 6.34 6.34 0 0 0-6.341 6.34 6.34 6.34 0 0 0 6.341 6.341 6.34 6.34 0 0 0 6.341-6.341V8.688a8.18 8.18 0 0 0 4.786 1.526V6.79a4.8 4.8 0 0 1-1.02-.104Z"/>
                        </svg>
                     </span>
                     <div class="flex-1 min-w-0">
                        <p class="text-xs font-semibold">TikTok</p>
                        <p class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate">@alalcoran</p>
                     </div>
                     <svg class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                     </svg>
                  </a>

               </div>
            </div>
         </div>

         <!-- ── RIGHT COLUMN ── -->
         <div class="flex flex-col gap-4">

            <!-- Biography text -->
            <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-6 md:p-8 shadow-sm">
               <div class="flex items-center gap-3 mb-5">
                  <span class="w-7 h-0.5 bg-[#3150CE] rounded-full shrink-0"></span>
                  <h2 class="text-base font-bold tracking-tight">Biography</h2>
               </div>
               <div class="space-y-4 text-sm/7 text-gray-600 dark:text-gray-400">
                  <p>
                     Hello, I’m AL — a Full Stack Developer with over four years of hands-on experience building and 
                     maintaining modern, responsive web applications. I focus on creating reliable, user-friendly solutions 
                     while ensuring that applications remain scalable and adaptable as requirements evolve.
                  </p>
                  <p>
                     I began my career in 2021 as a Junior Frontend Developer, where I built a strong foundation in frontend 
                     development and developed a keen attention to user experience and interface design. This role allowed me to 
                     strengthen my skills in building responsive interfaces and working closely with evolving product requirements.
                  </p>
                  <p>
                     After a year, I transitioned into a freelance Software Developer role, where my responsibilities expanded 
                     beyond frontend work. I began handling both frontend and backend systems, taking greater ownership of 
                     the development process—from implementing features to maintaining and improving existing applications. 
                     This experience strengthened my ability to adapt quickly, solve problems independently, and ensure that 
                     systems continue to grow alongside business needs.
                  </p>
                  <p>
                     Outside of development, I enjoy activities that keep my creativity active. I spend time playing video 
                     games, reading manga and manhwa, and occasionally filming humorous videos. These creative outlets help 
                     me stay energized, curious, and inspired—qualities that I also bring into my work as a developer.
                  </p>
               </div>
            </div>

            <!-- Education -->
            <section class="fade-up fade-up-4">
               <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-5 shadow-sm group hover:border-[#3150CE]/25 dark:hover:border-[#3150CE]/25 transition-colors duration-300">
                  <div class="flex items-center gap-3 mb-6">
                     <div class="w-8 h-8 flex items-center justify-center rounded-xl bg-[#3150CE]/10 dark:bg-[#3150CE]/20">
                        <svg class="w-5 h-5 text-[#3150CE]" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.37 7.991 12 12l7.63-4.009M12 20V12m8 .5V8a1 1 0 0 0-.583-.907l-7-3.5a1 1 0 0 0-.833 0l-7 3.5A1 1 0 0 0 4 8v4.5a7.001 7.001 0 0 0 7.341 6.987c.247-.015.494-.028.659-.05"/></svg>
                     </div>
                     <h2 class="font-bold text-base">Education</h2>
                  </div>
                  <div class="grid md:grid-cols-2 gap-4">
                     <div class="p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#3150CE]/30 dark:hover:border-[#3150CE]/30 transition-colors bg-gray-50 dark:bg-gray-700/30">
                        <div class="flex items-start justify-between gap-2">
                           <div>
                              <p class="font-semibold text-sm">BS in Information Technology</p>
                              <p class="text-[#3150CE] dark:text-indigo-400 text-xs font-medium mt-1">STI College Cagayan de Oro</p>
                           </div>
                           <span class="shrink-0 text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-2 py-1">2017–2020</span>
                        </div>
                     </div>
                     <div class="p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#3150CE]/30 dark:hover:border-[#3150CE]/30 transition-colors bg-gray-50 dark:bg-gray-700/30">
                        <div class="flex items-start justify-between gap-2">
                           <div>
                              <p class="font-semibold text-sm">Information Technology Program</p>
                              <p class="text-[#3150CE] dark:text-indigo-400 text-xs font-medium mt-1">STI College Pagadian</p>
                           </div>
                           <span class="shrink-0 text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-2 py-1">2014–2016</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <!-- Q&A cards -->
            <div class="grid sm:grid-cols-2 gap-4">

               <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-5 shadow-sm transition-colors duration-300" id="age-game-card">
                  <div class="w-7 h-7 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15 mb-3.5">
                     <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v14.286c0 .473.384.857.857.857h14.286A.857.857 0 0 0 20 19.143V9.857L14.143 4H9.143Z"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4v4.8c0 .11.09.2.2.2H20M9 12h6M9 15h6M9 9h2"/>
                     </svg>
                  </div>
                  <p class="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 mb-2">Birthday</p>

                  <!-- Input state -->
                  <div id="age-input-state">
                     <div class="flex gap-2">
                        <input id="age-input" type="number" min="1" max="99" placeholder="Guess my age first?"
                           class="w-full text-xs font-medium px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40 focus:border-[#3150CE] transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button id="age-guess-btn"
                           class="cursor-pointer shrink-0 px-3 py-2 rounded-lg bg-[#3150CE] hover:bg-[#2540b0] text-white text-xs font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3150CE]/50">
                           Go
                        </button>
                     </div>
                     <p id="age-attempts-label" class="text-[0.62rem] text-gray-400 dark:text-gray-500 mt-2">2 attempts remaining</p>
                     <p id="age-feedback" class="text-[0.7rem] font-semibold mt-2 min-h-[1rem] transition-all duration-200"></p>
                  </div>

                  <!-- Correct / revealed state -->
                  <div id="age-revealed-state" class="hidden">
                     <p id="age-revealed-sub" class="text-sm font-bold"></p>
                     <p id="age-revealed-text"  class="text-[0.65rem] text-gray-400 dark:text-gray-500 mt-1"></p>
                  </div>

                  <!-- Locked state -->
                  <div id="age-locked-state" class="hidden">
                     <p class="text-xs font-semibold text-amber-500 dark:text-amber-400">Too many wrong guesses🔒</p>
                     <p id="age-locked-timer" class="text-[0.62rem] text-gray-400 dark:text-gray-500 mt-1"></p>
                  </div>
               </div>

               <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-5 shadow-sm group hover:border-[#3150CE]/25 dark:hover:border-[#3150CE]/25 transition-colors duration-300">
                  <div class="w-7 h-7 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15 mb-3.5 group-hover:bg-[#3150CE]/15 dark:group-hover:bg-[#3150CE]/25 transition-colors duration-300">
                     <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 9 9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10"/>
                     </svg>
                  </div>
                  <p class="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 mb-1.5">Hometown</p>
                  <p class="text-sm font-semibold leading-snug">Poblacion, Ramon Magsaysay, Zamboanga del Sur, 7024</p>
               </div>

               <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-5 shadow-sm group hover:border-[#3150CE]/25 dark:hover:border-[#3150CE]/25 transition-colors duration-300">
                  <div class="w-7 h-7 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15 mb-3.5 group-hover:bg-[#3150CE]/15 dark:group-hover:bg-[#3150CE]/25 transition-colors duration-300">
                     <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.493 2.493 0 0 1 7.5 21M12 18.5A2.493 2.493 0 0 0 16.5 21M12 18.5V17m-5.5 4h11M12 17c-2.5 0-4.5-2-4.5-4.5V8a4.5 4.5 0 1 1 9 0v4.5C16.5 15 14.5 17 12 17Z"/>
                     </svg>
                  </div>
                  <p class="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 mb-1.5">Free Time</p>
                  <p class="text-sm/6 text-gray-600 dark:text-gray-400">Gaming on Steam, making reels for content, reading manga & manhwa, watching anime e.g. JJK, Hell's Paradise, One Piece and more.</p>
               </div>

               <div class="bio-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-5 shadow-sm group hover:border-[#3150CE]/25 dark:hover:border-[#3150CE]/25 transition-colors duration-300">
                  <div class="w-7 h-7 flex items-center justify-center rounded-lg bg-[#3150CE]/8 dark:bg-[#3150CE]/15 mb-3.5 group-hover:bg-[#3150CE]/15 dark:group-hover:bg-[#3150CE]/25 transition-colors duration-300">
                     <svg class="w-3.5 h-3.5 text-[#3150CE]" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 5.5 3 9.5 3 14a9 9 0 0 0 18 0c0-1.5-.5-3.5-2-5M12 6c.5-1.5.5-4-2-5.5M12 6c-.5-1.5-.5-4 2-5.5"/>
                     </svg>
                  </div>
                  <p class="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 mb-1.5">Dream</p>
                  <p class="text-sm/6 text-gray-600 dark:text-gray-400">To build and run my own business someday — turning ideas into products that genuinely help people.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
`;

const setBiographySection = (element) => {
   element.innerHTML = template;

   // ── Age-guess game ────────────────────────────────────────────────────────
   const AGE_STORE_KEY = 'age_game_v1';
   const MAX_ATTEMPTS = 3;
   const LOCK_DURATION = 10 * 60 * 1000; // 10 min in ms
   const BIRTHDAY = new Date(1997, 10, 26); // Nov 26 1997 (month is 0-indexed)

   const calcAge = () => {
      const now = new Date();
      const age = now.getFullYear() - BIRTHDAY.getFullYear();
      const hasBday = now >= new Date(now.getFullYear(), BIRTHDAY.getMonth(), BIRTHDAY.getDate());
      return hasBday ? age : age - 1;
   };

   const loadState = () => {
      try { return JSON.parse(localStorage.getItem(AGE_STORE_KEY)) || {}; }
      catch { return {}; }
   };

   const saveState = (s) => localStorage.setItem(AGE_STORE_KEY, JSON.stringify(s));

   const showInputState   = () => { document.getElementById('age-input-state').classList.remove('hidden');   document.getElementById('age-revealed-state').classList.add('hidden'); document.getElementById('age-locked-state').classList.add('hidden'); };
   const showRevealState  = (text, sub) => { document.getElementById('age-input-state').classList.add('hidden');   document.getElementById('age-revealed-state').classList.remove('hidden'); document.getElementById('age-locked-state').classList.add('hidden'); document.getElementById('age-revealed-text').textContent = text; document.getElementById('age-revealed-sub').textContent = sub; };
   const showLockedState  = () => { document.getElementById('age-input-state').classList.add('hidden');   document.getElementById('age-revealed-state').classList.add('hidden'); document.getElementById('age-locked-state').classList.remove('hidden'); };

   let lockTimerInterval = null;

   const startLockTimer = (unlockAt) => {
      const timerEl = document.getElementById('age-locked-timer');
      const tick = () => {
         const remaining = unlockAt - Date.now();
         if (remaining <= 0) {
            clearInterval(lockTimerInterval);
            saveState({});
            showInputState();
            document.getElementById('age-attempts-label').textContent = '3 attempts remaining';
            document.getElementById('age-feedback').textContent = '';
            return;
         }
         const m = Math.floor(remaining / 60000);
         const s = Math.floor((remaining % 60000) / 1000);
         timerEl.textContent = `Try again in ${m}:${String(s).padStart(2, '0')}`;
      };
      tick();
      lockTimerInterval = setInterval(tick, 1000);
   };

   const initAgeGame = () => {
      const state = loadState();
      const correctAge = calcAge();

      // Already solved?
      if (state.solved) {
         showRevealState(`I'm ${correctAge} years old! 🎉`, 'November 26, 1997');
         return;
      }

      // Locked?
      if (state.lockedUntil && Date.now() < state.lockedUntil) {
         showLockedState();
         startLockTimer(state.lockedUntil);
         return;
      } else if (state.lockedUntil) {
         // Lock expired — reset
         saveState({});
      }

      // Normal — show input
      showInputState();
      const attemptsLeft = MAX_ATTEMPTS - (state.attempts || 0);
      document.getElementById('age-attempts-label').textContent =
         attemptsLeft === 1 ? '⚠️ Last attempt!' : `${attemptsLeft} attempts remaining`;

      const doGuess = () => {
         const input = document.getElementById('age-input');
         const feedback = document.getElementById('age-feedback');
         const guess = parseInt(input.value, 10);

         if (!guess || guess < 1 || guess > 99) {
            feedback.textContent = 'Enter a valid age (1–99)';
            feedback.className   = 'text-[0.7rem] font-semibold mt-2 min-h-[1rem] text-amber-500 dark:text-amber-400';
            return;
         }

         const fresh = loadState();
         const newAttempts = (fresh.attempts || 0) + 1;

         if (guess === correctAge) {
            saveState({ solved: true });
            showRevealState(`${correctAge} years old — you got it! 🎉`, 'November 26, 1997');
            return;
         }

         // Wrong guess
         const hint = guess < correctAge ? '📈 Too low!' : '📉 Too high!';

         if (newAttempts >= MAX_ATTEMPTS) {
            const unlockAt = Date.now() + LOCK_DURATION;
            saveState({ attempts: newAttempts, lockedUntil: unlockAt });
            showLockedState();
            startLockTimer(unlockAt);
         } else {
            saveState({ attempts: newAttempts });
            const left = MAX_ATTEMPTS - newAttempts;
            feedback.textContent = hint;
            feedback.className   = 'text-[0.7rem] font-semibold mt-2 min-h-[1rem] text-rose-500 dark:text-rose-400';
            document.getElementById('age-attempts-label').textContent =
               left === 1 ? '⚠️ Last attempt!' : `${left} attempts remaining`;
            input.value = '';
            input.focus();
         }
      };

      document.getElementById('age-guess-btn').addEventListener('click', doGuess);
      document.getElementById('age-input').addEventListener('keydown', (e) => {
         if (e.key === 'Enter') doGuess();
      });
   };

   initAgeGame();

   // ── Scroll-triggered fade-up via IntersectionObserver — no layout shift, no CSS dependency
   const targets = element.querySelectorAll('.bio-reveal');

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
               entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(.22,.68,0,1.2)';
               entry.target.style.opacity    = '1';
               entry.target.style.transform  = 'translateY(0)';
            }, i * 70);
            observer.unobserve(entry.target);
         });
      },
      { threshold: 0.1 }
   );

   targets.forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
   });
};

export default setBiographySection;