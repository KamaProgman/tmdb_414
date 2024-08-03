function reload(arr, place, Element) {
    let box = document.querySelector(`#${place}`);
    box.innerHTML = ""

    for (let item of arr) {
        let elem = Element(item);
        box.append(elem);
    }
}

function deBounce(fn, ms) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout); 
        timeout = setTimeout(() => {
            fn.apply(this, args); 
        }, ms);
    }
  }

export { reload, deBounce }
