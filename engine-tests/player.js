movesync = window.movesync || {};

movesync.player = function() {
	/*<audio> object*/
	var audioObject;
	
	/*check interval*/
	var interval = 100;
	
	/*current player position in seconds*/
	var currentPosition = 0;

	/*last player position in seconds*/
	var lastPosition = 0;
	
	/*time intervals array i.e. [ 0, 5, 8, 10 ]*/
	var movementsArray = [];
	
	/*last movement index*/
	var lastMovementIndex;
	
	/*callback function which will be triggered if movement reached*/
	var callbackFunction;
	
	/*
	 * Returns current player position in seconds
	 */
	getCurrentPosition = function() {
		return audioObject.currentTime;
	};
	
	
	
	/*
	 * Checks if position changed
	 * and tries to find movement for position
	 */
	onTimeCheck = function() {
		currentPosition = getCurrentPosition();
		if (currentPosition != lastPosition) {
			lastPosition = currentPosition;
			findMovement(Math.floor(currentPosition));
		}
	};

	/*
	 * Tries to find movement for time position and 
	 * fire callback with movement index 
	 */
	findMovement = function(currentPosition) {
		var movementIndex = $.inArray(currentPosition, movementsArray);
		if (movementIndex != -1 && movementIndex != lastMovementIndex) {
			lastMovementIndex = movementIndex;
			callbackFunction(movementIndex);
		}
	};
	
	/*
	 * Initializes player
	 */
	initPlayer = function(movements, movementCallback) {
		audioObject = $("audio")[0];

		var audioType = '.mp3';
		if(!!audioObject.canPlayType('audio/ogg') === true){
	        audioType = '.ogg' //For firefox and others who do not support .mp3
	    }
    	audioObject.setAttribute('src', '../sudmalinas' + audioType);
		
		movementsArray = movements;
		callbackFunction = movementCallback;
		
		setInterval(onTimeCheck, interval);
	};
	
	play = function() {
		audioObject.play();
	}
	
	return {
		"initPlayer"			: initPlayer,
		"play"					: play
	}
}();