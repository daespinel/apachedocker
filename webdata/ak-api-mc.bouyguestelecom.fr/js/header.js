/*----- JQUERY COOKIE -----*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*86400000)}return(document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split("; "):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=parts.join("=");if(key&&key===name){result=read(cookie,value);break}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false}$.cookie(key,"",$.extend({},options,{expires:-1}));return !$.cookie(key)}}));

$.MC_NAV = {
	// --------------------------------
	// Variables du namespace (Surchargeable)
	// --------------------------------
	mc_onglet_actif: false,     // Rendre un onglet du header actif
	mc_fonction_callback: null, // Définir une fonction pour chainer un autre appel au MC
	mc_menu_fai: false,         // Afficher le menu niveau 2 FAI
	mc_searchsite: 'tout',      // Precise le perimetre de la recherche
	mc_url_service: "",         // Définir l'url de service à utiliser pour le formulaire de login
	mc_debug: false,            // Mode Debug
	mc_mode_no_bic: false,      // Pour ne pas afficher le bloc de connexion/info client
	mc_footer_plie: false,      // True pour plier le footer par défaut
	mc_hide_panier: false,      // True pour cacher le panier
	mc_hide_panier_item: false, // True pour cacher le nombre d'item dans le panier
	mc_force_connecte: false,   // True pour forcer le mode connecté
	
	// --------------------------------
	// Variables du namespace
	// --------------------------------
	mc_root : "",
	mc_mode_jsonp : false,
	mc_bouge_interval: null,
	mc_bougeNiv2_interval: null,
	mc_header_detail : false,
	mc_header_detail_ligne : new Object(),
	
	// --------------------------------
	// Initialisation des variables
	// --------------------------------
	init: function()
	{
		navtmp_scripts = document.getElementsByTagName("script");
		navtmp_currentscript = navtmp_scripts[navtmp_scripts.length-1].src;
		navtmp_eregjsonp = /mode_jsonp=1/g;
		navtmp_eregresponsive = /responsive=1/g;
		navtmp_ereghtml5 = /html5=1/g;
		navtmp_eregpro = /type_client=PRO/g;
		// Gestion d'une différence IE/Firefox
		if(navtmp_currentscript.split(/\/+/g)[0].length>7) navtmp_domaine = navtmp_currentscript.split(/\/+/g)[0];
		else                                               navtmp_domaine = navtmp_currentscript.split(/\/+/g)[1];
		$.MC_NAV.mc_root = "//"+navtmp_domaine + "/";
		$.MC_NAV.mc_mode_jsonp = navtmp_eregjsonp.test(navtmp_currentscript);
	},
	
	// --------------------------------
	// Pour les utilisateurs du mode JSONP, lancement de l'appel JSONP
	// --------------------------------
	getHeaderFooterJsonp: function()
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.getHeaderFooterJsonp - Debut de fonction"); 
		url = $.MC_NAV.mc_root+"static/header/headerfooter.html.jsonp";
		$.ajax({url:url,cache:false,dataType:"jsonp",jsonpCallback:"$.MC_NAV.setHeaderFooter"});
	},

	// --------------------------------
	// Callback de l'appel JSONP pour placer le header/footer
	// --------------------------------
	setHeaderFooter: function(data,status)
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.setHeaderFooter - Debut de fonction"); 
		if (typeof(data) != 'undefined') 
		{
			$('body').prepend(data.header);
			$('body').append(data.footer);
			$('body').css("width","auto"); // Forcer le reload du style sous IE
			$.MC_NAV.buildBlocClient();
		}
	},

	// --------------------------------
	// Kill connexion session ECFAI
	// --------------------------------
	killSessionFAI: function(url_quit)
	{
		if(url_quit!=""){$.ajax({url:url_quit,cache:false,method:"post",dataType:"jsonp",jsonpCallback:"?"})}
		return true;
	},

	// --------------------------------
	// Recuperation du nombre de mail
	// --------------------------------
	reloadNbMail: function()
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.reloadNbMail - Debut de fonction"); 
		$.ajax({
				url: $.MC_NAV.mc_root+"client/me/header_nbmail.json",
				dataType: 'jsonp',
				crossDomain: true,
				success: function(data,textStatus)
							{
								if($.MC_NAV.mc_debug) console.log("$.MC_NAV.reloadNbMail - Retour"); 
								if(data.code_retour && data.code_retour==200 && data.data.nbmails && data.data.nbmails!=0)
								{
									$(".bulm").html(data.data.nbmails);
									$("#hfch--mess-mob-nb").html("(" + data.data.nbmails + ")");
								}
								else
								{
									$(".bulm").hide();
								}
						}
		});
	},
		

	// --------------------------------
	// Construire le bloc info client
	// --------------------------------
	buildBlocClient: function() 
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.buildBlocClient - Debut de fonction"); 

		if($.MC_NAV.mc_searchsite!='tout') 
		{
			$("#searchBTForm input[name$='site']").val($.MC_NAV.mc_searchsite);
		}
		$("#searchBTForm #search-btn").click(function()
												{
													if($("#searchBTForm #q").val()=="Rechercher sur le site..." || $("#searchBTForm #q").val()=="")
													{
														return false;
													}
												});

		// Gestion pliage du footer
		if($.MC_NAV.mc_footer_plie)
		{
			$('#hfcf--btn').toggleClass('hfcf--on hfcf--off');
			$('.hfcf--blk-2').css('display', 'none');
		}
		
		if ($(window).width() < 1025) {
			$('.hfch--dropmcpt').remove();
		}

		/* DROPDOWN MENU */
		/* FORFAIT MOBILE */
		$('a[rel=ddwn-fmo], #ddwn-fmo').mouseenter(function() {
			$('#ddwn-fmo, .hfch--dropmenu').show();
			$('#ddwn-fmo img.js-lazy').attr('src', $('#ddwn-fmo img.js-lazy').data('src'));
			$('#nav-fmo').addClass('active');
		});
		$('a[rel=ddwn-fmo], #ddwn-fmo').mouseleave(function() {
			$('#ddwn-fmo, .hfch--dropmenu').hide();
			$('#nav-fmo').removeClass('active');
		});
		/* FORFAIT MOBILE */

		/* TELEPHONE */
		$('a[rel=ddwn-tel], #ddwn-tel').mouseenter(function() {
			$('#ddwn-tel, .hfch--dropmenu').show();
			$('#ddwn-tel img.js-lazy').attr('src', $('#ddwn-tel img.js-lazy').data('src'));
			$('#nav-tel').addClass('active');
		});
		$('a[rel=ddwn-tel], #ddwn-tel').mouseleave(function() {
			$('#ddwn-tel, .hfch--dropmenu').hide();
			$('#nav-tel').removeClass('active');
		});
		/* TELEPHONE */

		/* INTERNET */
		$('a[rel=ddwn-int], #ddwn-int').mouseenter(function() {
			$('#ddwn-int, .hfch--dropmenu').show();
			$('#ddwn-int img.js-lazy').attr('src', $('#ddwn-int img.js-lazy').data('src'));
			$('#nav-int').addClass('active');
		});
		$('a[rel=ddwn-int], #ddwn-int').mouseleave(function() {
			$('#ddwn-int, .hfch--dropmenu').hide();
			$('#nav-int').removeClass('active');
		});
		/* INTERNET */

		/* BONS PLANS */
		$('a[rel=dropdown-bpla]').mouseenter(function() {
			$('#nav-bpla').addClass('active');
		});
		$('a[rel=dropdown-bpla]').mouseleave(function() {
			$('#nav-bpla').removeClass('active');
		});
		/* BONS PLANS */

		/* ASSISTANCE */
		$('a[rel=ddwn-ass], #ddwn-ass').mouseenter(function() {
			$('#ddwn-ass, .hfch--dropmenu').show();
			$('#ddwn-ass img.js-lazy').attr('src', $('#ddwn-ass img.js-lazy').data('src'));
			$('#nav-ass').addClass('active');
		});
		$('a[rel=ddwn-ass], #ddwn-ass').mouseleave(function() {
			$('#ddwn-ass, .hfch--dropmenu').hide();
			$('#nav-ass').removeClass('active');
		});
		/* ASSISTANCE */

		/* PRO */
		$('a[rel=ddwn-pro], #ddwn-pro').mouseenter(function() {
			$('#ddwn-pro, .hfch--dropmenu').show();
			$('#ddwn-pro img.js-lazy').attr('src', $('#ddwn-pro img.js-lazy').data('src'));
			$('#nav-pro').addClass('active');
		});
		$('a[rel=ddwn-pro], #ddwn-pro').mouseleave(function() {
			$('#ddwn-pro, .hfch--dropmenu').hide();
			$('#nav-pro').removeClass('active');
		});
		/* PRO */


		/* DROPDOWN MENU MON COMPTE */
			$('.hfch--mcpt, .hfch--mcpt-cnct, .hfch--dropmcpt').mouseenter(function() {
				$('.hfch--dropmcpt').show();
			});
			$('.hfch--mcpt, .hfch--mcpt-cnct, .hfch--dropmcpt').mouseleave(function() {
				$('.hfch--dropmcpt').hide();
			});
		/*
			$('.hfch--mcpt, .hfch--mcpt-mob').click(function() {
				$('.hfch--dropmcpt').toggle();
			});
		*/


		/* SEARCHBOX */
		$('.hfch--search, .hfch--searchbox-field').mouseenter(function() {
			$('.hfch--searchbox-field').show();
		});
		$('#q').focusin(function() {
			$('.hfch--searchbox-field').show();
			$('.hfch--searchbox-field').addClass('active');
		});
		$('#q').focusout(function() {
			$('.hfch--searchbox-field').hide();
			$('.hfch--searchbox-field').removeClass('active');
		});
		$('.hfch--search, .hfch--searchbox-field').mouseleave(function() {
			if ( $('.hfch--searchbox-field').is(".active") ) {
				$('.hfch--searchbox-field').show();
			} else {
				$('.hfch--searchbox-field').hide();
			}
		});
		/* SEARCHBOX MOBILE */
		$('.hfch--search-mob').click(function() {
			$('.hfch--searchbox-field').slideToggle("fast");
		});


		/* DROPDOWN MON COMPTE CNCT MOB */
		/*
			$('.hfch--mcpt-cnct-mob, #hfch--mcpt-cnct').click(function() {
				$('.hfch--dropmcpt').toggle();
			});
		*/

		/* DROPDOWN NAV */
		$('.hfch--navbox').click(function() {
			$('.hfch--overlay').toggle();
			$('.hfch--bmenu').toggle();
			$('.hfch--bmenu-close').toggle();
			$('.hfch--dropnav').toggle();
		});

		/* ACCORDION MENU MOBILE */
		$(function($) {
			var allAccordions = $('.hfch--accd-data');
			var allAccordionItems = $('.hfch--accd-item');

			$('.hfch--accd > .hfch--accd-item').click(function() {
				if($(this).hasClass('opn')) {

					$(this).removeClass('opn');
					$(this).next().slideUp("fast");

				} else {

					allAccordions.slideUp("fast");
					allAccordionItems.removeClass('opn');
					$(this).addClass('opn');
					$(this).next().slideDown("fast");
					return false;

				}
			});
		});


		/* BUBBLEBOX */
		$('.hfch--bub-close').click(function() {
			$('.hfch--bub-blk').fadeOut();
		});


		/* FOOTER */
		$('#hfcf--btn').click(function() {
			$(this).toggleClass('hfcf--on hfcf--off');
			$('.hfcf--blk-2').slideToggle("fast");
		});
		
		$("#hfch--connecter").hide();
		$("#hfch--non--connecter").hide();
		$("#hfch--mob").hide();
		$(".hfch--bubble").hide();
		
		
		
		if ($.MC_NAV.mc_hide_panier) {
			$(".hfch--blk2-1 li:first").hide();
		}
		
		if ($.MC_NAV.mc_hide_panier_item) {
			$("#hfch--panier").hide();
		}
		
		if($.MC_NAV.mc_onglet_actif!=false)
        {
                if($.MC_NAV.mc_onglet_actif=="FORFAITS_MOBILE") $('#nav-fmo').addClass("actif active");       
                else if($.MC_NAV.mc_onglet_actif=="TELEPHONES") $('#nav-tel').addClass("actif active");
                else if($.MC_NAV.mc_onglet_actif=="INTERNET") $('#nav-int').addClass("actif active");
                else if($.MC_NAV.mc_onglet_actif=="BONS_PLANS") $('#nav-pla').addClass("actif active");
                else if($.MC_NAV.mc_onglet_actif=="ASSISTANCE") $('#nav-ass').addClass("actif active");
                else if($.MC_NAV.mc_onglet_actif=="PRO_ENTREPRISES") $('#nav-pro').addClass("actif active");
        }


		
		if($.MC_NAV.mc_mode_no_bic)
		{
			$("#header-bloc-client").html("");
			$(".hf-cmpt").hide();
			return true;
		}

		$.MC_NAV.pGestionCookies();
		
		
		// Pour le webmail
		if($.MC_NAV.mc_menu_fai) 
		{
			$("#hfc-head a").attr("target","_top");
			$("#hfc-foot a").attr("target","_top");
			$("#hfc-foot-soc a").attr("target","_top");
			$("#hfc-foot-under a").attr("target","_top");
		}

		// Gestion des WebView des applications natives
		if(navigator.userAgent.match(/^BYTEL\//i))
		{
			$("#hfc-head").hide(); 
			$("#hfc-foot").hide();
			$("#hfc-foot-soc").hide();
			$("#hfc-foot-under").hide();
			$("#hfc-foot-mob").hide();
		}
		
		// Mode Mobile, on ne fait pas d'appel ajax sur le BIC
		if ($(window).width() <= 600) {
			$("#header-bloc-client").html("");
			$("#hfch--mob").show();
			return true;
		}
		
	
		// On masque le loading au bout de 10 sec
		setTimeout(function() {if($("#header-bloc-client .hd-loading2").size()>0){$("#header-bloc-client").html("");}},10000);

	
		// Construction de l'url
		url_ajax = $.MC_NAV.mc_root+"client/me/header.json";
		
		url_ajax = url_ajax+"&onelog="+encodeURIComponent($.MC_NAV.getOneLogPage()); 

		// Appel ajax pour récupérer le niveau 0
		$.ajax({
				url: url_ajax,
				dataType: 'jsonp',
				crossDomain: true,
				success: function(data,textStatus)
							{
								if($.MC_NAV.mc_debug) console.log("$.MC_NAV.buildBlocClient - Retour niveau 0"); 
								if($.MC_NAV.mc_debug) console.log(data); 
								if(data.code_retour && data.code_retour==200 && data.data)
								{
									$("#header-bloc-client").hide();
									
									if (data.data.mode != 'undefined' && data.data.mode == "connecte") {
										//$(".bulm").html(data.data.nbmails);
										if (data.data.ligne != null && data.data.ligne.prenom != '') {
											$(".lcb-name-p").html(data.data.ligne.prenom);
										} else if (data.data.ligne != null && data.data.ligne.nom != '') {
											$(".lcb-name-p").html(data.data.ligne.nom);
										} else if (data.data != null && data.data.nom_affiche != '') {
											$(".lcb-name-p").html(data.data.nom_affiche);
										}
										
										$('.hfch--acti--co').css("display", "block");
										$('.hfch--acti--de').css("display", "none");
										
										if ($(window).width() > 600) {
											$('.hfch--deco').css("display", "block");
											$('.hfch--deco-mob').css("display", "none");
										} else {
											$('.hfch--deco').css("display", "none");
											$('.hfch--deco-mob').css("display", "block");
										}
										
										$("#hfch--connecter").show();
										
										if (data.data.nbmails == "RELOAD") {
											$.MC_NAV.reloadNbMail();
										} else {
											$(".hfch--mess-mob").hide();
											$(".hfch--mcpt-cnct-blk1 a").hide(); // ici 
										}

										if (data.data.tag != "") {
											$("#hfch--tags").attr('data-tag', data.data.tag);
										}
																														
									} else if (data.data.mode == "deconnecte" && $.MC_NAV.mc_force_connecte) {
										
										$(".hfch--mess-mob").hide();
										$(".hfch--mcpt-cnct-blk1 a").hide();    // ici
										// $(".bulm").hide();
										
										$(".lcb-name-p").hide(); 				// ici
										
										$('.hfch--acti--co').css("display", "block");
										$('.hfch--acti--de').css("display", "none");
										
										if ($(window).width() > 600) {
											$('.hfch--deco').css("display", "block");
											$('.hfch--deco-mob').css("display", "none");
										} else {
											$('.hfch--deco').css("display", "none");
											$('.hfch--deco-mob').css("display", "block");
										}
										
										$("#hfch--connecter").show();
																				
									} else if (data.data.mode == "deconnecte") {
										$("#hfch--non--connecter").show();
										$(".hfch--deco").hide();
										$(".hfch--deco-mob").hide();
										$(".hfch--mess-mob").hide();
										
										$('.hfch--acti--co').css("display", "none");
										$('.hfch--acti--de').css("display", "block");
										
										if ($(window).width() > 1024) {
											if (document.cookie.indexOf("BubbleVu") == -1) {
												$(".hfch--bubble").show();
												$(".hfch--bubble").delay(5000).hide(0);
												$.cookie('BubbleVu', '1', {expires: 7, path: '/', domain: 'bouyguestelecom.fr'});
											}
										}
									}
																		
									if (data.data.panier != null && data.data.panier.statut == "PANIER_OK") {
										$("#hfch--panier").html("(" + data.data.panier.nb_items + ")");
										$("#hfch--panier--links").attr("href", data.data.panier.url_panier);
									}
									
									//$("#header-bloc-client").html(data.html);
									
									// Animation des noms longs
									$.MC_NAV.mc_bouge_interval = window.setInterval("$.MC_NAV.bouge()", 6000);
								}
								else if(data.code_retour && data.data)
								{
									//$("#hd-loading2").html(data.html);
									$("#header-bloc-client").hide();
								}
								
								// On chaine avec une fonction si définie
								$.MC_NAV.pChaineFuction();
							}
		});
	},

	// --------------------------------
	// Récupérer le nom de domaine (pour le cookie)
	// --------------------------------
	pGetHostnameFromUrl: function(url) 
	{
		var current_domain = url.split(/\/+/g)[1];
		var domain_bytel_regex = /bouyguestelecom\.fr/
		var domain_bytelpro_regex = /bouyguestelecom-pro\.fr/
		if(domain_bytel_regex.exec(current_domain)) return "bouyguestelecom.fr";
		else if(domain_bytelpro_regex.exec(current_domain)) return "bouyguestelecom-pro.fr";
		else return current_domain;
	},

	// --------------------------------
	// Récupérer le nom de domaine (pour le cookie)
	// --------------------------------
	pGestionCookies: function() 
	{
		xtn2_id = 0;
		if(typeof(xtpage)!='undefined')
		{
			xtn2_id = xtn2;
		}
		else if(typeof(tc_vars)!='undefined')
		{
			xtn2_id = tc_vars["xiti_xtn2_id"];
		}
		 
		var BoxCookie = '<div id="no-cookie"><div class="nc"><div class="nc--blk blanc clr">En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de cookies pour vous proposer des services et offres adapt&eacute;s &agrave; vos centres d\'int&eacute;r&ecirc;ts. <span class="nc--br"><a class="nc--lnk" href="http://www.corporate.bouyguestelecom.fr/protection-de-la-vie-privee" onclick="return tc_events_1(this, \'CLICK\', {\'XTCLICK_EVENT\': \'C\', \'XTCLICK_S2\': \''+xtn2_id+'\', \'LABEL\': \'BoxCoookie::EnSavoirPlus\', \'XTCLICK_TYPE\': \'N\' });" title="En savoir plus et param&eacute;trer les cookies">En savoir plus et param&eacute;trer les cookies.</a> <a class="nc--btn-ok" href="#"onclick="return tc_events_1(this, \'CLICK\', {\'XTCLICK_EVENT\': \'C\', \'XTCLICK_S2\': \''+xtn2_id+'\', \'LABEL\': \'BoxCoookie::OK\', \'XTCLICK_TYPE\': \'N\' });">OK</a></span></div></div></div>';
		if (document.cookie.indexOf("NoCookieVu") == -1) 
		{
			var date = new Date();
			var minutes = 45;
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			
			$.cookie('NoCookieVu', '0', {expires: date, path: '/', domain: 'bouyguestelecom.fr'});
			
			$(BoxCookie).insertBefore( $("#hfc-head") );
			
			$('.nc--lnk').click(function() {
				$.cookie('NoCookieVu', '1', {expires: 7, path: '/', domain: 'bouyguestelecom.fr'});
			});

			$('.nc--btn-ok').click(function() {
				$('#no-cookie').fadeOut();
				$.cookie('NoCookieVu', '1', {expires: 365, path: '/', domain: 'bouyguestelecom.fr'});
			});
		}		
	},

	// --------------------------------
	// Detruire le cookie remember me local
	// --------------------------------
	pCookieDestroy: function()
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.pCookieDestroy - Debut de fonction"); 
		var expDate = new Date()
		expDate.setTime(expDate.getTime() - 5)
		var c_hostname = $.MC_NAV.pGetHostnameFromUrl(document.location.href);
		document.cookie = "hub_rememberme_tmp=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_rememberme=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[id]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[c]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[n]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[f]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[lm]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[tl]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
		document.cookie = "hub_ud[p]=;expires=" + expDate.toGMTString() + "; domain="+c_hostname;
	},

	// --------------------------------
	// Chainer une fonction avec le retour du header
	// --------------------------------
	pChaineFuction: function()
	{
		if($.MC_NAV.mc_fonction_callback!=null && eval("typeof " + $.MC_NAV.mc_fonction_callback + " == 'function'")) 
		{
			if(eval("typeof " + $.MC_NAV.mc_fonction_callback + " == 'function'"))  
			{
				eval($.MC_NAV.mc_fonction_callback+'("'+$.MC_NAV.mc_root+'")');
			}
		}
	},

	// --------------------------------
	// getCookie
	// --------------------------------
	getCookie: function(k)
	{
		return(document.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2];
	},
	
	// --------------------------------
	// getTypeCnx
	// --------------------------------
	getTypeCnx: function()
	{
		// Domaine bouyguestelecom.fr
		if($.MC_NAV.pGetHostnameFromUrl(document.location.href)=="bouyguestelecom.fr")
		{
			cookie_bi = decodeURIComponent($.MC_NAV.getCookie("bi"));
			if(cookie_bi!='undefined')
			{
				ereg_cdv = /^CDV\|/g;
				ereg_cdc = /^CDC\|/g;
				
				if(ereg_cdv.test(cookie_bi))      return "CDV";
				else if(ereg_cdc.test(cookie_bi)) return "CDC";
				else                              return "CLT";
			}
			else return "";
		}
		else
		{
			var my_typecnx = "";
			$.ajax({
					url: $.MC_NAV.mc_root+"cache/typecnx/",
					type : 'GET',
					timeout : 200, // 200 millisecondes max
					async: false,
					success: function(data,textStatus)
								{
									if(data && data.typecnx) my_typecnx = data.typecnx;
								}
				});
			return my_typecnx;
		}

	},

	// --------------------------------
	// Animer les textes trop longs
	// --------------------------------
	bouge: function()
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.bouge - Debut de fonction"); 
		$("span.lcb-name-p").each(function () {
			var $t = $(this);
			var $tub = $t.outerWidth();
			var $bul = $(".lcb-name").outerWidth();
			if ($tub > 500) {
				var $inter = 4000
			} else {
				var $inter = 2000
			}
			var $cap = $tub - $bul;
			if ($cap > 0) {
				$t.animate({
					left: "-=" + $cap + "px"
				}, $inter, function () {
					$t.animate({
						left: "+=" + $cap + "px"
					}, $inter)
				})
			}
		})
	},

	// --------------------------------
	// getOneLogPage
	// --------------------------------
	getOneLogPage: function() 
	{
		if($.MC_NAV.mc_debug) console.log("$.MC_NAV.getOneLogPage - Debut de fonction"); 
		var onelog = {}

		onelog.c_site = "";
	    onelog.c_subsite = "";
		onelog.c_tag = "";
		onelog.c_refer = window.document.referrer;
		
		if(typeof(xtpage)!='undefined')
		{
			onelog.c_site = xtsite;
			onelog.c_subsite = xtn2;
			onelog.c_tag = xtpage;
		}
		else if(typeof(tc_vars)!='undefined')
		{
			onelog.c_site = tc_vars["xiti_xtsite"];
			onelog.c_subsite = tc_vars["xiti_xtn2_id"];
			onelog.c_tag = tc_vars["xiti_xtpage"];
		}
		 
		finaltag = onelog.c_site+";"+onelog.c_subsite+";"+onelog.c_tag;
		if($.MC_NAV.mc_debug) console.log(finaltag);
		return finaltag;
	}
}

//--------------------------------
// Gestion du zoom
//--------------------------------
function zoomDetect() {
    var screenCssPixelRatio = window.devicePixelRatio;
    var rmClass = $('body').removeClass('zoom50 zoom67 zoom75 zoom90 zoom100 zoom125 zoom150 zoom175 zoom200');
    if (screenCssPixelRatio >= 0.46 && screenCssPixelRatio <= 0.54) {
        rmClass;
        $('body').addClass('zoom50');
    } else if (screenCssPixelRatio <= 0.67) {
        rmClass;
        $('body').addClass('zoom67');
    } else if (screenCssPixelRatio <= 0.76) {
        rmClass;
        $('body').addClass('zoom75');
    } else if (screenCssPixelRatio <= 0.92) {
        rmClass;
        $('body').addClass('zoom90');
    } else if (screenCssPixelRatio <= 1.10) {
        rmClass;
        $('body').addClass('zoom100');
    } else if (screenCssPixelRatio <= 1.32) {
        rmClass;
        $('body').addClass('zoom125');
    } else if (screenCssPixelRatio <= 1.58) {
        rmClass;
        $('body').addClass('zoom150');
    } else if (screenCssPixelRatio <= 1.90) {
        rmClass;
        $('body').addClass('zoom175');
    } else if (screenCssPixelRatio <= 2.10) {
        rmClass;
        $('body').addClass('zoom200');
    } else {
        zoomLevel = "inconnu";
    }
}

// --------------------------------
// Launcher
// --------------------------------
$.MC_NAV.init();
$(document).ready(function()
					{
						zoomDetect();
						if($.MC_NAV.mc_mode_jsonp) $.MC_NAV.getHeaderFooterJsonp();
						else                       $.MC_NAV.buildBlocClient();
					}
				);


