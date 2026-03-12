import { initRecaptcha } from "./recaptcha";

export const routeDefinitions = [
   {
      path: '/',
      handler: async () => {
         const { default: setHomePage } = await import("../pages/home");
         setHomePage(document.getElementById('main-content'));
         initRecaptcha();
      }
   }, 
   {
      path: '/experience',
      handler: async () => {
         const { default: setWorkPage } = await import("../pages/work");
         setWorkPage(document.getElementById('main-content'));
      }
   }, 
   {
      path: '/travel',
      handler: async () => {
         const { default: setTravelPage } = await import("../pages/travel");
         setTravelPage(document.getElementById('main-content'));
      }
   }, 
   {
      path: '/travel/:id',
      handler: async ({ id }) => {
         const { default: setJournalPage } = await import("../pages/journal");
         setJournalPage(document.getElementById('main-content'), id);
      }
   },
   {
      path: '/projects',
      handler: async () => {
         const { default: setProjectsPage } = await import('../pages/projects');
         setProjectsPage(document.getElementById('main-content'));
      }
   }
];