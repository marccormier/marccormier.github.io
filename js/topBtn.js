let tBtn=document.createElement('BUTTON');
tBtn.setAttribute('id', 'topBtn');
tBtn.setAttribute('value', 'Top');
tBtn.setAttribute('onclick', 'topFunction');
document.body.appendChild(tBtn);
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    tBtn.style="display:block;";
  } else {
    tBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}