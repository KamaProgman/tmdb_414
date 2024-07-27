function ActorsRating(item){
const actorRatingBox = document.createElement('div');
actorRatingBox.className = 'actor-rating-box';

const actorRating = document.createElement('div');
actorRating.className = 'actor-rating';

const actorFeatures = document.createElement('div');
actorFeatures.className = 'actor-features';

const actorName = document.createElement('h3');
actorName.className = 'actor-name';
actorName.textContent =  item.name;

const actorNameEn = document.createElement('h3');
actorNameEn.className = 'actor-name-en';
actorNameEn.textContent = item.original_name;

const actorAge = document.createElement('div');
actorAge.className = 'actor-age yellow';
actorAge.textContent = '32'

actorFeatures.appendChild(actorName);
actorFeatures.appendChild(actorNameEn);
actorFeatures.appendChild(actorAge);

const actorPlace = document.createElement('div');
actorPlace.className = 'actor-place';

const place = document.createElement('h3');
place.className = 'yellow';
place.textContent = item.popularity;

actorPlace.appendChild(place);

actorRating.appendChild(actorFeatures);
actorRating.appendChild(actorPlace);


return actorRating

}

export{ ActorsRating}