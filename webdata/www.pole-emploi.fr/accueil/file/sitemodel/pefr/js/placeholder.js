$(document).ready(function() {
	/* ====================== Placeholder pour les anciens navigateurs ============================= */

	$.support.placeholder = ('placeholder' in document.createElement('input'));
	
	if (!$.support.placeholder) {
		 $("[placeholder]").focus(function () {
			 if ($(this).val() == $(this).attr("placeholder")) $(this).removeClass('placeholder').val("");
		 }).blur(function () {
			 if ($(this).val() == "") $(this).addClass('placeholder').val($(this).attr("placeholder"));
		 }).blur();

		 $("[placeholder]").parents("form").submit(function () {
			 $(this).find('[placeholder]').each(function() {
				 if ($(this).val() == $(this).attr("placeholder")) {
					 $(this).val("");
				 }
			 });
		 });
	 }
});