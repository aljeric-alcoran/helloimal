import arrowRightIcon from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw';
import { icon } from '../../js/icons.js';
import { JOBS } from '../../data/experience-data.js';

// Strip markup from the first bullet so it reads as a one-line summary.
const summary = (html) => html.replace(/<[^>]+>/g, '');

const jobTemplate = (job, i) => `
   <li data-reveal style="--i:${i}"
       class="grid grid-cols-1 gap-2 py-8 md:grid-cols-12 md:gap-8">
      <p class="font-mono text-sm text-faint md:col-span-3 md:pt-1">${job.dates}</p>
      <div class="md:col-span-6">
         <h3 class="text-subtitle text-ink">${job.role}</h3>
         <p class="mt-1 text-muted">${job.company}</p>
         <p class="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted">${summary(job.points[0])}</p>
      </div>
      <p class="text-sm text-faint md:col-span-3 md:pt-1 md:text-right">${job.location}</p>
   </li>
`;

const template = `
   <section id="experience-summary" aria-labelledby="experience-summary-title" class="shell pb-20 md:pb-28">
      <div class="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-8" data-reveal>
         <h2 id="experience-summary-title" class="text-title text-ink">Experience</h2>
         <a href="/career" nav-link class="link-arrow">
            Full career history
            ${icon(arrowRightIcon, 'size-4')}
         </a>
      </div>
      <ol class="divide-y divide-line">
         ${JOBS.map(jobTemplate).join('')}
      </ol>
   </section>
`;

const setExperienceSummarySection = (element) => {
   element.innerHTML = template;
};

export default setExperienceSummarySection;
