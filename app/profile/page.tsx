"use client";
import React, { useState, useEffect } from "react";

import CreateProfileForm from "../components/CreateProfileForm";
// Assuming you have a component for displaying each profile
// import ProfileList from "../components/ProfileList"; // Adjust this import according to your file structure
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import getUser from "@/lib/getUser";
import ProfileList from "../components/ProfileList";
import getProfiles from "@/lib/getProfiles";

const Profile: React.FC = () => {
  const { data: session } = useSession();
  if (!session) redirect("/api/auth/signin/google");
  const [profiles, setProfiles] = useState<Profile[]>([]); // Use the correct type instead of any if available

  // Fetch profiles
  const fetchProfiles = async () => {
    try {
      const userData = await fetch(`/api/user?email=${session.user?.email}`);
      const user = await userData.json();
      const profilesArrayData = await fetch(`/api/profiles?userId=${user!.id}`);
      const profilesArray = await profilesArrayData.json();
      setProfiles(profilesArray);
    } catch (err) {
      console.log("No profiles found");
      setProfiles([]);
    }
  };

  // Call fetchProfiles when the component mounts
  useEffect(() => {
    fetchProfiles();
  }, []);

  // Handle profile creation - Adjust this function based on how your CreateProfileForm is implemented
  const handleProfileCreate = async (newProfileData) => {
    const res = await fetch("/api/profiles/create", {
      // Adjust this URL to your API endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProfileData),
    });
    if (res.ok) {
      getProfiles(); // Refresh the list of profiles
    }
  };

  // Handle profile deletion
  const handleProfileDelete = async (profileId) => {
    const res = await fetch(`/api/profiles/delete/${profileId}`, {
      // Adjust this URL to your API endpoint
      method: "DELETE",
    });
    if (res.ok) {
      getProfiles(); // Refresh the list of profiles
    }
  };

  return (
    <div>
      <CreateProfileForm onCreate={handleProfileCreate} />
      <ProfileList profiles={profiles} onDelete={handleProfileDelete} />
    </div>
  );
};

export default Profile;
