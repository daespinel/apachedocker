/**
 * Fichier : affichage.js
 * Description : fonctions JS spécifiques à
 * la présentation du site
 * Auteur : Hamza Iqbal - hiqbal[at]actualys.com
 * Copyright: Actualys
 ******************************************/

/**
 * Initialisation
 ******************************************/
$(document).ready( function()
{
	// Corectifs IE
	if($.browser.msie)
	{
		try
		{
			/**
			 * PNG fix
			 ******************************************/
			if(typeof DD_belatedPNG.fix == 'function' && parseInt($.browser.version) <= 6) {
				DD_belatedPNG.fix('.pngfix, .bloc_info .visuel img, .bloc_info .visuel, .bloc_conseil .visuel img, .bloc_outil .visuel img, .bloc_produit .visuel img, #toolbar_identite ul li.deconnexion a');
			}
		}
		catch(e) {}
	}
});

/******************/
/* Ajout GCE TECH */
/******************/
function getWindowHeight() 
{
    var windowHeight = 0;
	if (typeof(window.innerHeight) == 'number') {
	    windowHeight = window.innerHeight;
	}
	else 
	{
	    if (document.documentElement && document.documentElement.clientHeight) 
	    {
	    	windowHeight = document.documentElement.clientHeight;
	    }
	    else 
	    {
	        if (document.body && document.body.clientHeight) 
	        {
    		    windowHeight = document.body.clientHeight;
	    	}
	    }
	}
	return windowHeight;
}
		
function setFooter() 
{
    if (document.getElementById) 
    {
	    var windowHeight = getWindowHeight();
		if (windowHeight > 0) 
		{
		    var globalElement = document.getElementById('global');
		    var footerElement = document.getElementById('divFooter');
			if (footerElement!=null && globalElement!=null)
			{
    		    var globalHeight = globalElement.offsetHeight;
    			var footerHeight  = footerElement.offsetHeight;
			    if (windowHeight - globalHeight - 43 >= 0) 
			    {
			        footerElement.style.top = (windowHeight - (globalHeight+43)) + 'px';
			    }
			    else 
			    {
			        footerElement.style.top = '0px';
			    }
			    footerElement.style.display = "block";
		    }
	    }
	}
}
		
window.onload = function() 
{
    setFooter();
}
		
window.onresize = function() 
{
    setFooter();
}