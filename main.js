import { ActorsRating } from "./components/actorsRating";
import { footer } from "./components/footer";
import { header } from "./components/header";
import { NowPlaying, SearchCards } from "./components/movieCards";
import { PopularActors } from "./components/popularActors";
import { addPostersToSwiper } from "./components/posters";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";
header()
footer()

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



let tabs = document.querySelectorAll('.tab')
let search = document.querySelector('#search')
tabs.forEach((tab) => {
  tab.onclick = () => {
    tabs.forEach(item => item.classList.remove('active'))
    tab.classList.add('active')
    searcher(tab.id)
  }
})


function searcher(category = 'movie'){
  console.log(category);
  search.onkeyup = deBounce(() =>
   {
    getData(`search/${category}?query=${search.value}`)
    .then(res => {
      reload(res.data.results, 'movies-container', SearchCards)
      console.log(res.data.results);
    })
    .catch(error => console.error(error))
  }, 500)
}
searcher()


function deBounce(fn, ms) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout); 
      timeout = setTimeout(() => {
          fn.apply(this, args); 
      }, ms);
  }
}


let btnAllMovies = document.querySelector('.all-movies')

getData('movie/now_playing')
    .then(res => {
        console.log(res.data);   
        reload(res.data.results.slice(0,8), 'movies', NowPlaying)
    })
    .catch(error => console.error(error));


   btnAllMovies.onclick = () => {
    window.location.replace('/pages/NowPlayingMovies/')
  }

  getData('movie/upcoming')
  .then(res => {
    reload(res.data.results.slice(0,4), 'upcoming-movies', NowPlaying)
    addPostersToSwiper(res.data.results);    
})
.catch(error => console.error(error));

  getData('movie/popular')
.then(res => {
  reload(res.data.results.slice(0,4), 'popular-movies', NowPlaying)

})
.catch(error => console.error(error))

getData('person/popular')
.then(res => {
  console.log(res.data);
  reload(res.data.results.slice(0,2), 'popular-actors', PopularActors)
  reload(res.data.results.slice(2,6), 'actors-box', ActorsRating)

})
.catch(error => console.error(error))