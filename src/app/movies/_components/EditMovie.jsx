import Modal from './Modal';
import MovieForm from './MovieForm';

export default function EditMovie({movie, onMovieEdit}) {
  function onSubmitEdit() {
    console.log('on-submit-edit-movie');
  }

  function onClose() {
    document.getElementById('edit-movie').close();
  }

  async function editMovie(movie) {
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

    return response.json();
  }

  const processForm = async (formData) => {
    const moviePayload = {
      id: movie.id,
      title: formData.title,
      poster_path: formData.image,
      overview: formData.description,
      runtime: +formData.runtime,
    };
  
    const addedMovie = await editMovie(moviePayload);
    console.log('[edit-movie: ', addedMovie);
    onMovieEdit(addedMovie);
    onClose();
  };

  return (
    <div>
      <Modal modalId="edit-movie">
        <MovieForm modalId="edit-movie" headerText="Edit Movie" onClose={onClose} onSubmit={onSubmitEdit} movie={movie} processForm={processForm} />
      </Modal>
    </div>
  );
}
