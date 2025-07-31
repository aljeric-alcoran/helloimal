const template = `
   <div class="max-w-screen-lg mx-auto py-20 xl:py-24 text-gray-900 dark:text-white">
      <img src="/img/boh-chocolate-hills.jpg" class="h-[400px] lg:px-8 w-full object-cover" alt="bohol"/>
      <div class="px-4 md:px-8 py-4">
         <div class="space-y-2 my-8">
            <p class="text-sm mb-8 text-gray-600 dark:text-gray-400">🗓️ May 25, 2023 | Al Jeric Alcoran</p>
            <h1 class="text-2xl font-bold md:py-0">Chocolate Hills</h1>
            <h2 class="mb-4 md:py-0">A Nature-Filled Journey Through Bohol</h2>
            <hr>
         </div>
         <div class="text-base/7">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some 
            form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use 
            a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the 
            first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of 
            model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore 
            always free from repetition, injected humour, or non-characteristic words etc.
         </div>

         <div>
            <h2 class="text-lg font-semibold mt-8">Photo Gallery</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4">
               <div class="aspect-[4/3] overflow-hidden">
                  <img src="/img/boh-chocolate-hills.jpg" class="w-full h-full object-cover" alt="bohol" />
               </div>
               <div class="aspect-[4/3] overflow-hidden">
                  <img src="/img/boh-chocolate-hills.jpg" class="w-full h-full object-cover" alt="bohol" />
               </div>
               <div class="aspect-[4/3] overflow-hidden">
                  <img src="/img/boh-chocolate-hills.jpg" class="w-full h-full object-cover" alt="bohol" />
               </div>
               <div class="aspect-[4/3] overflow-hidden">
                  <img src="/img/boh-chocolate-hills.jpg" class="w-full h-full object-cover" alt="bohol" />
               </div>
               <div class="aspect-[4/3] overflow-hidden">
                  <img src="/img/boh-chocolate-hills.jpg" class="w-full h-full object-cover" alt="bohol" />
               </div>
               <div class="aspect-[4/3] overflow-hidden">
                  <img src="/img/boh-chocolate-hills.jpg" class="w-full h-full object-cover" alt="bohol" />
               </div>
            </div>
         </div>
      </div>
   </div>
`

const setTripToSiquijorJournal = (container) => {
   container.innerHTML = template;
}

export default setTripToSiquijorJournal;