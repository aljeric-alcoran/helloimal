import { routes } from './js/routes.js';

export const route = (event) => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, "", event.target.href);
   handleLocation();
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