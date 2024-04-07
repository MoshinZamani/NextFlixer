import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import getWatchLists from "@/lib/getWatchlists";

type CreateRequest = {
  name: string;
  avatar?: string;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const profileId = searchParams.get("profileId");
  const watchListsArray = await getWatchLists(Number(profileId));
  return Response.json(watchListsArray);
}

export async function POST(req: Request) {
  // Check if the user is authenticated
  const session = await getServerSession();
  if (!session || !session.user?.email) {
    return Response.json({ message: "Unauthorized" });
  }

  const { name, profileId } = await req.json();

  // Check if required fields are provided
  if (!name) {
    return Response.json({ message: "Profile name is required" });
  }

  try {
    // Create a new profile for the user
    const profile = await prisma.watchlist.create({
      data: {
        name,
        profileId: Number(profileId),
      },
    });

    return Response.json(profile);
  } catch (error) {
    console.error("Failed to create profile", error);
    return Response.json({ message: "Failed to create profile" });
  }
}
