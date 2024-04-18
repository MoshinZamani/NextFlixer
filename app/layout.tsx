import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import createUser from "@/lib/createUser";
import Footer from "./components/Footer";
const lb = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextFlexir",
  description: "Video Streaming Platform - github.com/moshinzamani",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (session) createUser(session);
  return (
    <html lang="en">
      <body className={lb.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          {<Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
