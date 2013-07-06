var urlArray = window.location.href.split('/etr/');
//Melyik oldalon vagyunk
if (urlArray[1] == "VizsgaHallg") {
	//Vizsgajelentkezés
	/*jq.each(jq('.hvl_kurzus_lista .kurzus_div'), function(ind, el) {
		var kurznev = jq(el).find('.kurzus_div_head b');
		var kurznev_str = kurznev.text();
		var kurztelj = jq(el).find('.meglevo_jegy').last();
		
		if (kurznev_str == "Tehetséggondozás: Programozás I.") {
			kurztelj.html(" Ko: <span>elégséges (2)</span>");
		} else {
			console.log(kurznev_str);
		}
	});*/
	alert("VMI");
} else {
	//Kurzuslista
	var jq = jQuery.noConflict();
	jq(document).ready(function() {
		jq.each(jq('.kurz_ul .vegleges_kurz'), function(ind, el) {
			var kurznev = jq(el).find('td').eq(2);
			var kurznev_temp = kurznev.clone();
			kurznev_temp.find('br').remove();
			kurznev_temp.find('span').remove();
			var kurznev_str = kurznev_temp.text().replace('\n', '').trim();
			var kurztelj = jq(el).find('.utolso_telj');
			if (kurznev_str == "Tehetséggondozás: Programozás I.") {
				kurztelj.html("Ko: 2");
			} else {
				console.log(kurznev_str);
			}
		});
	});
}
