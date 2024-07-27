import { ActorsRating } from "./components/actorsRating";
import { NowPlaying } from "./components/nowPlaying";
import { PopularActors } from "./components/popularActors";
import { addPostersToSwiper } from "./components/posters";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";


getData('movie/now_playing')
.then(res => {
    addPostersToSwiper(res.data.results);    
    reload(res.data.results.slice(0,8), 'movies', NowPlaying)
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
})
.catch(error => console.error(error))

getData('person/popular')
.then(res => {
    console.log(res.data);
    reload(res.data.results.slice(0,2), 'popular-actors', PopularActors)
  })
  .catch(error => console.error(error))
  

let btnAllMovies = document.querySelector('.all-movies')
btnAllMovies.onclick = () => {
 window.location.replace('/pages/NowPlayingMovies/')
}