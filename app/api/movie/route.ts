import getMovie from "@/lib/getMovie";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const movieId = searchParams.get("movieId");
  try {
    const movie = await getMovie(Number(movieId));
    return Response.json(movie);
  } catch (error) {
    if (error instanceof Error) console.error(error);
    return Response.json(undefined);
  }
}
