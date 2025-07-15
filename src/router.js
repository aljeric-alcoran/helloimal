import setHomePage from "./pages/home";
import setWorkPage from "./pages/work";

export const route = (event) => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, "", event.target.href);
   handleLocation();
}

const routes = {
   '/': () => setHomePage(document.getElementById('main-content')),
   '/work': () => setWorkPage(document.getElementById('main-content')),
}

const handleLocation = async () => {
   const path = window.location.pathname;
   const route = routes[path] || routes['/'];
   route();
}

window.onpopstate = handleLocation;
document.addEventListener('DOMContentLoaded', () => {
   handleLocation();
});