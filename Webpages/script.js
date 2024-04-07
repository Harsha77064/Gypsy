// @ts-ignore
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const maxScrollValue = 350; // Set a maximum scroll range

window.addEventListener('scroll',() => {
  let value=window.scrollY;

  // Add a condition to check if the scroll position is within the range
  if (value <= maxScrollValue) {
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top= value * -1.5 +'px';
    leaf.style.left= value * 1.5 +'px';
    tree.style.left = value * -1.5 +'px';
    plant.style.bottom= value * -1.5 + 'px';
    plant.style.right= value * 1.5 + 'px';
    if(value<=150)
     {
         hill1.style.top = value * -1 +'px';
     }
    hill5.style.left= value * 1.5 +'px';
    hill4.style.left= value * -1.5 +'px';
    hill2.style.right = value * -1 +'px';
    hill3.style.right = value * -1 +'px';
  }
});
