/*
 * Common .js for all weborama products
 *
 */

/* ======================== common ======================== */
function _ap_defined(name) {
    return ( typeof(window[name]) == "undefined" ) ? false : true;
}
function wis_defined(name) {
     return (typeof(name) == 'undefined' || name == null) ? false : true;
}

/* cookies */
function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
    return null;
}

function SetCookie (name,value,expires,path,domain,secure)  {
	document.cookie = name + "=" + escape (value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
}

/* string */
function encode_en_lettre (num) {
	num = parseInt(num,10);
	if(num > 2500) return '';
	var num1 = parseInt(num/52,10);
	var num2 = num % 52;

	num1 += 65;
	if (num1>90) num1+=6;

	num2 += 65;
	if (num2>90) num2+=6;

	var mon_code52 = String.fromCharCode(num1) + String.fromCharCode(num2);
	return mon_code52;
}

function traite_chaine(str,taille_max) {
	if (str == null) return null;
	var s = traduction(str);
	var bag = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-.,;:_ ";
	var i;
	var returnString = "";
	if (s == null) return "";
	s = "" + s;
	s = s.substr(0,taille_max);
	for (i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (bag.indexOf(c) != -1) returnString += c;
	}
	returnString = unicite_espace(returnString);
	returnString = escape(returnString);
	return returnString;
}

function convertir(chaine) {
	var str = chaine.replace(/&#(\d+);/,"$1");
	return String.fromCharCode(str);
}

function traduction(chaine) {
	var chaine_b = unescape(chaine);
	var i=0;
	while ( chaine_b != chaine && i<5 )
	{
		i++;
		chaine = chaine_b;
		chaine_b = unescape(chaine_b);	
	}
	return chaine_b.replace(/&#(\d+);/gi, convertir);
}

function unicite_espace(chaine) {
	var str = chaine.replace(/(\s+)/g,' ');
	return str.replace(/(^\s*)|(\s*$)/g,"");
}

// Identification du type de navigateur
function wf_uaO(c) {
	var wf_ual=navigator.userAgent.toLowerCase();
	return(wf_ual.indexOf(c))
}


/* ======================== analytics ======================== */
_NB_MAX_CONTENU_ 	= 1;
_TAILLE_MAX_CONTENU_ 	= 100;
_TAILLE_MAX_CHAINE_ 	= 50;
_TAILLE_MAX_ALPHANUM_ 	= 30;
_COOKIE_SEGMENTATION    = 'wbo_segment_';
var _NB_MAX_EXTEND_PARAMETERS = 5;
var _TAILLE_MAX_EXTEND_PARAMETER_ = 100;

var _ap_an         = new Object;
_ap_an.wrp_host        = ( _ap_defined('WRP_HOST') ) ? WRP_HOST : 'pro.weborama.fr';
_ap_an.wrp_host_ssl    = ( _ap_defined('WRP_HOST_SSL') ) ? WRP_HOST_SSL : _ap_an.wrp_host;
_ap_an.site_grp    = ( _ap_defined('WRP_ID_GRP') ) ? WRP_ID_GRP : null;
_ap_an.site        = ( _ap_defined('WRP_ID') ) ? WRP_ID : null;
_ap_an.section     = ( _ap_defined('WRP_SECTION') ) ? WRP_SECTION : null;
_ap_an.subsection  = ( _ap_defined('WRP_SUBSECTION') ) ? WRP_SUBSECTION : null;
_ap_an.section_grp = ( _ap_defined('WRP_SECTION_GRP') ) ? WRP_SECTION_GRP : null;
_ap_an.subsection_grp = ( _ap_defined('WRP_SUBSECTION_GRP') ) ? WRP_SUBSECTION_GRP : null;
_ap_an.frame  	   = ( _ap_defined('WRP_ACC') ) ? WRP_ACC : null;
_ap_an.channel     = ( _ap_defined('WRP_CHANNEL') ) ? WRP_CHANNEL : null;
_ap_an.content     = ( _ap_defined('WRP_CONTENT') ) ? WRP_CONTENT : null;
_ap_an.wrp_profiling_mode = ( _ap_defined('WRP_PROFILING_COOKIE_MODE') ) ? WRP_PROFILING_COOKIE_MODE : 1;

_ap_an.wreport_counter = function()
{
	if (this.site == null || this.section == null || this.subsection == null)  return 1;

	this.nb_content = 0;
	this.url = '';
	this.segmentation = new Array(5);	
	this.profiles = '';

	this.cookie_segmentation = _COOKIE_SEGMENTATION+this.site;
	this.domaine_segmentation = '';

	this.host 	= this.wrp_host + '/fcgi-bin/comptage_wreport.fcgi';
	this.host_ssl 	= this.wrp_host_ssl + '/fcgi-bin/comptage_wreport.fcgi';

	this.extendparameters = '';
	this.extend_parameters = new Array(_NB_MAX_EXTEND_PARAMETERS);

	/* Initialisation */
	this.section = traite_chaine(this.section,_TAILLE_MAX_ALPHANUM_);
	this.subsection = traite_chaine(this.subsection,_TAILLE_MAX_ALPHANUM_);
	this.chaine = traite_chaine(this.chaine,_TAILLE_MAX_CHAINE_)
	this.section_grp = traite_chaine(this.section_grp,_TAILLE_MAX_ALPHANUM_);
	this.subsection_grp = traite_chaine(this.subsection_grp,_TAILLE_MAX_ALPHANUM_);
        this.channel = traite_chaine(this.channel,_TAILLE_MAX_CHAINE_);

	/* groupe */
	if (this.site_grp == null || this.section_grp == null || this.subsection_grp == null) {
	   this.site_grp = null;
	   this.section_grp = null;
	   this.subsection_grp = null;
	}

	this.counter = new Image(1,1);
	this.generate_url();
	this.counter.src = this.url;

	return 0;
}


// Génére l'url de comptage
_ap_an.generate_url = function()
{
	var _date_ = new Date();
	this.date = parseInt(_date_.getTime()/1000 - 60*_date_.getTimezoneOffset());
	this.ref = ''+escape(document.referrer);

	this.ta = '0x0';
	this.co = 0;
	this.nav = navigator.appName;

	this.get_profiles();
	this.get_extend_parameters();

	if ( parseInt(navigator.appVersion)>=4)
	{
  		this.ta = screen.width+"x"+screen.height;
		this.co = (this.nav!="Netscape")?screen.colorDepth:screen.pixelDepth;
	}
        if ((this.frame != null)&&(this.nav!="Netscape"))
        {
    	   var reftmp = 'parent.document.referrer';
           if((this.frame<5)&&(this.frame>0)) { for(_k=this.frame;_k>1;_k--) reftmp = 'parent.' + reftmp;}
           var mon_ref = eval(reftmp);
           if(document.referrer == parent.location || document.referrer=='') this.ref=''+escape(mon_ref);
        }

	this.url = "https://"+this.host+"?WRP_ID="+this.site;
	if ( location.protocol == 'https:') this.url = "https://"+this.host_ssl+"?WRP_ID="+this.site;

	if(this.profiles != null)  this.url += "&WRP_PFL="+escape(this.profiles);
	if(this.extendparameters != null)  this.url += this.extendparameters;

	var is_mac=(wf_uaO('mac')!=-1);
	var is_opera=(wf_uaO('opera')!=-1);
	if((!is_mac)&&(!is_opera)) {
		var msieind=navigator.userAgent.indexOf('MSIE');
		if(msieind>0) {
  		if(parseInt(navigator.userAgent.charAt(msieind+5))>=5) {
				document.body.addBehavior("#default#clientCaps");
				this.cnx = (document.body.connectionType == 'modem') ? 'A':'B';
				document.body.addBehavior("#default#homePage");
				this.home = (document.body.isHomePage(location.href)) ? 'A':'B';
				this.url+="&CONN="+this.cnx+"&ISHOME="+this.home;
			} 
		}
	} 
	this.url += "&WRP_SECTION="+this.section+"&WRP_SUBSECTION="+this.subsection;

	if(this.site_grp != null && this.section_grp != null && this.subsection_grp != null)
        {
		this.url+="&WRP_ID_GRP="+this.site_grp+"&WRP_SECTION_GRP="+this.section_grp+"&WRP_SUBSECTION_GRP="+this.subsection_grp;
	}

	if(this.content != null) this.url+="&WRP_CONTENT="+this.content;
	if(this.channel != null) this.url+="&WRP_CHANNEL="+this.channel;

    this.url += "&ver=2&da2="+this.date+"&ta="+this.ta+"&co="+this.co+"&ref="+this.ref;
}

/* ------------------ Profilling ------------------------ */

// Ajout d'un profil pour le profiling
_ap_an.add_profile = function(numero,valeur)
{
	numero = parseInt(numero,10);
	if ((numero < 1) || (numero > 5)) return -2;
	if ( this.wrp_profiling_mode == 0 )
	{
		numero--;
		this.segmentation[numero] = valeur;
		return 1;
	}
	if(parseInt(navigator.appVersion,10)<=3) return -1;
	nb_mois = 12;
	var verif_val_I = /^\d+$/;
	if(verif_val_I.test(valeur)) valeur = encode_en_lettre(valeur);
	var verif_val_A = /^\w*$/;
	if(verif_val_A.test(valeur)) {
		var mon_profil_wbo = GetCookie(this.cookie_segmentation);
		tab_segment = new Array('','','','','');
		if(mon_profil_wbo != null) {
			tab_segment = mon_profil_wbo.split('|');
			if(tab_segment.length != 5) tab_segment = ('','','','','');
				//On vérifie qu'une mise à jour est nécessaire.
			if(tab_segment[numero - 1]==valeur) return 1;
		}
		if(this.domaine_segmentation == '') {
			this.domaine_segmentation = window.location.host;
			tab_points = new Array();
			tab_points = window.location.host.split('.');
			if(tab_points.length>2) this.domaine_segmentation = this.domaine_segmentation.substring(this.domaine_segmentation.indexOf('.'),this.domaine_segmentation.length);
			if(tab_points.length==2) this.domaine_segmentation = '.' + this.domaine_segmentation;
		}
		var ma_chaine_profil='';
		for(var i=1; i<=5; i++) {
			if(i==numero) tab_segment[i-1]=valeur;
			if((tab_segment[i-1]=='') || (tab_segment[i-1]==null)) tab_segment[i-1] = '';
			ma_chaine_profil += tab_segment[i-1];
			if(i<5) ma_chaine_profil += '|';
		}
		expd = new Date();
		expd.setTime(expd.getTime() + (nb_mois * 30 * 24 * 3600 * 1000));
		SetCookie(this.cookie_segmentation,ma_chaine_profil,expd,'/',this.domaine_segmentation);
		return 2;
	}
	else return -3;
}

// Ajout du profiling
_ap_an.add_profiles = function(p1,p2,p3,p4,p5) {
	this.add_profile(1,p1);
	this.add_profile(2,p2);
	this.add_profile(3,p3);
	this.add_profile(4,p4);
	this.add_profile(5,p5);
}

// Destruction du cookie de profiling ou de la variable
_ap_an.delete_profiles = function()
{
	if ( this.wrp_profiling_mode == 0 )
	{
		this.segmentation = Array('','','','','');
	}
	else
	{
		expd = new Date();
		expd.setTime(expd.getTime() - (24 * 3600 * 1000));
		SetCookie (this.cookie_segmentation,'||||',expd,'/',this.domaine_segmentation);
	}
}

// Recuperation des informations de profiling ( on renvoie une chaine escapée )
_ap_an.get_profiles = function() {
	this.profiles = GetCookie(this.cookie_segmentation);
	if( this.profiles == null) {
		this.profiles = '';
		var verif_val_I = /^\d+$/;
                var is_def = 0;
		for(var i = 0 ;i <= 4; i++) {
			if(verif_val_I.test(this.segmentation[i])) this.segmentation[i] = encode_en_lettre(this.segmentation[i]);
			if (wis_defined(this.segmentation[i])) { this.profiles += this.segmentation[i]; is_def = 1; }
			if(i < 4) this.profiles += '|';
		}
		if (is_def == 0) this.profiles = null; 
	}
}


/* ------------------ EXTEND PARAMETERS -------------------- */

_ap_an.add_extend_parameters = function(p1,p2,p3,p4,p5) {
	this.add_extend_parameter(1,p1);
	this.add_extend_parameter(2,p2);
	this.add_extend_parameter(3,p3);
	this.add_extend_parameter(4,p4);
	this.add_extend_parameter(5,p5);
}

_ap_an.add_extend_parameter = function(numero,valeur) {
	numero = parseInt(numero,10);
	if ((numero < 1) || (numero > _NB_MAX_EXTEND_PARAMETERS)) return -2;
	this.extend_parameters[--numero] = clean_extend_parameter(valeur);
}

_ap_an.clean_extend_parameter = function(s) {
	if (s == null) return "";
	s = "" + s;
	return s.substr(0,_TAILLE_MAX_EXTEND_PARAMETER_);
}

_ap_an.get_extend_parameters = function() {
	this.extendparameters = '';
	for(var i=1;i <= _NB_MAX_EXTEND_PARAMETERS; i++) {
		if (wis_defined(this.extend_parameters[i-1])) this.extendparameters += "&BI"+i+"="+encodeURIComponent(this.extend_parameters[i-1]);
	}	
}


function create_ifrtrk() {
    var ifrurl='//cstatic.weborama.fr/iframe/external_all.html';
	if ( location.protocol == 'https:') ifrurl = "https:"+ifrurl;
    else ifrurl = "http:"+ifrurl;

    try {
        var wbo_ifrm = document.createElement('IFRAME'), bodyRef = document.getElementsByTagName('body').item(0) || document.documentElement.childNodes[0];
        wbo_ifrm.style.width=wbo_ifrm.style.height='1px';
        wbo_ifrm.style.border='0px';
        wbo_ifrm.style.position='absolute';
        wbo_ifrm.style.display='none';
        wbo_ifrm.style.top=wbo_ifrm.style.left='0px';
        wbo_ifrm.style.zIndex=0;
        wbo_ifrm.src=ifrurl;
        if (bodyRef.firstChild != null) {
            bodyRef.insertBefore(wbo_ifrm, bodyRef.firstChild);
        } else {
            bodyRef.appendChild(wbo_ifrm);
        }
    } catch (e) {
        document.write("<iframe src='"+ifrurl+"' width=1 height=1 frameborder=0 style='border:0px'><\/iframe>");
    }
}

// main
_ap_an.wreport_counter();

/* ======================== publisher ======================== */

create_ifrtrk();

function wr_aff_pub(n, l, h) {
  if (typeof l == 'undefined') l=1; if (typeof h == 'undefined') h=1;
  document.write('<img src="https://astatic.weborama.fr/transp.gif" width='+l+' height='+h+'/>');
}

var _ap_ad       = new Object;
var wr_secure    = '';
var wr_solutions = 'solution.weborama.fr/fcgi-bin/diff.fcgi?';

_ap_ad.write = function(src) {
    document.write('<scr'+'ipt type="text/'+'jav'+'ascri'+'pt" src="'+src+'"></script>');
}
_ap_ad.host        = ( _ap_defined('wr_host') )        ? wr_host : 'aimfar';
_ap_ad.board       = ( _ap_defined('wr_board') )       ? 'ide='+wr_board : null;
_ap_ad.boardsize   = ( _ap_defined('wr_boardsize') )   ? 'emp='+wr_boardsize : 'emp=1x1';
_ap_ad.autopage    = ( _ap_defined('wr_detail') )      ? 'kp='+wr_detail : null;
_ap_ad.floating    = ( _ap_defined('wr_floating') )    ? 'floating='+wr_floating : 'floating=0';
_ap_ad.site        = ( _ap_defined('wr_site') )        ? 'ids='+wr_site : null;
_ap_ad.page        = ( _ap_defined('wr_page') )        ? 'pageid='+wr_page : null;
_ap_ad.extparams   = ( _ap_defined('wr_extparams') )   ? 'ext_params='+escape(wr_extparams) : null;
_ap_ad.crealist    = ( _ap_defined('wr_crealist') )    ? 'cl='+wr_crealist : null;
_ap_ad.advlist     = ( _ap_defined('wr_advlist') )     ? 'al='+wr_advlist: null;
_ap_ad.camplist    = ( _ap_defined('wr_camplist') )    ? 'cal='+wr_camplist : null;
_ap_ad.model       = ( _ap_defined('wr_model') )       ? 'model='+wr_model : null;
_ap_ad.thema       = ( _ap_defined('wr_thema') )       ? 'wthema='+wr_thema : null;
_ap_ad.click       = ( _ap_defined('wr_click') )       ? 'ext_click='+escape(wr_click) : null;
_ap_ad.ex_secteurs = ( _ap_defined('wr_ex_secteurs' )) ? 'nsa='+escape(wr_ex_secteurs) : null;
_ap_ad.backup 	   = ( _ap_defined('wr_backup' )) 	   ? 'bak='+escape(wr_backup) : null;
_ap_ad.cache 	     = ( _ap_defined('wr_cache' )) 	     ? 'cache='+wr_cache : null;
_ap_ad.ref		     = null;
_ap_ad.url		     = null;
try {
	_ap_ad.url='url='+escape(document.location);
	var ref = (top!=null && top.location!=null && typeof(top.location.href)=="string")?top.document.referrer:document.referrer;
	_ap_ad.ref='ref='+escape(ref);	
} catch (e) {}

_ap_adlist       = [ 'site', 'page', 'boardsize', 'autopage', 'board', 'crealist',
                     'advlist', 'camplist', 'model', 'thema', 'floating', 'extparams', 'ref', 'url', 'click',
                     'ex_secteurs', 'backup', 'cache'
                   ];
var _ap_script   = 'http' + wr_secure + '://' + _ap_ad.host + '.' + wr_solutions;
var _ap_first    = true;


for ( var k in _ap_adlist ) {
    var key = _ap_adlist[k];
    if ( 'undefined' != typeof(_ap_ad[key]) && _ap_ad[key] != null ) {
        _ap_script += (_ap_first ? '' : '&') + _ap_ad[key];
        _ap_first = false;
    }
}
if (_ap_ad.board != null) _ap_ad.write(_ap_script);

/* ======================== advertiser ======================== */
