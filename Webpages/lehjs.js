
let text = document.getElementById('text');
let first = document.getElementById('first');
let one = document.getElementById('01');
let last = document.getElementById('last');


const maxScrollValue = 350; // Set a maximum scroll range

window.addEventListener('scroll',() => {
  let value=window.scrollY;

  // Add a condition to check if the scroll position is within the range
  if (value <= maxScrollValue) {
    text.style.marginTop = value * 2.5 + 'px';
    one.style.left= value * -1.5 +'px';
    last.style.bottom= value * -1.5 +'px';
  }
});
