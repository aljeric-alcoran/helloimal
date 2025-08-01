export const initRecaptcha = () => {
   const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
         clearInterval(interval);
         window.grecaptcha.render('recaptcha-container', {
            sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
            callback: (token) => {
               document.getElementById('error-container').style.display = 'none';
            }
         });
      }
   }, 200);
}
