function ActorCard(item) {
    const actorBox = document.querySelector('.actor-card-box')

    actorBox.innerHTML = `
    <div class="movie-img-box">
        <img src="https://image.tmdb.org/t/p/original${item.profile_path}" alt="">
    </div>

    <div class="elem-cont-box">
     <h1 class="movie-name">${item.name}</h1>
        <p>${item.name}</p>
         <div class="flex-left">
    <div class="info-item">
        <span class="label">Информация</span>
        <span class="value">Биография</span>
    </div>
    <div class="info-item">
        <span class="label">Место рождения:</span>
        <span class="value"><a href="#">${item.place_of_birth}</a></span>
    </div>
    <div class="info-item">
        <span class="label">Дата рождения:</span>
        <span class="value">${item.birthday}</span>
    </div>
    <div class="info-item">
        <span class="label">Карьера:</span>
        <span class="value">${item.known_for_department}</span>
    </div>
    </div>
    </div>

    `
}
export{ActorCard}