//= jquery.min.js
//= jquery.magnific-popup.min.js
//= slick.min.js

$('.slider-post').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 6000,
	slidesToShow: 1,
	speed: 400,
	appendArrows: ".navigate-post",
	prevArrow: '<div class="top-sliser--prev"></div>',
	nextArrow: '<div class="top-sliser--next"></div>'
});

var menuOpen = function(){
  $('.burger-menu').click(function(e){ // Клик по элементу
    e.preventDefault();
    $('.top-menu').toggleClass('active'); // Скрытый элемент
  });
  $(document).mouseup(function (e) {
    var container = $(".top-menu--wrapper"); // Родительский контейнер элемента где клик
    if (container.has(e.target).length === 0){
      $('.top-menu').removeClass('active');
    }
  });
};
menuOpen();


function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

$('.popup-gallery').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }
 });

// $(".burger-menu").on("click", function() {  
//   $(".menu-header").toggleClass('is-active');
//   $("body").toggleClass('overflow');
// })

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */
