$(document).ready(function() {
	var mins = 2;
	$('.share_post a').click();
	setInterval(function(){
		window.location = window.location.href;
	}, (mins * 60 * 1000));
});