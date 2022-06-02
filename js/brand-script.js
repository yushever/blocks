let init = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let desktop = window.matchMedia('(min-width: 769px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                loop: true,
                initialSlide: 0,
                
                spaceBetween: 0,
                pagination: {
                    clickable: true,
                    el: '.swiper-pagination',
                  },   
            });
        }
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




