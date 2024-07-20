import { getData } from "./libs/http"

let swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  }
})

getData('movie/now_playing')
.then(res => console.log(res))
.catch(error => console.error(error))