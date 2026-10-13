import githubIcon   from '@phosphor-icons/core/assets/regular/github-logo.svg?raw';
import linkedinIcon from '@phosphor-icons/core/assets/regular/linkedin-logo.svg?raw';
import facebookIcon from '@phosphor-icons/core/assets/regular/facebook-logo.svg?raw';
import youtubeIcon  from '@phosphor-icons/core/assets/regular/youtube-logo.svg?raw';
import { icon } from '../js/icons.js';
import { NAV_ITEMS } from '../js/navList.js';

const SOCIALS = [
   { label: 'GitHub',   href: 'https://github.com/aljeric-alcoran',                       svg: githubIcon },
   { label: 'LinkedIn', href: 'https://www.linkedin.com/in/al-jeric-alcoran-a420b6213/', svg: linkedinIcon },
   { label: 'Facebook', href: 'https://www.facebook.com/aljeric.alcoran/',                 svg: facebookIcon },
   { label: 'YouTube',  href: 'https://www.youtube.com/@alcade-m8o',                       svg: youtubeIcon },
];

const template = `
   <div class="border-t border-line">
      <div class="shell flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
         <div class="flex items-center gap-3">
            <img src="/img/logo.webp" alt="" width="32" height="32" loading="lazy" class="size-8 rounded-full" />
            <div>
               <p class="text-sm font-semibold tracking-tight text-ink">Al Jeric Alcoran</p>
               <p class="text-sm text-faint">
                  &copy; <span id="copyright-year"></span> helloimal. All Rights Reserved.
               </p>
            </div>
         </div>

         <nav aria-label="Footer">
            <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
               ${NAV_ITEMS.map(({ href, label }) => `
                  <li><a href="${href}" nav-link class="text-sm text-muted transition-colors duration-200 hover:text-accent">${label}</a></li>
               `).join('')}
            </ul>
         </nav>

         <ul class="flex items-center gap-1" aria-label="Social profiles">
            ${SOCIALS.map(({ label, href, svg }) => `
               <li>
                  <a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}"
                     class="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-sunken hover:text-ink">
                     ${icon(svg, 'size-5')}
                  </a>
               </li>
            `).join('')}
         </ul>
      </div>
   </div>
`;

const setFooter = (element) => {
   element.innerHTML = template;
   document.getElementById('copyright-year').textContent = new Date().getFullYear();
};

export default setFooter;
