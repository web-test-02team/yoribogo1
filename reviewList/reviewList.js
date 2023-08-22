const mainPage = document.querySelector(".mainPage");
const recipePage = document.querySelector(".recipePage");
const freeItems = document.querySelectorAll(".freeItem");
const filterBtn = document.getElementById("filterBtn");
let filterContainer = document.getElementById("filterContainer");
let filterWrap = document.getElementById("filterWrap");
let filterItem = document.getElementById("filterItem");
const loginButton = document.querySelector(".loginButton");
const postWrite = document.querySelector(".postWrite");

loginButton.addEventListener("click", () => {
  window.location.href = "";
})

postWrite.addEventListener("click", () => {
  window.location.href = "";
})

// 메인 카테고리 클릭 시 메인 페이지로 이동
mainPage.addEventListener("click", () => {
  window.location.href = "";
})
// 레시피 카테고리 클릭 시 후기 페이지로 이동
recipePage.addEventListener("click", () => {
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