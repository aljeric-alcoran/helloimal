// Initialize theme from localStorage (or default to 'light')
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
document.documentElement.classList.toggle('dark', savedTheme === 'dark');

// Handle theme toggle
const setThemeBtn = document.getElementById('theme-toggle');

setThemeBtn.addEventListener('click', () => {
   const currentTheme = document.documentElement.getAttribute('data-theme');
   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

   // Update attributes and class
   document.documentElement.setAttribute('data-theme', newTheme);
   document.documentElement.classList.toggle('dark', newTheme === 'dark');

   // Save to localStorage
   localStorage.setItem('theme', newTheme);
});