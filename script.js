// Scroll effect on navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.style.background = 'rgba(0,0,128,0.95)';
  } else {
    navbar.style.background = 'rgba(0,0,128,0.8)';
  }
});
