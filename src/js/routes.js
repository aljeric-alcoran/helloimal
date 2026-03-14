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
      path: '/career',
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
      path: '/travel/:destinationId/:touristSpotId',
      handler: async ({ destinationId, touristSpotId }) => {
         const { default: setJournalPage } = await import("../pages/journal");
         setJournalPage(document.getElementById('main-content'), destinationId, touristSpotId);
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