import api from './api';

const {API_KEY} = process.env;

const MoviesAPI = {
  getMoviesListNowPlaying: async (page_number: number) => {
    return (await api).get(`movie/now_playing?api_key=${API_KEY}&en-US&page=${page_number}`)
  },

  getMoviesGenreList: async () => {
    return (await api).get(`genre/movie/list?api_key=${API_KEY}&language=en-US`)
  },

  getMovieDetails: async (movie_id: number) => {
    return (await api).get(`movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
  },

  getMovieCast: async (movie_id: number) => {
    return (await api).get(`movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`)
  },

}

export default MoviesAPI;

