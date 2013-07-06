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
			}
		});
	});
}

function vizsgaHallg() {
	var kurzus_lista = $('#hvl_kurzus_lista .kurzus_div');
	if (kurzus_lista.length == 0) {
		setTimeout(vizsgaHallg, 100);
	} else {
		$.each(kurzus_lista, function(ind, el) {
			var kurzcim = $(el).find('.kurzus_div_head');
			var kurznev = kurzcim.find('b');
			var kurznev_str = kurznev.text();
			
			if (kurznev_str == "Tehetséggondozás: Programozás I.") {
				//Elemek
				var kurztelj = $(el).find('.meglevo_jegy').last();
				var kurztelj_sor = kurztelj.parent().parent();
				var kurztelj_tolig = kurztelj_sor.find('.tol_ig_td');
				//Felülírás
				kurztelj.html(" Ko: <span>elégséges (2)</span>");
				kurztelj.removeClass("piros").addClass("zold");
				kurztelj_sor.removeClass("piros").addClass("zold");
				kurzcim.removeClass("piros").addClass("zold");
				kurzcim.find('.help').attr("title", "A kurzus teljesítve van.");
				kurztelj_tolig.removeClass("piros").addClass("zold");
				kurztelj_tolig.find('.help').attr("title", "Sikeresen teljesített vizsga");
			}
		});
	}
}