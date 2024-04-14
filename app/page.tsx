import FeaturedMovie from "@/app/components/FeaturedMovie";
import MovieList from "@/app/components/MovieList";

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
