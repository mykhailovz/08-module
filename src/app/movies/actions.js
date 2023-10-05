export async function getMovieById() {
  const response = await fetch(`http://localhost:4000/movies/${movieId}`);
  const movie = await response.json();
  
  return movie;
}

export async function getMovies(genre, searchQuery, sortBy) {
  const abortController = new AbortController();

  let path = 'movies';
  if (genre === 'all' && !searchQuery) {
    path += `?sortBy=${sortBy}&sortOrder=desc`
  } else if (searchQuery) {
    path += `?search=${searchQuery}&searchBy=title`
  } else {
    path += `?searchBy=genres&filter=${genre}&sortBy=${sortBy}&sortOrder=desc`;
  }

  try {
    const response = await fetch(
      `http://localhost:4000/${path}`,
      {
        signal: abortController.signal
      }
    );
    const moviesResponse = await response.json();
    
    return moviesResponse.data;
  } catch (error) {
    console.error('error happened: ', error);
    return []
  }
}

export async function editMovie(movie) {
  const response = await fetch(`http://localhost:4000/movies`, {
    method: 'PUT',
    body: JSON.stringify({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      runtime: movie.runtime
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const editedMovie = await response.json();

  return editedMovie;
}

export async function deleteMovie(movie) {
  const response = await fetch(`http://localhost:4000/movies/${movie?.id}`, {
    method: 'DELETE'
  });

  return response.status;
}
