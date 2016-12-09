$(document).ready(function() {
	$('.link-toggle').toggle();
});

	
$(function() {
	$('.link-toggle-group-action').click(function(){
		var clicked = $(this).toggleClass('link-toggle-clicked').hasClass('link-toggle-clicked');
		
		if(clicked) $(this).find('span').text('Tout afficher'); else $(this).find('span').text('Tout masquer');

		$('.link-toggle[data-target*="' + $(this).attr('data-target') + '"]').each(function(){
			if($(this).hasClass('link-toggle-clicked') && !clicked) $(this).click();
			if(!$(this).hasClass('link-toggle-clicked') && clicked) $(this).click();
		});
		
		return false;
	});
});
	

/*
 * Toggle Pôle emploi
 * Author: Jeremy Mahot
 * Copyright (c) 2014 Pôle emploi
 * Licensed under the MIT license.
 */
 
(function($)
{	
	Toggle.defaults = {	}
	
	function Toggle(element, options) {
		// Store references to the selected element
		this.el = element;
		this.$el = $(element);

		// Merge passes options with defaults
		this.options = $.extend({}, Toggle.defaults, options);

		// Initialize the plugin instance
		this._init();
	}
	//
	// Toggle prototype
	//
	Toggle.prototype = {
		//
		// Initialize the plugin instance
		//
		_init: function() {
			var self = this;
			
			this.header = this.$el;
			this.body = $('#'+this.header.attr('data-target'));
			
			// Bind
			this.header.click(function(){self._click(); return false;});
		},
	 
		//
		// Methods (it starts with an underscore)
		//
		
		_click: function() {

			this.header.toggleClass('link-toggle-clicked');
			this.body.toggleClass('toggle-clicked');
			
			if(this.body.css('display') == "block"){
				this.header.attr('title','Fermer');
				this.header.find('img').attr('alt','Bloc remonté');
			}else{
				this.header.attr('title','Ouvrir');
				this.header.find('img').attr('alt','Bloc descendu');
			}
			
			return false;
		}
	}

	$.fn.toggle = function(options) {
		return this.each(function() {
			new Toggle(this, options);
		});
	}
})(jQuery);