"use client";

import Link from "next/link";
// components/ProfileList.tsx
import React from "react";

// Adjust this type to match the structure of your profile objects

const ProfileList: React.FC<{
  profiles: Profile[];
  onDelete: (profileId: number, userId: number) => void;
  userId: number;
}> = ({ profiles, onDelete, userId }) => {
  return (
    <div className="flex flex-col w-1/2 border-4 border-black h-60 mt-4 bg-gray-800 text-white p-4">
      <h1 className="text-center text-2xl mb-2">list of profiles</h1>
      <div className="flex flex-col">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex justify-around bg-white py-2 text-black mb-2 rounded hover:bg-gray-200"
          >
            <h1>
              <Link href={`/profile/${profile.id}`}>{profile.name}</Link>
            </h1>
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt="Profile Avatar"
                style={{ width: 100, height: 100 }}
              />
            )}
            <button
              onClick={() => onDelete(profile.id, userId)}
              className="rounded p-2 bg-red-600 hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
