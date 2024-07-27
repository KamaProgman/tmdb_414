function ActorsRating(item){
    // <div class="person-side">
    // <div>
    // <p class="name">Тинто Брасс</p>
    // <p class="name-en">Tinto Brass</p>
    // <p class="age">87 лет</p>
    // </div>
    // <div><p class="rank">3-е место</p></div>
    // </div>

    const actorBox = document.querySelector('.side')

    const actorInfo = document.createElement('div')
    const div = document.createElement('div')
    const actorName = document.createElement('p')
    const actorNameEn = document.createElement('p')
    const actorAge = document.createElement('p')
    const div2 = document.createElement('div')
    const actorRank = document.createElement('p')

    actorInfo.classList.add('person-side')
    actorName.classList.add('name')
    actorNameEn.classList.add('name-en')
    actorAge.classList.add('age')
    actorRank.classList.add('rank')

    actorName.textContent = item.name
    actorNameEn.textContent = item.name
    actorAge.textContent = '87 лет'
    actorRank.textContent = '3-е место'

    div.append(actorName, actorNameEn, actorAge)
    div2.append(actorRank)
    actorInfo.append(div, div2)
    actorBox.append(actorInfo)

    return actorInfo
    }
    
    export{ ActorsRating}