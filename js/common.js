document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const modal = document.getElementById('main-modal');
  const closeBtn = document.getElementById('close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const projectGrid = document.querySelector('.project-grid');
  
     let lastFocusedElement; // 접근성을 위한 포커스 복원 변수

  if (projectGrid) {
    projectGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        lastFocusedElement = card; // 클릭한 카드 기억
        
        // 데이터 주입
        modalTitle.textContent = card.dataset.title || 'Project Details';
        modalDesc.textContent = card.dataset.desc || '';
        
        // 이미지 처리 (data-img 우선 -> 카드 내 img -> 없으면 숨김)
        const imgSrc = card.dataset.img || card.querySelector('img')?.src;
        if (imgSrc) {
          modalImg.src = imgSrc;
          modalImg.parentElement.style.display = 'block';
        } else {
          modalImg.parentElement.style.display = 'none';
        }

        modal.showModal();
      }
    });
  }

  // 모달 닫기 로직
  const closeModal = () => {
    modal.close();
    lastFocusedElement?.focus(); // 원래 카드로 포커스 돌려주기
  };

  closeBtn?.addEventListener('click', closeModal);

  // 배경 클릭 시 닫기
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
      // 3. 프로젝트 카드 스크롤 애니메이션
      // 선택자 확인: '.portfolio-project'가 HTML에 실제 존재하는 클래스인지 확인하세요!
      gsap.utils.toArray('.portfolio-project').forEach(card => {
          gsap.from(card, {
              scrollTrigger: {
                  trigger: card,
                  start: "top 90%", // 100%보다 90% 정도가 트리거 확인에 더 좋습니다.
                  toggleActions: "play none none none" // 한 번만 실행
              },
              y: 50, 
              opacity: 0, 
              duration: 1, 
              ease: "power2.out"
          });
      });
  
      // 4. 스킬 원형 인디케이터
      gsap.utils.toArray('.progress').forEach(circle => {
          const target = circle.getAttribute('data-target');
          const circumference = 2 * Math.PI * 45;
  
          gsap.to(circle, {
              scrollTrigger: {
                  trigger: circle,
                  start: "top 80%", // 화면 하단에서 20% 올라왔을 때 시작
              },
              strokeDashoffset: circumference - (target / 100 * circumference),
              duration: 2,
              ease: "power2.inOut"
          });
      });
  
    const tabBtns = document.querySelectorAll('.tabs-nav button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach((btn, idx) => {
      btn.onclick = () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        tabPanes[idx].classList.add('active');
      };
    });
  });
