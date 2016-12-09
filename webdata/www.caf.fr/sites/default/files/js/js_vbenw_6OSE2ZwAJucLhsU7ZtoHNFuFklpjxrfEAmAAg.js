/* $Id: admin_devel.js,v 1.2 2010/03/12 22:54:41 sun Exp $ */
(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;

// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;(function($) {
     // DOM Ready
    $(function() {

      if ($('.divhidden').length > 0) {
        
        // Binding a click event
        // From jQuery v.1.7.0 use .on() instead of .bind()
        var count;
        var divL = $('.divhidden').length;
        for(count=0; count < divL; count++){  
          var leCount;
          $('#linkpopup'+count).append('<span class="img_play_btn" id="img_play_btn_id'+count+'"><img src="/sites/all/themes/caf/img/playbutton.png" alt="play" /></span>');
        }

        $('.linkpopup').bind('click', function(e) {
            leCount = jQuery(this).attr("id").replace("linkpopup","");  
            // Prevents the default action to be triggered.
            e.preventDefault();
            $('#divhidden'+leCount).css('display','block');
            // Triggering bPopup when click event is fired
            $('#divhidden'+leCount).bPopup({
              positionStyle: 'fixed' // 'fixed' or 'absolute'
            });
            $('#divhidden'+leCount).css('position', 'asolute');
            //$('#divhidden'+leCount).css("top", ($(window).height() - $($('#divhidden'+leCount)).outerHeight()) / 2  + "px");
            //$('#linkpopup'+count+ ' #img_play_btn_id'+count).css("padding-top", "5px");
            $('#divhidden'+leCount).css("left",($(window).width() - $($('#divhidden'+leCount)).outerWidth()) / 2 + "px");

        });
         
        // ubdate top and left when the window is resizing
        $(window).resize(function(){
            // resize du bouton play de chaque video
            var divL = $('.divhidden').length;
          
            for(count=0; count < divL; count++){  
                
                var heightImg = $('#linkpopup'+count+' img').height();
                var widthImg  = $('#linkpopup'+count+' img').width();

                // Taille du lien = taille de l'image
                $('#linkpopup'+count).attr("style", "width : "+widthImg+"px !important");


                // Calcul de la taille du du bouton play.
                var height_btn = 98; //"/sites/all/themes/caf/img/playbutton.png".height();
                if( heightImg < height_btn) {
                    var newHeight = heightImg - 6;
                    $('#linkpopup'+count+ ' #img_play_btn_id'+count+' img').attr("style", "height : "+ newHeight +"px !important; width : "+ newHeight +"px !important");
                }else {
                    $('#linkpopup'+count+ ' #img_play_btn_id'+count+' img').attr("style", "");
                }
                
                // Line-height du span = hauteur de l'image
                $('#linkpopup'+count+ ' #img_play_btn_id'+count).attr("style", "line-height : "+heightImg+"px !important");
            }
               
        });
    

        // resize du bouton play avec un timeout sinon le height n'est pas
        // recup�r� � temps
        setTimeout(function(){
            var divL = $('.divhidden').length;

            for(count=0; count < divL; count++){  
                    
                var heightImg = $('#linkpopup'+count+' img').height();
                var widthImg  = $('#linkpopup'+count+' img').width();

                // Taille du lien = taille de l'image
                $('#linkpopup'+count).attr("style", "width : "+widthImg+"px !important");


                // Calcul de la taille du du bouton play.
                var height_btn = 98; //"/sites/all/themes/caf/img/playbutton.png".height();
                if( heightImg < height_btn) {
                    var newHeight = heightImg - 6;
                    $('#linkpopup'+count+ ' #img_play_btn_id'+count+' img').attr("style", "height : "+ newHeight +"px !important; width : "+ newHeight +"px !important");
                }else {
                    $('#linkpopup'+count+ ' #img_play_btn_id'+count+' img').attr("style", "");
                }
                
                // Line-height du span = hauteur de l'image
                $('#linkpopup'+count+ ' #img_play_btn_id'+count).attr("style", "Line-height : "+heightImg+"px !important");
            }

        }, 200);

        $('.linkpopup').hover(function() {
            var count = $(this).attr("id").split("linkpopup")[1];
            var img = $('#linkpopup'+count+ ' #img_play_btn_id'+count+' img');
            if(img.attr("src") != "/sites/all/themes/caf/img/playbutton-hover.png")
                img.attr("src", "/sites/all/themes/caf/img/playbutton-hover.png");
        });

        $('.linkpopup').mouseleave(function() {
            var count = $(this).attr("id").split("linkpopup")[1];
            var img = $('#linkpopup'+count+ ' #img_play_btn_id'+count+' img');
            if(img.attr("src") != "/sites/all/themes/caf/img/playbutton.png")
                img.attr("src", "/sites/all/themes/caf/img/playbutton.png");
        });
      }

    });


})(jQuery);
 
/*               
 */


/*
 * ================================================================================
 * @name: bPopup - if you can't get it up, use bPopup @author: (c)Bjoern
 * Klinggaard (twitter@bklinggaard) @demo: https://dinbror.dk/bpopup @version:
 * 0.9.4.min
 * ================================================================================
 */
(function(b){b.fn.bPopup=function(z,F){
	function K(){
		a.contentContainer=b(a.contentContainer||c);
		switch(a.content){
		case "iframe":var h=b('<iframe class="b-iframe" '+a.iframeAttr+"></iframe>");
			h.appendTo(a.contentContainer);
			r=c.outerHeight(!0);
			s=c.outerWidth(!0);
			A();
			h.attr("src",a.loadUrl);
			k(a.loadCallback);
			break;
		case "image":A();
			b("<img />").load(function(){k(a.loadCallback);G(b(this))}).attr("src",a.loadUrl).hide().appendTo(a.contentContainer);
			break;
		default:A(),b('<div class="b-ajax-wrapper"></div>').load(a.loadUrl,a.loadData,function(){k(a.loadCallback);G(b(this))}).hide().appendTo(a.contentContainer)}}function A(){a.modal&&b('<div class="b-modal '+e+'"></div>').css({backgroundColor:a.modalColor,position:"fixed",top:0,right:0,bottom:0,left:0,opacity:0,zIndex:a.zIndex+t}).appendTo(a.appendTo).fadeTo(a.speed,a.opacity);D();c.data("bPopup",a).data("id",e).css({left:"slideIn"==a.transition||"slideBack"==a.transition?"slideBack"==a.transition?g.scrollLeft()+u:-1*(v+s):l(!(!a.follow[0]&&m||f)),position:a.positionStyle||"absolute",top:"slideDown"==a.transition||"slideUp"==a.transition?"slideUp"==a.transition?g.scrollTop()+w:x+-1*r:n(!(!a.follow[1]&&p||f)),"z-index":a.zIndex+t+1}).each(function(){a.appending&&b(this).appendTo(a.appendTo)});H(!0)}function q(){a.modal&&b(".b-modal."+c.data("id")).fadeTo(a.speed,0,function(){b(this).remove()});a.scrollBar||b("html").css("overflow","auto");b(".b-modal."+e).unbind("click");g.unbind("keydown."+e);d.unbind("."+e).data("bPopup",0<d.data("bPopup")-1?d.data("bPopup")-1:null);c.undelegate(".bClose, ."+a.closeClass,"click."+e,q).data("bPopup",null);H();return!1}function G(h){var b=h.width(),e=h.height(),d={};a.contentContainer.css({height:e,width:b});e>=c.height()&&(d.height=c.height());b>=c.width()&&(d.width=c.width());r=c.outerHeight(!0);s=c.outerWidth(!0);D();a.contentContainer.css({height:"auto",width:"auto"});d.left=l(!(!a.follow[0]&&m||f));d.top=n(!(!a.follow[1]&&p||f));c.animate(d,250,function(){h.show();B=E()})}function L(){d.data("bPopup",t);c.delegate(".bClose, ."+a.closeClass,"click."+e,q);a.modalClose&&b(".b-modal."+e).css("cursor","pointer").bind("click",q);M||!a.follow[0]&&!a.follow[1];a.escClose&&g.bind("keydown."+e,function(a){27==a.which&&q()})}function H(b){function d(e){c.css({display:"block",opacity:1}).animate(e,a.speed,a.easing,function(){J(b)})}switch(b?a.transition:a.transitionClose||a.transition){case "slideIn":d({left:b?l(!(!a.follow[0]&&m||f)):g.scrollLeft()-(s||c.outerWidth(!0))-C});break;case "slideBack":d({left:b?l(!(!a.follow[0]&&m||f)):g.scrollLeft()+u+C});break;case "slideDown":d({top:b?n(!(!a.follow[1]&&p||f)):g.scrollTop()-(r||c.outerHeight(!0))-C});break;case "slideUp":d({top:b?n(!(!a.follow[1]&&p||f)):g.scrollTop()+w+C});break;default:c.stop().fadeTo(a.speed,b?1:0,function(){J(b)})}}function J(b){b?(L(),k(F),a.autoClose&&setTimeout(q,a.autoClose)):(c.hide(),k(a.onClose),a.loadUrl&&(a.contentContainer.empty(),c.css({height:"auto",width:"auto"})))}function l(a){return a?v+g.scrollLeft():v}function n(a){return a?x+g.scrollTop():x}function k(a){b.isFunction(a)&&a.call(c)}function D(){x=p?a.position[1]:Math.max(0,(w-c.outerHeight(!0))/2-a.amsl);v=m?a.position[0]:(u-c.outerWidth(!0))/2;B=E()}function E(){return w>c.outerHeight(!0)&&u>c.outerWidth(!0)}b.isFunction(z)&&(F=z,z=null);var a=b.extend({},b.fn.bPopup.defaults,z);a.scrollBar||b("html").css("overflow","hidden");var c=this,g=b(document),y=window,d=b(y),w=y.innerHeight||d.height(),u=y.innerWidth||d.width(),M=/OS 6(_\d)+/i.test(navigator.userAgent),C=200,t=0,e,B,p,m,f,x,v,r,s,I;c.close=function(){a=this.data("bPopup");e="__b-popup"+d.data("bPopup")+"__";q()};return c.each(function(){b(this).data("bPopup")||(k(a.onOpen),t=(d.data("bPopup")||0)+1,e="__b-popup"+t+"__",p="auto"!==a.position[1],m="auto"!==a.position[0],f="fixed"===a.positionStyle,r=c.outerHeight(!0),s=c.outerWidth(!0),a.loadUrl?K():A())})};b.fn.bPopup.defaults={amsl:50,appending:!0,appendTo:"body",autoClose:!1,closeClass:"b-close",content:"ajax",contentContainer:!1,easing:"swing",escClose:!0,follow:[!0,!0],followEasing:"swing",followSpeed:500,iframeAttr:'scrolling="no" frameborder="0"',loadCallback:!1,loadData:!1,loadUrl:!1,modal:!0,modalClose:!0,modalColor:"#000",onClose:!1,onOpen:!1,opacity:0.7,position:["auto","auto"],positionStyle:"absolute",scrollBar:!0,speed:250,transition:"fadeIn",transitionClose:!1,zIndex:9997}})(jQuery);
;
// Tableau contenant tous les identifiants de niveau 2 pour les pages
var ids_niveau_2 = new Array();
ids_niveau_2['bienvenue-sur-caf.fr'] = '1';
ids_niveau_2['aides-et-services'] = '2';
ids_niveau_2['actualites'] = '3';
ids_niveau_2['ma-caf'] = '4';
ids_niveau_2['mon-compte'] = '5';
ids_niveau_2['corporate'] = '6';
ids_niveau_2['etudes-et-statistiques'] = '7';
ids_niveau_2['recherche-interne'] = '8';
ids_niveau_2['pages-annexes'] = '9';
ids_niveau_2['pages-erreurs'] = '10';
ids_niveau_2['vies-de-famille'] = '11';
ids_niveau_2['premiere-visite'] = '12';

// Tableau contenant tous les identifiants de niveau 2 pour les clics
var ids_niveau_2_click = new Array();
ids_niveau_2_click['footer'] = '1';
ids_niveau_2_click['aides-et-services'] = '1';
ids_niveau_2_click['contacter-ma-caf'] = '4';
ids_niveau_2_click['etudes-et-statistiques'] = '7';
ids_niveau_2_click['mentions-legales'] = '9';


//Pour la compatibilité d'IE <= version 8
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}


/**
 * Retourne l'identifiant du site en fonction de l'environnement
 */
function get_id_environnement(path_array) {
	// Environnement de production
  	if (path_array[1] == 'www.caf.fr') {
  		return '516084';
  	}
  	// Autres environnements
  	else {
  		return '522955';
  	}
}

/**
 * Découpage de l'url en fonction des '/'
 * @returns path_array : contient les différentes parties de l'url
 */
function format_current_url() {

	var path = location.href;

	//Suppression de tous ce qu'il y a après un '?' dans l'url
	if (path.indexOf('?') > -1) {
		path = path.substring(0, path.indexOf('?'));
	}

	var reg=new RegExp("[/]+", "g");
	var path_array = path.split(reg);

	return path_array;
}

/**
 * Découpe l'url de l'élement href en fonction des '/'
 * @param href : balise href
 * @returns path_array : Tableau contenant les différentes parties de l'url
 */
function format_href_element(href) {

	var reg=new RegExp("[/]+", "g");
	var path_array = String(href).split(reg);

	return path_array;
}


/** PARTIE MARQUAGE PAGE **/

/**
 * Fonction appelée par les templates qui lance le script xiti
 * @param xtnv_value : niveau d'arborescence (document, ...)
 * @param xtsd_value : URL du serveur xiti
 * @param xtsite_value : ID du site xiti
 * @param xtn2_encode_value : Tableau 'nom site de niveau 2' => 'id'
 * @param s2_error : Status de l'en-tete de la requete http d'erreur (s'il y a)
 */
function xiti_page_marker() {

	//découpage de l'url
	var path_array = format_current_url();

	var fil_info = jQuery("div#home-fil-infos");
	var value = fil_info.find('div.fil-info').html();


	// Page d'erreur
	if (value == "Page non trouvée" || value == 'Accès refusé') {
		var id_niveau_2 = ids_niveau_2['pages-erreurs'];
		var chapitres = xiti_chapter_error(value);
		var ergo = "0";
	}

	// Autres pages
	else {

		var id_niveau_2 = get_xiti_xtn2(path_array);
		var chapitres = get_chapters(id_niveau_2, path_array);

	  	var ergo = "0";

	  	//Si on est sur la page d'acceuil => activation du clickzone
	  	if (id_niveau_2 == "1") {
	  		ergo = "1";   //ClickZone Activation
	  	}

	  	// libelle page en minuscule et les '-' remplacés par des '_'
	  	chapitres = chapitres.toLowerCase().replace(/-/g, '_');

	}

  	xiti_send_marker_page(path_array, id_niveau_2, chapitres, ergo, null);
}

/**
 * Retourne le bon chapitre en fonction de l'erreur
 */
function xiti_chapter_error(error) {
	switch(error) {
		case "Page non trouvée" :
			return 'erreur-404';
			break;
		case "Accès refusé" :
			return 'erreur-403';
			break;
		case "default" :
			return 'erreur';
			break;
	}
}

/**
 * Marquage de la popup de satifaction
 */
function xiti_marker_satisfaction() {
	//découpage de l'url
	var path_array = format_current_url();
	var id_niveau_2 = ids_niveau_2['aides-et-services'];
	var chapitres = "commentaires-satisfaction::popin-commentaire";
	var ergo = "0";
	xiti_send_marker_page(path_array, id_niveau_2, chapitres, ergo, null);
}

/**
 * Marquage et indicateurs de page formulaire satisfaction
 */
function xiti_marker_satisfaction_form() {
	var form = jQuery("#satisfaction-form").find('form');

	form.submit(function(event) {
		var checked_value = jQuery("input[submitted[votre_choix]]:checked").val();
		var xt_form = "0";
		switch (checked_value) {
			case 'tres':
				xt_form = "&f1=1";
				break;
			case 'assez':
				xt_form = "&f1=1";
				break;
			case 'peu':
				xt_form = "&f1=2";
				break;
			case 'pas':
				xt_form = "&f1=2";
				break;
			case 'default':
		}

		if (xt_form != "0") {

		    var path_array = format_current_url();
		    var f2 = path_array[path_array.length-1];
			xt_form += "&f2=[" + f2 + "]";

			var f3 = path_array[3];
			xt_form += "&f3=[" + f3 + "]";

			xt_form += "&f4=&f5=&f6=&f7=&f8=&f9=&f10=";
			xiti_send_marker_page(format_current_url(), ids_niveau_2['aides-et-services'], 'commenaitres-satisfaction::envoi-formulaire-satisfaction', "0", xt_form);
		}



    if(typeof(checked_value) == "undefined" || checked_value.length < 2) {
      alert("Vous devez saisir un choix.");
    }else {
      jQuery.ajax({
            url: jQuery(this).attr('action'),
            type: jQuery(this).attr('method'),
            data: jQuery(this).serialize(),
            success: function(html) {
            	alert("Merci de nous avoir donné votre avis sur cette page.");
            },
            complete: function() {
                location.reload();
            }
        });
    }

		 // appel Ajax pour recharger la page => utile sinon le formulaire n'est pas envoyé


        return false; // empêche le navigateur de soumettre lui-même le formulaire et permet d'envoyer la requête xiti
	});
}

/**
 * Marquage et indicateurs de page formulaire commentaire
 * @param val1
 * @param val2
 * @param val3
 */
function xiti_marker_commentaire_form(val1, val2, val3) {

	var xt_form = "0";

	if (val1 == "0") {
		xt_form = "&f1=2";
	}
	else {
		xt_form = "&f1=1";
	}

	if (val2 == "0") {
		xt_form += "&f2=2";
	}
	else {
		xt_form += "&f2=1";
	}

	if (val3 == "0") {
		xt_form += "&f3=2";
	}
	else {
		xt_form += "&f3=1";
	}

	if (xt_form != "0") {
		var path_array = format_current_url();
		var f4 = path_array[path_array.length-1];
	    xt_form += "&f4=[" + f4 + "]";

	    var f5 = path_array[3];
	    xt_form += "&f5=[" + f5 + "]";

	    xt_form += "&f6=&f7=&f8=&f9=&f10=";

	    xiti_send_marker_page(path_array, ids_niveau_2['aides-et-services'], 'commenaitres-satisfaction::envoi-commentaire', "0", xt_form);
	}

}

/**
 * La fonction permet de récupérer la section en fonction
 * de l'url
 * @param data : Tableau 'nom site de niveau 2' => 'id'
 * @param s2_error : Status de l'en-tete de la requete http d'erreur (s'il y a)
 * @returns data[key] : identifiant du site de niveau 2 correspondant à la clé
 */
function get_xiti_xtn2(path_array) {



	//Page d'accueil
	if (path_array[2] == "" || path_array[2] == "bienvenue-sur-caf.fr") {
		return ids_niveau_2['bienvenue-sur-caf.fr'];
	}

	//Autre section
	for (var key in ids_niveau_2) {
	    if (key === path_array[2]) {
	    	return ids_niveau_2[key];
	    }
	}

	// Cas spécifiques
	//Section corporate
	if (path_array[2] == "partenaires-bailleurs" || path_array[2] == "presse" || path_array[2] == "qui-sommes-nous" || path_array[2] == "international") {
		return ids_niveau_2['corporate'];
	}
	//Section vies de famille
	if (path_array[2] == "vies-de-famille") {
		return ids_niveau_2['vies-de-famille'];
	}
	//Section première visite
	if (path_array[2] == "premiere-visite") {
		return ids_niveau_2['premiere-visite'];
	}
	//Section recherche-interne
	if (path_array[2] == "search" || path_array[2] == "advanced-search") {
		return ids_niveau_2['recherche-interne'];
	}

	//Si aucune section trouvée => pages annexes
	return ids_niveau_2["pages-annexes"];
}

/**
 * Fonction qui retourne la valeur globale x1
 * permettant de savoir si l'utilisateur est connecté ou pas.
 * Pour cela, vérification de l'existance du cookie
 * @returns 1 => l'utilisateur est connecté
 * 			2 => l'utilsateur n'est pas connecté
 */
function get_x1() {
	var user_cookie = getCookie("LtpaToken2");

	//Utilisateur non connecté
	if (user_cookie == null) {
		return "&x1=2";
	}
	//Utilisateur connecté
	else {
		return "&x1=1";
	}
}

/**
 * Récupère les chapitres et sous chapitres
 * à partir de l'url
 * @param all_xtn2 : Tableau 'nom site de niveau 2' => 'id'
 * @param xtn2_value : id du site de niveau 2 en fonction de l'url
 * @param s2_error : Permet de savoir si une page d'erreur est affichée
 * @returns chapitre::sous-chapitre::page selon l'url
 */
function get_chapters(id_niveau_2, path_array) {

	var chapter_string = '';

	//Cas ou on est sur la page d'accueil
	if (id_niveau_2 == ids_niveau_2['bienvenue-sur-caf.fr']) {
		return "accueil";
	}

	//Cas ou on se trouve sur la page d'accueil de etudes et statistiques
	else if (id_niveau_2 == ids_niveau_2['etudes-et-statistiques'] && path_array.length == 3) {
		return "accueil-etudes-et-statistiques";
	}

	//Cas ou on se trouve sur la page d'accueil des actualités
	else if (id_niveau_2 == ids_niveau_2['actualites'] && path_array.length == 3) {
		return "accueil-actualites";
	}

	//Cas ou on se trouve sur la page d'accueil d'une année des actualités
	else if (id_niveau_2 == ids_niveau_2['actualites'] && path_array.length == 4 && !isNaN(path_array[3])) {
		return path_array[3]+"::accueil-"+path_array[3];
	}

	//Cas ou on se trouve sur la page d'accueil d'une section corporate
	else if (id_niveau_2 == ids_niveau_2['corporate'] && path_array.length == 3) {
		return path_array[2]+"::accueil-"+path_array[2];
	}

	//Cas ou on se trouve sur la page de recherche d'une caf
	else if ( (path_array[path_array.length-2] == "ma-caf" &&  path_array[path_array.length-1] == "") || path_array[path_array.length-1] == "ma-caf") {
		return "resultat-recherche-ma-caf";
	}

	//Cas ou on se trouve sur l'accueil d'un menu de ma-caf
	else if (id_niveau_2 == ids_niveau_2['ma-caf'] && path_array.length == 5) {
		if (path_array[4] == "coordonnees" || path_array[4] == "points-d-accueil" || path_array[4] == "bornes-interactives" ||
				path_array[4] == "visio-guichets") {
			return path_array[3]+"::contacter-ma-caf::"+path_array[4];
		}
		return path_array[3]+"::"+path_array[4]+"::"+path_array[4];
	}

	//Cas des points d'accueil et bornes interactives
	else if (id_niveau_2 == ids_niveau_2['ma-caf'] && path_array.length > 5 && (path_array[4] == "points-d-accueil" || path_array[4] == "bornes-interactives") ) {
		//Non prise en compte du /2 en fin d'url lorsqu'on clique sur un bouton radio
		if(path_array[5] != "2") {
			return path_array[3]+"::contacter-ma-caf::"+path_array[4]+"::"+path_array[5];
		}
		else {
			return path_array[3]+"::contacter-ma-caf::"+path_array[4];
		}
	}

	// Cas d'un menu dans etudes et statistiques
	else if (id_niveau_2 == ids_niveau_2['etudes-et-statistiques'] && path_array.length == 4) {
		return path_array[3]+"::"+path_array[3];
	}

	//Si on se trouve sur actualité de ma caf on ne prend en compte le annee
	else if (id_niveau_2 == ids_niveau_2['ma-caf']) {
		for (var i=3; i<=7; i++) {
			if (typeof path_array[i] != "undefined") {

				// Page d'accueil d'un menu
				if (path_array.length == 6 && path_array[i] == "offre-de-service") {
					return path_array[i-1]+'::'+path_array[i]+'::'+path_array[i+1]+'::'+path_array[i+1];
				}

				else if (path_array[i] != "annee") {
					chapter_string += path_array[i]+'::';
				}
			}
		}

		//Cas ou on est sur l'accueil d'une année des actualités (2012, 2013, ...)
		if ( !isNaN(path_array[path_array.length-1]) ) {
			return chapter_string+path_array[path_array.length-1];
		}

		//Suppression 2 derniers caractères '::'
		chapter_string = chapter_string.slice(0,-2);

		return chapter_string;
	}
	//Cas Premiere Visite
	else if (id_niveau_2 == ids_niveau_2['premiere-visite']) {
		return "premiere-visite";
	}

	//Cas Vies De Famille
	else if (id_niveau_2 == ids_niveau_2['vies-de-famille']) {
		if (typeof(path_array[3]) != "undefined" && path_array[3].length == 0) {
			return "accueil-vies-de-famille";
		}
		else {

			var vdfchapter = 'vies-de-famille';

			for (var i=3; i<=7; i++) {
				if (typeof path_array[i] != "undefined" && path_array[i].length > 0) {
					vdfchapter += "::"+path_array[i];
				}
			}
			return vdfchapter;
		}
	}

	//Autres cas
	else {

		//Cas ou le site de niveau 2 n'est pas présent dans l'url
		if (id_niveau_2 == ids_niveau_2['corporate'] || id_niveau_2 == ids_niveau_2['recherche-interne'] || id_niveau_2 == ids_niveau_2['pages-annexes']){
			var first_part = 2;
		}
		else {
			var first_part = 3;
		}

		for (var i=first_part; i<=6; i++) {
			if (typeof path_array[i] != "undefined") {

				//Cas ou on se trouve sur la page d'accueil de service en ligne
				if ( path_array[i] == "les-services-en-ligne" && path_array.length == i + 1 ) {
						return path_array[i]+"::"+path_array[i+1]+"::accueil-"+path_array[i];
				}

				// Cas ou on se trouve sur la page d'accueil d'un menu de connaitre vos selon votre situation
				else if ( path_array[i] == "connaitre-vos-droits-selon-votre-situation" && path_array.length == i + 2 ) {
						return path_array[i]+"::"+path_array[i+1]+"::"+path_array[i+1];
				}

				//Cas des pages d'accueil pour la section s'informer sur les aides
				else if (path_array[i] == "s-informer-sur-les-aides") {
					//page d'accueil de s'informer sur les aides
					if (path_array.length == i + 1) {
						return path_array[i]+"::accueil-"+path_array[i];
					}
					//pages d'accueil des sous sections ou page orpheline
					else if (path_array.length == i+2) {
						menus = new Array("petite-enfance", "enfance-et-jeunesse",
								"solidarite-et-insertion", "logement-et-cadre-de-vie");
						// Pages orphelines
						if (menus.indexOf(path_array[i+1]) == -1) {
							return path_array[i]+"::"+path_array[i+1];
						}
						// Pages avec menu
						else {
							return path_array[i]+"::"+path_array[i+1]+"::"+path_array[i+1];
						}
					}
				}

				//Cas de la page d'accueil estimer vos droits
				else if ((path_array[i] == "estimer-vos-droits" || path_array[i] == "acceder-a-une-demande-en-ligne") && path_array.length == i+1) {
					return path_array[i-1]+"::"+path_array[i]+"::"+path_array[i];
				}

				//Cas ou on se trouve sur l'accueil du menu elus et collectivites dans partenaires bailleurs
				else if (path_array[i] == "elus-et-collectivites" && path_array.length == i + 1) {
					return path_array[i-1]+"::"+path_array[i]+"::"+path_array[i];
				}

				//Cas ou on se trouve sur l'accueil d'un des menu qui sommes nous
				else if (path_array[i] == "qui-sommes-nous" && typeof path_array[i+1] != "undefined" && path_array.length == i + 2) {
						return path_array[i]+"::"+path_array[i+1]+"::"+path_array[i+1];
				}

				else if (path_array[i] == "advanced-search") {
					return "recherche";
				}

				chapter_string += path_array[i]+'::';

			}
		}
		//Suppression 2 derniers caractères '::'
		chapter_string = chapter_string.slice(0,-2);

		return chapter_string;
	}
}

/**
 * Verification de l'existance d'un cookie passé en parametre
 * @param name : nom du cookie
 * @returns null si le cookie n'est pas trouvé
 * 			le contenu du cookie sinon
 */
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

/**
 * Place les parametres dans la variable window.xtparam
 * @param path_array
 * @param n2
 * @param page
 * @param ergo
 * @param form
 */
function xiti_send_marker_page(path_array, n2, page, ergo, form) {

	if (form == "resultats-recherche") {

		xtnv = document;              //parent.document or top.document or document
  	xtsd = 'https://logc186';
  	var path_array = format_current_url();
  	xtsite = get_id_environnement(path_array);
  	xtn2 = n2;         // level 2 site
  	xtpage = page;			// page & chapters names
  	if (ergo.length > 1)
  		xt_multc = "&mc="+ergo[0]+"&np="+ergo[1]+get_x1();
  	else
  		xt_multc = get_x1();

  	xt_an = "";
  	xt_ac = "";

  	//do not modify below
  	if (window.xtparam!=null){
  		window.xtparam+=xt_multc+"&ac="+xt_ac+"&an="+xt_an;
  	}
  	else {
  		window.xtparam=xt_multc+"&ac="+xt_ac+"&an="+xt_an;
  	}

	}else {
		if (form != null) {

			xt_form = form;

			//console.log("xt_form : " + xt_form);

			//do not modify below
			if (window.xtparam!=null) {
				window.xtparam+=xt_form;
			}
			else {
				window.xtparam =xt_form;
			}
		}

		xtnv = document;              //parent.document or top.document or document
	  	xtsd = 'https://logc186';
	  	xtsite = get_id_environnement(path_array);
	  	xtn2 = n2;         // level 2 site
	  	xtpage = page;			// page & chapters names
	  	xt_multc = get_x1();       // all the xi indicators (like "&x1=...&x2=....")
	  	xt_an = "";                // user ID
	  	xt_ac = "";
	  	xtergo = ergo;

	  	// Pour les tests
	  	//console.log('xtsd : ' + xtsd + ' / xtsite : ' + xtsite + ' / xtergo ' + xtergo + ' / id site 2 : ' + xtn2 + ' / page : ' + xtpage + ' / connecte : ' + xt_multc);

	  	//do not modify below
	  	if (window.xtparam!=null){
	  		window.xtparam+=xt_multc+"&ac="+xt_ac+"&an="+xt_an;
	  	}
	  	else {
	  		window.xtparam=xt_multc+"&ac="+xt_ac+"&an="+xt_an;
	  	}
	}

  var at=document.createElement('script');
	at.type='text/javascript';
	at.async=true;
	at.src='/sites/all/themes/caf/js/xtcore_4.6.1.js';
	(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]||document.getElementsByTagName('script')[0].parentNode)
	.insertBefore(at,null);
}


/** PARTIE MARQUAGE CLIC **/

/**
 * Marquage des liens footer sur toutes les pages
 */
function liens_footer(element) {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element, 'footer');
		});
}

/**
 * Marquage des liens sur la page d'accueil (acces direct, aides et services et actualites)
 * @param element
 * @param href
 * @returns
 */
function liens_front_page(element, href) {
	parentElement = element.parentNode.className;

	// liens accès directs à marquer
	if (parentElement == "acces-direct-item") {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element, 'liens-acces-direct');
		});
	}

	// liens aides et services à marquer
	else if ( String(href).indexOf('/aides-et-services/') > -1 ) {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element, 'aides-et-services');
		});
	}

	// liens actualites à marquer
	else if ( String(href).indexOf('/actualites/2') > -1 ) {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element, 'accueil');
		});
	}
}

/**
 * Marquage des liens etudes et stats et mentions legales (docs + facebook + cairn.info)
 * @param path_array
 * @param element
 * @param href
 * @returns
 */
function liens_etu_stats_mentions_legales(path_array, element, href) {
	// Cas d'un lien facebook sur la page jeunes-chercheurs
	if ( typeof path_array[3] !== 'undefined' &&  path_array[3] == "jeunes-chercheurs" && String(href).indexOf('https://www.facebook.com/share.php?' > -1) ) {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element);
		});
	}

	// Cas d'un lien cairn.info sur la page informatioons-sociales
	else if (typeof path_array[3] !== 'undefined' &&  path_array[3] == "informations-sociales" && String(href).indexOf('https://www.cairn.info' > -1) ) {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element);
		});
	}

	// Cas d'un document
	else {
		var extension = href.substr(href.length - 4);
		if (extension === '.pdf' || extension === '.xls') {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element);
			});
		}
	}
}

/**
 * Marquage des liens dans le contenu de la page contacter ma caf
 * @param element
 * @param href
 */
function liens_contacter_ma_caf(element, href) {

	parentElement = jQuery(element).parents('ul').attr("class");

	if (parentElement === 'contact-links') {
		if ( String(href).indexOf('/coordonnees') > -1 && jQuery(element).attr('title') === "Par téléphone") {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element, 'telephone');
			});
		}
		else if ( String(href).indexOf('/Redirect?page=maCafContactCaf') > -1 && jQuery(element).attr('title') === "Par courriel") {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element, 'courriel');
			});
		}
		else if ( String(href).indexOf('/coordonnees') > -1 && jQuery(element).attr('title') === "Par courrier") {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element, 'courrier');
			});
		}
		else if ( String(href).indexOf('/points-d-accueil') > -1 && jQuery(element).attr('title') === "Sur un point d'accueil") {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element, 'contacter-ma-caf');
			});
		}
		else if ( jQuery(element).attr('title') === "Prise de Rendez-vous" || String(href).indexOf('/prendre-un-rendez-vous') > -1 ) {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element, 'Prendre un Rendez-vous');
			});
		}
	}
}

/**
 * Marquage des liens dans le menu contacter ma caf à gauche de la page
 * @param element
 * @param href
 */
function liens_menu_contacter_ma_caf(element, href) {

	parentDivElement = jQuery(element).parents('div').attr("class");
	parentUlElement = jQuery(element).parents('ul').parents('ul').attr("id");

	if (parentDivElement == 'region region-left' && parentUlElement == 'menu') {

		if ( String(href).indexOf('/coordonnees') > -1 || String(href).indexOf('/points-d-accueil') > -1
		    || String(href).indexOf('/bornes-interactives') > -1 || String(href).indexOf('/prise-rdv') > -1) {
			jQuery(element).click(function() {
				return xiti_send_marker_click(element, 'contacter-ma-caf');
			});
		}
	}//page "contacter ma caf"
	else if(parentDivElement == 'region region-left' && jQuery(element).parents('ul').attr("id") == 'menu'
	        && String(href).indexOf('/contacter-ma-caf') > -1) {
		jQuery(element).click(function() {
			return xiti_send_marker_click(element, 'contacter-ma-caf');
		});
	}
}

/**
 * Marque certains clics avec l'event onclick pour envoyer une requete à xiti
 */
function xiti_click_marker() {
	//découpage de l'url
	var path_array = format_current_url();

	// Récupération de tous les liens dans les contenus
	jQuery('#content').find("a").each(function() {

		var href = jQuery(this).attr("href");

		// Si le href est un lien vers un document pdf ou xls, on rajoute un event onclick
		if (typeof href !== 'undefined') {

			// Liens footer
			if ( String(href).indexOf('https://www.mon-service-public.fr') > -1 || String(href).indexOf('https://www.viesdefamille.fr') > -1 || String(href).indexOf('https://www.mon-enfant.fr') > -1 ) {
				liens_footer(this, href);
			}

			// Si on est sur la page d'accueil
			else if ( path_array[2] == 'bienvenue-sur-caf.fr' || (path_array[2] ===  "") ) {
				liens_front_page(this, href)
			}

			// Marquage des clics pour les sections etudes-et-statistiques et mentions-legales
			else if ( path_array[2] == 'etudes-et-statistiques' || path_array[2] == 'mentions-legales' ) {
				liens_etu_stats_mentions_legales(path_array, this, href);
			}

			// Marquage du menu contacter ma caf et de la page contacter ma caf
			else if (path_array[2] == 'ma-caf') {

				// menu contacter ma caf à droite de la page
				liens_menu_contacter_ma_caf(this, href);

				if (typeof path_array[4] !== 'undefined' && (path_array[4] == 'contacter-ma-caf-p2' || path_array[4] == 'contacter-ma-caf')) {
					// liens contacter ma caf dans le contenu
					liens_contacter_ma_caf(this, href);
				}
			}
		}
	});
}

/**
 * Retourne le site de niveau 2 pour les indicateurs de clic
 * @param data : Tableau contenant tous les sites de niveau 2 associés au chapitre ("nom_chapitre" => "id_site_niveau_2")
 * @returns data[key] : identifiant du site de niveau 2 en fonction du chapitre
 */
function get_s2_clic() {
	var path_array = format_current_url();
	for (var key in ids_niveau_2_click) {
		if (typeof path_array[2] != "undefined") {
			if (key === path_array[2]) {
				return ids_niveau_2_click[key];
			}
		}
	}
}

/**
 * Retourne les chapitres en fonction de l'url
 * @param href_element : balise href
 * @returns chapter : chapitres sous la forme chapitre::sous-chapitre::sous-sous-chapitre::libelle_clic
 */
function get_chapter_clic(href_element) {

	var chapter = "";

	//Découpage de l'url placé dans le href
	var href_url_format = format_href_element(href_element);

	//Cas d'un clic sur le lien facebook dans jeunes chercheurs
	if (String(href_element).indexOf('facebook.com') > -1) {
		var current_url_format = format_current_url();
		return current_url_format[3]+"::lien-facebook";
	}

	//Cas d'un clic sur le lien cairn.info dans informations sociales
	if (String(href_element).indexOf('cairn.info') > -1) {
		var current_url_format = format_current_url();
		return current_url_format[3]+"::lien-www.cairn.info";
	}

	//Cas d'un clic sur une actualité de la page d'accueil
	if (String(href_element).indexOf('actualites') > -1) {
		return "liens-actualites";

		//Cas ou il faut le lien complet
		/*var last_index = href_path_format.length-1;
		return = href_path_format[last_index];*/
	}

	//Cas ou c'est un clic sur aides-et-services sur la page d'accueil
	if(String(href_element).indexOf('aides-et-services') > -1) {
		var href_format = format_href_element(href_element);
		var last_index = href_format.length - 1;
		return "aides-et-services::"+href_format[last_index-1];
	}

	//Cas ou c'est un clic sur un document
	if (link_is_document(href_element)) {

		var current_url_format = format_current_url();

		//Traitement spécifique si c'est etudes et statistique et dans un menu autre que données statistiques
		if(current_url_format.indexOf('etudes-et-statistiques') > -1 && current_url_format.indexOf('donnees-statistiques') <= -1 && current_url_format.length > 4) {
			var last_iteration = 4;
		}
		else {
			last_iteration = 5;
		}

		for (var i=2; i<last_iteration; i++) {
			if (typeof current_url_format[i] != "undefined") {
				chapter += current_url_format[i]+'::';
			}
		}

		//Cas d'un document acte regelmentaire
		if (href_url_format[href_url_format.length-1].substring(0,2) == "ar") {
			chapter += "actes-reglementaires::";
		}

		var j = 0;

		while (href_url_format[j] != "files") {
				j++;
		}
		j++;

		//Préfixe selon le type du document
		if (String(href_element).indexOf('.pdf') > -1) {
			chapter += "PDF_";
		}

		else if (String(href_element).indexOf('.xls') > -1)
		chapter += "XLS_";

		for (var i = j; i<href_url_format.length; i++) {

			chapter += href_url_format[i]+"/";
		}

		chapter = chapter.slice(0,-1);
		return (chapter);
	}

	//Cas générique
	for (var i=0; i<=6; i++) {
		if (typeof href_url_format[i] != "undefined") {
			chapter += href_url_format[i]+'::';
		}
	}
	//Supprime les deux derniers '::' en fin de chaine
	return chapter.slice(0,-2);
}

/**
 * Fonction qui vérifie si le lien du href est un document
 * @param href_element : balise href
 * @returns true => le lien pointe sur un document
 * 			false => le lien ne pointe pas sur un document
 */
function link_is_document(href_element) {
	if (String(href_element).indexOf('.pdf') > -1 || String(href_element).indexOf('.xls') > -1) {
		return true;
	}

	else {
		return false;
	}
}

/**
 * Renvoie le type de clic
 * @param href_element : balise href
 * @returns "T" : Telechargement (cas d'un document)
 * 			"S" : Sortie (cas d'un lien externe à caf.fr)
 * 			"N" : Navigation (cas d'un lien interne à caf.fr)
 */
function get_type_clic(href_element) {
	//Si c'est un document
	if (link_is_document(href_element)) {
		return 	"T";
	}
	//Si c'est un lien externe
	if (href_element.target == "_blank") {
		return "S";
	}
	//Si c'est un lien interne
	return "N";
}

/**
 * Met en place les parametres pour les indicateurs de clics xiti
 * et lance le script xtclick.js
 * @param href_element : balise href dans lequel la fonction est appelée
 * @param all_id_site2 : Tableau d'association des sites de niveau 2 - chapitres
 * @param chapitre_specific : Cas ou un chapitre spécial a besoin d'être donné en parametre pour un traitement specifique
 */
function xiti_send_marker_click(href_element, chapitre_specific) {

	//Cas speciaux
	if (typeof chapitre_specific != "undefined") {

		var href_path_format = format_href_element(href_element);

		//Cas ou le clic est sur le footer
		if (chapitre_specific == "footer") {

			var id_site2 = ids_niveau_2_click[chapitre_specific];
			var chapter=chapitre_specific+"::"+href_path_format[1].slice(4);
		}

		else if (chapitre_specific == "footer-2") {
			var id_site2 = '1';
			var chapter=href_path_format[2];
		}

		//Cas ou le clic est sur un lien de aides et services sur la page d'accueil
		else if (chapitre_specific == "aides-et-services") {
			var id_site2 = ids_niveau_2_click[chapitre_specific];
			var chapter=chapitre_specific+"::"+href_path_format[3];
		}

		//Cas ou le clic est sur accès direct
		else if(chapitre_specific == "liens-acces-direct") {
			var id_site2 = "1";
			var chapter = "liens-acces-direct";
		}

		//Cas ou le clic est sur un lien de la page d'accueil
		else if(chapitre_specific == "accueil") {
			var id_site2 = "1";
			var chapter = get_chapter_clic(href_element);
		}

		//Cas ou le clic est sur un lien de contacter ma caf
		else if (chapitre_specific == "contacter-ma-caf") {
			var last_index = href_path_format.length-1;
			if(href_path_format[last_index] == "contacter-ma-caf") {
				var chapter = chapitre_specific;
			}else {
				var chapter = chapitre_specific+"::"+href_path_format[last_index];
			}
			var id_site2 = ids_niveau_2_click[chapitre_specific];
			var clic_type = "N";
		}

		//Cas des liens dans le contenu de contacter ma caf
		else if (chapitre_specific == "courrier" || chapitre_specific == "telephone" || chapitre_specific == "courriel") {
			var id_site2 = ids_niveau_2_click['contacter-ma-caf'];
			var chapter = 'contacter-ma-caf::'+chapitre_specific;
			var clic_type = "N";
		}

		//Cas du bouton se decconecter
		else if (chapitre_specific == "se-deconnecter") {
			var id_site2 = 5;
			var chapter = "se-deconnecter";
			var clic_type = "A";
		}
	}

	//Cas générique
	else {
		var chapter = get_chapter_clic(href_element);
		var id_site2 = get_s2_clic();
	}

	//Type de clic
	if (typeof clic_type == "undefined") {
		var clic_type = get_type_clic(href_element);
	}

	// Pour les tests
	// console.log("chapitre : "+chapter+" id site 2 : "+id_site2+"-Type :"+clic_type);
	//alert(chapter+" "+id_site2+" "+clic_type);

	chapter = chapter.toLowerCase().replace(/-/g, '_');
	return xt_click(href_element,'C', id_site2, chapter, clic_type);

}


/**
 * Ajoute le marquage des clics sur tous les liens de la page d'accueil
 */
function addXitiClickOnFrontPage() {
	jQuery("a").each(function() {

		var clic_type = get_type_clic(jQuery(this));

		if (jQuery(this).find("img").length == 0) {
			var clickName = jQuery(this).text();
			// Supprime les caractères spéciaux, remplace les espaces par des '_'
			clickName = clickName.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/ /g, '_');

			jQuery(this).attr("xtclib", clickName);
			jQuery(this).attr("xtcltype", clic_type);
		}
		else {
			jQuery(this).children("img").each(function() {
				var clickName = jQuery(this).attr("title");
				// Supprime les caractères spéciaux, remplace les espaces par des '_'
				clickName = clickName.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/ /g, '_');

				jQuery(this).attr("xtclib", clickName);
				jQuery(this).children("img").attr("xtcltype", clic_type);
			});
		}
	});
	return false;
}

/**
 * Rajout de l'event onclick sur les liens concernés
 */
jQuery(document).ready(function() {

	// Marquages des clics
	xiti_click_marker();

	// Formulaire de satisfaction
	if (jQuery("#satisfaction-form").length > 0) {
		xiti_marker_satisfaction_form();
	}
});
;
