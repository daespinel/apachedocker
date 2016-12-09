//=======	DROPDOWN MENU  =========================================================================================================
var Menu = {
	init : function() {
	var config = {    
         sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
         interval: 100,  // number = milliseconds for onMouseOver polling interval    
         over: doOpen,   // function = onMouseOver callback (REQUIRED)    
         timeout: 100,   // number = milliseconds delay before onMouseOut    
         out: doClose    // function = onMouseOut callback (REQUIRED)    
    };
    
	function doOpen() {
		$(this).addClass("hover");
	    $('ul:first',this).css('visibility', 'visible');
	}
	 
	function doClose() {
	    $(this).removeClass("hover");
	    $('ul:first',this).css('visibility', 'hidden');
	}
	
	$("ul.princ li, ul.princ li ul li:has(ul)").hoverIntent(config);
	
	$("ul.princ li:has(ul.sub-menu)").hover(function () {
     	$(this).parent().parent("li").addClass('active');
  	});
  	$("ul.princ").find("li.active").addClass('active');
 
	//$("ul.menu li ul li:has(ul)").find("a:first").append(" &raquo; ");
		
	}
}


// ------ ONGLETS ---------
var Onglets = {
	init: function() {
		// Tabs > No height
		var $tabs = $("#tabs").tabs({  // first tab selected
			fx: {
				opacity: "toggle",
				duration: "fast"
			}
			});
			
		$('#toTabs2').on('click', function() { // bind click event to link
		   	$tabs.tabs('select', 1); 
		});
	}
}

var OngletsPret = {
	init: function() {
		// Tabs > No height
		var $tabs = $("#tabs2").tabs({  // first tab selected
			fx: {
				opacity: "toggle",
				duration: "fast"
			}
		});
	}
}

var OngletsGuideEtudiant = {
	init: function() {
		// Tabs > No height
		var $tabs = $("#tabs3").tabs({  // first tab selected
			fx: {
				opacity: "toggle",
				duration: "fast"
			}
		});

	}
}

var OngletsPart = {
	init: function() {
		// Tabs > No height
		var $tabs = $("#tabs-part").tabs({  // first tab selected
			fx: {
				opacity: "toggle",
				duration: "fast"
			}
		});

		$('a#toTabs2').on('click', function() { // bind click event to link
		   	$tabs.tabs('select', 1); 
		});
	}
}

var OngletsPro = {
	init: function() {
		// Tabs > No height
		var $tabs = $("#tabs-pro").tabs({  // first tab selected
			fx: {
				opacity: "toggle",
				duration: "fast"
			}
		});
	}
}

var OngletsProfLiberales = {
	init: function() {
		// Tabs > No height
		var $tabs = $("#tabs6").tabs({  // first tab selected
			fx: {
				opacity: "toggle",
				duration: "fast"
			}
		});
	}
}

// ------ TABLEAU ACCORDEON ---------
var AccordionTable = {
	init: function() {
		$('.tableauTarifs2').accordion({
			header: 'div.th',
			active: '.current',
			alwaysOpen: false,
			animated: 'slide', 
			autoheight: false
		});
	}
}

// ------ SCROLL TO TOP ---------
var ScrollToTop = {
	init : function() {
		$('.toTop').click(function() {
   			$('html,body').animate({scrollTop: 0}, 'slow');
  		});
	}
}


// ------ LAYERS ---------

var AfficheLayer = {
	init : function() {
		/* ---- Layer Téléphone --- */
		
		// On Click	
		/*$('#btnHoraires ').live("click", function(e){
			e.preventDefault();
			$('.layer2').show();
			$('#layerHoraires').toggle("800", function() {
				$('.btn-close').click(function() {
					$('#layerHoraires').hide("800");
				});
			});
		});
		
		$('#btnHoraires2').live("click", function(e){
			e.preventDefault();
			$('.layer2').appendTo($('#destinationLayerHoraires'));
			$('.layer2').show();
			$('#destinationLayerHoraires').toggle("800", function () {
				$('.btn-close').click(function(){
					$('#destinationLayerHoraires').hide("800");
					
				});
			});
		});*/
		
		// On hover
		$('#btnHoraires').live({
			mouseenter : function(e) {
				e.preventDefault();
				$('.layer2').show();
				$('#layerHoraires').toggle("800");
			},
			mouseout : function() {
				$('#layerHoraires').toggle("800");	
			}	
		});
		
		$('#btnHoraires2').live({
			mouseenter : function(e) {
				e.preventDefault();
				$('.layer2').appendTo($('#destinationLayerHoraires'));
				$('.layer2').show();
				$('#destinationLayerHoraires').toggle("800");
			},
			mouseout : function() {
				$('#destinationLayerHoraires').toggle("800");		
			}	
		});
		
		
				
		// On Click	
		/*
		$('#infosHoraires1 ').live("click", function(e){
			e.preventDefault();
			$('.layer2').appendTo($('#destinationLayerHoraires2'));
			$('.layer2').show();
			$('#destinationLayerHoraires2').toggle( "800", function() {
				$('#destinationLayerHoraires2').click(function() {
					$('.btn-close').hide("800");	
					$('.layer2').appendTo($('#destinationLayerHoraires'));	
				});
			});
		})
		
		$('#infosHoraires3 ').live("click", function(e){
			e.preventDefault();
			$('.layer2').appendTo($('#destinationLayerHoraires3'));
			$('.layer2').show();
			$('#destinationLayerHoraires3').toggle("8000", function() {
				$('.btn-close').click(function() {
					$('#destinationLayerHoraires3').hide("800");	
					$('.layer2').appendTo($('#destinationLayerHoraires'));	
				});
			});
		})
		*/
	
		// On hover
		$('#infosHoraires1').live({
			mouseenter : function(e) {
				e.preventDefault();
				$('.layer2').appendTo($('#destinationLayerHoraires2'));
				$('.layer2').show();
				$('#destinationLayerHoraires2').toggle("800");
			},
			mouseout : function() {
				$('#destinationLayerHoraires2').hide("800");
				$('.layer2').appendTo($('#destinationLayerHoraires'));	
			}	
		});
		
		$('#infosHoraires1-pro').live({
			mouseenter : function(e) {
				e.preventDefault();
				$('.layer2').appendTo($('#destinationLayerHoraires2-pro'));
				$('.layer2').show();
				$('#destinationLayerHoraires2-pro').toggle("800");
			},
			mouseout : function() {
				$('#destinationLayerHoraires2-pro').hide("800");
				$('.layer2').appendTo($('#destinationLayerHoraires'));	
			}	
		});
		
		$('#infosHoraires3 ').live({
			mouseenter : function(e) {
				e.preventDefault();
				$('.layer2').appendTo($('#destinationLayerHoraires3'));
				$('.layer2').show();
				$('#destinationLayerHoraires3').toggle("800");
			},
			mouseout : function() {
				$('#destinationLayerHoraires3').hide("800");	
				$('.layer2').appendTo($('#destinationLayerHoraires'));	
			}	
		});
		
		
		/* ---- Layer Infos Cartes --- */
		
		// On Click
		$('#tooltipVisa').live("click", function(e){
			$('.layerCarte').appendTo($('#infosCarteVisa'));
			$('.layerCarte').show();
			$('#infosCarteVisa').toggle("800", function() {
				$('.btn-close').click(function(){
					$('#infosCarteVisa').hide("800");
				});
			});
		})
		
		$('#tooltipVisa2').live("click", function(e){
			$('.layerCarte').appendTo($('#infosCarteVisa2'));
			$('layerCarte').show();
			$('#infosCarteVisa2').toggle("800", function() {
				$('.btn-close').click(function() {
					$('#infosCarteVisa2, #infosCarteVisa').hide("800");
					$('.layerCarte').appendTo($('#infosCarteVisa'));	
				});
			});
		})
		
		
		
		// On hover
		
		/*$('#tooltipVisa').live({
			mouseenter : function() {
				$('.layerCarte').appendTo($('#infosCarteVisa'));
				$('.layerCarte').show();
				$('#infosCarteVisa').toggle('800');
			},
			mouseout : function() {
				$('#infosCarteVisa').hide();
			}
		});
		
		$('#tooltipVisa2 ').live({
			mouseenter : function() {
				$('.layerCarte').appendTo($('#infosCarteVisa2'));
				$('.layerCarte').show();
				$('#infosCarteVisa2').toggle('800');
			},
			mouseout : function() {
				$('#infosCarteVisa2, #infosCarteVisa').hide("800");
				$('.layerCarte').appendTo($('#infosCarteVisa'));	
			}
		});*/
		
		/* ---- Layer Guide immo --- */
		
		$('#btnPretImmo ').live("click", function(e){
			e.preventDefault();
			var overlay = $('<div id="overlay" />');
			overlay.appendTo($('#container'));
			$('#overlay').fadeTo();
			$('.layerImmo').show();
			$('#layerGuideImmo').toggle("fast", function() {
				$('.btn-close-bleu').click(function() {
					$('#layerGuideImmo').hide("fast");
					$('#overlay').fadeOut();
					$('#overlay').remove();
				});
			});
		});
	
	}
}

//  ----- POP RAPPEL IMMEDIAT -----

var CallmeBack = {
	init: function() {
		var dialogWidth = 450;
		$("#rappelForm").dialog({
			autoOpen: false,
			height: 150,
			width: 450,
			modal: true
		})
		
		$("#popRappel, .popRappel").click(function() {
			$("#rappelForm").dialog("open");
		});
	},
	
	close: function() {
		$(".submitbutton, .close-pop").click(function(){
			$("#rappelForm").dialog("close");
		});
		
		}
}

// ------ SELECTION LISTE PRODUITS ---------

var SelectProduit = {
	init : function() {
		$("#produits-list").change(function () {
			var anchor = $("#produits-list option:selected").val();
			$("#produits-list option:selected").each(function() {
				 $('html,body').animate({scrollTop: $('#'+anchor).offset().top - 10}, 1000, 'easeInOutExpo');
			})
		});
	}
}


// ------ DEFILMENT TICKER ---------

var Ticker = {
	init : function() {
		$('.scrollingtext').bind('marquee', function() {
		        var ob = $(this);
		        var tw = ob.width();
		        var ww = ob.parent().width();
		        ob.css({ right: -tw });
		        ob.animate({ right: ww }, 20000, 'linear', function() {
		            ob.trigger('marquee');
		        });
		    }).trigger('marquee');
		
	}
}

$(document).ready( function() {
	ScrollToTop.init();

});