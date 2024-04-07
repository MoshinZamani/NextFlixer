"use client";

// components/ProfileList.tsx
import React from "react";

// Adjust this type to match the structure of your profile objects

const ProfileList: React.FC<{
  profiles: Profile[];
  onDelete: (profileId: number, userId: number) => void;
  userId: number;
}> = ({ profiles, onDelete, userId }) => {
  return (
    <div className="flex flex-col w-1/2 justify-center border-2 border-black">
      <h1>list of profiles</h1>
      <div className="flex flex-col">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex justify-between">
            <h3>{profile.name}</h3>
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt="Profile Avatar"
                style={{ width: 100, height: 100 }}
              />
            )}
            <button onClick={() => onDelete(profile.id, userId)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
