"use client";
import React, { useState, useEffect } from "react";
import CreateProfileForm from "../components/CreateProfileForm";
// Assuming you have a component for displaying each profile
// import ProfileList from "../components/ProfileList"; // Adjust this import according to your file structure
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProfileList from "../components/ProfileList";

type NewProfileData = {
  name: string;
  avatar?: string;
};

const Profile: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [userId, setUserId] = useState<number>(0);

  // Fetch profiles
  const fetchProfiles = async () => {
    try {
      const userData = await fetch(`/api/user?email=${session?.user?.email}`);
      const user = await userData.json();
      const profilesArrayData = await fetch(`/api/profiles?userId=${user!.id}`);
      const profilesArray = await profilesArrayData.json();
      setUserId(user.id);
      setProfiles(profilesArray);
    } catch (err) {
      console.log("No profiles found");
      setProfiles([]);
      setUserId(0);
    }
  };

  // Call fetchProfiles when the component mounts
  useEffect(() => {
    fetchProfiles();
  }, []);

  // Handle profile creation - Adjust this function based on how your CreateProfileForm is implemented
  const handleProfileCreate = async (newProfileData: NewProfileData) => {
    const res = await fetch("/api/profiles/", {
      // Adjust this URL to your API endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProfileData),
    });
    if (res.ok) {
      const profilesArrayData = await fetch(`/api/profiles?userId=${userId}`);
      const profilesArray = await profilesArrayData.json();
      setProfiles(profilesArray);
    }
  };

  // Handle profile deletion
  const handleProfileDelete = async (profileId: number, userId: number) => {
    const confirmDelete = window.confirm(
      "All data will be lost. Are you sure?"
    );
    if (!confirmDelete) return undefined;
    const res = await fetch(`/api/profiles?profileId=${profileId}`, {
      // Adjust this URL to your API endpoint
      method: "DELETE",
    });
    if (res.ok) {
      const profilesArrayData = await fetch(`/api/profiles?userId=${userId}`);
      const profilesArray = await profilesArrayData.json();
      setProfiles(profilesArray);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <CreateProfileForm onCreate={handleProfileCreate} />
      <ProfileList
        profiles={profiles}
        onDelete={handleProfileDelete}
        userId={userId}
      />
    </div>
  );
};

export default Profile;
