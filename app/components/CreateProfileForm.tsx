"use client";

// components/CreateProfileForm.tsx
import React, { useState } from "react";

const CreateProfileForm: React.FC<{
  onCreate: (profileData: { name: string; avatar?: string }) => void;
}> = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ name, avatar });
    setName("");
    setAvatar("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Profile Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="avatar">Avatar URL (optional):</label>
        <input
          id="avatar"
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfileForm;
