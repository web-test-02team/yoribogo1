// nodeList.prototype.map = Array.prototype.map;

// const checkOptionAll = document.querySelector("input.checkOptionAll");
// const checkOptions = document.querySelectorAll("input.checkOption");

// checkOptionAll.addEventListener("click", () => {
//   checkOptions.forEach((checkOption) => {
//     checkOption.checked = checkOptionAll.checked;
//   });
// });

// checkOptions.forEach((checkOption) => {
  
//   checkOption.addEventListener("click", (e) => {
//     checkOptionAll.checked = checkOptions.map((checkOption) => checkOption.checked).filter((checked) => checked).length === 5;
//   });
// });


function checkSelectAll() {
  const agreeCheckBox = document.querySelectorAll('input[name="check"]');
  const checking = document.querySelectorAll('input[name="check"]:checked');
  const selectAll = document.querySelector('input[name="checkAll"]');

  if(agreeCheckBox.length === checking.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function selectAll(selectAll) {
  const agreeCheckBox = document.getElementsByName('check');

  agreeCheckBox.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  });

  // agreeCheckBox.forEach((checkbox) => {
  //   checking.addEventListener("click", (e) => {
  //     selectAll.checked = (((checkbox) => checkbox.checked).length === 5);
  //   });
    
  // });
}
