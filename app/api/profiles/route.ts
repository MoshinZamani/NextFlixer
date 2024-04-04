import getUser from "@/lib/getUser";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

type CreateRequest = {
  name: string;
  avatar?: string;
};

export async function POST(req: Request) {
  // Check if the user is authenticated
  const session = await getServerSession();
  if (!session || !session.user?.email) {
    return Response.json({ message: "Unauthorized" });
  }

  const { name, avatar } = await req.json();

  // Check if required fields are provided
  if (!name) {
    return Response.json({ message: "Profile name is required" });
  }

  try {
    const user = await getUser(session.user.email);

    if (!user) {
      return Response.json({ message: "User not found" });
    }

    // Create a new profile for the user
    const profile = await prisma.profile.create({
      data: {
        name,
        avatar,
        userId: user.id,
      },
    });

    return Response.json(profile);
  } catch (error) {
    console.error("Failed to create profile", error);
    return Response.json({ message: "Failed to create profile" });
  }
}
