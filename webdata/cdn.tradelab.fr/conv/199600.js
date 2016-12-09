if ( typeof tldc === 'undefined' ) window.tldc = {};
if ( typeof tlrp_transaction === 'object' ) tldc.xtra = tlrp_transaction;
if ( typeof extra_info === 'object' ) tldc.xtra = extra_info;
if ( typeof tldc.xtra === 'undefined' ) tldc.xtra = {};
function error(msg) {
  var version = "2.0.1a";
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
}
try { 
(function(){

if ( typeof tldc.cvPx === 'undefined' ) tldc.cvPx = {};
tldc.cvPx['199600'] = {};
tldc.cvPx['199600'].a = 199600;
tldc.cvPx['199600'].l = [];
tldc.cvPx['199600'].i = 7; 
tldc.cvPx['199600'].c = 30; 
tldc.cvPx['199600'].t = 'h';
tldc.cvPx['199600'].m = 'null';
tldc.cvPx['199600'].vi = 0;
tldc.cvPx['199600'].vc = 0;
tldc.cvPx['199600'].hf = 0;
tldc.cvPx['199600'].x = tldc.xtra;
var urlencode=function(e){e=(e+"").toString();return encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")};var stringify=function(e){var t=typeof e;if(t!="object"||e===null){if(t=="string"){e='"'+e+'"'}return String(e)}else{var n;var r;var i=[];var s=e&&e.constructor==Array;for(n in e){if(e.hasOwnProperty(n)){r=e[n];t=typeof r;if(t=="string"){r='"'+r+'"'}else if(t=="object"&&r!==null){r=stringify(r)}i.push((s?"":'"'+n+'":')+String(r))}}return(s?"[":"{")+String(i)+(s?"]":"}")}}
function insertInDom (el) { var ref = document.getElementsByTagName('script')[0]; ref.parentNode.insertBefore(el, ref);}
var TradeLabConvTracker = function (cdata) {
  var xval = 0,
      isrc;

  if ( typeof tl_check4xconv === 'function' ) {
    if ( !tl_check4xconv(199600) ) {
      xval = 1;
      if ( typeof tl_addXconv === 'function' ) tl_addXconv(199600);
    }
  }
  var i = document.createElement("img");
  i.style.position = "absolute";
  i.style.height = 0;
  i.style.width = 0;
  i.setAttribute('id', 'imgConv');
  isrc = document.location.protocol + "//its.tradelab.fr/?type=convr&x=" + xval +
    "&cdata=" + urlencode(cdata);
  if ( typeof tl_getAnalyticsData === 'function' ) {
    isrc += "&advid=" + tldc.advid + "&xur=" + urlencode(tldc.locationHref) +
      "&adata=" + tl_getAnalyticsData();
  }
  i.src = isrc;
  insertInDom(i);

  var a=document.createElement("img");
  var asrc = '';
  a.style.position = "absolute";
  a.style.height = 0;
  a.style.width = 0;    
  if ( document.location.protocol == 'https:' ) asrc="https://secure.adnxs.com/px?id=199600";
  else asrc="https://ib.adnxs.com/px?id=199600";
  if ( typeof tldc.xtra.redirect_url != 'undefined' ) asrc += '&redir='+tldc.xtra.redirect_url;
  if ( typeof tldc.xtra.order_id != 'undefined' ) asrc += '&order_id='+tldc.xtra.order_id;
  if ( typeof tldc.xtra.value != 'undefined' ) asrc += '&value='+tldc.xtra.value;
  asrc += "&t=2";
  a.src = asrc;
  insertInDom(a);
  return true;  
}
if ( tldc.cvPx['199600'].hf == 0 ) {
	tldc.cvPx['199600'].hf = 1;
	TradeLabConvTracker(stringify(tldc.cvPx['199600']));
}

})();

} catch(err) { error('CvPx2|'+err.message); }
