import { getData } from "./libs/http";


getData('movie/now_playing')
  .then(res => console.log(res))
  .catch(error => console.error(error)) 