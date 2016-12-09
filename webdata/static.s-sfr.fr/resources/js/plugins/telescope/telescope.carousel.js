(function(context){
    var next = function(scope){
        var data = scope.get();
        
        startTimer(scope);
        
        var current = data.current;
        current++;
        if (current >= data.slides.length) {
            current = 0;
        }
        
        scope.set('current', current);
    };
    
    var previous = function(scope){
        var data = scope.get();
        
        startTimer(scope);
        
        var current = data.current;
        current--;
        if (current < 0) {
            current = data.slides.length-1;
        }
        
        scope.set('current', current);
    };
    
    var stopTimer = function(scope){
        var data = scope.get();
        
        if (data.timer) {
            clearTimeout(data.timer);
        }
    };
    
    var startTimer = function(scope){
        var data = scope.get();
        
        if (data.timer) {
            clearTimeout(data.timer);
        }
            
        if (data.autorun && !data.mouseIn) {
            timer = setTimeout(function () {
                next(scope);
            }, data.delay);
            scope.set('timer', timer);
        }
    };
    
    var toPosition = function(scope, pos){
        var data = scope.get();
        startTimer(scope);
        
        scope.set('current', pos);
    };

    Telescope.Directives.carousel = Telescope.classes.Directive.extend({
        onScopeAttach: function () {
            var autorun = (this.attributes['data-autorun'] === 'true'),
                delay = parseInt(this.attributes['data-delay']);
                
            this.scope.set({
                current: 0,
                timer: null,
                autorun: autorun,
                delay: delay,
                slides: this.$el.find(this.attributes['data-carousel-slides-selector'] || '.carousel-slides__item')
            });
            
            if (autorun) {
                var that = this;
                this.scope.set('timer',  setTimeout(function () {
                    next(that.scope);
                }, delay));
                
                this.scope.set('mouseIn', false);
                this.$el.on('mouseenter', function (event) {
                    that.scope.set('mouseIn', true);
                    if (that.scope) {
                        stopTimer(that.scope);
                    }
                });
                this.$el.on('mouseover',function (event) {
                    that.scope.set('mouseIn', true);
                    if (that.scope) {
                        stopTimer(that.scope);
                    }
                });
                
                this.$el.on('mouseleave', function (event) {
                    that.scope.set('mouseIn', false);
                    if (that.scope) {
                        startTimer(that.scope);
                    }
                });
            }
        }
    });
    Telescope.Directives['carousel-next'] = Telescope.classes.Directive.extend({
        initialize: function () {
            Telescope.classes.Directive.prototype.initialize.apply(this, arguments);
            this.$el.on('click', $sfr.proxy(function (event) {
                event.preventDefault();
                if (this.scope) {
                    next(this.scope);
                }
            }, this));
        }
    });
    Telescope.Directives['carousel-previous'] = Telescope.classes.Directive.extend({
        initialize: function () {
            Telescope.classes.Directive.prototype.initialize.apply(this, arguments);
            this.$el.on('click', $sfr.proxy(function (event) {
                event.preventDefault();
                if (this.scope) {
                    previous(this.scope);
                }
            }, this));
        }
    });
    Telescope.Directives['carousel-scene'] = Telescope.classes.Directive.extend({
        onScopeChange: function (data) {
            this.showCurrentSlide();
        },
        showCurrentSlide: function(){
            var data = this.scope.get();
            var slides = this.$el.find(this.attributes['data-carousel-slides-selector'] || '.carousel-slides__item');
            slides.removeClass('active');
            slides.eq(data.current).addClass('active');
        }
    });
    Telescope.Directives['carousel-to-position'] = Telescope.classes.Directive.extend({
        initialize: function (data) {
            Telescope.classes.Directive.prototype.initialize.apply(this, arguments);
            this.$el.on('click', $sfr.proxy(function (event) {
                event.preventDefault();
                if (this.scope) {
                    toPosition(this.scope, parseInt(this.expression)-1);
                }
            }, this));
        }
    });
    Telescope.Directives['carousel-dots'] = Telescope.classes.Directive.extend({
        initialize: function () {
            Telescope.classes.Directive.prototype.initialize.apply(this, arguments);
            this.$el.on('click', '.carousel-dots__item', $sfr.proxy(function (event) {
                var pos = this.$el.children().index(event.target);
                if (this.scope) {
                    toPosition(this.scope, pos);
                }
            }, this));
        },
        onScopeChange: function () {
            var data = this.scope.get();
            if(data.slides.length !== this.$el.children().size()) {
                this.$el.empty();
                $sfr.each(data.slides, $sfr.proxy(function() {
                        this.$el.append('<div class="carousel-dots__item"></div>');
                    }, this));
            }
            this.$el.children().removeClass('active');
            this.$el.children().eq(data.current).addClass('active');
        }
    });
    })(window);

