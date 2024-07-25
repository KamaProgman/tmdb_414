import { addPostersToSwiper,  NowPlaying } from "./components/posters";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";

let btnAllMovies = document.querySelector('.all-movies')

getData('movie/now_playing')
    .then(res => {
        console.log(res.data);
        addPostersToSwiper(res.data.results);    
        reload(res.data.results.slice(0,8), 'movies', NowPlaying)
    })
    .catch(error => console.error(error));


   btnAllMovies.onclick = () => {
    window.location.replace('/pages/NowPlayingMovies/')
  }

