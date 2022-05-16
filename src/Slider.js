$('.slider-single').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: false,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  responsive: [{
    breakpoint: 768,
  settings: {
    arrows: false
    }
  }]
});

  $('.slider-nav')
  .on('init', function (event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    rows: 1,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: false,
  adaptiveHeight: false,
  arrows: true,
  infinite: false,
  responsive: [{
    breakpoint: 1024,
  settings: {
    slidesToShow: 7,
  slidesToScroll: 1,
      }
    },  {
    breakpoint: 768,
  settings: {
    slidesToShow: 5,
  slidesToScroll: 1,
      }
    },
  {
    breakpoint: 480,
  settings: {
    slidesToShow: 4,
  slidesToScroll: 1,
      }
    },{
    breakpoint: 400,
  settings: {
    slidesToShow: 3,
  slidesToScroll: 1,
      }
    }
  ]
  });

  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});