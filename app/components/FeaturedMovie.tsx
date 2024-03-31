const FeaturedMovie = () => {
  return (
    <div className="relative text-white">
      <img
        src="/assets/featured.jpg"
        alt="Featured Movie"
        className="w-full object-cover h-96"
      />
      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl font-bold mb-2">Featured Movie</h2>
        <button className="bg-red-600 px-6 py-2 rounded">Play</button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
