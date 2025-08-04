// Swiper 초기화
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