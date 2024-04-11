"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import WatchlistMoviesList from "@/app/components/WatchlistMoviesList";

const WatchlistMovies = () => {
  const params = useParams<{ profileId: string; watchlistId: string }>();
  const { watchlistId } = params;

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

  return (
    <WatchlistMoviesList movies={movies} watchlistId={Number(watchlistId)} />
  );
};

export default WatchlistMovies;
