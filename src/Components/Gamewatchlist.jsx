import React, { useState } from "react";

// Fake authentication hook (replace with your actual auth logic)
const useAuth = () => {
  return { user: { id: 1, name: "John Doe" } }; // Example user data
};

const GameWatchlist = () => {
  const { user } = useAuth(); // Get logged-in user data
  const [watchlist, setWatchlist] = useState([]);
  const [gameTitle, setGameTitle] = useState("");

  const handleAddGame = () => {
    setWatchlist([
      ...watchlist,
      { id: watchlist.length + 1, title: gameTitle, userId: user.id }
    ]);
    setGameTitle(""); // Clear the input field
  };

  const handleRemoveGame = (id) => {
    setWatchlist(watchlist.filter((game) => game.id !== id));
  };

  // Filter the watchlist to only show the games for the logged-in user
  const userWatchlist = watchlist.filter((game) => game.userId === user.id);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Your Game Watchlist</h2>
      <div className="mb-4 flex justify-center items-center gap-2">
        <input
          type="text"
          value={gameTitle}
          onChange={(e) => setGameTitle(e.target.value)}
          placeholder="Enter game title"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={handleAddGame}
          className="bg-orange-600 text-white p-2 rounded-md shadow-md hover:bg-orange-700 transition duration-200"
        >
          Add Game
        </button>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-orange-100 text-left text-lg font-semibold text-orange-700">Game Title</th>
            <th className="py-2 px-4 bg-orange-100 text-left text-lg font-semibold text-orange-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {userWatchlist.length === 0 ? (
            <tr>
              <td colSpan="2" className="py-2 px-4 text-center text-gray-500">No games added to your watchlist yet.</td>
            </tr>
          ) : (
            userWatchlist.map((game) => (
              <tr key={game.id} className="border-t border-gray-200 hover:bg-orange-50">
                <td className="py-2 px-4">{game.title}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleRemoveGame(game.id)}
                    className="text-red-600 hover:text-red-800 transition duration-200"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GameWatchlist;
