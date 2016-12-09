// Ce script permet la gestion de la personnalisation des pages d'accueil LCL
// Valeur du cookie selon le march�:
//var cookiePart ='particuliers';
var cookiePro ='professionnels';
var cookieEnt ='entreprises';
var cookieElcl = 'ecl';
// Nom du cookie positionn� pour la gestion de la personnalisation
var cookieLclName ="lclgen";
var domain = '.lcl.fr';
var expires = null;  
var path = '/';  
 
  var secure = false; 
//Cette fonction permet de r�cup�rer la valeur du cookie de personnalisation LCL
function GetCookieLcl () {  
  var arg = cookieLclName + "=";  
  var alen = arg.length;  
  var clen = document.cookie.length;  
  var i = 0;  
  while (i < clen) {    
    var j = i + alen;    
    if (document.cookie.substring(i, j) == arg)      
      return getCookieVal (j);    
    i = document.cookie.indexOf(" ", i) + 1;    
    if (i == 0) break;   
  }
  
  return null;
}
//Cette fonction permet de positionner un cookie
function SetValeurCookieLcl (value) {  
   var valCook = cookieLclName + "=" + escape (value) + 
  ";expires=Fri, 17 Dec 2020 10:00:00 GMT" + 
  ((path == null) ? "" : (";path=" + path)) +  
  ((domain == null) ? "" : (";domain=" + domain)) + 
  ((secure == true) ? ";secure" : "");  
  document.cookie = valCook;  
}

//Cette fonction permet de supprimer le cookie de personnalisation LCL
function lcl () {  
  var exp = new Date();  
  exp.setTime (exp.getTime() - 1);  
  var cval = ''  
  document.cookie = cookieLclName + "=" + cval + "; expires=" + exp.toGMTString()+ 
  ((path == null) ? "" : ("; path=" + path)) +  
  ((domain == null) ? "" : ("; domain=" + domain)) +    
  ((secure == true) ? "; secure" : "");
}

//var exp = new Date(); 
//Exp.setTime(exp.getTime() + (nbJour*24*60*60*1000));

function getCookieVal(offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
  endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}


function personalisation() {
  var cookieVal = GetCookieLcl();

//Cookie particuliers positionn�, redirection vers la page d'accueil des particuliers
//if(cookieVal==cookiePart)  
//	top.location.href =paparticuliers;

//Cookie professionnels positionn�, redirection vers la page d'accueil des professionnels
if(cookieVal==cookiePro)  
	top.location.href =paprofessionnels;
	
 //Cookie entreprises positionn�, redirection vers la page d'accueil des entreprises
if(cookieVal==cookieEnt)
    top.location.href = paentreprise;

}

function personalisation_elcl() {
    var cookieVal = GetCookieLcl();

    //Cookie ecreditlyonnais positionn�, redirection vers la page d'accueil des entreprises
    if (cookieVal == cookieElcl)
        top.location.href = paeclpublic;
}

//// Set Cookie 24h pour la console de HP ///
function createCookieHomePage(name, value, days) {
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
//// fin de coocike console