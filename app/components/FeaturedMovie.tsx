import getMovie from "@/lib/getMovie";

const FeaturedMovie = async () => {
  const random = Math.floor(Math.random() * 21);
  const movie = await getMovie(random);

  return (
    <div className="relative text-white">
      <img
        src={`/assets/movies/${random}.jpg`}
        alt="Featured Movie"
        className="w-full object-none h-96"
      />
      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl font-bold pl-2 mb-2 text-green-800">
          Featured Movie : &nbsp;{" "}
          <span className="font-semibold text-shadow text-red-800">
            {movie?.title}
          </span>
        </h2>
        <button className="button pl-2 mr-2 mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Play
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
