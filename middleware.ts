import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  if (!token)
    return NextResponse.redirect(new URL("/api/auth/signin/google", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:paths*", "/movies/:paths*"],
};
