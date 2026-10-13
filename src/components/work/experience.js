import downloadIcon from '@phosphor-icons/core/assets/regular/download-simple.svg?raw';
import mailIcon     from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw';
import globeIcon    from '@phosphor-icons/core/assets/regular/globe.svg?raw';
import githubIcon   from '@phosphor-icons/core/assets/regular/github-logo.svg?raw';
import linkedinIcon from '@phosphor-icons/core/assets/regular/linkedin-logo.svg?raw';
import mapPinIcon   from '@phosphor-icons/core/assets/regular/map-pin.svg?raw';
import { icon } from '../../js/icons.js';
import { downloadCV, goToContact } from '../../js/helpers';
import { JOBS } from '../../data/experience-data.js';

const FACTS = [
   { value: '4+',  label: 'Years building for the web' },
   { value: '2',   label: 'Companies' },
   { value: '10+', label: 'Technologies in daily use' },
];

const LINKS = [
   { href: 'https://helloimal.vercel.app',                             label: 'helloimal.vercel.app', svg: globeIcon },
   { href: 'https://github.com/aljeric-alcoran',                       label: 'aljeric-alcoran',      svg: githubIcon },
   { href: 'https://www.linkedin.com/in/al-jeric-alcoran-a420b6213/', label: 'LinkedIn',             svg: linkedinIcon },
];

const SKILLS = [
   { group: 'Languages',              items: ['JavaScript', 'TypeScript'] },
   { group: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Tanstack Query', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Tailwind CSS'] },
   { group: 'Tools & Technologies',   items: ['WordPress', 'Git', 'GitHub', 'Docker', 'Postman', 'Figma', 'VS Code'] },
   { group: 'Testing',                items: ['Mocha', 'Jest', 'Supertest'] },
];

const jobTemplate = (job, i) => `
   <article data-reveal style="--i:${i}"
            class="grid grid-cols-1 gap-6 border-t border-line py-10 md:grid-cols-[15rem_1fr] md:gap-12 md:py-14">
      <header class="md:sticky md:top-24 md:self-start">
         <p class="font-mono text-sm text-faint">${job.dates}</p>
         <p class="mt-3 text-lg font-semibold tracking-tight text-ink">${job.company}</p>
         <p class="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
            ${icon(mapPinIcon, 'size-4')}
            ${job.location}
         </p>
      </header>
      <div>
         <h3 class="text-2xl font-semibold tracking-tight text-ink md:text-3xl">${job.role}</h3>
         <ul class="mt-6 max-w-[68ch] list-disc space-y-3 pl-5 text-[0.95rem] leading-relaxed text-muted marker:text-faint
                    [&_strong]:font-medium [&_strong]:text-ink">
            ${job.points.map(p => `<li class="pl-1">${p}</li>`).join('')}
         </ul>
         <ul class="mt-7 flex flex-wrap gap-2" aria-label="Stack used at ${job.company}">
            ${job.stack.map(s => `<li class="chip">${s}</li>`).join('')}
         </ul>
      </div>
   </article>
`;

const template = `
   <!-- Intro -->
   <section class="shell grid grid-cols-1 gap-12 pb-16 pt-14 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-16 md:pb-24 md:pt-24">
      <div>
         <p class="eyebrow motion-safe:animate-fade-up">Career</p>
         <h1 class="mt-4 text-display text-ink
                    motion-safe:animate-fade-up motion-safe:[animation-delay:80ms]">
            Al Jeric Alcoran
         </h1>
         <p class="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted
                   motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
            Full stack developer with 4+ years of experience shipping web applications, from Figma wireframes to production.
         </p>
         <div class="mt-9 flex flex-wrap items-center gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
            <button id="download-file" type="button" class="btn btn-primary">
               ${icon(downloadIcon, 'size-4')}
               Download CV
            </button>
            <button id="contact-me" type="button" class="btn btn-secondary">
               ${icon(mailIcon, 'size-4')}
               Contact me
            </button>
         </div>
         <ul class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 motion-safe:animate-fade-up motion-safe:[animation-delay:320ms]">
            ${LINKS.map(l => `
               <li>
                  <a href="${l.href}" target="_blank" rel="noopener noreferrer"
                     class="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-ink">
                     ${icon(l.svg, 'size-4')}
                     ${l.label}
                  </a>
               </li>
            `).join('')}
         </ul>
      </div>

      <dl class="grid grid-cols-3 gap-4 border-t border-line pt-6 md:grid-cols-1 md:gap-0 md:divide-y md:divide-line md:border-l md:border-t-0 md:pl-10 md:pt-0
                 motion-safe:animate-fade-up motion-safe:[animation-delay:200ms]">
         ${FACTS.map(f => `
            <div class="flex flex-col-reverse md:py-5 md:first:pt-0 md:last:pb-0">
               <dt class="mt-1 text-sm text-muted">${f.label}</dt>
               <dd class="text-title text-ink">${f.value}</dd>
            </div>
         `).join('')}
      </dl>
   </section>

   <!-- Summary -->
   <section class="border-y border-line bg-sunken">
      <div class="shell py-16 md:py-24">
         <p data-reveal class="max-w-[30ch] text-2xl font-medium leading-snug tracking-tight text-ink md:max-w-[36ch] md:text-4xl">
            Motivated and detail-oriented software developer working across frontend and backend.
         </p>
         <p data-reveal style="--i:1" class="mt-6 max-w-[68ch] text-base leading-relaxed text-muted md:ml-auto md:mt-10 md:text-lg">
            Proven ability to build and maintain scalable web applications, design secure backend services, and deliver
            responsive, user-friendly interfaces. Experienced in Agile Scrum environments, cross-functional collaboration,
            and the full product lifecycle, from wireframing in Figma to production deployment.
         </p>
      </div>
   </section>

   <!-- Experience -->
   <section class="shell pt-16 md:pt-24" aria-labelledby="experience-heading">
      <h2 id="experience-heading" data-reveal class="text-title text-ink">Experience</h2>
      <div class="mt-10 md:mt-14">
         ${JOBS.map(jobTemplate).join('')}
      </div>
   </section>

   <!-- Skills -->
   <section class="shell border-t border-line py-16 md:py-24" aria-labelledby="skills-heading">
      <h2 id="skills-heading" data-reveal class="text-title text-ink">Technical skills</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 md:mt-14 md:grid-cols-2">
         ${SKILLS.map((s, i) => `
            <div data-reveal style="--i:${i}">
               <h3 class="text-base font-semibold text-ink">${s.group}</h3>
               <ul class="mt-4 flex flex-wrap gap-2">
                  ${s.items.map(item => `<li class="chip">${item}</li>`).join('')}
               </ul>
            </div>
         `).join('')}
      </div>
   </section>

   <!-- Closing call to action -->
   <section class="shell pb-20 md:pb-28">
      <div data-reveal
           class="grid grid-cols-1 gap-8 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
         <div>
            <h2 class="text-2xl font-semibold tracking-tight text-ink md:text-3xl">Interested in working together?</h2>
            <p class="mt-3 max-w-[48ch] text-muted">Reach out and I'll get back to you promptly.</p>
         </div>
         <div class="flex flex-wrap items-center gap-3">
            <button id="contact-me-footer" type="button" class="btn btn-primary">
               ${icon(mailIcon, 'size-4')}
               Contact me
            </button>
            <button id="download-file-footer" type="button" class="btn btn-secondary">
               ${icon(downloadIcon, 'size-4')}
               Download CV
            </button>
         </div>
      </div>
   </section>
`;

const setWorkExperience = (element) => {
   element.innerHTML = template;

   document.getElementById('download-file').addEventListener('click', () => downloadCV());
   document.getElementById('contact-me').addEventListener('click', goToContact);
   document.getElementById('contact-me-footer').addEventListener('click', goToContact);
   document.getElementById('download-file-footer').addEventListener('click', () => downloadCV());
};

export default setWorkExperience;
