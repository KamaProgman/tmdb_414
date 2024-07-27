import { NowPlaying } from "../../components/nowPlaying";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";



  getData('movie/now_playing')
  .then( res => {
    reload(res.data.results, 'movies', NowPlaying)
  })
  .catch( error => console.error(error))