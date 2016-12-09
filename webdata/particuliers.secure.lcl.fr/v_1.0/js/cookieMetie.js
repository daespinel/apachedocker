var siteLocation = "EspacePRO";
var urlLocation = document.location.href;
var domain = 'lcl.fr';
var expires = null;
var path = '/';

var secure = false;

// supprimer cookie
function DelCookie() {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = ''
    document.cookie = siteLocation + "=" + cval + "; expires=" + exp.toGMTString() +
          ((path == null) ? "" : ("; path=" + path)) +
  ((domain == null) ? "" : ("; domain=" + domain)) +
  ((secure == true) ? "; secure" : "");
}

//read cookie 
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

function createCookiePageMetie() {
	var _url = document.location.href.toLowerCase();
    var valCook = siteLocation + "=" + urlLocation +
   ";expires=Fri, 17 Dec 2020 10:00:00 GMT" +
  ((path == null) ? "" : ("; path=" + path)) +
  ((domain == null) ? "" : ("; domain=" + domain)) +
  ((secure == true) ? "; secure" : "");
    document.cookie = valCook;
}

function getPageMetie() {
    var url="https://professionnels.secure.lcl.fr/";
    if (readCookie(siteLocation)) {
        var nameEQ = siteLocation + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) 
			{ var cookieval = c.split('=');
				return document.location.href = c.substring(nameEQ.length, c.length);
			}
        }
       
    }
    return document.location.href = url;
}

function getCookieValMetier(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}


function GetCookieMetier() {
    var arg = siteLocation + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieValMetier(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }

    return null;
}

function personalisation_Metier() {
    var cookieVal = GetCookieMetier();
    //Cookie ecreditlyonnais positionn?, redirection vers la page d'accueil des entreprises
        top.location.href = cookieVal;
}
