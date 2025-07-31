import setHomePage from "../pages/home";
import setWorkPage from "../pages/work";
import setTravelPage from "../pages/travel";
import { initRecaptcha } from "../js/recaptcha";

import setTripToSiquijorJournal from "../components/travel/journal/trip-to-siquijor";

export const routes = {
   '/': () => {
      setHomePage(document.getElementById('main-content'))
      initRecaptcha();
   },
   '/work': () => setWorkPage(document.getElementById('main-content')),
   '/travel': () => setTravelPage(document.getElementById('main-content')),
   '/journal': () => setTripToSiquijorJournal(document.getElementById('main-content')), // Temporary only
}