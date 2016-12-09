// Fichier permettant l'affichage d'une bannière d'information, conforme à la mention CNIL 2014 sur les cookies

var pageURL = location.href;

function displayCnilBanner()
{
    jQuery("#global").prepend('<div class="i_infos_wrapper  cnil_warning">' 
                            + '<div class="i_infos">' 
                            + '<h2></h2>'  
                            + 'En poursuivant la navigation sur ce site vous acceptez l’utilisation de cookies pour vous proposer des services et offres adaptées à vos centres d’intérêt. ' 
                            + 'Pour en savoir plus <a href="#" class="cookies_cnil_infos">cliquez ici</a>.' 
                            + '</div>' 
                            + '<a class="bouton-croix close" href="#"><img alt="Fermer" src="/cache/cnil/transparent.gif"></a>' 
                            + '<div class="picto_infos"></div>' 
                            + '</div>');
                            
    // Quand on ferme la bannière, on crée un cookie de 13 mois pour désactiver l'ouverture de cette bannière
    jQuery(".cnil_warning .close").click(function(event) {
        event.preventDefault();
	    												  jQuery(".cnil_warning").remove();
        createCnilCookie();
	    												});
    												 	   
    //click pour infos sur  cliquez ici
    //on active le cookie
	jQuery(".cookies_cnil_infos").click(function(event){ event.preventDefault();cnil_createCookie(cnilCookie, pageURL, (1/24/60)/60);
													     // -> ajouter action d' envoi vers la page d'infos 
													     location.href = "politique-cookies.aspx?page=cookiesInfos";
													   });
}

// Cookie de 13 mois pour la bannière d'info sur la mention CNIL à propos des cookies
// On ajoute le hostname au nom du cookie cnil pour différencier les coookies des différents sites partenaires de la caisse d'épargne
var cnilCookie="cnilCookie_" + location.hostname;

function cnil_createCookie(name, value, days) 
{
	var expires;
    if (days) 
    {
		var date = new Date();
        date.setTime(date.getTime() + ( days*24*60*60*1000 ) );
        expires = "; expires=" + date.toGMTString();
	}
	else
		expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function cnil_readCookie(name) 
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) 
    {
		var c = ca[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) 
            return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function cnil_eraseCookie(name) 
{
    cnil_createCookie(name, "", -1);
}

function createCnilCookie () 
{
    // Creation du cookie qui prévient d'afficher la bannière pendant 1 année et 1 jour
    // On ajoute la date de creation à la valeur du cookie (qui sert pour différer l'affichage du bandeau d'accompagnement navigateurs)
	var creationDate = new Date().getTime();
    cnil_createCookie(cnilCookie, "activated_" + creationDate, 366 + 31);
}

function getQuerystring(key, default_) 
{
    if (default_==null) 
           default_="";
   key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
   var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
       var qs = regex.exec(window.location.href);
       if (qs == null) 
           return default_; 
       else 
           return qs[1];
}

jQuery(document).ready(function(){
    // On teste l'existence du cookie CNIL
	var cookieVal = cnil_readCookie(cnilCookie);
    if (cookieVal == null)
	{
        // On affiche la bannière
		displayCnilBanner();
        // On arrive sur une page du site : pas de cookie cnil -> on en crée un avec valeur inactive (cookie d'1 minute)
		cnil_createCookie(cnilCookie, pageURL, (1/24)/60);
	}
	else
	{
        // Il faut réafficher la bannière si on recharge la page et que le cookie existe -> on compare l'url de la page au nom du cookie
		referrerParam = document.referrer.split("?");
        if (typeof referrerParam[1] !== 'undefined' && referrerParam[1].substr(0,4) == "page")
        {
            createCnilCookie();
            return false;
        }
        cookieParam = cookieVal.split("?");
        if ( cookieVal == pageURL ||
            (typeof cookieParam[1] !== 'undefined' && cookieParam[1].substr(0,4) == "page") )
		{
			displayCnilBanner();
			return false;
		}
        // On arrive sur une autre page ou le cookie est activé -> on n'affiche pas la bannière.
        // La bannière d'accompagnement s'affichera si elle est requise
        if ( cookieVal.substr(0,9) != "activated" && getQuerystring('page') != "cookiesCnilInfos" )
			createCnilCookie();
	}
});