draw = function () {
  background(165, 219, 162);
  fill(255, 254, 222);
  rect(20, 100, 364, 200);
  fill(0, 0, 0);

  if (mouseIsPressed) {
    text("it's javascript LOL!", 120, 50);
  } else {
    textSize(20);
    text("What programming language is this?", 39, 200);
  }
};
