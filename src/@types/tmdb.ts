export interface TMDBResponse {
  total_pages: number;
  total_results: number;
  page: number;
  results: TMDBMovie[];
}

export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string; //! 포스터 이미지
  genre_ids: number[]; //! 영화 장르
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string; //! 포스터 이미지
  release_date: string; //! yyyy-mm-dd
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBMovieDetail extends TMDBMovie {
  belongs_to_collection: null | string;
  budget: number;
  genres: TMDBGenre[];
  homepage: string;
  imdb_id: string; // 'tt32044730',
  origin_country: string[]; //[ 'US' ],
  production_companies: string[]; //[],
  production_countries: string[]; // [],
  revenue: number; //0,
  runtime: number; // 92, in min
  spoken_languages: TMDBSpokenLang[];
  status: string; //"Released";
  tagline: string; //"";
}

export interface TMDBGenre {
  id: number;
  name: string;
}
export interface TMDBSpokenLang {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface PageProps<Params> {
  params: Promise<Params>;
}

export const tmdbOptions = (method: string = "GET") => ({
  method,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
});
