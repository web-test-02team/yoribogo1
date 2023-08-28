const deleteBtns = document.querySelectorAll(".deleteBtns");
const modalDiv = document.querySelector("#modalContainer");
const cancelBtn = document.querySelector(".cancelBtn");
const confirmBtn = document.querySelector(".confirmBtn");
const recipeLists = document.querySelectorAll(".recipeList");

// 게시글 개수에 따른 숫자 바꾸기
const spanCount = document.querySelector(".spanCount");
const postNumber = document.querySelector(".postNumberP");

// 게시완료와 임시완료
const uploadCompleteBtn = document.getElementById("uploadCompleteBar");
const saveDraftBtn = document.getElementById("saveDraftBar");
const uploadCompleteUl = document.getElementById("uploadCompleteUl");
const saveDraftUl = document.getElementById("saveDraftUl");
// 임시로 페이징 버튼 숨김
const pagingBtn = document.getElementById("pagingBtn");
const uploadUnderBar = document.getElementById("uploadUnderBar");
const saveUnderBar = document.getElementById("saveUnderBar");

// 게시글 개수에 따른 숫자 바꾸기
spanCount.textContent = recipeLists.length - 1;
postNumber.textContent = recipeLists.length - 1;

deleteBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modalDiv.style.display = "block";

    confirmBtn.addEventListener("click", () => {
      recipeLists[index].remove();
      modalDiv.style.display = "none";

      updateRecipeCount();
    });
  });
});

function updateRecipeCount() {
  const newRecipeLists = document.querySelectorAll(".recipeList");
  const newCount = newRecipeLists.length;

  spanCount.textContent = newCount - 1;
  postNumber.textContent = newCount - 1;
}

cancelBtn.addEventListener("click", () => {
  modalDiv.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
  modalDiv.style.display = "none";
});

saveDraftBtn.addEventListener("click", () => {
  saveDraftBtn.style.color = "#1d1d1e";
  uploadCompleteBtn.style.color = "#b9b9bb";
  saveUnderBar.style.display = "block";
  uploadUnderBar.style.display = "none";
  uploadCompleteUl.style.display = "none";
  saveDraftUl.style.display = "block";
  pagingBtn.style.display = "none";
});
uploadCompleteBtn.addEventListener("click", () => {
  saveDraftBtn.style.color = "#b9b9bb";
  uploadCompleteBtn.style.color = "#1d1d1e";
  saveUnderBar.style.display = "none";
  uploadUnderBar.style.display = "block";
  uploadCompleteUl.style.display = "block";
  saveDraftUl.style.display = "none";
  pagingBtn.style.display = "block";
});
// 프로필모달
const profileModal = document.getElementsByClassName("profileModalWrapper")[0];
const profileBtn = document.getElementsByClassName("profileBtn")[0];
let isShow = false;

profileBtn.addEventListener("click", () => {
  if (!isShow) {
    console.log(isShow);
    profileModal.style.display = "block";
    isShow = true;
  } else if (isShow) {
    console.log(isShow);
    profileModal.style.display = "none";
    isShow = false;
  }
});

// 카테고리, 공유, 조회순 모달
const categoryBtn = document.getElementById("rangeCategoryBtn");
const shareBtn = document.getElementById("rangeShareBtn");
const orderBtn = document.getElementById("rangeOrderBtn");
const rangeCategory = document.getElementById("rangeCategory");
const rangeShare = document.getElementById("rangeShare");
const rangeOrder = document.getElementById("rangeOrder");
const categorySpan = document.querySelector("#categorySpan");
const shareSpan = document.querySelector("#shareSpan");
const orderSpan = document.querySelector("#orderSpan");
const categoryBtns = document.querySelectorAll(".categoryBtns");
const shareBtns = document.querySelectorAll(".shareBtns");
const orderBtns = document.querySelectorAll(".orderBtns");
let isShowCategory = false;
let isShowShare = false;
let isShowOrder = false;

categoryBtn.addEventListener("click", () => {
  if (!isShowCategory) {
    rangeCategory.style.display = "block";
    isShowCategory = true;
  } else if (isShowCategory) {
    rangeCategory.style.display = "none";
    isShowCategory = false;
  }
});

shareBtn.addEventListener("click", () => {
  if (!isShowShare) {
    rangeShare.style.display = "block";
    isShowShare = true;
  } else if (isShowShare) {
    rangeShare.style.display = "none";
    isShowShare = false;
  }
});

orderBtn.addEventListener("click", () => {
  if (!isShowOrder) {
    rangeOrder.style.display = "block";
    isShowOrder = true;
  } else if (isShowOrder) {
    rangeOrder.style.display = "none";
    isShowOrder = false;
  }
});

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent.trim();
    categorySpan.textContent = buttonText;
    rangeCategory.style.display = "none";
    isShowCategory = false;
  });
});

shareBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent.trim();
    shareSpan.textContent = buttonText;
    rangeShare.style.display = "none";
    isShowShare = false;
  });
});

orderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent.trim();
    orderSpan.textContent = buttonText;
    rangeOrder.style.display = "none";
    isShowOrder = false;
  });
});
