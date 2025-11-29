// 과제 #3 - 인터랙티브 캐리커처
// 캔버스 크기: 600x400 픽셀
// 키보드와 마우스 인터랙션 포함

// 전역 변수
let eyeSize = 25;
let mouthHeight = 15;
let bodyY = 200;
let headRotation = 0;
let eyeBlinkTimer = 0;
let isBlinking = false;
let glassColor;
let bgHue = 220;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  glassColor = color(30, 50, 30);
}

function draw() {
  // 배경 (마우스 X 위치에 따라 색상 변화)
  bgHue = map(mouseX, 0, width, 200, 280);
  background(bgHue, 30, 95);
  
  // 중심 좌표
  let centerX = 300;
  let centerY = bodyY;
  
  // 마우스에 따라 몸 위아래 움직임
  bodyY = map(mouseY, 0, height, 180, 220);
  
  // 자동 눈 깜빡임
  eyeBlinkTimer++;
  if (eyeBlinkTimer > 120) {
    isBlinking = true;
  }
  if (eyeBlinkTimer > 130) {
    isBlinking = false;
    eyeBlinkTimer = 0;
  }
  
  // 목
  colorMode(RGB, 255);
  fill(255, 220, 177);
  noStroke();
  ellipse(centerX, centerY + 80, 60, 80);
  
  // 셔츠 칼라
  fill(200, 220, 240);
  stroke(150, 170, 200);
  strokeWeight(2);
  rect(centerX - 80, centerY + 100, 160, 120, 10);
  
  // 칼라 부분
  fill(200, 220, 240);
  triangle(centerX - 30, centerY + 100, centerX + 30, centerY + 100, centerX, centerY + 80);
  line(centerX - 30, centerY + 100, centerX, centerY + 130);
  line(centerX + 30, centerY + 100, centerX, centerY + 130);
  
  // 스웨터 (회색)
  fill(160, 160, 160);
  stroke(120, 120, 120);
  strokeWeight(3);
  ellipse(centerX, centerY + 120, 180, 140);
  
  // 스웨터 V넥
  fill(200, 220, 240);
  triangle(centerX - 25, centerY + 80, centerX + 25, centerY + 80, centerX, centerY + 110);
  
  // 얼굴과 머리 회전 적용
  push();
  translate(centerX, centerY - 10);
  rotate(headRotation);
  
  // 얼굴
  fill(255, 220, 177);
  noStroke();
  ellipse(0, 0, 160, 180);
  
  // 머리카락
  fill(40, 40, 40);
  ellipse(0, -30, 180, 140);
  ellipse(0, -70, 140, 80);
  
  // 얼굴 다시 그리기
  fill(255, 220, 177);
  ellipse(0, 0, 160, 180);
  
  // 앞머리 디테일
  fill(40, 40, 40);
  ellipse(-50, -60, 35, 55);
  ellipse(-30, -65, 35, 60);
  ellipse(-10, -70, 40, 65);
  ellipse(10, -70, 40, 65);
  ellipse(30, -65, 35, 60);
  ellipse(50, -60, 35, 55);
  ellipse(-65, -50, 25, 40);
  ellipse(65, -50, 25, 40);
  ellipse(-20, -55, 30, 45);
  ellipse(0, -60, 35, 50);
  ellipse(20, -55, 30, 45);
  
  // 안경 테
  fill(0, 0, 0, 0);
  stroke(glassColor);
  strokeWeight(4);
  ellipse(-35, -10, 60, 60);
  ellipse(35, -10, 60, 60);
  strokeWeight(3);
  line(-65, -10, -95, -15);
  line(65, -10, 95, -15);
  line(-5, -10, 5, -10);
  
  // 눈 (깜빡임 효과)
  fill(255, 255, 255);
  noStroke();
  if (isBlinking) {
    // 눈 감은 상태
    stroke(40, 40, 40);
    strokeWeight(3);
    line(-50, -10, -20, -10);
    line(20, -10, 50, -10);
    noStroke();
  } else {
    // 눈 뜬 상태
    ellipse(-35, -10, 45, eyeSize);
    ellipse(35, -10, 45, eyeSize);
    
    // 눈동자 (마우스 방향 따라가기)
    let angle = atan2(mouseY - (centerY - 10), mouseX - centerX);
    let eyeOffsetX = cos(angle) * 5;
    let eyeOffsetY = sin(angle) * 3;
    
    fill(80, 50, 30);
    ellipse(-35 + eyeOffsetX, -10 + eyeOffsetY, 25, 25);
    ellipse(35 + eyeOffsetX, -10 + eyeOffsetY, 25, 25);
    
    // 하이라이트
    fill(255, 255, 255);
    ellipse(-30 + eyeOffsetX, -15 + eyeOffsetY, 8, 8);
    ellipse(40 + eyeOffsetX, -15 + eyeOffsetY, 8, 8);
  }
  
  // 눈썹
  fill(40, 40, 40);
  noStroke();
  ellipse(-35, -35, 35, 10);
  ellipse(35, -35, 35, 10);
  
  // 코
  fill(245, 200, 157);
  ellipse(0, 15, 20, 25);
  fill(255, 220, 177);
  ellipse(0, 10, 15, 20);
  
  // 입 (크기 변화)
  fill(200, 120, 120);
  ellipse(0, 45, 35, mouthHeight);
  fill(220, 140, 140);
  ellipse(0, 42, 25, mouthHeight * 0.5);
  
  // 볼
  fill(255, 200, 180, 100);
  noStroke();
  ellipse(-50, 20, 30, 25);
  ellipse(50, 20, 30, 25);
  
  pop();
}
  
// 키보드 인터랙션
function keyPressed() {
  // SPACE: 놀란 표정
  if (key === ' ') {
    eyeSize = 35;
    mouthHeight = 25;
  }
  
  // W: 윙크
  if (key === 'w' || key === 'W') {
    isBlinking = true;
    eyeSize = 5;
  }
  
  // S: 웃는 표정
  if (key === 's' || key === 'S') {
    mouthHeight = 20;
    eyeSize = 20;
  }
  
  // A: 화난 표정 (고개 기울이기)
  if (key === 'a' || key === 'A') {
    headRotation = -0.1;
    eyeSize = 20;
    mouthHeight = 10;
  }
  
  // D: 반대로 고개 기울이기
  if (key === 'd' || key === 'D') {
    headRotation = 0.1;
  }
  
  // C: 안경 색상 변경
  if (key === 'c' || key === 'C') {
    glassColor = color(random(255), random(255), random(255));
  }
}

function keyReleased() {
  // 원래 표정으로 복귀
  eyeSize = 25;
  mouthHeight = 15;
  headRotation = 0;
  isBlinking = false;
}

// 마우스 클릭 인터랙션
function mousePressed() {
  // 클릭하면 깜빡임
  isBlinking = true;
  eyeSize = 5;
}

function mouseReleased() {
  isBlinking = false;
  eyeSize = 25;
}

// GIF 저장 (G 키 누르면 10초 녹화 시작)
function keyTyped() {
  if (key === 'g' || key === 'G') {
    saveGif('my_caricature', 10);
  }
}