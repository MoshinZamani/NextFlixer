import deleteMovie from "@/lib/deleteMovie";
import getMovies from "@/lib/getMovies";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (!req) {
    try {
      const movies = await getMovies();
      return Response.json(movies);
    } catch (error) {
      if (error instanceof Error) console.error(error);
      return Response.json([]);
    }
  }
  try {
    const watchlistId = searchParams.get("watchlistId");
    const movies = await getMovies(Number(watchlistId));
    return Response.json(movies);
  } catch (error) {
    if (error instanceof Error) console.error(error);
    return Response.json([]);
  }
}

export async function DELETE(req: Request) {
  const { watchlistId, movieId } = await req.json();
  const deletedMovie = await deleteMovie(watchlistId, movieId);
  return Response.json(true);
}
