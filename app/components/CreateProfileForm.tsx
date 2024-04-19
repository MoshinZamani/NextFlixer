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
    <div className="flex flex-col bg-gray-800 text-white border-2 border-red w-1/2 md:flex-row justify-center px-2 py-3">
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
          className="sm:mt-2 mb-2 p-2 rounded  text-gray-600"
        />

        <button
          className="md:ml-4 bg-green-500 p-2 rounded button font-bold"
          type="submit"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
