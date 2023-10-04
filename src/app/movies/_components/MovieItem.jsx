import { Link, useSearchParams } from 'react-router-dom';

import { defaultGenre } from '../lib/genre.js'
import { sortByOptions } from '../lib/sortOptions.js';

export default function MovieItem({ movie, onEditSelect, onDeleteSelect }) {
  const [params] = useSearchParams();
  const query = params.get('query') ?? '';
  const genre = params.get('genre') ?? defaultGenre;
  const sortBy = params.get('sortBy') || sortByOptions["Release Date"];

  function handleOnDelete() {
    onDeleteSelect(movie);
  }

  function handleOnEdit() {
    onEditSelect(movie);
  }


  return (
    <div>
      <details className="dropdown mb-2">
        <summary className="m-1 btn">...</summary>
        <ul data-testid='sort-by-list' className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a onClick={handleOnEdit}>Edit</a>
          </li>
          <li>
            <a onClick={handleOnDelete}>Delete</a>
          </li>
        </ul>
      </details>
      <Link to={`movies/${movie?.id}?query=${query}&genre=${genre}&sortBy=${sortBy}`}>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-9/12" src={movie.poster_path} alt={movie.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2" data-testid='movie-title'>{movie.title}</div>
            <div className="font-bold text-xl mb-2" data-testid='movie-release-date'>{movie.release_date}</div>
            <div className="px-6 pt-4 pb-2">
              {
                movie?.genres?.map(genre => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={genre}>{genre}</span>)
              }
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
