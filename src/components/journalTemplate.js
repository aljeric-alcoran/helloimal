import arrowLeft    from '@phosphor-icons/core/assets/regular/arrow-left.svg?raw';
import userIcon     from '@phosphor-icons/core/assets/regular/user.svg?raw';
import calendarIcon from '@phosphor-icons/core/assets/regular/calendar-blank.svg?raw';
import clockIcon    from '@phosphor-icons/core/assets/regular/clock.svg?raw';
import { journals } from '../data/travel-data.js';
import imageSliderModal from './modal/imageSlider.js';
import { icon } from '../js/icons.js';
import { cld, photo, stripHtml } from './travel/setJournals.js';

const template = `
   <article class="pb-8 pt-8 md:pt-14">

      <!-- Header -->
      <header class="shell">
         <div class="mx-auto max-w-3xl">
            <a href="/travel" journal-link
               class="inline-flex items-center gap-1.5 rounded-full text-sm text-muted transition-colors duration-200 hover:text-ink
                      motion-safe:animate-fade-up">
               ${icon(arrowLeft, 'size-4')}
               All journals
            </a>

            <p class="mt-10 eyebrow motion-safe:animate-fade-up motion-safe:[animation-delay:60ms]">
               <span id="jt-category"></span> · <span id="jt-series"></span>
            </p>
            <h1 id="jt-title"
                class="mt-4 max-w-[20ch] text-[clamp(2.25rem,1.5rem+3.2vw,4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-ink
                       motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]"></h1>
            <div id="jt-meta"
                 class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted
                        motion-safe:animate-fade-up motion-safe:[animation-delay:180ms]"></div>
         </div>
      </header>

      <!-- Cover -->
      <div class="shell mt-10 md:mt-14">
         <div id="jt-banner"
              class="mx-auto aspect-[4/3] max-w-5xl overflow-hidden rounded-2xl bg-sunken md:aspect-[16/9]
                     motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]"></div>
      </div>

      <!-- Story -->
      <div class="shell">
         <div id="jt-content"
              class="mx-auto max-w-[65ch] py-14 text-[1.0625rem] leading-[1.8] text-ink/85 md:py-20
                     [&>p+p]:mt-6 [&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed [&>p:first-child]:text-ink"></div>
      </div>

      <!-- Gallery -->
      <section aria-labelledby="jt-gallery-title" class="shell">
         <div class="mx-auto max-w-5xl border-t border-line pt-12 md:pt-16">
            <div class="flex items-baseline justify-between gap-4">
               <h2 id="jt-gallery-title" class="text-2xl font-semibold tracking-tight text-ink">Photo gallery</h2>
               <p id="jt-gallery-count" class="font-mono text-sm text-faint"></p>
            </div>
            <div id="jt-gallery" class="mt-8 columns-2 gap-3 md:columns-3 md:gap-4"></div>
         </div>
      </section>

      <!-- More from the same trip -->
      <section id="jt-more" aria-labelledby="jt-more-title" class="shell hidden">
         <div class="mx-auto max-w-5xl pt-20 md:pt-28">
            <h2 id="jt-more-title" class="text-2xl font-semibold tracking-tight text-ink">More from this trip</h2>
            <ul id="jt-more-list" class="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"></ul>
         </div>
      </section>

      <!-- Image modal -->
      <div id="imageModal" role="dialog" aria-modal="true" aria-label="Photo viewer"
           class="fixed inset-0 z-50 hidden items-center justify-center bg-[#0b0b0d]/95 backdrop-blur-md">
      </div>
   </article>
`;

const buildGallery = (gallery, title) => {
   const container = document.getElementById('jt-gallery');
   document.getElementById('jt-gallery-count').textContent = `${gallery.length} photos`;

   gallery.forEach(({ src, w, h }, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-sunken md:mb-4 [break-inside:avoid]';
      btn.setAttribute('aria-label', `Open photo ${index + 1} of ${gallery.length}`);
      btn.innerHTML = photo(src, {
         ratio: w / h,
         widths: [400, 720],
         sizes: '(min-width: 768px) 32vw, 50vw',
         alt: `${title}, photo ${index + 1}`,
         cls: 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]',
      });
      btn.addEventListener('click', () => imageSliderModal(gallery, index, btn));
      container.appendChild(btn);
   });
};

const buildMore = (destination, spot) => {
   const others = destination.contents.filter((s) => s.id !== spot.id).slice(0, 3);
   if (!others.length) return;

   document.getElementById('jt-more-list').innerHTML = others.map((entry, i) => `
      <li data-reveal style="--i:${i}">
         <a href="${entry.href}" journal-link class="group block">
            <div class="aspect-[4/3] overflow-hidden rounded-2xl bg-sunken">
               ${photo(entry.coverImage.url, {
                  ratio: 4 / 3,
                  widths: [480, 720],
                  sizes: '(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw',
                  alt: entry.title,
                  cls: 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]',
               })}
            </div>
            <p class="mt-4 font-mono text-xs text-faint">
               <time datetime="${entry.date}">${entry.displayDate}</time> · ${entry.readDuration}
            </p>
            <h3 class="mt-1.5 text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
               ${entry.title}
            </h3>
            <p class="mt-1 text-sm leading-relaxed text-muted line-clamp-2">${stripHtml(entry.content)}</p>
         </a>
      </li>
   `).join('');
   document.getElementById('jt-more').classList.remove('hidden');
};

const setJournalTemplate = (container, destinationId, spotId) => {
   const destination = journals.find(j => j.id === destinationId);
   const spot = destination?.contents.find(p => p.id === spotId);

   if (!destination || !spot) {
      import('../pages/notFound.js').then(({ default: setNotFoundPage }) => {
         setNotFoundPage(container);
      });
      return;
   }

   container.innerHTML = template;

   // Cover image (16:9 source; the 4:3 mobile frame crops the sides)
   const { url } = spot.coverImage;
   document.getElementById('jt-banner').innerHTML = `
      <img src="${cld(url, 1280, 720)}"
           srcset="${[800, 1280, 1920].map((w) => `${cld(url, w, w * 9 / 16)} ${w}w`).join(', ')}"
           sizes="(min-width: 1024px) 64rem, 100vw"
           width="1280" height="720" fetchpriority="high" decoding="async"
           alt="${spot.title}"
           class="h-full w-full object-cover" />`;

   // Text fields
   document.getElementById('jt-category').textContent = spot.category;
   document.getElementById('jt-title').textContent    = spot.title;
   document.getElementById('jt-series').textContent   = destination.subject;
   document.getElementById('jt-content').innerHTML    = spot.content;

   document.getElementById('jt-meta').innerHTML = `
      <span class="inline-flex items-center gap-2">${icon(userIcon, 'size-4 text-faint')}${spot.author}</span>
      <span class="inline-flex items-center gap-2">${icon(calendarIcon, 'size-4 text-faint')}<time datetime="${spot.date}">${spot.displayDate}</time></span>
      <span class="inline-flex items-center gap-2">${icon(clockIcon, 'size-4 text-faint')}${spot.readDuration}</span>`;

   buildGallery(spot.gallery, spot.title);
   buildMore(destination, spot);
};

export default setJournalTemplate;
