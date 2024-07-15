// type context for 4 data

export type Movie = {
  name: string ;
  lang: string;
  year: string;
  time: string;
  poster_url: string;
  quality: string;
  slug: string;
};

export type MoviesData = {
  items: Movie[];
  titlePage: string;
};

export type SingleMoviesContextType = {
  singlemMovData: MoviesData | null;
  loading: boolean;
  error: Error | null;
};

export type SeriesMoviesContextType = {
  seriesMovData: MoviesData | null;
  error: Error | null;
};

export type AnimationMoviesContextType = {
  AnimationMovData: MoviesData | null;
  error: Error | null;
};

export type TvShowsContextType = {
  TvShowsData: MoviesData | null;
  error: Error | null;
};

// type film update

export type UpdateDataItem = {
  name: string;
  year: string;
  poster_url: string;
  slug: string
}


// type for movie detail
// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
// }

// export interface Country {
//   id: string;
//   name: string;
//   slug: string;
// }

// export interface MovieDetails {
//   name: string;
//   quality: string;
//   lang: string;
//   year: string;
//   content: string;
//   country: Country[];
//   time: string;
//   director: string;
//   actor: string;
//   category: Category[];
// }
