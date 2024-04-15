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
    <div className="flex bg-gray-800 text-white border-2 border-red w-1/2 justify-center py-3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="mr-2">
          Profile Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter profile name"
          className="p-2 rounded  text-gray-600"
        />

        <button
          className="ml-4 bg-green-500 p-2 rounded button font-bold"
          type="submit"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
