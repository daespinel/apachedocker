if(!window._eT)(function(_,W,D){
if(!W._eTag)_eTag=[]
webo_performance=0
var	L=W.location,h=L.host,n=h,N=W.navigator&&navigator.userAgent||'',
H=h.replace(/(^www|^cms|^futpsw|\.cms|\.sfr\.fr\.(casepp|ipp2))?\.sfr\.fr/,'@').replace(/^cms\./,'').replace(/^(valid.sfr-|[^/]*[.]pp[.])?messagerie(.services|-beta(-2)?|-1.)?/,'WM')+L.pathname.replace(/(\/|;JSESS.*)$/,''),
$=_.$=W.$sfr&&$sfr.fn&&$sfr||W.$&&W.$.fn&&$||W.jQuery,
ckR=_.ckR=function(s){var c=" "+D.cookie+";",i=c.indexOf(" "+s+"=");return !s||i<0?"":c.substring(i+s.length+2,c.indexOf(";",i))},
ckW=_.ckW=function(s,h,H,d){
if(h){d=new Date;d.setMinutes(d.getMinutes()+h*60);s+="; expires="+d.toGMTString()}
D.cookie=s+(H?"; domain="+H:W.location.host.indexOf(".sfr.fr")>0?"; domain=sfr.fr":"")+"; path=/"},
ckD=_.ckD=function(s){ckW(s+"=",-1)},
ckI=function(s){var c='eTagSU',v=ckR(c),i=v.indexOf(s),n;if(i<0)v+=s+'0';else if((n=1*v.charAt(i+1))<9)v=v.replace(s+n,s+(n+1));ckW(c+'='+v,4)},
ckN=function(s){var v=ckR('eTagSU'),i=v.indexOf(s);return i<0?0:1+1*v.charAt(i+1)},
X=ckR('eTagXX'),O,eT=W._eTag||[],R=D.referrer||'',
par=_.par=function(s,h){var m=(h||L.href).match("[?&#]"+s+"=([^?&#]*)");return m?m[1]:''},
ist=_.ist='//'+(ckR('ISTCMS')||h.match(/(^|\.)cms\.sfr\.fr/)?'cms.':'static.s-')+'sfr.fr/',
M=_.M=function(e,h){return typeof e=="string"&&(e.charAt(0)=='#'?(zvars[19]||'').match(e.substring(1)):(h||H).match(new RegExp('^'+e)))},
mkg=M('@/tester-ma-ligne')&&par('univers').match(/RED|PVM/)||M('red@')?'eTmkgR':'eTagMKG',
ww=W.innerWidth,
DW=function(s){D.writeln(s)},
ST=function(s,S,h){
s=s.replace(/!([;}])/g,'!important$1')
S=document.getElementsByTagName('style');if(S.length){
S=S[0]
if(h=S.styleSheet)h.cssText+=s
else S.innerHTML+=s}
else DW('<style>'+s+'</style>')},
JS=function(s){if(W.stat_js)stat_js(s);else DW('<script src="'+s+'"></script>')},
hdr=function(h,b){
if(b)ST('#ghostHeaderWrapper{display:none!}')
_.F=function(){if(W.$sfr&&W.$RN){sfrIstConfig.headerDisplaySearch=0;$sfr.istHeaderRN(b==2?'slim':'home')}else W.setTimeout(_.F,99)}
_.H=function(d,c){
if(W.gsaScriptLoaded){
c=W.sfrIstConfig||0
if(b==2&&c)c.headerDisplaySearch=0
$sfr('#eTH').html(d.content)
if(!h)$RN.fn.initHeaderView()}
else W.setTimeout(function(){_.H(d)},80)}
if(!W.$sfr||!W.sfrIstConfig)JS(ist+'resources/ist/loader.sfr.min.js')
if(h)DW('<div id="eTH" class="sfrDom"></div><script src="'+ist+'export/bloc/header/header.'+h+'.json?callback=_eT.H"></script>');else _.F()},
a='<script type="text/javascript" charset="iso-8859-1" src="//',b='"></script>',s,u,v,z=W.zvars||[],
i=ckR('CASLOGINHASH')||ckR('rme')||ckR('rmeh'),
S=D.getElementsByTagName("script"),S0=S[0],
go=function(u){ST('*{display:none}');_.sent=1;location.replace(u)},
SS=par('sonde'),
mob=_.mob=function(){return N.match(/Android.*Mobile|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|Bada|Palm|webOS|Symbian/i)},
isM=W.screen.width<768,
pro='603B24290AECE79C8888559645D7CAD7',
elD=function(){ckD('SFRBOLFEL');ckD('SfrBolfEligibility')},
bf0=function(){ckW('eTagMKG=df1152073178e5e08e74fcd3b5b3c4c7');ckW('eTmkgR=78AD1EEAD2DB0128EBE616FE2B6DB207');elD();_.PRO=0;ckD('eTncB');ckD('eTvmB')}
_.msg=function(f,n){W[n='addEventListener']?W[n]("message",f,!1):W.attachEvent("onmessage",f)}
_.dev=function(w){w=screen.width;return w<768?"m":w<1025?"t":"d"}
_.btqFav=function(d,m,i,a,f){
i='//leadformance-production-europe.s3-eu-west-1.amazonaws.com/attached_pos_photos/#/landing_page.jpg'
if(M('boutique@')){
m=L.pathname.match(/^\/([0-9]+)/)
if(m){
f=$('#eTmagFav').attr('data')
try{if(f)eval("d="+f.replace(/\/list_/,'/landing_').replace(/\n/,'<br/>'))}catch(e){}
if(d)d.id=m[1]
if(!d){
a='address:eq(0) span:eq('
f=function(o){return($(o).text()||'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ')}
d={ 'id':m[1],
'adr':f(a+'0)'),
'vil':f(a+'1)')+' '+f(a+'2)'),
'tel':f('.pos-detail-phone'),
'img':$('#carousel-example-generic img:eq(0)').attr('src')||''}}
m=d.img.match(new RegExp(i.replace('#','([0-9]+)')))
if(d.id)ckW('eTmf='+d.id+'~'+d.adr+'|'+d.vil+'~'+d.tel+'~'+(m?m[1]:escape(d.img||'')),8760)}}
d=ckR('eTmf').split('~')
if(d.length<4)return
m=d[3]||0
m=m>0?i.replace('#',m):unescape(m)
a=d[1].split('|')
return {'id':d[0],'adr':a[0]||'','vil':a[1]||'','tel':d[2],'img':m}}
_.ac=function(o,n,i,a){$=_.$;if(o.length){
_.ACn=(n=_.ACn||0)+1
i='#eTac'+n
ST(i+'{position:relative;z-index:49999;display:none;min-width:99px;background:#fff;border:1px solid #444}'+i+'>p{line-height:20px}')
o.attr('autocomplete','off').after('<div id="eTac'+n+'"></div>')
$(i).css('font',o.css('font'))
_['ac'+n]=Function('h','$("'+i+'").html(h)')
o[0].ac=n
o.keyup(function(o,q,n,a){
q=(o=$(this)).val()
a=$('#eTac'+(n=this.ac))
a[q?'show':'hide']()
$.getScript('//www.sfr.fr/recherche/jsp/AC.jsp?c=_eT.ac'+n+'&r='+q)})}}
if(X<0||M('123parametrez.services@/ota/lbo'))_.sent=1
else{
if(!(v=(par("partnerid")||par("partnerId"))+'|'+(par('memberid')||par('tduid'))+'|'+par('partnername')).match(/^\|.*\|$/))ckW(mkg+'='+v,720)
if(M('m@/box-internet')&&L.href.match(/[#&?]ndi=/))ST('#bloc-eligibilite{display:block!}')
if(M('@/offre-internet/fibre-optique/')&&L.protocol=='https:')go(L.href.replace(/^https:/,'http:'))
if(par('univers')=='PVM'&&par('VM')!='2'&&M('@/tester-ma-ligne/eligibility-by-')&&(v=ckR('SFRBOLFEL')))!function(f,w,b,d,m,i,j,u){
u=v.replace(/^"|"$/g, '').split('#')
for(i=0;i<u.length;i++){
v=u[i].split(':')
for(j=0;j<v.length;j++){
if(v[j].match(/^U=PVM/))f=1
if(w=v[j].match(/^(N|A)=(.*)/))d=w[2]
if(w=v[j].match(/^M=(.*)/))m=w[1]}		
if(f)break}
if(f&&d&&m&&!m.match(/^ADSL$/))go('/recherche/jsp/vm-fibre.jsp?D='+d+'|'+m.replace(/ADSL/,'DSL').replace(/CBL/,'CABLE')+'&V='+ckR('eTvmB')+'&M=0')}()
if(ww<984&&M('red@/offre-internet/fibre-optique$'))
ST('.SFR_Section_content{width:initial!}.SFR_Table_col{display:block!;padding:8px 20px!}.SFR_Table_col-first{width:auto!}.SFR_Cell_image{text-align:right!;position:absolute;top:50px;right:20px;max-width:40%}#table-caption,.SFR_User{display:none}')
if(ww<984&&M('red@/offre-internet/fibre-optique/personnalisez-votre-box.htm'))ST('.SFR_Section_content{width:initial!}[data-sfr-btn-more-options]{display:none!}.SFR_ModalBody{width:'+ww+'px!}'+
'.SFR_grid3>*{width:auto!}.SFR_MainContent h1,.h1-like{max-width:40%!}h1,.h1-like,h3{font-size:20px!;padding:0 4px!}.ariane{display:none!}')
if(ckR('ISTRED')>0)ckW('eTred=1',1);else ckD('eTred')
if(M('@/terminer-ma-commande/confirmation'))ST('#claraVista2{display:none!}')
if(M('@/forfait-mobile/configurateur/offer/')&&par('context')!='CHANGE')ST('.offerWithMobileChoice .choiceOfferPriceContainer{display:none!}')
if(M('@/forfait-mobile/configurateur/'))ckW('eTpp='+escape(L.href),720)
if(M('@/offre-internet/(box-(adsl|fibre)|fibre-optique)'))ckW('eTpp='+escape(L.href.replace(/\?displayInIFrame=true/,'')),720)
if(X&&M('box@/bolsignup/configurator.htm'))ckW('eTpp='+escape('//www.sfr.fr/box-internet/panier.html'),720)
if(M('red@|@/offre-internet/'))ST('.ui-dialog{z-index:58000!}')
if(M('mes-contacts.services@'))ST('.contacts{height:621px!;overflow-y:auto!}')
ST('iframe[name=google_conversion_frame],iframe#google_conversion_frame,#header .bandeau_cookie{display:none}')
if(R&&!R.match(/^https?:\/\/[^\/]*\.sfr\.fr/))ckW('ext_ref='+escape(R),1)
if(R.indexOf('5555/selenium')>-1||N.indexOf('witbe-newsfr')>-1||SS)ckW('eTagSS=1',1)
if(N.indexOf('F-Secure CUIF')>-1)_.noP=1
if(W!=W.top&&M('@/parcours/premiere-authent/'))W.top.location.replace(location.href)
if(W!=W.top&&M('@/tester-ma-ligne'))ST('html,body{height:100%;overflow-y:auto!;overflow-x:hidden!}.SFR_M8PrvfFE{background:transparent!;padding:0!}')
if(M('WM@'))ST('#loading{z-index:222222!}')
if(X&&M('WM@'))ST('#SFReTAGArrowMain,#editorialBlocs{max-width:996px!;margin:10px auto 0!}#page{max-width:none!}')
if(M("(box)?@/bolsignup(-1)?/configurator.htm"))ST('#form .step1 .promo .offrePrix{height:120px}#form .step1 .promo .corner{height:194px}')
v=ckR('eTavis')
if(M('@/mobile/donner-mon-avis')&&v.match(/forfait-mobile/)){ckW('eTavis=1',1);go(unescape(v))}
if(M('@/forfait-mobile/telephone/')&&v==1)ST('body{display:none}')
SHR=ckR(mkg).match(/AAB61E42E095FBDFC88A666756815C46/)
if(W==W.top&&!par('partnerid')&&!M('(red)?@/terminer-ma-commande')&&(ckR('eTncB')||ckR('eTvmB')||SHR)){
v=R.split('/')[2]
if(R==''&&!M('(m|box)@')||!(v.match(/\.sfr\.fr$/)||v.match(/\.showroomprive.com$/)&&SHR||v.match(/\.numericable\.fr$/)&&ckR('eTncB')||v.match(/\.virginmobile\.fr$/)&&ckR('eTvmB'))){SHR=0;bf0()}}
if(SHR&&(M('@/(offre-internet|terminer-ma-commande)|^box@/bolsignup/mobile/')))ST('.eTag_show_suppr{display:none!}')
if(R.match(/\.numericable\.(mobi|fr)\//)||M('(red)?@/offre-internet')&&par('sfrcpid')=='t10_nc_redirection-sfr')ckW('eTncB=1',2)
if(M('@/box-internet/offres-box-de-sfr/numericable')&&W.$sfr){
ckW('eTncB=1',2)
v=R.match(/numericable.mobi/)||W.innerWidth<768
var c=(v?'cd21ec93e72a14b1855ae61d0cd70286':par('ctxId'))
ckW(mkg+'='+c+(X?'|||1':'||'),720)
ckW('eTel='+par('ndi'),720)
_.BSU='//box.sfr.fr'+(X?'.casepp.sfr.fr':'')+'/bolsignup'+(v?'/mobile':'')+'/start.htm?ctxId='+c+'&ndi='+par('ndi')
if(v)go(_.BSU);else $(D).ready(function(){$('#main').html('<iframe src="'+_.BSU+'"></iframe>')})}
if(M('@/forfait-mobile-numericable/'))ckW('eTncB=1',2)
if(W==W.top&&ckR('eTncB')){
if(M('(red)?@/(forfait-mobile-numericable|terminer-ma-commande|offre-internet)/|^box@/bolsignup/|^@/box-internet.*numericable')&&W.$sfr){
ST('.ariane,.breadcrumbRN.sfrRN{display:none!}header.sfrNC{visibility:hidden}')
$sfr.istHeaderService=$sfr.istHeaderHome=f=function(){$sfr('body').prepend(
'<header><div style="background:#222;height:53px;margin:0;padding:0"><div style="max-width:984px;padding:8px;margin:0 auto;text-align:left"><a href="https://offres.numericable.fr/" title="Numericable">'+
'<img src="//offres.numericable.fr/v1.5/medias/images/common/logo.png" alt="Numericable" style="display:inline"/></a> '+
'<img src="//static.s-sfr.fr/media/logo-3.jpg" alt="SFR" style="width:36px;display:inline"/></div></div></header>')}
$sfr.istFooterLight=$sfr.istFooter=$sfr.istFooterRN=function(){$sfr('body').append(
'<footer><div style="font-family:Arial;font-size:14px;background:#222;margin:0;padding:0"><div style="color:#888;max-width:984px;padding:8px;margin:0 auto;text-align:left">'+
'<p style="float:right">© 2015 SFR. Tous droits réservés.</p>'+
'<p><a style="color:#888" target="_blank" href="https://www.sfr.fr/mentions-legales.html">Informations légales</a></p><p style="margin:4px 0;font-size:11px">SFR, SA au capital de 3.423.265.598,40 €, 343 059 564 RCS Paris - 1 Square Bela Bartok 75015 Paris</p>'+
'</div></div></footer>')}
if(M('(red)?@/terminer')){f();setTimeout($sfr.istFooter,999)}}
else bf0()}
_.PRO=ckR(mkg).match(pro)
if(M('@/(offre-sfr-pro|box-internet/pro(/|$))')){ckW(mkg+'='+pro+'||',720);if(!_.PRO)elD();_.PRO=1}
else if(_.PRO&&M('@(/box-internet|/offre-internet/(box-fibre|fibre-optique)|/telephonie-mobile/multi-?pack)'))bf0()
if(M('@/tester-ma-ligne/eligibility-by-ndi.htm')&&(v=par('VM')))ckW('eTvmB='+v,2)
if(M('@/tester-ma-ligne/eligibility-(niagara|resultats).htm')&&ckR('eTvmB'))ST('body{visibility:hidden!}')
if(W==W.top&&ckR('eTvmB')){
if(M('^red@/(offre-internet|terminer-ma-commande)')&&W.$sfr){
ST('.ariane,.breadcrumbRN.sfrRN,.alreadyClient,.openEligibilityIframe{display:none!}header.sfrNC{visibility:hidden}')
$sfr.istHeaderService=$sfr.istHeaderHome=f=function(){$sfr('body').prepend(
'<header><div style="background:#393939;height:80px;margin:0;padding:0"><div style="max-width:984px;margin:0 auto;text-align:left"><a href="https://www.virginmobile.fr/offre-box" title="Virgin Mobile">'+
'<img src="//static.s-sfr.fr/media/logovm.png" alt="Virgin Mobile" style="display:inline;height:70px"/></a> '+
'<img src="//static.s-sfr.fr/media/logored.png" alt="SFR" style="display:inline;height:76px;margin:0 0 0 9px"/></div></div></header>')}
$sfr.istFooter=$sfr.istFooterRN=$sfr.istFooterLight
if(M('red@/terminer')){f();setTimeout($sfr.istFooterLight,999)}}
else bf0()}
if(M('box@/bolsignup')){
ST('#header li,.userLinks,.mainNavigation,.mainSearch{display:none!}#header li.homeSfr{display:block!}')
;(function(c){c.headerName="";c.headerDisplayUserInfo=c.headerDisplayMiscLinks=c.headerDisplaySearch=!1})(sfrIstConfig)}
if(M('red@/forfait-mobile-sans-engagement/'))ST('.recommended-offer-pic,.csstooltip-slgiant,.csstooltip-slgiant-small{display:none!}')
if(M('@/forfait-mobile(-numericable)?/offres/forfait-mobile'))ST('img.giant-offre{display:none}')
if(M('@/forfait-mobile(-numericable)?/configurateur/device'))ST('.offerRowSLGiant{display:none}')
if(M("recyclage-mobile@"))hdr(0,1)
if(M("(cartewifi|sfrlive)@"))hdr(0,2)
if(M("atelier@"))N.match(/MSIE [3-9]/)?ST('#ghostHeaderWrapper{display:none!}'):hdr(0,2)
if(M('www.vosmms.com'))hdr(0,2)
if(M('smartphones@')){ST('#IST{display:none}');hdr(0,2)}
if(M('minutebuzz@')&&!mob())hdr('home/40000/home')
if(M('telephone-occasion@/rechercher-telephone'))ST('#subNavigation{display:none}')
if(M('@/webview/'))ST('#CkC{display:none}')
if(M('@/cas/login$')&&par('domain')=='sfrcloud-mobile')sfrIst0=1
if((M('@/cas/login$')&&W._cfCas&&(par('service').match(/messagerie[^.]*\.sfr\.fr/)||par('theme')=='mire-sfrmail')||M('WM@/webmail/authentication.html'))&&$&&$(W).width()>1024){ST('#editoTitle,#editoImage{display:none}');JS(ist+'stats/authMsg.js')}
if(M('@/cas/login$')&&W._cfCas&&$&&$(W).width()>1024&&par('service').match(/\.sfr\.fr(%2F|\/)routage/)){ST('#editoTitle,#editoImage{display:none}');JS(ist+'stats/authEC.js')}
if(M('@/telephonie-mobile/nouvel-iphone.html'))go('iphone/')
if(ckR('eTabE')>1&&M('@/tester-ma-ligne/eligibility-by-ndi(\.htm|)$'))go('eligibility-by-ndi-b.htm'+L.search)
if(M('@/sfr-et-moi/vos-services-sfr/international/abonnes'))go(L.href.replace(/\/abonnes/,''))
if(M('(box)?@/bolsignup/ineligibility.htm')&&(v=ckR('eTel').match(/^([0-9]{10})$/))){ckW('eTel=0~'+v[1],720);go('search-address-experian.htm')}
if(M('m@/home/(home-)?espaces-sfr(-details)?.html$'))go('//boutique.sfr.fr/')
if(M('@/telephonie-mobile-pro/packs-metiers.html$'))go('solutions-pro.html')
if(M('recyclage-mobile@')&&mob())go("//recyclage-mobile.m.sfr.fr/")
if(M('adsl@/fibre-optique/'))go("//adsl.sfr.fr/fibre/")
if(M('adsl@/services-carres$'))go("//adsl.sfr.fr/box-de-sfr.html")
if(M('@/television$'))go("//adsl.sfr.fr/television/")
if(isM&&(v=M('accessoires@(/accessoire(s-(mobiles|adsl).html|/([0-9]*)/.*))?$')))go("//accessoires.m.sfr.fr/"+(v[4]?"mobile/fiche_article.html/"+v[4]:v[3]?(v[3]=='adsl'?'fixe':'mobile')+'/accueil.html':''))
if(M('[^.]*@')||par('multibanner'))W.arrow=W.pontis={rq:[],request:function(r){this.rq.push(r.blockId?r:{'blockId':r})}}
u=W._stats_univers||''
if(M('@/(forfait-mobile(-fut)?|terminer-ma-commande|tablette-cle-internet)/')){
if(ckR('eTbolR')||W.bol&&bol.isResponsive){
ckW('eTbolR=1',1)
if((_.bRm=isM)&&u.match(/_bout$/i))_stats_univers='pwp_boutique'}}
if(isM)_stats_univers=
u.match(/^pwp/)?u:
u.match(/^forum/i)?'forum_mob-comm':'pwp'+(
u.match(/_bout$/i)?'_boutique':
u.match(/_epropal$/i)?'_epropal':
u.match(/^(assistance(_reunion)?|espace_client|moncompte)$/i)?'':
u.match(/^auquotidien$/i)?'_infosloisirs':
u.match(/^corporate$/i)?'corporate':
u.match(/^(livepass|preferences)$/i)?'_'+u:'_transverse')
if(X&&M('@/terminer-ma-commande/informations'))SFRAPP=1
if(h.match(/(^cms\.|\.cms\.sfr.fr)/))n=h="cms.sfr.fr"
if(h!="localhost"&&h!="www-devsf"&&h!="futpsw.sfr.fr"&&h!="cms.sfr.fr"){h="www.sfr.fr";n="static.s-sfr.fr"}
for(var k="www.s-sfr.fr";k;k=k.charAt(0)=="w"?"mist.m.sfr.fr/mist/1":0)
for(var j=0;j<S.length;j++) if(S[j].src.indexOf("//"+k+"/stats/header.js")>-1){_stats_zf=1;n=k;i=0;if(!ckR('s_vi'))_stats_sent=1}
_.INC=M('intranet.numericable.com')
s=a+n+'/stats/stats'+(ckR('eTagV2')?'2':'')+'.js'+b
if(i)s+=a+h+'/fragments/profile-stats.js?u='+i.replace(/["=;]/g,'')+b
else{
ckW('sfrUserUnreadMessages=',-1,h)
_.pf=1;z[6]='';z[8]=z[13]=z[14]=z[16]=z[18]=z[19]=z[20]='99';z[10]='1'}
zvars=z
DW(s)
_eTagEnd=0
ckW('eTagAB='+(b=ckR('eTagAB')||Math.random()*100|0),720)
if(!/^[-_0-9]{10,}/.test(v=ckR("evar28")))v="2_"+((new Date).getTime()/1e3-14e8|0)+"_"+(Math.random()*1e9|0)
ckW("evar28="+v,9504)
ckW('eTbfI='+(SS||ckR('eTbfI')||2),720)
ckW('eTsAd='+(ckR('eTsAd')||(b<50?2:1)),2)
ckW('eTrnEC='+(SS||ckR('eTrnEC')||(3+(b&2))),2)
ckW('eTbolM=2',2)
ckW('eTcVa='+(ckR('eTcVa')||(b<80?2:1)),8)
ckW('eTbolF='+(SS||(X?2:ckR('eTbolF')||(b<100?2:1))),2)
_.onL=W.onload;W.onload=function(){_.onL&&_.onL();if(!W._eTf&&W.stat_js)stat_js('//static.s-sfr.fr//stats/footer.js')}
}})(_eT={zf:_stats_zf=0},window,document)
