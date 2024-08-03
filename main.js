import { ActorsRating } from "./components/actorsRating";
import { footer } from "./components/footer";
import { header } from "./components/header";
import { MovieGenres, NowPlaying} from "./components/movieCards";
import { PopularActors } from "./components/popularActors";
import { addPostersToSwiper } from "./components/posters";
import { searcher } from "./components/searcher";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";
header()
footer()
searcher()

let modal = document.querySelector('.modal-bg')
let btnOpen = document.querySelector('.search')
let btnClose = document.querySelector(".close")

btnOpen.onclick = () => {
    modal.style.visibility = "visible"
    modal.style.opacity = "1"
}
btnClose.onclick = () => {
    modal.style.visibility = "hidden"
    modal.style.opacity = "0"
}

let btnAllMovies = document.querySelector('.all-movies')
btnAllMovies.onclick = () => {
 window.location.replace('/pages/NowPlayingMovies/')
}

// let movieCards = document.querySelectorAll('.movie')
// movieCards.forEach ((card) => {
//   card.onclick = (e) => {
//     if(e.target.classList.contains('movie')) {
//       window.location.replace('/pages/MovieCards/')
//       console.log(card);
//     }
//   }
// })
// console.log(movieCards);


let nowPlayingMovies = getData('movie/now_playing')
let upcomingMovies = getData('movie/upcoming')
let popularMovies =  getData('movie/popular')
let popularPeople = getData('person/popular')
const movieGenresList = getData('genre/movie/list')
// let genresId = movieGenresList.data.genres.id
let movieGenres = getData('discover/movie')
// console.log(genresId);
console.log(movieGenres);

console.log(movieGenresList);

Promise.all([nowPlayingMovies, upcomingMovies, popularMovies, popularPeople, movieGenresList, movieGenres])
.then(([nowPlayingMovies, upcomingMovies, popularMovies, popularPeople, movieGenresList, movieGenres]) => {
  reload(nowPlayingMovies.data.results.slice(0,8), 'movies', NowPlaying)

  reload(upcomingMovies.data.results.slice(0,4), 'upcoming-movies', NowPlaying)
  addPostersToSwiper(upcomingMovies.data.results);
  
  reload(popularMovies.data.results.slice(0,4), 'popular-movies', NowPlaying)

  reload(popularPeople.data.results.slice(0,2), 'popular-actors', PopularActors)
  reload(popularPeople.data.results.slice(2,6), 'actors-box', ActorsRating)

  reload(movieGenresList.data.genres.slice(0,6), 'genre-box', MovieGenres)
  
  
})
.catch(error => console.error(error))