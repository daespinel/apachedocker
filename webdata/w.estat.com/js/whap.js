function eStat_Whap(s,b,c){var _EW_DOM="w.estat.com";var _EW_VER="0.20";var _EW_ADR=_EW_DOM+"/m/web/";var _EW="ESTAT WHAP";var _dbg=0;var _s="";var _b="";var _c="";var _TYP="whap";var _flag=0;function iFrameProcess(){try{if(location.href!=top.location.href){_flag|=0x01;if(window.top.location.host==undefined){_flag|=0x02;}}}catch(err){console.log(err.message);}};iFrameProcess();function detectString(){try{var u=location.href;var lSusp=["advalidation","ad-validation","adsite-under","site-under","siteunder","adsite-unders","site-unders","siteunders","advalidations","ad-validations"];for(var i=0;i<lSusp.length;i++){if(u.indexOf(lSusp[i])!=-1){_flag|=0x04;break;}}}catch(err){console.log(err.message);}};detectString();function uE(s){return encodeURIComponent(s);};function strK(s){if(typeof(s)!='string')return(0);if(s=='')return(0);if(s=='null')return(0);if(s=='undefined')return(0);return(1);};function gR(){var r="";try{r=(top!=null&&top.location!=null&&typeof(top.location.href)=="string")?top.document.referrer:document.referrer;if(!r||r==""){if(window.opener&&window.opener.location)r=window.opener.location.toString();}}catch(e){};return uE(r);};function gP(){if(document.location.protocol.substring(0,5)=='https')return "https://";return "https://";};function iLChk(i,tries){if(i.complete==true)return;if(tries<=0){return;}window.setTimeout(function(){iLChk(i,tries-1);},500);};function snd(h){var i=new Image(1,1);i.name="0";i.src=h;iLChk(i,10);};function debug(l,s){if(!_dbg)return;switch(l){case 0:try{console.log(_EW+" "+s);}catch(e){};break;case 1:try{console.warn(_EW+" "+s);}catch(e){};break;case 2:try{console.error(_EW+" "+s);}catch(e){};break;default:break;}};this.serial=function(s){if(strK(s))_s=s;else debug(2,"Bad serial:"+s);};this.brand=function(s){if(strK(s))_b=s;else debug(2,"Bad brand:"+s);};this.channel=function(s){if(strK(s))_c=s;else debug(2,"Bad channel:"+s);};this.send=function(){if(strK(_s)){var h=gP()+_EW_ADR+_s+"?"+"n="+Math.round(Math.random()*1000000000)+"&type="+_TYP+(strK(_b)?("&brd="+uE(_b)):"")+(strK(_c)?("&chn="+uE(_c)):"")+"&r="+gR()+"&v="+_EW_VER;if(_flag!=0){h=h+"&fl="+_flag;}snd(h);debug(0,"hit="+h);}else debug(2,"Bad serial:"+_s);};};var eStatWhap=new eStat_Whap();if(typeof(_eStat_Whap_loaded)!="undefined")_eStat_Whap_loaded=1;if(typeof(_eStat_Whap_loaded_func)=="function")_eStat_Whap_loaded_func();