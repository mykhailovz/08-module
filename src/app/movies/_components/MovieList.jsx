'use client';
import { useState } from 'react';
import MovieItem from './MovieItem';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

export default function MovieList({ movies = [], setOptimisticMovies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function onEditSelect(movie) {
    setSelectedMovie(movie);
    document.getElementById('edit-movie').showModal();
  }

  function onDeleteSelect(movie) {
    setSelectedMovie(movie);
    document.getElementById('delete-movie').showModal();
  }

  return (
    <div data-testid='movie-list' className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3'>
      {
        movies.map(movie => <MovieItem key={movie.id} movie={movie} onEditSelect={onEditSelect} onDeleteSelect={onDeleteSelect}/>)
      }
      <EditMovie
        movie={selectedMovie}
        setOptimisticMovies={setOptimisticMovies}
      />
      <DeleteMovie
        movie={selectedMovie}
        setOptimisticMovies={setOptimisticMovies}
      />
    </div>
  );
}
