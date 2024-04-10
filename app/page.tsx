import FeaturedMovie from "@/app/components/FeaturedMovie";
import MovieList from "@/app/components/MovieList";
import getMovies from "@/lib/getMovies";

const Home: React.FC = () => {
  return (
    <div>
      <FeaturedMovie />
      <div className="p-4">
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
