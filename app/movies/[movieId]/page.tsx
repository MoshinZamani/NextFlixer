import Link from "next/link";

type Props = {
  params: { movieId: string };
};

const MovieDetails: React.FC<Props> = ({ params: { movieId } }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <h1>{movieId}</h1>
    </div>
  );
};

export default MovieDetails;
