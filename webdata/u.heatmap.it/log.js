/* Copyright 2011-2015 HeatMap Inc. - All rights reserved */
if(typeof(heatmap)=="undefined"){heatmap={}}if(!heatmap.log){heatmap.log={h:function(c){if(!c){return 0}for(var b=0,d=5381,a=c.length;b<a;b++){d=((d<<5)+d)+c.charCodeAt(b)}return d&4294967295},t:function(h){var d=this,c=h.tagName;if(!d.t.d){d.t.d={BODY:"0",H1:"1",H2:"2",H3:"3",H4:"4",H5:"5",H6:"6",SUB:"_",STRIKE:"-",OUTPUT:":",IFRAME:"!",SMALL:".",FIGCAPTION:"(",FIGURE:")",HEADER:"[",FOOTER:"]",FIELDSET:"{",ASIDE:"}",PATH:"§",ABBR:"@",ARTICLE:"*",I:"/",VIDEO:"#",PROGRESS:"%",METER:"^",SUP:"°",HGROUP:"+",DATALIST:"<",BUTTON:"=",MARK:">",SECTION:"|",AUDIO:"~",TIME:"$",A:"a",AREA:"A",B:"B",BLOCKQUOTE:"b",CENTER:"c",CITE:"C",CANVAS:"D",DIV:"d",EM:"E",EMBED:"e",OBJECT:"e",FONT:"f",FORM:"F",BIG:"G",STRONG:"g",HR:"h",TH:"H",IMG:"i",INPUT:"I",SAMP:"j",TT:"J",KBD:"k",S:"K",LABEL:"l",LI:"L",MAP:"m",SVG:"M",MENU:"n",NAV:"N",OL:"O",OPTION:"o",P:"p",PRE:"P",CODE:"Q",Q:"q",BDI:"R",TR:"r",SELECT:"s",SPAN:"S",TABLE:"T",TD:"t",ADDRESS:"U",UL:"u",U:"v",VAR:"V",DD:"w",DL:"W",DT:"X",TEXTAREA:"x",CAPTION:"Y",LEGEND:"y",DETAILS:"z",SUMMARY:"Z"};var b=d.ext("getCustomTags");if(b){for(var f=0,e=b.length;f<e;f++){var g=b[f][0].toUpperCase(),a=b[f][1].toUpperCase();if(!d.t.d[g]){d.t.d[g]=d.t.d[a]}}}}return(d.t.d[c]||d.t.d[(c||"").toUpperCase()]||"")},p:function(e){var c=this,a=document.body,d="";while(e&&e!=a){d=c.t(e)+d;e=e.parentNode}return d},peq:function(c,d){var a=document.body;while(c&&d&&c!=a&&d!=a){if(c==d){return true}else{if(c.tagName==d.tagName){c=c.parentNode;d=d.parentNode}else{return false}}}return(c==d)},trou:function(d){if(d==document.body){return{t:"0",r:0,o:0,u:0,path:"",url:""}}if(!d){return{t:"",r:0,o:0,u:0,path:"",url:""}}var g=this;var m=g.p(d),b=g.url(d);var a=g.h(m),h=g.h(b),c=1;if(document.getElementsByTagName){var f,e,j,k=document.getElementsByTagName(d.tagName);for(f=0,e=k.length;f<e;f++){j=k[f];if(d==j){break}if(g.peq(d,j)){c++}}}return{t:g.t(d),r:a,o:(c>1?c:0),u:h,path:m,url:b}},css:function(d,c){if(!d||!c){return""}var b=this;if(!b.cssf){var a=document.defaultView;if(d.currentStyle){b.cssf=function(g,f){return g.currentStyle[f]}}else{if(a&&a.getComputedStyle){b.cssf=function(h,g){var f=a.getComputedStyle(h,null);return f?f.getPropertyValue(g):""}}else{b.cssf=function(g,f){return(!g.style?"":g.style[f])}}}}return b.cssf(d,c)},cssi:function(b,a){return parseInt(this.css(b,a),10)||0},pos:function(L){var P=document,S=P.body;if(!L||L==S){return{x:0,y:0}}var V=this,M=0,J=0,y=0,B=0,g=0,r="",O=P.documentElement,R=V.ws(),H="";if(L.tagName=="PATH"&&L.getBoundingClientRect){var U=L.getBoundingClientRect();M=U.left+R.l;J=U.top+R.t}else{if(L.tagName=="AREA"&&L.parentNode){var K=V.pos(L.parentNode);M=K.x;J=K.y;if(L.shape&&L.shape.match(/rect/i)&&L.coords){var w=L.coords.split(",");M+=parseInt(w[0],10);J+=parseInt(w[1],10)}}else{var n=V.nav(),D=n.ff,c=n.wk,E=n.ie,f=D||c,a=V.pos.v;M=L.offsetLeft-L.scrollLeft+(f?V.cssi(L,"border-left-width"):0);r=V.css(L,"position");if(a){H+=L.tagName+" l="+M+" "+(L.className||"")+" "+r+" offsetLeft="+L.offsetLeft+" scrollLeft="+L.scrollLeft+" border-left-width="+(f?V.cssi(L,"border-left-width"):0)+"<br>"}var k=(L.tagName=="A"&&V.css(L,"display")=="inline"&&L.innerHTML.match(/<(img|div|h1|h2|h3)/i));var z,G,u,F,C,m,x;if(k){z=L.style;G=z.display;u=z.width;F=z.height;C=z.margin;m=z.marginTop;x=z.marginBottom;var i=L.parentNode,s=i.align,T=V.css(i,"text-align"),N=V.css(i,"float");var I=V.cssi(L,"padding-top"),Q=V.cssi(L,"padding-bottom");z.marginTop=(-I)+"px";z.marginBottom=(-Q)+"px";z.display="inline-block";if(D){M=L.offsetLeft-L.scrollLeft+(f?V.cssi(L,"border-left-width"):0);if(a){H+=L.tagName+" !FF! l="+M+" "+(L.className||"")+" "+r+" offsetLeft="+L.offsetLeft+" scrollLeft="+L.scrollLeft+" border-left-width="+(f?V.cssi(L,"border-left-width"):0)+"<br>"}}z.width=(s=="right"||s=="center"||T=="right"||T=="center"||N=="right"?"auto":"1px");z.height="auto"}J=L.offsetTop-L.scrollTop+(f?V.cssi(L,"border-top-width"):0);if(a){H+=L.tagName+" t="+J+" "+(L.className||"")+" "+r+" offsetTop="+L.offsetTop+" scrollTop="+L.scrollTop+" border-top-width="+(f?V.cssi(L,"border-top-width"):0)+"<br>"}if(k){z.display=G;z.width=u;z.height=F;z.margin=C;z.marginTop=m;z.marginBottom=x}var j=L;while(L=L.offsetParent){var A=V.css(L,"position");if(V.css(L,"display")=="inline"&&A=="relative"&&r!="absolute"){M=V.cssi(L,"padding-left");J=V.cssi(L,"padding-top");if(a){H+=L.tagName+" RESET l="+M+" "+V.css(L,"display")+" "+A+"<br>"}if(a){H+=L.tagName+" RESET t="+J+" "+V.css(L,"display")+" "+A+"<br>"}}M+=L.offsetLeft+(f&&L!=S?V.cssi(L,"border-left-width"):0);J+=L.offsetTop+(f&&L!=S?V.cssi(L,"border-top-width"):0);if(A=="absolute"&&r!="fixed"){r=A}else{if(A=="relative"&&r=="absolute"){r=A}else{if(A=="fixed"){r=A}}}if(a){H+=L.tagName+" l="+M+" "+(L.className||"")+" "+A+" offsetLeft="+L.offsetLeft+" scrollLeft="+(L!=S?L.scrollLeft:0)+" border-left-width="+(f&&L!=S?V.cssi(L,"border-left-width"):0)+"<br>"}if(a){H+=L.tagName+" t="+J+" "+(L.className||"")+" "+A+" offsetTop="+L.offsetTop+" scrollTop="+(L!=S?L.scrollTop:0)+" border-top-width="+(f&&L!=S?V.cssi(L,"border-top-width"):0)+"<br>"}}while((j=j.parentNode)&&j!=S){M-=j.scrollLeft;J-=j.scrollTop}var h=false;if(r=="fixed"){g=true;y=M;B=J;M+=R.l-(O.clientLeft||S.clientLeft||0)+V.cssi(S,"border-left-width");J+=R.t-(O.clientTop||S.clientTop||0)+V.cssi(S,"border-top-width");if(a){H+="fixed, l+= "+(R.l-(O.clientLeft||S.clientLeft||0)+V.cssi(S,"border-left-width"))+"<br>"}if(a){H+="fixed, t+= "+(R.t-(O.clientTop||S.clientTop||0)+V.cssi(S,"border-top-width"))+"<br>"}}else{if(V.css(S,"position")=="relative"){if(S.getBoundingClientRect){h=true;var q=S.getBoundingClientRect();M+=q.left+R.l;J+=q.top+R.t;if(a){H+="body relative, l+= "+(q.left+R.l)+"<br>"}if(a){H+="body relative, t+= "+(q.top+R.t)+"<br>"}}else{M+=V.cssi(S,"left");J+=V.cssi(S,"top");if(a){H+="body relative, l+= "+V.cssi(S,"left")+"<br>"}if(a){H+="body relative, t+= "+V.cssi(S,"top")+"<br>"}}}}if(O&&!h&&!E&&r!="absolute"){M+=V.cssi(O,"margin-left");J+=V.cssi(O,"margin-top");if(a){H+="html margin, l+= "+V.cssi(O,"margin-left")+"<br>"}if(a){H+="html margin, t+= "+V.cssi(O,"margin-top")+"<br>"}}}}return{x:M,y:J,fixed:g,xf:y,yf:B,v:H}},nav:function(){var b=this;if(typeof(b.nav.v)=="undefined"){var c=navigator.userAgent.toLowerCase(),a={};a={ie:c.match(/(msie|trident)/),wk:c.match(/(chrome|safari|webkit)/)};a.ff=(c.indexOf("firefox")>-1&&!a.ie&&!a.wk);b.nav.v=a}return b.nav.v},ifr:function(b){var v=this;if(!v.ifr.c&&b){v.ifr.c=b}if(!v.ifr.init){v.ifr.init=1}else{return}var m=0,l=0,p=0,n=0,j=0,h=0,g=0,e=function(y){if(v.ifr.v){console.log(y)}},w=function(y){if(!y){y=window.event}return(y?y.target||y.srcElement:0)},c=function(A,z,y){return Math.min(Math.max(z,A),y)},r=function(D){var y=(new Date()).getTime(),z=y-g;if(z<20){return}var A=v.mpos(D),C=A.x,B=A.y;if(!g){m=C;l=B;g=y;return}var F=(C-m)/z,E=(B-l)/z;var H=(F-p)/z,G=(E-n)/z;m=C;l=B;p=(F+4*p)/5;n=(E+4*n)/5;j=(H+2*j)/3;h=(G+2*h)/3;g=y},q=function(B){var y=(new Date()).getTime(),I=y-g+20,G=10;if(I<G||(!p&&!n)){return{x:m,y:l}}var O=m,N=l,Q=p,P=n,L=j,K=h,z,D=0,C=0;var E=B.offsetWidth/2,M=B.offsetHeight/2;var A=v.pos(B),H=A.x+E,F=A.y+M;O=c(O,A.x,H+E);N=c(N,A.y,F+M);if(I>2000){I=2000}for(var J=0;J<=I;J+=G){if(E){D=O<H?Q<0:Q>0;D=D?1-Math.abs(O-H)/E:1;if(D<0){D=0}}if(M){C=N<F?P<0:P>0;C=C?1-Math.abs(N-F)/M:1;if(C<0){C=0}}z=Math.pow(1-J/I,2);L=j*z*D;K=h*z*C;Q=(Q+L*G)*z*D;P=(P+K*G)*z*C;O+=Q*G;N+=P*G}O=c(O,A.x,H+E);N=c(N,A.y,F+M);return{x:O,y:N}};var f=v.nav(),x=document,i=x.body,t=null,a=false,d=null,s=function(z){d=z;var A=q(z),y=v.url(z)||"";a=y.match(/facebook.com\/plugins\/comments.php/gi);if(v.ifr.c){v.ifr.c(z,A)}v.clk({target:z,pageX:Math.round(A.x),pageY:Math.round(A.y)});e("click "+y)},u=false,k=function(C){var z=x.activeElement;if(z&&z.tagName!="IFRAME"&&z!=i){return}var A=x.createElement("INPUT"),B=A.style,y=v.mpos(C);A.type="text";B.position="absolute";B.width=B.height="1px";B.opacity="0.01";B.left=(y.x+20)+"px";B.top=(y.y+20)+"px";i.appendChild(A);A.focus();i.removeChild(A);e("focusFF");u=true},o=function(y){if(f.ie){return}if(f.ff){k(y)}window.focus();e("focus window")};if(f.ie){v.listen("focusin",function(z){var y=w(z);if(y&&y.tagName=="IFRAME"&&y!=d){s(y)}e("focusin "+(y?y.tagName+" "+y.id:""))})}else{if(f.wk||f.ff){v.listen("mouseover",function(z){var y=w(z);if(y&&y.tagName=="IFRAME"){if(y!=t){if((f.ff&&!u)||(d&&y!=d)){o(z)}t=y;d=null}}else{if(t){if(d&&!a){o(z);d=null}t=null}}e("over "+(t?t.tagName+" "+t.id:""))});v.listen("blur",function(z){if(t){var y=w(z);if(y!=t&&y!=d&&d!=t){var A=(t==x.activeElement);if(A||!f.wk){s(t)}}e("blur "+(y?y.tagName+" "+y.id:"")+" "+x.activeElement)}else{e("blur "+x.activeElement)}},window)}}v.listen("mousemove",function(y){r(y)});v.listen("mouseover",function(y){if(w(y).tagName=="IFRAME"){r(y)}})},ws:function(c){if(c===false){delete this.ws.r}var a=this.ws.r;if(a){return a}var g=window,m=document,n=m.body,k=m.documentElement;var o=(g.innerWidth||k.clientWidth||n.clientWidth||0);var j=(g.innerHeight||k.clientHeight||n.clientHeight||0);var f=(g.pageXOffset||k.scrollLeft||n.scrollLeft||0);var p=(g.pageYOffset||k.scrollTop||n.scrollTop||0);a={l:f,t:p,r:f+o,b:p+j,w:o,h:j};if(c===true){this.ws.r=a}return a},ds:function(){var f=document,a=f.body,c=f.documentElement;return{w:Math.max(a.scrollWidth,c.scrollWidth,a.offsetWidth,c.offsetWidth,a.clientWidth,c.clientWidth),h:Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)}},mpos:function(b){if(!b){b=window.event}var a=this.ws();return{x:(b.clientX?b.clientX+a.l:b.pageX),y:(b.clientY?b.clientY+a.t:b.pageY)}},clean:function(a){if(typeof(a)!="string"){try{a=a.toString()}catch(c){return""}}var b=(this.ext("cleanupURL",a)||a);b=b.toLowerCase();b=b.replace(/[\s\n]+/gi,"");b=b.replace(/%20/gi,"");b=b.replace(/\/\*.*?\*\//gi,"");b=b.replace(/^function.+?{/gi,"").replace(/}$/gi,"");b=b.replace(/(\()[+](\d)/gi,"$1$2");b=b.replace(/^(document.|\s*)location.href=['"]([^'"]+)['"].*/gi,"$2");b=b.replace(/dev\./gi,"www.");b=b.replace(/(http.+?\/a\/clic\/[^\d]+\d+)([^\s]*)/gi,"$1");b=b.replace(/^(\/a\/clic\/[^\d]+\d+)([^\s]*)/gi,"$1");b=b.replace(/(http.+?\/clic\/countgo[^\d]+\d+[^\d]+\d+)([^\s]*)/gi,"$1");b=b.replace(/(http.+?\/call\/cliccommand\/\d+)([^\s]*)/gi,"$1");b=b.replace(/(http.+?\/diff\/\d+\/\d+\/.+?)(\?[^\s]*)/gi,"$1");b=b.replace(/(http.+?serving-sys.com\/.+?)(\?[^\s]*)/gi,"$1");b=b.replace(/(http.+?adtech.de\/adlink[\/\d]+AdId=\d+)([^\s]*)/gi,"$1");try{if(b.match(/^http[s]?:\/\/www\.facebook\.com[^?]+plugins/i)){b=b.match(/(^[^?]+|[?&](?:action|href|id|appid|app_id)=[^&]*)/gi).join("")}if(b.match(/^http[s]?:\/\/apis\.google\.com[^?]*\/_\//i)){b=b.match(/(^[^?]+|[?&](?:clientid|origin|url)=[^&]*)/gi).join("")}if(b.match(/^http[s]?:\/\/platform\.twitter\.com[^?]+widgets/i)){b=b.match(/(^[^#]+|[#&](?:url|text)=[^&]*)/gi).join("")}b=b.replace(/(^http[s]?[:\/\.a-z]+wufoo\.com\/embed\/[^\/]+\/)(.*)$/gi,"$1");b=b.replace(/^https/i,"http")}catch(c){}b=b.replace(/[{}"';]/gi,"");b=b.replace(/[\u25C4\u25C0]/gi,"<");b=b.replace(/[\u25BA\u25B6]/gi,">");b=b.replace(/[?&#]$/,"");return b},ext:function(h,f,d,k){if(typeof(heatmap_ext)!="undefined"){var g=heatmap_ext[h],j=typeof(g);if(j=="function"&&g.length<=3){try{return g(f,d,k)}catch(i){return null}}else{if(j!="undefined"){return g}}}},txt:function(c){if(c==document.body){return""}var b=c.tagName;if(b=="IMG"&&c.alt){return c.alt}else{if(b=="INPUT"&&c.placeholder){return c.placeholder}}var a="",d;for(d=c.firstChild;d&&a.length<300;d=d.nextSibling){switch(d.nodeType){case 3:case 4:a+=d.nodeValue;break;case 8:break;case 1:if(d.tagName=="SCRIPT"){break}default:a+=this.txt(d);break}}return a},mix:function(b,e){var a=this;var d=a.clean(b).substr(0,200);if(d&&!d.match(/^http/gi)){var c=a.txt(e);if(c){c=a.clean(c);d=d.substr(0,99);d=c.substr(0,200-d.length)+d}}return d},attr:function(b,a){return b.getAttribute?b.getAttribute(a):""},getLibEvent:function(d,a){var k,i,b,j=this;try{if(window.jQuery){var c=d,f=jQuery,h=f(d);while(c){k=(f._data||f.data)(c,"events");if(k&&k.click){i=f.grep(k.click,c==d?function(l){return !l.selector}:function(l){return h.is(l.selector)});if(i.length>0){if(!a){return true}else{b=f.data(d,"url");if(b){return j.clean(b)}else{b=f.map(i,function(l){return l.handler.toString()}).join();return j.mix(b,d)}}}}c=c.parentNode}}if(window.MooTools){k=(d.retrieve?d.retrieve("events"):d.$events);if(k&&k.click){if(!a){return true}else{b=Array.map(k.click.keys,function(e){return e.toString()}).join();return j.mix(b,d)}}}if(window.Prototype){k=(Event&&Event.cache&&Event.cache[d._prototypeUID||d._eventId||(d._prototypeEventID||[])[0]]);if(k&&k.click){if(!a){return true}else{b=k.click.map(function(l){return l.handler.toString()}).join();return j.mix(b,d)}}k=d.getStorage&&d.getStorage().get("prototype_event_registry");if(k&&k.get("click")){if(!a){return true}else{return j.clean(j.txt(d)).substr(0,200)}}}if(window.angular){b=j.attr(d,"ui-sref");if(!a){return !!b}else{return j.clean(b)}}}catch(g){}},fn2str:function(f,c){var b,a=this;try{b=f["on"+c];if(b){return b.toString()}if(b=a.attr(f,"ng-"+c)){return b.toString()}}catch(d){}},isActive:function(c){if(!c||c==document.body){return true}var a=this;if(a.fn2str(c,"mousedown")||c.hm_oldmousedown){return true}var b=c.tagName;if(a.fn2str(c,"click")){return true}if(b=="A"&&c.href){return true}if(b=="OBJECT"||b=="EMBED"){return true}if(b=="INPUT"||b=="SELECT"||b=="TEXTAREA"||b=="BUTTON"){return true}if(b=="AREA"&&c.href){return true}if(b=="IFRAME"){return true}if(a.getLibEvent(c)){return true}if(a.ext("isActive",c)){return true}return false},url:function(b){if(b==document.body){return""}var k=this,l="",f=b.tagName,j;if(j=k.fn2str(b,"mousedown")){l=k.mix(j,b);if(!b.hm_oldmousedown){b.hm_oldmousedown=l}}else{if(b.hm_oldmousedown){l=b.hm_oldmousedown}else{if(j=k.fn2str(b,"click")){l=k.mix(k.clean(j)+(b.href?k.clean(b.href):""),b)}else{if(f=="A"&&b.href){var h=k.attr(b,"href")||b.href;if((h=="#"||h=="")&&k.getLibEvent(b)){l=k.getLibEvent(b,true)}else{l=k.clean(b.href)}}else{if(f=="OBJECT"||f=="EMBED"){var a=k.attr(b,"src")||b.src||k.attr(b,"data")||b.data;if(a){l=k.clean(a)}else{for(var i=b.firstChild;i;i=i.nextSibling){if(i.name&&i.name.toLowerCase()=="movie"){l=k.clean(i.value)}}}}else{if(f=="INPUT"||f=="SELECT"||f=="TEXTAREA"||f=="BUTTON"){var m="",d=(b.name||"");if(f=="INPUT"){m=(b.type?b.type:"")}if(d||m){l=k.clean(d+m)}if(!l&&k.getLibEvent(b)){l=k.getLibEvent(b,true)}else{l="untitled"}}else{if(f=="AREA"&&b.href){l=k.clean(b.href)}else{if(f=="IFRAME"){try{l=k.clean(b.src)}catch(g){}if(!l){l="iframe"}}else{if(k.getLibEvent(b)){l=k.clean(k.ext("getURL",b)||"");if(!l){l=k.getLibEvent(b,true)}}else{if(k.ext("isActive",b)){l=k.clean(k.ext("getURL",b)||"")}else{if(b.id){l=k.clean(b.id)}}}}}}}}}}}return(l?l.replace(/[\s\n]+/gi,"").substr(0,200):"")},curl:function(w,f){var y=this,h=(y.ext("getCurrentURL")||window.location.href);if(f){h=f}h=h.replace(/[\s\n]+/gi,"");h=h.replace(/[?&#]$/,"");h=h.replace(/(http[^#]+)(#heatmap.*)/gi,"$1");var q="",r="",g="",c="",x;try{if(h.match(/\?/)){x=document.createElement("a");x.href=h;var j=x.search.substr(1);var z=j.split("&");z.sort();var p=["utm_source","utm_medium","utm_term","utm_campaign","utm_content","gclid"];var l=["fus","fum","fut","fuc","fuo"];var o=z.length,n=l.length;var b=(Array.prototype.indexOf?function(a,e){return a.indexOf(e)}:function(a,B){for(var t=0,e=a.length;t<e;t++){if(a[t]===B){return t}}return -1});for(var s=0;s<o;s++){var v=z[s].split("=");var d=b(p,v[0].toLowerCase());if(d>=0){if(w&&d<n){q+="&"+l[d]+"="+v[1]}}else{r+=(r?"&":"")+z[s]}}x.search=(r?"?"+r:"");h=x.href;if(!r){h=h.replace(/(?:[?&])(#|$)/,"$1")}}if(w){g=document.referrer;if(g){x=document.createElement("a");x.href=g;g=x.hostname;q+="&fr="+encodeURIComponent(g)}var A=y.ext("getTemplates",h),k=(A?A.length:0),m;if(k){for(var s=0;s<k;s++){m=A[s];if(m&&m.name&&(m.value||m.on)){c+=(c?".":"")+y.h(m.name)}}}}}catch(u){}return w?{url:h,filter:q,referrer:g,templates:c||"."}:h},query:function(d){var b=this,c="",a="";for(a in d){if(d.hasOwnProperty&&!d.hasOwnProperty(a)){continue}if(d[a]===""){continue}c+=(c?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(typeof(d[a])=="object"?b.query(d[a]):d[a])}return c},conv:function(b,e){var g=this,a=0,l=g.ext("getConversions",b,e),j={},c="",h;if(l){if(l.length){for(var d=0,f=l.length;d<f;d++){c=l[d].name;h=parseFloat(l[d].value);if(!isNaN(h)&&h){j[c]=h;a++}}}else{for(c in l){if(l.hasOwnProperty&&!l.hasOwnProperty(c)){continue}h=parseFloat(l[c]);if(!isNaN(h)&&h){j[c]=h;a++}}}}return(a?j:"")},sid:function(n){var o=this,a=o.ext("getSessionName"),k;if(!a){return""}a=a.replace(/[^a-zA-Z_]/g,"");if(!o.sid.id){k=document.cookie.match(new RegExp(a+"[^;]*=[^;]*\\d+_\\d+[^;]*","gi"));if(k){var f=k[0].match(/\d+/gi);o.sid.id=f[0];o.sid.n=f[1]}}if(!o.sid.id){o.sid.id=1+Math.floor(Math.random()*2147483646);o.sid.n=0;n=true}if(n){o.sid.n++;k=o.sid.id+"_"+o.sid.n;var l=new RegExp(a+"[^;]*=[^;]*"+k,"gi");var e=new Date();e.setTime(e.getTime()+1800000);var b=window.location.hostname.split(".").reverse(),j,h;for(j=b[0],h=1;h<b.length;h++){try{j=b[h]+"."+j;document.cookie=a+"="+k+"; expires="+e.toGMTString()+"; path=/; domain="+j;if(document.cookie.match(l)){break}}catch(g){}}}return o.sid.id+"_"+o.sid.n},isDisabled:function(c){var a=this;if(a.disabled){return true}var b=a.ext("recordDisabled")||a.ext("logDisabled");return(b=="pv"?b==c:b)},pv:function(d){var b=this;var a=b.curl(true);if(b.isDisabled("pv")){b.ourl=a}if(!b.ourl||b.ourl.url!=a.url){b.ourl=a;b.lastEvent=null;b.lastTime=0;b.lastTarget=null;b.logs=[];b.logs[0]={i1:new Image()};var g=b.ext("getTitle")||document.title,f={pid:heatmap.property_id||0,u:a.url,tpl:a.templates,sid:b.sid(true),conv:b.conv(a.url),pw:b.ext("getAuthor")||"",pt:(g?g.substr(0,200):""),debug:(b.debug?1:""),t:Math.floor(999999*Math.random())};b.logs[0].i1.src="//"+heatmap.dom_api+"/log/pv?"+b.query(f)+a.filter}if(!d){d=window.event}if(d){var c=(d.target||d.srcElement);if(c){c=b.target(c);if(c&&c.onmousedown&&!c.hm_oldmousedown){b.url(c)}}}},clk:function(k){var o=this;if(o.isDisabled()){return}if(!o.ourl){o.pv()}if(!k){k=window.event}if(!k||k==o.lastEvent){return}o.lastEvent=k;var p=(k.target||k.srcElement);if(!p){return}var b=(new Date()).getTime();if(o.lastTarget==p&&(b-(o.lastTime||0))<500){return}o.lastTarget=p;o.lastTime=b;var d=o.mpos(k),m=d.x,l=d.y;var f=o.target(p);if(f==document.body){var j=o.ws();if(Math.abs(j.r-m)<20||Math.abs(j.b-l)<20){return}var i=o.ext("align");if(!i||i=="center"){l=-l;m-=Math.floor(Math.max(j.w,o.ds().w)/2)}}var h=o.pos(f);var n=o.trou(f);var a=(new Date()).getTime();if((o.maxTime||-1)<(a-b)){o.maxTime=(a-b)}if(n.t){var g=o.logs.length;var c={pid:heatmap.property_id||0,u:o.ourl.url,sid:o.sid(),dpath:n.path,durl:n.url,dt:n.t,dr:n.r,"do":n.o,du:n.u,mx:m-h.x,my:l-h.y,mn:g,mt:o.maxTime,conv:o.conv(o.ourl.url,f),debug:(o.debug?1:""),t:Math.floor(999999*Math.random())};o.logs[g]={i1:new Image()};o.logs[g].i1.src="//"+heatmap.dom_api+"/log/clk?"+o.query(c)+o.ourl.filter}else{}if(!o.ourl||o.ourl.url!=o.curl()){o.pv()}},target:function(d){var b=this,c=d,a=document.body;while(c&&!b.isActive(c)){c=c.parentNode}if(c==a){c=d;while(c&&!c.id&&c!=a){c=c.parentNode}}return c},cook:function(i){var b=this,a=(window.location.hash||""),e=b.h(a),g=17947688,d=1229391198;if(i||b.cook.h!=e){b.cook.h=e;if(i||e==g||e==d){b.cook.v=Math.round(((new Date()).getTime()-(new Date("01/01/2014")).getTime())/1000);if(e==d){b.cook.s=a.substr(9)}}else{var f=document.cookie.match(/hmuicdmm[^;]*=[^;]*start\d+[^;]*/gi);if(f){b.cook.v=f[0].match(/\d+/gi)[0];b.cook.s=f[0].match(/[^\d]+$/gi,"");b.cook.s=(b.cook.s?b.cook.s[0]:"")}}}return(b.cook.v?{v:b.cook.v,d3v:b.cook.s}:null)},keydown:function(c){var b=this;if(b.ext("altShiftH")===false){return}if(!c){c=window.event}if(!c){return}var a=String.fromCharCode(c.keyCode);if(a){a=(c.altKey?"ALT-":"")+(c.ctrlKey?"CTRL-":"")+(c.metaKey?"META-":"")+(c.shiftKey?"SHIFT-":"")+a;if(a&&b.h(a)==1575243174){b.startui()}}},load:function(a){window.setTimeout(function(){var c=document.createElement("script");c.type="text/javascript";c.async=true;c.src=a;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)},1)},startui:function(){var a=this;if(heatmap.sidebar){heatmap.sidebar.toggleAll()}else{if(!a.disabled){var b=a.cook();if(!b){b=a.cook(1)}a.load("//"+(b.d3v||"u.heatmap.it/ui.js")+"?v="+b.v)}}a.disabled=true},listen:function(c,b,d){var a=function(f,e,h){try{return b(f,e,h)}catch(g){}};if(!d){d=document}if(d.addEventListener){d.addEventListener(c,a,true)}else{if(d.attachEvent){d.attachEvent("on"+c,a)}}},conf:function(){var a=this,b=a.cook();if(a.confed){return}else{a.confed=true}if(b&&b.d3v){a.startui()}else{a.load("//u.heatmap.it/conf/"+window.location.hostname+".js")}a.listen("keydown",function(c){return a.keydown(c)})},start:function(a,d){var c=this;heatmap.dom_api=(d||"eu1")+".heatmap.it";if(!a){return}else{heatmap.property_id=a}if(c.started){return}else{c.started=true}if(c.cook()){c.startui()}else{c.listen("mouseover",function(f){return c.pv(f)});c.listen("mousedown",function(f){return c.clk(f)});c.ifr();var b=c.curl().match(/^https?:\/\/[^\/]+(aufeminin|enfemenino|alfemminile|gofeminin|sofeminine|wewomen)/i);if(!b){c.pv()}}}}}heatmap.log.conf();