var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [18.37692830327793, -68.8453883874109],
    zoom: 19
  });
}