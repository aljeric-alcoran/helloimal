const switchThemeIcon = (theme, btn) => {
   const [lightIcon, darkIcon] = btn?.children || [];
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

   switchThemeIcon(newTheme);
   // Save to localStorage
   localStorage.setItem('theme', newTheme);
}

const setTheme = () => {
   // Initialize theme from localStorage (or default to 'dark')
   const savedTheme = localStorage.getItem('theme') || 'dark';
   document.documentElement.setAttribute('data-theme', savedTheme);
   document.documentElement.classList.toggle('dark', savedTheme === 'dark');
   
   // Handle theme toggle
   const setThemeBtn = document.getElementById('theme-switch');

   setThemeBtn.addEventListener('click', handleThemeSwitch);
   switchThemeIcon(savedTheme, setThemeBtn);
}

export default setTheme;
