export const initRecaptcha = () => {
   let attempts = 0;
   const maxAttempts = 30; // ~6 seconds max wait

   const tryRender = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
         window.grecaptcha.render('recaptcha-container', {
            sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
            callback: () => {
               document.getElementById('error-container').style.display = 'none';
            }
         });
         return;
      }
      if (attempts < maxAttempts) {
         attempts++;
         // Exponential backoff: 100ms, 200ms, 400ms... capped at 500ms
         const delay = Math.min(100 * Math.pow(1.5, attempts), 500);
         setTimeout(tryRender, delay);
      }
   };

   tryRender();
}
