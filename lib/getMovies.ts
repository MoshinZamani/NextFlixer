import prisma from "./prisma";

export default async function getMovies(): Promise<Movie[]> {
  try {
    const movies = await prisma.movie.findMany();
    return movies;
  } catch (error) {
    if (error instanceof Error) console.log(error);
    return [];
  }
}
