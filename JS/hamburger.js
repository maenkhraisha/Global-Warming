const btnHumburger = document.querySelector('.btn-hamburger');
const hamMenu = document.querySelector('.hamburger-menu');

btnHumburger.addEventListener('click', () => {
  if (hamMenu.style.display === 'flex') {
    hamMenu.style.display = 'none';
  } else {
    hamMenu.style.display = 'flex';
  }
});