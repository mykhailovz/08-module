'use client';

export default function MovieCounter({ movies = [] }) {
  return (
    <>
      {
        (movies.length > 0) ? <p>{movies.length} movies found</p> : null
      }
    </>
  );
}
