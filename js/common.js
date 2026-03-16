document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const modal = document.getElementById('main-modal');
  const closeBtn = document.getElementById('close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const projectGrid = document.querySelector('.project-grid');
  
     let lastFocusedElement; 

  if (projectGrid) {
    projectGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        lastFocusedElement = card;
        
       
        modalTitle.textContent = card.dataset.title || 'Project Details';
        modalDesc.textContent = card.dataset.desc || '';
        
        
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

  const closeModal = () => {
    modal.close();
    lastFocusedElement?.focus(); 
  };

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
      gsap.utils.toArray('.portfolio-project').forEach(card => {
          gsap.from(card, {
              scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                  toggleActions: "play none none none" 
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
                  start: "top 80%",
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
