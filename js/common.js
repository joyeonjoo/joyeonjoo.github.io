이제 HTML 구조가 완벽합니다! project-card들이 모달(dialog) 바깥에 잘 나와 있고, 데이터도 data- 속성에 깔끔하게 들어있네요.

모달이 열리지 않았던 이유는 클릭 이벤트를 인식하지 못했거나, 스크립트 실행 타이밍 문제일 가능성이 큽니다. 아래 자바스크립트 코드를 <script> 태그 안에 넣고, </body> 바로 위에 위치시켜 보세요.

1. JavaScript 구현 (이벤트 위임 방식)
이 코드는 project-grid를 클릭했을 때, 그 안의 project-card를 정확히 찾아내어 데이터를 가져옵니다.

JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('main-modal');
  const closeBtn = document.getElementById('close-btn');
  
  // 모달 내부 요소들
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');

  // 1. .project-grid 전체에 클릭 이벤트 하나만 등록 (성능 최적화)
  document.querySelector('.project-grid').addEventListener('click', (e) => {
    // 클릭된 요소가 .project-card 이거나 그 내부 요소일 경우 찾기
    const card = e.target.closest('.project-card');
    
    if (card) {
      // 2. 데이터 가져오기
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      
      // 이미지 경로 설정 (data-img가 없으면 카드 이미지 사용)
      modalImg.src = card.dataset.img || card.querySelector('img').src;
      
      // 3. 모달 열기
      modal.showModal();
    }
  });

  // 4. 닫기 버튼
  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  // 모달 배경 클릭 시 닫기
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
});
