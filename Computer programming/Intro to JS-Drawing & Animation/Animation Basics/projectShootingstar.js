var xPos = 200;
var yPos = 200;

draw = function() {
  background(29, 40, 115);
  fill(94, 94, 94);
  rect(47, 34, 122, 446);
  rect(169, 202, 122, 366);
  rect(254, 149, 122, 366);

  fill(255, 242, 0);
  ellipse(xPos, yPos, 10, 10);
  rect(xPos + 169, 34, 10, 10);
  ellipse(xPos + 36, yPos - 87, 10, 10);
  ellipse(xPos + -17, yPos - 65, 10, 10);
  ellipse(xPos + -4, yPos - 107, 10, 10);
  ellipse(xPos + 59, yPos - 49, 10, 10);
  ellipse(xPos + 37, yPos - 49, 10, 10);
  ellipse(xPos + 138, yPos - 75, 10, 10);
  ellipse(xPos + 111, yPos - 87, 10, 10);
  ellipse(xPos + 157, yPos - 3, 10, 10);
  ellipse(xPos + 83, yPos - 142, 10, 10);

  xPos -= 10;
  yPos += 10;
};
