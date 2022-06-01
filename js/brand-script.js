// new Swiper('.swiper', {
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });

/* Swiper
**************************************************************/
var swiper = Swiper;
var init = false;

/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                slidesPerView: 3,
                centeredSlides: true,
                loop: true,
                spaceBetween: 10,
                direction: 'horizontal',
                effect: 'coverflow',
                pagination: {
                    clickable: true,
                    el: '.swiper-pagination',
                  },   

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },

                breakpoints: {

                    767: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'coverflow',

                        coverflowEffect: {
                            rotate: 0,
                            stretch: 20,
                            depth: 120,
                            modifier: 3,
                            slideShadows: false,
                        }
                    }
                }
            });
        }
    }
    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }
    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});

let buttonMore = document.querySelector('.brands-more__open');
let brandsArea = document.querySelector('.brands-content');

buttonMore.addEventListener('click', function(evt) {
    evt.preventDefault();
      
    if (brandsArea.classList.contains('brands-content--opened')) {
        brandsArea.classList.add('brands-content--hidden');
        brandsArea.classList.remove('brands-content--opened');
        buttonMore.textContent = "Показать все"; 
        buttonMore.style.backgroundImage = "url('img/icons/icon.svg')";
    } else {
        buttonMore.textContent = "Скрыть"; 
        buttonMore.style.backgroundImage = "url('img/icons/icon-up.svg')";
        brandsArea.classList.remove('brands-content--hidden');
        brandsArea.classList.add('brands-content--opened');
    }
});




