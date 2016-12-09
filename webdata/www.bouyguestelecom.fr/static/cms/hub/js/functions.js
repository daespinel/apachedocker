var breakpoint = {
	desktop : 1024,
	mobile : 768
};

//navPerso pour la charte
var navPerso = function(name){

	var title = '<h3>&lt; '+ name +'</h3>';

	$('body').append('<div id="nav">'+ title +'<nav></nav></div>');
	$('#charte').find('section').each(function(){
		var x = $(this);
		var t = x.find('h2');
		var p = t.offset();
		var balise = '<li><a href="#" data-top="'+ p.top +'">'+ t.html() +'</a></li>';

		$('#nav nav').append(balise);
	});
	var scrt = $(window).scrollTop();
	if(scrt > 0){
		$('#nav').delay('50').animate({
			top : scrt + 20
		}, 50);		
	}

	var slideToNav = function(){
		var top = $(this).data('top');
		$('#nav nav li a').removeClass('on');
		$(this).addClass('on');
		$('html, body').animate({
			scrollTop : top-20
		}, 'slow');

		$('#nav').delay('50').animate({
			top : top
		}, 'slow');

		return false;
	};

	$('#nav nav li a').click(slideToNav);

};

// Fonction deployer un bloc
var deploy = function(){
	$('.deploy').each(function(){
		var x = $(this);
		var link = x.find('a.link-deploy');
		var box = x.find('.div-deploy');
		link.click(function(){
			box.slideToggle('slow');
			link.toggleClass('on');
			return false;
		});	
	});
};

// Fonction de modification de formulaire
var checkbox = function(){
	var isOn = function(){
		var input = $(this).parent().find('input');
		var label = $(this).parent().find('label');
		var c = input.is(':checked');
		if(c){
			label.addClass('on');
		} else {
			label.removeClass('on');
		}
	};
	$('label.checkbox').each(isOn);
	$('label.checkbox').parent().find('input').change(isOn);
};

var radio = function(){
	var isOn = function(){
		var on = $(this).is(':checked');
		var label = $(this).next();
		if(on){
			label.addClass('on');
		} else {
			label.removeClass('on');
		}
		var changeOn = function(){
			$('input[type=radio]').next().removeClass('on');
			label.addClass('on');
		};
		$(this).change(changeOn);
	};
	$('input[type=radio]').each(isOn);
};
var calculTime = function(credit, prix1, prix2){

	var duree1 = Math.floor(credit/prix1);
	var duree2 = Math.floor(credit/prix2);
	var heure;
	var minute;

	var leftPad = function(number) {    
		return ((number < 10 && number >= 0) ? '0' : '') + number;  
	}; 	

	if(duree1 > 60){
		heure = Math.floor(Math.abs(duree1) / 60);
		minute = leftPad(Math.abs(duree1) % 60);

		if(minute == '00'){
			minute = '';
		}

		duree1 = 'soit '+heure+'h'+minute;
	} else {
		duree1 = 'soit '+duree1+'min';
	}

	if(duree2 > 60){
		heure = Math.floor(Math.abs(duree2) / 60);
		minute = leftPad(Math.abs(duree2) % 60);

		if(minute == '00'){
			minute = '';
		}

		duree2 = 'soit '+heure+'h'+minute;
	} else {
		duree2 = 'soit '+duree2+'min';
	}


	$('.price-fix .soit').fadeIn('slow').html(duree1);
	$('.price-mobile .soit').fadeIn('slow').html(duree2);
};

//Montrer le montant de l'offre sur la page prepaye
var showOffre = function(){
	var deployOffre = function(){
		var x = $(this).parent();
		var show = x.find('span.offert');
		var supplement;
		var prix1centimes;
		var prix2centimes;

		$('.offres p a').removeClass('on');
		$(this).addClass('on');
		$('.offres p span').toggle(false).removeAttr('style');
		show.toggle('fast', function(){
			$(this).css('color', '#f64b7f');
		});

		if(show.html()){
			supplement = parseFloat(x.find('.offert').find('.supplement').html());
		} else {
			supplement = 0;
		}

		var base = parseFloat($('span.credit', this).html());

		if(base == 5){
			$('.price-mobile .price-second-num, .price-fix .price-second-num').fadeOut(0);
			$('.price-mobile .price-second5-num, .price-fix .price-second5-num').show(0);
			prix1centimes = $('.price-fix .price-second5-num').html();
			prix2centimes = $('.price-mobile .price-second5-num').html();
		} else {
			$('.price-mobile .price-second-num, .price-fix .price-second-num').show(0);
			$('.price-mobile .price-second5-num, .price-fix .price-second5-num').hide(0);
			prix1centimes = $('.price-fix .price-second-num').html();
			prix2centimes = $('.price-mobile .price-second-num').html();
		}

		var credit = base;

		var prix1euro = $('.price-fix .price-first').html();
		var prix1total = prix1euro + '.' + prix1centimes;

		var prix2euro = $('.price-mobile .price-first').html();
		var prix2total = prix2euro + '.' + prix2centimes;

		prix1 = parseFloat(prix1total);
		prix2 = parseFloat(prix2total);
		calculTime(credit, prix1, prix2);
		executeFormule('https://www.bouyguestelecom.fr/static/cms/prepayee/xml/formule.xml');


		return false;
	};
	$('.offres p a').click(deployOffre);
};

/*XML COUNTRY*/
function loadXML(_xmlFile){
	$.ajax({
		url:_xmlFile,
		success: setXML,
		dataType: "xml"
	});
}
function setXML(xmlPath){
	$('.sel-countries option').remove();
	
	$.ajax({
		type: 'GET',
		url: xmlPath,
		dataType: 'xml',
		success: function(xml){

			$(xml).find('country').each(function(){
				var country = $(this);
				var curOption = $("<option value='" + country.attr('num') + "'>" + country.attr('name') + "</option>");
				curOption.data("country",country);
				$(curOption).appendTo($('.sel-countries'));

				if(country.attr('default'))
					$('.sel-countries').data('default', country.attr('name'));

				if(country.attr('search')) {
					var curLi = $('.' + country.attr('search'));
					curLi.data("country", country);
				}
			});

			$('.sel-countries').change(function(e) {
				window.location.hash = $(this).children(':selected').data('country').attr('name');
			});
			$('#countries-search li').click(function() {
				window.location.hash = $(this).data('country').attr('name');
			});
			window.onhashchange = setPrices;
			setPrices();
		}
	});
}
var executeFormule = function(xmlPath){
	$.ajax({
		type: 'GET',
		url: xmlPath,
		dataType: 'xml',
		success: function(xml){

			$(xml).find('formule').each(function(){
				var name = $(this).attr('name');

				var valueOn = parseFloat($('.offres p a.cta.on span').html());

				$(this).find('carte').each(function(){
					var active = $(this).attr('active');
					var value = $(this).attr('name');
					var sms = $(this).attr('sms');
					var duree = $(this).attr('duree');
					var internet = $(this).attr('internet');
					var audela = $(this).attr('audela');
					var valable = $(this).attr('valable');


					if(value == valueOn){
						$('.sms-'+name).html(sms);
						$('.duree-'+name).html(duree);
						$('.internet-'+name).html(internet);
						$('.audela-'+name).html(audela);
						$('.valable-'+name).html(valable);
					}
				});
			});
		}
	});

};
function setPrices() {
	var pattern = ((window.location.hash.replace("#", "")) ? window.location.hash.replace("#", "") : $('.sel-countries').data('default'));
	var curCountry = $(".sel-countries option").filter(function () { return $(this).html() == pattern; });

	curCountry.attr('selected', 'selected');
	var price_fix = $(curCountry).data('country').find('price-fix');
	var price_mobile = $(curCountry).data('country').find('price-mobile');

	$('.price-fix .price-first').html($(price_fix).attr('first'));
	$('.price-fix .price-second-num').html($(price_fix).attr('second'));
	$('.price-mobile .price-first').html($(price_mobile).attr('first'));
	$('.price-mobile .price-second-num').html($(price_mobile).attr('second'));

	$('.price-fix .price-second5-num').html($(price_fix).attr('second5'));
	$('.price-mobile .price-second5-num').html($(price_mobile).attr('second5'));


	var on = $('.offres a.on');
	if(on.html()){
		var base = parseFloat($('.offres a.on span.credit').html());
		var prix1centimes;
		var prix2centimes;
		var supplement;

		if(base == 5){
			$('.price-mobile .price-second-num, .price-fix .price-second-num').fadeOut(0);
			$('.price-mobile .price-second5-num, .price-fix .price-second5-num').show(0);
			prix1centimes = $('.price-fix .price-second5-num').html();
			prix2centimes = $('.price-mobile .price-second5-num').html();
		} else {
			$('.price-mobile .price-second-num, .price-fix .price-second-num').show(0);
			$('.price-mobile .price-second5-num, .price-fix .price-second5-num').hide(0);
			prix1centimes = $('.price-fix .price-second-num').html();
			prix2centimes = $('.price-mobile .price-second-num').html();
		}

		var show = $('.offres a.on span.credit').parent().find('span.offert');
		if(show.html()){
			supplement = parseFloat(x.find('.offert').find('.supplement').html());
		} else {
			supplement = 0;
		}	
		var credit = base;

		var prix1euro = $('.price-fix .price-first').html();
		var prix1total = prix1euro + '.' + prix1centimes;

		var prix2euro = $('.price-mobile .price-first').html();
		var prix2total = prix2euro + '.' + prix2centimes;

		prix1 = parseFloat(prix1total);
		prix2 = parseFloat(prix2total);
		calculTime(credit, prix1, prix2);
		executeFormule('https://www.bouyguestelecom.fr/static/cms/prepayee/xml/formule.xml');
	}

}


/*CHOIX NAV*/
var choixNav = function(identifier, bloc){
	var zone = $(identifier);
	var links = zone.find('.nav a');

	var activerZone = function(){
		var active = $(identifier).find('.nav a.on');
		var zone = active.data('title');

		$(bloc).find('> div').each(function(){
			var name = $(this).data('title');
			if(zone == name){
				$(this).fadeIn('slow');
				$(this).css('display', 'table');
			} else {
				$(this).hide(0);
			}
		});
	};

	links.click(function(){
		links.removeClass('on');
		$(this).addClass('on');

		activerZone();

		return false;
	});

	activerZone();

};

var clickBlock = function(identifier){
	$(identifier).each(function(){
		var x = $(this);
		var link = x.find('a');
		var tag = link.attr('onclick');
		var href = link.attr('href');
		if(tag){
			x.prepend('<a href="'+href+'" onclick="'+tag+'" class="link-xiti">');
			x.bind({
				mouseover : function(){
					link.toggleClass('hover');
				},
				mouseleave : function(){
					link.toggleClass('hover');
				},
			});
		}
	});
};

var affichageInterstitiel = function(){
	var w = $(window).width();
	var h = $(window).height();
	var x = $('.interstitiel');

	var resizeIMG = function(){
		w = $(window).width();
		h = $(window).height();		
		if(w > h){
			x.find('img.back').removeClass('vertical').addClass('horizontal');
		} else {
			x.find('img.back').removeClass('horizontal').addClass('vertical');
		}
	};

	resizeIMG();
	$(window).resize(function(){
		resizeIMG();
		if(w > breakpoint.desktop){
			closeInter();
		}
	});
	if(w <= breakpoint.desktop){
		$('html, body').height(h).css('overflow', 'hidden');
	}

	var closeInter = function(){
		x.fadeOut('1000', function(){
			$(this).remove();
		});
		$('html, body').removeAttr('style');

		return false;
	};
	x.find('a.close').click(closeInter);
};

var resizeIMGback = function(bloc){
	var w = $(window).width();
	var h = $(window).height();		

	$(bloc).each(function(){
		var x = $(bloc);
		if(w > h){
			x.find('img.back').removeClass('vertical').addClass('horizontal');
		} else {
			x.find('img.back').removeClass('horizontal').addClass('vertical');
		}
	});
};

var sticky = function(bloc){
	var x = $(bloc);
	var y = $(window).scrollTop();
	
	$(window).scroll(function(){
		var pos = x.offset();
		y = $(window).scrollTop();
		if(y > pos.top - 150){
			$('.stickybar').css('top', 0);
		} else {
			$('.stickybar').css('top', -80);
		}
	});
};


var displaySuccess = function(){
	$('.fancy footer').fadeOut('fast');
	$('.numberText').removeClass('avertissement').addClass('good');
};

function getPhoneNumber(input) {
	var value = input.val();
	if (value && value.length > 0) {
		value = value.replace(/\s/g, '');
	}
	return value;
}

function isValidND (input) {
	return RegExp('^0[1-7,9][0-9]{8}$').test(getPhoneNumber(input));
}

var footerShow = function(msg, error){
	if(error){
		$('.numberText').removeClass('good').addClass('avertissement');
		$('.fancy footer').html('<p>'+ msg +'</p>').fadeIn('slow');
		$('.fancy footer').removeClass().addClass('avertissement');
	} else {
		$('.fancy footer').fadeOut('fast');
	}
};