function Mover(graphicContainerId, canvasId) {
	var YUIObj;
	var dancerIds = [];
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
	
		createDancers();
	}
	
	var createDancers = function() {
		for (var i = 0; i < 8; i++)
		{
			dancerIds.push( {
				id : "#dancer-" + i,
				X : 0,
				Y : 0,
				obj : null,
				anim : null
			});
			var tmpObj = $("<div class='demo' id='dancer-" + i + "' style='left:-500px; top:-500px;'>&nbsp;</div>");

			var aa = $(canvasId);
			aa.append(tmpObj);
		}
	}

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

	var animationFinished = function() {
		setTimeout(function(){
			YUIObj.Anim.stop();
		},
		1000);
	}

	var doAnimationOnDancer = function(dancerObj, sylePoint, otherPoints, length) {

		// Reset the animated element to the start position.
		// This is needed for running the animation multiple times
		dancerObj.obj.setStyles({'left':sylePoint[0], 'top':sylePoint[1]});;


		dancerObj.anim.set('to', {
			curve: otherPoints,
			rotate : '360'
		});
		dancerObj.anim.set('from', {
			rotate : '0'
		});

		dancerObj.anim.on("end",function(){
			setTimeout(function(){
				startAnimation();
			},
			500);
		});

		dancerObj.anim.run();
	}

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
			var Y = YUIObj;
			//debugger;

				var mygraphic = new YUIObj.Graphic({render:"#mygraphiccontainer"}),

					origin = YUIObj.one('.example'), // The XY values for the animation are based on the upper-left corner of this element
					demoB = YUIObj.one('#demo2'), // The animated element
					dotList = YUIObj.all('.dot');
				graphicsContainer = node= YUIObj.one("#mygraphiccontainer");

				assignObjectsToDancers();

				width=parseInt(node .getComputedStyle("width"),10);
				height=parseInt(node .getComputedStyle("height"),10);
				topLeft=YAHOO.util.Dom.getXY('mygraphiccontainer');
				topRight=YAHOO.util.Dom.getXY('mygraphiccontainer'); topRight[0]=topLeft[0]+width;
				bottomLeft=YAHOO.util.Dom.getXY('mygraphiccontainer'); bottomLeft[1]=topLeft[1]+height;
				bottomRight=YAHOO.util.Dom.getXY('mygraphiccontainer'); bottomRight[0]=topLeft[0]+width;bottomRight[1]=topLeft[1]+height;



				// button handler
				YUIObj.one('#btn-animate').on('click', function(){
					YUIObj.Anim.stop();
					//setTimeout(startAnimation(), 500);
				});
	}
	this.mainFunction = mainFunction;

	init();
};


$(document).ready(function(){
	var mover = new Mover("mygraphiccontainer", ".example");

	YUI().use('anim', 'dd-drag', 'graphics', 'cssbutton','anim-rotate', function(YUIObj){mover.mainFunction(YUIObj)});
})



