import prisma from "./prisma";

export default async function getUser(email: string) {
  try {
    // Retrieve the user from the database
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (err) {
    if (err instanceof Error) console.log(err);
    return null;
  }
}
