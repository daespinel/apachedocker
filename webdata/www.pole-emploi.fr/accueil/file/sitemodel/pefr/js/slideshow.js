$(document).ready(function() {
	$('.block-slideshow').slideshow({autoplay:true});
});

/*
 * Slideshow Pole emploi
 * Author: Jeremy Mahot
 * Copyright (c) 2014 Pole emploi
 * Licensed under the MIT license.
 */
 
(function($)
{	
	Slideshow.defaults = {
		duration:3,
		dynamicDuration:false,
		autoplay:false
	}
	
	function Slideshow(element, options) {
		// Store references to the selected element
		this.el = element;
		this.$el = $(element);

		// Merge passes options with defaults
		this.options = $.extend({}, Slideshow.defaults, options);

		// Initialize the plugin instance
		this._init();
	}
	//
	// Slideshow prototype
	//
	Slideshow.prototype = {
		//
		// Initialize the plugin instance
		//
		_init: function() {
			var self = this;
		
			this.slideshow = this.$el.find('.slideshow');
			this.dots = this.$el.find('.slideshow-dots');
			this.current = 1;
			
			var first = this.$el.find('.item').first();
			var last = this.$el.find('.item').last();
			
			this.$el.find('.item').width(this.$el.width());
			this.itemWidth = this.$el.width();
			
			if(this.$el.find('.item').length != 1){
				this.slideshow.append(first.clone()).prepend(last.clone());
				this.items = this.$el.find('.item');
				
				this.slideshow.width(this.itemWidth * this.items.length);
				this.slideshow.css({
					left : -this.itemWidth
				});
			
				if(this.options.autoplay){
					if(this.options.dynamicDuration){
						this.timer = $.timer(function(){self._nextDynamic.apply(self);}).once(this.slideshow.find('.item').eq(this.current).attr('data-duration') * 1000);
					}else{
						this.timer = $.timer(function(){self._next.apply(self);}, this.options.duration * 1000).play();
					}
				}
				
				// Cr�ation des puces				
				this.items.each(function(index) {
					if(index != 0 && index != self.items.length-1){
						if(index == 1){
							self.dots.append('<a class="current" href="javascript:" data-index="' + index + '" title="Aller au slide n�' + index + '"><span></span></a>');
						}else{
							self.dots.append('<a href="javascript:" data-index="' + index + '" title="Aller au slide n�' + index + '"><span></span></a>');
						}	
					}
				});
			}else{
				// Si le diaporama ne comporte qu'une photo, on ne cr�e pas de diaporama et on supprime le bouton Lecture
				this.$el.find('.slideshow-play-pause').remove();
			}
			
			// Bind
			this.$el.find('.next').click(function(){self._next();});
			this.$el.find('.prev').click(function(){self._prev();});
			this.$el.find('.slideshow-play-pause a').click(function(){self._controls();});
			this.dots.find('a').click(function(){self._go(this);});
			$(window).resize(function(){self._resize();});
		},
	 
		//
		// Methods (it starts with an underscore)
		//
		
		_resize: function() {
			this.$el.find('.item').width(this.$el.width());
			this.itemWidth = this.$el.width();
			this.slideshow.width(this.itemWidth * this.items.length);
			this.slideshow.css({
				left : -this.itemWidth * this.dots.find('.current').attr('data-index')
			});
		},

		_go : function(target) {
			this.timer.pause();
			this.$el.find('.slideshow-play-pause').addClass('inactive');
		
			this.slideshow.animate({
				left : '-=' + (this.itemWidth * ($(target).attr('data-index') - this.dots.find('.current').attr('data-index')))
			}, 300);
			
			this.dots.find('.current').toggleClass('current');
			this.current = $(target).attr('data-index')
			$(target).toggleClass('current');
			
			return false;
		},
		
		_next : function() {
			var self = this;
			var current = this.dots.find('.current').toggleClass('current');
			
			if($(current).attr('data-index') == this.items.length-2)
				this.dots.find('a[data-index=1]').toggleClass('current');
			else 
				$(current).next('a').toggleClass('current');
			
			this.slideshow.animate({
				left : '-=' + self.itemWidth
			}, 300, function() {
				if (Math.abs(self.slideshow.position().left + self.itemWidth
						* (self.slideshow.children().length - 1)) < 2) {
					self.slideshow.css({
						left : -self.itemWidth
					});
				}
			});
			return false;
		},
		
		_nextDynamic : function() {
			var self = this;
			
			this.current++;
			if(this.current == this.items.length-1) this.current = 1;
			
			
			this.slideshow.animate({
				left : '-=' + self.itemWidth
			}, 300, function() {
				if (Math.abs(self.slideshow.position().left + self.itemWidth
						* (self.slideshow.children().length - 1)) < 2) {
					self.slideshow.css({
						left : -self.itemWidth
					});
				}
			});
			
			this.timer = $.timer(function(){self._nextDynamic.apply(self);}).once(this.slideshow.find('.item').eq(this.current).attr('data-duration') * 1000);
		},
		
		_prev : function() {
			var self = this;
			var current = this.dots.find('.current').toggleClass('current');
			
			if($(current).attr('data-index') == 1) 
				this.dots.find('a[data-index=' + (this.items.length-2) + ']').toggleClass('current');
			else 
				$(current).prev('a').toggleClass('current');
			
			this.slideshow.animate({
				left : '+=' + self.itemWidth
			}, 300, function() {
				if (Math.abs(self.slideshow.position().left) < 2) {
					self.slideshow.css({
						left : -self.itemWidth
								* (self.slideshow.children().length - 2)
					});
				}
			});
			return false;
		},
		
		_controls : function(){
			var control = this.$el.find('.slideshow-play-pause').toggleClass('inactive');
			
			if(control.hasClass('inactive'))
				this.timer.pause();
			else 
				this.timer.play();
		}
	}

	$.fn.slideshow = function(options) {
		return this.each(function() {
			new Slideshow(this, options);
		});
	}
})(jQuery);