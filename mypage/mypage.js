const deleteBtn = document.getElementById("deleteBtn");
const modalDiv = document.querySelector("#modalContainer");
const cancelBtn = document.querySelector(".cancelBtn");
const confirmBtn = document.querySelector(".confirmBtn");
const recipeList1 = document.querySelector("#recipeList1");
const uploadCompleteBtn = document.getElementById("uploadCompleteBar");
const saveDraftBtn = document.getElementById("saveDraftBar");
const uploadCompleteNav = document.getElementById("uploadComplete");
const saveDraftNav = document.getElementById("saveDraft");
const uploadCompleteUl = document.getElementById("uploadCompleteUl");
const saveDraftUl = document.getElementById("saveDraftUl");
const pagingBtn = document.getElementById("pagingBtn");

deleteBtn.addEventListener("click", () => {
  modalDiv.style.display = "block";
});
cancelBtn.addEventListener("click", () => {
  modalDiv.style.display = "none";
});
confirmBtn.addEventListener("click", () => {
  recipeList1.remove();
  modalDiv.style.display = "none";
});

saveDraftBtn.addEventListener("click", () => {
  uploadCompleteNav.style.display = "none";
  saveDraftNav.style.display = "block";
  uploadCompleteUl.style.display = "none";
  saveDraftUl.style.display = "block";
  pagingBtn.style.display = "none";
});
uploadCompleteBtn.addEventListener("click", () => {
  uploadCompleteNav.style.display = "block";
  saveDraftNav.style.display = "none";
  uploadCompleteUl.style.display = "block";
  saveDraftUl.style.display = "none";
  pagingBtn.style.display = "block";
});
