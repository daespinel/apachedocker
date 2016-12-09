(function ($, App) {
  "use strict";

  function ImageSwitcher(img, options) {
    this.options = $.extend(true, {}, $.fn.imageSwitcher.options, options);
    this.img = $(img);
    this.isMapArea = !!(this.img.is("[usemap]"));
    this.prevRatio = 1;
    this._init();
  }

  ImageSwitcher.prototype = {
    constructor: ImageSwitcher,
    imgSrc: {},


    /**
     * Init
     * @private
     */

    _init: function () {
      this._setElements();
      this._bindEvents();
      this.changeImageSource();
      this.displayImage();
    },

    _setElements: function () {

      //create map of image sources
      this.imgSrc = {
        tiny: this.img.data('tiny-src'),
        small: this.img.data('small-src'),
        medium: this.img.data('medium-src'),
        big: this.img.data('src')
      };
    },

    /**
     * Add the event listeners
     * @private
     */
    _bindEvents: function () {
      $(window).on('resize', $.proxy(this._onResize, this));

      if (this.isMapArea) {
        $(window).on('load', $.proxy(this.updateMapCoords, this));
      }
    },

    /**
     * resize window handler
     * @private
     */

    _onResize: function () {
      this.changeImageSource();
      if (this.isMapArea) { this.updateMapCoords(); }
    },

    /**
     * Get the viewport width
     * @returns {Number}
     * @private
     */

    _getScreenSize: function () {
      return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    },

    /******* PUBLIC METHOD ********/

    displayImage: function () {
      this.img.css('opacity', 1);
    },

    changeImageSource: function () {
      var imgSize;

      // if tiny screen & tiny image src exists
      if (this.imgSrc.tiny && this._getScreenSize() <= this.options.tinyBreakPoint) {
        imgSize = 'tiny';
        // if small screen
      } else if (this._getScreenSize() <= this.options.smallBreakPoint) {
        imgSize = 'small';
        // if medium screen
      } else if (this._getScreenSize() <= this.options.mediumBreakPoint && this._getScreenSize() > this.options.smallBreakPoint) {
        imgSize = 'medium';
      } else {
        // if other screen (default is big)
        imgSize = 'big';
      }

      this.img.attr('src', this.imgSrc[imgSize]);

      if (this.isMapArea) {
        this.img.attr('usemap', "#" + this.img.parent().find('[data-img-size="'+imgSize+'"]').attr('name'));
      }
    },

    updateMapCoords: function() {
      var cWidth = this.img[0].clientWidth,
        nWidth = this.img[0].naturalWidth,
        ratio = Math.round(cWidth / nWidth * 100) / 100;

      if (ratio &&  ratio !== this.prevRatio) {
        var uMap = this.img.attr('usemap').replace('#', ''),
          areas = $('map[name='+uMap+']').find('area');

        $.each(areas, function(i, el) {
          var coords = $(el).attr('coords').split(","),
            newCoords = [];
          $.each(coords, function(i, val) {
            newCoords.push(val * ratio);
          });
          $(el).attr('coords', newCoords.join());
        });
        this.prevRatio = ratio;
      }
    }

  };

  $.fn.imageSwitcher = function (options) {
    return this.each(function () {
      $(this).data('imageSwitcher', new ImageSwitcher(this, options));
    });
  };


  $.fn.imageSwitcher.options = {
    tinyBreakPoint: App && App.settings && App.settings.mobileTinyScreenWidth || 319,
    smallBreakPoint: App && App.settings && App.settings.mobileScreenWidth || 767,
    mediumBreakPoint: App && App.settings && App.settings.tabletScreenWidth || 991
  };

}(window.jQuery, window.App));

(function ($) {
  'use strict';
  $('.banner-image').imageSwitcher();
})(window.jQuery);
