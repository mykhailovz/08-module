import { Link } from 'react-router-dom';

export default function MovieDetails({movie, onClick}) {
  if (!movie) {
    return;
  }

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={movie.poster_path} alt={movie.title} data-testid='movie-image' />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{movie.vote_average}</h5>
        <h6>{movie.release_date} - {movie.runtime}</h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" data-testid='movie-description'>{movie.overview}</p>
        <Link to="/">
          <p>Search movies: <span onClick={onClick}>🔍</span></p>
        </Link>
      </div>
    </div>
  );
}
