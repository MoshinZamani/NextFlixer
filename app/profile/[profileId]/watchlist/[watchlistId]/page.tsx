"use client";
import MovieList from "@/app/components/MovieList";
import SelectMovies from "@/app/components/SelectMovies";
import React, { useEffect, useState } from "react";

type Props = {
  params: { profileId: number; watchlistId: number };
};

const WatchlistMovies = ({ params: { profileId, watchlistId } }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const res = await fetch(`/api/movies?watchlistId=${watchlistId}`);
      const moviesArray = await res.json();
      setMovies(moviesArray);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setMovies([]);
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, [watchlistId]);

  return <WatchlistMovies movies={movies} />;
};

export default WatchlistMovies;
