const template = `
   <div id="journal-content" class="w-full"></div>
`
import setJournalTemplate from '../components/journalTemplate.js';

const setJournalPage = (container, journalId) => {
   container.innerHTML = template;

   const content = document.getElementById('journal-content');
   setJournalTemplate(content, journalId);
}

export default setJournalPage;