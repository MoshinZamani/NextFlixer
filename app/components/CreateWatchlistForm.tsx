"use client";

import { useState } from "react";

type Props = {
  onCreate: ({ name, profileId }: { name: string; profileId: number }) => void;
  profileId: number;
};

function CreateWatchlistForm({ onCreate, profileId }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ name, profileId });
    setName("");
  };

  return (
    <div className="flex bg-gray-800 text-white border-2 border-red w-1/2 justify-center py-3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="mr-2">
          Watchlist Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 rounded text-gray-600"
          placeholder="Enter Watchlist Name"
        />

        <button className="ml-4 bg-green-500 p-2 rounded" type="submit">
          Create Watchlist
        </button>
      </form>
    </div>
  );
}

export default CreateWatchlistForm;
