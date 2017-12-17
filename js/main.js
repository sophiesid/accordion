;(function($) {
	"use strict";

	var content= $('.ba-content'),
		clickItem = $('.ba-title');

		content.hide();

		clickItem.on('click', function (e){
			$(this).next().show();
			content.not($(this).next()).hide();

		});

})(jQuery);
