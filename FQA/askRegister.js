const optionSelector = document.getElementById('requestSelect');

const update = document.getElementById('update');

optionSelector.addEventListener('change', function (){
    // 선택한 옵션값 갖고오기
    const selectedOption = optionSelector.value;

    switch (selectedOption) {
      case '-':
      update.textContent = "-"
      break;

      case '1':
      update.textContent = "[멤버] 멤버십 가입, 결제, 이용"
      break;

      case '2':
      update.textContent = "[크리에이터] 크리에이터 스튜디오, 멤버십 관리(멤버십 개설, 중단), 정산"
      break;


        
        
        
    }
});