$(document).ready(function() {
	$.each($('.kurz_ul .vegleges_kurz'), function(ind, el) {
		var kurznev = $(el).find('td').eq(2);
		var kurztelj = $(el).find('.utolso_telj');
		console.log(kurznev.text());
	});
});