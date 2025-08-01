import setHomePage from "../pages/home";
import setWorkPage from "../pages/work";
import setTravelPage from "../pages/travel";
import setJournalPage from "../pages/journal";
import { initRecaptcha } from "../js/recaptcha";

export const routeDefinitions = [
   {
      path: '/',
      handler: () => {
         setHomePage(document.getElementById('main-content'))
         initRecaptcha();
      }
   }, {
      path: '/work',
      handler: () => setWorkPage(document.getElementById('main-content'))
   }, {
      path: '/travel',
      handler: () => setTravelPage(document.getElementById('main-content')) 
   }, {
      path: '/travel/:id',
      handler: ({ id }) => setJournalPage(document.getElementById('main-content'), id)
   }
];