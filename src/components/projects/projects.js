import { PROJECTS } from '../../constants/projects-data.js';
import { 
   sliderState, 
   buildCard, 
   goToSlide, 
   startAutoplay 
} from '../../js/projects.js'


// ── Main component ────────────────────────────────────────────────────────────
const template = `
   <section class="max-w-screen-xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <!-- Section heading -->
      <div class="my-10 md:my-12">
         <div class="proj-card opacity-0" style="animation: fadeUp 0.5s ease 0s both;">
            <p class="text-xs font-bold tracking-[0.2em] uppercase text-[#3150CE] dark:text-[#818cf8] mb-2">My Work</p>
            <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
               Featured Projects
            </h2>
            <div class="w-8 h-[3px] bg-[#3150CE] rounded-full mt-3 origin-left"
               style="animation: scaleX 0.5s ease 0.2s both;"></div>
            <p class="text-sm/7 text-gray-500 dark:text-gray-400 mt-4 max-w-xl">
               A collection of applications I've designed and developed — from internal tools to live production projects.
            </p>
         </div>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8" id="projects-grid">
         ${PROJECTS.map((p, i) => buildCard(p, i)).join('')}
      </div>

   </section>
`;

const setProjectsSection = (element) => {
   element.innerHTML = template;

   // Initialise slider state
   PROJECTS.forEach(p => { sliderState[p.id] = 0; });

   // Dot click
   element.addEventListener('click', (e) => {
      const dot = e.target.closest('.slider-dot');
      if (dot) {
         goToSlide(dot.dataset.project, parseInt(dot.dataset.index, 10));
         return;
      }

      // Prev / next arrows
      const btn = e.target.closest('.slider-btn');
      if (btn) {
         const { project, dir } = btn.dataset;
         const proj  = PROJECTS.find(p => p.id === project);
         if (!proj) return;
         const total   = proj.images.length;
         const current = sliderState[project] ?? 0;
         goToSlide(project, (current + parseInt(dir, 10) + total) % total);
      }
   });

   // See more / See less toggle
   element.addEventListener('click', (e) => {
      const toggle = e.target.closest('.desc-toggle');
      if (!toggle) return;
      const p = toggle.previousElementSibling;
      const expanded = toggle.dataset.expanded === 'true';
      if (expanded) {
         p.classList.add('line-clamp-3');
         toggle.textContent = 'Read more...';
         toggle.dataset.expanded = 'false';
      } else {
         p.classList.remove('line-clamp-3');
         toggle.textContent = 'Read less...';
         toggle.dataset.expanded = 'true';
      }
   });

   // Hide "See more" button if text isn't actually clamped
   element.querySelectorAll('.desc-toggle').forEach(btn => {
      const p = btn.previousElementSibling;
      if (p.scrollHeight <= p.clientHeight) btn.classList.add('hidden');
   });

   // Autoplay every card that has multiple images
   PROJECTS.forEach(p => startAutoplay(p.id, p.images.length));

   // Scroll-triggered reveal (IntersectionObserver)
   const cards = element.querySelectorAll('.proj-card');
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            // Reset the animation so it plays on scroll-in
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
         }
      });
   }, { threshold: 0.12 });

   cards.forEach(card => {
      card.style.animationPlayState = 'paused';
      observer.observe(card);
   });
};

export default setProjectsSection;