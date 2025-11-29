// 캐리커처 - 자화상 (앞머리 수정 버전)
// 캔버스 크기: 600x400 픽셀

function setup() {
  createCanvas(600, 400);
  noLoop(); // 정적 이미지
}

function draw() {
  // 배경
  background(240, 245, 255);
  
  // 중심 좌표 설정
  let centerX = 300;
  let centerY = 200;
  
  // 목
  fill(255, 220, 177); // 피부색
  noStroke();
  ellipse(centerX, centerY + 80, 60, 80);
  
  // 셔츠 칼라
  fill(200, 220, 240); // 연한 파란색 셔츠
  stroke(150, 170, 200);
  strokeWeight(2);
  // 셔츠 몸통
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
  fill(200, 220, 240); // 셔츠가 보이는 부분
  triangle(centerX - 25, centerY + 80, centerX + 25, centerY + 80, centerX, centerY + 110);
  
  // 얼굴 (둥근 형태)
  fill(255, 220, 177);
  noStroke();
  ellipse(centerX, centerY - 10, 160, 180);
  
  // 머리카락 (검은색, 앞머리 스타일)
  fill(40, 40, 40);
  // 뒤머리
  ellipse(centerX, centerY - 40, 180, 140);
  // 기본 앞머리
  ellipse(centerX, centerY - 80, 140, 80);
  
  // 얼굴을 다시 그려서 머리카락 위에 올리기
  fill(255, 220, 177);
  ellipse(centerX, centerY - 10, 160, 180);
  
  // 앞머리 디테일 - 이마를 완전히 덮도록 수정
  fill(40, 40, 40);
  
  // 왼쪽에서 오른쪽으로 앞머리 섹션들
  ellipse(centerX - 50, centerY - 70, 35, 55); // 가장 왼쪽
  ellipse(centerX - 30, centerY - 75, 35, 60); // 왼쪽
  ellipse(centerX - 10, centerY - 80, 40, 65); // 왼쪽 중앙
  ellipse(centerX + 10, centerY - 80, 40, 65);  // 오른쪽 중앙
  ellipse(centerX + 30, centerY - 75, 35, 60);  // 오른쪽
  ellipse(centerX + 50, centerY - 70, 35, 55);  // 가장 오른쪽
  
  // 앞머리 가장자리를 자연스럽게 만들기 위한 추가 헤어
  ellipse(centerX - 65, centerY - 60, 25, 40);  // 왼쪽 끝
  ellipse(centerX + 65, centerY - 60, 25, 40);   // 오른쪽 끝
  
  // 이마 부분을 완전히 덮기 위한 중간 레이어
  ellipse(centerX - 20, centerY - 65, 30, 45);
  ellipse(centerX, centerY - 70, 35, 50);
  ellipse(centerX + 20, centerY - 65, 30, 45);
  
  // 안경 테 (둥근 안경)
  fill(0, 0, 0, 0); // 투명
  stroke(60, 40, 20); // 갈색 테
  strokeWeight(4);
  
  // 왼쪽 렌즈
  ellipse(centerX - 35, centerY - 20, 60, 60);
  // 오른쪽 렌즈
  ellipse(centerX + 35, centerY - 20, 60, 60);
  
  // 안경 다리
  strokeWeight(3);
  line(centerX - 65, centerY - 20, centerX - 95, centerY - 25);
  line(centerX + 65, centerY - 20, centerX + 95, centerY - 25);
  
  // 안경 브릿지 (코 위)
  line(centerX - 5, centerY - 20, centerX + 5, centerY - 20);
  
  // 눈
  fill(255, 255, 255);
  noStroke();
  // 왼쪽 눈
  ellipse(centerX - 35, centerY - 20, 45, 35);
  // 오른쪽 눈
  ellipse(centerX + 35, centerY - 20, 45, 35);
  
  // 눈동자
  fill(80, 50, 30); // 갈색 눈동자
  ellipse(centerX - 35, centerY - 20, 25, 25);
  ellipse(centerX + 35, centerY - 20, 25, 25);
  
  // 눈동자 하이라이트
  fill(255, 255, 255);
  ellipse(centerX - 30, centerY - 25, 8, 8);
  ellipse(centerX + 40, centerY - 25, 8, 8);
  
  // 눈썹 (앞머리에 가려져서 거의 안 보이도록 조정)
  fill(40, 40, 40);
  noStroke();
  ellipse(centerX - 35, centerY - 45, 35, 10);
  ellipse(centerX + 35, centerY - 45, 35, 10);
  
  // 코
  fill(245, 200, 157); // 약간 어두운 피부색
  ellipse(centerX, centerY + 5, 20, 25);
  fill(255, 220, 177);
  ellipse(centerX, centerY, 15, 20);
  
  // 입
  fill(200, 120, 120);
  ellipse(centerX, centerY + 35, 35, 15);
  
  // 입술 하이라이트
  fill(220, 140, 140);
  ellipse(centerX, centerY + 32, 25, 8);
  
  // 볼 (약간 붉은 톤)
  fill(255, 200, 180, 100);
  noStroke();
  ellipse(centerX - 50, centerY + 10, 30, 25);
  ellipse(centerX + 50, centerY + 10, 30, 25);
  
}

// 이미지 저장 함수 (키보드 's' 누르면 저장)
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('caricature', 'png');
  }
}