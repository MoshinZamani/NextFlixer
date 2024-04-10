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

  const handleAdd = async (e) => {
    e.preventDefault();
    // Make a POST request to your API endpoint
    const response = await fetch(`/api/watchlists/${watchlistId}/addMovie`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      // Handle successful movie addition
      setTitle("");
      setDescription("");
      alert("Movie added successfully!");
    } else {
      // Handle errors
      alert("Failed to add movie.");
    }
  };

  return <SelectMovies movies={movies} watchlist={watchlist} />;
};

export default AddMovieForm;
