function APow(action){
	var wf = "";
	wf = wf + "resizable=" + (action[5] ? "yes" : "no");
	wf = wf + ",scrollbars=" + (action[6] ? "yes" : "no");
	wf = wf + ",menubar=" + (action[7] ? "yes" : "no");
	wf = wf + ",toolbar=" + (action[8] ? "yes" : "no");
	wf = wf + ",directories=" + (action[9] ? "yes" : "no");
	wf = wf + ",location=" + (action[10] ? "yes" : "no");
	wf = wf + ",status=" + (action[11] ? "yes" : "no");
 	
	thewinwidth=action[3];
	thewinheight=action[4];
	if (action[16]) {
		thewinleft=(screen.width-thewinwidth)/2;
  		thewintop=((screen.height-thewinheight)/2);
	} else {
		thewinleft=action[14];
  		thewintop=action[15]+6;
	}
	
	var apBrowType = "";
	if (navigator.platform.indexOf('Mac') > -1) { //mac
    	if (navigator.appName.indexOf('Microsoft') > -1) { //explorer
			apBrowType = "mie";
		} else { //netscape
			apBrowType = "mns";
		}
	} else { //windows et unix
		if (navigator.appName.indexOf('Microsoft') > -1) { //explorer
			apBrowType = "wie";
		} else { //netscape
			apBrowType = "wns";
		}
	}
  
	switch (apBrowType){
		case 'mns':
			thewinleft=(action[16])? thewinleft+6 : thewinleft+screenX;
			thewintop=(action[16])? thewintop : thewintop+screenY;
			thewintop = (action[16]) ? thewintop-(action[8] ? 46 : 0)-(action[9] ? 24 : 0)-(action[10] ? 24 : 0)+20 : thewintop ;
		break;
		case 'wns':
			thewinleft=(action[16])? thewinleft : thewinleft+screenX;
			thewintop=(action[16])? thewintop : thewintop+screenY;
			thewintop = (action[16]) ? thewintop-(action[8] ? 46 : 0)-(action[9] ? 24 : 0)-(action[10] ? 24 : 0)-20 : thewintop ;
			thewinheight= thewinheight+20;
		break;
    	case 'mie':
			thewinheight=thewinheight;
			thewintop = (action[16]) ? thewintop-(action[8] ? 42 : 0)-(action[10] ? 24 : 0) : thewintop ;
		break;
    	case 'wie':
			thewinheight=thewinheight+20;
			thewintop = (action[16]) ? thewintop-(action[8] ? 42 : 0)-(action[10] ? 24 : 0)-20 : thewintop ;
		break;
		default:
		break; 
		}
   
	if (thewinleft<0) {thewinleft=0;}
	if ((thewinleft+thewinwidth)>screen.width) { thewinleft=screen.width-(thewinwidth+22);}
	if ((thewintop+thewinheight)>screen.height) { thewintop=screen.height-(thewinheight+(action[11] ? 90 : 60));}
	wf = wf + ",width=" + thewinwidth;
	wf = wf + ",height=" +thewinheight;
	if (action[12]||action[16]) {wf = wf + ",top="+thewintop+",screenX="+thewinleft;}
	if (action[13]||action[16]) {wf = wf + ",left="+thewinleft+",screenY="+thewintop;}
	action[2] = window.open(action[1],action[2],wf);
	if (action[2].focus()) action[2].focus();
	if (apBrowType=='mie') { action[2].moveTo(thewinleft+6,thewintop+22); }
}


function InformationsLegales(dest){window.open(dest,'InformationsLegales','toolbar=0,location=0,directories=0,status=0,scrollbars=1,resizable=1,copyhistory=0,menuBar=0');}
function AideConnexion(){window.open('http://www.particuliers.creditlyonnais.com/clicla/clicla_aideconnex.htm','AideConnexion','toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,copyhistory=0,menuBar=0');}