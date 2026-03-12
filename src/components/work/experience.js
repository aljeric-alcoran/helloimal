const template = `
   <style>
      @keyframes fadeUp {
         from { opacity: 0; transform: translateY(24px); }
         to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes lineGrow {
         from { height: 0; }
         to   { height: 100%; }
      }
      @keyframes dotPop {
         0%   { transform: scale(0); opacity: 0; }
         70%  { transform: scale(1.4); }
         100% { transform: scale(1); opacity: 1; }
      }
      .fade-up { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) both; }
      .fade-up-1 { animation-delay: 0.05s; }
      .fade-up-2 { animation-delay: 0.15s; }
      .fade-up-3 { animation-delay: 0.25s; }
      .fade-up-4 { animation-delay: 0.35s; }
      .fade-up-5 { animation-delay: 0.45s; }

      .timeline-line {
         position: absolute; left: 0; top: 0; width: 2px;
         background: linear-gradient(to bottom, #3150CE, #818cf8, transparent);
         animation: lineGrow 1.2s ease both; animation-delay: 0.3s;
      }
      .timeline-dot { animation: dotPop 0.4s cubic-bezier(.22,.68,0,1.2) both; }

      .skill-chip { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      .skill-chip:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(49,80,206,0.18); }

      .exp-card { transition: box-shadow 0.25s ease, transform 0.25s ease; }
      .exp-card:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(49,80,206,0.10); }

      .hero-gradient { background: linear-gradient(135deg, #3150CE 0%, #4f6ef7 60%, #818cf8 100%); }

      .stat-card {
         background: rgba(255,255,255,0.12); backdrop-filter: blur(8px);
         border: 1px solid rgba(255,255,255,0.2); transition: background 0.2s;
      }
      .stat-card:hover { background: rgba(255,255,255,0.2); }

      .tag-pill { background: rgba(49,80,206,0.08); color: #3150CE; border: 1px solid rgba(49,80,206,0.15); }
      html[data-theme='dark'] .tag-pill { background: rgba(99,132,255,0.12); color: #818cf8; border-color: rgba(99,132,255,0.2); }
      html[data-theme='dark'] .hero-gradient { background: linear-gradient(135deg, #1e3a9f 0%, #3150CE 60%, #4f6ef7 100%); }
   </style>

   <!-- HERO -->
   <div class="hero-gradient relative overflow-hidden pt-20">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 28px 28px;"></div>
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20" style="background: radial-gradient(circle, #fff 0%, transparent 70%);"></div>
      <div class="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-10" style="background: radial-gradient(circle, #fff 0%, transparent 70%);"></div>

      <div class="relative max-w-screen-md mx-auto px-6 py-16 md:py-24">
         <div class="fade-up fade-up-2">
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
               Al Jeric <span class="text-white/70">Alcoran</span>
            </h1>
            <p class="mt-3 text-white/80 text-lg font-medium">· Full Stack Developer</p>
            <p class="mt-3 text-white/80 text-lg font-medium">· 4+ Years Experience</p>
         </div>

         <div class="fade-up fade-up-3 grid grid-cols-3 gap-3 mt-10">
            <div class="stat-card rounded-xl p-4 text-center"><p class="text-2xl font-bold text-white">4+</p><p class="text-white/60 text-xs mt-1">Years Exp.</p></div>
            <div class="stat-card rounded-xl p-4 text-center"><p class="text-2xl font-bold text-white">2</p><p class="text-white/60 text-xs mt-1">Companies</p></div>
            <div class="stat-card rounded-xl p-4 text-center"><p class="text-2xl font-bold text-white">10+</p><p class="text-white/60 text-xs mt-1">Technologies</p></div>
         </div>

         <div class="fade-up fade-up-4 flex items-center gap-3 mt-8">
            <button id="download-file" type="button" class="cursor-pointer inline-flex items-center gap-2 bg-white text-[#3150CE] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
               Download CV
            </button>
            <button id="contact-me" type="button" class="cursor-pointer inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
               Contact Me
            </button>
         </div>

         <div class="fade-up fade-up-5 flex flex-wrap items-center gap-4 mt-6">
            <a href="https://helloimal.vercel.app" target="_blank" class="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
               <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.168 3.809a9 9 0 1 0 2.027 9.608M13.168 3.809A9 9 0 0 0 3.8 12.06M3.8 12.06H3"/></svg>
               helloimal.vercel.app
            </a>
            <a href="https://github.com/aljeric-alcoran" target="_blank" class="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
               <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
               aljeric-alcoran
            </a>
            <a href="https://www.linkedin.com/in/al-jeric-alcoran-a420b6213/" target="_blank" class="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
               <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/><path d="M7.2 8.809H4V19.5h3.2V8.809Z"/></svg>
               LinkedIn
            </a>
         </div>
      </div>
   </div>

   <!-- BODY -->
   <div class="max-w-screen-md mx-auto px-4 md:px-0 pb-6 text-gray-900 dark:text-white">

      <!-- Professional Summary -->
      <section class="fade-up fade-up-1 mt-10">
         <div class="exp-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-5">
               <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#3150CE]/10 dark:bg-[#3150CE]/20">
                  <svg class="w-5 h-5 text-[#3150CE]" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
               </div>
               <h2 class="font-bold text-lg">Professional Summary</h2>
            </div>
            <p class="text-sm/7 text-gray-600 dark:text-gray-400">
               Motivated and detail-oriented Software Developer with 4+ years of hands-on experience across frontend and backend development.
               Proven ability to build and maintain scalable web applications, design secure backend services, and deliver responsive,
               user-friendly interfaces. Experienced in Agile Scrum environments, cross-functional collaboration, and full product
               lifecycle — from wireframing in Figma to production deployment.
            </p>
         </div>
      </section>

      <!-- Technical Skills -->
      <section class="fade-up fade-up-2 mt-6">
         <div class="exp-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
               <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#3150CE]/10 dark:bg-[#3150CE]/20">
                  <svg class="w-5 h-5 text-[#3150CE]" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/></svg>
               </div>
               <h2 class="font-bold text-lg">Technical Skills</h2>
            </div>
            <div class="space-y-5">
               <div>
                  <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2.5">Languages</p>
                  <div class="flex flex-wrap gap-2">
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">JavaScript</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">TypeScript</span>
                  </div>
               </div>
               <div>
                  <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2.5">Frameworks & Libraries</p>
                  <div class="flex flex-wrap gap-2">
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">React</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Next.js</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Tanstack React Query</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Angular</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Vue.js</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Express.js</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                  </div>
               </div>
               <div>
                  <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2.5">Tools & Technologies</p>
                  <div class="flex flex-wrap gap-2">
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">WordPress</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Git</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">GitHub</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Docker</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Postman</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Figma</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">VS Code</span>
                  </div>
               </div>
               <div>
                  <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2.5">Testing</p>
                  <div class="flex flex-wrap gap-2">
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Mocha</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Jest</span>
                     <span class="skill-chip tag-pill text-xs font-medium px-3 py-1 rounded-full">Supertest</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Work Experience -->
      <section class="fade-up fade-up-3 mt-6">
         <div class="exp-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden">
            <div class="px-6 md:px-8 py-6 border-b border-gray-100 dark:border-gray-700">
               <div class="flex items-center gap-3">
                  <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#3150CE]/10 dark:bg-[#3150CE]/20">
                     <svg class="w-5 h-5 text-[#3150CE]" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/></svg>
                  </div>
                  <div>
                     <h2 class="font-bold text-lg">Work Experience</h2>
                     <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">4+ years · 2 companies</p>
                  </div>
               </div>
            </div>

            <div class="px-6 md:px-8 py-8">

               <!-- Job 1: Easypick -->
               <div class="relative pl-8 pb-10">
                  <div class="timeline-line" style="height:100%;"></div>
                  <div class="timeline-dot absolute -left-[5px] top-1 w-3 h-3 rounded-full bg-[#3150CE] border-2 border-white dark:border-gray-800 shadow"></div>
                  <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                     <div>
                        <h3 class="font-bold text-base">Software Developer — Freelance</h3>
                        <p class="text-sm text-[#3150CE] dark:text-indigo-400 font-medium mt-0.5">Easypick</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 flex items-center gap-1">
                           <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957l-.573.699-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.31-.38a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/></svg>
                           Norway | Remote Setup
                        </p>
                     </div>
                     <span class="shrink-0 inline-flex items-center gap-1 text-xs border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-lg px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 font-medium">
                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                        Aug 2022 — Jul 2025
                     </span>
                  </div>
                  <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3150CE]/50"></span><span>Developed and maintained core features of Easypick's key-sharing system — migrating from <strong class="text-gray-800 dark:text-gray-200">Angular</strong> to <strong class="text-gray-800 dark:text-gray-200">React + TypeScript</strong> on the frontend and <strong class="text-gray-800 dark:text-gray-200">Node.js / Express.js</strong> on the backend, ensuring system stability and scalability.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3150CE]/50"></span><span>Designed and implemented secure, modular backend services for key access control, validation workflows, and activity logging.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3150CE]/50"></span><span>Wrote comprehensive backend unit and integration tests using <strong class="text-gray-800 dark:text-gray-200">Mocha</strong>, improving API reliability and preventing regressions in production deployments.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3150CE]/50"></span><span>Built reusable, type-safe frontend components improving maintainability, state management clarity, and overall user experience.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3150CE]/50"></span><span>Participated in Agile sprint planning — translating business requirements into technical tasks, providing effort estimates, and delivering features on schedule.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3150CE]/50"></span><span>Designed and developed Easypick's official corporate website using <strong class="text-gray-800 dark:text-gray-200">WordPress</strong>, establishing the company's public-facing digital presence.</span></li>
                  </ul>
                  <div class="flex flex-wrap gap-1.5 mt-5">
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Angular</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">React</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">TypeScript</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Node.js</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Express.js</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Mocha</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">WordPress</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">REST APIs</span>
                  </div>
               </div>

               <!-- Job 2: Nextlogic -->
               <div class="relative pl-8">
                  <div class="timeline-dot absolute -left-[5px] top-1 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-500 border-2 border-white dark:border-gray-800"></div>
                  <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                     <div>
                        <h3 class="font-bold text-base">Junior Frontend Developer</h3>
                        <p class="text-sm text-[#3150CE] dark:text-indigo-400 font-medium mt-0.5">Nextlogic Distribution Inc.</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 flex items-center gap-1">
                           <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957l-.573.699-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.31-.38a7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/></svg>
                           Cagayan de Oro City
                        </p>
                     </div>
                     <span class="shrink-0 inline-flex items-center gap-1 text-xs border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-lg px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 font-medium">
                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                        Mar 2021 — Jul 2022
                     </span>
                  </div>
                  <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-500"></span><span>Built and maintained a <strong class="text-gray-800 dark:text-gray-200">Human Resource Information System (HRIS)</strong> using <strong class="text-gray-800 dark:text-gray-200">Vue.js</strong> and Tailwind CSS — developing responsive modules for employee management, records tracking, and administrative workflows.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-500"></span><span>Developed a responsive <strong class="text-gray-800 dark:text-gray-200">Hotel Reservation System</strong> using <strong class="text-gray-800 dark:text-gray-200">React</strong> and Tailwind CSS, implementing room availability management, booking workflows, and reservation tracking.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-500"></span><span>Integrated RESTful APIs for both systems, ensuring accurate data synchronization, efficient state management, and improved UX.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-500"></span><span>Designed reusable, modular UI components with a <strong class="text-gray-800 dark:text-gray-200">mobile-first approach</strong>, ensuring cross-device compatibility and consistent design implementation.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-500"></span><span>Created wireframes and UI mockups in <strong class="text-gray-800 dark:text-gray-200">Figma</strong> to support intuitive user flows and a cohesive design system.</span></li>
                     <li class="flex gap-2.5"><span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-500"></span><span>Collaborated with backend developers to optimize API integration, reduce redundant requests, and enhance application performance. Participated in Agile Scrum sprints.</span></li>
                  </ul>
                  <div class="flex flex-wrap gap-1.5 mt-5">
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Vue.js</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">React</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Tailwind CSS</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">REST APIs</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Figma</span>
                     <span class="text-[11px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">Agile / Scrum</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Education -->
      <section class="fade-up fade-up-4 mt-6">
         <div class="exp-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
               <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-[#3150CE]/10 dark:bg-[#3150CE]/20">
                  <svg class="w-5 h-5 text-[#3150CE]" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.37 7.991 12 12l7.63-4.009M12 20V12m8 .5V8a1 1 0 0 0-.583-.907l-7-3.5a1 1 0 0 0-.833 0l-7 3.5A1 1 0 0 0 4 8v4.5a7.001 7.001 0 0 0 7.341 6.987c.247-.015.494-.028.659-.05"/></svg>
               </div>
               <h2 class="font-bold text-lg">Education</h2>
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

      <!-- CTA Footer -->
      <section class="fade-up fade-up-5 mt-6">
         <div class="relative overflow-hidden rounded-2xl hero-gradient p-5 md:p-8 text-center">
            <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 24px 24px;"></div>
            <div class="relative">
               <p class="text-white font-bold text-xl">Interested in working together?</p>
               <p class="text-white/70 text-sm mt-2">Let's build something great. Reach out and I'll get back to you promptly.</p>
               <div class="flex items-center justify-center gap-3 mt-6">
                  <button id="contact-me-footer" type="button" class="cursor-pointer inline-flex items-center gap-2 bg-white text-[#3150CE] font-semibold text-xs md:text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition-all focus:outline-none focus:ring-2 focus:ring-white/50">
                     <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                     Get in Touch
                  </button>
                  <button id="download-file-footer" type="button" class="cursor-pointer inline-flex items-center gap-2 bg-white/15 text-white text-xs md:text-sm border border-white/30 font-medium px-6 py-2.5 rounded-lg hover:bg-white/25 transition-all focus:outline-none focus:ring-2 focus:ring-white/30">
                     <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
                     Download CV
                  </button>
               </div>
            </div>
         </div>
      </section>

   </div>
`;

import { downloadCV } from "../../js/helpers";
import { scrollTo } from "../../js/helpers";

const setWorkExperience = (element) => {
   element.innerHTML = template;

   document.getElementById('download-file').addEventListener('click', () => downloadCV());
   document.getElementById('contact-me').addEventListener('click', () => scrollTo('contact', '/'));
   document.getElementById('contact-me-footer').addEventListener('click', () => scrollTo('contact', '/'));
   document.getElementById('download-file-footer').addEventListener('click', () => downloadCV());
};

export default setWorkExperience;
