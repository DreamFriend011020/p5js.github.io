// ===== 전역 변수 =====
let baseColors = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57",
  "#FF9FF3", "#54A0FF", "#5F27CD", "#00D2D3", "#FF9F43",
  "#EE5A24", "#0DD3F7", "#A55EEA", "#26DE81", "#FD79A8"
];

// 움직이는 도형들을 위한 배열
let movingCircles = [];
let movingRects = [];
let pulsatingTriangles = [];

// GIF 저장용 플래그 (원하면 사용)
let recording = false;

function setup() {
  createCanvas(600, 400);
  // 색상 모드: HSB로 바꿨다가, 도형 그릴 때는 다시 RGB로도 사용
  colorMode(RGB);
  
  // 과제 #1에서 그렸던 정적 작품 먼저 그림
  drawStaticArtwork();
  
  // 애니메이션용 도형 초기화
  initAnimatedShapes();
}

function draw() {
  // 매 프레임마다 배경 + 정적 작품 다시 그리고 그 위에 애니메이션
  background(250, 248, 245);
  drawStaticArtwork();
  
  // 애니메이션 도형들 업데이트 및 렌더
  animateCircles();
  animateRects();
  animateTriangles();
  
  // (선택) 10초짜리 GIF 저장용 — 필요할 때 키보드 이벤트에서 켜기
  // if (recording && frameCount === 1) {
  //   saveGif('abstract_animation.gif', 10); // 10초 동안 캡처[web:5][web:11]
  // }
}

// ===== 과제 #1 정적 도형들 =====
function drawStaticArtwork() {
  // 여기 부분은 이전 과제 #1 코드에서 사용하던 정적 도형들을 그대로 유지한다고 생각하면 됨
  // 예시: 큰 사각형/원/삼각형들

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
}

// ===== 애니메이션용 도형 초기화 =====
function initAnimatedShapes() {
  // 움직이는 원들 (원 궤도 + 색상 그라데이션)
  for (let i = 0; i < 8; i++) {
    movingCircles.push({
      cx: random(100, 500),    // 중심 x
      cy: random(80, 320),     // 중심 y
      radius: random(30, 80),  // 기본 반지름
      angleOffset: random(TWO_PI),
      speed: random(0.01, 0.03),
      c1: color(random(baseColors)),
      c2: color(random(baseColors))
    });
  }
  
  // 좌우로 진동하는 사각형
  for (let i = 0; i < 6; i++) {
    movingRects.push({
      xCenter: random(100, 500),
      y: random(60, 340),
      w: random(40, 80),
      h: random(20, 60),
      amp: random(20, 80),     // 진동 폭
      speed: random(0.01, 0.05),
      baseHue: random(360)
    });
  }
  
  // 크기가 숨쉬듯이 변하는 삼각형
  for (let i = 0; i < 5; i++) {
    pulsatingTriangles.push({
      x: random(100, 500),
      y: random(80, 320),
      baseSize: random(40, 90),
      speed: random(0.02, 0.06),
      phase: random(TWO_PI),
      c1: color(random(baseColors)),
      c2: color(random(baseColors))
    });
  }
}

// ===== 1. 도형 움직임 (frameCount, sin, cos 이용) =====
function animateCircles() {
  noStroke();
  colorMode(RGB);
  
  for (let c of movingCircles) {
    // 시간 변수 t (frameCount 사용)[web:13]
    let t = frameCount * c.speed;
    
    // 원이 작은 원 궤도를 그리며 움직이게
    let x = c.cx + cos(t + c.angleOffset) * c.radius * 0.4;
    let y = c.cy + sin(t + c.angleOffset) * c.radius * 0.4;
    
    // ===== 2. 색상 변화 (lerpColor, colorMode, sin) =====
    let amt = (sin(t) + 1) / 2;  // 0~1 사이로 변환
    let col = lerpColor(c.c1, c.c2, amt); // 두 색 사이 보간[web:9][web:12]
    fill(col);
    
    // ===== 3. 크기 변화 (sin으로 반지름 변화) =====
    let r = c.radius * (0.6 + 0.4 * sin(t * 1.5 + c.angleOffset));
    
    ellipse(x, y, r, r);
  }
}

function animateRects() {
  rectMode(CENTER);
  
  for (let r of movingRects) {
    // 시간 t (millis() 이용해서 속도 조절)[web:13]
    let t = millis() * 0.001 * r.speed;
    
    // 좌우로 진동하는 x 좌표
    let x = r.xCenter + sin(TWO_PI * t) * r.amp;
    
    // 색상 모드를 HSB로 바꿔서 무지개 느낌
    colorMode(HSB, 360, 100, 100);
    let hue = (r.baseHue + frameCount * 0.5) % 360;
    let col1 = color(hue, 80, 90);
    let col2 = color((hue + 60) % 360, 90, 60);
    let amt = (sin(frameCount * 0.02) + 1) / 2;
    let col = lerpColor(col1, col2, amt);
    fill(col);
    stroke(0, 0, 20);
    strokeWeight(2);
    
    rect(x, r.y, r.w, r.h);
  }
  
  colorMode(RGB); // 다시 RGB로 복귀
}

function animateTriangles() {
  for (let tri of pulsatingTriangles) {
    let t = frameCount * tri.speed + tri.phase;
    
    // 크기가 숨쉬듯이 변함
    let scale = 0.5 + 0.5 * (sin(t) + 1) / 2; // 0.5 ~ 1 사이
    let s = tri.baseSize * scale;
    
    // 색상은 두 색 사이를 왕복
    let amt = (sin(t * 1.3) + 1) / 2;
    let col = lerpColor(tri.c1, tri.c2, amt);
    
    fill(col);
    stroke(255);
    strokeWeight(2);
    
    push();
    translate(tri.x, tri.y);
    rotate(sin(t) * 0.5); // 살짝 회전까지
    triangle(0, -s / 2, -s / 2, s / 2, s / 2, s / 2);
    pop();
  }
}

// ===== (선택) 키보드로 GIF 저장 시작 =====
function keyPressed() {
  // 'g' 키를 눌렀을 때 10초짜리 GIF 저장 시작 예시
  if (key === 'g') {
    saveGif('abstract_animation.gif', 10); // 10초[web:5][web:11]
  }
}
