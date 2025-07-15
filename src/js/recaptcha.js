export const initRecaptcha = () => {
   const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

   const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
         clearInterval(interval);
         window.grecaptcha.render('recaptcha-container', {
            sitekey: recaptchaSiteKey,
            callback: (token) => {
               document.getElementById('error-container').style.display = 'none';
            }
         });
      }
   }, 100);
}
