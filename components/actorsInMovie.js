function ActorsInMovie(item) {
    const moviesBox = document.querySelector('.actors-box');
    const movieContainer = document.createElement('div');
    const img = document.createElement('img');
    const movieInfo = document.createElement('div');
    const actorName = document.createElement('p');
    const actorNameEn = document.createElement('p');
    const actorAge = document.createElement('p');

    movieContainer.className = 'movie';
    movieInfo.className = 'movie-actors';
    actorName.classList.add('name');
    actorNameEn.classList.add('name-en');
    actorAge.classList.add('age');
    img.className = 'actor-img'

    img.src = "https://image.tmdb.org/t/p/original" + item.profile_path
    actorName.textContent = item.name;
    actorNameEn.textContent = item.original_name
    actorAge.textContent = item.character;

    movieInfo.append(actorName, actorNameEn, actorAge)
    movieContainer.append(img, movieInfo)
    moviesBox.append(movieContainer)


    return movieContainer
}


export { ActorsInMovie }