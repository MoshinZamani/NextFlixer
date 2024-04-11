type Movie = {
  id: number;
  title: string;
  description: string;
  videoId: string;
};

type Profile = {
  id: number;
  userId: number;
  name: string;
  avatar: string | null;
  watchlists: Watchlist[];
};

type Watchlist = {
  id: number;
  profileId: number;
  name: string;
  movies: Movie[]; // Removed the incorrect @relation attribute
};
