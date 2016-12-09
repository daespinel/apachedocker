(function($, App) {

  "use strict";

  function Carousel() {}

  Carousel.prototype.initCarouselColor = function initCarouselColor(e) {
    var carousel = $(this),
        carouselInner = carousel.find('.carousel-inner'),
        activeColor = carouselInner.data('active-color'),
        normalColor = carouselInner.data('normal-color'),
        touchStartX = 0,
        touchStartY = 0,
        touchMoveX  = 0,
        touchMoveY  = 0,
        isPreventDefault = false;

    $('.carousel-indicators li', carousel).css({
      'background-color': normalColor
    })
    .filter('.active').css({
      'background-color': activeColor
    });
    carousel.on('touchstart', function(m){

      isPreventDefault = false;
      touchStartX = m.originalEvent.touches[0].pageX;
      touchStartY = m.originalEvent.touches[0].pageY;
      carousel.on('touchmove', function(n){

        touchMoveX = n.originalEvent.touches[0].pageX;
        touchMoveY = n.originalEvent.touches[0].pageY;
        if(Math.abs(touchMoveX - touchStartX) > Math.abs(touchMoveY - touchStartY)){
          n.preventDefault();
          isPreventDefault = true;
        }
      });
    }).on('touchend', function(){
      if(isPreventDefault){
        if(touchStartX < touchMoveX){
          carousel.carousel('prev');
        }else{
          carousel.carousel('next');
        }
      }
      carousel.off('touchmove');
    });
  };

  Carousel.prototype.updateThumbStatus = function updateThumbStatus(e) {
    var carousel = $(this),
        carouselInner = carousel.find('.carousel-inner'),
        activeColor = carouselInner.data('active-color'),
        normalColor = carouselInner.data('normal-color'),
        thumbs = carousel.find('.carousel-indicators li');

    thumbs.css({
      'background-color': normalColor
    });
    setTimeout(function(){
      thumbs.filter('.active').css({
        'background-color': activeColor
      });
    }, 1);
  };

  $(function() {
    var carousel = new Carousel();

    $('.carousel').each(carousel.initCarouselColor);
    $(document)
      .on('slid.bs.carousel', '.carousel', carousel.updateThumbStatus)
      .on('focusin', '.carousel', function() {
        $(this).carousel('pause');
      })
      .on('focusout', '.carousel', function() {
        $(this).carousel('cycle');
      })
      .on('keydown', '.carousel', function(e) {
        if (e.keyCode === 9) {
          $(this).carousel('next');
        } else if (e.keyCode === 16) {
          setTimeout(function() {
            $(document).on('keydown', function(evt) {
              if (evt.keyCode === 9) {
                $(this).carousel('previous');
              }
            });
          }, 2000);
        }
      });
  });

}(window.jQuery, window.App));
