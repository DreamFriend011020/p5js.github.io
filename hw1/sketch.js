function setup() {
  createCanvas(600, 400);
  background(220, 240, 255);

  // 추상화 작품 그리기
  drawArtwork();
}

function draw() {
  // 정적 이미지이므로 비워둠
}

function drawArtwork() {
  // 큰 사각형들
  fill(255, 100, 150);
  stroke(200, 50, 100);
  strokeWeight(4);
  rect(50, 50, 150, 100);

  fill(100, 200, 255);
  stroke(50, 150, 200);
  strokeWeight(3);
  rect(250, 80, 120, 80);

  fill(255, 200, 100);
  stroke(200, 150, 50);
  strokeWeight(5);
  rect(400, 120, 100, 120);

  // 원들
  fill(150, 255, 150);
  stroke(100, 200, 100);
  strokeWeight(3);
  ellipse(150, 250, 80, 80);

  fill(255, 150, 255);
  stroke(200, 100, 200);
  strokeWeight(4);
  ellipse(350, 200, 100, 100);

  fill(150, 150, 255);
  stroke(100, 100, 200);
  strokeWeight(2);
  ellipse(480, 300, 60, 60);

  // 삼각형들
  fill(255, 255, 100);
  stroke(200, 200, 50);
  strokeWeight(3);
  triangle(100, 320, 150, 280, 200, 320);

  fill(255, 100, 100);
  stroke(200, 50, 50);
  strokeWeight(4);
  triangle(300, 350, 350, 300, 400, 350);

  fill(100, 255, 200);
  stroke(50, 200, 150);
  strokeWeight(2);
  triangle(450, 50, 500, 20, 550, 50);

  // 작은 도형들
  fill(200, 100, 255);
  stroke(150, 50, 200);
  strokeWeight(2);
  rect(180, 150, 40, 30);

  fill(100, 255, 100);
  noStroke();
  ellipse(320, 120, 30, 30);

  fill(255, 150, 100);
  stroke(200, 100, 50);
  strokeWeight(3);
  ellipse(80, 180, 25, 25);

  fill(150, 200, 255);
  stroke(100, 150, 200);
  strokeWeight(2);
  rect(420, 250, 35, 25);

  // 추가 색상 요소들
  fill(255, 200, 200);
  noStroke();
  ellipse(200, 100, 20, 20);

  fill(200, 255, 150);
  stroke(150, 200, 100);
  strokeWeight(1);
  rect(380, 80, 25, 35);

  fill(200, 150, 255);
  stroke(150, 100, 200);
  strokeWeight(2);
  triangle(120, 100, 140, 80, 160, 100);
}