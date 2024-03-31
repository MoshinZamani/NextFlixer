// pages/index.js
import Navbar from "@/app/components/Navbar";
import FeaturedMovie from "@/app/components/FeaturedMovie";
import MovieList from "@/app/components/MovieList";

// Example movies data
const movies = [
  { id: 1, title: "Movie 1", thumbnail: "/assets/movie1.jpg" },
  // Add more movie objects
];

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <FeaturedMovie />
      <div className="p-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
