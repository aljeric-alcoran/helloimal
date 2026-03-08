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

export const scrollTo = (elementId, route) => {
   localStorage.setItem('scrollTo', elementId);
   window.location.href = route;
} 

export const getOptimizedImageUrl = (baseUrl, originalWidth, originalHeight, maxDimension = 1300) => {
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

export const customImageUrlOptimizer = (baseUrl, width, height) => {
   return baseUrl.replace(
      "/upload/",
      `/upload/f_auto,q_auto,c_fill,g_auto,,dpr_auto,w_${width},h_${height}/`
   );
}