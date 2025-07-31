const template = `
   <div class="max-w-screen-xl mx-auto p-4 py-8 md:p-8 md:py-16 text-gray-900 dark:text-white">
      <h1 class="text-2xl font-bold py-4 md:py-0 text-center"><span class="text-[#3150CE]">Technical</span> skills</h1>
      <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 md:mt-24">
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="html" src="/svg/html.svg" width="64" alt="html" class="transition group-hover:drop-shadow-[0_0_24px_rgba(251,146,60,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(251,146,60,0.8)]">
            <label class="text-sm">HTML5</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="css" src="/svg/css3.svg" width="64" alt="css" class="transition group-hover:drop-shadow-[0_0_24px_rgba(59,130,246,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(59,130,246,0.8)]">
            <label class="text-sm">CSS3</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="tailwind" src="/svg/tailwindcss.svg" width="64" alt="tailwind" class="transition group-hover:drop-shadow-[0_0_24px_rgba(13,148,136,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(13,148,136,0.8)]">
            <label class="text-sm">Tailwindcss</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="vite" src="/svg/vite.svg" width="64" alt="vite" class="transition group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_16px_rgba(234,179,8,0.8)] group-hover:drop-shadow-[0_0_24px_rgba(244,114,182,0.6)]">
            <label class="text-sm">Vite</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="wordpress" src="/svg/wordpress.svg" width="64" alt="wordpress" class="transition group-hover:drop-shadow-[0_0_24px_rgba(59,130,246,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(59,130,246,0.8)]">
            <label class="text-sm">Wordpress</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="nodejs" src="/svg/nodejs.svg" width="64" alt="nodejs" class="transition group-hover:drop-shadow-[0_0_24px_rgba(34,197,94,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(34,197,94,0.8)]">
            <label class="text-sm">NodeJS</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="javascript" src="/svg/javascript.svg" width="64" alt="javascript" class="transition group-hover:drop-shadow-[0_0_24px_rgba(234,179,8,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(234,179,8,0.8)]">
            <label class="text-sm">Javascript</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="angular" src="/img/angular.webp" width="64" alt="angular" class="transition group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_24px_rgba(244,114,182,0.6)]">
            <label class="text-sm">Angular</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="vue" src="/svg/vue-js.svg" width="64" alt="vue" class="transition group-hover:drop-shadow-[0_0_24px_rgba(34,197,94,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(34,197,94,0.8)]">
            <label class="text-sm">VueJS</label>
         </div>
         <div class="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 py-4 w-[9rem] rounded-sm">
            <img id="next" src="/svg/nextjs.svg" width="64" alt="next" class="transition group-hover:drop-shadow-[0_0_24px_rgba(107,114,128,0.8)] dark:group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.8)]">
            <label class="text-sm">NextJS</label>
         </div>                
      </div>
   </div>
`;

const setTechnicalSkillsSection = (element) => {
   element.innerHTML = template;
};

export default setTechnicalSkillsSection;