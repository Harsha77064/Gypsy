window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var layers = document.getElementsByClassName('parallax-layer');

  for (var i = 0; i < layers.length; i++) {
    var depth = layers[i].getAttribute('data-depth');
    var translateY = scrollTop * depth;
    layers[i].style.transform = 'translate3d(0, ' + translateY + 'px, 0)';
  }
});
