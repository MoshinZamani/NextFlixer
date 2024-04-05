import prisma from "./prisma";

const getProfiles = async (userId: number) => {
  const profilesArray = await prisma.profile.findMany({
    where: {
      userId: userId,
    },
  });
  return profilesArray;
};

export default getProfiles;
