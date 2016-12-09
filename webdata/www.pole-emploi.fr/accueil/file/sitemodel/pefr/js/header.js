jQuery.extend(jQuery.expr[':'], {
    focus: function(e){ return e == document.activeElement; }
});

/* =========================== FONCTIONS DE LECTURE / ECRITURE DE COOKIES ==============================  */

function isIPaddress(ip){  
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) return true;
	return false;
}

function getDomain(){
	var domain;
	
	if(isIPaddress(window.location.hostname))
		domain = "";
	else{
		domain = window.location.hostname.split(".");
		domain = "." + domain[domain.length-2] + "." + domain[domain.length-1];
	}
	return domain;
}
	
function writeCookie(key, value, domain, path, months){
	var dateExpire = new Date();
	dateExpire.setMonth(dateExpire.getMonth() + months); 
	document.cookie= key + "=" + value + "; expires=" + dateExpire.toUTCString() + "; domain=" + domain + ";" + "path=" + path + ";";
}
	
function readCookie(key){
	var value = new Array();
	
	var allcookies = document.cookie;
	// Get all the cookies pairs in an array
	cookiearray  = allcookies.split(';');

	// Now take key value pair out of this array
	for(var i=0; i<cookiearray.length; i++){
		if (i > 0)
			cookiearray[i] = cookiearray[i].substring(1);
			
		value[cookiearray[i].split('=')[0]] = cookiearray[i].split('=')[1];
	}
	return value[key];
}


/* ======================================== MESSAGE CNIL =========================================  */

document.getElementsByClassName = function(cl) {
  var retnode = [];
  var elem = this.getElementsByTagName('*');
  for (var i = 0; i < elem.length; i++) {
    if((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1) retnode.push(elem[i]);
  }
  return retnode;
}; 

function create(htmlStr) {
    var fragment = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        fragment.appendChild(temp.firstChild);
    } 
    return fragment;
}

var createCookieBanner = function (){
	if(!readCookie('cnil')){
		var fragmentment = create("<div id='cookieBannerP' class='cookie-alert slide-down'><span class='cookie-content'><span class='cookie-text' >Les cookies assurent le bon fonctionnement de nos services. En utilisant ces derniers, vous acceptez l'utilisation des cookies. <a href='https://www.pole-emploi.fr/informations/informations-legales-@/informations_legales/' >En savoir plus.</a> </span><button type='button' class='message-button' id='cookieBannerButton' title='Fermer'><span>Fermer</span></button></span></div>");
		header=document.getElementsByClassName('wrapper')[0];
		header.insertBefore(fragmentment,header.childNodes[0]);
		header.className = header.className + " with-cookie";
		
		document.getElementById('cookieBannerButton').onclick = function(){
			var p = document.getElementById("cookieBannerP");
			header.removeChild(p);
			header.className = header.className.replace(" with-cookie","");
			writeCookie("cnil", "1", getDomain(), "/", 12);
		}
	}
}

if (window.attachEvent) 
	window.attachEvent('onload', createCookieBanner);
else 
	if (window.addEventListener) window.addEventListener('load', createCookieBanner,false);


/* ============================ SWITCHER VERSION DESKTOP / MOBILE =================================  */	
	
function responsiveSwitcher() {
	
	var responsive = false;
	var responsiveActive = true;
	
	function updateCookie(){
		var domain = getDomain();
	
		if(responsiveActive){
			responsiveActive = false;
			writeCookie("responsiveActive", "0", domain, "/",1)
		}else{
			responsiveActive = true;
			writeCookie("responsiveActive", "1", domain, "/",1)
		}
	}

	function createSwitcher(){
		var indexDevicesCss = new Array();
		
		for(i=0; i<document.styleSheets.length; i++){
			if(document.styleSheets[i].href && document.styleSheets[i].href.indexOf('devices') != -1) indexDevicesCss.push(i);
		}
		
		if(readCookie("responsiveActive") == 0){
			for(j=0; j<indexDevicesCss.length; j++){
				document.styleSheets[indexDevicesCss[j]].disabled = !document.styleSheets[indexDevicesCss[j]].disabled;
			}
		}		
		
		var switcherLinks = document.querySelectorAll(".responsive-switcher a");

		for(i=0;i<switcherLinks.length;i++){
			switcherLinks[i].onclick = function(){
				for(j=0; j<indexDevicesCss.length; j++){
					document.styleSheets[indexDevicesCss[j]].disabled = !document.styleSheets[indexDevicesCss[j]].disabled;
				}
				responsiveActive = !responsiveActive;
				updateCookie();
				return false;
			};
		}
	}
	
	function refresh(){
		if(!responsive){
			if(window.innerWidth < 940){
				responsive = true;
				createSwitcher();
			}
		}
	}
	
	if(window.innerWidth < 940){
		responsive = true;
		createSwitcher();
	}
	
	window.onresize = function(event) {
		refresh();
	};	
};


/* ====================================== SKIP LINK ===========================================  */

function setFocusTo(target){
    $(target).attr('tabindex',0);
	$(target).focus();
}

$(document).ready(function() {
	$('.skip').click(function(){
		var target = $(this).attr('href');
		if(target.length > 0) setFocusTo(target); 
		return false; 
	})
});	


/* =================================== TEST NAVIGATEUR =======================================  */

var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: https://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat

$.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = $.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
    browser.webkit = true;
} else if ( browser.webkit ) {
    browser.safari = true;
}

$.browser = browser;

$(document).ready(function() {
	var version = parseInt($.browser['version'])
	
	if( ($.browser['msie'] && version < 9) || ($.browser['mozilla'] && version < 16) || ($.browser['chrome'] && version < 26)){
		$('#popin-navigateur').popin({defaultDisplay:'show', noTrigger:true});
	}

});

	
/* ====================================== HEADER ===========================================  */

		

$(document).ready(function() {

	/* ============= Gestion de l'accès aux espaces de connexion / changement de région =================  */
	
	function toggleBlocker(){
		if($('.header-blocker').length > 0){
				$('.header-blocker').remove();
		}else{
			$('body').append('<div class="header-blocker"></div>');
			
			$('.header-blocker').click(
				function(event){
					if($('.dl-trigger.dl-active').length > 0) $('.dl-trigger').click();
					if($('.header-access.slided').length > 0) togglePanelRight('.header-access.slided');
				}
			);
		}
	}
	
	function togglePanelRight(element){
		// On commence par fermer le menu potentiellement ouvert
		if($('.dl-trigger.dl-active').length > 0) $('.dl-trigger').click();
		
		$(element).toggleClass('slided');	
						
		if($(element).hasClass('slided')){
			$(this).attr('title','Fermer');
			$(this).find('img').attr('alt','Bloc fermé');
		}else{
			$(this).attr('title','Ouvrir');
			$(this).find('img').attr('alt','Bloc ouvert');
		}
		
		if(window.innerWidth < 1000){
			toggleBlocker();
		}
	}
	
	$('#changer-region').click(function(){	
		togglePanelRight('.header-access.region');	
		return false;
	});
	
	$('#connexion-employeur').click(function(){	
		togglePanelRight('.header-access.employeur');	
		return false;
	});
	
	$('#connexion-global').click(function(){
		togglePanelRight('.header-access.global');	
		return false;
	});
	
	$('#my-space-mobile').click(function(){
		togglePanelRight('.header-access.connected-mode');	
		return false;
	});
	
	$('.connexion-mobile-close').click(function(index,element){
		togglePanelRight($(this).parents('.slided'));	
		return false;
	});
	
	
	
	/* ============= Menu responsive =================  */
	
	
	$('.dl-trigger').click(
		function(event){
			// On commence par fermer le menu potentiellement ouvert
			if($('.header-access.slided').length > 0) togglePanelRight('.header-access.slided');
			
			$('.dl-trigger').toggleClass('dl-active');	
			toggleBlocker();
		}
	);
	
	/* ============= Scroll haut de page fluide =================  */
	
	$('.block-anchor a').click(function () {
		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	/* ============= Gestion de l'accessibilité du menu et du sous-menu au clavier ================= */
	
	function onBlurAccess(){
		if($('.header-access').hasClass('slided')){
			togglePanelRight('.header-access.slided');	
		}
	}
	
	$('.header-title').focus(function() {
		onBlurAccess();
	});
	
	$('#nav-candidat').focus(function() {
		//onBlurAccess();
	});
	
	var map = {9: false, 16: false};
	var allowed = {9: true, 16: true, 37:true, 38:true , 39:true, 40:true};
	
	$('.block-nav .nav > li > a').focus(function() {
		$(this).parents('li').first().addClass('hover');
		
		var currentNav1 = $(this).parents('li');
		
		var nav2 = $(this).find('+ .nav-2')
		nav2.addClass('nav-show');
		
		$(this).keydown(function(event) {
			var code = (event.keyCode ? event.keyCode : event.which);
			
			if(allowed[code]){
				/* TAB*/
				if(code == '9'){
					$('.nav .hover').removeClass('hover');
					nav2.removeClass('nav-show');
					
					map[code] = true;
					
					if(map[16] && map[9]){
						currentNav1.prev('li').find('> a').focus();
						if(currentNav1.is(':first-child')){
							$('.header-access').each(function(){
								if($(this).css('display') == 'block'){ $(this).find('> a').focus(); }
							});
							map[16] = map[9] = false;
						}
					}else{
						currentNav1.next('li').find('> a').focus();
						if(currentNav1.is(':last-child')){
							setFocusTo("#contents");
						}
					}
				}
				
				/* SHIFT */
				if(code == '16'){
					map[code] = true;	
				}
				
				/* FLECHE BAS */
				if(code == '40'){
					nav2.find('> li > a').first().focus();	
				}
				
				allowed[code] = false;
			}
			
			event.preventDefault();
		}).keyup(function(event) {
			if (event.keyCode in map) {
				map[event.keyCode] = false;
			}
			allowed[event.keyCode] = true;
		});
	});
	
	$('.block-nav .nav-2 > li > a').focus(function() {
		var currentNav2 = $(this).parents('li').first();
		var navInverse = $('.hover').hasClass('nav-inverse');
		
		var nav3 = $(this).find('+ .nav-3')
		nav3.addClass('nav-show');
		
		$(this).keydown(function(event) {
			var code = (event.keyCode ? event.keyCode : event.which);
			
			if(allowed[code]){
				/* TAB*/
				if(code == '9'){
					$('.nav-2').removeClass('nav-show');
					$('.nav-3').removeClass('nav-show');
					$('.hover').find('> a').focus();
				}
				
				/* FLECHE BAS */
				if(code == '40'){
					if(!currentNav2.is(':last-child')){
						currentNav2.next('li').find('> a').focus();
						nav3.removeClass('nav-show');
					}
				}
				
				/* FLECHE HAUT */
				if(code == '38'){
					currentNav2.prev('li').find('> a').focus();
					nav3.removeClass('nav-show');
					if(currentNav2.is(':first-child')) $('.hover').find('> a').focus();
				}
				
				/* FLECHE DROITE (OU GAUCHE EN MODE NAVIGATION INVERSE) */
				if((code == '39' && !navInverse) ||(code == '37' && navInverse) ){
					nav3.find('> li > a').first().focus();
				}
				
				allowed[code] = false;
			}
			
			event.preventDefault();
		}).keyup(function(event) {
			allowed[event.keyCode] = true;
		});
	});
	
	$('.block-nav .nav-3 > li > a').focus(function() {
		var currentNav3 = $(this).parents('li').first();
		var navInverse = $('.hover').hasClass('nav-inverse');
	
		var nav4 = $(this).find('+ .nav-4')
		nav4.addClass('nav-show');
		
		$(this).keydown(function(event) {
			var code = (event.keyCode ? event.keyCode : event.which);
			
			if(allowed[code]){
				/* TAB*/
				if(code == '9'){
					$('.nav-2').removeClass('nav-show');
					$('.nav-3').removeClass('nav-show');
					$('.nav-4').removeClass('nav-show');
					$('.hover').find('> a').focus();
				}
				
				/* FLECHE BAS */
				if(code == '40'){
					if(!currentNav3.is(':last-child')){
						currentNav3.next('li').find('> a').focus();
						nav4.removeClass('nav-show');
					}						
				}
				
				/* FLECHE HAUT */
				if(code == '38'){
					currentNav3.prev('li').find('> a').focus();
					nav4.removeClass('nav-show');
				}
				
				/* FLECHE DROITE (OU GAUCHE EN MODE NAVIGATION INVERSE) */
				if((code == '39' && !navInverse) ||(code == '37' && navInverse)){
					nav4.find('> li > a').first().focus();
				}
				
				/* FLECHE GAUCHE (OU DROITE EN MODE NAVIGATION INVERSE) */
				if((code == '37' && !navInverse) ||(code == '39' && navInverse)){
					$('.nav-3').removeClass('nav-show');
					$('.nav-4').removeClass('nav-show');
					currentNav3.parents('.nav-2').find('> li > a').first().focus();
				}
				
				allowed[code] = false;
			}
			
			event.preventDefault();
		}).keyup(function(event) {
			allowed[event.keyCode] = true;
		});
	});
	
	$('.block-nav .nav-4 > li > a').focus(function() {
		var currentNav4 = $(this).parents('li').first();
		var navInverse = $('.hover').hasClass('nav-inverse');
		
		$(this).keydown(function(event) {
			var code = (event.keyCode ? event.keyCode : event.which);
			
			if(allowed[code]){
				/* TAB*/
				if(code == '9'){
					$('.nav-2').removeClass('nav-show');
					$('.nav-3').removeClass('nav-show');
					$('.nav-4').removeClass('nav-show');
					$('.hover').find('> a').focus();
				}
				
				/* FLECHE BAS */
				if(code == '40'){
					currentNav4.next('li').find('> a').focus();			
				}
				
				/* FLECHE HAUT */
				if(code == '38'){
					currentNav4.prev('li').find('> a').focus();
				}
				
				/* FLECHE GAUCHE (OU DROITE EN MODE NAVIGATION INVERSE) */
				if((code == '37' && !navInverse) ||(code == '39' && navInverse)){
					$('.nav-4').removeClass('nav-show');
					currentNav4.parents('.nav-3').find('> li > a').first().focus();
				}
				
				allowed[code] = false;
			}
			
			event.preventDefault();
		}).keyup(function(event) {
			allowed[event.keyCode] = true;
		});
	});
	
	$('.block-nav .nav > li > a').hover(function() {
		$('.block-nav .nav .hover').removeClass('hover');
		$('.block-nav .nav-2').removeClass('nav-show');
		$('.block-nav .nav-3').removeClass('nav-show');
		$('.block-nav .nav-4').removeClass('nav-show');
	});
		
	/* AU CHARGEMENT, CREATION DES DIFFERENTS OBJETS JS */
	
	$('#bloc-banniere').slideshow({autoplay:true, dynamicDuration:true});
	$('#dl-menu').dlmenu({ animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }});
	$('#quit-desktop').popin();
	$('#quit-mobile').popin({optionnal : true});
	responsiveSwitcher();
	
});



/* =================================================================== A NE PAS RECUPERER PAR LA FAB ============================================================= */



/* Fonction branchée en local pour personnaliser graphiquement la liste d'autocomplétion */

$(document).ready(function() {
	var json = 
	{
		"query": "emploi",
		"results": [{
			"name": "emploi d'avenir",
			"type": "suggest"
		}, {
			"name": "emploi avenir",
			"type": "suggest"
		}, {
			"name": "emploi tremplin",
			"type": "suggest"
		}, {
			"name": "emploi saisonnier",
			"type": "suggest"
		}, {
			"name": "emploi d'avenir offre",
			"type": "suggest"
		}, {
			"name": "emplois d'avenir",
			"type": "suggest"
		}, {
			"name": "emploi seniors",
			"type": "suggest"
		}, {
			"name": "emploi d'avenir et conditions",
			"type": "suggest"
		}, {
			"name": "emploi d avenir",
			"type": "suggest"
		}, {
			"name": "emploi avenir non marchand",
			"type": "suggest"
		}]
	}
	
	var results = json.results;
	var parsed_data = [];
	
	for (var i = 0; i < results.length; i++) {
		var result = results[i];

		parsed_data[i] = {
			data: result ,
			value: result.name,
			result: result.name
		};
	}
			
	options = { 
		minChars: 2,
		maxHeight:500,
		lookup: parsed_data
	};
	
	$('.recherche').autocomplete(options);
});
