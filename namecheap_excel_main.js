$(document).ready(function() {
	var $hsTable = $('<div>');
	$('form[name=frmModHOST]').hide();
	
	$('form[name=frmModHOST]').before(hsTable);
	
	var data = [
		{id: 1, name: "Ted", isActive: true, color: "orange", date: "2008-01-01"},
		{id: 2, name: "John", isActive: false, color: "black", date: null},
		{id: 3, name: "Al", isActive: true, color: "red", date: null},
		{id: 4, name: "Ben", isActive: false, color: "blue", date: null}
	];
	
	$hsTable.handsontable({
		data: data,
		startRows: 5,
		colHeaders: true,
		minSpareRows: 1,
		columns: [
			{data: "id", type: 'text'},
			{data: "name", type: 'text'},
			{data: "isActive", type: 'checkbox'},
			{data: "date", type: 'date'},
			{data: "color",
			  type: 'autocomplete',
			  source: ["yellow", "red", "orange", "green", "blue", "gray", "black", "white"]
			}
		],
	});
});