import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, name, avatar } = req.body;
  const result = await prisma.profile.create({
    data: {
      userId: userId,
      name: name,
      avatar: avatar,
    },
  });
  res.json(result);
}
