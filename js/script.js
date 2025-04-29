const hamburger = document.querySelector('.hamburger');
const sideMenu = document.getElementById('side-menu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});