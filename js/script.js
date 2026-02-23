
    // 0. 초기화
    gsap.registerPlugin(ScrollTrigger);
    hljs.highlightAll();

    // 1. 헤더 등장 애니메이션
    const headerTl = gsap.timeline();
    headerTl.from("#main-header h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" })
            .from("#main-header p", { opacity: 0, y: -20, duration: 0.8 }, "-=0.5");

    // 2. 스크롤 시 섹션들이 하나씩 나타남 (ScrollTrigger)
    gsap.utils.toArray('.portfolio-project').forEach(section => {
      gsap.to(section, {
        scrollTrigger: { trigger: section, start: "top 85%" },
        opacity: 1, y: 0, duration: 1, ease: "power2.out"
      });
    });

    // 3. Swiper 실행
    new Swiper(".pf-swiper", {
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      autoplay: { delay: 3000 }
    });

    // 4. 모달 인터랙션 (Bounce 효과)
    const modal = document.querySelector('#modal');
    const modalWin = document.querySelector('.modal-window');
    document.querySelector('#openModal').onclick = () => {
      modal.style.display = 'flex';
      gsap.to(modal, { backgroundColor: "rgba(0,0,0,0.6)", duration: 0.5 });
      gsap.fromTo(modalWin, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
    };
    document.querySelector('#closeModal').onclick = () => {
      gsap.to(modal, { opacity: 0, duration: 0.3, onComplete: () => {
        modal.style.display = 'none'; gsap.set(modal, { opacity: 1 });
      }});
    };

    // 5. 탭 UI (Fade 효과)
    // 코드 탭 전환
    document.querySelectorAll('.code-section').forEach(section=>{
      const codeTabs = section.querySelectorAll('.code-tabs button');
      const views = section.querySelectorAll('.code-view');

      codeTabs.forEach((tab, idx)=>{
        tab.addEventListener('click', ()=>{
          codeTabs.forEach(t=>t.classList.remove('active'));
          views.forEach(v=>v.classList.remove('active'));
          tab.classList.add('active');
          views[idx].classList.add('active');
        });
      });
    });

    //탭

    const uiTabs = document.querySelectorAll('.tabs button'); 
    const tabContents = document.querySelectorAll('.tab-content');
    uiTabs.forEach((tab, idx)=>{
      tab.addEventListener('click', ()=>{
        uiTabs.forEach(t=>t.classList.remove('active'));
        tabContents.forEach(c=>c.classList.remove('active'));
        tab.classList.add('active');
        tabContents[idx].classList.add('active');
      });
    });

    // 6. 커스텀 드롭다운 (Slide 효과)
    const dropdown = document.querySelector('.custom-dropdown');
    const options = document.querySelector('.dropdown-options');
    dropdown.onclick = () => {
      const isOpen = options.style.display === 'block';
      if (!isOpen) {
        options.style.display = 'block';
        gsap.to(options, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.to(options, { opacity: 0, y: -10, duration: 0.3, onComplete: () => options.style.display = 'none' });
      }
    };

    // 7. 아코디언 (Smooth Height)
    document.querySelectorAll('.accordion button').forEach(btn => {
      btn.onclick = () => {
        const content = btn.nextElementSibling;
        const isOpening = !content.classList.contains('show');
        
        if (isOpening) {
          content.classList.add('show');
          gsap.fromTo(content, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.inOut" });
        } else {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.3, onComplete: () => content.classList.remove('show') });
        }
      };
    });

    // 8. 코드 토글
    document.querySelectorAll('.toggle-code').forEach(btn => {
      btn.onclick = () => {
        const section = btn.nextElementSibling;
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
        if(section.style.display === 'block') gsap.from(section, { opacity: 0, y: -10, duration: 0.4 });
      };
    });
    
    const progressCircles = document.querySelectorAll('.progress');

    progressCircles.forEach(circle => {
      const targetPercent = circle.getAttribute('data-target'); // 80 같은 숫자 가져오기
      const radius = circle.r.baseVal.value; // 반지름 45
      const circumference = 2 * Math.PI * radius; // 둘레 계산 (약 282.7)
      
     
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;
      
     
      setTimeout(() => {
        const offset = circumference - (targetPercent / 100 * circumference);
        circle.style.strokeDashoffset = offset;
      }, 100);
    });
