"use client";
import { useState } from "react";

interface Props {
  userId: number;
}

const CreateProfileForm: React.FC<Props> = ({ userId }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const profile = { userId, name, avatar };
    const res = await fetch("http://localhost:3000/api/profiles/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Profile Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfileForm;
