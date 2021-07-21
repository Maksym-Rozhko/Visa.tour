document.addEventListener('DOMContentLoaded', () => {
    navItemsSlidingUnderline();
    unitSwiper();
    smoothScrollToElem();
});

function navItemsSlidingUnderline() {
    const menu = document.querySelector('.header-menu');
    
    menu.addEventListener('mouseover', e => {
      const target = e.target;
      if (target.classList.contains('header-menu__link')) {
        menu.style.setProperty( 
          '--underline-width', `${target.offsetWidth}px`
        );
        menu.style.setProperty(
          '--underline-offset-x', `${target.offsetLeft}px`
        );
      };
    });
    menu.addEventListener('mouseleave', () =>
      menu.style.setProperty('--underline-width', '0')
    );
};

function unitSwiper() {
  const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 1,
      centeredSlides: true,
      loopFillGroupWithBlank: true,
      allowTouchMove: true,
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
      },
      navigation: {
        nextEl: '.reviews-control__next',
        prevEl: '.reviews-control__prev',
      },
      breakpoints: {
          300: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 3,
          },
      }
  });
};

function smoothScrollToElem() {
  const anchorsLink = document.querySelectorAll('a.header-menu__link');
  const scrollToTop = document.querySelectorAll('a.header__logo');
  const scrollToPageElem = document.querySelectorAll('a.scroll-to-form');

  const smoothScroll = (anchors) => {
    for (let anchor of anchors) {
      const blockID = anchor.getAttribute('href');
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        if(innerWidth <= 532) {
          setTimeout(() => {
            removeBurgerOverflow();
          }, 500);
        }

        if(!anchor.classList.contains('new-page')) {
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          window.open(anchor);
        }
      });
    };
  };

  smoothScroll(scrollToTop);
  smoothScroll(anchorsLink);
  smoothScroll(scrollToPageElem);
}
