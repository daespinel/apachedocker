var sas=sas||{};if(!sas.Browser){throw"sas.Browser object required"}sas.DOM=sas.DOM||{};(function(){if(!sas.DOM.rev||sas.DOM.rev<20110317){document.window=window;sas.DOM.rev=20110317;sas.createCSSElt=function(a){var b=document.createElement("style");b.setAttribute("type","text/css");if(b.styleSheet){b.styleSheet.cssText=a}else{var c=document.createTextNode(a);b.appendChild(c)}return b};sas.createBackgroundCSSElt=function(a){if(a.imageUrl!==undefined&&a.imageUrl!=""){a.image='url("'+a.imageUrl+'")'}else{a.image=""}if(a.color===undefined){a.color=""}if(a.repeat===undefined){a.repeat=""}if(a.position===undefined){a.position={top:"",left:""}}if(a.attachment===undefined){a.attachment=""}var b=(a.image==""&&a.color=="")?"":"body {background: "+a.color+" "+a.image+" "+a.repeat+" "+a.position.top+"  "+a.position.left+" "+a.attachment+";}";return sas.createCSSElt(b)};sas.createScriptElt=function(a){var b=document.createElement("script");b.type="text/javascript";b.innerHTML=a.src;return b};sas.createImgHTML=function(a){var b=(a.clickUrl!==undefined)&&a.clickUrl!="";var d=(a.clickTarget!==undefined)&&a.clickTarget!="";var e=alt=size=target="";if(d){target=' target="'+a.clickTarget+'"'}if(b){e+='<a href="'+a.clickUrl+'"'+target+">"}if(a.altText!==undefined){alt=' alt="'+a.altText+'"'}if(a.width!==undefined){size+=' width="'+a.width+'"'}if(a.height!==undefined){size+=' height="'+a.height+'"'}e+='<img id="'+a.id+'" src="'+a.url+'"'+alt+size+'border="0"/>';if(b){e+="</a>"}return e};sas.createImgElt=function(a){var b=document.createElement("div");b.id=a.id+"Div";b.innerHTML=sas.createImgHTML(a);return b};sas.createSwfHTML=function(a){if(a.wMode===undefined){a.wMode="window"}if(a.flashVars===undefined){a.flashVars=""}var f={height:a.height,width:a.width};var e={quality:"high",allowScriptAccess:"always",wMode:a.wMode,swLiveConnect:true,flashVars:a.flashVars};if(sas.Browser.ie){f.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=a.url}else{f.type="application/x-shockwave-flash"}f.data=a.url;var b='<object id="'+a.id+'Object"';for(var g in f){b+=" "+g+'="'+f[g]+'"'}b+=">";for(var d in e){if(e[d]){b+='<param name="'+d+'" value="'+e[d]+'" />'}}b+="</object>";return b};sas.createSwfElt=function(a){var b=document.createElement("div");b.id=a.id+"Div";b.innerHTML=sas.createSwfHTML(a);return b}}})();