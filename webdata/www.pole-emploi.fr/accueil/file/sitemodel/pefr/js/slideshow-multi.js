
/*
 * Slideshow Multi Pôle emploi
 * Author: Jeremy Mahot
 * Copyright (c) 2014 Pôle emploi
 * Licensed under the MIT license.
*/

(function($)
{	
	SlideshowMulti.defaults = {
		duration:3,
		dynamicDuration:false,
		autoplay:false
	}
	
	function SlideshowMulti(element, options) {
		// Store references to the selected element
		this.el = element;
		this.$el = $(element);
        
		// Merge passes options with defaults
		this.options = $.extend({}, SlideshowMulti.defaults, options);

		// Initialize the plugin instance
		this._init();     
	}
	
	//
	// SlideshowMulti prototype
	//
	SlideshowMulti.prototype = {
		//
		// Initialize the plugin instance
		//
		_init: function() {
			var self = this;
		
			this.slideshow = this.$el.find('.slideshow');
			this.dots = this.$el.find('.slideshow-dots');
			this.current = 1;
			
            this.initialItems= this.$el.find('.item').length;
			
			//Default number of visible items in the slideshow viewport
            if ($( window ).width() < 1000)
                if ($( window ).width() < 768)
                    if ($( window ).width() < 480)
                        this.visibleItems = 1;
                    else
                        this.visibleItems = 2;
                else
                    this.visibleItems = 3;
            else
                this.visibleItems = 4;
            
            
			var firstItems = this.$el.find('.item').slice(0,this.visibleItems).clone().toArray();
			var lastItems = this.$el.find('.item').slice(this.$el.find('.item').length - this.visibleItems).clone().toArray();
            
			this.itemWidth = this.$el.find('.item').width();
            
            
			
			if(this.$el.find('.item').length >= this.visibleItems){
                
                $.each(firstItems,function() {
                    
                    self.slideshow.append(this);   
                });
                
                $.each(lastItems.reverse(),function() {
                     self.slideshow.prepend(this);           
                });
                
               $(this.$el.find('.item')[this.visibleItems]).addClass("current");
                
				this.items = this.$el.find('.item');
				
				this.slideshow.width(this.itemWidth * this.items.length);
                
				this.slideshow.css({
					left : -this.itemWidth * this.visibleItems
				});
			
				if(this.options.autoplay){
					if(this.options.dynamicDuration){
						this.timer = $.timer(function(){self._nextDynamic.apply(self);}).once(this.slideshow.find('.item').eq(this.current).attr('data-duration') * 1000);
					}else{
						this.timer = $.timer(function(){self._next.apply(self);}, this.options.duration * 1000).play();
					}
				}
				
				// Création des puces				
				this.items.each(function(index) {
					if(index != 0 && index != self.items.length-1){
						if(index == 1){
							self.dots.append('<a class="current" href="javascript:" data-index="' + index + '" title="Aller au slide n°' + index + '"><span></span></a>');
						}else{
							self.dots.append('<a href="javascript:" data-index="' + index + '" title="Aller au slide n°' + index + '"><span></span></a>');
						}	
					}
				});
				
				// Bind
				this.$el.find('.next').click(function(){self._next();});
				this.$el.find('.prev').click(function(){self._prev();});
				this.$el.find('.slideshow-play-pause a').click(function(){self._controls();});
				this.dots.find('a').click(function(){self._go(this);});
				$(window).resize(function(){self._resize();});
				
				this._resize();
				
			}else{
				this.$el.find('.next').remove();
				this.$el.find('.prev').remove();
				this.$el.find('.slideshow-play-pause a').remove();
				this.slideshow.css({ left: 0 });
				
				this.items = this.$el.find('.item');
				$(window).resize(function(){self._resize();});
				
				this._resize();
				return false;
			}
		},
	 
		//
		// Methods (it starts with an underscore)
		//
		
		_resize: function() {
            
			var currentIndex = $(this.$el.find('.item.current')).index();
            
           
            
            if ($( window ).width() < 1000){
                
                if ($( window ).width() < 768){
                    
                    if ($( window ).width() < 480){
                    
                        this.visibleItems = 1;
                
                        this.items.css({
                            width : ((this.$el.width() -50)/100 ) * 96
                        });

                    }else{
                        
                        this.visibleItems = 2;

                        this.items.css({
                            width : ((this.$el.width() -50)/100 ) * 50
                        });
                    }
                    
                }else{
                
                    this.visibleItems = 3;

                    this.items.css({
                        width : ((this.$el.width() -50)/100 ) * 33
                    });
                }
            }else{
                
                this.visibleItems = 4;
                
                this.items.css({
                        width : ((this.$el.width() -50)/100 ) * 25
                });
                
            }
            
			this.itemWidth = this.$el.find('.item').width();
				
			this.slideshow.width(this.itemWidth * this.items.length);

			if(this.$el.find('.item').length > this.visibleItems){
				this.slideshow.css({
					left: - ((currentIndex) * this.itemWidth)
				});
			}else{
				this.slideshow.css({ left: 0 });
			}          
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
	
            var formerCurrent = $(this.$el.find('.item.current')).index();
           
            $(this.$el.find('.item.current')).removeClass('current');
            
            
			this.slideshow.animate({
				left : '-=' + self.itemWidth * self.visibleItems
			}, 300, function() {
                
                if ( (formerCurrent ) > (self.$el.find('.item').length - ((3*self.visibleItems)+1) )    ) {
                    
                    self.slideshow.css({
                        left : '+=' + self.itemWidth * self.initialItems
                    });
                    
                    $(self.$el.find('.item')[formerCurrent + self.visibleItems - self.initialItems]).addClass('current');
                    
                }
                else{
                    $(self.$el.find('.item')[formerCurrent + self.visibleItems]).addClass('current');
                }
			});
            
			return false;
		},
		
		
		_prev : function() {
			var self = this;
			var current = this.dots.find('.current').toggleClass('current');
			
			var formerCurrent = $(this.$el.find('.item.current')).index();
           
            $(this.$el.find('.item.current')).removeClass('current');
			
			this.slideshow.animate({
				left : '+=' + self.itemWidth * self.visibleItems
			}, 300, function() {
					if (formerCurrent < (2*self.visibleItems+1) ) {
                      
                        
                        self.slideshow.css({
                            left : '-=' + self.itemWidth * self.initialItems 
                        });

                         $(self.$el.find('.item')[formerCurrent - self.visibleItems + self.initialItems]).addClass('current');
                        
				    }else{
                    
                         $(self.$el.find('.item')[formerCurrent - self.visibleItems]).addClass('current');
                    }
			});
		},
		
		_controls : function(){
			var control = this.$el.find('.slideshow-play-pause').toggleClass('inactive');
			
			if(control.hasClass('inactive'))
				this.timer.pause();
			else 
				this.timer.play();
		}
	}

	$.fn.slideshowMulti = function(options) {
		return this.each(function() {
			new SlideshowMulti(this, options);
		});
	}
})(jQuery);

$(document).ready(function() {
	 $('.block-slideshow-multi').slideshowMulti({autoplay:false, dynamicDuration:false});
});