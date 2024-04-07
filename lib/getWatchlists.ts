import prisma from "./prisma";

export default async function getWatchlists(profileId: number) {
  const watchlistsArray = await prisma.watchlist.findMany({
    where: {
      profileId: profileId,
    },
  });
  return watchlistsArray;
}
