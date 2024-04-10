"use client";
import SelectMovies from "@/app/components/SelectMovies";
import React, { useEffect, useState } from "react";

type Props = {
  params: { watchlist: [number, string] };
};

const AddMovieForm = ({ params: { watchlist } }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch("/api/movies");
    const moviesArray = await res.json();
    setMovies(moviesArray);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <SelectMovies movies={movies} watchlist={watchlist} />;
};

export default AddMovieForm;
