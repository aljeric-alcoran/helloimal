import { SKILL_CATEGORIES } from "../../constants/skills-categories"

const buildCategoryBlock = ({ category, items }) => `
   <div class="skills-reveal">
      <p class="text-[0.68rem] text-center font-bold tracking-[0.16em] uppercase text-gray-400 dark:text-gray-500 mb-4">${category}</p>
      <div class="flex justify-center flex-wrap gap-3">
         ${items.map(({ label, src, alt, glow }) => `
         <div class="skill-card group relative flex flex-col items-center gap-2.5
                     bg-white dark:bg-gray-800/60
                     border border-gray-100 dark:border-gray-700/60
                     rounded-xl px-4 py-4 w-[6.8rem] md:w-[7rem]
                     shadow-sm hover:shadow-md
                     hover:border-gray-200 dark:hover:border-gray-600
                     hover:-translate-y-1
                     transition-all duration-250 cursor-default">
            <img
               src="${src}"
               alt="${alt}"
               width="40" height="40"
               loading="lazy" decoding="async"
               class="w-10 h-10 object-contain transition-all duration-300
                      group-hover:drop-shadow-[0_0_18px_${glow}]"
            />
            <span class="text-[0.65rem] font-semibold text-gray-600 dark:text-gray-400
                         group-hover:text-gray-900 dark:group-hover:text-white
                         text-center leading-tight transition-colors duration-200">
               ${label}
            </span>
         </div>`).join('')}
      </div>
   </div>
`;

const template = `
   <div id="skills" class="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24 text-gray-900 dark:text-white">

      <!-- Section heading -->
      <div class="skills-reveal flex flex-col items-center gap-2 mb-14">
         <span class="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#3150CE]">What I work with</span>
         <h1 class="text-3xl md:text-4xl font-black tracking-tight">Tech <span class="text-[#3150CE]">Stack</span></h1>
         <div class="w-8 h-[3px] bg-[#3150CE] rounded-full mt-1"></div>
      </div>

      <!-- Categories -->
      <div class="flex flex-col gap-10 md:gap-12 items-center">
         ${SKILL_CATEGORIES.map(buildCategoryBlock).join('')}
      </div>

   </div>
`;

// ── Mount ─────────────────────────────────────────────────────────────────────
const setTechnicalSkillsSection = (element) => {
   element.innerHTML = template;

   // Scroll-triggered stagger reveal
   const targets = element.querySelectorAll('.skills-reveal');

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
               entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(.22,.68,0,1.2)';
               entry.target.style.opacity    = '1';
               entry.target.style.transform  = 'translateY(0)';
            }, i * 100);
            observer.unobserve(entry.target);
         });
      },
      { threshold: 0.08 }
   );

   targets.forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(24px)';
      observer.observe(el);
   });
};

export default setTechnicalSkillsSection;