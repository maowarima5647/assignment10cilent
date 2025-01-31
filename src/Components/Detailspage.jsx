import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../firebase/Authprovider';  // For accessing logged-in user info

const Detailspage = () => {
    const { name, difficulty, moment, feature, photo, rating, genre, _id } = useLoaderData();  // Review details from loader
   
    const { user } = useContext(AuthContext);  // Logged-in user info
    const navigate = useNavigate();

    // Fetch the review by ID from the backend API
    useEffect(() => {
        fetch(`/api/game/${_id}`)
            .then((response) => response.json())
            .then((data) => {
                // Optionally, you can handle the fetched data if needed
                console.log(data);
            })
            .catch((error) => console.error('Error fetching review:', error));
    }, [_id]);

    // Handle "Add to Watchlist"
    const handleAddToWatchlist = () => {
        if (!user) {
            navigate('/login');  // Redirect to login if the user is not logged in
            return;
        }

      

        
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">{name}</h2>
            <img src={photo} alt={name} className="mx-auto mb-6 rounded-lg" style={{ width: '300px', height: 'auto' }} />
            <p className="text-lg text-gray-700 mb-2"><strong>Review Description:</strong> {difficulty}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Rating:</strong> {rating}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Genre:</strong> {genre}</p>
            <p className="text-lg text-gray-700 mb-6"><strong>Reviewer:</strong> {feature}</p>

            {user && (
                <div className="flex justify-center">
                   <NavLink to='/gamewishlist'>
                   <button className="bg-orange-600 text-white p-2 rounded-md shadow-md hover:bg-orange-700 transition duration-200"
        
                        onClick={handleAddToWatchlist} >
                      Add to Watchlist
                    </button>
                    </NavLink> 
                </div>
            )}
        </div>
    );
};

export default Detailspage;
