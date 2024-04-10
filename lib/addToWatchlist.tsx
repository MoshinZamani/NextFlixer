import prisma from "./prisma";

const addToWatchlist = async (watchlistId: number, movieIds: [number]) => {
  const updatedWatchlist = await prisma.watchlist.update({
    where: { id: watchlistId },
    data: {
      movies: {
        connect: movieIds.map((id) => ({ id })),
      },
    },
  });
  console.log(`updatedWatchlist::${JSON.stringify(updatedWatchlist)}`);

  return updatedWatchlist;
};

export default addToWatchlist;
