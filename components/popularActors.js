function PopularActors(item) {
    const actorBox = document.querySelector('.celebs');


const actor = document.createElement('div');
const div = document.createElement('div')
const actorRank = document.createElement('p');
const div2 = document.createElement('div')
const actorName = document.createElement('p');
const actorNameEn = document.createElement('p');
const actorAge = document.createElement('p');

actor.classList.add('actor-info');
actorRank.classList.add('rank');
actorName.classList.add('name');
actorNameEn.classList.add('name-en');
actorAge.classList.add('age');

actor.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.profile_path})`
actor.style.backgroundSize = "contain"; 
actor.style.backgroundRepeat = "no-repeat";
actorRank.textContent = '1-е место';
actorName.textContent = item.name;
actorNameEn.textContent = item.original_name;
actorAge.textContent = '57 лет';

div.append(actorRank)
div2.append(actorName, actorNameEn, actorAge)
actor.append(div, div2)
actorBox.append(actor)

return actor



}
export{PopularActors}
