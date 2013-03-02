movesync = window.movesync || {};

movesync.model = function() {
	/*object obviously describing the dance*/
	var dance;
	/*array of KeyTime Point.(time intervals when movements start)*/
	var movementsArray = [];

	/*
	 * Loading dance from JSON.
	 */
	loadDance = function(url) {
//		for future - AJAX call will be done.
//		$.getJSON(url, function(data) {
//			return data;
//		});
		dance = danceVar;
		appendMovementsToDescrArea();
		performFramesArray();
        console.log("sd");
        setUpButtons();
	};
	
	/*
	 * Fills description area with step-description data
	 */
	appendMovementsToDescrArea = function() {
		var mainPlaceholder = $("#movesync-description");
		var index = 0;

		for (var i = 0; i < dance.description.length; i++) {
			var descrElem = "<div id='description" + i +"'>" + "<h1>" + dance.description[i].name + "</h1>";
			for (var j = 0; j < dance.description[i].instructions.length; j++) {
				var instructionVO = {};
				instructionVO.text = dance.description[i].instructions[j].text;
				instructionVO.from = dance.description[i].instructions[j].from;
				instructionVO.to = dance.description[i].instructions[j].to;
				descrElem = descrElem + "<div id='instruction" + index +"'>" + instructionVO.from + " - " + instructionVO.to + ". " + instructionVO.text + "</div>";
				index +=1;
			}
			descrElem = descrElem + "</div>";
			mainPlaceholder.append(descrElem);
			
		}
        createDancers();
	};
	createDancers=function(){
        initField(dance);
    }
    setUpButtons = function () {
        var findMe = $('#findMe');
        var clearMe = $('#clearMe');

        findMe.click(function () {
            var findValue = $("#findMeCode").val();
            if (findValue != "") {
                var node = $("#" + findValue);
                console.log(node);
                if (node.length > 0) {
                    console.log("found");
                    node.addClass("findMe");
                }
            }
        });
        clearMe.click(function(){
            console.log($(".dancer"));
            $(".dancer").removeClass("findMe");
            $("#findMeCode").val("");
            console.log("clear");
        });

    }

	/*
	 * Used for filling movements array needed in player
	 */
	performFramesArray = function() {
		for (var i = 0; i < dance.frames.length; i++) {
			movementsArray.push(dance.frames[i].time);
		}
	};
	
	/*
	 * Getter method
	 */
	getMovementsStartPoints = function() {
		return movementsArray;
	};
	
	highlighStep = function(param) {
		var stepId = dance.frames[param].descriptionId;
		$("div.active").removeClass("active");
		$("#description" + stepId).addClass("active");
	};


    /*
     * Stub. Will be replaced on drawing call.
     */
	drawAnimationStub = function(mvmnt) {
		console.log("Came soon. For now, imagine, that figures are moving.");
		console.log(mvmnt);
        moveFrame(mvmnt);
	}
	
	/*
	 * Really important function. Called from player on time
	 */
	fireEvent = function(param) {
		highlighStep(param);
//		movesync.animation.draw(param);
		drawAnimationStub(dance.frames[param]);
	}
	
	return {
		"loadDance" 					:  		loadDance,
		"getMovementsStartPoints" 		: 		getMovementsStartPoints,
		"fireEvent" 					: 		fireEvent
	}
}();

$(document).ready(function(){
	
	movesync.model.loadDance("app/dance.json");
	
	movesync.player.initPlayer(movesync.model.getMovementsStartPoints(), movesync.model.fireEvent );
});	