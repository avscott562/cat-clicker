let tclick = document.querySelector('.tclick');
let fclick = document.querySelector('.fclick');
let cats = document.querySelectorAll('.cat-image');
let clickCount = 0;
let tomCount = 0;
let felixCount = 0;
let tom = document.querySelector('#tomcat');
let felix = document.querySelector('#felixcat');
let restart = document.querySelector('.restart');

cats.forEach(function(cat) {
  cat.addEventListener('click', clicker);
});

restart.addEventListener('click', function() {
  tomCount = 0;
  felixCount = 0;
  clickCount = 0;
  tclick.innerHTML = "0 Clicks";
  fclick.innerHTML = "0 Clicks";
});

function clicker() {
  clickCount++;
  if (clickCount === 1) {
    fclick.innerHTML = clickCount + " Click";
  } else {
    fclick.innerHTML = clickCount + " Clicks";
  };
};
