const SKILL_CATEGORIES = [
   {
      category: 'Frontend',
      items: [
         { label: 'TypeScript', src: '/img/typescript.png',  alt: 'TypeScript', glow: 'rgba(59,130,246,0.75)'  },
         { label: 'JavaScript', src: '/svg/javascript.svg',  alt: 'JavaScript', glow: 'rgba(234,179,8,0.75)'   },
         { label: 'HTML5',      src: '/svg/html.svg',        alt: 'HTML5',      glow: 'rgba(251,146,60,0.75)'  },
         { label: 'CSS3',       src: '/svg/css3.svg',        alt: 'CSS3',       glow: 'rgba(59,130,246,0.75)'  },
      ],
   },
   {
      category: 'Frameworks',
      items: [
         { label: 'React',      src: '/svg/react.svg',       alt: 'React',      glow: 'rgba(97,219,251,0.75)'  },
         { label: 'Next.js',    src: '/svg/nextjs.svg',      alt: 'Next.js',    glow: 'rgba(255,255,255,0.6)'  },
         { label: 'Angular',    src: '/img/angular.webp',    alt: 'Angular',    glow: 'rgba(220,38,38,0.7)'    },
         { label: 'Vue.js',     src: '/svg/vue-js.svg',      alt: 'Vue',        glow: 'rgba(34,197,94,0.75)'   },
         { label: 'Node.js',    src: '/svg/nodejs.svg',      alt: 'Node.js',    glow: 'rgba(34,197,94,0.75)'   },
         { label: 'Express',    src: '/img/express.png',   alt: 'Express',    glow: 'rgba(255,255,255,0.5)'  },
         { label: 'Tailwind',   src: '/svg/tailwindcss.svg', alt: 'Tailwind',   glow: 'rgba(13,148,136,0.75)'  },
      ],
   },
   {
      category: 'Tools & Design',
      items: [
         { label: 'Vite',       src: '/svg/vite.svg',        alt: 'Vite',       glow: 'rgba(244,114,182,0.65)' },
         { label: 'WordPress',  src: '/svg/wordpress.svg',   alt: 'WordPress',  glow: 'rgba(59,130,246,0.75)'  },
         { label: 'Git',        src: '/img/git.png',         alt: 'Git',        glow: 'rgba(239,68,68,0.75)'   },
         { label: 'Docker',     src: '/img/docker.png',      alt: 'Docker',     glow: 'rgba(59,130,246,0.75)'  },
         { label: 'Figma',      src: '/img/figma.png',       alt: 'Figma',      glow: 'rgba(162,89,247,0.75)'  },
         { label: 'VS Code',    src: '/img/vscode.png',      alt: 'VS Code',    glow: 'rgba(59,130,246,0.75)'  },
      ],
   },
];

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