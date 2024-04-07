import prisma from "./prisma";

export default async function deleteWatchlist(watchlistId: number) {
  try {
    const deletedWatchlist = await prisma.watchlist.delete({
      where: {
        id: watchlistId,
      },
    });
    return deletedWatchlist;
  } catch (error) {
    console.error(error);
  }
}
