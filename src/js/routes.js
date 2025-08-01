import setHomePage from "../pages/home";
import setWorkPage from "../pages/work";
import setTravelPage from "../pages/travel";
import { initRecaptcha } from "../js/recaptcha";

import setTripToSiquijorJournal from "../components/travel/journal/trip-to-siquijor";

export const routes = [
   { 
      path: /^\/$/, 
      handler: () => {
         setHomePage(document.getElementById('main-content'))
         initRecaptcha();
      }
   }, {
      path: /^\/work$/, 
      handler: () => setWorkPage(document.getElementById('main-content'))
   }, { 
      path: /^\/travel$/, 
      handler: () => setTravelPage(document.getElementById('main-content')) 
   }, { 
      path: /^\/travel\/([a-zA-Z0-9_-]+)$/, 
      handler: (id) => setTripToSiquijorJournal(document.getElementById('main-content')) 
   },
];