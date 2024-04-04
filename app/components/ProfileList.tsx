"use client";

// components/ProfileList.tsx
import React from "react";

// Adjust this type to match the structure of your profile objects
type Profile = {
  id: number;
  name: string;
  avatar?: string;
};

const ProfileList: React.FC<{
  profiles: Profile[];
  onDelete: (profileId: number) => void;
}> = ({ profiles, onDelete }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt="Profile Avatar"
              style={{ width: 100, height: 100 }}
            />
          )}
          <button onClick={() => onDelete(profile.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
