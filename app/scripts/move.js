/**
 * Created with JetBrains PhpStorm.
 * User: Janis
 * Date: 02/03/13
 * Time: 03:37
 * To change this template use File | Settings | File Templates.
 */
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
dance=null;
initField=function(vdance){
    var mainPlaceholder = $(".example");
dance=vdance;
    for(var i=0;i<dance.dancers.length;i++){
        var descrElem = "<div id='dancer" + i +"' class='"+dance.dancers[i].class+" dancer'>" + i + "</div>";
        mainPlaceholder.append(descrElem);
    }

};
animations=[];
width=null;
height=null;
topLeft=null;
topRight=null;
bottomLeft=null;
bottomRight=null;
globalY=null;
dancers=[];
moveFrame=function(movement){
    Y=globalY;

    console.log("movement");

    var startAnim2 = function(movement){

        offset=30;
            for(var i=0;i<dance.dancers.length;i++){
                animations[i] = new Y.Anim({
                    node: dancers[i],
                    duration: movement.duration/1000,
                    easing: Y.Easing.easeNone
                });
              //  movement.path[i].movement.x;
                dancers[i].setStyles({'left':10+(i*offset), 'top':height/2});

                animations[i].set('to', {
                    curve: [[bottomLeft[0]+10+(i*offset), bottomLeft[1]-(height/2) ], [topLeft[0]+(i*offset), topLeft[1]+(i*offset) ],[topLeft[0]+(width/2), topLeft[1]+10+(i*offset)],[topLeft[0]+(width/2), topLeft[1]+10+(i*offset)]],
                    rotate : '360'
                });
                animations[i].set('from', {
                    rotate : '0'
                });


            }




        for(var i=0;i<dance.dancers.length;i++){
            animations[i].run();
        }

    };
    startAnim2(movement);
};


YUI().use('anim', 'dd-drag', 'graphics', 'cssbutton','anim-rotate', function(Y){
//debugger;
globalY=Y;
        for(var i=0;i<dance.dancers.length;i++){
            dancers[i] = Y.one("#dancer"+i);

        }
console.log(animations);

 var   mygraphic = new Y.Graphic({render:"#mygraphiccontainer"}),

        origin = Y.one('.example'), // The XY values for the animation are based on the upper-left corner of this element
        demoA = Y.one('#demo'), // The animated element
        demoB = Y.one('#demo2'), // The animated element
        dotList = Y.all('.dot')
//        ,
//        arrDot = [
//            [parseInt(dotList.item(0).getStyle('left'), 10), parseInt(dotList.item(0).getStyle('top'), 10)],
//            [parseInt(dotList.item(1).getStyle('left'), 10), parseInt(dotList.item(1).getStyle('top'), 10)],
//            [parseInt(dotList.item(2).getStyle('left'), 10), parseInt(dotList.item(2).getStyle('top'), 10)]
//        ]
        ;
    node= Y.one("#mygraphiccontainer");

    width=parseInt(node .getComputedStyle("width"),10);
    height=parseInt(node .getComputedStyle("height"),10);
    topLeft=YAHOO.util.Dom.getXY('mygraphiccontainer');
    topRight=YAHOO.util.Dom.getXY('mygraphiccontainer'); topRight[0]=topLeft[0]+width;
    bottomLeft=YAHOO.util.Dom.getXY('mygraphiccontainer'); bottomLeft[1]=topLeft[1]+height;
    bottomRight=YAHOO.util.Dom.getXY('mygraphiccontainer'); bottomRight[0]=topLeft[0]+width;bottomRight[1]=topLeft[1]+height;


    console.log(topLeft);

    console.log(topRight);
    console.log(bottomLeft);

    console.log(bottomRight);
    /**
     * Stops the animation
     * Updates the array of point XY values
     * Updates the curve preview
     * Updates displayed XY point values in code snippet
     */
    var dotDragHandler = function(dot){
        Y.Anim.stop();
        arrDot[dotList.indexOf(dot)] = [parseInt(dot.getStyle('left'), 10), parseInt(dot.getStyle('top'), 10)];
        drawCurve();
        updateCodeSnippetValues();
    }

    /*dd0.on('drag:drag', function(e){
        dotDragHandler(this.get('dragNode'));
    });
    dd1.on('drag:drag', function(e){
        dotDragHandler(this.get('dragNode'));
    });
    dd3.on('drag:drag', function(e){
        dotDragHandler(this.get('dragNode'));
    });*/

    // button handler
    Y.one('#btn-animate').on('click', function(){
        Y.Anim.stop();
        setTimeout(startAnim2(true,true), 500);
    });

    Y.all('.dot').on('mouseup', function(e){
        setTimeout(startAnim2, 500);
    });

    // Create the animation instance
    var anim = new Y.Anim({
        node: demoB,
        duration: 2.5,
        easing: Y.Easing.easeNone
    });
    var anim2 = new Y.Anim({
        node: demoA,
        duration: 2.5
        ,easing: Y.Easing.easeNone
    });
    firstrun=false;
    fr2=false;
    fr1=false;
    /**
     * Sets the anim curve values with the XY values from the arrDot array
     * Adds the origin offset values because anim works off page coordinates
     */
    var startAnim = function(e){
        //debugger;
        var oX = origin.getX(),
            oY = origin.getY();

        // Reset the animated element to the start position.
        // This is needed for running the animation multiple times
        demoA.setStyles({'left':arrDot[0][0], 'top':arrDot[0][1]});

        anim.set('to', {
            curve: [ [(arrDot[1][0] + oX), (arrDot[1][1] + oY)], [ (arrDot[2][0] + oX), (arrDot[2][1] + oY) ], [ (30 + oX), (500 + oY) ]  ]
        });
        if(!firstrun){
        anim.on("end",function(){
            startAnim2();
            firstrun=true;
        });
    }
        anim.run();

    };
    finished1=false;
    finished2=false;
    if(!fr2){
        anim2.on("end",function(){
            fr2=true;
            finished2=true;
            startAnim2(finished1,finished2);
        });
    }

    if(!fr1){
        anim.on("end",function(){
            fr1=true;
            finished1=true;
            startAnim2(finished1,finished2);
        });
    }
    var startAnim2 = function(st1,st2){
    if(st1 && st2){
        finished1=finished2=false;
        var oX = origin.getX(),
            oY = origin.getY();

        // Reset the animated element to the start position.
        // This is needed for running the animation multiple times
        demoA.setStyles({'left':10, 'top':height/2});
        offset=30;
        demoB.setStyles({'left':10+offset, 'top':(height/2)});


        console.log(topLeft);

        console.log(topRight);
        console.log(bottomLeft);

        console.log(bottomRight);
        anim2.set('to', {
            curve: [[bottomLeft[0]+10, bottomLeft[1]-(height/2) ], [topLeft[0], topLeft[1] ],[topLeft[0]+(width/2), topLeft[1]+10]],
            rotate : '360'
        });
        anim2.set('from', {
            rotate : '0'
        });
        anim.set('to', {
            curve: [[bottomLeft[0]+10+offset, bottomLeft[1]-(height/2) ], [topLeft[0]+offset, topLeft[1]+offset ],[topLeft[0]+(width/2), topLeft[1]+10+offset]]
       ,rotate : '360'
        });
        anim.set('from', {
            rotate : '0'
        });


        anim2.run();
        anim.run();
        }
    };


    // Adds a YUI Graphics path shape to the Graphics instance mygraphic
    var animPath = mygraphic.addShape({
        type: "path",
        stroke: {
            weight: 4,
            color: "#aabbcc"
        }
    });

    // Draw a preview curve with the Graphics animPath shape to match the Anim curve
//    var drawCurve = function(){
//        animPath.clear();
//        animPath.moveTo(arrDot[0][0],arrDot[0][1]);
//        animPath.curveTo(arrDot[1][0],arrDot[1][1],   arrDot[2][0],arrDot[2][1]);
//        animPath.end();
//    }
//
//    drawCurve(); // Initial drawing of the preview curve
    //updateCodeSnippetValues(); // Initial setting of code snippet XY values

});