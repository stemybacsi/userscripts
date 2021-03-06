var urlArray = window.location.href.split('/etr/')[1].split('/');
var oldal = urlArray[0];
var aloldal = urlArray[1];
var vizsgaHallgText = "";
var kurzListaText = "";
var filterText = "";

//Melyik oldalon vagyunk
if (oldal == "VizsgaHallg") {
	//Vizsgajelentkezés
	vizsgaHallg();
	$(document).ready(function() {
		filterReload();
	});
} else if (oldal == "KurzusFelvetel" && (aloldal == "KurzusLista" || aloldal == "Kurzuslista")) {
	kurzLista();
	$(document).ready(function() {
		$("#filter_Ciklus").change(kurzLista);
	});
} else {
	//Kurzuslista
	$(document).ready(function() {
		$.each($('#kurzus_atjel table'), function(table_ind, table_el) {
			var tabla = $(table_el);
			$.each(tabla.find('tr'), function(tr_ind, tr_el) {
				var sor = $(tr_el);
				if (tr_ind == 0) {
					sor.remove();
				} else if (tr_ind == 1 && !sor.hasClass("fejlec2")) {
					sor.remove();
				} if (sor.hasClass("fejlec2")) {
					var header = $('<thead>');
					var header_sor = $('<tr>');
					var th;
					var tart;
					$.each(sor.find('td'), function(td_ind, td_el) {
						tart = $(td_el).html();
						th = '<th class="fejlec">'+((tart == " ") ? "Jelöl":tart)+'</th>';
						header_sor.append(th);
					});
					tabla.find('tbody').before(header.append(header_sor));
					sor.remove();
				} else {
					var oszlopok = $(tr_el).find('td');
					if (oszlopok.length > 1) {
						var idopont = (table_ind == 0) ? oszlopok.eq(6):oszlopok.eq(7);
						var ip_str = idopont.attr("title");
						var p1 = ip_str.indexOf("{Kért: ");
						var p2 = ip_str.indexOf("] ");
						idopont.html(ip_str.substring(p1 + 7, p2 + 1));
					}
				}
			});
		});
		$('#kurzus_atjel table').dataTable({
			"bJQueryUI": true
		});
	});
}

function filterReload() {
	var tmpText = $('#hallg_ker_info_sav a').text();
	console.log("filterReload: " + tmpText);
	if (filterText == tmpText) {
		console.log("javit filterReload");
		setTimeout(filterReload, 100);
	} else {
		filterText = tmpText;
		$("#szur_gomb_a").click(vizsgaHallg);
		$("#filter_Ciklus").change(filterReload);
	}
}

function vizsgaHallg() {
	var kurzus_lista = $('#hvl_kurzus_lista .kurzus_div');
	var tmpText = "";
	if (kurzus_lista.length > 0) {
		tmpText = $(kurzus_lista[0]).text();
	}
	console.log("vizsgaHallg: " + kurzus_lista.length);
	if (kurzus_lista.length == 0 || vizsgaHallgText == tmpText) {
		console.log("javit vizsgaHallg");
		setTimeout(vizsgaHallg, 100);
	} else {
		vizsgaHallgText = tmpText;
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
				kurzcim.find('.utolso_telj').html("Utolsó teljesítés: Ko: 2 ");
				kurztelj_tolig.removeClass("piros").addClass("zold");
				kurztelj_tolig.find('.help').attr("title", "Sikeresen teljesített vizsga");
			}
		});
	}
}

function kurzLista() {
	var kurzus_lista = $('.kurz_ul .vegleges_kurz');
	var tmpText = "";
	if (kurzus_lista.length > 0) {
		tmpText = $(kurzus_lista[0]).text();
	}
	console.log("kurzLista: " + kurzus_lista.length);
	if (kurzus_lista.length == 0 || kurzListaText == tmpText) {
		console.log("javit kurzLista");
		setTimeout(kurzLista, 100);
	} else {
		kurzListaText = tmpText;
		$.each(kurzus_lista, function(ind, el) {
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
	}
}