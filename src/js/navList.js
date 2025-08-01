export const setNavlist = () => {
   const navList = document.getElementById('nav-list');
   const currentPath = window.location.pathname;

   const navItems = [
      { href: '/', label: 'About' },
      { href: '/travel', label: 'Travel' },
      { href: '/work', label: 'Work' },
   ];
    
   navItems.forEach(list => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = list.href;
      a.textContent = list.label;
      a.setAttribute('nav-link', '')

      const baseClass = 'block py-2 px-3 rounded-sm md:p-0';
      const normalClass = 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
      const activeClass = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500';
   
      a.className = baseClass + ' ' + (currentPath === list.href ? activeClass : normalClass);

      li.appendChild(a);
      navList.appendChild(li);
   });
}