const currentYear = new Date().getFullYear();
const year = document.getElementById('copyright-year');
year.textContent = currentYear;

document.querySelectorAll('[data-tooltip-target]').forEach(trigger => {
   const targetId = trigger.getAttribute('data-tooltip-target');
   const tooltip = document.getElementById(targetId);
 
   if (!tooltip) return;
 
   trigger.addEventListener('mouseenter', () => {
      tooltip.classList.remove('invisible');
      tooltip.classList.remove('opacity-0');
      
      // Position the tooltip near the trigger
      const rect = trigger.getBoundingClientRect();
      tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
      tooltip.style.left = `${rect.left + window.scrollX}px`;
   });
 
   trigger.addEventListener('mouseleave', () => {
      tooltip.classList.add('invisible');
      tooltip.classList.add('opacity-0');
   });
});