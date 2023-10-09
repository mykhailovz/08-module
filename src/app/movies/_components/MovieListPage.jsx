'use client';

import { experimental_useOptimistic as useOptimistic } from 'react';

import MovieList from '../_components/MovieList';
import SearchForm from '../_components/SearchForm.jsx';
import GenreSelect from '../_components/GenreSelect.jsx';
import SortControl from '../_components/SortControl.jsx';
import MovieCounter from '../_components/MovieCounter.jsx';
import AddMovie from '../_components/AddMovie.jsx';

import {  getGenres } from '../../../lib/genre';

export default function MovieListPage({movies, searchParams}) {
  const [optimisticMovies, setOptimisticMovies] = useOptimistic(movies, (state, action) => {
    const { actionType, movie } = action;
    switch (actionType) {
      case 'add':
        return [movie, ...state];
      case 'delete':
        return state.filter(m => m.id !== movie.id);
      case 'edit':
        return state.map(m => m.id === movie.id ? movie : m);
      default:
        return state;
    }
  });

  const genres = getGenres();

  function handleAdd() {
    document.getElementById('add-movie').showModal();
  }

  return (
    <>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAdd}> + Add Movie Modal</button>
      <SearchForm />
      <GenreSelect genres={genres} genre={searchParams.genre} />
      <SortControl searchParams={searchParams} />
      <MovieCounter movies={optimisticMovies} />
      <MovieList
        movies={optimisticMovies}
        setOptimisticMovies={setOptimisticMovies}
      />
      <AddMovie
        setOptimisticMovies={setOptimisticMovies}
      />
    </>

  );
}
