export const scrollToSection = (targetElement) => {
   document.getElementById(targetElement).scrollIntoView({
     behavior: 'smooth',
     block: 'start'
   });
}

export const downloadCV = async () => {
   const fileId = import.meta.env.VITE_CV_FILE_ID;
   const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
 
   try {
      const response = await fetch(url, { method: 'HEAD' });
      const disposition = response.headers.get('Content-Disposition');
      let fileName = 'downloaded-file';
 
      if (disposition) {
         const match = disposition.match(/filename="?(.+?)"?$/);
         if (match?.[1]) fileName = match[1];
      }
 
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   } catch (err) {
      console.error('Download failed:', err);
   }
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