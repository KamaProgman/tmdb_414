function header() {
    let header = document.querySelector('header')
    header.innerHTML = `  <div class="left">
                <a href="/"><img src="/public/Логотип.svg" alt="" /></a>
                <img src="/public/media.png" alt="" />
            </div>
            <div class="center">
                <p>Афиша</p>
                <p>Медиа</p>
                <p>Фильмы</p>
                <p>Актеры</p>
                <p>Новости</p>
                <p>Подборки</p>
                <p>Категории</p>
            </div>
            <div class="right">
                <button class="search">
                    <img src="/public/Vector.svg" alt="" />
                </button>
                <button class="signin">Войти</button>
            </div>`
  }

  export {header}