function Mover(graphicContainerId, canvasId, isReadyCallback) {
	var YUIObj;
	var dancerIds = [];
	this.dancerIds = dancerIds;
	var graphicsContainer;

	var width;
	var height;
	var topLeft;
	var topRight;
	var bottomLeft;
	var bottomRight;

	var origin;
	
	var init = function(){
	   YUI.add( 'anim-rotate', function (Y) {
			Y.Anim.behaviors.rotate = {

				// this function changes the style of the node/element
				set: function(anim, att, from, to, elapsed, duration, fn) {

					// get the actual degrees to rotate the element
					var v = fn(elapsed, Number(from),  Number(to) - Number(from), duration);

					// now set the styling
					anim._node.setStyle( 'transform', 'rotate(' + v + 'deg)' );
					anim._node.setStyle( 'webkitTransform', 'rotate(' + v + 'deg)' );
					anim._node.setStyle( 'MozTransform', 'rotate(' + v + 'deg)' ); // FF 3.1+ only :(

					// IE stuff; doesn't work as intended :P
					var deg2radians = Math.PI / 180;
					var rad = v * deg2radians ;
					var costheta = Math.cos(rad);
					var sintheta = Math.sin(rad);

					var m11 = costheta;
					var m12 = -sintheta;
					var m21 = sintheta;
					var m22 = costheta;

					var str = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand' M11="+m11+" M12="+m12+" M21="+m21+" M22="+m22+")";
					anim._node.setStyle( 'filter', str );
				}
			};
		}, '0.0.1', { requires: ['anim'] });

		YUI().use('anim', 'dd-drag', 'graphics', 'cssbutton','anim-rotate', function(YUI){mainFunction(YUI); if (isReadyCallback) {isReadyCallback()}})
	}

	var createDancer = function(id, type, order) {
		dancerIds.push( {
			id : "#dancer-" + order,
			X : -1,
			Y : -1,
			obj : null,
			anim : null,
			type : type,
			angle : 0
		});
		var tmpObj = $("<div class='demo " + type + "' id='dancer-" + order + "' style='left:-500px; top:-500px;'>&nbsp;</div>");

		$(canvasId).append(tmpObj);
	}
	
	var createDancers = function(dancers) {
		for (var i = 0; i < dancers.length; i++)
		{
			createDancer(dancers[i].id, dancers[i].class, i);
		}

		assignObjectsToDancers();
	}
	this.createDancers = createDancers;

	var assignObjectsToDancers = function() {
		for (var i = 0; i < dancerIds.length; i++) {
			dancerIds[i].obj = YUIObj.one(dancerIds[i].id);
			dancerIds[i].anim = new YUIObj.Anim({
				node: dancerIds[i].obj,
				duration: 2.5,
				easing: YUIObj.Easing.easeNone
			});
		}
	}

	var doFrame = function(frame) {
		var path = frame.path;

		for (var i = 0; i < path.length; i++) {
			var pointPath = []
			for (var j = 0; j < path[i].movement.length; j++) {
				var newX = path[i].movement[j].X / 1000 * width + topLeft[0];
				var newY = path[i].movement[j].Y / 1000 * height + topLeft[1];
				pointPath.push([newX, newY]);
			}
			console.log(path[i].angle);
;			doAnimationOnDancer(dancerIds[i], pointPath, frame.duration, path[i].angle);
		}
	}
	this.doFrame = doFrame;

	var doAnimationOnDancer = function(dancerObj, otherPoints, length, angle) {
		if (dancerObj.X < 0) {
			dancerObj.obj.setStyles({'left':otherPoints[0][0] - topLeft[0], 'top':otherPoints[0][1] - topLeft[1]});
			dancerObj.X = otherPoints[0][0];
			dancerObj.Y = otherPoints[0][1];
			dancerObj.angle = angle;
		}

		dancerObj.anim.stop();

		dancerObj.anim.set('to', {
			curve: otherPoints,

			rotate : angle - dancerObj.angle >= 180 ? angle - 360 : angle

		});

		dancerObj.anim.set('from', {

			rotate : dancerObj.angle - angle >= 180 ? dancerObj.angle - 360 : dancerObj.angle

		});

		dancerObj.anim.on("end",function(){
			dancerObj.angle = angle;
		});

        dancerObj.anim.set("duration", (length/1000));

		dancerObj.anim.run();
	}
	this.doAnimationOnDancer = doAnimationOnDancer;

	var startAnimation = function(){
		// Reset the animated element to the start position.
		// This is needed for running the animation multiple times
		offset=30;

		for (var i = 0; i < dancerIds.length; i++) {
			doAnimationOnDancer(
				dancerIds[i],
				[10 + offset * i, height/2],
				[
					[bottomLeft[0] + 10 + offset * i, bottomLeft[1]-(height/2)],
					[topLeft[0] + offset * i, topLeft[1] + offset * i],
					[topLeft[0] + width / 2, topLeft[1] + 10 + offset * i]
					]);
		}
	};

	var mainFunction = function(YUIObjParam) {
		YUIObj = YUIObjParam;
		//debugger;

		var mygraphic = new YUIObj.Graphic({render:"#mygraphiccontainer"}),

			origin = YUIObj.one('.example'), // The XY values for the animation are based on the upper-left corner of this element
			dotList = YUIObj.all('.dot');
		graphicsContainer = node= YUIObj.one("#mygraphiccontainer");

		assignObjectsToDancers();

		width=parseInt(node .getComputedStyle("width"),10);
		height=parseInt(node .getComputedStyle("height"),10);
		topLeft=YAHOO.util.Dom.getXY('mygraphiccontainer');
		topRight=YAHOO.util.Dom.getXY('mygraphiccontainer'); topRight[0]=topLeft[0]+width;
		bottomLeft=YAHOO.util.Dom.getXY('mygraphiccontainer'); bottomLeft[1]=topLeft[1]+height;
		bottomRight=YAHOO.util.Dom.getXY('mygraphiccontainer'); bottomRight[0]=topLeft[0]+width;bottomRight[1]=topLeft[1]+height;
	}
	this.mainFunction = mainFunction;

	init();
};
