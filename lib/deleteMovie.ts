import { disconnect } from "process";
import prisma from "./prisma";

export default async function deletedMovie(
  watchlistId: number,
  movieId: number
) {
  try {
    const deletedMovie = await prisma.watchlist.update({
      where: {
        id: watchlistId,
      },
      data: {
        movies: {
          disconnect: {
            id: movieId,
          },
        },
      },
    });
    return Response.json(deletedMovie);
  } catch (error) {
    if (error instanceof Error) console.log(error);
    return Response.json({});
  }
}
