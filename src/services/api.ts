import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const apiImage = axios.create({
  baseURL: "https://image.tmdb.org/t/p/w500/"
})

export {api, apiImage};