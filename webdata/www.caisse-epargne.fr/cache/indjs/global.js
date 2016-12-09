/**
 * Fichier : global.js
 * Description : fonctions JS génériques
 * Auteur : Hamza Iqbal - hiqbal[at]actualys.com
 * Copyright: Actualys
 ******************************************/

/**
 * Initialisation
 ******************************************/
(function($)
{	
	var fancyboxConfig = 
	{
		/*overlayOpacity:	0.3,
		overlayColor: '#000',*/
		padding: 10,
		overlayShow: false,
		onComplete: function()
		{
			var overlay = $('#fancybox-overlay');
			overlay.show().height($('body').height());
		}
	};
	
	$(document).ready( function()
	{
		$.metadata.setType('html5');
		$.detectTerminal();
		
		$.videInputFocus();
		$('img.rollover').survolImg();

		if(!$('body').hasClass('access_1') && !$('body').hasClass('access_2'))
		{
			$.initRechercheHeader();
			//$.initAccesComptes();
			$.initBlocsAcces();
			//$.initBlocsCol();
			if(!Modernizr.borderradius) {
				$.initCoinsArrondis();
			}
		}
	});
	
	
	/**
	 * Var dump
	 ******************************************/
	$.varDump = function(arr,level)
	{
		var dumped_text = "";
		if(!level) level = 0;
		
		//The padding given at the beginning of the line.
		var level_padding = "";
		for(var j=0;j<level+1;j++) level_padding += "    ";
		
		if(typeof(arr) == 'object') { //Array/Hashes/Objects 
			for(var item in arr) {
				var value = arr[item];
				
				if(typeof(value) == 'object') { //If it is an array,
					dumped_text += level_padding + "'" + item + "' ...\n";
					dumped_text += $.varDump(value,level+1);
				} else {
					dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
				}
			}
		} else { //Stings/Chars/Numbers etc.
			dumped_text = "===> "+arr+" <=== ("+typeof(arr)+")";
		}
		console.log(dumped_text);
	};
	
	/**
	 * Transforme une chaîne de caractères en objet JS
	 * $.unserialize(s);
	 ******************************************/
	$.unserialize = function(s)
	{
	 	var s = decodeURI(s).split("&");
		var param;
		var paramsTab = {};
		
		$.each(s, function()
		{
			param = this.split("=");
			paramsTab[param[0]] = param[1];
        });
		
        return paramsTab;
    };
	
	/**
	 * Transforme une chaîne de caractères en objet JS
	 * $.detectTerminal();
	 ******************************************/
	$.detectTerminal = function()
	{
		var terminalAgent = navigator.userAgent.toLowerCase();
		var agentID = terminalAgent.match(/(iphone|ipod|ipad|android)/);
		var terminal = '';
		var version;
		
		if(agentID)
		{
			if(agentID.indexOf('iphone') >= 0) terminal = 'iphone';
			else if(agentID.indexOf('ipod') >=0 ) terminal = 'ipod';
			else if(agentID.indexOf('ipad') >= 0) terminal = 'ipad';
			else if(agentID.indexOf('android') >= 0) terminal = 'android';
		}
		else
		{
			version = parseInt($.browser.version);
			
			if($.browser.webkit) terminal = 'webkit';
			else if($.browser.mozilla) terminal = 'mozilla';
			else if($.browser.opera) terminal = 'opera';
			else if($.browser.msie)
			{
				if(version == 6) terminal = 'msie6';
				else if(version == 7) terminal = 'msie7';
				else if(version == 8) terminal = 'msie8';
				else if(version == 9) terminal = 'msie9';
			}
		}
		
		$('body').addClass(terminal);
		return terminal;
	};
	
	/**
	 * Gère le remplacement d'image au survol
	 * $(s).survolImg({suffixe: '_on'});
	 ******************************************/
	$.fn.survolImg = function(opt)
	{
		var images = $(this);
		var options = { suffixe: '_on' };
		if(opt) options = $.extend(options, opt);
		
		images.prechargeSurvolImg(options.suffixe);
		
		images.hover
		(
			function () {$(this).attr( 'src', survolCheminImg('survol', $(this).attr('src'), options.suffixe) );}, 
			function () {$(this).attr( 'src', survolCheminImg('', $(this).attr('src'), options.suffixe) );}
		);
	};
	 
	$.fn.prechargeSurvolImg = function(suffixe)
	{
		var images = $(this);
		
		$(window).bind('load', function()
		{
			images.each( function()
			{
				$('<img>').attr( 'src', survolCheminImg('survol', $(this).attr('src'), suffixe) );
			});
		});
	}
	
	var survolCheminImg = function(etat, src, suffixe)
	{
		if(etat == 'survol')
			return src.substring(0, src.search(/(\.[a-z]+)$/) ) + suffixe + src.match(/(\.[a-z]+)$/)[0]; 
		else
			return src.replace(suffixe+'.', '.');	
	}
	
	/**
	 * Vide la valeur des champs input au focus
	 * $.videInputFocus();
	 ******************************************/
	$.videInputFocus = function(opt)
	{	
		if(!Modernizr.input.placeholder)
		{
			var inputs = $('input[placeholder!=""][value=""]');
			
			inputs.each(function()
			{
				var placeholder = $(this).attr('placeholder');
				$(this).val(placeholder);
				
				$(this).focus( function() { if($(this).val() == placeholder) $(this).val(''); });	
				$(this).blur( function() { if($(this).val() == '') $(this).val(placeholder); });
			});
		}
	};
	
	/**
	 * Rollover d'un élément
	 * $(s).survolElem
		({
			classe: 'hover',
			ie6: false
		});
	 ******************************************/
	$.fn.survolElem = function(opt)
	{
		var elem = $(this);
		
		var options =
		{
			classe: 'hover',
			ie6: false
		};
		
		if(opt) options = $.extend(options, opt);
		
		if(options.ie6 && !($.browser.msie && parseInt($.browser.version) == 6)) return false;
		
		elem.hover
		(
			function () { $(this).addClass(options.classe); }, 
			function () { $(this).removeClass(options.classe); }
		);
	};
	
	/**
	 * Blocs de même hauteur
	 * $(s).hauteurEgale();
	 ******************************************/
	$.fn.hauteurEgale = function()
	{
		var blocs = $(this);
		var hauteurMax = 0;
		var hauteurMaxEm = 0;
		
		blocs.height('auto');
		blocs.each(function()
		{
			var hauteur = $(this).height();
			if(hauteur > hauteurMax) hauteurMax = hauteur;
		});
		
		hauteurMaxEm = $(hauteurMax).toEm();
		blocs.height(hauteurMaxEm);
	};
	
	/**
	 * Blocs de même largeur
	 * $(s).largeurEgale();
	 ******************************************/
	$.fn.largeurEgale = function()
	{
		var blocs = $(this);
		var largeurMax = 0;
		var largeurMaxEm = 0;
		
		blocs.each(function()
		{
			var largeur = $(this).width();
			if(largeur > largeurMax) largeurMax = largeur;
		});
		
		largeurMaxEm = $(largeurMax).toEm();
		blocs.width(largeurMaxEm);
	};
	
	
	/**
	 * Affiche / Masque plus de texte
	 * $(s).voirPlus
		({
			contenu: '.plus',
			lien: '.voir_plus',
			lien_ouvert: '.voir_plus_on',
			vitesse: '',
			callback: function() {}
		});
	 ******************************************/
	$.fn.voirPlus = function(opt) 
	{
		var blocs = $(this);
		
		var options =
		{
			contenu: '.plus',
			lien: '.voir_plus',
			lien_ouvert: '.voir_plus_on',
			vitesse: '',
			callback: function() {}
		};
		
		if(opt) options = $.extend(options, opt);
		
		blocs.each(function()
		{
			var bloc = $(this);
			var contenu = bloc.find('.'+options.contenu);
			var lien = bloc.find('a.'+options.lien);
	
			contenu.hide();
			
			lien.click(function()
			{
				contenu.slideToggle(options.vitesse, function(){ options.callback(); });
				lien.toggleClass(options.lien_ouvert);
				return false;
			});
		});
	}
	
	
	/**
	 * Retourne les paramètres d'une URL
	 * URL de la page par défaut
	 * $.getURLParam(url);
	 ******************************************/
	$.getURLParam = function(url) 
	{
		if(!url) url = window.location.href;
		
		var paramsTab = {};
		var params, param;
		var domaine = false;
		
		// Si c'est une url sans paramètre
		if(url.indexOf('?') == -1 && url.indexOf('=') == -1)
		{
			paramsTab['domaine'] = url;
		}
		else
		{
			url = url.split('?');
			
			// Si un nom de domaine est défini 
			if(url[1])
			{
				domaine = true;
				params = url[1];
			}
			// S'il n'y a que des paramètres
			else if(url[0] != "" && url[0].indexOf('=') != -1)
			{
				params = url[0];
			}
			else domaine = true;

			// Construction de l'objet
			if(params) paramsTab = $.unserialize(params);
			if(domaine) paramsTab['domaine'] = url[0];
		}
		
		return paramsTab;
	};
	
	/**
	 * Met à jour une URL avec des nouveaux 
	 * paramètres
	 * $.setURLParam(url, {nom1: val1, nom2: val2, ... });
	 ******************************************/
	$.setURLParam = function(url, nouvParams) 
	{
		var paramsTab = $.getURLParam(url);
		var nouvUrl = '';
		var domaine = false;
		var param;
		var premierParam = true;
		
		// fusionne les anciens et les nouveaux paramètres
		$.extend(paramsTab, nouvParams);
		
		for(param in paramsTab)
		{
			// Si un nom de domaine est défini
			if(param == 'domaine') domaine = paramsTab[param];
			
			// Sinon construction de l'URL avec les paramètres
			else
			{
				// ajoute '&' avant chaque paramètre sauf le 1er 
				if(!premierParam) nouvUrl += '&';
				premierParam = false;
				
				nouvUrl += param + '=' + paramsTab[param];
			}
		}
		// ajoute le domaine aux paramètres
		if(domaine) nouvUrl = domaine + '?' + nouvUrl;

		return nouvUrl;
	};
	
	/**
	 * Initialise le moteur de recherche 
	 * du header
	 * $.initRechercheHeader();
	 ******************************************/
	$.initRechercheHeader = function() 
	{
		var form = $('#form_recherche_header');
		var champ = form.find('input.texte');
		
		champ.focus(function(){ form.addClass('focus'); });
		champ.blur(function(){ form.removeClass('focus'); });
	};
		
	
	/**
	 * Affiche / Masque le contenu des blocs
	 * de la colonne de gauche
	 * $.initBlocsCol();
	 ******************************************/
	$.initAccesComptes = function() 
	{
		var btnAccesComptes = $('#btn_acces_comptes a');
		btnAccesComptes.fancybox(fancyboxConfig);
		
		var urlParams = $.getURLParam();
		if(urlParams.popup === "true") { btnAccesComptes.trigger('click');}
	};
	
	/**
	 * Egalise la hauteur des blocs d'accès
	 * sur une ligne
	 * $.initBlocsInfo();
	 ******************************************/
	$.initBlocsAcces = function() 
	{
		$('.grille_ligne .bloc_acces .ba_cont').hauteurEgale();
	};
	
	
	/**
	 * Affiche / Masque le contenu des blocs
	 * de la colonne de gauche
	 * $.initBlocsCol();
	 ******************************************/
	$.initBlocsCol = function() 
	{
		var blocs = $('#colonne .bloc_col');
		
		blocs.each(function()
		{
			var bloc = $(this);
			var titre = bloc.find('h2');
			var contenu = bloc.find('ul');
	
			titre.click(function()
			{
				contenu.slideToggle();
				bloc.toggleClass('bloc_col_ferme');
			});
		});
	};
	
	
	/**
	 * Créer les coins arrondis d'un bloc
	 * $(s).arrondir();
	 ******************************************/
	$.fn.arrondir = function(hg, hd, bd, bg)
	{
		var bloc = $(this);
		var coin_hg = $('<b class="coin coin_hg"></b>');
		var coin_hd = $('<b class="coin coin_hd"></b>');
		var coin_bd = $('<b class="coin coin_bd"></b>');
		var coin_bg = $('<b class="coin coin_bg"></b>');
		
		if(hg) bloc.prepend(coin_hg);
		if(hd) bloc.prepend(coin_hd);
		if(bd) bloc.prepend(coin_bd);
		if(bg) bloc.prepend(coin_bg);
	};
	
	
	/**
	 * Initialise les blocs avec coins arrondis
	 * $.initCoinsArrondis();
	 ******************************************/
	$.initCoinsArrondis = function() {
	
		// Barre de navigation
		$('#navigation ul li#btn_acces_comptes').arrondir(1,0,0,1);
		$('#navigation ul li#btn_acces_comptes a span').arrondir(1,1,1,1);
		$('#navigation ul li:last-child a').arrondir(0,1,1,0);
		
		// Blocs de la colonne de gauche
		$('#colonne .bloc_col h2').arrondir(1,1,1,1);
		$('#colonne .bloc_col ul li:last-child a').arrondir(0,0,1,1);
	};
	
})(jQuery);
