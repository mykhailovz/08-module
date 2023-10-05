import { getMovies } from '../movies/actions';

import MovieListPage from './_components/MovieListPage';

export default async function Movies() {
  const movies = await getMovies('all');

  console.log('movies', movies);
  return (
    <>
      <MovieListPage />
    </>
  );
}
