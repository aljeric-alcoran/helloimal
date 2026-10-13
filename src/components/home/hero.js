import downloadIcon from '@phosphor-icons/core/assets/regular/download-simple.svg?raw';
import envelopeIcon from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw';
import arrowRightIcon from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw';
import { icon } from '../../js/icons.js';

const portrait = (w, h) =>
   `https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_${w},h_${h},c_fill,g_face/v1772975744/photo_2024-10-05_13-37-36_ywtpr7.jpg`;

const template = `
   <section id="hero-section" aria-labelledby="hero-title" class="shell">
      <div class="grid grid-cols-1 items-center gap-10 pb-16 pt-10 md:min-h-[calc(100dvh-4rem)] md:gap-14
                  md:grid-cols-12 md:gap-10 md:py-16 lg:py-20">

         <!-- Copy -->
         <div class="md:col-span-7">
            <p class="eyebrow motion-safe:animate-fade-up">
               Al Jeric Alcoran, full stack developer
            </p>

            <h1 id="hero-title"
                class="mt-5 max-w-[17ch] text-display text-ink
                       motion-safe:animate-fade-up motion-safe:[animation-delay:80ms]">
               Reliable web apps, from <span class="text-accent">interface</span> to backend.
            </h1>

            <p class="mt-7 max-w-[42ch] text-lg leading-relaxed text-muted
                      motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
               Four years building responsive products with React, Angular, Vue and Node.js, most recently remote for Easypick in Norway.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4
                        motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
               <a href="/projects" nav-link class="btn btn-primary">
                  View my work
                  ${icon(arrowRightIcon, 'size-[18px]')}
               </a>
               <button id="contact-me-btn" type="button" class="btn btn-secondary">
                  ${icon(envelopeIcon, 'size-[18px]')}
                  Contact me
               </button>
               <button id="download-file-btn" type="button" class="link-arrow ml-2 text-sm">
                  ${icon(downloadIcon, 'size-4')}
                  Download CV
               </button>
            </div>
         </div>

         <!-- Portrait -->
         <div class="md:col-span-5
                     motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
            <div class="relative w-full md:ml-auto md:mr-0">
               <div aria-hidden="true"
                    class="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary-subtle md:translate-x-5 md:translate-y-5"></div>
               <div class="relative overflow-hidden rounded-2xl bg-sunken ring-1 ring-line">
                  <img
                     src="${portrait(640, 800)}"
                     srcset="${portrait(440, 550)} 440w, ${portrait(640, 800)} 640w, ${portrait(960, 1200)} 960w"
                     sizes="(min-width: 768px) 40vw, 100vw"
                     alt="Portrait of Al Jeric Alcoran"
                     width="640" height="800"
                     fetchpriority="high"
                     decoding="async"
                     class="aspect-[4/3] w-full object-cover object-[50%_72%] md:aspect-[4/5] md:object-top"
                  />
               </div>
            </div>
         </div>
      </div>
   </section>
`;

import { downloadCV, scrollToSection } from "../../js/helpers";

const setHeroSection = (element) => {
   element.innerHTML = template;

   document.getElementById('download-file-btn').addEventListener('click', () => downloadCV());
   document.getElementById('contact-me-btn').addEventListener('click', () => scrollToSection('contact'));
};

export default setHeroSection;
