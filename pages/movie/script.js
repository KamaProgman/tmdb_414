import { ActorsInMovie } from "../../components/actorsInMovie";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { BgImg, CreatePoster, MovieCard, NowPlaying } from "../../components/movieCards";
import { searcher } from "../../components/searcher";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";

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

let movieId = localStorage.getItem('movieId')


let iframe = document.querySelector('iframe')
getData(`movie/${movieId}/videos`)
.then(res => {
    let filtered = res.data.results.find(item => item.type == "Trailer")

    iframe.setAttribute('src', `https://www.youtube.com/embed/${filtered.key}` )
})
.catch(error => console.error(error))

const movieCard = getData(`movie/${movieId}`)
const actorsInMovie = getData(`movie/${movieId}/credits`)
const similarMovies = getData(`movie/${movieId}/similar`)
const moviePosters = getData(`movie/${movieId}/images`)
Promise.all([movieCard, actorsInMovie, similarMovies, moviePosters])
.then(([movieCard, actorsInMovie, similarMovies, moviePosters]) => {
    MovieCard(movieCard.data)
    console.log(movieCard.data);
    BgImg(movieCard.data)
    
    reload(actorsInMovie.data.cast.slice(0,8), 'actors-box', ActorsInMovie)
    
    reload(similarMovies.data.results.slice(0,4), 'similar', NowPlaying)
    
    reload(moviePosters.data.backdrops.slice(0,8), 'posters', CreatePoster)
    
})
.catch(error => console.error(error))

