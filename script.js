  
const arrowUp = document.querySelector('.footer-arrow-up');

arrowUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
