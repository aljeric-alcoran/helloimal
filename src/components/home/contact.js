const template = `
   <div id="contact-section" class="max-w-screen-xl mx-auto p-4 py-8 md:p-8 md:py-16 text-gray-900 dark:text-white">
      <h1 class="text-2xl font-bold py-4 md:py-0 text-center"><span class="text-[#3150CE]">Contact</span> me</h1>
      <div class="grid md:grid-cols-2 gap-8 md:gap-6 mt-10 md:mt-24">
         <div class="w-full">
            <div class="max-w-md">
               <img src="/img/contact-image.webp" width="180" alt="contact-image"/>
               <div class="space-y-6 mt-4">
                  <h1 class="text-2xl md:text-3xl leading-9 md:leading-13 font-bold">Need a Webpage <br>For Your Business?</h1>
                  <p class="text-base/7">
                     I can help you set up a professional and mobile-ready site — hassle-free.
                     Fill out the form to send me a message and let’s get started.
                  </p>
               </div>
            </div>
         </div>
         <div class="md:ml-6">
            <h1 class="md:text-lg font-medium mb-6">Submit your concerns here.</h1>
            <form class=" w-full max-w-md" id="contact-form">
               <div id="error-container" class="hidden"></div>
               <div class="mb-5">
                  <label for="name" class="required-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g John Doe" />
                  <span class="hidden text-xs text-red-800 dark:text-red-400 mt-1" id="name-error">Name is required!</span>
               </div>
               <div class="mb-5">
                  <label for="email" class="required-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. johndoe@email.com" />
                  <span class="hidden text-xs text-red-800 dark:text-red-400 mt-1" id="email-error">Email is required!</span>
               </div>
               <div class="mb-5">
                  <label for="subject" class="required-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                  <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Job opportunity" />
                  <span class="hidden text-xs text-red-800 dark:text-red-400 mt-1" id="subject-error">Subject is required!</span>
               </div>
               <div class="mb-5">
                  <label for="message" class="required-label block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message..."></textarea>
                  <span class="hidden text-xs text-red-800 dark:text-red-400 mt-1" id="message-error">Message is required!</span>
               </div>

               <div id="recaptcha-container" class="mx-auto w-fit md:w-full"></div>

               <button type="submit" class="mt-5 flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto pl-3 pr-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
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

   const inputs = ['email', 'name', 'message', 'subject'];
   document.getElementById('contact-form').addEventListener('submit', (event) => submitContactForm(event, inputs));
}

export default setContactSection;