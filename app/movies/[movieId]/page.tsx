"use client";
import getMovie from "@/lib/getMovie";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

type Props = {
  params: { movieId: string };
};

const MovieDetails: React.FC<Props> = ({ params: { movieId } }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  const findMovie = async () => {
    try {
      const foundMovieData = await fetch(`/api/movie?movieId=${movieId}`);
      const foundMovie = await foundMovieData.json();
      setMovie(foundMovie);
    } catch (error) {
      if (error instanceof Error) console.error(error);
      setMovie(undefined);
    }
  };
  useEffect(() => {
    findMovie();
  });

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (e: { target: { pauseVideo: () => void } }) => {
    e.target.pauseVideo();
  };
  return (
    <>
      <YouTube opts={opts} videoId={movie?.videoId} onReady={onReady} />
      <p>{movie?.description}</p>
    </>
  );
};

export default MovieDetails;
