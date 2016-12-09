if ( typeof tldc === 'undefined' ) window.tldc = {};
if ( typeof tlrp_transaction === 'object' ) tldc.xtra = tlrp_transaction;
if ( typeof extra_info === 'object' ) tldc.xtra = extra_info;
if ( typeof tldc.xtra === 'undefined' ) tldc.xtra = {};
if ( typeof tlrp_transaction === 'object' && typeof tlrp_transaction.products === 'object' ) tldc.xtra.uids = tlrp_transaction.products;
if ( typeof tldc.advid === 'undefined' ) tldc.advid = '346414';
function error(msg) {
  var version = "2.5.8";
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

if ( typeof tldc.cvPx === 'undefined' ) tldc.cvPx = {};
tldc.cvPx['198923'] = {};
tldc.cvPx['198923'].a = 198923;
tldc.cvPx['198923'].l = [1206457,1206458,1206463,1219678,1219684,1219686,1219689,1268301,1537056,1537133,1878428,1878430,2202442,2414582,2414586,2414588,2414709,2414729,2414739,2414742,2414745];
tldc.cvPx['198923'].i = 0; 
tldc.cvPx['198923'].c = 30; 
tldc.cvPx['198923'].t = 'c';
tldc.cvPx['198923'].m = 1440;
tldc.cvPx['198923'].vi = 0;
tldc.cvPx['198923'].vc = 0;
tldc.cvPx['198923'].hf = 0;
tldc.cvPx['198923'].x = tldc.xtra;
var urlencode=function(e){e=(e+"").toString();return encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")};var stringify=function(e){var t=typeof e;if(t!="object"||e===null){if(t=="string"){e='"'+e+'"'}return String(e)}else{var n;var r;var i=[];var s=e&&e.constructor==Array;for(n in e){if(e.hasOwnProperty(n)){r=e[n];t=typeof r;if(t=="string"){r='"'+r+'"'}else if(t=="object"&&r!==null){r=stringify(r)}i.push((s?"":'"'+n+'":')+String(r))}}return(s?"[":"{")+String(i)+(s?"]":"}")}}
function insertInDom (el) { var ref = document.getElementsByTagName('script')[0]; ref.parentNode.insertBefore(el, ref);}
var TradeLabConvTracker = function (cdata) {
  var xval = 1, isrc;	
	if ( typeof tldc.tl_check4xconv === 'undefined' && typeof tl_check4xconv === 'function' ) tldc.tl_check4xconv = tl_check4xconv;
	if ( typeof tldc.tl_addXconv === 'undefined' && typeof tl_addXconv === 'function' ) tldc.tl_addXconv = tl_addXconv;
	if ( typeof tldc.tl_getAnalyticsData === 'undefined' && typeof tl_getAnalyticsData === 'function' ) tldc.tl_getAnalyticsData = tl_getAnalyticsData;		
  if ( typeof tldc.tl_check4xconv === 'function' ) {
    if ( !tldc.tl_check4xconv(198923) ) {
      if ( typeof tldc.tl_addXconv === 'function' ) tldc.tl_addXconv(198923);
    }
    else xval = 0;
  }
  var i = document.createElement("img");
  i.style.position = "absolute";
  i.style.height = 0;
  i.style.width = 0;
  i.setAttribute('id', 'imgConv');
  isrc = document.location.protocol + "//its.tradelab.fr/?type=convr&x=" + xval +
    "&cdata=" + urlencode(cdata);
  if ( typeof tldc.tl_getAnalyticsData === 'function' ) {
    isrc += "&advid=" + tldc.advid + "&xur=" + urlencode(tldc.locationHref) +
      "&adata=" + tldc.tl_getAnalyticsData();
  }
  i.src = isrc;
  insertInDom(i);
  var a=document.createElement("img");
  var asrc = '';
  a.style.position = "absolute";
  a.style.height = 0;
  a.style.width = 0;    
  if ( document.location.protocol == 'https:' ) asrc="https://secure.adnxs.com/px?id=198923";
  else asrc="https://ib.adnxs.com/px?id=198923";
  if ( typeof tldc.xtra.redirect_url != 'undefined' ) asrc += '&redir='+tldc.xtra.redirect_url;
  if ( typeof tldc.xtra.order_id != 'undefined' ) asrc += '&order_id='+tldc.xtra.order_id;
  if ( typeof tldc.xtra.value != 'undefined' ) asrc += '&value='+tldc.xtra.value;
  asrc += "&t=2";
  a.src = asrc;
  insertInDom(a);
  return true;  
}
if ( tldc.cvPx['198923'].hf == 0 ) {	
	if ( TradeLabConvTracker(stringify(tldc.cvPx['198923'])) ) tldc.cvPx['198923'].hf = 1;
}

})();

} catch(err) { error('CvPx2|'+err.message); }
