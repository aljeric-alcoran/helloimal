// pages/notFound.js
// Full-screen 404 page. Hides nav + footer, restores them on navigation away.

const photo = (w, h) =>
   `https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_${w},h_${h},c_fill,g_auto/v1754370745/2024_06_01_13_10_IMG_4264_y5jxp7.jpg`;

const QUICK_LINKS = [
   { path: '/career',   label: 'Career',   desc: 'Work experience and skills' },
   { path: '/projects', label: 'Projects', desc: 'Things I have built' },
   { path: '/travel',   label: 'Travel',   desc: 'Journals from the road' },
];

// Entrance animations only run when the visitor allows motion.
// Class strings stay literal so Tailwind can detect them at build time.
const REVEAL = {
   0:    'motion-safe:opacity-0 motion-safe:animate-fade-up',
   0.05: 'motion-safe:opacity-0 motion-safe:animate-fade-up motion-safe:[animation-delay:50ms]',
   0.12: 'motion-safe:opacity-0 motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]',
   0.2:  'motion-safe:opacity-0 motion-safe:animate-fade-up motion-safe:[animation-delay:200ms]',
   0.28: 'motion-safe:opacity-0 motion-safe:animate-fade-up motion-safe:[animation-delay:280ms]',
   0.36: 'motion-safe:opacity-0 motion-safe:animate-fade-up motion-safe:[animation-delay:360ms]',
};
const reveal = (delay) => REVEAL[delay];

const template = `
   <div id="not-found-page"
        class="relative z-10 min-h-dvh w-full bg-canvas text-ink">

      <div class="shell flex min-h-dvh flex-col">

         <!-- Brand -->
         <header class="flex h-16 md:h-20 items-center">
            <a href="/" data-nf-link
               class="inline-flex items-center gap-2.5 rounded-full text-[0.95rem] font-semibold tracking-tight text-ink">
               <img src="/img/logo.webp" alt="" width="32" height="32" class="size-8 rounded-full" />
               helloimal
            </a>
         </header>

         <main class="grid flex-1 grid-cols-1 items-center gap-12 pb-16 pt-6
                      md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:pb-20 md:pt-0">

            <!-- Copy -->
            <section class="order-2 md:order-1">
               <p class="eyebrow ${reveal(0.05)}">
                  Error 404
               </p>

               <h1 class="mt-4 max-w-[14ch] text-display ${reveal(0.12)}">
                  This road doesn't lead anywhere.
               </h1>

               <p class="mt-6 max-w-[48ch] text-base leading-relaxed text-muted ${reveal(0.2)}">
                  Nothing lives at
                  <code id="nf-path"
                        class="break-all rounded-md bg-sunken px-1.5 py-0.5 font-mono text-[0.85em] text-ink"></code>.
                  It may have moved, or the link has a typo.
               </p>

               <div class="mt-9 flex flex-wrap items-center gap-3 ${reveal(0.28)}">
                  <a href="/" data-nf-link class="btn btn-primary">
                     Back to home
                  </a>
                  <button type="button" id="nf-back" class="btn btn-secondary hidden">
                     <span aria-hidden="true">&larr;</span>
                     Previous page
                  </button>
               </div>

               <nav aria-label="Other pages"
                    class="mt-14 border-t border-line pt-8 ${reveal(0.36)}">
                  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                     ${QUICK_LINKS.map(({ path, label, desc }) => `
                        <li>
                           <a href="${path}" data-nf-link
                              class="group block rounded-lg">
                              <span class="inline-flex items-center gap-1.5 text-base font-semibold text-ink
                                           transition-colors duration-200 group-hover:text-accent">
                                 ${label}
                                 <span aria-hidden="true"
                                       class="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">&rarr;</span>
                              </span>
                              <span class="mt-1 block text-sm text-muted">${desc}</span>
                           </a>
                        </li>
                     `).join('')}
                  </ul>
               </nav>
            </section>

            <!-- Photo -->
            <figure class="relative order-1 md:order-2 ${reveal(0)}">
               <div class="relative overflow-hidden rounded-2xl bg-sunken">
                  <img src="${photo(800, 1000)}"
                       srcset="${photo(480, 600)} 480w, ${photo(800, 1000)} 800w, ${photo(1200, 1500)} 1200w"
                       sizes="(min-width: 768px) 40vw, 100vw"
                       width="800" height="1000"
                       fetchpriority="high"
                       alt="Al standing in the middle of a tree-lined road in the Bilar Man-Made Forest, Bohol"
                       class="aspect-[4/3] w-full object-cover object-[50%_65%] md:aspect-[4/5]" />
               </div>
               <figcaption class="mt-3 text-sm text-faint">
                  Bilar Man-Made Forest, Bohol
               </figcaption>
            </figure>
         </main>
      </div>
   </div>
`;

const setNotFoundPage = (container) => {
   const nav    = document.getElementById('navigation');
   const footer = document.getElementById('footer');
   if (nav)    nav.classList.add('hidden');
   if (footer) footer.classList.add('hidden');

   const previousTitle = document.title;
   document.title = 'Page not found | helloimal';

   container.innerHTML = template;

   // Set via textContent so the URL can never inject markup
   document.getElementById('nf-path').textContent = window.location.pathname;

   const restore = () => {
      if (nav)    nav.classList.remove('hidden');
      if (footer) footer.classList.remove('hidden');
      document.title = previousTitle;
   };

   const navigate = (path) => {
      restore();
      history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
   };

   container.querySelectorAll('a[data-nf-link]').forEach((link) => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
         navigate(link.getAttribute('href'));
      });
   });

   // Only offer "Previous page" when there is one to return to
   const backBtn = document.getElementById('nf-back');
   if (backBtn && history.length > 1) {
      backBtn.classList.remove('hidden');
      backBtn.addEventListener('click', () => history.back());
   }

   window.addEventListener('popstate', restore, { once: true });
};

export default setNotFoundPage;
