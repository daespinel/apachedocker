!function(t){var e=function(e){this.options=t.extend({},t.smartbanner.defaults,e);var n=navigator.standalone;if(this.options.force){this.type=this.options.force}else if(navigator.userAgent.match(/iPad|iPhone|iPod/i)!==null&&navigator.userAgent.match(/Safari/i)!==null){if(window.Number(navigator.userAgent.substr(navigator.userAgent.indexOf("OS ")+3,3).replace("_","."))<6||navigator.userAgent.match(/Version/i)===null)this.type="ios"}else if(navigator.userAgent.match(/Android/i)!==null){this.type="android"}else if(navigator.userAgent.match(/Windows NT 6.2/i)!==null){this.type="windows"}else if(navigator.userAgent.match(/Windows Phone/i)!==null){this.type="windows-phone"}if(!this.type||n||this.getCookie("sb-closed")||this.getCookie("sb-installed")){return}this.scale=this.options.scale=="auto"?t(window).width()/window.screen.width:this.options.scale;if(this.scale<1)this.scale=1;var i,a,o;switch(this.type){case"windows":i='meta[name="msApplication-ID"]';a='meta[name="ms-store-rt-tracking"]';o=this.options.windowsRtConfig||null;break;case"windows-phone":i='meta[name="msApplication-WinPhonePackageUrl"]';a='meta[name="ms-store-phone-tracking"]';o=this.options.windowsPhoneConfig||null;break;case"android":i='meta[name="google-play-app"]';a='meta[name="google-play-app-tracking"]';o=this.options.androidConfig||null;break;case"ios":i='meta[name="apple-itunes-app"]';a='meta[name="apple-itunes-app-tracking"]';o=this.options.iphoneConfig||null;break}var s=t(i);var r=t(a);if(s.length===0)return;if(r.length===0)r=t('<meta name="" content="" />');if(this.type==="windows"){this.pfn=t('meta[name="msApplication-PackageFamilyName"]').attr("content");this.appId=s.attr("content")[1]}else if(this.type==="windows-phone"){this.appId=s.attr("content")}else{this.appId=/app-id=([^\s,]+)/.exec(s.attr("content"))[1]}this.appTracking=r.attr("content");if(o)t.extend(this.options,o);this.title=this.options.title?this.options.title:t("title").text().replace(/\s*[|\-\xb7].*$/,"");this.author=this.options.author?this.options.author:t('meta[name="author"]').length?t('meta[name="author"]').attr("content"):window.location.hostname;this.create();this.show();this.listen()};e.prototype={constructor:e,create:function(){var e,n,i=this.options.price?'<span class="sb-price">'+this.options.price+"</span> "+(this.type=="android"?this.options.inGooglePlay:this.type=="ios"?this.options.inAppStore:this.options.inWindowsStore):"",a=this.options.iconGloss;if(this.appTracking===""){switch(this.type){case"windows":n="ms-windows-store:PDP?PFN="+this.pfn;break;case"windows-phone":n="https://windowsphone.com/s?appId="+this.appId;break;case"android":n="market://details?id="+this.appId;break;case"ios":n="https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id"+this.appId;break}}else{n=this.appTracking}var o=this.options.container;if(t(o).length<1)return;t(o).append('<div id="smartbanner" class="'+this.type+'">'+'<div class="sb-container">'+'<a href="#" class="sb-close">&times;</a><span class="sb-icon"></span>'+'<div class="sb-info"><strong>'+this.title+"</strong><span>"+this.author+"</span><span>"+i+"</span></div>"+'<a href="'+n+'" target="_blank" class="sb-button"><span>'+this.options.button+"</span></a>"+"</div>"+"</div>");var s=t("#smartbanner");if(this.options.icon){e=this.options.icon}else if(t('link[rel="apple-touch-icon-precomposed"]').length>0){e=t('link[rel="apple-touch-icon-precomposed"]').attr("href")}else if(t('link[rel="apple-touch-icon"]').length>0){e=t('link[rel="apple-touch-icon"]').attr("href")}else if(t('meta[name="msApplication-TileImage"]').length>0){e=t('meta[name="msApplication-TileImage"]').attr("content")}else if(t('meta[name="msapplication-TileImage"]').length>0){e=t('meta[name="msapplication-TileImage"]').attr("content")}if(e){var r=t("#smartbanner .sb-icon");r.css("background-image","url("+e+")");if(a)r.addClass("gloss")}else{s.addClass("no-icon")}if(this.scale>1){s.css("top",parseFloat(s.css("top"))*this.scale).css("height",parseFloat(s.css("height"))*this.scale);t("#smartbanner .sb-container").css("-webkit-transform","scale("+this.scale+")").css("-msie-transform","scale("+this.scale+")").css("-moz-transform","scale("+this.scale+")").css("width",t(window).width()/this.scale)}},listen:function(){t("#smartbanner .sb-close").on("click",t.proxy(this.close,this));t("#smartbanner .sb-button").on("click",t.proxy(this.install,this))},show:function(e){var n=t("html");n.get(0).className=n.get(0).className+" smartBanner ";if(e)e()},hide:function(e){t("html").removeClass("smartBanner");if(e)e()},close:function(t){t.preventDefault();this.hide();this.setCookie("sb-closed","true",this.options.daysHidden)},install:function(t){this.hide();this.setCookie("sb-installed","true",this.options.daysReminder)},setCookie:function(t,e,n){var i=new Date;i.setDate(i.getDate()+n);e=encodeURIComponent(e)+(n===null?"":"; expires="+i.toUTCString());document.cookie=t+"="+e+"; path=/;"},getCookie:function(t){var e,n,i,a=document.cookie.split(";");for(e=0;e<a.length;e++){n=a[e].substr(0,a[e].indexOf("="));i=a[e].substr(a[e].indexOf("=")+1);n=n.replace(/^\s+|\s+$/g,"");if(n==t){return decodeURIComponent(i)}}return null},switchType:function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(t,e){if(this===undefined||this===null)throw new TypeError('"this" is null or not defined');var n=this.length>>>0;e=+e||0;if(Math.abs(e)===Infinity)e=0;if(e<0){e+=n;if(e<0)e=0}for(;e<n;e++)if(this[e]===t)return e;return-1}}var e=this;e.hide(function(){var n=["ios","android","windows","windows-phone"];var i=n.indexOf(e.type)+1;e.type=!n[i]?n[0]:n[i];var a=t(e.type=="android"?'meta[name="google-play-app"]':'meta[name="apple-itunes-app"]').attr("content");e.appId=/app-id=([^\s,]+)/.exec(a)[1];t("#smartbanner").detach();e.create();e.show();if(window.console&&console.log)console.log(e.type)})}};t.smartbanner=function(n){var i=t(window),a=i.data("typeahead"),o=typeof n=="object"&&n;if(!a)i.data("typeahead",a=new e(o));if(typeof n=="string")a[n]()};t.smartbanner.defaults={title:null,author:null,price:"FREE",priceText:"On the store",icon:null,button:"View in Store",appStoreLanguage:"us",inAppStore:"On the App Store",inGooglePlay:"In Google Play",inWindowsStore:"In the Windows Store",iconGloss:null,daysHidden:15,daysReminder:90,scale:"auto",container:"body",force:null,iphoneConfig:null,ipadConfig:null,androidConfig:null,androidTabsConfig:null,windowsPhoneConfig:null,windowsRtConfig:null};t.smartbanner.Constructor=e}(window.jQuery);var smartAppConfirm=function(t,e,n){if(!t)return;if(!("localStorage"in window)||window["localStorage"]===null)return;if(location.hash==="#inside-navigation")return;if(location.hash==="#reset")localStorage.removeItem("nativeApplication");var i=navigator.userAgent.toLowerCase(),a,o=1,s=localStorage.getItem("nativeApplication");if(a=new Date)o=String(a.getFullYear().toString()+"-"+(a.getMonth()+1).toString()+"-"+a.getDate().toString());if(!s||s!=o){localStorage.setItem("nativeApplication",o);var r,p=false;var l={android:Boolean(!p&&i.match(/android/)&&(screen.height<1024||screen.width<1024)),androidTab:Boolean(!p&&i.match(/android/)&&(screen.height>=1024||screen.width>=1024)),iphone:Boolean(!p&&i.match(/iphone|ipod/)),ipad:!p&&i.match(/ipad/),windowsPhone:!p&&i.match(/Windows Phone/),windowsRT:!p&&i.match(/Windows NT 6.2/)};var c=function(e){var n,i,a;switch(e){case"windowsRT":case"windows":n='meta[name="msApplication-ID"]';i='meta[name="ms-store-rt-tracking"]';a=t.windowsRtConfig||{};break;case"windowsPhone":case"windows-phone":n='meta[name="msApplication-WinPhonePackageUrl"]';i='meta[name="ms-store-phone-tracking"]';a=t.windowsPhoneConfig||{};break;case"android":case"androidTab":n='meta[name="google-play-app"]';i='meta[name="google-play-app-tracking"]';a=t.androidConfig||{};break;case"iphone":case"ipad":case"ios":n='meta[name="apple-itunes-app"]';i='meta[name="apple-itunes-app-tracking"]';a=t.iphoneConfig||{};break;default:return{appTracking:"",deviceOption:""}}var o=jQuery(n);var s=jQuery(i);if(o.length==0)return;if(s.length==0)s=jQuery('<meta name="" content="" />');var r=s.attr("content");return{appTracking:r,deviceOption:a}};var h=function(t,e){if(confirm(t)){try{var n=new URL(e.replace(/&amp;/g,"&"));var i=!!n.protocol&&!!n.hostname&&!!n.pathname?n.protocol+"//"+n.hostname+(n.port?":"+n.port:"")+n.pathname+(n.search?n.search:""):location.href=e.replace(/&amp;/g,"&");location.href=i}catch(a){location.href=e.replace(/&amp;/g,"&")}return true}};var d=function(t,e){var n=c(t);if(!n.appTracking||n.appTracking=="")return;if(n.deviceOption)jQuery.extend(e,n.deviceOption);r="Voulez-vous installer l'application \""+e.title+'" ?';h(r,n.appTracking)};if(t.force){if(l[t.force]!=undefined)d(t.force,t);else if(!!e)e();if(n)n();return}for(var m in l){if(!!p)break;if(!!l[m]){d(m,t);p=true}}}if(!p&&!!e)e();if(!!n)n();return};
//# sourceMappingURL=https://a.f1g.fr/h//assets-components/header-footer/jquery.app-banner.js.map