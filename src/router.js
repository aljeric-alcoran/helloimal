import { routeDefinitions } from './js/routes.js';

const pathToRegex = (path) => {
   const paramNames = [];
   const regexPath = path
      .replace(/\/:([a-zA-Z0-9_]+)/g, (_, name) => {
         paramNames.push(name);
         return '/([a-zA-Z0-9_-]+)';
      })
      .replace(/\//g, '\\/');
 
   return {
     regex: new RegExp(`^${regexPath}$`),
     paramNames
   };
}

const routes = routeDefinitions.map(route => {
   const { regex, paramNames } = pathToRegex(route.path);
   return {
     regex,
     paramNames,
     handler: route.handler
   };
});

const setActiveLinkClass = (currentPath) => {
   const baseClass = 'block py-2 px-3 rounded-sm md:p-0';
   const normalClass = 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
   const activeClass = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500';

   const navLinks = document.querySelectorAll('#nav-list a');

   navLinks.forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname;
      const isActive = currentPath === linkPath || currentPath.startsWith(linkPath + '/');
      
      link.className = baseClass + ' ' + (isActive ? activeClass : normalClass);
   });
}

export const handleRoute = (path) => {
   for (const route of routes) {
      const match = path.match(route.regex);
      if (match) {
         const params = {};
         route.paramNames.forEach((name, i) => {
            params[name] = match[i + 1];
         });
         route.handler(params);
         return;
      }
   }
   // setNotFoundPage(main);
}

const navigateTo = (url) => {
   history.pushState({}, '', url);
   handleRoute(url);
   setActiveLinkClass(url);
}

document.body.addEventListener('click', (e) => {
   const navLink = e.target.closest('a[nav-link]');
   const journalLink = e.target.closest('a[journal-link]');
   e.preventDefault();

   if (navLink) {
     navigateTo(navLink.getAttribute('href'));
     window.scrollTo(0, 0);
   }

   if (journalLink) {
      navigateTo(journalLink.getAttribute('href'));
      window.scrollTo(0, 0);
   }
});

window.addEventListener('popstate', () => {
   handleRoute(window.location.pathname);
});

window.addEventListener('DOMContentLoaded', () => {
   setActiveLinkClass(window.location.pathname);
});