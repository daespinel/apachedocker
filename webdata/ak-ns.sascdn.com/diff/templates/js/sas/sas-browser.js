var sas=sas||{};sas.Browser=sas.Browser||{};(function(){if(!sas.Browser.rev||sas.Browser.rev<20110214){document.window=window;var f=navigator.userAgent.toLowerCase(),e=navigator.platform.toLowerCase(),g=f.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown","0"],c=g[1]=="ie"&&document.documentMode;sas.Browser.rev=20110214;sas.Browser.name=(g[1]=="version")?g[3]:g[1];sas.Browser.version=c||parseFloat((g[1]=="opera"&&g[4])?g[4]:g[2]);sas.Browser.Platform={name:f.match(/ip(?:ad|od|hone)/)?"ios":(f.match(/(?:webos|android)/)||e.match(/mac|win|linux/)||["other"])[0]};sas.Browser.Flash={};sas.Browser.mode=document.compatMode=="CSS1Compat"?"standard":"quirks";for(var b=0;b<20;b++){var d=(b==0)?"":b;var a=sas.Browser;a["opera"+d]=a["ie"+d]=a["firefox"+d]=a["chrome"+d]=a["safari"+d]=false}sas.Browser[sas.Browser.name]=true;sas.Browser[sas.Browser.name+parseInt(sas.Browser.version,10)]=true;sas.Browser.Platform[sas.Browser.Platform.name]=true;sas.Browser.Flash={version:parseInt((function(){var j={};j.gfp=function(){var m=[0,0,0];if(navigator.plugins&&navigator.mimeTypes.length){var n=navigator.plugins["Shockwave Flash"];if(n){if(n.version){return n.version.split(".")}else{if(n.description){return n.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")}}}}else{var k;try{k=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(l){try{var k=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");m=[6,0,21];k.AllowScriptAccess="always"}catch(l){if(m[0]==6){return m}}try{k=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}}if(k!=null){return k.GetVariable("$version").split(" ")[1].split(",")}}return m};j.v=j.gfp();var h=(j.v.length>0)?j.v[0]:0;var i=(j.v.length>1)?j.v[1]:0;if(sas.Browser.name=="firefox"&&(h<18||h==18&&j.v.length>3&&j.v[3]<209)){return 0}else{if(h==10&&i>1){return i==2?11:12}else{if(h==11&&i<10){return h+i+2}else{if(h>11&&h<18){return h+11}else{if(h>=18){return 29}else{return h}}}}}})())}}})();