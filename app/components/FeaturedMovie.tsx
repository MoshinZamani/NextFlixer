const FeaturedMovie = () => {
  const random = Math.floor(Math.random() * 21);

  return (
    <div className="relative text-white">
      <img
        src={`/assets/movies/${random}.jpg`}
        alt="Featured Movie"
        className="w-full object-none h-96"
      />
      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl font-bold mb-2">Featured Movie</h2>
        <button className="mr-2 mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Play
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
