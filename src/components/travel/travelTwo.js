const template = `
   <div class="max-w-screen-xl mx-auto p-4 py-8 md:p-8 md:py-16 xl:py-32 text-gray-900 dark:text-white">
      <div class="flex flex-col xl:grid grid-flow-col grid-rows-3 gap-6">
         <div class="col-span-2">
            <p class="text-2xl/10 md:text-2xl font-semibold">A Nature-Filled Journey Through Bohol</p>
            <p class="mt-8 text-base/7">
               I traveled to Bohol and visited some of its most unique attractions. I saw the iconic Chocolate Hills, 
               met tiny tarsiers up close, and explored the Xzootic Animal Park and Butterfly Garden. A drive through 
               the Bilar Man-Made Forest, surrounded by tall mahogany trees, added a peaceful touch to the trip. Bohol 
               offered a mix of natural beauty, wildlife, and calm surroundings that made the experience memorable.
            </p>
         </div>
         <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 col-span-2 row-span-2">
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden block xl:hidden">
               <img src="/img/boh-chocolate-hills.jpg" class="h-1/2 w-full object-cover" alt="siq-pitogo"/>
               <div class="px-4 mt-2">
                  <p class="text-lg font-semibold py-2">Chocolate Hills</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 underline text-gray-600 dark:text-gray-400">Read more...</p>
               </div>
            </div>
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden">
               <img src="/img/boh-tarsier-sanctuary.webp" class="h-1/2 w-full object-cover" alt="siq-cambugahay"/>
               <div class="px-4 mt-2 max-h-40">
                  <p class="text-lg font-semibold py-2">Tarsier Sanctuary</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 underline text-gray-600 dark:text-gray-400">Read more...</p>
               </div>
            </div>
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden">
               <img src="/img/boh-man-made-forest.jpg" class="h-1/2 w-full object-cover" alt="siq-salagdoong"/>
               <div class="px-4 mt-2">
                  <p class="text-lg font-semibold py-2">Bilar Man-Made Forest</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 underline text-gray-600 dark:text-gray-400">Read more...</p>
               </div>
            </div>
            <div class="relative rounded-sm shadow bg-white dark:bg-gray-700 overflow-hidden">
               <img src="/img/boh-xzootic.jpg" class="h-1/2 w-full object-cover" alt="siq-pitogo"/>
               <div class="px-4 mt-2">
                  <p class="text-lg font-semibold py-2">Xzootic Animal Park</p>
                  <p class="text-sm/6 line-clamp-3">
                     Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                     Ut Labore Et Dolore Magna Aliqua
                  </p>
                  <p class="text-sm/5 absolute bottom-4 left-4 underline text-gray-600 dark:text-gray-400">Read more...</p>
               </div>
            </div>
         </div>
         <div class="row-span-3 shadow hidden xl:block relative text-white">
            <img src="/img/boh-chocolate-hills.jpg" class="h-full w-full object-cover rounded-sm" alt="siq-swing"/>
            <div class="h-52 px-4 bg-gray-800/20 absolute bottom-0 items-center justify-center m-4">
               <p class="text-lg font-semibold py-2 mt-2">Chocolate Hills</p>
               <p class="text-sm/6 line-clamp-3">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt 
                  Ut Labore Et Dolore Magna Aliqua
               </p>
               <p class="text-sm/5 absolute bottom-4 left-4 underline text-gray-50">Read more...</p>
            </div>
         </div>
      </div>
   </div>
`;

const setTravelTwoSection = (element) => {
   element.innerHTML = template;
}

export default setTravelTwoSection;