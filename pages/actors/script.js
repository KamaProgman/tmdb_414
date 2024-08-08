import { ActorCard } from "../../components/actorCards";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { CreatePoster, NowPlaying } from "../../components/movieCards";
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
let actorId = localStorage.getItem('actorId')
const actorCard = getData(`person/${actorId}`)
const actorMovies = getData(`person/${actorId}/movie_credits`)
const actorImages = getData(`person/${actorId}/images`)

Promise.all([actorCard, actorMovies, actorImages])
.then(([actorCard, actorMovies, actorImages]) => {
    ActorCard(actorCard.data)
    console.log(actorCard.data);

    reload(actorMovies.data.cast.slice(0,4), 'actor-movies', NowPlaying)

    reload(actorImages.data.profiles.slice(0,6), 'posters', CreatePoster)
})
.catch(error => console.error(error))
