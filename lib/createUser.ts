import prisma from "./prisma";
import { Session } from "next-auth";

export default async function createUser(session: Session) {
  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  });
  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        email: session.user!.email!,
        name: session.user!.name! || "",
      },
    });
  }
}
