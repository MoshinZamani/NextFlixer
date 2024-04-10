import Link from "next/link";

const WatchlistMovies = async ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link
          href={`/movies/${movie.id}`}
          key={movie.id}
          className="bg-gray-800 p-2"
        >
          <img
            src={`/assets/movies/${movie.id}.jpg`}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="text-white">{movie.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default WatchlistMovies;
