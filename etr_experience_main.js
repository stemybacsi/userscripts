$(document).ready(function() {
	$.each($('.kurz_ul .vegleges_kurz'), function(ind, el) {
		var kurznev = $(el).find('td').eq(2);
		var kurznev_temp = kurznev.clone();
		kurznev_temp.find('br').remove();
		kurznev_temp.find('span').remove();
		var kurztelj = $(el).find('.utolso_telj');
		console.log(kurznev_temp.text());
	});
});