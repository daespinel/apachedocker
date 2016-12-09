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
      advid: '559499',
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
  
  tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/594.js?add=3046790"}, function(){});
	if ( tldc.vis.vis_cnt > 1 ) {
		tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/594.js?add=3046792"}, function(){});
	}
	else {
		if ( tldc.vis.curr_page_cnt > 1 ) {
			tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/594.js?add=3046791"}, function(){});
		}
		else {
			setTimeout(function(){
				tldc.injectScript({"src":"//cdn.tradelab.fr/fseg/594.js?add=3046791"}, function(){});
			}, 3000);
		}
	}
  
  if ( dUrl.match(/allocine.fr\/vod|telecharger-vod|vod-dvd/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3538158"};
}
if ( dUrl.match(/www.allocine.fr\/recherche/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3102403"};
}
if ( dUrl.match(/www.allocine.fr\/video\/player/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3102418"};
}
if ( dUrl.match(/www.allocine.fr\/seance\/film/i) ) {
	scriptArray[n++] = {"code":"CmZ1bmN0aW9uIGFkZEV2ZW50KGVsLCB0eXBlLCBmbiwgdXNlY2FwdHVyZSkgewogIHRyeSB7CiAgICBpZiAoZWwuYXR0YWNoRXZlbnQpIHsKICAgICAgZWwuYXR0YWNoRXZlbnQgJiYgZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGZuKTsKICAgIH0gZWxzZSB7CiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHVzZWNhcHR1cmUgfHwgZmFsc2UpOwogICAgfQogIH0gY2F0Y2ggKGVycikgewogICAgY29uc29sZS5sb2coJ2FkZEV2ZW50fCcgKyBlcnIubWVzc2FnZSk7CiAgfQp9CnZhciBsU2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgic2NyaXB0IilbMF07Cgp2YXIgWCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoInBvc19yZWwgZV9vdmVyIGNQb2ludGVyIik7Cgpmb3IgKHZhciBpID0gMDsgaSA8IFgubGVuZ3RoOyBpKyspIHsKICAgIGlmIChYW2ldLmdldEF0dHJpYnV0ZSgiY2xhc3MiKS5pbmRleE9mKCJidG4tZGlzYWJsZWQiKT09LTEpewogICAgICAgICAgICBhZGRFdmVudChYW2ldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0zMTAzMzc1In0sIGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KCgo="};
}
if ( dUrl.match(/www.allocine.fr\/programme-tv/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3103205"};
}
if ( dUrl.match(/www.allocine.fr\/series/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3103151"};
}
if ( dUrl.match(/www.allocine.fr\/video\/video/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3103131"};
}
if ( dUrl.match(/www.allocine.fr\/seance\/salle_gen_csalle/i) ) {
	scriptArray[n++] = {"code":"CmZ1bmN0aW9uIGFkZEV2ZW50KGVsLCB0eXBlLCBmbiwgdXNlY2FwdHVyZSkgewogIHRyeSB7CiAgICBpZiAoZWwuYXR0YWNoRXZlbnQpIHsKICAgICAgZWwuYXR0YWNoRXZlbnQgJiYgZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGZuKTsKICAgIH0gZWxzZSB7CiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHVzZWNhcHR1cmUgfHwgZmFsc2UpOwogICAgfQogIH0gY2F0Y2ggKGVycikgewogICAgY29uc29sZS5sb2coJ2FkZEV2ZW50fCcgKyBlcnIubWVzc2FnZSk7CiAgfQp9CnZhciBsU2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgic2NyaXB0IilbMF07Cgp2YXIgWCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoInBvc19yZWwgZV9vdmVyIGNQb2ludGVyIik7Cgpmb3IgKHZhciBpID0gMDsgaSA8IFgubGVuZ3RoOyBpKyspIHsKICAgIGlmIChYW2ldLmdldEF0dHJpYnV0ZSgiY2xhc3MiKS5pbmRleE9mKCJidG4tZGlzYWJsZWQiKT09LTEpewogICAgICAgICAgICBhZGRFdmVudChYW2ldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0zMTAzMzc1In0sIGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KCgo="};
	scriptArray[n++] = {"code":"Cgp3aW5kb3cubFNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInNjcmlwdCIpWzBdOwoKdmFyIFggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCJ2bWFyZ2luMTBiIik7CnZhciBYaSA9ICIiOwp2YXIgWSA9IC0xOwp2YXIgWiA9ICIvc2FsbGUvY2luZW1hcy1wcmVzLWRlLSI7CnZhciBacyA9ICcvIj4nOwp2YXIgZXh0cmFfaW5mbyA9IHsndmFsdWUnOicnLCdvcmRlcl9pZCc6Jyd9OwoKZm9yICh2YXIgaSA9IDA7IGkgPCBYLmxlbmd0aDsgaSsrKSB7CiAgICBYaSA9IFhbaV0ub3V0ZXJIVE1MLnRvTG93ZXJDYXNlKCk7CiAgICBZID0gWGkuaW5kZXhPZihaKTsKICAgIGlmIChZICE9IC0xKSB7CiAgICAgICAgWGkgPSBYaS5zdWJzdHJpbmcoWGkuaW5kZXhPZihaKStaLmxlbmd0aCxYaS5sZW5ndGgpOwogICAgICAgIFkgPSBYaS5pbmRleE9mKFpzKTsKICAgICAgICBleHRyYV9pbmZvLnZhbHVlID0gWGkuc3Vic3RyaW5nKFkrWnMubGVuZ3RoLFkrWnMubGVuZ3RoKzIpOyAgCiAgICAgICAgdGxkYy5pbmplY3RTY3JpcHQoeyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9zZWcuanM/YWRkPTMxMDMwOTAmdmFsPSIrZXh0cmFfaW5mby52YWx1ZX0sZnVuY3Rpb24oKXt9KTsKICAgICAgICB9CiAgICB9CgoKCg=="};
}
if ( dUrl.match(/www.allocine.fr\/film\/fichefilm_gen_cfilm|www.allocine.fr\/series\/ficheserie_gen_cserie/i) ) {
	scriptArray[n++] = {"src":"//cdn.tradelab.fr/seg.js?add=3267757"};
	scriptArray[n++] = {"code":"Cgp3aW5kb3cubFNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInNjcmlwdCIpWzBdOwoKdmFyIEZpbG1EYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltpdGVtcHJvcF0nKTsKCnZhciBJbnRlcnZhbGxlcyA9IFtbLTEyMDk2MDAwMDAsIjMyNjgyNzMiXSwKICAgICAgICAgICAgICAgICAgIFstNjA0ODAwMDAwLCIzMjY4MjgyIl0sCiAgICAgICAgICAgICAgICAgICBbMCwiMzI2ODI4OSJdLAogICAgICAgICAgICAgICAgICAgWzYwNDgwMDAwMCwiMzI2ODMzNyJdLAogICAgICAgICAgICAgICAgICAgWzEyMDk2MDAwMDAsIjMyNjgzNzYiXSwKICAgICAgICAgICAgICAgICAgIFsxODE0NDAwMDAwLCIzMjY4MzgyIl0sCiAgICAgICAgICAgICAgICAgICBbMjQxOTIwMDAwMCwiMzI2ODM5MCJdLAogICAgICAgICAgICAgICAgICAgWzEwNTE4OTg0MDAwLCIzMjY4NDE4Il0sCiAgICAgICAgICAgICAgICAgICBbMTMxNDg3MzAwMDAsIjMyNjg0MjAiXSwKICAgICAgICAgICAgICAgICAgIFszMTUzNjAwMDAwMCwiMzI2ODQyMyJdLAogICAgICAgICAgICAgICAgICAgXTsKCgpmb3IgKHZhciBpID0gMDsgaSA8IEZpbG1EYXRhLmxlbmd0aDsgaSsrKSB7CgogICAgaWYgKEZpbG1EYXRhW2ldLmdldEF0dHJpYnV0ZSgiaXRlbXByb3AiKT09ImRhdGVQdWJsaXNoZWQiKXsKICAgICAgICB2YXIgRCA9IEZpbG1EYXRhW2ldLmdldEF0dHJpYnV0ZSgiY29udGVudCIpLnNwbGl0KCItIik7CiAgICAgICAgdmFyIHNvcnRpZSA9IG5ldyBEYXRlKHBhcnNlSW50KERbMF0pLHBhcnNlSW50KERbMV0pLTEscGFyc2VJbnQoRFsyXSkpOwogICAgICAgIHZhciBhdWogPSBuZXcgRGF0ZSgpOwogICAgICAgIGF1ai5zZXRIb3VycygwLDAsMCwwKTsKICAgICAgICB2YXIgZGlmZiA9IGF1ai1zb3J0aWU7CiAgICAgICAgdmFyIGlzSW5mID0gZmFsc2U7CiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBJbnRlcnZhbGxlcy5sZW5ndGg7IGorKykgewogICAgICAgICAgICBpZiAoZGlmZjxJbnRlcnZhbGxlc1tqXVswXSl7CiAgICAgICAgICAgICAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9IitJbnRlcnZhbGxlc1tqXVsxXX0sZnVuY3Rpb24oKXt9KTsKICAgICAgICAgICAgICAgIGogPSBJbnRlcnZhbGxlcy5sZW5ndGg7CiAgICAgICAgICAgICAgICBpc0luZiA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaWYgKGRpZmY9PTApewogICAgICAgICAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9MzI2ODMwMiJ9LGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgfSBlbHNlIGlmIChpc0luZiA9PSBmYWxzZSl7CiAgICAgICAgICAgIHRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0zMjY4NDc4In0sZnVuY3Rpb24oKXt9KTsKICAgICAgICB9CiAgICB9Cn0KCgoK"};
}
scriptArray[n++] = {"code":"Cgp3aW5kb3cubFNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInNjcmlwdCIpWzBdOwoKaWYgKCB0eXBlb2YgdGxkYy52aXMgPT09ICJvYmplY3QiICkgewogICAgWCA9IHBhcnNlSW50KHRsZGMudmlzLnZpc19jbnQsMTApOwogICAgaWYgKCBYPjQgKSB7CiAgICAgICAgdGxkYy5pbmplY3RTY3JpcHQoeyJzcmMiOiIvL2Nkbi50cmFkZWxhYi5mci9zZWcuanM/YWRkPTMxNTMxNDIifSxmdW5jdGlvbigpe30pOwogICAgICAgIH0KICAgIH0KCgo="};
scriptArray[n++] = {"code":"Cgp3aW5kb3cubFNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInNjcmlwdCIpWzBdOwoKCnZhciBmaWxtZXhwcyA9IFtbInN0YXIgd2FycyIsIjM1NDM0NzYiXSwKICAgICAgICAgICAgICAgIFsiZnJhbmtlbnN0ZWluIiwiMzU0MzQ3NyJdXTsKCnZhciBnZW5yZXMgPSBbWyIxMzAyNSIsIjMyNjg2MjEiLCIzNTA2OTY2Il0sCiAgICBbIjEzMDI2IiwiMzI2ODYyNCIsIjMxNjE3ODMiXSwKICAgIFsiMTMwMTYiLCIzMjY4NjI5IiwiMzE2MjEyMiJdLAogICAgWyIxMzAwMSIsIjMyNjg2MzAiLCIzNTA2OTg2Il0sCiAgICBbIjEzMDI3IiwiMzI2ODYzMSIsIjM1MDcwMDEiXSwKICAgIFsiMTMwMDUiLCIzMjY4NjM1IiwiMzUwNzAyNCJdLAogICAgWyIxMzAwMiIsIjMyNjg2NDIiLCIzNTA3MDM3Il0sCiAgICBbIjEzMDEzIiwiMzI2ODY0NCIsIjM1MDcwMzkiXSwKICAgIFsiMTMwMDciLCIzMjY4NjY5IiwiMzUwNzA0OSJdLAogICAgWyIxMzAwOCIsIjMyNjg2NzYiLCIzNTA3MDUwIl0sCiAgICBbIjEzMDA5IiwiMzI2ODY3OCIsIjM1MDcwNTEiXSwKICAgIFsiMTMwMTAiLCIzMjY4Njk2IiwiMzUwNzA1NiJdLAogICAgWyIxMzAzNiIsIjMyNjg2ODIiLCIzMTYxNzg1Il0sCiAgICBbIjEzMDEyIiwiMzI2ODY4MyIsIjM1MDc3ODgiXSwKICAgIFsiMTMwMTQiLCIzMjY4Njg3IiwiMzE1ODM2OSJdLAogICAgWyIxMzAxNSIsIjMyNjg2OTEiLCIzNTA3NzkxIl0sCiAgICBbIjEzMDQzIiwiMzI2ODcwMyIsIjM1MDc3OTMiXSwKICAgIFsiMTMwMTgiLCIzMjY4NzA0IiwiMzUwNzc5NSJdLAogICAgWyIxMzAyNCIsIjMyNjg3MDYiLCIzMTU4MzQ0Il0sCiAgICBbIjEzMDIxIiwiMzI2ODcwOCIsIjM1MDc3OTYiXSwKICAgIFsiMTMwMjMiLCIzMjY4NzEyIiwiMzE1ODM4NyJdLAogICAgWyIxMzAxOSIsIjMyNjg3MTMiLCIzMTU4MzY0Il1dOwoKCnZhciBncm91cHMgPSBbCgp7InR5cGUiOiJQZXJzb24iLAoiZ2VucmVzIjpmYWxzZSwKInNlZyI6IjMyNzkyMDQiLAoidmFsZXVycyI6W1siNDEwMDAiLCIzNTA1ODY3Il0sCiAgICAgICAgICAgWyIxNDc5MDkiLCIzNTA1ODg2Il0sCiAgICAgICAgICAgWyI2ODMyNzYiLCIzNTA1ODg3Il0sCiAgICAgICAgICAgWyI2MTAwOSIsIjM1NDQzMDgiXSwKICAgICAgICAgICBbIjQ5NzMzOSIsIjM1NDQzMTgiXSwKICAgICAgICAgICBbIjUwMTU2MyIsIjM1MDU4ODgiXSwKICAgICAgICAgICBbIjUwMjY4MSIsIjM1MDU4OTAiXSwKICAgICAgICAgICBbIjQ3MiIsIjM1MDU4ODkiXSwKICAgICAgICAgICBbIjQyNyIsIjM1MDU4OTMiXSwKICAgICAgICAgICBbIjg1MTIwIiwiMzU0Mzk1OCJdLAogICAgICAgICAgIFsiNjgyNTgiLCIzNTA1ODk5Il1dfSwKCnsidHlwZSI6Ik1vdmllIiwKImdlbnJlcyI6dHJ1ZSwKImxhYmVsIjp0cnVlLAoic2VnIjoiMzEwMjQyOCIsCiJ2YWxldXJzIjpbWyIyMTUwOTciLCIzNTA2MjMyIl0sCiAgICAgICAgICAgWyIyNTgwMSIsIjM1MDYyMzMiXSwKICAgICAgICAgICBbIjI1ODAzIiwiMzUwNjI0NiJdLAogICAgICAgICAgIFsiMjMxNzQwIiwiMzUxMjQxMyJdLAogICAgICAgICAgIFsiMjA3NTQiLCIzNTA2Mjc1Il0sCiAgICAgICAgICAgWyIyOTAxNCIsIjM1MDYzMzgiXSwKICAgICAgICAgICBbIjE4NDU1MiIsIjM1NDQxNDUiXSwKICAgICAgICAgICBbIjU5Mjc1IiwiMzU0NDE3NiJdLAogICAgICAgICAgIFsiMTA4OTk4IiwiMzU0NDE4MyJdLAogICAgICAgICAgIFsiNDA2MjMiLCIzNTA2MzY1Il0sCiAgICAgICAgICAgWyIxNzA5MTgiLCIzNTQ0MjA4Il0sCiAgICAgICAgICAgWyIxMTA4MTUiLCIzNTQ0MjM1Il0sCiAgICAgICAgICAgWyIxODM1NTYiLCIzNTQ0MjgyIl0sCiAgICAgICAgICAgWyIyMDM0NDAiLCIzNTQzOTMxIl0sCiAgICAgICAgICAgWyIyNTgwMiIsIjM1MDYyNDQiXV19LAoKeyJ0eXBlIjoiU2VyaWVzIiwKImdlbnJlcyI6dHJ1ZSwKImxhYmVsIjp0cnVlLAoic2VnIjoiMzUwNjM4NCIsCiJ2YWxldXJzIjpbWyIzNDEyIiwiMzUwNjM5MCJdLAogICAgICAgICAgIFsiNDE2MiIsIjM1MDYzOTkiXSwKICAgICAgICAgICBbIjExMzg0IiwiMzUwNjQwMSJdXX0sCgoKXTsKCnZhciBYID0gZG9jdW1lbnQuaGVhZC5nZXRBdHRyaWJ1dGUoImRhdGEtZW50aXRpZXMiKTsKCnZhciBZID0gIiI7CgoKaWYgKFgpIHsKICAgIHZhciBYMiA9IEpTT04ucGFyc2UoWClbMF07CiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykgewogICAgICAgIGlmIChYMi5lbnRpdHlUeXBlID09IGdyb3Vwc1tpXS50eXBlKXsKICAgICAgICAgICAgaWYgKFgyLmVudGl0eVR5cGUgPT0gIk1vdmllIil7CiAgICAgICAgICAgICAgICBpZiAoZGF0YUxheWVyWzBdLnNpdGVfcm91dGUgPT0gIm1vdmllcGFnZV9zaG93dGltZXNfcGxhY2UiKXsKICAgICAgICAgICAgICAgICAgICBZID0gIiZ2YWw9NSIKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9Iitncm91cHNbaV0uc2VnK1l9LGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZ3JvdXBzW2ldLnZhbGV1cnMubGVuZ3RoOyBqKyspIHsKICAgICAgICAgICAgICAgIGlmIChYMi5lbnRpdHlJZCA9PSBncm91cHNbaV0udmFsZXVyc1tqXVswXSl7CiAgICAgICAgICAgICAgICAgICAgIHRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0iK2dyb3Vwc1tpXS52YWxldXJzW2pdWzFdK1l9LGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKGdyb3Vwc1tpXS5nZW5yZXMpewogICAgICAgICAgICAgICAgdmFyIFogPSBkYXRhTGF5ZXJbMF0uZ2VucmU7CiAgICAgICAgICAgICAgICB2YXIgWjIgPSBPYmplY3Qua2V5cyhaKTsKICAgICAgICAgICAgICAgIGZvciAodmFyIGsxID0gMDsgazEgPCBnZW5yZXMubGVuZ3RoOyBrMSsrKSB7CiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgazIgPSAwOyBrMiA8IFoyLmxlbmd0aDsgazIrKykgewogICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2VucmVzW2sxXVswXT09IFoyW2syXSl7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9IitnZW5yZXNbazFdWzFdfSxmdW5jdGlvbigpe30pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsyID09IDApewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsZGMuaW5qZWN0U2NyaXB0KHsic3JjIjoiLy9jZG4udHJhZGVsYWIuZnIvc2VnLmpzP2FkZD0iK2dlbnJlc1trMV1bMl19LGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKGdyb3Vwc1tpXS5sYWJlbCl7CiAgICAgICAgICAgICAgICB2YXIgWjMgPSBYMi5sYWJlbDsKICAgICAgICAgICAgICAgIGlmIChaMyl7CiAgICAgICAgICAgICAgICAgICAgdmFyIFo0ID0gWjMudG9Mb3dlckNhc2UoKTsKICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrMyA9IDA7IGszIDwgZmlsbWV4cHMubGVuZ3RoOyBrMysrKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChaNC5pbmRleE9mKGZpbG1leHBzW2szXVswXSk+IC0xKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bGRjLmluamVjdFNjcmlwdCh7InNyYyI6Ii8vY2RuLnRyYWRlbGFiLmZyL3NlZy5qcz9hZGQ9IitmaWxtZXhwc1trM11bMV19LGZ1bmN0aW9uKCl7fSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9Cn0KCg=="};
  
	
	if ( tldc.ses.uuid2 === '' ) {
  	scriptArray[n++] = {'src': '//ib.adnxs.com/getuid?//its.tradelab.fr/?type=tlsync&uuid2=$UID&callback=tl_sync'};
  }

  tldc.rLoad(scriptArray);

})();

} catch(err) {
  error('tagmanv2|'+err.message);
}