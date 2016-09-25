// activating the countdown timer

$(document).ready(function () {
	
	$('.countDown').countdown({

		until: $.countdown.UTCDate(
			+2, 2016, 2, 8 , 0, 0, 0
			),
		format: 'odhms'

	});


});


