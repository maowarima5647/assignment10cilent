import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Mycard from "./Mycard";


const MyReviews = () => {
  
  const lodedgames = useLoaderData();

  const [games, setGames] = useState([]) 
  return (
    <div>
     <h2 className='text-orange-700 text-center py-7 text-2xl'> My Game Review </h2>
      {
      lodedgames.map(mycard =><Mycard
         key={lodedgames._id}
        
         setGames={setGames}
        
         mycard={mycard}
        ></Mycard>)
      }
    </div>
  );
};

export default MyReviews;
