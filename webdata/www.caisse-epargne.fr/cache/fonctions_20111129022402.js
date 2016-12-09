function Rollreg (name) 
{
    divrolls = document.getElementById("rolls"); 
	zones = divrolls.getElementsByTagName("li");
	if (name == "off") for (var i = 0; i < zones.length; i++) zones[i].style.display = "none";
	if (name != "off") document.getElementById(name).style.display = "block";
}

var pause;
var delay = 700;
var btnbanque;
var btnbesoin;
var btnproduit;
var active;
var y1 = 0;
var y2 = 0;

function Showmenu (id) 
{
	stopAutoHide();
    clearTimeout(innerTimeout);
	if (document.getElementById("banque") != null) 
	{
		btnbanque = document.getElementById("banque");
	} 
	else 
	{
		btnbanque = document.getElementById("banqueOn");
	}
	if (document.getElementById("besoin") != null) 
	{
		btnbesoin = document.getElementById("besoin");
	} 
	else 
	{
		btnbesoin = document.getElementById("besoinOn");
		y1 = "besoinOn";
		y2 = "produitOff";
	}
	if (document.getElementById("produit") != null) 
	{
		btnproduit = document.getElementById("produit");
	} 
	else 
	{
		btnproduit = document.getElementById("produitOn");
		y1 = "besoinOff";
		y2 = "produitOn";
	}
	Hideall(id);
 	voirSelect('hidden');
	active = document.getElementById("dropdown" + id);
	if (active != null)
	{
	    active.style.display = "block";
	    active.style.height = "auto";
	}
	switch (id) 
	{
		case 1 :
			if (btnbesoin != null &&  btnbesoin.offsetWidth < 200) btnbesoin.className = "besoinOn";
			break;
		case 2 :
			if (btnproduit != null && btnproduit.offsetWidth < 200) btnproduit.className = "produitOn";
			break;
	} // switch
	
	var dd = document.getElementById("dropdown" + id);
	var dl = null;
	
	if (dd != null)
	{
	    dl = dd.getElementsByTagName("dl");
	    
	    for (var i = 0; i < dl.length; i++) 
	    {
		    dl[i].onmouseout = initAutoHide;
		    dl[i].onmousemove = stopAutoHide;
	    } // for
	} // if
	
	if (btnbanque != null)
	{
		if (!btnbanque.onmouseover) 
		{
			btnbanque.onmouseover = Hideall;
			if (btnbesoin != null)
			{
			    btnbesoin.onmouseout = initAutoHide;
			    btnbesoin.onmousemove = stopAutoHide;
			}
			if (btnproduit != null)
			{
			    btnproduit.onmouseout = initAutoHide;
			    btnproduit.onmousemove = stopAutoHide;
			}
		}
	}
}
function Hideall (id) 
{
 	stopAutoHide();
 	voirSelect('visible');
	for (var i = 0; i <= 2; i++) 
	{
	    if (id != i) {
		    if (document.getElementById("dropdown" + i) != null) 
		    {
			    document.getElementById("dropdown" + i).style.display = "none";
			    document.getElementById("dropdown" + i).style.height = "1px";
		    }
		    else
		    {
			    var element = document.createElement("div");
			    element.id = "dropdown" + i;
			    var el = document.getElementById("dropdown" + i);
		    }
		}
	}	
	if (document.getElementById("besoin") != null) if (btnbesoin!= null && btnbesoin.offsetWidth < 200) btnbesoin.className = y1;
	if (document.getElementById("produit") != null) if (btnproduit!= null && btnproduit.offsetWidth < 200) btnproduit.className = y2;
}
function initAutoHide() 
{
	clearInterval(pause);
	pause = setInterval("Hideall(-1)", delay);
}
function stopAutoHide() 
{
	clearInterval(pause);
}

function findPosX(obj)
  {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
  }
function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
  }
function ouvrirRollOver(ident)
{
    document.getElementById("e" + ident).style.display = "block";
}
function fermerRollOver(ident)
{
	document.getElementById("e" + ident).style.display = "none";
}
function voirSelect(v){
    if(/MSIE (5|6)/.test(navigator.userAgent)){  
        elem=document.getElementsByTagName('select');
        for(i=0;i<elem.length;i++)elem[i].style.visibility=v;
    }
}
function AlimCode(iValeur)
{
   var txPassword = document.getElementById("codconf");
   
   if (txPassword != null) txPassword.value = txPassword.value + iValeur;
}
function RedirectToDeiPart(url)
{
    RemoveViewState();
    document.Main.action = url;
    /* pour ind */
    document.Main.target = "_top";
    document.Main.submit();
}
function RedirectToDeiPro(url, authcert)
{
    if(/MSIE/.test(navigator.userAgent)) document.execCommand("ClearAuthenticationCache");
    var oItem = document.getElementById("authcert");
    RemoveViewState();
    if (oItem) oItem.value = authcert;
    document.Main.action = url;
    /* pour ind */
    document.Main.target = "_top";
    document.Main.submit();
}
function RedirectToDeiPP(url)
{
    RemoveViewState();
    document.Main.action = url;
    /* pour ind */
    document.Main.target = "_top";
    document.Main.submit();
}
function RedirectToDeiSP(url)
{
    RemoveViewState();
    document.Main.action = url;
    /* pour ind */
    document.Main.target = "_top";
    document.Main.submit();
}
function EffaceCodconf()
{
    document.getElementById("codconf").value = "";
}
function RemoveViewState()
{
    var oViewState = document.getElementById("__VIEWSTATE");
    var oEventTarget = document.getElementById("__EVENTTARGET");
    var oEventArgument = document.getElementById("__EVENTARGUMENT");
    
    if (oViewState && oViewState.parentNode) oViewState.parentNode.removeChild(document.getElementById("__VIEWSTATE"));
    if (oEventTarget && oEventTarget.parentNode) oEventTarget.parentNode.removeChild(document.getElementById("__EVENTTARGET"));    
    if (oEventArgument && oEventArgument.parentNode) oEventArgument.parentNode.removeChild(document.getElementById("__EVENTARGUMENT"));
}
function search_launch(a, f)
{
    var qe = document.getElementById(f); var qs = ""; var i = a.href.indexOf("?");
    if (qe) qs = qe.value;
    a.href = ((i < 0) ? a.href : a.href.split("?")[0]) + "?q=" + qs;
}
function search_enter(a, f, evt)
{ 
    var nbr = (window.event) ? event.keyCode : evt.which; var l;
    if (nbr == 13) { l = document.getElementsByName(a)[0]; evt.returnValue = false; evt.cancel = true; search_launch(l, f); window.setTimeout( 'window.document.location = "' + l.href + '"', 0 ); }
}
function search_clear(f) { var qe = document.getElementById(f); if (qe) qe.value = ""; }

function AddBookmarkLink(title, url) 
{ 
    if ( navigator.appVersion.indexOf( "Mac", 0 ) > 0 ) 
    {
         alert("Pour ajouter cette page \340 vos signets, merci d'utiliser la combinaison de touches \"Pomme + D\".");
         return;
    }
    if ( window.sidebar ) 
    { 
        window.sidebar.addPanel( title, url, "" );
    } 
    else if ( window.external ) 
    { 
        window.external.AddFavorite( url, title );
    }
    else 
    { 
         alert("Pour ajouter cette page \340 vos signets, merci d'utiliser la combinaison de touches \"CTRL + D\"");
    }
}

var innerTimeout;
function setTempTimer()
{
   innerTimeout = setTimeout("Hideall(-1)", delay);
}
function Set_Cookie( name, value, expires, path, domain, secure, bEscape ) 
{
	var data = bEscape ? escape( value ) : value;
	var today = new Date();

	today.setTime( today.getTime() );
	if ( expires ) expires = expires * 1000 * 60 * 60 * 24;
	var expires_date = new Date( today.getTime() + ( expires ) );
	document.cookie = name + "=" + data +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : "" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}
function Get_Cookie( check_name ) 
{
	var sc = document.cookie;
	var i = sc.indexOf( check_name + "=" );
	
	if (i < 0) return null;
	i += check_name.length + 1;
	j = sc.indexOf( ";" , i );
	if ( j < 0 ) j = sc.length;
	return unescape( sc.substring( i, j ) ); 
}
function log_click(s){var log_img = new Image(); log_img.src = s + "&h=" + Math.random(); return true;}
