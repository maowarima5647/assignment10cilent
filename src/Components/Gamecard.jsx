import React from 'react';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';

const Gamecard = ({ game, games, setGames }) => {
  const { _id, name, difficulty, moment, feature, photo, rating } = game;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/game/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaining = games.filter((game) => game._id !== _id);
              setGames(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row items-center justify-center mx-5 p-5 space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-1/3">
        <figure>
          <img
            src={photo}
            alt="Game"
            className="w-full h-48 object-cover rounded-lg"
          />
        </figure>
        <NavLink to={`/details/${_id}`}>
          <button className="mt-5 w-full lg:w-auto btn bg-orange-600 text-white">
            Explore Details
          </button>
        </NavLink>
      </div>

      <div className="card-body w-full lg:w-2/3">
        <h2 className="card-title">Name: {name}</h2>
        <p>Difficulty: {difficulty}</p>
        <p>Moment: {moment}</p>
        <p>Feature: {feature}</p>
        <p>Rating: {rating}</p>
      </div>

      <div className="card-actions w-full lg:w-auto sm:w-auto">
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
          <button className="btn join-item  w-full ">View</button>

          <Link to={`/updatereiew/${_id}`}>
            <button className="btn join-item  w-full ">Edit</button>
          </Link>

          <button
            onClick={() => handleDelete(_id)} 
            className="btn join-item bg-orange-600  w-full sm:w-auto"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gamecard;
