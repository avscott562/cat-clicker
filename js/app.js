let click = document.querySelector('.click-counter');
let clickCount = 0;
let cat = document.querySelector('.tom-cat-image');

cat.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    click.innerHTML = clickCount + " Click";
  } else {
    click.innerHTML = clickCount + " Clicks";
  };  
});
