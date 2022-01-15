export interface MovieDetailsDTO {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: null,
  budget: number,
  genres: Array<
    {
      id: number, 
      name: string
    }
  >,
  homepage: string,
  id: number,
  imdb_id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: Array<
    {
      id: number,
      logo_path: string,
      name: string,
      origin_country: string
    }
  >,
  production_countries: Array<
    {
      iso_3166_1: string,
      name: string
    }
  >,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: Array<
    {
      english_name: string,
      iso_639_1: string,
      name: string
    }>,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}