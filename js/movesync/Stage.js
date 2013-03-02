function Stage(dance) {
	/*
	Describes the stage and the dance that is held on it.
	Initiates and controls dancer objects and decsriptions of the dance
	*/


	var position = 0; //Position in time of the dance in miliseconds

	var init = function(danceDescription){
		//Init the object, save reference to danceDescription JSON object

		//Initiate Dancer objects like 
		//var dancer = new Dancer("male");
		//dancer.setTo({X:0, Y:0});

		//Initiate DescriptionBar like
		//var description = new Description(JSONObj);
		//description.highlight(12); //highlight the 12th description piece
	}
	this.init = init;

	var doDance = function() {
		//Starts the dance from current position
	}

	var seekTo = function(time) {
		//Sets current dance position to 'time'
	}
}