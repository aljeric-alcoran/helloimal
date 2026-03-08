const NAV_ITEMS = [
   { href: '/',           label: 'About'      },
   { href: '/experience', label: 'Experience' },
   { href: '/travel',     label: 'Travel'     },
];

const currentPath = () => window.location.pathname;

const isActive = (href) => href === '/' ? currentPath() === '/' : currentPath() === href || currentPath().startsWith(href + '/');

const DESKTOP_BASE   = 'relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40';
const DESKTOP_NORMAL = 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/70';
const DESKTOP_ACTIVE = 'text-[#3150CE] dark:text-[#818cf8] bg-[#3150CE]/8 dark:bg-[#818cf8]/10';

const MOBILE_BASE    = 'block px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-200 focus:outline-none';
const MOBILE_NORMAL  = 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800';
const MOBILE_ACTIVE  = 'text-[#3150CE] dark:text-[#818cf8] bg-[#3150CE]/8 dark:bg-[#818cf8]/10';

export const buildNavItem = (item, isMobile, onClose) => {
   const li = document.createElement('li');
   const a  = document.createElement('a');

   a.href       = item.href;
   a.textContent = item.label;
   a.setAttribute('nav-link', '');

   const active = isActive(item.href);

   if (isMobile) {
      a.className = `${MOBILE_BASE} ${active ? MOBILE_ACTIVE : MOBILE_NORMAL}`;
      li.onclick  = onClose;
   } else {
      a.className = `${DESKTOP_BASE} ${active ? DESKTOP_ACTIVE : DESKTOP_NORMAL}`;
   }

   li.appendChild(a);
   return li;
};

export const populateNavLists = (onClose) => {
   const desktop = document.getElementById('nav-list');
   const mobile  = document.getElementById('nav-list-mobile');

   NAV_ITEMS.forEach(item => {
      desktop?.appendChild(buildNavItem(item, false, null));
      mobile?.appendChild(buildNavItem(item, true,  onClose));
   });
};

// Update active classes without re-rendering (SPA navigation)
export const syncActiveLinks = () => {
   document.querySelectorAll('[nav-link]').forEach(a => {
      const href   = new URL(a.href, location.origin).pathname;
      const active = isActive(href);
      const mobile = a.closest('#nav-list-mobile') !== null;

      if (mobile) {
         a.className = `${MOBILE_BASE} ${active ? MOBILE_ACTIVE : MOBILE_NORMAL}`;
      } else {
         // Remove old dot if any
         a.querySelector('span')?.remove();
         a.className = `${DESKTOP_BASE} ${active ? DESKTOP_ACTIVE : DESKTOP_NORMAL}`;
      }
   });
};

// ─── Mobile drawer toggle ──────────────────────────────────────────────────────
export const openMenu  = (menu, btn) => {
   menu.classList.remove('hidden');
   btn.setAttribute('aria-expanded', 'true');
   // Animate bars to X
   document.getElementById('bar-1').style.cssText = 'transform: translateY(7px) rotate(45deg)';
   document.getElementById('bar-2').style.cssText = 'opacity: 0; transform: scaleX(0)';
   document.getElementById('bar-3').style.cssText = 'transform: translateY(-7px) rotate(-45deg)';
};

export const closeMenu = (menu, btn) => {
   menu.classList.add('hidden');
   btn.setAttribute('aria-expanded', 'false');
   document.getElementById('bar-1').style.cssText = '';
   document.getElementById('bar-2').style.cssText = '';
   document.getElementById('bar-3').style.cssText = '';
};

export const toggleMenu = (menu, btn) => {
   menu.classList.contains('hidden') ? openMenu(menu, btn) : closeMenu(menu, btn);
};