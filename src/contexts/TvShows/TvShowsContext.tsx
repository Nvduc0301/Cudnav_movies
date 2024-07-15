import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTvShows } from '../../service/homepage';
import { MoviesData, TvShowsContextType } from '@/types';

const TvShowsContext = createContext<TvShowsContextType | undefined>(undefined);

export const useTvShowsContext = () => {
  const context = useContext(TvShowsContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const TvShowsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [TvShowsData, setTvShowsData] = useState<MoviesData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTvShows();
        setTvShowsData(data);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <TvShowsContext.Provider value={{ TvShowsData, error }}>
      {children}
    </TvShowsContext.Provider>
  );
};
