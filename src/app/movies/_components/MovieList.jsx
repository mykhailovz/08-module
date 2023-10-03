import { useState } from 'react';
import MovieItem from './MovieItem';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

export default function MovieList({ movies = [], setMovies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function onEditSelect(movie) {
    setSelectedMovie(movie);
    document.getElementById('edit-movie').showModal();
  }

  function onDeleteSelect(movie) {
    setSelectedMovie(movie);
    document.getElementById('delete-movie').showModal();
  }

  function onMovieEdit(movie) {
    setMovies(movies.map(m => m.id === movie.id ? movie : m));
  }

  function onMovieDelete(movie) {
    setMovies(movies.filter(m => m.id !== movie.id));
  }

  return (
    <div data-testid='movie-list' className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3'>
      {
        movies.map(movie => <MovieItem key={movie.id} movie={movie} onEditSelect={onEditSelect} onDeleteSelect={onDeleteSelect}/>)
      }
      <EditMovie movie={selectedMovie} onMovieEdit={onMovieEdit} />
      <DeleteMovie movie={selectedMovie} onMovieDelete={onMovieDelete} />
    </div>
  );
}
