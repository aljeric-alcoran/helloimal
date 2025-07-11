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
   
   if (Object.keys(formData).length < inputs.length) return;
   console.log(formData);
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