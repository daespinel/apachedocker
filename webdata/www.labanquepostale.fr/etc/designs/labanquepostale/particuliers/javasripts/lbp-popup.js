(function($, App) {

    "use strict";

    var popupTrigger = '[data-slidedown]',
        slideDuration = 500,
        isWaiting = false;

    function Slidedown() {
        this.timer = null;
        this.heightAfterAjax;
        this.isAnimate = false;
        this.init();
    }

    Slidedown.prototype = {
        contructor: Slidedown,
        init : function(){
            var that = this,
                updateHeight = function(){
                    // var popup = $(this);
                    // var buttonHeight = popup.siblings(popupTrigger).outerHeight();
                    // var popupHeight = popup.outerHeight(true);

                    // popup.parent().css('height', buttonHeight + popupHeight);
                };
            $(popupTrigger).on('click touchend', function(e){
                e.preventDefault();
                var openButton = $(this);
                if(!isWaiting && !openButton.hasClass('disabled')){
                    openButton.addClass('disabled');
                    that.show(openButton);
                }
            });

            $(window).on('resize.popup', function(){
                clearTimeout(that.timer);
                that.timer = setTimeout(function(){
                    $(popupTrigger + '.disabled').siblings('.show-popup').each(updateHeight);
                }, 100);
            });
        },
        show : function (el) {
            var thatLi = el.parent(),
                ajaxUrl = el.attr('href'),
                popup = thatLi.find('.show-popup'),
                that = this,
                doShow = function(){
                    thatLi.animate({
                        'height': that.getHeight(popup)
                    }, slideDuration);
                    el.addClass('disabled');
                    popup.css('display', 'none').slideDown(slideDuration, function() {
                        isWaiting = false;
                    });
                },
                doHide = function(){
                    popup.slideUp(slideDuration, function(){
                        el.removeClass('disabled');
                        thatLi.css('height', '');
                        isWaiting = false;
                    });
                    $('body').off('keypress.closeSlideDown');
                };
            isWaiting = true;
            if(!popup.data('loaded')){
                popup.data('loaded', true);
                $.ajax({
                    url: ajaxUrl,
                    success: function(data){
                        if(data){
                            var mmoo = $(data).find(popupTrigger);
                            popup.append(mmoo);

                            doShow();

                            popup.find('.icon-remove').parent().off('click.closeSlideDown').on('click.closeSlideDown', function(e){
                                e.preventDefault();
                                if(!isWaiting) {
                                    isWaiting = true;
                                    doHide();
                                }
                            });
                            $('body').on('keydown.closeSlideDown', function(evt) {
                                if(evt.keyCode === 27) {
                                    doHide();
                                }
                            });
                        }
                    }
                });
            }else{
                doShow();
            }
        },
        getHeight : function(popup){
            popup.css({
                'top': -20000,
                'display': 'block'
            });
            var height = popup.outerHeight(true) + popup.siblings(popupTrigger).outerHeight();
            popup.css({
                'top': '',
                'display': ''
            });
            return height;
        }
    };

    $(function(){
        var slidedown = new Slidedown();
        var body = $('body'),
            win = $(window);
        $('#popup-1').on('show.bs.modal', function(){
            win.on('resize.fixHeight', function(){
                body.find('#app').css({
                    height: win.height()
                });
            }).trigger('resize.fixHeight');
        }).on('hide.bs.modal', function(){
            body.find('#app').removeAttr('style');
            win.off('resize.fixHeight');
        });
    });

}(window.jQuery, window.App));

(function($, Modernizr) {
    var body = $('body');
    $(document)
        .on('show.bs.modal', '#popup-1', function () {
            fixHeight();
            $(window).on('resize', function(){
                fixHeight();
            });
        })
        .on('hide.bs.modal', '#popup-1', function () {
            removeHeight();
            $(window).on('resize', function(){
                removeHeight();
            });
        });
    function fixHeight(){
        body.find('#app').css({
            height: $(window).height()
        });
    }
    function removeHeight(){
        body.find('#app').removeAttr('style');
    }
}(window.jQuery, window.Modernizr));
