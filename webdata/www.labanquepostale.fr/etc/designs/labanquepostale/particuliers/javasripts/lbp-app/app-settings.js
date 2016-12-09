(function (window) {

  /* APP DEFINITION
   * ============== */

  var App = {
    settings: {},
    l10n: {
      random: {}
    }
  };


  /* APP SETTINGS
   * ============ */


  App.settings.debug = true;
  App.settings.mobileTinyScreenWidth = 319;
  App.settings.mobileScreenWidth = 767;
  App.settings.tabletScreenWidth = 991;
  App.settings.supportedGesture = 'click';
  App.settings.isMobile = !!(/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()));
  App.settings.isTablet = !!(/ipad|android 3.0|lg-v500|gt-p5210|k007|sm-p900|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()));
  App.settings.isiOS = !!(/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase()));
  App.settings.isAndroid = !!(/android/i.test(navigator.userAgent.toLowerCase()));
  App.settings.isWindows = !!(/windows/i.test(navigator.userAgent.toLowerCase()));
  App.settings.iOSMinVersion = '6.1';
  App.settings.androidMinVersion = '2.3';
  App.settings.windowsMinVersion = '8';
  App.settings.appStoreURL = 'https://itunes.apple.com/fr/app/la-banque-postale/id409362880?mt=8';
  App.settings.iosLaunchApp = 'lbpIosApp://'; // TODO: specify custom url to launch the lbp app under iOS
  App.settings.playStoreURL = 'https://play.google.com/store/apps/details?id=com.fullsix.android.labanquepostale.accountaccess&hl=fr_FR';
  App.settings.androidLaunchApp = 'lbpAndroidApp://'; // TODO: specify custom url to launch the lbp app under android
  App.settings.windowsStoreURL = 'http://www.windowsphone.com/fr-fr/store/app/la-banque-postale/5ee9dd44-a119-4833-879e-18b4ed1c1135';
  App.settings.windowsLaunchApp = 'lbpWindowsApp://'; // TODO: specify custom url to launch the lbp app under windows
  App.settings.mobileSiteUrl = 'http://labanquepostale.mobi';
  App.settings.filterItemsPerPage = 12;
  App.marker = [];


  /* APP SETTINGS COOKIE
     * ============ */
  App.settings.cookieDay = 30;

  /* APP SETTINGS TOOLBOX
   * ============ */

  App.settings.durationAnimateToolBox = 300;
  App.settings.widthContent = 870;

  /* APP SETTINGS WEBSERVICES
   * ============ */

  App.settings.bannerAlertURL = 'ajax/bp-app/banner-alert.json';
  App.settings.urlGetGeoCode = 'https:\/\/maps.googleapis.com\/maps\/api\/geocode\/json';
  // App.settings.urlGetDataWebservices = 'http:\/\/www.laposte.fr\/api\/acores\/bureau';
  // App.settings.urlSearchByLocation = 'http:\/\/www.laposte.fr\/api\/acores\/bureau_proche\/';
  // App.settings.urlGetOfficeDetails = 'http:\/\/www.laposte.fr\/api\/acores\/bureau_detail\/';
  App.settings.urlGetDataWebservices = 'http:\/\/webservice.laposte.fr\/api\/acores\/bureau';
  App.settings.urlSearchByLocation = 'http:\/\/webservice.laposte.fr\/api\/acores\/bureau_proche\/';
  App.settings.urlGetOfficeDetails = 'http:\/\/webservice.laposte.fr\/api\/acores\/bureau_detail\/';
  App.settings.linkDetail = 'find-post-office-detail.html';
  App.settings.LinkPostOfficeMap = 'find-post-office-map.html';
  App.settings.LinkPostOfficeList = 'find-post-office-list-view.html';
  App.settings.iframeLinkDetail = 'iframe-find-post-office-detail.html';
  App.settings.iframeLinkPostOfficeMap = 'iframe-find-post-office-map.html';
  App.settings.iframeLinkPostOfficeList = 'iframe-find-post-office-list-view.html';
  App.settings.connectedRedirectURL = 'https://www.labanquepostale.fr/accueil.html';
  App.settings.connectedRedirectionLabel = 'Acces comptes';
  App.settings.keyboardAvailabilityURL = 'ajax/bp-header/login-keyboard.html';
  App.ws = {
    id: 26,
    key: '204f37b494592e1e552012945402a94a',
    noResponse: 'Le serveur ne répond pas',
    error: 'Une erreur est survenue'
  };
  App.settings.geolocation = {
    browser_nosupport: "Le navigateur ne supporte pas la géolocalisation",
    timeout: "Timeout",
    permission_denied: "Géolocalisation refusée par l'utilisateur",
    position_unavailable: "Position introuvable",
    unknown_error: "Erreur inconnue"
  };
  App.settings.services = {
    automate: "Automate gestion de compte",
    //cyberposte: "Espace Cyberposte",
    photocopieur: "Photocopieur libre service",
    lisa: "Affranchissement libre service",
    mobile: "Espace mobile",
    cofi: "Conseiller financier",
    telephoneCofi:  "Numéro conseiller Tel",
    dab:  "Distributeur de billets",
    moneo: "Rechargement Moneo",
    changeur: "Changeur de monnaie",
    accesBureauMobiliteReduite: "Accès possible PMR",
    accesAutomateMobiliteReduite: "Accessibilité automate",
    guichetSpecifiqueMobiliteReduite: "Guichet réservé PMR"
  };
  App.settings.breadcrumb = {
    needsAjaxCall: true,
    previousMatch: 'find-post-office-list-view',
    ajaxUrl: 'ajax/bp-breadcrumb/new-breadcrumb.html'
  };
  App.settings.labanquepostale = {
    westernUnion: "Western Union"
    //gestionClient: "Gestion Client"
  };

  App.settings.oldBrowsers = [
    {identity: "Google Chrome", subString: "chrome", version: 24, active: 1},
    {identity: "Internet Explorer", subString: "msie", version: 9, active: 1},
    {identity: "Mozilla Firefox", subString: "firefox", version: 18, active: 1},
    {identity: "Apple Safari", subString: "safari", version: 5, active: 1},
    {identity: "Opera", subString: "opera", version: 12, active: 1},
    {identity: "Android WebKit", subString: "android", version: 4, active: 1}
  ];
  App.settings.oldBrowsers.cookieDuration = 60; // in minutes
  App.settings.oldBrowsers.nbDisplay = 3;

  App.settings.gsa = {
    resultsPageUrl: 'search.html',
    searchUrl: '//lbprechercheproxy.appspot.com/search',
    suggestUrl: '//lbprechercheproxy.appspot.com/suggest',
    inbentaUrl: '//banquepostale.inbenta.com/',
    site: 'Particulier',
    client: 'particulier_frontend',
    output: 'xml_no_dtd',
    max_suggest: 4,
    per_page: 10,
    maxPaginationDisplay: 3,
    noResults: 'Aucun résultat ne correspond à votre recherche',
    error: 'Un problème s&apos;est produit, veuillez réessayer plus tard',
    macaron: 'Actualité',
    icons: {
      '/particulier/projets': 'icon-projects',
      '/particulier/produits': 'icon-money',
      '/particulier/outils/simulateurs': 'icon-calculator',
      '/particulier/formulaires': 'icon-phone',
      '/particulier/jeunes': 'icon-graduate',
      '/particulier/mbp': 'icon-question',
      '/particulier/securite': 'icon-question',
      '/particulier/outils/aide': 'icon-question',
      '/particulier/outils/tarifs_bancaires': 'icon-question',
      '/particulier/patrimoniaux': 'icon-patrimonial'
    }
  };

  /* TAGGING
   * ============ */
  App.settings.tag = {
    id: 21,
    search: 'moteur_de_recherche',
    searchResults: 'page_resultat',
    searchButton: 'bouton_rechercher',
    searchSpelling: 'correction_orthographique',
    searchSynonyms: 'suggestion_recherche',
    view: 'voir',
    pagination: 'pagination',
    prev: 'precedent',
    next: 'suivant'
  };

  /* APP SETTINGS L10N
   * ============ */
  App.settings.cookieMessage = {
    question: 'Do you accept our cookie ?'
  };

  App.settings.validate = {
    addressEmpty: 'Veuillez saisir une adresse',
    phone: 'Please check your information before'
  };


  /* APP SETTINGS DISCLAIMER
   * ============ */
  App.settings.disclaimer_required  = 0;
  App.settings.disclaimer_url = '';
  App.settings.disclaimer_url_agree = '';
  App.settings.disclaimer_url_disagree = '';


  /* APP LOCALIZATION VARIABLES
   * ========================== */

  App.l10n.random.close = 'Fermer';
  /* EXPOSE APP
   * ========== */

  window.App = App;

}(window));