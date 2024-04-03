"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <nav className="flex justify-center items-center p-4 bg-black text-white relative">
      <div className="text-2xl font-bold flex-1">NextFlixer</div>

      <div className="hidden md:flex flex-1 justify-end w-full items-center">
        <div className="flex">
          <div className="px-4">Home</div>
          {session ? (
            <>
              <Link href="/profile">Create Profile</Link>
              <div onClick={() => signOut()} className="px-4 cursor-pointer">
                Sign Out
              </div>
            </>
          ) : (
            <div onClick={() => signIn()} className="px-4">
              Sign In
            </div>
          )}
        </div>
        <div className="w-1/6 h-1/6 rounded-full ml-20 flex justify-end">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt="User"
              width={40}
              height={40}
              className="hidden md:block aspect-square rounded-full"
            />
          ) : (
            <div className="border-white border-2 rounded-full p-2">
              <FaRegUser />
            </div>
          )}
        </div>
      </div>

      {/* User icon and clickable area for small screens */}
      <div
        className=" z-50 rounded-full md:hidden"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt="User"
            width={40}
            height={40}
            className="md:block aspect-square rounded-full"
          />
        ) : (
          <div className="border-white border-2 rounded-full p-2">
            <FaRegUser />
          </div>
        )}
      </div>

      {/* Conditional rendering for the menu based on isMenuVisible state, for small screens */}
      <div
        className={`${
          isMenuVisible ? "absolute" : "hidden"
        } top-8 right-8 text-white md:hidden bg-gray-500 z-40 w-1/4 rounded`}
      >
        <div className="px-4 py-2">Home</div>
        {session ? (
          <>
            <Link href="/profile" className="px-4 py-2">
              Create Profile
            </Link>
            <div onClick={() => signOut()} className="px-4 py-2">
              Sign Out
            </div>
          </>
        ) : (
          <div onClick={() => signIn()} className="px-4">
            Sign In
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
