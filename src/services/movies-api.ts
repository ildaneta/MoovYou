import api from './api';

const MoviesAPI = {
  getMoviesListNowPlaying: async (api_key: string, page_number: number) => {
    return (await api).get(`movie/now_playing?api_key=${api_key}=en-US&page=${page_number}`)
  }
}

export default MoviesAPI;