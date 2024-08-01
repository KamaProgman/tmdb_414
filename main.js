import { footer } from "./components/footer";
import { header } from "./components/header";
import { ActorsRating } from "./components/actorsRating";
import { NowPlaying } from "./components/nowPlaying";
import { PopularActors } from "./components/popularActors";
import { addPostersToSwiper } from "./components/posters";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";
import { createSearchedElement } from "./components/searchedElem";
header()
footer()

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


let btnAllMovies = document.querySelector('.all-movies')
btnAllMovies.onclick = () => {
 window.location.replace('/pages/NowPlayingMovies/')
}

getData('movie/now_playing')
.then(res => {
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

let tabs = document.querySelectorAll('.tab');
let search = document.querySelector('#search');

tabs.forEach((tab) => {
    tab.onclick = () => {
        tabs.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');
        searcher(tab.id); 
        console.log(tab.id);
    }
});

function debounce(fn, ms) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout); 
        timeout = setTimeout(() => {
            fn.apply(this, args); 
        }, ms);
    }
}

function searcher(category) {
    search.onkeyup = debounce((e) => {
        getData(`search/${category}?query=${search.value}`)
            .then(res => reload(res.data.results.slice(0,10), 'reload-box', createSearchedElement))
            .catch(error => console.error(error));
    }, 500); 
}

// const genres = document.querySelectorAll('.search-tab')

// genres.forEach((item) => {
//     item.onclick = () => {
//         console.log(item.id);
//     }
// })

// function genre (category){
//     getData(`movie/${category}`)
//     .then(res => console.log(res))
//     .catch(error => console.error(error))
// }

