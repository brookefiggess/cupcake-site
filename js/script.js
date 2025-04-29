const hamburger = document.querySelector('.hamburger');
const sideMenu = document.getElementById('side-menu');

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  sideMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
    sideMenu.classList.remove('active');
  }
});