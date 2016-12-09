require.config({
    paths: {
        text: '../add-ins/text.min',
        scroll: '../add-ins/jquery.tinyscrollbar.min',
        templates: '../../../pj/templates'
    }
});

require(['text!templates/consoleconsole.html', 'scroll'], function (template) {
    var loadContent = function (templatePath) {

        var content = $('.console-content');
        require(['text!templates/' + templatePath], function (layertemplate) {
            content.html(layertemplate);
            content.show();
            content.tinyscrollbar();
        });
    }

    var loadScriptContent = function (scriptPath) {
        var content = $('.console-content');

        require([scriptPath], function (obj) {
            obj.initialize(content);
            content.show();
            content.tinyscrollbar();
        });
    }

    $(document).ready(function () {

        $('body').append(template);

        var w = $(window).width();

        var isiPad = (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) != null || navigator.userAgent.toLowerCase().indexOf("android") > -1;

        var hidden = false,
            content = $('.console-content'),
            view = $('.console'),
            sidebar = view.find('.console-sidebar');

        content.hide();

        $('.close').live('click', function () {
            content.hide();
            $(sidebar).find('a').each(function () {
                $(this).removeClass('active');
                $(this).css('background', 'none');
                $('.console-sidebar').find('.showBG').removeClass('showBG');
            });
        });

        //start the items without opacity
        $(sidebar).find('.nav-image').each(function () {
            var backPos = $(this).css('background-position');
            if (!backPos) {
                var backPosY = $(this).css('background-position-y');
            } else {
                var temp = backPos.split(' ');
                var backPosY = temp[1];
            }
            $(this).css('background-position', '0px ' + backPosY);
        });

        //hide the console sidebar after 3s
		
            var t = setTimeout(function () {
                $('.console').animate({ 'width': '70px' });
                $('.console-header').animate({ 'width': '70px' });
                $('.console-header-image').animate({ 'width': '70px' });
                $('.console-header-image img').animate({ 'width': '70px' }, function () {
                   $('.console-header-image img').attr('src', '../v_1.0/img/Console/bg-nav-header-close.png');
                    $(sidebar).find('.nav-image').each(function () {
                        var backPos = $(this).css('background-position');
                        if (!backPos) {
                            var backPosY = $(this).css('background-position-y');
                        } else {
                            var temp = backPos.split(' ');
                            var backPosY = temp[1];
                        }
                        $(this).css('background-position', '-60px ' + backPosY);
                    });
                });
                hidden = true;
            }, 10000);
          

        $(sidebar).find('li').bind('mouseover', function (e) {
            e.stopPropagation();
            if (!isiPad) {
                if (hidden && !$(this).children('a').hasClass('active')) {
                    $(this).clearQueue().animate({ 'margin-left': '-96px' }, 100);
                    var backPos = $(this).find('.nav-image').css('background-position');
                    if (!backPos) {
                        var backPosY = $(this).find('.nav-image').css('background-position-y');
                    } else {
                        var temp = backPos.split(' ');
                        var backPosY = temp[1];
                    }
                    $(this).find('.nav-image').css('background-position', '0 ' + backPosY);
                }
            }
        });

        $(sidebar).find('li').bind('mouseout', function (e) {
            e.stopPropagation();
            if (!isiPad) {
                if (hidden) {
                    $(this).clearQueue().animate({ 'margin-left': '10px' }, 100);
                    var backPos = $(this).find('.nav-image').css('background-position');
                    if (!backPos) {
                        var backPosY = $(this).find('.nav-image').css('background-position-y');
                    } else {
                        var temp = backPos.split(' ');
                        var backPosY = temp[1];
                    }
                    $(this).find('.nav-image').css('background-position', '-60px ' + backPosY);
                }
            } else {
                return false;
            }

        });

        $(sidebar).find('a').bind('click', function (e) {

            var rel = $(this).attr('rel'),
              link = $(this).attr('data-link');

            if (!hidden) {
                $('.console').width('70px');
                $('.console-header').width('70px');
                $('.console-header-image').width('70px');
                $('.console-header-image img').width('70px');
                $('.console-header-image img').attr('src', '../v_1.0/img/Console/bg-nav-header-close.png');
                $(sidebar).find('.nav-image').each(function () {
                    var backPos = $(this).css('background-position');
                    if (!backPos) {
                        var backPosY = $(this).css('background-position-y');
                    } else {
                        var temp = backPos.split(' ');
                        var backPosY = temp[1];
                    }
                    $(this).css('background-position', '-60px ' + backPosY);
                });
                hidden = true;
                clearTimeout(t);

            }

            switch (rel) {

                case 'script':
                    e.preventDefault();
                    loadScriptContent(link);
                    break;

                case 'template':
                    e.preventDefault();
                    loadContent(link);
                    break;

                case 'link':
                default:
                    break;
            }

            $('.console-sidebar .active').removeClass('active');
            $('.console-sidebar').find('.showBG').removeClass('showBG');

            if (rel != 'link') {
                $(this).addClass('active');
                $(this).parent('li').css('margin-left', '0');
                if (navigator.userAgent.indexOf("Android") < 0) {
                    $(this).parent('li').next('li').find('.shadow-btn').addClass('showBG');
                }
            } else {
                content.hide();
            }

            if (isiPad) {
                $(this).parent('li').css('margin-left', '10px');
            }

        })

    });
});

