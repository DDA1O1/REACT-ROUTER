import { useState, useEffect } from 'react';
import { searchMovies } from '@/services/api';
import MovieGrid from '@/components/MovieGrid';

function Home() {
  const [movies, setMovies] = useState([]);
  const DEFAULT_MOVIES = 'avengers';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(DEFAULT_MOVIES);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Popular Movies</h1>
      <MovieGrid movies={movies} />
    </div>
  );
}

export default Home;
