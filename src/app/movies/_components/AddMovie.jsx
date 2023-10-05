'use client';
import Modal from '../../../components/Modal';
import MovieForm from './MovieForm';

export default function AddMovie({onMovieAdd}) {
  function onSubmitAdd() {
    console.log('on-submit-add-movie');
  }

  function onClose() {
    document.getElementById('add-movie').close();
  }

  async function addMovie(moviePayload) {
    const response = await fetch(`http://localhost:4000/movies`, {
      method: 'POST',
      body: JSON.stringify(moviePayload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  }

  const processForm = async (formData) => {
    const moviePayload = {
      title: formData.title,
      poster_path: formData.image,
      overview: formData.description,
      runtime: +formData.runtime,
    };

    const addedMovie = await addMovie(moviePayload);
    onMovieAdd(addedMovie);
    onClose();
  }

  return (
    <div>
      <Modal modalId="add-movie">
        <MovieForm modalId="add-movie" headerText="Add Movie" onSubmit={onSubmitAdd} onClose={onClose} processForm={processForm} />
      </Modal>
    </div>
  );
}
