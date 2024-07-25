function reload(arr, place, Element){
    let box = document.querySelector(`#${place}`)
    for(let item of arr) {
        let elem = Element(item)
        box.append(elem)
    }
}
export{reload}