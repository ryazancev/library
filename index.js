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

const showModalLk = () => {
    const modalContainer = document.querySelector('.modal');
    const modalLk = document.querySelector('.lk-modal');
    const lkButtons = document.querySelectorAll('.js-lk');

    const openModal = (e) => {
        e.preventDefault();
        modalContainer.classList.add('open');
        modalLk.classList.add('open');
    };

    const closeModal = () => {
        modalContainer.classList.remove('open');
        for (let modal of modalContainer.children) {
            modal.classList.remove('open');
        }
    };

    lkButtons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.modal__close')) {
            closeModal();
        }
        if (target.matches('.modal')) {
            closeModal();
        }
    });

};
showModalLk();