function Dance(danceJSON)
{
	var frames;
	var descriptionBar;

	var init = function() {
		descriptionBar = new DescriptionBar();
		descriptionBar.init($("#movesync-description"), danceJSON.description);
		descriptionBar.highlightDescription(0);
	};
	this.init = init;

	var seekFameAt = function(time) {
		//Seeks frame at specified time
	}

	var initFrameAtTime = function(time) {
		//fires animation of a rame at time specified
	}

	init(danceJSON);
}