import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSeries } from '../../service/homepage';
import { MoviesData, SeriesMoviesContextType } from '@/types';

const SeriesMovContext = createContext<SeriesMoviesContextType | undefined>(undefined);

export const useSeriesMovContext = () => {
  const context = useContext(SeriesMovContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const SeriesMovProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [seriesMovData, setSeriesMovData] = useState<MoviesData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getSeries();
        setSeriesMovData(data);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <SeriesMovContext.Provider value={{ seriesMovData, error }}>
      {children}
    </SeriesMovContext.Provider>
  );
};
