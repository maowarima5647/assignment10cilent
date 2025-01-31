import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Gamecard from "./Components/Gamecard"
const AllReviews = () => {
 const loadgames  = useLoaderData()
 const [games,setGames] = useState(loadgames)
  return (
  <div>
  <div className="grid md:grid-cols-2 gap-4 my-20 mx-7">
      {
        games.map(game =><Gamecard game={game}
        games ={games}
        setGames ={setGames}
        ></Gamecard>)
       }

</div>

</div>

  );
};

export default AllReviews;
