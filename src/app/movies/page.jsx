import { getMovies } from '../movies/actions';

import MovieList from '../movies/_components/MovieList';

export default async function Movies() {
  const movies = await getMovies('all');

  console.log('movies', movies);
  return (
    <>
      <div>List of movies</div>
      <MovieList movies={movies} />
    </>
  );
}
