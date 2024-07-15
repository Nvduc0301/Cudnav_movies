import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import SearchMovie from "../pages/SearchMovie";

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path: "/phim-le",
    page: MoviesPage,
  },
  {
    path: "/phim-bo",
    page: MoviesPage,
  },
  {
    path: "/hoat-hinh",
    page: MoviesPage,
  },
  {
    path: "/phim/:slug",  // Detail Film
    page: MovieDetailPage,
  },
  {
    path: "/tim-kiem/:keyword",  // Tìm kiếm phim
    page: SearchMovie,
  },
];
