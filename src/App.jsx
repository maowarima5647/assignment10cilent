import { NavLink, useLoaderData } from "react-router-dom"
import Gamecard from "./Components/Gamecard"
import { useState, useEffect } from "react"
import Carusel from "./Components/Carusel"

function App() {
  const lodedgames = useLoaderData()
  const [games, setGames] = useState([]) // State for storing games

 
  useEffect(() => {
    if (lodedgames && Array.isArray(lodedgames)) {
      setGames(lodedgames) // Set games to lodedgames data
    }
  }, [lodedgames]) // Re-run effect when lodedgames changes

  return (
    <>
      <Carusel />

      <div className="w-10/12 mx-auto center items-center pt-7 justify-center">
        <h1 className="text-orange-600 font-bold text-2xl items-center pb-5">The Ultimate Gamer's Playground</h1>
        <p>The game demands strategic team play, quick reflexes, and smart decision-making.
          Players compete in 5v5 matches with the goal of planting or defusing the bomb.</p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-20 mx-7">
        {
          games.map(game => (
            <Gamecard
              game={game}
              key={game._id}  // Use unique id from each game object
              setGames={setGames}
            />
          ))
        }
      </div>

      <div className="mt-7">
        <NavLink to='/allreview'>
          <h3 className="btn bg-orange-600 text-white text-center items-center">Show More</h3>
        </NavLink>
      </div>
    </>
  )
}

export default App;
