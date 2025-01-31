import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Updatereview from './Components/Updatereview';
const Mycard = ({ mycard,games,setGames }) => {
  const { _id, name, moment, rating } = mycard;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/game/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = games.filter(game => game._id !== _id);
              setGames(remaining);
            }
          });
      }
    });
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="table w-full md:w-10/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Table head */}
        <thead className="bg-orange-400 text-white">
          <tr>
            <th className="text-center py-3 px-4 text-lg font-semibold">Name</th>
            <th className="text-center py-3 px-4 text-lg font-semibold">Moment</th>
            <th className="text-center py-3 px-4 text-lg font-semibold">Rating</th>
            <th className="text-center py-3 px-4 text-lg font-semibold">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-gray-700">
          <tr className="hover:bg-gray-100 transition-all">
            <td className="py-2 px-4">{name}</td>
            <td className="py-2 px-4">{moment}</td>
            <td className="py-2 px-4">{rating}</td>
            <td className="py-2 px-4 text-center">


             <Link to={`updatereview/${_id}`}>
                <button className="btn join-item bg-orange-600 text-white py-1 px-4 rounded-lg hover:bg-orange-700 transition-all mr-2">Edit</button>
              </Link>
             
             
          
      <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-orange-600 text-white py-1 px-4 rounded-lg hover:bg-orange-700 transition-all">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mycard;
