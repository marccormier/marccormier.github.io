const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
const copyy = document.getElementById('copy');
const creditss = document.getElementById('credits');
const timee = document.getElementById('time');
copyy.remove();
creditss.remove();
timee.remove();
}