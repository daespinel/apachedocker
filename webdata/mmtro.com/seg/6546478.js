(function(){var m=new function(n){this._getCookieSeg=function(a){var d,e,f,h=document.cookie.split(";");for(d=0;d<h.length;d++)if(e=h[d].substr(0,h[d].indexOf("=")),f=h[d].substr(h[d].indexOf("=")+1),e=e.replace(/^\s+|\s+$/g,""),e===a)return unescape(f);return""};var r=window.location.href;window!==window.top&&(document.referrer&&""!==document.referrer)&&(r=document.referrer);var q=this._getCookieSeg("__troRUID"),l=null;q&&36==q.length&&(l=parseInt(q.substr(33),16));var d=function(a){try{var d=("https:"==
document.location.protocol?"https://secure":"https://ib")+".adnxs.com/px?",d=d+("id="+a);(new Image(1,1)).src=d+"&t=2"}catch(e){}},m=function(a,m){var e=[],f=[],h=[],n=[];"4016041"==a.rtgidproduit&&"product"==a.rtgpg&&e.push(2214269);"4016041"==a.rtgidproduit&&d(426429);"3784630"==a.rtgidproduit&&(d(146582),e.push(1366785,2395710));"subsubcat"==a.rtgpg&&(d(186757),e.push(1693691));"photo_camescope"==a.rtgcat&&(d(186755),e.push(1693698));m&&(d(186753),e.push(1693704));"subcat"==a.rtgpg&&(d(186756),
e.push(1693694));if("order"==a.rtgpg){if("rtgcmdid"in a){var b=a.rtgcmdid[0][0];d("186759&order_id="+b)}else d(186759);e.push(1693684)}"order"==a.rtgpg&&"1"==a.rtgcmdattributed&&("rtgcmdid"in a?(b=a.rtgcmdid[0][0],d("510912&order_id="+b)):d(510912));"1"==a.rtgcat&&(d(186761),e.push(1693701));a.rtgabanpan&&(d(186758),e.push(1693687));void 0!==l&&(0<=l&&2048>l)&&e.push(1828491);void 0!==l&&(2048<=l&&4096>l)&&e.push(1828527);("8871388"==a.rtgidproduit||"8869634"==a.rtgidproduit||"3342450"==a.rtgidproduit||
"3799816"==a.rtgidproduit||"3144127"==a.rtgidproduit||"3842029"==a.rtgidproduit||"4049314"==a.rtgidproduit||"4027809"==a.rtgidproduit||"1293656"==a.rtgidproduit)&&"product"==a.rtgpg&&e.push(2214270);"rtgcmdid"in a&&("rtgcmdidproduit"in a&&-1!=a.rtgcmdidproduit[0][0].split("|").indexOf("3784630"))&&("rtgcmdid"in a?(b=a.rtgcmdid[0][0],d("146581&order_id="+b)):d(146581),e.push(1366786));if("order"==a.rtgpg&&"1"==a.rtgcmd&&a.rtgcmdidproduit){var b=a.rtgcmdidproduit[0][0].split("|"),k=!1,c;for(c in b)if("4016041"==
b[c]||"8869634"==b[c]||"3342450"==b[c]||"3799816"==b[c]||"3144127"==b[c]||"3842029"==b[c]||"4049314"==b[c]||"4027809"==b[c]||"1293656"==b[c]){k=!0;break}k&&("rtgcmdid"in a?(b=a.rtgcmdid[0][0],d("426361&order_id="+b)):d(426361),e.push(2214274))}if("basket"==a.rtgpg&&"1"==a.rtgabanpan&&a.rtgidpdtaban){b=a.rtgidpdtaban[0][0].split("|");k=!1;for(c in b)if("8871388"==b[c]||"8869634"==b[c]||"3342450"==b[c]||"3799816"==b[c]||"3144127"==b[c]||"3842029"==b[c]||"4049314"==b[c]||"4027809"==b[c]||"1293656"==
b[c]){k=!0;break}k&&e.push(2310112)}if("basket"==a.rtgpg&&"1"==a.rtgabanpan&&a.rtgidpdtaban){b=a.rtgidpdtaban[0][0].split("|");k=!1;for(c in b)if("4016041"==b[c]){k=!0;break}k&&e.push(2310111)}RegExp("http:\\//www\\.darty\\.com\\/nav\\/recherche\\\\?srctype=list&text=actifry&dartycid=epub_epub_seb-actifry_rtb-darty-sat-remb","gi").test(r)&&d(450961);RegExp("^https://www.darty.com/achat/boutique/moulinex-cuisine-companion/index.html","gi").test(r)&&(d(536191),e.push(2864105));if("order"==a.rtgpg&&"1"==
a.rtgcmd&&a.rtgcmdidproduit){c=a.rtgcmdidproduit[0][0].toLowerCase();c=c.split("|");var b=!1,g;for(g in c)if("3784630"==c[g]){b=!0;break}b&&(d(536189),e.push(2864101))}"3784630"==a.rtgidproduit&&"product"==a.rtgpg&&(d(536190),e.push(2864103));"subsubcat"==a.rtgpg&&"robot_cuiseur"==a.rtgsubsubcat&&(d(536192),e.push(2864107));"subcat"==a.rtgpg&&"robots_de_cuisine"==a.rtgsubcat&&(d(536193),e.push(2864110));if("basket"==a.rtgpg&&"1"==a.rtgabanpan&&a.rtgidpdtaban){c=a.rtgidpdtaban[0][0].toLowerCase();
c=c.split("|");b=!1;for(g in c)if("3784630"==c[g]){b=!0;break}b&&(d(536205),e.push(2864216))}if("order"==a.rtgpg&&"1"==a.rtgcmd&&a.rtgcmdidproduit){c=a.rtgcmdidproduit[0][0];c=c.split("|");b=!1;for(g in c)if(RegExp("^4049853$","gi").test(c[g])){b=!0;break}b&&(d(541215),e.push(2897902))}if("basket"==a.rtgpg&&"1"==a.rtgabanpan&&a.rtgidpdtaban){c=a.rtgidpdtaban[0][0];c=c.split("|");b=!1;for(g in c)if(RegExp("^4049853$","gi").test(c[g])){b=!0;break}b&&(d(541219),e.push(2897905))}if("product"==a.rtgpg&&
a.rtgidproduit){c=a.rtgidproduit[0][0].split("|");b=!1;for(g in c)if(RegExp("^4049853$","gi").test(c[g])){b=!0;break}b&&(d(541216),e.push(2897903))}"subsubcat"==a.rtgpg&&"expresso_avec_broyeur"==a.rtgsubsubcat&&(d(541218),e.push(2897904));if(0<e.length)try{var p=("https:"==document.location.protocol?"https://secure":"https://ib")+".adnxs.com/seg?",p=p+("add="+e.join(",")),p=p+("&remove="+f.join(","));(new Image(1,1)).src=p}catch(q){}(0<h.length||0<n.length)&&asyncMmtro(h,n)},s=function(){try{for(var a=
0;a<arguments.length;a++)n.push(arguments[a])}catch(d){}for(a={};0<n.length;)try{var e=n.shift(),f=e.shift().toLowerCase();0===f.indexOf("_")&&(f=f.substring(1,f.length));a[f]=e}catch(h){}return a};this.push=function(){dico=s.apply(this,arguments);m(dico)};this._init=function(){dico=s();m(dico,!0)}}(_troq.segq);_troq.segq=m;m._init()})();
