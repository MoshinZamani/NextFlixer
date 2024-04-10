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
      // Handle success, such as clearing selected movies
      setSelectedMovieIds([]);
      alert("Movies added to watchlist!");
    } else {
      // Handle error
      alert("Failed to add movies to watchlist.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 pt-8">
      <h2 className="mb-4">
        Select all movies to add to watchlist{" "}
        <span className="text-green-800 font-bold">{watchlist[1]}</span>
      </h2>
      <div className="flex flex-wrap w-3/4 gap-10 mb-8">
        {movies.map((movie) => (
          <div
            className="flex flex-col justify-center items-center"
            key={movie.id}
          >
            <img
              key={movie.id}
              src={`/assets/movies/${movie.id}.jpg`}
              alt={movie.title}
              style={{
                width: "150px",
                height: "200px",
                objectFit: "cover",
                border: selectedMovieIds.includes(movie.id)
                  ? "8px solid red"
                  : "3px solid gray",
                cursor: "pointer",
              }}
              onClick={() => toggleMovieSelection(movie.id)}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        onClick={addToWatchlist}
      >
        Add
      </button>
    </div>
  );
};

export default SelectMovies;
