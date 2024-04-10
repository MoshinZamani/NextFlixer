import prisma from "./prisma";

export default async function getMovies(
  watchlistId?: number
): Promise<Movie[]> {
  if (!watchlistId) {
    try {
      const movies = await prisma.movie.findMany();
      return movies;
    } catch (error) {
      if (error instanceof Error) console.log(error);
      return [];
    }
  }
  try {
    const watchlist = await prisma.watchlist.findUnique({
      where: {
        id: watchlistId,
      },
      include: {
        movies: true,
      },
    });
    if (watchlist && watchlist.movies) {
      return watchlist.movies;
    }
    return [];
  } catch (error) {
    if (error instanceof Error) console.log(error);
    return [];
  }
}
