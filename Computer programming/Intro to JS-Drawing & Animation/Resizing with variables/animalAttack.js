var bodyX = 200;
var bodyY = 220;
var bodyW = 120;
var faceW = bodyW / 2;

draw = function() {
  background(207, 254, 255);
  fill(240, 209, 36);
  ellipse(bodyX, bodyY, bodyW, 106); // body?
  ellipse(bodyX, bodyY - 70, faceW, 47); // face?
  fill(255, 0, 0);
  ellipse(bodyX + 15, bodyY - 76, faceW - 49, 9); // eye?
  ellipse(bodyX - 14, bodyY - 76, faceW - 49, 9); // eye?
  fill(87, 86, 76);
  arc(bodyX + 1, bodyY - 66, faceW - 33, faceW - 37, 0, 180);
  ellipse(bodyX - 32, bodyY - 94, faceW - 34, faceW - 38);
  ellipse(bodyX + 32, bodyY - 94, faceW - 34, faceW - 38);
  bodyW++;
  faceW++;

  if (bodyW > 150) {
    bodyW = 120;
    faceW = bodyW / 2 / 2;
  }
};
