import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/Movie/MovieList';

const MoviesPage = () => {
  const location = useLocation();
  const type = location.pathname.substring(1); // Lấy phần path sau dấu /

  return (
    <div>
      <MovieList type={type} />
    </div>
  );
};

export default MoviesPage;
