import { getData } from "../libs/http"
import { reload } from "../libs/utils"
import { NowPlaying } from "./movieCards"

function MovieGenres (item) {
    const div = document.createElement('div')
    div.className = 'search-tab'
    div.setAttribute = ('id', 'search-tab')
    div.textContent = item.name
   
        div.onclick = () => {
             getMoviesById(item.id)
        }
      
    return div
}
function getMoviesById(genreId) {
    getData(`discover/movie?with_genres=${genreId}`)
    .then(res => reload(res.data.results.slice(0,8), 'movies', NowPlaying))
    .catch(error => console.error(error))
}

export{MovieGenres}
