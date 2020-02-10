var drawMole = function(x, y) {
  var moleX = x;
  var moleY = y;

  noStroke();
  fill(125, 93, 43);
  ellipse(moleX, moleY, 60, 60); // face
  fill(255, 237, 209);
  ellipse(moleX, moleY + 10, 33, 28);
  fill(0, 0, 0);
  ellipse(moleX - 10, moleY - 15, 10, 10); // eyes
  ellipse(moleX + 10, moleY - 15, 10, 10);
  ellipse(moleX, moleY - 5, 10, 10); // nose
  ellipse(moleX, moleY + 10, 20, 5); // mouth
};

background(52, 168, 83); // green grass
fill(0, 0, 0);
ellipse(200, 200, 100, 30); // holes!
ellipse(70, 119, 100, 30);
ellipse(300, 60, 100, 30);
ellipse(297, 350, 100, 30);
drawMole(202, 185);
drawMole(301, 37);
drawMole(298, 331);
drawMole(73, 90);
