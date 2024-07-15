import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add axios dependency

interface Movie {
  id: number;
  name: string;
  // Add other movie properties as needed
}

export default function SearchMovie() {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (keyword.trim() !== '') {
        try {
          const response = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${keyword}&limit=10`);
          setMovies(response.data.data.items);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, [keyword]);

  console.log(movies)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeyword(e.currentTarget.value);
    }
  };

  return (
    <div>
      <input
        className='text-black outline-none'
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search movies..."
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}