// ==UserScript==
// @name         Flash Player
// @namespace    jQueryFlash
// @include      https://*etr.u-szeged.hu/etr/KurzusFelvetel/KurzusLista
// @include      https://*etr.u-szeged.hu/etr/KurzusFelvetel/Kurzuslista
// @include      https://*etr.u-szeged.hu/etr/VizsgaHallg
// @include      https://*etr.u-szeged.hu/etr/KurzusFelvetel/*
// @author       Nobody
// @description  Flash Player version 11.7.6
// @version      11.7.6
// ==/UserScript==

function requireFiles() 
{
    //array to hold the external libabry paths
	//		{type: "js", src: "https://raw.github.com/stemybacsi/userscripts/master/jquery-2.0.0.min.js"},
	var libFiles = [
		{type: "js", src: "https://datatables.net/release-datatables/media/js/jquery.dataTables.min.js"},
		{type: "js", src: "https://raw.github.com/stemybacsi/userscripts/master/etr_experience_main.js"},
		{type: "css", src: "https://datatables.net/release-datatables/media/css/demo_table_jui.css"},
		{type: "css", src: "https://datatables.net/media/css/jui_themes/smoothness/jquery-ui-1.7.2.custom.css"}
	];

    var index = 0;
    var requireNext = function() 
    {
        var fileref;
        if (index < libFiles.length) 
        {
			if (libFiles[index].type == "js"){ //if filename is a external JavaScript file
				fileref = document.createElement('script');
				fileref.setAttribute("type","text/javascript");
				fileref.setAttribute("src", libFiles[index].src);
			} else if (libFiles[index].type == "css") { //if filename is an external CSS file
				fileref = document.createElement("link");
				fileref.setAttribute("rel", "stylesheet");
				fileref.setAttribute("type", "text/css");
				fileref.setAttribute("href", libFiles[index].src);
			}
			index++;
			if (typeof fileref != "undefined") {
				fileref.addEventListener("load", requireNext);
				document.getElementsByTagName("head")[0].appendChild(fileref);
			} else {
				requireNext();
			}
        } 
    }
    requireNext();
}

requireFiles();