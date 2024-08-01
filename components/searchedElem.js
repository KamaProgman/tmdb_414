export function createSearchedElement(item) {
    const searchedElem = document.createElement('div');
    const elemCont = document.createElement('div');
    const persImgBox = document.createElement('div');
    const persImg = document.createElement('img');
    const elemInfo = document.createElement('div')
    const personNameElem = document.createElement('h2');
    const year = document.createElement('p')
    persImg.classList.add('pers-img');
    
    searchedElem.className = 'searched-elem';
    elemCont.className = 'elem-cont';
    persImgBox.className = 'pers-img-box';
    elemInfo.className = 'elem-info'
    personNameElem.className = 'person-name';
    year.className = 'year'

    persImg.src = item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : `https://image.tmdb.org/t/p/original${item.profile_path}`

    personNameElem.textContent = item.title ? item.name : item.name
    year.textContent = item.release_date

    persImgBox.appendChild(persImg);
    elemInfo.append(personNameElem, year)
    elemCont.appendChild(persImgBox);
    elemCont.append(elemInfo)
    searchedElem.appendChild(elemCont); 

    return searchedElem; 
}

