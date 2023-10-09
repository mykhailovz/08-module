'use client';
import Modal from '../../../components/Modal';
import MovieForm from './MovieForm';

import { addMovie } from '../actions';

export default function AddMovie({onMovieAdd}) {
  function onSubmitAdd() {
    console.log('on-submit-add-movie');
  }

  function onClose() {
    document.getElementById('add-movie').close();
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
