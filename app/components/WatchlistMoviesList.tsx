import Link from "next/link";

const WatchlistMoviesList = ({ movies }: { movies: Movie[] }) => {
  const deleteMovie = async (movieId: number) => {
    console.log("Deleting movie with ID:", movieId);
    // Your deletion logic here
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-800 p-2">
          <Link href={`/movies/${movie.id}`}>
            <div className="cursor-pointer">
              <img
                src={`/assets/movies/${movie.id}.jpg`}
                alt={movie.title}
                className="w-full h-auto"
              />
              <div className="text-white">{movie.title}</div>
            </div>
          </Link>
          <button
            onClick={() => deleteMovie(movie.id)}
            className="mt-2 p-1 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default WatchlistMoviesList;
