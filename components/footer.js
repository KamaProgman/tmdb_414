function footer(){
    let footer = document.querySelector('footer')
    footer.innerHTML = `  <div class="container footer_container">
            <img src="/social_media.svg" alt="" />
            <nav>
                <a href="#">Афиша</a>
                <a href="#">Новости</a>
                <a href="#">Персоны</a>
                <a href="#">Рейтинги</a>
                <a href="#">Рецензии</a>
                <a href="#">Каталог фильмов</a>
            </nav>
            <p>2020 © Kinoarea. Все права защищены</p>
            <a class="confidance" href="#">Политика конфиденциальности</a>
        </div>`
}
export{footer}