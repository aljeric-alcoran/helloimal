import paperPlaneIcon from '@phosphor-icons/core/assets/regular/paper-plane-tilt.svg?raw';
import envelopeIcon   from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw';
import { icon } from '../../js/icons.js';

// Field ids/names are read by js/contact.js; keep them stable.
const FIELDS = [
   { id: 'name',    label: 'Name',    type: 'text',  autocomplete: 'name',  placeholder: 'Your name' },
   { id: 'email',   label: 'Email',   type: 'email', autocomplete: 'email', placeholder: 'you@company.com' },
   { id: 'subject', label: 'Subject', type: 'text',  autocomplete: 'off',   placeholder: 'Website project' },
];

const errorText = (id, label) => `
   <span id="${id}-error" class="hidden text-sm text-danger" role="alert">${label} is required.</span>
`;

const template = `
   <section id="contact-section" aria-labelledby="contact-title" class="shell py-20 md:py-28">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

         <!-- Pitch -->
         <div data-reveal class="lg:col-span-5">
            <p class="eyebrow">Get in touch</p>
            <h2 id="contact-title" class="mt-4 text-title text-ink">
               Need a website for your business?
            </h2>
            <p class="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted">
               I help businesses build fast, professional, and mobile-ready websites.
               Whether you need a landing page, a full web app, or ongoing support, fill out the form and let's talk.
            </p>
            <a href="mailto:aljericalcoran026@gmail.com"
               class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-current">
               ${icon(envelopeIcon, 'size-[18px]')}
               aljericalcoran026@gmail.com
            </a>
         </div>

         <!-- Form -->
         <div data-reveal style="--i:1" class="sm:rounded-2xl sm:border sm:border-line sm:bg-surface sm:p-6 md:p-8 lg:col-span-7">
            <h3 class="text-lg font-semibold tracking-tight text-ink">Send me a message</h3>

            <!-- Global alert (filled by js/contact.js) -->
            <div id="error-container" class="mt-5 hidden" aria-live="polite"></div>

            <form id="contact-form" class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2" novalidate>
               ${FIELDS.map(({ id, label, type, autocomplete, placeholder }) => `
                  <div class="flex flex-col gap-2 ${id === 'subject' ? 'sm:col-span-2' : ''}">
                     <label for="${id}" class="required-label text-sm font-medium text-ink">${label}</label>
                     <input type="${type}" id="${id}" name="${id}" autocomplete="${autocomplete}"
                            placeholder="${placeholder}" class="field" />
                     ${errorText(id, label)}
                  </div>
               `).join('')}

               <div class="flex flex-col gap-2 sm:col-span-2">
                  <label for="message" class="required-label text-sm font-medium text-ink">Message</label>
                  <textarea id="message" name="message" rows="5"
                            placeholder="Tell me about your project or inquiry"
                            class="field resize-y"></textarea>
                  ${errorText('message', 'Message')}
               </div>

               <!-- reCAPTCHA (rendered by js/recaptcha.js) -->
               <div id="recaptcha-container" class="overflow-x-auto sm:col-span-2"></div>

               <div class="sm:col-span-2">
                  <button type="submit" class="btn btn-primary w-full sm:w-auto">
                     ${icon(paperPlaneIcon, 'size-[18px]')}
                     <span id="btn-text">Send message</span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   </section>
`;

import submitContactForm from "../../js/contact";

const setContactSection = (element) => {
   element.innerHTML = template;

   // Form submit
   const inputs = ['email', 'name', 'message', 'subject'];
   document.getElementById('contact-form').addEventListener('submit', (event) => submitContactForm(event, inputs));
};

export default setContactSection;
