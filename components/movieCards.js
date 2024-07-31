function NowPlaying(item) {
    const moviesBox = document.querySelector('.movies-box');
    const movieContainer = document.createElement('div');
    const img = document.createElement('img');
    const movieInfo = document.createElement('div');
    const rating = document.createElement('div');
    const title = document.createElement('h3');
    const genre = document.createElement('p');

    movieContainer.className = 'movie';
    movieInfo.className = 'movie-info';
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

    return movieContainer

}

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

    img.src = "https://image.tmdb.org/t/p/original" + item.poster_path; 
    img.alt = item.title;

    title.textContent = item.title;
    subtitle.textContent = item.original_title;
    description.textContent = 'Боевик, триллер, драма, криминал, детектив, ...';
    rating.textContent = item.vote_average.toFixed(1);

    details.append(title, subtitle, description)
    card.append(img, details, rating)
    moviesBox.append(card)

    return card
}

export { NowPlaying, SearchCards}