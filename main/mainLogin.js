
// const loginButton = document.querySelector(".loginButton");
// const postWrite = document.querySelector(".postWrite");
// const paymentSystem=document.querySelector(".paymentSystem")

// loginButton.addEventListener("click", () => {
//   window.location.href = "";
// })

// postWrite.addEventListener("click", () => {
//   window.location.href = "";
// })
// paymentSystem.addEventListener("click",()=>{
//   window.location.href = "";
// });
// 로그인후 클릭 하면 나오는 이벤트
const navLogin=document.querySelector(".navLogin");
const loginClick=document.querySelector(".loginClick");
navLogin.addEventListener("click",()=>{
  if(loginClick.style.display=='none'){ 		
    loginClick.style.display = 'block'; 	
  }else{ 		
    loginClick.style.display = 'none'; 	
  } 
})
//추천 main.. 선택시 색변경
const headlinePrimary =document.querySelector(".headlinePrimary");
const headlineOntent=document.querySelectorAll(".headlineOntent");
headlineOntent.forEach((e)=>{
e.addEventListener("click",(co)=>{
  if(co.target.style.color!="#1d1d1e"){
    co.target.style.color="#1d1d1e"
    headlinePrimary.style.color="#b9b9bb";
  }
})
headlinePrimary.addEventListener("click",(e)=>{
  if(e.target.style.color!="#b9b9bb"){
    e.target.style.color="#1d1d1e"
    headlineOntent.style.color="#b9b9bb";
  }
})
})
// 요리 분류 선택시 색..등등 변경
const categoryButton = document.getElementsByClassName("categoryButton");
function handleClick(event) {
  // console.log(event.target.classList);
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");

  } else {
    for (let i = 0; i < categoryButton.length; i++) {
      categoryButton[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
}
function init() {
  for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].addEventListener("click", handleClick);
  }
}
init();

// 슬라이드 배너
function autoSlide() {
  swiperWrap.style.transition = "transform 0.5s";
  count++;
  if (count == 3) {
    number=1;
    numberLabelBold.innerText=`${number}`;
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 1) + "px)";
    setTimeout(function () {
      swiperWrap.style.transition = "transform 0s";
      swiperWrap.style.transform = "translate(-559.333px)";
    }, 500);
    count = 0;
  } else {
    numberLabelBold.innerText=`${number+1}`
    number++;
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 1) + "px)";
  }
}

// 무한 반복
const swiperWrap = document.querySelector(".swiperWrap");
const numberLabelBold=document.querySelector(".numberLabelBold");
const block=document.getElementsByClassName("block");
//처음 번호 1로 선언
let number=1;
numberLabelBold.innerText=`${number}`
let count = 0
swiperWrap.style.transform = "translate(-559.333px)";
// for(let i=0; i< block.length; i++)
// {console.log(block)};
// 3초마다 슬라이드 이동
let inter = setInterval(autoSlide, 3000);



// 이전 버튼, 다음 버튼 구현
const arrows = document.querySelectorAll(".nextNumber");
let arrowButtonCheck = true;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    if (arrowButtonCheck) {
      arrowButtonCheck = false;
      clearInterval(inter);
      swiperWrap.style.transition = "transform 0.5s";
      let arrowType = arrow.classList[1];
      // 이전버튼에 클래스 2개 prev로 이전버튼인지 다음버튼인지 확인
      if (arrowType == "prev") {
        count--;
        number--;
        if (count == -1) {
          swiperWrap.style.transform = "translate(0px)";
          setTimeout(function () {
            swiperWrap.style.transition = "transform 0s";
            swiperWrap.style.transform = "translate(-1678px)";
          }, 500);
          count = 2;
          number=3;
          numberLabelBold.innerText=`${number}`
        } else {
          swiperWrap.style.transform = "translate(-" + 559.333 * (count + 1) + "px)";
          numberLabelBold.innerText=`${number}`
        }
      } else {
        count++;
        number++;
        if (count == 3) {
          swiperWrap.style.transform = "translate(-" + 559.333 * (count + 1) + "px)";
          setTimeout(function () {
            swiperWrap.style.transition = "transform 0s";
            swiperWrap.style.transform = "translate(-559.333px)";
          }, 500);
          count = 0;
          number=1;
          numberLabelBold.innerText=`${number}`
        } else {
          swiperWrap.style.transform = "translate(-" + 559.333 * (count + 1) + "px)";
          numberLabelBold.innerText=`${number}`
        }
      }
      inter = setInterval(autoSlide, 3000);
      setTimeout(function () {
        arrowButtonCheck = true;
      }, 500);
    }
  });
});
//검색 버튼, x 버튼 클릭 이벤트  
const wrapNext=document.querySelector("#wrapNext");
const searchWrap=document.querySelector(".searchWrap")
function searchButton(){
  wrapNext.style.display="none"
  searchWrap.style.display="block"
}
function closeX(){
  searchWrap.style.display="none"
  wrapNext.style.display="block";
}

// 요리 목록 after버튼 눌르시 before 생성 끝까지가면 after none
const before =document.getElementsByClassName("before");
console.log(before)
const after =document.getElementsByClassName("after");
const swiperWraps=document.getElementsByClassName("swiperWrap")
console.log(swiperWraps[1])
function afterClick(){
  let counts=1;
  before[0].style.display="flex";
  swiperWraps[1].style.transition = "transform 0.2s"
    counts++;
    if (counts == 3) {
      console.log(after[0])
      after[0].style.display="none";
    } else {
      swiperWraps[1].style.transform = "translate(-" + 560 * (count + 1) + "px)";
    }
  }
  