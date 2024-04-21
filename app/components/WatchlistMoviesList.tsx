"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WatchlistMoviesList = ({
  movies,
  watchlistId,
  profileId,
}: {
  movies: Movie[];
  watchlistId: number;
  profileId: number;
}) => {
  const [allMovies, setAllMovies] = useState<Movie[]>(movies);

  useEffect(() => {
    setAllMovies(movies);
  }, [movies]);

  const deleteMovie = async (movieId: number) => {
    try {
      await fetch("/api/movies", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId, watchlistId }),
      });
      const newMoviesArrayData = await fetch(
        `/api/movies?watchlistId=${watchlistId}`
      );
      const newMoviesArray = await newMoviesArrayData.json();
      setAllMovies(newMoviesArray);
    } catch (error) {
      if (error instanceof Error) console.error(error);
      setAllMovies(movies);
    }
  };
  if (!allMovies.length) {
    return (
      <div className="flex justify-center bg-gray-800 text-white py-10">
        <h2>No movies have been added to this watchlist yet.</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-wrap">
      {allMovies.map((movie) => (
        <div
          key={movie.id}
          className="relative bg-gray-800 p-2 w-64 h-96 flex flex-col justify-between mr-2 mb-2"
        >
          <div>
            <img
              src={`/assets/movies/${movie.id}.jpg`}
              alt={movie.title}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2">
              <div className="text-white">{movie.title}</div>
              <div className="flex justify-end">
                <Link
                  href={`/movies/${movie.id}`}
                  className="mr-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Play Now
                </Link>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="p-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchlistMoviesList;
