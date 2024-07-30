import { footer } from "./components/footer";
import { header } from "./components/header";
import { ActorsRating } from "./components/actorsRating";
import { NowPlaying } from "./components/nowPlaying";
import { PopularActors } from "./components/popularActors";
import { addPostersToSwiper } from "./components/posters";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";
header()
footer()


getData('movie/now_playing')
.then(res => {
    console.log(res.data);
    addPostersToSwiper(res.data.results);    
    reload(res.data.results.slice(0,8), 'movies', NowPlaying)
})
.catch(error => console.error(error));

getData('movie/upcoming')
.then(res => {
    addPostersToSwiper(res.data.results);    
})
.catch(error => console.error(error));

getData('movie/top_rated')
.then(res => {
    reload(res.data.results.slice(0, 4), 'popular-movies', NowPlaying)
})
.catch(error => console.error(error))

getData('person/popular')
.then(res => {
    reload(res.data.results.slice(0,3), 'actors-box', ActorsRating)
    reload(res.data.results.slice(0,2), 'popular-actors', PopularActors)
})
.catch(error => console.error(error))

getData('movie/upcoming')
.then(res => {
    reload(res.data.results.slice(0,8), 'upcoming-box', NowPlaying)
})
.catch(error => console.error(error));


 

let btnAllMovies = document.querySelector('.all-movies')
btnAllMovies.onclick = () => {
 window.location.replace('/pages/NowPlayingMovies/')
}

let modalBtn =  document.querySelector('.search')
let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__close')

modalBtn.onclick = () => {
  modal.classList.add('show')
  modal.classList.add('fade')
  modal.classList.remove('hide')
}

modalClose.onclick = () => {
    modal.classList.add('hide')
}

// // getData(`/movie/${dataId}`)
// // .then(res => {
// //       bg(res.data)
// // })
// .catch(error => console.error(error))

// function bg(data) {
//     let cartfilm = document.querySelector('.movie')
//     cartfilm.style.backgroundImage = `url("https://image.tmdb.org/t/p/original" + ${data.backdrop_path})`
// }