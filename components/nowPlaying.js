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

    return movieContainer

}
export { NowPlaying }