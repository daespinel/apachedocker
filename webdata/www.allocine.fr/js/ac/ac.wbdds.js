if ("undefined" == typeof ACAD) {
    ACAD = {};
}

ACAD.Wbdds = (function () {
    var adjust600 = function () {
        if (ac.adManager.getMaxDimensions($("#wads_po_middle")).height > 590) {

            if ($(".nipnadszone").hasClass("adbanner600active")) {

                $("body").addClass("adbanner600");
                $("#wads_po_middle").css({ width: '300px', height: '250px' });

                $(document).ready(function () {
                    $navprevbtn = $('.boxTrailer .navprevbtn a');
                    $navnextbtn = $('.boxTrailer .navnextbtn a');
                    $slider = $('.boxTrailer .listofvideosthumbnailsview');
                    $position = $('.boxTrailer .navcurrpage');

                    $navnextbtn.click(function () {
                        $slider.animate({ 'margin-left': '-316px' }, 300, function () {
                            $position.text('2');
                        });
                    });

                    $navprevbtn.click(function () {
                        $slider.animate({ 'margin-left': '0' }, 300, function () {
                            $position.text('1');
                        });

                    });

                });

            }
            return true;
        }
    }

    var postRenderScripts = {
        "middle": function () {
            if ('home' !== $("body").attr('id')) {
                return;
            }

            if (!adjust600()) {
                $(document).ready(
                    function () {
                        if (!adjust600()) {
                            $(window).on('load', function () {
                                adjust600();
                            });
                        }
                    });
            }
        }
    };

    function init() {
        if ('wads' !== (ACLight.Beta.test('addisplaysystem') || AC.assets.environment.ad.displaySystem)) {
            document.write('<style type="text/css">.po_wads{display:none !important;}</style>');
            $(document).ready(function () {
                $('.po_wads').remove();
            });

            return false;
        }
        else {
            document.write([
                '<style type="text/css">',
                '.adbox{display:none !important;}',
                '@media only screen and (max-width: 1024px) { html:not([xmlns]) #wads_po_full-site { margin: 46px 0 -46px !important; } }',
                '.col_inner .po_wads{position: relative;}',
                '.site_fr .wbdds_interstitial_site_logo {background-image: url("https://fr.web.img1.acsta.net/commons/webui/FR/ad/logo_fr@2x.png");background-repeat: no-repeat;background-size: auto 100%;}',
                '</style>'
            ].join(''));


            bindWbddsEvents();
            bindEvents();

            return true;
        }
    }

    function isSync() {
        return 'sync' === (ACLight.Beta.test('wadsmode') || AC.assets.environment.ad.wads.display.mode);
    }

    function renderSync(position) {
        if (isSync()){
            document.write('<' + 'script type="text/javascript">try{wads_script(\'' + position + '\');}catch(_e_){}<\/scr' + 'ipt>');
        }
    }

    function postRenderSync(position) {
        if (isSync() && ('function' === typeof postRenderScripts[position])) {
            window.setTimeout(function () { postRenderScripts[position]();}, 10);
        }
    }

    function adjustTargeting(targeting) {
        if (targeting.genres) {
            targeting.genre = targeting.genres;
            delete targeting.genres;
        }
        targeting.cookie = ACLight.Cookie.supported ? 1 : 0;

        try {
            targeting.wads_realScreenSize = Math.max(screen.width, screen.height) * window.devicePixelRatio + 'x' + Math.min(screen.width, screen.height) * window.devicePixelRatio;
        }
        catch (_e_) {
        }
    }

    function bindEvents() {
        $(window).bind("ad.reload", function (event, options) {
            if (options && options.position) {
                reloadPosition(options.position)
            }
        });
    }

    function bindWbddsEvents() {
        $(document).on('wbdds_position_active', function (e) {
            if ('intext' === e.originalEvent.detail.positionName) {
                clonePosition(e.originalEvent.detail.positionName, e.originalEvent.detail.element);
            }
        });
        $(document).on('wbdds_position_close', function (e) {
            if ('interstitial-ft' === e.originalEvent.detail.positionName) {
                if (!adjust600()) {
                    $(window).on('load', function () {
                        adjust600();
                    });
                }
            }
        });
    }

    function reloadPosition(p) {
        try {
            $('div#wads_po_' + p).empty();
            top.wads.sendToPosition(p, wads.ads[p]);
        }
        catch (_e_) {
        }
    }

    function clonePosition(p, e) {
        $(document).ready(function () {
            var id = e.getAttribute('id'),
                n,
                newId;
            if ($('*[id="' + id + '"]').length > 1) {
                n = 1,
                e.setAttribute('id', id + '_' + n);
                e = document.getElementById(id);
                while (e) {
                    n++;
                    newId = id + '_' + n;
                    e.setAttribute('id', newId);
                    top.wads.sendToPosition(p + '_' + n, wads.ads[p]);
                    e = document.getElementById(id);
                }
            }
        });
    }

	return {
	    init: init,
	    adjustTargeting: adjustTargeting,
	    isSync: isSync,
	    renderSync: renderSync,
	    postRenderSync: postRenderSync
	}
} )();
