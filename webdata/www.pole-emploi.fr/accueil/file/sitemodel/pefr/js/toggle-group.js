$(document).ready(function() {
	$('#onglet-toggle').toggleGroup();
	$('#top5-toggle').toggleGroup();
	$('#search-cv-toggle').toggleGroup();
});


/*
 * toggleGroup Pôle emploi
 * Author: Jeremy Mahot
 * Copyright (c) 2014 Pôle emploi
 * Licensed under the MIT license.
 */
 
(function($)
{	
	ToggleGroup.defaults = {	}
	
	function ToggleGroup(element, options) {
		// Store references to the selected element
		this.el = element;
		this.$el = $(element);

		// Merge passes options with defaults
		this.options = $.extend({}, ToggleGroup.defaults, options);

		// Initialize the plugin instance
		this._init();
	}
	//
	// ToggleGroup prototype
	//
	ToggleGroup.prototype = {
		//
		// Initialize the plugin instance
		//
		_init: function() {
			var self = this;
			
			self.origins = self.$el.find('li').children('a');
			self.targets = new Array();
			
			self.origins.each(function(index,element){
				self.targets[index] =  $('#'+ $(element).attr('data-target'));
			});
			
			this.origins.click(function(event){self._click(event); return false;});
		},
	 
		//
		// Methods (it starts with an underscore)
		//
		_click: function(event) {
			
			$.each(this.targets, function(index,element){
				element.removeClass('toggle-clicked');
			});
			
			this.origins.removeClass('link-toggle-clicked').attr('title','');
			
			var element = event.target;
			$('#'+ $(element).attr('data-target')).addClass('toggle-clicked');
			$(element).addClass('link-toggle-clicked').attr('title','Onglet selectionné');
		}
	}

	$.fn.toggleGroup = function(options) {
		return this.each(function() {
			new ToggleGroup(this, options);
		});
	}
	
})(jQuery);