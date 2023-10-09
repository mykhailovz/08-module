import Modal from '../../../components/Modal';

export default function DeleteMovie({ movie, setOptimisticMovies }) {
  async function deleteMovie(movie) {
    const response = await fetch(`http://localhost:4000/movies/${movie?.id}`, {
      method: 'DELETE'
    });

    return response.status;
  } 

  async function handleDelete() {
    setOptimisticMovies({
      actionType: 'delete',
      movie
    });
    await deleteMovie(movie);
    document.getElementById('delete-movie').close();
  }

  function handleClose() {
    document.getElementById('delete-movie').close();
  }

  return (
    <>
      <Modal modalId="delete-movie">
        <div className='flex'>
          <h1 className="uppercase">Delete movie</h1>
          <button className='ml-16' onClick={handleClose}>X</button>
        </div>
        <p>Are you sure you want to delete the movie?</p>
        <button
          onClick={handleDelete}
          className="uppercase bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
            confirm
        </button>
      </Modal>
    </>
  );
}
