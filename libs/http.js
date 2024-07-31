import axios from "axios"

let apiUrl = 'https://api.themoviedb.org/3'
let apiKey = "70116f76a0ebc547719e856d86d92f9e"
let accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDExNmY3NmEwZWJjNTQ3NzE5ZTg1NmQ4NmQ5MmY5ZSIsIm5iZiI6MTcyMTMwMDEzNC42MTIxOTUsInN1YiI6IjY2MzYyMjNjNDcwZWFkMDEyMjEyM2UxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuJpOZNApIcXanEhN9wNgVAcTmHfkB7qSqNZjhr0yB8"

export async function getData(endpoint) {
  try {
    let res = await axios.get(`${apiUrl}/${endpoint}`, {
      params: {
        language: 'ru-RU',
        page: 1
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    return res
  } catch (error) {
    console.log(error);
    throw error
  }
}

