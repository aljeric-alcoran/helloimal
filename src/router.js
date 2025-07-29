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

   const baseClass = 'block py-2 px-3 rounded-sm md:p-0';
   const normalClass = 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
   const activeClass = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500';

   const navLinks = document.querySelectorAll('#nav-list a');

   navLinks.forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname;
      const isActive = linkPath === path;
      
      link.className = baseClass + ' ' + (isActive ? activeClass : normalClass);
   });
}

window.onpopstate = handleLocation;

document.addEventListener('DOMContentLoaded', () => {
   handleLocation();
});