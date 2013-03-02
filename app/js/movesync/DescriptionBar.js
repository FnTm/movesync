function DescriptionBar(){
	var mainPlaceholder;

	var init = function(placeholder, descriptionJSON) {
		//Inits the descriptions - generates description content into the HTML
		mainPlaceholder = placeholder

		for (var i = 0; i < descriptionJSON.length; i++) {
			var movementId = "movement-" + i;
			var elem = $("<div id='" + movementId + "'><h3>" + descriptionJSON[i].name + "</h3><ul></ul></div>");

			for (var j = 0; j < descriptionJSON[i].instructions.length; j++) {
				elem.find("ul").append($("<li><b>" + descriptionJSON[i].instructions[j].from + " - " + descriptionJSON[i].instructions[j].to + "</b> " + descriptionJSON[i].instructions[j].text + "</li>"));
			}
		placeholder.append(elem);
		}

	}
	this.init = init;

	var highlightDescription = function(id) {
		//Highlights the description that has the 'id' passed;
		mainPlaceholder.find("div#movement-" + id).addClass("highlight");
	}
	this.highlightDescription = highlightDescription;
}