import { getMovieById } from '../actions';

import MovieDetails from '../_components/MovieDetails';

export default async function MovieDetailsPage({params}) {
  const movie = await getMovieById(params.id);

  return (
    <>
      <MovieDetails movie={movie} />
    </>
  );
}
