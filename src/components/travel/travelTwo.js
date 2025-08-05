const template = `
   <div class="max-w-screen-xl mx-auto p-4 py-8 md:p-8 md:py-16 xl:py-32 text-gray-900 dark:text-white">
      <div class="flex flex-col xl:grid grid-flow-col grid-rows-3 gap-6">
         <div class="col-span-2">
            <p class="text-2xl/10 md:text-2xl font-semibold">A Nature-Filled Journey Through Bohol</p>
            <p class="mt-8 text-base/7">
               We traveled to Bohol and visited some of its most unique attractions. I saw the iconic Chocolate Hills, 
               met tiny tarsiers up close, and explored the Xzootic Animal Park and Butterfly Garden. A drive through 
               the Bilar Man-Made Forest, surrounded by tall mahogany trees, added a peaceful touch to the trip. Bohol 
               offered a mix of natural beauty, wildlife, and calm surroundings that made the experience memorable.
            </p>
         </div>
         <div id="bohol-journal-list" class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 col-span-2 row-span-2">
            <-- Content here is set by setJounalList() -->
         </div>
         <div id="bohol-journal" class="row-span-3 shadow hidden xl:block relative text-white">
            <-- Content here is set by setMainJournals()  -->
         </div>
      </div>
   </div>
`;

import { journals } from "../../js/journals";
import { setJounalList, setMainJournal } from "./setJournals";

const setTravelTwoSection = (element) => {
   element.innerHTML = template;

   const journalMainContainer = document.getElementById("bohol-journal");
   const journalListContainer = document.getElementById("bohol-journal-list");

   const boholJournals = journals.filter(journal => journal.blog === 'A Nature-Filled Journey Through Bohol');
   setMainJournal(journalMainContainer, boholJournals);
   setJounalList(journalListContainer, boholJournals);
}

export default setTravelTwoSection;