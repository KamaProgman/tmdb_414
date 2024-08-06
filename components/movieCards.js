function NowPlaying(item) {
    const moviesBox = document.querySelector('.movies-box');
    const movieContainer = document.createElement('div');
    const img = document.createElement('img');
    const movieInfo = document.createElement('div');
    const rating = document.createElement('div');
    const title = document.createElement('h3');
    const genre = document.createElement('p');

    movieContainer.className = 'movie';
    movieInfo.className = 'movie-inform';
    rating.className = 'rating';

    img.src = "https://image.tmdb.org/t/p/original" + item.poster_path
    img.alt = item.title;
    rating.textContent = item.vote_average.toFixed(1);
    title.textContent = item.title;
    genre.textContent = item.release_date;

    movieInfo.append(rating, title, genre)
    movieContainer.append(img, movieInfo)
    moviesBox.append(movieContainer)

    movieContainer.onmouseenter = () =>{
        BgImg(item)
    }
   
    movieContainer.onclick = () => {
        let movieName = document.querySelector('.movie__name')
        movieName.textContent = item.title
        localStorage.setItem('movieId', item.id);
        localStorage.setItem('backdropPath', item.backdrop_path); 
        location.href('/pages/movie/');
        BgImg(item);
    };
      

    return movieContainer

}

function CreatePoster(item) {
    // const postersBox = document.querySelector('.posters')
    console.log(item);
    const poster = document.createElement('div');
    const img = document.createElement('img');
    poster.className = 'poster';
    img.src = "https://image.tmdb.org/t/p/original" + item.file_path;

    poster.append(img);
    // postersBox.append(poster)

    return poster;
}

// function getMovieCard(movieId) {
//     getData(`movie/${movieId}`)
//     .then(res => {
//         reload(res.data.results.slice(0,4), 'movies', NowPlaying)
//     })
//     .catch(error => console.error(error))
// }
function BgImg(item) {
    let body = document.querySelector('.bg-img');
    body.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${item.backdrop_path}")`;
    body.style.backgroundSize = "cover"; 
    body.style.backgroundRepeat = "no-repeat";
}

function SearchCards(item) {
    const moviesBox = document.querySelector('.movies-container')
    const card = document.createElement('div');
    const img = document.createElement('img');
    const details = document.createElement('div');
    const title = document.createElement('h2');
    const subtitle = document.createElement('p');
    const description = document.createElement('p');
    const rating = document.createElement('div');
    card.className = 'card';
    details.className = 'details';
    rating.className = 'rating-search green';

    img.src =  item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : `https://image.tmdb.org/t/p/original${item.profile_path}`
    img.alt = item.title;

    title.textContent = item.title ? item.title : item.name
    subtitle.textContent = item.original_title ? item.original_title : item.original_name
    description.textContent = 'Боевик, триллер, драма, криминал, детектив, ...';
    // rating.textContent = item.vote_average.toFixed(1) ? item.vote_average.toFixed(1) : item.gender;

    details.append(title, subtitle, description)
    card.append(img, details, rating)
    moviesBox.append(card)

    return card
}

function MovieCard (item){
    const movieBox = document.querySelector('.movie-card-box')

    movieBox.innerHTML = `
    <div class="movie-img-box">
        <img src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">
    </div>

    <div class="elem-cont-box">
        <h1 class="movie-name">${item.title}</h1>
        <p>${item.original_title}</p>
        <div class="description">${item.overview}</div>

        <div class="icon-box">
            <button> Смотреть трейлер</button>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_VK-512.png"
        alt="vk" class="social_media_icon social-media" />
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png"
        alt="insta" class="social_media_icon social-media"/>
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Facebook-Outline-1024.png"
        alt="facebook" class="social_media_icon social-media" />
        </div>
    </div>

    `
}

 

export { NowPlaying, SearchCards, MovieCard, CreatePoster}