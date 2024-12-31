import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '@/services/api';

function MovieDetails() {
  // useParams hook extracts named parameters from current URL
  const { id } = useParams();  // If URL is /movie/tt1234567, id = "tt1234567"
  const [movie, setMovie] = useState(null);
 
  console.log(id);

  // This id is then used to fetch movie details
  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);
  
  // If the movie is not found, show a loading spinner
  if (!movie) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-xl text-gray-600">
        <div className="inline-block w-4 h-4 mr-2 rounded-full bg-gray-600 animate-bounce"></div>
        <div className="inline-block w-4 h-4 mr-2 rounded-full bg-gray-600 animate-bounce [animation-delay:0.2s]"></div>
        <div className="inline-block w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src={movie.Poster} 
          alt={movie.Title}
          className="w-full md:w-1/3 rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
          <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
          <p className="mb-2"><strong>Rating:</strong> {movie.imdbRating}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
