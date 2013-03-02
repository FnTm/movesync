movesync = window.movesync || {};

movesync.model = function() {
	
	parseDance = function(danceData) {
//		jQuery.
	};

	loadDance = function(url) {
		$.getJSON(url, function(data) {
			console.log(data);
		});
	};
	
	return {
		"parseDance" 		: 		parseDance,
		"loadDance" 		:  		loadDance
	}
}();

$(document).ready(function(){
	
	movesync.model.loadDance("dance.json");

});	