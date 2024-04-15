import React, { useState } from "react";

// Props including watchlistId for which movies are being added
type Props = {
  watchlist: [number, string];
  movies: Movie[];
};

const SelectMovies = ({ watchlist, movies }: Props) => {
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([]);

  const toggleMovieSelection = (movieId: number) => {
    setSelectedMovieIds((prevSelected) =>
      prevSelected.includes(movieId)
        ? prevSelected.filter((id) => id !== movieId)
        : [...prevSelected, movieId]
    );
  };

  const addToWatchlist = async () => {
    const response = await fetch(`/api/watchlists/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        watchlistId: Number(watchlist[0]),
        movieIds: selectedMovieIds,
      }),
    });

    if (response.ok) {
      setSelectedMovieIds([]);
      alert("Movies added to watchlist!");
    } else {
      alert("Failed to add movies to watchlist.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 pt-8">
      <h2 className="mb-4 text-white">
        Select all movies to add to watchlist{" "}
        <span className="text-green-500 font-bold">{watchlist[1]}</span>
      </h2>
      <div className="flex flex-wrap justify-center w-3/4 gap-4 mb-8">
        {movies.map((movie) => (
          <div
            className={`flex flex-col items-center bg-white p-2 border border-gray-300 rounded ${
              selectedMovieIds.includes(movie.id)
                ? "border-4 border-red-500"
                : "border border-gray-300"
            }`}
            key={movie.id}
          >
            <img
              src={`/assets/movies/${movie.id}.jpg`}
              alt={movie.title}
              className="w-24 h-32 object-cover"
              onClick={() => toggleMovieSelection(movie.id)}
            />
            <p className="text-center w-24 break-words mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
      <button
        className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={addToWatchlist}
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default SelectMovies;
