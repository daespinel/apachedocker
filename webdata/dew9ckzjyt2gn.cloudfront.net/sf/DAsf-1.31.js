!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(require,module,exports){/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * DACX SafeFrame v1.31 -- 2015-09-10T17:06:23
*/
!function(window,document){function loadScript(a,b){var c=document.createElement("script");c.src=a,c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!=c.readyState&&"complete"!=c.readyState||(c.onload=c.onreadystatechange=null,b&&"function"==typeof b&&b())},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}function initSafeframe(){function receiveMessage(a){var b,c;try{if(b=JSON.parse(a.data),c=AD_MAP[b.arid],!c||stripProtocol(a.origin)!==stripProtocol(SF_DOMAIN)||"object"!=typeof b.data)throw"Invalid Message: "+JSON.stringify(a.data)}catch(d){var e="Received Error: "+a.data;return"undefined"!=typeof b&&(e+=appendErrorDetails(b.arid)),void logError(e,d,ERROR_TYPE.WARN)}c.options.debug&&"undefined"!=typeof console&&console.log(a);try{var f=SupportedCommands[b.command];f&&f(c,b.data)}catch(d){var e="Problem with message: "+a.data;"undefined"!=typeof b&&(e+=appendErrorDetails(b.arid)),logError(e,d,ERROR_TYPE.WARN)}}function appendJsScript(a,b,c){var d=document.createElement("script");d.charset=c||"utf-8",d.src=a,b.appendChild(d)}function scriptValidator(a,b){var c=/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/,d=a.match(c)[2];return d==b}function sizeValidator(a,b){return a.height==b.height&&a.width==b.width}function checkAgainstWhitelist(a,b,c){if(!b||"object"!=typeof b)return!1;for(var d=0,e=b.length;e>d;d++)if(c(a,b[d]))return!0;return!1}function openFeedback(a,b){if("function"==typeof window.DA.s)window.DAF=[a,b],window.DA.s(window.DA.f+"-external");else if("function"==typeof window.d16g_showFeedbackDialog){var c={a:b,c:a};window.d16g_showFeedbackDialog(c)}else{var d="Unable to open feedback popover (campaign:"+a+") aanParams: "+b;logError(d,null,ERROR_TYPE.ERROR)}}function getQueryParams(){var a={};try{for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("="),f=e[0];e.length>1&&0===f.indexOf("sf-")&&(a[f]=e[1])}}catch(g){logError("Error parsing query parameters",g,ERROR_TYPE.ERROR)}return a}function sendCsmMetric(a,b){var c=csmFunctionHash[a];"function"==typeof window[c]&&window[c](a,b,{wb:1})}function stripProtocol(a){return a.replace(/^.{1,5}:\/\/|^\/\//,"")}function hasClass(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=a.className;return d&&c.test(d)}function customMessage(a,b){if(MSG_LISTENERS[a])try{MSG_LISTENERS[a](b)}catch(c){logError("Custom Message Error",c)}else logError("Unrecognized custom message key: "+a,null,ERROR_TYPE.ERROR)}function createIframeWithName(a){var b=document.createElement("iframe");return b.name=a,b}function createSafeFrame(a){try{var b,c=JSON.stringify(a),d=document.getElementById(a.slot);if(/MSIE (6|7|8)/.test(navigator.userAgent))try{b=document.createElement("<iframe name='"+c+"'>")}catch(e){b=createIframeWithName(c)}else b=createIframeWithName(c);b.src=SF_HTML,b.scrolling="no",b.height=a.size.height||"250px",b.width=a.size.width||"300px",b.className=a.iframeClass||"",b.setAttribute("frameborder","0"),b.setAttribute("marginheight","0"),b.setAttribute("marginwidth","0"),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("allowfullscreen",""),b.setAttribute("mozallowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.setAttribute(ARID_ATTR,a.arid),b.style.cssText=a.iframeExtraStyle||"",b.a=a.aanParams||{},b.f=a.feedbackJsUrl||1,b.c=a.campaignId,b.isSafeframeGoldbox="goldbox-ads"==a.slotName,b.boolFeedback=a.boolFeedback,a.showInlineFeedback&&(b.ifp=a.inlineFeedbackParams||{}),d.appendChild(b),sendCsmMetric("cf",a.slot),AD_MAP[a.arid]={slot:d,iframe:b,options:a}}catch(f){logError("Error creating safeFrame",f)}}function delayLoad(a,b){if("windowOnLoad"===a)"complete"===document.readyState?b():util.addWindowListener("load",b);else if("spATFEvent"===a)hasP?P.when("search-page-utilities").execute(function(a){a.afterEvent("spATFEvent",b)}):hasAmznJQ?amznJQ.available("search-js-general",function(){SPUtils.afterEvent("spATFEvent",b)}):b();else if("criticalFeature"===a)hasP?P.when("cf").execute(b):hasAmznJQ?amznJQ.onCompletion("amznJQ.criticalFeature",b):b();else if("r2OnLoad"===a)hasP?P.when("r2Loaded").execute(b):hasAmznJQ?amznJQ.onReady("r2Loaded",b):b();else if(a.match("[^:]+:.+")){var c=a.split(":");if(c.length>1){var d=c[0].split("."),e=c[1],f=c.length>2?c[2]:e;hasP?P.when(f,"A").execute(b):hasAmznJQ&&d.length>1?amznJQ[d[1]](e,b):b()}else b()}else b()}function collapseSlot(a){slotDiv=document.getElementById(a),"undefined"!=typeof slotDiv&&(slotDiv.style.display="none")}function appendErrorDetails(a){var b="";if("undefined"!=typeof AD_MAP[a]){var c=AD_MAP[a].options;"undefined"!=typeof c.aanResponse&&(b=" Ad Details: "+JSON.stringify(c.aanResponse))}return b}function logError(a,b,c){b=b||new Error(a),c!=ERROR_TYPE.WARN&&(window.ueLogError?window.ueLogError(b,{logLevel:c||ERROR_TYPE.ERROR,attribution:"DACX-safeframe",message:a+" "}):"undefined"!=typeof console&&console.error&&console.error(a,b))}function logCounter(a,b){hasUeCount&&ue.count(a,b)}function renderViewableAds(a,b){var c=!0;for(var d in VIEWABLE_ADS){var e=VIEWABLE_ADS[d].iframe?VIEWABLE_ADS[d].iframe.contentWindow:null;if(e&&!VIEWABLE_ADS[d].alreadyRendered){c=!1;var f=VIEWABLE_ADS[d].slot;viewability.findPercentInView(f)>=a?VIEWABLE_ADS[d].timeout||(VIEWABLE_ADS[d].timeout=setTimeout(renderAdMessage(d),b)):VIEWABLE_ADS[d].timeout&&(clearTimeout(VIEWABLE_ADS[d].timeout),VIEWABLE_ADS[d].timeout=null)}}c&&(util.removeWindowListener("scroll",debouncedViewabilityHandler),util.removeWindowListener("resize",debouncedViewabilityHandler))}function viewabilityHandler(){return renderViewableAds(viewability.PERCENT_VIEWABLE,viewability.DURATION_VIEWABLE)}function renderAdMessage(a){return function(){var b={key:"readyToRender",data:a};sendMessageToAd(a,"customMessage",b),VIEWABLE_ADS[a].timeout=null,VIEWABLE_ADS[a].alreadyRendered=!0}}function sendMessageToAd(a,b,c){var d=AD_MAP[a].iframe?AD_MAP[a].iframe.contentWindow:null;if(d){var e={command:b,data:c};e=JSON.stringify(e),d.postMessage(e,"*")}}function loadAdSequence(a){return function(){var b=a.slot;if(b){var c=document.getElementById(b);c&&!c.innerHTML&&(createSafeFrame(a),loadAdFeedback(a))}}}function appendFeedbackLink(a){try{"function"==typeof d16g_addFeedbackLink&&!a.isFeedbackLoaded&&a.boolFeedback&&(a.isFeedbackLoaded=!0,d16g_addFeedbackLink(a))}catch(b){}}function modifyExistingIframes(){for(var a in AD_MAP){var b=AD_MAP[a].iframe;appendFeedbackLink(b)}}function loadAdFeedback(a){try{if(window.DA){if("undefined"==typeof AD_MAP[a.arid])throw"No ad slot found for ARID "+JSON.stringify(a.arid);var b=AD_MAP[a.arid].iframe,c="function"!=typeof d16g_addFeedbackLink?1e3:0;setTimeout(function(){appendFeedbackLink(b)},c)}else a.daJsUrl&&(window.DA=window.DA||[],loadScript(a.daJsUrl,modifyExistingIframes))}catch(d){logError("Problem loading ad feedback ",d)}}var viewability=require("./components/viewability"),util=require("./components/util");if(window.DAsf)return void window.DAsf.loadAds();window.DAsf={version:"1.31"};var SF_TYPE="text/x-dacx-safeframe",SF_HTML="//dew9ckzjyt2gn.cloudfront.net/sf/sf-1.31.html",SF_DOMAIN="//dew9ckzjyt2gn.cloudfront.net",ARID_ATTR="data-arid",hasP="undefined"!=typeof P,hasAmznJQ="undefined"!=typeof amznJQ,hasUeCount=window.ue&&"function"==typeof ue.count,ERROR_TYPE={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},CUSTOM_METRICS={POST_MESSAGE_UNSUPPORTED:"d16g_postMessageUnsupported",POST_MESSAGE_SUPPORTED:"d16g_postMessageSupported"},AD_MAP={},MSG_LISTENERS={},VIEWABLE_ADS={},SupportedCommands={changeSize:function(a,b){var c=a.options.allowedSizes;if(checkAgainstWhitelist(b,c,sizeValidator))a.iframe.height=b.height,a.iframe.width=b.width;else{var d="Size is not whitelisted: "+b.width+" x "+b.height+appendErrorDetails(a.options.arid);logError(d)}},collapseSlot:function(a){collapseSlot(a.options.slot),"nav-sitewide-msg"===a.options.slotName&&delayLoad("amznJQ.available:navbarJSLoaded",function(){"undefined"!=typeof parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(a,b){var c=a.options.allowedDomains;if(checkAgainstWhitelist(b.src,c,scriptValidator))a.slot=document.getElementById(a.options.slot),"undefined"!=typeof a.slot&&appendJsScript(b.src,a.slot,b.charset);else{var d="Domain is not whitelisted: "+b.src+appendErrorDetails(a.options.arid);logError(d)}},adFeedback:function(a){openFeedback(a.options.campaignId,a.options.aanParams)},logError:function(a,b){logError(b.message+appendErrorDetails(a.options.arid),b.error,b.level)},sendMetrics:function(a,b){sendCsmMetric(b.metric,a.options.slot)},customMessage:function(a,b){customMessage(b.key,b.body)},adDetails:function(a,b){a.options.aanResponse=b.aanResponse},notifyWhenViewable:function(a){VIEWABLE_ADS[a.options.arid]||(a.rendered=!1,VIEWABLE_ADS[a.options.arid]=a),debouncedViewabilityHandler(),util.addWindowListener("scroll",debouncedViewabilityHandler),util.addWindowListener("resize",debouncedViewabilityHandler)},safeFrameReady:function(a){var b={ivp:viewability.findPercentInView(a.iframe)};sendMessageToAd(a.options.arid,"updateViewability",b)}},csmFunctionHash={wb:"ues",bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};util.addWindowListener("message",receiveMessage);var debouncedViewabilityHandler=util.debounce(viewabilityHandler,100);window.DAsf.registerCustomMessageListener=function(a,b,c){var d=!1;try{if(!MSG_LISTENERS[a]||"function"!=typeof MSG_LISTENERS[a]||c)MSG_LISTENERS[a]=b,d=!0;else{var e=new Error("Custom message listener already exists for key: "+a);logError("Duplicate Key",e,ERROR_TYPE.WARN)}}catch(f){logError("Error registering custom message listener",f)}return d},window.DAsf.sendCustomMessage=function(a,b){var c={key:a,data:b};for(var d in AD_MAP)sendMessageToAd(d,"customMessage",c)},window.DAsf.isSafeframeAd=function(a){var b=!1;return"string"==typeof a&&(b="undefined"!=typeof AD_MAP[a]),b},window.DAsf.getAdDetails=function(a){if(!window.DAsf.isSafeframeAd(a))return!1;var b=AD_MAP[a].options.aanResponse||{},c={creativeId:b.creativeId||"",adId:b.adId||"",adNetwork:AD_MAP[a].options.adServer||"",hostName:AD_MAP[a].options.hostDomain||"",iframe:AD_MAP[a].iframe};return c},window.DAsf.openAdFeedback=function(a){try{var b=AD_MAP[a];openFeedback(b.options.campaignId,b.options.aanParams)}catch(c){logError("Error opening feedback",c)}},window.DAsf.loadAds=function(){var indx=0,tag=null,tags=[];if("function"!=typeof document.getElementsByClassName){var divs=document.getElementsByTagName("div"),scripts=document.getElementsByTagName("script"),i=0;for(i=0;i<divs.length;i++)tags[i]=divs[i];for(i=0;i<scripts.length;i++)tags[i+divs.length]=scripts[i]}else tags=document.getElementsByClassName(SF_TYPE);for(0===tags.length&&(tags=document.getElementsByTagName("script"));tag=tags[indx++];)if("DIV"==tag.tagName&&hasClass(tag,SF_TYPE)||tag.getAttribute("type")==SF_TYPE&&!tag.getAttribute(ARID_ATTR)){var data=tag.getAttribute("data-ad-details")||tag.text||tag.innerHTML||tag.innerText;try{data=/^\s*\(function\(\)/.test(data)?eval(data):JSON.parse(data),data.arid=data.arid||Math.random().toString(16).slice(2),tag.setAttribute(ARID_ATTR,data.arid),data.hostDomain=location.protocol+"//"+location.host,data.aanParams=decodeURIComponent(data.aanParams),data.allowedSizes="object"==typeof data.allowedSizes&&data.allowedSizes.length>=0?data.allowedSizes.concat(data.size):[data.size];var whitelistedDomains="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(data.allowedDomains="object"==typeof data.allowedDomains&&data.allowedDomains.length>=0?data.allowedDomains.concat(whitelistedDomains):whitelistedDomains,data.productAdsUrl=window.paSearchTowerAdsURL||window.paCusRevAllURL,data.parentLocation=location.origin||location.protocol+location.hostname,data.queryParams=getQueryParams(),sendCsmMetric("af",data.slot),"function"!=typeof window.postMessage){logCounter(CUSTOM_METRICS.POST_MESSAGE_UNSUPPORTED,1),collapseSlot(data.slot);continue}logCounter(CUSTOM_METRICS.POST_MESSAGE_SUPPORTED,1),delayLoad(data.loadAfter,loadAdSequence(data))}catch(err){data=null,logError("Error parsing sf tag",err)}}},window.DAsf.loadAds();var updateViewability=function(){var a,b,c,d;for(a in AD_MAP)b=AD_MAP[a],c=b.iframe,d={ivp:viewability.findPercentInView(c)},sendMessageToAd(a,"updateViewability",d)};updateViewability=util.throttle(updateViewability,1e3),util.addWindowListener("scroll",updateViewability),util.addWindowListener("resize",updateViewability)}"undefined"==typeof JSON?loadScript("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",initSafeframe):initSafeframe()}(window,document)},{"./components/util":2,"./components/viewability":3}],2:[function(a,b){/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
b.exports.debounce=function(a,b,d){var e,f,g,h,i,j=function(){var k=c()-h;b>k&&k>=0?e=setTimeout(j,b-k):(e=null,d||(i=a.apply(g,f),e||(g=f=null)))};return function(){g=this,f=arguments,h=c();var k=d&&!e;return e||(e=setTimeout(j,b)),k&&(i=a.apply(g,f),g=f=null),i}},b.exports.throttle=function(a,b,d){var e,f,g,h=null,i=0;d||(d={});var j=function(){i=d.leading===!1?0:c(),h=null,g=a.apply(e,f),h||(e=f=null)};return function(){var k=c();i||d.leading!==!1||(i=k);var l=b-(k-i);return e=this,f=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,g=a.apply(e,f),h||(e=f=null)):h||d.trailing===!1||(h=setTimeout(j,l)),g}};var c=function(){return Date.now?Date.now():(new Date).getTime()};b.exports.addWindowListener=function(a,b){window.addEventListener?window.addEventListener(a,b,!1):window.attachEvent&&window.attachEvent("on"+a,b)},b.exports.removeWindowListener=function(a,b){window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b)}},{}],3:[function(a,b){function c(a,b,c){var d=0;return d=a>0?c-a:b>0?Math.min(b,c):0,Math.min(d,b-a)}b.exports.PERCENT_VIEWABLE=.5,b.exports.DURATION_VIEWABLE=500,b.exports.findPercentInView=function(a){try{var d=a.getBoundingClientRect(),e=c(d.top,d.bottom,b.exports.windowHeight()),f=c(d.left,d.right,b.exports.windowWidth()),g=e*f,h=(d.bottom-d.top)*(d.right-d.left);return Math.min(1,Math.max(0,g/h))}catch(i){return null}},b.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}]},{},[1]);