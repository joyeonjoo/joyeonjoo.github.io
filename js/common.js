document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('main-modal');
  const closeBtn = document.getElementById('close-btn');
  

  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');


  document.querySelector('.project-grid').addEventListener('click', (e) => {

    const card = e.target.closest('.project-card');
    
    if (card) {
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;      
      modalImg.src = card.dataset.img || card.querySelector('img').src;
      

      modal.showModal();
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
});

gsap.registerPlugin(ScrollTrigger);
    hljs.highlightAll();

    // 1. 헤더 타이포그래피 애니메이션
    gsap.from("#header-title", {
      y: 100, opacity: 0, duration: 1, ease: "power4.out"
    });

    // 2. 프로젝트 카드 스크롤 애니메이션
    gsap.utils.toArray('.portfolio-project').forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
        },
        y: 50, opacity: 0, duration: 1, ease: "power2.out"
      });
    });

    // 3. 스킬 원형 인디케이터 (스크롤 시 작동)
    gsap.utils.toArray('.progress').forEach(circle => {
      const target = circle.getAttribute('data-target');
      const circumference = 2 * Math.PI * 45;

      gsap.to(circle, {
        scrollTrigger: {
          trigger: circle,
          start: "bottom 10%",
        },
        strokeDashoffset: circumference - (target / 100 * circumference),
        duration: 2,
        ease: "power2.inOut"
      });
    });

    // 4. 탭 로직
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

    // 5. 코드 토글
    document.querySelectorAll('.toggle-code').forEach(btn => {
      btn.onclick = () => {
        const target = btn.nextElementSibling;
        const isVisible = target.style.display === 'block';
        target.style.display = isVisible ? 'none' : 'block';
      };
    });
