function error(msg) {
  var version = "2.5.9";
  var now = new Date();
  var dUrl = '';
  if (top === self) dUrl = window.location.href;
  else dUrl = document.referrer;
  if (dUrl === "") dUrl = parent.document.location.href;
  var content = [now, version, msg, dUrl].join('|');
  content += '|' + navigator.userAgent;
  var errorUrl = "//its.tradelab.fr/?type=debug&content=" + encodeURIComponent(content);
  var img = new Image();
  img.src = errorUrl;
  if ( typeof console != "undefined" ) console.log(content);
}

try {

(function(){

  if (typeof tldc === 'undefined') {
    window.tldc = {
      advid: '346414',
      domain: ''
    };
  }

  tldc.keyStr = "ABCDEFGHIJKLMNOP" +
    "QRSTUVWXYZabcdef" +
    "ghijklmnopqrstuv" +
    "wxyz0123456789+/" +
    "=";
  
  tldc.lSc = document.getElementsByTagName("script")[0];

tldc.decode64=function(a){var b="",d,c,f="",g,h="",e=0;/[^A-Za-z0-9\+\/\=]/g.exec(a);a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=tldc.keyStr.indexOf(a.charAt(e++)),c=tldc.keyStr.indexOf(a.charAt(e++)),g=tldc.keyStr.indexOf(a.charAt(e++)),h=tldc.keyStr.indexOf(a.charAt(e++)),d=d<<2|c>>4,c=(c&15)<<4|g>>2,f=(g&3)<<6|h,b+=String.fromCharCode(d),64!=g&&(b+=String.fromCharCode(c)),64!=h&&(b+=String.fromCharCode(f));while(e<a.length);return unescape(b)};
tldc.tl_urlencode=function(a){a=(a+"").toString();return encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")};
tldc.tl_stringify=function(a){var b=typeof a;if("object"!=b||null===a)return"string"==b&&(a='"'+a+'"'),String(a);var d,c,f=[],g=a&&a.constructor==Array;for(d in a)a.hasOwnProperty(d)&&(c=a[d],b=typeof c,"string"==b?c='"'+c+'"':"object"==b&&null!==c&&(c=tldc.tl_stringify(c)),f.push((g?"":'"'+d+'":')+String(c)));return(g?"[":"{")+String(f)+(g?"]":"}")};tldc.tl_getDomain=function(a){var b=/^(?:(?:https?|ftp):)?\/*(?:[^@]+@)?([^:/#]+)/.exec(a);return b?b[1].split(".").slice(-2).join("."):a};
tldc.tl_getReferrer=function(){var a="";if(top===self)a=document.referrer;else try{a=parent.document.referrer}catch(b){a=""}a=a.substr(a.indexOf("://")+3);return a=a.substr(0,255)};tldc.tl_getLocation=function(){var a="",a=top===self?window.location.href:document.referrer;""===a&&(a=parent.document.location.href);a=a.substr(a.indexOf("://")+3);return a=a.substr(0,255)};
tldc.tl_setCookie=function(a,b,d,c,f,g){var h;d&&(h=new Date,h.setTime(h.getTime()+d));document.cookie=a+"="+b+(d?";expires="+h.toGMTString():"")+";path="+(c||"/")+(f?";domain="+f:"")+(g?";secure":"")};tldc.tl_getCookie=function(a){return(a=(new RegExp("(^|;)[ ]*"+a+"=([^;]*)")).exec(document.cookie))?a[2]:0};tldc.tl_insertInDom=function(a){var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};
tldc.injectScript=function(a,b){var d=a.id,c=a.code,f=a.src,g=a.async,h=a.defer,e=document.createElement("script");e.type="text/javascript";d&&(e.id=d);g&&e.setAttribute("async","async");h&&e.setAttribute("defer","defer");e.readyState?e.onreadystatechange=function(){if("loaded"==e.readyState||"complete"==e.readyState)e.onreadystatechange=null,b()}:e.onload=function(){b()};f?e.src=f:e.text=tldc.decode64(c);tldc.lSc.parentNode.insertBefore(e,tldc.lSc)};
tldc.rLoad=function(a){for(var b=0;b<a.length;b++)tldc.injectScript(a[b],function(){})};tldc.tl_check4xconv=function(a){for(var b=0;b<tldc.ses.xconv.length;b++)if(parseInt(tldc.ses.xconv[b])===a)return!0;return!1};tldc.tl_addXconv=function(a){tldc.ses.xconv.push(a);tldc.tl_setSessionCookie(tldc.ses)};tldc.tl_addSeg=function(a){tldc.ses.seg.push(a);tldc.tl_setSessionCookie(tldc.ses)};tldc.tl_isSiteDomain=function(a){var b;b=tldc.domain.toLowerCase();return a===b?!0:!1};
tldc.tl_updateAnalyticsData=function(){if(!tldc.analytics_loaded){var a=Math.round((new Date).getTime()/1E3),b=tldc.tl_getDomain(tldc.referrer_url),d=tldc.vis||tldc.tl_loadVisitorCookie(),c=tldc.ses||tldc.tl_loadSessionCookie(),f=tldc.ref||tldc.tl_loadCampaignCookie(),g=!c.session;tldc.analytics_loaded=!0;d.total_page_cnt++;g?(c.session=!0,d.vis_cnt++,d.prev_vis_ts=d.curr_vis_ts,d.prev_page_cnt=d.curr_page_cnt,d.curr_page_cnt=1):d.curr_page_cnt++;d.curr_vis_ts=a;if(g||b!==tldc.domain&&tldc.referrer_url!==
f.ref_url)f.ref_url=tldc.referrer_url.slice(0,512),f.ref_ts=a,f.page_url=tldc.locationHref.slice(0,512),f.dm=tldc.domain,tldc.tl_setCampaignCookie(f),a=document.createElement("img"),a.style.position="absolute",a.style.height=0,a.style.width=0,a.setAttribute("id","imgTP"),a.src=document.location.protocol+"//its.tradelab.fr/?type=tp&advid="+tldc.advid+"&adata="+tldc.tl_getAnalyticsData(),tldc.tl_insertInDom(a);tldc.tl_setVisitorCookie(d);tldc.tl_setSessionCookie(c)}};
tldc.firePixel=function(a,b){var d=document.createElement("img"),c;d.style.position="absolute";d.style.height=0;d.style.width=0;c=document.location.protocol;c=("https:"===c?c+"//secure.adnxs.com/":c+"//ib.adnxs.com/")+("seg?add="+[].concat(a).join(","));null!==b&&(c+=":"+b);c+="&t=2";d.src=c;tldc.tl_insertInDom(d)};tldc.tl_sync=function(a){tldc.ses.uuid2=a;tldc.tl_setSessionCookie(tldc.ses);a=a.slice(-2);tldc.firePixel("2491894",a)};
tldc.tl_loadVisitorCookie=function(){var a=tldc.tl_getCookie("_tlv"),b=Math.round((new Date).getTime()/1E3);return a.length?(a=a.split("."),{vis_cnt:a[0],frst_vis_ts:a[1],prev_vis_ts:a[2],curr_vis_ts:a[3],total_page_cnt:a[4],prev_page_cnt:a[5],curr_page_cnt:a[6]}):{vis_cnt:0,frst_vis_ts:b,prev_vis_ts:0,curr_vis_ts:b,total_page_cnt:0,prev_page_cnt:0,curr_page_cnt:1}};
tldc.tl_loadCampaignCookie=function(){var a=tldc.tl_getCookie("_tlc"),b={ref_url:"",ref_ts:0,page_url:"",dm:""};return a.length?(a=-1<a.indexOf("|")?a.split("|"):a.split(":"),4!==a.length?b:{ref_url:a[0],ref_ts:a[1],page_url:a[2],dm:a[3]}):b};
tldc.tl_loadSessionCookie=function(){var a=tldc.tl_getCookie("_tls");return a?(a=a.split("."),"undefined"===typeof a[1]&&(a[1]=""),"undefined"===typeof a[2]&&(a[2]=""),"undefined"===typeof a[3]&&(a[3]=""),{session:!0,xconv:""===a[1]?[]:a[1].split(","),seg:""===a[2]?[]:a[2].split(","),uuid2:""===a[3]?"":a[3]}):{session:!1,xconv:[],seg:[],uuid2:""}};
tldc.tl_loadParamsCookie=function(){var a=tldc.tl_getCookie("_tlp"),b;b=[];var d={};if(a.length){b=a.split("#");b=b[0].split(",");for(a=0;a<b.length;a++){var c=[],c=b[a].split(":");d[c[0]]=c[1]}return{fsegs:d}}return{fsegs:{}}};tldc.tl_loadAnalyticsCookies=function(){tldc.ref=tldc.tl_loadCampaignCookie();tldc.vis=tldc.tl_loadVisitorCookie();tldc.ses=tldc.tl_loadSessionCookie()};
tldc.tl_getAnalyticsData=function(){var a=tldc.ref||tldc.tl_loadCampaignCookie(),b=tldc.vis||tldc.tl_loadVisitorCookie();return tldc.tl_urlencode(tldc.tl_stringify({c:a,v:b}))};tldc.tl_getParamsData=function(){var a=tldc.params||tldc.tl_loadParamsCookie();return tldc.tl_urlencode(tldc.tl_stringify(a))};
tldc.tl_setVisitorCookie=function(a){tldc.tl_setCookie("_tlv",a.vis_cnt+"."+a.frst_vis_ts+"."+(a.prev_vis_ts||"")+"."+a.curr_vis_ts+"."+a.total_page_cnt+"."+a.prev_page_cnt+"."+a.curr_page_cnt,tldc.config_visitor_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};tldc.tl_setSessionCookie=function(a){a="*."+a.xconv.join(",")+"."+a.seg.join(",")+"."+a.uuid2;tldc.tl_setCookie("_tls",a,tldc.config_session_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};
tldc.tl_setCampaignCookie=function(a){var b=[];b.push(encodeURIComponent(a.ref_url));b.push(a.ref_ts);b.push(encodeURIComponent(a.page_url));b.push(a.dm);tldc.tl_setCookie("_tlc",b.join(":"),tldc.config_referrer_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};tldc.tl_setParamsCookie=function(a){var b="";a=a.fsegs;var d=[],c;for(c in a)a.hasOwnProperty(c)&&d.push(c+":"+a[c]);b+=d.join(",");tldc.tl_setCookie("_tlp",b,tldc.config_params_cookie_timeout,tldc.config_cookie_path,tldc.config_cookie_domain)};
tldc.tl_initTagman=function(){if(""===tldc.domain||"undefined"===tldc.domain||"null"===tldc.domain)tldc.domain=tldc.tl_getDomain(location.hostname);tldc.analytics_loaded=!1;tldc.locationHref=tldc.tl_getLocation();tldc.referrer_url=tldc.tl_getReferrer();tldc.config_visitor_cookie_timeout=864E5;tldc.config_params_cookie_timeout=864E5;tldc.config_session_cookie_timeout=18E5;tldc.config_referrer_cookie_timeout=864E5;tldc.config_cookie_path="/";tldc.config_cookie_domain="."+tldc.domain;tldc.tl_setCookie("_tlc",
"",-1E4,"/",location.hostname);tldc.tl_setCookie("_tls","",-1E4,"/",location.hostname);tldc.tl_setCookie("_tlv","",-1E4,"/",location.hostname);tldc.tl_loadAnalyticsCookies();tldc.params=tldc.tl_loadParamsCookie();tldc.tl_updateAnalyticsData()};

   var dUrl = tldc.tl_getLocation(),
    scriptArray = [],
    n = 0;

  window.tl_sync = tldc.tl_sync;
  window.injectScript = tldc.injectScript;
  window.lSc = tldc.lSc;

  tldc.tl_initTagman();
  
  tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/11.js?add=1802882"}, function(){});
	if ( tldc.vis.vis_cnt > 1 ) {
		tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/11.js?add=1802884"}, function(){});
	}
	else {
		if ( tldc.vis.curr_page_cnt > 1 ) {
			tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/11.js?add=1802883"}, function(){});
		}
		else {
			setTimeout(function(){
				tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/11.js?add=1802883"}, function(){});
			}, 3000);
		}
	}
  
  if ( dUrl.match(/popin\=\/offres/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/610627.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3500588"};
}
if ( dUrl.match(/tripleplay\/box/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/610637.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3500614"};
}
if ( dUrl.match(/nc\_redirection\-sfr/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/610649.js"};
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3500634"};
}
if ( dUrl.match(/offres.numericable.fr/i) ) {
}
scriptArray[n++] = {"code":"CmlmICggdHlwZW9mIHRsZGMudmlzID09PSAib2JqZWN0IiApIHsKaWYgKCB0bGRjLnZpcy5jdXJyX3BhZ2VfY250ID09IDIgKSB7CnRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvY29udi81Njk3NzguanMifSxmdW5jdGlvbigpe30pOwp9Cn0K"};
scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=1797006"};
scriptArray[n++] = {"src":"//cdn.tradelab.fr/conv/198923.js"};
scriptArray[n++] = {"code":"CmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImltZyIpLnNyYz0iaHR0cHM6Ly9sb2FkLmV4ZWxhdG9yLmNvbS9sb2FkLz9sYj1BQTE4OTY5IjsK"};
scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=2342650"};
scriptArray[n++] = {"code":"Ci8vIFNFTwppZiAoIHR5cGVvZiB0bGRjID09ICdvYmplY3QnICYmIHR5cGVvZiB0bGRjLnJlZiA9PSAnb2JqZWN0JyAmJiB0bGRjLnJlZi5yZWZfdXJsID09ICJ3d3cuZ29vZ2xlLmZyLyIgKSB7CglpbmplY3RTY3JpcHQoeyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9zZWcuanM/YWRkPTI2NTg2MjcifSxmdW5jdGlvbigpe30pOwp9Ci8vIFNFTQppZiAoIHR5cGVvZiB0bGRjID09ICdvYmplY3QnICYmIHR5cGVvZiB0bGRjLnJlZiA9PSAnb2JqZWN0JyAmJiB0bGRjLnJlZi5yZWZfdXJsLmluZGV4T2YoInd3dy5nb29nbGUuZnIvYWNsayIpICE9IC0xICkgewoJaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0yNjU4NjI3In0sZnVuY3Rpb24oKXt9KTsKCn0K"};
scriptArray[n++] = {"code":"CmZ1bmN0aW9uIGFkZEV2ZW50KGVsLCB0eXBlLCBmbiwgdXNlY2FwdHVyZSkgewogIHRyeSB7CiAgICBpZiAoZWwuYXR0YWNoRXZlbnQpIHsKICAgICAgZWwuYXR0YWNoRXZlbnQgJiYgZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGZuKTsKICAgIH0gZWxzZSB7CiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHVzZWNhcHR1cmUgfHwgZmFsc2UpOwogICAgfQogIH0gY2F0Y2ggKGVycikgewogICAgY29uc29sZS5sb2coJ2FkZEV2ZW50fCcgKyBlcnIubWVzc2FnZSk7CiAgfQp9CnZhciBsU2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgic2NyaXB0IilbMF07Cgp2YXIgZWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCJ2Ml9wb3B1cExpbmtGYWtlIHYyX2J0biB2Ml92YWxpZGF0ZV9hZHJlc3MiKTsKaWYoZWxlbXMubGVuZ3RoPjApewogICAgZSA9IGVsZW1zWzBdCiAgICBhZGRFdmVudChlLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKCkgewoJaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvY29udi8yMDM5MTEuanMifSwgZnVuY3Rpb24oKXt9KTsKICAgIH0pOwoKICAgIH0KCgoK"};
scriptArray[n++] = {"code":"Cgp2YXIgZ3JvdXBzID0gWwoKeyJ2YXIiOiJlYXRtX2JyYW5kIiwKInZhbGV1cnMiOltbInNmciIsIjM0ODU0MTciXSxbInJlZCIsIjM0ODU0MTkiXV19LAoKeyJ2YXIiOiJlYXRtX3NlY3Rpb24iLAoidmFsZXVycyI6W1sibW9iaWxlIiwiMzQ4NTkzMiJdLAogICAgICAgICAgIFsiZml4ZSIsIjM0ODU5MzYiXSwKICAgICAgICAgICBbIjRwIiwiMzQ4NTkzOCJdLAogICAgICAgICAgIFsiaG9tZSIsIjM0ODU5NDEiXSwKICAgICAgICAgICBbImF1dHJlcyIsIjM0ODU5NDQiXV19LAoKeyJ2YXIiOiJlYXRtX3BhZ2V0eXBlIiwKInZhbGV1cnMiOltbImNvbnRlbnQiLCIzNDg1OTg5Il0sCiAgICAgICAgICAgWyJwcm9kdWN0IiwiMzQ4NTk5MyJdLAogICAgICAgICAgIFsiYmFza2V0IiwiMzQ4NTk5NiJdLAogICAgICAgICAgIFsiY2hlY2tvdXQiLCIzNDg1OTk5Il0sCiAgICAgICAgICAgWyJlc3RpbWF0ZSIsIjM0ODYwMDEiXSwKICAgICAgICAgICBbIm9yZGVyIiwiMzQ4NjAwNCJdXX0sCgp7InZhciI6ImVhdG1fZWxpZ2liaWxpdHkiLAoidmFsZXVycyI6W1siZnR0bGEiLCIzNDg2NzUzIl0sCiAgICAgICAgICAgWyJmdHRoIiwiMzQ4Njc2NCJdLAogICAgICAgICAgIFsiYWRzbCIsIjM0ODY3NjkiXV19LAoKeyJ2YXIiOiJlYXRtX2NsaWVudFR5cGUiLAoidmFsZXVycyI6W1siY2xpZW50X2ZpeGVfdGhkX3NmciIsIjM0ODY3OTQiXSwKICAgICAgICAgICBbImNsaWVudF9maXhlX2Fkc2xfc2ZyIiwiMzQ4NjgxNSJdLAogICAgICAgICAgIFsiY2xpZW50X2ZpeGVfdGhkX3JlZCIsIjM0ODY4MjAiXSwKICAgICAgICAgICBbImNsaWVudF9maXhlX2Fkc2xfcmVkIiwiMzQ4NjgyNyJdLAogICAgICAgICAgIFsiY2xpZW50X21vYmlsZV9zZnIiLCIzNDg2ODM3Il0sCiAgICAgICAgICAgWyJjbGllbnRfbW9iaWxlX3JlZCIsIjM0ODY4NDEiXSwKICAgICAgICAgICBbImNsaWVudF9sYWNhcnRlX3NmciIsIjM0ODY4NDgiXSwKICAgICAgICAgICBbImNsaWVudF9tdWx0aV9zZnIiLCIzNDg2ODUzIl0sCiAgICAgICAgICAgWyJjbGllbnRfbXVsdGlfcmVkIiwiMzQ4Njg2NCJdLAogICAgICAgICAgIFsicmVzaWxpZV9maXhlX3NmciIsIjM0ODY4NzQiXSwKICAgICAgICAgICBbInJlc2lsaWVfbW9iaWxlX3NmciIsIjM0ODY4NzkiXSwKICAgICAgICAgICBbInJlc2lsaWVfbXVsdGlfc2ZyIiwiMzQ4Njg5MCJdLAogICAgICAgICAgIFsicHJvc3BlY3QiLCIzNDg2ODk5Il0sCiAgICAgICAgICAgWyJjbGllbnRfYXV0cmUiLCIzNDg2OTA2Il1dfSwKCnsidmFyIjoiZWF0bV9vcmRlckdyb3VwVHlwZSIsCiJ2YWxldXJzIjpbWyJ3ZWJfc2ZyX21vYmlsZSIsIjM0OTUwNTQiXSwKICAgICAgICAgICBbIndlYl9zZnJfZml4ZS1hZHNsIiwiMzQ5NTA1NiJdLAogICAgICAgICAgIFsid2ViX3Nmcl9maXhlLXRoZCIsIjM0OTUwNTgiXSwKICAgICAgICAgICBbIndlYl9zZnJfNHAtYWRzbCIsIjM0OTUwNjAiXSwKICAgICAgICAgICBbIndlYl9zZnJfNHAtdGhkIiwiMzQ5NTA2MSJdLAogICAgICAgICAgIFsid2ViX3JlZF9tb2JpbGUiLCIzNDk1MDYyIl0sCiAgICAgICAgICAgWyJ3ZWJfcmVkX2ZpeGUtdGhkIiwiMzQ5NTA2NiJdLAogICAgICAgICAgIFsid2ViX3JlZF80cC1hZHNsIiwiMzQ5NTA2NyJdLAogICAgICAgICAgIFsid2ViX3JlZF80cC10aGQiLCIzNDk1MDY4Il1dfSwKCl07Cgp2YXIgY29udnMgPSBbIHsiZWF0bV9zZWN0aW9uIjpbIm1vYmlsZSJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJlc3RpbWF0ZSJdLAogICAgICAgICAgICAgICAiY2FsbF9pZCI6IjYxMTY3OCJ9LAoKICAgICAgICAgICAgICAgeyJlYXRtX3NlY3Rpb24iOlsibW9iaWxlIl0sCiAgICAgICAgICAgICAgICJlYXRtX3BhZ2V0eXBlIjpbImNvbnRlbnQiXSwKICAgICAgICAgICAgICAgImNhbGxfaWQiOiI2MTE2NzkifSwKCiAgICAgICAgICAgICAgIHsiZWF0bV9zZWN0aW9uIjpbIm1vYmlsZSJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJwcm9kdWN0Il0sCiAgICAgICAgICAgICAgICJjYWxsX2lkIjoiNjExNjgwIn0sCgogICAgICAgICAgICAgICB7ImVhdG1fc2VjdGlvbiI6WyJtb2JpbGUiXSwKICAgICAgICAgICAgICAgImVhdG1fcGFnZXR5cGUiOlsiYmFza2V0Il0sCiAgICAgICAgICAgICAgICJjYWxsX2lkIjoiNjExNjgxIn0sCgogICAgICAgICAgICAgICB7ImVhdG1fc2VjdGlvbiI6WyJtb2JpbGUiXSwKICAgICAgICAgICAgICAgImVhdG1fcGFnZXR5cGUiOlsiY2hlY2tvdXQiXSwKICAgICAgICAgICAgICAgImNhbGxfaWQiOiI2MTE2ODIifSwKCiAgICAgICAgICAgICAgIHsiZWF0bV9zZWN0aW9uIjpbIm1vYmlsZSJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJvcmRlciJdLAogICAgICAgICAgICAgICAiY2FsbF9pZCI6IjYxMTY4MyJ9LAoKICAgICAgICAgICAgICAgeyJlYXRtX2JyYW5kIjpbInNmciJdLAogICAgICAgICAgICAgICAiZWF0bV9zZWN0aW9uIjpbIm1vYmlsZSJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJvcmRlciJdLAogICAgICAgICAgICAgICAiY2FsbF9pZCI6IjYxMTY4NCJ9LAoKICAgICAgICAgICAgICAgeyJlYXRtX2JyYW5kIjpbInJlZCJdLAogICAgICAgICAgICAgICAiZWF0bV9zZWN0aW9uIjpbIm1vYmlsZSJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJvcmRlciJdLAogICAgICAgICAgICAgICAiY2FsbF9pZCI6IjYxMTY4NSJ9LAoKICAgICAgICAgICAgICAgeyJlYXRtX3NlY3Rpb24iOlsiZml4ZSIsIjRwIl0sCiAgICAgICAgICAgICAgICJlYXRtX3BhZ2V0eXBlIjpbImVzdGltYXRlIl0sCiAgICAgICAgICAgICAgICJjYWxsX2lkIjoiNjExNjg2In0sCgogICAgICAgICAgICAgICB7ImVhdG1fc2VjdGlvbiI6WyJmaXhlIiwiNHAiXSwKICAgICAgICAgICAgICAgImVhdG1fcGFnZXR5cGUiOlsiY29udGVudCJdLAogICAgICAgICAgICAgICAiY2FsbF9pZCI6IjYxMTY4NyJ9LAoKICAgICAgICAgICAgICAgeyJlYXRtX3NlY3Rpb24iOlsiZml4ZSIsIjRwIl0sCiAgICAgICAgICAgICAgICJlYXRtX3BhZ2V0eXBlIjpbInByb2R1Y3QiXSwKICAgICAgICAgICAgICAgImNhbGxfaWQiOiI2MTE2ODgifSwKCiAgICAgICAgICAgICAgIHsiZWF0bV9zZWN0aW9uIjpbImZpeGUiLCI0cCJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJiYXNrZXQiXSwKICAgICAgICAgICAgICAgImNhbGxfaWQiOiI2MTE2ODkifSwKCiAgICAgICAgICAgICAgIHsiZWF0bV9zZWN0aW9uIjpbImZpeGUiLCI0cCJdLAogICAgICAgICAgICAgICAiZWF0bV9wYWdldHlwZSI6WyJjaGVja291dCJdLAogICAgICAgICAgICAgICAiY2FsbF9pZCI6IjYxMTY5MCJ9LAoKICAgICAgICAgICAgICAgeyJlYXRtX3NlY3Rpb24iOlsiZml4ZSIsIjRwIl0sCiAgICAgICAgICAgICAgICJlYXRtX3BhZ2V0eXBlIjpbIm9yZGVyIl0sCiAgICAgICAgICAgICAgICJjYWxsX2lkIjoiNjExNjkxIn0sCgogICAgICAgICAgICAgICB7ImVhdG1fYnJhbmQiOlsic2ZyIl0sCiAgICAgICAgICAgICAgICJlYXRtX3NlY3Rpb24iOlsiZml4ZSIsIjRwIl0sCiAgICAgICAgICAgICAgICJlYXRtX3BhZ2V0eXBlIjpbIm9yZGVyIl0sCiAgICAgICAgICAgICAgICJjYWxsX2lkIjoiNjExNjkyIn0sCgogICAgICAgICAgICAgICB7ImVhdG1fYnJhbmQiOlsicmVkIl0sCiAgICAgICAgICAgICAgICJlYXRtX3NlY3Rpb24iOlsiZml4ZSIsIjRwIl0sCiAgICAgICAgICAgICAgICJlYXRtX3BhZ2V0eXBlIjpbIm9yZGVyIl0sCiAgICAgICAgICAgICAgICJjYWxsX2lkIjoiNjExNjkzIn0sCgogICAgICAgICAgICAgXTsKCgp2YXIgbWFpbldpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7CnZhciBhbGxzY3JpcHRzID0gbWFpbldpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgic2NyaXB0Iik7CnZhciBlYXRtX2NvbGxlY3RvciA9ICcnOwp2YXIgZWF0bV9zdG9jayA9IHsiZWF0bV9icmFuZCI6IiIsImVhdG1fc2VjdGlvbiI6IiIsImVhdG1fcGFnZXR5cGUiOiIiLCJlYXRtX2VsaWdpYmlsaXR5IjoiIiwiZWF0bV9jbGllbnRUeXBlIjoiIiwiZWF0bV9vcmRlckdyb3VwVHlwZSI6IiJ9Owp2YXIgViA9IE9iamVjdC5rZXlzKGVhdG1fc3RvY2spOwoKCmZvciAodmFyIGkgPSAwOyBpIDwgYWxsc2NyaXB0cy5sZW5ndGg7IGkrKykgewogICAgWiA9IGFsbHNjcmlwdHNbaV0uZ2V0QXR0cmlidXRlKCJzcmMiKTsKICAgIGlmIChaKSB7CiAgICAgICAgaWYgKFouaW5kZXhPZigiOi8vZWxyLnNmci5mci9jb2xsZWN0b3IvIikgPj0gMCkgewogICAgICAgICAgICBlYXRtX2NvbGxlY3RvciA9IFo7CiAgICAgICAgfQogICAgfQp9CgppZiAoZWF0bV9jb2xsZWN0b3IpIHsKCiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGdyb3Vwcy5sZW5ndGg7IGorKykgewogICAgICAgIHZhciBXID0gZ3JvdXBzW2pdLnZhcjsKICAgICAgICB2YXIgWCA9IGVhdG1fY29sbGVjdG9yLmluZGV4T2YoVyk7CiAgICAgICAgdmFyIFgyID0gZWF0bV9jb2xsZWN0b3Iuc3Vic3RyaW5nKFgrVy5sZW5ndGgrMSxlYXRtX2NvbGxlY3Rvci5sZW5ndGgpOwogICAgICAgIHZhciBZID0gWDIuaW5kZXhPZigiJiIpOwogICAgICAgIHZhciBZMiAgPSBYMi5zdWJzdHJpbmcoMCxZKTsKCiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBncm91cHNbal0udmFsZXVycy5sZW5ndGg7IGsrKykgewogICAgICAgICAgICBpZiAoZ3JvdXBzW2pdLnZhbGV1cnNba11bMF09PVkyKXsKICAgICAgICAgICAgICAgICBpbmplY3RTY3JpcHQoeyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9zZWcuanM/YWRkPSIrZ3JvdXBzW2pdLnZhbGV1cnNba11bMV19LGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgICAgICAgZWF0bV9zdG9ja1tXXSA9IFkyOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKCiAgICBmb3IgKHZhciBrID0gMDsgayA8IGNvbnZzLmxlbmd0aDsgaysrKSB7CiAgICAgICAgdmFyIGNhbGwgPSB0cnVlOwogICAgICAgIGZvciAodmFyIGsyID0gMDsgazIgPCBWLmxlbmd0aDsgazIrKykgewogICAgICAgICAgICB2YXIgVjIgPSBWW2syXTsKICAgICAgICAgICAgdmFyIGRpbSA9IHRydWU7CiAgICAgICAgICAgIGlmIChjb252c1trXVtWMl0pIHsKICAgICAgICAgICAgICAgIGRpbSA9IGZhbHNlOwogICAgICAgICAgICAgICAgZm9yICh2YXIgazMgPSAwOyBrMyA8IGNvbnZzW2tdW1YyXS5sZW5ndGg7IGszKyspewogICAgICAgICAgICAgICAgICAgIGlmIChjb252c1trXVtWMl1bazNdID09IGVhdG1fc3RvY2tbVjJdKXsKICAgICAgICAgICAgICAgICAgICAgICAgZGltID0gdHJ1ZTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKGRpbSA9PSBmYWxzZSl7CiAgICAgICAgICAgICAgICBjYWxsID0gZmFsc2U7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaWYgKGNhbGwpewogICAgICAgICAgICBpbmplY3RTY3JpcHQoeyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9jb252LyIrY29udnNba10uY2FsbF9pZCsiLmpzIn0sZnVuY3Rpb24oKXt9KTsKICAgICAgICB9CiAgICB9Cn0KCgoK"};
  
	
	if ( tldc.ses.uuid2 === '' ) {
  	scriptArray[n++] = {'src': '//ib.adnxs.com/getuid?//its.tradelab.fr/?type=tlsync&uuid2=$UID&callback=tl_sync'};
  }

  tldc.rLoad(scriptArray);

})();

} catch(err) {
  error('tagmanv2|'+err.message);
}