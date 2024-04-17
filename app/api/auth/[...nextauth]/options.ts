import GoggleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { redirect } from "next/dist/server/api-utils";
import { request } from "http";

type GoogleProfile = {
  email: string;
  name: string;
  image?: string;
};

export const options = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: { strategy: "jwt" },
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ profile }: { profile: GoogleProfile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }
      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
        },
        update: {
          name: profile.name,
        },
      });
      return true;
    },
  },
};
