import React from "react";

const UpcomingGames = () => {
  const games = [
    {
      id: 1,
      name: "Elden Ring Expansion",
      releaseDate: "2025-03-15",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Cyberpunk 2077 DLC 2",
      releaseDate: "2025-04-20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Horizon Zero Dawn 2",
      releaseDate: "2025-06-10",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Upcoming Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="card bg-base-100 shadow-md">
              <figure>
                <img src={game.image} alt={game.name} />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{game.name}</h3>
                <p>Release Date: {game.releaseDate}</p>
                <button className="btn btn-primary mt-4">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
