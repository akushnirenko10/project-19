var slider_original_height;
//var array_of_height;

window.onload = function() {
  slider_original_height = document.getElementsByClassName('slick-track')[0].clientHeight + "px";
  // var parent = document.getElementsByClassName('card slick-slide');
  // array_of_height = Array.prototype.filter.call(parent, function (parent) {
  //   return !parent.classList.contains('slick-active');
  // });
  var single_slider = document.getElementsByClassName('slider slider-single slick-slider');
  var active_slide = document.getElementsByClassName('card slick-slide slick-active');
  var height = active_slide[0].clientHeight;
  single_slider[0].style.height = height + "px";
};

$(document).click(function() {
  //console.log(1);
  var single_slider = document.getElementsByClassName('slider slider-single slick-slider');
  var active_slide = document.getElementsByClassName('card slick-slide slick-active');
  single_slider[0].style.height = slider_original_height;

  console.log(slider_original_height);
  var parent = document.getElementsByClassName('card slick-slide');
  
  var height = active_slide[0].clientHeight;

  //calc height that we need
  
  // var height_that_we_need = active_slide[0].getElementsByClassName('card__article__name').clientHeight + 
  //   active_slide[0].getElementsByClassName('card__article__graduated')[0].clientHeight + 
  //   active_slide[0].getElementsByClassName('card__article__text')[0].clientHeight + 
  //   (active_slide[0].getElementsByClassName('card__article')[0].ClientFlexGap * 2) + 
  //   active_slide[0].getElementsByClassName('card__article__graduated')[0].clientPaddingBottom +
  //   active_slide[0].clientPaddingBottom + active_slide[0].clientPaddingTop;

  //   console.log(active_slide[0].getElementsByClassName('card__article__graduated')[0].clientHeight);
  //     console.log(active_slide[0].getElementsByClassName('card__article__text')[0].clientHeight);
  //       console.log(active_slide[0].getElementsByClassName('card__article')[0].style.rowGap);
  //         console.log(active_slide[0].getElementsByClassName('card__article__graduated')[0].clientPaddingBottom);
  //           console.log(active_slide[0].clientPaddingTop);
  // console.log(height_that_we_need);

  var cards = Array.prototype.filter.call(parent, function (parent) {
    return !parent.classList.contains('slick-active');
  });
  //console.log(active_slide_height);
  //console.log(height);
  
  single_slider[0].style.height = height + "px";
  console.log(single_slider[0].style.height);

  //cards.forEach(element => console.log(element));
  cards.forEach(element => element.querySelector('.more').classList.add('visually-hidden'));
  cards.forEach(element => element.querySelector('.dots').classList.remove('visually-hidden'));
  cards.forEach(element => (element.querySelector('.read-more-Btn').innerHTML = 'Read more'));

});

