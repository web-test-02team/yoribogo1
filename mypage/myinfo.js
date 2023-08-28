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
