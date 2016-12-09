function eTagS(u,f){if(u&&f){
u=u.replace(/"/g,'')
if(f&1)document.writeln('<script src="'+u+'"></script>')
if(f&2)stat_js('//www.sfr.fr/recherche/js/log.js?eTagU='+escape(u)+'&e46='+escape(s.eVar46)+'&e19='+zvars[19])
if(f&4)stat_js(u)
if(f&8&&document.images)new Image(1,1).src=u
if(f&16)_eT.$('body:eq(0)').append('<iframe style="height:0;width:0;border:0;display:none" src="'+u+'"></iframe>')}}
function eTagW(o,a){var w=window,b=w[o];a=a.replace(/"/g,'\\"');w.setTimeout(b?a:'eTagW("'+o+'","'+a+'")',b?5:200)}
function eTagM(h,e){return typeof e=="string"&&(e.charAt(0)=='#'?
(zvars[19]||'').match(e.substring(1)):
h.match(new RegExp('^'+(ckR('eTagXX')?e.replace(/^box@/,'box@(\\.(casepp|ipp2)@)?'):e).replace(/^@/,'(www|cms)\\.sfr\\.fr').replace(/@/g,'(\\.cms)?\\.sfr\\.fr'))))}
function eTagPopin(u,x,y,b){
var _=_eT,$=_.$,f=function(e,d){
d=(e||event).data
if(d>0)$('#eTagPopin').remove()
if(d==2)_.c2cP('51bf0c3780df1a0f6a000001')}
f({data:1})
if(b&1)_.msg(f)
if(!x)x=400
if(!y)y=400
if(b&8)y+=20
var D=document.createElement("div"),w=$(window),h=w.height(),up=h<y+140,dh=$(document).height()
if(up)setTimeout(function(){scrollTo(0,0)},90)
D.setAttribute("id","eTagPopin")
D.setAttribute("style",'overflow-x:hidden;margin:0;padding:0;z-index:99998;position:'+(up?'absolute':'fixed')+';top:0;left:0;border:0;width:100%;height:'+(up&&dh<h?h+'px':'100%')
+';background:'+(b&4?'rgba(255,255,255,.7)':'transparent url(//static.s-sfr.fr/media/fond-layer-75pct.png) repeat')
+(u?'':';display:none'))
D.innerHTML='<div style="margin:'+(h<y?0:(h-y)*4/9)+'px auto;padding:0;'+(b&16?'max-':'')+'width:'+x+'px;min-height:'+y+'px;'
+(b&2?'background:transparent;border:0 solid none':'background:white;border:2px solid #666')+'">'
+(b&1?'':'<p style="font-family:Arial;font-size:9px;position:relative;z-index:1;padding:2px;margin:0 0 -12px;float:right;cursor:pointer;color:#777" onclick="_eT.$(\'#eTagPopin\').remove()">FERMER <b style="font-size:12px;font-weight:bold">X</b></p>')
+(b&8?'<a style="cursor:pointer;float:right;text-decoration:none;color:#999;font-weight:bold;font-size:17px" onclick="parent.postMessage(\'1\',\'*\')">X</a><p style="padding:2px 0;font-size:15px;font-weight:bold;color:#e2001a;margin:0;text-align:center">'+(_.piT||'')+'</p>':'')
+(u&&u.match(/^</)?u:u?'<iframe scrolling="0" frameborder="0" src="'+u+'" style="width:'+(x-16)+'px;height:'+(y-16)+'px;border:0 solid transparent;background:transparent;margin:8px" allowTransparency="true"></iframe>':
'<div style="padding:9px 0 0 0" id="eTagArrowPopin"></div>')+'</div>'
_.piT=''
document.getElementsByTagName("body")[0].appendChild(D)
$('#eTagPopin').click(function(){$(this).remove()})
$('#eTagPopin>div').click(function(e){e.stopPropagation()})
return!1}
function eTagPopinSortie(n,s){
var W=window,_=_eT,$=_.$
if(!n)n=1
var e=_.ckR('eTagPS')
if(e&n)return!0
if(_.$('.layerShare:visible').length)return!0
ckW('eTagPS='+(e|n),8)
if(n&8){if(_.iSC)_.iSC('sortiesite');if(W.QSI)QSI.API.run()}
else if(n&4){
$('body:eq(0)').append('<iframe id="IFS" src="//www.sfr.fr/etag/survey.html'+(s?'?s='+s:'')+'" style="display:none;width:100%;height:100%;position:fixed;top:0;left:0;border:0;z-index:99999"></iframe>')
_.msg(function(e){
var i=$('#IFS')
if((e||event).data){
i.show()
_.ckW('eTagSVP=1',720)}
else i.hide()})}
else if($&&n&16){_.piT="Vous êtes sur le point de quitter la boutique en ligne";$('#c2cD a').click()}
else if(n&992&&_.piF)_.piF()
else eTagPopin((_.cms?"//cms.":"//static.s-")+'sfr.fr/export/bloc/'+(_.M('red@')?'django':'richtext')+'/popin.sortie.'+(n&2?'adsl.promo':'signup'+(_.M('red@')?'.red':''))+'/default.html',648,332,0)
return!1}
function eTagSortie(n){if(_eT.$&&!(ckR('eTagPS')&n)){
var _=_eT,$=_.$,m=0,t=0,ae=window.addEventListener
if(!_.PSF){_.PSF=1;(ae?ae:document.attachEvent)((ae?'':'on')+"mouseout",function(e){e=e||event;if(e.clientY<0)eTagPopinSortie(n)})}
if(n&1)$('#block-click-to-help-top a').click(function(){ckW('eTagPS=3',4)})
if(n&25){
$.each($('.sfrRN a,.headContent a,.footContent a'),function(a,h){a=$(this);h=a.attr('href');t++;if(h&&h.match(/\/\//)&&!h.match(/^#|sfr.fr\/((telephonie|forfait)-mobile|box-internet)/)&&!a[0].eTag){a.click(function(){return eTagPopinSortie(n)});a[0].eTag=1;m++}})
if(!t||m)setTimeout('eTagSortie('+n+')',500)}}}
function eTagFib(NI){
var E=NI&&NI.RESULTAT_MAIA?NI.RESULTAT_MAIA.ELIGIBILITE_TECHNIQUE_MAIA:0,S=E&&E.MAIA_STATUS?E.MAIA_STATUS.VALUE:-1,f="La Fibre de SFR ",
RA=NI.RESULTAT_RA&&NI.RESULTAT_RA.ELIGIBILITE_TECHNIQUE_RA&&NI.RESULTAT_RA.ELIGIBILITE_TECHNIQUE_RA.RA_ID?NI.RESULTAT_RA.ELIGIBILITE_TECHNIQUE_RA.RA_ID.VALUE:0,
RE=NI.RESULTAT?NI.RESULTAT.ELIGIBILITE_TECHNIQUE:0,$=_eT.$,
o=$('.buttons>.whiteButton')
o.removeClass('whiteButton floatR').addClass('inlineBlock redButton')
o.attr("href",'https://mkg.sfr.fr/webservices/immo/default.asp?step=31'+(RA?'&idRa='+RA:'')+(RE?
(RE.CODECOMMUNEINSEE?'&cp='+RE.CODECOMMUNEINSEE.VALUE:'')+
(RE.LIBELLECOMMUNE?'&ville='+RE.LIBELLECOMMUNE.VALUE.replace(/ /g,'+'):'')+
(RE.NUMEROVOIE?'&numVoie='+RE.NUMEROVOIE.VALUE:'')+
(RE.LIBELLEVOIE?'&nomVoie='+RE.LIBELLEVOIE.VALUE.replace(/ /g,'+'):''):'')+
'&ndi='+NI.NDI)}
(_eTf=function(W,D,_,$){
_=W._eT
if(!_||_.sent)return
$=_.$=W.$sfr&&$sfr.fn&&$sfr||W.$&&$.fn&&$||W.jQuery
if(!_.pf&&(!W.zvars||!zvars[19])){
eTagS('ErrCAS',2)
_.pf=2
D.writeln('<script src="//www.sfr.fr/fragments/profile-stats.js?u='+(Math.random()*1e9|0)+'"></script><script src="//static.s-sfr.fr/stats/footer.js"></script>')
return}
if(_.pf==2)eTagS('ErrCAS2',2)
var ckR=_.ckR,ckW=_.ckW,par=_.par,M=_.M,b,f,o,r,t,v,
_A=W.arrow||[],Ab='blockId',Ac='containerSelector',Ad='defaultText',Af='callback',Ar='request',
MKG=(ckR(M('red@')?'eTmkgR':'eTagMKG')+'|||').split('|'),mkg=MKG[0],acn='21cac24e34b1224321a4252e2cab846b',
l=D.location,h=l.host+l.pathname.replace(/\/$/,''),X=ckR('eTagXX'),Rf=D.referrer||'',TS=new Date().getTime(),TH=TS/36e5-376944|0,
N=navigator.userAgent||'',
to=function(f,t){W.setTimeout(f,t||300)},
ti=function(f,t){W.setInterval(f,t||200)},
$B=$&&$('body').eq(0),
$rm=function(o){$(o).remove()},
$t=function(o){return $(o).text()||''},
$h=function(o){return o&&$(o).html()||''},
$hC=function(o,r){return $h(o).indexOf(r)>-1},
$hM=function(o,r,i){i=-1;while(++i<o.length)if($h(o.eq(i)).match(r))return o.eq(i);return $([])},
$hR=function(o,r,s){$.each($(o),function(){$(this).html($h(this).replace(r,s))})},
$p=function(o){return $(o).parent()},
$w=function(s,f,n,o){o=$(s);if(o.length<(n||1))to(function(){$w(s,f)});else o.each(f)},
f0=function(){},
r6=Math.random()*1e6|0,
w3=function(s){return s.replace(/\*([^;}]*)/g,"-khtml-$1;-moz-$1;-webkit-$1;-o-$1;-ms-$1;$1")},
cpt=_.cpt=function(s,f,x,y,z,c,b,a,F,I){
a=a||'#fff'
b=b||'url(//static.s-sfr.fr/media/bg-compteur.png) no-repeat'
c=c||'#fff'
$(s).css('position','relative').append('<style>'+
'#eTcpt{position:absolute;top:'+y+'px;left:'+x+'px;height:80px;width:204px;background:transparent;z-index:99;font-family:"SFR-regular"}'+
'#eTcpt>div{float:left;width:44px;height:42px;margin:0 6px 0 0;padding:2px 0;background:'+b+';color:'+a+';text-align:center;font-size:10px}'+
'#eTcpt>div>p{margin:0 0 2px;text-align:center;line-height:28px;font-size:22px;color:'+c+';font-family:"SFR-bold"}'+
'#eTcpt>p{margin:0 2px 0;font-size:17px;color:'+a+'}'+
'</style><div id="eTcpt"/>')
I=setInterval(function(){
var d=new Date().getTime()/1e3|0,t=f>d?f-d:0,j=t/86400|0,h=(t/3600|0)%24,m=(t/60|0)%60,s=t%60,p='</div><div><p>'
if(!t){clearInterval(I);F&&F()}
$('#eTcpt').html((z?'<p>'+z+'</p>':'')+'<div><p>'+
j+'</p>jour'+(j>1?'s':'')+p+
(h>9?'':'0')+h+'</p>heure'+(h>1?'s':'')+p+
(m>9?'':'0')+m+'</p>minute'+(m>1?'s':'')+p+
(s>9?'':'0')+s+'</p>seconde'+(s>1?'s':'')+'</div>')},333)},
inq='https://sfr.inq.com/chatskins/launch/inqChatLaunch316.js',INQ=0,
CC='9|501a913c3cc716aa21000000|501a91513cc7165126000000|509bd06d58799d5222000000|52f281eb7fdf1a8c3d8b4568|526fcc6380df1ad6383c99d8|51bf0c3780df1a0f6a000001|7|54bf72277fdf1a73788b4567|54d096417fdf1aa2598b4568|550b093a80df1a47348b4568|51af62d980df1aa66d000001|50d077067fdf1a0d76000000'.split('|'),
ww=W.innerWidth,    
c2c=_.c2c=function(c,b,a,z,C,r){
if(ckR('eTvmB')||SHR)return
if(M('@/(box-internet|telephonie-mobile)$')&&TH%24%20>6)b=b|8
z=ckR('eTcc0')
if(!$||600>ww&&c!=7||c==4&&z&&TH>z)return
if(!(b&1||N.match(/MSIE[6-8]/)))stat_js(INQ=inq)
r=M('(cms.)?red@')
if(c=CC[C=c]||0)$B.append('<style>#c2cD{display:none}'+w3(b&2?
'#c2cD{position:fixed;bottom:15%;z-index:9;right:-222px;*transition:right 200ms ease}'+
'#c2cD:hover{right:-1px}#c2cD img{display:block}'+
'#c2cD a{color:#fff;font-size:13px;font-family:Arial;font-weight:bold;padding:7px 17px;background:#636397;*box-shadow:0 2px 0 rgba(0,0,0,0.2);*border-radius:4px}'+
'#c2cD a:hover{text-decoration:none;background:#8e8ab3}#c2cD i{position:relative;display:inline-block;background:url(//static.s-sfr.fr/media/arrow-btn-sprite-small.png) no-repeat transparent;width:20px;height:15px;top:3px}'+
'#c2cD .d1{position:absolute;left:-75px;width:75px;height:82px;bottom:30px;cursor:pointer}'+
'#c2cD .d2{position:relative;width:220px;border:1px solid #6969b2;background:#FFF;text-align:center;padding-bottom:15px}'+
'</style><div id="c2cD"><div class="d1"><img src="//static.s-sfr.fr/media/selfcare-sticky-closed.png"/></div>'+
'<div class="d2"><img src="//static.s-sfr.fr/media/selfcare-sticky-img.jpg"/>'+
'<a href="#"><i></i>Être rappelé</a></div></div>':
'#inqC2C2ImgContainer{position:initial!important}'+
'#c2cD{width:70px;position:fixed;z-index:59900;right:0;top:400px;transition:all 0.5s}'+
'#c2cD.op{filter:alpha(opacity=70);*opacity:0.7}#c2cD.op:hover{filter:alpha(opacity=100);*opacity:1}'+
'#c2cD .t1{width:70px;height:'+(r?74:67)+'px;margin:1px 0!important;cursor:pointer;background:'+
(r?'#E11 ':'')+'url(//static.s-sfr.fr/media/'+(r?'rappeler1':b&4?'sticky_selfcare_ctc_rm_70x67':'sticky-sprite')+'.png) no-repeat!important}'+
'</style><div id="c2cD">'+(c==9?'':'<a href="#"><div class="t1"></div></a>')+'<div id="inqC2C2ImgContainer"></div>'+
(b&8?'<div style="width:70px;height:67px;background:url(//static.s-sfr.fr/media/sticky-sprite.png) no-repeat 0 -136px"></div>':'')+'</div>'))
if(c)$('#c2cD').show()
if(!(b&2)){
(_.c2cR=function(){
var o=$('#c2cD'),h=$(W).height()
h?o.css('top',(h-o.height())/(ckR('eTbolR')&&_.bRm||W.innerWidth<720?1:2)+'px'):to(_.c2cR)
o[W.innerWidth<1050?'addClass':'removeClass']("op")})()
$(W).resize(_.c2cR)}
$('#c2cD a').click(function(){_.c2cP(c);if(a)a()})},
evt=function(n,e){e=s.events;s.events=(e?e+',':'')+(n>0?'event'+n:n)},
scan=function(S,F,b){
var R='',p=0
for(var i=0;i<S.length;i++){
var V=S[i].split('~'),e=V.shift(),c=e.charAt(0),d=e.substring(1)
if(c=='='){R=d;continue}
if(M(c=='>'?e=R+d:e)){
if(c=='#'&&!b)p=V;else if(F(V,p))break}}},
wf=function(v,f){if(W[v]&&W[v][f])W[v][f]();else to(function(){wf(v,f)})},
p,E,Q,eL="//www.sfr.fr/recherche/js/log.js?eTag",pu,pugm,pv,
upV=function(){
E=s.events||'';Q=s.products||'';pu=E.match(/\bpurchase\b/i);pugm=pu;pv=E.match(/\bprodview\b/i)
Q=Q&&Q.match(/;.*;.*;/)?Q.split(","):[]},
prod=function(Q,s){
if(!Q)return ['','','']
var p='',M=0,N=0,T='',O=''
if(!s)s=','
for(var i=0;i<Q.length;i++){
var R=Q[i].split(';'),m=1*R[3],n=1*R[2],v=R[1]||''
if(!v.match(/^FICTIF/)){
n=n>0?n:m>0?1:0;N+=n;M+=m*n;p+=s+R[1]
if(v.match(/^([0-9]{18}|ESHOP[0-9]+)$/)){if(!T)T=R}else{if(!O)O=R}}}
return [p.substring(1),''+N,''+M,T,O]},
dev=_.dev,SHR=mkg=='AAB61E42E095FBDFC88A666756815C46'
upV()
_.$=$
_.uA=(v=ckR('eTagArrow'))==2?'//cms.sfr.fr/arrow/bouchon/':'//'+(v==3?'www.sfr.fr.ipp2':v==1?'cms':'www')+'.sfr.fr/arrow/'
_.U=function(s){var a=s.split('~'),r=a[0],i;for(i=1;i<a.length;i++)r=r.replace(a[1].charAt(0),a[1].substring(1));return r}
_.cms=l.host.match(/^(.*\.)?cms\.(.*\.)?sfr\.fr$/)
_.popin=!$?f0:function(u,x,y,t){
x=!x?'60%':x>0?x+'px':x
y=!y?'60%':y>0?y+'px':y
t=t>0?t+'px':t||0
$rm('#eTpi')
$B.css('overflow','hidden').append('<div id="eTpi" style="overflow-x:hidden;margin:0;padding:0;z-index:99998;position:fixed;top:0;left:0;border:0;width:100%;height:100%;'+
'text-align:center;background:transparent url(//static.s-sfr.fr/media/fond-layer-75pct.png) repeat"><iframe scrolling="0" frameborder="0" src="'+u+
'" style="max-width:100%;width:'+x+';max-height:100%;height:'+y+';border:0 solid transparent;background:transparent;margin:'+t+' auto 0" allowTransparency="true"></iframe></div>')
$('#eTpi').click(function(){$B.css('overflow','auto');$rm(this)})
return!1},
_.fel=function(u,E){
if(E=ckR('SFRBOLFEL')){E=E.split('#');while(E[0]&&E[0].indexOf('U='+u)<0)E=E.slice(1)}
return E&&E[0]||''}
_.elg=function(u,p,n,m,c,o){
var H='&hideFooter=true',O='&hideIsSFRCustomer=true',U=['SFR','RED','PNC','PVM'],A='ADSL,CBL,THD',e=_.fel(u),F='.sfr.fr/offre-internet/fibre-optique?fromeligibility=true'
if(_.PRO||SHR)A='ADSL'
p=p?"&selectedPkg="+p:""
u=U.indexOf(u);if(u<0)u=0
if(p&&e.match(/M=[A-Z|]*CBL/)){location='https://'+(u%2?'red':'www')+F+p;return}
m=m||[A,'CBL','CBL',A][u]
c=c||['636397','e2001a','588c01','672D65'][u]
o=o||[H,H,H+O,H+O][u]
eTagPopin('//'+(_.cms?'cms':'www')+'.sfr.fr/tester-ma-ligne/eligibility-by-ndi'+(ckR('eTabE')>1?'-b':'')+'.htm?univers='+U[u]+m.replace(/^|,/g,'&marques=')+o,728,$(W).height()*(ww<768?700/ww:.9),3)
$('#eTagPopin>div').prepend('<div onclick="_eT.$(\'#eTagPopin\').remove()" style="cursor:pointer;height:50px;width:50px;margin:8px 0 0 356px;border-radius:0 4px 4px 0;'+
'background:url(//static.s-sfr.fr/media/picto-close-3.png) no-repeat center #'+c+';position:absolute;left:50%;z-index:-1"></div>')
if(ww<768)$('#eTagPopin>iframe,#eTagPopin>div').css('zoom',(ww/8|0)+"%")
_.msg(function(e){
var d,l
if((d=e.data)[0]!='{')return
eval('d='+d)
if(d&&d.eligibility){
if(!M('@/(offre-internet|config4p.html)'))l='https://'+(_.cms?'cms':'www')+F
if(M('@/telephonie-mobile\/multi-?packs?-sfr'))l='/telephonie-mobile/multi-packs-sfr-internet-mobile.html'
if(M('red@')||_.elRED)l='https://'+(_.cms?'cms.':'')+'red'+F+p
if(l)location.href=l;else location.reload(!0)}})
return!1}
_.arWM=function(){
var i='#SFReTAGArrowMain',w=$(i).width(),M=$(i+' img.M'),f=_.arWM,v=$(i+':visible').length
$p($(i).find('eTag,etag').css('padding-right',3)).css('white-space','nowrap')
if(!_.arOK){
_.arOK=1
M.load(f)
ti(f,500)
$(W).resize(f)}
if(v){
$(i+' img.H')[w<760?'hide':'show']()
M.show()
if($p(M).height()>M.outerHeight(!0))M.hide()
$(i+' .zone1,'+i+' .caret').css('display',w<720?'none':'inline')
$(i+' .zone2').css('display',w<600?'none':'inline')}}
_.c2cP=function(c,v){
if(c==CC[4])ckW('eTcc0='+(TH+24),360)
if(c!=CC[7])eTagPopin('//appel.sfr.fr/webcallback_form?CAMPAIGN_ID='+c+'&R='+h+(v?'&T='+v.replace(/ /g,''):''),560,352,_.piT?9:0)
else eTagPopin('//static.s-sfr.fr/export/bloc/django/popin.c2c.bolr.html',$(window).width(),140)}
_.xR=function(x,v){return x.charAt(0)=='!'?!v.match(new RegExp(x.substring(1))):v.match(new RegExp(x))}
_.E38=function(e){e=s.eVar38||'';return e=='GP.CARRE'?1:e=='GP.RED'?2:0}
_.EV=function(c){
upV()
var e4=s.eVar4||'',e28=s.eVar28||'',e38=s.eVar38||'',e46=s.eVar46||'',e52=s.eVar52||'',e61=s.eVar61||'',kw=_.KW||s.prop3||'',f=_.doGM,pn=s.pageName||'',AE=W._stats_arrow||[],a='['+(e4?e4:'@')+']',A,A0,A1,A2,V,R,v,e,ok=1,id,
cb=typeof c=='function'?c:0,code=cb?0:c,
sQ=function(v){var i,r=0,e=new RegExp(v);for(i in Q)r=r||Q[i].match(e);return r}
if(M('appel@')&&(A=W._eTag)&&(v=A["ProspectMsisdn"]))_.elr([8,v])
if(pn.match(/Web.Mobile.Boutique.(Changer|Conquete).(Configurateur.EtapeMobileForfait.P(offre|mobile)|Liste Offre.Layer Detail Offre)/))_.elr([1])
if(f&&E.match(/\bevent18\b/))f([0,0])
if(f&&e61.match(/^Mob-Bout/)){
v=e61.substr(9)
if(v=='clictocall')f([38734,332712])
if(v=='envoi-email')f([38735,332709])
if(v=='store-locator')f([38736,332716])
if(v=='web')f([38737,332708])}
if(!e28)return!0
if(e46){
v=ckR("parcoursRM")
if(!v&&!pu&&e46.indexOf("Bol:RM")==0)ckW("parcoursRM="+e46,720)
if(v&&v!=e46&&(v!="Bol:RM"||e46!="Bol:RM Upgrade"))code='AbRM'
if(v&&pu||code=='AbRM')ckW("parcoursRM=0",-9)}
if(e46=="SC:Avantages:Multipack"&&E.match(/\bevent8\b/)||(s.prop48||'').match(/Tarif Multipack/)&&pn=="Web/Mobile/Boutique/Conquete/Panier/Confirmation")code='MpMF'
for(e in AE)if(typeof AE[e]=='string'){
A=AE[e].split("\t")
if(ok||A0){
ok=0
A0=A[0];A1=A[1];A2=A[2]
R=new RegExp("^("+A2+")$","i")
V=new RegExp("\\b("+A2+")\\b","i")
if(E.match(new RegExp("\\b"+A[1]+"\\b",'i'))&&e46.match(R))ok=1
if(A1=='pagename'&&pn.match(R))ok=2
if(A1=='search'&&kw.match(V))ok=3
if(A1=='url'&&D.URL.match(R))ok=4
if((A1=='product'||A1=='option'&&e46=="SC:Option")&&pu&&sQ(';'+A2+';'))ok=5
if(A1=='code'&&code&&code==A2)ok=6
if(A1=='music'&&(e46=="BOL Musique:AMF"||e46=="Mobile:Bol:Musique")&&pu&&sQ(A2))ok=7
if((s[A1]||'').match(R))ok=11
if(A1=='cqtCO'&&e46=="Bol:Conquete"&&E.match(/\bscCheckout\b/i)&&_.xR(A2,Q))ok=12
if(A1=='pview'&&pv&&_.xR(A2,e46))ok=14
if(A0){
if(A1=='nav7'&&pn.match(R)&&!ckR(A0)){ok=8;ckW(A0+'=1',168)}
if(A1=='navJ'&&(D.URL.match(V)||pn.match(V))&&ckR(A0).indexOf(a)<0){ok=9;ckW(A0+'='+ckR(A0)+a,4)}
if(A1=='nav'&&N.match(V)&&!ckR(A0)){ok=10;ckW(A0+'=1',360)}}
if(!_A.B&&ok&&A0){
_.evt=A0
v=e4||ckR('eTe4')
stat_js((_.cms?'//cms.sfr.fr/eTagP?H=':'//www.sfr.fr/eTagP?h=')+A0+'~'+e28+'~'+(v||'~vide'))
stat_js(_.uA+'event?eventId='+A0+'&browserId='+e28+'&ascId='+v+'&deviceType='+dev()+(ok==13?'&param='+id:''),cb)
cb=0}}
else A0=A[0]}
if(cb)cb()
return!0}
var eS=ckR('eTagEspaceSFR')
if(X&&$&&M('espace-client@/moncompte-webapp'))$('div#ctn_hd_mes,div.cadre_content').css('position','relative')
if($&&!pu)ti(function(a,S){
a=$('header li.shop-icon>a').add($p('header .sfr-icon-cart'))
if(v=ckR('eTpp'))a.attr('href',unescape(v))
if(S=$('header').data('scope'))S.set('cart',!!v)
a.css('visibility',v?'visible':'hidden')})
if(pu)ckW('eTpp=',-1);
if(M('@/telephonie-mobile$'))ti(function(o,i){for(i=1;i<6;i++){
o=$('#web_bol_mobile_'+i+' a');if(o.length)o.each(function(o,h){o=$(this);h=o.attr('href');if(!h.match(/sfrintid/))o.attr('href',h+'#sfrintid=web_bol_mobile_'+i+'_arrow')})}})
if(M('@/forfait-mobile/recap')&&par('panier').match(/promoCode%22%3A%22SHOWROOM[25]GO/))MKG=['','','showroom','']
if(MKG[2]=='showroom')ckW('eTagMKG=||showroom',1)
if($&&!(W.sfrIstConfig&&sfrIstConfig.isRED)){
if(M("@/(mon-)?espace-client|^m@/perso/espace-client|^espace-client.m@|^accessoires(.m)?@")&&(_.isRED||par('red')==1)||
M("@/(carte-couverture-reseau-sfr-fibre-optique|(sfr-et-moi\/(reseau-sfr|vos-applis-sfr)|procedures-urgence/actes-urgences|mentions-legales|telephonie-mobile/tarifs-conditions).html)")&&ckR('eTred')){
if(M("@/carte-couverture-reseau-sfr-fibre-optique")){
_.elRED=1
$('#cp_cf_btn').addClass('btn-red')
$('.mea .sfr,#elg').hide()
$('.mea .red,#elgR').show()
$('#dc_postal_test .input-text').css('border','1px solid #e2001a')
$('head:eq(0)').append('<style>#dc_postal_test .input-text:focus{box-shadow:#e2001a 0 0 0 1px}</style>')
$hR(o=$('.sfrDom.legalBox p'),'SFR','RED by SFR')
o.find('a').html(v="https://red.sfr.fr/offre-fibre-optique-pas-cher.html").attr('href',v+"#sfrintid=S_hub-reseau_fibre-ml-offres-fibre")
W.cfBloc=function(d){$('.wrapper1').hide().after(d.content)}
stat_js('//static.s-sfr.fr/red/export/bloc/django/wrapper1.1.json?callback=cfBloc')}
W.cbRNh=W.cbRNf=function(){}
$rm('header.sfrRN,footer.sfrRN,header.sfrNC,footer.sfrNC,body link[href*=sfr\\.header\\.css]')
ckW('ISTRED=1')
if(W.sfrIstConfig)sfrIstConfig.isRED=1
$('link[rel=icon]').attr('href','//static.s-sfr.fr/media/favicon-red.png')
fR=function(){
W.etRNh=function(d){$B.prepend(d.content)}
W.etRNf=function(d){$B.append(d.content)}
stat_js('//static.s-sfr.fr/red/fragments/header/header.standard.json?callback=etRNh')
stat_js('//static.s-sfr.fr/red/fragments/footer/footer.standard.json?callback=etRNf')}
if(W.$sfr&&$sfr.fn.jquery.match(/^1.11/)&&W.Telescope)fR()
else{
stat_js('//static.s-sfr.fr/resources/js/frameworks/jquery/sfr.jquery.js')
f=function(){
if(W.$.fn.jquery.match(/^1.11/)&&W.Telescope){$sfr=W.$;fR()}else to(f)}
f()}}}
if(_.cms&&$)ti(function(){$.each($('header.sfrRN form'),function(){$(this).attr('action','//cms.sfr.fr/recherche/')})})
if($&&M("club-video@")){
_.tvH=function(d){$('head:eq(0)').append('<link rel="stylesheet" type="text/css" href="'+d.css+'"/>');$('header:eq(0)').after(d.html);$('#bandeau_menu_vod').addClass('selected')}
$('#tv_nav_onglets').hide()
stat_js("//static-tv.s-sfr.fr/callback/menu_header.php?callback=_eT.tvH")}
if($&&M('atelier@'))$.istFooterRN()
if($&&M('@/tester-ma-ligne/')){
if($B.width()<400)$B.css('zoom','70%')
c2c(0);$('.SFR_FormButton-pictoHeadphone').click(function(){_.c2cP(CC[red?10:1]);return!1})}
if(X&&M('@/tester-ma-ligne/eligibility-by-ndi'))(o=$('a.SFR_ModalFooterSwitchTest_link')).attr('href',(o.attr('href')||'').replace('by-address','by-address-ra'))
if(0&&$&&M('@/tester-ma-ligne/eligibility-resultats.htm'))$('#SFR_Redirect-parent').click(function(u,d){
u=(W.top.location.href||'').replace(/^(https?:\/\/)(cms|www).sfr.fr/,'@')
if(!u.match(/^@\/offre-internet/))d='/offre-internet/fibre-optique'
if(u.match(/^@\/telephonie-mobile\/multipack-sfr/))d='/telephonie-mobile/multi-packs-sfr-internet-mobile.html'
if(d)W.top.location.href=d;else W.top.location.reload(!0)
return!1})
if($&&M('((box)?@/bolsignup(-1)?|(cms.)?red@/inscription-offre-box-red)/(mobile/)?search-address-experian.htm')){
$('#fullAddress').attr('placeholder','1 square Bela Bartok, 75015 Paris')
_.msg(function(e,d,v){
d=e.data||''
v=d.substring(3)
if(d.match(/^AC:/))$.getJSON('search-address-experian/get_addresses_list.html?term='+v,function(d,s,i,A){
$B.hide()
if(!d.experianKO){
s=v
A=d.addresses
if(A&&A.length){
for(i in A)s+='|'+A[i].fullAddress
parent.postMessage('{"AC":"'+s+'"}','*')}}})
if(d.match(/^CP:/))$.getJSON('search-address.json?action=cities&zipCode='+v,function(A,s,i){
$B.hide()
if(A&&A.length){
s=v
for(i in A)s+='|'+v+' '+A[i]
parent.postMessage('{"AC":"'+s+'"}','*')}})})}
_.CkCb=function(d){$B.append(d.content)}
_.CkInit=function(d){stat_js((_.cms?"//cms.":"//static.s-")+"sfr.fr/export/bloc/django/cookiec.json?callback=_eT.CkCb")}
_.CkML=function(){_.ckc=1;_.CkInit()}
if(!ckR('eTagCC')&&!_stats_zf&&$&&M("[^/]*@")&&window.top==window&&!(M('@/cas/login')&&(par('domain')+par('service')).match(/cloud|securite/))){evt(53);_.ckc=2;_.CkInit()}
if(M('www.vosmms.com'))$.istFooterLight()
if(M('m.vosmms.com'))$('.sub-header:eq(0)').hide().before('<div id="header"/>')
if(W._cfCas&&$){
_.auth=function(d){if(d&&d.content&&$){
$('#colL').unbind('click').html('')
$('.boxTitle').html("").css("margin",0).css("height",0)
if(W._cCas)$('#column-right').css("margin-top",50)
$B.append(d.content)}}
if(par('U'))stat_js(ok="/export/bloc/django/"+par('U')+".json?callback=_eT.auth")
else if(o=_.authPub||_.authEC)for(i=0;i<o.length;i++)if(o[i]){
f=o[i][3]
if(f==2-ckR('ISTRED'))continue
v=M('WM@/webmail/authentication.html')?TS:_cfCas.ts
if(o[i][1]<v&&v<o[i][2]){
stat_js("//static.s-sfr.fr/export/bloc/django/"+o[i][0]+".json?callback=_eT.auth")
evt(53)
if(/externe/.test(o[i][0]))eTagS('//ssl.a2dfp.net/as/ad?s=159649&m=r&ad=160030&ncb='+r6,8)
break}}}
if(M('box@/bolsignup/confirmation.htm|^@/etag/conv')&&(v=ckR('eT24')))s.eVar24=v
if(M('@/espace-client/avantages-groupe/groupe/affichage/index.html')&&W.Hb)to('Handlebars=Hb',2e3)
if(!M('[^/]*(@|numericable[.]com)|^(www|m)[.]vosmms[.]com|^mire[.]ipadsl[.]net'))eTagS('XDom',2)
if(M('cestpasfini(-preprod)?@')){(function(v,o,f,p,gm,pm){
if(M('.*@$'))stats({'pn':v+'Accueil','ev':'event7'})
else if(M('.*@/video/.*/fin'))stats({'pn':v+'Fin Jeu','ev':'event8'})
else if(M('.*@/video/')){
stats({'pn':p=v+'Etape1/Lancement Video','ev':9})
f=function(o,m){
if((o=$('#experience:visible')).length&&(m=o.text().match(/_stats_pagename ?= ?['"]([^'"]*)['"]/))&&p!=m[1])stats({'pn':p=m[1],'ev':9})
if(o.hasClass('nowin')&&!pm)stats({'pn':pm='Perdant/Message','ev':9})
if(o.hasClass('win')&&!gm)stats({'pn':gm='Gagnant/Message','ev':9})
W.setTimeout(f,500)};f()}
else{
p=location.pathname
if(p.match(/^participer/i))p=p.replace(/\/[0-9]+\/?$/,'')
stats({'pn':v+p,'ev':9})}
})('/Ope Noel 2014/',_stats_pagename)}
if(typeof s=='object'&&typeof stats=='function'){
v=unescape(ckR('ext_ref'))
if(v&&v!=Rf){s.referrer=v;ckW('ext_ref=',-1)}
if(W!=W.top)s.gtfsf=function(w){return this.tfs=w}
if(M('forum(test|beta)?@'))_stats_accent=1
if(!W._stats_sent&&!eS){
_stats_sent=1
stats()}
if(/sfrpolprod/.test(s.un))eTagS('ECSBT',2)}
_.sent=1
var p38=s.prop38||s.eVar38||'',i,e4=s.eVar4||'',e19=s.eVar19||'',e46=s.eVar46||'',e52=s.eVar52||'',e62=s.eVar62||'',eT=W._eTag||[],oid=eT.TransactionID||par('orderNumber')||par('order_id')||s.prop57||TH+'-'+r6,
red=p38.match(/red/i)||M('@/.*/forfait-sans-engagement')||par('universe')=='RED'||M('(cms.)?red@'),
pvm=p38.match(/pvm/i),
pn=s.pageName||'',
WM='WM@/webmail/mailbox.html',
BSU='(box)?@/bolsignup(-preview|-1)?/',
BSC=BSU+'configurator.htm',
BCU='(box)?@/bolchange(-preview|-1)?/',
BCC=BCU+'configurator.htm',
RBSU='(cms.)?(red)?@/inscription-offre-box-red(-preview|-1)?/',
RBSC=RBSU+'configurator.htm',
BOA='@/box-internet|adsl@|box@/bolsignup',
BOF='@/box-internet|adsl@',
BOM='@/(((telephonie|forfait)-mobile|terminer-ma-commande|mobile)/|etag/conv)',
RED='@/telephonie-mobile/.*red-de-sfr',
HBM='@/telephonie-mobile$',
LOM='@/(telephonie-mobile/forfaits-mobile|forfait-mobile/offres|offres-mobiles/offres)',
LTM='@/(forfait-mobile/telephones/|offres-mobiles/telephone-portable/forfait-(mobile|sans-engagement)$)',
FTM='@/(forfait-mobile/telephone|offres-mobiles/telephone-portable/forfait-(mobile|sans-engagement))/',
CFM='@/(forfait-mobile/configurateur|offres-mobiles/cfg)/',
PAM='@/(terminer-ma-commande/informations$|mobile/(ma-commande/information$|(telephone|offre)-recapitulatif/)|forfait-mobile/recap/)',
PCM='@/(mobile|terminer-ma-commande|etag/conv)',
RM=par('context').match(/change/i)||e46.match(/Changer/),
Eli=e62.match(/.1$/)?'Cable':e62.match(/^1/)?'Fibre':'Adsl',ELI=Eli.toUpperCase()
for(i=0;i<2;i++)red=red||Q[i]&&(Q[i].split(";"))[1].match(/(^|-|_)(CS.|LSR)(-|_|$)/)
_.brand=red?'RED':'SFR'
if(e4)ckW('eTe4='+e4,168)
if(e52&&W.scDil)scDil.api.aamIdSync({dpid:'1711',dpuuid:e52})
if(X&&$&&M('WM@'))$('#loading').css('opacity',0.2)
if($&&pvm&&M('@/tester-ma-ligne/')){
$('.SFR_ModalContent.SFR_EligibilityResult').css('background-image', '')
$('.SFR_ModalFooterHelp_label').hide()
$('.SFR_ModalHeader_leadParagraph').text('pour voir si la Virgin box est disponible chez vous ')
$('.SFR_FormButton-pictoHeadphone').hide()
$('#form-element-client-sfr').hide()}
if(M('@/tester-ma-ligne/eligibility-by-ndi.htm')&&(v=par('VM')))ckW('eTvmB='+v,2)
if($&&pvm&&M('@/tester-ma-ligne/eligibility-niagara.htm')){
if((s.prop42||'')=='DSL')parent.postMessage('VM0|'+s.prop36,'*')
else $('[value=Continuer]').click()}
if($&&pvm&&M('@/tester-ma-ligne/eligibility-resultats.htm')){
v=$('[data-eligibility-resultats]').data('eligibility-resultats')||''
if(v)i=v.maxDownStream/1e3|0
if(v)v=v.entry+'|'+s.prop42
if((s.prop42||'').match(/CABLE|THD/))location='/recherche/jsp/vm-fibre.jsp?D='+v+'&V='+ckR('eTvmB')+'&M='+i
if(s.prop42=='DSL')parent.postMessage('VM1|'+v,'*')}
if($&&M('(red)?@/terminer-ma-commande')&&ckR('eTvmB')+ckR('eTncB'))ti(function(){$('header.sfrNC').remove()})
if($&&M('red@/(offre-internet|terminer-ma-commande)'))ti(function(){$('#inqC2C2ImgContainer>img[src*=sfr-adsl]').attr('src',"//static.s-sfr.fr/media/chatter-02.png")})
if(X&&ckR("evar28")&&!e4&&!ckR('eTagPI')&&!ckR('eTcnx')&&M('@(/box-internet|/telephonie-mobile)?$')){
ckW('eTagPI=3',1/60)
ckW('eTcnx=1',1)
v='https://'+(_.cms?'cms':'www')+'.sfr.fr/'
eTagPopin(v+'cas/login?service='+escape(v+'etag/authenth.html?V=mire_layer_home'),520,480,3)}
if(M('@/etag/authenth')&&!(zvars[18]||'').match(/^M[^I]*$/)){
$('#eTagPopin').remove()
location.assign(location.href)
location.reload(1)}
if(M('(red)?@/forfait-mobile[^/]*/offres/forfait')&&(o=$('[data-tet]')).length)o.each(function(d,p){if(d=$(this).data('tet')){
d=d.split('|')
p=$(this).parents('.SFR_Table_row')
if(d[0])p.before('<img src="//static.s-sfr.fr/media/'+d[0]+'" style="'+(d[1]||'')+'"/>')
if(d[2])p.css('border','2px solid'+d[2])}})
if(M('@/forfait-mobile/(offres/forfait-mobile|configurateur)'))$('img[src*=common\\/exclu_clients_box]').each(function(){$(this).attr('src',$(this).attr('src').replace(/.*(exclu.*)/,'//static.s-sfr.fr/media/$1'))})
if($&&M(BSU+'(configurator|information|delivery|appointment|payment).htm'))ti(function(o,b){
if(!$h('#bloc-bill-monthly-offers-list .offerLabel span:eq(0)').match(/Home$/))return
o=$('#bloc-bill-monthly-items-list')
b=$hC(o,'>Extra TV Power<')
if($hC(o,'>Bouquet Power<')&&!b)$.each(o.find('span'),function(p){
if($h(this)=='Bouquet Power'){
(p=$p(this)).find('span:eq(1)>p>span').html('+9,00€/mois')
p=$p(p).next()
if($hC(p,'Remise Extra Power'))p.hide()}})
if(M('.*/configurator.htm'))$('#POWER-price:visible').html(b?
'<span class="price-old oldP">9,00 €/Mois</span><div class="price-free inclus">Inclus</div><ul class="price-promotions labelP" style=""><li>Remise Extra Power</li></ul>':
'<div class="price-current"><span class="euro">+9</span><span class="cents">,00</span> <span class="mois">€/Mois</span></div>')})
if($&&M(BSU+'mobile/home-extra-selection.htm'))ti(function(b){b=$('#BPOWER:checked').length||'';ckW('eTxp='+b,b?1:-1)})
if($&&M(BSU+'mobile/additional-options.htm')&&!ckR('eTxp'))$p($p('#POWER')).find('label.custom-box-input-offer-sub-text').html('<strong>9</strong>€/mois')
if($&&M(BSU+'mobile/summary.htm')&&!ckR('eTxp'))$.each($('.table-information tr'),function(o){
if($hC(o=$(this),'TV POWER')){
o.find('td:eq(1)').html('<span class="phone-price">+9,00€/mois</span>')
$hR($p(o).find('td.notes'),/<sup>\([1-9]\)<\/sup> Remise Extra Power<br>/,"")}})
if($&&M(BSU+'mobile/offer-selection.htm')&&s.eVar24==9802745)$('.eTag_show_suppr').hide()
if($&&M(BSU+'mobile/decoder-selection.htm')&&!$('#form div:visible').length)location='/bolsignup/mobile/additional-options.htm'
if($&&M(BSU+'mobile/summary.htm')){
$('#cgvForm').find('.bullet-point-item>li').each(function(k,v){if($(v).text().replace(/^\s+|\s+$/g, '')=="")$(v).detach()})}
if($&&M(BSU+'mobile/summary.htm')&&e46=='Mobile:Bol Fixe:Signup CABLE'){
$('#cgvForm').find('.bullet-point-item > li').each(function(key, value){
if ($(value).text().match(/^Je déclare avoir pris connaissance et accepté/m))
$(value).html('<span class="text">Je déclare avoir pris connaissance et accepté dans toute la teneur les Conditions Générales d’Inscription aux Services très haut débit et de téléphonie fixe SFR, aux Services TV by Numericable, ainsi que les descriptifs et les tarifs des offres.</span>')})}
if(M(BSU+'(plpa|customer|configurator|mobile/(plpa|customer|offer-selection)).htm')&&(v=s.prop58||s.prop36||'').match(/^[0-9]{10}\|Active/))
stat_js('//offres.numericable.fr/retrieve/exclude-sfr/n/'+v.split('|')[0]+'/e/'+(Eli||'').toLowerCase()+'/c/'+(M('#M')&&!M('#[JK]')?1:0))
if($&&M(BSC)){
if($('#GOOGLEPLAY-clickable').length){
$hR('.detail.dbl',/\+ de 170/,'25')
$hR('.detail.last',/500 Go\**/,'<img src="//static.s-sfr.fr/media/croix20.png"/>')}
if(X)$('.legacy-css a:contains(espace)').attr('href','//www.sfr.fr/box-internet/informations-technologie-acces-internet-par-le-fixe.html').removeAttr('onclick').click(function(){return eTagPopin($(this).attr('href')+"?popin",1020,$(W).height()-200,1)})
if(v=s.eVar24)ckW('eT24='+v,2)
o=$('#eTag_100m_Start')
if((v=$h(o).match(/(.*) Mb\/s/))&&v[1]*1>99)o.html('100.0 Mb/s')
$('.service.internet>.serviceElement:eq(0),.generation-packages .elementDetail.internet>.detail:eq(1)').css('border-bottom-style','none')}
if($&&M(BSU+'appointment.htm')&&e46.match(/Signup CABLE/)){
var f=function(o){
o=$('#bloc-bill-monthly-offers-list').find('.floatL:eq(0)')
if(o.length)return $('#page-appointment').find('h2').text('Choisissez une plage horaire où le technicien se présentera à votre domicile pour installer votre matériel'+(o.text().match(/avec Home$/)?' (hors équipement Home)':'')+'. Son intervention durera en moyenne 1h.')
setTimeout(f,200)}
f()}
if($&&M(BSU+'mobile/appointment.htm')&&e46.match(/Signup CABLE/))
$('h2:eq(0)').next().next().text('Un technicien se présentera à votre domicile pour installer votre matériel'+($('.folder-content .item > ul > li').text().match(/Home by SFR/)?' (hors équipement Home)':'')+'. Son intervention durera en moyenne 1h.')
if(M('adsl@/box-pro|^@/box-internet/pro'))ckW('eTbolPro=1',1)
if($&&ckR('eTbolPro')&&ELI=='ADSL'&&M(BSC)){
$p($p('#PKG-ZV-2P3P-HE-container')).hide()
$('#PKG-ZV-2P3P-container').find('.home,.extra,.telephone').find('.detail').html('<img src="https://static.s-sfr.fr/media/picto-inclus.png">')
$('#OffersAccordion .extra .serviceTitle').text('Pack Office')
$('#form a:contains(Tester)').attr('href','//www.sfr.fr/box-internet/pro/offres-box-de-sfr/')
var f=function(o){
o=$('#ProDT-input:visible,#ProDP-input:visible')
if(!o.length)return W.setTimeout(f,200)
o.click()
if(!$('#FTM-input')[0].checked)$('#FTM-input').click()};f()}
if(M('(box)?@/bolchange/(configurator|delivery).htm'))ti(function(o,b){
if($h(o=$('#bloc-bill-monthly-items-list')).match(/Extra Power/)){
$.each(o.find('span'),function(p){
if($h(this)=='Bouquet Power'){
b=1
if(!$h(p=$p(this)).match(/Remise/))p.append('<p style="text-align:right;clear:both" class="txtPurple">Remise Extra Power</p>')
p.find('span:eq(1) span').css('text-decoration','line-through')}})}
if(M('(box)?@/bolchange/configurator')){
$('#POWER-price>.price-free')[b?'show':'hide']().html('Inclus <small>(Remise Extra Power)</small>')
$('#POWER-price>.price-current')[b?'hide':'show']()}})
if(M('(box)?@/bolchange/summary.htm')&&$h(o=$('#page-summary table')).match(/Extra Power/))$.each(o.find('td>div'),function(p){
if($h(this)=='Bouquet Power'){
p=$p($p(this)).find('td:eq(5)')
if(!$h(p).match(/Remise/))p.append('<p style="text-align:right;clear:both" class="txtPurple">Remise Extra Power</p>')
p.find('span').css('text-decoration','line-through')}})
if(M(BSU+'(configurator|information|delivery|appointment|payment).htm')){
if(!X)$B.append('<style>'+
'._etooltip{width:250px;border-radius:4px!important;position:absolute;background-color:white;border:4px solid #60649a;z-index:10;padding:5px}'+
'._etooltip>ul li{list-style:disc!important;margin-left:15px;font-family:SFR-regular;text-align:left}'+
'._etooltip>ul li>p{font-family:SFR-regular;text-align:left;color:#666}</style>')
var fTr=function(){$('._etooltip').remove()},
fTm=function(e){$('._etooltip').css({top:e.pageY+9,left:e.pageX-120})},
f1=function(o,r){
o=$('.element-container.root-container')
if(!o.length)return
r=1
o.find('.generation-packages').each(function(){if($(this).find('.price-promotions').text())r=0})
if(r)return to(f1)
var tab_promo=[]
o.find('.mediumLMargin').find('a').addClass('linkColored')
o.find('.generation-packages').each(function(id,pp,res,l){
pp=$(this).find('.price-promotions')
id=$p(pp).attr('id')
pp.css({'font-family':'SFR-Bold','font-size':12,'color':'#666'})
if(!X&&id&&$(pp).children().length){
tab_promo.push(pp)
$(pp).detach()
l=$('<br/><a href="#" pid="'+(tab_promo.length-1)+'" onclick="return!1">Détail de vos remises déduites</a>').hover(function(){$('<div class="_etooltip"/>').html(tab_promo[$(this).attr('pid')].outerHTML()).appendTo($B)},fTr).mousemove(fTm)
$('#'+id).after(l)}})},
f2=function(o,h,l){
o=$('#bloc-bill-monthly-offers-list .items')
if(!o.length)return
o.css({'font-family':'SFR-Bold','font-size':12,'color':'#666'})
h=o.outerHTML()
o.detach()
$('#bloc-bill-monthly-offers-list .main').after($('<a style="font-size:12px" href="#" pid="items" onclick="return!1">Détail de vos remises déduites</a>').hover(
function(){$('<div class="_etooltip"/>').html(h).appendTo($B)},fTr).mousemove(fTm))}
f1();
if(!X)ti(f2)}
if(M(BSU+'mobile/(authent/)?offer-selection.htm')||M(RBSU+'mobile/(authent/)?offer-selection.htm')){
if(ckR('eTncB'))$('#form a:contains(Tester)').attr('href','//offres.numericable.mobi/eligibilite')
$('.offer-presenter').each(function(){
var nb=''
$(this).find('.engagement-info').each(function(){
nb+='<span class="engagement-info">• '+this.innerHTML+'</span><br/>'
$(this).detach()})
if(nb){$(this).find('.folder-action').text("Détails de l'offre")
$(this).find('.folder-classic').before('<div class="folder-classic off"><div class="folder-action _efolder_action">Vos remises déduites</div><div class="folder-content"><div class="item">'+nb+'</div></div></div><hr/>')}})}
if(v=M('@/mobile/ma-commande/confirmation')?'A':M('@/terminer-ma-commande/confirmation')?'B':M('box@/bolsignup/confirmation')?'F':0){
var u='BOL~'+v+'~'
for(i in eT){v=eT[i]||'';o=v.length-8;u+=i+"="+v.substr(0,8)+(o>0?"+"+o:"")+"/"}
eTagS(u+';'+(W.s?s.events+';'+prod(Q)[0]:'KO'),2)}
if($&&M('box@/bolsignup/confirmation.htm|^@/etag/conv')){
if(!oid.match(o=/PRX|THD|CBL/)&&(v=$('#reference').text())&&v.match(o))oid=v
v=s.eVar24||0
if(v>9802634&&v<9802642)$B.append('<iframe style="height:0;width:0;border:0;display:none" src="//offres.numericable.fr/partenaires/sfr-devis-adsl?order_id='+oid+'"/>')}
if($&&M('(cms)?red@/inscription-offre-box-red/customer.htm')&&$h('#page-customer').match(/numéro de ligne SFR/)){
$('.cdviContent').html('<strong>Vous êtes éligible à la fibre !</strong><br><br>Pour découvrir les offres et les options auxquelles vous pouvez souscrire en ligne, nous vous invitons à vous rendre dans votre Espace Client')
$('#toClientArea').html('<a class="myosotis-btn" href="https://box.sfr.fr/bolchange/start.htm?ctxId=78AD1EEAD2DB0128EBE616FE2B6DB207&access=accessOffer">Accéder à l’espace client</a>')
$('.mediumLMargin.mediumBMargin > a').detach()
$('#toClientArea').prev().detach()
$('#toClientArea').attr('onclick', '')}
if($&&M('@/tester-ma-ligne/eligibility-niagara.htm')&&red&&$('.SFR_ModalCasNiagara_leadParagraph').text().match(/numéro\s+de ligne SFR/)){
$('.SFR_ModalContent_paragraph.SFR_ModalCasNiagara_leadParagraph').html('Le numéro que vous avez saisi <strong>'+$('.SFR_ModalContent_paragraph.SFR_ModalCasNiagara_leadParagraph > strong').text()+'</strong> est un numéro<br>de ligne SFR.')
$('.SFR_ModalCasNiagara_title:eq(0)').empty()
$('.SFR_ModalCasNiagara_paragraph:eq(0)').html('<strong>Nous vous invitons à vous rendre dans votre Espace Client</strong>, pour découvrir les offres et les options auxquelles vous pouvez souscrire en ligne.')
$('#SFR_Redirect-parent').attr('href', 'https://box.sfr.fr/bolchange/start.htm?ctxId=78AD1EEAD2DB0128EBE616FE2B6DB207&access=accessOffer')}
var ci=ckR('s_cmDet').split('|')
ci=ci.length?ci[ci.length-1].split(':')[1]||'':''
ci=ci.match(/^t22_/)&&(M('@/(terminer-ma-commande|forfait-mobile|mobile)/')&&!e46.match(/FFB_ABO/)||M('box@/bolsignup'))?ci.split('_')[3].toLowerCase():''
if(e4&&$)ti(function(n,h){
n=1*ckR('sfrUserUnreadMessages')
h='header.sfrRN '
if(n>0){
$(h+'.inbox-icon').addClass('has-msg')
$(h+'.textMsg').html(' non lu'+(n<2?'':'s'))
$(h+'.nbMsg').html(n<1e4?n:n<1e6?(n/1e3|0)+'k':(n/1e6|0)+'M')}
else $(h+'.inbox-icon').removeClass('has-msg')})
if($&&M("accessoires@/eshop/shopping_cart.php")&&!$('#content_large .shopping_cart').text().match(/chromecast/i))$('img[rel=buyster]').show()
if(M('@/forfait-mobile-numericable/offres/forfait-mobile')){
$('.legalNotices').css('cursor','pointer').click(function(){
if(!_.mnLC){
_.mlNC=function(d){$('.legalNotices').after(d.content);$rm('.legalNotices')}
stat_js('//static.s-sfr.fr/export/bloc/django/blocml.json?callback=_eT.mlNC')}})}
if($&&N.match(/MSIE/))$('form[name=gsaSearchForm],form[name=gsaAdvancedForm]').attr('method','GET')
if(X&&$&&_.cms){
_.affAL=function(){
_.msg(function(e){
if(e.data==2)$rm('#eTagPopin')
if(e.data==1){
var xy='width:224px;height:400px;'
$rm('#cssPopin,#eTagPopin p')
$('#eTagPopin>div').attr('style',xy+'margin:9px 9px auto auto')
$('#eTagPopin>div>iframe').attr('style',xy+'margin:0')}})
$('head:eq(0)').append('<style id="cssPopin">#eTagPopin{display:none}</style>')
W.setTimeout("$sfr('#cssPopin').remove()",600)
eTagPopin('//cms-admin.sfr.fr/statistiques-back/tool/eTag?popin',480,540,2)
$('#eTagPopin>div').css({'overflow':'hidden','min-height':0,'height':490})
$('#eTagPopin p').hide()}
$(D).click(function(e){if(e.metaKey||e.ctrlKey&&e.shiftKey)_eT.affAL()})}
if(e4)ckW('eTagDC=2',360)
if(0&&M("@/(telephonie-mobile(/multipack-sfr.html)?|cle3g-tablettes|accessoires/hub.html)$")&&!ckR('eTagDC'))
eTagPopin('https://www.sfr.fr/export/bloc/django/popin.datacatch.html',600,450,1)
if(N.match(/MSIE /)&&M("((achat-)?jeux-pc|jeux-tv)@"))
$sfr("head").append("<style>#megamenuWrapper .megaclone{height:230px;overflow:hidden}</style>")
if(M("jeux-tv@")){
var f=D.forms.godSearchForm
if(f&&f.perimetre)f.perimetre.value="gsa"
if(f&&f.univers){f.univers.value="jeux-tv.sfr.fr";f.univers.name="asSite"}}
if($&&M("accessoires@/eshop/shopping_cart.php"))$('.advertises>a').each(function(i,o){
if($(o).attr('href').match(/cateyga/))$(o).attr({'rel':'apercu','class':'apercu','href':'product_info_lightbox.php?products_id=13749'})})
if($&&M("accessoires.m@|^testsfr.shopblueway.com"))$('form.search-form').submit(function(e){
var q=$(this).find('input[name=q]').val()
if(q&&q!='Rechercher dans la Boutique Accessoire')document.location='//www.sfr.fr/recherche/?perimetre=mobile&asSite=accessoires.sfr.fr&adv=interne&q='+escape(q)
if(e.preventDefault)e.preventDefault()
return e.returnValue=!1})
if($&&M("adsl@|@/box-internet"))ti(function(){var o='#eBoxTitle';if($h(o)=='Inéligibilité')$(o).html("Votre éligibilité")},80)
if($&&M("mire@/mire_test.html"))$('.whichOffer form').attr('action','https://adsl.sfr.fr')
if($&&M("@/box-internet")&&l.href.match(/[?&#]ndi=/)&&!par('ndi'))to(_eT.elg())
if($&&M(BSU+'mobile/home-extra-selection.htm')){
o=$('.folder-content:eq(0)').find('tr').css('display','none')
$('.main-input>label').each(function(i){
for(i=0;i<o.length;++i){
if($(this).text().replace('illi.','illimités').replace(/^\s+|\s+$/g,'').replace('vers mobiles','vers les mobiles')==$(o[i]).find('strong').text())return $(o[i]).css('display','table-row')&&!0}})}
if($&&M('@/telephonie-mobile/multi-packs-sfr-internet-mobile.html$'))$("<style>.SFR_slide_title{background: url('https://static.s-sfr.fr/media/picto-mois-offert-config.png') bottom left no-repeat;margin-bottom:18px;}</style>").appendTo($B)
if(M("box@/bolchange(-1)?/configurator.htm")){
$('body.ecomfixe .lightTPadding').css('padding-top', '0px')
$p('.element-container.lightGreyBorder.mediumBMargin.panel-container.clearfix .element-container.lightTMargin .price-free').each(function (index, value){
o=$p($(value).parentsUntil('label'))
o.find('.htmlSkippedContent').children(':first').css('float','left')
o.find('.element-title').children(':first').append($(value).detach().css({'float':'left','margin-left':15,'margin-top':-4}))})}
_.bolF=function(){
if(!$('footer.sfrRN,footer.istRN,footer.sfrNC').length)return W.setTimeout(_.bolF,200)
if(MKG[2]!='TECHDATA')c2c(pu?0:red?10:ckR('eTncB')||MKG[3]?8:1)
if(M(BSC)){
if(ckR('eTncB'))(function($,f){
$('#eTncdebit').show()
$('#testAnotherLine a').attr('href','//offres.numericable.fr/eligibilite')
f=function(o){
o=$('.step1 .nextStep')
if($(o).css('visibility')!='hidden'&&$('.generation-packages:visible').length<2)$(o).click();else to(f)
};f()})(jQuery)
;(function($,b,f,k,p,c,v){
k=ckR('eTpkg');if(!k)return
k='#'+k+'-input:visible'
ckW('eTpkg=',-1)
f=function(){
if($(k).length)b=1
if(!b)return to(f)
$(k).click()
$('.step1 .nextStep').click()
$('#finish-button').click()
};f()})(jQuery,0)
ti(function(){$('#ProDP-input').removeAttr('disabled')})}
if(M('('+BSU+'|'+RBSU+')information.htm')){
if(ckR('eTbfI')==2){
$('#tab2-current').removeClass('hidden')
$('#tab2-inactif,#tab3-inactif,#tab4-inactif').addClass('hidden')
$p('#validButton1,#validButton2,#validButton3').hide()
o=$p('#firstName')
$p('#mail,#mailConfirmation,#stopMailId').insertAfter(o)
$p('#phoneContact').insertAfter(o)
$('#infosPro').insertAfter($('#infosRes>div.inputBlock:eq(1)'))
$rm('#infosPro>hr')
$p($('#stopMailId').css('float','left')).css('padding','0 20px 0 207px')
o=$p('#infosRes')
$p('#contactAddress').children().appendTo(o)
$p('#validButton4').appendTo(o).append(
'<div id="eTvB" class="button floatR heavyRMargin redButtonRightArrowRight" style="postion:relative"><a href="#" class="myosotis-btn" onclick="return false;">Continuer</a></div>'+
'<ul class="errorList" id="eTer" style="display:none;z-index:9;position:absolute;left:200px;width:380px"><li>Merci de compléter tous les champs obligatoires</li></ul>')
$('#eTvB').mouseover(function(e){$('#eTer').show()}).mouseout(function(){$('#eTer').hide()})
o.find('>p:eq(0)').css('float','left').css('padding-right',9)
$('#civility1').attr('checked',!0)
$('#civility2,label[for=civility2]').hide()
ti(function(b){
b=$('.errorLabel:visible').length
||!$('#firstName').val()||!$('#lastName').val()
||!$('#phoneContact').val()||!$('#mail').val()||!$('#mailConfirmation').val()
||$('#addressForm\\.contactAddressUseTechnicalAddress2:checked').length&&!($('#addressForm\\.contactAddressZipCode').val()&&$('#addressForm\\.contactAddressCity').val()&&$('#addressForm\\.contactAddressStreetName').val())
$('#eTvB')[b?'show':'hide']()
$('#validButton4')[b?'hide':'show']()})}
if(e46=='Bol:Signup CABLE'&&!red)$('#infosPro').prepend('<p style="padding-left:240px">Veuillez noter que <i>les chaînes TV, services et VOD fournis par Numericable ne peuvent pas être utilisés dans un cadre professionnel.</i></p>')
$('#tab2 .accordionTitle').text('Vos coordonnées')
v=$('input[name=addressForm\\.city]')
v=v.val()||v.html()
if($('#streetNumber:disabled,#streetNumberComplement:disabled,#streetName:disabled,#addressForm\\.zipCode:disabled,#addressForm\\.city:disabled').length==5)
$p('#streetNumber:disabled').prev().append('&nbsp;:').after(
'<p>'+$('#streetNumber').val()+' '+$('#streetNumberComplement').val().replace(/-/,'')+' '+$('#streetName').val()+(X?', ':'<br/>')+
$('input[name=addressForm.zipCode]').val()+' '+v+'</p>').next().next().hide().next().hide().next().hide()
if(e46.match(/Bol:Signup (THD|FIBRE)/))$p('#buildingName').hide().prev().hide()
if(e46=='Bol:Signup CABLE')$('label[for=checkCgvThd]>a').append(' SFR, aux Services TV by Numericable')
if(e46=='Bol:Signup ADSL'){
v=0
o=$('#buildingInfos')
o.hide().prev('div').hide().prev('p').hide()
$.each(o.find('input[type=text]'),function(){if($(this).val())v++})
$('input[type=radio][value='+(v?'APPARTMENT':'HOUSE')+']').attr('checked',!0)
checkRecommendedFields=function(){return!0}}}}
if(!eS&&(M(BSU)||M(RBSU))&&W==top&&$)_eT.bolF()
if($&&M('red@/forfait-mobile-sans-engagement/')&&(_.atR=/^CS[IJ]$/.test(_.pt)?'etagcsij':_.gt=="GAMMELCA"?'etaglca':0))
ti(function(){$('['+_.atR+']').each(function(o){o=$(this);o.html(o.attr(_.atR)).removeAttr(_.atR)})})
if($&&M(BCC)){
ckW('eTts127=',-1)
o=0
$('.generation-packages').each(function(){if(this.getAttribute('data-code').match(/MIG-DSL-(CBL|THD)/))o=1})
if(o){
c2c(12)
ckW('eTts127=1',1)}}
if($&&M(BCU+'(information|delivery|appointment|summary).htm')&&ckR('eTts127'))c2c(12)
if(X&&red&&M('.*@/bolchange/'))c2c(10)
if($&&eS&&M(BSC)){
$('head').append('<style>.sfrRN,#finish-button{display:none!important}</style>')
$p($p('#headerClientAuthent,#clientAuthent')).html('<br/><b>Pour aller plus loin, adressez-vous à votre conseiller espace SFR</b>')
var f1=function(o){
o=$('.offre.element:visible').length
if(!o){setTimeout(f1,200);return}
$('#OffersAccordion .content .generation-container').each(function(a,p){
a=$(this).find('.offreTitle img')
if(a.length){
if(a.attr('src').match(/media\/exclu-web-picto\.png$/)){
$(this).detach()
if(--o)$('.offre.element:visible').css('width',($('#OffersAccordion').innerWidth()-($('#asidePanel').outerWidth()+$('#OffersAccordion .services').outerWidth()+8))/o)}
if(a.attr('src').match(/media\/picto-sl-web\.png$/)){
p=a.parents('.offre.element:eq(0)')
a.detach()
if (p.find('.offrePrix .price-next').css('display')!='none'){
p.find('.offrePrix .price-current .price-integer').text(p.find('.offrePrix .price-next .price-integer').text())
p.find('.offrePrix .price-current .price-fractional').text(p.find('.offrePrix .price-next .price-fractional').text())
p.find('.offrePrix .price-next').css('display', 'none')
p.find('.offrePrix a').detach()
}}}})};f1()
ti(function(){$('#testAnotherLine a:eq(0)').attr('href','//adsl.sfr.fr/internet/espacesfr.html')})}
if($&&eS&&M(BSU+'customer.htm'))$rm('a.linkArrowRed,#toClientArea')
if($&&eS&&M(BSU+'search-address.htm'))$.each($('a.linkArrowRed'),function(){if($(this).attr('href')=='#')$rm($p(this))})
if($&&(M('@/forfait-mobile/offres/forfait-mobile')&&par('context').match(/^change$/i)&&_eT.gt!='SERIE RED'&&
!$h('#change-message,.eligibility-messages').match(/Vous ne pouvez pas actuellement changer votre forfait/)||M('@/telephonie-mobile/changer-forfait-carre.html'))&&!_.bRm)c2c(9,1)
if(M('(red)?@/forfait-[^/]+/configurateur/'))$('.footContent.clearfix').hide()
if(M('@/((offre|box)-internet|la-box-tres-haut-debit)')&&W==top&&!$('#baSticky:visible').length)ww>767?c2c(6):c2c(7,1)
if(M(BSU+'mobile')||M(RBSU+'mobile'))c2c(7,1)
if(M('(cms.)?red@/(avantages-fibre-optique|offre-fibre-optique.*|box-red/test.*).html$'))ww>767?c2c(11):c2c(7,1)
if(M('(cms.)?red@/offre-internet/')&&ww>767)c2c(10)
v=M('(cms.)?red@(/bons-plans-internet-promos-portables-red.html|/forfait-mobile.*)$')
if((M(RBSU)&&W==top||M('(cms.)?red@/terminer-ma-commande.*$'))&&!par('context').match(/change/i))
ckR('s_cmDet').match(/:t9_sp_redb0715$/)?(ww>767?c2c(0):f0()):ww>767?c2c(3):c2c(7,1)
else if(M('red@/forfait-mobile-pas-cher.html'))ww>767?c2c(3):c2c(7,1)
else if(v)ww>767?c2c(3):c2c(7,1)
_.c2cA=function(n){$B.append('<div id="eT0" style="display:none"/>');arrow.request({'blockId':'web_bol_CTC_RM','containerSelector':'eT0','callback':function(){if($t('#eT0').match(/OUI/))c2c(4,n,$('#eT0')[0].cl)},'defaultText':''})}
if(M("@/telephonie-mobile/changer-de-mobile")||M("@/(forfait-mobile/(telephone)|terminer-ma-commande)")&&RM)_.c2cA(1)
if(M("@/mon-espace-client/ligne-mobile/equipement.html$"))_.c2cA(3)
if(!RM&&!pn.match(/Epropal/)&&!MKG[2].match(/TECHDATA|showroom/)&&!ckR('s_cmDet').match(/t9_(red_groupon_td|showroompriveRED122014)/)){
if(M('@/(forfait-mobile(-fut)?|terminer-ma-commande|tablette-cle-internet)/')&&ckR('eTbolR')&&_.bRm&&!RM)c2c(7,1)
else if(!_.bRm){
if(M('@/forfait-mobile/offres/forfait-mobile')||M(HBM)||M('@/forfait-mobile/telephones/forfait-mobile')||M('@/(tablette-cle-internet|telephonie-mobile/multipack-sfr.html?$)')||M('@/forfait-mobile/configurateur/offer/CARRE'))c2c(2)
else if(M('@/terminer-ma-commande'))c2c(e46.match(/^Ouvrir.Bol:Signup/)?1:e46=='Ouvrir|Bol:Conquete'?2:0)
else if(M(BOM)&&!M('@/(telephonie-mobile/change|mobile/ma-commande/suivre-ma-commande)')&&!RM)c2c(0)}}
if(M('@/box-internet/offres-box-tv-fibre/box-fibre-start-de-sfr.html')&&(v=par('sfrcpid').match(/^t2_brand_1501ADSLQ1-Yahoo!_mds_12202([0-9]+)/))){
v=v[1];if(v>459&&v<576&&v!=475&&v!=523){$('a.lienBA').click();showCTC('51bf0c3780df1a0f6a000001')}}
if(eT&&pu&&M('(red)?@/terminer-ma-commande/')){
if(!INQ)stat_js(inq)
var iP=[],iQ=[],iR=[],P=Q?prod(Q):[]
iQ.push(1);iR.push((100*P[2]|0||0)/100)
if(v=e46.match(/:(Signup|Change) (ADSL|FIBRE|CABLE)/))v=v[2]
if(!v&&(v=e46.match(/:Change Intra (DSL|FIBRE|CABLE)/)))v=v[1]
if(!v&&(v=e46.match(/:Change DSL vers (Fibre|Cable)/)))v=v[1].toUpperCase()
if(!v&&(v=e46.match(/:Conquete|:VLA|:RM|:Mig/)))v='Mobile'
if(v){
inqSalesProducts=iP=["NAM:"+
(ckR('eTvmB')?'PVM':ckR('eTncB')?'PNC':red?'RED':'SFR')+'_'+
v.replace(/FIBRE/,'THD').replace(/^DSL/,'ADSL')+'_'+
(P[3]&&P[3][1]||'Inconnu')]
inqSalesQuantities=iQ
inqSalesPrices=iR
inqClientOrderNum=oid
inqOtherInfo=v='CST:'+(e46.match(/Changer/)?'upgrade':'new')
eTagS("C2C2/"+iP.join('~')+"/"+iQ.join('~')+"/"+iR.join('~')+"/"+oid+"/"+v,2)}
else eTagS("C2C2/ERR",2)}
if(M(BSC)&&W.jQuery&&MKG[2]=='TECHDATA'){(function($,b,f,k,p,c,v){
p='#PKG-';c='-container:visible';v=c+','+p;k=p+'ZV-2P3P'+v+'ZV-VDSL-2P3P'+v+'ZJ-2P3P'+v+'ZO-2P3P'+v+'ZJ-2P-NOTV'+c
f=function(o,e,c,p){
if($(k).length)b=1
o=$('.panelLink:visible');e=o.data('events');c=e&&e.click
if(!(b||c&&c.length))return W.setTimeout(f,200)
b=b||o.click()||1
o=$(k).find('div:eq(0)')
if(!o.length)return W.setTimeout(f,200)
o.click()
$('.step1 .confirmStep>a:eq(0)').click()
$('.step2 .confirmStep>a:eq(0)').click()
o=$('.step5 .accordionContent>.element-container')
o.eq(2).removeClass('folded-group').find('.element-container>div').hide()
o.eq(5).removeClass('folded-group')
o.find('#FTM-container>div').show()
o.find('#FTM-input,#ProDP-input,#ProDT-input').click()
};f()})(jQuery)}
if(M('@/forfait-mobile(-fut)?/telephones/forfait-mobile')&&W.bol&&bol.isResponsive){
var o=$('.selected-offer-reminder-details')
if(o.length){
o.find('.section1').detach()
o.find('.description br:eq(0)').detach()
o.find('.row2').each(function(k,v){if(k)$(v).detach()})}}
if(M('accessoires@'))ti(function(){$rm('header.sfrNC:eq(1)')})
if($&&M("infos?@|people@"))document.write('<script charset="UTF-8" src="//static.s-sfr.fr/stats/tv.js"></script>')
if($&&M("boutique@")&&(_.slO=$('#eTeliFibre')).length&&$(W).width()>767){
_.slE=function(d){_.slO.html(d.content)}
stat_js('//static.s-sfr.fr/export/bloc/django/etelg.json?callback=_eT.slE')}
if($&&M("boutique@/[0-9]+-boutique-(numericable-)?sfr-"))(_.f=function(o,i,v,m){
if(M("boutique@/[0-9]+-boutique-numericable-"))$('a:contains(rendez-vous):eq(0)').hide()
if(m=$(W).width()<768){
$('a.btn:contains(rendez-vous)').attr('href', 'https://www.sfr.fr/rdv')
$('#eTmagFav').hide()}
if((o=$('#eTmagFav')).length){
i=location.pathname.match(/^\/([0-9]+)-/)[1]
v=ckR('eTmf').match(/^([0-9]+)~/)
if(v=v&&v[1]==i)_eT.btqFav()
$('a#eTmf').remove()
o.html('<a id="eTmf" style="display:block;cursor:pointer;'+(m?
'padding:9px 9px 20px 0;font-size:14px;color:#33373a;font-weight:bold':
'position:absolute;right:15px;bottom:50px;font-size:13px;color:#000')+
'" onclick="ckW(\'eTmf='+(v?'\',-':i+'~\',')+'1);_eT.f()">'+
'<svg style="height:18px;width:32px;margin-bottom:-3px" viewBox="0 0 19 19"><polygon fill="#'+(v?'77A':m?'BBB':'444')+
'" points="9.5,0.312 12.43,6.248 18.98,7.2 14.24,11.82 15.359,18.344 9.5,15.264 3.641,18.344 4.76,11.82 0.02,7.2 6.57,6.248"/></svg>'+(v?'Votre':'Ajouter comme')+' boutique préférée</a>')}})()
if(M("m@/boutique$")&&$){
var f=$('.bol-search-form:eq(0)')
f.append('<input type="hidden" name="adv" value="interne"/>')
f.append('<input type="hidden" name="asSite" value="[m.sfr.fr/mobile|m.sfr.fr/mobile-rm|m.sfr.fr/mboutique|accessoires.m.sfr.fr]"/>')
f.find('input[name="q"]').attr("default-value","Recherche dans la boutique")}
if(M("assistance.sfr.re")&&$)$('form[name=gsaSearchForm]').append('<input type="hidden" name="asSite" value="assistance.sfr.re"/>')
if($&&M("(fut.)?assistance@/runtime/")&&$('#eTchat').length){
$B.append('<div id="inqC2CImgContainer"/>')
inqCustData=$.extend(W.inqCustData||{},{"ref":zvars[14]||'',"nom":_.nom||"","prenom":_.prenom||"","civilite":_.civilite||""})
stat_js('https://sfr-care.inq.com/chatskins/launch/inqChatLaunch350.js')}
if(_.cms&&M("forum@")){
$.each($('a'),function(){var a=$(this);a.attr('href',a.attr('href').replace("//forum.sfr.fr/","//forum.cms.sfr.fr/"))})
$.each($('img'),function(){var a=$(this);a.attr('src',a.attr('src').replace("//forum.sfr.fr/","//forum.cms.sfr.fr/"))})}
if($&&ckR('eTbolMES')&&M(BSU+'mobile/offer-selection.htm')){
$('header>nav>ul>li').find('a').attr('href', '#').css('cursor', 'default')
$('.block.border-none').detach()
$('#vlaAuthentication').hide()
$('.right-block.text-right').hide().prev().css('width', '100%')
$p('._efolder_action').hide().prev().hide()
$('.light-link:last').hide()
ti(function(){$('.light-link:eq(0)').attr('href','//m.sfr.fr/mboutique/box-tv-fibre/test.html')})
$('.link').detach()
$('.main').css('background-size', '0px')
$('.offer-presenter').each(function(o){
o=$(this).attr('data-code')
if(o=='PKG-ZV-3P-HD-STB4'||o=='PKG-CBL-3P-FTM-START'){$(this).detach()}})
if($('h3.title-lvl3').text().match(/Fibre de SFR/)){
$('h3.title-lvl3').text("Bravo, vous êtes éligible à la Fibre de SFR, dirigez-vous vers l'espace Maison de votre magasin SFR pour découvrir à quel point votre Box devient spectaculaire ! Parlez-en à votre conseiller SFR.")}
$('.open-joya-popup').detach()
$('h1').text('Découvrez votre offre')}
if($&&ckR('eTbolMES')&&M(BSU)){
if(M(BSU+'mobile/(ineligibility|offer-selection).htm'))$('.light-link:eq(0)').attr('href','//m.sfr.fr/mboutique/box-tv-fibre/test.html')
$('#baSticky,#c2cD').hide()
$('.content-area:contains("un conseiller")').hide()}
if($&&e46.match(/Signup (THD|FIBRE|CABLE)/)&&M(BSU+'(mobile/)?information.htm')){
$p('#contactAddress').find('p:contains(Accès au logement)').html('<strong>Accès au logement</strong> (si existantes, informations nécessaires pour faciliter l\'accès du technicien à votre logement)').removeClass('txtBold')
$p('#complementaryInformation').find('label:contains(Informations supp)').text('Informations supplémentaires sur votre logement')}
if($&&M('(box)?@/bolchange/offer-equipment.htm')){
ckW("eTecO=",-1)
ckW("eTBCo=",-1)
o=$('.offer-heart-column.floatL>p')
if (o.length){
if(o.text().match(/RED Fibre TV/))ckW('eTecO=3',1)
else if(o.text().match(/RED Fibre/))ckW('eTecO=1',1)}}
if($&&M('(box)?@/bolchange/configurator.htm')&&ckR('eTecO')){
o='<div><span class="price-next prixPromo" style="display: none;">puis<span class="price-integer"></span><span>,</span><span class="price-fractional"></span>€/mois</span><span class="price-old priceStriked" style=""><span class="price-integer">34</span><span>,</span><span class="price-fractional">99</span>€/mois</span></div>'
if(ckR('eTecO')==3){
fB1=function(){
if($('#MIG-CBL-CBL-RBF-3P100-price .price-current .price-integer.euro').text()=='')to(fB1);
$('#MIG-CBL-CBL-RBF-3P100-price .price-current .price-integer.euro').text('31')
$('#MIG-CBL-CBL-RBF-3P100-price .prixPromo').parent().detach()
$('#MIG-CBL-CBL-RBF-3P100-price .price-current').append(o)}
fB1()
ti(function(){
if($('.element-container.accordion.step1.selected .button.nextStep:visible').length){ckW('eTBCo=',-1);return !0}
if(!$('.element-container.accordion.step1.selected').length)return !0
if($('.generation-packages .selected').parent().parent().attr('data-code')=='MIG-CBL-CBL-RBF-3P100'){
$('.element-container.accordion.step1.selected .price-current:visible .price-integer').text('31')
$('.element-container.accordion.step1.selected .price-old:visible').detach()
$('.element-container.accordion.step1.selected .price-current:visible').append(o)
if(!ckR('eTBCo'))ckW('eTBCo=MIG-CBL-CBL-RBF-3P100',1)}})}
else if(ckR('eTecO')==1){
ti(function(){
if($('.element-container.accordion.step1.selected .button.nextStep:visible').length){ckW('eTBCo=',-1);return !0}
if(!$('.element-container.accordion.step1.selected').length)return !0
if($('.generation-packages .selected').parent().parent().attr('data-code')=='MIG-CBL-CBL-RBF-3P100'&&!ckR('eTBCo'))
ckW('eTBCo=MIG-CBL-CBL-RBF-3P100',1)})}}
if($&&M(BCU)&&ckR('eTecO')==1){
ti(function(o){
if(!$('#block-bill:visible').length||ckR('eTBCo')!='MIG-CBL-CBL-RBF-3P100')return !0
$('#block-bill .liPrice:eq(0)').text('29,99')})}
if($&&M(BCU+'summary.htm')&&ckR('eTBCo')&&ckR('eTecO')==1&&ckR('eTBCo')=='MIG-CBL-CBL-RBF-3P100'){
ti(function(){
if(!$('#page-summary:visible').length)return !0
$('#page-summary .thickLightGreyBBorder.lightGreyRBorder.txtRight.lightPadding.heavyRPadding.vAlignBottom .txt20').text(29)})}
if(M("@/guide/"))$.each($('#wb_container a'),function(){
var o=$(this),h=o.attr('href')
if(!h.match(/\//)||h.match(/\/guide\//))o.attr('href',h.toLowerCase())})
if($&&M('@/terminer-ma-commande/recap')&&$('.section-feature-title').text().match(/SAMSUNG Galaxy S6 32Go/)&&s.products.match(/CARRE_5GO_LTR_BIOS_EEM_ABO_24_MOB/)){
$('#cartTotalPriceFloatPart').detach()
if($('.sushi-offer-item-wrapper:eq(2)').length)$('.sushi-offer-item-wrapper:eq(2)').detach()}
_.noArrow=function(){
if(M("@(/sfr-et-moi.html)?$")&&W.affPopin)affPopin()}
if(ckR('eTagPI'))ckW('eTagPI=1',.5); else if(ckR('eTagEC')||M("@/sfr-et-moi.html$")&&!e4)_.noArrow()
v=' target="_blank" href="https://www.sfr.fr/telephonie-mobile/multi-packs-sfr-internet-mobile.html#sfrintid=MSG_btiq_bouchon"'
if(_A&&$)scan([
WM+"~1~#SFReTAGArrowLeft:visible~web_mess_info~"+
'#@{position:relative;height:188px;white-space:normal;padding:6px;text-align:left;color:#1C1C1C;font-family:Arial,Helvetica,sans-serif;font-size:12px}'+
'#@ a,#@ a:link,#@ a:visited,#@ a:active{color:black;cursor:pointer;text-decoration:none}'+
'#@ h3{background:#f6f6f6;color:#1c1c1c;padding:5px;font-weight:bold;font-size:16px}'+
'#@ .uniqueMajorLinkWrap{width:167px;background:#f6f6f6;text-align:right;clear:both;float:none;position:absolute;top:170px}'+
'#@ .uniqueMajorLink{background:url("//static.s-sfr.fr/resources/img/sfrElementary/nextArrow.png") no-repeat 100% center;font-weight:bold;padding:8px 14px 8px 0}'+
'#@ .ressorti{color:#E2001A}~~'+
'<div class="sfrMail reboundBox"><a title="Avantage Client"'+v+'><h3><span class="ressorti">Avantage</span> Client</h3></a>'+
'<div class="RBWITmainContentWrap left noBG"><div class="RBWITimgWrap"><a'+v+'>'+
'<img src="//static.s-sfr.fr/media/bloc_gauche_167x57-14.jpg" alt="Multi-Packs"></a></div><h4>Les Multi-Packs de SFR,<br/>un mariage qui rapporte !</h4><p>Plus vous êtes équipé, moins vous payez.</p></div>'+
'<div class="uniqueMajorLinkWrap"><a'+v+' class="uniqueMajorLink">En profiter</a></div></div>',
WM+"~1~#SFReTAGArrowMain:visible~web_mess_pad~"+
'#@>div{height:100px;min-width:480px;border:1px solid #ddd;font-size:16px;'+
'	-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}'+
'#@ *{font-family:"SFR-Regular",Arial,Helvetica,sans-serif}'+
'#@ b{font-family:"SFR-Bold",Arial,Helvetica,sans-serif;font-weight:normal}'+
'#@ .zone1{float:left;height:84px;width:95px;padding:16px 6px 0;text-align:center;background:#dfdfdf;line-height:24px;font-size:18px;color:#333}'+
'#@ .caret{float:left;height:99px;width:15px;background:url(//static.s-sfr.fr/media/caret.png) 0 15px no-repeat;position:relative;z-index:1}'+
'#@ .zone2{float:left;margin-left:-15px}'+
'#@ table{margin:auto}'+
'#@ td{height:80px;padding:9px 4px;vertical-align:middle;line-height:28px;font-size:22px;color:#000}'+
'#@ .zone3{float:right}~'+
'arWM',
WM+'~1~#SFReTAGArrowRight:visible~web_mess_droit~~~<a href="https://www.sfr.fr/telephonie-mobile/#sfrintid=MSG_droite_bouch" target="_blank" title="Boutique mobile de SFR" style="display:block;width:300px;background:url(//static.s-sfr.fr/media/bg-image-float.png) no-repeat bottom;height:109px"><img src="//static.s-sfr.fr/media/image-boutique-sfr-288x100.jpg" alt="Boutique mobile de SFR" style="float:right;width:288px"/></a>',
"assistance@/authent/clickToCall/~2~#arrowBanner",
"assistance@/accueil/contacter/resiliation-(sfr|red)/fc-~2~#arrowBanner1",
"@$~2~#vitrine_mea_btiq",
"@/recherche~2~#arrow",
X?"@/(sfr-et-moi.html|mon-espace-client)$~4~#eT_arrow~web_pop_phec~~PH":"@/sfr-et-moi.html$~3~#eT_arrow~web_prehomeEC_popin~~PP:168:800:520:19",
"@/mon-espace-client$~2~#promo_arrow",
"@/mon-espace-client$~2~#sfrPontisECBusiness"],arw)
function arw(P){
if(!P)return
var T=P[0],o=$(P[1]),x=X||par('previewBlockId'),f=function(){arw(P)}
if(T==1){
var id="eTagArrow",div='<div id="@"></div>'
if(P[1].indexOf('#SFReTAG')==0){id=P[1].substring(1,(P[1]+':').indexOf(':'));div=''}
if(o.length==0)setTimeout(f,500)
else{
if(P[3])o.first().after((div+'<style>'+P[3]+'</style>').replace(/@/g,id))
arrow.request({'blockId':P[2],'containerSelector':id,'callback':P[4]?_[P[4]]:0,'defaultText':P[5]||''})}}
if(T==2){
var a=o.find('a')
if(a.length && a.attr('href').match(/(appel\.|(callback|clicktocall)\.sd-)sfr\.fr/)) a.click(function(){
return eTagPopin('//appel.sfr.fr/webcallback_form'+a.attr('href').replace(/.*(\?.*)/,'$1'))})
if(o.length&&!a.length)setTimeout(f,500)}
if(T>2&&(x||!ckR('eTagPI'))){
var p1=P[1].substring(1),p=(P[4]||'').split(':'),c=p[0]?'eTpa'+p[0]:0
if(p[0]&&!o.length){$B.append('<div id="'+p1+'"></div>');o=$(P[1])}
o.hide()
if(!c||!ckR(c)||x)arrow.request({'blockId':P[2],'containerSelector':p1,'defaultText':'','callback':function(e,d,s,b){
if(T==4&&o.html()){
v='layerAlert'
o.children().appendTo($('#'+v+' .container').html(''))
ckW('eTagPI=1',.5)
if(c)ckW(c+"=1",1*p[1]||24)
if(f=W.load_layer)f(v)}
else if((e=$(P[1]+' eTag')).length){
if(d=e.attr("data"))p=d.split(':')
eTagPopin(0,Math.min($B.width(),p[2]||720),Math.min($B.height()-40,p[3]||360),p[4])
o.appendTo($('#eTagArrowPopin'))
e=$('#eTagArrowPopin eTag')
e.text(e.text().replace(/^\s*,.*/,''))
e=$('#eT_arrow span:eq(0)')
if(e.length&&(s=e.attr('style')))e.attr('style',s.replace(/^width:12px;.*$/,'width:28px;height:28px;display:block;background:url(https://static.s-sfr.fr/media/croix-layers-1.png) no-repeat 8px 8px;position:absolute;top:15px;right:51px;cursor:pointer;z-index:3'))
$('#eTagPopin').show()
ckW('eTagPI=1',.5)
if(c)ckW(c+"=1",1*p[1]||24)
o.show()}
else _.noArrow()}})}}
if(_A.rq){
var e28=ckR("evar28")
var id='browserId='+e28+'&ascId='+escape(W.zvars&&zvars["eVar4"]||'')+'&deviceType='+dev(),
pb=par('previewBlockId'),
u0=_.uA,
ub=u0+'banner?'+id+'&blockId=',
us=par('service').match(/(cooper(-fut)?)/),
up=(us?'//cms-admin.sfr.fr/'+us[1]+'/rest/preview?creationId='+par('previewCreationId'):u0+'preview?'+id+'&communicationId='+par('previewCommunicationId'))+'&blockId=',
bloc='',nr=0,nf=0,ru=0,b,
H0=document.getElementsByTagName('head')[0],
cleanSrc=function(t){return t.replace(/ src=(.)https?:\/\//g,' src=$1//').replace(/(<eTag[^>]*>)\s*,?\s*(<\/eTag>)/i,'$1$2')}
arrow.request=function(r){arrow.rq.push(r=r.blockId?r:{'blockId':r});arrow.uni(pb&&pb==r.blockId?up:ub,r)}
arrow.clic=function(h,t,b,c){
var i=D.createElement('img'),r=t!='_blank',p,g=function(){
if(p=i&&i.parentNode)p.removeChild(i)
if(t=="_top"||t=='_parent')top.location=h; else if(r)D.location=h}
i.src=u0+'click?blockId='+b+'&campaignId='+c+'&'+id
if(r)to(i.onload=i.onerror=g,999)
D.body.appendChild(i)
return!r}
arrow.setHTML=function(R,re){
var o=D.getElementById(R.containerSelector||R.blockId),o2=D.getElementById(R.containerSelector2),S
if(!o||re.html==undefined)return!1
o.innerHTML=cleanSrc(re.html||'')
if(o2&&re.html2)o2.innerHTML=cleanSrc(re.html2)
S=o.getElementsByTagName("script")
for(j=0;j<S.length;j++)eval(S[j].text)
if(!re)return!0
var A=o.getElementsByTagName('a'),
cl=function(){
var i=D.createElement('img')
i.src=u0+'click?blockId='+R.blockId+'&campaignId='+re.campaignId+'&'+id
D.body.appendChild(i)},
clic=function(e){
var l=e.target||e.srcElement
while(l&&l.tagName!='A')l=l.parentNode
if(l){
var i=D.createElement('img'),h=l.href,t=l.target,p,g=function(){
if(p=i&&i.parentNode)p.removeChild(i)
if(t=="_top"||t=='_parent')top.location=h; else D.location=h}
i.src=u0+'click?blockId='+R.blockId+'&campaignId='+re.campaignId+'&'+id
W.setTimeout(g,1e3)
D.body.appendChild(i)
i.onload=i.onerror=g
if(e.preventDefault)e.preventDefault(); else e.returnValue=!1}}
if(!A.length){o.cl=cl;o.clic=clic}
for(var i=0,l;i<A.length&&(l=A[i]);i++)l.setAttribute("onclick","return arrow.clic(this.href,'"+l.target+"','"+R.blockId+"','"+re.campaignId+"')")
return!0}
arrow.multi=function(re,o,R,S,j,i){
if(re)for(i=0;i<arrow.rq.length;i++){
R=arrow.rq[i]
b=R.blockId
if(!R.ok&&re[b]){
if(re[b].error)arrow.bouchon(b)
else if(arrow.setHTML(R,re[b])){
R.ok=1;if(typeof R.callback=='function')R.callback()}}}}
arrow.uni=function(u,r,f){
f='f'+nf++
arrow[f]=function(re){var R=new Object;R[r.blockId]=re;arrow.multi(R)}
arrow.js(u,r.blockId,f)}
arrow.bouchon=function(b,i,R,r){
for(i=0;i<arrow.rq.length;i++){
R=arrow.rq[i]
if(!R.ok&&R.blockId.match(new RegExp('^'+b+'$'))){
R.ok=2
if((r=arrow.setHTML(R,{'html':R.defaultText,'html2':R.defaultText2}))&&typeof R.callback=='function')R.callback()
if(R.defaultText)stat_js('//www.sfr.fr/recherche/js/log.js?BOUCHON='+escape(R.blockId)+"&R="+(r?'OK':'KO'))}}}
arrow.js=function(u,b,f,s){
if(!_A.B&&e28){
W.setTimeout('arrow.bouchon("'+b+'")',3500)
s=D.createElement('script')
s.src=u+b+'&callback=arrow.'+f
s.onerror=function(){arrow.bouchon(b)}
H0.appendChild(s)}
else arrow.bouchon(b)}
var rq=arrow.rq
for(var i=0;i<rq.length;i++){
b=rq[i].blockId
if(pb==b)arrow.uni(up,rq[i])
else{bloc+=(nr?'|':'')+b;nr++;ru=rq[i]}}
if(nr>1)arrow.js(ub,bloc,'multi')
else if(ru)arrow.uni(ub,ru)}
if($&&(v=ckR('eTte'))){ckW('eTte=',-1);eTagS(unescape(v)+'&eurl=http%3F//www.sfr.fr/etag/vide.html',16)}
if(M('[^/]*@/adsite-under')&&(v=par('tckElr')))ckW('eTte='+v,.5)
if(_.noP||W._stats_zf||l.pathname.match(/^\/adsite-under/))return
if(M("[^/]*@")){
W._uxa=[['setCustomVariable',1,'visitor_type',e19]]
stat_js('//d1m6l9dfulcyw7.cloudfront.net/uxa/92510e16826c8.js')}
if(X&&(M("@/etag/test.html")||pu)&&mkg==acn){
v='|'+ckR('s_cmDet')
v=v.substring(v.lastIndexOf('|')+1)
eTagS("ACN/"+MKG[1]+"/"+MKG[2]+"/"+oid+"/"+v.split(':')[1],2)}
var E0=ckR('eTagSS')?9:0,EU=[
'@/cas/login~'+E0,
'@/sfr-et-moi.html$~'+E0,
'@/offre-internet/.*/personnalisez-votre-box.htm|(box@/bolsignup|red@/inscription-offre-box-red)/configurator~1',
'(red)?@/(terminer-ma-commande/informations|tablette-cle-internet/recap/p$)|^accessoires@/shopping_cart.php$|^boutique.home@/commande~2',
'.']
if(M("[^/]*@")&&(X||!M('WM@|^@/cas/')))scan(EU,_.elr=function(V){
var d='elr.sfr.fr',c=(new Date()).getTime()/36e5|0,j='',a=(D.location.host+d).replace(/[^a-z]/g,''),A=(a+a.toUpperCase()).split(''),i,P=prod(Q),pr=P[3],of=P[4],v=V[0],i,ch=e46.match(/^Changer|^SC:ADSL:CHANGE/i),S37=(s.eVar37||'').split('/'),
da=_.df?new Date(1*_.df):0,mo=da&&da.getMonth()+1,jo=da&&da.getDate(),o,e38=M(BOF)||M('box@')?'Fixe_Box-SFR':M('red@/inscription-offre-box-red')?'Fixe_Box-RED':s.eVar38||'',E=[],
f=function(c,s){E[c]=s},g=function(c){return E[c]||''}
if(v==9)return 1
if(v==8&&W._oEa)_oEa=0
if(pu)v=3
if(X)f('referer','')
if(pu){
f('amount',1*P[2]||1)
f('duree_engagement','')
f('montant_mensualite','')
f('currency','EUR')}
if(v==8){
f('estimate',1)
f('ref',TS)
f('msisdn',V[1])}
f('path','/'+s.pageName)
f('device',dev())
f('rubrique',s.prop21)
if(pu){
f('payment',s.prop52)
f('profile',ch?'rebuyer':'buyer')
f('ref',oid)}
if(v==8)f('type','click2call')
f('asc',e4)
f('uid',e52||v==8&&V[1]||'')
if(pu)f('newcustomer',ch?0:1)
if(pr){
f('prdref',pr[1])
f('prdname',M(FTM)&&h.split('/')[3])
if(v>0){
f('prdamount',pr[3])
f('prdquantity',pr[2])}
f('prdparam-marque','')
f('reference_telephone','')}
if(of&&v>0){
o=of[1].match(/(-|_|^)(CS[HIOT]|D[A-Z][EM]|F(6[0-9A-Z]|99|MV|T0)|H(0[01]|68|7[0-9A-Z]|T0)|I([0-9M][0-9A-Z]|NT|T0)|P[67T]0|Q(10|[3-9][EM]|SE|ZN)|S[BCD][0-9A-Z]|LSR|MS[EI])(-|_|$)/)
o=M('box@')?of[1]:o?o[2]:'XXX'
f('prdref',o)
f('prdgroup',o)
f('prdname',of[1])
f('prdamount',of[3])
f('prdquantity',of[2])}
if(v==2){
for(i=2;i<Q.length&&(P=Q[i].split(';'));i++)if(P[1].match(/^[0-9]{18}$/)){
f('prdref',P[1])
f('prdname','')
f('prdamount',P[3])
f('prdquantity',P[2])}}
f('pageprecedente',s.prop41)
f('marchand',(W._stats_univers||'').match(/_Bout$/i)?'marchand':'nonmarchand')
f('clientauthentifie',s.eVar10)
f('CSUid',e52)
f('profildetaille',s.eVar19)
f('pta',_.pta)
f('dfpc',da?''+da.getFullYear()+(mo>9?'':'0')+mo+(jo>9?'':'0')+jo:'')
f('clientmultipack','')
f('segmentjoya',_.sj)
o=M('box@/bolchange')&&(s.prop53||'').match(/:([^:]*)$/)
f('typedachat',o&&o[1]=='XDSL Vers CBL'?'Bol : Change DSL Vers Cable':o&&o[1]=='XDSL Vers THD'?'Bol : Change DSL Vers Fibre':e46)
f('BU',e38)
f('eligibilitefibre',s.eVar62)
f('eligibiliteADSL',s.eVar61)
if(pu)f('codepromo',s.eVar42)
if(M('@/(box-internet|telephonie-mobile|etag/conv)|^box@'))f('idpartenaire',s.eVar24)
f('idpanier',s.eVar15)
if(S37.length>1){
f('optin',S37[0])
f('email',S37[1])
f('typeparcours',S37[2])
f('Numtel',S37[4])
f('authent',S37[5])
f('civi',S37[7])
f('Nom',S37[8])
f('Prenom',S37[9])}
try{eaQ(f,g,s,X)}catch(e){}
EA_data=[]
for(o in E)if(typeof(v=E[o])!='function'){EA_data.push(o);EA_data.push((''+v||'').toLowerCase().replace(/ /g,'_').replace(/[^.a-z0-9@_\/]/g,'-'))}
if(f=W.EA_collector)f(EA_data)
else{
for(i=-1;i<c%7;i++)j+=A[(c+i)%A.length]
stat_js('//'+d+'/'+j+(c%8760)+'.js')}
if(pu||pr||of)eTagS('ELR:'+EA_data.join(';'),2)
return 1
})
if(M(WM+'|^mes-contacts.services@|^WM@/calendar')){
if(X&&M(WM))ti(function(o,t,f,s,x){if((o=$('#mailbox:visible div[id^=gemini]:eq(0)')).length){
t=$('#mailbox:visible table.listMail tr:eq(0)')
f=t.find('td.from')[0];f=f&&f.offsetLeft+5||40
s=t.find('td.subject')[0];s=s&&s.offsetLeft+5||'25%'
x=[0,f,0,s]
o.find('div').each(function(i,o){$(o).css(i<4?{'position':'absolute','left':x[i],'top':i&&5}:{'right':2,'cursor':'pointer'})})}})
_.msgB=''
_.reff=[]
_.refreshMsg=function(i){for(i=0;i<_.reff.length;i++)_.reff[i]()}
_.msgPub=function(id,b,m){
var IF=D.createElement("IFRAME"),$=$sfr,i="#"+id,u=5,
w=function(b){return b==3?300:b==4?312:b>4?160:$(W).width()<1400?120:160},
rf=function(a,v){
if(X&&!W.sectionCode&&M(WM)){
sectionCode=[v="57e80357-72ef-4506-a8ff-27f9328c9a31"]
$w('#mailbox:visible',function(){$rm('.gemini-ad-'+v);$(this).prepend('<div class="gemini-ad-'+v+'"/>');stat_js("//s.yimg.com/av/gemini/ga/gemini.js")})}
a=1
$(i).css('width',w(b))
if(!par('receiver'))IF.setAttribute('src',"//static.s-sfr.fr/export/bloc/django/pub"+(a?'sa':'if'+b)+".html?w="+(IF.w||0)+"&kw="+(_.infoWM||'X0')+(a?'&f='+b:'')+(X?'&X=1':''))}
if(u>1&&b==3){
_.msgInfo=function(d,c,a,e,n){
if(d&&(c=d.content))$('#SFReTAGArrowAccueil').after('<style>#eTnw{margin:9px auto}'+
'#eTnw .header{border-top:#ccc dotted 1px}'+
'#eTnw h3{font-size:10px;color:#999;text-transform:uppercase;font-weight:initial;position:relative;top:-6px;background:#fff;display:inline-block;padding:0 3px 0 0;margin:0}'+
'#eTnw .content{width:102%}#eTnw .figure{max-width:170px;margin:0 auto}'+
'#eTnw .feed{display:block;float:left;width:'+(u&1?23:48)+'%;margin:0 2% 2% 0}'+
'#eTnw .title{height:28px;background:rgba(0,0,0,.7);color:#fff;font-size:12px;line-height:14px;padding:2px 4px}'+
'#eTnw img{width:100%;opacity:.8}'+
'#eTnw>a{color:#000;font-weight:bold;font-size:12px;padding:0 20px 0 0;background:url(//static.s-sfr.fr/media/picto-fleche-1.png) no-repeat right}'+
'</style><div id="eTnw">'+c+'<a target="_blank" href="https://infos.sfr.fr/#sfrclicid=P_actu_infos">Toutes les infos et actualités</a></div>')
a='#SFReTAGArrowMain';e='#editorialBlocs';n='#eTnw'
if(u==3){$(a).css('zoom','90%').insertAfter(n);$(n).insertAfter(e)}
if(u>3)$(e).insertAfter(a).css('border-top','#CCC dotted 1px').css('padding-top',9)}
if(u<5)stat_js('//static.s-sfr.fr/export/bloc/django/flux.a.la.une..magazine.8.json?callback=_eT.msgInfo');else _.msgInfo(0)}
if(u){
$w('#SFReTAGArrowMain a[href*=sfrintid]',function(h){if(h=$(this).attr('href'))$(this).attr('href',h.replace(/-\d$/,'')+-u)})
$w('#eTnw a[href*=sfrclicid]',function(h){if(h=$(this).attr('href'))$(this).attr('href',h.replace(/-webmail\d$/,'')+'-webmail'+u)})}
m=_.msgB
if(m.indexOf(i)<0)_.msgB=(m?m+',':'')+i+':visible'
$(i).css('overflow','hidden')
if(b==3)$(i).css({'margin-top':-3,'height':602})
if(b==4)$(i).css({'margin-top':9,'height':602})
if(b==2)_.reff[_.reff.length]=rf
if(b>2)rf()
IF.w=w(b)
IF.setAttribute('style',(b>2?"width:300px;height:602px":"width:100%;height:100%")+";border:0 solid transparent")
if(b==2)$(W).resize(function(){if(IF.w!=w(b)){$(i).width(IF.w=w(b));rf()}})
D.getElementById(id).appendChild(IF)}
if(M(WM)){
ti(function($,s,o,c){if($=W.$sfr){
c='SFReTAGArrowConfirmationEnvoi'
o=$(_.msgB).find('iframe')
if(o.length)$('#main').css('margin-right',$(_.msgB).attr('id')==c?5:o[0].w+15)
else if($('#'+c).html()==='')_eT.msgPub(c,4)}},40)
eTagW(v="SFReTAGArrowSkyscraper","_eT.msgPub('"+v+"',2)")
eTagW(v="SFReTAGArrowAccueil","_eT.msgPub('"+v+"',3)")}
else if(M('WM@/calendar')){$rm('#if_pub');$('#container').css('margin-top',0);eTagW(v="advert","_eT.msgPub('"+v+"',6)")}
else eTagW(v="SFReTAGArrowSkyscraperContacts","_eT.msgPub('"+v+"',5)")}
if(ckR('cobrow_token'))stat_js('//cobrowsing.sfr.fr/lib/loader.js')
if(pu&&M(PCM))eTagS('//secure.adnxs.com/px?id=235497&t=1&order_id='+(eT.PackID||'')+'&value='+(eT.MonthlyPackAmount||0),4)
if($&&M('@/forfait-mobile(-fut)?/telephone/')){
if(!W.bvoice_user)ckW('eTavis='+escape(location.href),1)
else if(ckR('eTavis')==1){
ckW('eTavis=',-1)
ti(function(h){if(h=$('#BVwritereviewLinkId').attr('href'))location.href=h})}}
v=(M('@/(telephonie-mobile|box-internet|forfait-mobile|terminer-ma-commande)')||X&&M('@/offre-internet|^box@'))
if($&&ckR('ISTRED')<1&&(ckR('eTagAB')>89&&(v||M('@/(sfr-et-moi|mon-espace-client)$|^(forum|assistance)@$'))||X&&M(WM))){(function(i){var g=function(e,h,f,g,o){
o=this
o.get=function(a){for(var a=a+"=",c=D.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null}
o.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "}
o.check=function(){var a=o.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],o.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0}
o.go=function(){if(o.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g+ "&t=" + (new Date()).getTime();D.body.appendChild(a)}}
o.start=function(){var b='addEventListener',c='attachEvent';W[b]?W[b]("load",o.go,!1):W[c]&&W[c]("onload",o.go)}}
try{(new g(100,"r","QSI_S_"+i,"//zn1x0qh5hjniopg85-sfr.siteintercept.qualtrics.com/SIE/?Q_SIID="+i+"&Q_LOC="+encodeURIComponent(W.location.href))).start()}catch(e){}
$B.append("<div id='"+i+"'/>")})('ZN_1X0qH5HJnIoPG85')
if(v)eTagW('QSI','QSI.API.load();eTagSortie(8)')}
_.msgDCX=function(o){
o=$('.sfrNC .user')
if(o.length)o.html('<a href="/webmail/disconnect.html">Se déconnecter</a>');else to(_.msgDCX,500)}
if(f=W.setCookieMaxResolution)f()
if($&&W.IST&&(M('@/sfr-et-moi/vos-services-sfr/sfr-cloud$')||M('@/cas/login')&&par('service').match(/cloud/))){
_.fSB=function(d){$B.append(d.content)}
stat_js('//static.s-sfr.fr/export/bloc/django/smartbannercloud.json?callback=_eT.fSB')}
})(window,document)
