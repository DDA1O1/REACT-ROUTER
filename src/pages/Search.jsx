import { useState } from 'react';
import { searchMovies } from '@/services/api';
import MovieGrid from '@/components/MovieGrid';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error('Error searching movies:', error);
        // Could add error state here if you want to show error message to user
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="p-2 border rounded w-full md:w-1/2"
        />
        <button 
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      <MovieGrid movies={movies} />
    </div>
  );
}

export default Search;
