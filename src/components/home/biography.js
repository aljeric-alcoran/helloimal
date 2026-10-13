import githubIcon    from '@phosphor-icons/core/assets/regular/github-logo.svg?raw';
import facebookIcon  from '@phosphor-icons/core/assets/regular/facebook-logo.svg?raw';
import instagramIcon from '@phosphor-icons/core/assets/regular/instagram-logo.svg?raw';
import youtubeIcon   from '@phosphor-icons/core/assets/regular/youtube-logo.svg?raw';
import tiktokIcon    from '@phosphor-icons/core/assets/regular/tiktok-logo.svg?raw';
import mapPinIcon    from '@phosphor-icons/core/assets/regular/map-pin.svg?raw';
import envelopeIcon  from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw';
import phoneIcon     from '@phosphor-icons/core/assets/regular/phone.svg?raw';
import arrowUpRight  from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw';
import { icon } from '../../js/icons.js';

const photo = (w, h) =>
   `https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_${w},h_${h},c_fill,g_face/v1754235497/2024_12_31_18_51_IMG_6041_zksw1o.jpg`;

const CONTACT = [
   { label: 'Location', value: 'Nivel Hills, Lahug, Cebu City, Cebu', svg: mapPinIcon },
   { label: 'Email',    value: 'aljericalcoran026@gmail.com', href: 'mailto:aljericalcoran026@gmail.com', svg: envelopeIcon },
   { label: 'Mobile',   value: '+63 916 351 8635', href: 'tel:+639163518635', svg: phoneIcon },
];

const SOCIALS = [
   { label: 'GitHub',    handle: 'aljeric-alcoran',  href: 'https://github.com/aljeric-alcoran',       svg: githubIcon },
   { label: 'Facebook',  handle: 'aljeric.alcoran',  href: 'https://www.facebook.com/aljeric.alcoran', svg: facebookIcon },
   { label: 'Instagram', handle: '@aljeric_inc',     href: 'https://www.instagram.com/aljeric_inc/',   svg: instagramIcon },
   { label: 'YouTube',   handle: '@alofficial2026',  href: 'https://www.youtube.com/@alofficial2026',  svg: youtubeIcon },
   { label: 'TikTok',    handle: '@alalcoran',       href: 'https://www.tiktok.com/@alalcoran',        svg: tiktokIcon },
];

const EDUCATION = [
   { degree: 'BS in Information Technology',   school: 'STI College Cagayan de Oro', years: '2017 - 2020' },
   { degree: 'Information Technology Program', school: 'STI College Pagadian',       years: '2014 - 2016' },
];

const template = `
   <section aria-labelledby="about-title" class="shell py-20 md:py-28">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

         <!-- Aside: profile, contact, socials (sticky on large screens) -->
         <aside class="order-2 lg:order-1 lg:col-span-4">
            <div class="flex flex-col gap-8 lg:sticky lg:top-24">
               <div data-reveal class="hidden items-center gap-4 lg:flex">
                  <img
                     src="${photo(160, 160)}"
                     srcset="${photo(160, 160)} 1x, ${photo(320, 320)} 2x"
                     width="80" height="80"
                     alt="Al Jeric Alcoran"
                     loading="lazy" decoding="async"
                     class="size-20 rounded-2xl object-cover"
                  />
                  <div>
                     <p class="text-lg font-semibold tracking-tight text-ink">Al Jeric Alcoran</p>
                     <p class="text-sm text-muted">Full Stack Developer</p>
                  </div>
               </div>

               <dl data-reveal style="--i:1" class="flex flex-col gap-4">
                  ${CONTACT.map(({ label, value, href, svg }) => `
                     <div class="flex items-start gap-3">
                        <span class="mt-0.5 text-faint">${icon(svg, 'size-[18px]')}</span>
                        <div class="min-w-0">
                           <dt class="font-mono text-xs text-faint">${label}</dt>
                           <dd class="mt-0.5 break-words text-sm text-ink">
                              ${href
                                 ? `<a href="${href}" class="underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-current">${value}</a>`
                                 : value}
                           </dd>
                        </div>
                     </div>
                  `).join('')}
               </dl>

               <ul data-reveal style="--i:2" aria-label="Social profiles" class="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:border-t lg:border-line">
                  ${SOCIALS.map(({ label, handle, href, svg }) => `
                     <li>
                        <a href="${href}" target="_blank" rel="noopener noreferrer"
                           class="group flex min-h-10 items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm transition-colors hover:border-accent
                                  lg:gap-3 lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-3">
                           <span class="text-muted transition-colors group-hover:text-accent">${icon(svg, 'size-[18px]')}</span>
                           <span class="font-medium text-ink">${label}</span>
                           <span class="ml-auto hidden truncate font-mono text-xs text-faint lg:inline">${handle}</span>
                           <span class="hidden text-faint transition-transform lg:inline duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                              ${icon(arrowUpRight, 'size-3.5')}
                           </span>
                        </a>
                     </li>
                  `).join('')}
               </ul>
            </div>
         </aside>

         <!-- Main column (first on mobile) -->
         <div class="order-1 lg:order-2 lg:col-span-8">
            <h2 id="about-title" data-reveal class="text-title text-ink">
               About me
            </h2>

            <div data-reveal style="--i:1" class="mt-8 flex max-w-[65ch] flex-col gap-5 text-base leading-relaxed text-muted md:text-[1.0625rem]">
               <p class="text-lg leading-relaxed text-ink md:text-xl">
                  Hello, I'm AL, a full stack developer with over four years of hands-on experience building and
                  maintaining modern, responsive web applications. I focus on creating reliable, user-friendly solutions
                  while ensuring that applications remain scalable and adaptable as requirements evolve.
               </p>
               <div id="bio-more" class="hidden flex-col gap-5 md:flex">
               <p>
                  I began my career in 2021 as a Junior Frontend Developer, where I built a strong foundation in frontend
                  development and developed a keen attention to user experience and interface design. This role allowed me to
                  strengthen my skills in building responsive interfaces and working closely with evolving product requirements.
               </p>
               <p>
                  After a year, I transitioned into a freelance Software Developer role, where my responsibilities expanded
                  beyond frontend work. I began handling both frontend and backend systems, taking greater ownership of
                  the development process, from implementing features to maintaining and improving existing applications.
                  This experience strengthened my ability to adapt quickly, solve problems independently, and ensure that
                  systems continue to grow alongside business needs.
               </p>
               <p>
                  Outside of development, I enjoy activities that keep my creativity active. I spend time playing video
                  games, reading manga and manhwa, and occasionally filming humorous videos. These creative outlets help
                  me stay energized, curious, and inspired, qualities that I also bring into my work as a developer.
               </p>
               </div>
               <button id="bio-toggle" type="button" aria-expanded="false" aria-controls="bio-more"
                       class="link-arrow self-start text-sm md:hidden">
                  Read more
               </button>
            </div>

            <!-- Key numbers -->
            <dl data-reveal class="mt-12 grid max-w-xl grid-cols-2 gap-6 border-y border-line py-8">
               <div>
                  <dt class="text-sm text-muted">Years of experience</dt>
                  <dd class="mt-1 text-title text-ink">4+</dd>
               </div>
               <div>
                  <dt class="text-sm text-muted">Technologies in my stack</dt>
                  <dd class="mt-1 text-title text-ink">10+</dd>
               </div>
            </dl>

            <!-- Education -->
            <div class="mt-14">
               <h3 data-reveal class="text-xl font-semibold tracking-tight text-ink">Education</h3>
               <ol class="mt-6 flex flex-col gap-6">
                  ${EDUCATION.map(({ degree, school, years }, i) => `
                     <li data-reveal style="--i:${i + 1}" class="grid grid-cols-1 gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6">
                        <span class="font-mono text-sm text-faint">${years}</span>
                        <div>
                           <p class="font-medium text-ink">${degree}</p>
                           <p class="text-sm text-muted">${school}</p>
                        </div>
                     </li>
                  `).join('')}
               </ol>
            </div>

            <!-- Personal facts: 4 cells, asymmetric bento -->
            <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-6">

               <!-- Birthday: age-guess game (IDs used by the script below) -->
               <div id="age-game-card" data-reveal
                    class="flex flex-col justify-between gap-6 rounded-2xl bg-accent-soft p-6 sm:col-span-3 sm:row-span-2">
                  <div>
                     <p class="eyebrow">Birthday</p>
                     <p class="mt-3 text-2xl font-semibold leading-tight tracking-tight text-ink">
                        Can you guess my age?
                     </p>
                  </div>

                  <div id="age-input-state">
                     <label for="age-input" class="sr-only">Your guess</label>
                     <div class="flex gap-2">
                        <input id="age-input" type="number" inputmode="numeric" min="1" max="99" placeholder="Your guess"
                           class="field [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                        <button id="age-guess-btn" type="button" class="btn btn-primary shrink-0 px-5">Guess</button>
                     </div>
                     <p id="age-attempts-label" class="mt-3 text-sm text-muted">3 attempts remaining</p>
                     <p id="age-feedback" aria-live="polite" class="mt-1 min-h-5 text-sm font-medium text-ink"></p>
                  </div>

                  <div id="age-revealed-state" class="hidden" aria-live="polite">
                     <p id="age-revealed-sub" class="text-3xl font-semibold tracking-tighter text-ink"></p>
                     <p id="age-revealed-text" class="mt-2 text-sm text-muted"></p>
                  </div>

                  <div id="age-locked-state" class="hidden" aria-live="polite">
                     <p class="font-medium text-ink">Too many wrong guesses.</p>
                     <p id="age-locked-timer" class="mt-1 font-mono text-sm text-muted"></p>
                  </div>
               </div>

               <div data-reveal style="--i:1" class="rounded-2xl border border-line bg-surface p-6 sm:col-span-3">
                  <p class="font-mono text-xs text-faint">Hometown</p>
                  <p class="mt-2 font-medium leading-snug text-ink">Poblacion, Ramon Magsaysay, Zamboanga del Sur, 7024</p>
               </div>

               <div data-reveal style="--i:2" class="rounded-2xl border border-line bg-surface p-6 sm:col-span-3">
                  <p class="font-mono text-xs text-faint">Free time</p>
                  <p class="mt-2 text-sm leading-relaxed text-muted">
                     Gaming on Steam, making reels for content, reading manga and manhwa, watching anime like JJK, Hell's Paradise and One Piece.
                  </p>
               </div>

               <div data-reveal style="--i:3" class="rounded-2xl bg-sunken p-6 sm:col-span-6 md:p-8">
                  <p class="font-mono text-xs text-faint">Dream</p>
                  <p class="mt-3 max-w-[40ch] text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
                     To build and run my own business someday, turning ideas into products that genuinely help people.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
`;

const setBiographySection = (element) => {
   element.innerHTML = template;

   // Mobile-only "Read more" for the longer bio (always expanded from md up)
   const bioToggle = document.getElementById('bio-toggle');
   bioToggle.addEventListener('click', () => {
      const open = bioToggle.getAttribute('aria-expanded') === 'true';
      document.getElementById('bio-more').classList.toggle('hidden', open);
      document.getElementById('bio-more').classList.toggle('flex', !open);
      bioToggle.setAttribute('aria-expanded', String(!open));
      bioToggle.textContent = open ? 'Read more' : 'Read less';
   });

   const FEEDBACK_CLASS = 'mt-1 min-h-5 text-sm font-medium text-accent';

   // ── Age-guess game ────────────────────────────────────────────────────────
   const AGE_STORE_KEY = 'age_game_v1';
   const MAX_ATTEMPTS = 3;
   const LOCK_DURATION = 10 * 60 * 1000; // 10 min in ms
   const BIRTHDAY = new Date(1997, 10, 26); // Nov 26 1997 (month is 0-indexed)

   const calcAge = () => {
      const now = new Date();
      const age = now.getFullYear() - BIRTHDAY.getFullYear();
      const hasBday = now >= new Date(now.getFullYear(), BIRTHDAY.getMonth(), BIRTHDAY.getDate());
      return hasBday ? age : age - 1;
   };

   const loadState = () => {
      try { return JSON.parse(localStorage.getItem(AGE_STORE_KEY)) || {}; }
      catch { return {}; }
   };

   const saveState = (s) => localStorage.setItem(AGE_STORE_KEY, JSON.stringify(s));

   const showInputState   = () => { document.getElementById('age-input-state').classList.remove('hidden');   document.getElementById('age-revealed-state').classList.add('hidden'); document.getElementById('age-locked-state').classList.add('hidden'); };
   const showRevealState  = (text, sub) => { document.getElementById('age-input-state').classList.add('hidden');   document.getElementById('age-revealed-state').classList.remove('hidden'); document.getElementById('age-locked-state').classList.add('hidden'); document.getElementById('age-revealed-text').textContent = text; document.getElementById('age-revealed-sub').textContent = sub; };
   const showLockedState  = () => { document.getElementById('age-input-state').classList.add('hidden');   document.getElementById('age-revealed-state').classList.add('hidden'); document.getElementById('age-locked-state').classList.remove('hidden'); };

   let lockTimerInterval = null;

   const startLockTimer = (unlockAt) => {
      const timerEl = document.getElementById('age-locked-timer');
      const tick = () => {
         const remaining = unlockAt - Date.now();
         if (remaining <= 0) {
            clearInterval(lockTimerInterval);
            saveState({});
            showInputState();
            document.getElementById('age-attempts-label').textContent = '3 attempts remaining';
            document.getElementById('age-feedback').textContent = '';
            return;
         }
         const m = Math.floor(remaining / 60000);
         const s = Math.floor((remaining % 60000) / 1000);
         timerEl.textContent = `Try again in ${m}:${String(s).padStart(2, '0')}`;
      };
      tick();
      lockTimerInterval = setInterval(tick, 1000);
   };

   const initAgeGame = () => {
      const state = loadState();
      const correctAge = calcAge();

      // Already solved?
      if (state.solved) {
         showRevealState(`I'm ${correctAge} years old.`, 'November 26, 1997');
         return;
      }

      // Locked?
      if (state.lockedUntil && Date.now() < state.lockedUntil) {
         showLockedState();
         startLockTimer(state.lockedUntil);
         return;
      } else if (state.lockedUntil) {
         // Lock expired, reset
         saveState({});
      }

      // Normal, show input
      showInputState();
      const attemptsLeft = MAX_ATTEMPTS - (state.attempts || 0);
      document.getElementById('age-attempts-label').textContent =
         attemptsLeft === 1 ? 'Last attempt!' : `${attemptsLeft} attempts remaining`;

      const doGuess = () => {
         const input = document.getElementById('age-input');
         const feedback = document.getElementById('age-feedback');
         const guess = parseInt(input.value, 10);

         if (!guess || guess < 1 || guess > 99) {
            feedback.textContent = 'Enter a valid age (1 to 99).';
            feedback.className   = FEEDBACK_CLASS;
            return;
         }

         const fresh = loadState();
         const newAttempts = (fresh.attempts || 0) + 1;

         if (guess === correctAge) {
            saveState({ solved: true });
            showRevealState(`${correctAge} years old. You got it!`, 'November 26, 1997');
            return;
         }

         // Wrong guess
         const hint = guess < correctAge ? 'Too low.' : 'Too high.';

         if (newAttempts >= MAX_ATTEMPTS) {
            const unlockAt = Date.now() + LOCK_DURATION;
            saveState({ attempts: newAttempts, lockedUntil: unlockAt });
            showLockedState();
            startLockTimer(unlockAt);
         } else {
            saveState({ attempts: newAttempts });
            const left = MAX_ATTEMPTS - newAttempts;
            feedback.textContent = hint;
            feedback.className   = FEEDBACK_CLASS;
            document.getElementById('age-attempts-label').textContent =
               left === 1 ? 'Last attempt!' : `${left} attempts remaining`;
            input.value = '';
            input.focus();
         }
      };

      document.getElementById('age-guess-btn').addEventListener('click', doGuess);
      document.getElementById('age-input').addEventListener('keydown', (e) => {
         if (e.key === 'Enter') doGuess();
      });
   };

   initAgeGame();
};

export default setBiographySection;
