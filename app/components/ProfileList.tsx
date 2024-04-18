"use client";

import Link from "next/link";
// components/ProfileList.tsx
import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import { useToast } from "react-toastify";

// Adjust this type to match the structure of your profile objects

const ProfileList: React.FC<{
  profiles: Profile[];
  onDelete: (profileId: number, userId: number) => void;
  userId: number;
}> = ({ profiles, onDelete, userId }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<number>(0);

  const handleDeleteClick = (profileId: number) => {
    setSelectedProfileId(profileId);
    setIsDialogOpen(true);
    console.log(isDialogOpen);
  };

  const onOk = () => {
    if (selectedProfileId != null) {
      onDelete(selectedProfileId, userId);
    }
    setIsDialogOpen(false);
  };
  const onClose = () => {
    setIsDialogOpen(false);
  };

  if (profiles.length === 0) {
    return (
      <div className="flex flex-col w-1/2 border-4 border-black h-60 mt-4 bg-gray-800 text-white p-4">
        <h1 className="text-center text-2xl mb-2 ">
          There is no profile to show. Create one.
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-1/2 border-4 border-black h-60 mt-4 bg-gray-800 text-white p-4">
      <h1 className="text-center text-2xl mb-2 ">list of profiles</h1>

      <div className="flex flex-col">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex justify-around bg-white py-2 text-black mb-2 rounded hover:bg-green-200"
          >
            <h1>
              <Link
                href={`/profile/${profile.id}`}
                className="font-bold underline"
              >
                {profile.name}
              </Link>
            </h1>
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt="Profile Avatar"
                style={{ width: 100, height: 100 }}
              />
            )}
            <button
              onClick={() => handleDeleteClick(profile.id)}
              className="button rounded p-2 bg-red-600 hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <ConfirmDialog title="Confirm Delete" onClose={onClose} onOk={onOk}>
          Are you sure you want to delete this profile? This action cannot be
          undone.
        </ConfirmDialog>
      )}
    </div>
  );
};

export default ProfileList;
