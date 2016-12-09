// JavaScript Document

makeCadreEmploi = function() {
	var strUrlWidget = 'https://www.lefigaro.fr/content/widgets/cadre_emploi-box/';
	var strUrlCss = strUrlWidget+'cadre_emploi-box.css';
	var strFluxUrl = 'https://www.lefigaro.fr/com/Cadre-emploi/Cadre-emploi';
	
	// Desactivation dans le backOffice SDV : 
	if(window.location.href.search('https://back5.figaro.net/')>=0) {
		// Integration CSS :
		var elemStyle = document.createElement("link");
		elemStyle.setAttribute('type', 'text/css');
		elemStyle.setAttribute('rel', 'stylesheet');
		elemStyle.setAttribute('href', strUrlCss);
		document.getElementsByTagName('head')[0].appendChild(elemStyle);
		
		document.write('<div class="cadre_emploi-box" style="height: 20px;">Cadre Emploi Box</div>')
		
		return true;
	}
	
	// Fonction de detection de compatibilit� :
	var detectBrowserNextGen = function() {
		if (typeof document.body.style.maxHeight != "undefined")	return Boolean(true);	// IE 7, mozilla, safari, opera 9
		else	return Boolean(false);	// IE6, older browsers
	}
	
	// Fonction de generation automatique d'ID unique :
	var fctGetNewId = function() {
		var strPrefix = (arguments[0]) ? arguments[0] : 'auto_id';
		var i = 0;
		var strGenerateId = new String();
		if(document.getElementById(strPrefix))	return strPrefix;
		else	while(document.getElementById(strPrefix+i))	i++;
		strGenerateId = strPrefix+i;
		return strGenerateId;
	}
	
	// Fonction d'ajout de <Script> en <Head>
	var fctAddScript = function(url) {
		var n = document.createElement("script");
		n.setAttribute("type", "text/javascript");
		n.setAttribute("src", url);
		document.getElementsByTagName("head")[0].appendChild(n);
	}
	
	// ------------------------------------ //
	// ------------------------------------ //
	// ------------------------------------ //
	
	// Integration CSS :
	var elemStyle = document.createElement("link");
	elemStyle.setAttribute('type', 'text/css');
	elemStyle.setAttribute('rel', 'stylesheet');
	elemStyle.setAttribute('href', strUrlCss);
	document.getElementsByTagName('head')[0].appendChild(elemStyle);
	
	var strIdCadreEmploiBox = fctGetNewId('cadre_emploi-box');
	document.write('<div id="'+strIdCadreEmploiBox+'"></div>');
	this.elemCadreEmploiBox = document.getElementById(strIdCadreEmploiBox);
	
	// Listes des blocs par rubrique :
	this.a_objBloc = new Array();
		this.a_objBloc['default'] = {
			flux : 'homepage',
			rubrique : ''
		};
		this.a_objBloc['sante'] = {
			flux : 'sante',
			rubrique : 'sante'
		};
		this.a_objBloc['medias'] = {
			flux : 'com',
			rubrique : 'medias'
		};
		this.a_objBloc['hightech'] = {
			flux : 'web',
			rubrique : 'hightech'
		};
		this.a_objBloc['automobile'] = {
			flux : 'auto',
			rubrique : 'automobile'
		};
		this.a_objBloc['economie'] = {
			flux : 'bourse',
			rubrique : 'economie'
		};
		this.a_objBloc['immobilier'] = {
			flux : 'immo',
			rubrique : 'immobilier'
		};
		this.a_objBloc['assurance'] = {
			flux : 'assurance',
			rubrique : 'assurance'
		};
		this.a_objBloc['voyages'] = {
			flux : 'voyage',
			rubrique : 'voyages'
		};
		this.a_objBloc['environnement'] = {
			flux : 'environnement',
			rubrique : 'environnement'
		};
		this.a_objBloc['sciences'] = {
			flux : 'sciences',
			rubrique : 'sciences'
		};
		this.a_objBloc['sport'] = {
			flux : 'sports',
			rubrique : 'sport'
		};
	
	// Fonction de detection rubrique (contenu contextualis�) :
	var detectRubrique = function() {
		var valDefault = (arguments[0]) ? arguments[0] : Boolean(false);
		var a_TestKey = (arguments[1]) ? arguments[1] : null;
		var strHost = window.location.host;
		var strLocation = window.location.href;
		var strPath = window.location.pathname;
		var strRubrique = new String();
		
		var a_strFolder = strPath.split('/');
		if(a_strFolder.length<1)	return valDefault;
		strRubrique = a_strFolder[1];
		if(strRubrique == '') 	return valDefault;
		if(a_TestKey && !a_TestKey[strRubrique]) 	return valDefault;
		return strRubrique;
	}

	this.displayCadreEmploiBox = function(data) {
		/* HEADER */
		
		var strCadreEmploiHeader = '<h3>Offres d\'emploi <span class="avec">avec </span><a href="https://lefigaro.cadremploi.fr/emploi/recherche_offres?fwd_suffix=figaro" target="_blank"><img alt="logo" src="https://www.lefigaro.fr/content/widgets/cadre_emploi-box/img/logo.png" class="logo"></a></h3>';
		
		/* FIN DU HEADER */
		
		/* CONTENT */
		
		var strCadreEmploiContent = '\
		<div class="offres">';
		strCadreEmploiContent += genContent(data);
		strCadreEmploiContent += '</div>';
		
		
		strCadreEmploiContent += '\
			<div class="form">\
				<form target="_blank" method="post" action="https://lefigaro.cadremploi.fr/emploi/fr.cadremploi.publi.page.home.HomeCtrl" name="recherche" >\
					<input type="hidden" name="fwd_suffix" value="figaro" >\
					<input type="hidden" value="https://www.cadremploi.fr/caempl/servlet/fr.cadremploi.publi.page.recherche_offres.RechercheOffresView"  name="redirect" >\
					<span style="display:none;" >\
						<input type="checkbox" checked="checked" value="1" name="chk_tyc" >\
						<input type="checkbox" checked="checked" value="2" name="chk_tyc" >\
						<input type="checkbox" checked="checked" value="3" name="chk_tyc" >\
						<input type="checkbox" checked="checked" value="4" name="chk_tyc" >\
						<input type="checkbox" checked="checked" value="5" name="chk_tyc" >\
						<input type="checkbox" checked="checked" value="7" name="chk_tyc" >\
						<input type="checkbox" checked="checked" value="9" name="chk_tyc" >\
					</span>\
					<input type="hidden" value="Rechercher" name="mth" >\
					<select name="fctCode" id="fonction">\
						<option selected="selected" value="">Fonction</option>\
						<option value="">-----------------------</option>\
						<option value="10100">Administration</option>\
						<option value="10200">Gestion/Compta/Fin.</option>\
						<option value="10300">Audit</option>\
						<option value="10400">Conseil</option>\
						<option value="10500">Juridique/Fiscal</option>\
						<option value="10600">RH/Formation</option>\
						<option value="20100">Etudes/Recherche</option>\
						<option value="20230">Sant�/Social</option>\
						<option value="20300">Logistique/Achats</option>\
						<option value="20400">Production/S�curit�</option>\
						<option value="20500">SI/T�l�com</option>\
						<option value="20700">Internet/e-Commerce</option>\
						<option value="30100">Commercial/Vente</option>\
						<option value="30400">Export</option>\
						<option value="30500">Marketing</option>\
						<option value="30800">Communication/Cr�a.</option>\
						<option value="40000">Direction G�n�rale</option>\
					</select>\
					<button type="submit" id="Rechercher" value="Rechercher" class="rightForm">Rechercher</button>\
				</form>\
			</div>';
		/* FIN DU CONTENT */
		
		/* FOOTER */
		
		var strCadreEmploiFooter = '<p class="footer"><a href="https://lefigaro.cadremploi.fr/emploi/recherche_offres?fwd_suffix=figaro">Recherche d�taill�e</a></p>';
		
		/* FIN DU FOOTER */
		
		/* AFFICHAGE DU BLOC */
		var strContentCadreEmploi = strCadreEmploiHeader+strCadreEmploiContent+strCadreEmploiFooter;
		this.elemCadreEmploiBox.className = 'cadre_emploi-box';
		this.elemCadreEmploiBox.innerHTML = strContentCadreEmploi;
		/* FIN DE L'AFFICHAGE */
	}
	
	var genContent = function(data){
		var strOffres = '';
		var nbOffre = '';
		var strHTMLOffre = '';
		var classe = '';
		var nbOffreMax = 5;
		if(data.length < nbOffreMax){
			nbOffre = data.length;
		}else{
			nbOffre = nbOffreMax;
		}
		for(var i = 0; i < nbOffre; i++){
			if(i%2 != 0) classe = 'grey';
			else classe = '';
			if(i == 0) classe += 'no-border';
			strHTMLOffre += '<a href="'+data[i]['link']+'" target="_blank"><p class="'+classe+'">'+data[i]['title']+'</p></a>';
		}
		return strHTMLOffre;
	}
	
	this.callback = function(datas){
		var data = datas;
		this.displayCadreEmploiBox(data['channel']['item']);
	}
	this.strRubrique = detectRubrique('default', this.a_objBloc);
	fctAddScript(strFluxUrl+'-'+this.a_objBloc[this.strRubrique]['flux']+'.jsonp.js');
};

objCadreEmploiBox = new makeCadreEmploi();