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

function updateTextCount(inputElement) {
  const textCountElement = inputElement.closest(".infoDiv6").querySelector(".textCount");
  const maxLength = 50;
  const currentLength = inputElement.value.length;
  textCountElement.textContent = `${currentLength}/${maxLength}`;
}

// 이미지 업로드
document.addEventListener("DOMContentLoaded", function () {
  const imageInput = document.getElementById("imageInput");
  const uploadedImage = document.getElementById("uploadedImage");

  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadedImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});

// 커버 이미지 업로드
const coverImageInput = document.getElementById("coverImageInput");
const dashedDiv = document.querySelector(".dashedDiv");

// 이미지 업로드 시 동작할 함수
coverImageInput.addEventListener("change", function () {
  dashedDiv.innerHTML = "";
  const file = coverImageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      dashedDiv.style.backgroundImage = `url('${e.target.result}')`;

      // Add this part to set the image width and height to 100%
      const img = new Image();
      img.src = e.target.result;
      img.onload = function () {
        dashedDiv.style.backgroundSize = "100% 100%";
      };
    };

    reader.readAsDataURL(file);
  }
});

const inputElement = document.querySelector("#urlInput");
const validationBox = document.querySelector(".validationBox");

inputElement.addEventListener("input", function () {
  const inputValue = this.value.trim();

  // ... 아래 코드에서 조건에 따라 validationBox 표시 여부 및 메시지 조정
});

const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/.*)?$/;

if (urlPattern.test(inputValue)) {
  validationBox.style.display = "none";
} else {
  validationBox.style.display = "block";
}
