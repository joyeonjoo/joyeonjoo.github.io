const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modalOverlay');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // 클릭한 카드의 데이터를 모달에 넣어주기
    document.getElementById('modalTitle').innerText = card.dataset.title;
    document.getElementById('modalDesc').innerText = card.dataset.desc;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
  });
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
