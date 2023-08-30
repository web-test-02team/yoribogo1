  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalButton');
  const modalWindowWrap = document.getElementById('modalWindowWrap');

  openModalButton.addEventListener('click', () => {
    modalWindowWrap.classList.remove('hidden');
    // modalWindowWrap.style.display = 'flex';
  });

  closeModalButton.addEventListener('click', () => {
    modalWindowWrap.classList.add('hidden');
    // modalWindowWrap.style.display = 'none';
  });

