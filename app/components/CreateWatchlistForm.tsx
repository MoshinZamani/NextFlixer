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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Watchlist Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <button type="submit">Create Watchlist</button>
    </form>
  );
}

export default CreateWatchlistForm;
