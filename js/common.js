const modal = document.getElementById('main-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

document.querySelector('.project-grid').addEventListener('click', (e) => {
  if (e.target.classList.contains('open-btn')) {
    const card = e.target.closest('.project-card');

    // 1. data 속성에서 값 가져오기
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;

    // 2. 모달 열기
    modal.showModal();
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = ''; 
});

// 배경 클릭하면 닫기
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
