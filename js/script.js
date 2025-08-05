// swiper 초기화
const thumbSwiper = new Swiper('.thumb-swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true
});

const mainSwiper = new Swiper('.main-swiper', {
  slidesPerView: 1,
  loop: false,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});

// 모달 기능
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.slide-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = img.src;
  });
});

modalClose.onclick = () => modal.style.display = 'none';

modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; }

// 사이드바
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let listItem = document.querySelectorAll(".list-item");
btn.onclick = function(){
  sidebar.classList.toggle("active");
}
searchBtn.onclick = function(){
  sidebar.classList.toggle("active");
}
function activeLink(){
  listItem.forEach(item =>
  item.classList.remove("active"));
  this.classList.add("active");
}
listItem.forEach(item => 
item.onclick = activeLink);

const toggleBtn = document.querySelector('.toggle-code');
    const codeSection = document.querySelector('.code-section');

    toggleBtn.addEventListener('click', () => {
      codeSection.classList.toggle('show');
      toggleBtn.textContent =
        codeSection.classList.contains('show') ? '코드 닫기 ▲' : '코드 보기 ▼';
    });
