const navbarBtn = document.getElementById('navbar-btn');
const navbar = document.getElementById('navbar-default');

const toogleNavbar = () => {
   const isHidden = navbar.classList.contains('hidden');
   navbar.classList.toggle('hidden', !isHidden);
}
navbarBtn.addEventListener('click', toogleNavbar);

window.addEventListener('resize', () => {
   if (window.innerWidth === 768) {
      navbar.classList.toggle('hidden', true);
   }
});