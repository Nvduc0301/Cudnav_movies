import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAnimations } from '../../service/homepage';
import { MoviesData, AnimationMoviesContextType } from '@/types';

const AnimationMovContext = createContext<AnimationMoviesContextType | undefined>(undefined);

export const useAnimationMovContext = () => {
  const context = useContext(AnimationMovContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const AnimationMovProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [AnimationMovData, setAnimationMovData] = useState<MoviesData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAnimations();
        setAnimationMovData(data);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <AnimationMovContext.Provider value={{ AnimationMovData, error }}>
      {children}
    </AnimationMovContext.Provider>
  );
};
