function setup() {
  createCanvas(600, 700);
}

function draw() {
  background('#C9B9C9');
  noFill();
  stroke(0);
  //arc(275, 475, 500, 500, radians(180), radians(50));
  strokeWeight(1);
  stroke('#F6DAF2');
  circle(300, 445, 475);
  stroke('#E5BFE3');
  strokeWeight(2);
  circle(300, 445, 425);
  stroke('#CBA1CC');
  strokeWeight(4);
  circle(300, 445, 380);
  stroke('#A67BAB');
  strokeWeight(6);
  circle(300, 445, 330);
  stroke('#885993');
  strokeWeight(8);
  circle(300, 445, 275);
  stroke('#6A3D7B')
  strokeWeight(10);
  circle(300, 445, 200);

  noStroke();
  fill('#C9B9C9');
  rect(0, 475, width/2, 225);
  fill('#F6DAF2');
  rect(width/2, 80, 300, 15)

  stroke('#F6DAF2');
  strokeWeight(1);
  line(width/2, 0, width/2, 700);
  line(0, 475, width, 475);

  fill('#4F2F60');
  circle(300, 445, 170);
}
