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
   const screenWidth = window.innerWidth;

   // Use screen width, but don't upscale beyond original image width
   let targetWidth = Math.min(screenWidth, originalWidth);

   // Keep aspect ratio
   let targetHeight = Math.round((targetWidth / originalWidth) * originalHeight);

   return baseUrl.replace(
      "/upload/",
      `/upload/f_auto,q_auto,c_fill,g_auto,w_${targetWidth},h_${targetHeight}/`
   );
}

export const customImageUrlOptimizer = (baseUrl, width, height) => {
   return baseUrl.replace(
      "/upload/",
      `/upload/f_auto,q_auto,c_fill,g_auto,w_${width},h_${height}/`
   );
}