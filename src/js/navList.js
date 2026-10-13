export const NAV_ITEMS = [
   { href: '/', label: 'Profile' },
   { href: '/career', label: 'Career' },
   { href: '/travel', label: 'Travel' },
   { href: '/projects', label: 'Projects' },
];

const currentPath = () => window.location.pathname;

const isActive = (href) =>
   href === '/'
      ? currentPath() === '/'
      : currentPath() === href || currentPath().startsWith(href + '/');

const DESKTOP_BASE   = 'relative inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium transition-colors duration-200';
const DESKTOP_NORMAL = 'text-muted hover:text-ink';
const DESKTOP_ACTIVE = 'bg-primary-subtle text-accent';

const MOBILE_BASE    = 'flex items-center justify-between border-b border-line/70 py-3.5 text-lg font-medium tracking-tight transition-colors duration-200';
const MOBILE_NORMAL  = 'text-muted hover:text-ink';
const MOBILE_ACTIVE  = 'text-accent';


export const buildNavItem = (item, isMobile) => {
   const li = document.createElement('li');
   const a  = document.createElement('a');

   a.href = item.href;
   a.textContent = item.label;
   a.setAttribute('nav-link', '');

   const active = isActive(item.href);
   if (active) a.setAttribute('aria-current', 'page');

   if (isMobile) {
      a.className = `${MOBILE_BASE} ${active ? MOBILE_ACTIVE : MOBILE_NORMAL}`;
   } else {
      a.className = `${DESKTOP_BASE} ${active ? DESKTOP_ACTIVE : DESKTOP_NORMAL}`;
   }

   li.appendChild(a);
   return li;
};

// ── Populate both desktop + mobile lists ──────────────────────────────────────
export const populateNavLists = () => {
   const desktop = document.getElementById('nav-list');
   const mobile  = document.getElementById('nav-list-mobile');

   NAV_ITEMS.forEach(item => {
      desktop?.appendChild(buildNavItem(item, false));
      mobile?.appendChild(buildNavItem(item, true));
   });
};

// ── Sync active classes after every SPA navigation ───────────────────────────
export const syncActiveLinks = () => {
   document.querySelectorAll('#nav-list [nav-link], #nav-list-mobile [nav-link]').forEach(a => {
      const href   = new URL(a.href, location.origin).pathname;
      const active = isActive(href);
      const mobile = a.closest('#nav-list-mobile') !== null;

      if (active) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');

      if (mobile) {
         a.className = `${MOBILE_BASE} ${active ? MOBILE_ACTIVE : MOBILE_NORMAL}`;
      } else {
         a.className = `${DESKTOP_BASE} ${active ? DESKTOP_ACTIVE : DESKTOP_NORMAL}`;
      }
   });
};

// ── Mobile drawer ─────────────────────────────────────────────────────────────
export const openMenu = (menu, btn) => {
   menu.classList.remove('hidden');
   btn.setAttribute('aria-expanded', 'true');
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
   syncActiveLinks(); // sync active state whenever drawer closes
};

export const toggleMenu = (menu, btn) => {
   menu.classList.contains('hidden') ? openMenu(menu, btn) : closeMenu(menu, btn);
};