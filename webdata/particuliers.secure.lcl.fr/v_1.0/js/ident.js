var module= null; // Le resultat de notre detection


/* --------------------------------------------------------------------
 * IDENTIFICATION DE LA PLATEFORME D'EXECUTION
 * la variable globale module vaut suivant la configuration du navigateur
 *	- "ActiveX"
 *	- "AppletCab"
 *	- "AppletJar"
 *	- "Unsupported"
 */


jsident();
//insertDetectApplet(); 		    // Insertion d'un applet pour la detection
//window.setTimeout('jsident()',100); // La detection ï¿½ proprement parler

//window.onerror = restartsident;	    // Le bouclage

var retries=3;
var redirected = 0;

function insertDetectApplet() {
	if( navigator.javaEnabled() != true ) {
            retries=0;
        }
        else {
	ua = navigator.userAgent;
	ieindex = ua.indexOf("MSIE");
	opindex = ua.indexOf("Opera");
/*
		if (ieindex>-1 && opindex<0) {
			document.write("<APPLET code=\"ident\" id=\"ident\" archive=\"ident.jar\" WIDTH=\"1\" HEIGHT=\"1\" MAYSCRIPT>");
			document.write("<PARAM NAME=\"cabbase\" VALUE=\"ident.cab\">");
			document.write("<PARAM NAME=\"ie\" VALUE=\"true\">");
			document.write("</APPLET>");
		}
		else {
			document.write("<APPLET code=\"ident\" name=\"ident\" archive=\"ident.jar\" WIDTH=\"1\" HEIGHT=\"1\" MAYSCRIPT>");
			document.write("</APPLET>");
		}
		*/
	}
}


function notifyPlatform(foundModule)
{
	module=foundModule;
}

		
function redirectJar()
{
if (redirected==0)
{
	redirected = 1;
	notifyPlatform("AppletJar");
}
return;
}
		
function jsident() {
	retries--;
	if (redirected==1) {
		return false;
	}

	pf = navigator.platform;
	ua = navigator.userAgent;
	ieindex = ua.indexOf("MSIE");
	opindex = ua.indexOf("Opera");
	ffindex = ua.indexOf("Firefox");
	gkindex = ua.indexOf("Gecko");

	if (pf.indexOf("Win32")<0) {
		notifyPlatform("Unsupported");
		return false;
	}
                
	if (ieindex<0 && opindex<0 && gkindex<0) {
		notifyPlatform("Unsupported");
		return false;
	}
                
	if (retries<0) {
		if (ieindex>-1 && opindex<0) {                    
			notifyPlatform("ActiveX");
		}
		else  {
			notifyPlatform("Unsupported");
		}
		return false;        
	}

                
	if (ua.substr(ffindex+8,1)<1) {
		notifyPlatform("Unsupported");
		return false;
	}

	if (redirected==1) {
		return false;
	}
                
	if (ieindex>-1 && opindex<0) {
		/* app = document.getElementById('ident');
		if ( app ) { 
			vendeur = app.JavaVendor();
                        if (vendeur) {
                            if (vendeur.indexOf("Microsoft")>-1) {
                                notifyPlatform("AppletCab");
                                return false;
                            }
                            
                            if (vendeur.indexOf("Sun")>-1) {
                                return redirectJar();
                            }

                            notifyPlatform("ActiveX");
                            return false;
                        }
		} */
		notifyPlatform("ActiveX");
                return false;
	}
	else {
		/* app = document.getElementById('ident');
		if ( app != null ) {
                        vendeur = app.JavaVendor();
                        if (vendeur) {
                            if (vendeur.indexOf("Sun")>-1) {
                                return redirectJar();
                            }
                            notifyPlatform("Unsupported");
                            return false;
                        }
		} */
		
		notifyPlatform("Unsupported");
                return false;
                
	}                

	//restartsident();
}
                  
function restartsident() {
	window.setTimeout('jsident()',300);
	return true;
}
