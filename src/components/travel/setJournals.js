import arrowUpRight from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw';
import { icon } from '../../js/icons.js';

export const stripHtml = (html) => html.replace(/<\/?[^>]+(>|$)/g, '').replace(/\s+/g, ' ').trim();

// Cloudinary crop at a fixed size (auto format/quality, subject-aware gravity)
export const cld = (url, w, h) =>
   url.replace('/upload/', `/upload/f_auto,q_auto,c_fill,g_auto,w_${w},h_${Math.round(h)}/`);

// Responsive <img> cropped to `ratio` (width / height). The parent sets the box.
export const photo = (url, { ratio, widths, sizes, alt, eager = false, cls = '' }) => {
   const [base] = widths;
   return `
      <img src="${cld(url, base, base / ratio)}"
           srcset="${widths.map((w) => `${cld(url, w, w / ratio)} ${w}w`).join(', ')}"
           sizes="${sizes}"
           width="${base}" height="${Math.round(base / ratio)}"
           alt="${alt}"
           ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"
           class="h-full w-full object-cover ${cls}" />`;
};

const meta = (entry) => `
   <p class="font-mono text-xs text-faint">
      <time datetime="${entry.date}">${entry.displayDate}</time> · ${entry.readDuration}
   </p>`;

// Large lead story for a destination
export const buildFeaturedCard = (entry) => `
   <a href="${entry.href}" journal-link class="group block">
      <div class="aspect-[4/3] overflow-hidden rounded-2xl bg-sunken md:aspect-[5/4]">
         ${photo(entry.coverImage.url, {
            ratio: 5 / 4,
            widths: [640, 960, 1280],
            sizes: '(min-width: 768px) 58vw, 100vw',
            alt: entry.title,
            cls: 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]',
         })}
      </div>
      <div class="mt-5 flex items-start justify-between gap-6">
         <div>
            ${meta(entry)}
            <h3 class="mt-2 text-2xl font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent md:text-[1.75rem]">
               ${entry.title}
            </h3>
            <p class="mt-2 max-w-[60ch] text-muted leading-relaxed line-clamp-2">${stripHtml(entry.content)}</p>
         </div>
         <span class="mt-1 hidden size-10 shrink-0 items-center justify-center rounded-full border border-line text-muted
                      transition-colors duration-200 group-hover:border-accent group-hover:text-accent sm:flex">
            ${icon(arrowUpRight, 'size-4')}
         </span>
      </div>
   </a>`;

// Compact row: thumbnail beside the text
export const buildSmallCard = (entry) => `
   <a href="${entry.href}" journal-link class="group grid grid-cols-[7.5rem_1fr] items-center gap-4 sm:grid-cols-[9rem_1fr] sm:gap-5">
      <div class="aspect-square overflow-hidden rounded-2xl bg-sunken">
         ${photo(entry.coverImage.url, {
            ratio: 1,
            widths: [288, 432],
            sizes: '9rem',
            alt: entry.title,
            cls: 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]',
         })}
      </div>
      <div class="min-w-0">
         ${meta(entry)}
         <h3 class="mt-1.5 text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
            ${entry.title}
         </h3>
         <p class="mt-1 text-sm leading-relaxed text-muted line-clamp-2">${stripHtml(entry.content)}</p>
      </div>
   </a>`;
