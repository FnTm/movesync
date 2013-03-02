/**
 * Created with JetBrains PhpStorm.
 * User: Janis
 * Date: 02/03/13
 * Time: 03:37
 * To change this template use File | Settings | File Templates.
 */
YUI().use('anim', 'dd-drag', 'graphics', 'cssbutton', function(Y){

    var mygraphic = new Y.Graphic({render:"#mygraphiccontainer"}),
        origin = Y.one('.example'), // The XY values for the animation are based on the upper-left corner of this element
        demoA = Y.one('#demo'), // The animated element
        dotList = Y.all('.dot');
    // Draggable points
    dot0 = Y.one('#dot-0'), dot1 = Y.one('#dot-1'),  dot3 = Y.one('#dot-3'),

        // Array of XY arrays of draggable points
        arrDot = [
            [parseInt(dotList.item(0).getStyle('left'), 10), parseInt(dotList.item(0).getStyle('top'), 10)],
            [parseInt(dotList.item(1).getStyle('left'), 10), parseInt(dotList.item(1).getStyle('top'), 10)],
            [parseInt(dotList.item(2).getStyle('left'), 10), parseInt(dotList.item(2).getStyle('top'), 10)]
        ],

        // Make points draggable
        dd0 = new Y.DD.Drag({
            node: '#dot-0'
        }),
        dd1 = new Y.DD.Drag({
            node: '#dot-1'
        }),
        dd3 = new Y.DD.Drag({
            node: '#dot-3'
        });

    // Puts current XY values of points into displayed code snippet
    var updateCodeSnippetValues = function(){
        Y.one('.arr0').setHTML(arrDot[0][0] + ',' + arrDot[0][1]); // Start
        Y.one('.arr1').setHTML(arrDot[1][0] + ',' + arrDot[1][1]); // Control point 1
        // Control point 2
        Y.one('.arr3').setHTML(arrDot[2][0] + ',' + arrDot[2][1]); // End
    }

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

    dd0.on('drag:drag', function(e){
        dotDragHandler(this.get('dragNode'));
    });
    dd1.on('drag:drag', function(e){
        dotDragHandler(this.get('dragNode'));
    });
    dd3.on('drag:drag', function(e){
        dotDragHandler(this.get('dragNode'));
    });

    // button handler
    Y.one('#btn-animate').on('click', function(){
        Y.Anim.stop();
        setTimeout(startAnim, 500);
    });

    Y.all('.dot').on('mouseup', function(e){
        setTimeout(startAnim, 500);
    });

    // Create the animation instance
    var anim = new Y.Anim({
        node: demoA,
        duration: 2.5,
        easing: Y.Easing.easeBoth
    });

    /**
     * Sets the anim curve values with the XY values from the arrDot array
     * Adds the origin offset values because anim works off page coordinates
     */
    var startAnim = function(e){
        var oX = origin.getX(),
            oY = origin.getY();

        // Reset the animated element to the start position.
        // This is needed for running the animation multiple times
        demoA.setStyles({'left':arrDot[0][0], 'top':arrDot[0][1]});

        anim.set('to', {
            curve: [ [(arrDot[1][0] + oX), (arrDot[1][1] + oY)], [ (arrDot[2][0] + oX), (arrDot[2][1] + oY) ], [ (30 + oX), (500 + oY) ]  ]
        });
        anim.run();
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
    var drawCurve = function(){
        animPath.clear();
        animPath.moveTo(arrDot[0][0],arrDot[0][1]);
        animPath.curveTo(arrDot[1][0],arrDot[1][1],   arrDot[2][0],arrDot[2][1]);
        animPath.end();
    }

    drawCurve(); // Initial drawing of the preview curve
    updateCodeSnippetValues(); // Initial setting of code snippet XY values

});