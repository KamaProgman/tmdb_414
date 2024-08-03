import { getData } from "../libs/http"
import { deBounce, reload } from "../libs/utils"
import { SearchCards } from "./movieCards"



function searcher(category = 'movie') {
    let search = document.querySelector('#search')
    let tabs = document.querySelectorAll('.tab')

    tabs.forEach((tab) => {
        tab.onclick = () => {
            tabs.forEach(item => item.classList.remove('active'))
            tab.classList.add('active')
            searcher(tab.id)
        }
    })
    search.onkeyup = deBounce(() => {
        getData(`search/${category}?query=${search.value}`)
            .then(res => {
                reload(res.data.results, 'movies-container', SearchCards)
                console.log(res.data.results);
            })
            .catch(error => console.error(error))
    }, 500)
}


export { searcher }
