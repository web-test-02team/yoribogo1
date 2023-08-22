
// 로그인시
const navLogin=document.querySelector(".navLogin");
const loginClick=document.querySelector(".loginClick");
navLogin.addEventListener("click",()=>{
  if(loginClick.style.display=='none'){ 		
    loginClick.style.display = 'block'; 	
  }else{ 		
    loginClick.style.display = 'none'; 	
  } 
})
// 슬라이드 배너
function autoSlide() {
  // 이동되는 데 걸리는 시간은 0.5초
  swiperWrap.style.transform="translate3d(-559.333px, 0px, 0px)";
  swiperWrap.style.transition = "transform 0.5s";
  // 마지막 슬라이드일 때
  // 6번 뒤에 1번 배치시킨다.
  // 6번에서 1번으로 슬라이드 진행
  // 0s를 줘서 원래 1번 위치로 이동(슬라이드 효과는 안보임)
  count++;
  if (count == 9) {
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 1) + "px)";
    setTimeout(function () {
      swiperWrap.style.transition = "transform 0s";
      swiperWrap.style.transform = "translate3d(-559.333px, 0px, 0px)";
    }, 500);
    count = 0;
  } else {
    swiperWrap.style.transform = "translate(-" + -559.333 * (count + 1) + "px)";
  }
  // 초기화할 버튼객체를 temp에 담는다.
}

// 무한 반복
const swiperWrap = document.querySelector("div.swiperWrap");
const numberButton=document.querySelector("button[class=nextNumber]")
let count = 0
let firstDiv = document.createElement("div");
let lastDiv = document.createElement("div");
// let first=document.createElement("div");
// let buttons =document.createElement("button");
// 가장 마지막에 첫번째 배너를 이어 붙인다, 슬라이드 모션이 자연스럽게 1번으로 돌아가게 하기 위함
// first.innerHTML=` <div class="swiperSlide" style="width :559.333px">`
// buttons.innerHTML=`<button type=button class=block >`

// 가장 첫번째에 마지막 배너를 이어 붙인다, 이전 버튼 클릭 시 슬라이드 모션이 자연스럽게 6번으로 돌아가게 하기 위함



// 첫번째 배너는 6번이니까 왼쪽으로 한 번 밀어서 1번 보이게 함.
swiperWrap.style.transform = "translate(-559.333px)";

// 4초마다 슬라이드 이동
let inter = setInterval(autoSlide, 4000);

// 원하는 번호의 배너 보기
// 각 버튼마다 클릭 이벤트 적용

// // 버튼을 광클하지 못하게 막아주는 FLAG
// let numberButtonCheck = true;

// buttons.forEach((v, i, btns) => {
//   // 각 버튼에 click이벤트를 걸어줌.
//   btns[i].addEventListener("click", function () {
//     // 아래의 얍삽한 방법으로 인해 0s로 변할 수 있기 때문에 무조건 0.5s로 설정하고 시작
//     banner.style.transition = "transform 0.5s";
//     if (numberButtonCheck) {
//       // 0.5초가 지나고 나서 클릭했거나 처음 클릭하거나
//       numberButtonCheck = false; // 누르자마자 바로 false
//       clearInterval(inter); // autoSlide 타이머 제거, 동시에 돌아가면 안됨.
//       count = i; // 클릭한 버튼의 인덱스를 배너의 번호로 설정
//       temp.style.backgroundColor = "#f0f0f0"; // 이전에 적용된 버튼의 배경을 원상복구.
//       buttons[count].style.backgroundColor = "black"; // 클릭한 버튼의 배경을 검은색.
//       banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)"; // 클릭한 버튼의 인덱스번호를 통해 배너번호로 이동
//       temp = buttons[count]; // 지금 선택된 버튼 객체 담아주기
//       inter = setInterval(autoSlide, 4000); //버튼 클릭 다했으니까 auto slide 다시 작동
//       // 클릭하고 나서 할 거 다 하고 0.5초 후에 FLAG를 true로 변경
//       // 0.5초 안에는 다시 클릭 못하게 막아주기
//       setTimeout(function () {
//         numberButtonCheck = true;
//       }, 500);
//     }
//   });
// });

// 이전 버튼, 다음 버튼 구현
// const arrows = document.querySelectorAll("div.arrow");
// let arrowButtonCheck = true;
// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", function () {
//     if (arrowButtonCheck) {
//       arrowButtonCheck = false;
//       clearInterval(inter);
//       banner.style.transition = "transform 0.5s";
//       let arrowType = arrow.classList[2];
//       if (arrowType == "prev") {
//         count--;
//         if (count == -1) {
//           banner.style.transform = "translate(0vw)";
//           setTimeout(function () {
//             banner.style.transition = "transform 0s";
//             banner.style.transform = "translate(-540vw)";
//           }, 500);
//           count = 5;
//         } else {
//           banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)";
//         }
//       } else {
//         count++;
//         if (count == 6) {
//           banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)";
//           setTimeout(function () {
//             banner.style.transition = "transform 0s";
//             banner.style.transform = "translate(-90vw)";
//           }, 500);
//           count = 0;
//         } else {
//           banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)";
//         }
//       }
//       temp.style.backgroundColor = "#f0f0f0";
//       temp = buttons[count];
//       buttons[count].style.backgroundColor = "black";
//       inter = setInterval(autoSlide, 4000);
//       setTimeout(function () {
//         arrowButtonCheck = true;
//       }, 500);
//     }
//   });
// });