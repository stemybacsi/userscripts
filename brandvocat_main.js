var interval = null;
var mins = 2;
var secs = mins * 60;
var $szamlalo = null;

function ujszoveg() {
	console.log(secs);
	return 'Frissítés '+secs+' másodperc múlva...';
}

$(document).ready(function() {
	var mins = 2;
	$('.share_post a').click();
	$('.header_rank_container').append(function() {
		return '<div class="header_top_rank_company" id="frissszamlalo">'+ujszoveg()+'</div>';
	});
	$szamlalo = $('#frissszamlalo');
	$szamlalo.text(ujszoveg());
	interval = setInterval(function(){
		if (secs > 0) {
			$szamlalo.text(ujszoveg());
			secs--;
		} else {
			clearInterval(interval);
			window.location = window.location.href;
		}
	}, 1000);
});