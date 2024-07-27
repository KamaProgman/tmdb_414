let swiper;
function addSwiper() {
    swiper = new Swiper('#swiper-box', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        }
    });
}

function ReloadPosters(item) {
    const swiperSlide = document.createElement('div');
    const swiperBox = document.createElement('div');
    const img = document.createElement('img');
    const movieName = document.createElement('h3');

    img.src = "https://image.tmdb.org/t/p/original" + item.poster_path
    movieName.textContent = item.original_title;

    swiperSlide.className = 'swiper-slide';
    swiperBox.className = 'swiper-box';
    img.className = 'swiper-movie';
    movieName.className = 'movie-name';

    swiperBox.appendChild(img);
    swiperSlide.append(swiperBox, movieName)

    return swiperSlide;
}

function addPostersToSwiper(posters) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    posters.forEach(item => {
        const slide = ReloadPosters(item);
        swiperWrapper.appendChild(slide);
    });

    addSwiper();
}

export { ReloadPosters, addSwiper, addPostersToSwiper };