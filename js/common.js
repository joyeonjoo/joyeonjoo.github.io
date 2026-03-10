const modal = document.getElementById('main-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

document.querySelector('.project-grid').addEventListener('click', (e) => {
  .project-card 
    const card = e.target.closest('.project-card');
    if (!card) return;
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;

    modal.showModal();
  
});


// 배경 클릭하면 닫기
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});
