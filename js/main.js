<<<<<<< HEAD
$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on('click', function(){
    $(".navbar-bottom").toggleClass('navbar-bottom--visible');
  });


  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);
  $(document).keyup(closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");    
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    if (event.key === "Escape" || event.type === 'click') {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }
  }

  //обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters"
      },
      phone: {
        required: "Рhone number is required"
      },
      email: {
        required: "We need your email to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
    });
  })

  $(document).ready(function(){
    $('.phone').mask('+7 (000) 000-00-00');
  });

=======
$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on('click', function(){
    $(".navbar-bottom").toggleClass('navbar-bottom--visible');
  });


  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);
  $(document).keyup(closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");    
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    if (event.key === "Escape" || event.type === 'click') {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }
  }

  //обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters"
      },
      phone: {
        required: "Рhone number is required"
      },
      email: {
        required: "We need your email to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
    });
  })

  $(document).ready(function(){
    $('.phone').mask('+7 (000) 000-00-00');
  });

>>>>>>> cc9cc7865e9e880c138cab667fe28dca48cddb1c
});