export const setDownloadCV = () => {
   const downloadBtn = document.getElementById('download-file-btn');

   downloadBtn.addEventListener('click', async () => {
      const url = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_CV_FILE_ID}`;
   
      const link = document.createElement('a');
      link.href = url;
      link.download = 'downloaded-file';
      document.body.appendChild(link);
      link.click();
      link.remove();
   });
}