const FeaturedMovie = async () => {
  const random = Math.ceil(Math.random() * 4);
  const movies = [
    "The Green Mile",
    "The Avengers - End Game",
    "The God Father",
    "The Mist",
  ];

  return (
    <div className="relative text-white">
      <img
        src={`/assets/featuredmovies/${random}.jpg`}
        alt="Featured Movie"
        className="w-full object-cover object-top h-96"
      />
      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl font-bold pl-2 mb-2 text-green-800">
          Featured Movie : &nbsp;{" "}
          <span className="font-semibold text-shadow text-red-800">
            {movies[random - 1]}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default FeaturedMovie;
