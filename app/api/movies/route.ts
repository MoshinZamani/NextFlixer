import getMovies from "@/lib/getMovies";

export async function GET() {
  try {
    const movies = await getMovies();
    return Response.json(movies);
  } catch (error) {
    if (error instanceof Error) console.error(error);
    return Response.json([]);
  }
}
