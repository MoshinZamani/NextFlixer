import prisma from "./prisma";

export default async function getMovie(movieId: number) {
  try {
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });
    return movie;
  } catch (error) {
    if (error instanceof Error) console.error(error);
    return undefined;
  }
}
