function ReadMore() {
  var parent = document.getElementsByClassName('card slick-active');
  //console.log(parent);
  var dots = parent[0].querySelector('.dots');
  //console.log(dots);
  var moreText = parent[0].querySelector('.more');
  //console.log(moreText);
  var btnText = parent[0].querySelector('.read-more-Btn');
  //console.log(btnText);

  if (dots.classList == 'dots visually-hidden') {
    dots.classList.remove('visually-hidden');
    btnText.innerHTML = 'Read more';
    moreText.classList.add('visually-hidden');
  } else {
    dots.classList.add('visually-hidden');
    btnText.innerHTML = 'Read less';
    moreText.classList.remove('visually-hidden');
  }
}
var ReadMoreBtns = document.getElementsByClassName('read-more-Btn');
for (var i = 0; i < ReadMoreBtns.length; i++) {
    ReadMoreBtns[i].addEventListener('click', ReadMore);
}
