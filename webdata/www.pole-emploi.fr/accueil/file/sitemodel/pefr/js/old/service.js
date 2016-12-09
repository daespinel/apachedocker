function backToService(link, paramz) {
	var frm = document.getElementById("formService");
	frm.action = link.href;
	frm.target = link.target;
	/*
        DAQ le 7/9 : pour HP car jquery.cookies.2.1.0.min.js plus inclus dans la HP
                     pour optimisation poids de la page. De plus, impossible d'utiliser
                     GetCookie n'utilise pas le decodeUrl contrairement au code JQuery.
                     De toute fa�on le jeton pas utilis� dans la HP, d'o� ce bloc
                     try catch propos� par le ST PE
    */
    try {
        var jeton = $.cookies.get('jeton');
        if (jeton) {
            frm.elements['jeton'].value = jeton;
            $.cookies.del('jeton', {path:'/'});
        }
    } catch (e){} 
    var params = paramz.split('&');
	for (var i = 0 ; i < params.length ; i++) {
		var tmp = params[i].split('=');
		$('#formService').append("<input type=\"hidden\" name=\"" + tmp[0] + "\" value=\"" + tmp[1] + "\"/>");
	} 
	$('#formService').submit();
	return false;
}

/**
 * IN0514020 - NOCMS : sur les redirections articles et rubriques, possibilit� de faire les liens sur des liens services
 *
 * Utilis� uniquement pour les gabarits de redirection car 
 * nous ne partons pas directement du lien a href mais nous sommes d�j� dans le
 * gabarit de redirection.
 */
function backToServiceRedirect(href, target, paramz) {
	var frm = document.getElementById("formService");
	frm.action = href;
	frm.target = target;
	/*
        DAQ le 7/9 : pour HP car jquery.cookies.2.1.0.min.js plus inclus dans la HP
                     pour optimisation poids de la page. De plus, impossible d'utiliser
                     GetCookie n'utilise pas le decodeUrl contrairement au code JQuery.
                     De toute fa�on le jeton pas utilis� dans la HP, d'o� ce bloc
                     try catch propos� par le ST PE
    */
    try {
        var jeton = $.cookies.get('jeton');
        if (jeton) {
            frm.elements['jeton'].value = jeton;
            $.cookies.del('jeton', {path:'/'});
        }
    } catch (e){} 
    var params = paramz.split('&');
	for (var i = 0 ; i < params.length ; i++) {
		var tmp = params[i].split('=');
		$('#formService').append("<input type=\"hidden\" name=\"" + tmp[0] + "\" value=\"" + tmp[1] + "\"/>");
	} 
	$('#formService').submit();
	return false;
}