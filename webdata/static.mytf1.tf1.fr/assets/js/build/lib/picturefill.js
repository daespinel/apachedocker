window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),r=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",r.parentNode.insertBefore(t,r),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var r="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=r:t.textContent=r,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t){"use strict";function r(e){var t,r,n,s,o,a=e||{};t=a.elements||i.getAllElements();for(var c=0,l=t.length;l>c;c++)if(r=t[c],n=r.parentNode,s=void 0,o=void 0,r[i.ns]||(r[i.ns]={}),a.reevaluate||!r[i.ns].evaluated){if("PICTURE"===n.nodeName.toUpperCase()){if(i.removeVideoShim(n),s=i.getMatch(r,n),s===!1)continue}else s=void 0;("PICTURE"===n.nodeName.toUpperCase()||r.srcset&&!i.srcsetSupported||!i.sizesSupported&&r.srcset&&r.srcset.indexOf("w")>-1)&&i.dodgeSrcset(r),s?(o=i.processSourceSet(s),i.applyBestCandidate(o,r)):(o=i.processSourceSet(r),(void 0===r.srcset||r[i.ns].srcset)&&i.applyBestCandidate(o,r)),r[i.ns].evaluated=!0}}function n(){r();var n=setInterval(function(){return r(),/^loaded|^i|^c/.test(t.readyState)?void clearInterval(n):void 0},250);if(e.addEventListener){var i;e.addEventListener("resize",function(){e._picturefillWorking||(e._picturefillWorking=!0,e.clearTimeout(i),i=e.setTimeout(function(){r({reevaluate:!0}),e._picturefillWorking=!1},60))},!1)}}if(e.HTMLPictureElement)return void(e.picturefill=function(){});t.createElement("picture");var i={};i.ns="picturefill",i.srcsetSupported="srcset"in t.createElement("img"),i.sizesSupported=e.HTMLImageElement.sizes,i.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},i.endsWith=function(e,t){return e.endsWith?e.endsWith(t):-1!==e.indexOf(t,e.length-t.length)},i.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},i.getDpr=function(){return e.devicePixelRatio||1},i.getWidthFromLength=function(e){return e=e&&(parseFloat(e)>0||e.indexOf("calc(")>-1)?e:"100vw",e=e.replace("vw","%"),i.lengthEl||(i.lengthEl=t.createElement("div"),t.documentElement.insertBefore(i.lengthEl,t.documentElement.firstChild)),i.lengthEl.style.cssText="position: absolute; left: 0; width: "+e+";",i.lengthEl.offsetWidth<=0&&(i.lengthEl.style.cssText="width: 100%;"),i.lengthEl.offsetWidth},i.types={},i.types["image/jpeg"]=!0,i.types["image/gif"]=!0,i.types["image/png"]=!0,i.types["image/svg+xml"]=t.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#Image","1.1"),i.types["image/webp"]=function(){var t=new e.Image,n="image/webp";t.onerror=function(){i.types[n]=!1,r()},t.onload=function(){i.types[n]=1===t.width,r()},t.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},i.verifyTypeSupport=function(e){var t=e.getAttribute("type");return null===t||""===t?!0:"function"==typeof i.types[t]?(i.types[t](),"pending"):i.types[t]},i.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},i.findWidthFromSourceSize=function(e){for(var t,r=i.trim(e).split(/\s*,\s*/),n=0,s=r.length;s>n;n++){var o=r[n],a=i.parseSize(o),c=a.length,l=a.media;if(c&&(!l||i.matchesMedia(l))){t=c;break}}return i.getWidthFromLength(t)},i.parseSrcset=function(e){for(var t=[];""!==e;){e=e.replace(/^\s+/g,"");var r,n=e.search(/\s/g),i=null;if(-1!==n){r=e.slice(0,n);var s=r[r.length-1];if((","===s||""===r)&&(r=r.replace(/,+$/,""),i=""),e=e.slice(n+1),null===i){var o=e.indexOf(",");-1!==o?(i=e.slice(0,o),e=e.slice(o+1)):(i=e,e="")}}else r=e,e="";(r||i)&&t.push({url:r,descriptor:i})}return t},i.parseDescriptor=function(e,t){var r,n=t||"100vw",s=e&&e.replace(/(^\s+|\s+$)/g,""),o=i.findWidthFromSourceSize(n);if(s)for(var a=s.split(" "),c=a.length+1;c>=0;c--)if(void 0!==a[c]){var l=a[c],u=l&&l.slice(l.length-1);if("h"!==u&&"w"!==u||i.sizesSupported){if("x"===u){var d=l&&parseFloat(l,10);r=d&&!isNaN(d)?d:1}}else r=parseFloat(parseInt(l,10)/o)}return r||1},i.getCandidatesFromSourceSet=function(e,t){for(var r=i.parseSrcset(e),n=[],s=0,o=r.length;o>s;s++){var a=r[s];n.push({url:a.url,resolution:i.parseDescriptor(a.descriptor,t)})}return n},i.dodgeSrcset=function(e){e.srcset&&(e[i.ns].srcset=e.srcset,e.removeAttribute("srcset"))},i.processSourceSet=function(e){var t=e.getAttribute("srcset"),r=e.getAttribute("sizes"),n=[];return"IMG"===e.nodeName.toUpperCase()&&e[i.ns]&&e[i.ns].srcset&&(t=e[i.ns].srcset),t&&(n=i.getCandidatesFromSourceSet(t,r)),n},i.applyBestCandidate=function(e,t){var r,n,s;e.sort(i.ascendingSort),n=e.length,s=e[n-1];for(var o=0;n>o;o++)if(r=e[o],r.resolution>=i.getDpr()){s=r;break}s&&!i.endsWith(t.src,s.url)&&(t.src=s.url,t.currentSrc=t.src)},i.ascendingSort=function(e,t){return e.resolution-t.resolution},i.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var r=t[0],n=r.getElementsByTagName("source");n.length;)e.insertBefore(n[0],r);r.parentNode.removeChild(r)}},i.getAllElements=function(){for(var e=[],r=t.getElementsByTagName("img"),n=0,s=r.length;s>n;n++){var o=r[n];("PICTURE"===o.parentNode.nodeName.toUpperCase()||null!==o.getAttribute("srcset")||o[i.ns]&&null!==o[i.ns].srcset)&&e.push(o)}return e},i.getMatch=function(e,t){for(var r,n=t.childNodes,s=0,o=n.length;o>s;s++){var a=n[s];if(1===a.nodeType){if(a===e)return r;if("SOURCE"===a.nodeName.toUpperCase()){null!==a.getAttribute("src")&&void 0!==typeof console&&void 0;var c=a.getAttribute("media");if(a.getAttribute("srcset")&&(!c||i.matchesMedia(c))){var l=i.verifyTypeSupport(a);if(l===!0){r=a;break}if("pending"===l)return!1}}}}return r},n(),r._=i,"object"==typeof module&&"object"==typeof module.exports?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):"object"==typeof e&&(e.picturefill=r)}(this,this.document);