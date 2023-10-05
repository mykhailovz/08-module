'use client';

import MovieList from '../_components/MovieList';
import SearchForm from '../_components/SearchForm.jsx';
import GenreSelect from '../_components/GenreSelect.jsx';
import SortControl from '../_components/SortControl.jsx';
import MovieCounter from '../_components/MovieCounter.jsx';
import AddMovie from '../_components/AddMovie.jsx';

import { defaultGenre, getGenres } from '../../../lib/genre';
import { sortByOptions } from '../../../lib/sortOptions.js';

export default function MovieListPage({movies}) {
  const query = '';
  const genre =  defaultGenre;
  const sortBy =  sortByOptions["Release Date"];

  const genres = getGenres();

  function setMovies() {}

  function onSearch(searchQuery) {
    console.log('[you just searched movie] : ', searchQuery);
    setSearchParams({ query: searchQuery })
  }

  function onGenreSelect(genre) {
    console.log('[you just select genre] : ', genre);
    setSearchParams({ query, genre, sortBy });
  }

  function onSortBySelect(selectedSortBy) {
    console.log('[you select sortBy]: ', selectedSortBy);
    setSearchParams({ query, genre, sortBy: sortByOptions[selectedSortBy] })
  }

  function handleAdd() {
    document.getElementById('add-movie').showModal();
  }

  function onMovieAdd(movie) {
    setMovies([movie, ...movies]);
  }

  return (
    <>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAdd}> + Add Movie Modal</button>
      <SearchForm defaultSearchQuery={query} onSearch={onSearch} />
      <GenreSelect genres={genres} genre={genre} onSelect={onGenreSelect} />
      <SortControl sortBy={sortBy} onSelect={onSortBySelect} />
      <MovieCounter movies={movies} />
      <MovieList movies={movies} setMovies={setMovies} />
      <AddMovie onMovieAdd={onMovieAdd} />
    </>

  );
}
