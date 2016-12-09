$(document).ready(function() {
	$('.block-tuile').each(function(){
		var tuile = $(this);
		var header = tuile.find('.block-tuile-title a');
		var body = tuile.find('.block-tuile-content');
		
		header.click(function(){
			var op;
			var height = body.find('.block-image').height();
			
			if(tuile.hasClass('slided')){
				op = "+";
				header.attr('title','Ouvrir : ' + header.attr('attr-title'));
				header.find('img').attr('alt','Bloc remonté');
			}else{
				op = "-";
				header.attr('title','Fermer : ' + header.attr('attr-title'));
				header.find('img').attr('alt','Bloc descendu');
			}
			
			body.animate({top: op+"=" + height + "px"}, 300, 'easeOutQuint');
			
			tuile.toggleClass('slided');
				
			return false;
		});
	});
});