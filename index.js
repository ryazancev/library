import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const initSlider = () => {
    const mainSlider = new Swiper('.slider .swiper', {
        navigation: {
            nextEl: '.slider .swiper-button-next',
            prevEl: '.slider .swiper-button-prev'
        },
        autoplay: {
            delay: 3000
        },
        spaceBetween: 30,
        loop: true,
        slidesPerView: 4

    })
};
initSlider();

const addFavorite = () => {
    const books = document.querySelector('.books');

    const fillHeart = (e) => {
        const target = e.target;
        if (target.matches('.book__favorite')) {
            target.classList.toggle('active')
        }
    };

    books.addEventListener('click', fillHeart)
};
addFavorite();