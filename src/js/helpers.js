export const scrollToSection = (targetElement) => {
   document.getElementById(targetElement).scrollIntoView({
     behavior: 'smooth',
     block: 'start'
   });
}

export const downloadCV = () => {
   const url = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_CV_FILE_ID}`;

   const link = document.createElement('a');
   link.href = url;
   link.download = 'downloaded-file';
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
}

export const scrollTo = (elementId, route) => {
   localStorage.setItem('scrollTo', elementId);
   window.location.href = route;
} 

export const getOptimizedImageUrl = (baseUrl, originalWidth, originalHeight) => {
   const width = window.innerWidth;
   let targetWidth, targetHeight;
 
   if (width >= 1024) {
      targetWidth = Math.min(originalWidth, 1200);
   } else if (width >= 768) {
      targetWidth = Math.min(originalWidth, 800);
   } else {
      targetWidth = Math.min(originalWidth, 400);
   }
 
   targetHeight = Math.round((targetWidth / originalWidth) * originalHeight);
 
   return baseUrl.replace(
      "/upload/",
      `/upload/f_auto,q_auto,c_fill,g_auto,w_${targetWidth},h_${targetHeight}/`
   );
}