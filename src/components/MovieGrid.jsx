import { Link } from 'react-router-dom';

function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        
          <div className="border rounded p-4 hover:shadow-lg">
            <img 
              src={movie.Poster} 
              alt={movie.Title}
              className="w-full h-[400px] object-cover"
            />
            {/* Link to the movie details page by making the title a link */}
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <h2 className="mt-2 text-lg font-bold hover:text-blue-500">{movie.Title}</h2>
            </Link>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        
      ))}
    </div>
  );
}

export default MovieGrid;