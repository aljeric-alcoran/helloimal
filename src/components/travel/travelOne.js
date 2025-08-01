const template = `
   <div class="max-w-screen-xl mx-auto p-4 py-8 md:p-8 md:py-16 xl:py-32 text-gray-900 dark:text-white">
      <div class="flex flex-col xl:grid grid-flow-col grid-rows-3 gap-6">
         <div class="row-span-3 shadow hidden xl:block relative text-white">
            <img src="/img/siq-swing.jpg" class="h-full w-full object-cover rounded-sm" alt="siq-swing"/>
            <div class="h-52 px-4 bg-gray-800/20 absolute bottom-0 items-center justify-center m-4">
               <p class="text-lg font-semibold py-2 mt-2">Paliton Beach</p>
               <p class="text-sm/6 line-clamp-3">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                  Ut Labore Et Dolore Magna Aliqua
               </p>
               <p class="text-sm/5 absolute bottom-4 left-4  text-gray-50">Read more →</p>
            </div>
         </div>
         <div class="col-span-2">
            <p class="text-2xl/10 md:text-2xl font-semibold">Exploring the Enchanting Island of Siquijor</p>
            <p class="mt-8 text-base/7">
               I traveled to Siquijor, a mystical island in the Philippines known for its natural beauty and local legends. 
               The trip was filled with serene beaches, hidden waterfalls like Cambugahay Falls, and scenic rides along quiet 
               coastal roads. I swam in crystal-clear waters, and enjoyed the island's peaceful, 
               laid-back vibe. The locals were kind and welcoming, adding to the charm of the experience. Siquijor offered a 
               perfect blend of adventure, relaxation, and culture—an unforgettable destination.
            </p>
         </div>
         <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 col-span-2 row-span-2">
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden block xl:hidden">
               <img src="/img/siq-paliton.jpg" class="h-1/2 w-full object-cover" alt="siq-pitogo"/>
               <div class="px-4 mt-2">
                  <p class="text-lg font-semibold py-2">Paliton Beach</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 text-gray-600 dark:text-gray-400">Read more →</p>
               </div>
            </div>
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden">
               <img src="/img/siq-cambugahay.jpg" class="h-1/2 w-full object-cover" alt="siq-cambugahay"/>
               <div class="px-4 mt-2 max-h-40">
                  <p class="text-lg font-semibold py-2">Cambugahay Falls</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 text-gray-600 dark:text-gray-400">Read more →</p>
               </div>
            </div>
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden">
               <img src="/img/siq-salagdoong.jpg" class="h-1/2 w-full object-cover" alt="siq-salagdoong"/>
               <div class="px-4 mt-2">
                  <p class="text-lg font-semibold py-2">Salagdoong Beach</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 text-gray-600 dark:text-gray-400">Read more →</p>
               </div>
            </div>
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden">
               <img src="/img/siq-pitogo.jpg" class="h-1/2 w-full object-cover" alt="siq-pitogo"/>
               <div class="px-4 mt-2">
                  <p class="text-lg font-semibold py-2">Pitogo Cliff</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <a href="/travel/trip-to-siquijor" journal-link class="text-sm/5 absolute bottom-4 left-4 text-gray-600 dark:text-gray-400">Read more →</a>
               </div>
            </div>
         </div>
      </div>
   </div>
`;

const setTravelOneSection = (element) => {
   element.innerHTML = template;
}

export default setTravelOneSection;