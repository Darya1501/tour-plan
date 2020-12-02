var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
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

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function(){
  console.log('click!')
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visiable');
})
;