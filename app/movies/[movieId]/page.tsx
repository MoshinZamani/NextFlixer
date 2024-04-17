"use client";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/navigation";

type Props = {
  params: { movieId: string };
};

const MovieDetails: React.FC<Props> = ({ params: { movieId } }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  const router = useRouter();

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
      <div
        onClick={() => router.back()}
        className="underline hover:text-green-300"
      >
        ⬅️Back
      </div>
      <div className="flex flex-col items-center">
        <YouTube opts={opts} videoId={movie?.videoId} onReady={onReady} />
        <p className="mt-4">{movie?.description}</p>
      </div>
    </>
  );
};

export default MovieDetails;
