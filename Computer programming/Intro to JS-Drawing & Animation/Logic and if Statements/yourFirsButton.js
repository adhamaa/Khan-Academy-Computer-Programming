draw = function () {
  fill(0, 255, 68); // start color

  if (mouseIsPressed && mouseY < 200) {
    fill(235, 179, 235);
  }
  rect(0, 0, 400, 200); // the button

  // The button text
  fill(0, 0, 0);
  textSize(30);
  text("Press me!", 145, 115);
};
