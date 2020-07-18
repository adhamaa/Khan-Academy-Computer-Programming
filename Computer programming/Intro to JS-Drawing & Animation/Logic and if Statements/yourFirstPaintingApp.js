draw = function () {
  if (mouseIsPressed) {
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 20, 20);
  }
};
