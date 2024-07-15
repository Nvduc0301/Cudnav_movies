import React, { useEffect, useState } from "react";
import { getMovieList } from "../../service/homepage";
import MovieCard from "./MovieCard";
import { Movie } from "../../types";
import MoviePagination, { PaginateProps } from "./MoviePagination";

interface MovieListProps {
  type: string;
}

const ITEMS_PER_PAGE = 30; // Số lượng phần tử hiển thị trên mỗi trang

const typeToDisplayName = (type: string) => {
  const typeMap: { [key: string]: string } = {
    "phim-le": "Phim Lẻ",
    "phim-bo": "Phim Bộ",
    "hoat-hinh": "Hoạt Hình",
    "phim-da-luu": "Phim Đã Lưu",
  };
  return typeMap[type] || type;
};

const MovieList: React.FC<MovieListProps> = ({ type }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pagination, setPagination] = useState<PaginateProps>({
    totalPages: 0,
    currentPage: 1,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const startPage = (pagination.currentPage - 1) * 3 + 1;
        const requests = [startPage, startPage + 1, startPage + 2].map((p) =>
          getMovieList(type, p)
        );
        const responses = await Promise.all(requests);

        const allItems = responses.flatMap((response) => response.items);
        const totalItems = responses[0].params.pagination.totalItems;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        setMovies(allItems);
        setPagination((prev) => ({
          ...prev,
          totalItems,
          totalPages,
        }));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [type, pagination.currentPage]);

  const onPageChange = (newPage: number) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: newPage,
    }));
  };

  return (
    <div className="py-5">
      <h1 className="text-3xl font-bold mb-5">{typeToDisplayName(type)}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
            {movies.map((movie, index) => (
              <div className="h-fit" key={index}>
                <MovieCard item={movie} />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-10">
            <MoviePagination
              totalPages={pagination.totalPages}
              currentPage={pagination.currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
