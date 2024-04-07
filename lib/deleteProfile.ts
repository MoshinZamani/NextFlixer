import prisma from "./prisma";

const deleteProfile = async (profileId: number) => {
  const deleteProfile = await prisma.profile.delete({
    where: {
      id: profileId,
    },
  });
  return deleteProfile;
};

export default deleteProfile;
