import { PROJECTS } from '../../data/projects-data.js';
import {
   sliderState,
   buildCard,
   goToSlide,
   startAutoplay
} from '../../js/projects.js'


// ── Main component ────────────────────────────────────────────────────────────
const template = `
   <section class="shell pb-12 pt-14 md:pb-16 md:pt-24">
      <h1 class="max-w-[16ch] text-display text-ink
                 motion-safe:animate-fade-up">
         Things I've built
      </h1>
      <p class="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:100ms]">
         Applications I've designed and developed, from internal tools to live production projects.
      </p>
   </section>

   <section class="shell pb-16 md:pb-24" id="projects-grid" aria-label="Projects">
      ${PROJECTS.map((p, i) => buildCard(p, i)).join('')}
   </section>
`;

const setProjectsSection = (element) => {
   element.innerHTML = template;

   // Initialise slider state
   PROJECTS.forEach(p => { sliderState[p.id] = 0; });

   element.addEventListener('click', (e) => {
      // Dot click
      const dot = e.target.closest('.slider-dot');
      if (dot) {
         goToSlide(dot.dataset.project, parseInt(dot.dataset.index, 10));
         return;
      }

      // Prev / next arrows
      const btn = e.target.closest('.slider-btn');
      if (btn) {
         const { project, dir } = btn.dataset;
         const proj = PROJECTS.find(p => p.id === project);
         if (!proj) return;
         const total   = proj.images.length;
         const current = sliderState[project] ?? 0;
         goToSlide(project, (current + parseInt(dir, 10) + total) % total);
         return;
      }

      // Read more / Read less toggle
      const toggle = e.target.closest('.desc-toggle');
      if (toggle) {
         const p = toggle.previousElementSibling;
         const expanded = toggle.dataset.expanded === 'true';
         p.classList.toggle('line-clamp-4', expanded);
         toggle.textContent = expanded ? 'Read more' : 'Read less';
         toggle.dataset.expanded = String(!expanded);
         toggle.setAttribute('aria-expanded', String(!expanded));
      }
   });

   // Hide the toggle when the text isn't actually clamped
   element.querySelectorAll('.desc-toggle').forEach(btn => {
      const p = btn.previousElementSibling;
      if (p.scrollHeight <= p.clientHeight) btn.classList.add('hidden');
   });

   // Autoplay every card that has multiple images
   PROJECTS.forEach(p => startAutoplay(p.id, p.images.length));
};

export default setProjectsSection;
