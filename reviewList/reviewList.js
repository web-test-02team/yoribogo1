const loginButton = document.querySelector(".loginButton");
const postWrite = document.querySelector(".postWrite");
const mainPage = document.querySelector(".mainPage");
const reviewPage = document.querySelector(".reviewPage");
const filterBtn = document.getElementById("filterBtn");
let filterContainer = document.getElementById("filterContainer");
let filterWrap = document.getElementById("filterWrap");
const freeItems = document.querySelectorAll(".freeItem");
let filterItems = document.querySelectorAll(".filterItem");
// 로그인 버튼 클릭 시 로그인 화면으로 이동
loginButton.addEventListener("click", () => {
  window.location.href = "";
})
// postWrite 클릭 시 이동
postWrite.addEventListener("click", () => {
  window.location.href = "";
})
// 메인 카테고리 클릭 시 메인 페이지로 이동
mainPage.addEventListener("click", () => {
  window.location.href = "";
})
// 후기 카테고리 클릭 시 후기 페이지로 이동
reviewPage.addEventListener("click", () => {
  window.location.href = "";
})
// 필턴 클릭 시 필터 모달창 표시
filterBtn.addEventListener("click", () => {
  filterContainer.style.display = "block";
})
// 회색면 클릭 시 필터 닫기
filterWrap.addEventListener("click", () => {
  filterContainer.style.display = "none";
})
// 새 탭으로 페이지 이동: 이동 할 게시글 주소 입력 필요
freeItems.forEach((freeItem) => freeItem.addEventListener("click", () => {
  window.open('');
}))
// 필터 내 카테고리 클릭 시 border-corol 변경 및 font-weight 변경
filterItems.forEach((filterItem) => filterItem.addEventListener("click", (e) => {
  let parent = e.target.parentElement
  let children1 = parent.children[1]
  
  if(parent.style.borderColor == 'rgb(126, 105, 254)'){
    parent.style.borderColor = 'rgb(230 230 231)'
    children1.style.fontWeight = '400'
  }else{
    parent.style.borderColor = 'rgb(126, 105, 254)'
    children1.style.fontWeight = '700'
  }
}))