import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Props including watchlistId for which movies are being added
type Props = {
  watchlist: [number, string];
  movies: Movie[];
};

const SelectMovies = ({ watchlist, movies: initialMovies }: Props) => {
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([]);
  const [movies, setMovies] = useState(initialMovies);

  const fetchWatchlistMovies = async () => {
    try {
      const response = await fetch(`/api/movies?watchlistId=${watchlist[0]}`);

      if (response.ok) {
        const moviesToRemove: Movie[] = await response.json();
        const filteredMovies = initialMovies.filter(
          (movie) =>
            !moviesToRemove.some(
              (movieToRemove) => movieToRemove.id === movie.id
            )
        );
        setMovies(filteredMovies);
      } else {
        toast.error("Failed to fetch watchlist movies.");
        setMovies(initialMovies);
      }
    } catch (error) {
      console.error("Failed to fetch watchlist movies:", error);
      setMovies(initialMovies);
    }
  };

  useEffect(() => {
    fetchWatchlistMovies();
  }, [initialMovies]);

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
      const remainingMovies = movies.filter(
        (movie) => !selectedMovieIds.includes(movie.id)
      );
      setMovies(remainingMovies);
      setSelectedMovieIds([]);
      toast.success("Movies added to watchlist!");
    } else {
      toast.error("Failed to add movies to watchlist.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 pt-8">
      <ToastContainer />
      <h2 className="mb-4 text-white">
        Select movies to add to watchlist{" "}
        <Link
          href={"/"}
          className="text-green-500 font-bold underline hover:text-red-500"
        >
          {watchlist[1].replace(/%20/g, " ")}
        </Link>
      </h2>
      <div className="flex flex-wrap justify-center w-3/4 gap-4 mb-8">
        {movies.map((movie) => (
          <div
            onClick={() => toggleMovieSelection(movie.id)}
            className={`flex flex-col items-center bg-white p-2 border border-gray-300 rounded ${
              selectedMovieIds.includes(movie.id)
                ? "border-4 border-red-500"
                : "border-4 border-gray-300"
            }`}
            key={movie.id}
          >
            <img
              src={`/assets/movies/${movie.id}.jpg`}
              alt={movie.title}
              className="w-24 h-32 object-cover"
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
