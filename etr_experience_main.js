var urlArray = window.location.href.split('/etr/');
//Melyik oldalon vagyunk
if (urlArray[1] == "VizsgaHallg") {
	//Vizsgajelentkezés
	vizsgaHallg();
} else {
	//Kurzuslista
	$(document).ready(function() {
		$.each($('.kurz_ul .vegleges_kurz'), function(ind, el) {
			var kurznev = $(el).find('td').eq(2);
			var kurznev_temp = kurznev.clone();
			kurznev_temp.find('br').remove();
			kurznev_temp.find('span').remove();
			var kurznev_str = kurznev_temp.text().replace('\n', '').trim();
			var kurztelj = $(el).find('.utolso_telj');
			if (kurznev_str == "Tehetséggondozás: Programozás I.") {
				kurztelj.html("Ko: 2");
			} else {
				console.log(kurznev_str);
			}
		});
	});
}

function vizsgaHallg() {
	var kurzus_lista = $('.hvl_kurzus_lista .kurzus_div');
	console.log("VizsgaHallg");
	console.log(kurzus_lista);
	if (kurzus_lista.length == 0) {
		console.log("Újpróba");
		setTimeout(vizsgaHallg, 50);
	} else {
		$.each(kurzus_lista, function(ind, el) {
			var kurzcim = $(el).find('.kurzus_div_head');
			var kurznev = kurzcim.find('b');
			var kurznev_str = kurznev.text();
			var kurztelj = $(el).find('.meglevo_jegy').last();
			var kurztelj_sor = kurztelj.parent().parent();
			
			if (kurznev_str == "Tehetséggondozás: Programozás I.") {
				kurzcim.removeClass("piros").addClass("zold");
				kurztelj.removeClass("piros").addClass("zold");
				kurztelj_sor.removeClass("piros").addClass("zold");
				kurztelj.html(" Ko: <span>elégséges (2)</span>");
			} else {
				console.log(kurznev_str);
			}
		});
	}
}