var randomX = random(0, 100);
var randomY = random(0, 100);
var randomSize = random(0, 255);

var draw = function() {
  background(255, 255, 255);
  fill(randomSize, randomSize, randomSize);
  textSize(randomSize);
  text("MEGA GLUTON!", randomX, randomY);
  fill++;
};
