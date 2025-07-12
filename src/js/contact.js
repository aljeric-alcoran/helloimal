import emailjs from '@emailjs/browser';

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
      showErrorMessage('Please complete the reCAPTCHA!');
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
   
   emailjs.send(serviceId, templateId, formData, publicKey).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
   }, (error) => {
      console.log('FAILED...', error);
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

const showErrorMessage = (message) => {
   document.getElementById('error-message').textContent = message;
   document.getElementById('error-container').style.display = 'flex';
}

export default submitContactForm;