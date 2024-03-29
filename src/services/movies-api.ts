import api from './api';

const API_KEY = "d3fa3eff0688ce3997fe1ce003a4cca1"

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

  getMoviesTopRated: async (page_number: number) => {
    return (await api).get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page_number}`)
  },

  getMoviesSearch: async (page_number: number, query: string) => {
    return (await api).get(`search/movie?api_key=${API_KEY}&language=en-US&page=${page_number}&include_adult=true&query=${query}`)
  }
}



export default MoviesAPI;

