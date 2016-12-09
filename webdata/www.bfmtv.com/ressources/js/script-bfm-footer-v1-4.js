/*
 BFMTV
 JS v2.1.4
 required: jquery
 */


//Variable global pour la gestion autorefresh et stoprefresh !
var timer = null;
var refresh = true;


$(window).load(function () {
    showAllMenu(); //sous menu
    toogleNav();
    scrollbar();
});

$(document).ready(function () {
    brouillelien();
    alert_download_apps();
    sharrebuttons();
    forceresponsivewidth();
    InsertFooterAdlead();
    imgLazyLoad();
    showMobileNav();
    cookies_msg();
    enableBxSliders();
    bxsliderMultiple();
    searchForm();
    magnificPopupInit();
    sticky();
    PageTransitions.init();
    pool_Init();
    smoothScroll();
    autoRefreshGlobal();

    // Header sites
    if (!(site == 'rmcsport' || site == 'goredforwomen' || site == 'mediaplayer')) {
        if (!isMobile.any()) {
            showMeteo();
            showCac40();
        }
    }

    initSmart();

});

// window resize
$(window).resize(function () {
    showAllMenu();
});

function initSmart(element) {
    var content = element || "body";
    var smart_refresh = '';
    $(content).find('[data-smart-target]').each(function (key, val) {
        format_id = this.getAttribute('data-smart-target');
        smart_refresh = this.getAttribute('data-smart-refresh');
        sas.render(format_id);
        if (smart_refresh < 1 || smart_refresh == '') {
            smart_refresh = 240000;
        }
        refreshsmart(smart_refresh, format_id, 0);
    });
}

function refreshsmart(smart_refresh, format_id, init) {
    if (init == 1) {
        console.log(format_id + ':' + smart_refresh);
        sas.refresh(format_id);
    } else {
        setInterval(function () {
            refreshsmart(smart_refresh, format_id, 1);
        }, smart_refresh);
    }
}


function scrollbar(element) {
    var content = element || "body";
    $(content).find('[data-scroller="true"]').each(function (key, val) {
        $(this).css('overflow', 'hidden');
        $(this).perfectScrollbar();
    });
}

function smoothScroll() {
    // Smooth scroll
    // See: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // a[href*=#]:not([href=#])

    $('a[href*=#]').not('[data-anchor="false"]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            goToAnchor(target);
        }
    });
}

// Lazy Load - jQuery plugin for lazy loading images
function imgLazyLoad(element) {
    var content = element || "body";

    $(content).find("img.lazy").lazyload();

    $(content).find("img.lazy_resp:not(:hidden)").lazyload({
        effect: "fadeIn",
        threshold: 0,
        failure_limit: 100
    });

    $(content).find('img.lazy_resp:hidden[data-mobile]')
        .show()
        .lazyload({
            effect: 'fadeIn',
            data_attribute: 'mobile',
            threshold: 0,
            failure_limit: 100
        });

    $(window).trigger("scroll");

}

function magnificPopupInit(element) {
    var content = element || "body";
    // Inline popups
    $(content).find('.inline-popups').magnificPopup({
        delegate: '.link-inline-popups',
        removalDelay: 500, // delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                $("#bb5-site-wrapper").addClass("blur");
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
            },
            close: function () {
                $("#bb5-site-wrapper").removeClass("blur");
                // Will fire when popup is closed
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    $(content).find('.inline-popups-ajax').magnificPopup({
        type: 'ajax',
        overflowY: 'scroll',
        removalDelay: 500, // delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                $("#bb5-site-wrapper").addClass("blur");
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
            },
            close: function () {
                $("#bb5-site-wrapper").removeClass("blur");
                // Will fire when popup is closed
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    // Image popups
    $(content).find('.image-popups').magnificPopup({
        delegate: 'img',
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                $("#wrap").addClass("blur");
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
            },
            close: function () {
                $("#wrap").removeClass("blur");
                // Will fire when popup is closed
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    // Hinge effect popup
    $(content).find('a.hinge').magnificPopup({
        mainClass: 'mfp-with-fade',
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeClose: function () {
                this.content.addClass('hinge');
            },
            close: function () {
                this.content.removeClass('hinge');
            }
        },
        midClick: true
    });
}
//********** End magnificPopupInit

function toogleNav() {
    // Ouverture / Ferture du sous-menu de la nav
    $(".navbar-nav-rub-toggle").bind('click', function () {
        $(this).find('i').toggleClass('fa-toggle-down fa-toggle-up');
        $(this).parent('.navbar-wrapper').toggleClass('navbar-opened');
    });
}


//PAGE AUTO-REFRESH
function autoRefreshGlobal() {
    if (typeof(refreshTemp) != 'undefined') {
        timer = setInterval(autoRefresh, refreshTemp);
    }
}

function autoRefresh() {
    //Test pour le blocage de l'auto refresh
    if (refresh == null && typeof refresh != "undefined") {
        return false;
    }
    self.location.reload(true);
}
//Allow to stop autorefresh
function stopAutoRefresh() {
    clearInterval(timer);
    autoRefresh = null;
    void 0;
}
//END PAGE AUTO-REFRESH


// Brouillage de liens
function decode64(e) {
    var t = "";
    var n = "";
    var r, i, s = "";
    var o, u, a, f = "";
    var l = 0;
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do {
        o = b64array.indexOf(e.charAt(l++));
        u = b64array.indexOf(e.charAt(l++));
        a = b64array.indexOf(e.charAt(l++));
        f = b64array.indexOf(e.charAt(l++));
        r = o << 2 | u >> 4;
        i = (u & 15) << 4 | a >> 2;
        s = (a & 3) << 6 | f;
        t = t + String.fromCharCode(r);
        if (a != 64) {
            t = t + String.fromCharCode(i)
        }
        if (f != 64) {
            t = t + String.fromCharCode(s)
        }
        r = i = s = "";
        o = u = a = f = ""
    } while (l < e.length);

    return t
}

var b64array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


function brouillelien(element) {
    var content = element || "body";
    var b64array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    $(content).find('.f_01').each(function () {
        var e = $(this).attr("rel");
        if (e) {
            var t = decode64(e);
            $(this).removeClass("f_01");
            $(this).removeAttr("rel");
            className = $(this).attr("class");
            var skip = false;
            var brouillecontent = '';
            var currentContent = '';
            $(this).nextUntil('.f_01').each(function (i) {
                if (!skip) {
                    if ($(this).hasClass("skip")) {
                        skip = true;
                    } else {
                        brouillecontent += $(this).context.outerHTML;
                        $(this).remove();
                    }
                }
            });
            if (!className) {
                $(this).after(t);
                currentContent = $(this).next().html();
                $(this).next().html(currentContent + brouillecontent)
                $(this).remove();
            } else {
                $(this).html(t);
            }

        }
    });
}
// END Brouillage de liens

function goToAnchor(target, delta) {
    if (isNaN(delta)) {
        delta = 120;
    }

    if (typeof this.hash === 'undefined') {
        return false;
    }

    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //console.log(target)
    if (target.length) {
        var height = parseInt(target.offset().top) - parseInt(delta);
        $('html,body').animate({
            scrollTop: height
        }, 1000);

        return false;
    }
}

function enableBxSliders(element) {
    var content = element || "body";
    var slider_array = new Array();

    $(content).find('[data-bxslider="true"]').each(function (index, element) {
        var id = $(element).attr('id');
        slider_array[index] = $(this).bxSlider({
            controls: true,
            adaptiveHeight: true,
            nextText: '',
            prevText: '',
            onSlideAfter: function () {
                // do mind-blowing JS stuff here
                $(window).trigger("scroll");
            }
        });
    });
}

function bxsliderMultiple(element) {
    var content = element || "body";
    // initialise multiples Box slider
    var bxSliderInstances = {};
    // Use a class rather than an ID
    var $slider = $(content).find('.box-slider');

    // For each result
    $slider.each(function (index, element) {
        var id = $(element).attr('id');
        var dataSlides = $(element).attr('data-slides');
        var dataSlidesMob = $(element).attr('data-slides-mob');
        if (dataSlides) {
            if (isMobile.any()) {
                slides = dataSlidesMob;
            }
            else {
                slides = dataSlides;
            }
        }
        else {
            if (isMobile.any()) {
                slides = '1';
            }
            else {
                slides = '3';
            }
        }
        // Initialise a slider using the current index value
        bxSliderInstances["slider" + index] = $slider.eq(index).bxSlider({
            auto: false,
            pager: false,
            duration: 500,
            nextSelector: '#slider-button-next-' + id,
            prevSelector: '#slider-button-prev-' + id,
            nextText: '<i class="fa fa-angle-right"></i><span class="sr-only">Suivant</span>',
            prevText: '<i class="fa fa-angle-left"></i><span class="sr-only">Précédent</span>',
            minSlides: slides,
            maxSlides: slides,
            slideWidth: 338,
            onSlideAfter: function () {
                // do mind-blowing JS stuff here
                $(window).trigger("scroll");
            }
        });

        // If there is more than 1 image
        if ($(element).find('img').length > 1) {
        }

    });
}

function applyResponsiveVideos(selector) {
    $(selector).each(function () {
        $(this).parent().fitVids({
            customSelector: 'iframe[src*="dailymotion.com"]'
        });
    });
}

function forceresponsivewidth() {
    //Force element with width not responsive to width 100% in Article content
    $('#article iframe').css('width', '100%');
}

// Sharrre
function sharrebuttons(element) {

    var content = element || "body";

    $(content).find('.twitter').each(function () {
        var enableCount = false;
        if ($(this).data('count') !== undefined) {
            enableCount = true;
        }
        var a = $(this).attr('id');
        var e_id = parseInt(a.split("_")[1]);
        $('#' + a).sharrre({
            share: {
                twitter: enableCount
            },
            template: '<a class="box" href="#"><i class="fa fa-twitter"></i><div class="count" href="#">{total}</div><div class="share"><span></span>Tweeter</div></a>',
            enableHover: false,
            enableTracking: true,
            enableCounter: true,
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('twitter');
            },
            render: function (api, options) {
                var counter = $('#' + a + " .count");
                if (counter.html() < 4) {
                    counter.hide()
                }
            }
        });

    });

    $(content).find('.facebook').each(function () {
        var enableCount = false;
        if ($(this).data('count') !== undefined) {
            enableCount = true;
        }
        var a = $(this).attr('id');
        var e_id = parseInt(a.split("_")[1]);

        $('#' + a).sharrre({
            share: {
                facebook: enableCount
            },
            template: '<a class="box" href="#"><i class="fa fa-facebook"></i><div class="count" href="#">{total}</div><div class="share"><span></span>Partager</div></a>',
            enableHover: false,
            enableTracking: true,
            enableCounter: true,
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('facebook');
            },
            render: function (api, options) {
                var counter = $('#' + a + " .count");
                if (counter.html() < 4) {
                    counter.hide()
                }
            }
        });
    });

    $(content).find('.linkedin').each(function () {
        var enableCount = false;
        if ($(this).data('count') !== undefined) {
            enableCount = true;
        }
        var a = $(this).attr('id');
        var e_id = parseInt(a.split("_")[1]);

        $('#' + a).sharrre({
            share: {
                linkedin: enableCount
            },
            template: '<a class="box" href="#"><i class="fa fa-linkedin"></i><div class="count" href="#">{total}</div><div class="share"><span></span>Partager</div></a>',
            enableHover: false,
            enableTracking: true,
            enableCounter: true,
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('linkedin');
            },
            render: function (api, options) {
                var counter = $('#' + a + " .count");
                if (counter.html() < 4) {
                    counter.hide()
                }
            }
        });
    });

}


//Meganav ShowHide FX
function showHideContent(selector) {
    if ($(selector).parent().css("top").replace("px", "") != 0) {
        $(selector).parent().find("> div").css({display: "none"});
        $(selector).css({display: "block"});
        $(selector).parent().animate({top: '0px'}, 400);
    } else {
        if ($(selector).css('display') != 'block') {
            $(selector).parent().find("> div").css({display: "none"});
            $(selector).css({display: "block"});
        } else {
            $(selector).parent().animate({top: '-324px'}, 400);
        }
    }

}

//podacast player
function playPodcast(playerId, audioUrl, pubUrl, mode, autoplay) {
    var loops = 0;

    $("#" + playerId).jPlayer({
        ready: function () {
            if (!mode) {
                $(this).jPlayer("setMedia", {
                    mp3: pubUrl
                });
            }
            else {
                $(this).jPlayer("setMedia", {
                    mp3: audioUrl
                });
            }
            if (autoplay !== false) {
                $(this).jPlayer("play");
            }

        },
        play: function () { // To avoid multiple jPlayers playing together.
            if (stop_video_player == true) {
                $('.brightcove_container').remove();
            }
            ;
            $(this).jPlayer("pauseOthers");
        },
        ended: function () {
            if (loops == 0 && !mode) {
                $(this).jPlayer("setMedia", {
                    mp3: audioUrl
                });
                $(this).jPlayer("play");
                loops = 1;
                mode = true;
            }
        },
        swfPath: "/ressources/js",
        solution: "flash,html",
        supplied: "mp3",
        preload: "auto",
        wmode: "transparent",
        smoothPlayBar: true,
        keyEnabled: true
    });

    var seekBarEl = $('#jp_container_1').find('.jp-seek-bar'),
        playBarEl = seekBarEl.find('.jp-play-bar');

    seekBarEl.click(function () {
        if (!mode) {
            $("#" + playerId).jPlayer("playHead", ( playBarEl.width() / seekBarEl.width() * 100));
        }
    });


}

function initInfiniteScroll(start, countdown, uid, parentObject, parent, select) {
    $('#infiniteScroll_' + uid).infinitescroll({
            navSelector: "div.navigation_" + uid,
            // selector for the paged navigation (it will be hidden)
            nextSelector: "div.navigation_" + uid + " a:first",
            // selector for the NEXT link (to page 2)
            itemSelector: "#infiniteScroll_" + uid + " " + select,
            // selector for all items you'll retrieve
            loading: {
                finished: undefined,
                finishedMsg: "<em>Il n'y a plus d'articles.</em>",
                img: "/ressources/img/loader.gif",
                msg: null,
                msgText: "Chargement...",
                selector: null,
                speed: 'fast',
                start: undefined
            },
            state: {
                isDuringAjax: false,
                isInvalidPage: false,
                isDestroyed: false,
                isDone: false, // For when it goes all the way through the archive.
                isPaused: false,
                currPage: start
            },
            behavior: undefined,
            binder: parent
        }, function (newElements, data, url) {
            countdown--;
            /*if (scrollContent[uid] !== undefined ) {
             scrollContent[uid].refresh();
             }*/
            if (countdown < 1) {
                $('#next_' + uid).html('<a class="btn border-s" id="nextLink_' + uid + '">plus de contenu</a>');
                parent.unbind('.infscr');
                $('a#nextLink_' + uid).click(function () {
                    $('#infiniteScroll_' + uid).infinitescroll('retrieve');
                    return false;
                });
            }
            brouillelien(newElements);
            enableBxSliders(newElements);
            bxsliderMultiple(newElements);
            sharrebuttons(newElements);
            imgLazyLoad(newElements);
            PageTransitions.init(newElements);
        }
    );
    if (countdown == 0 || parentObject != 'window') {
        $('#next_' + uid).html('<a class="btn border-s" id="nextLink_' + uid + '">plus de contenu</a>');
        parent.unbind('.infscr');
        $('a#nextLink_' + uid).click(function () {
            $('#infiniteScroll_' + uid).infinitescroll('retrieve');
            return false;
        });
    }
}


var parametresBlocCsa = function (idBloc, nombreAnnonces, topAds, query) {

    var parametres = {
        'container': idBloc,
        //'adLoadedCallback' : callbackBloc(idBloc),
        'fontFamily': 'verdana',
        'titleBold': false,
        'fontSizeTitle': 16,
        'fontSizeDescription': 12,
        'fontSizeDomainLink': 11,
        'width': '640px',
        'lines': '3',
        'colorText': '#575757',
        'colorDomainLink': '#136',
        'colorTitleLink': '#136',
        'longerHeadlines': false,
        'rolloverLinkBold': true,
        'rolloverLinkColor': '#298A08'
    };

    // La clé correspondant au nombre d'annonces dépend de si l'on requête des top ads ou non
    var cleNombreAnnonces = topAds ? 'minTop' : 'number';
    parametres[cleNombreAnnonces] = nombreAnnonces;
    return parametres;

}

// Définition des paramètres généraux CSA (indépendants d'un bloc donné)
function setParamCsa(query) {
    var param = {
        'pubId': '01net-radios',
        'channel': 'BFMTV',
        'query': query,
        'adPage': 1,
        'queryLink': '',
        'queryContext': '',
        'ie': 'utf8',
        'oe': 'utf8',
        'adsafe': 'medium',
        'hl': 'fr',
        'linkTarget': '_blank',
        'domainLinkAboveDescription': true

    };
    return param;
}


function utmx_section() {
}
function utmx() {
}
(function () {
    var k = '0633481334', d = document, l = d.location, c = d.cookie;

    function f(n) {
        if (c) {
            var i = c.indexOf(n + '=');
            if (i > -1) {
                var j = c.indexOf(';', i);
                return escape(c.substring(i + n.
                        length + 1, j < 0 ? c.length : j))
            }
        }
    }

    var x = f('__utmx'), xx = f('__utmxx'), h = l.hash;
    d.write('<sc' + 'ript src="' +
        'http' + (l.protocol == 'https:' ? 's://ssl' : '://www') + '.google-analytics.com'
        + '/siteopt.js?v=1&utmxkey=' + k + '&utmx=' + (x ? x : '') + '&utmxx=' + (xx ? xx : '') + '&utmxtime='
        + new Date().valueOf() + (h ? '&utmxhash=' + escape(h.substr(1)) : '') +
        '" type="text/javascript" charset="utf-8"></sc' + 'ript>')
})();


function openfx(pagex, y) {
    window.open('https://www.crm-metrix.fr/Projects/2010/sc/rmcrsq45/tform1.asp?sID=' + pagex + '&sRate=' + y, 'exit', 'top=2,left=2,height=' + screen.height * 0.90 + ',width=' + screen.width * 0.96 + ',resizable=yes,scrollbars=yes');
}

//Focntion qui supprime les accents dans une de caractères 
function noaccent(s) {
    var temp = s.replace(/[àâä]/gi, "a");
    temp = temp.replace(/[éèêë]/gi, "e");
    temp = temp.replace(/[îï]/gi, "i");
    temp = temp.replace(/[ôö]/gi, "o");
    temp = temp.replace(/[ùûü]/gi, "u");
    return temp;
}

// ALLOW TO APPEND CONTENT FROM PMU DEAL DEPEND OF RUB
function fillBetBloc(id, rubrique) {
    //FOR DEBUG
    $.ajax({
        url: '/bet-article/' + noaccent(rubrique),
        type: 'get',
        success: function (data) {
            var htmlContent = '<div class="title-big color bloc bet-container">Les cotes des prochains matchs</div>';
            var event = data.event;
            var sport = data.sportName;
            var competitionName = '';
            if (event == undefined) {
                $('#' + id).hide();
                return;
            }

            htmlContent += '<div class="bet bloc"><table class="table table-condensed">';
            for (var i in event) {
                if (i < 6) {
                    var eventHeader = event[i][Object.keys(event[i])[0]];
                    if (eventHeader.typeName != competitionName) {
                        competitionName = eventHeader.typeName;
                        htmlContent += '<tr><td colspan="7" class="title-medium text-left competition">' + sport + ' - ' + competitionName + '</td></tr>';
                    }
                    if (sport === 'Football') {
                        var market = event[i].market[0];
                    } else {
                        var market = event[i].market;
                    }
                    if (typeof market != "undefined") { //on test si l'objet existe !
                        if (market[Object.keys(market)[0]].name == '1N2' || sport != 'Football') {
                          var homeName = market.outcome[0][Object.keys(market.outcome[0])[0]].name;
                          var homeOdd = market.outcome[0][Object.keys(market.outcome[0])[0]].oddsDecimal;
                          var awayName = market.outcome[2][Object.keys(market.outcome[2])[0]].name;
                          var awayOdd = market.outcome[2][Object.keys(market.outcome[2])[0]].oddsDecimal;
                          var drawOdd = market.outcome[1][Object.keys(market.outcome[1])[0]].oddsDecimal;
                        }

                      var day = eventHeader.date.split("-");
                      var time = eventHeader.time.split(":");
                      day = day[2]+'/'+day[1]+'/'+day[0].substring(2,4);
                      time = time[0]+':'+time[1];
                      htmlContent +='<tr class="border-b-s">';
                      htmlContent +='<td class="hidden-xs no-border"><span class="time">' + day + '<br/>' +time + '</span></td>';
                      htmlContent +='<td class="no-border">' + homeName + '</td>';
                      htmlContent +='<td class="cotes no-border">' + homeOdd + '</td>';
                      htmlContent +='<td class="cotes no-border">' + drawOdd + '</td>';
                      htmlContent +='<td class="cotes no-border">' + awayOdd + '</td>';
                      htmlContent +='<td class="no-border">' + awayName + '</td>';
                      //htmlContent +='<td class="hidden-xs"><a target="_blank" class="pull-right cap btn btn-default btn-radius btn-warning btn-sm" href="'+ data.link +'">Je parie </a></td> <tr class="visible-xs"><td colspan="9"><a class="cap btn btn-default btn-radius btn-warning btn-sm btn-block bloc" target="_blank" href="'+ data.link +'">Je parie </a></td></tr>';
                      htmlContent +='<td class="hidden-xs btn-paris-bloc-small no-border"><a target="_blank" class="title-xxs btn-xs cap btn border-s btn-radius bg-color-pmu color-txt-0 btn-paris-small" href="'+ data.link +'">Pariez sur <i>PMU.FR</i></a><a target="_blank" class="title-xxs btn-xs cap btn border-s btn-radius btn-paris-small" href="'+ data.linkAccount +'">J\'ai un compte <i><span class="color-pmu">PMU</span><span class="text-danger">.FR</span></i></a></td> <tr class="visible-xs padding-bottom-s"><td colspan="9"><div class="padding-bottom-s"><a class="title-xxs cap btn border-s btn-radius bg-color-pmu color-txt-0" target="_blank" href="'+ data.link +'">Pariez sur <i>PMU.FR</i></a>&nbsp;&nbsp;<a class="title-xxs cap btn border-s btn-radius" target="_blank" href="'+ data.linkAccount +'">J\'ai un compte <i><span class="color-pmu">PMU</span><span class="text-danger">.FR</span></i></a></div></td></tr>';
                      htmlContent +='</tr>';
                    }
                }
            }
            htmlContent += '</table></div>';
            $('#' + id).html(htmlContent);

        },
        error: function () {
            $('#' + id).hide();
        }
    });
    $('#' + id).html();
}

//Script Ticker
function msgTicker(TypeTicker) {
    var data = null;
    //console.log($.cookie('cookie_ticker_bfm'));
    $('#ticker').css({'display': 'none'});
    if ($.cookie('cookie_ticker_bfm') == null) {
        if (TypeTicker == 'bfm') {
            var fullUrl = '/tickers/';
            $.ajax({
                url: fullUrl,
                type: 'get',
                datatype: 'json',
                success: function (data) {
                    var cpt = 1;
                    $('#ticker').append('<ul class="bxsliderTicker">');
                    $('#ticker').prepend('<div class="alerte-info big-font pull-left"><div class="alerte">Alerte</div><div class="info">info</div></div>');
                    $.each(data, function (i, item) {
                        $.each(item, function (key, value) {
                            $.each(value, function (key2, value2) {
                                if ((i == "ALERTE") || (i == "MEGA_ALERTE")) {
                                    $('.bxsliderTicker').append('<li class="' + i + '"> <span class="text-danger">ALERTE</span> : ' + value2 + '</li>');
                                } else {
                                    if (key2) {
                                        $('.bxsliderTicker').append('<li class="' + i + '"> ' + key2 + " : " + value2 + '</li>');
                                    } else {
                                        $('.bxsliderTicker').append('<li class="' + i + '"> ' + value2 + '</li>');
                                    }
                                }

                            });
                            cpt++;
                        });
                    });
                    $('#ticker').append('</ul>');
                    //$('#ticker').append('<a class="fermeTicker"><i class="fa fa-times-circle fa-2x"></i></a>');

                    $('#ticker').css('display', 'block');
                    /*$('a.fermeTicker').click(function(){
                     $('#ticker').hide(500);
                     $.cookie('cookie_ticker_bfm', 'ticker bfm fermer', { expires: 90, path: '/', domain: '.bfmtv.com' });
                     })*/

                    var speed = 100000 * (cpt / 10);
                    $('.bxsliderTicker').bxSlider({
                        mode: 'vertical',
                        minSlides: 1,
                        maxSlides: 3,
                        autoControls: false,
                        controls: false,
                        autoHover: true,
                        auto: true
                    });
                },
                error: function () { /* Nothing to do */
                }
            });
        }


    }
}

//Localisation Paris 
var default_latitude = 48.856614;
var default_longitude = 2.3522219000000177;


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    var pst = crd.latitude + '|' + crd.longitude;
    console.log(document.cookie.indexOf('bfm_pst='));

    if (document.cookie.indexOf('bfm_pst=') == -1) {
        createCookie('bfm_pst', pst, 7);
    }

    hydrateDataHeader(crd.latitude, crd.longitude);

};

function error(err) {
    hydrateDataHeader(default_latitude, default_longitude);
};

//Gestion de la méto sur le header
function showMeteo() {
    if (document.cookie.indexOf('bfm_pst=') != -1) {
        var CookiePst = readCookie('bfm_pst').split('|');
        hydrateDataHeader(CookiePst[0], CookiePst[1]);

        //console.log(ck.split('|'));
        //hydrateDataHeader(crd.latitude, crd.longitude);
    } else {
        /*navigator.geolocation.getCurrentPosition(success, error, options);*/
        hydrateDataHeader(default_latitude, default_longitude);
    }


    // hydrateDataHeader(default_latitude, default_longitude);
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPositionHeader, erreurPositionHeader);
    // }
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function hydrateDataHeader(latitude, longitude) {

    $.ajax({
        url: "/ajax/weather-localisation/",
        data: {
            lat: latitude,
            lon: longitude
        },
        success: function (result) {
            if (result != "") {
                var tabDay = new Array;
                tabDay['Sun'] = 'Dim';
                tabDay['Mon'] = 'Lun';
                tabDay['Tue'] = 'Mar';
                tabDay['Wed'] = 'Mer';
                tabDay['Thu'] = 'Jeu';
                tabDay['Fri'] = 'Ven';
                tabDay['Sat'] = 'Sam';

                var day0 = result['day'][0];

                $('.tempHome').text(day0['current_timeperiod']['temp'] + '°');

                $('#font-faXS').attr('class', 'wi wi-' + day0['current_timeperiod']['symb']);
                $('#font-fa-bloc').attr('class', 'wi wi-' + day0['current_timeperiod']['symb']);
                $('#font-fa').attr('class', 'wi wi-' + day0['current_timeperiod']['symb']);
                $('.icon-meteo').attr('class', 'wi wi-' + day0['current_timeperiod']['symb']);

                $('.ville').html('<strong>' + result['ville'] + '</strong>');
                $('.tendance').text(day0['current_timeperiod']['txt']);
                $('.tendance.bloc').text('Vent : ' + day0['current_timeperiod']['windforce'] + 'km/h' + ' - UV : ' + day0['current_timeperiod']['uv']);
                $('.vent').text('Vent : ' + day0['current_timeperiod']['windforce'] + 'km/h' + ' - UV : ' + day0['current_timeperiod']['uv']);

                $('#meteo-ville').attr('href', 'https://www.bfmtv.com/meteo-des-villes/' + result['ville'] + '/');
            }
        }
    });
}

function showPositionHeader(position) {
    hydrateDataHeader(position.coords.latitude, position.coords.longitude);
}

function erreurPositionHeader(error) {
    hydrateDataHeader(default_latitude, default_longitude);
}


function weatherSearchHeader() {
    var value = $('#city').val();
    if (value != '') {
        window.location = '/meteo-des-villes/' + value + '/';
        return false;
    } else {
        return false;
    }
}


function weatherSearchHeaderHomeBloc() {
    var value = $('#cityHomeBloc').val();
    if (value != '') {
        window.location = '/meteo-des-villes/' + value + '/';
        return false;
    } else {
        return false;
    }
}


function weatherSearchHeaderBloc() {
    var value = $('#cityBloc').val();
    if (value != '') {
        window.location = '/meteo-des-villes/' + value + '/';
        return false;
    } else {
        return false;
    }
}


//Get CAC40
function showCac40() {
    var fullUrl = '/subheader/cac/';

    $.ajax({
        url: fullUrl,
        type: 'get',
        datatype: 'json',
        success: function (data) {

            $('.cacHome').html(data.variation + ' %');

            if (data.variation < 0) {
                $('#faHome').attr("class", "fa fa-caret-down text-danger");
                $('#faHomeXS').attr("class", "fa fa-caret-down text-danger");
                $('#faHomeBloc').attr("class", "fa fa-caret-down text-danger");
            } else {
                $('#faHome').attr("class", "fa fa-caret-up text-success");
                $('#faHomeXS').attr("class", "fa fa-caret-up text-success");
                $('#faHomeBloc').attr("class", "fa fa-caret-up text-success");
            }

            // $('#cacHomeBloc').html(data.variation+' %');
            // if(data.variation < 0) {

            // } else {

            // }

            $('#quotation').text(data.quotation);
            $('#closeEve').text(data.veille);
            $('#opening').text(data.ouverture);


        },
        error: function () { /* Nothing to do */
        }
    });
}


function searchBourse() {
    //search-bourse/
    var fullUrl = window.location.origin + '/search-bourse';
    var value = $('#valeur').val();
    if (value != '') {
        $.ajax({
            url: fullUrl,
            type: 'get',
            datatype: 'json',
            data: 'q=' + $('#valeur').val(),
            success: function (data) {
                if (data.name) {
                    window.location = 'https://www.tradingsat.com/' + data.name + '-' + data.code + '/';
                }
            },
            error: function () { /* Nothing to do */
            }
        });
    }

    return false;
}


function searchBourseBloc() {
    //search-bourse/
    var fullUrl = window.location.origin + '/search-bourse';
    var value = $('#valeurBloc').val();
    if (value != '') {
        $.ajax({
            url: fullUrl,
            type: 'get',
            datatype: 'json',
            data: 'q=' + $('#valeurBloc').val(),
            success: function (data) {
                if (data.name) {
                    window.location = 'https://www.tradingsat.com/' + data.name + '-' + data.code + '/';
                }
            },
            error: function () { /* Nothing to do */
            }
        });
    }

    return false;
}

function alert_download_apps() {

    if (/(^|;)\s*visited=/.test(document.cookie)) {
        // Returning visitor
    } else {

        document.cookie = "visited=true; max-age=" + 60 * 60 * 24 * 7; // 60 seconds to a minute, 60 minutes to an hour, 24 hours to a day, and 7 days.
        // New visit
        // Detection du devise et affichage d'un message en fonction
        if ((isMobile.iOS()) && (AppReferer == false)) {
            // Action à entreprendre
            if(site == 'bfmtv'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://itunes.apple.com/fr/app/bfmtv-1ere-chaine-dinformation/id325658560?mt=8");
            } else if (site == 'rmc'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://itunes.apple.com/fr/app/rmc-info-talk-sport/id340390698?mt=8");
            } else if (site == 'bfmbusiness'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://itunes.apple.com/fr/app/bfm-business-1ere-chaine-dinformation/id403747057?mt=8");
            } else if (site == 'rmcsport'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://itunes.apple.com/fr/app/rmc-sport-actualites-et-resultats/id375165547?mt=8");
            } else {
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://itunes.apple.com/fr/app/bfmtv-1ere-chaine-dinformation/id325658560?mt=8");
            }
        }

        if ((isMobile.Android()) && (AppReferer == false)) {
            // Action à entreprendre
            if(site == 'bfmtv'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://play.google.com/store/apps/details?id=com.nextradiotv.bfmtvandroid");
            } else if (site == 'rmc'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://play.google.com/store/apps/details?id=com.nextradiotv.rmc");
            } else if (site == 'bfmbusiness'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://play.google.com/store/apps/details?id=com.nextradiotv.bfmbusiness");
            } else if (site == 'rmcsport'){
              //$('#download-app').show(); 
              $(".link-download-appli").attr("href", "https://play.google.com/store/apps/details?id=com.nextradiotv.rmcsport");
            } else {
              //$('#download-app').show();
              $(".link-download-appli").attr("href", "https://play.google.com/store/apps/details?id=com.nextradiotv.bfmtvandroid");
            }
        }
    }

}

//Fonction pour afficher les éléments de sous-menu non visibles
function showAllMenu() {
    var navigationwrapperRubriques = $("#main-nav-rubriques .navbar-wrapper").width();
    $('#main-nav-rubriques ul.navbar-nav-rub').each(function () {
        var t = $(this),
            tW = 0;
        $('li', t).each(function () {
            tW += $(this).width();
        });
        if (tW > navigationwrapperRubriques) {
            $('#main-nav-rubriques .navbar-nav-rub-toggle').show();
        }
        else {
            $('#main-nav-rubriques .navbar-nav-rub-toggle').hide();
        }
    });
    var navigationwrapperServices = $("#main-nav-services .navbar-wrapper").width();
    $('#main-nav-services ul.navbar-nav-rub').each(function () {
        var t = $(this),
            tW = 0;
        $('li', t).each(function () {
            tW += $(this).width();
        });
        if (tW > navigationwrapperServices) {
            $('#main-nav-services .navbar-nav-rub-toggle').show();
        }
        else {
            $('#main-nav-services .navbar-nav-rub-toggle').hide();
        }
    });
}

//Fonction qui permet de diviser la home en plusieurs blocs via un infinite scroll
function scrollhome(nbrscrollshome) {
    $('.infiscroll').infinitescroll({
        navSelector: "#next",
        nextSelector: "#next",
        bufferPx: 1000,
        loading: {
            finishedMsg: "",
            img: "https://www.bfmtv.com/ressources/img/loader.gif",
            msgText: '<span class="bloc title-small">Chargement ...</span>',
        },
        itemSelector: ".infiscroll",
        maxPage: nbrscrollshome,
    }, function (newElements, data, url) {
        brouillelien(newElements);
        enableBxSliders(newElements);
        bxsliderMultiple(newElements);
        sharrebuttons(newElements);
        imgLazyLoad(newElements);
        PageTransitions.init(newElements);
        initSmart(newElements);
        pool_Init(newElements);
        showMeteo();
        stopAutoRefresh();
    });
}

/*********************************
 SCRIPTS POOL
 **********************************/

function checkPoolCookie(pool_id) {
    var user = getCookie("poll-" + pool_id);
    if (user != "") {
        $('#poll-choice-' + pool_id).hide();
        $('#poll-result-' + pool_id).show();
    }
}

function pool_Init(element) {
    var content = element || "body";
    $(content).find('[data-pool-id]').each(function (key, val) {
        var pool_id = this.getAttribute('data-pool-id');
        var needmember = this.getAttribute('data-needmember');

        checkPoolCookie(pool_id);

        $('a.poll-vote-action.poll-' + pool_id).on('click', function (event) {
            if (needmember == '1') {
                if (nextmembers && null === nextmembers.getMember()) {
                    return nextmembers.connect();
                }
            }
            ;
            event.preventDefault();
            var $form = $(this).parent();
            $form.find('input#' + $(this).data('choice-id')).trigger('click');
            $form.submit();
        });

    });
}

/*********************************
 SCRIPTS COOKIES
 **********************************/

//BEGIN BFM COOKIES MESSAGE
function cookies_msg() {
    if (($.cookie('cookie_cnil_01net') == null) && ($.cookie('cookie_cnil_bfm') == null)) {
        $('#conteneurCookies').css('display', 'block');
        $('a.fermeCookie').click(function () {
            $('#conteneurCookies').hide(500);
            if (site == 'site01net') {
                $.cookie('cookie_cnil_01net', 'cnil 01net ok', {expires: 90, path: '/', domain: '.01net.com'});
            }
            else {
                $.cookie('cookie_cnil_bfm', 'cnil bfm ok', {expires: 90, path: '/', domain: '.bfmtv.com'});
            }
        })
    }
    ;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

// END BFM COOKIES MESSAGE

/*********************************
 SCRIPTS PUB
 **********************************/

//Fonction adlead
function InsertFooterAdlead() {
    var adlead = $.cookie("bfm_Adlead");
    if (typeof adlead !== 'undefined') {
        var hash = $.cookie("bfm_hash");
        var str = adlead.split(';');
        $('#BlocAdlead').html();
        $.each(str, function (index, value) {
            if (value) {
                var val = value.split(':');
                $('#BlocAdlead').append('<img src="https://ext.adleadevent.com/adtckrtg.php?ids=' + val[1] + '&hash=' + hash + '" />');
            }
        });
    }
}

// SCRIPT BIZDEV permetde connaître le volume de users utilisant Adblock
(function () {
    function async_load() {
        var protocol = ('https:' == document.location.protocol ? 'https://' : 'https://');
        var s = document.createElement('script');
        s.src = protocol + 'pagefair.com/static/adblock_detection/js/d.min.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }

    bm_website_code = '7A73FCBE659B4A62';
    jQuery(document).ready(async_load);
})();


/*********************************
 NEXT HEADER / MENU
 **********************************/
function showMobileNav() {
    // Permet d'afficher le sous menu de nav sur mobile (A revoir -> RMC)
    $('#mobile-nav').click(function () {
        setTimeout(function () {
            $('#selectedSite').find('a').click()
        }, 300);
    });
}

function searchForm() {
    $('.searchForm').each(function (index, element) {
        var form = $(element);
        form.submit(function (event) {
            if ($(this).find("input").val() == '') {
                return false;
            }
        });
    });
}

/*********************************
 NEXT ARTICLE
 **********************************/

function sticky() { // document ready

    if (!!$('.sticky').offset()) { // make sure ".sticky" element exists

        var stickyTop = $('.sticky').offset().top; // returns number

        $(window).scroll(function () { // scroll event

            var windowTop = $(window).scrollTop(); // returns number

            if (stickyTop < windowTop) {
                $('.sticky').css({position: 'fixed', top: '165px'});
            }
            else {
                $('.sticky').css('position', 'static');
            }

        });

    }

}


/*********************************
 LP NEXT+DIGITAL
 JS v1.0.2
 required: jquery + jquery ui
 **********************************/

// Document ready
$(document).ready(function () {

    $(function () {

        //VARS
        var viewport = $(window);
        var toggleBtnAsideMenu = "#portail-bar .navbar-header .navbar-toggle";
        var mainPane = "#pane-content";
        var menuPane = "#pane-menu";
        var paneWrapper = "#pane-wrapper";
        var paneMenuNav = "pane-menu-nav";
        var paneMenuNavWidth = 265;
        var breadcrumMenuArray = new Array();
        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',// Saf 6, Android Browser
            'MozTransition': 'transitionend',      // only for FF < 15
            'transition': 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
        };
        var sectionClass = "";

        //TOGGLE ASIDE MENU
        $(toggleBtnAsideMenu).on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
            var thisBtn = this;
            buildMenu();
            //Interdiction du sroll sur la partie principale de la page
            $(mainPane).on('touchmove', stopScrolling);
            //Ajout de la classe 'open' sur la partie principale de la page
            $(mainPane).addClass("open");
            //Transalation de la partie principale de la page
            if (Modernizr.csstransitions) {
                $(paneWrapper).css(Modernizr.prefixed('transform'), 'translate3d(' + paneMenuNavWidth + 'px, 0px, 0px)');
            } else {
                $(paneWrapper).css({width: $(mainPane).width(), left: paneMenuNavWidth});
            }
            //Au clic, fermeture du panneau
            $(mainPane).one('click', function (event) {
                if (Modernizr.csstransitions) {
                    $(paneWrapper).css(Modernizr.prefixed('transform'), 'translate3d(0px, 0px, 0px)');
                } else {
                    $(paneWrapper).css({left: 0});
                }
                $(mainPane).removeClass("open");
                event.stopPropagation();
                event.preventDefault();
                //Actication du scroll  sur la partie principale
                $(mainPane).off('touchmove', stopScrolling);
                return false;
            });
        });

        /*Add event on menu*/
        $(menuPane).delegate("ul.nav li a, ul.mobile-nav li .btn-return", "click", function (event) {
            event.stopPropagation();
            event.preventDefault();
            var thisMenu = $(this).closest("ul.mobile-nav");
            var thisSection = $(this).closest("li");
            var menuLevel = (thisMenu.hasClass("rub-nav")) ? "rub-nav" : (thisMenu.hasClass("navbar-nav-rub")) ? "navbar-nav-rub" : (thisMenu.hasClass("list-sub-rub")) ? "list-sub-rub" : "undefined";
            var direction = $(event.currentTarget).hasClass("btn-return") ? "prev" : "next";
            switch (direction) {
                case "prev":
                    var newMenu;
                    if (Modernizr.csstransitions) {
                        newMenu = $(breadcrumMenuArray[0]).css(Modernizr.prefixed('transform'), 'translate3d(-' + 2 * paneMenuNavWidth + 'px, 0px, 0px)').appendTo(menuPane + " ." + paneMenuNav);
                        setTimeout(function () {
                            newMenu.addClass("nav-transition");
                            newMenu.css(Modernizr.prefixed('transform'), 'translate3d(-' + paneMenuNavWidth + 'px, 0px, 0px)');
                            //Translation du menu en cours et suppression
                            thisMenu.css(Modernizr.prefixed('transform'), 'translate3d(0px, 0px, 0px)');
                            thisMenu.one(transEndEventNames[Modernizr.prefixed('transition')], function (event) {
                                $(this).remove();
                            });
                        }, 10);
                    } else {
                        newMenu = $(breadcrumMenuArray[0]).appendTo(menuPane + " ." + paneMenuNav);
                        newMenu.css({left: 0});
                        thisMenu.remove();
                    }
                    breadcrumMenuArray.shift();
                    break;
                case "next":
                    //Test si on fait slider le menu
                    if ((menuLevel == "rub-nav" && thisSection.hasClass("active")) || menuLevel != "rub-nav") {
                        //Creation du nouveau menu
                        //Suppression retour home a.navbar-brand
                        var newMenu;
                        switch (menuLevel) {
                            case "rub-nav":
                                newMenu = $("#subheader .navbar-nav-rub").clone().addClass("mobile-nav").appendTo(menuPane + " ." + paneMenuNav);
                                sectionClass = thisSection.attr("class");
                                newMenu.find('li>a.navbar-brand').parent('li').remove();
                                newMenu.prepend("<li class='" + sectionClass + "'><span class='menu-header'><a href='" + $(this).attr("href") + "'>" + $(this).html() + "<i class='fa fa-home'></i></a></span></li>");
                                newMenu.prepend("<li><span class='btn-return'>Précedent</span></li>");
                                break;
                            case "navbar-nav-rub":
                                window.location = $(this).attr('href');
                                break;
                        }
                        if (undefined === newMenu.html()) {
                            return;
                        }
                        //Ajout du menu dans le breadcrumb
                        breadcrumMenuArray.unshift(thisMenu);
                        //Ajout du boutton Retour

                        if (Modernizr.csstransitions) {

                            setTimeout(function () {
                                newMenu.addClass("nav-transition");
                                newMenu.css(Modernizr.prefixed('transform'), 'translate3d(-' + paneMenuNavWidth + 'px, 0px, 0px)');
                                //Translation du menu en cours et suppression
                                thisMenu.addClass("nav-transition").css(Modernizr.prefixed('transform'), 'translate3d(-' + 2 * paneMenuNavWidth + 'px, 0px, 0px)');
                                thisMenu.one(transEndEventNames[Modernizr.prefixed('transition')], function (event) {
                                    $(this).remove();
                                });
                            }, 10);
                        } else {
                            newMenu.css({left: 0});
                            thisMenu.remove();
                        }
                        return false;
                    } else {
                        window.location = $(this).attr('href');
                    }// Fin Test si on fait slider le menu
                    break;
            }//switch direction

        });

        //FUNCTIONS MENU MOBILE
        /*Stop scrolling on main pane*/
        function stopScrolling(event) {
            event.stopPropagation();
            event.preventDefault();
            return false;
        }

        /*Build menu*/
        function buildMenu() {
            //Search Form
            if ($(menuPane).find("#navbar-search").length == 0) {
                $("#navbar-search").clone().appendTo(menuPane);
            }
            //Menu
            if ($(menuPane).find("." + paneMenuNav).length == 0) {
                $("<div></div>").addClass(paneMenuNav).appendTo(menuPane);
            } else {
                $(menuPane + " ." + paneMenuNav + " > ul").remove();
            }
            var menuClone = $("#portail-bar .rub-nav").clone().addClass("mobile-nav");
            if (Modernizr.csstransitions) {
                menuClone.css(Modernizr.prefixed('transform'), 'translate3d(-' + paneMenuNavWidth + 'px, 0px, 0px)');
            } else {
                menuClone.css({left: 0});
            }
            menuClone.appendTo(menuPane + " ." + paneMenuNav);

        }


    });
    //End mobile menu

//END ready
});




