let click = document.querySelector('.click-counter');
let clickCount = 0;
let cat = document.querySelector('.tom-cat-image');
let restart = document.querySelector('.restart');

cat.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    click.innerHTML = clickCount + " Click";
  } else {
    click.innerHTML = clickCount + " Clicks";
  };
}, false);

restart.addEventListener('click', function() {
  clickCount = 0;
  click.innerHTML = "0 Clicks";
});
