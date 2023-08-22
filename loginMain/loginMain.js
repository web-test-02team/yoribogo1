// const button = document.quearySelector("button[type=submit]");
const email = document.querySelector("input[name='email']");
const pw = document.querySelector("input[name='password']");
const emailCheck = document.getElementById("emailCheck");
const pwCheck = document.querySelector("#pwCheck");

globalThis.flag = new Array(false, false);

// 이메일 경고
email.addEventListener("blur", (e) => {
  const emailTarget = e.target;

  if(!emailTarget.value) {
    globalThis.flag[0] = false;
    emailCheck.innerText = "필수항목 입니다.";
    emailCheck.style.color = "red";
    hiddenWrong.style.display = "block";
    return;

  } else {
    globalThis.flag[0] = false;
    emailCheck.innerText = "올바른 이메일 형식이 아닙니다.";
    emailCheck.style.color = "red";
    hiddenWrong.style.display = "block";
    return;

  }
  
});

// 비밀번호 경고
password.addEventListener("blur", (e) => {
  const pwTarget = e.target;

  if(!pwTarget.value) {
    globalThis.flag[0] = false;
    pwCheck.innerText = "필수항목 입니다.";
    pwCheck.style.color = "red";
    hiddenWrong.style.display = "block";
    return;

  } else {
    globalThis.flag[0] = false;
    pwCheck.innerText = "8자 이상, 20자 이하로 입력해주세요.";
    pwCheck.style.color = "red";
    hiddenWrong.style.display = "block";
    return;

  }

});
