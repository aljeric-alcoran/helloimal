const template = `
   <div class="max-w-screen-xl mx-auto p-4 py-8 md:p-8 md:py-16 xl:py-32 text-gray-900 dark:text-white">
      <div class="flex flex-col xl:grid grid-flow-col grid-rows-3 gap-6">
         <div id="siquijor-journal" class="relative row-span-3 shadow hidden xl:block relative text-white">
            <-- Content here is set by setMainJournals()  -->
         </div>
         <div class="col-span-2">
            <p class="text-2xl/10 md:text-2xl font-semibold">Exploring the Enchanting Island of Siquijor</p>
            <p class="mt-8 text-base/7">
               We traveled to Siquijor, a mystical island in the Philippines known for its natural beauty and local legends. 
               The trip was filled with serene beaches, hidden waterfalls like Cambugahay Falls, and scenic rides along quiet 
               coastal roads. I swam in crystal-clear waters, and enjoyed the island's peaceful, 
               laid-back vibe. The locals were kind and welcoming, adding to the charm of the experience. Siquijor offered a 
               perfect blend of adventure, relaxation, and culture—an unforgettable destination.
            </p>
         </div>
         <div id="siquijor-journal-list" class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 col-span-2 row-span-2">
            <-- Content here is set by setJounalList() -->
         </div>
      </div>
   </div>
`;

import { journals } from "../../js/journals";
import { setJounalList, setMainJournal } from "./setJournals";

const setTravelOneSection = (element) => {
   element.innerHTML = template;

   const journalListContainer = document.getElementById("siquijor-journal-list");
   const journalMainContainer = document.getElementById("siquijor-journal");
   
   const siquijorJournals = journals.filter(journal => journal.blog === 'Exploring the Enchanting Island of Siquijor');
   setMainJournal(journalMainContainer, siquijorJournals);
   setJounalList(journalListContainer, siquijorJournals);
}

export default setTravelOneSection;