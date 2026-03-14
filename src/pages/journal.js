const template = `
   <div id="journal-content" class="w-full"></div>
`
import setJournalTemplate from '../components/journalTemplate.js';

const setJournalPage = (container, destinationId, touristSpotId) => {
   container.innerHTML = template;

   const content = document.getElementById('journal-content');
   setJournalTemplate(content, destinationId, touristSpotId);
}

export default setJournalPage;