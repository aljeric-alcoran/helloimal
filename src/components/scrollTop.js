import arrowUpIcon from '@phosphor-icons/core/assets/regular/arrow-up.svg?raw';
import { icon } from '../js/icons.js';

const template = `
   <button id="scrollUpBtn" type="button" aria-label="Back to top" tabindex="-1"
      class="fixed bottom-4 right-4 z-20 flex size-11 cursor-pointer items-center justify-center rounded-full
             border border-line bg-surface/90 text-ink shadow-[0_8px_24px_-12px_rgb(24_24_27/0.35)] backdrop-blur
             translate-y-4 opacity-0 pointer-events-none
             transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
             hover:-translate-y-0.5 md:bottom-6 md:right-6">
      ${icon(arrowUpIcon, 'size-5')}
   </button>
`;

// Shows the button once the visitor has scrolled past the first ~1.5 screens.
// A sentinel + IntersectionObserver avoids running code on every scroll frame.
const setScrollToTop = (element) => {
   element.insertAdjacentHTML('afterbegin', template);
   const btn = document.getElementById('scrollUpBtn');

   const sentinel = document.createElement('div');
   sentinel.setAttribute('aria-hidden', 'true');
   sentinel.className = 'pointer-events-none absolute left-0 top-0 h-[150vh] w-px';
   document.getElementById('app').firstElementChild.prepend(sentinel);

   new IntersectionObserver(([entry]) => {
      const show = !entry.isIntersecting;
      btn.classList.toggle('opacity-0', !show);
      btn.classList.toggle('translate-y-4', !show);
      btn.classList.toggle('pointer-events-none', !show);
      btn.tabIndex = show ? 0 : -1;
   }).observe(sentinel);

   btn.addEventListener('click', () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
   });
};

export default setScrollToTop;
