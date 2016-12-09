(function($, App) {

  var namespace = 'social',
      printButton = $('.icon-print'),
      moreButton = $('.addthis_button_compact'),
      containerTab = $('.zoom'),
      addZoom = $('.tool-icon-1'),
      removeZoom = $('.tool-icon-2'),
      classZoom = ['zoom-1','zoom-2','zoom-3'],
      titleTab = $('.tabs-tabs ul li .tab-title'),
      defaultZoom = 0;

  "use strict";

  function Social() {}

  Social.prototype.printButton = function printButton(e) {
    e.preventDefault();
    window.print();
  };

  Social.prototype.zoomIn = function zoomIn(e) {
    e.preventDefault();
    if(defaultZoom < classZoom.length){
      containerTab.removeClass(classZoom[defaultZoom-1]);
      if(containerTab.attr('class').indexOf(classZoom[defaultZoom])===-1)
      {
        containerTab.addClass(classZoom[defaultZoom]).find('.tab-title').css({'word-break': 'break-all'});
      }
      defaultZoom++;
    }
  };

  Social.prototype.zoomOut = function zoomOut(e) {
    e.preventDefault();

    if(defaultZoom > 0){
      defaultZoom--;
      containerTab.removeClass(classZoom[defaultZoom]);
      if(containerTab.attr('class').indexOf(classZoom[defaultZoom-1])===-1)
      {
        containerTab.addClass(classZoom[defaultZoom-1]).find('.tab-title').css({'word-break': 'break-all'});
      }
    }else{
      titleTab.css({'word-break': 'inherit'});
    }
  };

  $(function() {
    var social = new Social();
    printButton.on('click.' + namespace, social.printButton);
    addZoom.on('click.' + namespace, social.zoomIn);
    removeZoom.on('click.' + namespace, social.zoomOut);
    moreButton.hide();
  });

}(window.jQuery, window.App));
