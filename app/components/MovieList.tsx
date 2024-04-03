import Link from "next/link";
import { movies } from "../../data/movies";

const MovieList = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link
          href={`/movies/${movie.id}`}
          key={movie.id}
          className="bg-gray-800 p-2"
        >
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="text-white">{movie.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
