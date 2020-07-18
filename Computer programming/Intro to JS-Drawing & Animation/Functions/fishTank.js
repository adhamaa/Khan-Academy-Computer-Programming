var tsize = 0;
var rsize = 5;
var centerX = 161;
var centerY = 277;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);


var drawFish = function(tsize, isize) {
background(89, 216, 255);
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/tsize;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/isize, bodyHeight/isize);
};

function ani() {
    var m = millis();
    if (m % 8 === 0) {
        tsize = 7;
    } else {
        tsize = 4;
    }
        
    return (centerX > width + 90) ? centerX = -50 : centerX ++;
}
    
var draw = function() {
    drawFish(tsize, rsize);
    ani();
};