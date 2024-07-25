import { NowPlaying } from "./components/nowPlaying";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";

let btnAllMovies = document.querySelector('.all-movies')

getData('movie/now_playing')
  .then(res => {
    reload(res.data.results.slice(0,8), 'movies', NowPlaying)
    console.log(res);
  })
  .catch(error => console.error(error)) 

   btnAllMovies.onclick = () => {
    window.location.replace('/pages/NowPlayingMovies/')
  }

