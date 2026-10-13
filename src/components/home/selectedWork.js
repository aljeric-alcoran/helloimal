import arrowRightIcon   from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw';
import arrowUpRightIcon from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw';
import { icon } from '../../js/icons.js';
import { PROJECTS } from '../../data/projects-data.js';

// Cloudinary URLs in projects-data are 800x450; swap the transform for other sizes.
const shot = (url, w) => url.replace('w_800,h_450', `w_${w},h_${Math.round(w * 9 / 16)}`);

const STATUS = { released: 'Released', development: 'In development' };

const projectTemplate = (project, i) => {
   const lead = i === 0;
   const tools = project.tools.slice(0, 4).join(', ');

   return `
      <article data-reveal style="--i:${i}" class="${lead ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}">
         <a href="/projects" nav-link class="group block" aria-label="${project.name}, view on the projects page">
            <div class="overflow-hidden rounded-2xl bg-sunken ring-1 ring-line">
               <img src="${shot(project.images[0], lead ? 1200 : 800)}"
                    srcset="${shot(project.images[0], 640)} 640w, ${shot(project.images[0], 960)} 960w, ${shot(project.images[0], 1280)} 1280w"
                    sizes="(min-width: 768px) ${lead ? '55vw' : '40vw'}, 100vw"
                    width="1280" height="720" loading="lazy" decoding="async"
                    alt="Screenshot of ${project.name}"
                    class="aspect-video w-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                           motion-safe:group-hover:scale-[1.02]" />
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-faint">
               <span>${project.year}</span>
               <span aria-hidden="true">/</span>
               <span>${STATUS[project.status] ?? ''}</span>
            </div>
            <h3 class="mt-2 inline-flex items-center gap-2 text-subtitle text-ink transition-colors duration-200 group-hover:text-accent">
               ${project.name}
               ${icon(arrowUpRightIcon, 'size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5')}
            </h3>
            <p class="mt-3 line-clamp-3 max-w-[60ch] leading-relaxed text-muted">${project.description}</p>
            <p class="mt-4 text-sm text-faint">${tools}</p>
         </a>
      </article>
   `;
};

const template = `
   <section id="selected-work" aria-labelledby="selected-work-title" class="shell py-20 md:py-28">
      <div class="flex flex-wrap items-end justify-between gap-4" data-reveal>
         <h2 id="selected-work-title" class="text-title text-ink">Selected work</h2>
         <a href="/projects" nav-link class="link-arrow">
            All projects
            ${icon(arrowRightIcon, 'size-4')}
         </a>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-14 md:mt-16 md:grid-cols-12 md:gap-10">
         ${PROJECTS.slice(0, 2).map(projectTemplate).join('')}
      </div>
   </section>
`;

const setSelectedWorkSection = (element) => {
   element.innerHTML = template;
};

export default setSelectedWorkSection;
