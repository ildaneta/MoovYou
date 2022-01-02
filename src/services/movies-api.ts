import {api, apiImage} from './api';

interface MoviesAPIProps {
  api_key: string;
  page_number: number;
  movie_id: number;
  image_url: string
}

const MoviesAPI = {
  getMoviesListNowPlaying: async ({api_key, page_number}: MoviesAPIProps) => {
    return (await api).get(`movie/now_playing?api_key=${api_key}=en-US&page=${page_number}`)
  },

  getMoviesGenreList: async ({api_key}: MoviesAPIProps) => {
    return (await api).get(`genre/movie/list?api_key=${api_key}&language=en-US`)
  },

  getMovieDetails: async ({api_key, movie_id}: MoviesAPIProps) => {
    return (await api).get(`movie/${movie_id}?api_key=${api_key}&language=en-US`)
  },

  getMovieCast: async ({api_key, movie_id}: MoviesAPIProps) => {
    return (await api).get(`movie/${movie_id}/credits?api_key=${api_key}&language=en-US`)
  },

  getImage: async ({image_url}: MoviesAPIProps) => {
    return (await apiImage).get(`${image_url}`)
  },
}

export default MoviesAPI;