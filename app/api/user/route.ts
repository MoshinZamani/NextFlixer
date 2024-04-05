import getUser from "@/lib/getUser";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const user = await getUser(email!);
  return Response.json(user);
}
