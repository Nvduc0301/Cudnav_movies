import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSingleMovies } from '../../service/homepage';
import { MoviesData, SingleMoviesContextType } from '@/types';

const SingleMovContext = createContext<SingleMoviesContextType | undefined>(undefined);

export const useSingleMovContext = () => {
  const context = useContext(SingleMovContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const SingleMovProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [singlemMovData, setsinglemMovData] = useState<MoviesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getSingleMovies();
        setsinglemMovData(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <SingleMovContext.Provider value={{ singlemMovData, loading, error }}>
      {children}
    </SingleMovContext.Provider>
  );
};
