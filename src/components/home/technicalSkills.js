import { TECH_STACKS } from "../../data/tech-stack-data"

// Monochrome-black logos that would vanish on the dark theme
const INVERT_IN_DARK = new Set(['Express']);

const buildCategoryBlock = ({ category, items }, index) => `
   <div data-reveal style="--i:${index}"
        class="grid grid-cols-1 gap-5 border-t border-line pt-8 md:grid-cols-12 md:gap-8">
      <h3 class="text-lg font-semibold tracking-tight text-ink md:col-span-3">
         ${category}
         <span class="ml-1 font-mono text-sm font-normal text-faint">${items.length}</span>
      </h3>
      <ul class="flex flex-wrap gap-2 md:col-span-9 md:gap-2.5">
         ${items.map(({ label, src, alt }) => `
            <li class="group flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-1 pr-3 md:gap-2.5 md:py-1.5 md:pl-1.5 md:pr-4
                       transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
                       hover:-translate-y-0.5 hover:border-accent">
               <span class="flex size-7 items-center justify-center rounded-full bg-sunken md:size-8">
                  <!-- Logos stay monochrome until hover so the brand blue leads the page -->
                  <img src="${src}" alt="" width="18" height="18" loading="lazy" decoding="async"
                       class="size-[18px] object-contain opacity-75 grayscale transition-[filter,opacity] duration-200
                              group-hover:opacity-100 group-hover:grayscale-0 ${INVERT_IN_DARK.has(alt) ? 'dark:invert' : ''}" />
               </span>
               <span class="text-[0.8125rem] font-medium text-ink md:text-sm">${label}</span>
            </li>
         `).join('')}
      </ul>
   </div>
`;

const template = `
   <section id="skills" aria-labelledby="skills-title" class="shell py-20 md:py-28">
      <div data-reveal class="max-w-2xl">
         <h2 id="skills-title" class="text-title text-ink">Tech stack</h2>
         <p class="mt-4 text-lg leading-relaxed text-muted">What I work with, from the interface to the tooling around it.</p>
      </div>

      <div class="mt-14 flex flex-col gap-10">
         ${TECH_STACKS.map(buildCategoryBlock).join('')}
      </div>
   </section>
`;

const setTechnicalSkillsSection = (element) => {
   element.innerHTML = template;
};

export default setTechnicalSkillsSection;
