"use client";
import Link from "next/link";
import YouTube from "react-youtube";

type Props = {
  params: { movieId: string };
};

const MovieDetails: React.FC<Props> = ({ params: { movieId } }: Props) => {
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
  return <YouTube opts={opts} videoId="EXeTwQWrcwY" onReady={onReady} />;
};

export default MovieDetails;
