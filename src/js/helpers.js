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
   link.remove();
}