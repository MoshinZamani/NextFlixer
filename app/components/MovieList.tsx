type Props = {
  movies: Movie[];
};

const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-800 p-2">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="text-white">{movie.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
