export const scrollToSection = (targetElement) => {
   document.getElementById(targetElement).scrollIntoView({
     behavior: 'smooth',
     block: 'start'
   });
}

export const downloadCV = () => {
   const fileId = import.meta.env.VITE_CV_FILE_ID;
   const link = document.createElement('a');
   link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
   link.download = 'Al_Jeric_Alcoran_CV.pdf';
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
};

export const getFullSizedImage = (baseUrl, originalWidth, originalHeight, maxDimension = 1300) => {
   const screenWidth = window.innerWidth;
   const minDimension = 1000;

   let targetWidth = Math.min(
      Math.max(screenWidth, minDimension),
      originalWidth,
      maxDimension
   );

   let targetHeight = Math.round((targetWidth / originalWidth) * originalHeight);

   return baseUrl.replace(
      "/upload/",
      `/upload/f_auto,q_auto,c_fill,g_auto,dpr_auto,w_${targetWidth},h_${targetHeight}/`
   );
}

export const generateImageThumbnail = (baseUrl, width, height) => {
   return baseUrl.replace(
      "/upload/",
      `/upload/f_auto,q_auto,c_fill,g_auto,dpr_auto,w_${width},h_${height}/`
   );
}
// Scrolls to the Home contact section from any route. Off Home, it routes
// to "/" first and waits for the section to render.
export const goToContact = () => {
   const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   const scroll = (el) => el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

   const existing = document.getElementById('contact');
   if (window.location.pathname === '/' && existing) return scroll(existing);

   history.pushState({}, '', '/');
   window.dispatchEvent(new PopStateEvent('popstate'));

   const started = performance.now();
   const wait = () => {
      const el = document.getElementById('contact');
      if (el && el.childElementCount) return scroll(el);
      if (performance.now() - started < 3000) requestAnimationFrame(wait);
   };
   requestAnimationFrame(wait);
};
