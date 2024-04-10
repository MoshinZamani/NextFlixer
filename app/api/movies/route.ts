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
    const watchlistId = searchParams.get("watchlidtId");
    const movies = await getMovies(Number(watchlistId));
    return Response.json(movies);
  } catch (error) {
    if (error instanceof Error) console.error(error);
    return Response.json([]);
  }
}
