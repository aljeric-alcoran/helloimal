import caretLeftIcon  from '@phosphor-icons/core/assets/regular/caret-left.svg?raw';
import caretRightIcon from '@phosphor-icons/core/assets/regular/caret-right.svg?raw';
import arrowUpRight   from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw';
import checkIcon      from '@phosphor-icons/core/assets/regular/check-circle.svg?raw';
import hammerIcon     from '@phosphor-icons/core/assets/regular/hammer.svg?raw';
import { icon } from './icons.js';
import { PROJECTS } from '../data/projects-data';

export const sliderState = {};
const autoplayTimers = {};

const DOT_ACTIVE   = ['bg-primary', 'w-5'];
const DOT_INACTIVE = ['bg-line-strong', 'w-1.5'];

export const buildCard = (project, index) => {
   const { id, name, description, images, tools, status, url, year } = project;
   const hasMultiple  = images.length > 1;
   const isProduction = status === 'released';
   const reversed     = index % 2 === 1;

   const statusBadge = isProduction
      ? `<span class="chip text-ink">${icon(checkIcon, 'size-3.5 text-accent')} Released</span>`
      : `<span class="chip">${icon(hammerIcon, 'size-3.5')} In development</span>`;

   const toolChips = tools.map(t => `<li class="chip">${t}</li>`).join('');

   const sliderDots = hasMultiple
      ? images.map((_, i) => `
            <button type="button"
               data-project="${id}" data-index="${i}"
               class="slider-dot h-1.5 cursor-pointer rounded-full transition-all duration-300 ${(i === 0 ? DOT_ACTIVE : DOT_INACTIVE).join(' ')}"
               aria-label="Show screenshot ${i + 1} of ${images.length}"
               ${i === 0 ? 'aria-current="true"' : ''}>
            </button>`
         ).join('')
      : '';

   const sliderImages = images.map((src, i) => `
      <img src="${src}"
           alt="${name} screenshot ${i + 1}"
           width="800" height="450"
           loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"
           class="slider-img absolute inset-0 h-full w-full object-cover transition-opacity duration-500
                  ${i === 0 ? 'opacity-100' : 'opacity-0'}"
           data-project="${id}" data-index="${i}" />`
   ).join('');

   const navBtn = (dir, label, svg, side) => `
      <button type="button" data-project="${id}" data-dir="${dir}" aria-label="${label}"
         class="slider-btn absolute ${side} top-1/2 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center
                rounded-full border border-line bg-surface/90 text-ink backdrop-blur
                transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100">
         ${icon(svg, 'size-4 pointer-events-none')}
      </button>`;

   const prevNextBtns = hasMultiple
      ? navBtn(-1, 'Previous screenshot', caretLeftIcon, 'left-3') + navBtn(1, 'Next screenshot', caretRightIcon, 'right-3')
      : '';

   const liveBtn = url
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Visit site
            ${icon(arrowUpRight, 'size-4')}
         </a>`
      : '';

   return `
      <article class="proj-card grid grid-cols-1 gap-8 border-t border-line py-12 md:grid-cols-12 md:items-center md:gap-12 md:py-20"
               data-id="${id}" data-reveal>

         <!-- Screenshots -->
         <div class="md:col-span-7 ${reversed ? 'md:order-2' : ''}">
            <div class="group relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-sunken">
               ${sliderImages}
               ${prevNextBtns}
            </div>
            ${hasMultiple ? `
               <div class="mt-4 flex items-center justify-between">
                  <div class="flex items-center gap-1.5" id="dots-${id}">${sliderDots}</div>
                  <span class="font-mono text-xs text-faint" id="counter-${id}" aria-live="polite">1 / ${images.length}</span>
               </div>` : ''}
         </div>

         <!-- Details -->
         <div class="md:col-span-5 ${reversed ? 'md:order-1' : ''}">
            <div class="flex flex-wrap items-center gap-3">
               <span class="font-mono text-sm text-faint">${year}</span>
               ${statusBadge}
            </div>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">${name}</h2>

            <div class="mt-5">
               <p class="desc-text line-clamp-4 max-w-[60ch] leading-relaxed text-muted">${description}</p>
               <button type="button"
                  class="desc-toggle mt-2 cursor-pointer text-sm font-medium text-accent underline-offset-4 hover:underline"
                  data-expanded="false" aria-expanded="false">
                  Read more
               </button>
            </div>

            <ul class="mt-7 flex flex-wrap gap-2" aria-label="Built with">${toolChips}</ul>

            ${liveBtn ? `<div class="mt-8">${liveBtn}</div>` : ''}
         </div>
      </article>`;
};

export const goToSlide = (projectId, nextIndex) => {
   const project = PROJECTS.find(p => p.id === projectId);
   if (!project) return;

   const total   = project.images.length;
   const current = sliderState[projectId] ?? 0;
   if (current === nextIndex) return;

   document.querySelectorAll(`.slider-img[data-project="${projectId}"]`).forEach((img, i) => {
      img.classList.toggle('opacity-100', i === nextIndex);
      img.classList.toggle('opacity-0', i !== nextIndex);
   });

   document.querySelectorAll(`.slider-dot[data-project="${projectId}"]`).forEach((dot, i) => {
      const active = i === nextIndex;
      DOT_ACTIVE.forEach(c => dot.classList.toggle(c, active));
      DOT_INACTIVE.forEach(c => dot.classList.toggle(c, !active));
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
   });

   const counter = document.getElementById(`counter-${projectId}`);
   if (counter) counter.textContent = `${nextIndex + 1} / ${total}`;
   sliderState[projectId] = nextIndex;
};

// Cycles screenshots every 5s. Skipped for reduced motion; stops itself once
// the slider is gone (route change) so timers never pile up between visits.
export const startAutoplay = (projectId, total) => {
   if (total <= 1) return;
   if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

   clearInterval(autoplayTimers[projectId]);
   autoplayTimers[projectId] = setInterval(() => {
      if (!document.querySelector(`.slider-img[data-project="${projectId}"]`)) {
         clearInterval(autoplayTimers[projectId]);
         return;
      }
      const current = sliderState[projectId] ?? 0;
      goToSlide(projectId, (current + 1) % total);
   }, 5000);
};
