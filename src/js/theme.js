// Initialize theme from localStorage (or default to 'light')
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
document.documentElement.classList.toggle('dark', savedTheme === 'dark');

// Handle theme toggle
const setThemeBtn = document.getElementById('theme-switch');

const switchThemIcon = (theme) => {
   const [lightIcon, darkIcon] = setThemeBtn?.children || [];
   const isDark = theme === 'dark';
   lightIcon.classList.toggle('hidden', isDark);
   darkIcon.classList.toggle('hidden', !isDark);
}

const handleThemeSwitch = () => {
   const currentTheme = document.documentElement.getAttribute('data-theme');
   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

   // Update attributes and class
   document.documentElement.setAttribute('data-theme', newTheme);
   document.documentElement.classList.toggle('dark', newTheme === 'dark');

   switchThemIcon(newTheme);
   // Save to localStorage
   localStorage.setItem('theme', newTheme);
}

setThemeBtn.addEventListener('click', handleThemeSwitch);
switchThemIcon(savedTheme);
