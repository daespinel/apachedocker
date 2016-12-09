var focusElements = 'a, area, input, object, select, button, textarea, frame, iframe, img';
var isIe = !isNaN(parseFloat(navigator.appVersion.split("MSIE")[1])) ? true : false;
var ieVersion = parseFloat(navigator.appVersion.split("MSIE")[1]);
/*
 * Popin P�le emploi
 * Author: Jeremy Mahot
 * Copyright (c) 2014 P�le emploi
 * Licensed under the MIT license.
 */
 
(function($)
{	
	Popin.defaults = {	
		optionnal : false,
		defaultDisplay: "hide",
		noTrigger : false
	}
	
	function Popin(element, options) {
		// Store references to the selected element
		this.el = element;
		this.$el = $(element);
		
		// Merge passes options with defaults
		this.options = $.extend({}, Popin.defaults, options);

		// Initialize the plugin instance
		this._init();
	}
	//
	// Popin prototype
	//
	Popin.prototype = {
		//
		// Initialize the plugin instance
		//
		_init: function() {
			var self = this;
			
			if(this.options.noTrigger){
				this.popin = this.$el;
			}else{
				this.trigger = this.$el;
				this.trigger.click(function(){self._show(); return false;});
				this.popin = $('#'+this.trigger.attr('data-target'));
			}
			
			// Close
			this.popin.close = this.popin.find('.close');
			this.popin.close.click(function(){self._hide(); return false;});
			
			// The popin is moved outside the wrapper for accessibility concerns
			this.popin.insertAfter('.wrapper');
			
			if(this.options.defaultDisplay == "show"){
				self._show();
			}
				
			if(this.options.optionnal){
				$('body').click(function(e) {
					if (!$(e.target).closest('.popin').length){
						self._hide();
					}
				});
			}
		},
	 
		//
		// Methods (it starts with an underscore)
		//
		
		_show: function() {
			$('body').append('<div class="popin-blocker"></div>');
			this.popin.addClass('show');
			this._center();
			this._focusOn();

			return false;
		},
		
		_hide : function() {
			$('body > .popin-blocker').remove();
			this.popin.removeClass('show');
			this._focusOff();

			return false;
		},
		
		_center : function()  {
			var topPos, leftPos;
			var g = this._getPageSize();
			
			topPos = ((g.height - this.popin.height())/2)+ Math.max(document.body.scrollTop,document.documentElement.scrollTop);
			leftPos = ((g.width - this.popin.width())/2);

			this.popin.css('top', topPos + 'px');
			this.popin.css('left',leftPos + 'px');
			
		},
		
		_focusOn: function(){
			$('.wrapper').find(focusElements).each(function(){
				$(this).attr('data-tabindex',$(this).attr('tabindex')).attr('tabindex','-1');
			});
		},

		_focusOff: function(){
			$('.wrapper').find(focusElements).each(function(){
				if($(this).attr('data-tabindex')) $(this).attr('tabindex',$(this).attr('data-tabindex')).removeAttr('data-tabindex');
				else $(this).removeAttr('tabindex');
			});
		},
		
		_getPageSize : function(){
			var px = 0;
			var py = 0;
			if(!isIe) {
				px = window.innerWidth;
				py = window.innerHeight;
			} else {
				if(document.documentElement.clientHeight != 0) {
					py = document.documentElement.clientHeight;
					px = document.documentElement.clientWidth;
				} else {
					py = document.body.clientHeight;
					px = document.body.clientWidth;
				}
			}
			return ({height:py, width:px});
		}
	}

	$.fn.popin = function(options) {
		return this.each(function() {
			new Popin(this, options);
		});
	}
})(jQuery);