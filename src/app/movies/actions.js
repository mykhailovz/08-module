import { revalidatePath } from 'next/cache';

export async function getMovieById() {
  const response = await fetch(`http://localhost:4000/movies/${movieId}`, {
    cache: 'no-store'
  });
  const movie = await response.json();
  
  return movie;
}

export async function getMovies(genre, sortBy, searchQuery) {
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
        signal: abortController.signal,
        cache: 'no-store'
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

  revalidatePath('/movies');

  return editedMovie;
}

export async function deleteMovie(movie) {
  const response = await fetch(`http://localhost:4000/movies/${movie?.id}`, {
    method: 'DELETE'
  });

  revalidatePath('/movies');

  return response.status;
}


export async function addMovie(moviePayload) {
  const response = await fetch(`http://localhost:4000/movies`, {
    method: 'POST',
    body: JSON.stringify(moviePayload),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}
