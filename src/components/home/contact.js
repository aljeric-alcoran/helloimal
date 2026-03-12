const template = `
   <div id="contact-section" class="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24 text-gray-900 dark:text-white">

      <!-- Section heading -->
      <div class="contact-reveal flex flex-col items-center gap-2 mb-14">
         <span class="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#3150CE]">Get in touch</span>
         <h1 class="text-3xl md:text-4xl font-black tracking-tight">Contact <span class="text-[#3150CE]">Me</span></h1>
         <div class="w-8 h-[3px] bg-[#3150CE] rounded-full mt-1"></div>
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

         <!-- ── LEFT: info panel ── -->
         <div class="contact-reveal flex flex-col gap-6">

            <!-- Headline block -->
            <div>
               <img src="/img/contact-image.webp" width="180" height="180" alt="Contact" class="mb-6 opacity-90" loading="lazy" decoding="async"/>
               <h2 class="text-2xl md:text-3xl font-black leading-tight tracking-tight mb-4 space-y-3">
                  <p>Need a website</p>
                  <p>for your business?</p>
               </h2>
               <p class="text-sm/7 text-gray-500 dark:text-gray-400 max-w-sm">
                  I help businesses build fast, professional, and mobile-ready websites.
                  Whether you need a landing page, a full web app, or ongoing support — 
                  fill out the form and let's talk.
               </p>
            </div>
         </div>

         <!-- ── RIGHT: form card ── -->
         <div class="contact-reveal rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 shadow-sm p-6 md:p-8">

            <div class="flex items-center gap-3 mb-6">
               <span class="w-7 h-0.5 bg-[#3150CE] rounded-full shrink-0"></span>
               <h2 class="text-base font-bold tracking-tight">Send me a message</h2>
            </div>

            <!-- Global error banner -->
            <div id="error-container" class="hidden mb-5">
            </div>

            <form id="contact-form" class="flex flex-col gap-8" novalidate>
               <!-- Name -->
               <div class="flex flex-col gap-1.5">
                  <label for="name" class="required-label text-xs font-semibold text-gray-700 dark:text-gray-300">Name</label>
                  <input type="text" id="name" autocomplete="name"
                     placeholder="e.g. John Doe"
                     class="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600
                            bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white
                            placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40 focus:border-[#3150CE]
                            transition-all duration-200"
                  />
                  <span id="name-error" class="hidden text-[0.68rem] font-medium text-red-600 dark:text-red-400">Name is required.</span>
               </div>

               <!-- Email -->
               <div class="flex flex-col gap-1.5">
                  <label for="email" class="required-label text-xs font-semibold text-gray-700 dark:text-gray-300">Email</label>
                  <input type="email" id="email" autocomplete="email"
                     placeholder="e.g. johndoe@email.com"
                     class="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600
                            bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white
                            placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40 focus:border-[#3150CE]
                            transition-all duration-200"
                  />
                  <span id="email-error" class="hidden text-[0.68rem] font-medium text-red-600 dark:text-red-400">Email is required.</span>
               </div>

               <!-- Subject -->
               <div class="flex flex-col gap-1.5">
                  <label for="subject" class="required-label text-xs font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                  <input type="text" id="subject"
                     placeholder="e.g. Website Project Request"
                     class="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600
                            bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white
                            placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40 focus:border-[#3150CE]
                            transition-all duration-200"
                  />
                  <span id="subject-error" class="hidden text-[0.68rem] font-medium text-red-600 dark:text-red-400">Subject is required.</span>
               </div>

               <!-- Message -->
               <div class="flex flex-col gap-1.5">
                  <label for="message" class="required-label text-xs font-semibold text-gray-700 dark:text-gray-300">Message</label>
                  <textarea id="message" rows="4"
                     placeholder="Tell me about your project or inquiry…"
                     class="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600
                            bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white
                            placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-[#3150CE]/40 focus:border-[#3150CE]
                            resize-none transition-all duration-200"></textarea>
                  <span id="message-error" class="hidden text-[0.68rem] font-medium text-red-600 dark:text-red-400">Message is required.</span>
               </div>

               <!-- reCAPTCHA -->
               <div id="recaptcha-container" class="flex justify-center"></div>

               <!-- Submit -->
               <button type="submit"
                  class="cursor-pointer mt-1 inline-flex items-center justify-center gap-2
                         bg-[#3150CE] hover:bg-[#2540b0] text-white
                         text-sm font-semibold tracking-wide
                         px-6 py-3 rounded-full w-full
                         transition-all duration-200
                         hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(49,80,206,0.35)]
                         active:translate-y-0
                         focus:outline-none focus:ring-2 focus:ring-[#3150CE]/50
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
               >
               <svg class="w-5 h-5 rotate-90 shrink-0" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
               </svg>
               <span id="btn-text">Send message</span>
               </button>

            </form>
         </div>
      </div>
   </div>
`;

import submitContactForm from "../../js/contact";

const setContactSection = (element) => {
   element.innerHTML = template;

   // Scroll-triggered reveal
   const targets = element.querySelectorAll('.contact-reveal');
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

   // Form submit
   const inputs = ['email', 'name', 'message', 'subject'];
   document.getElementById('contact-form').addEventListener('submit', (event) => submitContactForm(event, inputs));
};

export default setContactSection;