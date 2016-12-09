//v.1.8.2

(function($, App) {

  "use strict";

  var footerLinkTrigger = '[data-footer-link]',
      footerHandlers    = '[data-footer-link-handler]',
      footerContents    = '[data-footer-link-content]';
  function FooterLink() {
    $(footerLinkTrigger).each(function(index, el){
      var handler = $(footerHandlers, el),
        contents = $(footerContents, el),
        show = function(e){
          e.preventDefault();
          handler.addClass('hidden');
          contents.removeClass('hidden');
        };
      handler.on('click.showFooterLink', show);
    });
  }

  $(function() {
    var footerLink = new FooterLink();
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  var bannerAlertTrigger = '#banner-alert',
      alertMessageURL = window.App.settings.bannerAlertURL;

  function BannerAlert() {}

  BannerAlert.prototype.check = function check() {
    var bannerAlert = $(bannerAlertTrigger),
        bannerAlertContent = bannerAlert.find('p');

    $.ajax({
      url: alertMessageURL,
      dataType: 'json',
      success: function(data){
        if(data && data.display){
          bannerAlertContent.append(data.message);
          bannerAlert.slideDown();
        }
      }
    });
  };

  BannerAlert.prototype.closeBannerAlert = function closeBannerAlert() {
    var bannerAlert = $(bannerAlertTrigger);
    bannerAlert.slideUp();
  };

  $(function() {
    var bannerAlert = new BannerAlert();
    bannerAlert.check();
    $(document).on('click', bannerAlertTrigger + ' .icon-remove', bannerAlert.closeBannerAlert);
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  var checkboxTrigger = '[data-checkbox]',
      checkboxWrapper = '.custom-checkbox';

  function Checkbox() {
    this.namespace = 'checkbox';
  }

  Checkbox.prototype.checkIn = function checkIn(el, evt) {
    var checkbox = $(el),
        wrapper = checkbox.closest(checkboxWrapper);

    wrapper[el.checked ? 'addClass' : 'removeClass']('active');

    // accessibility fix (on enter key press)
    if (evt.type === 'keydown') {
      if (el.checked) {
        wrapper.removeClass('active');
        el.checked = false;
      } else {
        wrapper.addClass('active');
        el.checked = true;
      }
    }
  };

  $(function() {
    var checkbox = new Checkbox();

    $(document)
      .on('change.' + checkbox.namespace, checkboxTrigger, function(e) {
        checkbox.checkIn(this, e);
      })
      .on('keydown.' + checkbox.namespace, checkboxTrigger, function(e) {
        if (e.keyCode === 13) {
          checkbox.checkIn(this, e);
        }
      })
      .on('focusin.' + checkbox.namespace, checkboxTrigger, function() {
        $(this).parent().css("border", "1px solid #17479E");
      })
      .on('focusout.' + checkbox.namespace, checkboxTrigger, function() {
        $(this).parent().css("border", "1px solid #B9B9B9");
      });
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  var cookieTrigger = '#cookie',
      firstLoadCookieName = 'firstload';

  function CookieBanner() {}

  CookieBanner.prototype.checkCookie = function checkCookie() {
    var firstLoad = window.docCookies.getItem(firstLoadCookieName);
    if(!firstLoad){
      $(cookieTrigger).slideDown();
    }
  };

  CookieBanner.prototype.closeBannerCookie = function closeBannerCookie() {
    $(cookieTrigger).slideUp();
    var firstLoad = window.docCookies.getItem(firstLoadCookieName);
    if(!firstLoad){
      window.docCookies.setItem(firstLoadCookieName, 'true', App.settings.cookieDay * 24 * 60 * 60);
    }
  };

  var cookieBanner = new CookieBanner();

  $(function() {
    cookieBanner.checkCookie();
    $(document).on('click', cookieTrigger + ' .icon-remove', cookieBanner.closeBannerCookie);
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  function CookieDisclaimer() {}

  CookieDisclaimer.prototype.init = function() {
    var disclaimer_required = window.App.settings.disclaimer_required;
    var disclaimer_url = window.App.settings.disclaimer_url;

    if (disclaimer_required.toString() === '1' && $.trim(disclaimer_url) !== '') {
      this.readDisclaimerCookie(disclaimer_url);
    }
  };

  CookieDisclaimer.prototype.readDisclaimerCookie = function(disclaimer_url) {
    var pageName;
    var currentUrl = document.location.pathname;
    if (currentUrl === "/") {
      pageName = "index";
    } else {
      pageName = currentUrl.match(/[^\/]+$/)[0].split('.')[0];
    }

    window.docCookies.setItem('page_disclaimer_agreed_url', currentUrl);
    
    var cookieDisclaimerPageName = 'page_' + pageName.replace(/-/g, '_') + '_disclaimer_agreed';

    if (window.docCookies.getItem(cookieDisclaimerPageName) === null || window.docCookies.getItem(cookieDisclaimerPageName).toString() === '0') {
      window.location.href = disclaimer_url;
    }
  };

  $(function() {
    var cookieDisclaimer = new CookieDisclaimer();
    cookieDisclaimer.init();
  });

}(window.jQuery, window.App));
(function($, App) {

  "use strict";

  var docCookies = {
    getItem: function (sKey) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
      if (!sKey || !this.hasItem(sKey)) { return false; }
      document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
  };

  window.docCookies = docCookies;

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  $(function() {
    $(document).on('keydown.access.focusHandler.data-api', function(e){
      if(e.which === 9){
        $('[data-access-helper]').addClass(function(){
          return $(this).attr('data-access-helper');
        });
      }
    });
    $('[data-access-helper]').on('keydown.access', 'a', function(e) {
      if (e.keyCode === 13) {
        var target = $(this).attr("href");
        if (target.indexOf('#') !== -1) {
          e.preventDefault();
          $(target).find('a:visible').first().focus();
        }
      }
    });
    //$('.addthis_button_compact').attr('tabindex','-1');

  });

}(window.jQuery, window.App));


(function($, App) {
  "use strict";

  function Geolocation(el) {
    this.$el = $(el);
    this.position = null;
    this.alertWarning = $('.alert-warning');
    this.overlayLoading = $('#loading');
    this.params = {
      timeout: 10000
    };
    this.init();
  }

  Geolocation.prototype = {
    constructor: Geolocation,
    init: function() {
      this.bindEvents();
    },

    bindEvents: function() {
      var that = this;
      this.$el.on('click', function(e) {
        e.preventDefault();
        that.getUserLocation();
      });
    },

    getUserLocation: function() {
      var that = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($.proxy(this.successHandler, that), $.proxy(this.errorHandler, that), this.params);
      } else {
        this.setErrorMessage(App.settings.geolocation.browser_nosupport);
      }
    },

    successHandler: function(position) {
      this.callBpWebservice(position.coords.latitude, position.coords.longitude);
    },

    errorHandler: function(error) {
      var message = '';
      switch (error.code) {
        case error.TIMEOUT:
          message += App.settings.geolocation.timeout;
          break;
        case error.PERMISSION_DENIED:
          message += App.settings.geolocation.permission_denied;
          break;
        case error.POSITION_UNAVAILABLE:
          message += App.settings.geolocation.position_unavailable;
          break;
        case error.UNKNOWN_ERROR:
          message += App.settings.geolocation.unknown_error;
          break;
      }

      this.setErrorMessage(message);
    },

    setErrorMessage: function(message) {
      this.alertWarning.text(message).removeClass('hidden');
      this.overlayLoading.length && this.overlayLoading.hide();
    },

    callBpWebservice: function(lat, lng) {
      var that = this;
      App.webservices.searchByLocation(lat, lng, function (data) {
        if (data.error) {
          that.setErrorMessage(data.error);
        }
        if (data.bureaux && data.bureaux.length > 0) {
          that.redirectPage(data);
        }
      });
    },

    redirectPage: function(data) {
      localStorage.setItem('detailOffice', JSON.stringify(data.bureaux[0]));
      if($('[data-iframe]').length){
        window.location.href = App.settings.iframeLinkDetail;
      } else {
        window.location.href = App.settings.linkDetail;
      }
    }
  };

  $.fn.geolocation = function() {
    return this.each(function() {
      $(this).data('geolocation', new Geolocation(this));
    });
  };

  $(function() {
    $('[data-geolocation]').geolocation();
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  function GoogleApi() {}

  GoogleApi.prototype.init = function() {
    var that = this,
        mapOptions = {
          zoom: 15,
          scrollwheel: true,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP
        },
        allInfoWindow = [],
        pathName = window.location.pathname;

    if($('#map-block').length){
      window.map = new window.google.maps.Map(document.getElementById('map-block'), mapOptions);

      var storedData = $.parseJSON(localStorage.getItem('listOffice'));
      if(typeof storedData === 'undefined') {
        storedData = $.parseJSON(localStorage.getItem('listOffice'));
      }
      if(!storedData) {
        $('.heading .subtitle').addClass('hidden');
      } else {
        var searchInput = storedData.search,
            listOfficeLength = storedData.list.length;
        $('[data-office-list-length]').html(listOfficeLength);
        $('[data-office-list-search]').html(searchInput);
        if($('.search-results').length){
          $('.search-results').html(listOfficeLength+" bureaux de Poste correrspondent à votre recherche «"+searchInput+"»<br>Pour plus de renseignement, sélectionnez le bureau de Poste de votre choix");
        }
      }
    }

    if(pathName.indexOf(App.settings.linkDetail) !== -1 || pathName.indexOf(App.settings.iframeLinkDetail) !== -1) {
      var centerPoint = $.parseJSON(localStorage.getItem('detailOffice'));
      if(centerPoint){
        App.googleApi.initMarker(centerPoint);
        window.map.setCenter(new window.google.maps.LatLng(centerPoint.lat, centerPoint.lng));
      }
    }

    if((pathName.indexOf(App.settings.LinkPostOfficeMap) !== -1 || pathName.indexOf(App.settings.iframeLinkPostOfficeMap) !== -1) && localStorage.getItem('listOffice')) {
      var listOffice = $.parseJSON(localStorage.getItem('listOffice')).list,
          latlngbounds = new window.google.maps.LatLngBounds(),
          office;
      for(var i = 0, l = listOffice.length; i < l; i++) {
        office = listOffice[i];
        if(office){
          App.googleApi.initMarker(office, allInfoWindow);
          latlngbounds.extend(new window.google.maps.LatLng(office.lat, office.lng));
        }
      }
      window.map.fitBounds(latlngbounds);
    }
  };

  GoogleApi.prototype.initMarker = function(point, allInfoWindow) {
    var marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(point.lat, point.lng),
          map: window.map
        }),
        dateTemp = (new Date(point.etat.dateChangement).getTime() - new Date(point.etat.date).getTime())/1000,
        dateTempMinutes = ("0"+((dateTemp%3600)-(dateTemp%3600%60))/60).slice(-2),
        dateTempHours = (dateTemp-dateTemp%3600)/3600,
        dateText,
        infoWindow,
        infoContent;

    App.marker = marker;

    dateText = point.etat.ouvert === true ? '<p><span style="color:green;"> OUVERT &nbsp;</span>Fermé dans ' + dateTempHours + 'H' + dateTempMinutes + ' min</p>' : '<p><span style="color:red;"> FERMÉ &nbsp;</span>Ouvert dans ' + dateTempHours + 'H' + dateTempMinutes + ' min</p>';

    if(allInfoWindow) {
      infoContent = $('[data-iframe]').length ? '<div><a href="' +  App.settings.iframeLinkDetail + '" style="color: #000; text-decoration: none;"><b>' + point.libelleSite + '</b><br/><div>' + point.adresse + '</div><div>' + point.codePostal + ' - ' + point.localite + '</div>' + dateText + '</a></div>' : '<div><a href="' +  App.settings.linkDetail + '" style="color: #000; text-decoration: none;"><b>' + point.libelleSite + '</b><br/><div>' + point.adresse + '</div><div>' + point.codePostal + ' - ' + point.localite + '</div>' + dateText + '</a></div>';
    }
    else {
      infoContent = '<div><b>' + point.libelleSite + '</b><br/><div>' + point.adresse + '</div><div>' + point.codePostal + ' - ' + point.localite + '</div>' + dateText + '</div>';
    }

    infoWindow = new window.google.maps.InfoWindow({
      content: infoContent
    });

    if(allInfoWindow) {
      allInfoWindow.push(infoWindow);
    }

    window.google.maps.event.addListener(marker, 'click', function() {
      if(allInfoWindow) {
        for(var i = 0, l = allInfoWindow.length; i < l; i++) {
          allInfoWindow[i].close();
        }
        localStorage.setItem('detailOffice', JSON.stringify(point));
      }
      infoWindow.open(window.map, marker);
    });
  };

  GoogleApi.prototype.loadApi = function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&' + 'callback=initialize&client=gme-labanquepostale';
    document.body.appendChild(script);
  };

  if($('#map-block').length){
    App.googleApi = new GoogleApi();
    window.initialize = App.googleApi.init;
    App.googleApi.loadApi();
  }

}(window.jQuery, window.App));

(function($) {

  "use strict";

  var fluidIframeTrigger = '[data-fluid-iframe]';

  $(function() {
    try {
      $(fluidIframeTrigger).iFrameResize();
    } catch(e) {
      console.log(e.message);
    }
  });

}(window.jQuery));

(function($, App) {

  "use strict";

  function OldBrowsers() {
    this.overlay = $('#ob-overlay');
    this.popin = $('#ob-popin');
    this.init();
  }

  OldBrowsers.prototype = {
    constructor: OldBrowsers,
    init: function() {
      var obCookie = window.docCookies.getItem('OB'),
          getNbDdisplay = localStorage.getItem('OBNBDISP'),
          nbDisplay = (getNbDdisplay !== null) ? parseInt(getNbDdisplay, 10) : 0,
          browser = this.getBrowser(App.settings.oldBrowsers);

      if (!obCookie && browser && nbDisplay < App.settings.oldBrowsers.nbDisplay) {
        var div = this.popin.find('.desc'),
            text = div.html().replace('%user_browser%', browser);

        div.empty().append(text);
        this.overlay.show();
        this.popin.show();
        this.bindEvents();
        localStorage.setItem('OBNBDISP', nbDisplay + 1);
      }
    },
    getBrowser: function(data) {
      for (var i = 0; i < data.length; i++) {
        var ua = navigator.userAgent.toLowerCase(),
            index = ua.indexOf(data[i].subString);

        if (index !== -1) {
          var _index = (data[i].subString === 'safari') ? ua.indexOf('version/') + 8 : index + data[i].subString.length + 1,
              version = parseFloat(ua.substring(_index));

          if (!isNaN(version) && !this.versionCompare(version.toString(), data[i].version.toString())) {
            return data[i].identity + ' ' + version;
          } else {
            return false;
          }
        }
      }
    },
    versionCompare: function(left, right) {
      if (typeof left + typeof right !== 'stringstring') {
        return false;
      }

      var a = left.split('.'),
        b = right.split('.');

      for (var i = 0, n = Math.max(a.length, b.length); i < n; i++) {
        var n1 = (typeof a[i] !== 'undefined') ? parseInt(a[i], 10) : 0,
          n2 = (typeof b[i] !== 'undefined') ? parseInt(b[i], 10) : 0;

        if (n1 >= n2) {
          return true;
        } else if (n1 < n2) {
          return false;
        }
      }
      return false;
    },
    bindEvents: function() {
      var that = this;
      this.popin.on('click', '.ob-close', function() {
        window.docCookies.setItem('OB', 'true', App.settings.oldBrowsers.cookieDuration * 60);
        that.popin.hide();
        that.overlay.hide();
      });
    }
  };

  $(function() {
    if ($('body').hasClass('oldbrowsers') || $('html').hasClass('old-ie') && $('#ob-popin').length !== 0) {
      var oldBrowser = new OldBrowsers();
    }
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  var headingBackground = $('.heading-background');
  if(headingBackground.length) {
    var content = $('#content'),
        checkShowHideArrow = function() {
          if(headingBackground.is(':visible')) {
            content.removeClass('none-arrow');
          }
          else {
            content.addClass('none-arrow');
          }
        };

    checkShowHideArrow();
    $(window).on('orientationchange.checkShowHideArrow', function(){
      setTimeout(checkShowHideArrow, 500);
    });
  }

}(window.jQuery, window.App));

(function($, App) {
  "use strict";

  function CustomSelect() {
    this.selectTrigger = '[data-custom-select]';
    this.optionTrigger = '[data-custom-select-option]';
    this.namespace = 'select';
  }

  CustomSelect.prototype = {
    constructor: CustomSelect,

    toggleSelect: function(el) {
      var $ul = $(el).parent('.custom-select').find('ul');
      $ul[($ul.hasClass('opened')) ? 'removeClass' : 'addClass']('opened');
    },

    updateSelect: function(el) {
      var $el = $(el),
          $elParent = $el.closest('.custom-select');
      $el.closest('ul').find('.active').removeClass('active');
      $el.addClass('active');
      $elParent.find('.icons-label').text($el.attr('title'));
      $elParent.find('ul').removeClass('opened');
      $elParent.find(this.selectTrigger).focus();
      $(document).trigger('custom-select-option-changed', $el.data('custom-select-option'));
    }
  };

  $(function() {
    var customSelect = new CustomSelect();
    $(document)
      .on('click.' + customSelect.namespace, customSelect.selectTrigger, function(e) {
        e.preventDefault();
        customSelect.toggleSelect(this);
      })
      .on('keydown.' + customSelect.namespace, customSelect.selectTrigger, function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          customSelect.toggleSelect(this);
        }
      })
      .on('click.' + customSelect.namespace, customSelect.optionTrigger, function(e) {
        e.preventDefault();
        customSelect.updateSelect(this);
      })
      .on('keydown.' + customSelect.namespace, customSelect.optionTrigger, function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          customSelect.updateSelect(this);
        }
      });
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";

  function SubNav() {
    this.navbar = $('#navbar-collapse');
    this.container = '[data-toggle="subcontent"]';
    this.trigger = '[data-toggle-trigger="subcontent"]';
    this.triggers = $('[data-toggle-trigger="subcontent"]', this.navbar);
    this.subContainer = '[data-accordion-content]';
    this.subTrigger = '[data-accordion-handler]';
    this.subTriggers = $('[data-accordion-handler]', this.navbar);
    this.activeElement = null;
    this.positionedElement = $('#header [class*="position-"]');
    this.slideDuration = 300;
    this.overlay = $('#overlay');
  }

  SubNav.prototype = {

    open: function open(target) {
      if(this.activeElement) {
        this.activeElement.find('.nav-content').removeAttr('aria-expanded').hide();
        this.activeElement.removeClass('in');
      }

      this.activeElement = target;
      target.addClass('in');
      target.find('.nav-content').stop().slideDown(this.slideDuration, 'linear').attr('aria-expanded', 'true');
      // this.positionedElement.addClass('position-0');
      this.positionedElement.css('position', 'static');
      this.overlay.show();
    },

    close: function close(target) {
      var that = this;
      if(target.length > 0) {
        target.find('.nav-content').stop().slideUp(this.slideDuration, 'linear', function() {
          // that.positionedElement.removeClass('position-0');
          that.positionedElement.css('position', 'relative');
          target.removeClass('in');
          $(this).removeAttr('aria-expanded');
          // Prevent ugly visual glitch on chrome
          $(window).scrollTop($(window).scrollTop()+1);
          $(window).scrollTop($(window).scrollTop()-1);
        });
      }
      this.activeElement = null;
      that.overlay.hide();
    },

    toggleSub: function toggleSub(evt) {
      var subContent = $(evt.target).closest('li').find(this.subContainer);
      if(subContent.length){
        evt.preventDefault();
        if(subContent.is(':visible')) {
          subContent.removeAttr('aria-expanded').hide();
        } else {
          subContent.attr('aria-expanded', 'true').show();
        }
      }
    }
  };

  $(function() {
    if($('#navbar-collapse').length > 0) {

      var subNav = new SubNav();

      $(subNav.triggers).on(App.settings.supportedGesture + '.subNav', function(evt) {
        evt.preventDefault();
        var target = $(this).closest(subNav.container);
        if(target.hasClass('in')) {
          subNav.close(target);
        } else {
          subNav.open(target);
        }
      });

      //Focusout with tab key
      $(subNav.container, subNav.navbar).not('[class*="hidden-"]').each(function(index) {
        $(this).find('a').last().on('focusout.subNav', function(evt) {
          subNav.close($(this).closest(subNav.container));
        });
      });

      // Close with escape key
      $(document).on('keydown.subNav', function(evt) {
        if(evt.keyCode === 27){ // Escape key
          var openedSubNav = $(subNav.container + '.in', subNav.navbar);
          if(openedSubNav.length > 0) {
            subNav.close(openedSubNav);
          }
        }
      });
      // Close by clicking elsewhere
      $('body').on(App.settings.supportedGesture + '.subNav', function(evt) {
        if(subNav.activeElement && !$(evt.target).closest('[data-toggle]').length) {
          subNav.close(subNav.activeElement);
        }
      });

      subNav.subTriggers.on(App.settings.supportedGesture + '.subNav', function(evt) {
        subNav.toggleSub(evt);
      });

      // Hide overlay when closing menu
      $('#header [data-toggle="collapse"]').on('click.hideOverlay', function(){
        subNav.overlay.hide();
      });
    }
  });

}(window.jQuery, window.App));


(function($, App) {

  "use strict";


  /* SUBTOGGLE CLASS DEFINITION
   * ========================== */

  function Toolbox() {
    this.toolbox = $('#nav-toolbox');
    this.popin = $('.popin-login');
    this.supportedGesture = $('html.touch').length > 0 ? 'touchend': 'click';
    this.toolboxMenu = $('#toolbox-collapse');
    this.mobileButton = $('#mobile-button');
    this.desktopButton = $('#mobile-button').nextAll();
    this.currentPanel = null;
    this.currentPanelTrigger = null;
    this.overlay = $('#overlay');
    this.animationDuration = App.settings.durationAnimateToolBox;
    this.deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    this.desktopPanelWidth = 870;
    this.panelWidth = this.desktopPanelWidth;
    this.isAppInstalled = false;
    this.openFrom = 'toolbox';

    // fix get app layer for tablet with small screen (< 768)
    if (App.settings.isTablet && $(window).width() <= App.settings.mobileScreenWidth) {
      $('html').addClass('tabletsmallscreen');
    }
  }

  Toolbox.prototype = {
    constructor: Toolbox,
    init: function() {
      // Deals with loggin redirection and markup setup accordingly
      this.checkIfLogged();
      this.setVisitorFlag();
      this.checkPositionToolbox();
      this.bindEvents();
    },
    initKeyboard: function() {
      this.openFrom = 'button';
      this.checkIfLogged();
      this.showPopin();
      this.bindEvents();
    },
    bindEvents: function() {
      var that = this;
      // OPENING
      this.toolbox.on(App.settings.supportedGesture + '.toolbox', '.navbar-collapse', function(evt) {
        var target = $(evt.target);

        // We ensure we are not in the opened panel already
        if (!target.closest('.sub-navbox').length) {

          if (!target.is(':input')) {
            evt.preventDefault();
          }

          var togglePanel = target.closest('[data-toggle-toolbox]');
          if (togglePanel.length) {
            var clickedPanel = togglePanel.parent().find('.sub-navbox');
            if ((that.currentPanel && that.currentPanel[0] !== clickedPanel[0])) {
              that.closePanel();
              that.openPanel(evt);
            } else {
              if (typeof window.tracking !== 'undefined') {
                window.tracking.callToolbarTracking(target, evt);
              }
              if ($('.navbar-collapse.active').length) {
                setTimeout(function() {
                  that.openPanel(evt);
                }, 200);
              } else {
                that.showLabels();
              }
            }
          } else { // Click is on mobile button
            that.showLabels();
          }
          return false;
        }

      }).on('mouseenter', function() { // Open toolbox menu with labels on mouseenter
        if (!that.toolboxMenu.hasClass('open') && !that.currentPanel && !App.settings.isMobile) {
          if (!that.toolboxMenu.hasClass('active')) {
            setTimeout(function () {
              that.showLabels();
            }, 200);
          }
        }
      }).on('mouseleave', function() { // Close toolbox menu with labels on mouseleave
        if (!that.toolboxMenu.hasClass('open') && !App.settings.isMobile) {
          setTimeout(function () {
            that.closeLabels();
          }, 200);
        }
      }).on('mousedown', function() {
        that.toolboxMenu.addClass("mousedown", true);
      }).on('mouseup', function() {
        setTimeout(function() {
          that.toolboxMenu.removeClass("mousedown");
        }, 100);
      }).on('focusin', function(evt) { // Toggle toolbox menu with labels on focusin
        if (!that.toolboxMenu.hasClass('active') && !that.toolboxMenu.hasClass('open') && !App.settings.isMobile) {
          setTimeout(function() {
            that.showLabels();
          }, 200);
        } else if (that.toolboxMenu.hasClass('open') && !that.toolboxMenu.hasClass('mousedown')) {
          var target = $(evt.target);
          var togglePanel = target.closest('[data-toggle-toolbox]');
          if (togglePanel.length) {
            var clickedPanel = togglePanel.parent().find('.sub-navbox');
            if ((that.currentPanel && that.currentPanel[0] !== clickedPanel[0])) {
              that.closePanel();
              that.openPanel(evt);
            }
          }
        }
      }).on('keypress', function(e) {
        if (that.toolboxMenu.hasClass('active') && e.keyCode === 13 && !App.settings.isMobile) {
          setTimeout(function() {
            that.openPanel(e);
          }, 200);
        }
      });

      // CLOSING
      this.toolbox.on(App.settings.supportedGesture + '.toolbox', '.close', function(evt) {
        evt.preventDefault();
        setTimeout(function () {
          that.closePanel(true);
          that.closeLabels();
        }, 250);
        return false;
      });

      this.popin.find('.inner').on(App.settings.supportedGesture, '.close', function(e) {
        e.preventDefault();
        that.hidePopin();
      });

      $('#goApp, #goClassic').on(App.settings.supportedGesture, function(e) {
        e.preventDefault();

        // set cookie for two weeks to not display again
        window.docCookies.setItem('UC-APP', 'true', 15 * 24 * 60 * 60);

        var link = $(this).attr('href');
        if (link === '#') {
          that.getKeyboard();
          $('html, body').animate({scrollTop : 0},0);
        } else {
          window.location = link; // launch the app or redirect to store
        }
      });

      $('body').on(App.settings.supportedGesture + '.toolbox', function(evt) {
        if (!$(evt.target).closest(that.toolbox).length) {
          that.closePanel(true);
          that.closeLabels();
        }
        if (that.popin.length !== 0 && !$(evt.target).closest(that.popin).length && !$(evt.target).closest('[data-open-login]').length) {
          that.hidePopin();
        }
      }).on('keydown.subNav', function(evt) {
        if (evt.keyCode === 27){ // Escape key
          that.closePanel();
          that.closeLabels();
          if(that.popin.length !== 0) {
            that.hidePopin();
          }
        }
        if (evt.keyCode === 9){ // tab key
          if ( that.popin.length !== 0 && (/Mot de passe/i.test(evt.target.title)) ) {
            that.hidePopin();
            $('[data-open-login]').focus();
          }
        }
      }).on('focusin', function(evt) {
        if (that.toolboxMenu.hasClass('active') && !$(evt.target).is('.toolbox-link') && !App.settings.isMobile) {
          setTimeout(function() {
            that.closeLabels();
          }, 200);
        }
      });

      $(window).on('resize', function(){
        that.deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        that.setContentWidth();
        if (that.currentPanel) {
          that.checkToolboxHeight(that.currentPanel);
          that.currentPanel.add(that.currentPanel.find('.inner')).removeAttr('style');
          that.currentPanel.add(that.currentPanel.find('.inner')).css({ 'width': that.panelWidth });
        } else if (that.popin.length !== 0) {
          var popinContainer = that.popin.find('.sub-navbox');
          if (that.popin.is(':visible')) {
            that.checkToolboxHeight(popinContainer);
          }
          popinContainer.add(popinContainer.find('.inner')).removeAttr('style');
          popinContainer.add(popinContainer.find('.inner')).css({ 'width': that.panelWidth });
        } else {
          if (that.deviceWidth > App.settings.mobileScreenWidth) {
            that.mobileButton.hide();
            that.desktopButton.show();
          } else {
            that.desktopButton.hide();
            that.mobileButton.show();
          }
        }
      });
    },
    showLabels: function() {
      var that = this;
      this.closePanel();
      setTimeout(function(){
        that.toolboxMenu.addClass('active');
        that.mobileButton.hide();
        that.desktopButton.show();
      }, 100);
    },
    closeLabels: function(showMobileButton) {
      if(typeof showMobileButton === 'undefined') {
        showMobileButton = false;
      }
      if(showMobileButton) {
        if(this.deviceWidth <= App.settings.mobileScreenWidth){
          this.mobileButton.show();
        }
      }
      this.toolboxMenu.removeClass('active');
      this.toolboxMenu.find('[data-toggle-toolbox]').removeClass('active').removeClass('color-1');
    },
    openPanel: function(evt) {
      if($(evt.target).closest('.nav-connected').length) {
        window.location.replace(window.App.settings.connectedRedirectURL);
        return;
      }
      var that = this,
          toolboxMenu = this.toolboxMenu;
      this.currentPanelTrigger = $(evt.target).closest('[data-toggle-toolbox]');
      this.currentPanelTrigger.addClass('active');
      this.currentPanel = this.currentPanelTrigger.parent().find('.sub-navbox');
      this.setContentWidth();
      this.toolboxMenu.removeClass('active');
      // Set timeout needed here because of animation duration on close
      window.setTimeout(function() {
        toolboxMenu.addClass('open');
      }, this.animationDuration * 1.05);
      this.currentPanel.removeClass('hidden');
      this.currentPanel.find('.inner').css({'width': this.panelWidth});
      this.currentPanel.css({'width': 0}).stop(true).animate({
        'width': this.panelWidth
      }, this.animationDuration);
      if(this.deviceWidth <= App.settings.mobileScreenWidth){
        // this.mobileButton.show();
        this.toolboxMenu.find('.nav').css('height', 'auto');
      }
      // this.currentPanel.find('a.close').focus();
      if (this.currentPanel.hasClass('my-accounts')) {
        window.dataLayer.push({'event': 'boutonaccesauxcomptes'}); // Google tag
        setTimeout(function() {
          var iframe = that.currentPanel.find('iframe');
          if (iframe.length !== 0) {
            iframe[0].focus();
          }
        }, this.animationDuration * 1.05);
      }
      if (this.currentPanel.hasClass('post-office')) {
        setTimeout(function() {
          // set focus to input
          that.currentPanel.find('input[name="PostOffice"]').focus();
        }, this.animationDuration * 1.05);
      }
      if (this.currentPanel.hasClass('search-engine')) {
        setTimeout(function() {
          // set focus to input
          that.currentPanel.find('input[name="searchTerm"]').focus();
        }, this.animationDuration * 1.05);
      }
      if (!App.settings.isMobile) {
        $('body').addClass('modal-open');
        this.checkToolboxHeight(this.currentPanel);
      }
      this.overlay.show();
    },
    closePanel: function(hideButtonsOnMobile) {
      if(typeof hideButtonsOnMobile === 'undefined') {
        hideButtonsOnMobile = false;
      }
      var that = this,
          currentPanel = this.currentPanel;
      if(currentPanel) {
        currentPanel.find('input').blur();
        currentPanel.find('.inner').removeAttr('style');
        currentPanel.stop(true).animate({
          'width': 0
        }, this.animationDuration, function () {
          that.toolboxMenu.removeClass('open');
          //that.toolbox.removeAttr('style'); commented because toolbox moving up on closing when cookies or/and alert messages appears
          if(hideButtonsOnMobile) {
            if(that.deviceWidth <= App.settings.mobileScreenWidth){
              that.mobileButton.show();
              that.toolboxMenu.find('.nav').attr('style', '');
            }
          }
          currentPanel.addClass('hidden').css('width', '');
        });
        this.currentPanelTrigger.removeClass('active');
        this.currentPanelTrigger = null;
        this.currentPanel = null;
        this.overlay.hide();
        $('body').removeClass('modal-open');
      }
    },
    showPopin: function() {
      var that = this;
      this.setContentWidth();
      var popinContainer = this.popin.find('.sub-navbox');
      popinContainer.add(popinContainer.find('.inner')).removeAttr('style');
      popinContainer.add(popinContainer.find('.inner')).css({ 'width': (this.deviceWidth <= App.settings.mobileScreenWidth) ? '100%' : this.panelWidth });
      setTimeout(function() {
        that.overlay.show();
        that.popin.show();
      }, 400);
      $('body').addClass('modal-open');
      this.checkToolboxHeight(this.currentPanel);
    },
    hidePopin: function() {
      if (this.popin.find('.iframe').length !== 0) {
        this.popin.find('.inner').empty();
      }
      this.popin.hide();
      this.overlay.hide();
      $('body').removeClass('modal-open');
    },
    setFocusOutListeners: function() {
      var that = this;
      $(that.toolbox).find('.sub-navbox').each(function(index) {
        var lastLink = $(this).find('a').not('.visible-xs').last().off('focusout.toolbox').on('focusout.toolbox', function() {
          that.closeLabels();
          that.closePanel();
        });
      });
    },
    setContentWidth: function() {
      if(this.deviceWidth <= App.settings.mobileScreenWidth){
        this.panelWidth = '100%';
      } else if(this.deviceWidth <= App.settings.tabletScreenWidth && this.deviceWidth > App.settings.mobileScreenWidth){
        this.panelWidth = this.deviceWidth - 100;
      } else if(this.deviceWidth > App.settings.tabletScreenWidth){
        this.panelWidth = this.desktopPanelWidth;
      }
    },
    checkIfLogged: function() {
      var cookieValue = window.parseInt(window.docCookies.getItem('IDENT'));
      if (cookieValue === 1) {
        if (this.openFrom === 'toolbox') {
          var navAccount = $('#nav-account');
          navAccount.addClass('nav-connected');
          navAccount.find('.icons-label').text(App.settings.connectedRedirectionLabel);
        } else {
          window.location.replace(App.settings.connectedRedirectURL);
        }
      } else {
        var _that = this;

        if (this.openFrom === 'toolbox') {
          $('#nav-account')
            .on(App.settings.supportedGesture, function() {
              if (!$(this).hasClass('opened')) {
                _that.checkKeyboardAvailability();
                $(this).addClass('opened');
              }
            })
            .on('keypress', function(e) {
              if(!$(this).hasClass('opened') && e.keyCode === 13) { // Enter key press
                _that.checkKeyboardAvailability();
                $(this).addClass('opened');
              }
            });
        } else {
          if (!$(this).hasClass('opened')) {
            _that.checkKeyboardAvailability();
            $(this).addClass('opened');
          }
        }
      }
    },
    checkKeyboardAvailability: function() {
      var ucCookie = window.docCookies.getItem('UC-APP'); // check if user already  choose action in last two weeks
      this.isAppInstalled = window.docCookies.getItem('LBP-APP-INSTALLED'); // check if user has already the app installed


      // display the layer only on mobile & tablet devices
      if ( (App.settings.isMobile || App.settings.isTablet) && !ucCookie) {
        if (this.checkOSVersion()) { // check if user device is compatible with app
          this.showAppContent( (App.settings.isTablet) ? 3 : 1 ); // display the corresponding content
          if (!App.settings.isTablet && App.settings.isMobile) {
            setTimeout(function() {
              $('.my-accounts .close').hide();
            }, 100);
          }
        } else {
          if (App.settings.isTablet) { // if tablet & incompatible with app, we display the keyboard
            this.getKeyboard();
          } else {
            this.showAppContent(2);
            setTimeout(function() {
              $('.my-accounts .close').hide();
            }, 100);
          }
        }
      } else {
        $('.my-accounts .inner').empty();
        this.getKeyboard();
        if (this.openFrom === 'button') {
          this.setFocusOnIframe();
        }
      }
    },
    getKeyboard: function() {
      var that = this,
          request = $.ajax({
            url: window.App.settings.keyboardAvailabilityURL,
            type: 'GET',
            dataType: 'html'
          });
      request.done(function(html) {
        $('.my-accounts .inner').html(html);
        that.setFocusOutListeners();
      });
      request.fail(function( jqXHR ) {
        window.console.log( "Login keyboard request failed !", jqXHR );
      });
    },
    setFocusOnIframe: function() {
      var that = this;
      setTimeout(function() {
        // set focus to iframe content
        var iframe = that.popin.find('iframe');
        if (iframe.length !== 0) {
          iframe[0].focus();
        }
      }, 400);
    },
    checkOSVersion: function() {
      if (App.settings.isAndroid) {
        var androidVersion = navigator.userAgent.match(/Android [\d+\.]{3,5}/)[0].replace('Android ','');
        return (androidVersion && this.versionCompare(androidVersion, App.settings.androidMinVersion)) ? true : false;
      } else if (App.settings.isiOS) {
        var iOSVersion = navigator.userAgent.match(/OS ((\d+_?){2,3})\s/)[0].replace('OS ','').replace(/_/g,'.');
        return (iOSVersion && this.versionCompare(iOSVersion, App.settings.iOSMinVersion)) ? true : false;
      } else if (App.settings.isWindows) {
        var windowsVersion = navigator.userAgent.match(/Windows Phone [\d+\.]{2,3}/);
        if (windowsVersion.length !== 0) {
          windowsVersion = windowsVersion[0].replace('Windows Phone ','');
        } else {
          windowsVersion = navigator.userAgent.match(/Windows Phone OS [\d+\.]{2,3}/);
          if (windowsVersion.length !== 0) {
            windowsVersion = windowsVersion[0].replace('Windows Phone OS','');
          }
        }
        return (windowsVersion && this.versionCompare(windowsVersion, App.settings.windowsMinVersion)) ? true : false;
      } else {
        return false;
      }
    },
    versionCompare: function(left, right) {
      if (typeof left + typeof right !== 'stringstring') {
        return false;
      }

      var a = left.split('.'),
          b = right.split('.');

      for (var i = 0, n = Math.max(a.length, b.length); i < n; i++) {
        var n1 = (typeof a[i] !== 'undefined') ? parseInt(a[i], 10) : 0,
            n2 = (typeof b[i] !== 'undefined') ? parseInt(b[i], 10) : 0;

        if (n1 >= n2) {
          return true;
        } else if (n1 < n2) {
          return false;
        }
      }
      return false;
    },
    showAppContent: function(nb) {
      var accountContainer = $('.my-accounts'),
          appUrl = this.getAppUrl();
      switch (nb) {
        case 1: // content for compatible devices
          accountContainer.find('#app-text').text(App.text1);
          accountContainer.find('#app-img').attr('src', App.img1);
          if (this.isAppInstalled) {
            accountContainer.find('#goApp').text(App.button1Text1).attr('href', appUrl);
          } else {
            accountContainer.find('#goApp').text(App.button1Text2).attr('href', appUrl);
          }
          accountContainer.find('#goClassic').text(App.button2Text1);
          break;
        case 2: // content for non compatible devices
          accountContainer.find('#app-text').text(window.App.text2);
          accountContainer.find('#app-img').attr('src', App.img2);
          accountContainer.find('img').not('#app-img').hide();
          accountContainer.find('.img-block').addClass('nc');
          accountContainer.find('#goApp').text(App.button1Text5).attr('href', App.settings.mobileSiteUrl);
          accountContainer.find('#goClassic').text(App.button2Text1);
          break;
        case 3: // content for tablet devices
          accountContainer.find('#app-text').text(window.App.text3);
          accountContainer.find('#app-img').attr('src', App.img3);
          if (this.isAppInstalled) {
            accountContainer.find('#goApp').text(App.button1Text3).attr('href', appUrl);
          } else {
            accountContainer.find('#goApp').text(App.button1Text4).attr('href', appUrl);
          }
          accountContainer.find('#goClassic').text(App.button2Text1);
          break;
      }
    },
    getAppUrl: function() {
      if (App.settings.isiOS) {
        return (this.isAppInstalled) ? App.settings.iosLaunchApp : App.settings.appStoreURL;
      } else if (App.settings.isAndroid) {
        return (this.isAppInstalled) ? App.settings.androidLaunchApp : App.settings.playStoreURL;
      } else if (App.settings.isWindows) {
        return (this.isAppInstalled) ? App.settings.windowsLaunchApp : App.settings.windowsStoreURL;
      }

    },
    setVisitorFlag: function(){
      var that = this,
          lastVisit = localStorage.getItem('lastVisit');
      // 3600000 = 1 hour in milliseconds
      if((lastVisit && new Date().getTime() - lastVisit > 3600000) || !lastVisit) {
        this.showLabels();
        window.setTimeout(function() {
          that.closeLabels();
        }, 1500);
      }
      try {
        localStorage.setItem('lastVisit', new Date().getTime());
      } catch(e) {
        document.cookie = 'lastVisit=' + new Date().getTime() + '; path=/';
      }
    },
    checkPositionToolbox: function() {
      var that = this,
          header = $('#header'),
          navButton = $('[data-toggle="collapse"]', header),
          prevTop = 0,
          headerPaddingTop = parseInt(header.css('padding-top'), 10),
          setPosToolbox = function() {
            var newTop = navButton.is(':visible') ? 0 : header.position().top + headerPaddingTop;
            if(prevTop !== newTop){
              that.toolbox.css('top', newTop);
              prevTop = newTop;
            }
            setTimeout(setPosToolbox, 50);
          };
      setPosToolbox();
    },

    checkToolboxHeight: function(el) {
      var ToolboxContentHeight = $(el).outerHeight() + parseInt((this.toolbox.css('top')).replace("px", ""), 10);
      if (screen.height > $(window).height() && window.innerHeight < ToolboxContentHeight) {
        this.toolbox.css("position", "absolute");
        $('body').removeClass('modal-open');
      }
    }
  };

  $(function() {
    if ($('#nav-toolbox').length) {
      App.bpToolbox = new Toolbox();
      App.bpToolbox.init();
    }
    $('[data-open-login]').on(App.settings.supportedGesture + '.popin', function(e) {
      e.preventDefault();
      App.bpLogin = new Toolbox();
      App.bpLogin.initKeyboard();
      window.dataLayer.push({'event': 'boutonaccesclientspart'}); // Google tag
    });

    $('[data-form-search]')
      .on(App.settings.supportedGesture, '[data-search-filters]', function(e) {
        e.preventDefault();
        var $elParent = $(this).parent(),
            $criteriaGroup = $elParent.find('#criteriaGroup'),
            $serviceGroup = $elParent.find('#serviceGroup');

        if ($criteriaGroup.is(":visible")) {
          $criteriaGroup.hide();
          $serviceGroup.hide();
        } else {
          $elParent.find('input#type-office').prop("checked", true);
          $elParent.find('label[for=gestion_client]').show();
          $elParent.find('label[for=samedi]').show();
          $criteriaGroup.show();
          $serviceGroup.show();
        }

        // enable scrolling on toolbox layer for small screens
        if ($elParent.find('#criteriaGroup').is(':visible')) {
          $('#nav-toolbox').css('position', 'absolute');
        } else {
          $('#nav-toolbox').css('position', 'fixed');
        }
      })
      .on(App.settings.supportedGesture, 'input[type=radio]', function() {
        var $elParent = $(this).parents('form');
        if ($(this).attr('id') === 'type-dab') {
          $elParent.find('#serviceGroup').hide();
          $elParent.find('label[for=gestion_client]').hide();
          $elParent.find('label[for=samedi]').hide();
        } else {
          $elParent.find('#serviceGroup').show();
          $elParent.find('label[for=gestion_client]').show();
          $elParent.find('label[for=samedi]').show();
        }
      });
  });

}(window.jQuery, window.App));


(function($, App) {

  "use strict";

  function Tracking() {
    this.trackingAttribute = 'data-track-click';
    this.trackingSelector = '[' + this.trackingAttribute + ']';
  }

  Tracking.prototype = {
    constructor: Tracking,
    callClickTracking: function(el, evt) {
      var trackingData = {},
        finalString = "";
      try {
        trackingData = $.parseJSON(el.attr(this.trackingAttribute));
        finalString = this.cleanTrackingData(trackingData);
      } catch (e) {
        console.log("TRACKING JSON DATA PARSE ERROR : " + e.message);
      }

      var href = el.attr('href'),
        elm = (typeof href !== 'undefined' && (href.indexOf('#') === 0 || href.indexOf('javascript') === 0)) ? '' : el[0];

      if (typeof trackingData.med !== 'undefined' && trackingData.med) {
        window.xt_med('C', trackingData.id, finalString, trackingData.type);
      } else {
        evt.preventDefault();
        window.xt_click(elm, 'C', trackingData.id, finalString, trackingData.type);
      }
    },
    keydownRedirect: function(el) {
      var href = $(el).attr('href'),
        target = $(el).attr('target') || '_self';

      if (typeof href !== 'undefined' && !(href.indexOf('#') === 0 || href.indexOf('javascript') === 0)) {
        setTimeout(function () {
          switch (target) {
            case '_self':
              window.location.href = href;
              break;
            case '_top':
              top.location.href = href;
              break;
            case '_parent':
              parent.location.href = href;
              break;
            case '_blank':
              window.open(href, '_blank');
              break;
          }
        }, 200);
      }
    },
    callToolbarTracking: function(target, evt) {
      if(!$('.navbar-collapse.active').length) {
        window.xt_med('C',App.settings.tag.id,'toolbar::ouverture','A');
      } else {
        var el = target.closest('[data-toggle-toolbox]');
        this.callClickTracking(el, evt);
      }
    },
    cleanTrackingData: function(data) {
      var outString = data.pageName.replace(/[éèê]/gi, 'e'), // remove specials e
        outString2 = outString.replace(/[àâ]/gi, 'a'), // remove specials a
        outString3 = outString2.replace(/[ç]/gi, 'c'),  // remove ç
        outString4 = outString3.replace(/ /g,'_'), // remove spaces
        outString5 = outString4.replace(/[`~!@#$%^&*()|+\-=?;'",.<>\{\}\[\]\\\/]/gi,''), // remove one
        outString6 = outString5.replace(/([a-zA-Z_]:{1}[a-zA-Z_])/,'_');
        return outString6.toLowerCase();
    }
  };

  $(function() {
    if (typeof window.xt_click !== 'undefined' && typeof window.xt_med !== 'undefined') {
      window.tracking = new Tracking();
      $(document)
        .on('keydown', window.tracking.trackingSelector, function(e) {
          if (e.keyCode === 13) { // enter key
            window.tracking.callClickTracking($(this), e);
            window.tracking.keydownRedirect(this);
          }
        })
        .on('click', window.tracking.trackingSelector, function(e) {
          window.tracking.callClickTracking($(this), e);
        });
    }
  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";
  var webBrowser = navigator.appVersion;

  function Validator() {
    Validator.prototype.placeHolder;
    Validator.prototype.textBox;
    Validator.prototype.select;
  }

  Validator.prototype.formatValidator = function formatValidator(e) {
    if(Validator.prototype.textBox){
      var thatTextBox = Validator.prototype.textBox;
      thatTextBox.blur();
      Validator.prototype.removeClassError(thatTextBox);
      if(webBrowser.indexOf("MSIE") !== -1){
        thatTextBox.val(Validator.prototype.placeHolder);
      }
      else{
        thatTextBox.val('');
        thatTextBox.attr('placeholder', Validator.prototype.placeHolder);
      }
    }
    if(Validator.prototype.select){
      var thatSelect = Validator.prototype.select,
          thatLabel = thatSelect.prev('.icons-label'),
          firstOption = $(thatSelect).find('option:first');
      thatSelect.val(firstOption.val());
      thatLabel.text(firstOption.text());
    }
  };

  Validator.prototype.focusValidator = function focusValidator(e) {
    var that = $(this);
    Validator.prototype.textBox = that;
    Validator.prototype.placeHolder = that.attr('placeholder');
    if(webBrowser.indexOf("MSIE") !== -1){
      if(that.val() === Validator.prototype.placeHolder){
        that.val('');
      }
    }
    else{
      that.attr('placeholder','');
    }
  };

  Validator.prototype.blurValidator = function blurValidator(e) {
    var that = $(this);
    if(webBrowser.indexOf("MSIE") !== -1){
      if(!that.val().length || that.val() === undefined){
        that.val(Validator.prototype.placeHolder);
      }
    }
    else{
      that.attr('placeholder', Validator.prototype.placeHolder);
    }
  };

  Validator.prototype.keyupValidator = function keyupValidator(e) {
    var that = $(this);
    if(that.val().length && !App.webservices.wsError){
      Validator.prototype.removeClassError(that);
    }
  };

  Validator.prototype.validatorNumber = function validatorNumber(e) {
    var numberReg =  new RegExp('[0-9]');
    if(e.charCode === undefined || (e.charCode === e.which && e.charCode !== 0)){
      if(!numberReg.test(String.fromCharCode(e.which))){
        e.preventDefault();
      }
    }
  };

  Validator.prototype.selectChangeValidator = function selectChangeValidator(e) {
    Validator.prototype.select = $(this);
    var that = $(this).find(":selected"),
        thatLabel = $(this).prev().find('.icons-label');
    thatLabel.text(that.text());
  };

  Validator.prototype.addClassError = function addClassError(e) {
    var that = $(e),
        warningAlert = that.next('.alert-warning');
    that.addClass('error');
    if(warningAlert.length){
      if(that.data('type') && that.data('type').length){
        switch(that.data('type'))
        {
          case 'phone':
            warningAlert.text(App.settings.validate.phone);
            break;
        }
      }
      warningAlert.removeClass('hidden');
    }
  };

  Validator.prototype.removeClassError = function removeClassError(e) {
    var that = $(e),
        warningAlert = that.next('.alert-warning');
    that.removeClass('error');
    if(warningAlert.length){
      warningAlert.addClass('hidden');
    }
  };

  Validator.prototype.submitValidator = function submitValidator(e) {
    var thatTextBox = $(this).closest('form').find('input'),
        textBoxCharacter = thatTextBox.val().split(' '),
        findNotDigit = thatTextBox.val().match(/\D/g);
    Validator.prototype.textBox = thatTextBox;
    e.preventDefault();
    if(!thatTextBox.val()) {
      $('.alert-warning').text(App.settings.validate.addressEmpty).removeClass('hidden');
    }
    if(!thatTextBox.val().length || thatTextBox.val() === thatTextBox.attr('placeholder') || !textBoxCharacter[0].length || (thatTextBox.data('type') === 'phone' && findNotDigit !== null)){
      Validator.prototype.addClassError(thatTextBox);
    }
    else{
      if(thatTextBox.data('type') === 'address'){
        App.webservices.callApi(thatTextBox);
      }
    }
  };


  $(function() {
    window.validator = new Validator();
    $('#form-contact').data('format', window.validator.formatValidator);
    $('#form-contact input[type="tel"]').data('type', 'phone');

    $('.old-ie #form-contact input[type="tel"]').val($('.old-ie #form-contact input[type="tel"]').attr('placeholder'));
    $('.old-ie [data-form-search] input[type="text"]').each(function(){
      $(this).val($(this).attr('placeholder'));
    });
    $('#form-contact .btn')
    .on('click.validate touchend.validate', window.validator.submitValidator);

    $('#form-contact')
    .off('change.validate keyup.validate focus.validate keypress.validate blur.validate', 'input[type="text"], select')
    .on('change.validate', 'select' , window.validator.selectChangeValidator)
    .on('keyup.validate', 'input[type="tel"]', window.validator.keyupValidator)
    .on('focus.validate', 'input[type="tel"]', window.validator.focusValidator)
    .on('keypress.validate', 'input[type="tel"]', window.validator.validatorNumber)
    .on('blur.validate', 'input[type="tel"]', window.validator.blurValidator);

    $('[data-form-search] input[type="text"]').data('type', 'address');

    $('[data-form-search]')
    .on('submit.validate', this, window.validator.submitValidator);
    $('[data-form-search] .btn')
    .on('click.validate touchend.validate', this, window.validator.submitValidator);

    $('[data-form-search]')
    .off('keyup.validate change.validate focus.validate blur.validate', 'input[type="text"], select')
    .on('keyup.validate', 'input[type="text"]', window.validator.keyupValidator)
    .on('change.validate', 'select' , window.validator.selectChangeValidator)
    .on('focus.validate', 'input[type="text"]', window.validator.focusValidator)
    .on('blur.validate', 'input[type="text"]', window.validator.blurValidator);

  });

}(window.jQuery, window.App));

(function($, App) {

  "use strict";
  var overlayLoading = $('.overlay-loading'),
      alertWarning = $('[data-form-search] .alert-warning');



  function Webservices() {
    this.session;
    this.urlGetData = App.settings.urlGetDataWebservices;
    this.urlGeoCode = App.settings.urlGetGeoCode;
    this.urlSearchByLocation = App.settings.urlSearchByLocation;
    this.bpServices = [];
  }

  Webservices.prototype.callApi = function callApi(textBox) {
    var that = this,
        textBoxCharacter = textBox.val().split(' '),
        alertWarning = textBox.next('.alert-warning'),
        zipCode = null,
        services = [];
    App.webservices.wsError = false;
    for (var i=0; i<textBoxCharacter.length; i++){
      if(!isNaN(textBoxCharacter[i]) && textBoxCharacter[i].length === 5){
        zipCode = textBoxCharacter[i];
        break;
      }
    }

    // get all checked options
    $("input:checkbox[name=services]:checked").each(function() {
      services.push($(this).val());
    });

    function redirectPage(data) {
      if(data.bureaux.length === 1){
        localStorage.setItem('detailOffice', JSON.stringify(data.bureaux[0]));
        if($('[data-iframe]').length){
          window.location.href = App.settings.iframeLinkDetail;
        } else {
          window.location.href = App.settings.linkDetail;
        }
      }
      else{
        var listOffice = {
          search: textBox.val(),
          list: data.bureaux
        };
        localStorage.setItem('listOffice', JSON.stringify(listOffice));
        if($('[data-iframe]').length){
          window.location.href = App.settings.iframeLinkPostOfficeList;
        } else {
          window.location.href = App.settings.LinkPostOfficeList;
        }
      }
    }

    function searchOfficeCallback(data) {
      if(data){
        if(data.bureaux && data.bureaux.length > 0){
          redirectPage(data);
        }
        else{
          var errorText = (data.statusCode === 0) ? App.ws.error : data.error;
          that.getLatLong(ville, function(data){
            if(data && data.results.length && data.status === 'OK'){
              var lat = data.results[0].geometry.location.lat,
                  lng = data.results[0].geometry.location.lng;
              that.searchByLocation(lat, lng, function(data){
                if(data.error) {
                  alertWarning.text(data.error).removeClass('hidden');
                  overlayLoading.length && overlayLoading.hide();
                }
                if(data.bureaux && data.bureaux.length > 0){
                  redirectPage(data);
                }
              });
            } else {
              $('input[name="PostOffice"], input[name="VotreRecherche"]').next('.alert').removeClass('hidden').text(errorText);
              $('#loading').hide();
              return;
            }
          });
        }
      }
    }

    that.session = window.CryptoJS.MD5(App.ws.key + App.ws.token).toString();
    overlayLoading.length && overlayLoading.show();
    if(zipCode !== null){
      that.callApiByZipCode(zipCode, services, function(data) {
        if(data){
          if((data.bureaux && data.bureaux.length > 0)){
            redirectPage(data);
          }
          else {
            if (!data.bureaux) {
              var errorText = (data.statusCode === 0) ? App.ws.error : data.error;
              $('input[name="PostOffice"], input[name="VotreRecherche"]').next('.alert').removeClass('hidden').text(errorText);
              $('#loading').hide();
              return;
            }
            that.callApiByVille(ville, services, searchOfficeCallback);
          }
        }
      });
      return;
    }
    else{
      var ville = textBox.val();
      that.callApiByVille(ville, services, searchOfficeCallback);
    }
  };

  Webservices.prototype.callApiByZipCode = function callApiByZipCode(codePostal, services, callback) {

    var that = this;
    $.ajax({
      url: App.webservices.urlGetData,
      dataType : 'json',
      data: {
        id: App.ws.id,
        session: this.session,
        code_postal: codePostal,
        'services[]': services,
        use_http_status_code: 0
      },
      error: function(){
        App.webservices.wsError = true;
        $('input[name="PostOffice"], input[name="VotreRecherche"]').next('.alert').removeClass('hidden').text(App.ws.noResponse);
        $('#loading').hide();
      },
      success: function(data){
        if (data.error === undefined){
          callback(data);
        } else {
          if(data.statusCode !== undefined && Number(data.statusCode) === 401) {
            // IE8 trick
            that.session = window.CryptoJS.MD5(App.ws.key + data.token).toString();
            that.callApiByZipCode(codePostal, services, callback);
          }else {
            if(!data.bureaux) {
              callback(data);
            }
          }
        }
      }
    });
  };

  Webservices.prototype.callApiByVille = function callApiByVille(ville, services, callback) {

    var that = this;
    $.ajax({
      url: App.webservices.urlGetData,
      dataType : 'json',
      data: {
        id: App.ws.id,
        session: this.session,
        ville: ville,
        'services[]': services,
        use_http_status_code: 0
      },
      error: function(){
        App.webservices.wsError = true;
        $('input[name="PostOffice"], input[name="VotreRecherche"]').next('.alert').removeClass('hidden').text(App.ws.noResponse);
        $('#loading').hide();
      },
      success: function(data){
        if (data.error === undefined) {
          callback(data);
        } else {
          if(data.statusCode !== undefined && Number(data.statusCode) === 401) {
            // IE8 trick
            that.session = window.CryptoJS.MD5(App.ws.key + data.token).toString();
            that.callApiByVille(ville, services, callback);
          }else {
            if(!data.bureaux) {
              callback(data);
            }
          }
        }
      }
    });
  };

  Webservices.prototype.searchByLocation = function searchByLocation(lat, lng, callback) {
    var that = this;
    $.ajax({
      url: App.webservices.urlSearchByLocation + lat + '\/' + lng,
      dataType : 'json',
      data: {
        id: App.ws.id,
        session: this.session,
        use_http_status_code: 0
      },
      error: function(dataError){
        if(dataError.error !== undefined){
          that.session = window.CryptoJS.MD5(App.ws.key + dataError.responseJSON.token).toString();
          that.searchByLocation(lat, lng, callback);
        }
      },
      success: function(data){
        if (data.error === undefined) {
          callback(data);
        } else {
          if(data.statusCode !== undefined && Number(data.statusCode) === 401) {
            that.session = window.CryptoJS.MD5(App.ws.key + data.token).toString();
            that.searchByLocation(lat, lng, callback);
          } else {
            if(!data.bureaux) {
              callback(data);
            }
          }
        }
      }
    });
  };

  Webservices.prototype.getLatLong = function getLatLong(address, callback) {
    $.ajax({
      url: App.webservices.urlGeoCode,
      dataType : 'json',
      type: "GET",
      data: {
        address : address,
        sensor: true
      },
      success: function(data){
        callback(data);
      }
    });
  };

  Webservices.prototype.getOfficeDetail = function(urlGetDetail, callback) {
    var that = this;
    overlayLoading.show();
    $.ajax({
      url: urlGetDetail,
      dataType : 'json',
      data: {
        id: App.ws.id,
        session: this.session,
        use_http_status_code: 0
      },
      error: function(dataError){
        if(dataError.error !== undefined){
          that.session = window.CryptoJS.MD5(App.ws.key + dataError.responseJSON.token).toString();
          that.getOfficeDetail(urlGetDetail, callback);
        }
      },
      success: function(data){
        if (data.error === undefined) {
          overlayLoading.hide();
          callback(data);
        } else {
          that.session = window.CryptoJS.MD5(App.ws.key + data.token).toString();
          that.getOfficeDetail(urlGetDetail, callback);
        }
      }
    });
  };

  App.webservices = new Webservices();

}(window.jQuery, window.App));
