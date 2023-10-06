import { getMovies } from '../movies/actions';

import MovieListPage from './_components/MovieListPage';

import { defaultGenre } from '../../lib/genre';
import { defaultSortBy } from '../../lib/sortOptions';

export default async function Movies({searchParams}) {
  const genre = searchParams.genre || defaultGenre;
  const sortBy = searchParams?.sortBy || defaultSortBy;
  const query = searchParams?.query || '';

  const movies = await getMovies(genre, sortBy, query);
  
  return (
    <>
      <MovieListPage movies={movies} searchParams={{ genre, sortBy }} />
    </>
  );
}
