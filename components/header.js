function header() {
    let header = document.querySelector('header')
    header.innerHTML = `  <div class="left">
                <a href="/"><img src="/Логотип.svg" alt="" /></a>
                <img src="/media.png" alt="" />
            </div>
            <div class="center">
                <a href="#">Афиша</a>
                <a href="#">Медиа</a>
                <a href="#">Фильмы</a>
                <a href="#">Актеры</a>
                <a href="#">Новости</a>
                <a href="#">Подборки</a>
                <a href="#">Категории</a>
            </div>
            <div class="right">
                <button class="search">
                    <img src="/Vector.svg" alt="" />
                </button>
                <button class="signin">Войти</button>
            </div>
            <div class="modal-bg">
        <div class="movie-site-icon"><img  src="/Логотип.svg" alt=""></div>
            <div class="search-container">
                <div class="search-bar">
                    <input id="search" type="text" placeholder="Search...">
                    <button><img src="/Поиск.png" alt=""></button>
                </div>
            </div>
            <div class="tabs">
                <div id="movie" class="tab active">Movies</div>
                <div id="person" class="tab">People</div>
                <div id="tv" class="tab">TV</div>
            </div>
            <div class="movies-container" id="movies-container">
                
            </div>
            <button class="close"><img src="/Vector.png" alt=""></button>
          </div>
            `
  }

  export {header}