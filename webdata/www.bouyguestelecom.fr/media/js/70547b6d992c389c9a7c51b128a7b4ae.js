/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});

/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});
/*!
 * angular-ui-mask
 * https://github.com/angular-ui/ui-mask
 * Version: 1.4.7 - 2015-10-05T04:13:27.168Z
 * License: MIT
 */
!function(){"use strict";angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},clearOnBlur:!0,eventsToHandle:["input","keyup","click","focus"]}).directive("uiMask",["uiMaskConfig",function(e){function n(e){return e===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(e.type||e.href||~e.tabIndex)}return{priority:100,require:"ngModel",restrict:"A",compile:function(){var t=e;return function(e,r,i,u){function a(e){return angular.isDefined(e)?($(e),C?(f(),h(),!0):c()):c()}function o(e){e&&(_=e,C&&r.val(v(p(r.val()))))}function l(e){return C?(P=p(e||""),q=g(P),u.$setValidity("mask",q),q&&P.length?v(P):void 0):e}function s(e){return C?(P=p(e||""),q=g(P),u.$viewValue=P.length?v(P):"",u.$setValidity("mask",q),""===P&&i.required&&u.$setValidity("required",!u.$error.required),q?N?u.$viewValue:P:void 0):e}function c(){return C=!1,d(),angular.isDefined(I)?r.attr("placeholder",I):r.removeAttr("placeholder"),angular.isDefined(K)?r.attr("maxlength",K):r.removeAttr("maxlength"),r.val(u.$modelValue),u.$viewValue=u.$modelValue,!1}function f(){P=H=p(u.$modelValue||""),T=z=v(P),q=g(P),i.maxlength&&r.attr("maxlength",2*D[D.length-1]),I||r.attr("placeholder",_);for(var e=u.$modelValue,n=u.$formatters.length;n--;)e=u.$formatters[n](e);u.$viewValue=e||"",u.$render()}function h(){F||(r.bind("blur",y),r.bind("mousedown mouseup",k),r.bind(W.eventsToHandle.join(" "),w),r.bind("paste",V),F=!0)}function d(){F&&(r.unbind("blur",y),r.unbind("mousedown",k),r.unbind("mouseup",k),r.unbind("input",w),r.unbind("keyup",w),r.unbind("click",w),r.unbind("focus",w),r.unbind("paste",V),F=!1)}function g(e){return e.length?e.length>=j:!0}function p(e){var n="",t=E.slice();return e=e.toString(),angular.forEach(R,function(n){e=e.replace(n,"")}),angular.forEach(e.split(""),function(e){t.length&&t[0].test(e)&&(n+=e,t.shift())}),n}function v(e){var n="",t=D.slice();return angular.forEach(_.split(""),function(r,i){e.length&&i===t[0]?(n+=e.charAt(0)||"_",e=e.substr(1),t.shift()):n+=r}),n}function m(e){var n=angular.isDefined(i.uiMaskPlaceholder)?i.uiMaskPlaceholder:i.placeholder;return"undefined"!=typeof n&&n[e]?n[e]:"_"}function b(){return _.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function $(e){var n=0;if(D=[],E=[],_="","string"==typeof e){j=0;var t=!1,r=0,i=e.split("");angular.forEach(i,function(e,i){W.maskDefinitions[e]?(D.push(n),_+=m(i-r),E.push(W.maskDefinitions[e]),n++,t||j++):"?"===e?(t=!0,r++):(_+=e,n++)})}D.push(D.slice().pop()+1),R=b(),C=D.length>1?!0:!1}function y(){W.clearOnBlur&&(Z=0,B=0,q&&0!==P.length||(T="",r.val(""),e.$apply(function(){u.$setViewValue("")})))}function k(e){"mousedown"===e.type?r.bind("mouseout",x):r.unbind("mouseout",x)}function x(){B=S(this),r.unbind("mouseout",x)}function V(){A(this,r.val().length)}function w(n){n=n||{};var t=n.which,i=n.type;if(16!==t&&91!==t){var a,o=r.val(),l=z,s=p(o),c=H,f=M(this)||0,h=Z||0,d=f-h,g=D[0],m=D[s.length]||D.slice().shift(),b=B||0,$=S(this)>0,y=b>0,k=o.length>l.length||b&&o.length>l.length-b,x=o.length<l.length||b&&o.length===l.length-b,V=t>=37&&40>=t&&n.shiftKey,w=37===t,E=8===t||"keyup"!==i&&x&&-1===d,_=46===t||"keyup"!==i&&x&&0===d&&!y,R=(w||E||"click"===i)&&f>g;if(B=S(this),!V&&(!$||"click"!==i&&"keyup"!==i)){if("input"===i&&x&&!y&&s===c){for(;E&&f>g&&!O(f);)f--;for(;_&&m>f&&-1===D.indexOf(f);)f++;var j=D.indexOf(f);s=s.substring(0,j)+s.substring(j+1)}for(a=v(s),z=a,H=s,r.val(a),e.$apply(function(){u.$setViewValue(s)}),k&&g>=f&&(f=g+1),R&&f--,f=f>m?m:g>f?g:f;!O(f)&&f>g&&m>f;)f+=R?-1:1;(R&&m>f||k&&!O(h))&&f++,Z=f,A(this,f)}}}function O(e){return D.indexOf(e)>-1}function M(e){if(!e)return 0;if(void 0!==e.selectionStart)return e.selectionStart;if(document.selection&&n(r[0])){e.focus();var t=document.selection.createRange();return t.moveStart("character",e.value?-e.value.length:0),t.text.length}return 0}function A(e,t){if(!e)return 0;if(0!==e.offsetWidth&&0!==e.offsetHeight)if(e.setSelectionRange)n(r[0])&&(e.focus(),e.setSelectionRange(t,t));else if(e.createTextRange){var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",t),i.moveStart("character",t),i.select()}}function S(e){return e?void 0!==e.selectionStart?e.selectionEnd-e.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var D,E,_,R,j,P,T,q,z,H,Z,B,C=!1,F=!1,I=i.placeholder,K=i.maxlength,N=!1;i.$observe("modelViewValue",function(e){"true"===e&&(N=!0)});var W={};i.uiOptions?(W=e.$eval("["+i.uiOptions+"]"),angular.isObject(W[0])&&(W=function(e,n){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0===n[t]?n[t]=angular.copy(e[t]):angular.isObject(n[t])&&angular.extend(n[t],e[t]));return n}(t,W[0]))):W=t,i.$observe("uiMask",a),angular.isDefined(i.uiMaskPlaceholder)?i.$observe("uiMaskPlaceholder",o):i.$observe("placeholder",o),u.$formatters.push(l),u.$parsers.push(s),r.bind("mousedown mouseup",k),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var n=Object(this),t=n.length>>>0;if(0===t)return-1;var r=0;if(arguments.length>1&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=t)return-1;for(var i=r>=0?r:Math.max(t-Math.abs(r),0);t>i;i++)if(i in n&&n[i]===e)return i;return-1})}}}}])}();
/*!
 * angular-ui-scrollpoint
 * https://github.com/angular-ui/ui-scrollpoint
 * Version: 1.0.0 - 2015-07-03T02:58:59.685Z
 * License: MIT
 */


(function () { 
'use strict';
/**
 * Adds a 'ui-scrollpoint' class to the element when the page scrolls past it's position.
 * @param [offset] {int} optional Y-offset to override the detected offset.
 *   Takes 300 (absolute) or -300 or +300 (relative to detected)
 */

 /* custom by bemile on 06/10/15
 desc : Ability to add class to a parent container to have a nice UX */
angular.module('ui.scrollpoint', []).directive('uiScrollpoint', ['$window', '$timeout', function($window, $timeout) {

        function getWindowScrollTop() {
            if (angular.isDefined($window.pageYOffset)) {
                return $window.pageYOffset;
            } else {
                var iebody = (document.compatMode && document.compatMode !== 'BackCompat') ? document.documentElement : document.body;
                return iebody.scrollTop;
            }
        }
        return {
            require: ['^?uiScrollpointTarget', '^?inview'],
            link: function(scope, elm, attrs, controllers) {
                var uiScrollpointTarget = controllers[0],
                    inview = controllers[1];
                var absolute = true,
                        shift = 0,
                        fixLimit,
                        $target = uiScrollpointTarget && uiScrollpointTarget.$element || angular.element($window);
                if (!attrs.uiScrollpoint) {
                    absolute = false;
                } else if (typeof (attrs.uiScrollpoint) === 'string') {
                    // charAt is generally faster than indexOf: http://jsperf.com/indexof-vs-charat
                    if (attrs.uiScrollpoint.charAt(0) === '-') {
                        absolute = false;
                        shift = -parseFloat(attrs.uiScrollpoint.substr(1));
                    } else if (attrs.uiScrollpoint.charAt(0) === '+') {
                        absolute = false;
                        shift = parseFloat(attrs.uiScrollpoint.substr(1));
                    } else if (attrs.uiScrollpoint.charAt(0) === '_'){
                        absolute = false;
                        shift = -parseFloat($window.innerHeight-attrs.uiScrollpoint.substr(1));
                    }
                }

                fixLimit = absolute ? attrs.uiScrollpoint : elm[0].offsetTop + shift;

                function onScroll() {

                    var limit = absolute ? attrs.uiScrollpoint : elm[0].offsetTop + shift;
                    // if pageYOffset is defined use it, otherwise use other crap for IE
                    var offset = uiScrollpointTarget ? $target[0].scrollTop : getWindowScrollTop();
                    if (!elm.hasClass('ui-scrollpoint') && offset > limit) {
                        elm.addClass('ui-scrollpoint');
                        fixLimit = limit;
                        if(attrs.uiScrollpoint.charAt(0) === '_'){
                            elm.parents('.inview').addClass('inview-active');
                            inview.set(true);
                        }
                    } else if (elm.hasClass('ui-scrollpoint') && offset < fixLimit) {
                        elm.removeClass('ui-scrollpoint');
                        if(attrs.uiScrollpoint.charAt(0) === '_'){
                            elm.parents('.inview').removeClass('inview-active');
                            inview.set(false);
                        }
                    }
                }

                $target.on('scroll', onScroll);
                $timeout(function(){
                    //console.log('go on scroll')
                    onScroll(); // sets the initial state
                }, 50);

                // Unbind scroll event handler when directive is removed
                scope.$on('$destroy', function() {
                    $target.off('scroll', onScroll);
                });
            }
        };
    }]).directive('uiScrollpointTarget', [function() {
        return {
            controller: ['$element', function($element) {
                this.$element = $element;
            }]
        };
    }]).directive('inview', [function() {
        return {
            controller: ['$scope', function($scope) {

                $scope.inview = false;

                this.set = function(p){
                    //console.info('inview this set '+p)
                    $scope.inview = p;
                    $scope.$apply();                   
                };
            }]
        };
    }]);

}());
/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,n){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,n,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.1 - 2015-10-11
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start().done(g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start().done(i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{removeClass:"in",to:{height:"0"}}).start().done(k):a.removeClass(f,"in",{to:{height:"0"}}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),angular.extend(this,c("UibAccordionController",{$scope:a,$attrs:b}))}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$timeout",function(a,b,c){a.closeable=!!b.close,angular.isDefined(b.dismissOnTimeout)&&c(function(){a.close()},parseInt(b.dismissOnTimeout,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),angular.extend(this,c("UibAlertController",{$scope:a,$attrs:b}))}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",["$document",function(a){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(b,c,d,e){function f(){return h(d.btnCheckboxTrue,!0)}function g(){return h(d.btnCheckboxFalse,!1)}function h(a,c){return angular.isDefined(a)?b.$eval(a):c}var i=e[0],j=e[1];c.find("input").css({display:"none"}),j.$render=function(){c.toggleClass(i.activeClass,angular.equals(j.$modelValue,f()))},c.on(i.toggleEvent,function(){d.disabled||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})}),c.on("keypress",function(e){d.disabled||32!==e.which||a[0].activeElement!==c[0]||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})})}}}]),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),angular.extend(this,a("UibButtonsController"))}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),angular.extend(this,c("UibCarouselController",{$scope:a,$element:b}))}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),this.fixTimeZone(c),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(b,d,1),g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(e,f,1),this.fixTimeZone(b),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(g+f,0,1),this.fixTimeZone(b),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){
function m(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(a,b,c,d,e,f,g,h,i){i||e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var j=this,k={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){j[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){j[d]=a?new Date(a):null,j.refreshView()}):j[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){j[d]=angular.isDefined(c)?c:b[d],a[d]=j[d],("minMode"==d&&j.modes.indexOf(a.datepickerMode)<j.modes.indexOf(j[d])||"maxMode"==d&&j.modes.indexOf(a.datepickerMode)>j.modes.indexOf(j[d]))&&(a.datepickerMode=j[d])}):(j[d]=g[d]||null,a[d]=j[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(k.$isEmpty(k.$modelValue)||k.$invalid)&&(j.activeDate=a,j.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===j.compare(b.date,j.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){k=a,k.$render=function(){j.render()}},this.render=function(){if(k.$viewValue){var a=new Date(k.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=k.$viewValue?new Date(k.$viewValue):null;k.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=k.$viewValue?new Date(k.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===j.minMode){var c=k.$viewValue?new Date(k.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),k.$setViewValue(c),k.$render()}else j.activeDate=b,a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=j.activeDate.getFullYear()+a*(j.step.years||0),c=j.activeDate.getMonth()+a*(j.step.months||0);j.activeDate.setFullYear(b,c,1),j.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===j.maxMode&&1===b||a.datepickerMode===j.minMode&&-1===b||(a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var l=function(){j.element[0].focus()};a.$on("uib:datepicker.focus",l),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),j.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(j.isDisabled(j.activeDate))return;a.select(j.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(j.handleKeyDown(c,b),j.refreshView()):a.toggleMode("up"===c?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest","$log","$dropdownSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m){m||l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");var n,o,p=this,q=a.$new(),r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(o=d(c.isOpen),s=o.assign,a.$watch(o,function(a){q.isOpen=!!a})),u=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.uibKeyboardNav),u&&p.dropdownMenu&&(i.find("body").append(p.dropdownMenu),b.on("$destroy",function(){p.dropdownMenu.remove()}))},this.toggle=function(a){return q.isOpen=arguments.length?!!a:!q.isOpen},this.isOpen=function(){return q.isOpen},q.getToggleElement=function(){return p.toggleElement},q.getAutoClose=function(){return c.autoClose||"always"},q.getElement=function(){return b},q.isKeynavEnabled=function(){return v},q.focusDropdownEntry=function(a){var c=p.dropdownMenu?angular.element(p.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(p.selectedOption)?p.selectedOption=p.selectedOption===c.length-1?p.selectedOption:p.selectedOption+1:p.selectedOption=0;break;case 38:angular.isNumber(p.selectedOption)?p.selectedOption=0===p.selectedOption?0:p.selectedOption-1:p.selectedOption=c.length-1}c[p.selectedOption].focus()},q.getDropdownElement=function(){return p.dropdownMenu},q.focusToggleElement=function(){p.toggleElement&&p.toggleElement[0].focus()},q.$watch("isOpen",function(c,d){if(u&&p.dropdownMenu){var e=h.positionElements(b,p.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},l=p.dropdownMenu.hasClass("dropdown-menu-right");l?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),p.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,r).then(function(){angular.isDefined(c)&&c!==d&&t(a,{open:!!c})}),c)p.dropdownMenuTemplateUrl&&k(p.dropdownMenuTemplateUrl).then(function(a){n=q.$new(),j(a.trim())(n,function(a){var b=a;p.dropdownMenu.replaceWith(b),p.dropdownMenu=b})}),q.focusToggleElement(),f.open(q);else{if(p.dropdownMenuTemplateUrl){n&&n.$destroy();var m=angular.element('<ul class="dropdown-menu"></ul>');p.dropdownMenu.replaceWith(m),p.dropdownMenu=m}f.close(q),p.selectedOption=null}angular.isFunction(s)&&s(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==q.getAutoClose()&&(q.isOpen=!1)});var w=a.$on("$destroy",function(){q.$destroy()});q.$on("$destroy",w)}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelectorAll("[autofocus]");a.length?a[0].focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}]).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length0)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(b){var e=d.defer(),j=d.defer(),l=d.defer(),m={result:e.promise,opened:j.promise,rendered:l.promise,close:function(a){return g.close(m,a)},dismiss:function(a){return g.dismiss(m,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var n,o=d.all([h(b)].concat(i(b.resolve)));return n=k=d.all([k]).then(function(){return o},function(){return o}).then(function(a){var d=(b.scope||c).$new();d.$close=m.close,d.$dismiss=m.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var h,i={},k=1;b.controller&&(i.$scope=d,i.$modalInstance=m,angular.forEach(b.resolve,function(b,c){i[c]=a[k++]}),h=f(b.controller,i),b.controllerAs&&(b.bindToController&&angular.extend(h,d),d[b.controllerAs]=h)),g.open(m,{scope:d,deferred:e,renderDeferred:l,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),j.resolve(!0)},function(a){j.reject(a),e.reject(a)})["finally"](function(){k===n&&(k=null)}),m},j}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelectorAll("[autofocus]");a.length?a[0].focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){
l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$log","$paginationSuppressWarning",function(a,b,c,d,e){e||d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");var f=this,g={$setViewValue:angular.noop},h=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d,e){g=d,this.config=e,g.$render=function(){f.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){f.itemsPerPage=parseInt(b,10),a.totalPages=f.calculateTotalPages()}):this.itemsPerPage=e.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=f.calculateTotalPages()}),a.$watch("totalPages",function(b){h(a.$parent,b),a.page>b?a.selectPage(b):g.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(g.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),g.$setViewValue(b),g.$render())},a.getText=function(b){return a[b+"Text"]||f.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:500,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){H.isOpen?q():m()}function m(){(!G||a.$eval(d[k+"Enable"]))&&(v(),H.popupDelay?C||(C=g(r,H.popupDelay,!1)):r())}function q(){s()}function r(){return C&&(g.cancel(C),C=null),B&&(g.cancel(B),B=null),H.content?(t(),void H.$evalAsync(function(){H.isOpen=!0,J&&angular.isFunction(J.assign)&&J.assign(H.origScope,H.isOpen),M()})):angular.noop}function s(){H&&(H.$evalAsync(function(){H.isOpen=!1,J&&angular.isFunction(J.assign)&&J.assign(H.origScope,H.isOpen)}),g.cancel(C),C=null,g.cancel(D),D=null,H.animation?B||(B=g(u,H.popupCloseDelay)):u())}function t(){z||(A=H.$new(),z=c(A,function(a){E?h.find("body").append(a):b.after(a)}),w())}function u(){x(),B=null,z&&(z.remove(),z=null),A&&(A.$destroy(),A=null)}function v(){H.title=d[k+"Title"],K?H.content=K(a):H.content=d[e],H.popupClass=d[k+"Class"],H.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);H.popupDelay=isNaN(b)?o.popupDelay:b,H.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function w(){L.length=0,K?(L.push(a.$watch(K,function(a){H.content=a,!a&&H.isOpen&&s()})),L.push(A.$watch(function(){I||(I=!0,A.$$postDigest(function(){I=!1,H&&H.isOpen&&M()}))}))):L.push(d.$observe(e,function(a){H.content=a,!a&&H.isOpen?s():M()})),L.push(d.$observe(k+"Title",function(a){H.title=a,H.isOpen&&M()})),L.push(d.$observe(k+"Placement",function(a){H.placement=a?a:o.placement,H.isOpen&&M()}))}function x(){L.length&&(angular.forEach(L,function(a){a()}),L.length=0)}function y(){var a=d[k+"Trigger"];N(),F=p(a),"none"!==F.show&&F.show.forEach(function(a,c){a===F.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),F.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var z,A,B,C,D,E=angular.isDefined(o.appendToBody)?o.appendToBody:!1,F=p(void 0),G=angular.isDefined(d[k+"Enable"]),H=a.$new(!0),I=!1,J=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,K=o.useContentExp?l(d[e]):!1,L=[],M=function(){z&&z.html()&&(D||(D=g(function(){z.css({top:0,left:0});var a=i.positionElements(b,z,H.placement,E);a.top+="px",a.left+="px",a.visibility="visible",z.css(a),D=null},0,!1)))};H.origScope=a,H.isOpen=!1,n.add(H,{close:s}),H.contentExp=function(){return H.content},d.$observe("disabled",function(a){C&&a&&(g.cancel(C),C=null),a&&H.isOpen&&s()}),J&&a.$watch(J,function(a){!a===H.isOpen&&j()});var N=function(){F.show.forEach(function(a){b.unbind(a,m)}),F.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};y();var O=a.$eval(d[k+"Animation"]);H.animation=angular.isDefined(O)?!!O:o.animation;var P=a.$eval(d[k+"AppendToBody"]);E=angular.isDefined(P)?P:E,E&&a.$on("$locationChangeSuccess",function(){H.isOpen&&s()}),a.$on("$destroy",function(){g.cancel(B),g.cancel(C),g.cancel(D),N(),u(),H=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=d.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","uibProgressConfig","$log","$progressSuppressWarning",function(a,b,c,d,e){e||d.warn("ProgressController is now deprecated. Use UibProgressController instead.");var f=this,g=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,d){g||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=d&&angular.isDefined(d.title)?d.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=f.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,f.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){f.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),angular.extend(this,c("UibRatingController",{$scope:a,$attrs:b}))}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),angular.extend(this,b("UibTabsetController",{$scope:a}))}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===r[1]&&(b+=12)),b):void 0}function i(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function k(a){l(),q.$setViewValue(new Date(p)),m(a)}function l(){q.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function m(b){var c=p.getHours(),d=p.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:j(c),"m"!==b&&(a.minutes=j(d)),a.meridian=p.getHours()<12?r[0]:r[1]}function n(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function o(a){p=n(p,a),k()}var p=new Date,q={$setViewValue:angular.noop},r=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){q=b,q.$render=this.render,q.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;h&&this.setupMousewheelEvents(e,f);var i=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;i&&this.setupArrowkeyEvents(e,f),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f)};var s=g.hourStep;c.hourStep&&a.$parent.$watch(d(c.hourStep),function(a){s=parseInt(a,10)});var t=g.minuteStep;c.minuteStep&&a.$parent.$watch(d(c.minuteStep),function(a){t=parseInt(a,10)});var u;a.$parent.$watch(d(c.min),function(a){var b=new Date(a);u=isNaN(b)?void 0:b});var v;a.$parent.$watch(d(c.max),function(a){var b=new Date(a);v=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=n(p,60*s);return a>v||p>a&&u>a},a.noDecrementHours=function(){var a=n(p,60*-s);return u>a||a>p&&a>v},a.noIncrementMinutes=function(){var a=n(p,t);return a>v||p>a&&u>a},a.noDecrementMinutes=function(){var a=n(p,-t);return u>a||a>p&&a>v},a.noToggleMeridian=function(){return p.getHours()<13?n(p,720)>v:n(p,-720)<u},a.showMeridian=g.showMeridian,c.showMeridian&&a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,q.$error.time){
var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(p.setHours(c),k())}else m()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){q.$setViewValue(null),q.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=h(),b=i();angular.isDefined(a)&&angular.isDefined(b)?(p.setHours(a),u>p||p>v?d(!0):k("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=j(a.hours)})}),a.updateMinutes=function(){var a=i(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(p.setMinutes(a),u>p||p>v?d(void 0,!0):k("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=j(a.minutes)})})},this.render=function(){var b=q.$viewValue;isNaN(b)?(q.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(p=b),u>p||p>v?(q.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):l(),m())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*s)},a.decrementHours=function(){a.noDecrementHours()||o(60*-s)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(t)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(-t)},a.toggleMeridian=function(){a.noToggleMeridian()||o(720*(p.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$element","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e,f){f||e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),angular.extend(this,d("UibTimepickerController",{$scope:a,$element:b,$attrs:c}))}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("uibTypeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i){var j=[9,13,27,38,40],k=200;return{require:["ngModel","^?ngModelOptions"],link:function(l,m,n,o){function p(){L.moveInProgress||(L.moveInProgress=!0,L.$digest()),T&&d.cancel(T),T=d(function(){L.matches.length&&q(),L.moveInProgress=!1},k)}function q(){L.position=D?h.offset(m):h.position(m),L.position.top+=m.prop("offsetHeight")}var r=o[0],s=o[1],t=l.$eval(n.typeaheadMinLength);t||0===t||(t=1);var u,v,w=l.$eval(n.typeaheadWaitMs)||0,x=l.$eval(n.typeaheadEditable)!==!1,y=b(n.typeaheadLoading).assign||angular.noop,z=b(n.typeaheadOnSelect),A=angular.isDefined(n.typeaheadSelectOnBlur)?l.$eval(n.typeaheadSelectOnBlur):!1,B=b(n.typeaheadNoResults).assign||angular.noop,C=n.typeaheadInputFormatter?b(n.typeaheadInputFormatter):void 0,D=n.typeaheadAppendToBody?l.$eval(n.typeaheadAppendToBody):!1,E=n.typeaheadAppendToElementId||!1,F=l.$eval(n.typeaheadFocusFirst)!==!1,G=n.typeaheadSelectOnExact?l.$eval(n.typeaheadSelectOnExact):!1,H=b(n.ngModel),I=b(n.ngModel+"($$$p)"),J=function(a,b){return angular.isFunction(H(l))&&s&&s.$options&&s.$options.getterSetter?I(a,{$$$p:b}):H.assign(a,b)},K=i.parse(n.uibTypeahead),L=l.$new(),M=l.$on("$destroy",function(){L.$destroy()});L.$on("$destroy",M);var N="typeahead-"+L.$id+"-"+Math.floor(1e4*Math.random());m.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":N});var O=angular.element("<div uib-typeahead-popup></div>");O.attr({id:N,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(n.typeaheadTemplateUrl)&&O.attr("template-url",n.typeaheadTemplateUrl),angular.isDefined(n.typeaheadPopupTemplateUrl)&&O.attr("popup-template-url",n.typeaheadPopupTemplateUrl);var P=function(){L.matches=[],L.activeIdx=-1,m.attr("aria-expanded",!1)},Q=function(a){return N+"-option-"+a};L.$watch("activeIdx",function(a){0>a?m.removeAttr("aria-activedescendant"):m.attr("aria-activedescendant",Q(a))});var R=function(a,b){return L.matches.length>b&&a?a.toUpperCase()===L.matches[b].label.toUpperCase():!1},S=function(a){var b={$viewValue:a};y(l,!0),B(l,!1),c.when(K.source(l,b)).then(function(c){var d=a===r.$viewValue;if(d&&u)if(c&&c.length>0){L.activeIdx=F?0:-1,B(l,!1),L.matches.length=0;for(var e=0;e<c.length;e++)b[K.itemName]=c[e],L.matches.push({id:Q(e),label:K.viewMapper(L,b),model:c[e]});L.query=a,q(),m.attr("aria-expanded",!0),G&&1===L.matches.length&&R(a,0)&&L.select(0)}else P(),B(l,!0);d&&y(l,!1)},function(){P(),y(l,!1),B(l,!0)})};D&&(angular.element(f).bind("resize",p),e.find("body").bind("scroll",p));var T;L.moveInProgress=!1,P(),L.query=void 0;var U,V=function(a){U=d(function(){S(a)},w)},W=function(){U&&d.cancel(U)};r.$parsers.unshift(function(a){return u=!0,0===t||a&&a.length>=t?w>0?(W(),V(a)):S(a):(y(l,!1),W(),P()),x?a:a?void r.$setValidity("editable",!1):(r.$setValidity("editable",!0),null)}),r.$formatters.push(function(a){var b,c,d={};return x||r.$setValidity("editable",!0),C?(d.$model=a,C(l,d)):(d[K.itemName]=a,b=K.viewMapper(l,d),d[K.itemName]=void 0,c=K.viewMapper(l,d),b!==c?b:a)}),L.select=function(a){var b,c,e={};v=!0,e[K.itemName]=c=L.matches[a].model,b=K.modelMapper(l,e),J(l,b),r.$setValidity("editable",!0),r.$setValidity("parse",!0),z(l,{$item:c,$model:b,$label:K.viewMapper(l,e)}),P(),L.$eval(n.typeaheadFocusOnSelect)!==!1&&d(function(){m[0].focus()},0,!1)},m.bind("keydown",function(a){if(0!==L.matches.length&&-1!==j.indexOf(a.which)){if(-1===L.activeIdx&&(9===a.which||13===a.which))return P(),void L.$digest();a.preventDefault(),40===a.which?(L.activeIdx=(L.activeIdx+1)%L.matches.length,L.$digest()):38===a.which?(L.activeIdx=(L.activeIdx>0?L.activeIdx:L.matches.length)-1,L.$digest()):13===a.which||9===a.which?L.$apply(function(){L.select(L.activeIdx)}):27===a.which&&(a.stopPropagation(),P(),L.$digest())}}),m.bind("blur",function(){A&&L.matches.length&&-1!==L.activeIdx&&!v&&(v=!0,L.$apply(function(){L.select(L.activeIdx)})),u=!1,v=!1});var X=function(a){m[0]!==a.target&&3!==a.which&&0!==L.matches.length&&(P(),g.$$phase||L.$digest())};e.bind("click",X),l.$on("$destroy",function(){e.unbind("click",X),(D||E)&&Y.remove(),O.remove()});var Y=a(O)(L);D?e.find("body").append(Y):E!==!1?angular.element(e[0].getElementById(E)).append(Y):m.after(Y)}}}]).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){
a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/*! angular-google-maps 2.1.6 2015-08-27
 *  AngularJS directives for Google Maps
 *  git: https://github.com/angular-ui/angular-google-maps.git
 */
!function(a,b,c){"use strict";(function(){b.module("uiGmapgoogle-maps.providers",[]),b.module("uiGmapgoogle-maps.wrapped",[]),b.module("uiGmapgoogle-maps.extensions",["uiGmapgoogle-maps.wrapped","uiGmapgoogle-maps.providers"]),b.module("uiGmapgoogle-maps.directives.api.utils",["uiGmapgoogle-maps.extensions"]),b.module("uiGmapgoogle-maps.directives.api.managers",[]),b.module("uiGmapgoogle-maps.directives.api.options",["uiGmapgoogle-maps.directives.api.utils"]),b.module("uiGmapgoogle-maps.directives.api.options.builders",[]),b.module("uiGmapgoogle-maps.directives.api.models.child",["uiGmapgoogle-maps.directives.api.utils","uiGmapgoogle-maps.directives.api.options","uiGmapgoogle-maps.directives.api.options.builders"]),b.module("uiGmapgoogle-maps.directives.api.models.parent",["uiGmapgoogle-maps.directives.api.managers","uiGmapgoogle-maps.directives.api.models.child","uiGmapgoogle-maps.providers"]),b.module("uiGmapgoogle-maps.directives.api",["uiGmapgoogle-maps.directives.api.models.parent"]),b.module("uiGmapgoogle-maps",["uiGmapgoogle-maps.directives.api","uiGmapgoogle-maps.providers"])}).call(this),function(){b.module("uiGmapgoogle-maps.providers").factory("uiGmapMapScriptLoader",["$q","uiGmapuuid",function(c,d){var e,f,g,h;return h=void 0,e=function(a){return a.china?"http://maps.google.cn/maps/api/js?":"auto"===a.transport?"//maps.googleapis.com/maps/api/js?":a.transport+"://maps.googleapis.com/maps/api/js?"},f=function(a){var b,c,f;return b=["transport","isGoogleMapsForWork","china"],a.isGoogleMapsForWork&&b.push("key"),c=_.map(_.omit(a,b),function(a,b){return b+"="+a}),h&&document.getElementById(h).remove(),c=c.join("&"),f=document.createElement("script"),f.id=h="ui_gmap_map_load_"+d.generate(),f.type="text/javascript",f.src=e(a)+c,document.body.appendChild(f)},g=function(){return b.isDefined(a.google)&&b.isDefined(a.google.maps)},{load:function(b){var d,e;return d=c.defer(),g()?(d.resolve(a.google.maps),d.promise):(e=b.callback="onGoogleMapsReady"+Math.round(1e3*Math.random()),a[e]=function(){a[e]=null,d.resolve(a.google.maps)},a.navigator.connection&&a.Connection&&a.navigator.connection.type===a.Connection.NONE?document.addEventListener("online",function(){return g()?void 0:f(b)}):f(b),d.promise)}}}]).provider("uiGmapGoogleMapApi",function(){return this.options={transport:"https",isGoogleMapsForWork:!1,china:!1,v:"3",libraries:"",language:"en",sensor:"false"},this.configure=function(a){b.extend(this.options,a)},this.$get=["uiGmapMapScriptLoader",function(a){return function(b){return b.load(a.options)}}(this)],this})}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.extensions").service("uiGmapExtendGWin",function(){return{init:_.once(function(){var b;if(google||("undefined"!=typeof google&&null!==google?google.maps:void 0)||null!=google.maps.InfoWindow)return google.maps.InfoWindow.prototype._open=google.maps.InfoWindow.prototype.open,google.maps.InfoWindow.prototype._close=google.maps.InfoWindow.prototype.close,google.maps.InfoWindow.prototype._isOpen=!1,google.maps.InfoWindow.prototype.open=function(a,b,c){null==c&&(this._isOpen=!0,this._open(a,b,!0))},google.maps.InfoWindow.prototype.close=function(a){null==a&&(this._isOpen=!1,this._close(!0))},google.maps.InfoWindow.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},a.InfoBox&&(a.InfoBox.prototype._open=a.InfoBox.prototype.open,a.InfoBox.prototype._close=a.InfoBox.prototype.close,a.InfoBox.prototype._isOpen=!1,a.InfoBox.prototype.open=function(a,b){this._isOpen=!0,this._open(a,b)},a.InfoBox.prototype.close=function(){this._isOpen=!1,this._close()},a.InfoBox.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},b=function(b){function e(b){this.getOrigCloseBoxImg_=c(this.getOrigCloseBoxImg_,this),this.getCloseBoxDiv_=c(this.getCloseBoxDiv_,this);var d;d=new a.InfoBox(b),_.extend(this,d),null!=b.closeBoxDiv&&(this.closeBoxDiv_=b.closeBoxDiv)}return d(e,b),e.prototype.getCloseBoxDiv_=function(){return this.closeBoxDiv_},e.prototype.getCloseBoxImg_=function(){var a,b;return a=this.getCloseBoxDiv_(),b=this.getOrigCloseBoxImg_(),a||b},e.prototype.getOrigCloseBoxImg_=function(){var a;return a="",""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},e}(a.InfoBox),a.uiGmapInfoBox=b),a.MarkerLabel_?a.MarkerLabel_.prototype.setContent=function(){var a;a=this.marker_.get("labelContent"),a&&!_.isEqual(this.oldContent,a)&&("undefined"==typeof(null!=a?a.nodeType:void 0)?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML,this.oldContent=a):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.labelDiv_.innerHTML="",this.eventDiv_.appendChild(a),this.oldContent=a))}:void 0})}})}.call(this),function(){b.module("uiGmapgoogle-maps.extensions").service("uiGmapLodash",function(){var a,b,c,d,e,f,g,h;return null==_.get&&(d=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,e=/^\w*$/,f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,g=function(a){return _.isObject(a)?a:Object(a)},b=function(a){return null===a?"":a+""},h=function(a){var c;return _.isArray(a)?a:(c=[],b(a).replace(f,function(a,b,d,e){c.push(d?e.replace(reEscapeChar,"$1"):b||a)}),c)},a=function(a,b,c){var d,e;if(null!==a){void 0!==c&&c in g(a)&&(b=[c]),d=0,e=b.length;for(;!_.isUndefined(a)&&e>d;)a=a[b[d++]];return d&&d===e?a:void 0}},c=function(b,c,d){var e;return e=null===b?void 0:a(b,h(c),c+""),void 0===e?d:e},_.get=c),this.intersectionObjects=function(a,b,c){var d;return null==c&&(c=void 0),d=_.map(a,function(a){return function(a){return _.find(b,function(b){return null!=c?c(a,b):_.isEqual(a,b)})}}(this)),_.filter(d,function(a){return null!=a})},this.containsObject=_.includeObject=function(a,b,c){return null==c&&(c=void 0),null===a?!1:_.any(a,function(a){return function(a){return null!=c?c(a,b):_.isEqual(a,b)}}(this))},this.differenceObjects=function(a,b,c){return null==c&&(c=void 0),_.filter(a,function(a){return function(d){return!a.containsObject(b,d,c)}}(this))},this.withoutObjects=this.differenceObjects,this.indexOfObject=function(a,b,c,d){var e,f;if(null==a)return-1;if(e=0,f=a.length,d){if("number"!=typeof d)return e=_.sortedIndex(a,b),a[e]===b?e:-1;e=0>d?Math.max(0,f+d):d}for(;f>e;){if(null!=c){if(c(a[e],b))return e}else if(_.isEqual(a[e],b))return e;e++}return-1},this.isNullOrUndefined=function(a){return _.isNull(a||_.isUndefined(a))},this})}.call(this),function(){b.module("uiGmapgoogle-maps.extensions").factory("uiGmapString",function(){return function(a){return this.contains=function(b,c){return-1!==a.indexOf(b,c)},this}})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmap_sync",[function(){return{fakePromise:function(){var a;return a=void 0,{then:function(b){return a=b},resolve:function(){return a.apply(void 0,arguments)}}}}}]).service("uiGmap_async",["$timeout","uiGmapPromise","uiGmapLogger","$q","uiGmapDataStructures","uiGmapGmapUtil",function(a,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;return y=c.promiseTypes,r=c.isInProgress,x=c.promiseStatus,h=c.ExposedPromise,j=c.SniffedPromise,s=function(a,b){var c;return c=a.promise(),c.promiseType=a.promiseType,c.$$state&&d.debug("promiseType: "+c.promiseType+", state: "+x(c.$$state.status)),c.cancelCb=b,c},o=function(a,b){return a.promiseType===y.create&&b.promiseType!==y["delete"]&&b.promiseType!==y.init?(d.debug("lastPromise.promiseType "+b.promiseType+", newPromiseType: "+a.promiseType+", SKIPPED MUST COME AFTER DELETE ONLY"),!0):!1},w=function(a,b,c){var e;return b.promiseType===y["delete"]&&c.promiseType!==y["delete"]&&null!=c.cancelCb&&_.isFunction(c.cancelCb)&&r(c)&&(d.debug("promiseType: "+b.promiseType+", CANCELING LAST PROMISE type: "+c.promiseType),c.cancelCb("cancel safe"),e=a.peek(),null!=e&&r(e))?e.hasOwnProperty("cancelCb")&&_.isFunction(e.cancelCb)?(d.debug("promiseType: "+e.promiseType+", CANCELING FIRST PROMISE type: "+e.promiseType),e.cancelCb("cancel safe")):d.warn("first promise was not cancelable"):void 0},i=function(a,b,c){var d,e;if(a.existingPieces){if(d=_.last(a.existingPieces._content),o(b,d))return;return w(a.existingPieces,b,d),e=h(d["finally"](function(){return s(b,c)})),e.cancelCb=c,e.promiseType=b.promiseType,a.existingPieces.enqueue(e),d["finally"](function(){return a.existingPieces.dequeue()})}return a.existingPieces=new f.Queue,a.existingPieces.enqueue(s(b,c))},u=function(a,b,c,e,f){var g;return null==c&&(c=""),g=function(a){return d.debug(a+": "+a),null!=e&&_.isFunction(e)?e(a):void 0},i(a,j(f,b),g)},m=80,q={value:null},z=function(a,b,c){var d;try{return a.apply(b,c)}catch(e){return d=e,q.value=d,q}},t=function(a,b,c,e){var f,g;return g=z(a,b,e),g===q&&(f="error within chunking iterator: "+q.value,d.error(f),c.reject(f)),"cancel safe"===g?!1:!0},l=function(a,b,c){var d,e;return d=a===b,e=b[c],d?e:a[e]},k=function(a,c,d,e){var f;return b.isArray(a)?f=a:(f=c?c:Object.keys(_.omit(a,["length","forEach","map"])),c=f),null==e&&(e=d),b.isArray(f)&&(void 0===f||(null!=f?f.length:void 0)<=0)&&e!==d?d():e(f,c)},n=function(c,d,e,f,g,h,i,j){return k(c,j,function(j,k){var m,o,p,q;for(m=d&&d<j.length?d:j.length,o=i,p=!0;p&&m--&&o<(j?j.length:o+1);)q=l(c,j,o),p=b.isFunction(q)?!0:t(f,void 0,h,[q,o]),++o;if(j){if(!(p&&o<j.length))return h.resolve();if(i=o,d)return null!=g&&_.isFunction(g)&&t(g,void 0,h,[]),a(function(){return n(c,d,e,f,g,h,i,k)},e,!1)}})},p=function(a,b,e,f,g,h,i){var j,l,o;return null==e&&(e=m),null==g&&(g=0),null==h&&(h=1),o=void 0,l=c.defer(),o=l.promise,h?k(a,i,function(){return l.resolve(),o},function(c,d){return n(a,e,h,b,f,l,g,d),o}):(j="pause (delay) must be set from _async!",d.error(j),l.reject(j),o)},v=function(a,b,d,e,f,g,h){var i;return i=[],k(a,h,function(){return c.resolve(i)},function(c,h){return p(a,function(a){return i.push(b(a))},d,e,f,g,h).then(function(){return i})})},{each:p,map:v,managePromiseQueue:u,promiseLock:u,defaultChunkSize:m,chunkSizeFrom:function(a,b){return null==b&&(b=void 0),_.isNumber(a)&&(b=a),(g.isFalse(a)||a===!1)&&(b=!1),b}}}])}.call(this),function(){var a=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapBaseObject",function(){var b,c;return c=["extended","included"],b=function(){function b(){}return b.extend=function(b){var d,e,f;for(d in b)f=b[d],a.call(c,d)<0&&(this[d]=f);return null!=(e=b.extended)&&e.apply(this),this},b.include=function(b){var d,e,f;for(d in b)f=b[d],a.call(c,d)<0&&(this.prototype[d]=f);return null!=(e=b.included)&&e.apply(this),this},b}()})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChildEvents",function(){return{onChildCreation:function(a){}}})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapCtrlHandle",["$q",function(a){var b;return b={handle:function(c,d){return c.$on("$destroy",function(){return b.handle(c)}),c.deferred=a.defer(),{getScope:function(){return c}}},mapPromise:function(a,b){var c;return c=b.getScope(),c.deferred.promise.then(function(b){return a.map=b}),c.deferred.promise}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapEventsHelper",["uiGmapLogger",function(a){var c,d;return d=function(a){return b.isDefined(a.events)&&null!=a.events&&b.isObject(a.events)},c=function(a,b){return d(a)?a:d(b)?b:void 0},{setEvents:function(a,d,e,f){var g;return g=c(d,e),null!=g?_.compact(_.map(g.events,function(c,h){var i;return f&&(i=_(f).contains(h)),g.events.hasOwnProperty(h)&&b.isFunction(g.events[h])&&!i?google.maps.event.addListener(a,h,function(){return d.$evalAsync||(d.$evalAsync=function(){}),d.$evalAsync(c.apply(d,[a,h,e,arguments]))}):void 0})):void 0},removeEvents:function(a){var b,c;if(a)for(b in a)c=a[b],c&&google.maps.event.removeListener(c)}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapFitHelper",["uiGmapLogger",function(a){return{fit:function(a,b){var c,d,e,f,g;if(b&&(null!=a?a.length:void 0)){c=new google.maps.LatLngBounds,d=!1;for(e in a)f=a[e],f&&(d||(d=!0),g=_.isFunction(f.getPosition)?f.getPosition():f),c.extend(g);if(d)return b.fitBounds(c)}}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapGmapUtil",["uiGmapLogger","$compile",function(a,c){var d,e,f,g,h,i;return e=function(a,b,c){return a===b||-1!==c.indexOf(a)},d=function(a){return e(a,!1,["false","FALSE",0,"n","N","no","NO"])},g=function(a){return Array.isArray(a)&&2===a.length?a[1]:b.isDefined(a.type)&&"Point"===a.type?a.coordinates[1]:a.latitude},h=function(a){return Array.isArray(a)&&2===a.length?a[0]:b.isDefined(a.type)&&"Point"===a.type?a.coordinates[0]:a.longitude},f=function(a){return a?Array.isArray(a)&&2===a.length?new google.maps.LatLng(a[1],a[0]):b.isDefined(a.type)&&"Point"===a.type?new google.maps.LatLng(a.coordinates[1],a.coordinates[0]):new google.maps.LatLng(a.latitude,a.longitude):void 0},i=function(a){if(b.isUndefined(a))return!1;if(_.isArray(a)){if(2===a.length)return!0}else if(null!=a&&(null!=a?a.type:void 0)&&"Point"===a.type&&_.isArray(a.coordinates)&&2===a.coordinates.length)return!0;return a&&b.isDefined((null!=a?a.latitude:void 0)&&b.isDefined(null!=a?a.longitude:void 0))?!0:!1},{setCoordsFromEvent:function(a,c){return a?(Array.isArray(a)&&2===a.length?(a[1]=c.lat(),a[0]=c.lng()):b.isDefined(a.type)&&"Point"===a.type?(a.coordinates[1]=c.lat(),a.coordinates[0]=c.lng()):(a.latitude=c.lat(),a.longitude=c.lng()),a):void 0},getLabelPositionPoint:function(a){var b,c;return void 0===a?void 0:(a=/^([-\d\.]+)\s([-\d\.]+)$/.exec(a),b=parseFloat(a[1]),c=parseFloat(a[2]),null!=b&&null!=c?new google.maps.Point(b,c):void 0)},createWindowOptions:function(d,e,g,h){var i;return null!=g&&null!=h&&null!=c?(i=b.extend({},h,{content:this.buildContent(e,h,g),position:null!=h.position?h.position:b.isObject(d)?d.getPosition():f(e.coords)}),null!=d&&null==(null!=i?i.pixelOffset:void 0)&&(null==i.boxClass||(i.pixelOffset={height:0,width:-2})),i):h?h:(a.error("infoWindow defaults not defined"),g?void 0:a.error("infoWindow content not defined"))},buildContent:function(a,b,d){var e,f;return null!=b.content?f=b.content:null!=c?(d=d.replace(/^\s+|\s+$/g,""),e=""===d?"":c(d)(a),e.length>0&&(f=e[0])):f=d,f},defaultDelay:50,isTrue:function(a){return e(a,!0,["true","TRUE",1,"y","Y","yes","YES"])},isFalse:d,isFalsy:function(a){return e(a,!1,[void 0,null])||d(a)},getCoords:f,validateCoords:i,equalCoords:function(a,b){return g(a)===g(b)&&h(a)===h(b)},validatePath:function(a){var c,d,e,f;if(d=0,b.isUndefined(a.type)){if(!Array.isArray(a)||a.length<2)return!1;for(;d<a.length;){if(!(b.isDefined(a[d].latitude)&&b.isDefined(a[d].longitude)||"function"==typeof a[d].lat&&"function"==typeof a[d].lng))return!1;d++}return!0}if(b.isUndefined(a.coordinates))return!1;if("Polygon"===a.type){if(a.coordinates[0].length<4)return!1;c=a.coordinates[0]}else if("MultiPolygon"===a.type){if(f={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},f),e=a.coordinates[f.index],c=e[0],c.length<4)return!1}else{if("LineString"!==a.type)return!1;if(a.coordinates.length<2)return!1;c=a.coordinates}for(;d<c.length;){if(2!==c[d].length)return!1;d++}return!0},convertPathPoints:function(a){var c,d,e,f,g;if(d=0,f=new google.maps.MVCArray,b.isUndefined(a.type))for(;d<a.length;)b.isDefined(a[d].latitude)&&b.isDefined(a[d].longitude)?e=new google.maps.LatLng(a[d].latitude,a[d].longitude):"function"==typeof a[d].lat&&"function"==typeof a[d].lng&&(e=a[d]),f.push(e),d++;else for("Polygon"===a.type?c=a.coordinates[0]:"MultiPolygon"===a.type?(g={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},g),c=a.coordinates[g.index][0]):"LineString"===a.type&&(c=a.coordinates);d<c.length;)f.push(new google.maps.LatLng(c[d][1],c[d][0])),d++;return f},getPath:function(a,b){var c;return null!=b&&_.isString(b)?(c=a,_.each(b.split("."),function(a){return c?c=c[a]:void 0}),c):b},validateBoundPoints:function(a){return b.isUndefined(a.sw.latitude)||b.isUndefined(a.sw.longitude)||b.isUndefined(a.ne.latitude)||b.isUndefined(a.ne.longitude)?!1:!0},convertBoundPoints:function(a){var b;return b=new google.maps.LatLngBounds(new google.maps.LatLng(a.sw.latitude,a.sw.longitude),new google.maps.LatLng(a.ne.latitude,a.ne.longitude))},fitMapBounds:function(a,b){return a.fitBounds(b)}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapIsReady",["$q","$timeout",function(a,b){var c,d,e,f;return d=0,f=[],e=function(){return a.all(f)},c=function(a,f,g){return b(function(){return 0>=g?void a.reject("Your maps are not found we have checked the maximum amount of times. :)"):void(d!==f?c(a,f,g-1):a.resolve(e()))},100)},{spawn:function(){var b;return b=a.defer(),f.push(b.promise),d+=1,{instance:d,deferred:b}},promises:e,instances:function(){return d},promise:function(b,d){var e;return null==b&&(b=1),null==d&&(d=50),e=a.defer(),c(e,b,d),e.promise},reset:function(){d=0,f.length=0},decrement:function(){d>0&&(d-=1),f.length&&(f.length-=1)}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapLinked",["uiGmapBaseObject",function(b){var c;return c=function(b){function c(a,b,c,d){this.scope=a,this.element=b,this.attrs=c,this.ctrls=d}return a(c,b),c}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapLogger",["$log",function(a){var b,c,d,e;return b={log:1,info:2,debug:3,warn:4,error:5,none:6},e=function(a,b,c){return a>=b?c():void 0},d=function(b,c){return null!=a?a[b](c):console[b](c)},new(c=function(){function c(){var a;this.doLog=!0,a={},["log","info","debug","warn","error"].forEach(function(c){return function(f){return a[f]=function(a){return c.doLog?e(b[f],c.currentLevel,function(){return d(f,a)}):void 0}}}(this)),this.LEVELS=b,this.currentLevel=b.error,this.log=a.log,this.info=a.info,this.debug=a.debug,this.warn=a.warn,this.error=a.error}return c.prototype.spawn=function(){return new c},c.prototype.setLog=function(b){return a=b},c}())}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapModelKey",["uiGmapBaseObject","uiGmapGmapUtil","uiGmapPromise","$q","$timeout",function(d,e,f,g,h){var i;return i=function(d){function f(b){this.scope=b,this.modelsLength=a(this.modelsLength,this),this.updateChild=a(this.updateChild,this),this.destroy=a(this.destroy,this),this.onDestroy=a(this.onDestroy,this),this.setChildScope=a(this.setChildScope,this),this.getChanges=a(this.getChanges,this),this.getProp=a(this.getProp,this),this.setIdKey=a(this.setIdKey,this),this.modelKeyComparison=a(this.modelKeyComparison,this),f.__super__.constructor.call(this),this["interface"]={},this["interface"].scopeKeys=[],this.defaultIdKey="id",this.idKey=void 0}return c(f,d),f.prototype.evalModelHandle=function(a,b){return null!=a&&null!=b?"self"===b?a:(_.isFunction(b)&&(b=b()),e.getPath(a,b)):void 0},f.prototype.modelKeyComparison=function(a,b){var c,d,f;if(c=_.contains(this["interface"].scopeKeys,"coords"),(c&&null!=this.scope.coords||!c)&&(f=this.scope),null==f)throw"No scope set!";return c&&(d=e.equalCoords(this.scopeOrModelVal("coords",f,a),this.scopeOrModelVal("coords",f,b)),!d)?d:d=_.every(_.without(this["interface"].scopeKeys,"coords"),function(c){return function(d){return c.scopeOrModelVal(f[d],f,a)===c.scopeOrModelVal(f[d],f,b)}}(this))},f.prototype.setIdKey=function(a){return this.idKey=null!=a.idKey?a.idKey:this.defaultIdKey},f.prototype.setVal=function(a,b,c){var d;return d=this.modelOrKey(a,b),d=c,a},f.prototype.modelOrKey=function(a,b){return null!=b?"self"!==b?e.getPath(a,b):a:void 0},f.prototype.getProp=function(a,b,c){return this.scopeOrModelVal(a,b,c)},f.prototype.getChanges=function(a,b,c){var d,e,f;c&&(b=_.pick(b,c),a=_.pick(a,c)),e={},f={},d={};for(f in a)b&&b[f]===a[f]||(_.isArray(a[f])?e[f]=a[f]:_.isObject(a[f])?(d=this.getChanges(a[f],b?b[f]:null),_.isEmpty(d)||(e[f]=d)):e[f]=a[f]);return e},f.prototype.scopeOrModelVal=function(a,b,c,d){var e,f,g,h;return null==d&&(d=!1),e=function(a,b,c){return null==c&&(c=!1),c?{isScope:a,value:b}:b},h=_.get(b,a),_.isFunction(h)?e(!0,h(c),d):_.isObject(h)?e(!0,h,d):_.isString(h)?(f=h,g=f?"self"===f?c:_.get(c,f):_.get(c,a),_.isFunction(g)?e(!1,g(),d):e(!1,g,d)):e(!0,h,d)},f.prototype.setChildScope=function(a,b,c){var d,e,f,g;for(e in a)f=a[e],d=this.scopeOrModelVal(f,b,c,!0),null!=(null!=d?d.value:void 0)&&(g=d.value,g!==b[f]&&(b[f]=g));return b.model=c},f.prototype.onDestroy=function(a){},f.prototype.destroy=function(a){var b;return null==a&&(a=!1),null==this.scope||(null!=(b=this.scope)?b.$$destroyed:void 0)||!this.needToManualDestroy&&!a?this.clean():this.scope.$destroy()},f.prototype.updateChild=function(a,b){return null==b[this.idKey]?void this.$log.error("Model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):a.updateModel(b)},f.prototype.modelsLength=function(a){var c,d;return null==a&&(a=void 0),c=0,d=a?a:this.scope.models,null==d?c:c=b.isArray(d)||null!=d.length?d.length:Object.keys(d).length},f}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapModelsWatcher",["uiGmapLogger","uiGmap_async","$q","uiGmapPromise",function(a,b,c,d){return{didQueueInitPromise:function(a,c){return 0===c.models.length?(b.promiseLock(a,d.promiseTypes.init,null,null,function(a){return function(){return d.resolve()}}(this)),!0):!1},figureOutState:function(b,c,d,e,f){var g,h,i,j,k;return g=[],i={},j=[],k=[],c.models.forEach(function(f){var h;return null==f[b]?a.error(" id missing for model #{m.toString()},\ncan not use do comparison/insertion"):(i[f[b]]={},null==d.get(f[b])?g.push(f):(h=d.get(f[b]),e(f,h.clonedModel,c)?void 0:k.push({model:f,child:h})))}),h=d.values(),h.forEach(function(c){var d;return null==c?void a.error("child undefined in ModelsWatcher."):null==c.model?void a.error("child.model undefined in ModelsWatcher."):(d=c.model[b],null==i[d]?j.push(c):void 0)}),{adds:g,removals:j,updates:k}}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapPromise",["$q","$timeout","uiGmapLogger",function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;return l={create:"create",update:"update","delete":"delete",init:"init"},k={IN_PROGRESS:0,RESOLVED:1,REJECTED:2},n=function(){var a;return a={},a[""+k.IN_PROGRESS]="in-progress",a[""+k.RESOLVED]="resolved",a[""+k.REJECTED]="rejected",a}(),g=function(a){return a.$$state?a.$$state.status===k.IN_PROGRESS:a.hasOwnProperty("$$v")?void 0:!0},h=function(a){return a.$$state?a.$$state.status===k.RESOLVED:a.hasOwnProperty("$$v")?!0:void 0},j=function(a){return n[a]||"done w error"},d=function(b){var c,d,e;return c=a.defer(),d=a.all([b,c.promise]),e=a.defer(),b.then(c.resolve,function(){},function(a){return c.notify(a),e.notify(a)}),d.then(function(a){return e.resolve(a[0]||a[1])},function(a){return e.reject(a)}),e.promise.cancel=function(a){return null==a&&(a="canceled"),c.reject(a)},e.promise.notify=function(a){return null==a&&(a="cancel safe"),e.notify(a),b.hasOwnProperty("notify")?b.notify(a):void 0},null!=b.promiseType&&(e.promise.promiseType=b.promiseType),e.promise},e=function(a,b){return{promise:a,promiseType:b}},f=function(){return a.defer()},m=function(){var b;return b=a.defer(),b.resolve.apply(void 0,arguments),b.promise},i=function(d){var e;return _.isFunction(d)?(e=a.defer(),b(function(){var a;return a=d(),e.resolve(a)}),e.promise):void c.error("uiGmapPromise.promise() only accepts functions")},{defer:f,promise:i,resolve:m,promiseTypes:l,isInProgress:g,isResolved:h,promiseStatus:j,ExposedPromise:d,SniffedPromise:e}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropMap",function(){var b;return b=function(){function b(){this.removeAll=a(this.removeAll,this),this.slice=a(this.slice,this),this.push=a(this.push,this),this.keys=a(this.keys,this),this.values=a(this.values,this),this.remove=a(this.remove,this),this.put=a(this.put,this),this.stateChanged=a(this.stateChanged,this),this.get=a(this.get,this),this.length=0,this.dict={},this.didValsStateChange=!1,this.didKeysStateChange=!1,this.allVals=[],this.allKeys=[]}return b.prototype.get=function(a){return this.dict[a]},b.prototype.stateChanged=function(){return this.didValsStateChange=!0,this.didKeysStateChange=!0},b.prototype.put=function(a,b){return null==this.get(a)&&this.length++,this.stateChanged(),this.dict[a]=b},b.prototype.remove=function(a,b){var c;return null==b&&(b=!1),b&&!this.get(a)?void 0:(c=this.dict[a],delete this.dict[a],this.length--,this.stateChanged(),c)},b.prototype.valuesOrKeys=function(a){var b,c;return null==a&&(a="Keys"),this["did"+a+"StateChange"]?(c=[],b=[],_.each(this.dict,function(a,d){return c.push(a),b.push(d)}),this.didKeysStateChange=!1,this.didValsStateChange=!1,this.allVals=c,this.allKeys=b,this["all"+a]):this["all"+a]},b.prototype.values=function(){return this.valuesOrKeys("Vals")},b.prototype.keys=function(){return this.valuesOrKeys()},b.prototype.push=function(a,b){return null==b&&(b="key"),this.put(a[b],a)},b.prototype.slice=function(){return this.keys().map(function(a){return function(b){return a.remove(b)}}(this))},b.prototype.removeAll=function(){return this.slice()},b.prototype.each=function(a){return _.each(this.dict,function(b,c){return a(b)})},b.prototype.map=function(a){return _.map(this.dict,function(b,c){return a(b)})},b}()})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropertyAction",["uiGmapLogger",function(a){var b;return b=function(a){return this.setIfChange=function(b,c){var d;return d=this.exp,_.isEqual(c,b)?void 0:a(d,b)},this.sic=this.setIfChange,this}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapClustererMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap","uiGmapEventsHelper",function(c,d,e,f){var g;return g=function(){function g(b,d,f,h){null==d&&(d={}),this.opt_options=null!=f?f:{},this.opt_events=h,this.checkSync=a(this.checkSync,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.attachEvents=a(this.attachEvents,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=g.type,this.clusterer=new NgMapMarkerClusterer(b,d,this.opt_options),this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.clusterer.setIgnoreHidden(!0),this.noDrawOnSingleAddRemoves=!0,c.info(this)}return g.type="ClustererMarkerManager",g.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",c.error(b)):void 0},g.prototype.add=function(a){return this.checkKey(a),this.clusterer.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},g.prototype.update=function(a){return this.remove(a),this.add(a)},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(this.clusterer.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},g.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){return this.clusterer.repaint()},g.prototype.clear=function(){return this.removeMany(this.getGMarkers()),this.clusterer.repaint()},g.prototype.attachEvents=function(a,d){var e,f,g;if(this.listeners=[],b.isDefined(a)&&null!=a&&b.isObject(a)){g=[];for(f in a)e=a[f],a.hasOwnProperty(f)&&b.isFunction(a[f])?(c.info(d+": Attaching event: "+f+" to clusterer"),g.push(this.listeners.push(google.maps.event.addListener(this.clusterer,f,a[f])))):g.push(void 0);return g}},g.prototype.clearEvents=function(){return f.removeEvents(this.listeners),this.listeners=[]},g.prototype.destroy=function(){return this.clearEvents(),this.clear()},g.prototype.fit=function(){return d.fit(this.getGMarkers(),this.clusterer.getMap())},g.prototype.getGMarkers=function(){return this.clusterer.getMarkers().values()},g.prototype.checkSync=function(){},g}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap",function(b,c,d){var e;return e=function(){function e(c,f,g){this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.handleOptDraw=a(this.handleOptDraw,this),this.clear=a(this.clear,this),this.destroy=a(this.destroy,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=e.type,this.gMap=c,this.gMarkers=new d,this.$log=b,this.$log.info(this)}return e.type="MarkerManager",e.prototype.add=function(a,c){var d,e;if(null==c&&(c=!0),null==a.key)throw e="gMarker.key undefined and it is REQUIRED!!",b.error(e),e;return d=this.gMarkers.get(a.key),d?void 0:(this.handleOptDraw(a,c,!0),this.gMarkers.put(a.key,a))},e.prototype.update=function(a,b){return null==b&&(b=!0),this.remove(a,b),this.add(a,b)},e.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},e.prototype.remove=function(a,b){return null==b&&(b=!0),this.handleOptDraw(a,b,!1),this.gMarkers.get(a.key)?this.gMarkers.remove(a.key):void 0},e.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},e.prototype.draw=function(){var a;return a=[],this.gMarkers.each(function(b){return function(c){return c.isDrawn?void 0:c.doAdd?(c.setMap(b.gMap),c.isDrawn=!0):a.push(c)}}(this)),a.forEach(function(a){return function(b){return b.isDrawn=!1,a.remove(b,!0)}}(this))},e.prototype.destroy=function(){return this.clear()},e.prototype.clear=function(){return this.gMarkers.each(function(a){return a.setMap(null)}),delete this.gMarkers,this.gMarkers=new d},e.prototype.handleOptDraw=function(a,b,c){return b===!0?(c?a.setMap(this.gMap):a.setMap(null),a.isDrawn=!0):(a.isDrawn=!1,a.doAdd=c)},e.prototype.fit=function(){return c.fit(this.getGMarkers(),this.gMap)},e.prototype.getGMarkers=function(){return this.gMarkers.values()},e}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapSpiderfierMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap","uiGmapMarkerSpiderfier",function(c,d,e,f){var g;return g=function(){
function g(b,d,h,i,j){null==d&&(d={}),this.opt_options=null!=h?h:{},this.opt_events=i,this.scope=j,this.checkSync=a(this.checkSync,this),this.isSpiderfied=a(this.isSpiderfied,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.attachEvents=a(this.attachEvents,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=g.type,this.markerSpiderfier=new f(b,this.opt_options),this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.noDrawOnSingleAddRemoves=!0,c.info(this)}return g.type="SpiderfierMarkerManager",g.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",c.error(b)):void 0},g.prototype.add=function(a){return a.setMap(this.markerSpiderfier.map),this.checkKey(a),this.markerSpiderfier.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},g.prototype.update=function(a){return this.remove(a),this.add(a)},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(a.setMap(null),this.markerSpiderfier.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},g.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){},g.prototype.clear=function(){return this.removeMany(this.getGMarkers())},g.prototype.attachEvents=function(a,d){return b.isDefined(a)&&null!=a&&b.isObject(a)?_.each(a,function(e){return function(f,g){return a.hasOwnProperty(g)&&b.isFunction(a[g])?(c.info(d+": Attaching event: "+g+" to markerSpiderfier"),e.markerSpiderfier.addListener(g,function(){return"spiderfy"===g||"unspiderfy"===g?e.scope.$evalAsync(a[g].apply(a,arguments)):e.scope.$evalAsync(a[g].apply(a,[arguments[0],g,arguments[0].model,arguments]))})):void 0}}(this)):void 0},g.prototype.clearEvents=function(a,d){var e,f;if(b.isDefined(a)&&null!=a&&b.isObject(a))for(f in a)e=a[f],a.hasOwnProperty(f)&&b.isFunction(a[f])&&(c.info(d+": Clearing event: "+f+" to markerSpiderfier"),this.markerSpiderfier.clearListeners(f))},g.prototype.destroy=function(){return this.clearEvents(this.opt_events,"opt_events"),this.clear()},g.prototype.fit=function(){return d.fit(this.getGMarkers(),this.markerSpiderfier.map)},g.prototype.getGMarkers=function(){return this.markerSpiderfier.getMarkers()},g.prototype.isSpiderfied=function(){return _.find(this.getGMarkers(),function(a){return null!=(null!=a?a._omsData:void 0)})},g.prototype.checkSync=function(){},g}()}])}.call(this),function(){b.module("uiGmapgoogle-maps").factory("uiGmapadd-events",["$timeout",function(a){var c,d;return c=function(b,c,d){return google.maps.event.addListener(b,c,function(){return d.apply(this,arguments),a(function(){},!0)})},d=function(a,d,e){var f;return e?c(a,d,e):(f=[],b.forEach(d,function(b,d){return f.push(c(a,d,b))}),function(){return b.forEach(f,function(a){return google.maps.event.removeListener(a)}),f=null})}}])}.call(this),function(){b.module("uiGmapgoogle-maps").factory("uiGmaparray-sync",["uiGmapadd-events",function(a){return function(c,d,e,f){var g,h,i,j,k,l,m,n,o;return j=!1,n=d.$eval(e),d["static"]||(k={set_at:function(a){var b;if(!j&&(b=c.getAt(a)))return b.lng&&b.lat?(n[a].latitude=b.lat(),n[a].longitude=b.lng()):n[a]=b},insert_at:function(a){var b;if(!j&&(b=c.getAt(a)))return b.lng&&b.lat?n.splice(a,0,{latitude:b.lat(),longitude:b.lng()}):n.splice(a,0,b)},remove_at:function(a){return j?void 0:n.splice(a,1)}},"Polygon"===n.type?g=n.coordinates[0]:"LineString"===n.type&&(g=n.coordinates),h={set_at:function(a){var b;if(!j&&(b=c.getAt(a),b&&b.lng&&b.lat))return g[a][1]=b.lat(),g[a][0]=b.lng()},insert_at:function(a){var b;if(!j&&(b=c.getAt(a),b&&b.lng&&b.lat))return g.splice(a,0,[b.lng(),b.lat()])},remove_at:function(a){return j?void 0:g.splice(a,1)}},m=a(c,b.isUndefined(n.type)?k:h)),l=function(a){var b,d,e,g,h,i,k,l;if(j=!0,i=c,b=!1,a){for(d=0,k=i.getLength(),g=a.length,e=Math.min(k,g),h=void 0;e>d;)l=i.getAt(d),h=a[d],"function"==typeof h.equals?h.equals(l)||(i.setAt(d,h),b=!0):(l.lat()!==h.latitude||l.lng()!==h.longitude)&&(i.setAt(d,new google.maps.LatLng(h.latitude,h.longitude)),b=!0),d++;for(;g>d;)h=a[d],"function"==typeof h.lat&&"function"==typeof h.lng?i.push(h):i.push(new google.maps.LatLng(h.latitude,h.longitude)),b=!0,d++;for(;k>d;)i.pop(),b=!0,d++}return j=!1,b?f(i):void 0},i=function(a){var b,d,e,g,h,i,k,l,m;if(j=!0,k=c,d=!1,a){for("Polygon"===n.type?b=a.coordinates[0]:"LineString"===n.type&&(b=a.coordinates),e=0,l=k.getLength(),h=b.length,g=Math.min(l,h),i=void 0;g>e;)m=k.getAt(e),i=b[e],(m.lat()!==i[1]||m.lng()!==i[0])&&(k.setAt(e,new google.maps.LatLng(i[1],i[0])),d=!0),e++;for(;h>e;)i=b[e],k.push(new google.maps.LatLng(i[1],i[0])),d=!0,e++;for(;l>e;)k.pop(),d=!0,e++}return j=!1,d?f(k):void 0},d["static"]||(o=b.isUndefined(n.type)?d.$watchCollection(e,l):d.$watch(e,i,!0)),function(){return m&&(m(),m=null),o?(o(),o=null):void 0}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChromeFixes",["$timeout",function(a){return{maybeRepaint:function(b){return b?(b.style.opacity=.9,a(function(){return b.style.opacity=1})):void 0}}}])}.call(this),function(){b.module("uiGmapgoogle-maps").service("uiGmapObjectIterators",function(){var a,b,c,d;return a=["length","forEach","map"],b=[],c=function(b){return b.forEach=function(c){return _.each(_.omit(b,a),function(a){return _.isFunction(a)?void 0:c(a)})},b},b.push(c),d=function(b){return b.map=function(c){return _.map(_.omit(b,a),function(a){return _.isFunction(a)?void 0:c(a)})},b},b.push(d),{slapMap:d,slapForEach:c,slapAll:function(a){return b.forEach(function(b){return b(a)}),a}}})}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.options.builders").service("uiGmapCommonOptionsBuilder",["uiGmapBaseObject","uiGmapLogger","uiGmapModelKey",function(d,e,f){var g;return g=function(d){function f(){return this.watchProps=a(this.watchProps,this),this.buildOpts=a(this.buildOpts,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.props=["clickable","draggable","editable","visible",{prop:"stroke",isColl:!0}],f.prototype.getCorrectModel=function(a){return b.isDefined(null!=a?a.model:void 0)?a.model:a},f.prototype.buildOpts=function(a,c,d){var f,g,h;return null==a&&(a={}),null==d&&(d={}),this.scope?this.map?(f=this.getCorrectModel(this.scope),h=this.scopeOrModelVal("stroke",this.scope,f),g=b.extend(a,this.DEFAULTS,{map:this.map,strokeColor:null!=h?h.color:void 0,strokeOpacity:null!=h?h.opacity:void 0,strokeWeight:null!=h?h.weight:void 0}),b.forEach(b.extend(d,{clickable:!0,draggable:!1,editable:!1,"static":!1,fit:!1,visible:!0,zIndex:0,icons:[]}),function(a){return function(d,e){var h;return h=c?c[e]:a.scopeOrModelVal(e,a.scope,f),b.isUndefined(h)?g[e]=d:g[e]=f[e]}}(this)),g["static"]&&(g.editable=!1),g):void e.error("this.map not defined in CommonOptionsBuilder can not buildOpts"):void e.error("this.scope not defined in CommonOptionsBuilder can not buildOpts")},f.prototype.watchProps=function(a){return null==a&&(a=this.props),a.forEach(function(a){return function(b){return null!=a.attrs[b]||null!=a.attrs[null!=b?b.prop:void 0]?(null!=b?b.isColl:void 0)?a.scope.$watchCollection(b.prop,a.setMyOptions):a.scope.$watch(b,a.setMyOptions):void 0}}(this))},f}(f)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.options.builders").factory("uiGmapPolylineOptionsBuilder",["uiGmapCommonOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{path:a},b,{geodesic:!1})},c}(b)}]).factory("uiGmapShapeOptionsBuilder",["uiGmapCommonOptionsBuilder",function(c){var d;return d=function(c){function d(){return d.__super__.constructor.apply(this,arguments)}return a(d,c),d.prototype.buildOpts=function(a,c,e){var f,g;return g=this.getCorrectModel(this.scope),f=c?c.fill:this.scopeOrModelVal("fill",this.scope,g),a=b.extend(a,{fillColor:null!=f?f.color:void 0,fillOpacity:null!=f?f.opacity:void 0}),d.__super__.buildOpts.call(this,a,c,e)},d}(c)}]).factory("uiGmapPolygonOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{path:a},b,{geodesic:!1})},c}(b)}]).factory("uiGmapRectangleOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{bounds:a},b)},c}(b)}]).factory("uiGmapCircleOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b,d){return c.__super__.buildOpts.call(this,{center:a,radius:b},d)},c}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.options").service("uiGmapMarkerOptions",["uiGmapLogger","uiGmapGmapUtil",function(a,c){return _.extend(c,{createOptions:function(a,d,e,f){var g;return null==e&&(e={}),g=b.extend({},e,{position:null!=e.position?e.position:c.getCoords(a),visible:null!=e.visible?e.visible:c.validateCoords(a)}),(null!=e.icon||null!=d)&&(g=b.extend(g,{icon:null!=e.icon?e.icon:d})),null!=f&&(g.map=f),g},isLabel:function(a){return null==a?!1:null!=a.labelContent||null!=a.labelAnchor||null!=a.labelClass||null!=a.labelStyle||null!=a.labelVisible}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapBasePolyChildModel",["uiGmapLogger","$timeout","uiGmaparray-sync","uiGmapGmapUtil","uiGmapEventsHelper",function(d,e,f,g,h){return function(d,e){var i;return i=function(d){function i(c,d,g,i,j,k){var l;this.scope=c,this.attrs=d,this.map=g,this.defaults=i,this.model=j,this.clean=a(this.clean,this),this.clonedModel=_.clone(this.model,!0),this.isDragging=!1,this.internalEvents={dragend:function(a){return function(){return _.defer(function(){return a.isDragging=!1})}}(this),dragstart:function(a){return function(){return a.isDragging=!0}}(this)},l=function(a){return function(){var c;if(!a.isDragging)return a.pathPoints=a.convertPathPoints(a.scope.path),null!=a.gObject&&a.clean(),null!=a.scope.model&&(c=a.scope),a.pathPoints.length>0&&(a.gObject=e(a.buildOpts(a.pathPoints,c))),a.gObject?(f(a.gObject.getPath(),a.scope,"path",function(b){return a.pathPoints=b,null!=k?k():void 0}),b.isDefined(a.scope.events)&&b.isObject(a.scope.events)&&(a.listeners=a.model?h.setEvents(a.gObject,a.scope,a.model):h.setEvents(a.gObject,a.scope,a.scope)),a.internalListeners=a.model?h.setEvents(a.gObject,{events:a.internalEvents},a.model):h.setEvents(a.gObject,{events:a.internalEvents},a.scope)):void 0}}(this),l(),this.scope.$watch("path",function(a){return function(b,c){return _.isEqual(b,c)&&a.gObject?void 0:l()}}(this),!0),!this.scope["static"]&&b.isDefined(this.scope.editable)&&this.scope.$watch("editable",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setEditable(b):void 0):void 0}}(this),!0),b.isDefined(this.scope.draggable)&&this.scope.$watch("draggable",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setDraggable(b):void 0):void 0}}(this),!0),b.isDefined(this.scope.visible)&&this.scope.$watch("visible",function(a){return function(b,c){var d;return b!==c&&(b=!a.isFalse(b)),null!=(d=a.gObject)?d.setVisible(b):void 0}}(this),!0),b.isDefined(this.scope.geodesic)&&this.scope.$watch("geodesic",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.weight)&&this.scope.$watch("stroke.weight",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.color)&&this.scope.$watch("stroke.color",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.opacity)&&this.scope.$watch("stroke.opacity",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.icons)&&this.scope.$watch("icons",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),this.scope.$on("$destroy",function(a){return function(){return a.clean(),a.scope=null}}(this)),b.isDefined(this.scope.fill)&&b.isDefined(this.scope.fill.color)&&this.scope.$watch("fill.color",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this)),b.isDefined(this.scope.fill)&&b.isDefined(this.scope.fill.opacity)&&this.scope.$watch("fill.opacity",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this)),b.isDefined(this.scope.zIndex)&&this.scope.$watch("zIndex",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this))}return c(i,d),i.include(g),i.prototype.clean=function(){var a;return h.removeEvents(this.listeners),h.removeEvents(this.internalListeners),null!=(a=this.gObject)&&a.setMap(null),this.gObject=null},i}(d)}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapDrawFreeHandChildModel",["uiGmapLogger","$q",function(a,b){var c,d;return c=function(a,b,c){var d,e;return e=new google.maps.Polyline({map:a,clickable:!1}),d=google.maps.event.addListener(a,"mousemove",function(a){return e.getPath().push(a.latLng)}),void google.maps.event.addListenerOnce(a,"mouseup",function(f){var g;return google.maps.event.removeListener(d),g=e.getPath(),e.setMap(null),b.push(new google.maps.Polygon({map:a,path:g})),e=null,google.maps.event.clearListeners(a.getDiv(),"mousedown"),c()})},d=function(d,e){var f,g;return this.map=d,f=function(b){return function(){var c;return c={draggable:!1,disableDefaultUI:!0,scrollwheel:!1,disableDoubleClickZoom:!1},a.info("disabling map move"),b.map.setOptions(c)}}(this),g=function(a){return function(){var b,c;return b={draggable:!0,disableDefaultUI:!1,scrollwheel:!0,disableDoubleClickZoom:!0},null!=(c=a.deferred)&&c.resolve(),_.defer(function(){return a.map.setOptions(_.extend(b,e.options))})}}(this),this.engage=function(d){return function(e){return d.polys=e,d.deferred=b.defer(),f(),a.info("DrawFreeHandChildModel is engaged (drawing)."),google.maps.event.addDomListener(d.map.getDiv(),"mousedown",function(a){return c(d.map,d.polys,g)}),d.deferred.promise}}(this),this}}])}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapMarkerChildModel",["uiGmapModelKey","uiGmapGmapUtil","uiGmapLogger","uiGmapEventsHelper","uiGmapPropertyAction","uiGmapMarkerOptions","uiGmapIMarker","uiGmapMarkerManager","uiGmapPromise",function(b,e,f,g,h,i,j,k,l){var m;return m=function(b){function m(a,b,d,e,g,i,j,k,o,p){var q;this.model=b,this.keys=d,this.gMap=e,this.defaults=g,this.doClick=i,this.gManager=j,this.doDrawSelf=null!=k?k:!0,this.trackModel=null!=o?o:!0,this.needRedraw=null!=p?p:!1,this.internalEvents=c(this.internalEvents,this),this.setLabelOptions=c(this.setLabelOptions,this),this.setOptions=c(this.setOptions,this),this.setIcon=c(this.setIcon,this),this.setCoords=c(this.setCoords,this),this.isNotValid=c(this.isNotValid,this),this.maybeSetScopeValue=c(this.maybeSetScopeValue,this),this.createMarker=c(this.createMarker,this),this.setMyScope=c(this.setMyScope,this),this.updateModel=c(this.updateModel,this),this.handleModelChanges=c(this.handleModelChanges,this),this.destroy=c(this.destroy,this),this.clonedModel=_.clone(this.model,!0),this.deferred=l.defer(),_.each(this.keys,function(a){return function(b,c){var d;return d=a.keys[c],null!=d&&!_.isFunction(d)&&_.isString(d)?a[c+"Key"]=d:void 0}}(this)),this.idKey=this.idKeyKey||"id",null!=this.model[this.idKey]&&(this.id=this.model[this.idKey]),m.__super__.constructor.call(this,a),this.scope.getGMarker=function(a){return function(){return a.gObject}}(this),this.firstTime=!0,this.trackModel?(this.scope.model=this.model,this.scope.$watch("model",function(a){return function(b,c){return b!==c?a.handleModelChanges(b,c):void 0}}(this),!0)):(q=new h(function(b){return function(c,d){return b.firstTime?void 0:b.setMyScope(c,a)}}(this),!1),_.each(this.keys,function(b,c){return a.$watch(c,q.sic,!0)})),this.scope.$on("$destroy",function(a){return function(){return n(a)}}(this)),this.createMarker(this.model),f.info(this)}var n;return d(m,b),m.include(e),m.include(g),m.include(i),n=function(a){return null!=(null!=a?a.gObject:void 0)&&(a.removeEvents(a.externalListeners),a.removeEvents(a.internalListeners),null!=a?a.gObject:void 0)?(a.removeFromManager&&a.gManager.remove(a.gObject),a.gObject.setMap(null),a.gObject=null):void 0},m.prototype.destroy=function(a){return null==a&&(a=!0),this.removeFromManager=a,this.scope.$destroy()},m.prototype.handleModelChanges=function(a,b){var c,d,e;return c=this.getChanges(a,b,j.keys),this.firstTime?void 0:(d=0,e=_.keys(c).length,_.each(c,function(c){return function(f,g){var h;return d+=1,h=e===d,c.setMyScope(g,a,b,!1,!0,h),c.needRedraw=!0}}(this)))},m.prototype.updateModel=function(a){return this.clonedModel=_.clone(a,!0),this.setMyScope("all",a,this.model)},m.prototype.renderGMarker=function(b,c){var d,e,g;if(null==b&&(b=!0),d=this.getProp("coords",this.scope,this.model),null!=(null!=(g=this.gManager)?g.isSpiderfied:void 0)&&(e=this.gManager.isSpiderfied()),null!=d){if(!this.validateCoords(d))return void f.debug("MarkerChild does not have coords yet. They may be defined later.");if(null!=c&&c(),b&&this.gObject&&this.gManager.add(this.gObject),e)return this.gManager.markerSpiderfier.spiderListener(this.gObject,a.event)}else if(b&&this.gObject)return this.gManager.remove(this.gObject)},m.prototype.setMyScope=function(a,b,c,d,e){var f;switch(null==c&&(c=void 0),null==d&&(d=!1),null==e&&(e=!0),null==b?b=this.model:this.model=b,this.gObject||(this.setOptions(this.scope,e),f=!0),a){case"all":return _.each(this.keys,function(a){return function(f,g){return a.setMyScope(g,b,c,d,e)}}(this));case"icon":return this.maybeSetScopeValue("icon",b,c,this.iconKey,this.evalModelHandle,d,this.setIcon,e);case"coords":return this.maybeSetScopeValue("coords",b,c,this.coordsKey,this.evalModelHandle,d,this.setCoords,e);case"options":if(!f)return this.createMarker(b,c,d,e)}},m.prototype.createMarker=function(a,b,c,d){return null==b&&(b=void 0),null==c&&(c=!1),null==d&&(d=!0),this.maybeSetScopeValue("options",a,b,this.optionsKey,this.evalModelHandle,c,this.setOptions,d),this.firstTime=!1},m.prototype.maybeSetScopeValue=function(a,b,c,d,e,f,g,h){return null==g&&(g=void 0),null==h&&(h=!0),null!=g?g(this.scope,h):void 0},m.doDrawSelf&&doDraw&&m.gManager.draw(),m.prototype.isNotValid=function(a,b){var c,d;return null==b&&(b=!0),d=b?void 0===this.gObject:!1,c=this.trackModel?!1:a.$id!==this.scope.$id,c||d},m.prototype.setCoords=function(a,b){return null==b&&(b=!0),this.isNotValid(a)||null==this.gObject?void 0:this.renderGMarker(b,function(b){return function(){var c,d,e;return d=b.getProp("coords",a,b.model),c=b.getCoords(d),e=b.gObject.getPosition(),null==e||null==c||c.lng()!==e.lng()||c.lat()!==e.lat()?(b.gObject.setPosition(c),b.gObject.setVisible(b.validateCoords(d))):void 0}}(this))},m.prototype.setIcon=function(a,b){return null==b&&(b=!0),this.isNotValid(a)||null==this.gObject?void 0:this.renderGMarker(b,function(b){return function(){var c,d,e;return e=b.gObject.getIcon(),d=b.getProp("icon",a,b.model),e!==d?(b.gObject.setIcon(d),c=b.getProp("coords",a,b.model),b.gObject.setPosition(b.getCoords(c)),b.gObject.setVisible(b.validateCoords(c))):void 0}}(this))},m.prototype.setOptions=function(a,b){var c;if(null==b&&(b=!0),!this.isNotValid(a,!1)){if(this.renderGMarker(b,function(b){return function(){var c,d,e;return d=b.getProp("coords",a,b.model),e=b.getProp("icon",a,b.model),c=b.getProp("options",a,b.model),b.opts=b.createOptions(d,e,c),b.isLabel(b.gObject)!==b.isLabel(b.opts)&&null!=b.gObject&&(b.gManager.remove(b.gObject),b.gObject=void 0),null!=b.gObject&&b.gObject.setOptions(b.setLabelOptions(b.opts)),b.gObject||(b.isLabel(b.opts)?b.gObject=new MarkerWithLabel(b.setLabelOptions(b.opts)):b.opts.content?(b.gObject=new RichMarker(b.opts),b.gObject.getIcon=b.gObject.getContent,b.gObject.setIcon=b.gObject.setContent):b.gObject=new google.maps.Marker(b.opts),_.extend(b.gObject,{model:b.model})),b.externalListeners&&b.removeEvents(b.externalListeners),b.internalListeners&&b.removeEvents(b.internalListeners),b.externalListeners=b.setEvents(b.gObject,b.scope,b.model,["dragend"]),b.internalListeners=b.setEvents(b.gObject,{events:b.internalEvents(),$evalAsync:function(){}},b.model),null!=b.id?b.gObject.key=b.id:void 0}}(this)),this.gObject&&(this.gObject.getMap()||this.gManager.type!==k.type))this.deferred.resolve(this.gObject);else{if(!this.gObject)return this.deferred.reject("gObject is null");(null!=(c=this.gObject)?c.getMap():0)&&this.gManager.type===k.type||(f.debug("gObject has no map yet"),this.deferred.resolve(this.gObject))}return this.model[this.fitKey]?this.gManager.fit():void 0}},m.prototype.setLabelOptions=function(a){return a.labelAnchor&&(a.labelAnchor=this.getLabelPositionPoint(a.labelAnchor)),a},m.prototype.internalEvents=function(){return{dragend:function(a){return function(b,c,d,e){var f,g,h;return g=a.trackModel?a.scope.model:a.model,h=a.setCoordsFromEvent(a.modelOrKey(g,a.coordsKey),a.gObject.getPosition()),g=a.setVal(d,a.coordsKey,h),f=a.scope.events,null!=(null!=f?f.dragend:void 0)&&f.dragend(b,c,g,e),a.scope.$apply()}}(this),click:function(a){return function(b,c,d,e){var f;return f=a.getProp("click",a.scope,a.model),a.doClick&&null!=f?a.scope.$evalAsync(f(b,c,a.model,e)):void 0}}(this)}},m}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygonChildModel",["uiGmapBasePolyChildModel","uiGmapPolygonOptionsBuilder",function(b,c){var d,e,f;return f=function(a){return new google.maps.Polygon(a)},e=new b(c,f),d=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c}(e)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolylineChildModel",["uiGmapBasePolyChildModel","uiGmapPolylineOptionsBuilder",function(b,c){var d,e,f;return f=function(a){return new google.maps.Polyline(a)},e=b(c,f),d=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c}(e)}])}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapWindowChildModel",["uiGmapBaseObject","uiGmapGmapUtil","uiGmapLogger","$compile","$http","$templateCache","uiGmapChromeFixes","uiGmapEventsHelper",function(e,f,g,h,i,j,k,l){var m;return m=function(e){function m(a,b,d,e,f,h,i,j,k){var l;this.model=a,this.scope=b,this.opts=d,this.isIconVisibleOnClick=e,this.mapCtrl=f,this.markerScope=h,this.element=i,this.needToManualDestroy=null!=j?j:!1,this.markerIsVisibleAfterWindowClose=null!=k?k:!0,this.updateModel=c(this.updateModel,this),this.destroy=c(this.destroy,this),this.remove=c(this.remove,this),this.getLatestPosition=c(this.getLatestPosition,this),this.hideWindow=c(this.hideWindow,this),this.showWindow=c(this.showWindow,this),this.handleClick=c(this.handleClick,this),this.watchOptions=c(this.watchOptions,this),this.watchCoords=c(this.watchCoords,this),this.createGWin=c(this.createGWin,this),this.watchElement=c(this.watchElement,this),this.watchAndDoShow=c(this.watchAndDoShow,this),this.doShow=c(this.doShow,this),this.clonedModel=_.clone(this.model,!0),this.getGmarker=function(){var a,b;return null!=(null!=(a=this.markerScope)?a.getGMarker:void 0)&&null!=(b=this.markerScope)?b.getGMarker():void 0},this.listeners=[],this.createGWin(),l=this.getGmarker(),null!=l&&l.setClickable(!0),this.watchElement(),this.watchOptions(),this.watchCoords(),this.watchAndDoShow(),this.scope.$on("$destroy",function(a){return function(){return a.destroy()}}(this)),g.info(this)}return d(m,e),m.include(f),m.include(l),m.prototype.doShow=function(a){return this.scope.show===!0||a?this.showWindow():this.hideWindow()},m.prototype.watchAndDoShow=function(){return null!=this.model.show&&(this.scope.show=this.model.show),this.scope.$watch("show",this.doShow,!0),this.doShow()},m.prototype.watchElement=function(){return this.scope.$watch(function(a){return function(){var b,c;if(a.element||a.html)return a.html!==a.element.html()&&a.gObject?(null!=(b=a.opts)&&(b.content=void 0),c=a.gObject.isOpen(),a.remove(),a.createGWin(c)):void 0}}(this))},m.prototype.createGWin=function(b){var c,d,e,f,g;return null==b&&(b=!1),e=this.getGmarker(),d={},null!=this.opts&&(this.scope.coords&&(this.opts.position=this.getCoords(this.scope.coords)),d=this.opts),this.element&&(this.html=_.isObject(this.element)?this.element.html():this.element),c=this.scope.options?this.scope.options:d,this.opts=this.createWindowOptions(e,this.markerScope||this.scope,this.html,c),null!=this.opts?(this.gObject||(this.opts.boxClass&&a.InfoBox&&"function"==typeof a.InfoBox?this.gObject=new a.InfoBox(this.opts):this.gObject=new google.maps.InfoWindow(this.opts),this.listeners.push(google.maps.event.addListener(this.gObject,"domready",function(){return k.maybeRepaint(this.content)})),this.listeners.push(google.maps.event.addListener(this.gObject,"closeclick",function(a){return function(){return e&&(e.setAnimation(a.oldMarkerAnimation),a.markerIsVisibleAfterWindowClose&&_.delay(function(){return e.setVisible(!1),e.setVisible(a.markerIsVisibleAfterWindowClose)},250)),a.gObject.close(),a.model.show=!1,null!=a.scope.closeClick?a.scope.$evalAsync(a.scope.closeClick()):a.scope.$evalAsync()}}(this)))),this.gObject.setContent(this.opts.content),this.handleClick((null!=(f=this.scope)&&null!=(g=f.options)?g.forceClick:void 0)||b),this.doShow(this.gObject.isOpen())):void 0},m.prototype.watchCoords=function(){var a;return a=null!=this.markerScope?this.markerScope:this.scope,a.$watch("coords",function(a){return function(b,c){var d;if(b!==c){if(null==b)a.hideWindow();else if(!a.validateCoords(b))return void g.error("WindowChildMarker cannot render marker as scope.coords as no position on marker: "+JSON.stringify(a.model));if(d=a.getCoords(b),a.doShow(),a.gObject.setPosition(d),a.opts)return a.opts.position=d}}}(this),!0)},m.prototype.watchOptions=function(){return this.scope.$watch("options",function(a){return function(b,c){if(b!==c&&(a.opts=b,null!=a.gObject)){if(a.gObject.setOptions(a.opts),null!=a.opts.visible&&a.opts.visible)return a.showWindow();if(null!=a.opts.visible)return a.hideWindow()}}}(this),!0)},m.prototype.handleClick=function(a){var b,c;if(null!=this.gObject)return c=this.getGmarker(),b=function(a){return function(){return null==a.gObject&&a.createGWin(),a.showWindow(),null!=c?(a.initialMarkerVisibility=c.getVisible(),a.oldMarkerAnimation=c.getAnimation(),c.setVisible(a.isIconVisibleOnClick)):void 0}}(this),a&&b(),c?this.listeners=this.listeners.concat(this.setEvents(c,{events:{click:b}},this.model)):void 0},m.prototype.showWindow=function(){var a,c,d;return null!=this.gObject?(c=function(a){return function(){var b,c,d;if(!a.gObject.isOpen()){if(c=a.getGmarker(),null!=a.gObject&&null!=a.gObject.getPosition&&(d=a.gObject.getPosition()),c&&(d=c.getPosition()),!d)return;if(a.gObject.open(a.mapCtrl,c),b=a.gObject.isOpen(),a.model.show!==b)return a.model.show=b}}}(this),this.scope.templateUrl?i.get(this.scope.templateUrl,{cache:j}).then(function(a){return function(d){var e,f;return f=a.scope.$new(),b.isDefined(a.scope.templateParameter)&&(f.parameter=a.scope.templateParameter),e=h(d.data)(f),a.gObject.setContent(e[0]),c()}}(this)):this.scope.template?(d=this.scope.$new(),b.isDefined(this.scope.templateParameter)&&(d.parameter=this.scope.templateParameter),a=h(this.scope.template)(d),this.gObject.setContent(a[0]),c()):c()):void 0},m.prototype.hideWindow=function(){return null!=this.gObject&&this.gObject.isOpen()?this.gObject.close():void 0},m.prototype.getLatestPosition=function(a){var b;return b=this.getGmarker(),null==this.gObject||null==b||a?a?this.gObject.setPosition(a):void 0:this.gObject.setPosition(b.getPosition())},m.prototype.remove=function(){return this.hideWindow(),this.removeEvents(this.listeners),this.listeners.length=0,delete this.gObject,delete this.opts},m.prototype.destroy=function(a){var b;return null==a&&(a=!1),this.remove(),null==this.scope||(null!=(b=this.scope)?b.$$destroyed:void 0)||!this.needToManualDestroy&&!a?void 0:this.scope.$destroy()},m.prototype.updateModel=function(a){return this.clonedModel=_.clone(a,!0),_.extend(this.model,this.clonedModel)},m}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapBasePolysParentModel",["$timeout","uiGmapLogger","uiGmapModelKey","uiGmapModelsWatcher","uiGmapPropMap","uiGmap_async","uiGmapPromise","uiGmapFitHelper",function(d,e,f,g,h,i,j,k){return function(d,l,m){var n;return n=function(f){function n(b,c,f,g,i){this.element=c,this.attrs=f,this.gMap=g,this.defaults=i,this.maybeFit=a(this.maybeFit,this),this.createChild=a(this.createChild,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),
this.watchDestroy=a(this.watchDestroy,this),this.onDestroy=a(this.onDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),n.__super__.constructor.call(this,b),this["interface"]=d,this.$log=e,this.plurals=new h,_.each(d.scopeKeys,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.models=void 0,this.firstTime=!0,this.$log.info(this),this.createChildScopes()}return c(n,f),n.include(g),n.prototype.watchModels=function(a){return a.$watch("models",function(b){return function(c,d){return c!==d?b.doINeedToWipe(c)||a.doRebuildAll?b.rebuildAll(a,!0,!0):b.createChildScopes(!1):void 0}}(this),!0)},n.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},n.prototype.rebuildAll=function(a,b,c){return this.onDestroy(c).then(function(a){return function(){return b?a.createChildScopes():void 0}}(this))},n.prototype.onDestroy=function(a){return n.__super__.onDestroy.call(this,this.scope),i.promiseLock(this,j.promiseTypes["delete"],void 0,void 0,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy(!0)},i.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){var b;return null!=(b=a.plurals)?b.removeAll():void 0})}}(this))},n.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.rebuildAll(a,!1,!0)}}(this))},n.prototype.createChildScopes=function(a){return null==a&&(a=!0),b.isUndefined(this.scope.models)?void this.$log.error("No models to create "+m+"s from! I Need direct models!"):null!=this.gMap&&null!=this.scope.models?(this.watchIdKey(this.scope),a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1)):void 0},n.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},n.prototype.createAllNew=function(a,b){var c;return null==b&&(b=!1),this.models=a.models,this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.didQueueInitPromise(this,a)?void 0:(c=null,i.promiseLock(this,j.promiseTypes.create,"createAllNew",function(a){return c=a},function(b){return function(){return i.map(a.models,function(a){var d;return d=b.createChild(a,b.gMap),c&&(e.debug("createNew should fall through safely"),d.isEnabled=!1),d.pathPoints.getArray()},i.chunkSizeFrom(a.chunk)).then(function(a){return b.maybeFit(a),b.firstTime=!1})}}(this)))},n.prototype.pieceMeal=function(a,b){var c,d;return null==b&&(b=!0),a.$$destroyed?void 0:(c=null,d=null,this.models=a.models,null!=a&&this.modelsLength()&&this.plurals.length?i.promiseLock(this,j.promiseTypes.update,"pieceMeal",function(a){return c=a},function(b){return function(){return j.promise(function(){return b.figureOutState(b.idKey,a,b.plurals,b.modelKeyComparison)}).then(function(e){return d=e,d.updates.length&&i.each(d.updates,function(a){return _.extend(a.child.scope,a.model),a.child.model=a.model}),i.each(d.removals,function(a){return null!=a?(a.destroy(),b.plurals.remove(a.model[b.idKey]),c):void 0},i.chunkSizeFrom(a.chunk))}).then(function(){return i.each(d.adds,function(a){return c&&e.debug("pieceMeal should fall through safely"),b.createChild(a,b.gMap),c},i.chunkSizeFrom(a.chunk)).then(function(){return b.maybeFit()})})}}(this)):(this.inProgress=!1,this.rebuildAll(this.scope,!0,!0)))},n.prototype.createChild=function(a,b){var c,e;return e=this.scope.$new(!1),this.setChildScope(d.scopeKeys,e,a),e.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(e,b):void 0}}(this),!0),e["static"]=this.scope["static"],c=new l(e,this.attrs,b,this.defaults,a,function(a){return function(){return a.maybeFit()}}(this)),null==a[this.idKey]?void this.$log.error(m+" model has no id to assign a child to.\nThis is required for performance. Please assign id,\nor redirect id to a different key."):(this.plurals.put(a[this.idKey],c),c)},n.prototype.maybeFit=function(a){return null==a&&(a=this.plurals.map(function(a){return a.pathPoints})),this.scope.fit?(a=_.flatten(a),k.fit(a,this.gMap)):void 0},n}(f)}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapCircleParentModel",["uiGmapLogger","$timeout","uiGmapGmapUtil","uiGmapEventsHelper","uiGmapCircleOptionsBuilder",function(c,d,e,f,g){var h,i;return i=function(a,b){return a.settingFromDirective=!0,b(),d(function(){return a.settingFromDirective=!1})},h=function(d){function g(a,d,f,g,h){var j,k,l;this.attrs=f,this.map=g,this.DEFAULTS=h,this.scope=a,l=null,j=function(a){return function(){return l=null,null!=a.listeners?(a.removeEvents(a.listeners),a.listeners=void 0):void 0}}(this),k=new google.maps.Circle(this.buildOpts(e.getCoords(a.center),a.radius)),this.setMyOptions=function(b){return function(c,d){return a.settingFromDirective?void 0:_.isEqual(c,d)?void 0:k.setOptions(b.buildOpts(e.getCoords(a.center),a.radius))}}(this),this.props=this.props.concat([{prop:"center",isColl:!0},{prop:"fill",isColl:!0},"radius","zIndex"]),this.watchProps(),null!=this.scope.control&&(this.scope.control.getCircle=function(){return k}),j(),this.listeners=this.setEvents(k,a,a,["radius_changed"])||[],this.listeners.push(google.maps.event.addListener(k,"radius_changed",function(){var c,d;return c=k.getRadius(),c!==l?(l=c,d=function(){return i(a,function(){var b,d;return c!==a.radius&&(a.radius=c),(null!=(b=a.events)?b.radius_changed:void 0)&&_.isFunction(null!=(d=a.events)?d.radius_changed:void 0)?a.events.radius_changed(k,"radius_changed",a,arguments):void 0})},b.mock?d():a.$evalAsync(function(){return d()})):void 0})),this.listeners.push(google.maps.event.addListener(k,"center_changed",function(){return a.$evalAsync(function(){return i(a,function(){return b.isDefined(a.center.type)?(a.center.coordinates[1]=k.getCenter().lat(),a.center.coordinates[0]=k.getCenter().lng()):(a.center.latitude=k.getCenter().lat(),a.center.longitude=k.getCenter().lng())})})})),a.$on("$destroy",function(a){return function(){return j(),k.setMap(null)}}(this)),c.info(this)}return a(g,d),g.include(e),g.include(f),g}(g)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapDrawingManagerParentModel",["uiGmapLogger","$timeout","uiGmapBaseObject","uiGmapEventsHelper",function(b,c,d,e){var f;return f=function(b){function c(a,b,c,d){var e,f;this.scope=a,this.attrs=c,this.map=d,e=new google.maps.drawing.DrawingManager(this.scope.options),e.setMap(this.map),f=void 0,null!=this.scope.control&&(this.scope.control.getDrawingManager=function(){return e}),!this.scope["static"]&&this.scope.options&&this.scope.$watch("options",function(a){return null!=e?e.setOptions(a):void 0},!0),null!=this.scope.events&&(f=this.setEvents(e,this.scope,this.scope),this.scope.$watch("events",function(a){return function(b,c){return _.isEqual(b,c)?void 0:(null!=f&&a.removeEvents(f),f=a.setEvents(e,a.scope,a.scope))}}(this))),this.scope.$on("$destroy",function(a){return function(){return null!=f&&a.removeEvents(f),e.setMap(null),e=null}}(this))}return a(c,b),c.include(e),c}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIMarkerParentModel",["uiGmapModelKey","uiGmapLogger",function(d,e){var f;return f=function(d){function f(c,d,g,h){if(this.scope=c,this.element=d,this.attrs=g,this.map=h,this.onWatch=a(this.onWatch,this),this.watch=a(this.watch,this),this.validateScope=a(this.validateScope,this),f.__super__.constructor.call(this,this.scope),this.$log=e,!this.validateScope(this.scope))throw new String("Unable to construct IMarkerParentModel due to invalid scope");this.doClick=b.isDefined(this.attrs.click),null!=this.scope.options&&(this.DEFAULTS=this.scope.options),this.watch("coords",this.scope),this.watch("icon",this.scope),this.watch("options",this.scope),this.scope.$on("$destroy",function(a){return function(){return a.onDestroy(a.scope)}}(this))}return c(f,d),f.prototype.DEFAULTS={},f.prototype.validateScope=function(a){var b;return null==a?(this.$log.error(this.constructor.name+": invalid scope used"),!1):(b=null!=a.coords,b?b:(this.$log.error(this.constructor.name+": no valid coords attribute found"),!1))},f.prototype.watch=function(a,b,c){return null==c&&(c=!0),b.$watch(a,function(c){return function(d,e){return _.isEqual(d,e)?void 0:c.onWatch(a,b,d,e)}}(this),c)},f.prototype.onWatch=function(a,b,c,d){},f}(d)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIWindowParentModel",["uiGmapModelKey","uiGmapGmapUtil","uiGmapLogger",function(b,c,d){var e;return e=function(b){function e(a,b,c,f,g,h,i,j){e.__super__.constructor.call(this,a),this.$log=d,this.$timeout=g,this.$compile=h,this.$http=i,this.$templateCache=j,this.DEFAULTS={},null!=a.options&&(this.DEFAULTS=a.options)}return a(e,b),e.include(c),e.prototype.getItem=function(a,b,c){return"models"===b?a[b][c]:a[b].get(c)},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapLayerParentModel",["uiGmapBaseObject","uiGmapLogger","$timeout",function(d,e,f){var g;return g=function(d){function f(c,d,f,g,h,i){return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.onLayerCreated=null!=h?h:void 0,this.$log=null!=i?i:e,this.createGoogleLayer=a(this.createGoogleLayer,this),null==this.attrs.type?void this.$log.info("type attribute for the layer directive is mandatory. Layer creation aborted!!"):(this.createGoogleLayer(),this.doShow=!0,b.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.gObject.setMap(this.gMap),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.gObject.setMap(a.gMap):a.gObject.setMap(null)):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return b!==c&&a.doShow?a.gObject.setOptions(b):void 0}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.gObject.setMap(null)}}(this)))}return c(f,d),f.prototype.createGoogleLayer=function(){var a;return null==this.attrs.options?this.gObject=void 0===this.attrs.namespace?new google.maps[this.attrs.type]:new google.maps[this.attrs.namespace][this.attrs.type]:this.gObject=void 0===this.attrs.namespace?new google.maps[this.attrs.type](this.scope.options):new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options),null!=this.gObject&&this.doShow&&this.gObject.setMap(this.gMap),null!=this.gObject&&null!=this.onLayerCreated&&"function"==typeof(a=this.onLayerCreated(this.scope,this.gObject))?a(this.gObject):void 0},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMapTypeParentModel",["uiGmapBaseObject","uiGmapLogger",function(d,e){var f;return f=function(d){function f(c,d,f,g,h){return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.$log=null!=h?h:e,this.hideOverlay=a(this.hideOverlay,this),this.showOverlay=a(this.showOverlay,this),this.refreshMapType=a(this.refreshMapType,this),this.createMapType=a(this.createMapType,this),null==this.attrs.options?void this.$log.info("options attribute for the map-type directive is mandatory. Map type creation aborted!!"):(this.id=this.gMap.overlayMapTypesCount=this.gMap.overlayMapTypesCount+1||0,this.doShow=!0,this.createMapType(),b.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.showOverlay(),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.showOverlay():a.hideOverlay()):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),b.isDefined(this.attrs.refresh)&&this.scope.$watch("refresh",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.hideOverlay(),a.mapType=null}}(this)))}return c(f,d),f.prototype.createMapType=function(){if(null!=this.scope.options.getTile)this.mapType=this.scope.options;else{if(null==this.scope.options.getTileUrl)return void this.$log.info("options should provide either getTile or getTileUrl methods. Map type creation aborted!!");this.mapType=new google.maps.ImageMapType(this.scope.options)}return this.attrs.id&&this.scope.id&&(this.gMap.mapTypes.set(this.scope.id,this.mapType),b.isDefined(this.attrs.show)||(this.doShow=!1)),this.mapType.layerId=this.id},f.prototype.refreshMapType=function(){return this.hideOverlay(),this.mapType=null,this.createMapType(),this.doShow&&null!=this.gMap?this.showOverlay():void 0},f.prototype.showOverlay=function(){return this.gMap.overlayMapTypes.push(this.mapType)},f.prototype.hideOverlay=function(){var a;return a=!1,this.gMap.overlayMapTypes.forEach(function(b){return function(c,d){a||c.layerId!==b.id||(a=!0,b.gMap.overlayMapTypes.removeAt(d))}}(this))},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMarkersParentModel",["uiGmapIMarkerParentModel","uiGmapModelsWatcher","uiGmapPropMap","uiGmapMarkerChildModel","uiGmap_async","uiGmapClustererMarkerManager","uiGmapMarkerManager","$timeout","uiGmapIMarker","uiGmapPromise","uiGmapGmapUtil","uiGmapLogger","uiGmapSpiderfierMarkerManager",function(d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r;return r=function(a,b){return b.plurals=new f,b.scope.plurals=b.plurals,b},q=function(d){function k(b,c,d,e){this.maybeExecMappedEvent=a(this.maybeExecMappedEvent,this),this.onDestroy=a(this.onDestroy,this),this.newChildMarker=a(this.newChildMarker,this),this.pieceMeal=a(this.pieceMeal,this),this.rebuildAll=a(this.rebuildAll,this),this.createAllNew=a(this.createAllNew,this),this.bindToTypeEvents=a(this.bindToTypeEvents,this),this.createChildScopes=a(this.createChildScopes,this),this.validateScope=a(this.validateScope,this),this.onWatch=a(this.onWatch,this);var g;k.__super__.constructor.call(this,b,c,d,e),this["interface"]=l,g=this,r(new f,this),this.scope.pluralsUpdate={updateCtr:0},this.$log.info(this),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,this.setIdKey(this.scope),this.scope.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.modelsLength()||(this.modelsRendered=!1),this.scope.$watch("models",function(a){return function(b,c){if(!_.isEqual(b,c)||!a.modelsRendered){if(0===b.length&&0===c.length)return;return a.modelsRendered=!0,a.onWatch("models",a.scope,b,c)}}}(this),!this.isTrue(d.modelsbyref)),this.watch("doCluster",this.scope),this.watch("type",this.scope),this.watch("clusterOptions",this.scope),this.watch("clusterEvents",this.scope),this.watch("typeOptions",this.scope),this.watch("typeEvents",this.scope),this.watch("fit",this.scope),this.watch("idKey",this.scope),this.gManager=void 0,this.createAllNew(this.scope)}return c(k,d),k.include(n),k.include(e),k.prototype.onWatch=function(a,b,c,d){return"idKey"===a&&c!==d&&(this.idKey=c),this.doRebuildAll||"doCluster"===a||"type"===a?this.rebuildAll(b):this.pieceMeal(b)},k.prototype.validateScope=function(a){var c;return c=b.isUndefined(a.models)||void 0===a.models,c&&this.$log.error(this.constructor.name+": no valid models attribute found"),k.__super__.validateScope.call(this,a)||c},k.prototype.createChildScopes=function(a){return null!=this.gMap&&null!=this.scope.models?a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1):void 0},k.prototype.bindToTypeEvents=function(a,c){var d,e;return null==c&&(c=["click","mouseout","mouseover"]),e=this,this.origTypeEvents?b.extend(a,this.origTypeEvents):(this.origTypeEvents={},_.each(c,function(b){return function(c){return b.origTypeEvents[c]=null!=a?a[c]:void 0}}(this))),d={},_.each(c,function(a){return function(a){return d[a]=function(b){return e.maybeExecMappedEvent(b,a)}}}(this)),b.extend(a,d)},k.prototype.createAllNew=function(a){var b,c,d,e;return null!=this.gManager&&(this.gManager instanceof p&&(b=this.gManager.isSpiderfied()),this.gManager.clear(),delete this.gManager),d=a.typeEvents||a.clusterEvents,e=a.typeOptions||a.clusterOptions,a.doCluster||"cluster"===a.type?(null!=d&&this.bindToTypeEvents(d),this.gManager=new i(this.map,void 0,e,d)):"spider"===a.type?(null!=d&&this.bindToTypeEvents(d,["spiderfy","unspiderfy"]),this.gManager=new p(this.map,void 0,e,d,this.scope),b&&this.gManager.spiderfy()):this.gManager=new j(this.map),this.didQueueInitPromise(this,a)?void 0:(c=null,h.promiseLock(this,m.promiseTypes.create,"createAllNew",function(a){return c=a},function(b){return function(){return h.each(a.models,function(d){return b.newChildMarker(d,a),c},h.chunkSizeFrom(a.chunk)).then(function(){return b.modelsRendered=!0,a.fit&&b.gManager.fit(),b.gManager.draw(),b.scope.pluralsUpdate.updateCtr+=1},h.chunkSizeFrom(a.chunk))}}(this)))},k.prototype.rebuildAll=function(a){var b;if(a.doRebuild||void 0===a.doRebuild)return(null!=(b=this.scope.plurals)?b.length:void 0)?this.onDestroy(a).then(function(b){return function(){return b.createAllNew(a)}}(this)):this.createAllNew(a)},k.prototype.pieceMeal=function(a){var b,c;if(!a.$$destroyed)return b=null,c=null,this.modelsLength()&&this.scope.plurals.length?h.promiseLock(this,m.promiseTypes.update,"pieceMeal",function(a){return b=a},function(d){return function(){return m.promise(function(){return d.figureOutState(d.idKey,a,d.scope.plurals,d.modelKeyComparison)}).then(function(e){return c=e,h.each(c.removals,function(a){return null!=a?(null!=a.destroy&&a.destroy(),d.scope.plurals.remove(a.id),b):void 0},h.chunkSizeFrom(a.chunk))}).then(function(){return h.each(c.adds,function(c){return d.newChildMarker(c,a),b},h.chunkSizeFrom(a.chunk))}).then(function(){return h.each(c.updates,function(a){return d.updateChild(a.child,a.model),b},h.chunkSizeFrom(a.chunk))}).then(function(){return(c.adds.length>0||c.removals.length>0||c.updates.length>0)&&(a.plurals=d.scope.plurals,a.fit&&d.gManager.fit(),d.gManager.draw()),d.scope.pluralsUpdate.updateCtr+=1})}}(this)):(this.inProgress=!1,this.rebuildAll(a))},k.prototype.newChildMarker=function(a,b){var c,d,e,f;return null==a[this.idKey]?void this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.$log.info("child",c,"markers",this.scope.markerModels),d=b.$new(!1),d.events=b.events,f={},l.scopeKeys.forEach(function(a){return f[a]=b[a]}),c=new g(d,a,f,this.map,this.DEFAULTS,this.doClick,this.gManager,e=!1),this.scope.plurals.put(a[this.idKey],c),c)},k.prototype.onDestroy=function(a){return k.__super__.onDestroy.call(this,a),h.promiseLock(this,m.promiseTypes["delete"],void 0,void 0,function(a){return function(){return h.each(a.scope.plurals.values(),function(a){return null!=a?a.destroy(!1):void 0},h.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){return null!=a.gManager&&a.gManager.destroy(),a.plurals.removeAll(),a.plurals!==a.scope.plurals&&console.error("plurals out of sync for MarkersParentModel"),a.scope.pluralsUpdate.updateCtr+=1})}}(this))},k.prototype.maybeExecMappedEvent=function(a,b){var c,d;if(!this.scope.$$destroyed)return d=this.scope.typeEvents||this.scope.clusterEvents,_.isFunction(null!=d?d[b]:void 0)&&(c=this.mapTypeToPlurals(a),this.origTypeEvents[b])?this.origTypeEvents[b](c.group,c.mapped):void 0},k.prototype.mapTypeToPlurals=function(a){var b,c,d;return _.isArray(a)?b=a:_.isFunction(a.getMarkers)&&(b=a.getMarkers()),null==b?void o.error("Unable to map event as we cannot find the array group to map"):(c=(null!=(d=this.scope.plurals.values())?d.length:void 0)?b.map(function(a){return function(b){return a.scope.plurals.get(b.key).model}}(this)):[],{cluster:a,mapped:c,group:a})},k.prototype.getItem=function(a,b,c){return"models"===b?a[b][c]:a[b].get(c)},k}(d)}])}.call(this),function(){["Polygon","Polyline"].forEach(function(a){return b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmap"+a+"sParentModel",["uiGmapBasePolysParentModel","uiGmap"+a+"ChildModel","uiGmapI"+a,function(b,c,d){return b(d,c,a)}])})}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapRectangleParentModel",["uiGmapLogger","uiGmapGmapUtil","uiGmapEventsHelper","uiGmapRectangleOptionsBuilder",function(b,c,d,e){var f;return f=function(e){function f(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;this.scope=a,this.attrs=d,this.map=e,this.DEFAULTS=f,g=void 0,j=!1,o=[],n=void 0,k=function(a){return function(){return a.isTrue(a.attrs.fit)?a.fitMapBounds(a.map,g):void 0}}(this),i=function(a){return function(){var c,d,e;return null!=a.scope.bounds&&null!=(null!=(c=a.scope.bounds)?c.sw:void 0)&&null!=(null!=(d=a.scope.bounds)?d.ne:void 0)&&a.validateBoundPoints(a.scope.bounds)?(g=a.convertBoundPoints(a.scope.bounds),b.info("new new bounds created: "+JSON.stringify(g))):null!=a.scope.bounds.getNorthEast&&null!=a.scope.bounds.getSouthWest?g=a.scope.bounds:null!=a.scope.bounds?b.error("Invalid bounds for newValue: "+JSON.stringify(null!=(e=a.scope)?e.bounds:void 0)):void 0}}(this),i(),l=new google.maps.Rectangle(this.buildOpts(g)),b.info("gObject (rectangle) created: "+l),p=!1,q=function(a){return function(){var b,c,d;return b=l.getBounds(),c=b.getNorthEast(),d=b.getSouthWest(),p?void 0:a.scope.$evalAsync(function(a){return null!=a.bounds&&null!=a.bounds.sw&&null!=a.bounds.ne&&(a.bounds.ne={latitude:c.lat(),longitude:c.lng()},a.bounds.sw={latitude:d.lat(),longitude:d.lng()}),null!=a.bounds.getNorthEast&&null!=a.bounds.getSouthWest?a.bounds=b:void 0})}}(this),m=function(a){return function(){return k(),a.removeEvents(o),o.push(google.maps.event.addListener(l,"dragstart",function(){return j=!0})),o.push(google.maps.event.addListener(l,"dragend",function(){return j=!1,q()})),o.push(google.maps.event.addListener(l,"bounds_changed",function(){return j?void 0:q()}))}}(this),h=function(a){return function(){return a.removeEvents(o),null!=n&&a.removeEvents(n),l.setMap(null)}}(this),null!=g&&m(),this.scope.$watch("bounds",function(a,b){var c;if(!(_.isEqual(a,b)&&null!=g||j))return p=!0,null==a?void h():(null==g?c=!0:k(),i(),l.setBounds(g),p=!1,c&&null!=g?m():void 0)},!0),this.setMyOptions=function(a){return function(b,c){return _.isEqual(b,c)||null==g||null==b?void 0:l.setOptions(a.buildOpts(g))}}(this),this.props.push("bounds"),this.watchProps(this.props),null!=this.attrs.events&&(n=this.setEvents(l,this.scope,this.scope),this.scope.$watch("events",function(a){return function(b,c){return _.isEqual(b,c)?void 0:(null!=n&&a.removeEvents(n),n=a.setEvents(l,a.scope,a.scope))}}(this))),this.scope.$on("$destroy",function(a){return function(){return h()}}(this)),b.info(this)}return a(f,e),f.include(c),f.include(d),f}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapSearchBoxParentModel",["uiGmapBaseObject","uiGmapLogger","uiGmapEventsHelper","$timeout","$http","$templateCache",function(d,e,f,g,h,i){var j;return j=function(d){function g(c,d,f,g,h,i,j){var k;return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.ctrlPosition=h,this.template=i,this.$log=null!=j?j:e,this.setVisibility=a(this.setVisibility,this),this.getBounds=a(this.getBounds,this),this.setBounds=a(this.setBounds,this),this.createSearchBox=a(this.createSearchBox,this),this.addToParentDiv=a(this.addToParentDiv,this),this.addAsMapControl=a(this.addAsMapControl,this),this.init=a(this.init,this),null==this.attrs.template?void this.$log.error("template attribute for the search-box directive is mandatory. Places Search Box creation aborted!!"):(b.isUndefined(this.scope.options)&&(this.scope.options={},this.scope.options.visible=!0),b.isUndefined(this.scope.options.visible)&&(this.scope.options.visible=!0),b.isUndefined(this.scope.options.autocomplete)&&(this.scope.options.autocomplete=!1),this.visible=this.scope.options.visible,this.autocomplete=this.scope.options.autocomplete,k=b.element("<div></div>"),k.append(this.template),this.input=k.find("input")[0],void this.init())}return c(g,d),g.include(f),g.prototype.init=function(){return this.createSearchBox(),this.scope.$watch("options",function(a){return function(c,d){return b.isObject(c)&&(null!=c.bounds&&a.setBounds(c.bounds),null!=c.visible&&a.visible!==c.visible)?a.setVisibility(c.visible):void 0}}(this),!0),null!=this.attrs.parentdiv?this.addToParentDiv():this.addAsMapControl(),this.autocomplete?this.listener=google.maps.event.addListener(this.gObject,"place_changed",function(a){return function(){return a.places=a.gObject.getPlace()}}(this)):this.listener=google.maps.event.addListener(this.gObject,"places_changed",function(a){return function(){return a.places=a.gObject.getPlaces()}}(this)),this.listeners=this.setEvents(this.gObject,this.scope,this.scope),this.$log.info(this),this.scope.$on("$destroy",function(a){return function(){return a.gObject=null}}(this))},g.prototype.addAsMapControl=function(){return this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input)},g.prototype.addToParentDiv=function(){return this.parentDiv=b.element(document.getElementById(this.scope.parentdiv)),this.parentDiv.append(this.input)},g.prototype.createSearchBox=function(){return this.autocomplete?this.gObject=new google.maps.places.Autocomplete(this.input,this.scope.options):this.gObject=new google.maps.places.SearchBox(this.input,this.scope.options)},g.prototype.setBounds=function(a){if(b.isUndefined(a.isEmpty))this.$log.error("Error: SearchBoxParentModel setBounds. Bounds not an instance of LatLngBounds.");else if(a.isEmpty()===!1&&null!=this.gObject)return this.gObject.setBounds(a)},g.prototype.getBounds=function(){return this.gObject.getBounds()},g.prototype.setVisibility=function(a){return null!=this.attrs.parentdiv?a===!1?this.parentDiv.addClass("ng-hide"):this.parentDiv.removeClass("ng-hide"):a===!1?this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].clear():this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input),this.visible=a},g}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapWindowsParentModel",["uiGmapIWindowParentModel","uiGmapModelsWatcher","uiGmapPropMap","uiGmapWindowChildModel","uiGmapLinked","uiGmap_async","uiGmapLogger","$timeout","$compile","$http","$templateCache","$interpolate","uiGmapPromise","uiGmapIWindow","uiGmapGmapUtil",function(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s;return s=function(d){function s(b,c,d,e,g,i){this.gMap=g,this.markersScope=i,this.modelKeyComparison=a(this.modelKeyComparison,this),this.interpolateContent=a(this.interpolateContent,this),this.setChildScope=a(this.setChildScope,this),this.createWindow=a(this.createWindow,this),this.setContentKeys=a(this.setContentKeys,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),this.watchOurScope=a(this.watchOurScope,this),this.watchDestroy=a(this.watchDestroy,this),this.onDestroy=a(this.onDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),this.go=a(this.go,this),s.__super__.constructor.call(this,b,c,d,e,k,l,m,n),this["interface"]=q,this.plurals=new f,_.each(q.scopeKeys,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.linked=new h(b,c,d,e),this.contentKeys=void 0,this.isIconVisibleOnClick=void 0,this.firstTime=!0,this.firstWatchModels=!0,this.$log.info(self),this.parentScope=void 0,this.go(b)}return c(s,d),s.include(e),s.prototype.go=function(a){return this.watchOurScope(a),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,a.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.createChildScopes()},s.prototype.watchModels=function(a){var b;return b=null!=this.markersScope?"pluralsUpdate":"models",a.$watch(b,function(b){return function(c,d){var e;return!_.isEqual(c,d)||b.firstWatchModels?(b.firstWatchModels=!1,b.doRebuildAll||b.doINeedToWipe(a.models)?b.rebuildAll(a,!0,!0):(e=0===b.plurals.length,null!=b.existingPieces?_.last(b.existingPieces._content).then(function(){return b.createChildScopes(e)}):b.createChildScopes(e))):void 0}}(this),!0)},s.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},s.prototype.rebuildAll=function(a,b,c){return this.onDestroy(c).then(function(a){return function(){return b?a.createChildScopes():void 0}}(this))},s.prototype.onDestroy=function(a){return s.__super__.onDestroy.call(this,this.scope),i.promiseLock(this,p.promiseTypes["delete"],void 0,void 0,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy()},i.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){var b;return null!=(b=a.plurals)?b.removeAll():void 0})}}(this))},s.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.firstWatchModels=!0,b.firstTime=!0,b.rebuildAll(a,!1,!0)}}(this))},s.prototype.watchOurScope=function(a){return _.each(q.scopeKeys,function(b){return function(c){var d;return d=c+"Key",b[d]="function"==typeof a[c]?a[c]():a[c]}}(this))},s.prototype.createChildScopes=function(a){var c,d,e;return null==a&&(a=!0),this.isIconVisibleOnClick=!0,b.isDefined(this.linked.attrs.isiconvisibleonclick)&&(this.isIconVisibleOnClick=this.linked.scope.isIconVisibleOnClick),c=b.isUndefined(this.linked.scope.models),!c||void 0!==this.markersScope&&void 0!==(null!=(d=this.markersScope)?d.plurals:void 0)&&void 0!==(null!=(e=this.markersScope)?e.models:void 0)?null!=this.gMap?null!=this.linked.scope.models?(this.watchIdKey(this.linked.scope),
a?this.createAllNew(this.linked.scope,!1):this.pieceMeal(this.linked.scope,!1)):(this.parentScope=this.markersScope,this.watchIdKey(this.parentScope),a?this.createAllNew(this.markersScope,!0,"plurals",!1):this.pieceMeal(this.markersScope,!0,"plurals",!1)):void 0:void this.$log.error("No models to create windows from! Need direct models or models derived from markers!")},s.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},s.prototype.createAllNew=function(a,b,c,d){var e;return null==c&&(c="models"),null==d&&(d=!1),this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.setContentKeys(a.models),this.didQueueInitPromise(this,a)?void 0:(e=null,i.promiseLock(this,p.promiseTypes.create,"createAllNew",function(a){return e=a},function(d){return function(){return i.each(a.models,function(f){var g,h;return g=b&&null!=(h=d.getItem(a,c,f[d.idKey]))?h.gObject:void 0,e||(!g&&d.markersScope&&j.error("Unable to get gMarker from markersScope!"),d.createWindow(f,g,d.gMap)),e},i.chunkSizeFrom(a.chunk)).then(function(){return d.firstTime=!1})}}(this)))},s.prototype.pieceMeal=function(a,b,c,d){var e,f;return null==c&&(c="models"),null==d&&(d=!0),a.$$destroyed?void 0:(e=null,f=null,null!=a&&this.modelsLength()&&this.plurals.length?i.promiseLock(this,p.promiseTypes.update,"pieceMeal",function(a){return e=a},function(b){return function(){return p.promise(function(){return b.figureOutState(b.idKey,a,b.plurals,b.modelKeyComparison)}).then(function(c){return f=c,i.each(f.removals,function(a){return null!=a?(b.plurals.remove(a.id),null!=a.destroy&&a.destroy(!0),e):void 0},i.chunkSizeFrom(a.chunk))}).then(function(){return i.each(f.adds,function(d){var f,g;if(f=null!=(g=b.getItem(a,c,d[b.idKey]))?g.gObject:void 0,!f)throw"Gmarker undefined";return b.createWindow(d,f,b.gMap),e})}).then(function(){return i.each(f.updates,function(a){return b.updateChild(a.child,a.model),e},i.chunkSizeFrom(a.chunk))})}}(this)):(j.debug("pieceMeal: rebuildAll"),this.rebuildAll(this.scope,!0,!0)))},s.prototype.setContentKeys=function(a){return this.modelsLength(a)?this.contentKeys=Object.keys(a[0]):void 0},s.prototype.createWindow=function(a,b,c){var d,e,f,h,i,j;return e=this.linked.scope.$new(!1),this.setChildScope(e,a),e.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(e,b):void 0}}(this),!0),f={html:function(b){return function(){return b.interpolateContent(b.linked.element.html(),a)}}(this)},this.DEFAULTS=this.scopeOrModelVal(this.optionsKey,this.scope,a)||{},h=this.createWindowOptions(b,e,f.html(),this.DEFAULTS),d=new g(a,e,h,this.isIconVisibleOnClick,c,null!=(i=this.markersScope)&&null!=(j=i.plurals.get(a[this.idKey]))?j.scope:void 0,f,!1,!0),null==a[this.idKey]?void this.$log.error("Window model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.plurals.put(a[this.idKey],d),d)},s.prototype.setChildScope=function(a,b){return _.each(q.scopeKeys,function(c){return function(d){var e,f;return e=d+"Key",f="self"===c[e]?b:b[c[e]],f!==a[d]?a[d]=f:void 0}}(this)),a.model=b},s.prototype.interpolateContent=function(a,b){var c,d,e,f,g,h;if(void 0!==this.contentKeys&&0!==this.contentKeys.length){for(c=o(a),e={},h=this.contentKeys,d=0,g=h.length;g>d;d++)f=h[d],e[f]=b[f];return c(e)}},s.prototype.modelKeyComparison=function(a,b){var c,d;if(d=null!=this.scope.coords?this.scope:this.parentScope,null==d)throw"No scope or parentScope set!";return(c=r.equalCoords(this.evalModelHandle(a,d.coords),this.evalModelHandle(b,d.coords)))?c=_.every(_.without(this["interface"].scopeKeys,"coords"),function(c){return function(e){return c.evalModelHandle(a,d[e])===c.evalModelHandle(b,d[e])}}(this)):c},s}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapCircle",["uiGmapICircle","uiGmapCircleParentModel",function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new b(a,c,d,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapControl",["uiGmapIControl","$http","$templateCache","$compile","$controller","uiGmapGoogleMapApi",function(d,e,f,g,h,i){var j;return j=function(j){function k(){this.link=a(this.link,this),k.__super__.constructor.call(this)}return c(k,j),k.prototype.link=function(a,c,j,k){return i.then(function(c){return function(i){var j,l;return b.isUndefined(a.template)?void c.$log.error("mapControl: could not find a valid template property"):(j=b.isDefined(a.index&&!isNaN(parseInt(a.index)))?parseInt(a.index):void 0,l=b.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_CENTER",i.ControlPosition[l]?d.mapPromise(a,k).then(function(d){var i,k;return i=void 0,k=b.element("<div></div>"),e.get(a.template,{cache:f}).success(function(c){var d,e;return e=a.$new(),k.append(c),b.isDefined(a.controller)&&(d=h(a.controller,{$scope:e}),k.children().data("$ngControllerController",d)),i=g(k.children())(e),j?i[0].index=j:void 0}).error(function(a){return c.$log.error("mapControl: template could not be found")}).then(function(){return d.controls[google.maps.ControlPosition[l]].push(i[0])})}):void c.$log.error("mapControl: invalid position property"))}}(this))},k}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapDragZoom",["uiGmapCtrlHandle","uiGmapPropertyAction",function(a,b){return{restrict:"EMA",transclude:!0,template:'<div class="angular-google-map-dragzoom" ng-transclude style="display: none"></div>',require:"^uiGmapGoogleMap",scope:{keyboardkey:"=",options:"=",spec:"="},controller:["$scope","$element",function(b,c){return b.ctrlType="uiGmapDragZoom",_.extend(this,a.handle(b,c))}],link:function(c,d,e,f){return a.mapPromise(c,f).then(function(a){var d,e,f;return d=function(b){return a.enableKeyDragZoom(b),c.spec?c.spec.enableKeyDragZoom(b):void 0},e=new b(function(a,b){return b?d({key:b}):d()}),f=new b(function(a,b){return b?d(b):void 0}),c.$watch("keyboardkey",e.sic),e.sic(c.keyboardkey),c.$watch("options",f.sic),f.sic(c.options)})}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapDrawingManager",["uiGmapIDrawingManager","uiGmapDrawingManagerParentModel",function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return new b(a,c,d,e)})}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapApiFreeDrawPolygons",["uiGmapLogger","uiGmapBaseObject","uiGmapCtrlHandle","uiGmapDrawFreeHandChildModel","uiGmapLodash",function(b,d,e,f,g){var h;return h=function(d){function h(){return this.link=a(this.link,this),h.__super__.constructor.apply(this,arguments)}return c(h,d),h.include(e),h.prototype.restrict="EMA",h.prototype.replace=!0,h.prototype.require="^uiGmapGoogleMap",h.prototype.scope={polygons:"=",draw:"="},h.prototype.link=function(a,c,d,e){return this.mapPromise(a,e).then(function(c){return function(c){var d,h;return a.polygons?_.isArray(a.polygons)?(d=new f(c,e.getScope()),h=void 0,a.draw=function(){return"function"==typeof h&&h(),d.engage(a.polygons).then(function(){var b;return b=!0,h=a.$watchCollection("polygons",function(a,c){var d;return b||a===c?void(b=!1):(d=g.differenceObjects(c,a),d.forEach(function(a){return a.setMap(null)}))})})}):b.error("Free Draw Polygons must be of type Array!"):b.error("No polygons to bind to!")}}(this))},h}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapICircle",[function(){var a;return a={},{restrict:"EA",replace:!0,require:"^uiGmapGoogleMap",scope:{center:"=center",radius:"=radius",stroke:"=stroke",fill:"=fill",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=icons",visible:"=",events:"=",control:"=",zIndex:"=zindex"}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIControl",["uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d){var e;return e=function(b){function e(){this.restrict="EA",this.replace=!0,this.require="^uiGmapGoogleMap",this.scope={template:"@template",position:"@position",controller:"@controller",index:"@index"},this.$log=c}return a(e,b),e.extend(d),e.prototype.link=function(a,b,c,d){throw new Exception("Not implemented!!")},e}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapIDrawingManager",[function(){return{restrict:"EA",replace:!0,require:"^uiGmapGoogleMap",scope:{"static":"@",control:"=",options:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIMarker",["uiGmapBaseObject","uiGmapCtrlHandle",function(b,c){var d;return d=function(b){function d(){this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.replace=!0,this.scope=_.extend(this.scope||{},d.scope)}return a(d,b),d.scope={coords:"=coords",icon:"=icon",click:"&click",options:"=options",events:"=events",fit:"=fit",idKey:"=idkey",control:"=control"},d.scopeKeys=_.keys(d.scope),d.keys=d.scopeKeys,d.extend(c),d}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIPolygon",["uiGmapGmapUtil","uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d,e){var f;return f=function(c){function f(){}return a(f,c),f.scope={path:"=path",stroke:"=stroke",clickable:"=",draggable:"=",editable:"=",geodesic:"=",fill:"=",icons:"=icons",visible:"=","static":"=",events:"=",zIndex:"=zindex",fit:"=",control:"=control"},f.scopeKeys=_.keys(f.scope),f.include(b),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^uiGmapGoogleMap",f.prototype.scope=f.scope,f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIPolyline",["uiGmapGmapUtil","uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d,e){var f;return f=function(c){function f(){}return a(f,c),f.scope={path:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=",visible:"=","static":"=",fit:"=",events:"=",zIndex:"=zindex"},f.scopeKeys=_.keys(f.scope),f.include(b),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^uiGmapGoogleMap",f.prototype.scope=f.scope,f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapIRectangle",[function(){var a;return a={},{restrict:"EMA",require:"^uiGmapGoogleMap",replace:!0,scope:{bounds:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",fill:"=",visible:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIWindow",["uiGmapBaseObject","uiGmapChildEvents","uiGmapCtrlHandle",function(b,c,d){var e;return e=function(b){function e(){this.restrict="EMA",this.template=void 0,this.transclude=!0,this.priority=-100,this.require="^uiGmapGoogleMap",this.replace=!0,this.scope=_.extend(this.scope||{},e.scope)}return a(e,b),e.scope={coords:"=coords",template:"=template",templateUrl:"=templateurl",templateParameter:"=templateparameter",isIconVisibleOnClick:"=isiconvisibleonclick",closeClick:"&closeclick",options:"=options",control:"=control",show:"=show"},e.scopeKeys=_.keys(e.scope),e.include(c),e.extend(d),e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMap",["$timeout","$q","uiGmapLogger","uiGmapGmapUtil","uiGmapBaseObject","uiGmapCtrlHandle","uiGmapIsReady","uiGmapuuid","uiGmapExtendGWin","uiGmapExtendMarkerClusterer","uiGmapGoogleMapsUtilV3","uiGmapGoogleMapApi","uiGmapEventsHelper",function(e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t;return r=void 0,t=[o,m,n],s=function(f){function i(){this.link=a(this.link,this);var b,c;b=function(a){var b,c;return c=void 0,a.$on("$destroy",function(){return k.decrement()}),b=j.handle(a),a.ctrlType="Map",a.deferred.promise.then(function(){return t.forEach(function(a){return a.init()})}),b.getMap=function(){return a.map},c=_.extend(this,b)},this.controller=["$scope",b],c=this}return d(i,f),i.include(h),i.prototype.restrict="EMA",i.prototype.transclude=!0,i.prototype.replace=!1,i.prototype.template='<div class="angular-google-map"><div class="angular-google-map-container"></div><div ng-transclude style="display: none"></div></div>',i.prototype.scope={center:"=",zoom:"=",dragging:"=",control:"=",options:"=",events:"=",eventOpts:"=",styles:"=",bounds:"=",update:"="},i.prototype.link=function(a,d,f){var h,i;return h=[],a.$on("$destroy",function(){return q.removeEvents(h)}),a.idleAndZoomChanged=!1,null==a.center?void(i=a.$watch("center",function(b){return function(){return a.center?(i(),b.link(a,d,f)):void 0}}(this))):p.then(function(i){return function(j){var m,n,o,p,s,t,u,v,w,x,y,z,A,B,C,D,E;if(r={mapTypeId:j.MapTypeId.ROADMAP},B=k.spawn(),z=function(){return B.deferred.resolve({instance:B.instance,map:m})},!i.validateCoords(a.center))return void g.error("angular-google-maps: could not find a valid center property");if(!b.isDefined(a.zoom))return void g.error("angular-google-maps: map zoom property not set");if(s=b.element(d),s.addClass("angular-google-map"),x={options:{}},f.options&&(x.options=a.options),f.styles&&(x.styles=a.styles),f.type&&(C=f.type.toUpperCase(),google.maps.MapTypeId.hasOwnProperty(C)?x.mapTypeId=google.maps.MapTypeId[f.type.toUpperCase()]:g.error("angular-google-maps: invalid map type '"+f.type+"'")),v=b.extend({},r,x,{center:i.getCoords(a.center),zoom:a.zoom,bounds:a.bounds}),m=new google.maps.Map(s.find("div")[1],v),m.uiGmap_id=l.generate(),p=!1,h.push(google.maps.event.addListenerOnce(m,"idle",function(){return a.deferred.resolve(m),z()})),o=f.events&&null!=(null!=(y=a.events)?y.blacklist:void 0)?a.events.blacklist:[],_.isString(o)&&(o=[o]),w=function(b,c,d){return _.contains(o,b)?void 0:(d&&d(),h.push(google.maps.event.addListener(m,b,function(){var b;return(null!=(b=a.update)?b.lazy:void 0)?void 0:c()})))},_.contains(o,"all")||(w("dragstart",function(){return p=!0,a.$evalAsync(function(a){return null!=a.dragging?a.dragging=p:void 0})}),w("dragend",function(){return p=!1,a.$evalAsync(function(a){return null!=a.dragging?a.dragging=p:void 0})}),D=function(c,d){if(null==c&&(c=m.center),null==d&&(d=a),!_.contains(o,"center"))if(b.isDefined(d.center.type)){if(d.center.coordinates[1]!==c.lat()&&(d.center.coordinates[1]=c.lat()),d.center.coordinates[0]!==c.lng())return d.center.coordinates[0]=c.lng()}else if(d.center.latitude!==c.lat()&&(d.center.latitude=c.lat()),d.center.longitude!==c.lng())return d.center.longitude=c.lng()},A=!1,w("idle",function(){var b,d,e;return b=m.getBounds(),d=b.getNorthEast(),e=b.getSouthWest(),A=!0,a.$evalAsync(function(b){return D(),null===b.bounds||b.bounds===c||void 0===b.bounds||_.contains(o,"bounds")||(b.bounds.northeast={latitude:d.lat(),longitude:d.lng()},b.bounds.southwest={latitude:e.lat(),longitude:e.lng()}),_.contains(o,"zoom")||(b.zoom=m.zoom,a.idleAndZoomChanged=!a.idleAndZoomChanged),A=!1})})),b.isDefined(a.events)&&null!==a.events&&b.isObject(a.events)){u=function(b){return function(){return a.events[b].apply(a,[m,b,arguments])}},n=[];for(t in a.events)a.events.hasOwnProperty(t)&&b.isFunction(a.events[t])&&n.push(google.maps.event.addListener(m,t,u(t)));h.concat(n)}return m.getOptions=function(){return v},a.map=m,null!=f.control&&null!=a.control&&(a.control.refresh=function(a){var b,c,d;if(null!=m)return null!=("undefined"!=typeof google&&null!==google&&null!=(c=google.maps)&&null!=(d=c.event)?d.trigger:void 0)&&null!=m&&google.maps.event.trigger(m,"resize"),null!=(null!=a?a.latitude:void 0)&&null!=(null!=a?a.longitude:void 0)?(b=i.getCoords(a),i.isTrue(f.pan)?m.panTo(b):m.setCenter(b)):void 0},a.control.getGMap=function(){return m},a.control.getMapOptions=function(){return v},a.control.getCustomEventListeners=function(){return n},a.control.removeEvents=function(a){return q.removeEvents(a)}),a.$watch("center",function(b,c){var d,e;if(b!==c&&!A&&(d=i.getCoords(a.center),d.lat()!==m.center.lat()||d.lng()!==m.center.lng()))return e=!0,p||(i.validateCoords(b)||g.error("Invalid center for newValue: "+JSON.stringify(b)),i.isTrue(f.pan)&&a.zoom===m.zoom?m.panTo(d):m.setCenter(d)),e=!1},!0),E=null,a.$watch("zoom",function(b,c){var d,f,g;if(null!=b&&!_.isEqual(b,c)&&(null!=m?m.getZoom():void 0)!==(null!=a?a.zoom:void 0)&&!A)return g=!0,null!=E&&e.cancel(E),E=e(function(){return m.setZoom(b),g=!1},(null!=(d=a.eventOpts)&&null!=(f=d.debounce)?f.zoomMs:void 0)+20,!1)}),a.$watch("bounds",function(a,b){var c,d,e,f,h,i,j;if(a!==b)return null==(null!=a&&null!=(e=a.northeast)?e.latitude:void 0)||null==(null!=a&&null!=(f=a.northeast)?f.longitude:void 0)||null==(null!=a&&null!=(h=a.southwest)?h.latitude:void 0)||null==(null!=a&&null!=(i=a.southwest)?i.longitude:void 0)?void g.error("Invalid map bounds for new value: "+JSON.stringify(a)):(d=new google.maps.LatLng(a.northeast.latitude,a.northeast.longitude),j=new google.maps.LatLng(a.southwest.latitude,a.southwest.longitude),c=new google.maps.LatLngBounds(j,d),m.fitBounds(c))}),["options","styles"].forEach(function(b){return a.$watch(b,function(a,b){var c;return c=this.exp,_.isEqual(a,b)?void 0:("options"===c?x.options=a:x.options[c]=a,null!=m?m.setOptions(x):void 0)},!0)})}}(this))},i}(i)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarker",["uiGmapIMarker","uiGmapMarkerChildModel","uiGmapMarkerManager","uiGmapLogger",function(b,d,e,f){var g;return g=function(g){function h(){this.link=a(this.link,this),h.__super__.constructor.call(this),this.template='<span class="angular-google-map-marker" ng-transclude></span>',f.info(this)}return c(h,g),h.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Marker",_.extend(this,b.handle(a,c))}],h.prototype.link=function(a,c,f,g){var h;return h=b.mapPromise(a,g),h.then(function(c){return function(c){var f,g,h,i,j,k;return h=new e(c),i=_.object(b.keys,b.keys),j=new d(a,a,i,c,{},f=!0,h,g=!1,k=!1),j.deferred.promise.then(function(b){return a.deferred.resolve(b)}),null!=a.control?a.control.getGMarkers=h.getGMarkers:void 0}}(this)),a.$on("$destroy",function(a){return function(){var a;return"undefined"!=typeof a&&null!==a&&a.clear(),a=null}}(this))},h}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarkers",["uiGmapIMarker","uiGmapPlural","uiGmapMarkersParentModel","uiGmap_sync","uiGmapLogger",function(b,c,d,e,f){var g;return g=function(e){function g(){g.__super__.constructor.call(this),this.template='<span class="angular-google-map-markers" ng-transclude></span>',c.extend(this,{doCluster:"=?docluster",clusterOptions:"=clusteroptions",clusterEvents:"=clusterevents",modelsByRef:"=modelsbyref",type:"=?type",typeOptions:"=?typeoptions",typeEvents:"=?typeevents"}),f.info(this)}return a(g,e),g.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Markers",_.extend(this,b.handle(a,c))}],g.prototype.link=function(a,e,f,g){var h,i;return h=void 0,i=function(){return a.deferred.resolve()},b.mapPromise(a,g).then(function(b){var j;return j=g.getScope(),j.$watch("idleAndZoomChanged",function(){return _.defer(h.gManager.draw)}),h=new d(a,e,f,b),c.link(a,h),null!=a.control&&(a.control.getGMarkers=function(){var a;return null!=(a=h.gManager)?a.getGMarkers():void 0},a.control.getChildMarkers=function(){return h.plurals}),_.last(h.existingPieces._content).then(function(){return i()})})},g}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapPlural",[function(){var a;return a=function(a,b){return null!=a.control?(a.control.updateModels=function(c){return a.models=c,b.createChildScopes(!1)},a.control.newModels=function(c){return a.models=c,b.rebuildAll(a,!0,!0)},a.control.clean=function(){return b.rebuildAll(a,!1,!0)},a.control.getPlurals=function(){return b.plurals},a.control.getManager=function(){return b.gManager},a.control.hasManager=function(){return null!=b.gManager==!0},a.control.managerDraw=function(){var b;return a.control.hasManager()&&null!=(b=a.control.getManager())?b.draw():void 0}):void 0},{extend:function(a,b){return _.extend(a.scope||{},b||{},{idKey:"=idkey",doRebuildAll:"=dorebuildall",models:"=models",chunk:"=chunk",cleanchunk:"=cleanchunk",control:"=control"})},link:function(b,c){return a(b,c)}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygon",["uiGmapIPolygon","$timeout","uiGmapPolygonChildModel",function(b,d,e){var f;return f=function(d){function f(){return this.link=a(this.link,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.link=function(a,c,d,f){var g,h;return g=[],h=b.mapPromise(a,f),null!=a.control&&(a.control.getInstance=this,a.control.polygons=g,a.control.promise=h),h.then(function(b){return function(c){return g.push(new e(a,d,c,b.DEFAULTS))}}(this))},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygons",["uiGmapIPolygon","$timeout","uiGmapPolygonsParentModel","uiGmapPlural",function(d,e,f,g){var h;return h=function(d){function e(){this.link=a(this.link,this),e.__super__.constructor.call(this),g.extend(this),this.$log.info(this)}return c(e,d),e.prototype.link=function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(h){return(b.isUndefined(a.path)||null===a.path)&&e.$log.warn("polygons: no valid path attribute found"),a.models||e.$log.warn("polygons: no models found to create from"),g.link(a,new f(a,c,d,h,e.DEFAULTS))}}(this))},e}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolyline",["uiGmapIPolyline","$timeout","uiGmapPolylineChildModel",function(d,e,f){var g;return g=function(e){function g(){return this.link=a(this.link,this),g.__super__.constructor.apply(this,arguments)}return c(g,e),g.prototype.link=function(a,c,e,g){return d.mapPromise(a,g).then(function(c){return function(d){return(b.isUndefined(a.path)||null===a.path||!c.validatePath(a.path))&&c.$log.warn("polyline: no valid path attribute found"),new f(a,e,d,c.DEFAULTS)}}(this))},g}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolylines",["uiGmapIPolyline","$timeout","uiGmapPolylinesParentModel","uiGmapPlural",function(d,e,f,g){var h;return h=function(d){function e(){this.link=a(this.link,this),e.__super__.constructor.call(this),g.extend(this),this.$log.info(this)}return c(e,d),e.prototype.link=function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(h){return(b.isUndefined(a.path)||null===a.path)&&e.$log.warn("polylines: no valid path attribute found"),a.models||e.$log.warn("polylines: no models found to create from"),g.link(a,new f(a,c,d,h,e.DEFAULTS))}}(this))},e}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapRectangle",["uiGmapLogger","uiGmapGmapUtil","uiGmapIRectangle","uiGmapRectangleParentModel",function(a,b,c,d){return _.extend(c,{link:function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new d(a,b,c,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindow",["uiGmapIWindow","uiGmapGmapUtil","uiGmapWindowChildModel","uiGmapLodash","uiGmapLogger",function(d,e,f,g,h){var i;return i=function(i){function j(){this.link=a(this.link,this),j.__super__.constructor.call(this),this.require=["^uiGmapGoogleMap","^?uiGmapMarker"],this.template='<span class="angular-google-maps-window" ng-transclude></span>',h.debug(this),this.childWindows=[]}return c(j,i),j.include(e),j.prototype.link=function(a,c,e,f){var g,h;return g=f.length>1&&null!=f[1]?f[1]:void 0,h=null!=g?g.getScope():void 0,this.mapPromise=d.mapPromise(a,f[0]),this.mapPromise.then(function(d){return function(f){var i;return i=!0,b.isDefined(e.isiconvisibleonclick)&&(i=a.isIconVisibleOnClick),g?h.deferred.promise.then(function(b){return d.init(a,c,i,f,h)}):void d.init(a,c,i,f)}}(this))},j.prototype.init=function(a,b,c,d,e){var h,i,j,k,l;return i=null!=a.options?a.options:{},k=null!=a&&this.validateCoords(a.coords),null!=(null!=e?e.getGMarker:void 0)&&(j=e.getGMarker()),l=k?this.createWindowOptions(j,a,b.html(),i):i,null!=d&&(h=new f({},a,l,c,d,e,b),this.childWindows.push(h),a.$on("$destroy",function(a){return function(){return a.childWindows=g.withoutObjects(a.childWindows,[h],function(a,b){return a.scope.$id===b.scope.$id}),a.childWindows.length=0}}(this))),null!=a.control&&(a.control.getGWindows=function(a){return function(){return a.childWindows.map(function(a){return a.gObject})}}(this),a.control.getChildWindows=function(a){return function(){return a.childWindows}}(this),a.control.getPlurals=a.control.getChildWindows,a.control.showWindow=function(a){return function(){return a.childWindows.map(function(a){return a.showWindow()})}}(this),a.control.hideWindow=function(a){return function(){return a.childWindows.map(function(a){return a.hideWindow()})}}(this)),null!=this.onChildCreation&&null!=h?this.onChildCreation(h):void 0},j}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindows",["uiGmapIWindow","uiGmapPlural","uiGmapWindowsParentModel","uiGmapPromise","uiGmapLogger",function(b,d,e,f,g){var h;return h=function(b){function h(){this.init=a(this.init,this),this.link=a(this.link,this),h.__super__.constructor.call(this),this.require=["^uiGmapGoogleMap","^?uiGmapMarkers"],this.template='<span class="angular-google-maps-windows" ng-transclude></span>',d.extend(this),g.debug(this)}return c(h,b),h.prototype.link=function(a,b,c,d){var e,g,h;return e=d[0].getScope(),g=d.length>1&&null!=d[1]?d[1]:void 0,h=null!=g?g.getScope():void 0,e.deferred.promise.then(function(e){return function(g){var i,j;return i=(null!=h&&null!=(j=h.deferred)?j.promise:void 0)||f.resolve(),i.then(function(){var f,i;return f=null!=(i=e.parentModel)?i.existingPieces:void 0,f?f.then(function(){return e.init(a,b,c,d,g,h)}):e.init(a,b,c,d,g,h)})}}(this))},h.prototype.init=function(a,b,c,f,g,h){var i;return i=new e(a,b,c,f,g,h),d.link(a,i),null!=a.control?(a.control.getGWindows=function(a){return function(){return i.plurals.map(function(a){return a.gObject})}}(this),a.control.getChildWindows=function(a){return function(){return i.plurals}}(this)):void 0},h}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapGoogleMap",["uiGmapMap",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMarker",["$timeout","uiGmapMarker",function(a,b){return new b(a)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMarkers",["$timeout","uiGmapMarkers",function(a,b){return new b(a)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolygon",["uiGmapPolygon",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapCircle",["uiGmapCircle",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolyline",["uiGmapPolyline",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolylines",["uiGmapPolylines",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapRectangle",["uiGmapLogger","uiGmapRectangle",function(a,b){return b}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapWindow",["$timeout","$compile","$http","$templateCache","uiGmapWindow",function(a,b,c,d,e){return new e(a,b,c,d)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapWindows",["$timeout","$compile","$http","$templateCache","$interpolate","uiGmapWindows",function(a,b,c,d,e,f){return new f(a,b,c,d,e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapLayer",["$timeout","uiGmapLogger","uiGmapLayerParentModel",function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template="<span class='angular-google-map-layer' ng-transclude></span>",
this.replace=!0,this.scope={show:"=show",type:"=type",namespace:"=namespace",options:"=options",onCreated:"&oncreated"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return null!=a.onCreated?new d(a,b,c,e,a.onCreated):new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMapControl",["uiGmapControl",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapDragZoom",["uiGmapDragZoom",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapDrawingManager",["uiGmapDrawingManager",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapFreeDrawPolygons",["uiGmapApiFreeDrawPolygons",function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapMapType",["$timeout","uiGmapLogger","uiGmapMapTypeParentModel",function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template='<span class="angular-google-map-layer" ng-transclude></span>',this.replace=!0,this.scope={show:"=show",options:"=options",refresh:"=refresh",id:"@"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolygons",["uiGmapPolygons",function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapSearchBox",["uiGmapGoogleMapApi","uiGmapLogger","uiGmapSearchBoxParentModel","$http","$templateCache","$compile",function(c,d,e,f,g,h){var i;return new(i=function(){function i(){this.link=a(this.link,this),this.$log=d,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template="<span class='angular-google-map-search' ng-transclude></span>",this.replace=!0,this.scope={template:"=template",events:"=events",position:"=?position",options:"=?options",parentdiv:"=?parentdiv",ngModel:"=?"}}return i.prototype.require="ngModel",i.prototype.link=function(a,d,i,j){return c.then(function(c){return function(k){return null==a.template&&(g.put("uigmap-searchbox-default.tpl.html",'<input type="text">'),a.template="uigmap-searchbox-default.tpl.html"),f.get(a.template,{cache:g}).success(function(f){return b.isUndefined(a.events)?void c.$log.error("searchBox: the events property is required"):j.getScope().deferred.promise.then(function(g){var j;return j=b.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_LEFT",k.ControlPosition[j]?new e(a,d,i,g,j,h(f)(a)):void c.$log.error("searchBox: invalid position property")})})}}(this))},i}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapShow",["$animate","uiGmapLogger",function(a,c){return{scope:{uiGmapShow:"=",uiGmapAfterShow:"&",uiGmapAfterHide:"&"},link:function(d,e){var f,g,h;return f=function(b,c){return a[b](e,"ng-hide").then(function(){return c()})},g=function(b,c){return a[b](e,"ng-hide",c)},h=function(a,d){return b.version.major>1?c.error("uiGmapShow is not supported for Angular Major greater than 1.\nYour Major is "+b.version.major+'"'):1===b.version.major&&b.version.minor<3?g(a,d):f(a,d)},d.$watch("uiGmapShow",function(a){return a&&h("removeClass",d.uiGmapAfterShow),a?void 0:h("addClass",d.uiGmapAfterHide)})}}}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapStreetViewPanorama",["uiGmapGoogleMapApi","uiGmapLogger","uiGmapGmapUtil","uiGmapEventsHelper",function(a,c,d,e){var f;return f="uiGmapStreetViewPanorama",{restrict:"EMA",template:'<div class="angular-google-map-street-view-panorama"></div>',replace:!0,scope:{focalcoord:"=",radius:"=?",events:"=?",options:"=?",control:"=?",povoptions:"=?",imagestatus:"="},link:function(g,h,i){return a.then(function(a){return function(a){var i,j,k,l,m,n,o,p,q,r;return p=void 0,r=void 0,k=!1,n=void 0,o=null,q=null,i=function(){return e.removeEvents(n),null!=p&&(p.unbind("position"),p.setVisible(!1)),null!=r?(null!=(null!=r?r.setVisible:void 0)&&r.setVisible(!1),r=void 0):void 0},m=function(a,c){var d;return d=google.maps.geometry.spherical.computeHeading(a,c),k=!0,g.radius=g.radius||50,q=b.extend({heading:d,zoom:1,pitch:0},g.povoptions||{}),o=o=b.extend({navigationControl:!1,addressControl:!1,linksControl:!1,position:a,pov:q,visible:!0},g.options||{}),k=!1},j=function(){var a;return g.focalcoord?g.radius?(i(),null==r&&(r=new google.maps.StreetViewService),g.events&&(n=e.setEvents(r,g,g)),a=d.getCoords(g.focalcoord),r.getPanoramaByLocation(a,g.radius,function(b,c){var d,e,f;return null!=g.imagestatus&&(g.imagestatus=c),null!=(null!=(f=g.events)?f.image_status_changed:void 0)&&g.events.image_status_changed(r,"image_status_changed",g,c),"OK"===c?(e=b.location.latLng,m(e,a),d=h[0],p=new google.maps.StreetViewPanorama(d,o)):void 0})):void c.error(f+": needs a radius to set the camera view from its focal target."):void c.error(f+": focalCoord needs to be defined")},null!=g.control&&(g.control.getOptions=function(){return o},g.control.getPovOptions=function(){return q},g.control.getGObject=function(){return r},g.control.getGPano=function(){return p}),g.$watch("options",function(a,b){return a===b||a===o||k?void 0:j()}),l=!0,g.$watch("focalcoord",function(a,b){return a===b&&!l||null==a?void 0:(l=!1,j())}),g.$on("$destroy",function(){return i()})}}(this))}}}])}.call(this),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapuuid",function(){function a(){}return a.generate=function(){var b=a._gri,c=a._ha;return c(b(32),8)+"-"+c(b(16),4)+"-"+c(16384|b(12),4)+"-"+c(32768|b(14),4)+"-"+c(b(48),12)},a._gri=function(a){return 0>a?NaN:30>=a?0|Math.random()*(1<<a):53>=a?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<a-30)):NaN},a._ha=function(a,b){for(var c=a.toString(16),d=b-c.length,e="0";d>0;d>>>=1,e+=e)1&d&&(c=e+c);return c},a}),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapGoogleMapsUtilV3",function(){return{init:_.once(function(){function b(a){a=a||{},google.maps.OverlayView.apply(this,arguments),this.content_=a.content||"",this.disableAutoPan_=a.disableAutoPan||!1,this.maxWidth_=a.maxWidth||0,this.pixelOffset_=a.pixelOffset||new google.maps.Size(0,0),this.position_=a.position||new google.maps.LatLng(0,0),this.zIndex_=a.zIndex||null,this.boxClass_=a.boxClass||"infoBox",this.boxStyle_=a.boxStyle||{},this.closeBoxMargin_=a.closeBoxMargin||"2px",this.closeBoxURL_=a.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===a.closeBoxURL&&(this.closeBoxURL_=""),this.infoBoxClearance_=a.infoBoxClearance||new google.maps.Size(1,1),"undefined"==typeof a.visible&&("undefined"==typeof a.isHidden?a.visible=!0:a.visible=!a.isHidden),this.isHidden_=!a.visible,this.alignBottom_=a.alignBottom||!1,this.pane_=a.pane||"floatPane",this.enableEventPropagation_=a.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null}function d(a,b){a.getMarkerClusterer().extend(d,google.maps.OverlayView),this.cluster_=a,this.className_=a.getMarkerClusterer().getClusterClass(),this.styles_=b,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(a.getMap())}function e(a){this.markerClusterer_=a,this.map_=a.getMap(),this.gridSize_=a.getGridSize(),this.minClusterSize_=a.getMinimumClusterSize(),this.averageCenter_=a.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new d(this,a.getStyles())}function f(a,b,d){this.extend(f,google.maps.OverlayView),b=b||[],d=d||{},this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.gridSize_=d.gridSize||60,this.minClusterSize_=d.minimumClusterSize||2,this.maxZoom_=d.maxZoom||null,this.styles_=d.styles||[],this.title_=d.title||"",this.zoomOnClick_=!0,d.zoomOnClick!==c&&(this.zoomOnClick_=d.zoomOnClick),this.averageCenter_=!1,d.averageCenter!==c&&(this.averageCenter_=d.averageCenter),this.ignoreHidden_=!1,d.ignoreHidden!==c&&(this.ignoreHidden_=d.ignoreHidden),this.enableRetinaIcons_=!1,d.enableRetinaIcons!==c&&(this.enableRetinaIcons_=d.enableRetinaIcons),this.imagePath_=d.imagePath||f.IMAGE_PATH,this.imageExtension_=d.imageExtension||f.IMAGE_EXTENSION,this.imageSizes_=d.imageSizes||f.IMAGE_SIZES,this.calculator_=d.calculator||f.CALCULATOR,this.batchSize_=d.batchSize||f.BATCH_SIZE,this.batchSizeIE_=d.batchSizeIE||f.BATCH_SIZE_IE,this.clusterClass_=d.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(b,!0),this.setMap(a)}function g(a,b){function c(){}c.prototype=b.prototype,a.superClass_=b.prototype,a.prototype=new c,a.prototype.constructor=a}function h(a,b,c){this.marker_=a,this.handCursorURL_=a.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.setAttribute("onselectstart","return false;"),this.eventDiv_.setAttribute("ondragstart","return false;"),this.crossDiv_=h.getSharedCross(b)}function i(a){a=a||{},a.labelContent=a.labelContent||"",a.labelAnchor=a.labelAnchor||new google.maps.Point(0,0),a.labelClass=a.labelClass||"markerLabels",a.labelStyle=a.labelStyle||{},a.labelInBackground=a.labelInBackground||!1,"undefined"==typeof a.labelVisible&&(a.labelVisible=!0),"undefined"==typeof a.raiseOnDrag&&(a.raiseOnDrag=!0),"undefined"==typeof a.clickable&&(a.clickable=!0),"undefined"==typeof a.draggable&&(a.draggable=!1),"undefined"==typeof a.optimized&&(a.optimized=!1),a.crossImage=a.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",a.handCursor=a.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",a.optimized=!1,this.label=new h(this,a.crossImage,a.handCursor),google.maps.Marker.apply(this,arguments)}function j(a){var b=a||{};this.ready_=!1,this.dragging_=!1,a.visible==c&&(a.visible=!0),a.shadow==c&&(a.shadow="7px -3px 5px rgba(88,88,88,0.7)"),a.anchor==c&&(a.anchor=k.BOTTOM),this.setValues(b)}b.prototype=new google.maps.OverlayView,b.prototype.createInfoBoxDiv_=function(){var a,b,c,d=this,e=function(a){a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},f=function(a){a.returnValue=!1,a.preventDefault&&a.preventDefault(),d.enableEventPropagation_||e(a)};if(!this.div_){if(this.div_=document.createElement("div"),this.setBoxStyle_(),"undefined"==typeof this.content_.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:0!==this.maxWidth_&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.div_.style.overflow="auto",this.fixedWidthSet_=!0):(c=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-c.left-c.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_),!this.enableEventPropagation_){for(this.eventListeners_=[],b=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],a=0;a<b.length;a++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,b[a],e));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(a){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",f),google.maps.event.trigger(this,"domready")}},b.prototype.getCloseBoxImg_=function(){var a="";return""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},b.prototype.addClickHandler_=function(){var a;""!==this.closeBoxURL_?(a=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(a,"click",this.getCloseClickHandler_())):this.closeListener_=null},b.prototype.getCloseClickHandler_=function(){var a=this;return function(b){b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation(),google.maps.event.trigger(a,"closeclick"),a.close()}},b.prototype.panBox_=function(a){var b,c,d=0,e=0;if(!a&&(b=this.getMap(),b instanceof google.maps.Map)){b.getBounds().contains(this.position_)||b.setCenter(this.position_),c=b.getBounds();var f=b.getDiv(),g=f.offsetWidth,h=f.offsetHeight,i=this.pixelOffset_.width,j=this.pixelOffset_.height,k=this.div_.offsetWidth,l=this.div_.offsetHeight,m=this.infoBoxClearance_.width,n=this.infoBoxClearance_.height,o=this.getProjection().fromLatLngToContainerPixel(this.position_);if(o.x<-i+m?d=o.x+i-m:o.x+k+i+m>g&&(d=o.x+k+i+m-g),this.alignBottom_?o.y<-j+n+l?e=o.y+j-n-l:o.y+j+n>h&&(e=o.y+j+n-h):o.y<-j+n?e=o.y+j-n:o.y+l+j+n>h&&(e=o.y+l+j+n-h),0!==d||0!==e){b.getCenter();b.panBy(d,e)}}},b.prototype.setBoxStyle_=function(){var a,b;if(this.div_){this.div_.className=this.boxClass_,this.div_.style.cssText="",b=this.boxStyle_;for(a in b)b.hasOwnProperty(a)&&(this.div_.style[a]=b[a]);this.div_.style.WebkitTransform="translateZ(0)","undefined"!=typeof this.div_.style.opacity&&""!==this.div_.style.opacity&&(this.div_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*this.div_.style.opacity+')"',this.div_.style.filter="alpha(opacity="+100*this.div_.style.opacity+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",null!==this.zIndex_&&(this.div_.style.zIndex=this.zIndex_)}},b.prototype.getBoxWidths_=function(){var a,b={top:0,bottom:0,left:0,right:0},c=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(a=c.ownerDocument.defaultView.getComputedStyle(c,""),a&&(b.top=parseInt(a.borderTopWidth,10)||0,b.bottom=parseInt(a.borderBottomWidth,10)||0,b.left=parseInt(a.borderLeftWidth,10)||0,b.right=parseInt(a.borderRightWidth,10)||0)):document.documentElement.currentStyle&&c.currentStyle&&(b.top=parseInt(c.currentStyle.borderTopWidth,10)||0,b.bottom=parseInt(c.currentStyle.borderBottomWidth,10)||0,b.left=parseInt(c.currentStyle.borderLeftWidth,10)||0,b.right=parseInt(c.currentStyle.borderRightWidth,10)||0),b},b.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},b.prototype.draw=function(){this.createInfoBoxDiv_();var a=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=a.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(a.y+this.pixelOffset_.height)+"px":this.div_.style.top=a.y+this.pixelOffset_.height+"px",this.isHidden_?this.div_.style.visibility="hidden":this.div_.style.visibility="visible"},b.prototype.setOptions=function(a){"undefined"!=typeof a.boxClass&&(this.boxClass_=a.boxClass,this.setBoxStyle_()),"undefined"!=typeof a.boxStyle&&(this.boxStyle_=a.boxStyle,this.setBoxStyle_()),"undefined"!=typeof a.content&&this.setContent(a.content),"undefined"!=typeof a.disableAutoPan&&(this.disableAutoPan_=a.disableAutoPan),"undefined"!=typeof a.maxWidth&&(this.maxWidth_=a.maxWidth),"undefined"!=typeof a.pixelOffset&&(this.pixelOffset_=a.pixelOffset),"undefined"!=typeof a.alignBottom&&(this.alignBottom_=a.alignBottom),"undefined"!=typeof a.position&&this.setPosition(a.position),"undefined"!=typeof a.zIndex&&this.setZIndex(a.zIndex),"undefined"!=typeof a.closeBoxMargin&&(this.closeBoxMargin_=a.closeBoxMargin),"undefined"!=typeof a.closeBoxURL&&(this.closeBoxURL_=a.closeBoxURL),"undefined"!=typeof a.infoBoxClearance&&(this.infoBoxClearance_=a.infoBoxClearance),"undefined"!=typeof a.isHidden&&(this.isHidden_=a.isHidden),"undefined"!=typeof a.visible&&(this.isHidden_=!a.visible),"undefined"!=typeof a.enableEventPropagation&&(this.enableEventPropagation_=a.enableEventPropagation),this.div_&&this.draw()},b.prototype.setContent=function(a){this.content_=a,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),"undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px","undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},b.prototype.setPosition=function(a){this.position_=a,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},b.prototype.setZIndex=function(a){this.zIndex_=a,this.div_&&(this.div_.style.zIndex=a),google.maps.event.trigger(this,"zindex_changed")},b.prototype.setVisible=function(a){this.isHidden_=!a,this.div_&&(this.div_.style.visibility=this.isHidden_?"hidden":"visible")},b.prototype.getContent=function(){return this.content_},b.prototype.getPosition=function(){return this.position_},b.prototype.getZIndex=function(){return this.zIndex_},b.prototype.getVisible=function(){var a;return a="undefined"==typeof this.getMap()||null===this.getMap()?!1:!this.isHidden_},b.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},b.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},b.prototype.open=function(a,b){var c=this;b&&(this.position_=b.getPosition(),this.moveListener_=google.maps.event.addListener(b,"position_changed",function(){c.setPosition(this.getPosition())})),this.setMap(a),this.div_&&this.panBox_()},b.prototype.close=function(){var a;if(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.eventListeners_){for(a=0;a<this.eventListeners_.length;a++)google.maps.event.removeListener(this.eventListeners_[a]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)},function(){function b(a,b){var c=this,d=new google.maps.OverlayView;d.onAdd=function(){c.init_(a,b)},d.draw=function(){},d.onRemove=function(){},d.setMap(a),this.prjov_=d}var c=function(a){var b;switch(a){case"thin":b="2px";break;case"medium":b="4px";break;case"thick":b="6px";break;default:b=a}return b},d=function(a){var b,d={};if(document.defaultView&&document.defaultView.getComputedStyle){if(b=a.ownerDocument.defaultView.getComputedStyle(a,""))return d.top=parseInt(b.borderTopWidth,10)||0,d.bottom=parseInt(b.borderBottomWidth,10)||0,d.left=parseInt(b.borderLeftWidth,10)||0,d.right=parseInt(b.borderRightWidth,10)||0,d}else if(document.documentElement.currentStyle&&a.currentStyle)return d.top=parseInt(c(a.currentStyle.borderTopWidth),10)||0,d.bottom=parseInt(c(a.currentStyle.borderBottomWidth),10)||0,d.left=parseInt(c(a.currentStyle.borderLeftWidth),10)||0,d.right=parseInt(c(a.currentStyle.borderRightWidth),10)||0,d;return d.top=parseInt(a.style["border-top-width"],10)||0,d.bottom=parseInt(a.style["border-bottom-width"],10)||0,d.left=parseInt(a.style["border-left-width"],10)||0,d.right=parseInt(a.style["border-right-width"],10)||0,d},e={x:0,y:0},f=function(a){e.x="undefined"!=typeof document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft,e.y="undefined"!=typeof document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop};f();var g=function(b){var c=0,d=0;return b=b||a.event,"undefined"!=typeof b.pageX?(c=b.pageX,d=b.pageY):"undefined"!=typeof b.clientX&&(c=b.clientX+e.x,d=b.clientY+e.y),{left:c,top:d}},h=function(b){for(var c=b.offsetLeft,d=b.offsetTop,e=b.offsetParent;null!==e;){e!==document.body&&e!==document.documentElement&&(c-=e.scrollLeft,d-=e.scrollTop);var f=e,g=f.offsetLeft,h=f.offsetTop;if(!g&&!h&&a.getComputedStyle){var i=document.defaultView.getComputedStyle(f,null).MozTransform||document.defaultView.getComputedStyle(f,null).WebkitTransform;if(i&&"string"==typeof i){var j=i.split(",");g+=parseInt(j[4],10)||0,h+=parseInt(j[5],10)||0}}c+=g,d+=h,e=e.offsetParent}return{left:c,top:d}},i=function(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},j=function(a,b){"undefined"!=typeof b&&(a.style.opacity=b),"undefined"!=typeof a.style.opacity&&""!==a.style.opacity&&(a.style.filter="alpha(opacity="+100*a.style.opacity+")")};b.prototype.init_=function(b,c){var e,g=this;for(this.map_=b,c=c||{},this.key_=c.key||"shift",this.key_=this.key_.toLowerCase(),this.borderWidths_=d(this.map_.getDiv()),this.veilDiv_=[],e=0;4>e;e++)this.veilDiv_[e]=document.createElement("div"),this.veilDiv_[e].onselectstart=function(){return!1},i(this.veilDiv_[e].style,{backgroundColor:"gray",opacity:.25,cursor:"crosshair"}),i(this.veilDiv_[e].style,c.paneStyle),i(this.veilDiv_[e].style,c.veilStyle),i(this.veilDiv_[e].style,{position:"absolute",overflow:"hidden",display:"none"}),"shift"===this.key_&&(this.veilDiv_[e].style.MozUserSelect="none"),j(this.veilDiv_[e]),"transparent"===this.veilDiv_[e].style.backgroundColor&&(this.veilDiv_[e].style.backgroundColor="white",j(this.veilDiv_[e],0)),this.map_.getDiv().appendChild(this.veilDiv_[e]);this.noZoom_=c.noZoom||!1,this.visualEnabled_=c.visualEnabled||!1,this.visualClass_=c.visualClass||"",this.visualPosition_=c.visualPosition||google.maps.ControlPosition.LEFT_TOP,this.visualPositionOffset_=c.visualPositionOffset||new google.maps.Size(35,0),this.visualPositionIndex_=c.visualPositionIndex||null,this.visualSprite_=c.visualSprite||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/mapfiles/ftr/controls/dragzoom_btn.png",this.visualSize_=c.visualSize||new google.maps.Size(20,20),this.visualTips_=c.visualTips||{},this.visualTips_.off=this.visualTips_.off||"Turn on drag zoom mode",this.visualTips_.on=this.visualTips_.on||"Turn off drag zoom mode",this.boxDiv_=document.createElement("div"),i(this.boxDiv_.style,{border:"4px solid #736AFF"}),i(this.boxDiv_.style,c.boxStyle),i(this.boxDiv_.style,{position:"absolute",display:"none"}),j(this.boxDiv_),this.map_.getDiv().appendChild(this.boxDiv_),this.boxBorderWidths_=d(this.boxDiv_),this.listeners_=[google.maps.event.addDomListener(document,"keydown",function(a){g.onKeyDown_(a)}),google.maps.event.addDomListener(document,"keyup",function(a){g.onKeyUp_(a)}),google.maps.event.addDomListener(this.veilDiv_[0],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[1],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[2],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[3],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(document,"mousedown",function(a){g.onMouseDownDocument_(a)}),google.maps.event.addDomListener(document,"mousemove",function(a){g.onMouseMove_(a)}),google.maps.event.addDomListener(document,"mouseup",function(a){g.onMouseUp_(a)}),google.maps.event.addDomListener(a,"scroll",f)],this.hotKeyDown_=!1,this.mouseDown_=!1,this.dragging_=!1,this.startPt_=null,this.endPt_=null,this.mapWidth_=null,this.mapHeight_=null,this.mousePosn_=null,this.mapPosn_=null,this.visualEnabled_&&(this.buttonDiv_=this.initControl_(this.visualPositionOffset_),null!==this.visualPositionIndex_&&(this.buttonDiv_.index=this.visualPositionIndex_),this.map_.controls[this.visualPosition_].push(this.buttonDiv_),this.controlIndex_=this.map_.controls[this.visualPosition_].length-1)},b.prototype.initControl_=function(a){var b,c,d=this;return b=document.createElement("div"),b.className=this.visualClass_,b.style.position="relative",b.style.overflow="hidden",b.style.height=this.visualSize_.height+"px",b.style.width=this.visualSize_.width+"px",b.title=this.visualTips_.off,c=document.createElement("img"),c.src=this.visualSprite_,c.style.position="absolute",c.style.left=-(2*this.visualSize_.width)+"px",c.style.top="0px",b.appendChild(c),b.onclick=function(a){d.hotKeyDown_=!d.hotKeyDown_,d.hotKeyDown_?(d.buttonDiv_.firstChild.style.left=-(0*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.on,d.activatedByControl_=!0,google.maps.event.trigger(d,"activate")):(d.buttonDiv_.firstChild.style.left=-(2*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.off,google.maps.event.trigger(d,"deactivate")),d.onMouseMove_(a)},b.onmouseover=function(){d.buttonDiv_.firstChild.style.left=-(1*d.visualSize_.width)+"px"},b.onmouseout=function(){d.hotKeyDown_?(d.buttonDiv_.firstChild.style.left=-(0*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.on):(d.buttonDiv_.firstChild.style.left=-(2*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.off)},b.ondragstart=function(){return!1},i(b.style,{cursor:"pointer",marginTop:a.height+"px",marginLeft:a.width+"px"}),b},b.prototype.isHotKeyDown_=function(b){var c;if(b=b||a.event,c=b.shiftKey&&"shift"===this.key_||b.altKey&&"alt"===this.key_||b.ctrlKey&&"ctrl"===this.key_,!c)switch(b.keyCode){case 16:"shift"===this.key_&&(c=!0);break;case 17:"ctrl"===this.key_&&(c=!0);break;case 18:"alt"===this.key_&&(c=!0)}return c},b.prototype.isMouseOnMap_=function(){var a=this.mousePosn_;if(a){var b=this.mapPosn_,c=this.map_.getDiv();return a.left>b.left&&a.left<b.left+c.offsetWidth&&a.top>b.top&&a.top<b.top+c.offsetHeight}return!1},b.prototype.setVeilVisibility_=function(){var a;if(this.map_&&this.hotKeyDown_&&this.isMouseOnMap_()){var b=this.map_.getDiv();if(this.mapWidth_=b.offsetWidth-(this.borderWidths_.left+this.borderWidths_.right),this.mapHeight_=b.offsetHeight-(this.borderWidths_.top+this.borderWidths_.bottom),this.activatedByControl_){var c=parseInt(this.buttonDiv_.style.left,10)+this.visualPositionOffset_.width,d=parseInt(this.buttonDiv_.style.top,10)+this.visualPositionOffset_.height,e=this.visualSize_.width,f=this.visualSize_.height;for(this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.width=c+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",this.veilDiv_[1].style.top="0px",this.veilDiv_[1].style.left=c+e+"px",this.veilDiv_[1].style.width=this.mapWidth_-(c+e)+"px",this.veilDiv_[1].style.height=this.mapHeight_+"px",this.veilDiv_[2].style.top="0px",this.veilDiv_[2].style.left=c+"px",this.veilDiv_[2].style.width=e+"px",this.veilDiv_[2].style.height=d+"px",this.veilDiv_[3].style.top=d+f+"px",this.veilDiv_[3].style.left=c+"px",this.veilDiv_[3].style.width=e+"px",this.veilDiv_[3].style.height=this.mapHeight_-(d+f)+"px",a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="block"}else{for(this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.width=this.mapWidth_+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",a=1;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.width="0px",this.veilDiv_[a].style.height="0px";for(a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="block"}}else for(a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="none"},b.prototype.onKeyDown_=function(a){this.map_&&!this.hotKeyDown_&&this.isHotKeyDown_(a)&&(this.mapPosn_=h(this.map_.getDiv()),this.hotKeyDown_=!0,this.activatedByControl_=!1,this.setVeilVisibility_(),google.maps.event.trigger(this,"activate"))},b.prototype.getMousePoint_=function(a){var b=g(a),c=new google.maps.Point;return c.x=b.left-this.mapPosn_.left-this.borderWidths_.left,c.y=b.top-this.mapPosn_.top-this.borderWidths_.top,c.x=Math.min(c.x,this.mapWidth_),c.y=Math.min(c.y,this.mapHeight_),c.x=Math.max(c.x,0),c.y=Math.max(c.y,0),c},b.prototype.onMouseDown_=function(a){if(this.map_&&this.hotKeyDown_){this.mapPosn_=h(this.map_.getDiv()),this.dragging_=!0,this.startPt_=this.endPt_=this.getMousePoint_(a),this.boxDiv_.style.width=this.boxDiv_.style.height="0px";var b=this.prjov_.getProjection(),c=b.fromContainerPixelToLatLng(this.startPt_);google.maps.event.trigger(this,"dragstart",c)}},b.prototype.onMouseDownDocument_=function(a){this.mouseDown_=!0},b.prototype.onMouseMove_=function(a){if(this.mousePosn_=g(a),this.dragging_){this.endPt_=this.getMousePoint_(a);var b=Math.min(this.startPt_.x,this.endPt_.x),c=Math.min(this.startPt_.y,this.endPt_.y),d=Math.abs(this.startPt_.x-this.endPt_.x),e=Math.abs(this.startPt_.y-this.endPt_.y),f=Math.max(0,d-(this.boxBorderWidths_.left+this.boxBorderWidths_.right)),i=Math.max(0,e-(this.boxBorderWidths_.top+this.boxBorderWidths_.bottom));this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.width=b+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",this.veilDiv_[1].style.top="0px",this.veilDiv_[1].style.left=b+d+"px",this.veilDiv_[1].style.width=this.mapWidth_-(b+d)+"px",this.veilDiv_[1].style.height=this.mapHeight_+"px",this.veilDiv_[2].style.top="0px",this.veilDiv_[2].style.left=b+"px",this.veilDiv_[2].style.width=d+"px",this.veilDiv_[2].style.height=c+"px",this.veilDiv_[3].style.top=c+e+"px",this.veilDiv_[3].style.left=b+"px",this.veilDiv_[3].style.width=d+"px",this.veilDiv_[3].style.height=this.mapHeight_-(c+e)+"px",this.boxDiv_.style.top=c+"px",this.boxDiv_.style.left=b+"px",this.boxDiv_.style.width=f+"px",this.boxDiv_.style.height=i+"px",this.boxDiv_.style.display="block",google.maps.event.trigger(this,"drag",new google.maps.Point(b,c+e),new google.maps.Point(b+d,c),this.prjov_.getProjection())}else this.mouseDown_||(this.mapPosn_=h(this.map_.getDiv()),this.setVeilVisibility_())},b.prototype.onMouseUp_=function(a){var b,c=this;if(this.mouseDown_=!1,this.dragging_){if(this.getMousePoint_(a).x===this.startPt_.x&&this.getMousePoint_(a).y===this.startPt_.y)return void this.onKeyUp_(a);var d=Math.min(this.startPt_.x,this.endPt_.x),e=Math.min(this.startPt_.y,this.endPt_.y),f=Math.abs(this.startPt_.x-this.endPt_.x),g=Math.abs(this.startPt_.y-this.endPt_.y),h=!0;h&&(d+=this.borderWidths_.left,e+=this.borderWidths_.top);var i=this.prjov_.getProjection(),j=i.fromContainerPixelToLatLng(new google.maps.Point(d,e+g)),k=i.fromContainerPixelToLatLng(new google.maps.Point(d+f,e)),l=new google.maps.LatLngBounds(j,k);if(this.noZoom_)this.boxDiv_.style.display="none";else{b=this.map_.getZoom(),this.map_.fitBounds(l),this.map_.getZoom()<b&&this.map_.setZoom(b);var m=i.fromLatLngToContainerPixel(j),n=i.fromLatLngToContainerPixel(k);h&&(m.x-=this.borderWidths_.left,m.y-=this.borderWidths_.top,n.x-=this.borderWidths_.left,n.y-=this.borderWidths_.top),this.boxDiv_.style.left=m.x+"px",this.boxDiv_.style.top=n.y+"px",this.boxDiv_.style.width=Math.abs(n.x-m.x)-(this.boxBorderWidths_.left+this.boxBorderWidths_.right)+"px",this.boxDiv_.style.height=Math.abs(n.y-m.y)-(this.boxBorderWidths_.top+this.boxBorderWidths_.bottom)+"px",setTimeout(function(){c.boxDiv_.style.display="none"},1e3)}this.dragging_=!1,this.onMouseMove_(a),google.maps.event.trigger(this,"dragend",l),this.isHotKeyDown_(a)||this.onKeyUp_(a)}},b.prototype.onKeyUp_=function(a){var b,c,d,e,f,g,h,i,j=null;if(this.map_&&this.hotKeyDown_){for(this.hotKeyDown_=!1,this.dragging_&&(this.boxDiv_.style.display="none",this.dragging_=!1,c=Math.min(this.startPt_.x,this.endPt_.x),d=Math.min(this.startPt_.y,this.endPt_.y),e=Math.abs(this.startPt_.x-this.endPt_.x),f=Math.abs(this.startPt_.y-this.endPt_.y),g=this.prjov_.getProjection(),h=g.fromContainerPixelToLatLng(new google.maps.Point(c,d+f)),i=g.fromContainerPixelToLatLng(new google.maps.Point(c+e,d)),j=new google.maps.LatLngBounds(h,i)),b=0;b<this.veilDiv_.length;b++)this.veilDiv_[b].style.display="none";
this.visualEnabled_&&(this.buttonDiv_.firstChild.style.left=-(2*this.visualSize_.width)+"px",this.buttonDiv_.title=this.visualTips_.off,this.buttonDiv_.style.display=""),google.maps.event.trigger(this,"deactivate",j)}},google.maps.Map.prototype.enableKeyDragZoom=function(a){this.dragZoom_=new b(this,a)},google.maps.Map.prototype.disableKeyDragZoom=function(){var a,b=this.dragZoom_;if(b){for(a=0;a<b.listeners_.length;++a)google.maps.event.removeListener(b.listeners_[a]);for(this.getDiv().removeChild(b.boxDiv_),a=0;a<b.veilDiv_.length;a++)this.getDiv().removeChild(b.veilDiv_[a]);b.visualEnabled_&&this.controls[b.visualPosition_].removeAt(b.controlIndex_),b.prjov_.setMap(null),this.dragZoom_=null}},google.maps.Map.prototype.keyDragZoomEnabled=function(){return null!==this.dragZoom_},google.maps.Map.prototype.getDragZoomObject=function(){return this.dragZoom_}}(),d.prototype.onAdd=function(){var a,b,c=this;this.div_=document.createElement("div"),this.div_.className=this.className_,this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",function(){b=a}),google.maps.event.addDomListener(this.div_,"mousedown",function(){a=!0,b=!1}),google.maps.event.addDomListener(this.div_,"click",function(d){if(a=!1,!b){var e,f,g=c.cluster_.getMarkerClusterer();google.maps.event.trigger(g,"click",c.cluster_),google.maps.event.trigger(g,"clusterclick",c.cluster_),g.getZoomOnClick()&&(f=g.getMaxZoom(),e=c.cluster_.getBounds(),g.getMap().fitBounds(e),setTimeout(function(){g.getMap().fitBounds(e),null!==f&&g.getMap().getZoom()>f&&g.getMap().setZoom(f+1)},100)),d.cancelBubble=!0,d.stopPropagation&&d.stopPropagation()}}),google.maps.event.addDomListener(this.div_,"mouseover",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseover",c.cluster_)}),google.maps.event.addDomListener(this.div_,"mouseout",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseout",c.cluster_)})},d.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},d.prototype.draw=function(){if(this.visible_){var a=this.getPosFromLatLng_(this.center_);this.div_.style.top=a.y+"px",this.div_.style.left=a.x+"px"}},d.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},d.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",this.cluster_.getMarkerClusterer().enableRetinaIcons_||(a+="clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);"),a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>","undefined"==typeof this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},d.prototype.useStyle=function(a){this.sums_=a;var b=Math.max(0,a.index-1);b=Math.min(this.styles_.length-1,b);var c=this.styles_[b];this.url_=c.url,this.height_=c.height,this.width_=c.width,this.anchorText_=c.anchorText||[0,0],this.anchorIcon_=c.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)],this.textColor_=c.textColor||"black",this.textSize_=c.textSize||11,this.textDecoration_=c.textDecoration||"none",this.fontWeight_=c.fontWeight||"bold",this.fontStyle_=c.fontStyle||"normal",this.fontFamily_=c.fontFamily||"Arial,sans-serif",this.backgroundPosition_=c.backgroundPosition||"0 0"},d.prototype.setCenter=function(a){this.center_=a},d.prototype.createCss=function(a){var b=[];return b.push("cursor: pointer;"),b.push("position: absolute; top: "+a.y+"px; left: "+a.x+"px;"),b.push("width: "+this.width_+"px; height: "+this.height_+"px;"),b.join("")},d.prototype.getPosFromLatLng_=function(a){var b=this.getProjection().fromLatLngToDivPixel(a);return b.x-=this.anchorIcon_[1],b.y-=this.anchorIcon_[0],b.x=parseInt(b.x,10),b.y=parseInt(b.y,10),b},e.prototype.getSize=function(){return this.markers_.length},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getCenter=function(){return this.center_},e.prototype.getMap=function(){return this.map_},e.prototype.getMarkerClusterer=function(){return this.markerClusterer_},e.prototype.getBounds=function(){var a,b=new google.maps.LatLngBounds(this.center_,this.center_),c=this.getMarkers();for(a=0;a<c.length;a++)b.extend(c[a].getPosition());return b},e.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},e.prototype.addMarker=function(a){var b,c,d;if(this.isMarkerAlreadyAdded_(a))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();if(a.isAdded=!0,this.markers_.push(a),c=this.markers_.length,d=this.markerClusterer_.getMaxZoom(),null!==d&&this.map_.getZoom()>d)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c<this.minClusterSize_)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c===this.minClusterSize_)for(b=0;c>b;b++)this.markers_[b].setMap(null);else a.setMap(null);return this.updateIcon_(),!0},e.prototype.isMarkerInClusterBounds=function(a){return this.bounds_.contains(a.getPosition())},e.prototype.calculateBounds_=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(a)},e.prototype.updateIcon_=function(){var a=this.markers_.length,b=this.markerClusterer_.getMaxZoom();if(null!==b&&this.map_.getZoom()>b)return void this.clusterIcon_.hide();if(a<this.minClusterSize_)return void this.clusterIcon_.hide();var c=this.markerClusterer_.getStyles().length,d=this.markerClusterer_.getCalculator()(this.markers_,c);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(d),this.clusterIcon_.show()},e.prototype.isMarkerAlreadyAdded_=function(a){var b;if(this.markers_.indexOf)return-1!==this.markers_.indexOf(a);for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b])return!0;return!1},f.prototype.onAdd=function(){var a=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",function(){a.resetViewport_(!1),(this.getZoom()===(this.get("minZoom")||0)||this.getZoom()===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")}),google.maps.event.addListener(this.getMap(),"idle",function(){a.redraw_()})]},f.prototype.onRemove=function(){var a;for(a=0;a<this.markers_.length;a++)this.markers_[a].getMap()!==this.activeMap_&&this.markers_[a].setMap(this.activeMap_);for(a=0;a<this.clusters_.length;a++)this.clusters_[a].remove();for(this.clusters_=[],a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},f.prototype.draw=function(){},f.prototype.setupStyles_=function(){var a,b;if(!(this.styles_.length>0))for(a=0;a<this.imageSizes_.length;a++)b=this.imageSizes_[a],this.styles_.push({url:this.imagePath_+(a+1)+"."+this.imageExtension_,height:b,width:b})},f.prototype.fitMapToMarkers=function(){var a,b=this.getMarkers(),c=new google.maps.LatLngBounds;for(a=0;a<b.length;a++)c.extend(b[a].getPosition());this.getMap().fitBounds(c)},f.prototype.getGridSize=function(){return this.gridSize_},f.prototype.setGridSize=function(a){this.gridSize_=a},f.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},f.prototype.setMinimumClusterSize=function(a){this.minClusterSize_=a},f.prototype.getMaxZoom=function(){return this.maxZoom_},f.prototype.setMaxZoom=function(a){this.maxZoom_=a},f.prototype.getStyles=function(){return this.styles_},f.prototype.setStyles=function(a){this.styles_=a},f.prototype.getTitle=function(){return this.title_},f.prototype.setTitle=function(a){this.title_=a},f.prototype.getZoomOnClick=function(){return this.zoomOnClick_},f.prototype.setZoomOnClick=function(a){this.zoomOnClick_=a},f.prototype.getAverageCenter=function(){return this.averageCenter_},f.prototype.setAverageCenter=function(a){this.averageCenter_=a},f.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},f.prototype.setIgnoreHidden=function(a){this.ignoreHidden_=a},f.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},f.prototype.setEnableRetinaIcons=function(a){this.enableRetinaIcons_=a},f.prototype.getImageExtension=function(){return this.imageExtension_},f.prototype.setImageExtension=function(a){this.imageExtension_=a},f.prototype.getImagePath=function(){return this.imagePath_},f.prototype.setImagePath=function(a){this.imagePath_=a},f.prototype.getImageSizes=function(){return this.imageSizes_},f.prototype.setImageSizes=function(a){this.imageSizes_=a},f.prototype.getCalculator=function(){return this.calculator_},f.prototype.setCalculator=function(a){this.calculator_=a},f.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},f.prototype.setBatchSizeIE=function(a){this.batchSizeIE_=a},f.prototype.getClusterClass=function(){return this.clusterClass_},f.prototype.setClusterClass=function(a){this.clusterClass_=a},f.prototype.getMarkers=function(){return this.markers_},f.prototype.getTotalMarkers=function(){return this.markers_.length},f.prototype.getClusters=function(){return this.clusters_},f.prototype.getTotalClusters=function(){return this.clusters_.length},f.prototype.addMarker=function(a,b){this.pushMarkerTo_(a),b||this.redraw_()},f.prototype.addMarkers=function(a,b){var c;for(c in a)a.hasOwnProperty(c)&&this.pushMarkerTo_(a[c]);b||this.redraw_()},f.prototype.pushMarkerTo_=function(a){if(a.getDraggable()){var b=this;google.maps.event.addListener(a,"dragend",function(){b.ready_&&(this.isAdded=!1,b.repaint())})}a.isAdded=!1,this.markers_.push(a)},f.prototype.removeMarker=function(a,b){var c=this.removeMarker_(a);return!b&&c&&this.repaint(),c},f.prototype.removeMarkers=function(a,b){var c,d,e=!1;for(c=0;c<a.length;c++)d=this.removeMarker_(a[c]),e=e||d;return!b&&e&&this.repaint(),e},f.prototype.removeMarker_=function(a){var b,c=-1;if(this.markers_.indexOf)c=this.markers_.indexOf(a);else for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b]){c=b;break}return-1===c?!1:(a.setMap(null),this.markers_.splice(c,1),!0)},f.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},f.prototype.repaint=function(){var a=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout(function(){var b;for(b=0;b<a.length;b++)a[b].remove()},0)},f.prototype.getExtendedBounds=function(a){var b=this.getProjection(),c=new google.maps.LatLng(a.getNorthEast().lat(),a.getNorthEast().lng()),d=new google.maps.LatLng(a.getSouthWest().lat(),a.getSouthWest().lng()),e=b.fromLatLngToDivPixel(c);e.x+=this.gridSize_,e.y-=this.gridSize_;var f=b.fromLatLngToDivPixel(d);f.x-=this.gridSize_,f.y+=this.gridSize_;var g=b.fromDivPixelToLatLng(e),h=b.fromDivPixelToLatLng(f);return a.extend(g),a.extend(h),a},f.prototype.redraw_=function(){this.createClusters_(0)},f.prototype.resetViewport_=function(a){var b,c;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();for(this.clusters_=[],b=0;b<this.markers_.length;b++)c=this.markers_[b],c.isAdded=!1,a&&c.setMap(null)},f.prototype.distanceBetweenPoints_=function(a,b){var c=6371,d=(b.lat()-a.lat())*Math.PI/180,e=(b.lng()-a.lng())*Math.PI/180,f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(a.lat()*Math.PI/180)*Math.cos(b.lat()*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),h=c*g;return h},f.prototype.isMarkerInBounds_=function(a,b){return b.contains(a.getPosition())},f.prototype.addToClosestCluster_=function(a){var b,c,d,f,g=4e4,h=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],f=d.getCenter(),f&&(c=this.distanceBetweenPoints_(f,a.getPosition()),g>c&&(g=c,h=d));h&&h.isMarkerInClusterBounds(a)?h.addMarker(a):(d=new e(this),d.addMarker(a),this.clusters_.push(d))},f.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length);for(b=a;g>b;b++)c=this.markers_[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);g<this.markers_.length?this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0):(delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this))}},f.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)this.prototype[b]=a.prototype[b];return this}.apply(a,[b])},f.CALCULATOR=function(a,b){for(var c=0,d="",e=a.length.toString(),f=e;0!==f;)f=parseInt(f/10,10),c++;return c=Math.min(c,b),{text:e,index:c,title:d}},f.BATCH_SIZE=2e3,f.BATCH_SIZE_IE=500,f.IMAGE_PATH="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m",f.IMAGE_EXTENSION="png",f.IMAGE_SIZES=[53,56,66,78,90],g(h,google.maps.OverlayView),h.getSharedCross=function(a){var b;return"undefined"==typeof h.getSharedCross.crossDiv&&(b=document.createElement("img"),b.style.cssText="position: absolute; z-index: 1000002; display: none;",b.style.marginLeft="-8px",b.style.marginTop="-9px",b.src=a,h.getSharedCross.crossDiv=b),h.getSharedCross.crossDiv},h.prototype.onAdd=function(){var a,b,c,d,e,f,g,i=this,j=!1,k=!1,l=20,m="url("+this.handCursorURL_+")",n=function(a){a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},o=function(){i.marker_.setAnimation(null)};this.getPanes().overlayImage.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),"undefined"==typeof h.getSharedCross.processed&&(this.getPanes().overlayImage.appendChild(this.crossDiv_),h.getSharedCross.processed=!0),this.listeners_=[google.maps.event.addDomListener(this.eventDiv_,"mouseover",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(this.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseover",a))}),google.maps.event.addDomListener(this.eventDiv_,"mouseout",function(a){!i.marker_.getDraggable()&&!i.marker_.getClickable()||k||(this.style.cursor=i.marker_.getCursor(),google.maps.event.trigger(i.marker_,"mouseout",a))}),google.maps.event.addDomListener(this.eventDiv_,"mousedown",function(a){k=!1,i.marker_.getDraggable()&&(j=!0,this.style.cursor=m),(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"mousedown",a),n(a))}),google.maps.event.addDomListener(document,"mouseup",function(b){var c;if(j&&(j=!1,i.eventDiv_.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseup",b)),k){if(e){c=i.getProjection().fromLatLngToDivPixel(i.marker_.getPosition()),c.y+=l,i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(c));try{i.marker_.setAnimation(google.maps.Animation.BOUNCE),setTimeout(o,1406)}catch(f){}}i.crossDiv_.style.display="none",i.marker_.setZIndex(a),d=!0,k=!1,b.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragend",b)}}),google.maps.event.addListener(i.marker_.getMap(),"mousemove",function(d){var h;j&&(k?(d.latLng=new google.maps.LatLng(d.latLng.lat()-b,d.latLng.lng()-c),h=i.getProjection().fromLatLngToDivPixel(d.latLng),e&&(i.crossDiv_.style.left=h.x+"px",i.crossDiv_.style.top=h.y+"px",i.crossDiv_.style.display="",h.y-=l),i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(h)),e&&(i.eventDiv_.style.top=h.y+l+"px"),google.maps.event.trigger(i.marker_,"drag",d)):(b=d.latLng.lat()-i.marker_.getPosition().lat(),c=d.latLng.lng()-i.marker_.getPosition().lng(),a=i.marker_.getZIndex(),f=i.marker_.getPosition(),g=i.marker_.getMap().getCenter(),e=i.marker_.get("raiseOnDrag"),k=!0,i.marker_.setZIndex(1e6),d.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragstart",d)))}),google.maps.event.addDomListener(document,"keydown",function(a){k&&27===a.keyCode&&(e=!1,i.marker_.setPosition(f),i.marker_.getMap().setCenter(g),google.maps.event.trigger(document,"mouseup",a))}),google.maps.event.addDomListener(this.eventDiv_,"click",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(d?d=!1:(google.maps.event.trigger(i.marker_,"click",a),n(a)))}),google.maps.event.addDomListener(this.eventDiv_,"dblclick",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"dblclick",a),n(a))}),google.maps.event.addListener(this.marker_,"dragstart",function(a){k||(e=this.get("raiseOnDrag"))}),google.maps.event.addListener(this.marker_,"drag",function(a){k||e&&(i.setPosition(l),i.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))}),google.maps.event.addListener(this.marker_,"dragend",function(a){k||e&&i.setPosition(0)}),google.maps.event.addListener(this.marker_,"position_changed",function(){i.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){i.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){i.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){i.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){i.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){i.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){i.setStyles()})]},h.prototype.onRemove=function(){var a;for(this.labelDiv_.parentNode.removeChild(this.labelDiv_),this.eventDiv_.parentNode.removeChild(this.eventDiv_),a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a])},h.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},h.prototype.setContent=function(){var a=this.marker_.get("labelContent");"undefined"==typeof a.nodeType?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.eventDiv_.innerHTML="",this.eventDiv_.appendChild(a))},h.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},h.prototype.setStyles=function(){var a,b;this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",b=this.marker_.get("labelStyle");for(a in b)b.hasOwnProperty(a)&&(this.labelDiv_.style[a]=b[a],this.eventDiv_.style[a]=b[a]);this.setMandatoryStyles()},h.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden","undefined"!=typeof this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},h.prototype.setAnchor=function(){var a=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-a.x+"px",this.labelDiv_.style.marginTop=-a.y+"px",this.eventDiv_.style.marginLeft=-a.x+"px",this.eventDiv_.style.marginTop=-a.y+"px"},h.prototype.setPosition=function(a){var b=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());"undefined"==typeof a&&(a=0),this.labelDiv_.style.left=Math.round(b.x)+"px",this.labelDiv_.style.top=Math.round(b.y-a)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},h.prototype.setZIndex=function(){var a=this.marker_.get("labelInBackground")?-1:1;"undefined"==typeof this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},h.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none",this.eventDiv_.style.display=this.labelDiv_.style.display},g(i,google.maps.Marker),i.prototype.setMap=function(a){google.maps.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(a)},j.prototype=new google.maps.OverlayView,a.RichMarker=j,j.prototype.getVisible=function(){return this.get("visible")},j.prototype.getVisible=j.prototype.getVisible,j.prototype.setVisible=function(a){this.set("visible",a)},j.prototype.setVisible=j.prototype.setVisible,j.prototype.visible_changed=function(){this.ready_&&(this.markerWrapper_.style.display=this.getVisible()?"":"none",this.draw())},j.prototype.visible_changed=j.prototype.visible_changed,j.prototype.setFlat=function(a){this.set("flat",!!a)},j.prototype.setFlat=j.prototype.setFlat,j.prototype.getFlat=function(){return this.get("flat")},j.prototype.getFlat=j.prototype.getFlat,j.prototype.getWidth=function(){return this.get("width")},j.prototype.getWidth=j.prototype.getWidth,j.prototype.getHeight=function(){return this.get("height")},j.prototype.getHeight=j.prototype.getHeight,j.prototype.setShadow=function(a){this.set("shadow",a),this.flat_changed()},j.prototype.setShadow=j.prototype.setShadow,j.prototype.getShadow=function(){return this.get("shadow")},j.prototype.getShadow=j.prototype.getShadow,j.prototype.flat_changed=function(){this.ready_&&(this.markerWrapper_.style.boxShadow=this.markerWrapper_.style.webkitBoxShadow=this.markerWrapper_.style.MozBoxShadow=this.getFlat()?"":this.getShadow())},j.prototype.flat_changed=j.prototype.flat_changed,j.prototype.setZIndex=function(a){this.set("zIndex",a)},j.prototype.setZIndex=j.prototype.setZIndex,j.prototype.getZIndex=function(){return this.get("zIndex")},j.prototype.getZIndex=j.prototype.getZIndex,j.prototype.zIndex_changed=function(){this.getZIndex()&&this.ready_&&(this.markerWrapper_.style.zIndex=this.getZIndex())},j.prototype.zIndex_changed=j.prototype.zIndex_changed,j.prototype.getDraggable=function(){return this.get("draggable")},j.prototype.getDraggable=j.prototype.getDraggable,j.prototype.setDraggable=function(a){this.set("draggable",!!a)},j.prototype.setDraggable=j.prototype.setDraggable,j.prototype.draggable_changed=function(){this.ready_&&(this.getDraggable()?this.addDragging_(this.markerWrapper_):this.removeDragListeners_())},j.prototype.draggable_changed=j.prototype.draggable_changed,j.prototype.getPosition=function(){return this.get("position")},j.prototype.getPosition=j.prototype.getPosition,j.prototype.setPosition=function(a){this.set("position",a)},j.prototype.setPosition=j.prototype.setPosition,j.prototype.position_changed=function(){this.draw()},j.prototype.position_changed=j.prototype.position_changed,j.prototype.getAnchor=function(){return this.get("anchor")},j.prototype.getAnchor=j.prototype.getAnchor,j.prototype.setAnchor=function(a){this.set("anchor",a)},j.prototype.setAnchor=j.prototype.setAnchor,j.prototype.anchor_changed=function(){this.draw()},j.prototype.anchor_changed=j.prototype.anchor_changed,j.prototype.htmlToDocumentFragment_=function(a){var b=document.createElement("DIV");if(b.innerHTML=a,1==b.childNodes.length)return b.removeChild(b.firstChild);for(var c=document.createDocumentFragment();b.firstChild;)c.appendChild(b.firstChild);return c},j.prototype.removeChildren_=function(a){if(a)for(var b;b=a.firstChild;)a.removeChild(b)},j.prototype.setContent=function(a){this.set("content",a)},j.prototype.setContent=j.prototype.setContent,j.prototype.getContent=function(){return this.get("content")},j.prototype.getContent=j.prototype.getContent,j.prototype.content_changed=function(){if(this.markerContent_){this.removeChildren_(this.markerContent_);var a=this.getContent();if(a){"string"==typeof a&&(a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1"),a=this.htmlToDocumentFragment_(a)),this.markerContent_.appendChild(a);for(var b,c=this,d=this.markerContent_.getElementsByTagName("IMG"),e=0;b=d[e];e++)google.maps.event.addDomListener(b,"mousedown",function(a){c.getDraggable()&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1)}),google.maps.event.addDomListener(b,"load",function(){c.draw()});google.maps.event.trigger(this,"domready")}this.ready_&&this.draw()}},j.prototype.content_changed=j.prototype.content_changed,j.prototype.setCursor_=function(a){if(this.ready_){var b="";-1!==navigator.userAgent.indexOf("Gecko/")?("dragging"==a&&(b="-moz-grabbing"),"dragready"==a&&(b="-moz-grab"),"draggable"==a&&(b="pointer")):(("dragging"==a||"dragready"==a)&&(b="move"),"draggable"==a&&(b="pointer")),this.markerWrapper_.style.cursor!=b&&(this.markerWrapper_.style.cursor=b)}},j.prototype.startDrag=function(a){if(this.getDraggable()&&!this.dragging_){this.dragging_=!0;var b=this.getMap();this.mapDraggable_=b.get("draggable"),b.set("draggable",!1),this.mouseX_=a.clientX,this.mouseY_=a.clientY,this.setCursor_("dragready"),this.markerWrapper_.style.MozUserSelect="none",this.markerWrapper_.style.KhtmlUserSelect="none",this.markerWrapper_.style.WebkitUserSelect="none",this.markerWrapper_.unselectable="on",this.markerWrapper_.onselectstart=function(){return!1},this.addDraggingListeners_(),google.maps.event.trigger(this,"dragstart")}},j.prototype.stopDrag=function(){this.getDraggable()&&this.dragging_&&(this.dragging_=!1,this.getMap().set("draggable",this.mapDraggable_),this.mouseX_=this.mouseY_=this.mapDraggable_=null,this.markerWrapper_.style.MozUserSelect="",this.markerWrapper_.style.KhtmlUserSelect="",this.markerWrapper_.style.WebkitUserSelect="",this.markerWrapper_.unselectable="off",this.markerWrapper_.onselectstart=function(){},this.removeDraggingListeners_(),this.setCursor_("draggable"),google.maps.event.trigger(this,"dragend"),this.draw())},j.prototype.drag=function(a){if(!this.getDraggable()||!this.dragging_)return void this.stopDrag();var b=this.mouseX_-a.clientX,c=this.mouseY_-a.clientY;this.mouseX_=a.clientX,this.mouseY_=a.clientY;var d=parseInt(this.markerWrapper_.style.left,10)-b,e=parseInt(this.markerWrapper_.style.top,10)-c;this.markerWrapper_.style.left=d+"px",this.markerWrapper_.style.top=e+"px";var f=this.getOffset_(),g=new google.maps.Point(d-f.width,e-f.height),h=this.getProjection();this.setPosition(h.fromDivPixelToLatLng(g)),this.setCursor_("dragging"),google.maps.event.trigger(this,"drag")},j.prototype.removeDragListeners_=function(){this.draggableListener_&&(google.maps.event.removeListener(this.draggableListener_),delete this.draggableListener_),this.setCursor_("")},j.prototype.addDragging_=function(a){if(a){var b=this;this.draggableListener_=google.maps.event.addDomListener(a,"mousedown",function(a){b.startDrag(a)}),this.setCursor_("draggable")}},j.prototype.addDraggingListeners_=function(){var b=this;this.markerWrapper_.setCapture?(this.markerWrapper_.setCapture(!0),this.draggingListeners_=[google.maps.event.addDomListener(this.markerWrapper_,"mousemove",function(a){b.drag(a)},!0),google.maps.event.addDomListener(this.markerWrapper_,"mouseup",function(){b.stopDrag(),b.markerWrapper_.releaseCapture()},!0)]):this.draggingListeners_=[google.maps.event.addDomListener(a,"mousemove",function(a){b.drag(a)},!0),google.maps.event.addDomListener(a,"mouseup",function(){b.stopDrag()},!0)]},j.prototype.removeDraggingListeners_=function(){if(this.draggingListeners_){for(var a,b=0;a=this.draggingListeners_[b];b++)google.maps.event.removeListener(a);this.draggingListeners_.length=0}},j.prototype.getOffset_=function(){var a=this.getAnchor();if("object"==typeof a)return a;var b=new google.maps.Size(0,0);if(!this.markerContent_)return b;var c=this.markerContent_.offsetWidth,d=this.markerContent_.offsetHeight;switch(a){case k.TOP_LEFT:break;case k.TOP:b.width=-c/2;break;case k.TOP_RIGHT:b.width=-c;break;case k.LEFT:b.height=-d/2;break;case k.MIDDLE:b.width=-c/2,b.height=-d/2;break;case k.RIGHT:b.width=-c,b.height=-d/2;break;case k.BOTTOM_LEFT:b.height=-d;break;case k.BOTTOM:b.width=-c/2,b.height=-d;break;case k.BOTTOM_RIGHT:b.width=-c,b.height=-d}return b},j.prototype.onAdd=function(){if(this.markerWrapper_||(this.markerWrapper_=document.createElement("DIV"),this.markerWrapper_.style.position="absolute"),this.getZIndex()&&(this.markerWrapper_.style.zIndex=this.getZIndex()),this.markerWrapper_.style.display=this.getVisible()?"":"none",!this.markerContent_){this.markerContent_=document.createElement("DIV"),this.markerWrapper_.appendChild(this.markerContent_);var a=this;google.maps.event.addDomListener(this.markerContent_,"click",function(b){google.maps.event.trigger(a,"click")}),google.maps.event.addDomListener(this.markerContent_,"mouseover",function(b){google.maps.event.trigger(a,"mouseover")}),google.maps.event.addDomListener(this.markerContent_,"mouseout",function(b){google.maps.event.trigger(a,"mouseout")})}this.ready_=!0,this.content_changed(),this.flat_changed(),this.draggable_changed();var b=this.getPanes();b&&b.overlayMouseTarget.appendChild(this.markerWrapper_),google.maps.event.trigger(this,"ready")},j.prototype.onAdd=j.prototype.onAdd,j.prototype.draw=function(){if(this.ready_&&!this.dragging_){var a=this.getProjection();if(a){var b=this.get("position"),c=a.fromLatLngToDivPixel(b),d=this.getOffset_();this.markerWrapper_.style.top=c.y+d.height+"px",this.markerWrapper_.style.left=c.x+d.width+"px";var e=this.markerContent_.offsetHeight,f=this.markerContent_.offsetWidth;f!=this.get("width")&&this.set("width",f),e!=this.get("height")&&this.set("height",e)}}},j.prototype.draw=j.prototype.draw,j.prototype.onRemove=function(){this.markerWrapper_&&this.markerWrapper_.parentNode&&this.markerWrapper_.parentNode.removeChild(this.markerWrapper_),this.removeDragListeners_()},j.prototype.onRemove=j.prototype.onRemove;var k={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};a.RichMarkerPosition=k,a.InfoBox=b,a.Cluster=e,a.ClusterIcon=d,a.MarkerClusterer=f,a.MarkerLabel_=h,a.MarkerWithLabel=i,a.RichMarker=j})}}),function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,c,d){b.module("uiGmapgoogle-maps.wrapped").service("uiGmapDataStructures",function(){return{Graph:d(1).Graph,Queue:d(1).Queue}})},function(a,b,c){(function(){
a.exports={Graph:c(2),Heap:c(3),LinkedList:c(4),Map:c(5),Queue:c(6),RedBlackTree:c(7),Trie:c(8)}}).call(this)},function(a,b){(function(){var b,c={}.hasOwnProperty;b=function(){function a(){this._nodes={},this.nodeSize=0,this.edgeSize=0}return a.prototype.addNode=function(a){return this._nodes[a]?void 0:(this.nodeSize++,this._nodes[a]={_outEdges:{},_inEdges:{}})},a.prototype.getNode=function(a){return this._nodes[a]},a.prototype.removeNode=function(a){var b,d,e,f,g;if(d=this._nodes[a]){f=d._outEdges;for(e in f)c.call(f,e)&&this.removeEdge(a,e);g=d._inEdges;for(b in g)c.call(g,b)&&this.removeEdge(b,a);return this.nodeSize--,delete this._nodes[a],d}},a.prototype.addEdge=function(a,b,c){var d,e,f;return null==c&&(c=1),!this.getEdge(a,b)&&(e=this._nodes[a],f=this._nodes[b],e&&f)?(d={weight:c},e._outEdges[b]=d,f._inEdges[a]=d,this.edgeSize++,d):void 0},a.prototype.getEdge=function(a,b){var c,d;return c=this._nodes[a],d=this._nodes[b],c&&d?c._outEdges[b]:void 0},a.prototype.removeEdge=function(a,b){var c,d,e;return d=this._nodes[a],e=this._nodes[b],(c=this.getEdge(a,b))?(delete d._outEdges[b],delete e._inEdges[a],this.edgeSize--,c):void 0},a.prototype.getInEdgesOf=function(a){var b,d,e,f;e=this._nodes[a],d=[],f=null!=e?e._inEdges:void 0;for(b in f)c.call(f,b)&&d.push(this.getEdge(b,a));return d},a.prototype.getOutEdgesOf=function(a){var b,d,e,f;b=this._nodes[a],d=[],f=null!=b?b._outEdges:void 0;for(e in f)c.call(f,e)&&d.push(this.getEdge(a,e));return d},a.prototype.getAllEdgesOf=function(a){var b,c,d,e,f,g,h;if(c=this.getInEdgesOf(a),d=this.getOutEdgesOf(a),0===c.length)return d;for(e=this.getEdge(a,a),b=f=0,g=c.length;g>=0?g>f:f>g;b=g>=0?++f:--f)if(c[b]===e){h=[c[c.length-1],c[b]],c[b]=h[0],c[c.length-1]=h[1],c.pop();break}return c.concat(d)},a.prototype.forEachNode=function(a){var b,d,e;e=this._nodes;for(b in e)c.call(e,b)&&(d=e[b],a(d,b))},a.prototype.forEachEdge=function(a){var b,d,e,f,g,h;g=this._nodes;for(d in g)if(c.call(g,d)){e=g[d],h=e._outEdges;for(f in h)c.call(h,f)&&(b=h[f],a(b))}},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e;b=function(){function a(a){var b,c,d,e,f,g;for(null==a&&(a=[]),this._data=[void 0],d=0,f=a.length;f>d;d++)c=a[d],null!=c&&this._data.push(c);if(this._data.length>1)for(b=e=2,g=this._data.length;g>=2?g>e:e>g;b=g>=2?++e:--e)this._upHeap(b);this.size=this._data.length-1}return a.prototype.add=function(a){return null!=a?(this._data.push(a),this._upHeap(this._data.length-1),this.size++,a):void 0},a.prototype.removeMin=function(){var a;if(1!==this._data.length)return this.size--,2===this._data.length?this._data.pop():(a=this._data[1],this._data[1]=this._data.pop(),this._downHeap(),a)},a.prototype.peekMin=function(){return this._data[1]},a.prototype._upHeap=function(a){var b,c;for(b=this._data[a];this._data[a]<this._data[d(a)]&&a>1;)c=[this._data[d(a)],this._data[a]],this._data[a]=c[0],this._data[d(a)]=c[1],a=d(a)},a.prototype._downHeap=function(){var a,b,d;for(a=1;c(a<this._data.length)&&(b=c(a),b<this._data.length-1&&this._data[e(a)]<this._data[b]&&(b=e(a)),this._data[b]<this._data[a]);)d=[this._data[a],this._data[b]],this._data[b]=d[0],this._data[a]=d[1],a=b},a}(),d=function(a){return a>>1},c=function(a){return a<<1},e=function(a){return(a<<1)+1},a.exports=b}).call(this)},function(a,b){(function(){var b;b=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this.head={prev:void 0,value:void 0,next:void 0},this.tail={prev:void 0,value:void 0,next:void 0},this.size=0,c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.at=function(a){var b,c,d,e,f;if(-this.size<=a&&a<this.size){if(a=this._adjust(a),2*a<this.size)for(b=this.head,c=d=1;a>=d;c=d+=1)b=b.next;else for(b=this.tail,c=e=1,f=this.size-a-1;f>=e;c=e+=1)b=b.prev;return b}},a.prototype.add=function(a,b){var c,d,e,f,g;return null==b&&(b=this.size),-this.size<=b&&b<=this.size?(d={value:a},b=this._adjust(b),0===this.size?this.head=d:0===b?(e=[d,this.head,d],this.head.prev=e[0],d.next=e[1],this.head=e[2]):(c=this.at(b-1),f=[c.next,d,d,c],d.next=f[0],null!=(g=c.next)?g.prev=f[1]:void 0,c.next=f[2],d.prev=f[3]),b===this.size&&(this.tail=d),this.size++,a):void 0},a.prototype.removeAt=function(a){var b,c,d;return null==a&&(a=this.size-1),-this.size<=a&&a<this.size&&0!==this.size?(a=this._adjust(a),1===this.size?(c=this.head.value,this.head.value=this.tail.value=void 0):0===a?(c=this.head.value,this.head=this.head.next,this.head.prev=void 0):(b=this.at(a),c=b.value,b.prev.next=b.next,null!=(d=b.next)&&(d.prev=b.prev),a===this.size-1&&(this.tail=b.prev)),this.size--,c):void 0},a.prototype.remove=function(a){var b;if(null!=a){for(b=this.head;b&&b.value!==a;)b=b.next;if(b)return 1===this.size?this.head.value=this.tail.value=void 0:b===this.head?(this.head=this.head.next,this.head.prev=void 0):b===this.tail?(this.tail=this.tail.prev,this.tail.next=void 0):(b.prev.next=b.next,b.next.prev=b.prev),this.size--,a}},a.prototype.indexOf=function(a,b){var c,d;if(null==b&&(b=0),null==this.head.value&&!this.head.next||b>=this.size)return-1;for(b=Math.max(0,this._adjust(b)),c=this.at(b),d=b;c&&c.value!==a;)c=c.next,d++;return d===this.size?-1:d},a.prototype._adjust=function(a){return 0>a?this.size+a:a},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e,f={}.hasOwnProperty;c="_mapId_",b=function(){function a(b){var c,d;this._content={},this._itemId=0,this._id=a._newMapId(),this.size=0;for(c in b)f.call(b,c)&&(d=b[c],this.set(c,d))}return a._mapIdTracker=0,a._newMapId=function(){return this._mapIdTracker++},a.prototype.hash=function(a,b){var f,g;return null==b&&(b=!1),g=d(a),e(a)?(f=c+this._id,b&&!a[f]&&(a[f]=this._itemId++),f+"_"+a[f]):g+"_"+a},a.prototype.set=function(a,b){return this.has(a)||this.size++,this._content[this.hash(a,!0)]=[b,a],b},a.prototype.get=function(a){var b;return null!=(b=this._content[this.hash(a)])?b[0]:void 0},a.prototype.has=function(a){return this.hash(a)in this._content},a.prototype["delete"]=function(a){var b;return b=this.hash(a),b in this._content?(delete this._content[b],e(a)&&delete a[c+this._id],this.size--,!0):!1},a.prototype.forEach=function(a){var b,c,d;d=this._content;for(b in d)f.call(d,b)&&(c=d[b],a(c[1],c[0]))},a}(),e=function(a){var b,c,e,f,g;for(b=["Boolean","Number","String","Undefined","Null","RegExp","Function"],e=d(a),f=0,g=b.length;g>f;f++)if(c=b[f],e===c)return!1;return!0},d=function(a){return Object.prototype.toString.apply(a).match(/\[object (.+)\]/)[1]},a.exports=b}).call(this)},function(a,b){(function(){var b;b=function(){function a(a){null==a&&(a=[]),this._content=a,this._dequeueIndex=0,this.size=this._content.length}return a.prototype.enqueue=function(a){return this.size++,this._content.push(a),a},a.prototype.dequeue=function(){var a;if(0!==this.size)return this.size--,a=this._content[this._dequeueIndex],this._dequeueIndex++,2*this._dequeueIndex>this._content.length&&(this._content=this._content.slice(this._dequeueIndex),this._dequeueIndex=0),a},a.prototype.peek=function(){return this._content[this._dequeueIndex]},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=0,d=1,e=2,h=3,f=1,b=2,g=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this._root,this.size=0,c=0,d=a.length;d>c;c++)b=a[c],null!=b&&this.add(b)}return a.prototype.add=function(a){var g,l,m,n;if(null!=a){if(this.size++,m={value:a,_color:f},this._root){if(l=i(this._root,function(b){return a===b.value?c:a<b.value?b._left?d:(m._parent=b,b._left=m,h):b._right?e:(m._parent=b,b._right=m,h)}),null!=l)return}else this._root=m;for(g=m;;){if(g===this._root){g._color=b;break}if(g._parent._color===b)break;{if((null!=(n=p(g))?n._color:void 0)!==f){!k(g)&&k(g._parent)?(this._rotateLeft(g._parent),g=g._left):k(g)&&!k(g._parent)&&(this._rotateRight(g._parent),g=g._right),g._parent._color=b,j(g)._color=f,k(g)?this._rotateRight(j(g)):this._rotateLeft(j(g));break}g._parent._color=b,p(g)._color=b,j(g)._color=f,g=j(g)}}return a}},a.prototype.has=function(a){var b;return b=i(this._root,function(b){return a===b.value?c:a<b.value?d:e}),b?!0:!1},a.prototype.peekMin=function(){var a;return null!=(a=n(this._root))?a.value:void 0},a.prototype.peekMax=function(){var a;return null!=(a=m(this._root))?a.value:void 0},a.prototype.remove=function(a){var b;return(b=i(this._root,function(b){return a===b.value?c:a<b.value?d:e}))?(this._removeNode(this._root,b),this.size--,a):void 0},a.prototype.removeMin=function(){var a,b;return(a=n(this._root))?(b=a.value,this._removeNode(this._root,a),b):void 0},a.prototype.removeMax=function(){var a,b;return(a=m(this._root))?(b=a.value,this._removeNode(this._root,a),b):void 0},a.prototype._removeNode=function(a,c){var d,e,g,h,i,j,m,p,q,r;if(c._left&&c._right&&(e=n(c._right),c.value=e.value,c=e),e=c._left||c._right,e||(e={color:b,_right:void 0,_left:void 0,isLeaf:!0}),e._parent=c._parent,null!=(g=c._parent)&&(g[l(c)]=e),c._color===b)if(e._color===f)e._color=b,e._parent||(this._root=e);else for(;;){if(!e._parent){e.isLeaf?this._root=void 0:this._root=e;break}if(d=o(e),(null!=d?d._color:void 0)===f&&(e._parent._color=f,d._color=b,k(e)?this._rotateLeft(e._parent):this._rotateRight(e._parent)),d=o(e),e._parent._color!==b||d&&(d._color!==b||d._left&&d._left._color!==b||d._right&&d._right._color!==b)){if(!(e._parent._color!==f||d&&(d._color!==b||d._left&&(null!=(h=d._left)?h._color:void 0)!==b||d._right&&(null!=(i=d._right)?i._color:void 0)!==b))){null!=d&&(d._color=f),e._parent._color=b;break}if((null!=d?d._color:void 0)===b){!k(e)||d._right&&d._right._color!==b||(null!=(j=d._left)?j._color:void 0)!==f?k(e)||d._left&&d._left._color!==b||(null!=(p=d._right)?p._color:void 0)!==f||(d._color=f,null!=(q=d._right)&&(q._color=b),this._rotateLeft(d)):(d._color=f,null!=(m=d._left)&&(m._color=b),this._rotateRight(d));break}d=o(e),d._color=e._parent._color,k(e)?(d._right._color=b,this._rotateRight(e._parent)):(d._left._color=b,this._rotateLeft(e._parent))}else null!=d&&(d._color=f),e.isLeaf&&(e._parent[l(e)]=void 0),e=e._parent}return e.isLeaf&&null!=(r=e._parent)?r[l(e)]=void 0:void 0},a.prototype._rotateLeft=function(a){var b,c;return null!=(b=a._parent)&&(b[l(a)]=a._right),a._right._parent=a._parent,a._parent=a._right,a._right=a._right._left,a._parent._left=a,null!=(c=a._right)&&(c._parent=a),null==a._parent._parent?this._root=a._parent:void 0},a.prototype._rotateRight=function(a){var b,c;return null!=(b=a._parent)&&(b[l(a)]=a._left),a._left._parent=a._parent,a._parent=a._left,a._left=a._left._right,a._parent._right=a,null!=(c=a._left)&&(c._parent=a),null==a._parent._parent?this._root=a._parent:void 0},a}(),k=function(a){return a===a._parent._left},l=function(a){return k(a)?"_left":"_right"},i=function(a,b){var f,g,i;for(g=a,i=void 0;g;){if(f=b(g),f===c){i=g;break}if(f===d)g=g._left;else if(f===e)g=g._right;else if(f===h)break}return i},n=function(a){return i(a,function(a){return a._left?d:c})},m=function(a){return i(a,function(a){return a._right?e:c})},j=function(a){var b;return null!=(b=a._parent)?b._parent:void 0},p=function(a){return j(a)?k(a._parent)?j(a)._right:j(a)._left:void 0},o=function(a){return k(a)?a._parent._right:a._parent._left},a.exports=g}).call(this)},function(a,b,c){(function(){var b,d,e,f,g={}.hasOwnProperty;b=c(6),e="end",d=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this._root={},this.size=0,c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.add=function(a){var b,c,d,f;if(null!=a){for(this.size++,b=this._root,d=0,f=a.length;f>d;d++)c=a[d],null==b[c]&&(b[c]={}),b=b[c];return b[e]=!0,a}},a.prototype.has=function(a){var b,c,d,f;if(null==a)return!1;for(b=this._root,d=0,f=a.length;f>d;d++){if(c=a[d],null==b[c])return!1;b=b[c]}return b[e]?!0:!1},a.prototype.longestPrefixOf=function(a){var b,c,d,e,f;if(null==a)return"";for(b=this._root,d="",e=0,f=a.length;f>e&&(c=a[e],null!=b[c]);e++)d+=c,b=b[c];return d},a.prototype.wordsWithPrefix=function(a){var c,d,f,h,i,j,k,l,m,n;if(null==a)return[];for(null!=a||(a=""),k=[],d=this._root,l=0,m=a.length;m>l;l++)if(f=a[l],d=d[f],null==d)return[];for(i=new b,i.enqueue([d,""]);0!==i.size;){n=i.dequeue(),h=n[0],c=n[1],h[e]&&k.push(a+c);for(f in h)g.call(h,f)&&(j=h[f],i.enqueue([j,c+f]))}return k},a.prototype.remove=function(a){var b,c,d,g,h,i,j,k;if(null!=a){for(b=this._root,g=[],h=0,j=a.length;j>h;h++){if(d=a[h],null==b[d])return;b=b[d],g.push([d,b])}if(b[e]){if(this.size--,delete b[e],f(b,1))return a;for(c=i=k=g.length-1;(1>=k?1>=i:i>=1)&&!f(g[c][1],1);c=1>=k?++i:--i)delete g[c-1][1][g[c][0]];return f(this._root[g[0][0]],1)||delete this._root[g[0][0]],a}}},a}(),f=function(a,b){var c,d;if(0===b)return!0;d=0;for(c in a)if(g.call(a,c)&&(d++,d>=b))return!0;return!1},a.exports=d}).call(this)}]),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapMarkerSpiderfier",["uiGmapGoogleMapApi",function(b){var c=this,d={}.hasOwnProperty,e=[].slice;return this.OverlappingMarkerSpiderfier=function(){function b(a,b){var e,f,g,h,i,j;this.map=a,null==b&&(b={});for(f in b)d.call(b,f)&&(j=b[f],this[f]=j);for(this.projHelper=new this.constructor.ProjHelper(this.map),this.initMarkerArrays(),this.listeners={},i=["click","zoom_changed","maptypeid_changed"],g=0,h=i.length;h>g;g++)e=i[g],c.addListener(this.map,e,function(a){return function(){return a.unspiderfy()}}(this))}var c,f,g,h,i,j,k,l,m,n,o;for(l=b.prototype,m=[b,l],g=0,j=m.length;j>g;g++)o=m[g],o.VERSION="0.3.3";return f=void 0,c=void 0,k=void 0,n=2*Math.PI,l.keepSpiderfied=!1,l.markersWontHide=!1,l.markersWontMove=!1,l.nearbyDistance=20,l.circleSpiralSwitchover=9,l.circleFootSeparation=23,l.circleStartAngle=n/12,l.spiralFootSeparation=26,l.spiralLengthStart=11,l.spiralLengthFactor=4,l.spiderfiedZIndex=1e3,l.usualLegZIndex=10,l.highlightedLegZIndex=20,l.event="click",l.minZoomLevel=!1,l.legWeight=1.5,l.legColors={usual:{},highlighted:{}},i=l.legColors.usual,h=l.legColors.highlighted,b.initializeGoogleMaps=function(a){return f=a.maps,c=f.event,k=f.MapTypeId,i[k.HYBRID]=i[k.SATELLITE]="#fff",h[k.HYBRID]=h[k.SATELLITE]="#f00",i[k.TERRAIN]=i[k.ROADMAP]="#444",h[k.TERRAIN]=h[k.ROADMAP]="#f00",this.ProjHelper=function(a){return this.setMap(a)},this.ProjHelper.prototype=new f.OverlayView,this.ProjHelper.prototype.draw=function(){}},l.initMarkerArrays=function(){return this.markers=[],this.markerListenerRefs=[]},l.addMarker=function(a){var b;return null!=a._oms?this:(a._oms=!0,b=[c.addListener(a,this.event,function(b){return function(c){return b.spiderListener(a,c)}}(this))],this.markersWontHide||b.push(c.addListener(a,"visible_changed",function(b){return function(){return b.markerChangeListener(a,!1)}}(this))),this.markersWontMove||b.push(c.addListener(a,"position_changed",function(b){return function(){return b.markerChangeListener(a,!0)}}(this))),this.markerListenerRefs.push(b),this.markers.push(a),this)},l.markerChangeListener=function(a,b){return null==a._omsData||!b&&a.getVisible()||null!=this.spiderfying||null!=this.unspiderfying?void 0:this.unspiderfy(b?a:null)},l.getMarkers=function(){return this.markers.slice(0)},l.removeMarker=function(a){var b,d,e,f,g;if(null!=a._omsData&&this.unspiderfy(),b=this.arrIndexOf(this.markers,a),0>b)return this;for(g=this.markerListenerRefs.splice(b,1)[0],d=0,e=g.length;e>d;d++)f=g[d],c.removeListener(f);return delete a._oms,this.markers.splice(b,1),this},l.clearMarkers=function(){var a,b,d,e,f,g,h,i,j;for(this.unspiderfy(),j=this.markers,a=b=0,d=j.length;d>b;a=++b){for(h=j[a],g=this.markerListenerRefs[a],i=0,e=g.length;e>i;i++)f=g[i],c.removeListener(f);delete h._oms}return this.initMarkerArrays(),this},l.addListener=function(a,b){var c;return(null!=(c=this.listeners)[a]?c[a]:c[a]=[]).push(b),this},l.removeListener=function(a,b){var c;return c=this.arrIndexOf(this.listeners[a],b),0>c||this.listeners[a].splice(c,1),this},l.clearListeners=function(a){return this.listeners[a]=[],this},l.trigger=function(){var a,b,c,d,f,g,h,i;for(b=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],h=null!=(g=this.listeners[b])?g:[],i=[],d=0,f=h.length;f>d;d++)c=h[d],i.push(c.apply(null,a));return i},l.generatePtsCircle=function(a,b){var c,d,e,g,h,i,j,k;for(e=this.circleFootSeparation*(2+a),i=e/n,d=n/a,k=[],g=h=0,j=a;j>=0?j>h:h>j;g=j>=0?++h:--h)c=this.circleStartAngle+g*d,k.push(new f.Point(b.x+i*Math.cos(c),b.y+i*Math.sin(c)));return k},l.generatePtsSpiral=function(a,b){var c,d,e,g,h,i,j;for(g=this.spiralLengthStart,c=0,j=[],d=e=0,i=a;i>=0?i>e:e>i;d=i>=0?++e:--e)c+=this.spiralFootSeparation/g+5e-4*d,h=new f.Point(b.x+g*Math.cos(c),b.y+g*Math.sin(c)),g+=n*this.spiralLengthFactor/c,j.push(h);return j},l.spiderListener=function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,q;if(k=null!=b._omsData,k&&this.keepSpiderfied||("mouseover"===this.event?(d=this,e=function(){return d.unspiderfy()},a.clearTimeout(l.timeout),l.timeout=setTimeout(e,3e3)):this.unspiderfy()),k||this.map.getStreetView().getVisible()||"GoogleEarthAPI"===this.map.getMapTypeId())return this.trigger("click",b,c);for(n=[],o=[],m=this.nearbyDistance,p=m*m,j=this.llToPt(b.position),q=this.markers,f=0,g=q.length;g>f;f++)h=q[f],null!=h.map&&h.getVisible()&&(i=this.llToPt(h.position),this.ptDistanceSq(i,j)<p?n.push({marker:h,markerPt:i}):o.push(h));return 1===n.length?this.trigger("click",b,c):this.spiderfy(n,o)},l.markersNearMarker=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(null==b&&(b=!1),null==this.projHelper.getProjection())throw"Must wait for 'idle' event on map before calling markersNearMarker";for(i=this.nearbyDistance,j=i*i,g=this.llToPt(a.position),h=[],k=this.markers,c=0,d=k.length;d>c&&(e=k[c],!(e!==a&&null!=e.map&&e.getVisible()&&(f=this.llToPt(null!=(l=null!=(m=e._omsData)?m.usualPosition:void 0)?l:e.position),this.ptDistanceSq(f,g)<j&&(h.push(e),b))));c++);return h},l.markersNearAnyOtherMarker=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;if(null==this.projHelper.getProjection())throw"Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";for(o=this.nearbyDistance,p=o*o,m=function(){var a,b,c,d,e,f;for(c=this.markers,f=[],a=0,b=c.length;b>a;a++)h=c[a],f.push({pt:this.llToPt(null!=(d=null!=(e=h._omsData)?e.usualPosition:void 0)?d:h.position),willSpiderfy:!1});return f}.call(this),r=this.markers,b=d=0,e=r.length;e>d;b=++d)if(i=r[b],null!=i.map&&i.getVisible()&&(j=m[b],!j.willSpiderfy))for(s=this.markers,c=n=0,f=s.length;f>n;c=++n)if(k=s[c],c!==b&&null!=k.map&&k.getVisible()&&(l=m[c],(!(b>c)||l.willSpiderfy)&&this.ptDistanceSq(j.pt,l.pt)<p)){j.willSpiderfy=l.willSpiderfy=!0;break}for(t=this.markers,u=[],a=q=0,g=t.length;g>q;a=++q)h=t[a],m[a].willSpiderfy&&u.push(h);return u},l.makeHighlightListenerFuncs=function(a){return{highlight:function(b){return function(){return a._omsData.leg.setOptions({strokeColor:b.legColors.highlighted[b.map.mapTypeId],zIndex:b.highlightedLegZIndex})}}(this),unhighlight:function(b){return function(){return a._omsData.leg.setOptions({strokeColor:b.legColors.usual[b.map.mapTypeId],zIndex:b.usualLegZIndex})}}(this)}},l.spiderfy=function(a,b){var d,e,g,h,i,j,k,l,m,n,o;return this.minZoomLevel&&this.map.getZoom()<this.minZoomLevel?!1:(this.spiderfying=!0,n=a.length,d=this.ptAverage(function(){var b,c,d;for(d=[],b=0,c=a.length;c>b;b++)l=a[b],d.push(l.markerPt);return d}()),h=n>=this.circleSpiralSwitchover?this.generatePtsSpiral(n,d).reverse():this.generatePtsCircle(n,d),o=function(){var b,d,l;for(l=[],b=0,d=h.length;d>b;b++)g=h[b],e=this.ptToLl(g),m=this.minExtract(a,function(a){return function(b){return a.ptDistanceSq(b.markerPt,g)}}(this)),k=m.marker,j=new f.Polyline({map:this.map,path:[k.position,e],strokeColor:this.legColors.usual[this.map.mapTypeId],strokeWeight:this.legWeight,zIndex:this.usualLegZIndex}),k._omsData={usualPosition:k.position,leg:j},this.legColors.highlighted[this.map.mapTypeId]!==this.legColors.usual[this.map.mapTypeId]&&(i=this.makeHighlightListenerFuncs(k),k._omsData.hightlightListeners={highlight:c.addListener(k,"mouseover",i.highlight),unhighlight:c.addListener(k,"mouseout",i.unhighlight)}),k.setPosition(e),k.setZIndex(Math.round(this.spiderfiedZIndex+g.y)),l.push(k);return l}.call(this),delete this.spiderfying,this.spiderfied=!0,this.trigger("spiderfy",o,b))},l.unspiderfy=function(a){var b,d,e,f,g,h,i;if(null==a&&(a=null),null==this.spiderfied)return this;for(this.unspiderfying=!0,i=[],g=[],h=this.markers,b=0,d=h.length;d>b;b++)f=h[b],null!=f._omsData?(f._omsData.leg.setMap(null),f!==a&&f.setPosition(f._omsData.usualPosition),f.setZIndex(null),e=f._omsData.hightlightListeners,null!=e&&(c.removeListener(e.highlight),c.removeListener(e.unhighlight)),delete f._omsData,i.push(f)):g.push(f);return delete this.unspiderfying,delete this.spiderfied,this.trigger("unspiderfy",i,g),this},l.ptDistanceSq=function(a,b){var c,d;return c=a.x-b.x,d=a.y-b.y,c*c+d*d},l.ptAverage=function(a){var b,c,d,e,g,h;for(g=h=0,b=0,c=a.length;c>b;b++)e=a[b],g+=e.x,h+=e.y;return d=a.length,new f.Point(g/d,h/d)},l.llToPt=function(a){return this.projHelper.getProjection().fromLatLngToDivPixel(a)},l.ptToLl=function(a){return this.projHelper.getProjection().fromDivPixelToLatLng(a)},l.minExtract=function(a,b){var c,d,e,f,g,h,i;for(e=g=0,h=a.length;h>g;e=++g)f=a[e],i=b(f),("undefined"==typeof c||null===c||d>i)&&(d=i,c=e);return a.splice(c,1)[0]},l.arrIndexOf=function(a,b){var c,d,e,f;if(null!=a.indexOf)return a.indexOf(b);for(c=d=0,e=a.length;e>d;c=++d)if(f=a[c],f===b)return c;return-1},b}(),b.then(function(){c.OverlappingMarkerSpiderfier.initializeGoogleMaps(a.google)}),this.OverlappingMarkerSpiderfier}]),b.module("uiGmapgoogle-maps.extensions").service("uiGmapExtendMarkerClusterer",["uiGmapLodash","uiGmapPropMap",function(b,c){return{init:_.once(function(){(function(){var d={}.hasOwnProperty,e=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};a.NgMapCluster=function(a){function d(a){d.__super__.constructor.call(this,a),this.markers_=new c}return e(d,a),d.prototype.addMarker=function(a){var b,c;if(this.isMarkerAlreadyAdded_(a)){var d=this.markers_.get(a.key);if(d.getPosition().lat()==a.getPosition().lat()&&d.getPosition().lon()==a.getPosition().lon())return!1}if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();return a.isAdded=!0,this.markers_.push(a),b=this.markers_.length,c=this.markerClusterer_.getMaxZoom(),null!==c&&this.map_.getZoom()>c?a.getMap()!==this.map_&&a.setMap(this.map_):b<this.minClusterSize_?a.getMap()!==this.map_&&a.setMap(this.map_):b===this.minClusterSize_?this.markers_.each(function(a){a.setMap(null)}):a.setMap(null),!0},d.prototype.isMarkerAlreadyAdded_=function(a){return b.isNullOrUndefined(this.markers_.get(a.key))},d.prototype.getBounds=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);return this.getMarkers().each(function(b){a.extend(b.getPosition())}),a},d.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=new c,delete this.markers_},d}(Cluster),a.NgMapMarkerClusterer=function(a){function b(a,d,e){b.__super__.constructor.call(this,a,d,e),this.markers_=new c}return e(b,a),b.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=new c},b.prototype.removeMarker_=function(a){return this.markers_.get(a.key)?(a.setMap(null),this.markers_.remove(a.key),!0):!1},b.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length),h=this.markers_.values();for(b=a;g>b;b++)c=h[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);if(g<this.markers_.length)this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0);else{for(b=0;b<this.clusters_.length;b++)this.clusters_[b].updateIcon_();delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this)}}},b.prototype.addToClosestCluster_=function(a){var b,c,d,e,f=4e4,g=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],e=d.getCenter(),e&&(c=this.distanceBetweenPoints_(e,a.getPosition()),f>c&&(f=c,g=d));g&&g.isMarkerInClusterBounds(a)?g.addMarker(a):(d=new NgMapCluster(this),d.addMarker(a),this.clusters_.push(d))},b.prototype.redraw_=function(){this.createClusters_(0)},b.prototype.resetViewport_=function(a){var b;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();this.clusters_=[],this.markers_.each(function(b){b.isAdded=!1,a&&b.setMap(null)})},b.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)"constructor"!==b&&(this.prototype[b]=a.prototype[b]);return this}.apply(a,[b])},ClusterIcon.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",a+=this.cluster_.getMarkerClusterer().enableRetinaIcons_?"width: "+this.width_+"px;height: "+this.height_+"px;":"clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);",a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>","undefined"==typeof this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},b}(MarkerClusterer)}).call(this)})}}])}(window,angular);
(function( factory ) {
	if (typeof define !== 'undefined' && define.amd) {
		define([], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory();
	} else {
		window.scrollMonitor = factory();
	}
})(function() {

	var scrollTop = function() {
		return window.pageYOffset ||
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
	};

	var exports = {};

	var watchers = [];

	var VISIBILITYCHANGE = 'visibilityChange';
	var ENTERVIEWPORT = 'enterViewport';
	var FULLYENTERVIEWPORT = 'fullyEnterViewport';
	var EXITVIEWPORT = 'exitViewport';
	var PARTIALLYEXITVIEWPORT = 'partiallyExitViewport';
	var LOCATIONCHANGE = 'locationChange';
	var STATECHANGE = 'stateChange';

	var eventTypes = [
		VISIBILITYCHANGE,
		ENTERVIEWPORT,
		FULLYENTERVIEWPORT,
		EXITVIEWPORT,
		PARTIALLYEXITVIEWPORT,
		LOCATIONCHANGE,
		STATECHANGE
	];

	var defaultOffsets = {top: 0, bottom: 0};

	var getViewportHeight = function() {
		return window.innerHeight || document.documentElement.clientHeight;
	};

	var getDocumentHeight = function() {
		// jQuery approach
		// whichever is greatest
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.documentElement.clientHeight
		);
	};

	exports.viewportTop = null;
	exports.viewportBottom = null;
	exports.documentHeight = null;
	exports.viewportHeight = getViewportHeight();

	var previousDocumentHeight;
	var latestEvent;

	var calculateViewportI;
	function calculateViewport() {
		exports.viewportTop = scrollTop();
		exports.viewportBottom = exports.viewportTop + exports.viewportHeight;
		exports.documentHeight = getDocumentHeight();
		if (exports.documentHeight !== previousDocumentHeight) {
			calculateViewportI = watchers.length;
			while( calculateViewportI-- ) {
				watchers[calculateViewportI].recalculateLocation();
			}
			previousDocumentHeight = exports.documentHeight;
		}
	}

	function recalculateWatchLocationsAndTrigger() {
		exports.viewportHeight = getViewportHeight();
		calculateViewport();
		updateAndTriggerWatchers();
	}

	var recalculateAndTriggerTimer;
	function debouncedRecalcuateAndTrigger() {
		clearTimeout(recalculateAndTriggerTimer);
		recalculateAndTriggerTimer = setTimeout( recalculateWatchLocationsAndTrigger, 100 );
	}

	var updateAndTriggerWatchersI;
	function updateAndTriggerWatchers() {
		// update all watchers then trigger the events so one can rely on another being up to date.
		updateAndTriggerWatchersI = watchers.length;
		while( updateAndTriggerWatchersI-- ) {
			watchers[updateAndTriggerWatchersI].update();
		}

		updateAndTriggerWatchersI = watchers.length;
		while( updateAndTriggerWatchersI-- ) {
			watchers[updateAndTriggerWatchersI].triggerCallbacks();
		}

	}

	function ElementWatcher( watchItem, offsets ) {
		var self = this;

		this.watchItem = watchItem;

		if (!offsets) {
			this.offsets = defaultOffsets;
		} else if (offsets === +offsets) {
			this.offsets = {top: offsets, bottom: offsets};
		} else {
			this.offsets = {
				top: offsets.top || defaultOffsets.top,
				bottom: offsets.bottom || defaultOffsets.bottom
			};
		}

		this.callbacks = {}; // {callback: function, isOne: true }

		for (var i = 0, j = eventTypes.length; i < j; i++) {
			self.callbacks[eventTypes[i]] = [];
		}

		this.locked = false;

		var wasInViewport;
		var wasFullyInViewport;
		var wasAboveViewport;
		var wasBelowViewport;

		var listenerToTriggerListI;
		var listener;
		function triggerCallbackArray( listeners ) {
			if (listeners.length === 0) {
				return;
			}
			listenerToTriggerListI = listeners.length;
			while( listenerToTriggerListI-- ) {
				listener = listeners[listenerToTriggerListI];
				listener.callback.call( self, latestEvent );
				if (listener.isOne) {
					listeners.splice(listenerToTriggerListI, 1);
				}
			}
		}
		this.triggerCallbacks = function triggerCallbacks() {

			if (this.isInViewport && !wasInViewport) {
				triggerCallbackArray( this.callbacks[ENTERVIEWPORT] );
			}
			if (this.isFullyInViewport && !wasFullyInViewport) {
				triggerCallbackArray( this.callbacks[FULLYENTERVIEWPORT] );
			}


			if (this.isAboveViewport !== wasAboveViewport &&
				this.isBelowViewport !== wasBelowViewport) {

				triggerCallbackArray( this.callbacks[VISIBILITYCHANGE] );

				// if you skip completely past this element
				if (!wasFullyInViewport && !this.isFullyInViewport) {
					triggerCallbackArray( this.callbacks[FULLYENTERVIEWPORT] );
					triggerCallbackArray( this.callbacks[PARTIALLYEXITVIEWPORT] );
				}
				if (!wasInViewport && !this.isInViewport) {
					triggerCallbackArray( this.callbacks[ENTERVIEWPORT] );
					triggerCallbackArray( this.callbacks[EXITVIEWPORT] );
				}
			}

			if (!this.isFullyInViewport && wasFullyInViewport) {
				triggerCallbackArray( this.callbacks[PARTIALLYEXITVIEWPORT] );
			}
			if (!this.isInViewport && wasInViewport) {
				triggerCallbackArray( this.callbacks[EXITVIEWPORT] );
			}
			if (this.isInViewport !== wasInViewport) {
				triggerCallbackArray( this.callbacks[VISIBILITYCHANGE] );
			}
			switch( true ) {
				case wasInViewport !== this.isInViewport:
				case wasFullyInViewport !== this.isFullyInViewport:
				case wasAboveViewport !== this.isAboveViewport:
				case wasBelowViewport !== this.isBelowViewport:
					triggerCallbackArray( this.callbacks[STATECHANGE] );
			}

			wasInViewport = this.isInViewport;
			wasFullyInViewport = this.isFullyInViewport;
			wasAboveViewport = this.isAboveViewport;
			wasBelowViewport = this.isBelowViewport;

		};

		this.recalculateLocation = function() {
			if (this.locked) {
				return;
			}
			var previousTop = this.top;
			var previousBottom = this.bottom;
			if (this.watchItem.nodeName) { // a dom element
				var cachedDisplay = this.watchItem.style.display;
				if (cachedDisplay === 'none') {
					this.watchItem.style.display = '';
				}

				var boundingRect = this.watchItem.getBoundingClientRect();
				this.top = boundingRect.top + exports.viewportTop;
				this.bottom = boundingRect.bottom + exports.viewportTop;

				if (cachedDisplay === 'none') {
					this.watchItem.style.display = cachedDisplay;
				}

			} else if (this.watchItem === +this.watchItem) { // number
				if (this.watchItem > 0) {
					this.top = this.bottom = this.watchItem;
				} else {
					this.top = this.bottom = exports.documentHeight - this.watchItem;
				}

			} else { // an object with a top and bottom property
				this.top = this.watchItem.top;
				this.bottom = this.watchItem.bottom;
			}

			this.top -= this.offsets.top;
			this.bottom += this.offsets.bottom;
			this.height = this.bottom - this.top;

			if ( (previousTop !== undefined || previousBottom !== undefined) && (this.top !== previousTop || this.bottom !== previousBottom) ) {
				triggerCallbackArray( this.callbacks[LOCATIONCHANGE] );
			}
		};

		this.recalculateLocation();
		this.update();

		wasInViewport = this.isInViewport;
		wasFullyInViewport = this.isFullyInViewport;
		wasAboveViewport = this.isAboveViewport;
		wasBelowViewport = this.isBelowViewport;
	}

	ElementWatcher.prototype = {
		on: function( event, callback, isOne ) {

			// trigger the event if it applies to the element right now.
			switch( true ) {
				case event === VISIBILITYCHANGE && !this.isInViewport && this.isAboveViewport:
				case event === ENTERVIEWPORT && this.isInViewport:
				case event === FULLYENTERVIEWPORT && this.isFullyInViewport:
				case event === EXITVIEWPORT && this.isAboveViewport && !this.isInViewport:
				case event === PARTIALLYEXITVIEWPORT && this.isAboveViewport:
					callback.call( this, latestEvent );
					if (isOne) {
						return;
					}
			}

			if (this.callbacks[event]) {
				this.callbacks[event].push({callback: callback, isOne: isOne||false});
			} else {
				throw new Error('Tried to add a scroll monitor listener of type '+event+'. Your options are: '+eventTypes.join(', '));
			}
		},
		off: function( event, callback ) {
			if (this.callbacks[event]) {
				for (var i = 0, item; item = this.callbacks[event][i]; i++) {
					if (item.callback === callback) {
						this.callbacks[event].splice(i, 1);
						break;
					}
				}
			} else {
				throw new Error('Tried to remove a scroll monitor listener of type '+event+'. Your options are: '+eventTypes.join(', '));
			}
		},
		one: function( event, callback ) {
			this.on( event, callback, true);
		},
		recalculateSize: function() {
			this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom;
			this.bottom = this.top + this.height;
		},
		update: function() {
			this.isAboveViewport = this.top < exports.viewportTop;
			this.isBelowViewport = this.bottom > exports.viewportBottom;

			this.isInViewport = (this.top <= exports.viewportBottom && this.bottom >= exports.viewportTop);
			this.isFullyInViewport = (this.top >= exports.viewportTop && this.bottom <= exports.viewportBottom) ||
								 (this.isAboveViewport && this.isBelowViewport);

		},
		destroy: function() {
			var index = watchers.indexOf(this),
				self  = this;
			watchers.splice(index, 1);
			for (var i = 0, j = eventTypes.length; i < j; i++) {
				self.callbacks[eventTypes[i]].length = 0;
			}
		},
		// prevent recalculating the element location
		lock: function() {
			this.locked = true;
		},
		unlock: function() {
			this.locked = false;
		}
	};

	var eventHandlerFactory = function (type) {
		return function( callback, isOne ) {
			this.on.call(this, type, callback, isOne);
		};
	};

	for (var i = 0, j = eventTypes.length; i < j; i++) {
		var type =  eventTypes[i];
		ElementWatcher.prototype[type] = eventHandlerFactory(type);
	}

	try {
		calculateViewport();
	} catch (e) {
		try {
			window.$(calculateViewport);
		} catch (e) {
			throw new Error('If you must put scrollMonitor in the <head>, you must use jQuery.');
		}
	}

	function scrollMonitorListener(event) {
		latestEvent = event;
		calculateViewport();
		updateAndTriggerWatchers();
	}

	if (window.addEventListener) {
		window.addEventListener('scroll', scrollMonitorListener);
		window.addEventListener('resize', debouncedRecalcuateAndTrigger);
	} else {
		// Old IE support
		window.attachEvent('onscroll', scrollMonitorListener);
		window.attachEvent('onresize', debouncedRecalcuateAndTrigger);
	}

	exports.beget = exports.create = function( element, offsets ) {
		if (typeof element === 'string') {
			element = document.querySelector(element);
		} else if (element && element.length > 0) {
			element = element[0];
		}

		var watcher = new ElementWatcher( element, offsets );
		watchers.push(watcher);
		watcher.update();
		return watcher;
	};

	exports.update = function() {
		latestEvent = null;
		calculateViewport();
		updateAndTriggerWatchers();
	};
	exports.recalculateLocations = function() {
		exports.documentHeight = 0;
		exports.update();
	};

	return exports;
});

'use strict';

angular.module('ngLocale', [], ['$provide', function($provide) {
    var PLURAL_CATEGORY = {ZERO: 'zero', ONE: 'one', TWO: 'two', FEW: 'few', MANY: 'many', OTHER: 'other'};
    $provide.value('$locale', {
        'DATETIME_FORMATS': {
            'AMPMS': [
                'AM',
                'PM'
            ],
            'DAY': [
                'dimanche',
                'lundi',
                'mardi',
                'mercredi',
                'jeudi',
                'vendredi',
                'samedi'
            ],
            'MONTH': [
                'janvier',
                'f\u00e9vrier',
                'mars',
                'avril',
                'mai',
                'juin',
                'juillet',
                'ao\u00fbt',
                'septembre',
                'octobre',
                'novembre',
                'd\u00e9cembre'
            ],
            'SHORTDAY': [
                'dim.',
                'lun.',
                'mar.',
                'mer.',
                'jeu.',
                'ven.',
                'sam.'
            ],
            'SHORTMONTH': [
                'janv.',
                'f\u00e9vr.',
                'mars',
                'avr.',
                'mai',
                'juin',
                'juil.',
                'ao\u00fbt',
                'sept.',
                'oct.',
                'nov.',
                'd\u00e9c.'
            ],
            'fullDate': 'EEEE d MMMM y',
            'longDate': 'd MMMM y',
            'medium': 'd MMM y HH:mm:ss',
            'mediumDate': 'd MMM y',
            'mediumTime': 'HH:mm:ss',
            'short': 'dd/MM/yy HH:mm',
            'shortDate': 'dd/MM/yy',
            'shortTime': 'HH:mm'
        },
        'NUMBER_FORMATS': {
            'CURRENCY_SYM': '\u20ac',
            'DECIMAL_SEP': ',',
            'GROUP_SEP': '\u00a0',
            'PATTERNS': [
                {
                    'gSize': 3,
                    'lgSize': 3,
                    'macFrac': 0,
                    'maxFrac': 3,
                    'minFrac': 0,
                    'minInt': 1,
                    'negPre': '-',
                    'negSuf': '',
                    'posPre': '',
                    'posSuf': ''
                },
                {
                    'gSize': 3,
                    'lgSize': 3,
                    'macFrac': 0,
                    'maxFrac': 2,
                    'minFrac': 2,
                    'minInt': 1,
                    'negPre': '(',
                    'negSuf': '\u00a0\u00a4)',
                    'posPre': '',
                    'posSuf': '\u00a0\u00a4'
                }
            ]
        },
        'id': 'fr-fr',
        'pluralCat': function (n) {    if (n >= 0 && n <= 2 && n !== 2) {     return PLURAL_CATEGORY.ONE;    }    return PLURAL_CATEGORY.OTHER;}
    });
}]);
'use strict';

angular.module('eligibility', []);

angular.module('bytelApp', [
  'ui.mask',
  'ui.scrollpoint',
  'ngCookies',
  'ngSanitize',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'lodash',
  'eligibility'
]);




'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.config(function ($locationProvider) {
    
});


bytelApp.run(function($rootScope, StorageService, Customer, Cart) { 
    
    
    $rootScope.Cart = Cart;
    $rootScope.Customer = Customer;
    
    $rootScope.items = [];
    $rootScope.scheme = Cart.getScheme();
    $rootScope.$watch(function() { return Cart.getVersion(); }, function(newValue, oldValue) {
	if (newValue !== oldValue) {
            $rootScope.scheme = Cart.getScheme();
            if (angular.isDefined(Cart.quote)) {
		$rootScope.items = Object.keys(Cart.quote.items);
	    }
        }
    });
    
    $rootScope.$watch(function () { return Customer.getVersion(); }, function(newValue, oldValue) {
	if (angular.isDefined(newValue) && newValue !== oldValue) {
	    Customer.load(false).then(
		function(session) {
		    $rootScope.session = session;
		}
	    );
        }
    });

    
    $rootScope.$watch(function () { return Customer.isMultiline(); }, function(newValue, oldValue) {
	if (angular.isDefined(newValue)) {
            $rootScope.multiline = Customer.getMultiline();
        }
    });
    
    $rootScope.$watch(function () { return Customer.isLoggedIn(); }, function(newValue, oldValue) {
	if (angular.isDefined(newValue)) {
            $rootScope.session = Customer.getSession();
        }
    });
        
    $rootScope.Customer.setMultiline(false);    
    $rootScope.Customer.status().then(
        function(session) {
	    if (angular.isDefined(session)) {
        	$rootScope.session = session;
            }
        }
    );
    
    var steps = StorageService.get('steps');
    if (steps != null) {
	$rootScope.steps = steps;
    } else {
	$rootScope.steps = {
	    cart: {
                allow: true,
                active: true,
                submit: false,
                loading: false,
                complete: false,
	    },
            identity: {
                mode: 'register',
                allow: true,
                active: false,
                submit: false,
                loading: false,
                complete: false,
            },
            address: {
                allow: true,
                active: false,
                submit: false,
                loading: false,
                complete: false,
            },
            billing: {
                edit: false
            },
            shipping: {
                edit: false
            },
            payment: {
                allow: true,
                active: false,
                submit: false,
                loading: false,
                complete: false,
                lock: false,
            },
            siren: {
                allow: false,
                active: false,
                submit: false,
                loading: false,
                complete: false,
            }
        };
    }

});
angular.module('bytelApp').filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input, decimals) + '%';
  };
}])
.filter('customCurrency', [function () {
  // todo optim this filter
  return function (amount) {
    var result = parseFloat(amount).toFixed(3).slice(0, -1).replace(/([ 0-9]+)?\.?([0-9]+)/gi, '<span>$1</span><sup>€$2</sup>');
    return result;
  }
}])
.filter('toTrusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

angular.module('ui.mask')
  .value('uiMaskConfig', {
      maskDefinitions: {
        '0': /0/,
        '1': /[0-1]/,
        '2': /[0-2]/,
        '3': /[0-3]/,
        '5': /[1-5]/,
        '9': /\d/,
        'A': /[a-zA-Z]/,
        '*': /[a-zA-Z0-9]/
      },
      clearOnBlur: true,
      eventsToHandle: ['input', 'keyup', 'click', 'focus']
});

var operators = {
    '==': function(a, b) { return a == b }
};
'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.directive('ngBlur', [function () {
  var BLUR_CLASS = 'ng-blurred';
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$blurred = false;
      element.on('keydown', function(a) {
        element.removeClass(BLUR_CLASS);
        scope.$apply(function () {
          ctrl.$blurred = false;
        });
      }).on('blur', function () {
        element.addClass(BLUR_CLASS);
        scope.$apply(function () {
          ctrl.$blurred = true;
        });
      });
    }
  };
}])
/*.directive('ngMaskCustom', [function () {
  var dateMask = "39/19/9999";
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, model) {
      element.on('keydown', function(a) {
        console.log(a);
        var val = model.$viewValue;
        console.log(val)
        console.log(val.length)
        if(a.key == '3'){
          if(val == ""){
            scope.dateMask = scope.dateMask.replace('39','31');
          }
        } else if(a.key == '1'){
          if(val.length == 2){
            scope.dateMask = scope.dateMask.replace('19','12');
          }
        } else {
          scope.dateMask = dateMask;
        }
      });
      scope.dateMask = dateMask;
    }
  };
}])*/
  .directive('ngFinish', [function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs, ctrl) {
        if (scope.$last) {
          element.ready(function () {
            if (attrs.ngFinish) {
              element.trigger(attrs.ngFinish);
            } else {
              element.trigger('finishRepeat');
            }
          });
        }
      }
    };
  }])
  .directive('rbClicandcollect', function ($timeout) {
    return {
      scope: '=',
      restrict: 'C',
      link: function (scope, elm, attrs, ctrl) {
        scope.$watch('child', function (product) {
          if (product) {
            scope.gencode = product.gencode;
            $timeout(function () {
              if ($('.reservation-link').size() > 0) {
                if (typeof($('.reservation-link').st_product_locator) === 'function') {
                  $('.reservation-link').empty();
                  $('.reservation-link').st_product_locator({
                    click_and_collect: false,
                    api_key: 'rainbow',
                    langue: 'fr'
                  });
                }
              }
            }, 10);
          }
        });
      }
    }
  })
  .directive('c2call', function ($compile, $http) {
    var formTemplate = '<div class="call-me-now">' +
      '<form class="form-horizontal" name="forms.callForm" role="form" method="POST" action="/services/webcallback/call" ng-submit="save($event)" novalidate>' +
      '<div class="row" ng-class="{\'has-error\': forms.callForm.phone.$invalid && forms.callForm.phone.$blurred || forms.callForm.phone.$invalid && form.submit || form.submit && forms.callForm.c2cerror}">' +
      '<div class="col-md-12 help-block c2csuccess" ng-show="forms.callForm.phone.$valid && form.submit && forms.callForm.c2csuccess">{{message}}</div>' +
      '<div class="col-md-6" ng-show="!form.submit || forms.callForm.c2cerror">' +
      '<input type="text" ng-model="form.callForm.phone" name="phone" class="form-control input-sm col-md-6" placeholder="N° de téléphone" ng-pattern="PHONE_REGEXP" maxlength="10" ng-blur required>' +
      '</div>' +
      '<div class="col-md-12 help-block" ng-show="form.loading">' +
      '<span>Nous essayons actuellement de joindre le numéro {{form.callForm.phone}}</span>' +
      '</div>' +
      '<div class="col-md-2" ng-show="!form.submit || forms.callForm.c2cerror"><button type="submit" ng-disabled="form.loading" class="btn btn-sm btn-primary" onclick="tc_events_3(this, \'CLICK\', {\'XTCLICK_EVENT\':\'F\',\'XTCLICK_S2\':\'2\',\'LABEL\':\'Telephones::web_call_back::rappel_en_cours\',\'XTCLICK_TYPE\':\'\'});">Ok</button></div>' +
      '<div class="col-md-4"><a class="btn btn-sm btn-cancel" ng-click="disableForm();">Annuler</a></div>' +
      '<div class="col-md-12 help-block" ng-show="forms.callForm.phone.$invalid && forms.callForm.phone.$blurred || forms.callForm.phone.$invalid && form.submit">Format du numéro saisi incorrect</div>' +
      '<div class="col-md-12 help-block" ng-show="forms.callForm.phone.$valid && form.submit && forms.callForm.c2cerror">{{message}}</div>' +
      '</div>' +
      '</form>' +
      '</div>';

    return {
      restrict: 'C',
      link: function (scope, elm, attrs, ctrl) {
        scope.form = {
          loading: false,
          submit: false
        };
//        scope.PHONE_REGEXP = /^0[1-9]{1}[0-9]{8}$/;
        scope.PHONE_REGEXP = /^0[0-9]{9}$/;
        scope.disableForm = function () {
          //console.log('disable form');
          scope.form.submit = false;
          elm.next().remove();
        };
        scope.save = function (e) {
          //console.info('save')
          e.preventDefault();
          scope.form.submit = true;
          scope.$watch('forms.callForm', function (form) {
            var message = 'Veuillez réessayer dans un moment';
            if (typeof(form) != 'undefined' && form.$valid && scope.form.submit) {
              scope.form.loading = true;
              scope.message = '';
              var formData = scope.form.callForm;
              formData.templateId = attrs['c2cTemplate'];

              console.info(e.target.action);
              
              $http({
                url: e.target.action,
                method: "POST",
                data: $.param(formData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              }).success(function (data, status, headers, config) {

                scope.form.loading = false;

                if (data.error == true) {
                  form.c2cerror = true;
                  form.c2csuccess = false;
                  if (data.message) {
                    var message = data.message;
                  }
                  scope.message = message;
                }
                if (data.error == false) {
                  form.c2csuccess = true;
                  form.c2cerror = false;
                  scope.message = data.message + ' sur le numéro: ' + scope.form.callForm.phone;
                }
              }).error(function (data, status, headers, config) {

                scope.form.loading = false;
                scope.form.submit = false;

                form.c2csuccess = false;
                form.c2cerror = true;
              });
            }
          });
        };
        elm.on('click', function (e) {
          if(!elm.is('form')){
            e.preventDefault();
            if (!elm.next().is('.call-me-now')) {
              elm.after($compile(formTemplate)(scope));
            }
            scope.$apply();
          }
        });
      }
    }
  })
  .directive('ngFeedbackLoader', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        element.on('click', function (event) {

          element.hasClass('action-feedback') ? '' : element.addClass('action-feedback');
          element.trigger('end-action-feedback');
        });

        //@TODO: add a listener to stop all loader effect
      }
    }
  })
  .directive('ngHideLoader', function ($window, $timeout) {
    return {
      restrict: 'AE',
      link: function (scope, element, attrs){

        // could have used native method but stick to angular for compatibility issues.
        angular.element($window).on('DOMContentLoaded', function(evt) {
          element.addClass('page-loaded');
        });

        angular.element('.fanion-ribon.reversed').addClass('fade');
        angular.element($window).on('load', function(){
          //angular.element('.wrapper').addClass('animated fadeIn');
          //angular.element('header').addClass('animated fadeInDown');
          //angular.element('footer').addClass('animated fadeInUp');

          $timeout(function(){
            angular.element('.fanion-ribon.reversed').addClass('animated fadeInLeft');
          }, 500);
        });
      }
    }
  });

bytelApp.directive('googleMapsPlacesAutocomplete', function ($window, $rootScope, uiGmapGoogleMapApi, $timeout) {

  return {
    require: 'ngModel',
    link: function (scope, element, attrs, model) {
      var elementId = element[0].id;
      var autocomplete;
      var components = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        administrative_area_level_2: 'short_name',
        postal_code: 'short_name',
        country: 'short_name'
      };

      var i = 0;
      for (var component in components) {
        i++;
        var target = false;
        if (document.getElementById(elementId + '-' + component)) {
          target = angular.element(document.getElementById(elementId + '-' + component));
        } else if (document.getElementById(component)) {
          target = angular.element(document.getElementById(name));
        }

        if (target) {
          target.attr('google-maps-component', component);
          target.val('');
          target.trigger('change');
          target.on('change', function (e) {

            if (angular.element(e.target).is(':visible')) {
              var parts = [];
              var value = angular.element(element).val();
              if (angular.element(e.target).attr('google-maps-updated')) {
                var current = angular.element(e.target).attr('google-maps-value');
                var values = angular.element(element).val().split(', ');
                if (values.length >= 1) {
                  for (var k in values) {
                    if (values[k].trim() == current.trim()) {
                      values.splice(k, 1);
                    }
                  }

                  value = values.join(', ')
                }
              }

              if (value) {
                parts = value.split(', ');
                if (angular.element(e.target).val() !== '') {
                  switch (angular.element(e.target).attr('google-maps-component')) {
                    case 'street_number':
                      parts.unshift(e.target.value);
                      break;

                    case 'route':
                      parts.splice(-3, 0, e.target.value);
                      break;

                    case 'locality':
                      parts.splice(-1, 0, e.target.value);
                      break;

                    case 'administrative_area_level_1':
                    case 'administrative_area_level_2':
                      break;

                    case 'postal_code':
                      parts.splice(-2, 0, e.target.value);
                      break;

                    case 'country':
                    default:
                      parts.push(e.target.value);
                  }
                }
              }

              angular.element(e.target).attr('google-maps-value', e.target.value);
              angular.element(e.target).attr('google-maps-updated', true);
              angular.element(element).val(parts.join(', '));
            }
          });
        }
      }


      var google = {};

      uiGmapGoogleMapApi.then(function (maps) {

        google.maps = maps;
        $timeout(setMap, 0);

      });

      var setMap = function setMap() {

        autocomplete = new google.maps.places.Autocomplete(element[0], {
          types: ['geocode'],
          componentRestrictions: {country: 'fr'}
        });


        google.maps.event.addListener(autocomplete, 'place_changed', function (e) {

          for (var component in components) {
            var target = false;
            if (document.getElementById(elementId + '-' + component)) {
              target = angular.element(document.getElementById(elementId + '-' + component));
            } else if (document.getElementById(component)) {
              target = angular.element(document.getElementById(name));
            }

            if (target) {
              if (!angular.element(target).attr('google-maps-exclude')) {
                if (angular.element(target).attr('google-maps-value')) {
                  target.val('');
                  target.attr('google-maps-value', '');
                  target.trigger('change');
                }
              }
            }
          }

          var place = autocomplete.getPlace();
          model.$setViewValue(place.formatted_address);
          element.attr('google-maps-place', place.formatted_address);
          $rootScope.$emit('places:autocomplete');
          if (!place.geometry) {
            return false;
          }
          if (place.address_components) {

            for (var i = 0; i < place.address_components.length; i++) {
              var type = place.address_components[i].types[0];
              var value = place.address_components[i][components[type]];
              var target = false;

              if (document.getElementById(elementId + '-' + type)) {
                target = angular.element(document.getElementById(elementId + '-' + type));

              } else if (document.getElementById(type)) {
                target = angular.element(document.getElementById(type));
              }
              if (target) {
                target.val(value);
                target.trigger('change');

                angular.element(target).attr('google-maps-value', target.val());
                angular.element(target).attr('google-maps-updated', true);
              }
            }
          }

        })
      };
    }
  };
});

bytelApp.directive('prepopulatedInput', function ($timeout) {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, element, attrs, model) {

      $timeout(function () {
        if (!angular.isUndefined(model)) {
          if (!(element.val() == '' && model.$pristine)) {
            attrs.prepopulatedValue = element.val();
            scope.$apply(function () {
              model.$setViewValue(element.val());
            });
          }
        }

      }, 3000);
    }
  };
});


bytelApp.directive('popit', ['$uibModal', '$rootScope', function ($uibModal, $rootScope) {
  return {
    restrict: 'C',
    link: function (scope, element, attrs) {
      element.on("click", function (event) {
        event.preventDefault();
        /*$log.debug(element)
         $log.debug(element[0].dataset.modalUri)*/
        //var dUri = event.target.getAttribute('data-modal-uri');
        var dUri = element[0].dataset.modalUri;
        if (dUri) {
          var tUrl = dUri;
        } else {
          var tUrl = '/skin/frontend/bytel/default/template/modal/modal.html';
        }
        //var dSize = event.target.getAttribute('data-modal-size');
        var dSize = element[0].dataset.modalSize;
        if (dSize) {
          var tSize = dSize;
        } else {
          var tSize = ''
        }
        $rootScope.modalIntance = $uibModal.open({
          templateUrl: tUrl,
          size: tSize
        });
      });
    }
  }
}]);

bytelApp.directive('keypressEnter', function () {
  return {
    link: function (scope, element, attrs, model) {
      element.on("keydown keypress", function (event) {
        if (event.which === 13) {
          event.preventDefault();
          if (attrs.keypressEnter != '') {
            scope.$apply(function () {
              scope.$eval(attrs.keypressEnter, {'event': event});
            });
          }
        }
      });
    }
  };
});

bytelApp.directive('inputLocal', ['StorageService', function (StorageService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, inputModel) {

      var inputLocal = StorageService.get('inputLocal');


      var inputName = inputModel.$name;

      if (inputLocal != null && angular.isDefined(inputLocal[inputName])) {
        var storageValue = inputLocal[inputName];
      } else {
        var storageValue = null;
      }

      var setValues = true;
      var inputType = element.attr('type');
      if (inputType == 'radio' || inputType == 'checkbox') {
        if (element.val() == String(storageValue)) {
          inputModel.$checked = true;
        } else {
          setValues = false;
        }
      }

      if (setValues == true) {
        inputModel.$setViewValue(storageValue);
        element.val(storageValue);
      }

      element.on('change', function () {
        var inputLocal = StorageService.get('inputLocal');
        if (inputLocal == null) {
          inputLocal = {};
        }

        if (inputModel.$valid) {
          inputLocal[inputName] = element.val();
        } else {
          inputLocal[inputName] = null;
        }

        StorageService.set('inputLocal', inputLocal);
      });
    }
  };
}]);

// Tags onclick
bytelApp.directive('tagClick', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      element.on('click', function (event) {
        if (typeof(tc_events_5) != 'undefined') {
          var label = attrs.tagClick;
          tc_events_5(element.context, 'CLICK', {
            'XTCLICK_EVENT': 'C',
            'XTCLICK_S2': '2',
            'LABEL': label,
            'XTCLICK_TYPE': 'N'
          })
        }
      });
    }
  };
});

bytelApp.directive('compareTo', function () {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function (scope, element, attributes, ngModel) {

      ngModel.$validators.compareTo = function (modelValue) {
        return modelValue == scope.otherModelValue.$modelValue;
      };

      scope.$watch("otherModelValue", function () {
        ngModel.$validate();
      });
    }
  };
});


// TODO  à deplacer et a tester avec un compile dans la directive
bytelApp.config(function ($provide) {

  $provide.decorator('daypickerDirective', function ($delegate) {
    $delegate[0].templateUrl = "/skin/frontend/bytel/default/template/datepicker/day.html";
    return $delegate;
  });

  $provide.decorator('monthpickerDirective', function ($delegate) {
    $delegate[0].templateUrl = "/skin/frontend/bytel/default/template/datepicker/month.html";
    return $delegate;
  });

  $provide.decorator('yearpickerDirective', function ($delegate) {
    $delegate[0].templateUrl = "/skin/frontend/bytel/default/template/datepicker/year.html";
    return $delegate;
  });

  $provide.decorator('datepickerDirective', function ($delegate) {
    $delegate[0].templateUrl = "/skin/frontend/bytel/default/template/datepicker/datepicker.html";
    return $delegate;
  });

  $provide.decorator('datepickerPopupWrapDirective', function ($delegate) {
    $delegate[0].templateUrl = "/skin/frontend/bytel/default/template/datepicker/popup.html";
    return $delegate;
  });

})/*.config(['datepickerConfig', function (datepickerConfig) {
  datepickerConfig.formatYear = 'yyyy';
  datepickerConfig.startingDay = 1;
  datepickerConfig.showWeeks = false;
}]);*/


'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.directive('relaisMapItem', function () {
  return {
    scope: {
      info: '=',
      index: '='
    },
    restrict: 'AE',
    templateUrl: '/skin/frontend/bytel/default/template/relaiscolis/relaiscolisitem.html',
    controller: function ($scope, $rootScope) {
      var self = $scope;

      self.isHoraires = true;

      var tempDescList = $scope.info.poi.datasheet.descList;

      self.cleanedHoraires = $scope.$parent.cleanHoraires(tempDescList);

      self.pickUpRelais = function pickUpRelais(info, index) {
        info.id = index;
        $rootScope.$broadcast('relais-item-picked', info);
      };
    }
  };
});

'use strict';

/* LAZYSIZES CONFIG */

window.lazySizesConfig = window.lazySizesConfig || {};

window.lazySizesConfig = {
    autosizesClass: 'afk-lazyautosizes',
    lazyClass: 'afk-lazyload',
    errorClass: 'afk-lazyerror',
    loadedClass: 'afk-lazyloaded',
    loadingClass: 'afk-lazyloading',
    preloadClass: 'afk-preloadClass',
    expand: 300,
    preloadAfterLoad: false,
    loadMode: 1,
    expFactor: 2,
    init: false
}

document.addEventListener('DOMContentLoaded', function(event) {
    // Lazyload all images and avoid blank images when windows is not fully loaded
    console.info('go init lazy')
    window.lazySizes.init();

    // external svg ressource for IE8+ end IE Edge
    svg4everybody();
});

/* END LAZYSIZES CONFIG */

if(ENVIRONMENT && ENVIRONMENT != 'LOCAL'){
    if (!('console' in window) || !('firebug' in console)) {
        var names = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml',
        'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];

        window.console = {};
        for (var i = 0; i < names.length; ++i)
            window.console[names[i]] = function() {}
    }
}

if (window.jQuery) { var V = $.Velocity; } else { var V = Velocity; }

/*! lazysizes - v1.2.2 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.HTMLPictureElement&&"sizes"in b.createElement("img"),f="addEventListener",g=a[f],h=a.setTimeout,i=a.requestAnimationFrame||h,j=a.setImmediate||h,k=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],m={},n=Array.prototype.forEach,o=function(a,b){return m[b]||(m[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),m[b].test(a.className)&&m[b]},p=function(a,b){o(a,b)||(a.className=a.className.trim()+" "+b)},q=function(a,b){var c;(c=o(a,b))&&(a.className=a.className.replace(c," "))},r=function(a,b,c){var d=c?f:"removeEventListener";c&&r(a,b),l.forEach(function(c){a[d](c,b)})},s=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},t=function(b,d){var f;!e&&(f=a.picturefill||a.respimage||c.pf)?f({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},u=function(a,b){return(getComputedStyle(a,null)||{})[b]},v=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},w=function(b){var c,d=0,e=a.Date,f=function(){c=!1,d=e.now(),b()},g=function(){j(f)},k=function(){i(g)};return function(){if(!c){var a=125-(e.now()-d);c=!0,6>a&&(a=6),h(k,a)}}},x=function(){var e,j,l,m,v,x,z,A,B,C,D,E,F,G,H,I,J=/^img$/i,K=/^iframe$/i,L="onscroll"in a&&!/glebot/.test(navigator.userAgent),M=0,N=0,O=0,P=0,Q=function(a){O--,a&&a.target&&r(a.target,Q),(!a||0>O||!a.target)&&(O=0)},R=function(a,b){var c,d=a,e="hidden"!=u(a,"visibility");for(B-=b,E+=b,C-=b,D+=b;e&&(d=d.offsetParent);)e=(u(d,"opacity")||1)>0,e&&"visible"!=u(d,"overflow")&&(c=d.getBoundingClientRect(),e=D>c.left&&C<c.right&&E>c.top-1&&B<c.bottom+1);return e},S=function(){var a,b,d,f,g,h,i,k,m;if((v=c.loadMode)&&8>O&&(a=e.length)){for(b=0,P++,I>N&&1>O&&P>3&&v>2?(N=I,P=0):N=v>1&&P>2&&6>O?H:M;a>b;b++)if(e[b]&&!e[b]._lazyRace)if(L)if((k=e[b].getAttribute("data-expand"))&&(h=1*k)||(h=N),m!==h&&(z=innerWidth+h,A=innerHeight+h,i=-1*h,m=h),d=e[b].getBoundingClientRect(),(E=d.bottom)>=i&&(B=d.top)<=A&&(D=d.right)>=i&&(C=d.left)<=z&&(E||D||C||B)&&(l&&3>O&&!k&&(3>v||4>P)||R(e[b],h))){if(Y(e[b]),g=!0,O>9)break;O>6&&(N=M)}else!g&&l&&!f&&4>O&&4>P&&v>2&&(j[0]||c.preloadAfterLoad)&&(j[0]||!k&&(E||D||C||B||"auto"!=e[b].getAttribute(c.sizesAttr)))&&(f=j[0]||e[b]);else Y(e[b]);f&&!g&&Y(f)}},T=w(S),U=function(a){p(a.target,c.loadedClass),q(a.target,c.loadingClass),r(a.target,U)},V=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},W=function(a){var b,d,e=a.getAttribute(c.srcsetAttr);(b=c.customMedia[a.getAttribute("data-media")||a.getAttribute("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},X=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,i(c))}}(),Y=function(a){var b,d,e,f,g,i,j,u=J.test(a.nodeName),v=u&&(a.getAttribute(c.sizesAttr)||a.getAttribute("sizes")),w="auto"==v;(!w&&l||!u||!a.src&&!a.srcset||a.complete||o(a,c.errorClass))&&(w&&(j=a.offsetWidth),a._lazyRace=!0,O++,X(function(){a._lazyRace&&delete a._lazyRace,q(a,c.lazyClass),(g=s(a,"lazybeforeunveil")).defaultPrevented||(v&&(w?(p(a,c.autosizesClass),y.updateElem(a,!0,j)):a.setAttribute("sizes",v)),d=a.getAttribute(c.srcsetAttr),b=a.getAttribute(c.srcAttr),u&&(e=a.parentNode,f=e&&k.test(e.nodeName||"")),i=g.detail.firesLoad||"src"in a&&(d||b||f),g={target:a},i&&(r(a,Q,!0),clearTimeout(m),m=h(Q,2500),p(a,c.loadingClass),r(a,U,!0)),f&&n.call(e.getElementsByTagName("source"),W),d?a.setAttribute("srcset",d):b&&!f&&(K.test(a.nodeName)?V(a,b):a.setAttribute("src",b)),(d||f)&&t(a,{src:b})),(!i||a.complete)&&(i?Q(g):O--,U(g))}))},Z=function(){if(!l){if(Date.now()-x<999)return void h(Z,999);var a,b=function(){c.loadMode=3,H=F,T()};l=!0,c.loadMode=3,O||T(),g("scroll",function(){3==c.loadMode&&(H=G,c.loadMode=2),clearTimeout(a),a=h(b,99)},!0)}};return{_:function(){x=Date.now(),e=b.getElementsByClassName(c.lazyClass),j=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),H=c.expand,F=H,G=H*((c.expFactor+1)/2),I=H*c.expFactor,g("scroll",T,!0),g("resize",T,!0),a.MutationObserver?new MutationObserver(T).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[f]("DOMNodeInserted",T,!0),d[f]("DOMAttrModified",T,!0),setInterval(T,999)),g("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[f](a,T,!0)}),/d$|^c/.test(b.readyState)?Z():(g("load",Z),b[f]("DOMContentLoaded",T),h(Z,2e4)),T(e.length>0)},checkElems:T,unveil:Y}}(),y=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=v(a,h,c),g=s(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),k.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||t(a,g.detail)}},e=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},f=w(e);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),g("resize",f)},checkElems:f,updateElem:d}}(),z=function(){z.i||(z.i=!0,y._(),x._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:2,expand:359,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,h(function(){c.init&&z()})}(),{cfg:c,autoSizer:y,loader:x,init:z,uP:t,aC:p,rC:q,hC:o,fire:s,gW:v}}});
/*! lazysizes - v1.2.2 */
!function(a,b){"use strict";function c(a,c){if(!e[a]){var d=b.createElement(c?"link":"script"),f=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,e[a]=!0,e[d.src||d.href]=!0,f.parentNode.insertBefore(d,f)}}var d,e={};b.addEventListener&&(d=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(b){var e,f,g,h;b.defaultPrevented||("none"==b.target.preload&&(b.target.preload="auto"),e=b.target.getAttribute("data-link"),e&&c(e,!0),e=b.target.getAttribute("data-script"),e&&c(e),e=b.target.getAttribute("data-require"),e&&a.require&&require([e]),g=b.target.getAttribute("data-bg"),g&&(b.detail.firesLoad=!0,f=function(){b.target.style.backgroundImage="url("+g+")",b.detail.firesLoad=!1,lazySizes.fire(b.target,"_lazyloaded",{},!0,!0)},d(g,f)),h=b.target.getAttribute("data-poster"),h&&(b.detail.firesLoad=!0,f=function(){b.target.poster=h,b.detail.firesLoad=!1,lazySizes.fire(b.target,"_lazyloaded",{},!0,!0)},d(h,f)))},!1))}(window,document);
/*! lazysizes - v1.2.2 */
!function(){"use strict";if(window.addEventListener){var a=/\s*\|\s+|\s+\|\s*/g,b=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,c={contain:1,cover:1},d=window.requestAnimationFrame||setTimeout,e=function(a){var b=lazySizes.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},f=function(d,e,f){var g=document.createElement("picture"),h=e.getAttribute(lazySizesConfig.sizesAttr),i=e.getAttribute("data-optimumx"),j=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size");!c[j]&&c[e.style.backgroundSize]&&(j=e.style.backgroundSize),!c[j]||"auto"!=h&&h||(f.setAttribute("data-parent-fit",j),h="auto"),e._lazybgset&&e._lazybgset.parentNode==e&&e.removeChild(e._lazybgset),Object.defineProperty(f,"_lazybgset",{value:e,writable:!0}),Object.defineProperty(e,"_lazybgset",{value:g,writable:!0}),d=d.split(a),g.style.display="none",f.className=lazySizesConfig.lazyClass,1!=d.length||h||(h="auto"),d.forEach(function(a){var c=document.createElement("source");h&&"auto"!=h&&c.setAttribute("sizes",h),a.match(b)&&(c.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&c.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),g.appendChild(c)}),h&&(f.setAttribute(lazySizesConfig.sizesAttr,h),e.removeAttribute(lazySizesConfig.sizesAttr),e.removeAttribute("sizes")),i&&f.setAttribute("data-optimumx",i),g.appendChild(f),e.appendChild(g)},g=function(a){if(a.target._lazybgset){var b=a.target,c=b._lazybgset,d=b.currentSrc||b.src;d&&(c.style.backgroundImage="url("+d+")"),b._lazybgsetLoading&&(lazySizes.fire(c,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var b,c,e;!a.defaultPrevented&&(b=a.target.getAttribute("data-bgset"))&&(e=a.target,c=document.createElement("img"),c._lazybgsetLoading=!0,a.detail.firesLoad=!0,f(b,e,c),lazySizes.loader.unveil(c),d(function(){lazySizes.fire(c,"_lazyloaded",{},!0,!0),c.complete&&g({target:c})}))}),document.addEventListener("load",g,!0),document.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&(a.detail.width=e(a.target._lazybgset))})}}();
/*! lazysizes - v1.2.2 */
!function(a,b,c){"use strict";var d,e=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,f=b.createElement("img"),g="sizes"in f&&"srcset"in f;if(e||(e={},a.lazySizesConfig=e),e.supportsType||(e.supportsType=function(a){return!a}),!(a.picturefill||a.respimage||e.pf)){if(a.HTMLPictureElement&&g)return void(e.pf=function(){});e.pf=function(b){var c,e;if(!a.picturefill&&!a.respimage)for(c=0,e=b.elements.length;e>c;c++)d(b.elements[c])},d=function(){var c=function(a,b){return a.w-b.w},f=/^\s*\d+px\s*$/,h=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},i=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s+\d+h/g,d=/\s/,e=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(f){return a=[],f=f.trim(),f.replace(c,"").replace(b,e),a.length||!f||d.test(f)||a.push({c:f,u:f,w:99}),a}}(),j=function(){j.init||(j.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;b>a;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},k=function(b,c){var d,f=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!f&&c&&(f=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute("src")||b.getAttribute(e.srcAttr)),b._lazypolyfill&&b._lazypolyfill._set==f||(d=i(f||""),c&&b.parentNode&&(d.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),d.isPicture&&"auto"!=b.getAttribute(e.sizesAttr)&&(a.matchMedia||a.Modernizr&&Modernizr.mq)&&(lazySizes.aC(b,"lazymatchmedia"),j())),d._set=f,Object.defineProperty(b,"_lazypolyfill",{value:d,writable:!0}))},l=function(b){var c=a.devicePixelRatio||1,d=lazySizes.getX&&lazySizes.getX(b);return Math.min(d||c,2.5,c)},m=function(b){return a.matchMedia?(m=function(a){return!a||(matchMedia(a)||{}).matches})(b):a.Modernizr&&Modernizr.mq?!b||Modernizr.mq(b):!b},n=function(a){var b,d,g,i,j,n,o;if(i=a,k(i,!0),j=i._lazypolyfill,j.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;g>d;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&m(b[d].getAttribute("media"))){i=b[d],k(i),j=i._lazypolyfill;break}return j.length>1?(o=i.getAttribute("sizes")||"",o=f.test(o)&&parseInt(o,10)||lazySizes.gW(a,a.parentNode),j.d=l(a),(!j.w||j.w<o)&&(j.w=o,n=h(j.sort(c)))):n=j[0],n},o=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=n(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return o.parse=i,o}(),e.loadedClass&&e.loadingClass&&!function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}()}}(window,document),function(a){"use strict";var b,c=a.createElement("img");!("srcset"in c)||"sizes"in c||window.HTMLPictureElement||(b=/^picture$/i,a.addEventListener("lazybeforeunveil",function(c){var d,e,f,g,h,i,j;!c.defaultPrevented&&!lazySizesConfig.noIOSFix&&(d=c.target)&&(f=d.getAttribute(lazySizesConfig.srcsetAttr))&&(e=d.parentNode)&&((h=b.test(e.nodeName||""))||(g=d.getAttribute("sizes")||d.getAttribute(lazySizesConfig.sizesAttr)))&&(i=h?e:a.createElement("picture"),d._lazyImgSrc||Object.defineProperty(d,"_lazyImgSrc",{value:a.createElement("source"),writable:!0}),j=d._lazyImgSrc,g&&j.setAttribute("sizes",g),j.setAttribute(lazySizesConfig.srcsetAttr,f),d.setAttribute("data-pfsrcset",f),d.removeAttribute(lazySizesConfig.srcsetAttr),h||(e.insertBefore(i,d),i.appendChild(d)),i.insertBefore(j,d))}))}(document);
/*! lazysizes - v1.2.2 */
!function(a,b,c){"use strict";if(a.addEventListener){var d,e=/^picture$/i,f=b.documentElement,g=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,c=function(b,c,d,e,f,g,h,i){a.push({c:c,u:d,w:1*("w"==i?h:e)})};return function(d){return a=[],d.replace(b,c),a}}(),h=function(){var a=function(a,b){return a.w-b.w},b=function(b,c){var d={srcset:b.getAttribute(lazySizes.cfg.srcsetAttr)||""},e=g(d.srcset);return Object.defineProperty(b,c,{value:d,writable:!0}),d.cands=e,d.index=0,d.dirty=!1,e[0]&&e[0].w?(e.sort(a),d.cSrcset=[e[d.index].c]):(d.cSrcset=d.srcset?[d.srcset]:[],d.cands=[]),d};return function(a,c){var d,f,g,h;if(!a[c]&&(h=a.parentNode||{},a[c]=b(a,c),a[c].isImg=!0,e.test(h.nodeName||"")))for(a[c].picture=!0,d=h.getElementsByTagName("source"),f=0,g=d.length;g>f;f++)b(d[f],c).isImg=!1;return a[c]}}(),i={_lazyOptimumx:function(){var a=function(a,b,c){var d,e;return a&&a.w?a.w>c?!1:(d=1-a.w/c,e=b/c-1,0>e-d):!0};return function(b,c){var d,e;for(d=b.index+1;d<b.cands.length&&(e=b.cands[d],e.w<=c||a(b.cands[d-1],e.w,c));d++)b.cSrcset.push(e.c),b.index=d}}()},j=function(){var a=function(a,b,c,d){var e,f=a[d];f&&(e=f.index,i[d](f,b),f.dirty&&e==f.index||(f.cSrcset.join(", "),a.setAttribute(c,f.cSrcset.join(", ")),f.dirty=!0))};return function(b,c,d,e){var f,g,h,i,j=b[e];if(j.width=c,j.picture&&(g=b.parentNode))for(f=g.getElementsByTagName("source"),i=0,h=f.length;h>i;i++)a(f[i],c,d,e);a(b,c,d,e)}}(),k=function(a){var b=a.getAttribute("data-optimumx")||a.getAttribute("data-maxdpr");return b&&(b="auto"==b?d.getOptimumX(a):parseFloat(b,10)),b},l=function(){a.lazySizes&&!a.lazySizes.getOptimumX&&(lazySizes.getX=k,lazySizes.pWS=g,f.removeEventListener("lazybeforeunveil",l))};f.addEventListener("lazybeforeunveil",l),setTimeout(l),d=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,d||(d={},a.lazySizesConfig=d),"function"!=typeof d.getOptimumX&&(d.getOptimumX=function(){var b=a.devicePixelRatio||1;return b>2.4?b*=.7:b>1.9&&(b*=.85),Math.min(Math.round(100*b)/100,2.2)}),a.devicePixelRatio&&(addEventListener("lazybeforesizes",function(a){var b,c,d,e;a.defaultPrevented||!(b=k(a.target))||b>=devicePixelRatio||(c=h(a.target,"_lazyOptimumx"),d=a.detail.width*b,d&&(c.width||0)<d&&(e=a.detail.dataAttr?lazySizes.cfg.srcsetAttr:"srcset",j(a.target,d,e,"_lazyOptimumx")))}),addEventListener("lazybeforeunveil",function(a){a.target._lazyOptimumx&&!a.detail.reloaded&&(a.target._lazyOptimumx=null)}))}}(window,document);
'use strict';

var bytelApp = angular.module('bytelApp');

bytelApp.factory('StorageService', function() {
    return {
        get : function(key) {
            var value = localStorage.getItem(key);
            if (value != null) {
                return angular.fromJson(value);
            }

            return value;
        },
        set : function(key, data) {
            try {
                localStorage.setItem(key, angular.toJson(data));
            } catch(e) {
                //console.log('no ls')
            }
        },
        remove : function(key) {
            localStorage.removeItem(key);
        },
        clear : function() {
            localStorage.clear();
        }
    };
});

'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.service('Customer', function Customer($window, $http, $cookies, $q, StorageService) {

    var self = this;

    self.deferred = $q.defer();
    
    self.STATE_API_URL = '//api-mc.bouyguestelecom.fr/client/me/header.json?callback=JSON_CALLBACK';
    self.STATE_API_CONTRACT_TYPES = ['FB_BYTEL','FORFAIT','FORFAIT_PRO','FAI_GP','FB_UM'];
    self.STATE_API_STATUS = 'ACTIF';
    
    self.USER_RATIO = 0.9;
    self.USER_RATIO_PROMO = 1/10.99;
    self.USER_PROMO_PRODUCT_IDS = ['6248']; 
    
    self.loading = false;

    self.default = {  
	is_active: false,
	is_logged: false,
	is_prospect: true,
	is_enterprise: false,
    };
    
    self.session = {};
    self.multiline = {
	default: {
            active : 0,
            ratio : 1,
            ratio_promo : 1,
            time : new Date().getTime(),
            product_ids : self.USER_PROMO_PRODUCT_IDS
    	},
    };
    
    self.isLoggedInSAS = function () {
        if (self.isLoggedInTLV()) { return false; }

        var state = self.getCookies();
        return (angular.isDefined(state.sso));
    };
    
    self.isLoggedInTLV = function () {
        var date = new Date();
        if (StorageService.get('telesales')) {
            var admin = StorageService.get('telesales');
            if (angular.isDefined(admin.id) && angular.isDefined(admin.hash)) {
        	return true;
            }
        }
        return false;
    };

    self.isLoggedIn = function () {
        if (angular.isDefined(self.session)) {
            if (angular.isDefined(self.session.is_logged)) {
                return  self.session.is_logged === true;
            }
        }
        return false;
    };
    
    self.isMultiline = function () {
	if (angular.isDefined(self.multiline) && angular.isDefined(self.multiline.user)) {  		
	    return parseInt(self.multiline.user.active) === 1;
	} else if (self.hasContract()) {
	    return true;
	}
	return false;
    };
	
    self.isActive = function () {
        if (angular.isDefined(self.session)) {
            if (angular.isDefined(self.session.is_active)) {
                return parseInt(self.session.is_active) === 1;
            }
        }
        return false;
    };

    self.isLock = function () {
        if (angular.isDefined(self.session)) {
            if (angular.isDefined(self.session.lock)) {
                return  self.session.lock === true;
            }
        }
        return false;
    };
    
    self.isProspect = function () {
        if (angular.isDefined(self.session)) {
            if (angular.isDefined(self.session.is_prospect)) {
                return  self.session.is_prospect === true;
            }
        }
        return false;
    };

    self.isEnterprise = function () {
        if (angular.isDefined(self.session)) {
            if (angular.isDefined(self.session.is_enterprise)) {
                return  self.session.is_enterprise === true;
            }
        }
        return false;
    };

    self.isCancelled = function () {
    	if (self.isLoggedInTLV()) {
    	    if (angular.isDefined(self.session.is_cancelled)) {
    		return true;
    	    }
    	}
        return false;
    };
    
    self.isPreventel = function () {
    	if (self.isLoggedInTLV()) {
    	    if (self.hasPreventel()) {
                if (angular.isDefined(self.getPreventel().range) && angular.isDefined(self.getPreventel().default_range)) {
                    if (self.getPreventel().range.length != self.getPreventel().default_range.length) {
                        return true;
                    }
                }    
            }
    	}
    	
    	return false;
    };
    
    self.getPreventel = function () {
    	if (angular.isDefined(self.session)) {
    	    if (angular.isDefined(self.session.preventel)) {
    		return self.session.preventel;
    	    } else if (angular.isDefined(self.session.contract_data)) {
                if (angular.isDefined(self.session.contract_data.preventel)) {
                    return self.session.contract_data.preventel;
                }
            } 
        }
        return false;
    };

    self.hasPreventel = function () {
        if (self.getPreventel() && typeof self.getPreventel() === 'object') {
            return true;
        }
        return false;
    };

    self.getMultiline = function () {
	if (angular.isDefined(self.multiline)) {
	    if (angular.isDefined(self.multiline.user)) {
		return angular.copy(self.multiline.user);
	    }
	}
	return angular.copy(self.multiline.default);
    };

    self.getAdminId = function () {
	if (angular.isDefined(self.session)) {
	    if (angular.isDefined(self.session.admin_id)) {
		return self.session.admin_id;
	    }
	}
	return false;
    };

    self.getContract = function () {
	if (angular.isDefined(self.session)) {
	    if (angular.isDefined(self.session.contract_data)) {
		return self.session.contract_data;
	    }
	}
	return false;
    };
        	
    self.hasContract = function () {
	if (self.getContract() && typeof self.getContract() === 'object') {
	    return true;
	}
	return false;
    };
	
    self.hasOverdue = function () {
    	if (angular.isDefined(self.session.contract)) {
            if (angular.isDefined(self.session.contract.line)) {
        	   return parseFloat(self.session.contract.line.overdue_amount) > 0;    
            }
    	}
    	return false;
    };
    
    self.cancel = function () {
        self.update({is_cancelled: true});
        return self;
    };
    
    self.load = function (autologin, refresh) {

	var date = new Date();
	self.deferred = $q.defer();
        self.setSession(angular.copy(self.default))
            .setMultiline(false);
        if (self.isLoggedInSAS() || self.isLoggedInTLV()) {
            if (StorageService.get('customer_version') && (!angular.isDefined(refresh) || false === refresh)) {
                if (Math.round(parseInt(date.getTime() / 1000)) < parseInt(StorageService.get('customer_version'))) {
                    if (StorageService.get('customer')) {
                        self.session = StorageService.get('customer');
                	self.setMultiline(self.hasContract())
            		    .deferred.resolve(self.session);
                	
                	if (!self.isLoggedInTLV()) {
                	    if (angular.isDefined(autologin) && true === autologin) {
                    	    	if (angular.isDefined(self.session.autoload) && true === self.session.autoload) {
                    	    	    return self.load(autologin, self.session.autoload);
                    	    	}
                	    }
                	}
                    }
                } else {
                    StorageService.remove('customer_version');
                    self.deferred.reject(self.session);
                }
            } else if (self.isLoggedInSAS() && !self.isLoggedInTLV()) {
        	if (angular.isDefined(autologin) && true === autologin) {
        	    return self.autologin();
        	}
            } else if (self.isLoggedInTLV()) {
        	self.deferred.reject(self.session);
            }
        } else {
            self.deferred.reject(self.session);
        }

        return self.deferred.promise;
    };

    self.autoload = function () {
	return self.load(true);
    };
    
    self.setMultiline = function (active) {	
	
	if (angular.isDefined(active) && active) {		
	    self.multiline.user = angular.copy(self.multiline.default);
	    self.multiline.user.time = new Date().getTime(),
	    self.multiline.user.active = 1;
	    self.multiline.user.ratio = self.USER_RATIO;
	    self.multiline.user.ratio_promo = PROMO_ACTIVE ? self.USER_RATIO_PROMO : 1;
	    self.multiline.user.product_ids = PROMO_ACTIVE ? self.USER_PROMO_PRODUCT_IDS : [];
	    
	} else if (angular.isDefined(self.multiline.user)) {
	    delete self.multiline.user;
	}
	
	return self;
    }
	
    self.status = function () {	    
	var date = new Date();
	var deferred = $q.defer();
	       
	if (self.isLoggedInTLV()) {
	    
	    return self.load(false);
	    
    	} else if (self.isLoggedInSAS()) {

    	    $http.jsonp(self.STATE_API_URL).success(function(session) {
		if (angular.isDefined(session.data) && session.data.lignes != null) {
		    for (var i in session.data.lignes) {
			var line = session.data.lignes[i];
			if (self.STATE_API_CONTRACT_TYPES.indexOf(line.ligne_marche) != '-1') {
			    if (line.statut == self.STATE_API_STATUS) {
				if (angular.isDefined(line.civilite)) {
				    self.update({prefix: line.civilite});
				}
                                if (angular.isDefined(line.nom)) {
				    self.update({lastname: line.nom});
                                }
                                if (angular.isDefined(line.prenom)) {
				    self.update({firstname: line.prenom});
                                }
                                if (angular.isDefined(line.num_ligne)) {
				    self.update({telephone: line.num_ligne});
                                }
				
				self.update({
					is_prospect: false, 
					is_active: true, 
					is_logged: true, 
					contract_data: {},
					autoload: true
				    })
				    .setMultiline(true);
				    
				deferred.resolve(self.session);
				
				break;
			    }
			}
		    }
		} else {
		    deferred.reject();
		}
	    
	    }).error(function (data) {
		deferred.reject(data);
	    });
	} else {
	    deferred.reject();
	}
	    
	return deferred.promise;
    };

    self.setSession = function (session) {
        if (angular.isDefined(session)) {
            self.session = session;
        }
        return self;
    }
    
    self.getSession = function () {
        if (angular.isDefined(self.session)) {
            return self.session;
        }
        return false;
    }

    self.getCookies = function () {
        var cookies = {};
        if ($cookies.get('SSO_ACTIVE')) {
            cookies = {'sso': $cookies.get('SSO_ACTIVE')};
        }
        return cookies;
    };

    self.getVersion = function () {
        return StorageService.get('customer_version');
    };

    self.autologin = function () {
	self.loading = true;
	self.deferred = $q.defer();
        
	$http({
            method: 'JSONP',
            url: CAS_LOGIN_URL + '?service=' + BASE_URL + 'services/customer/validate/callback/JSON_CALLBACK/ajax/1/',
        })
        .success(self.initialize)
        .error(self.failure);
        
        return self.deferred.promise;
    };

    self.login = function (username, password) {
        self.loading = true;
	self.deferred = $q.defer();
        if (angular.isDefined(username) && angular.isDefined(password)) {
            $http({
                url: BASE_URL + 'services/customer/login/ajax/1#',
                method: "POST",
                data: $.param({
                    'username': username,
                    'password': password,
                    'callback': 'JSON_CALLBACK'

                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(function(data) {
                if (angular.isDefined(data.errors) && data.errors) {
                    self.failure(data.errors);
                } else {
                    if (data.login_url) {
                        $http.jsonp(data.login_url, {
                            transformResponse: function (data) {
                                if (!angular.isDefined(data)) { return false; }
                                return data;
                            }})
                            .success(self.initialize)
                            .error(self.failure);
                    } else {
                        self.failure({'errors': ['Erreur technique, veuillez nous en excuser!']});
                    }
                }
            })
            .error(self.failure);
        }

        return self.deferred.promise;
    };

    self.logout = function () {
        self.deferred = $q.defer();
        self.loading = false;
        self.clear();

        angular.element('<img/>').attr('src', CAS_LOGOUT_URL);

        return self.deferred.promise;
    };

    self.clear = function () {
        self.setSession({})
            .setMultiline(false);
        
        StorageService.remove('form');
        StorageService.remove('customer');
        StorageService.remove('customer_version');
        StorageService.remove('ml');

        if (StorageService.get('RESCUE_CUSTOMER')) {
            StorageService.remove('RESCUE_CUSTOMER');
        }

        return self;
    };
    
    self.save = function () {
	var date = new Date();

        StorageService.set('customer', this.session);
        StorageService.set('customer_version', Math.round(date.getTime() / 1000) + CUSTOMER_TTL);
        return this;
    };

    self.update = function (data) {
      for (var key in data) {
	  if (angular.isDefined(data[key])) {
	      this.session[key] = data[key];   
	  } else if (angular.isDefined(this.session[key])) {
	      delete this.session[key];
	  }
        }
        return this;
    };

    self.siren = function(number) {
	var deferred = $q.defer();
        self.loading = true;
	
        if (!angular.isDefined(number)) {
	    deferred.reject({
		error: true,
		message: 'Merci de fournir un numéro de SIREN.'
	    });
	}
	
	$http({
	    url: BASE_URL + 'shop/order/siren',
	    method: "POST",
	    data: $.param({siren: number}),
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	}).success(function (response) {
	    self.loading = false;
	    if (angular.isDefined(response)) {
		if (response.error === true) {
		    deferred.reject(response);   
		} else {
		    self.update({is_enterprise: true});
		    deferred.resolve(response.data);   
		}
	    }
	}).error(function (data) {
	    self.loading = false;
	    deferred.reject(data);
	});
	
	return deferred.promise;
    };
    
    self.initialize = function (session) {
        self.loading = false;
        if (angular.isDefined(session)) {
            self.session = session;
            if (self.isProspect() && !self.isActive()) {
                self.deferred.resolve(false);

            } else {
        	
                if (angular.isDefined(session.errors)) {
                    self.deferred.resolve(false);
                } else {
                    
                    session.lock = self.isActive() && !self.isProspect();
                    var state = self.getCookies();
                    if (angular.isDefined(state.sso)) {
                        session.sso = state.sso;
                    }
                
                    self.setMultiline(self.hasContract());
                    self.save();
                    
                    self.deferred.resolve(session);
                }
            }
        }
    };

    self.failure = function (data) {
	self.loading = false;
	self.deferred.reject(data);
    };
    

}).run(['StorageService', '$cookies', '$rootScope', function(StorageService, $cookies, $rootScope) {	     
    var date = new Date();
    if (StorageService.get('RESCUE_CUSTOMER')) {
	if (!RESCUE_ENABLED || Math.round(parseInt(date.getTime() / 1000)) > parseInt(StorageService.get('RESCUE_CUSTOMER'))) {
	    StorageService.remove('RESCUE_CUSTOMER');
	}
    }
    
    if (StorageService.get('customer_version')) {
	if (Math.round(parseInt(date.getTime() / 1000)) > parseInt(StorageService.get('customer_version'))) {
	    StorageService.remove('customer_version');
	    StorageService.remove('customer');	    
	} else if (StorageService.get('customer')) {
	    var customer = StorageService.get('customer');
            if (!angular.isDefined(customer.admin_id) || !parseInt(customer.admin_id)) {
                if (customer.sso !== $cookies.SSO_ACTIVE) {
                    StorageService.remove('customer');
                    StorageService.remove('customer_version');
                }
            }
	}
    } else if (StorageService.get('customer')) {
	StorageService.remove('customer');
    }
}]);

'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.service('Partner', function Partner($window, $http, $cookieStore, $cookies, $q, StorageService) {
    
    var self = this;
    
    self.data = {};
    
    self.init = function() {
        console.info('INIT');
        var storage = StorageService.get('partner');
        if (storage) {
            self.data = storage;
        } else {
            self.data = {
                code: null
            };
        }
        
        return self.data;
    }
    
    self.setData = function(data, value) {
        self.data[data] = value;
    };
    
    self.getCode = function() {
        return self.getData('code');
    }
    
    self.getData = function(code) {        
        if (typeof(code) == 'undefined') {
            return self.data;            
        }
        
        return self.data[code];
    };
    
    self.logout = function() {
        StorageService.remove('partner');
        self.data = {};
    };
    
    self.save = function() {
        StorageService.set('partner', self.getData());
    };
    
    self.isLoggedIn = function () {
        return Boolean(self.getCode());
    };
    
    self.init();
});
'use strict';

var bytelApp = angular.module('bytelApp');

function CatalogProduct(data, Catalog) {

    var self = this;
    
    if (angular.isObject(data)) {
        for (var key in data) {
            self[key] = data[key];
        }
    }

    self.hasOptions = function() {
        return angular.isDefined(self.options) && Object.keys(self.options).length >= 1;
    };
    self.getOptions = function() {
        if (angular.isDefined(self.options)) {
            return self.options;
        } else {
            return false;
        }
    };
    
    self.isPhone = function() {
        return self.type_id === 'phone' || self.type_id === 'phone_simple';
    };
    self.isBox = function() {
        return self.type_id === 'box';
    };
    self.isPlan = function() {
        return self.type_id === 'plan' || self.isPlanSowo() || self.isPlanPremium() || self.isFaimSowo() || self.isFaimPremium() || self.isFai();
    };
    self.isPlanSowo = function() {
        return self.type_id === 'plan_sowo';
    };
    self.isPlanPremium = function() {
        return self.type_id === 'plan_premium';
    };
    self.isFaim = function() {
        return self.isFaimSowo() || self.isFaimPremium();
    };
    self.isFaimSowo = function() {
        return self.type_id === 'faim';
    };
    self.isFaimPremium = function() {
    	return self.type_id === 'faim_premium';
    };
    self.isFai = function() {
        return self.type_id === 'fai';
    };
    self.isOption = function() {
        return self.type_id === 'option';
    };
    self.isAccessory = function() {
        return self.type_id === 'accessory';
    };
    self.isSowo = function() {
        return self.isPlanSowo() || self.isFaimSowo();
    };
    self.isPremium = function() {
        return self.isPlanPremium() || self.isFaimPremium();
    };
}

bytelApp.service('Catalog', function Catalog($http, $q, $interval, StorageService, RuleService) {

    var self = this;
    var date = new Date();

    self.loading = false;

    self.rules = RuleService.process;
    self.validate = RuleService.validate;

    self.getData = function (category) {
        var deferred = $q.defer();

        var urlCategory = 'services/catalog/products';
        var currentCatalog = 'catalog';

        if(typeof(category) != 'undefined'){
            if(category == 'fai'){
                urlCategory = 'provider/services/products'
                currentCatalog = currentCatalog + '_' + category;
            }
        }

        if (self.loading) {
            var interval = $interval(function(i) {
                if (!self.loading) {
                    $interval.cancel(interval);
                    deferred.resolve(self.getData());
                }
            }, 2000);
        } else {
            if (null !== StorageService.get(currentCatalog)) {
                deferred.resolve(StorageService.get(currentCatalog));
            } else {
                self.loading = true;
                $http.get(BASE_URL + urlCategory)
                    .success(function(data) {
                        date = new Date();
                        self.loading = false;

                        StorageService.set(currentCatalog, data);
                        StorageService.set(currentCatalog+'_version', Math.round(date.getTime() / 1000) + CATALOG_TTL);

                        deferred.resolve(data);
                    })
                    .error(function (data) {
                        StorageService.remove(currentCatalog);
                        StorageService.remove(currentCatalog+'_version');

                        deferred.reject(data);
                        self.loading = false;
                    }
                );
            }
        }

        return deferred.promise;
    };
    
    self.getProductsByIds = function(ids) {
    	
    	var deferred = $q.defer();
        var products = [];
        var promise = self.getData();
        
        promise.then(
            function(data) {
                for (var i = 0; i < ids.length; i++) {
                	var id = ids[i];
                	
                	if (angular.isDefined(data.products[id])) {
                		products.push(data.products[id]);
                	}                	
                }
                
                deferred.resolve(products);
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );

        
        return deferred.promise;
    };

    self.getProductById = function(id) {
        var deferred = $q.defer();
        var promise = self.getData();
        promise.then(
            function(data) {
                if (angular.isDefined(data.products[id])) {
                    deferred.resolve(new CatalogProduct(data.products[id]));
                }
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );

        return deferred.promise;
    };

    self.getProductByUrlKey = function(key) {
        var deferred = $q.defer();
        var promise = self.getData();
        promise.then(
            function(data) {
                if (angular.isDefined(data)) {
                    for (var id in data.products) {
                        var product = data.products[id];
                        if (angular.isDefined(data.products[id])) {
                            if (product.url_key === key) {
                                deferred.resolve(new CatalogProduct(product));
                                break;
                            }
                        }
                    }
                }
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );

        return deferred.promise;
    };

    self.getProductByGencode = function(genc) {
        var deferred = $q.defer();
        var promise = self.getData();
        promise.then(
            function(data) {
                if (angular.isDefined(data)) {
                    for (var id in data.products) {
                        var product = data.products[id];
                        if (angular.isDefined(data.products[id])) {
                            if (product.gencode === genc) {
                                deferred.resolve(new CatalogProduct(product));
                                break;
                            }
                        }
                    }
                }
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );
        return deferred.promise;
    };

    self.getProductBySku = function(sku) {
        var deferred = $q.defer();
        var promise = self.getData();
        promise.then(
            function(data) {
                if (angular.isDefined(data)) {
                    for (var id in data.products) {
                        var product = data.products[id];
                        if (angular.isDefined(data.products[id])) {
                            if (product.sku === sku) {
                                deferred.resolve(new CatalogProduct(product));
                                break;
                            }
                        }
                    }
                }
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );

        return deferred.promise;
    };

    self.getSiblings = function(id, attributes) {
        if (!angular.isDefined(attributes)) { attributes = {}; }

        var deferred = $q.defer();
        var promise = self.getProductById(id);
        promise.then(
            function(product) {
                if (angular.isDefined(product.sibling_ids)) {
                    var siblings = {};
                    for (var i in product.sibling_ids) {
                        var valid = true;
                        var sibling = self.getProductById(product.sibling_ids[i]);
                        if (Object.keys(attributes).length) {
                            for (var code in attributes) {
                                if (valid && angular.isDefined(sibling[code])) {
                                    if (sibling[code] !== attributes[code].toString()) {
                                        valid = false;
                                    }
                                }
                            }
                        }

                        if (valid && angular.isDefined(sibling)) {
                            siblings[sibling.id] = sibling;
                        }
                    }

                    deferred.resolve(siblings);
                }
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );


        return deferred.promise;
    };

    self.getParents = function(id) {
        var deferred = $q.defer();
        var promise = self.getProductById(id);
        promise.then(
            function(product) {
                if (angular.isDefined(product.parent_ids)) {
                    var parents = {};
                    for (var i in product.parent_ids) {
                        var parent = self.getProductById(product.parent_ids[i]);
                        if (angular.isDefined(parent)) { parents[parent.id] = parent; }
                    }

                    deferred.resolve(parents);
                }
            },
            function(error) { deferred.reject(error); },
            function(notify) { deferred.notify(notify); }
        );

        return deferred.promise;
    };

    if (StorageService.get('catalog_version')) {
        if (Math.round(parseInt(date.getTime() / 1000)) > parseInt(StorageService.get('catalog_version'))) {
            StorageService.remove('catalog');
            StorageService.remove('catalog_version');
        }
    } else {
        StorageService.remove('catalog');
    }
});

'use strict';

var bytelApp = angular.module('bytelApp');

bytelApp.factory('RuleService', function($q, Customer) {
    
    return {

        process: function(item, scheme, quote) {            
            var deferred = $q.defer();
            
            if (!angular.isObject(item)) { throw new Error("Validation price rules failed, invalid item data."); }
            if (!angular.isDefined(scheme)) { throw new Error("Validation price rules failed, invalid scheme."); }
    	    if (Customer.isPreventel()) {
    	    	if (Customer.getPreventel().default_range.indexOf(scheme) >= 0) {
    	    	    if (Customer.getPreventel().range.indexOf(scheme) == -1) {
    	    		switch (scheme) {
    	    		    case 'premium':
    	    		    case 'faim':
        		    case 'sowo':
        			console.log('Blocage PRV!!');
        			console.log('Gamme(s) disponible(s): ', (Customer.getPreventel().range.join(',')));
        			alert("Suite au scoring effectué sur cet acheteur, l'offre '" + scheme.toUpperCase() + "' sélectionnée n'est pas disponible en télévente. \nMerci d'orienter l'acheteur vers un point de vente Bouygues Telecom. \n\nLes gammes suivantes sont disponibles: " + Customer.getPreventel().range.join(',').toUpperCase());

    		            	deferred.reject({
    		            	    scheme: scheme,
    		            	    item: item,
    		            	    preventel: {
    		            		range: Customer.getPreventel().range, 
    		            		message:"Suite au scoring effectué sur cet acheteur, " 
        		            		+ "l'offre '" + scheme.toUpperCase() + "' sélectionnée n'est pas disponible en télévente. " 
        		            		+ "Merci d'orienter l'acheteur vers un point de vente Bouygues Telecom. " 
        		            		+ "Les gammes suivantes sont disponibles: " + Customer.getPreventel().range.join(',').toUpperCase()
    		            	    }
		        	});
    		            
            		        break;
            			
        		    default:
        			break;
            		}
    	    	    }
            	}
    	    }
    	
            deferred.resolve(quote);
            return deferred.promise;
        },
    
        validate: function(quote) {
            if (!angular.isObject(quote)) { throw new Error("Validation failed. Empty quote!"); }
            if (angular.isObject(quote.items)) {
        	console.log(quote.items, Customer.getPreventel());
        	for (var id in quote.items) {
        	    var item = quote.items[id];
                    var product = item.getProduct();
                    if (angular.isDefined(product)) {
                        if(!('rules' in product)){
                            return true;
                        }
                        if (item.params.qty > product.rules.max_sale) {
                            throw new Error("Qty limit exceeded");
                        }
                        if (angular.isObject(item.params.options)) {
                            for (var optionId in item.params.options) {
                                if (!item.hasOption(optionId)) {
                                    throw new Error("Validation failed. Unknown option");
                                } else if (!angular.isDefined(item.getOption(optionId).values[item.params.options[optionId]])) {
                                    throw new Error("Validation failed. Unknown option value");
                                } else if (!angular.isDefined(item.getOption(optionId).values)) {
                                    throw new Error("Validation failed. Empty option values");
                                }
                            }
                        }
                        
                    } else {
                        throw new Error("Validation failed. Product source undefined");
                    }
                }
                
                return true;
            }
            
            throw new Error("Validation failed. Quote items required.");
        }
    };
});
'use strict';

var bytelApp = angular.module('bytelApp');


function CartItem(data, product) {

    var self = this;

    self.params = data;
    self.source = product;

    self.isValid = function() {
        return angular.isDefined(self.getProductId());
    };
    self.hasProduct = function() {
        if (self.getProduct()) {
            return true;
        }

        return false;
    };
    self.getProductId = function() {
        if (angular.isDefined(self.params.product)) {
            return parseInt(self.params.product);
        };
    };
    self.getProduct = function() {
        if (angular.isDefined(self.source)) {
            return self.source;
        }
    };
    self.getObligation = function() {
        if (self.hasOptions()) {
            var options = self.getOptions();
            for (var optionId in options) {
                var option = options[optionId];
                if (option.type.toLowerCase() === 'obligation') {
                    if (angular.isDefined(self.params.options[optionId])) {
                        option.value = option.values[self.params.options[optionId]];
                    }

                    return option;
                }
            }
        }

        return false;
    };
    self.hasObligation = function() {
        if (self.getObligation()) {
            return true;
        }

        return false;
    };

    self.hasOption = function(optionId) {
        if (self.hasOptions()) {
            if (self.getOption(optionId)) {
                return true;
            }
        }

        return false;
    };
    self.hasOptions = function() {
        return Object.keys(self.getOptions()).length >= 1;
    };
    self.getOption = function(optionId) {
        if (self.hasOptions()) {
            var options = self.getOptions();
            if (angular.isDefined(options[optionId])) {
                return options[optionId];
            }
        }

        return false;
    };
    self.getOptions = function() {
        var options = {};
        if (angular.isDefined(self.params.options)) {
            for (var optionId in self.params.options) {
                if (angular.isDefined(self.getProduct().options)) {
                    if (angular.isDefined(self.getProduct().options[optionId])) {
                        var option = self.getProduct().options[optionId];
                        options[optionId] = option;
                        options[optionId].id = optionId;
                    }
                }
            }
        }

        return options;
    };
    self.getName = function() {
        if (self.hasObligation()) {
            var value = self.getObligation().value;
            if (angular.isDefined(value) && angular.isDefined(value.id)) {
                return value.title;
            }
        }

        return self.getProduct().name;
    };
    self.getPrice = function(paymentMethod) {
        if (self.hasObligation()) {
            var value = self.getObligation().value;
            if (angular.isDefined(value) && angular.isDefined(value.id)) {
                if (paymentMethod && paymentMethod == 'edp'){
                    return parseFloat(value.edp_price);
                } else {
                    return parseFloat(value.price);
                }
            }
        }

        return parseFloat(self.getProduct().price);
    };
    self.getSpecialPrice = function() {
        if (self.hasObligation()) {
            var value = self.getObligation().value;
        }

        return parseFloat(self.getProduct().special_price);
    };
    self.getType = function() {
        if (angular.isDefined(self.getProduct())) {
            return self.getProduct().type_id;
        }
    };
    self.getDataEnvelope = function() {
        if (angular.isDefined(self.getProduct())) {
            return self.getProduct().data_envelope;
        }
    };

    self.isProductType = function(type) {
        switch (type) {           
            case 'plan' :
                return self.getProduct().isPlan();

            case 'plan_sowo' :
                return self.getProduct().isPlanSowo();

            case 'plan_premium' :
                return self.getProduct().isPlanPremium();

            case 'fai' :
                return self.getProduct().isFai();
          
            case 'faim' :
                return self.getProduct().isFaimSowo() || self.getProduct().isFaimPremium();

            case 'faim_sowo':
                return self.getProduct().isFaimSowo();

            case 'faim_premium':
                return self.getProduct().isFaimPremium();

            case 'phone' :
                return self.getProduct().isPhone();

            case 'box' :
                return self.getProduct().isBox();

            case 'accessory' :
                return self.getProduct().isAccessory();

            default:
                return false;
        }
    };

    if (!angular.isObject(self.params)) { self.params = {}; }
    if (!angular.isDefined(self.params.qty)) { self.params.qty = 1; }
}


bytelApp.service('Cart', function Cart($q, $window, StorageService, Customer, Catalog) {

    var self = this;
    var date = new Date();

    self.PREMIUM_SCHEME_CODE = 'premium';
    self.SOWO_SCHEME_CODE = 'sowo';
    self.FAIM_SCHEME_CODE = 'faim';
    self.FAIM_PREMIUM_SCHEME_CODE = 'faim_premium';
    self.SHOP_SCHEME_CODE = 'shop';
    self.FAI_SCHEME_CODE = 'fai';
    
    self.quote = {items: {}, scheme:{}, shipping_method: false};
    
    self.isRescue = function() {
        if (!angular.isDefined(RESCUE_ENABLED) || !RESCUE_ENABLED) {
            return false;
        }

        if (StorageService.get('RESCUE_CHECKOUT')) {
            return true;
        }
    };

    self.isPro = function() {
        var plan = self.getPlan();
        if (!plan) {
            plan = self.getFaim();
        }
        
        if (plan) {
            if (plan.params.related_product && plan.params.related_product.indexOf(self.getProOptionId()) != -1) {
                return true;
            } else if (angular.isDefined(plan.params.attributes)) { 
        	if (angular.isDefined(plan.params.attributes.enterprise) && plan.params.attributes.enterprise) {
        	    return true;
        	}
            }
        }

        var phone = self.getPhone();
        if (phone) {
            if (phone.params.related_product && phone.params.related_product.indexOf(self.getProOptionId()) != -1) {
                return true;
            }
        }
        
        var box = self.getBox();
        if (box) {
            if (box.params.related_product && box.params.related_product.indexOf(self.getProOptionId()) != -1) {
                return true;
            }
        }

        return false;
    };

    self.isLocked = function() {
        var plan = self.getPlan();
        return (plan &&  plan.params.related_product
                && plan.params.related_product.indexOf(self.getLockedOptionId()) != -1);
    };


    self.isSelfservice = function() {
        var plan = self.getPlan();
        if (plan && angular.isDefined(plan.params.libreservice)) {
            return plan.params.libreservice;
        }
        return false;
    };

    self.isShop = function() {
        return self.SHOP_SCHEME_CODE === self.getScheme();
    };

    self.isSowo = function() {
        return self.SOWO_SCHEME_CODE === self.getScheme() || self.FAIM_SCHEME_CODE === self.getScheme();
    };

    self.isPremium = function() {
	return self.PREMIUM_SCHEME_CODE === self.getScheme() || self.FAIM_PREMIUM_SCHEME_CODE === self.getScheme();
    };

    self.hasPhonePremium = function() {
	if (self.hasPhone()) {
	    if (angular.isDefined(self.getPhone().params.selectedPayment)) {
        	if (self.getPhone().params.selectedPayment == 'edp') {
        	    
        	    return true;
        	}  
	    }
        }
	
        return false;
    };
    
    self.isMobile = function() {
        return self.isMobileSowo() || self.isMobilePremium();
    };

    self.isFaim = function() {
        return self.isFaimSowo() || self.isFaimPremium();
    };

    self.isFai = function() {
    return self.FAI_SCHEME_CODE === self.getScheme()
    };
    
    self.isMobileSowo = function() {
        return self.SOWO_SCHEME_CODE === self.getScheme();
    };
    
    self.isMobilePremium = function() {
        return self.PREMIUM_SCHEME_CODE === self.getScheme();
    };
    
    self.isFaimSowo = function() {
        return self.FAIM_SCHEME_CODE === self.getScheme();
    };
    
    self.isFaimPremium = function() {
        return self.FAIM_PREMIUM_SCHEME_CODE === self.getScheme();
    };
    
    self.getProductByType = function(type, first) {
        if (!angular.isDefined(first)) {
            var first = true;
        }
        
        var products = [];
        if (angular.isDefined(self.quote)) {
            var quote = self.quote;
            
            if (angular.isDefined(quote.items)) {
                for (var id in quote.items) {
                    var item = quote.items[id];
                    if (item.isProductType(type)) {
                        if (first) {
                            return item;
                        } else {
                            products.push(item);
                        }
                    }
                }
            }
        }
        
        if (products.length == 0) {
            return false;            
        }
        
        return products;
    };

    self.getPlan = function() {
        return self.getProductByType('plan');
    };

    self.getPlanSowo = function() {
        return self.getProductByType('plan_sowo');
    };
    
    self.getPlanPremium = function() {
        return self.getProductByType('plan_premium');
    };
   
    self.getFaim = function() {
    return self.getProductByType('faim');
    };

    self.getFai = function() {
    return self.getProductByType('fai');
    };
    
    self.getFaimSowo = function() {
        return self.getProductByType('faim_sowo');
    };
    
    self.getFaimPremium = function() {
        return self.getProductByType('faim_premium');
    };

    self.getAccessories = function() {
        return self.getProductByType('accessory', false);
    };

    self.getBox = function() {
        return self.getProductByType('box');
    };
    
    self.getPhone = function() {
        return self.getProductByType('phone');
    };
    
    self.hasPlan = function() {
        return self.getPlan() !== false;
    };
    
    self.hasPlanSowo = function() {
        return self.getPlanSowo() !== false;
    };

    self.hasPlanPremium = function() {
        return self.getPlanPremium() !== false;
    };

    self.getPhysicalProduct = function(){
        var product;
        if(self.hasBox()){
            product = self.getBox();
        }
        if(self.hasPhone()){
            product = self.getPhone();
        }
        return product;
    };
    
    self.hasAccessory = function() {
        if (self.getProductByType('accessory')) {
            return true;
        }

        return false;
    };

    self.hasFaim = function() {
        return self.getFaim() !== false;
    };

    self.hasFai = function() {
        return self.getFai() !== false;
    };

    self.hasXdsl = function() {
        var xdsl = 'ADSL|VDSL';
        if (self.hasFai() && angular.isDefined(self.getFai().source)) {
            return xdsl.indexOf(self.getFai().source.technology) > -1; 
        }
        return false;
    }
    
    self.hasFaimSowo = function() {
        return self.getFaimSowo() !== false;
    };
    
    self.hasFaimPremium = function() {
        return self.getFaimPremium() !== false;
    };
    
    self.hasPhone = function() {
        return self.getPhone() !== false;
    };

    self.hasBox = function() {
        return self.getBox() !== false;
    };
    
    self.hasInsurance = function() {
        var phone = self.getPhone();

        if (phone) {
            var options = phone.params.related_product;

            if (options && angular.isDefined(phone.source.insurance)) {
                var assuranceId = phone.source.insurance.id;

                if (options.indexOf(assuranceId) != -1) {
                    return true;
                }
            }
            return false;
        }
    };
    
    self.getItemPrice = function(item, paymentMethod) {
    
       if (item.getProduct().isPlan()
            && !item.getProduct().isFai()
            && Customer.isMultiline()) {
            if (Customer.getMultiline().product_ids.indexOf(item.getProduct().sku) !== -1) {
                return parseFloat(item.getPrice()) * parseFloat(Customer.getMultiline().ratio_promo);
            } else {
                return parseFloat(item.getPrice() * parseFloat(Customer.getMultiline().ratio));
            }
        }

        return item.getPrice(paymentMethod);
    };

    self.getVersion = function() {
        if (StorageService.get('quote_version') !== null) {
            return StorageService.get('quote_version');
        }
    };

    self.getScheme = function() {
        if (StorageService.get('scheme') !== null) {
            return StorageService.get('scheme');
        }
    };
    self.setScheme = function(scheme) {
        StorageService.set('scheme', scheme);
        return self;
    };
    self.removeScheme = function(scheme) {
        StorageService.remove('scheme');
        StorageService.remove('quote_version');
        return self;
    };
    self.getPorta = function() {
        if (StorageService.get('porta') !== null) {
            return StorageService.get('porta');
        }
    };
    self.setPorta = function(porta) {
        StorageService.set('porta', porta);
        return self;
    };
    self.removeInputLocal = function() {
        StorageService.remove('inputLocal');
        return self;
    };
    self.removeSteps = function() {
        StorageService.remove('steps');
        return self;
    };
    self.removeTmpInfos = function() {
        StorageService.remove('eligibility');
        StorageService.remove('eligibilitythd');
        StorageService.remove('entonnoir');
        StorageService.remove('entonnoircodeInsee');
        StorageService.remove('entonnoircodeLogement');
        StorageService.remove('entonnoircodePostal');
        StorageService.remove('entonnoirnumeroVoie');
        StorageService.remove('entonnoireligLastname');
        StorageService.remove('entonnoircodeVoie');
        StorageService.remove('mode');
        return self;
    };
    self.showPlanOffred = function() {
        var plan = self.getPlan();
        return ( plan && ( plan.getDataEnvelope() == '40Go' ||
                 plan.getDataEnvelope() == '10Go' ||
                 (plan.getType() == 'plan_premium' && plan.getDataEnvelope() == '5Go')));
    };

    self.scheme = function(quote, item) {
        var key = item.getProductId();
        var scheme = quote.scheme;
        if (angular.isDefined(self.getScheme())) {
            if (!angular.isDefined(scheme[self.getScheme()])) {
                scheme[self.getScheme()] = {};
            }
        }

        if ('rules' in item.getProduct()) {
            var limit = item.getProduct().rules.max_sale_by_type;
            if (angular.isDefined(limit) && limit == 1) {
                key = item.getType();
            }
        }
        
        switch (item.getType()) {
            case 'box':
            case 'faim':
            case 'faim_premium':
            case 'fai':
            case 'phone_simple':
            case 'plan_sowo':
            case 'plan_premium':
            case 'option':
            case 'accessory':
                scheme[self.getScheme()][key] = item.getProductId();
                break;
    
            default:
                if (!angular.isDefined(scheme.shop)) { scheme.shop = {}; }
                scheme.shop[item.getProductId()] = item.getProductId();
                break;

        }

        return scheme;
    };

    self.getQuoteId = function () {
        if (angular.isDefined(self.quote.id)) {
            return self.quote.id;
        }
    };

    self.getPaymentMethod = function(){
        if (self.hasPhone()) {
            if ((self.getScheme() == 'sowo' || self.getScheme() == 'phone_simple') && self.getPhone().params.selectedPayment == 'edp') {
                self.setPaymentMethod(1);
            }
            if(typeof(self.getPhone().params.selectedPayment) == 'undefined'){
                return 1;
            }
            return self.getPhone().params.selectedPayment;
        } else if (self.hasBox()) {
            if (self.getScheme() == 'faim') {
                if(typeof(self.getBox().params.selectedPayment) == 'undefined'){
                    return 1;
                }
            }

            return self.getBox().params.selectedPayment;
        } else {
            return 1;
        }
    };

    self.setPaymentMethod = function(paymentMethod) {
        if (self.hasPhone()) {
            self.getPhone().params.selectedPayment = paymentMethod;
        } else if (self.hasBox()) {
            self.getBox().params.selectedPayment = paymentMethod;
        }

        return self;
    }
    
    self.getQuoteType = function() {
        return self.quote.type;
    };

    self.setQuoteType = function(type) {
        self.quote.type = type;
        return self;
    }
    
    self.removeQuoteType = function(type) {
        delete self.quote.type;
        return self;
    }
    
    self.getShippingMethod = function() {
        return self.quote.shipping_method;
    };

    self.setShippingMethod = function(shippingMethod) {
        self.quote.shipping_method = shippingMethod;
        return self;
    }
    
    self.getShippingPrice = function() {
	if (self.getShippingMethod()) {
	    if (angular.isDefined(shippingMethods[self.getQuoteType()])) {
		var methods  = shippingMethods[self.getQuoteType()];
		if (angular.isDefined(methods[self.getShippingMethod()])) {
		    var method  = methods[self.getShippingMethod()];
		    if (angular.isDefined(method.price)) {
			return method.price;
		    }
    		}
	    }
	}
	
	return 0;
    };
    
    self.getEligibility = function() { 
        var elig = 'eligibility';
        if (self.hasFai()) {
            if (self.getFai().source.technology == 'THD'){
                elig = 'eligibilitythd';
            }
        }
        return StorageService.get(elig);
    }
    
    self.getEligibilityAddress = function() { 
    	var eligibility_address = '';
    	var eligibility = self.getEligibility();
         
    	if (eligibility) {
            if (angular.isDefined(eligibility.resultat) && angular.isDefined(eligibility.resultat.adresseInstallation)  ) {
        	eligibility_address = eligibility.resultat.adresseInstallation;
            }
    	}
    	return eligibility_address;
    }
   
    self.getSimPrice = function(item) {
        var price = 0;
        var product = item.getProduct();
        var porta = self.getPorta();
        if (product.isSowo()) {
            if('simPrice' in CONFIG && CONFIG.simPrice.sowo.active == 1){
                price = CONFIG.simPrice.sowo.default;
                if(porta == 1){
                    price = CONFIG.simPrice.sowo.portability;
                }
            }
        } else if(product.isPremium()) {
            if('simPrice' in CONFIG && CONFIG.simPrice.premium.active == 1){
                price = CONFIG.simPrice.premium.default;
                if(porta == 1){
                    price = CONFIG.simPrice.premium.portability;
                }
            }
        }
        price = parseFloat(price)
        return price;
    };

    self.getTotals = function () {
        var totals = {
            recurring: 0,
            base: 0
        };
        
        if (angular.isDefined(self.quote)) {
            var quote = self.quote;
            for (var id in quote.items) {
                var item = quote.items[id];
                if(('cofidis' in item.getProduct()) && (self.getPaymentMethod() == '3' || self.getPaymentMethod() == '12' || self.getPaymentMethod() == '24')) {
                    var product = item.getProduct(),
                        cofidis = product.cofidis;
                    for(var i = 0;i<cofidis.length;i++) {
                        if(cofidis[i].nb_term == self.getPaymentMethod()) {
                            totals.base += parseFloat(cofidis[i].other_term_amount);
                        }
                    }
                } else {
                    if(self.getPaymentMethod() == 'edp' && item.getProduct().isPhone()){
                        totals.recurring += parseFloat(item.getProduct().funding.amount);
                    }
                    if(item.getProduct().isFai()){
                        if (item.getProduct().additional_wide_area > 0){
                            totals.recurring += parseFloat(item.getProduct().additional_wide_area);
                        }
                    }
                    if (item.getProduct().isPlan() || item.getProduct().isOption()) {
                        totals.recurring += parseFloat(self.getItemPrice(item));
                        totals.base += self.getSimPrice(item);
                    } else {
                        if (self.getPaymentMethod() == 'edp' && item.getProduct().isPhone()){
                            totals.base += parseFloat(self.getItemPrice(item, 'edp'));
                        } else {
                            totals.base += parseFloat(self.getItemPrice(item));
                        }
                    }
                }

                if (item.getProduct().isPhone() && self.hasInsurance()) {
                    totals.recurring += parseFloat(item.getProduct().insurance.amount);
                }
            }
            
            if (!self.isFai()) {
                if (self.getShippingMethod()) {
                    if (self.getShippingPrice() > 0) {
            	    	totals.base += parseFloat(self.getShippingPrice());
                    }
                }
            }
            
            if (self.getCoupon() && self.getCoupon().code != ''){
                totals.defaultBase = totals.base;
                totals.base -= parseFloat(self.getCouponTotal());
            }
        }
        return totals;
    };


    self.prepare = function(item) {
        var deferred = $q.defer();
        var quote = self.quote;
        if (angular.isObject(item.getProduct())) {
            if (!angular.isDefined(self.getScheme())) {
                self.setScheme(self.SHOP_SCHEME_CODE);
            }
            
            switch (item.getType()) {
                case 'box':                
                case 'phone_simple':

                if (self.hasPhone()) {
                        var currentPhone = self.getPhone();
                        if (item.getProductId() != currentPhone.getProductId()) {
                            self.removeRelatedItems(currentPhone, item);
                            StorageService.set('change_phone', true);
                        }
                    }
                  
                    if (item.hasObligation()) {
                    var value = item.getObligation().value;
                        if (angular.isDefined(value) && angular.isDefined(value.id)) {
                            if (angular.isDefined(self.catalog.products[value.id])) {
                                var product = self.catalog.products[value.id];
                                quote = self.prepare(
                                    new CartItem({'product': value.id}, new CatalogProduct(product))
                                );
                            }
                        }
                    } else if (item.isProductType('box') && !self.isFaimSowo()) {
                	self.setScheme(self.FAIM_SCHEME_CODE);
                    } else if (item.isProductType('phone') && !self.isMobileSowo()) {
                	self.setScheme(self.SHOP_SCHEME_CODE);
                    }

                    break;

                case 'plan_sowo':
                    self.setScheme(self.SOWO_SCHEME_CODE);
                    if (angular.isDefined(quote.scheme.shop)) {
                        if (angular.isDefined(quote.scheme.shop.phone_simple)) {
                            if (angular.isDefined(self.catalog.products[quote.scheme.shop.phone_simple])) {
                                var product = self.catalog.products[quote.scheme.shop.phone_simple];
                                quote = self.prepare(
                                    new CartItem({'product': quote.scheme.shop.phone_simple}, new CatalogProduct(product))
                                );
                            }
                        }
                    }
                    break;

                case 'plan_premium':
                    self.setScheme(self.PREMIUM_SCHEME_CODE);
                    break;

                case 'faim':
                    self.setScheme(self.FAIM_SCHEME_CODE);
                    break;
                    
                case 'fai':
                    self.setScheme(self.FAI_SCHEME_CODE);
                    break;

                case 'faim_premium':
                    self.setScheme(self.FAIM_PREMIUM_SCHEME_CODE);
                    break;
                    
                default:
                    if (!angular.isDefined(self.getScheme())) {
                        self.setScheme(self.SHOP_SCHEME_CODE);
                    }
                    break;
            }
            
            
            if (!item.isValid()) {
                throw new Error('Invalid quote item data');
            } else {
                quote.scheme = self.scheme(quote, item);
                quote.items[item.getProductId()] = item;
            }
        }

        return quote;
    };
    self.clean = function(quote) {
        if (angular.isDefined(quote) && angular.isDefined(self.getScheme())) {
            if (angular.isObject(quote.items)) {
                for (var key in quote.scheme) {
                    if (key !== self.getScheme()) {
                        delete quote.scheme[key];
                    }
                }

                for (var id in quote.items) {
                    var item = quote.items[id];
                    if (!angular.isDefined(quote.scheme.shop) || !angular.isDefined(quote.scheme.shop[id])) {
                        if (angular.isDefined(quote.scheme[self.getScheme()])) {       
                            if (!angular.isDefined(quote.scheme[self.getScheme()][id])) {
                                if (!angular.isDefined(quote.scheme[self.getScheme()][item.getType()])
                                    || parseInt(id) !== quote.scheme[self.getScheme()][item.getType()]) {
                                    item.deleted = true;
                                }
                            }
                        } else {
                            item.deleted = true;
                        }
                    }

                    if (item.deleted === true) {
                        delete quote.items[id];
                    }
                }

                return quote;
            }
        }

        return {};
    };
    self.getLockedOptionId = function () {
        return "165";
    };
    
    self.getProOptionId = function () {
        return "167";
    };
    
    self.save = function(data) {
        if (!angular.isDefined(data)) {
            data = self.quote;
        }
        
        var date = new Date();
        StorageService.set('quote_version', Math.round(parseInt(date.getTime() / 1000)));
        StorageService.set('quote', self.clean(data));
        
        return self;
    };
    
    self.redirect = function(url) {
        if (angular.isDefined(url)) {
            $window.location = url;
        }
    };

    self.addCoupon = function(data) {
        self.quote.coupon = data;
    };

    self.getCoupon = function() {

        if (angular.isDefined(self.quote) && angular.isDefined(self.quote.coupon)) {
            return self.quote.coupon;
        }
        return false;
    };

    self.getCouponTotal = function() {
        var coupon = self.getCoupon();
        var couponTotal = 0;

        if (typeof(coupon.items) != 'undefined') {
            for (var id in coupon.items) {
                couponTotal += coupon.items[id];
            }
        }

        return couponTotal;
    };

    self.add = function(data) {
        var deferred = $q.defer();
        var quote = self.quote;
        
        Catalog.getData(angular.isDefined(data.type_id) ? data.type_id : null).then(
            function(catalog) {
                self.catalog = catalog;
                var id = data.product;
                if (angular.isDefined(self.catalog.products[id])) {
                    try {
                        var product = new CatalogProduct(self.catalog.products[id]);
                        var item = new CartItem( data, product);
                        var quote = self.prepare( item );
                        if (Catalog.validate(quote)) {
                            var rules = Catalog.rules(item, self.getScheme(), quote);
                            rules.then(
                                function(quote) {
                                    if (self.getScheme() == 'shop' && self.hasPhone()) {
                        		self.setQuoteType('phone');
                        	    } else if (self.getScheme() == 'sowo' && self.hasPhone()) {
                        		self.setQuoteType('phone_sowo');
                        	    } else if (self.getScheme() == 'faim' && self.hasBox()) {
                        		self.setQuoteType('box_faim');
                        	    } else if (self.getScheme() == 'faim' && !self.hasFaimSowo()) {
                        		self.setQuoteType('device');
                        	    } else {
                        		self.setQuoteType(self.getScheme());
                        	    }
                                    
                                    deferred.resolve(quote);

                                    self.save(quote);
                                    self.redirect(self.redirectUrl);
                                },
                                function(error) { 
                                    deferred.reject(error); 
                                }
                            );
                        }
                    } catch (error) {
                        deferred.reject(error);
                    }
                }
            }
        );

        return deferred.promise;
    };

    self.getListOptions = function(locked, enterprise) {
        var list = [];
        if (angular.isDefined(locked) && locked) {
            list.push(Cart.getLockedOptionId());
        }
        if (angular.isDefined(enterprise) && enterprise) {
            list.push(self.getProOptionId());
        }
      
        return  list;
    };

    self.clear = function() {
        self.removeScheme()
            .removeInputLocal()
            .removeSteps()
            .removeTmpInfos();

        self.save({items: {}, scheme:{}, coupon: {}});
    }


    self.remove = function(id) {
        var deferred = $q.defer();
        var quote = self.quote;
        if (angular.isDefined(quote)) {
            if (angular.isDefined(quote.items[id])) {
                var item = quote.items[id];
                for (var scheme in quote.scheme) {
                    for (var key in quote.scheme[scheme]) {
                        if (parseInt(id) === key || parseInt(id) === quote.scheme[scheme][key]) {
                            delete quote.scheme[scheme][key];
                        }
                    }
                    if (!Object.keys(quote.scheme[scheme]).length) {
                        delete quote.scheme[scheme];
                    }
                }

                var scheme = self.getScheme();
                if (angular.isDefined(quote.scheme[scheme]) && Object.keys(quote.scheme[scheme]).length < 1) {
                    self.removeScheme()
                    	.removeQuoteType();
                    
                } else if ((item.getProduct().isPlan() && scheme === self.SOWO_SCHEME_CODE)) {
                    self.removeScheme()
                	.removeQuoteType();
                    
                    if (self.hasPhone()) {
                        var phone = self.getPhone();
                        if (angular.isDefined(phone.getProduct().id)) {
                            quote.scheme.shop = {};
                            quote.scheme.shop[phone.getProduct().type] = parseInt(phone.getProduct().id);
                            self.setScheme(self.SHOP_SCHEME_CODE)
                            	.setQuoteType('phone');
                        }
                    }
                } else if (item.getProduct().isPhone() && scheme === self.PREMIUM_SCHEME_CODE) {
                    self.setScheme(self.PREMIUM_SCHEME_CODE)
        		.setQuoteType(self.PREMIUM_SCHEME_CODE);
            
                } else if (item.getProduct().isPhone() && scheme === self.SOWO_SCHEME_CODE) {
                    self.setScheme(self.SOWO_SCHEME_CODE)
    			.setQuoteType(self.SOWO_SCHEME_CODE);
        
            	} else if (item.getProduct().isBox() && scheme === self.FAIM_PREMIUM_SCHEME_CODE) {
                    self.setScheme(self.FAIM_PREMIUM_SCHEME_CODE)
            		.setQuoteType(self.FAIM_PREMIUM_SCHEME_CODE);
                    
                } else if ((item.getProduct().isPlan()) && scheme === self.PREMIUM_SCHEME_CODE) {
                    if (self.hasPhone()) {
                        var phone = self.getPhone();
                        if (angular.isDefined(quote.items[phone.getProduct().id])) {
                            self.remove(phone.getProduct().id);
                            self.setScheme(self.SHOP_SCHEME_CODE)
                        	.removeQuoteType();
                        }
                    }
                } else if ((item.getProduct().isPlan()) && self.isFaimPremium()) {
                    if (self.hasBox()) {
                        var box = self.getBox();
                        if (angular.isDefined(quote.items[box.getProduct().id])) {
                            self.remove(box.getProduct().id);
                            self.setScheme(self.FAIM_SCHEME_CODE)
                        	.setQuoteType(self.FAIM_SCHEME_CODE);
                        }
                    }
                } else if (item.getProduct().isFai() && self.hasBox()) {
                    var box = self.getBox();
                    if (angular.isDefined(quote.items[box.getProduct().id])) {
                        self.remove(box.getProduct().id);
                        self.setScheme(self.SHOP_SCHEME_CODE)
                	    .removeQuoteType();
                    }
                }
                
                self.removeRelatedItems(item);

                delete quote.items[id];

                self.save(quote);
                deferred.resolve(quote);
            }
        }
            
        return deferred.promise;
    };
    
    self.removeRelatedItems = function(parentItem, newProduct) {
        var quote = self.quote;
        
        var newRelated = [];
        if (typeof(newProduct) !== 'undefined') {
            if (typeof(newProduct.source.crosssell_ids) !== 'undefined') {                
                newRelated = newProduct.source.crosssell_ids;
            }
        }
        
        var productId = parentItem.getProductId();
        var crosssellIds = parentItem.source.crosssell_ids;
        
        if (typeof(crosssellIds) !== 'undefined') {
            for (var id in quote.items) {
                var item = quote.items[id];
                
                if (crosssellIds.indexOf(String(item.getProductId())) !== -1 && newRelated.indexOf(String(item.getProductId())) === -1) {
                    self.remove(item.getProductId());
                }
            }
        }
        
        return;
    };

    self.getItemById = function(itemId) {
        if (angular.isDefined(self.quote)) {
            var quote = self.quote;

            if (angular.isDefined(quote.items) && typeof(quote.items[itemId]) != 'undefined') {
                return quote.items[itemId];
            }
        }

        return false;
    };

}).run(['$rootScope', 'StorageService', 'CartLinker', function($rootScope, StorageService) {
    var date = new Date();
    if (StorageService.get('RESCUE_CHECKOUT')) {
        if (!RESCUE_ENABLED || Math.round(parseInt(date.getTime() / 1000)) > parseInt(StorageService.get('RESCUE_CHECKOUT'))) {
            StorageService.remove('RESCUE_CHECKOUT');
        }
    }
    
    var data = StorageService.get('quote');
    if (angular.isObject(data) && angular.isObject(data.items) && angular.isDefined(data.scheme)) {
	if (!angular.isDefined($rootScope.Cart)) {
	    $rootScope.Cart = {};   
	}
	
	if (!angular.isDefined($rootScope.Cart.quote)) {
	    $rootScope.Cart.quote = {};   
	}
	
	$rootScope.Cart.quote.timestamp = $rootScope.Cart.getVersion();
	$rootScope.Cart.quote.scheme = data.scheme;
	$rootScope.Cart.quote.type = data.type;
    	
        if (angular.isDefined(data.id)) {
            $rootScope.Cart.quote.id = data.id;
        }
        
        for (var id in data.items) {
             var product = new CatalogProduct(data.items[id].source);
             $rootScope.Cart.quote.items[id] = new CartItem(data.items[id].params, product);
        }

        if (angular.isObject(data.coupon)) {
            $rootScope.Cart.quote.coupon = data.coupon;
        }
    }
}]);

'use strict';

var bytelApp = angular.module('bytelApp');


bytelApp.service('CartLinker', function CartLinker($q, $location, Cart, Catalog, StorageService) {

    var self = this;
   
    self.run = function (path) {
	if (angular.isDefined(path)) {
            var related = [];
            var selectedPayment = 1;
            var hash = $location.path();
            var paths = hash.match(/^\/?(add|update|type)\/(.*)$/i);
            if (paths) {
                if (angular.isDefined(paths[2])) {
                    if (angular.isDefined(paths[1])) {
                        var action = paths[1].toUpperCase();
                        switch (action) {
                            case 'TYPE':
                            case 'ADD':
                                Cart.clear();
                            case 'UPDATE':
                            default:
                        }
                    }
    
                    hash = paths[2];
                    var options = hash.match(/^(3x|12x|24x|edp)?\/?(pack-|genc\/)?([^_\/]*)?_?([^\/]*)+\/?(bloque|pro)?$/i);
                    if (options) {
                        if (angular.isDefined(options[3])) {
                            hash = options[3];
                        }
    
                        if (angular.isDefined(options[1])) {
                            switch (options[1].toUpperCase()) {
                                case '3X':
                                    selectedPayment = 3;
                                    break;
                                case '12X':
                                    selectedPayment = 12;
                                    break;
                                case '24X':
                                    selectedPayment = 24;
                                    break;
                                case 'EDP':
                                    selectedPayment = 'edp';
                                    break;
                                default:
                                    selectedPayment = 1;
                            }
                        }
    
                        if (angular.isDefined(options[5])) {
                            switch (options[5].toUpperCase()) {
                                case 'PRO':
                                    related.push(Cart.getProOptionId());
                                    break;
                                case 'BLOQUE':
                                    related.push(Cart.getLockedOptionId());
                                    break;
                                default:
                            }
                        }
    
                        if (angular.isDefined(options[2])) {
                            switch (options[2].toUpperCase()) {
                                case 'GENC/':
                                    Catalog.getProductByGencode(hash.toLowerCase()).then(
                                        function (product) {
                                            if (angular.isDefined(product)) {
                                                Cart.add({product: product.id, related_product: related, selectedPayment: selectedPayment}).then(
                                                    function (quote) {  }
                                                );
                                            }
                                        }
                                    );
                                case 'PACK-':
                                    Catalog.getProductByUrlKey(options[4].toLowerCase()).then(
                                        function (plan) {
                                            if (angular.isDefined(plan)) {
                                                hash = plan.url_key;
                                                Catalog.getProductByUrlKey(options[3].toLowerCase()).then(
                                                    function (item) {
                                                        if (angular.isDefined(item)) {
                                                            if ('plan_premium' === plan.type.toLowerCase()) {
                                                                for (var i in item.options) {
                                                                    var option = item.options[i];
                                                                    if ('obligation' === option.type) {
                                                                        for (var j in option.values) {
                                                                            var value = option.values[j];
                                                                            if (parseInt(value.id) === parseInt(plan.id)) {
                                                                                var obligation = {};
                                                                                obligation[i] = j;
                                                                                Cart.add({product: item.id, options: obligation, selectedPayment: selectedPayment}).then(
                                                                                    function (quote) {
                                                                                        if (angular.isDefined(quote.items[plan.id])) {
                                                                                            quote.items[plan.id].params.related_product = related;
                                                                                            Cart.save(quote);
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else if ('plan_sowo' === plan.type.toLowerCase()) {
                                                                Cart.add({product: item.id}).then(
                                                                    function (quote) {
                                                                        Cart.add({product: plan.id, related_product: related, selectedPayment: selectedPayment}).then(
                                                                            function (quote) {  }
                                                                        );
                                                                    }
                                                                );
                                                            } else if ('faim' === plan.type.toLowerCase()) {
                                                                Cart.add({product: plan.id, related_product: related}).then(
                                                                        function (quote) {
                                                                            Cart.add({product: item.id, selectedPayment: selectedPayment}).then(
                                                                                function (quote) {  }
                                                                            );
                                                                        }
                                                                    );
                                                                }
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    );
                                    break;
    
                                default:
                            }
    
                        } else {
                            if ('TYPE' === action) {
                        	Cart.setScheme(paths[2].toLowerCase());
                            } else {
                                Catalog.getProductByUrlKey(hash.toLowerCase()).then(
                                    function (product) {
                                        if (angular.isDefined(product)) {
                                            Cart.add({product: product.id, related_product: related, selectedPayment: selectedPayment}).then(
                                                function (quote) {  }
                                            );
                                        }
                                    }
                                );
                            }
                        }
    
                    }
                }
                
            } else if (!Object.keys(Cart.quote.items).length) {
        	Cart.removeScheme();
            }
        }
    };
}).run(['CartLinker', '$location', function(CartLinker, $location) {
    
    CartLinker.run($location.path());
}]);
'use strict';

angular.module('lodash', [])
  .factory('_', function lodashFactory($window) {
    var _ = $window._;
    try {
      delete $window._;
    } catch (e) {
      // You're using IE 8 :'(
    }
    return _;
  });
'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.controller('PrivatBrowsingCtrl', function ($scope) {
    $scope.blocked = false;

    var storage;
    var fail;
    var uid;
    try {
        uid = new Date;
        (storage = window.localStorage).setItem(uid, uid);
        fail = storage.getItem(uid) != uid;
        storage.removeItem(uid);
        fail && (storage = false);
    } catch (exception) {
        $scope.blocked = true;
    }

    if((!localStorage && !sessionStorage) || (typeof(localStorage) == null && typeof(sessionStorage) == null)){
        $scope.blocked = true; 
    }
});
'use strict';

var bytelApp = angular.module('bytelApp');
bytelApp.controller('PartnerController', function($scope, $http, $window, Partner) {
	
	var self = $scope;
	
	self.partner = Partner;
	
	self.initialize = function (code) {
		if (typeof(code) != 'undefined') {
			Partner.setData('code', code);
			Partner.save();			
		}
	};
	
	self.logout = function() {
		Partner.logout();
	};
});
tagClick = function(label, cart, paymentMethod, shippingMethod, optin, StorageService) {
    var paymentMethod     = (typeof(paymentMethod) == 'undefined') ? null : paymentMethod;
    var shippingMethod     = (typeof(shippingMethod) == 'undefined') ? null : shippingMethod;
    var optin             = (typeof(optin) == 'undefined') ? null : optin;
    var customer = null == StorageService ? null:StorageService.get('customer');
    var contract_id = (null == customer || typeof(customer) == 'undefined' || typeof(customer.person_number) == 'undefined') ? null:
                      customer.person_number;

    try {
        if (typeof(tc_events_5) !== 'undefined') {

            var totals         = cart.getTotals();
            var operator       = '';
            var inputLocal     = JSON.parse(localStorage.getItem('inputLocal'));

            if (inputLocal && typeof(inputLocal.portability) != 'undefined') {
                var portability = parseInt(inputLocal.portability);
                var portabilityNumber = inputLocal.portability_number;
                var rio         = inputLocal.rio;

                if (typeof(portability) != 'undefined' && portability && rio != null) {
                    switch (rio.substr(0, 2)) {
                        case '01' :
                            operator = 'Orange';
                            break;

                        case '02' :
                            operator = 'SFR';
                            break;

                        case '03' :
                            operator = 'Bouygues';
                            break;

                        case '04' :
                            operator = 'Free';
                            break;

                        default :
                            operator = 'Autre';
                            break;
                    }
                }
            }

            var productsItems     = [];
            var items             = cart.quote.items;

            var i = 1;

            angular.forEach(items, function(item) {
                var product = item.getProduct();
                var params = '';

                var manufacturer = '';
                if (product.manufacturer) {
                    manufacturer = product.manufacturer;
                }

                params += 'product' + i + '_id=' + product.id + ';';
                params += 'product' + i + '_name=' + product.name_tag + ';';
                params += 'product' + i + '_category=' + product.category_tag + ';';
                params += 'product' + i + '_trademark=' + manufacturer + ';';
                params += 'product' + i + '_unitprice_ati=' + product.price;
                productsItems.push(params);
                i++;
            });


            var products = productsItems.join('||');

            switch (paymentMethod) {
                case 'atoswps' :
                    var paymentMethodId = 13;
                    break;

                case 'cofidis3x' :
                    var paymentMethodId = 10;
                    break;

                case 'euro' :
                    var paymentMethodId = 11;
                    break;

                case 'edp' :
                    var paymentMethodId = 14;
                    break;
                    
                case 'free' :
                	var paymentMethodId = 15;
                	break;

                default:
                    var paymentMethodId = null;
                    break;
            }


            switch (shippingMethod) {
                case 'owebiashipping1_colissimo' :
                    var shippingMethodId = 1;
                    break;

                case 'owebiashipping2_firstClassMail' :
                    var shippingMethodId = 3;
                    break;

                case 'relaiscolis_relaiscolis' :
                    var shippingMethodId = 2;
                    break;

                default:
                    var shippingMethodId = null;
                    break;
            }

            var quoteId = (typeof(cart.getQuoteId()) == 'undefined') ? null : cart.getQuoteId();

            var quoteType = cart.getScheme();
            if (quoteType== 'sowo' && cart.hasPhone()) {
                quoteType = 'phone_sowo';
            }


            console.log({'LABEL': label,
                'xiti_xtidcart': quoteId,
                'order_amount': totals.base,
                'order_o3': quoteType,
                'order_o4': contract_id,
                'order_o5': operator,
                'order_discount_ati':'',
                'order_payment_methods': paymentMethodId,
                'order_delivery_mode': shippingMethodId,
                'order_promo_codes':'',
                'order_optin': optin,
                'products': products});


            return tc_events_5(this, label, {
                'xiti_xtidcart': quoteId,
                'order_amount': totals.base,
                'order_o3': quoteType,
                'order_o4': contract_id,
                'order_o5': operator,
                'order_discount_ati':'',
                'order_payment_methods': paymentMethodId,
                'order_delivery_mode': shippingMethodId,
                'order_promo_codes':'',
                'order_optin': optin,
                'products': products
            });
        }
    } catch (e) {
        console.warn('Probleme de tag');
        console.warn(e);
    }
};

tagFormErrors = function(label, form) {
    if (typeof(tc_events_5) !== 'undefined') {

        var errors = form.$error;
        var formErrors = [];
        for (var error in errors) {
            var listError = errors[error];
            for (var i in listError) {
                formErrors.push(listError[i].$name);
            }
        }

        var listErrors = formErrors.join('|');

        return tc_events_5(this, 'CLICK', {'XTCLICK_EVENT':'C','XTCLICK_S2':tc_vars['xiti_xtn2_id'],'LABEL':tc_vars['xiti_xtn2_id']+'_'+label + '::formulaire::erreur::' + listErrors,'XTCLICK_TYPE':'A'});
    }
};

tagCheckFilter = function(label) {
    if (typeof(tc_events_3) !== 'undefined') {
        /*console.log({'XTCLICK_EVENT':'C','XTCLICK_S2':'1','LABEL':label+'::filtres','XTCLICK_TYPE':'A'});*/
        return tc_events_3(this, 'CLICK',{'XTCLICK_EVENT':'C','XTCLICK_S2':'1','LABEL':label+'::filtres','XTCLICK_TYPE':'A'});
    }
};

tagClickFai = function(label) {
	console.warn('TAG FAI ' + label);
	try {
        if (typeof(tc_events_7) !== 'undefined') {
        	tc_events_7(this, 'CLICK', {'XTCLICK_EVENT':'F','XTCLICK_S2':'3','LABEL':'Internet::' + label,'XTCLICK_TYPE':''});
        } 
    } catch (e) {
        console.warn('Probleme de tag');
        console.warn(e);
    }
};
