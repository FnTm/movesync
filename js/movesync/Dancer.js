function Dancer(paramType) {
	var position = {X: 0, Y: 0},
	var type = paramType; //Male, female, tank

	var setTo(point) {

	}
	this.setTo = setTo;

	var moveTo(point, duration, biasPoint) {
		//Moves a dancer from current location to 'point' biased to point 'biasPoint'.
	}
	this.moveTo = moveTo;
}