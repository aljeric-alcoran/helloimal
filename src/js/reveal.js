// Fades [data-reveal] elements in as they enter the viewport.
// Pages render by swapping #main-content's innerHTML, so a MutationObserver
// picks up new elements after every route change.

const setReveal = (root) => {
   if (!('IntersectionObserver' in window)) return;
   document.documentElement.classList.add('js-reveal');

   const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;
         entry.target.classList.add('is-in');
         io.unobserve(entry.target);
      });
   }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

   const scan = () => {
      root.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el));
   };

   new MutationObserver(scan).observe(root, { childList: true, subtree: true });
   scan();
};

export default setReveal;
