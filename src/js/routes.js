import setHomePage from "../pages/home";
import setWorkPage from "../pages/work";
import { initRecaptcha } from "../js/recaptcha";

export const routes = {
   '/': () => {
      setHomePage(document.getElementById('main-content'))
      initRecaptcha();
   },
   '/work': () => setWorkPage(document.getElementById('main-content')),
}