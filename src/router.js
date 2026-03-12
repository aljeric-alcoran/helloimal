import { routeDefinitions } from './js/routes.js';
import { syncActiveLinks, closeMenu } from './js/navList.js';

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
};

const routes = routeDefinitions.map(route => {
   const { regex, paramNames } = pathToRegex(route.path);
   return { regex, paramNames, handler: route.handler };
});

export const handleRoute = (path) => {
   for (const route of routes) {
      const match = path.match(route.regex);
      if (match) {
         const params = {};
         route.paramNames.forEach((name, i) => { params[name] = match[i + 1]; });
         route.handler(params);
         return;
      }
   }
};

const navigateTo = (url) => {
   history.pushState({}, '', url);
   handleRoute(url);
   syncActiveLinks(); // ← always sync after pushState navigation
};

document.body.addEventListener('click', (e) => {
   const navLink     = e.target.closest('a[nav-link]');
   const journalLink = e.target.closest('a[journal-link]');
   if (navLink)     interceptLinkClick(navLink, e);
   if (journalLink) interceptLinkClick(journalLink, e);
});

const interceptLinkClick = (link, e) => {
   e.preventDefault();
   navigateTo(link.getAttribute('href'));
   window.scrollTo(0, 0);

   // Close mobile drawer if it's open
   const menu = document.getElementById('mobile-menu');
   const btn  = document.getElementById('navbar-btn');
   if (menu && btn && !menu.classList.contains('hidden')) {
      closeMenu(menu, btn);
   }
};

window.addEventListener('popstate', () => {
   handleRoute(window.location.pathname);
   syncActiveLinks(); // ← sync on browser back/forward too
});

window.addEventListener('DOMContentLoaded', () => {
   syncActiveLinks(); // ← sync on first load
});