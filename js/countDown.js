// activating the countdown timer

$(document).ready(function () {
	
	$('.countDown').countdown({

		until: $.countdown.UTCDate(
			+4, 2018, 2, 8 , 0, 0, 0
			),
		format: 'odhms'

	});


});


