import { ReloadPosters, addPostersToSwiper } from "./components/posters";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";


getData('movie/now_playing')
    .then(res => {
        console.log(res.data);
        addPostersToSwiper(res.data.results);    
    })
    .catch(error => console.error(error));
