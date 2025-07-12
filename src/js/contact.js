import emailjs from '@emailjs/browser';
import setAlerts from './alerts';

const submitContactForm = (event, inputs) => {
   event.preventDefault();

   const formData = {};
   for (let input of inputs) {
      const value = getContactFormInputValue(input);
      if (!value) showErrorforInvalidInput(input);
      else formData[input] = getContactFormInputValue(input)
   };

   const captchaToken = grecaptcha.getResponse();

   if (!captchaToken) {
      showAlert('error', 'Please complete the reCAPTCHA!');
      return;
   }
   
   formData['g-recaptcha-response'] = captchaToken;

   if (Object.keys(formData).length < inputs.length) return;

   sendForm(formData);
}

const sendForm = (formData) => {
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

   const btnText = document.getElementById('btn-text');

   btnText.disabled = true;
   btnText.innerText = 'Sending...';
   
   emailjs.send(serviceId, templateId, formData, publicKey).then((response) => {
      showAlert('success', 'Message sent successfully!');
      document.getElementById('contact-form').reset();
      btnText.innerText = 'Send message';
      btnText.disabled = true;
      grecaptcha.reset();
   }, (error) => {
      if (error.status === 400) {
         showAlert('error', 'Invalid reCAPTCHA. Please try again.');
         grecaptcha.reset();
      } else {
         showAlert('error', 'Something went wrong. Please try again.');
      }
   });
}

const getContactFormInputValue = (elementId) => {
   const input = document.getElementById(elementId);
   input.addEventListener('input', () => resetErrorforInvalidInput(elementId));
   return input?.value || '';
}

const showErrorforInvalidInput = (input) => {
   document.getElementById(`${input}-error`).style.display = 'block';
}

const resetErrorforInvalidInput = (input) => {
   document.getElementById(`${input}-error`).style.display = 'none';
}

const showAlert = (type,message) => {
   const errorContainer = document.querySelector('#error-container');
   errorContainer.style.display = 'flex';
   errorContainer.innerHTML = setAlerts(type, message);

   if (type === 'success') {
      setTimeout(() => {
         errorContainer.style.display = 'none';
      }, 5000);
   }
}

export default submitContactForm;