import addToWatchlist from "@/lib/addToWatchlist";

export async function POST(req: Request) {
  const { watchlistId, movieIds } = await req.json();
  const addedMovies = await addToWatchlist(watchlistId, movieIds);
  return Response.json(addedMovies);
}
