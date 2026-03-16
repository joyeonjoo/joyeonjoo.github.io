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
    lastFocusedElement?.focus(); 
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
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

